# Detailed solution - R690

**Approach.** The circuit is a common-source (CS) stage $M_1$ with a diode-connected PMOS load $M_2$. We derive its transfer curve with the square-law model and KCL at the output ($I_{D1} = I_{D2}$) for general thresholds, then evaluate it twice: with the target thresholds ($V_{THN} = 0.7$ V, $|V_{THP}| = 0.8$ V) and with the native thresholds ($V_{THN} \approx 0$, $|V_{THP}| \approx 1$ V) that result when the threshold-adjust implant is missing.

### Step 1 — Device equations for general thresholds

Write $V_{TN} = V_{THN}$ and $V_{TP} = |V_{THP}|$ for brevity. There is no body effect: $M_1$ has source and bulk at ground, $M_2$ has source and bulk at $V_{DD}$, so both thresholds are fixed for all $V_{in}$.

**$M_1$** (NMOS, $V_{GS1} = V_{in}$, $V_{DS1} = V_{out}$), square law with $\lambda = 0$:

$$
\begin{aligned}
I_{D1} &= \tfrac12\mu_nC_{ox}(W/L)_1(V_{in} - V_{TN})^2 && \text{saturation, } V_{out} \ge V_{in} - V_{TN},\\
I_{D1} &= \mu_nC_{ox}(W/L)_1\big[(V_{in} - V_{TN})V_{out} - \tfrac12V_{out}^2\big] && \text{triode, } V_{out} < V_{in} - V_{TN}.
\end{aligned}
$$

**$M_2$** (PMOS, diode-connected, $V_{SG2} = V_{SD2} = V_{DD} - V_{out}$). Because $V_{SD2} = V_{SG2} > V_{SG2} - V_{TP}$, it is always saturated when it conducts:

$$I_{D2} = \tfrac12\mu_pC_{ox}(W/L)_2(V_{DD} - V_{TP} - V_{out})^2 .$$

**KCL at the output.** No load current is drawn, so $I_{D1} = I_{D2}$. Define the strength ratio

$$A = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_2}} .$$

**Three regions:**

1. **$M_1$ off** ($V_{in} \le V_{TN}$): $I_{D2} = 0$ requires $V_{out} \ge V_{DD} - V_{TP}$. The conventional value is the edge of conduction, $V_{out} = V_{DD} - V_{TP}$. (In the square-law model any value up to $V_{DD}$ gives zero current; subthreshold leakage of $M_2$ slowly pulls the output toward $V_{DD}$.)
2. **$M_1$ saturated**: equate the saturation currents, cancel $\tfrac12C_{ox}$ and divide by $\mu_p(W/L)_2$:
$$A^2(V_{in} - V_{TN})^2 = (V_{DD} - V_{TP} - V_{out})^2 .$$
Taking positive roots:
$$V_{out} = (V_{DD} - V_{TP}) - A\,(V_{in} - V_{TN}),$$
a straight line of slope $-A$. This slope is also the small-signal gain $-g_{m1}/g_{m2}$.
3. **$M_1$ triode**, beginning where the line meets $V_{out} = V_{in} - V_{TN}$:
$$(V_{DD} - V_{TP}) - A(V_{in} - V_{TN}) = V_{in} - V_{TN} \;\Longrightarrow\; V_{in} - V_{TN} = \frac{V_{DD} - V_{TP}}{1 + A}.$$
Beyond it, equate the triode current of $M_1$ with the saturation current of $M_2$ and divide by $\tfrac12\mu_pC_{ox}(W/L)_2$:
$$A^2\big[2(V_{in} - V_{TN})V_{out} - V_{out}^2\big] = (V_{DD} - V_{TP} - V_{out})^2 .$$

### Step 2 — Target case ($V_{TN} = 0.7$ V, $V_{TP} = 0.8$ V)

$$V_{DD} - V_{TP} = 3 - 0.8 = 2.2\ \mathrm{V}.$$

- **$0 \le V_{in} \le 0.7$ V:** $M_1$ off, $V_{out} = 2.2$ V.
- **Saturation line:** $V_{out} = 2.2 - A(V_{in} - 0.7)$.
- **Triode break:**
$$V_{in,B} = 0.7 + \frac{2.2}{1 + A}, \qquad V_{out,B} = \frac{2.2}{1 + A}.$$
- **Triode tail:** $A^2[2(V_{in} - 0.7)V_{out} - V_{out}^2] = (2.2 - V_{out})^2$.

### Step 3 — Without the implant ($V_{TN} \approx 0$, $V_{TP} \approx 1$ V)

$$V_{DD} - V_{TP} = 3 - 1 = 2.0\ \mathrm{V}.$$

- **No "off" region.** $M_1$ reaches its threshold already at $V_{in} = 0$, so the flat section disappears. At $V_{in} = 0$ the square-law current is just zero, and the output sits at the edge of conduction of $M_2$:
$$V_{out}(V_{in} = 0) = V_{DD} - V_{TP} = 2.0\ \mathrm{V}.$$
(In practice $V_{GS1} = V_{THN}$ already lets a noticeable subthreshold current flow, so $V_{out}$ is slightly below 2.0 V.)
- **Saturation line:**
$$V_{out} = 2.0 - A\,V_{in}.$$
- **Triode break:** setting $V_{out} = V_{in} - 0$,
$$2.0 - AV_{in} = V_{in} \;\Longrightarrow\; V_{in,B} = V_{out,B} = \frac{2.0}{1 + A}.$$
- **Triode tail:** $A^2[2V_{in}V_{out} - V_{out}^2] = (2.0 - V_{out})^2$.

### Step 4 — Comparing the two linear segments

Write both saturation lines in the form "intercept $-$ slope $\times V_{in}$":

$$
\begin{aligned}
\text{target:}\quad V_{out} &= 2.2 - A(V_{in} - 0.7) = (2.2 + 0.7A) - AV_{in},\\
\text{no implant:}\quad V_{out} &= 2.0 - AV_{in}.
\end{aligned}
$$

- **Same slope $-A$.** The slope depends only on $\mu_n(W/L)_1/[\mu_p(W/L)_2]$, which the implant does not touch. So the small-signal gain of the stage, $-g_{m1}/g_{m2}$, is unchanged.
- **Vertical offset.** Subtracting, the no-implant line lies lower by
$$\Delta V_{out} = (2.2 + 0.7A) - 2.0 = 0.2 + 0.7A\ \ \mathrm{V}$$
at the same $V_{in}$.
- **Geometric picture.** $V_{out,new}(V_{in}) = 2.0 - AV_{in} = [2.2 - A((V_{in} + 0.7) - 0.7)] - 0.2 = V_{out,target}(V_{in} + 0.7) - 0.2$. The linear segment is the target segment **moved 0.7 V to the left** (because $V_{THN}$ fell by 0.7 V, $M_1$ turns on 0.7 V earlier) and **0.2 V down** (because $|V_{THP}|$ rose by 0.2 V, the diode load drops 0.2 V more).

### Step 5 — The low end at $V_{in} = 3$ V

The tail is lower without the implant for two reasons: $M_1$ has $V_{in} - V_{TN} = 3$ V of overdrive (instead of 2.3 V), so it is a smaller triode resistance; and $M_2$ starts conducting only below $V_{out} = 2.0$ V instead of 2.2 V, so it delivers less current at a given $V_{out}$.

**Numerical example with $A = 2$.** Expand the no-implant triode equation:

$$
\begin{aligned}
4(2V_{in}V_{out} - V_{out}^2) &= 4 - 4V_{out} + V_{out}^2\\
5V_{out}^2 - (8V_{in} + 4)V_{out} + 4 &= 0 .
\end{aligned}
$$

At $V_{in} = 3$ V: $8(3) + 4 = 28$, so

$$V_{out} = \frac{28 - \sqrt{28^2 - 4\cdot5\cdot4}}{2\cdot5} = \frac{28 - \sqrt{784 - 80}}{10} = \frac{28 - 26.53}{10} = 0.147\ \mathrm{V}.$$

The same procedure for the target (Step 2 equation, $V_{in} - 0.7 = 2.3$ V) gives $5V_{out}^2 - 22.8V_{out} + 4.84 = 0$, so

$$V_{out} = \frac{22.8 - \sqrt{519.84 - 96.8}}{10} = \frac{22.8 - 20.57}{10} = 0.223\ \mathrm{V}.$$

The triode equations have the same structure but different constants, so the tails are not exact shifted copies of each other; only the linear segments are.

### Step 6 — Side-by-side table ($A = 2$)

Break points: target $V_{in,B} = 0.7 + 2.2/3 = 1.433$ V ($V_{out} = 0.733$ V); no implant $V_{in,B} = 2/3 = 0.667$ V ($V_{out} = 0.667$ V).

| $V_{in}$ (V) | Target $V_{out}$ (V) | No implant $V_{out}$ (V) |
|---|---|---|
| 0 | 2.20 (off) | 2.00 (edge of turn-on) |
| 0.2 | 2.20 (off) | 1.60 (sat) |
| 0.5 | 2.20 (off) | 1.00 (sat) |
| 0.667 | 2.20 (off) | 0.667 (break) |
| 0.7 | 2.20 (turn-on) | 0.61 (triode) |
| 1.0 | 1.60 (sat) | 0.40 |
| 1.2 | 1.20 (sat) | 0.34 |
| 1.433 | 0.733 (break) | 0.28 |
| 2.0 | 0.374 | 0.211 |
| 3.0 | 0.223 | 0.147 |

**Sketch.** The target curve is flat at 2.2 V until 0.7 V, then falls linearly with slope $-A$, bends at 1.43 V and flattens to 0.22 V. The no-implant curve starts at 2.0 V at $V_{in} = 0$, immediately falls with the same slope $-A$, bends at 0.67 V and flattens to about 0.15 V. The whole active region has moved down and to the left.

### Step 7 — Practical consequence

Although the gain in the active region is unchanged, the operating point at a given input bias is drastically different. For example, an input biased at $V_{in} = 1.0$ V, which places the target circuit in the middle of its linear region ($V_{out} = 1.6$ V), drives the no-implant circuit deep into the triode region ($V_{out} = 0.4$ V), where the gain is small. The current at that bias is also much larger, since $M_1$ has 1.0 V of overdrive instead of 0.3 V. The usable input range moves down by about 0.7 V.

### Result

Without the threshold-adjust implant ($V_{THN} \approx 0$, $|V_{THP}| \approx 1$ V), with $A = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$:

- **High level:** $V_{DD} - |V_{THP}| = 2.0$ V instead of 2.2 V, and there is no flat "off" region: $M_1$ turns on at $V_{in} \approx 0$ instead of 0.7 V.
- **Linear segment:** $V_{out} = 2.0 - AV_{in}$ instead of $2.2 - A(V_{in} - 0.7)$: the **same slope $-A$** (same small-signal gain), shifted 0.7 V left and 0.2 V down, i.e. lower by $0.2 + 0.7A$ at the same $V_{in}$.
- **Triode break:** at $V_{in} = V_{out} = 2/(1 + A)$ instead of $(0.7 + 2.2/(1 + A),\ 2.2/(1 + A))$.
- **Low level:** lower; for $A = 2$, $V_{out}(3\ \mathrm{V}) \approx 0.15$ V instead of 0.22 V (breaks at 0.67 V instead of 1.43 V).

**Common mistake.** Considering only the NMOS threshold change. The missing implant also raises $|V_{THP}|$ from 0.8 V to 1 V, which lowers the diode-connected load's output level by 0.2 V; ignoring it misplaces the whole curve vertically.

**Common mistake.** Concluding that the gain changes. The slope of the linear segment is $-\sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_2]}$, which contains no threshold voltage; thresholds only shift where the line sits, not how steep it is.

**Common mistake.** Shifting the curve to the right. A *lower* NMOS threshold makes $M_1$ turn on at a *smaller* input voltage, so the transition moves to the left.
