# Detailed solution - G207

Use the same device values as for the Darlington, but note the changed connections: $Q_1$'s collector is at ac ground, so $C_{\mu1}$ runs from the input node to ground (no Miller multiplication) and $C_{cs1}$ is shorted. Compute the zero-value resistance of each remaining capacitor with $v_i=0$ and sum the time constants.

### Step 1 — Small-signal parameters and capacitances

$r_{\pi1}=260$ kΩ, $g_{m1}=0.385$ mA/V, $r_{\pi2}=2.6$ kΩ, $g_{m2}=38.5$ mA/V. From $f_T$ at 1 mA, $C_\pi+C_\mu=12.24$ pF, so

$$
C_{\pi2}=11.84\ \mathrm{pF},\qquad \tau_F=\frac{C_{\pi2}-C_{je}}{g_{m2}}=256\ \mathrm{ps},\qquad
C_{\pi1}=\tau_Fg_{m1}+C_{je}=2.10\ \mathrm{pF}.
$$

The low-frequency gain is $-\beta(\beta+1)R_L/[R_S+r_{\pi1}+(\beta+1)r_{\pi2}]=-48.7$, with input resistance $R_i=522.6$ kΩ.

### Step 2 — Zero-value resistances

- $C_{\pi1}$ ($Q_1$ base to emitter): $r_{\pi1}$ in parallel with the external path through $R_S$ and $r_{\pi2}$, reduced by the feedback of $g_{m1}$ in $r_{\pi2}$:
$$
R_{\pi1}=r_{\pi1}\parallel\frac{R_S+r_{\pi2}}{1+g_{m1}r_{\pi2}}=260\ \mathrm{k\Omega}\parallel51.3\ \mathrm{k\Omega}=42.8\ \mathrm{k\Omega}.
$$
- $C_{\mu1}$ ($Q_1$ base to its grounded collector): the input node to ground,
$$
R_{\mu1}=R_S\parallel R_i=100\ \mathrm{k\Omega}\parallel522.6\ \mathrm{k\Omega}=83.9\ \mathrm{k\Omega}.
$$
- $C_{\pi2}$ ($Q_2$ base to ground): $r_{\pi2}$ in parallel with the resistance into $Q_1$'s emitter,
$$
R_{\pi2}=r_{\pi2}\parallel\frac{R_S+r_{\pi1}}{\beta+1}=2.6\ \mathrm{k\Omega}\parallel3.56\ \mathrm{k\Omega}=1.50\ \mathrm{k\Omega}.
$$
- $C_{\mu2}$ ($Q_2$ base to output): with $R_A=R_{\pi2}=1.50$ kΩ, only $Q_2$ drives the output, so
$$
R_{\mu2}=R_A+R_L+g_{m2}R_LR_A=1.5+3+173.5\ \mathrm{k\Omega}=178\ \mathrm{k\Omega}.
$$
- $C_{cs2}$ (output to ground): $R_L=3$ kΩ. ($C_{cs1}$ has both ends at ac ground.)

### Step 3 — Sum of time constants

| Capacitor | Value | Resistance | Time constant |
|---|---|---|---|
| $C_{\pi1}$ | 2.10 pF | 42.8 kΩ | 89.9 ns |
| $C_{\mu1}$ | 0.4 pF | 83.9 kΩ | 33.6 ns |
| $C_{\pi2}$ | 11.84 pF | 1.50 kΩ | 17.8 ns |
| $C_{\mu2}$ | 0.4 pF | 178 kΩ | 71.2 ns |
| $C_{cs2}$ | 1 pF | 3 kΩ | 3.0 ns |

$$
T_0=89.9+33.6+17.8+71.2+3.0\ \mathrm{ns}=215.5\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=0.74\ \mathrm{MHz}.
$$

### Step 4 — Interpretation

An exact nodal analysis gives about 1.0 MHz; the zero-value estimate is conservative here because no single pole dominates (the leading poles are complex). With almost the same gain as the Darlington (−48.7 versus −49.1), the CC–CE stage is about ten times faster (0.74 MHz versus 73 kHz): grounding $Q_1$'s collector removes the Miller multiplication of $C_{\mu1}$, which dominated the Darlington's response.
