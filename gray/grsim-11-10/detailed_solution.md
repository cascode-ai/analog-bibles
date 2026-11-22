# Detailed solution - grsim-11-10

Use the two-generator input noise model of each bipolar transistor and the fact that a common-base stage has the same equivalent generators as the same transistor in common emitter. Because the common-base current gain is $\alpha\approx1$, every noise current at the collector of $Q_1$ — the 5-kΩ load and the input noise current of $Q_2$ — is referred to the emitter unchanged. Part (b) integrates the equivalent input noise current, including $4kT/R_S$, over the 150-MHz band. SPICE runs check both parts.

### Step 1 — Small-signal parameters

For both transistors, $I_C=1$ mA gives

$$
g_m=\frac{I_C}{kT/q}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mS},\qquad
I_B=\frac{I_C}{\beta_0}=10\ \mu\mathrm A,\qquad
C_\pi=\frac{g_m}{2\pi f_T}=\frac{38.5\ \mathrm{mS}}{2\pi(400\ \mathrm{MHz})}=15.3\ \mathrm{pF}.
$$

With $C_\mu$ negligible, the current gain is $\beta(j\omega)=\beta_0/(1+j\omega\beta_0/\omega_T)$, which starts to fall at $f_T/\beta_0=4$ MHz, so

$$
\frac{1}{|\beta(j\omega)|^2}=\frac1{\beta_0^2}+\frac{f^2}{f_T^2}.
$$

### Step 2 — Generators of one transistor

With $r_b=0$, the noise sources are base shot noise $2qI_B$ and collector shot noise $2qI_C$. Shorting the input and referring $2qI_C$ through $g_m$ gives the voltage generator; opening the input and referring $2qI_C$ through the current gain gives the current generator:

$$
\frac{\overline{v_i^2}}{\Delta f}=\frac{2qI_C}{g_m^2}=\frac{4kT}{2g_m}=4kT(13\ \Omega)=2.16\times10^{-19}\ \mathrm{V^2/Hz},
\qquad
\frac{\overline{i_i^2}}{\Delta f}=2qI_B+\frac{2qI_C}{|\beta(j\omega)|^2}.
$$

Moving the ground from the emitter to the base does not change these two generators, so they apply to $Q_1$ at its emitter.

### Step 3 — Referring the load and $Q_2$ to the emitter of $Q_1$

At node X (collector of $Q_1$) there are the current $4kT/(5\ \mathrm{k\Omega})$ and the generators of $Q_2$. The emitter-to-collector current gain of $Q_1$ is $\alpha\approx1$ (it falls by only a few percent at 150 MHz), so a current at X is equivalent to the same current at the emitter of $Q_1$.

- $4kT/(5\ \mathrm{k\Omega})=3.32\times10^{-24}$ A²/Hz and $\overline{i_{i2}^2}$ add directly to the input current generator.
- $\overline{v_{i2}^2}$ drives the 5-kΩ load, giving $\overline{v_{i2}^2}/(5\ \mathrm{k\Omega})^2=8.6\times10^{-27}$ A²/Hz, negligible.

For the voltage generator, the emitter is shorted. A current $i_n$ at X then compares with the signal current $g_{m1}v_i$, so it adds $i_n^2/g_{m1}^2$. At low frequency this is $(3.32+3.2)\times10^{-24}/(38.5\ \mathrm{mS})^2=4kT(0.26\ \Omega)$; at 150 MHz the rising term $2qI_{C2}f^2/f_T^2$ of $Q_2$ adds $4kT(1.8\ \Omega)$. Hence

$$
\frac{\overline{v_{iB}^2}}{\Delta f}\approx4kT(13\ \Omega)=2.2\times10^{-19}\ \mathrm{V^2/Hz},
$$

rising slightly to about $4kT(15\ \Omega)$ at 150 MHz.

### Step 4 — Total equivalent input noise current

Adding the current generators of $Q_1$ and $Q_2$ and the load:

$$
\frac{\overline{i_{iB}^2}}{\Delta f}=2q(I_{B1}+I_{B2})+\frac{4kT}{5\ \mathrm{k\Omega}}+2q(I_{C1}+I_{C2})\left(\frac1{\beta_0^2}+\frac{f^2}{f_T^2}\right).
$$

Numerically, $2q(20\ \mu\mathrm A)=6.4\times10^{-24}$, $4kT/5\ \mathrm{k\Omega}=3.32\times10^{-24}$ and $2q(2\ \mathrm{mA})/\beta_0^2=6.4\times10^{-26}$ A²/Hz, so

$$
\frac{\overline{i_{iB}^2}}{\Delta f}\approx9.8\times10^{-24}+6.4\times10^{-22}\left(\frac{f}{400\ \mathrm{MHz}}\right)^2\ \mathrm{A^2/Hz}.
$$

The white floor holds up to a few MHz; the $f^2$ term takes over above about 50 MHz and reaches $9.0\times10^{-23}$ A²/Hz at 150 MHz, for a total of $1.0\times10^{-22}$ A²/Hz there.

### Step 5 — SPICE check of part (a)

Both transistors use a Gummel–Poon model with BF $=100$, RB $=0$, CJE $=$ CJC $=0$ and TF $=1/(2\pi f_T)=0.398$ ns, so $C_\pi=g_m\mathrm{TF}$. The bias sources (supply for the 5-kΩ load, emitter source of $Q_2$, dc current out of the emitter of $Q_1$) set both collector currents to 1 mA and are ac grounds. The output is the collector current of $Q_2$, sensed by a zero-volt source and a noiseless CCVS. For $\overline{v_{iB}^2}$ the emitter of $Q_1$ is driven by an ideal voltage source; for $\overline{i_{iB}^2}$ it is driven by an ac current source, with nothing else on the input node.

```spice
* grsim-11-10 (a), current generator
IB e 0 dc 1.01e-3
IIN 0 e dc 0 ac 1
Q1 x 0 e qn
RL vr x 5k
VR vr 0 6.05
Q2 c2 x e2 qn
VE2 e2 0 0.22567
VS c2 vc 0
VC vc 0 5
H1 out 0 VS 1
.model qn npn is=1e-16 bf=100 tf=0.39789n
.temp 27.4
.noise v(out) IIN lin 15 10e6 150e6
.end
```

For the voltage generator, `IB` and `IIN` are replaced by `VIN e 0 dc -0.773679 ac 1`.

| $f$ | 10 MHz | 40 MHz | 100 MHz | 150 MHz |
|---|---|---|---|---|
| $\overline{v_{iB}^2}/\Delta f$, SPICE (V²/Hz) | $2.20\times10^{-19}$ | $2.22\times10^{-19}$ | $2.33\times10^{-19}$ | $2.50\times10^{-19}$ |
| $\overline{i_{iB}^2}/\Delta f$, hand (A²/Hz) | $1.02\times10^{-23}$ | $1.62\times10^{-23}$ | $4.98\times10^{-23}$ | $9.98\times10^{-23}$ |
| $\overline{i_{iB}^2}/\Delta f$, SPICE (A²/Hz) | $1.04\times10^{-23}$ | $1.66\times10^{-23}$ | $5.23\times10^{-23}$ | $1.09\times10^{-22}$ |

At low frequency the simulated current floor is $1.00\times10^{-23}$ A²/Hz. The simulation is about 8% above the hand value at 150 MHz, because the referred currents are strictly divided by $|\alpha(j\omega)|^2$, which has fallen slightly there.

### Step 6 — Part (b): signal for a 10-dB SNR

With $R_S=5$ kΩ in parallel with the input, its noise $4kT/R_S=3.32\times10^{-24}$ A²/Hz adds to $\overline{i_{iB}^2}$, while $\overline{v_{iB}^2}/R_S^2\approx8.8\times10^{-27}$ A²/Hz is negligible. Signal and noise reach the output through the same transfer function, so the SNR can be evaluated at the input. Integrating from 0 to $B=150$ MHz:

$$
\begin{aligned}
\overline{i_n^2}&=\left[2q(I_{B1}+I_{B2})+\frac{4kT}{5\ \mathrm{k\Omega}}+\frac{4kT}{R_S}+\frac{2q(I_{C1}+I_{C2})}{\beta_0^2}\right]B+2q(I_{C1}+I_{C2})\frac{B^3}{3f_T^2}\\
&=(1.31\times10^{-23}\ \mathrm{A^2/Hz})(1.5\times10^8\ \mathrm{Hz})+(6.4\times10^{-22}\ \mathrm{A^2/Hz})(7.03\times10^6\ \mathrm{Hz})\\
&=1.97\times10^{-15}+4.50\times10^{-15}=6.47\times10^{-15}\ \mathrm{A^2},
\end{aligned}
$$

so $i_n=80$ nA rms. The $f^2$ part contributes more than twice the white part, so it cannot be dropped. Rerunning the deck with $R_S$ added (and the dc bias corrected for its current) and integrating the input-referred density over 1 kHz–150 MHz gives 82.8 nA rms.

A 10-dB SNR is a power ratio of 10, so the rms signal current is $\sqrt{10}$ times the rms noise:

$$
i_S=\sqrt{10}\,i_n=\sqrt{10}\,(80\text{–}83\ \mathrm{nA})\approx0.25\text{–}0.26\ \mu\mathrm A\ \text{rms}.
$$
