# Detailed solution - R102

**Approach.** The source $V_X$ sets the drain of $M_2$. The gate of $M_2$ sits at the tap of the $R_1$–$R_2$ divider connected between $V_{DD}$ and $V_X$, so its gate drive is a fixed fraction of $V_{DD} - V_X$. Show that $M_2$ is saturated whenever it conducts, find where it turns off, and add its square-law current to the current through $R_1 + R_2$, since both flow into the test source.

### Step 1 — The circuit and the gate voltage of $M_2$

From the figure: $R_1$ connects $V_{DD} = 3$ V to the gate node of $M_2$; $R_2$ connects the gate node to the drain node. $M_2$ (PMOS) has source and bulk at $V_{DD}$ and drain at the node driven by $V_X$. $I_X$ flows from the drain node into the voltage source.

**No gate current**, so $R_1$ and $R_2$ carry the same current and divide $V_{DD} - V_X$:

$$I_R = \frac{V_{DD} - V_X}{R_1 + R_2}, \qquad V_{SG2} = I_RR_1 = (V_{DD} - V_X)\,\frac{R_1}{R_1 + R_2} .$$

**No body effect:** the source and bulk of $M_2$ are both at $V_{DD}$.

### Step 2 — $M_2$ is saturated whenever it is on

The source–drain voltage of $M_2$ is the full $V_{DD} - V_X$, while $V_{SG2}$ is only the fraction $R_1/(R_1 + R_2)$ of it:

$$V_{SD2} = V_{DD} - V_X \ge V_{SG2} > V_{SG2} - |V_{THP}| .$$

The saturation condition $V_{SD} \ge V_{SG} - |V_{THP}|$ is therefore always met. When on, $M_2$ carries the square-law current

$$I_{D2} = \frac12\beta_p\left[(V_{DD} - V_X)\frac{R_1}{R_1 + R_2} - 0.8\right]^2 .$$

### Step 3 — Where $M_2$ turns off

$M_2$ conducts while $V_{SG2} > |V_{THP}| = 0.8$ V:

$$
\begin{aligned}
(V_{DD} - V_X)\frac{R_1}{R_1 + R_2} &> 0.8\ \mathrm{V}\\
V_X &< V_{X1} = V_{DD} - 0.8\ \mathrm{V}\cdot\frac{R_1 + R_2}{R_1} .
\end{aligned}
$$

If $3R_1/(R_1 + R_2) < 0.8$ V, then $V_{X1} < 0$ and $M_2$ never turns on in the sweep.

### Step 4 — $I_X$ in each region

**KCL at the drain node.** Both $M_2$'s drain current and the divider current $I_R$ arrive at the node and leave through the source:

$$I_X = I_{D2} + \frac{V_{DD} - V_X}{R_1 + R_2} .$$

**$V_X < V_{X1}$ ($M_2$ on, saturated):**

$$I_X = \frac{V_{DD} - V_X}{R_1 + R_2} + \frac12\beta_p\left[(V_{DD} - V_X)\frac{R_1}{R_1 + R_2} - 0.8\right]^2 .$$

At $V_X = 0$:

$$I_X(0) = \frac{3}{R_1 + R_2} + \frac12\beta_p\left[\frac{3R_1}{R_1 + R_2} - 0.8\right]^2 .$$

**Slope.** Differentiate, writing $g_{m2} = \beta_p(V_{SG2} - 0.8)$ for the transconductance of $M_2$:

$$\frac{dI_X}{dV_X} = -\frac{1}{R_1 + R_2} - \beta_p(V_{SG2} - 0.8)\frac{R_1}{R_1 + R_2} = -\frac{1 + g_{m2}R_1}{R_1 + R_2} .$$

$I_X$ **decreases** with $V_X$. The slope is steep where $M_2$ is strongly on and becomes gentler as $g_{m2}$ falls. (The magnitude of the slope is the conductance of this "$V_{GS}$-multiplier" two-terminal circuit, $(1 + g_{m2}R_1)/(R_1 + R_2)$.)

**$V_{X1} \le V_X \le 3$ V ($M_2$ off):**

$$I_X = \frac{3 - V_X}{R_1 + R_2} ,$$

a straight line falling to **zero at $V_X = V_{DD}$**.

**Smooth join.** At $V_X = V_{X1}$ both $I_{D2}$ and its derivative (which is proportional to $V_{SG2} - 0.8$) are zero, so the curved part meets the straight line **tangentially**; there is no kink.

### Step 5 — A numerical example

For illustration take $R_1 = R_2 = 10\ \mathrm{k}\Omega$ and $\beta_p = 2\ \mathrm{mA/V^2}$. Then $V_{SG2} = (3 - V_X)/2$ and

$$V_{X1} = 3 - 0.8\times\frac{20}{10} = 1.4\ \mathrm{V}.$$

At $V_X = 0$: $I_R = 3\ \mathrm{V}/20\ \mathrm{k}\Omega = 0.15$ mA, $V_{SG2} = 1.5$ V, $I_{D2} = \frac12(2\ \mathrm{mA/V^2})(0.7\ \mathrm{V})^2 = 0.49$ mA, so $I_X = 0.64$ mA.

| $V_X$ (V) | $V_{SG2}$ (V) | $I_R$ (mA) | $I_{D2}$ (mA) | $I_X$ (mA) |
|---|---|---|---|---|
| 0 | 1.50 | 0.150 | 0.490 | 0.640 |
| 0.5 | 1.25 | 0.125 | 0.203 | 0.328 |
| 1.0 | 1.00 | 0.100 | 0.040 | 0.140 |
| 1.2 | 0.90 | 0.090 | 0.010 | 0.100 |
| 1.4 | 0.80 | 0.080 | 0 | 0.080 |
| 2.0 | 0.50 | 0.050 | 0 | 0.050 |
| 3.0 | 0 | 0 | 0 | 0 |

### Result

$I_X$ **decreases monotonically to zero at $V_X = V_{DD}$**: a quadratic-plus-linear part while $M_2$ conducts, then a straight line (resistors only) after $M_2$ turns off at

$$V_{X1} = V_{DD} - 0.8\ \mathrm{V}\cdot\frac{R_1 + R_2}{R_1} .$$

- No gate current, so the gate is at the $R_1$–$R_2$ tap between $V_{DD}$ and $V_X$: $V_{SG2} = (V_{DD} - V_X)R_1/(R_1 + R_2)$ and $V_{SD2} = V_{DD} - V_X \ge V_{SG2}$. $M_2$ is saturated whenever it is on.
- **$V_X < V_{X1}$:** $I_X = \dfrac{V_{DD} - V_X}{R_1 + R_2} + \tfrac12\beta_p\left[(V_{DD} - V_X)\dfrac{R_1}{R_1 + R_2} - 0.8\right]^2$; at $V_X = 0$ this is $3/(R_1 + R_2) + \tfrac12\beta_p[3R_1/(R_1 + R_2) - 0.8]^2$.
- **$V_{X1} \le V_X \le 3$ V:** $M_2$ off, $I_X = (3 - V_X)/(R_1 + R_2)$, a straight line to zero at $V_X = 3$ V. The transistor current joins it tangentially (square law).
- If $3R_1/(R_1 + R_2) < 0.8$ V, $M_2$ never turns on and $I_X$ is the resistor line throughout.

**Common mistake.** Leaving out the resistor branch, so that $I_X$ is claimed to be zero once $M_2$ turns off. The divider $R_1 + R_2$ connects $V_{DD}$ to the drain node, so it always delivers $(V_{DD} - V_X)/(R_1 + R_2)$ into the source.

**Common mistake.** Taking $V_{SG2}$ as $(V_{DD} - V_X)R_2/(R_1 + R_2)$, or as the full $V_{DD} - V_X$. $R_1$ is the resistor between the source ($V_{DD}$) and the gate, so the gate–source voltage is the drop across $R_1$, a fraction $R_1/(R_1 + R_2)$ of the total.

**Common mistake.** Putting $M_2$ in triode. Its source–drain voltage is the whole $V_{DD} - V_X$, always at least $V_{SG2}$, so it is saturated whenever it conducts. There is also no body effect, since its source and bulk are both at $V_{DD}$.
