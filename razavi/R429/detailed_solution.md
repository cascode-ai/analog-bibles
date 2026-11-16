# Detailed solution - R429

**Approach.** The cascodes $M_3$, $M_4$ pin the drains of the input pair at $V_{b1} - V_{GS3}$, independent of the input. Raising the input common-mode level raises the gates of $M_1$, $M_2$ while their drains stay put, so the maximum input common-mode level is where $M_1$ reaches the edge of saturation.

### Step 1 — Drain voltage of the input devices

Each branch carries $I_{SS}/2 = 0.5$ mA, all devices have $W/L = 100/0.5 = 200$, and there is no body effect:

$$V_{OD3} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.0373\ \mathrm{V^2}} = 0.193\ \mathrm{V},$$

$$V_{GS3} = V_{TH} + V_{OD3} = 0.7 + 0.193 = 0.893\ \mathrm{V}.$$

The source of $M_3$, i.e. the drain of $M_1$, sits one $V_{GS3}$ below $V_{b1}$:

$$V_{D1} = V_{b1} - V_{GS3} = 1.7 - 0.893 = 0.807\ \mathrm{V},$$

and likewise for $M_2$ via $M_4$. Since $M_3$ carries a fixed 0.5 mA, this does not change with the input common-mode level.

### Step 2 — Saturation limit of $M_1$

$M_1$ is saturated while $V_{D1} \ge V_{G1} - V_{TH1}$, with its gate at $V_{in,CM}$:

$$
\begin{aligned}
V_{D1} &\ge V_{in,CM} - V_{TH1}\\
V_{in,CM} &\le V_{D1} + V_{TH1} = V_{b1} - V_{GS3} + V_{TH1}\\
&= 0.807 + 0.7 = 1.507\ \mathrm{V}.
\end{aligned}
$$

$$V_{in,CM,max} \approx 1.51\ \mathrm{V}.$$

With $V_{GS3} = V_{TH} + V_{OD3}$ this is simply $V_{in,CM,max} = V_{b1} - V_{OD3}$. Raising $V_{in,CM}$ raises the pair's source node by the same amount (fixed tail current, fixed $V_{GS1}$), shrinking $V_{DS1}$ until $M_1$ leaves saturation.

### Step 3 — Side check: the other devices

- **$M_3$:** its drain is node X (drain of $M_3$/$M_5$, gate of $M_7$), at $V_X = V_{DD} - |V_{GS7}|$. With $|V_{OD7}| = \sqrt{2(0.5\ \mathrm{mA})/((38.4\ \mu\mathrm{A/V^2})(200))} = 0.361$ V, $|V_{GS7}| = 1.161$ V and $V_X = 3 - 1.161 = 1.84$ V. $M_3$ needs $V_X \ge V_{b1} - V_{TH} = 1.0$ V. ✓ This does not depend on $V_{in,CM}$.
- **Tail:** ideal, so the low end of the input range is not part of this question.

The input pair therefore sets the upper limit.

### Result

$$V_{in,CM,max} = V_{b1} - V_{GS3} + V_{TH1} = 1.7 - 0.893 + 0.7 \approx 1.51\ \mathrm{V},$$

set by $M_1$ (and $M_2$) reaching the edge of saturation, since their drains are pinned at $V_{b1} - V_{GS3} = 0.807$ V by the cascodes.

**Common mistake.** Quoting $V_{b1} - V_{GS3} = 0.807$ V or $V_{b1} = 1.7$ V as the limit. The gate of an NMOS may rise one *threshold* above its drain before the device leaves saturation.

**Common mistake.** Treating the result as a lower bound. A higher input pushes the pair toward triode, so this is the *maximum* level.

**Common mistake.** Using $W/L = 100$ instead of $100\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 200$, which gives $V_{OD3} = 0.273$ V and a limit of about 1.43 V.
