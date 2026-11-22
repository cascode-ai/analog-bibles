# Detailed solution - grsim-11-14

Find the bias, then refer each noise source to a differential input voltage with the input shorted (voltage generator) and with the input open (current generator). For a source in one half, only its differential component reaches the differential output, so each half can be analysed with the half circuit, whose tail node is an ac ground. For part (b), integrate the input-referred density over the noise bandwidth of the single-pole response. SPICE `.noise` runs check both parts.

### Step 1 — Bias point

With both bases near ground, the tail node sits at $-V_{BE(\text{on})}-I_ER_E\approx-0.72$ V, so

$$
I_{tail}=\frac{-0.72\ \mathrm V-(-10\ \mathrm V)}{100\ \mathrm{k\Omega}}=92.8\ \mu\mathrm A,\qquad
I_C=\frac{\beta}{\beta+1}\frac{I_{tail}}{2}=45.9\ \mu\mathrm A,\qquad I_B=0.459\ \mu\mathrm A,
$$

$$
g_m=\frac{I_C}{kT/q}=1.77\ \mathrm{mS},\qquad \frac1{g_m}=566\ \Omega,\qquad \frac1{2g_m}=283\ \Omega.
$$

### Step 2 — Differential gain

In the half circuit the emitter resistor is in series with $1/g_m$, so the gain from a differential input to the differential output is

$$
A_v=\frac{R_C}{\dfrac1{g_m}+R_E+\dfrac{r_b}{\beta+1}}=\frac{20\ \mathrm{k\Omega}}{566+500+2\ \Omega}=18.7.
$$

### Step 3 — Voltage generator

With the input shorted, each half contributes the following series voltages at its base (the shot-noise terms are referred through the base–emitter loop, as for a degenerated common-emitter stage):

- $r_b$ and $R_E$: $4kT(r_b+R_E)=4kT(700\ \Omega)$, since both are voltage sources in the input loop.
- Collector shot noise $2qI_C$: nulling it needs $v_\pi=-i_c/g_m$, which also draws $i_c/\beta$ through $r_b+R_E$, so $v_{eq}=i_c\left[\frac1{g_m}+\frac{r_b+R_E}{\beta}\right]=i_c(573\ \Omega)$ and $2qI_C(573\ \Omega)^2=4kT(291\ \Omega)$. Without the small $\beta$ correction this is the familiar $4kT/(2g_m)=4kT(283\ \Omega)$.
- Base shot noise $2qI_B$, flowing through $r_b$ and $R_E$: $2qI_B(r_b+R_E)^2=4kT(4.3\ \Omega)$.

The two halves are uncorrelated and add in power. The two 20-kΩ loads appear at the output and are referred through $A_v$:

$$
\begin{aligned}
\frac{\overline{v_i^2}}{\Delta f}&=2\left[4kT\left(r_b+R_E\right)+2qI_C\left(\frac1{g_m}+\frac{r_b+R_E}{\beta}\right)^2+2qI_B(r_b+R_E)^2\right]+\frac{2\cdot4kTR_C}{A_v^2}\\
&=4kT\left[2(700+291+4.3)\ \Omega+114\ \Omega\right]=4kT(2.10\ \mathrm{k\Omega})=3.49\times10^{-17}\ \mathrm{V^2/Hz},
\end{aligned}
$$

i.e. 5.9 nV/√Hz. The tail resistor carries common-mode current only and gives no differential output.

### Step 4 — Current generator

With the input open, only the base of $Q_1$ is driven, so only $Q_1$'s current generator appears; $Q_2$'s base is grounded and its noise currents flow to ground without passing through the source:

$$
\frac{\overline{i_i^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right)=2(1.6\times10^{-19}\ \mathrm C)(0.459+0.0046)\ \mu\mathrm A=1.48\times10^{-25}\ \mathrm{A^2/Hz},
$$

i.e. 0.38 pA/√Hz.

### Step 5 — SPICE check of part (a)

The deck uses an NPN with IS $=10^{-16}$ A ($V_{BE}\approx0.70$ V at 46 µA), BF $=100$, RB $=200\ \Omega$, and a temperature giving $4kT=1.66\times10^{-20}$ V·C; the output is $v(c_1,c_2)$. For $\overline{v_i^2}$ the base of $Q_1$ is driven by an ideal voltage source. For $\overline{i_i^2}$ it is driven by an ac current source, with a 1-GH inductor to ground supplying the base current without adding noise.

```spice
* grsim-11-14 (a), voltage generator
VS b1 0 dc 0 ac 1
VCC vcc 0 10
VEE vee 0 -10
RC1 vcc c1 20k
RC2 vcc c2 20k
Q1 c1 b1 e1 qn
Q2 c2 0 e2 qn
RE1 e1 t 500
RE2 e2 t 500
RT t vee 100k
.model qn npn is=1e-16 bf=100 rb=200
.temp 27.4
.noise v(c1,c2) VS dec 1 1k 10k
.end
```

For the current generator, `VS` is replaced by `IS 0 b1 dc 0 ac 1` and `LB b1 0 1e9`.

| Quantity | Hand | SPICE |
|---|---|---|
| $I_C$ | 45.9 µA | 46.0 µA |
| $\overline{v_i^2}/\Delta f$ (V²/Hz) | $3.49\times10^{-17}$ | $3.49\times10^{-17}$ |
| $\overline{i_i^2}/\Delta f$ (A²/Hz) | $1.48\times10^{-25}$ | $1.47\times10^{-25}$ |

### Step 6 — Part (b): total noise with a 30-MHz dominant pole

With $R_S=50\ \Omega$, the spot input noise density, including the source resistance, is

$$
\frac{\overline{v_{n}^2}}{\Delta f}=4kTR_S+\frac{\overline{v_i^2}}{\Delta f}+\frac{\overline{i_i^2}}{\Delta f}R_S^2
=(8.3\times10^{-19}+3.49\times10^{-17}+3.7\times10^{-22})\ \mathrm{V^2/Hz}=3.58\times10^{-17}\ \mathrm{V^2/Hz};
$$

the current generator is negligible at this source resistance. White noise through a single-pole response with $f_{3dB}=30$ MHz has the noise bandwidth

$$
B_n=\int_0^\infty\frac{df}{1+(f/f_{3dB})^2}=\frac{\pi}{2}f_{3dB}=47.1\ \mathrm{MHz},
$$

so the total equivalent input noise is

$$
\overline{v_{n}^2}=(3.58\times10^{-17}\ \mathrm{V^2/Hz})(47.1\ \mathrm{MHz})=1.69\times10^{-9}\ \mathrm{V^2},\qquad v_n=41\ \mu\mathrm V\ \text{rms}.
$$

The low-frequency gain from $v_s$, now including $R_S$ in the base loop, is $\dfrac{2R_C\,\beta/(\beta+1)}{2(1/g_m+R_E)+(R_S+2r_b)/(\beta+1)}=18.5$, so the output noise is

$$
v_{no}=18.5\times41\ \mu\mathrm V=0.76\ \mathrm{mV}\ \text{rms}\quad(\overline{v_{no}^2}=5.8\times10^{-7}\ \mathrm{V^2}).
$$

As a check, the deck with a 50-Ω source and a capacitor of 0.1326 pF across the collectors (a 30-MHz pole with the 40-kΩ differential output resistance) gives an integrated output noise of 0.766 mV rms.
