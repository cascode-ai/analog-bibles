# Detailed solution - G211

Apply the zero-value time-constant method to the CC–CE stage with the bleed resistor. As in the version without $R_B$, $Q_1$'s collector is at ac ground, so $C_{\mu1}$ runs from the input node to ground and $C_{cs1}$ is shorted; $R_B$ raises $I_{C1}$ and appears in parallel with $r_{\pi2}$ at $Q_2$'s base.

### Step 1 — Small-signal parameters and capacitances

$$
g_{m1}=1.92\ \mathrm{mA/V},\quad r_{\pi1}=52\ \mathrm{k\Omega};\qquad g_{m2}=38.5\ \mathrm{mA/V},\quad r_{\pi2}=2.6\ \mathrm{k\Omega};\qquad R_{E1}\equiv r_{\pi2}\parallel R_B=2.22\ \mathrm{k\Omega}.
$$

With $\tau_F=256$ ps from $f_T$ at 1 mA, $C_{\pi2}=11.84$ pF and $C_{\pi1}=\tau_Fg_{m1}+C_{je}=2.49$ pF. The low-frequency gain is −68.7, with $R_i=275.8$ kΩ.

### Step 2 — Zero-value resistances

- $C_{\pi1}$ ($Q_1$ base to emitter): $R_{\pi1}=r_{\pi1}\parallel\dfrac{R_S+R_{E1}}{1+g_{m1}R_{E1}}=52\ \mathrm{k\Omega}\parallel19.4\ \mathrm{k\Omega}=14.1$ kΩ.
- $C_{\mu1}$ ($Q_1$ base to its grounded collector): $R_{\mu1}=R_S\parallel R_i=100\ \mathrm{k\Omega}\parallel275.8\ \mathrm{k\Omega}=73.4$ kΩ.
- $C_{\pi2}$ ($Q_2$ base to ground): $R_{\pi2}=r_{\pi2}\parallel R_B\parallel\dfrac{R_S+r_{\pi1}}{\beta+1}=2.22\ \mathrm{k\Omega}\parallel1.51\ \mathrm{k\Omega}=896\ \Omega$.
- $C_{\mu2}$ ($Q_2$ base to output): only $Q_2$ drives the output, so with $R_A=896\ \Omega$
$$
R_{\mu2}=R_A+R_L+g_{m2}R_LR_A=0.9+3+103.4\ \mathrm{k\Omega}=107\ \mathrm{k\Omega}.
$$
- $C_{cs2}$ (output to ground): $R_L=3$ kΩ.

### Step 3 — Sum of time constants

| Capacitor | Value | Resistance | Time constant |
|---|---|---|---|
| $C_{\pi1}$ | 2.49 pF | 14.1 kΩ | 35.2 ns |
| $C_{\mu1}$ | 0.4 pF | 73.4 kΩ | 29.4 ns |
| $C_{\pi2}$ | 11.84 pF | 896 Ω | 10.6 ns |
| $C_{\mu2}$ | 0.4 pF | 107 kΩ | 42.9 ns |
| $C_{cs2}$ | 1 pF | 3 kΩ | 3.0 ns |

$$
T_0=35.2+29.4+10.6+42.9+3.0\ \mathrm{ns}=121.1\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=1.31\ \mathrm{MHz}.
$$

### Step 4 — Interpretation

An exact nodal analysis gives about 1.8 MHz; with no single dominant capacitor (the leading poles are complex), the zero-value sum is conservative. The bleed resistor lowers the resistances at both transistor bases ($r_{\pi1}$ and the node at $Q_2$'s base), so the bandwidth roughly doubles compared with the stage without it (0.74 MHz), while the gain rises from −48.7 to −68.7. This contrasts with the Darlington, where the same resistor reduced the bandwidth through a larger Miller effect.
