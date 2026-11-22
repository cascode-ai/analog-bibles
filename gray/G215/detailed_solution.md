# Detailed solution - G215

Apply the zero-value time-constant method with the input current source zeroed, so the base of $Q_1$ is open. $Q_1$'s collector is at ac ground, so $C_{\mu1}$ runs from the input node to ground (no Miller multiplication) and $C_{cs1}$ is shorted.

### Step 1 — Small-signal parameters and capacitances

$r_{\pi1}=260$ kΩ, $r_{\pi2}=2.6$ kΩ, $g_{m2}=38.5$ mA/V; from $f_T$, $\tau_F=256$ ps, $C_{\pi1}=2.10$ pF and $C_{\pi2}=11.84$ pF. The input resistance is $R_i=r_{\pi1}+(\beta+1)r_{\pi2}=522.6$ kΩ.

### Step 2 — Zero-value resistances

- $C_{\pi1}$ ($Q_1$ base to emitter): with the base open, only $r_{\pi1}$ is across it: $R_{\pi1}=260$ kΩ.
- $C_{\mu1}$ ($Q_1$ base to its grounded collector): the open input node to ground, $R_{\mu1}=R_i=522.6$ kΩ.
- $C_{\pi2}$ ($Q_2$ base to ground): with $Q_1$'s base current fixed, its emitter current cannot change, so $R_{\pi2}=r_{\pi2}=2.6$ kΩ.
- $C_{\mu2}$ ($Q_2$ base to output): $R_{\mu2}=r_{\pi2}+R_L+g_{m2}R_Lr_{\pi2}=2.6+3+300\ \mathrm{k\Omega}=306$ kΩ.
- $C_{cs2}$ (output to ground): $R_L=3$ kΩ.

### Step 3 — Sum of time constants

| Capacitor | Value | Resistance | Time constant |
|---|---|---|---|
| $C_{\pi1}$ | 2.10 pF | 260 kΩ | 546 ns |
| $C_{\mu1}$ | 0.4 pF | 522.6 kΩ | 209 ns |
| $C_{\pi2}$ | 11.84 pF | 2.6 kΩ | 30.8 ns |
| $C_{\mu2}$ | 0.4 pF | 306 kΩ | 122 ns |
| $C_{cs2}$ | 1 pF | 3 kΩ | 3.0 ns |

$$
T_0=546+209+30.8+122+3\ \mathrm{ns}=910.7\ \mathrm{ns},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=175\ \mathrm{kHz}.
$$

### Step 4 — Interpretation

An exact nodal analysis gives about 199 kHz; the zero-value sum is conservative because no single time constant dominates. $C_{\pi1}$ is now the largest term, since with an open base it sees the whole $r_{\pi1}$. Compared with the current-driven Darlington (12.1 kHz), grounding $Q_1$'s collector removes the 31-MΩ Miller resistance of $C_{\mu1}$ and raises the bandwidth about fourteenfold, for only 1 % less transresistance (−30.3 MΩ versus −30.6 MΩ).
