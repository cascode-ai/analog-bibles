# Detailed solution - R429

**Approach.** The cascode devices $M_3$, $M_4$ pin the drains of the input pair at $V_{b1} - V_{GS3}$, independent of the input. Raising the input common-mode level raises the gates of $M_1$, $M_2$ while their drains stay put, so the input devices eventually enter the triode region. The maximum input common-mode level is where $M_1$ reaches the edge of saturation.

### Step 1 — Reading the circuit

- $M_1$–$M_2$: NMOS input pair, with the differential input between their gates and an ideal tail $I_{SS} = 1$ mA at their common source.
- $M_3$–$M_4$: NMOS cascodes with gates at $V_{b1} = 1.7$ V; the source of $M_3$ is the drain of $M_1$.
- $M_5$–$M_6$: PMOS cascodes with gates at $V_{b2}$.
- $M_7$–$M_8$: PMOS current sources whose gates are tied to node X, the drain of $M_3$/$M_5$ (a low-voltage cascode mirror).

At balance each branch carries $I_{SS}/2 = 0.5$ mA. All devices have $W/L = 100/0.5 = 200$ and there is no body effect.

### Step 2 — Gate–source voltage of the cascode $M_3$

Square-law overdrive of an NMOS carrying 0.5 mA:

$$V_{OD3} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.0373\ \mathrm{V^2}} = 0.193\ \mathrm{V},$$

$$V_{GS3} = V_{TH} + V_{OD3} = 0.7 + 0.193 = 0.893\ \mathrm{V}.$$

### Step 3 — Drain voltage of the input devices

The gate of $M_3$ is held at $V_{b1}$, and its source is one $V_{GS3}$ lower. That source is the drain of $M_1$:

$$V_{D1} = V_{b1} - V_{GS3} = 1.7 - 0.893 = 0.807\ \mathrm{V}.$$

The same holds for $M_2$ (via $M_4$). Since $M_3$ carries a fixed 0.5 mA, this voltage does not change when the input common-mode level changes.

### Step 4 — Saturation limit of $M_1$

An NMOS is saturated while its drain is no lower than one threshold below its gate, $V_D \ge V_G - V_{TH}$. With the gate at $V_{in,CM}$:

$$
\begin{aligned}
V_{D1} &\ge V_{in,CM} - V_{TH1}\\
V_{in,CM} &\le V_{D1} + V_{TH1} = V_{b1} - V_{GS3} + V_{TH1}\\
&= 0.807 + 0.7 = 1.507\ \mathrm{V}.
\end{aligned}
$$

So

$$V_{in,CM,max} \approx 1.51\ \mathrm{V}.$$

Since $V_{GS3} = V_{TH} + V_{OD3}$ and there is no body effect, this simplifies to $V_{in,CM,max} = V_{b1} - V_{OD3}$: the input may come up to one cascode overdrive below $V_{b1}$.

**Intuition.** Raising $V_{in,CM}$ raises the source node of the pair by the same amount (the tail current is fixed, so $V_{GS1}$ stays constant), which shrinks $V_{DS1}$. When $V_{DS1}$ falls to $V_{OD1}$, $M_1$ leaves saturation and the gain collapses.

### Step 5 — Side check: the other devices

- **$M_3$:** its drain is at X. $M_7$'s gate is at X and its source at $V_{DD}$, so $V_X = V_{DD} - |V_{GS7}|$. With $|V_{OD7}| = \sqrt{2(0.5\ \mathrm{mA})/((38.4\ \mu\mathrm{A/V^2})(200))} = 0.361$ V, $|V_{GS7}| = 1.161$ V and $V_X = 3 - 1.161 = 1.84$ V. $M_3$ needs $V_X \ge V_{b1} - V_{TH} = 1.0$ V. ✓ This does not depend on $V_{in,CM}$.
- **Tail:** ideal, so the low end of the input range is not part of this question.

So the input pair sets the upper limit of the input common-mode range.

### Result

$$V_{in,CM,max} = V_{b1} - V_{GS3} + V_{TH1} = 1.7 - 0.893 + 0.7 \approx 1.51\ \mathrm{V},$$

set by $M_1$ (and $M_2$) reaching the edge of saturation, since their drains are pinned at $V_{b1} - V_{GS3} = 0.807$ V by the cascodes.

**Common mistake.** Quoting $V_{b1} - V_{GS3} = 0.807$ V (the drain voltage itself) or $V_{b1} = 1.7$ V as the limit. The gate of an NMOS may rise to one *threshold* above its drain before the device leaves saturation, so the limit is $V_{D1} + V_{TH}$.

**Common mistake.** Treating the result as a lower bound on the input level. A higher input pushes the pair toward the triode region, so this is the *maximum* input common-mode level.

**Common mistake.** Using $W/L = 100$ instead of $100\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 200$. With the wrong ratio, $V_{OD3}$ comes out as 0.273 V and the limit as about 1.43 V.
