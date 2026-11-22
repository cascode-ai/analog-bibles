# Detailed solution - G395

The $V_{cms}$ node is one RC node whose resistance is $1/g_{m23}$ (diode-connected $M_{23}$) and whose capacitance is $C_{gs23}$ plus the fixed 90 fF, so $|p|=g_{m23}/(C_{gs23}+90\ \mathrm{fF})$. Evaluate it at both currents, then explain the ratio by how each term scales with current at fixed overdrive.

### Step 1 — Pole expression

With the input pair balanced, $M_{23}$ carries $I_{D23}=|I_{D25}|/2$. The diode-connected device is saturated, and with $r_o\gg1/g_m$ the node resistance is $1/g_{m23}$, so the pole of the single RC node is

$$
|p|=\frac{g_{m23}}{C_{gs23}+C_F},\qquad
g_{m23}=\frac{2I_{D23}}{V_{ov23}},\qquad
C_{gs23}=\tfrac23W_{23}LC_{ox},\qquad C_F=90\ \mathrm{fF}.
$$

The width follows from the square law $I_D=\tfrac12k'_n(W/L)V_{ov}^2$:

$$
W_{23}=\frac{2I_{D23}L}{k'_nV_{ov23}^2}.
$$

### Step 2 — Numbers at $|I_{D25}|=0.4$ mA

$I_{D23}=0.2$ mA, so

$$
\begin{aligned}
g_{m23}&=\frac{2(0.2\ \mathrm{mA})}{0.2\ \mathrm V}=2\ \mathrm{mA/V},\\
W_{23}&=\frac{2(0.2\ \mathrm{mA})(0.8\ \mu\mathrm m)}{(127\ \mu\mathrm{A/V^2})(0.2\ \mathrm V)^2}=63.0\ \mu\mathrm m,\\
C_{gs23}&=\tfrac23(63.0\ \mu\mathrm m)(0.8\ \mu\mathrm m)(2.30\ \mathrm{fF/\mu m^2})=77.3\ \mathrm{fF},\\
|p|&=\frac{2\ \mathrm{mA/V}}{77.3\ \mathrm{fF}+90\ \mathrm{fF}}=1.20\times10^{10}\ \mathrm{rad/s}\quad(1.9\ \mathrm{GHz}).
\end{aligned}
$$

### Step 3 — Numbers at $|I_{D25}|=0.1$ mA

The same formulas with $I_{D23}=0.05$ mA give:

| $\lvert I_{D25}\rvert$ | $g_{m23}$ | $W_{23}$ | $C_{gs23}$ | $C$ | $\lvert p\rvert$ (rad/s) | $\lvert p\rvert/2\pi$ |
|---|---|---|---|---|---|---|
| 0.4 mA | 2 mA/V | 63.0 µm | 77.3 fF | 167 fF | $1.20\times10^{10}$ | 1.9 GHz |
| 0.1 mA | 0.5 mA/V | 15.7 µm | 19.3 fF | 109 fF | $4.6\times10^{9}$ | 0.73 GHz |

The pole falls by a factor of $1.20\times10^{10}/4.57\times10^{9}=2.6$ for a fourfold reduction in current.

### Step 4 — Why the pole falls by less than 4 but does not stay put

At fixed $V_{ov23}$, both $g_{m23}=2I_{D23}/V_{ov23}$ and $W_{23}\propto I_{D23}$ are proportional to the current, so $g_{m23}/C_{gs23}$ alone would be current-independent (it is set by $V_{ov}$ and $L$, like $f_T$). The 90-fF load, the gate of the transistor that $M_{23}$ mirrors to, does not scale:

$$
\frac{|p|_{0.1}}{|p|_{0.4}}=\frac{g_{m,0.1}}{g_{m,0.4}}\cdot\frac{C_{0.4}}{C_{0.1}}
=\frac14\cdot\frac{167.3\ \mathrm{fF}}{109.3\ \mathrm{fF}}=\frac{0.25}{0.654}=0.38.
$$

Thus the capacitance falls only to 0.65 of its value while $g_m$ falls to 0.25, and the pole drops by about 2.6×. Only if the fixed capacitance were negligible would the pole stay the same; it never drops by the full 4×, since $C_{gs23}$ does shrink. Lowering the CM-sense amplifier's power therefore moves this nondominant pole of the CMFB loop down and reduces the loop's phase margin.
