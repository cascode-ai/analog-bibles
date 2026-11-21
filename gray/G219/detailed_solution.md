# Detailed solution - G219

Apply the zero-value time-constant method to the source follower $M_1$ driving the common-source stage $M_2$. Compared with the MOS "Darlington", the drain of $M_1$ is at ac ground, so $C_{gd1}$ runs from the input node to ground (no Miller multiplication) and $C_{db1}$ is shorted. The nodes are $g_1$, $s_1$ (source of $M_1$, gate of $M_2$) and the output.

### Step 1 — Device parameters

$g_{m1}=0.612$ mA/V ($1/g_{m1}=1.63$ kΩ), $g_{m2}=2.74$ mA/V, $C_{gs}=74.7$ fF. At low frequency $M_1$ is an unloaded unity-gain follower, and the gain is $-g_{m2}R_L=-8.22$.

### Step 2 — Zero-value resistances

- $C_{gs1}$ ($g_1$ to $s_1$): a test current at $s_1$ must flow through $M_1$'s channel, so the resistance is $1/g_{m1}=1.63$ kΩ.
- $C_{gd1}$ ($g_1$ to ac ground): the gate node sees only $R_S=100$ kΩ.
- $C_{sb1}$ and $C_{gs2}$ ($s_1$ to ground): the unloaded follower output, $1/g_{m1}=1.63$ kΩ.
- $C_{gd2}$ ($s_1$ to output): with $R_A=1/g_{m1}$ at $s_1$ and only $M_2$ driving the output,
$$
R_{gd2}=R_A+R_L+g_{m2}R_LR_A=1.63+3+13.4\ \mathrm{k\Omega}=18.0\ \mathrm{k\Omega}.
$$
- $C_{db2}$ (output to ground): $R_L=3$ kΩ. ($C_{db1}$ has both ends at ac ground; $C_{sb2}$ is shorted since $M_2$'s source and body are both grounded.)

### Step 3 — Sum of time constants

| Capacitor | Value | Resistance | Time constant |
|---|---|---|---|
| $C_{gs1}$ | 74.7 fF | 1.63 kΩ | 0.12 ns |
| $C_{gd1}$ | 14 fF | 100 kΩ | 1.40 ns |
| $C_{sb1}$ | 180 fF | 1.63 kΩ | 0.29 ns |
| $C_{gs2}$ | 74.7 fF | 1.63 kΩ | 0.12 ns |
| $C_{gd2}$ | 14 fF | 18.0 kΩ | 0.25 ns |
| $C_{db2}$ | 200 fF | 3 kΩ | 0.60 ns |

$$
T_0=2.79\ \mathrm{ns},\qquad f_{-3\text{dB}}\approx\frac1{2\pi T_0}=57\ \mathrm{MHz}.
$$

### Step 4 — Interpretation

An exact nodal analysis gives about 83 MHz; the zero-value sum is conservative because no single time constant dominates (the leading poles are complex). Grounding $M_1$'s drain removes the Miller multiplication of $C_{gd1}$, which dominated the "Darlington" (925 kΩ, 12.9 ns), so the bandwidth rises from 10.7 MHz to 57 MHz with the same low-frequency gain.
