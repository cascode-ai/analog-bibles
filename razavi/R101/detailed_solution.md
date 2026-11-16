# Detailed solution - R101

**Approach.** The test source $V_X$ sets the drain voltage of $M_1$ directly. Write KCL at the drain node to express $I_X$ as the transistor current minus the current that $R_D$ delivers. Then evaluate $M_1$'s current in triode ($V_X < V_b - 0.7$ V) and in saturation ($V_X \ge V_b - 0.7$ V), and add the straight-line resistor term.

### Step 1 — The circuit and KCL at the drain node

From the figure: $R_D$ connects $V_{DD} = 3$ V to the drain of $M_1$; the test source $V_X$ is connected between that node and ground, and $I_X$ flows *from* the source *into* the node. $M_1$ has its gate at $V_b$ and its source and bulk at ground, so $V_{GS} = V_b$ (fixed), $V_{DS} = V_X$, and there is no body effect ($V_{TH} = 0.7$ V).

**KCL at the drain node** (currents in = currents out). Into the node: $I_X$ from the source, and $(V_{DD} - V_X)/R_D$ through $R_D$. Out of the node: the drain current $I_{D1}$:

$$I_X + \frac{V_{DD} - V_X}{R_D} = I_{D1} \quad\Longrightarrow\quad I_X = I_{D1} - \frac{V_{DD} - V_X}{R_D} .$$

So $I_X$ is the transistor current minus the resistor current. The resistor term is a straight line, $-(3 - V_X)/R_D$, rising from $-3/R_D$ at $V_X = 0$ to 0 at $V_X = 3$ V.

### Step 2 — Current of $M_1$ versus its drain voltage

Assume $V_b > 0.7$ V (otherwise $M_1$ is off and $I_X = (V_X - 3)/R_D$, a straight line). The overdrive is fixed at $V_b - 0.7$ V, so this is simply the familiar $I_D$–$V_{DS}$ characteristic at constant $V_{GS}$:

- **Triode, $0 \le V_X < V_b - 0.7$ V:**
$$I_{D1} = \beta\left[(V_b - 0.7)V_X - \tfrac12V_X^2\right],$$
which starts at 0 for $V_X = 0$ (no drain–source voltage, no current) and rises with a decreasing slope.
- **Saturation, $V_X \ge V_b - 0.7$ V:**
$$I_{D1} = I_1 = \frac12\beta(V_b - 0.7)^2 ,$$
constant (since $\lambda = 0$).

The two expressions agree at the boundary: at $V_X = V_b - 0.7$ the triode formula gives $\beta[(V_b - 0.7)^2 - \frac12(V_b - 0.7)^2] = \frac12\beta(V_b - 0.7)^2$.

### Step 3 — $I_X$ in each region

**At $V_X = 0$:** $I_{D1} = 0$, so

$$I_X(0) = -\frac{V_{DD}}{R_D} = -\frac{3\ \mathrm{V}}{R_D} .$$

The current is negative: $R_D$ pushes current into the source $V_X$.

**Triode region ($0 < V_X < V_b - 0.7$ V):**

$$I_X = \beta\left[(V_b - 0.7)V_X - \tfrac12V_X^2\right] - \frac{3 - V_X}{R_D} .$$

Its slope (the incremental conductance seen by $V_X$) is

$$\frac{dI_X}{dV_X} = \beta(V_b - 0.7 - V_X) + \frac{1}{R_D} ,$$

which is the triode channel conductance of $M_1$ in parallel with $1/R_D$. It is **steep at $V_X = 0$**, where it equals $\beta(V_b - 0.7) + 1/R_D$, and **decreases to $1/R_D$** at the edge of saturation.

**Saturation region ($V_X \ge V_b - 0.7$ V):**

$$I_X = I_1 - \frac{3 - V_X}{R_D} = \frac12\beta(V_b - 0.7)^2 - \frac{3 - V_X}{R_D} ,$$

a **straight line of slope $1/R_D$**, reaching $I_X = I_1$ at $V_X = V_{DD}$, where the resistor current vanishes. (With channel-length modulation the slope would be $1/R_D + \lambda I_1$.)

**Zero crossing.** $I_X = 0$ where the transistor exactly absorbs the resistor current, $I_{D1} = (3 - V_X)/R_D$. This is the voltage the node would take on its own if the source were removed.

### Step 4 — A numerical example

For illustration take $V_b = 1.2$ V (overdrive 0.5 V), $\beta = 4\ \mathrm{mA/V^2}$ and $R_D = 10\ \mathrm{k}\Omega$:

$$I_1 = \tfrac12(4\ \mathrm{mA/V^2})(0.5\ \mathrm{V})^2 = 0.5\ \mathrm{mA}, \qquad I_X(0) = -\frac{3\ \mathrm{V}}{10\ \mathrm{k}\Omega} = -0.3\ \mathrm{mA}.$$

Initial slope: $(4\ \mathrm{mA/V^2})(0.5\ \mathrm{V}) + 0.1\ \mathrm{mS} = 2.1$ mS; slope after the edge: $0.1$ mS.

**Zero crossing** (in triode): $4(0.5V_X - 0.5V_X^2) = 0.1(3 - V_X)$ (in mA, $V_X$ in volts), i.e. $2V_X^2 - 2.1V_X + 0.3 = 0$, so $V_X = (2.1 - \sqrt{4.41 - 2.4})/4 = 0.171$ V.

| $V_X$ (V) | Region | $I_{D1}$ (mA) | $(3 - V_X)/R_D$ (mA) | $I_X$ (mA) |
|---|---|---|---|---|
| 0 | triode | 0 | 0.30 | −0.30 |
| 0.1 | triode | 0.18 | 0.29 | −0.11 |
| 0.171 | triode | 0.283 | 0.283 | 0 |
| 0.3 | triode | 0.42 | 0.27 | 0.15 |
| 0.5 | edge | 0.50 | 0.25 | 0.25 |
| 1.0 | sat | 0.50 | 0.20 | 0.30 |
| 2.0 | sat | 0.50 | 0.10 | 0.40 |
| 3.0 | sat | 0.50 | 0 | 0.50 |

### Result

$$I_X = I_{D1} - \frac{V_{DD} - V_X}{R_D}$$

(KCL at the drain), which gives:

- **Start:** $I_X(0) = -V_{DD}/R_D = -3\ \mathrm{V}/R_D$, since $I_{D1} = 0$ at $V_{DS} = 0$.
- **$0 < V_X < V_b - 0.7$ V (triode):** $I_{D1} = \beta[(V_b - 0.7)V_X - V_X^2/2]$; $I_X$ rises steeply, with slope $\beta(V_b - 0.7 - V_X) + 1/R_D$ decreasing to $1/R_D$ at the edge.
- **$V_X \ge V_b - 0.7$ V (saturation):** $I_{D1} = I_1 = \tfrac12\beta(V_b - 0.7)^2$, so $I_X = I_1 - (3 - V_X)/R_D$, a straight line of slope $1/R_D$ (plus $\lambda I_1$ if channel-length modulation is included) that reaches $I_1$ at $V_X = V_{DD}$.
- **Zero crossing** where $I_{D1} = (3 - V_X)/R_D$. If $V_b \le 0.7$ V, $M_1$ is off and $I_X = (V_X - 3)/R_D$.

**Common mistake.** Considering only the transistor current (a curve starting at 0 and saturating at $I_1$) or only the resistor current. The source $V_X$ must supply $M_1$ *and* absorb the current coming down through $R_D$, so both appear in $I_X$.

**Common mistake.** Getting the sign of the resistor term wrong, which mirrors the curve and makes $I_X$ decrease with $V_X$. As $V_X$ rises, $M_1$ draws more (or the same) current and $R_D$ delivers less, so $I_X$ increases monotonically.

**Common mistake.** Assuming $M_1$ is saturated at $V_X = 0$ and carries $I_1$ there. With zero drain–source voltage no current can flow; the device is in deep triode, and it reaches saturation only at $V_X = V_b - 0.7$ V.
