# Detailed solution - R141

**Approach.** Combine two relations: Kirchhoff's voltage law (KVL) around the input loop ($V_{in} = V_{GS} + I_DR_S$), and the transistor's incremental law ($\Delta I_D = g_m\Delta V_{GS}$). Solving them gives $\Delta V_{GS}$ as a fraction of $\Delta V_{in}$. We then interpret the result: the nonlinear device sees a smaller voltage swing, and the input-to-current relation becomes dominated by the linear resistor $R_S$. A numerical example quantifies the improvement.

### Step 1 — The circuit and the two relations

From the figure: $M_1$ has its gate at $V_{in}$, its drain at $V_{out}$ (through $R_D$ to $V_{DD}$) and its source on $R_S$ to ground. Channel-length modulation and body effect are neglected.

**KVL around the input loop** (gate → source → $R_S$ → ground): the input voltage divides between the gate–source voltage and the drop across $R_S$:

$$V_{in} = V_{GS} + I_DR_S\quad\Longleftrightarrow\quad V_{GS} = V_{in} - I_DR_S .$$

**Transistor law** (saturation, square law): $I_D = \tfrac12\mu_nC_{ox}\frac WL(V_{GS} - V_{TH})^2$. For a small change around the operating point, the current changes by

$$\Delta I_D = g_m\,\Delta V_{GS},\qquad g_m = \frac{\partial I_D}{\partial V_{GS}} = \mu_nC_{ox}\frac WL(V_{GS} - V_{TH}).$$

### Step 2 — Solve for $\Delta V_{GS}$

Take the change of the KVL relation ($R_S$ is constant):

$$\Delta V_{GS} = \Delta V_{in} - R_S\,\Delta I_D .$$

Substitute $\Delta I_D = g_m\Delta V_{GS}$:

$$\Delta V_{GS} = \Delta V_{in} - g_mR_S\,\Delta V_{GS}.$$

Collect the $\Delta V_{GS}$ terms:

$$\Delta V_{GS}\,(1 + g_mR_S) = \Delta V_{in},$$

$$\boxed{\ \Delta V_{GS} = \frac{\Delta V_{in}}{1 + g_mR_S}\ }$$

It **decreases** as $g_mR_S$ increases: for $g_mR_S = 0$ the transistor sees the whole input change; for $g_mR_S = 1$, half of it; for $g_mR_S = 9$, only a tenth.

The remainder appears across the resistor:

$$\Delta V_{R_S} = R_S\Delta I_D = \Delta V_{in} - \Delta V_{GS} = \frac{g_mR_S}{1 + g_mR_S}\,\Delta V_{in}.$$

### Step 3 — The resulting current and gain

$$\Delta I_D = g_m\Delta V_{GS} = \frac{g_m}{1 + g_mR_S}\,\Delta V_{in} \equiv G_m\Delta V_{in},$$

$$\Delta V_{out} = -R_D\,\Delta I_D\quad\Longrightarrow\quad A_v = -\frac{g_mR_D}{1 + g_mR_S}.$$

For $g_mR_S \gg 1$: $G_m \to 1/R_S$ and $A_v \to -R_D/R_S$, a **ratio of two resistors**, independent of the transistor.

### Step 4 — Why this means better linearity

The only nonlinear element in the stage is the transistor: its current is a square-law function of $V_{GS}$, so its $g_m$ changes with the signal (by the square law, $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ changes with the current). Degeneration helps in three equivalent ways.

1. **Smaller swing across the nonlinear device.** Only $\Delta V_{in}/(1 + g_mR_S)$ appears across the gate–source. Most of the input is absorbed by the linear resistor. Nonlinear terms of a device grow faster than linearly with its input swing (the square law's distortion term is $\propto\Delta V_{GS}^2$), so shrinking $\Delta V_{GS}$ by $1 + g_mR_S$ shrinks the distortion even more.

2. **The current is set by the resistor.** Writing the input loop at large signal,
$$V_{in} - V_{TH} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}} + I_DR_S ,$$
the input is a nonlinear (square-root) term plus a linear term $I_DR_S$. The larger $R_S$, the more the linear term dominates, and $I_D \approx (V_{in} - V_{TH})/R_S$ becomes a straight-line function of $V_{in}$.

3. **The effective transconductance hardly varies.** $G_m = g_m/(1 + g_mR_S)$ depends on $g_m$ only weakly. Differentiating,
$$\frac{dG_m}{G_m} = \frac{1}{1 + g_mR_S}\cdot\frac{dg_m}{g_m},$$
so a given fractional change of $g_m$ produces a $(1 + g_mR_S)$ times smaller fractional change of $G_m$, and hence of the gain $A_v = -G_mR_D$.

This is local negative feedback: $R_S$ senses the output current and subtracts $I_DR_S$ from the drive. As always with negative feedback, it trades gain for linearity: the gain drops by $1 + g_mR_S$ (the loop gain).

### Step 5 — Numerical illustration

Take $\mu_nC_{ox}(W/L) = 13.4\ \mathrm{mA/V^2}$ (e.g. $W/L = 50/0.5$) and let the signal swing the current over 0.25–1 mA (a 4:1 range). Using $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ and $G_m = g_m/(1 + g_mR_S)$ with $R_S = 1$ kΩ:

| $I_D$ | $g_m$ | $g_mR_S$ | $G_m$ |
|---|---|---|---|
| 0.25 mA | 2.59 mS | 2.59 | 0.721 mS |
| 0.50 mA | 3.66 mS | 3.66 | 0.785 mS |
| 1.00 mA | 5.18 mS | 5.18 | 0.838 mS |

Without degeneration the incremental gain would change by **100 %** over this range (2.59 → 5.18 mS). With $R_S = 1$ kΩ it changes by only **16 %** (0.721 → 0.838 mS), and it is already close to $1/R_S = 1$ mS. A larger $R_S$ would flatten it further, at the cost of a lower gain.

### Result

$$\Delta V_{GS} = \frac{\Delta V_{in}}{1 + g_mR_S},$$

which falls as $g_mR_S$ grows: the larger the degeneration, the smaller the fraction of the input that appears across the gate–source of the nonlinear transistor. Most of $\Delta V_{in}$ appears across the linear resistor, so $\Delta I_D = g_m\Delta V_{in}/(1 + g_mR_S) \to \Delta V_{in}/R_S$ and $A_v \to -R_D/R_S$. The current, and hence $V_{out} = V_{DD} - I_DR_D$, is set by resistors rather than by the square law, so the stage becomes more linear. (With body effect included, $\Delta V_{GS} = \Delta V_{in}(1 + g_{mb}R_S)/[1 + (g_m + g_{mb})R_S]$, with the same trend.)

**Common mistake.** Writing $\Delta V_{GS} = \Delta V_{in}(1 + g_mR_S)$ or forgetting the sign of the feedback. An increase in $V_{in}$ raises $I_D$, which raises the source voltage and *opposes* the increase of $V_{GS}$, so $\Delta V_{GS}$ is *smaller* than $\Delta V_{in}$.

**Common mistake.** Concluding that degeneration worsens linearity because it lowers the gain. The gain is reduced, but the part of the transfer characteristic that remains is governed by $R_S$ and $R_D$, which are linear. The nonlinear device handles only a fraction $1/(1 + g_mR_S)$ of the signal.

**Common mistake.** Confusing $g_m$ with $G_m$. The device transconductance $g_m$ still varies with the current exactly as before; it is the overall $G_m = g_m/(1 + g_mR_S)$ that becomes nearly constant, and that is what sets the stage's gain.
