# Detailed solution - R225

**Approach.** Since $M_1$ is saturated and $\lambda = 0$, the square law gives the gate–source voltage needed for $I_{out} = 0.5$ mA. The gate draws no current, so $R_1$–$R_2$ is an unloaded voltage divider whose output must equal that $V_{GS}$. That fixes the ratio $R_2/R_1$.

### Step 1 — The circuit

Reading the figure:

- $R_1$ runs from $V_{DD} = 3$ V to the gate of $M_1$, and $R_2$ from the gate to ground.
- The source and bulk of $M_1$ are grounded, so $V_{GS} = V_G$ (the gate voltage) and there is no body effect: $V_{TH} = 0.7$ V.
- The drain current $I_{out}$ flows into the drain of $M_1$ from an external circuit. It is the output of this simple current source.

### Step 2 — Required overdrive from the square law

For a saturated NMOS with $\lambda = 0$ (square law):

$$I_{out} = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)^2 .$$

Here $V_{GS} - V_{TH} = V_{ov}$ is the overdrive voltage.

**Aspect ratio** (effective dimensions):

$$\frac{W}{L} = \frac{50\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 100 .$$

**Device transconductance parameter:**

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2} .$$

**Solve the square law for the overdrive:**

$$V_{ov} = \sqrt{\frac{2I_{out}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.07463\ \mathrm{V^2}} = 0.273\ \mathrm{V} .$$

(We take the positive root: a conducting NMOS has $V_{GS} > V_{TH}$.)

**Required gate–source voltage:**

$$V_{GS} = V_{TH} + V_{ov} = 0.7\ \mathrm{V} + 0.273\ \mathrm{V} = 0.973\ \mathrm{V} .$$

### Step 3 — The divider

The gate of a MOSFET draws no dc current, so the same current flows through $R_1$ and $R_2$ and the divider is unloaded:

$$V_{GS} = V_{DD}\,\frac{R_2}{R_1 + R_2} .$$

**Divider ratio:**

$$\frac{R_2}{R_1 + R_2} = \frac{V_{GS}}{V_{DD}} = \frac{0.973\ \mathrm{V}}{3\ \mathrm{V}} = 0.324 .$$

**Convert to $R_2/R_1$.** Divide the numerator and denominator of the divider expression by $R_1$:

$$\frac{R_2}{R_1 + R_2} = \frac{R_2/R_1}{1 + R_2/R_1} .$$

Setting this equal to $V_{GS}/V_{DD}$ and solving for $R_2/R_1$:

$$
\begin{aligned}
\frac{R_2}{R_1}\cdot V_{DD} &= V_{GS}\left(1 + \frac{R_2}{R_1}\right),\\
\frac{R_2}{R_1}\left(V_{DD} - V_{GS}\right) &= V_{GS},\\
\frac{R_2}{R_1} &= \frac{V_{GS}}{V_{DD} - V_{GS}} .
\end{aligned}
$$

This is simply the ratio of the voltage across $R_2$ to the voltage across $R_1$, which carry the same current. Numerically:

$$\frac{R_2}{R_1} = \frac{0.973\ \mathrm{V}}{3\ \mathrm{V} - 0.973\ \mathrm{V}} = \frac{0.973}{2.027} = 0.480 .$$

### Step 4 — Checks

- **Back-substitution.** With $R_2/R_1 = 0.480$, $V_{GS} = 3\ \mathrm{V}\times\frac{0.480}{1.480} = 0.973$ V and $I_{out} = \tfrac12(13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V})^2 = 0.500$ mA. ✓
- **Saturation.** $M_1$ is saturated as long as its drain voltage satisfies $V_{DS} \ge V_{ov} = 0.273$ V. The problem states this holds; it is a condition on the circuit fed by $I_{out}$.
- **Only the ratio is set.** The absolute values of $R_1$ and $R_2$ are free. Larger values draw less current from $V_{DD}$ (for example $R_1 = 20.8\ \mathrm{k}\Omega$, $R_2 = 10\ \mathrm{k}\Omega$ draws $3\ \mathrm{V}/30.8\ \mathrm{k}\Omega \approx 0.1$ mA) but make the gate node more sensitive to noise and leakage.

### Result

$$V_{GS} = 0.7 + 0.273 = 0.973\ \mathrm{V}, \qquad \frac{R_2}{R_1 + R_2} = 0.324, \qquad \frac{R_2}{R_1} = \frac{V_{GS}}{V_{DD} - V_{GS}} \approx 0.48 .$$

**Common mistake.** Inverting the divider, i.e. using $V_{GS} = V_{DD}R_1/(R_1 + R_2)$, which gives $R_2/R_1 \approx 2.1$. In the figure $R_2$ is the resistor from the gate to *ground*, so the gate voltage is $V_{DD}R_2/(R_1 + R_2)$.

**Common mistake.** Dropping the factor $\tfrac12$ in the square law. That gives $V_{ov} = \sqrt{0.5/13.4} = 0.193$ V, $V_{GS} = 0.893$ V and $R_2/R_1 \approx 0.42$. The saturation current is $\tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$.

**Common mistake.** Setting $V_{GS} = V_{TH}$ ("the transistor just turns on"). At $V_{GS} = V_{TH}$ the square-law current is zero. Delivering 0.5 mA requires an overdrive of 0.273 V on top of the threshold.
