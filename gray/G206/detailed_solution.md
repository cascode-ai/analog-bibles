# Detailed solution - G206

Find the device capacitances (with $C_{\pi1}$ much smaller than $C_{\pi2}$ because $Q_1$ runs at 1/100 of the current), then the zero-value resistance of each of the six capacitors with $v_i=0$ and the others open, and sum the time constants. The circuit has three nodes: the base of $Q_1$ ($b_1$), the joined emitter of $Q_1$ and base of $Q_2$ ($e_1$), and the output ($c$, both collectors).

### Step 1 — Small-signal parameters and capacitances

$$
r_{\pi1}=260\ \mathrm{k\Omega},\quad g_{m1}=0.385\ \mathrm{mA/V};\qquad r_{\pi2}=2.6\ \mathrm{k\Omega},\quad g_{m2}=38.5\ \mathrm{mA/V}.
$$

At 1 mA, $C_\pi+C_\mu=g_{m2}/\omega_T=38.5\ \mathrm{mA/V}/[2\pi(500\ \mathrm{MHz})]=12.24$ pF, so $C_{\pi2}=11.84$ pF and

$$
\tau_F=\frac{C_{\pi2}-C_{je}}{g_{m2}}=\frac{11.84\ \mathrm{pF}-2\ \mathrm{pF}}{38.5\ \mathrm{mA/V}}=256\ \mathrm{ps},\qquad
C_{\pi1}=\tau_Fg_{m1}+C_{je}=(256\ \mathrm{ps})(0.385\ \mathrm{mA/V})+2\ \mathrm{pF}=2.10\ \mathrm{pF}.
$$

The low-frequency gain, for reference, is $-\beta(\beta+2)R_L/[R_S+r_{\pi1}+(\beta+1)r_{\pi2}]=-49.1$, with input resistance $R_i=522.6$ kΩ.

### Step 2 — Resistances for the two $C_\pi$

- $C_{\pi1}$ ($b_1$ to $e_1$): it sees $r_{\pi1}$ in parallel with the external path, $R_S$ on the base side and $r_{\pi2}$ on the emitter side, with $g_{m1}$ feeding back through $r_{\pi2}$:
$$
R_{\pi1}=r_{\pi1}\parallel\frac{R_S+r_{\pi2}}{1+g_{m1}r_{\pi2}}=260\ \mathrm{k\Omega}\parallel\frac{102.6\ \mathrm{k\Omega}}{2.0}=260\ \mathrm{k\Omega}\parallel51.3\ \mathrm{k\Omega}=42.8\ \mathrm{k\Omega}.
$$
- $C_{\pi2}$ ($e_1$ to ground): it sees $r_{\pi2}$ in parallel with the resistance looking into $Q_1$'s emitter:
$$
R_{\pi2}=r_{\pi2}\parallel\frac{R_S+r_{\pi1}}{\beta+1}=2.6\ \mathrm{k\Omega}\parallel3.56\ \mathrm{k\Omega}=1.50\ \mathrm{k\Omega}.
$$

### Step 3 — Resistances for the two $C_\mu$ and the $C_{cs}$

- $C_{\mu1}$ ($b_1$ to output): the base node sees $R_A=R_S\parallel R_i=100\ \mathrm{k\Omega}\parallel522.6\ \mathrm{k\Omega}=83.9$ kΩ, and the composite transconductance from $v_{b1}$ to the output current is $G_m=\beta(\beta+2)/R_i=19.5$ mA/V. As for a common-emitter stage,
$$
R_{\mu1}=R_A+R_L+G_mR_LR_A=83.9\ \mathrm{k\Omega}+3\ \mathrm{k\Omega}+4.91\ \mathrm{M\Omega}=5.00\ \mathrm{M\Omega}.
$$
- $C_{\mu2}$ ($e_1$ to output): the node $e_1$ sees $R_{\pi2}=1.50$ kΩ, and a voltage there changes the output current by $G_m'=g_{m2}-\beta/(R_S+r_{\pi1})=38.5-0.28\ \mathrm{mA/V}=38.2$ mA/V ($Q_1$'s collector current falls slightly when its emitter rises), so
$$
R_{\mu2}=R_{\pi2}+R_L+G_m'R_LR_{\pi2}=1.5+3+172.2\ \mathrm{k\Omega}=177\ \mathrm{k\Omega}.
$$
- $C_{cs1}$, $C_{cs2}$ (output to ac ground): $R_L=3$ kΩ each, since $r_o=\infty$.

### Step 4 — Sum of time constants

| Capacitor | Value | Resistance | Time constant |
|---|---|---|---|
| $C_{\pi1}$ | 2.10 pF | 42.8 kΩ | 89.9 ns |
| $C_{\mu1}$ | 0.4 pF | 5.00 MΩ | 2001 ns |
| $C_{\pi2}$ | 11.84 pF | 1.50 kΩ | 17.8 ns |
| $C_{\mu2}$ | 0.4 pF | 177 kΩ | 70.7 ns |
| $C_{cs1}$, $C_{cs2}$ | 1 pF each | 3 kΩ | 3 ns each |

$$
T_0=89.9+2001+17.8+70.7+3+3\ \mathrm{ns}=2185\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=72.8\ \mathrm{kHz}.
$$

An exact nodal analysis gives 73.3 kHz. $C_{\mu1}$ accounts for over 90 % of $T_0$: it spans the input and the output of the whole Darlington, so it is Miller-multiplied by the full composite gain and sees the large source resistance $R_S$.
