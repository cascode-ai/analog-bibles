# Detailed solution - R128

**Approach.** With a resistive load the output moves only because the current changes, $V_{out} = V_{DD} - I_DR_D$, so parameterise everything by $I_D$. With $V_b$ fixed, $V_X = V_b - V_{GS2}(I_D)$ falls as the current grows. Write each transistor's saturation condition as a function of $I_D$, see which fails first as $V_{out}$ falls, and solve for that boundary (with the body effect of $M_2$).

### Step 1 — Everything as a function of $I_D$

With $\lambda = 0$ and $\beta = \mu_nC_{ox}W/L$:

$$\beta_1 = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\qquad \beta_2 = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}.$$

For a drain current $I_D$ (the same in both devices):

- **Output:** $V_{out} = V_{DD} - I_DR_D$, so a *lower* $V_{out}$ means a *larger* current.
- **Overdrives:**
$$V_{ov1} = \sqrt{2I_D/\beta_1},\qquad V_{ov2} = \sqrt{2I_D/\beta_2} = \sqrt5\,V_{ov1}.$$
- **Node $X$**, one $V_{GS2}$ below the fixed gate of $M_2$, with the body effect (bulk at ground, source at $V_X$):
$$V_X = V_b - V_{TH2}(V_X) - \sqrt{2I_D/\beta_2},\qquad V_{TH2}(V_X) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - \sqrt{0.9}\right).$$

### Step 2 — The two saturation conditions

**$M_1$** ($V_{DS1} = V_X$):

$$V_X \ge V_{ov1} = \sqrt{2I_D/\beta_1}.$$

As $I_D$ grows, the left side **falls** ($V_{GS2}$ grows) and the right side **grows**, so the margin $V_X - V_{ov1}$ shrinks quickly from 50 mV at the 0.5-mA bias point.

**$M_2$** ($V_{DS2} = V_{out} - V_X$):

$$V_{out} - V_X \ge V_b - V_X - V_{TH2}\quad\Longleftrightarrow\quad V_{out} \ge V_b - V_{TH2}(V_X) \approx 1.705 - 0.77 = 0.94\ \mathrm{V}.$$

At the bias point $V_{out} = 2.5$ V, so $M_2$ has about 1.56 V of margin against $M_1$'s 50 mV. **$M_1$ enters the triode region first.**

### Step 3 — Where $M_1$ reaches the edge of triode

At the edge $V_X = V_{ov1}$, so $V_{ov2} = \sqrt5\,V_X$, and the equation for $V_X$ becomes

$$V_X = V_b - V_{TH2}(V_X) - \sqrt5\,V_X\quad\Longrightarrow\quad (1 + \sqrt5)\,V_X + V_{TH2}(V_X) = V_b ,$$

$$3.236\,V_X + 0.7 + 0.45\left(\sqrt{0.9 + V_X} - 0.9487\right) = 1.705\ \mathrm{V}.$$

By trial (the left side increases with $V_X$):

| $V_X$ (V) | $3.236V_X$ | $\sqrt{0.9 + V_X}$ | $V_{TH2}$ | left side (V) |
|---|---|---|---|---|
| 0.280 | 0.906 | 1.0863 | 0.7616 | 1.668 |
| 0.290 | 0.938 | 1.0909 | 0.7640 | 1.702 |
| 0.2907 | 0.9408 | 1.0913 | 0.7641 | 1.705 ✓ |

So at the edge:

$$
\begin{aligned}
V_X &= V_{ov1} = 0.291\ \mathrm{V},\\
I_D &= \tfrac12\beta_1V_{ov1}^2 = \tfrac12(13.4\ \mathrm{mA/V^2})(0.2907\ \mathrm{V})^2 = 0.566\ \mathrm{mA},\\
V_{out,min} &= V_{DD} - I_DR_D = 3 - (0.566\ \mathrm{mA})(1\ \mathrm{k\Omega}) = 2.434\ \mathrm{V},\\
V_{in} &= V_{TH1} + V_{ov1} = 0.7 + 0.291 = 0.991\ \mathrm{V}.
\end{aligned}
$$

Check: $V_{ov2} = \sqrt5\times0.291 = 0.650$ V and $V_{TH2} = 0.764$ V give $V_{GS2} = 1.414$ V and $V_X = 1.705 - 1.414 = 0.291$ V ✓. $M_2$ needs only $V_{out} \ge V_b - V_{TH2} = 0.94$ V, far below 2.43 V, so it is still **comfortably saturated** (about 1.5 V of margin).

### Step 4 — The upper end of the range

As $V_{in}$ falls toward $V_{TH1} = 0.7$ V, $I_D \to 0$ and $V_{out} \to V_{DD} = 3$ V. Both devices stay (marginally) saturated, since their overdrives go to zero: $V_X$ rises to 0.84 V while $V_{ov1} \to 0$, and $V_{out} = 3$ V is far above $V_b - V_{TH2} \approx 0.84$ V. The output can rise all the way to $V_{DD}$.

### Step 5 — Table of the operating points

| $I_D$ (mA) | $V_{in}$ (V) | $V_X$ (V) | $V_{ov1}$ (V) | $M_1$ margin $V_X - V_{ov1}$ | $V_{out}$ (V) | $M_2$ margin (V) |
|---|---|---|---|---|---|---|
| 0 | 0.700 | 0.839 | 0 | 0.839 | 3.000 | 2.16 |
| 0.1 | 0.822 | 0.606 | 0.122 | 0.484 | 2.900 | 2.02 |
| 0.3 | 0.912 | 0.438 | 0.212 | 0.227 | 2.700 | 1.79 |
| 0.5 (bias) | 0.973 | 0.323 | 0.273 | 0.050 | 2.500 | 1.57 |
| 0.566 | 0.991 | 0.291 | 0.291 | 0 (edge) | 2.434 | 1.49 |

The $M_1$ margin collapses quickly with current, while the $M_2$ margin stays above 1.4 V.

### Result

- **$M_1$ enters the triode region first** as $V_{out}$ falls. A falling $V_{out}$ means a rising current, which raises $V_{GS2}$ and therefore *lowers* $V_X$, the drain voltage of $M_1$, while $M_1$'s own overdrive grows. The 50-mV margin is used up at $I_D \approx 0.566$ mA ($V_{in} \approx 0.99$ V).
- With both transistors saturated, the output can range from **$V_{out,min} \approx 2.43$ V up to $V_{DD} = 3$ V**, a swing of only **≈ 0.57 V**. Below the 2.5-V bias point the output can fall by only **≈ 66 mV**.
- $M_2$ would not leave saturation until $V_{out} \approx V_b - V_{TH2} \approx 0.94$ V, so it is never the limiting device here.

**Common mistake.** Assuming a constant current and concluding that $M_2$ limits the swing at $V_{out} \approx V_b - V_{TH2} \approx 0.93$ V (a swing of 1.5 V or more). With a resistor load the output moves only through the current, which lowers $V_X$ and raises $V_{ov1}$ at the same time, closing $M_1$'s small margin long before $M_2$ is in danger.

**Common mistake.** Keeping $V_X$ fixed at its bias value (0.323 V) while $V_{out}$ moves. $V_X = V_b - V_{GS2}$, and $V_{GS2}$ depends on the current.

**Common mistake.** Ignoring the body effect of $M_2$. It changes $V_{TH2}$ by 60–170 mV over the range and shifts the limit by tens of millivolts, a large error when the margin itself is only 50–70 mV.
