# Detailed solution - R131

**Approach.** Write the edge-of-triode condition $V_{DS} = V_{GS} - V_{TH}$ in terms of node voltages ($V_{out} = V_{in} - V_{TH}$). Express $V_{in}$ and $V_{out}$ through the drain current using the square law and Ohm's law. This gives a quadratic equation for the overdrive voltage; solving it yields $I_D$, $V_{in}$ and $V_{out}$. Finally, evaluate $g_m$ at that point and use the degenerated common-source gain formula ($\lambda = \gamma = 0$).

### Step 1 — The circuit and the edge-of-triode condition

From the figure: $M_1$ has its gate at $V_{in}$, its drain at $V_{out}$ (connected to $V_{DD} = 3$ V through $R_D = 2$ kΩ) and its source on $R_S = 200$ Ω to ground.

$M_1$ is at the **edge of the triode region** when its drain–source voltage equals its overdrive voltage, i.e. $V_{DS} = V_{GS} - V_{TH}$. Both sides share the source voltage $V_S$:

$$V_{out} - V_S = V_{in} - V_S - V_{TH}\quad\Longrightarrow\quad V_{out} = V_{in} - V_{TH}.$$

In words: the drain is exactly one threshold below the gate. As $V_{in}$ rises, the current grows and $V_{out}$ falls, so this condition is met at one particular input level.

### Step 2 — Express $V_{in}$ and $V_{out}$ through the overdrive

Let $V_{ov} = V_{GS} - V_{TH}$ be the overdrive voltage and $\beta = \mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$. In saturation (square law, $\lambda = 0$):

$$I_D = \tfrac12\beta V_{ov}^2 .$$

**Output** (Ohm's law on $R_D$):

$$V_{out} = V_{DD} - I_DR_D .$$

**Input** (KVL from gate to ground through $V_{GS}$ and $R_S$; with $\gamma = 0$ the threshold is 0.7 V regardless of the source voltage):

$$V_{in} = V_{GS} + V_S = V_{TH} + V_{ov} + I_DR_S .$$

### Step 3 — Solve for the overdrive

Substitute both expressions into the edge condition $V_{out} = V_{in} - V_{TH}$:

$$V_{DD} - I_DR_D = V_{ov} + I_DR_S .$$

Move the current terms together:

$$V_{DD} = V_{ov} + I_D(R_D + R_S) = V_{ov} + \tfrac12\beta(R_D + R_S)\,V_{ov}^2 .$$

Numerically, $\tfrac12\beta(R_D + R_S) = \tfrac12(13.4\ \mathrm{mA/V^2})(2.2\ \mathrm{k\Omega}) = 14.74\ \mathrm{V^{-1}}$, so

$$14.74\,V_{ov}^2 + V_{ov} - 3 = 0 .$$

Quadratic formula, positive root (the overdrive of a conducting device is positive):

$$V_{ov} = \frac{-1 + \sqrt{1 + 4(14.74)(3)}}{2(14.74)} = \frac{-1 + \sqrt{177.88}}{29.48} = \frac{-1 + 13.337}{29.48} = 0.4185\ \mathrm{V}.$$

### Step 4 — Current, node voltages and the input level

$$
\begin{aligned}
I_D &= \tfrac12\beta V_{ov}^2 = \tfrac12(13.4\ \mathrm{mA/V^2})(0.4185\ \mathrm{V})^2 = 1.173\ \mathrm{mA},\\
V_S &= I_DR_S = (1.173\ \mathrm{mA})(200\ \Omega) = 0.235\ \mathrm{V},\\
V_{out} &= V_{DD} - I_DR_D = 3 - (1.173\ \mathrm{mA})(2\ \mathrm{k\Omega}) = 0.653\ \mathrm{V},\\
V_{in} &= V_{TH} + V_{ov} + V_S = 0.7 + 0.4185 + 0.235 = 1.353\ \mathrm{V}.
\end{aligned}
$$

**Check of the edge condition:** $V_{in} - V_{TH} = 1.353 - 0.7 = 0.653\ \mathrm{V} = V_{out}$ ✓. Equivalently, $V_{DS} = 0.653 - 0.235 = 0.418\ \mathrm{V} = V_{ov}$ ✓.

### Step 5 — Transconductance at this point

At the edge of triode the device is still (just) described by the saturation model, so

$$g_m = \beta V_{ov} = (13.4\ \mathrm{mA/V^2})(0.4185\ \mathrm{V}) = 5.61\ \mathrm{mS}.$$

Cross-check with the alternative form $g_m = 2I_D/V_{ov} = 2(1.173\ \mathrm{mA})/(0.4185\ \mathrm{V}) = 5.61$ mS ✓.

### Step 6 — Small-signal gain

**Gain formula.** With $\lambda = \gamma = 0$, the same signal current $i$ flows through $R_S$ and $R_D$. The gate–source voltage is $v_{gs} = v_{in} - iR_S$ and $i = g_mv_{gs}$, so

$$
\begin{aligned}
i &= g_m(v_{in} - iR_S)\\
i\,(1 + g_mR_S) &= g_mv_{in}\\
i &= \frac{g_m}{1 + g_mR_S}\,v_{in}.
\end{aligned}
$$

The output is $v_{out} = -iR_D$, hence

$$A_v = -\frac{g_mR_D}{1 + g_mR_S}.$$

**Numbers:**

$$
\begin{aligned}
g_mR_D &= (5.61\ \mathrm{mS})(2\ \mathrm{k\Omega}) = 11.22,\\
1 + g_mR_S &= 1 + (5.61\ \mathrm{mS})(200\ \Omega) = 1 + 1.122 = 2.122,\\
A_v &= -\frac{11.22}{2.122} \approx -5.29 .
\end{aligned}
$$

**Intuition.** Compared with a typical bias point (e.g. 0.5 mA, where $g_m = 3.66$ mS and $A_v \approx -4.2$), the current is higher, so $g_m$ is larger and the gain is larger in magnitude. But because $g_mR_S \approx 1.1$, the degeneration already halves the gain relative to $-g_mR_D = -11.2$. This is the largest gain available while $M_1$ is still saturated: beyond this input level, $M_1$ enters triode, its $g_m$ and output resistance collapse, and the gain drops.

### Result

$$V_{in} \approx 1.353\ \mathrm{V}\quad(I_D \approx 1.17\ \mathrm{mA},\ V_{out} \approx 0.653\ \mathrm{V}),\qquad A_v = -\frac{g_mR_D}{1 + g_mR_S} \approx -5.29,$$

with $V_{ov} = 0.4185$ V and $g_m = 5.61$ mS.

**Common mistake.** Ignoring $R_S$ in the bias calculation. The edge condition then reads $3 = V_{ov} + \tfrac12\beta R_DV_{ov}^2$, giving $V_{in} \approx 1.14$ V. With degeneration, the input must also supply the drop $I_DR_S = 0.235$ V across the source resistor, and $R_S$ also changes the current at which the edge is reached.

**Common mistake.** Dropping the degeneration from the gain and writing $A_v = -g_mR_D \approx -11.2$. The signal current flows through $R_S$, which raises the source voltage and reduces $v_{gs}$ by the factor $1 + g_mR_S = 2.12$.

**Common mistake.** Writing the edge condition as $V_{out} = V_{GS} - V_{TH}$ (i.e. measuring the drain voltage from ground instead of from the source). The condition concerns $V_{DS}$; with a source resistor, $V_{out} = V_{DS} + V_S$, which leads to $V_{out} = V_{in} - V_{TH}$.
