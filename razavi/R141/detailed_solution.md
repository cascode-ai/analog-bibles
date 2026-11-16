# Detailed solution - R141

**Approach.** Combine the input-loop relation $V_{GS} = V_{in} - I_DR_S$ with the incremental law $\Delta I_D = g_m\Delta V_{GS}$ to get $\Delta V_{GS}$ as a fraction of $\Delta V_{in}$. Then interpret: the nonlinear device sees a smaller swing, and the input-to-current relation becomes dominated by the linear resistor $R_S$. A numerical example quantifies the improvement.

### Step 1 — Solve for $\Delta V_{GS}$

Changing the given relation ($R_S$ constant) and using $\Delta I_D = g_m\Delta V_{GS}$, with $g_m = \mu_nC_{ox}(W/L)(V_{GS} - V_{TH})$ ($\lambda = \gamma = 0$):

$$\Delta V_{GS} = \Delta V_{in} - R_S\,\Delta I_D = \Delta V_{in} - g_mR_S\,\Delta V_{GS},$$

$$\Delta V_{GS}\,(1 + g_mR_S) = \Delta V_{in},$$

$$\boxed{\ \Delta V_{GS} = \frac{\Delta V_{in}}{1 + g_mR_S}\ }$$

It **decreases** as $g_mR_S$ increases: for $g_mR_S = 0$ the transistor sees the whole input change; for $g_mR_S = 1$, half of it; for $g_mR_S = 9$, only a tenth. The remainder appears across the resistor:

$$\Delta V_{R_S} = R_S\Delta I_D = \Delta V_{in} - \Delta V_{GS} = \frac{g_mR_S}{1 + g_mR_S}\,\Delta V_{in}.$$

### Step 2 — The resulting current and gain

$$\Delta I_D = g_m\Delta V_{GS} = \frac{g_m}{1 + g_mR_S}\,\Delta V_{in} \equiv G_m\Delta V_{in},$$

$$\Delta V_{out} = -R_D\,\Delta I_D\quad\Longrightarrow\quad A_v = -\frac{g_mR_D}{1 + g_mR_S}.$$

For $g_mR_S \gg 1$: $G_m \to 1/R_S$ and $A_v \to -R_D/R_S$, a **ratio of two resistors**, independent of the transistor.

### Step 3 — Why this means better linearity

The only nonlinear element is the transistor, whose $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ changes with the signal. Degeneration helps in three equivalent ways.

1. **Smaller swing across the nonlinear device.** Only $\Delta V_{in}/(1 + g_mR_S)$ appears across the gate–source. The square law's distortion term grows as $\Delta V_{GS}^2$, so shrinking $\Delta V_{GS}$ by $1 + g_mR_S$ shrinks the distortion even more.

2. **The current is set by the resistor.** At large signal the input loop reads
$$V_{in} - V_{TH} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)}} + I_DR_S ,$$
a square-root term plus a linear term. The larger $R_S$, the more $I_DR_S$ dominates, and $I_D \approx (V_{in} - V_{TH})/R_S$ becomes a straight-line function of $V_{in}$.

3. **The effective transconductance hardly varies.** Differentiating $G_m = g_m/(1 + g_mR_S)$,
$$\frac{dG_m}{G_m} = \frac{1}{1 + g_mR_S}\cdot\frac{dg_m}{g_m},$$
so a fractional change of $g_m$ produces a $(1 + g_mR_S)$ times smaller fractional change of $G_m$, and of the gain $A_v = -G_mR_D$.

This is local negative feedback: $R_S$ senses the current and subtracts $I_DR_S$ from the drive, trading gain (reduced by the loop gain $1 + g_mR_S$) for linearity.

### Step 4 — Numerical illustration

Take $\mu_nC_{ox}(W/L) = 13.4\ \mathrm{mA/V^2}$ (e.g. $W/L = 50/0.5$), a current swing of 0.25–1 mA (4:1), and $R_S = 1$ kΩ:

| $I_D$ | $g_m$ | $g_mR_S$ | $G_m$ |
|---|---|---|---|
| 0.25 mA | 2.59 mS | 2.59 | 0.721 mS |
| 0.50 mA | 3.66 mS | 3.66 | 0.785 mS |
| 1.00 mA | 5.18 mS | 5.18 | 0.838 mS |

Without degeneration the incremental gain would change by **100 %** over this range (2.59 → 5.18 mS); with $R_S = 1$ kΩ it changes by only **16 %** (0.721 → 0.838 mS), already close to $1/R_S = 1$ mS. A larger $R_S$ would flatten it further, at the cost of a lower gain.

### Result

$$\Delta V_{GS} = \frac{\Delta V_{in}}{1 + g_mR_S},$$

which falls as $g_mR_S$ grows: the larger the degeneration, the smaller the fraction of the input that appears across the gate–source of the nonlinear transistor. Most of $\Delta V_{in}$ appears across the linear resistor, so $\Delta I_D = g_m\Delta V_{in}/(1 + g_mR_S) \to \Delta V_{in}/R_S$ and $A_v \to -R_D/R_S$. The current, and hence $V_{out} = V_{DD} - I_DR_D$, is set by resistors rather than by the square law, so the stage becomes more linear. (With body effect included, $\Delta V_{GS} = \Delta V_{in}(1 + g_{mb}R_S)/[1 + (g_m + g_{mb})R_S]$, with the same trend.)

**Common mistake.** Writing $\Delta V_{GS} = \Delta V_{in}(1 + g_mR_S)$, i.e. getting the sign of the feedback wrong. A rise in $V_{in}$ raises $I_D$ and the source voltage, which *opposes* the increase of $V_{GS}$.

**Common mistake.** Concluding that degeneration worsens linearity because it lowers the gain. The remaining characteristic is governed by the linear $R_S$ and $R_D$; the transistor handles only a fraction $1/(1 + g_mR_S)$ of the signal.

**Common mistake.** Confusing $g_m$ with $G_m$. The device $g_m$ still varies with the current; it is $G_m = g_m/(1 + g_mR_S)$, which sets the gain, that becomes nearly constant.
