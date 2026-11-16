# Detailed solution - R225

**Approach.** With $M_1$ saturated and $\lambda = 0$, the square law gives the $V_{GS}$ needed for $I_{out} = 0.5$ mA. The gate draws no current, so $R_1$–$R_2$ is an unloaded divider whose output must equal that $V_{GS}$, which fixes $R_2/R_1$.

### Step 1 — Required overdrive from the square law

The source and bulk are grounded, so $V_{GS} = V_G$ and $V_{TH} = 0.7$ V. With $W/L = 50\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 100$,

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2} ,$$

and $I_{out} = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)^2$ gives

$$V_{ov} = \sqrt{\frac{2I_{out}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.07463\ \mathrm{V^2}} = 0.273\ \mathrm{V} ,$$

$$V_{GS} = V_{TH} + V_{ov} = 0.7\ \mathrm{V} + 0.273\ \mathrm{V} = 0.973\ \mathrm{V} .$$

### Step 2 — The divider

The gate draws no dc current, so

$$V_{GS} = V_{DD}\,\frac{R_2}{R_1 + R_2}, \qquad \frac{R_2}{R_1 + R_2} = \frac{V_{GS}}{V_{DD}} = \frac{0.973\ \mathrm{V}}{3\ \mathrm{V}} = 0.324 .$$

Writing $\frac{R_2}{R_1 + R_2} = \frac{R_2/R_1}{1 + R_2/R_1}$ and solving for $R_2/R_1$:

$$
\begin{aligned}
\frac{R_2}{R_1}\cdot V_{DD} &= V_{GS}\left(1 + \frac{R_2}{R_1}\right),\\
\frac{R_2}{R_1}\left(V_{DD} - V_{GS}\right) &= V_{GS},\\
\frac{R_2}{R_1} &= \frac{V_{GS}}{V_{DD} - V_{GS}} ,
\end{aligned}
$$

the ratio of the voltages across $R_2$ and $R_1$, which carry the same current. Numerically:

$$\frac{R_2}{R_1} = \frac{0.973\ \mathrm{V}}{3\ \mathrm{V} - 0.973\ \mathrm{V}} = \frac{0.973}{2.027} = 0.480 .$$

### Step 3 — Checks

- **Back-substitution.** With $R_2/R_1 = 0.480$, $V_{GS} = 3\ \mathrm{V}\times\frac{0.480}{1.480} = 0.973$ V and $I_{out} = \tfrac12(13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V})^2 = 0.500$ mA. ✓
- **Saturation** requires $V_{DS} \ge V_{ov} = 0.273$ V, a condition on the circuit fed by $I_{out}$, which the problem states holds.
- **Only the ratio is set.** Larger resistors draw less supply current (for example $R_1 = 20.8\ \mathrm{k}\Omega$, $R_2 = 10\ \mathrm{k}\Omega$ draws $3\ \mathrm{V}/30.8\ \mathrm{k}\Omega \approx 0.1$ mA) but make the gate node more sensitive to noise and leakage.

### Result

$$V_{GS} = 0.7 + 0.273 = 0.973\ \mathrm{V}, \qquad \frac{R_2}{R_1 + R_2} = 0.324, \qquad \frac{R_2}{R_1} = \frac{V_{GS}}{V_{DD} - V_{GS}} \approx 0.48 .$$

**Common mistake.** Inverting the divider, $V_{GS} = V_{DD}R_1/(R_1 + R_2)$, which gives $R_2/R_1 \approx 2.1$. $R_2$ is the resistor from the gate to *ground*.

**Common mistake.** Dropping the factor $\tfrac12$ in the square law, which gives $V_{ov} = \sqrt{0.5/13.4} = 0.193$ V, $V_{GS} = 0.893$ V and $R_2/R_1 \approx 0.42$.

**Common mistake.** Setting $V_{GS} = V_{TH}$ ("the transistor just turns on"), where the current is zero; 0.5 mA needs an overdrive of 0.273 V on top of the threshold.
