# Detailed solution - R489

**Approach.** Each output node is the common drain of a PMOS device ($M_5$ or $M_6$) above and an NMOS current source ($M_7$ or $M_8$) below, both carrying a fixed 1 mA. The output can move as long as both stay saturated, i.e. until it comes within one overdrive voltage of either rail; the two overdrives give the swing.

### Step 1 — What limits the output

$V_{out1}$ is the drain of $M_5$ (source at $V_{DD}$, $W/L = 60/0.5$) and of $M_7$ (source at ground, $W/L = 50/0.5$), both carrying $I_D = 1$ mA. As $V_{out1}$ moves down $V_{DS7}$ shrinks, and as it moves up $|V_{DS5}|$ shrinks; the first device to enter the triode region sets each limit. The branch current stays 1 mA (set by $M_7$), so with $\lambda$ neglected (not given) each overdrive stays at its bias value.

### Step 2 — Lower limit: $M_7$ at the edge of saturation

$V_{DS7} = V_{out1}$, so saturation requires

$$V_{out1} \ge V_{GS7} - V_{TH7} = V_{ov7},$$

$$
\begin{aligned}
V_{ov7} &= \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)_7}}\\
&= \sqrt{\frac{2\times1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(100)}}\\
&= \sqrt{\frac{2\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.1493\ \mathrm{V^2}} = 0.386\ \mathrm{V}.
\end{aligned}
$$

So $V_{out,min} = 0.386$ V; the threshold itself does not appear.

### Step 3 — Upper limit: $M_5$ at the edge of saturation

$|V_{DS5}| = V_{DD} - V_{out1}$, so saturation requires

$$V_{DD} - V_{out1} \ge |V_{GS5}| - |V_{TH5}| = |V_{ov5}| \quad\Longrightarrow\quad V_{out1} \le V_{DD} - |V_{ov5}|.$$

With $(W/L)_5 = 60/0.5 = 120$:

$$
\begin{aligned}
|V_{ov5}| &= \sqrt{\frac{2I_D}{\mu_pC_{ox}(W/L)_5}}\\
&= \sqrt{\frac{2\times1\ \mathrm{mA}}{(38.4\ \mu\mathrm{A/V^2})(120)}}\\
&= \sqrt{\frac{2\ \mathrm{mA}}{4.608\ \mathrm{mA/V^2}}} = \sqrt{0.4340\ \mathrm{V^2}} = 0.659\ \mathrm{V},
\end{aligned}
$$

$$V_{out,max} = V_{DD} - |V_{ov5}| = 3\ \mathrm{V} - 0.659\ \mathrm{V} = 2.341\ \mathrm{V}.$$

### Step 4 — Single-ended and differential swing

Each output can move within

$$0.386\ \mathrm{V} \le V_{out1},\,V_{out2} \le 2.341\ \mathrm{V},$$

a single-ended range of

$$\Delta V_{out1} = 2.341 - 0.386 = 1.955\ \mathrm{V} \approx 1.95\ \mathrm{V}\ \text{(peak-to-peak)}.$$

In differential operation $V_{out1}$ and $V_{out2}$ move in opposite directions, so $V_{out1} - V_{out2}$ ranges from $+1.955$ V (one output at 2.341 V, the other at 0.386 V) to $-1.955$ V:

$$\Delta(V_{out1} - V_{out2}) = 2\times1.955\ \mathrm{V} \approx 3.9\ \mathrm{V}\ \text{(peak-to-peak)}.$$

To use the full swing symmetrically, the CM feedback should hold the output CM level near the middle of the range, $(0.386 + 2.341)/2 \approx 1.36$ V.

### Result

- Each output: from $V_{ov7} \approx 0.39$ V up to $V_{DD} - |V_{ov5}| \approx 2.34$ V, i.e. **≈ 1.95 V peak-to-peak single-ended**.
- Differential output $V_{out1} - V_{out2}$: **≈ 3.9 V peak-to-peak**.

**Common mistake.** Using threshold or full gate–source voltages for the limits, e.g. $V_{out} \le V_{DD} - |V_{GS5}|$ or $V_{out} \ge V_{TH7}$. A transistor with its source at a rail leaves saturation when its drain comes within one *overdrive* of that rail.

**Common mistake.** Using $W/L = 50/0.5$ for $M_5$. The wider second-stage PMOS devices (60/0.5) have an overdrive of 0.659 V; with 50/0.5 it would be 0.722 V.

**Common mistake.** Looking at the first-stage devices to limit the output, which connects only to $M_5$–$M_8$, or not stating whether the swing is per output (≈ 1.95 V) or differential (≈ 3.9 V).
