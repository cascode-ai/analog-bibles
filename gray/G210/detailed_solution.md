# Detailed solution - G210

Repeat the zero-value time-constant analysis of the Darlington with the bleed resistor included: $R_B$ raises $I_{C1}$ (so $C_{\pi1}$ grows and $r_{\pi1}$ falls) and appears in parallel with $r_{\pi2}$ at the joined node $e_1$. The three nodes are $b_1$ (base of $Q_1$), $e_1$ (emitter of $Q_1$, base of $Q_2$) and the output $c$.

### Step 1 — Small-signal parameters and capacitances

$$
g_{m1}=\frac{50\ \mu\mathrm A}{26\ \mathrm{mV}}=1.92\ \mathrm{mA/V},\quad r_{\pi1}=52\ \mathrm{k\Omega};\qquad g_{m2}=38.5\ \mathrm{mA/V},\quad r_{\pi2}=2.6\ \mathrm{k\Omega};\qquad R_{E1}\equiv r_{\pi2}\parallel R_B=2.22\ \mathrm{k\Omega}.
$$

From $f_T$ at 1 mA, $C_{\pi2}=12.24\ \mathrm{pF}-0.4\ \mathrm{pF}=11.84$ pF and $\tau_F=(11.84-2)\ \mathrm{pF}/38.5\ \mathrm{mA/V}=256$ ps, so

$$
C_{\pi1}=\tau_Fg_{m1}+C_{je}=(256\ \mathrm{ps})(1.92\ \mathrm{mA/V})+2\ \mathrm{pF}=2.49\ \mathrm{pF}.
$$

The low-frequency gain is −69.5, with $R_i=r_{\pi1}+(\beta+1)R_{E1}=275.8$ kΩ and output current $8708\,i_{b1}$.

### Step 2 — Zero-value resistances

- $C_{\pi1}$ ($b_1$ to $e_1$): $r_{\pi1}$ in parallel with the external path through $R_S$ and $R_{E1}$, reduced by $g_{m1}$ feeding back in $R_{E1}$:
$$
R_{\pi1}=r_{\pi1}\parallel\frac{R_S+R_{E1}}{1+g_{m1}R_{E1}}=52\ \mathrm{k\Omega}\parallel\frac{102.2\ \mathrm{k\Omega}}{5.26}=52\ \mathrm{k\Omega}\parallel19.4\ \mathrm{k\Omega}=14.1\ \mathrm{k\Omega}.
$$
- $C_{\mu1}$ ($b_1$ to output): the base node sees $R_A=R_S\parallel R_i=73.4$ kΩ, and the composite transconductance is $G_m=8708/R_i=31.6$ mA/V, so
$$
R_{\mu1}=R_A+R_L+G_mR_LR_A=73.4\ \mathrm{k\Omega}+3\ \mathrm{k\Omega}+6.95\ \mathrm{M\Omega}=7.03\ \mathrm{M\Omega}.
$$
- $C_{\pi2}$ ($e_1$ to ground): $R_{\pi2}=r_{\pi2}\parallel R_B\parallel\dfrac{R_S+r_{\pi1}}{\beta+1}=2.22\ \mathrm{k\Omega}\parallel1.51\ \mathrm{k\Omega}=896\ \Omega$.
- $C_{\mu2}$ ($e_1$ to output): with $R_{\pi2}=896\ \Omega$ at $e_1$ and $G_m'=g_{m2}-\beta/(R_S+r_{\pi1})=38.5-0.66\ \mathrm{mA/V}=37.8$ mA/V,
$$
R_{\mu2}=R_{\pi2}+R_L+G_m'R_LR_{\pi2}=0.9+3+101.6\ \mathrm{k\Omega}=106\ \mathrm{k\Omega}.
$$
- $C_{cs1}$, $C_{cs2}$: $R_L=3$ kΩ each.

### Step 3 — Sum of time constants

| Capacitor | Value | Resistance | Time constant |
|---|---|---|---|
| $C_{\pi1}$ | 2.49 pF | 14.1 kΩ | 35.2 ns |
| $C_{\mu1}$ | 0.4 pF | 7.03 MΩ | 2811 ns |
| $C_{\pi2}$ | 11.84 pF | 896 Ω | 10.6 ns |
| $C_{\mu2}$ | 0.4 pF | 106 kΩ | 42.2 ns |
| $C_{cs1}$, $C_{cs2}$ | 1 pF each | 3 kΩ | 3 ns each |

$$
T_0=35.2+2811+10.6+42.2+3+3\ \mathrm{ns}=2905\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=54.8\ \mathrm{kHz}.
$$

An exact nodal analysis also gives 54.8 kHz, since $C_{\mu1}$ produces a clearly dominant pole. The bleed resistor raises the gain (−69.5 versus −49.1) and with it the Miller multiplication of $C_{\mu1}$, so the bandwidth drops from about 73 kHz to 55 kHz.
