# Detailed solution - R089

**Approach.** $M_1$ is a common-source device with its source grounded, and $R_F$ connects the input source directly to the output. Write KCL at the output node, then follow $M_1$ from cutoff through saturation into triode. For each region give the equation for $V_{out}$, the slope (from a small-signal model) and the boundary. A numerical example at the end makes the shape concrete.

### Step 1 — The circuit and the output-node equation

From the figure:

- $R_D$ connects $V_{DD} = 3$ V to the output node.
- $M_1$ has its gate at $V_{in}$, source and bulk at ground (so no body effect, $V_{TH} = 0.7$ V), and drain at the output.
- $R_F$ connects the input $V_{in}$ to the output node. $V_{in}$ is an ideal source, so it drives both the gate and $R_F$.

**KCL at the output node**: the currents arriving through $R_D$ and through $R_F$ leave through $M_1$:

$$\frac{V_{DD} - V_{out}}{R_D} + \frac{V_{in} - V_{out}}{R_F} = I_{D1} .$$

There are two paths from the input to the output: the **direct path through $R_F$**, which is non-inverting (raising $V_{in}$ pushes current into the output), and the **path through $M_1$**, which is inverting (raising $V_{in}$ makes $M_1$ draw more current). The shape of the curve comes from the competition between them.

### Step 2 — $M_1$ off ($V_{in} < 0.7$ V): the divider line

With $I_{D1} = 0$, solve KCL for $V_{out}$:

$$
\begin{aligned}
\frac{V_{DD} - V_{out}}{R_D} + \frac{V_{in} - V_{out}}{R_F} &= 0\\
R_F(V_{DD} - V_{out}) + R_D(V_{in} - V_{out}) &= 0\\
V_{out} &= \frac{R_FV_{DD} + R_DV_{in}}{R_D + R_F} .
\end{aligned}
$$

This is a straight line:

- it **starts at** $V_{out}(0) = V_{DD}R_F/(R_D + R_F)$, not at $V_{DD}$, because $R_F$ connects the output to the 0-V input;
- it **rises** with slope $R_D/(R_D + R_F) > 0$;
- at **turn-on**, $V_{in} = 0.7$ V, it reaches $V_{out} = (R_FV_{DD} + 0.7R_D)/(R_D + R_F)$.

### Step 3 — $M_1$ saturated: equation and small-signal slope

Once $V_{in} > 0.7$ V, $M_1$ conducts. Right after turn-on its drain is high, so it is **saturated** (condition $V_{out} \ge V_{in} - 0.7$ V). With the square law:

$$\frac{V_{DD} - V_{out}}{R_D} + \frac{V_{in} - V_{out}}{R_F} = \frac{\beta}{2}(V_{in} - 0.7)^2 .$$

Solving for $V_{out}$:

$$V_{out} = (R_D\|R_F)\left[\frac{V_{DD}}{R_D} + \frac{V_{in}}{R_F} - \frac{\beta}{2}(V_{in} - 0.7)^2\right],$$

a downward parabola in $V_{in}$.

**Small-signal model.** The input node $in$ is driven by $v_{in}$. At the node $out$:

- $R_D$ from $out$ to AC ground ($V_{DD}$);
- $R_F$ from $in$ to $out$;
- $M_1$: a current source $g_mv_{in}$ from $out$ to ground, with $g_m = \beta(V_{in} - 0.7)$.

<!-- diagram: diagram-01.cir -->

**KCL at $out$:**

$$
\begin{aligned}
\frac{0 - v_{out}}{R_D} + \frac{v_{in} - v_{out}}{R_F} &= g_mv_{in}\\
-v_{out}\left(\frac{1}{R_D} + \frac{1}{R_F}\right) &= v_{in}\left(g_m - \frac{1}{R_F}\right)\\
\frac{dV_{out}}{dV_{in}} &= \left(\frac{1}{R_F} - g_m\right)(R_D\|R_F) .
\end{aligned}
$$

(The same result follows by differentiating the parabola above.)

### Step 4 — The maximum of $V_{out}$

Just above 0.7 V, $g_m = \beta(V_{in} - 0.7)$ is still tiny, so $1/R_F > g_m$ and the slope is **still positive**: the feedforward through $R_F$ wins and $V_{out}$ keeps rising. The slope is zero when the two paths balance:

$$
\begin{aligned}
g_m &= \frac{1}{R_F}\\
\beta(V_{in} - 0.7) &= \frac{1}{R_F}\\
V_{in,pk} &= 0.7\ \mathrm{V} + \frac{1}{\beta R_F} .
\end{aligned}
$$

That is the **peak of $V_{out}$**. Substituting $V_{in,pk} - 0.7 = 1/(\beta R_F)$ into the parabola:

$$
\begin{aligned}
V_{out,pk} &= (R_D\|R_F)\left[\frac{V_{DD}}{R_D} + \frac{0.7}{R_F} + \frac{1}{\beta R_F^2} - \frac{\beta}{2}\cdot\frac{1}{\beta^2R_F^2}\right]\\
&= \underbrace{(R_D\|R_F)\left[\frac{V_{DD}}{R_D} + \frac{0.7}{R_F}\right]}_{V_{out}\text{ at turn-on}} + \frac{R_D\|R_F}{2\beta R_F^2} .
\end{aligned}
$$

The bump above the turn-on value, $(R_D\|R_F)/(2\beta R_F^2)$, is small when $\beta R_F$ is large; then the peak is barely visible and lies just above 0.7 V.

Beyond the peak, $g_m > 1/R_F$ and the slope is **negative** (inverting). As $g_m$ grows, the slope tends to $-g_m(R_D\|R_F)$ once $g_m \gg 1/R_F$, the familiar common-source gain with load $R_D\|R_F$.

### Step 5 — $M_1$ enters triode; the end of the sweep

As $V_{in}$ rises, $V_{out}$ falls, and eventually the drain drops below the gate by more than a threshold. $M_1$ **enters triode** when

$$V_{out} = V_{in} - 0.7\ \mathrm{V}.$$

Beyond that point:

$$\frac{V_{DD} - V_{out}}{R_D} + \frac{V_{in} - V_{out}}{R_F} = \beta\left[(V_{in} - 0.7)V_{out} - \tfrac12V_{out}^2\right].$$

**Slope in triode.** Now $M_1$ has $g_m = \beta V_{DS} = \beta V_{out}$ and a channel conductance $g_{ds} = \beta(V_{in} - 0.7 - V_{out})$. Adding $g_{ds}v_{out}$ to the device current in the KCL of Step 3:

$$\frac{dV_{out}}{dV_{in}} = \frac{1/R_F - g_m}{1/R_D + 1/R_F + g_{ds}} .$$

$g_{ds}$ grows as the device goes deeper into triode, so the slope stays negative but its **magnitude decreases**: the curve flattens out at a low value.

**End point ($V_{in} = V_{DD} = 3$ V):**

$$(3 - V_{out})\left(\frac{1}{R_D} + \frac{1}{R_F}\right) = \beta\left[2.3V_{out} - \tfrac12V_{out}^2\right],$$

which gives a low but nonzero $V_{out}$. It is not zero, because both $R_D$ and $R_F$ (now from the 3-V input) feed current into the output.

**Direction of the current in $R_F$.** It flows from the output to the input while $V_{out} > V_{in}$, and it reverses once $V_{in} > V_{out}$ (somewhere on the falling part of the curve).

### Step 6 — A numerical example

Take, for illustration, $\beta = 0.5\ \mathrm{mA/V^2}$ and $R_D = R_F = 10\ \mathrm{k}\Omega$ ($R_D\|R_F = 5\ \mathrm{k}\Omega$). Then

- **Off:** $V_{out} = (3 + V_{in})/2$: 1.5 V at $V_{in} = 0$, 1.85 V at 0.7 V.
- **Saturation:** $V_{out} = 5\ \mathrm{k}\Omega\left[0.3\ \mathrm{mA} + V_{in}/10\ \mathrm{k}\Omega - 0.25\ \mathrm{mA/V^2}\,(V_{in} - 0.7)^2\right] = 1.5 + 0.5V_{in} - 1.25(V_{in} - 0.7)^2$.
- **Peak:** $V_{in,pk} = 0.7 + 1/(0.5\ \mathrm{mA/V^2}\times10\ \mathrm{k}\Omega) = 0.7 + 0.2 = 0.9$ V, and $V_{out,pk} = 1.85 + 5\ \mathrm{k}\Omega/[2(0.5\ \mathrm{mA/V^2})(10\ \mathrm{k}\Omega)^2] = 1.85 + 0.05 = 1.90$ V.
- **Triode entry:** set $V_{out} = V_{in} - 0.7 \equiv x$ in the saturation parabola: $1.5 + 0.5(x + 0.7) - 1.25x^2 = x$, i.e. $1.25x^2 + 0.5x - 1.85 = 0$, so $x = (-0.5 + \sqrt{0.25 + 9.25})/2.5 = 1.033$. Entry at $V_{in} = 1.733$ V, $V_{out} = 1.033$ V.
- **End:** at $V_{in} = 3$ V, $(3 - V_{out})(0.2\ \mathrm{mS}) = 0.5\ \mathrm{mA/V^2}\,(2.3V_{out} - 0.5V_{out}^2)$, i.e. $2.5V_{out}^2 - 13.5V_{out} + 6 = 0$, so $V_{out} = (13.5 - \sqrt{122.25})/5 = 0.489$ V.

| $V_{in}$ (V) | $V_{out}$ (V) | Region of $M_1$ | Slope |
|---|---|---|---|
| 0 | 1.500 | off | +0.5 |
| 0.7 | 1.850 | turn-on | +0.5 |
| 0.9 | 1.900 | saturation (peak) | 0 |
| 1.2 | 1.788 | saturation | −0.75 |
| 1.5 | 1.450 | saturation | −1.5 |
| 1.733 | 1.033 | triode entry | −2.1 |
| 2.0 | 0.757 | triode | −0.59 |
| 2.5 | 0.575 | triode | −0.23 |
| 3.0 | 0.489 | triode | −0.13 |

### Result

- **$V_{in} < 0.7$ V ($M_1$ off):** $V_{out} = (R_FV_{DD} + R_DV_{in})/(R_D + R_F)$, a rising line that starts at $V_{DD}R_F/(R_D + R_F)$ with slope $R_D/(R_D + R_F)$.
- **$V_{in} > 0.7$ V, $M_1$ saturated ($V_{out} > V_{in} - 0.7$ V):** $(V_{DD} - V_{out})/R_D + (V_{in} - V_{out})/R_F = \tfrac12\beta(V_{in} - 0.7)^2$, with slope $(1/R_F - g_m)(R_D\|R_F)$. It is still positive just above 0.7 V, zero where $g_m = 1/R_F$, i.e. at $V_{in} = 0.7 + 1/(\beta R_F)$ (the **maximum** of $V_{out}$), and negative beyond, tending to $-g_m(R_D\|R_F)$.
- **$M_1$ in triode** from $V_{out} = V_{in} - 0.7$ V onward: the fall continues with a decreasing slope, down to a low final value at $V_{in} = V_{DD}$ given by $(3 - V_{out})(1/R_D + 1/R_F) = \beta[2.3V_{out} - V_{out}^2/2]$.
- The current in $R_F$ reverses once $V_{in} > V_{out}$.
- **Transition points:** turn-on at $V_{in} = 0.7$ V, peak where $g_m = 1/R_F$, triode entry at $V_{out} = V_{in} - 0.7$ V.

**Common mistake.** Taking $V_{out} = V_{DD}$ while $M_1$ is off. $R_F$ connects the output to the input source, so even with no transistor current the output sits on the divider line $(R_FV_{DD} + R_DV_{in})/(R_D + R_F)$, which starts well below $V_{DD}$ and rises with $V_{in}$.

**Common mistake.** Starting the fall right at $V_{in} = 0.7$ V. At turn-on $g_m = 0$, so the non-inverting path through $R_F$ still dominates; $V_{out}$ keeps rising until $g_m = 1/R_F$.

**Common mistake.** Swapping the regions, i.e. putting $M_1$ in triode right after turn-on. Just after turn-on the drain is high (near the top of the curve), so $M_1$ is saturated; it enters triode only after $V_{out}$ has fallen to $V_{in} - 0.7$ V.
