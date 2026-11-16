# Detailed solution - R131

**Approach.** Write the edge-of-triode condition in node voltages, express $V_{in}$ and $V_{out}$ through the overdrive, and solve the resulting quadratic for $I_D$, $V_{in}$ and $V_{out}$. Then evaluate $g_m$ there and use the degenerated common-source gain ($\lambda = \gamma = 0$).

### Step 1 — The edge-of-triode condition

$V_{DS} = V_{GS} - V_{TH}$, and both sides share $V_S$:

$$V_{out} - V_S = V_{in} - V_S - V_{TH}\quad\Longrightarrow\quad V_{out} = V_{in} - V_{TH}:$$

the drain sits one threshold below the gate. As $V_{in}$ rises, the current grows and $V_{out}$ falls, so this happens at one input level.

### Step 2 — $V_{in}$ and $V_{out}$ through the overdrive

With $\beta = \mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$ and $I_D = \tfrac12\beta V_{ov}^2$:

$$V_{out} = V_{DD} - I_DR_D, \qquad V_{in} = V_{GS} + V_S = V_{TH} + V_{ov} + I_DR_S ,$$

with $V_{TH} = 0.7$ V regardless of $V_S$, since $\gamma = 0$.

### Step 3 — Solve for the overdrive

Substituting into $V_{out} = V_{in} - V_{TH}$:

$$V_{DD} - I_DR_D = V_{ov} + I_DR_S\quad\Longrightarrow\quad V_{DD} = V_{ov} + \tfrac12\beta(R_D + R_S)\,V_{ov}^2 .$$

With $\tfrac12\beta(R_D + R_S) = \tfrac12(13.4\ \mathrm{mA/V^2})(2.2\ \mathrm{k\Omega}) = 14.74\ \mathrm{V^{-1}}$:

$$14.74\,V_{ov}^2 + V_{ov} - 3 = 0 ,$$

$$V_{ov} = \frac{-1 + \sqrt{1 + 4(14.74)(3)}}{2(14.74)} = \frac{-1 + \sqrt{177.88}}{29.48} = \frac{-1 + 13.337}{29.48} = 0.4185\ \mathrm{V}\quad(\text{positive root}).$$

### Step 4 — Current, node voltages and the input level

$$
\begin{aligned}
I_D &= \tfrac12\beta V_{ov}^2 = \tfrac12(13.4\ \mathrm{mA/V^2})(0.4185\ \mathrm{V})^2 = 1.173\ \mathrm{mA},\\
V_S &= I_DR_S = (1.173\ \mathrm{mA})(200\ \Omega) = 0.235\ \mathrm{V},\\
V_{out} &= V_{DD} - I_DR_D = 3 - (1.173\ \mathrm{mA})(2\ \mathrm{k\Omega}) = 0.653\ \mathrm{V},\\
V_{in} &= V_{TH} + V_{ov} + V_S = 0.7 + 0.4185 + 0.235 = 1.353\ \mathrm{V}.
\end{aligned}
$$

Check: $V_{in} - V_{TH} = 1.353 - 0.7 = 0.653\ \mathrm{V} = V_{out}$ ✓, i.e. $V_{DS} = 0.653 - 0.235 = 0.418\ \mathrm{V} = V_{ov}$ ✓.

### Step 5 — Small-signal gain

At the edge of triode the saturation model still (just) applies:

$$g_m = \beta V_{ov} = (13.4\ \mathrm{mA/V^2})(0.4185\ \mathrm{V}) = 5.61\ \mathrm{mS}$$

(also $2I_D/V_{ov} = 2(1.173\ \mathrm{mA})/(0.4185\ \mathrm{V}) = 5.61$ mS ✓). With $\lambda = \gamma = 0$, the degenerated CS gain is $A_v = -g_mR_D/(1 + g_mR_S)$:

$$
\begin{aligned}
g_mR_D &= (5.61\ \mathrm{mS})(2\ \mathrm{k\Omega}) = 11.22,\\
1 + g_mR_S &= 1 + (5.61\ \mathrm{mS})(200\ \Omega) = 1 + 1.122 = 2.122,\\
A_v &= -\frac{11.22}{2.122} \approx -5.29 .
\end{aligned}
$$

Compared with a typical bias of 0.5 mA ($g_m = 3.66$ mS, $A_v \approx -4.2$), the larger current gives a larger $g_m$ and gain, although $g_mR_S \approx 1.1$ already halves the gain relative to $-g_mR_D = -11.2$. This is the largest gain available with $M_1$ saturated: beyond this input, $M_1$ enters triode and the gain drops.

### Result

$$V_{in} \approx 1.353\ \mathrm{V}\quad(I_D \approx 1.17\ \mathrm{mA},\ V_{out} \approx 0.653\ \mathrm{V}),\qquad A_v = -\frac{g_mR_D}{1 + g_mR_S} \approx -5.29,$$

with $V_{ov} = 0.4185$ V and $g_m = 5.61$ mS.

**Common mistake.** Ignoring $R_S$ in the bias calculation, i.e. $3 = V_{ov} + \tfrac12\beta R_DV_{ov}^2$, which gives $V_{in} \approx 1.14$ V. The input must also supply the drop $I_DR_S = 0.235$ V, and $R_S$ changes the current at which the edge is reached.

**Common mistake.** Dropping the degeneration from the gain, $A_v = -g_mR_D \approx -11.2$. The signal current through $R_S$ reduces $v_{gs}$ by the factor $1 + g_mR_S = 2.12$.

**Common mistake.** Writing the edge condition as $V_{out} = V_{GS} - V_{TH}$, measuring the drain from ground. With a source resistor $V_{out} = V_{DS} + V_S$, which leads to $V_{out} = V_{in} - V_{TH}$.
