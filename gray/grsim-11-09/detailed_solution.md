# Detailed solution - grsim-11-09

Find the bias point first, then refer every noise source to the gate of $M_1$. Sources at the source node of $M_1$ are referred through $1/g_{m1}$. The $Q_1$ stage is treated as a degenerated common-emitter stage driven by the Thevenin equivalent of the follower: its noise is first referred to the base of $Q_1$ and then divided by the follower's open-circuit gain. SPICE `.noise` runs then check the low-frequency result and find the doubling frequency once the capacitances are added.

### Step 1 — DC operating point

With $I_{C1}=1$ mA and $\beta=100$, $I_{B1}=10\ \mu$A and $I_{E1}=1.01$ mA. The exponential law gives

$$
V_{BE1}=\frac{kT}{q}\ln\frac{I_{C1}}{I_S}=(26\ \mathrm{mV})\ln\frac{10^{-3}}{10^{-16}}=0.778\ \mathrm V,\qquad
V_{B1}=V_{BE1}+I_{E1}R_2=0.778+0.101=0.879\ \mathrm V.
$$

$M_1$ supplies $R_1$ and the base current: $I_{D1}=0.879/300+0.01\ \mathrm{mA}=2.94$ mA. $M_1$ is saturated ($V_{DS}\approx4.1$ V), so

$$
g_{m1}=\sqrt{2\mu_nC_{ox}(W/L)I_{D1}}=\sqrt{2(60\ \mu\mathrm{A/V^2})(100)(2.94\ \mathrm{mA})}=5.94\ \mathrm{mS},
\qquad V_{ov}=\frac{2I_{D1}}{g_{m1}}=0.99\ \mathrm V,
$$

and $V_i\approx0.879+0.7+0.99=2.57$ V. For $Q_1$: $g_{m}=I_C/(kT/q)=38.5$ mS ($1/g_m=26\ \Omega$) and $r_\pi=\beta/g_m=2.6$ kΩ.

### Step 2 — Noise of $M_1$ and $R_1$

Both are current sources into the source node. A gate voltage $v_g$ moves that node exactly as a current $g_{m1}v_g$ injected there would, whatever the load on the node, so a current $i_n$ at the source is equivalent to $v_g=i_n/g_{m1}$:

$$
\begin{aligned}
M_1:&\quad \frac{4kT\cdot\tfrac23g_{m1}}{g_{m1}^2}=4kT\frac{2}{3g_{m1}}=4kT(112\ \Omega),\\
R_1:&\quad \frac{4kT/R_1}{g_{m1}^2}=4kT\frac{1}{(300\ \Omega)(5.94\ \mathrm{mS})^2}=4kT(94\ \Omega).
\end{aligned}
$$

### Step 3 — Noise of the $Q_1$ stage at its base

Seen from the base of $Q_1$, the follower is a source $A_fv_g$ with output resistance $R_o$:

$$
A_f=\frac{g_{m1}R_1}{1+g_{m1}R_1}=\frac{1.782}{2.782}=0.641,\qquad
R_o=R_1\parallel\frac1{g_{m1}}=108\ \Omega.
$$

Let $R_b=R_o+r_b=208\ \Omega$ be the total resistance in the base. Writing the base loop, $v=i_bR_b+v_\pi+i_eR_2$, with $i_b=v_\pi/r_\pi$, gives the series voltage at the base that is equivalent to each source of the stage:

- $r_b$ and $R_2$ are voltage sources in the same loop: $4kT(100\ \Omega)$ each.
- Collector shot noise $2qI_C$: nulling the output needs $v_\pi=-i_c/g_m$, which draws $i_b=-i_c/\beta$ through $R_b$ and $R_2$, so $v_{eq}=i_c\left[\frac1{g_m}+\frac{R_b+R_2}{\beta}\right]=i_c(29.1\ \Omega)$ and $\overline{v^2}/\Delta f=2qI_C(29.1\ \Omega)^2=4kT(16.3\ \Omega)$.
- Base shot noise $2qI_B$ flows through $R_o$, $r_b$ and $R_2$: $\overline{v^2}/\Delta f=2qI_B(308\ \Omega)^2=4kT(18.3\ \Omega)$.
- $R_3$: the gain from the base is $|A_2|=\dfrac{\beta R_3}{R_b+r_\pi+(\beta+1)R_2}=\dfrac{100(2\ \mathrm{k\Omega})}{12.9\ \mathrm{k\Omega}}=15.5$, so $4kTR_3/A_2^2=4kT(8.3\ \Omega)$.

The stage total is $4kT(243\ \Omega)$ at the base of $Q_1$.

### Step 4 — Low-frequency equivalent input generators

Dividing the $Q_1$-stage noise by $A_f^2=0.410$ refers it to the gate:

| Source | At base of $Q_1$ | At gate of $M_1$ |
|---|---|---|
| $r_b$ | $4kT(100\ \Omega)$ | $4kT(244\ \Omega)$ |
| $R_2$ | $4kT(100\ \Omega)$ | $4kT(244\ \Omega)$ |
| $2qI_C$ | $4kT(16.3\ \Omega)$ | $4kT(40\ \Omega)$ |
| $2qI_B$ | $4kT(18.3\ \Omega)$ | $4kT(45\ \Omega)$ |
| $R_3$ | $4kT(8.3\ \Omega)$ | $4kT(20\ \Omega)$ |
| $M_1$ channel | — | $4kT(112\ \Omega)$ |
| $R_1$ | — | $4kT(94\ \Omega)$ |

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT(799\ \Omega)=1.33\times10^{-17}\ \mathrm{V^2/Hz}\quad(3.6\ \mathrm{nV/\sqrt{Hz}}).
$$

The overall gain is $v_o/v_i=A_f|A_2|=9.9$. With no gate current and, at low frequency, no capacitance, nothing can flow into the gate, so $\overline{i_i^2}\approx0$.

### Step 5 — SPICE check at low frequency

The deck uses a level-1 NMOS ($K_P=60\ \mu$A/V², $V_{TO}=0.7$ V, $\gamma=\lambda=0$; its thermal noise is $4kT\tfrac23g_m$), a Gummel–Poon NPN with IS, BF and RB as given, and a temperature giving $4kT=1.66\times10^{-20}$ V·C. $V_i$ was tuned to 2.5644 V for $I_{C1}=1.000$ mA (the simulator's $kT/q$ is 25.9 mV, so $V_i$ is a few mV below the hand value). For $\overline{v_i^2}$ the input is an ideal voltage source, and the simulator's input-referred density is exactly $\overline{v_i^2}$. For $\overline{i_i^2}$ the gate is driven by an ac current source, with the dc bias fed through 1 TΩ, and the output noise is divided by the transimpedance.

```spice
* grsim-11-09 BiCMOS Darlington noise
VDD vdd 0 5
VI in 0 dc 2.56435 ac 1
M1 vdd in s 0 nm W=100u L=1u
R1 s 0 300
Q1 c s e qn
R2 e 0 100
R3 vdd c 2k
* for part 2: CGS in s 150f and CSB s 0 50f; add cjc, tf to qn
.model nm nmos level=1 vto=0.7 kp=60u lambda=0 gamma=0
.model qn npn is=1e-16 bf=100 rb=100
.temp 27.4
.noise v(c) VI dec 10 1k 100k
.end
```

The simulated $g_{m1}=5.92$ mS and $\overline{v_i^2}/\Delta f=1.33\times10^{-17}$ V²/Hz, flat over frequency, agree with the hand result; the current-driven run gives $\overline{i_i^2}$ equal to the 1 TΩ bias resistor's own $4kT/R$, i.e. zero for the circuit.

### Step 6 — Adding the capacitances

$C_{gs}=150$ fF and $C_{sb}=50$ fF are added as explicit capacitors. For $Q_1$, $C_\mu=50$ fF is a constant collector junction capacitance, and $C_\pi$ follows from $f_T$:

$$
C_\pi=\frac{g_m}{2\pi f_T}-C_\mu=\frac{38.6\ \mathrm{mS}}{2\pi(10\ \mathrm{GHz})}-50\ \mathrm{fF}=0.56\ \mathrm{pF},\qquad
\mathrm{TF}=\frac{C_\pi}{g_m}=14.6\ \mathrm{ps}.
$$

As the frequency approaches $f_T$, the current gain of $Q_1$ falls and the gate-to-output gain falls with it, so the noise generated after the input — mainly the collector shot noise and $R_3$ — is referred to the input with a growing factor. The simulated input-referred density is:

| $f$ | 0.1 GHz | 1 GHz | 3.16 GHz | 6.31 GHz | 8.3 GHz | 10 GHz |
|---|---|---|---|---|---|---|
| $\overline{v_i^2}/\Delta f$ (V²/Hz) | $1.33\times10^{-17}$ | $1.39\times10^{-17}$ | $1.80\times10^{-17}$ | $2.43\times10^{-17}$ | $2.66\times10^{-17}$ | $2.75\times10^{-17}$ |

$\overline{v_i^2}$ stays flat to about 1 GHz and reaches twice its low-frequency value, $2.66\times10^{-17}$ V²/Hz, at about **8.3 GHz**, close to $f_T$.

### Step 7 — Equivalent input noise current at that frequency

The gate is no longer an open circuit: $C_{gs}$ and, through the follower, $C_{sb}$ and the input capacitance of $Q_1$ let output noise appear as a current into the gate. The current-driven run gives

$$
\frac{\overline{i_i^2}}{\Delta f}\approx4.2\times10^{-22}\ \mathrm{A^2/Hz}\quad(\approx20\ \mathrm{pA/\sqrt{Hz}})\ \text{at}\ 8.3\ \mathrm{GHz},
$$

rising from $3.9\times10^{-22}$ at 8 GHz to $4.8\times10^{-22}$ A²/Hz at 9 GHz. Both high-frequency figures depend on how the simulator models $C_\pi$ through TF, so they are estimates of the order of magnitude rather than exact values.
