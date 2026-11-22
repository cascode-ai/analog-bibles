# Detailed solution - G214

Apply the zero-value time-constant method with the input current source set to zero, which leaves the base of $Q_1$ open (infinite source resistance). This raises every resistance at the input side compared with the voltage-driven Darlington, above all the Miller resistance of $C_{\mu1}$. The nodes are $b_1$, $e_1$ (emitter of $Q_1$, base of $Q_2$) and the output.

### Step 1 — Small-signal parameters and capacitances

$r_{\pi1}=260$ kΩ, $g_{m1}=0.385$ mA/V, $r_{\pi2}=2.6$ kΩ, $g_{m2}=38.5$ mA/V. From $f_T$ at 1 mA, $C_{\pi2}=11.84$ pF and $\tau_F=256$ ps, so $C_{\pi1}=\tau_Fg_{m1}+C_{je}=2.10$ pF. The input resistance is $R_i=r_{\pi1}+(\beta+1)r_{\pi2}=522.6$ kΩ, and the composite transconductance from $v_{b1}$ to the output current is $G_m=\beta(\beta+2)/R_i=19.5$ mA/V.

### Step 2 — Zero-value resistances

- $C_{\pi1}$ ($b_1$ to $e_1$): with $b_1$ open, the external path from $b_1$ to $e_1$ is broken, so only $r_{\pi1}$ remains: $R_{\pi1}=260$ kΩ.
- $C_{\mu1}$ ($b_1$ to output): the base node sees $R_A=R_i=522.6$ kΩ, so
$$
R_{\mu1}=R_A+R_L+G_mR_LR_A=522.6\ \mathrm{k\Omega}+3\ \mathrm{k\Omega}+30.6\ \mathrm{M\Omega}=31.1\ \mathrm{M\Omega}.
$$
- $C_{\pi2}$ ($e_1$ to ground): with $Q_1$'s base current fixed (open base), its emitter current cannot change, so $Q_1$'s emitter looks like an open circuit and $R_{\pi2}=r_{\pi2}=2.6$ kΩ.
- $C_{\mu2}$ ($e_1$ to output): $e_1$ sees $r_{\pi2}$, and only $Q_2$ responds to $v_{e1}$ ($Q_1$'s collector current is fixed for the same reason):
$$
R_{\mu2}=r_{\pi2}+R_L+g_{m2}R_Lr_{\pi2}=2.6+3+300\ \mathrm{k\Omega}=306\ \mathrm{k\Omega}.
$$
- $C_{cs1}$, $C_{cs2}$: $R_L=3$ kΩ each.

### Step 3 — Sum of time constants

| Capacitor | Value | Resistance | Time constant |
|---|---|---|---|
| $C_{\pi1}$ | 2.10 pF | 260 kΩ | 546 ns |
| $C_{\mu1}$ | 0.4 pF | 31.1 MΩ | 12 450 ns |
| $C_{\pi2}$ | 11.84 pF | 2.6 kΩ | 30.8 ns |
| $C_{\mu2}$ | 0.4 pF | 306 kΩ | 122 ns |
| $C_{cs1}$, $C_{cs2}$ | 1 pF each | 3 kΩ | 3 ns each |

$$
T_0=546+12\,450+30.8+122+3+3\ \mathrm{ns}=13.15\ \mu\mathrm s,\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=12.1\ \mathrm{kHz}.
$$

An exact nodal analysis also gives 12.1 kHz. With current drive, $C_{\mu1}$ sees the full input resistance $R_i$ instead of $R_S\parallel R_i$, so the bandwidth is about six times lower than with the 100-kΩ voltage source (73 kHz).
