# Detailed solution - R128

**Approach.** With a resistive load, the output can only move because the drain current changes: $V_{out} = V_{DD} - I_DR_D$. So we parameterise everything by $I_D$. With $V_b$ fixed, the voltage at $X$ is $V_X = V_b - V_{GS2}(I_D)$, which falls as the current grows. We then write the saturation condition of each transistor as a function of $I_D$, see which one fails first as $V_{out}$ falls, and solve for that boundary (with the body effect of $M_2$ included).

### Step 1 — Setting up: everything as a function of $I_D$

Circuit (from the figure): $M_1$ (gate $V_{in}$, source at ground, drain at $X$), cascode $M_2$ (gate at $V_b = 1.705$ V, source at $X$, drain at $V_{out}$), and $R_D = 1$ kΩ from $V_{out}$ to $V_{DD} = 3$ V. Channel-length modulation is neglected.

Device constants ($\beta = \mu_nC_{ox}W/L$):

$$\beta_1 = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\qquad \beta_2 = (134\ \mu\mathrm{A/V^2})(20) = 2.68\ \mathrm{mA/V^2}.$$

For a drain current $I_D$ (the same in both devices):

- **Output voltage** (Ohm's law on $R_D$): $V_{out} = V_{DD} - I_DR_D$. A *lower* $V_{out}$ means a *larger* current.
- **Overdrive voltages** (square law, $I_D = \tfrac12\beta V_{ov}^2$):
$$V_{ov1} = \sqrt{2I_D/\beta_1},\qquad V_{ov2} = \sqrt{2I_D/\beta_2} = \sqrt5\,V_{ov1}.$$
- **Node $X$.** The gate of $M_2$ is fixed, so its source sits $V_{GS2} = V_{TH2} + V_{ov2}$ below $V_b$:
$$V_X = V_b - V_{TH2}(V_X) - \sqrt{2I_D/\beta_2},\qquad V_{TH2}(V_X) = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - \sqrt{0.9}\right).$$
Here $V_{TH2}$ includes the body effect: the bulk of $M_2$ is at ground and its source is at $V_X$.

### Step 2 — The two saturation conditions

**$M_1$** ($V_{DS1} = V_X$, $V_{GS1} - V_{TH1} = V_{ov1}$):

$$V_X \ge V_{ov1} = \sqrt{2I_D/\beta_1}.$$

As $I_D$ grows, the left side **falls** ($V_{GS2}$ grows) while the right side **grows**. The margin $V_X - V_{ov1}$ therefore shrinks quickly, from 50 mV at the 0.5-mA bias point.

**$M_2$** ($V_{DS2} = V_{out} - V_X$, $V_{GS2} - V_{TH2} = V_b - V_X - V_{TH2}$):

$$V_{out} - V_X \ge V_b - V_X - V_{TH2}\quad\Longleftrightarrow\quad V_{out} \ge V_b - V_{TH2}(V_X) \approx 1.705 - 0.77 = 0.94\ \mathrm{V}.$$

At the bias point $V_{out} = 2.5$ V, so $M_2$ has about 1.56 V of margin.

So when $V_{out}$ falls (current rises), $M_1$ has only 50 mV of margin to lose, while $M_2$ has more than 1.5 V. **$M_1$ enters the triode region first.**

### Step 3 — Where $M_1$ reaches the edge of triode

At the edge, $V_X = V_{ov1}$, and from Step 1 $V_{ov2} = \sqrt5\,V_{ov1} = \sqrt5\,V_X$. Substituting into the equation for $V_X$:

$$V_X = V_b - V_{TH2}(V_X) - \sqrt5\,V_X\quad\Longrightarrow\quad (1 + \sqrt5)\,V_X + V_{TH2}(V_X) = V_b .$$

Written out:

$$3.236\,V_X + 0.7 + 0.45\left(\sqrt{0.9 + V_X} - 0.9487\right) = 1.705\ \mathrm{V}.$$

Solve by trial (the left side increases with $V_X$):

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

At this point $V_{ov2} = \sqrt5\times0.291 = 0.650$ V and $V_{TH2} = 0.764$ V, so $V_{GS2} = 1.414$ V and $V_X = 1.705 - 1.414 = 0.291$ V, consistent with the result. $M_2$'s condition requires $V_{out} \ge V_b - V_{TH2} = 0.94$ V, which is far below 2.43 V, so **$M_2$ is still comfortably saturated** (about 1.5 V of margin).

### Step 4 — The upper end of the range

As $V_{in}$ is lowered toward $V_{TH1} = 0.7$ V, the current goes to zero and $V_{out} \to V_{DD} = 3$ V. Both devices remain (marginally) saturated all the way, because their overdrives go to zero:

- $M_1$: $V_X$ rises to 0.84 V while $V_{ov1} \to 0$;
- $M_2$: $V_{out} = 3$ V is far above $V_b - V_{TH2} \approx 0.84$ V.

The output can therefore rise all the way to $V_{DD}$.

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

**Common mistake.** Treating the stage as if the current were constant and concluding that $M_2$ limits the swing at $V_{out} \approx V_b - V_{TH2} \approx 0.93$ V (a swing of 1.5 V or more). With a resistor load, the output moves only because the current changes, and the current change moves $V_X$ down and $V_{ov1}$ up at the same time, closing $M_1$'s small margin long before $M_2$ is in danger.

**Common mistake.** Keeping $V_X$ fixed at its bias value (0.323 V) while $V_{out}$ moves. $V_X$ is set by $V_b - V_{GS2}$, and $V_{GS2}$ depends on the current, so $V_X$ falls when $V_{out}$ falls.

**Common mistake.** Ignoring the body effect of $M_2$. It changes $V_{TH2}$ by 60–170 mV over the range and shifts the computed limit by tens of millivolts, which is a large error when the margin itself is only 50–70 mV.
