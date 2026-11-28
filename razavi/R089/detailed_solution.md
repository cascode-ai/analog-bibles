# Detailed solution - R089

**Approach:** $M_1$ is a common-source device with its source grounded, and $R_F$ connects the input source directly to the output. Write KCL at the output and follow $M_1$ from cutoff through saturation into triode, giving for each region the equation for $V_{out}$, its slope (from a small-signal model) and its boundary. A numerical example makes the shape concrete.

Use the square-law model with $\beta=\mu_nC_{ox}W/L$ and neglect channel-length modulation as specified.

### Step 1 — The output-node equation

KCL at the output (currents through $R_D$ and $R_F$ leave through $M_1$; no body effect, $V_{TH} = 0.7$ V):

$$\frac{V_{DD} - V_{out}}{R_D} + \frac{V_{in} - V_{out}}{R_F} = I_{D1} .$$

The input reaches the output along two paths: directly through $R_F$ (non-inverting) and through $M_1$ (inverting). The shape of the curve comes from their competition.

### Step 2 — $M_1$ off ($V_{in} < 0.7$ V): the divider line

With $I_{D1} = 0$:

$$
\begin{aligned}
R_F(V_{DD} - V_{out}) + R_D(V_{in} - V_{out}) &= 0\\
V_{out} &= \frac{R_FV_{DD} + R_DV_{in}}{R_D + R_F} .
\end{aligned}
$$

This straight line starts at $V_{out}(0) = V_{DD}R_F/(R_D + R_F)$, not at $V_{DD}$, rises with slope $R_D/(R_D + R_F) > 0$, and at turn-on, $V_{in} = 0.7$ V, reaches $V_{out} = (R_FV_{DD} + 0.7R_D)/(R_D + R_F)$.

### Step 3 — $M_1$ saturated: equation and small-signal slope

Right after turn-on the drain is high, so $M_1$ is saturated ($V_{out} \ge V_{in} - 0.7$ V):

$$\frac{V_{DD} - V_{out}}{R_D} + \frac{V_{in} - V_{out}}{R_F} = \frac{\beta}{2}(V_{in} - 0.7)^2 ,$$

$$V_{out} = (R_D\|R_F)\left[\frac{V_{DD}}{R_D} + \frac{V_{in}}{R_F} - \frac{\beta}{2}(V_{in} - 0.7)^2\right],$$

a downward parabola in $V_{in}$.

Slope: In the small-signal model, $R_D$ runs from $out$ to ac ground, $R_F$ from $in$ to $out$, and $M_1$ draws $g_mv_{in}$ from $out$, with $g_m = \beta(V_{in} - 0.7)$.

<!-- diagram: diagram-01.cir -->

KCL at $out$:

$$
\begin{aligned}
\frac{0 - v_{out}}{R_D} + \frac{v_{in} - v_{out}}{R_F} &= g_mv_{in}\\
-v_{out}\left(\frac{1}{R_D} + \frac{1}{R_F}\right) &= v_{in}\left(g_m - \frac{1}{R_F}\right)\\
\frac{dV_{out}}{dV_{in}} &= \left(\frac{1}{R_F} - g_m\right)(R_D\|R_F) ,
\end{aligned}
$$

which is also the derivative of the parabola above.

### Step 4 — The maximum of $V_{out}$

Just above 0.7 V, $g_m$ is tiny, so $1/R_F > g_m$ and the slope is still positive. It is zero when the two paths balance:

$$
\begin{aligned}
g_m &= \frac{1}{R_F}\\
\beta(V_{in} - 0.7) &= \frac{1}{R_F}\\
V_{in,pk} &= 0.7\ \mathrm{V} + \frac{1}{\beta R_F} .
\end{aligned}
$$

This point gives the peak when it belongs to the saturation segment of the sweep. Substitute $V_{in,pk}-0.7=1/(\beta R_F)$ into the saturation parabola.

$$
\begin{aligned}
V_{out,pk} &= (R_D\|R_F)\left[\frac{V_{DD}}{R_D} + \frac{0.7}{R_F} + \frac{1}{\beta R_F^2} - \frac{\beta}{2}\cdot\frac{1}{\beta^2R_F^2}\right]\\
&= \underbrace{(R_D\|R_F)\left[\frac{V_{DD}}{R_D} + \frac{0.7}{R_F}\right]}_{V_{out}\text{ at turn-on}} + \frac{R_D\|R_F}{2\beta R_F^2} .
\end{aligned}
$$

The bump above the turn-on value, $(R_D\|R_F)/(2\beta R_F^2)$, is small when $\beta R_F$ is large; the peak then lies just above 0.7 V.

Beyond the peak the slope is negative (inverting), tending to the common-source gain $-g_m(R_D\|R_F)$ once $g_m \gg 1/R_F$.

### Step 5 — $M_1$ enters triode; the end of the sweep

Triode begins when the sweep passes the boundary

$$V_{out} = V_{in} - 0.7\ \mathrm{V},$$

and beyond that point

$$\frac{V_{DD} - V_{out}}{R_D} + \frac{V_{in} - V_{out}}{R_F} = \beta\left[(V_{in} - 0.7)V_{out} - \tfrac12V_{out}^2\right].$$

Let $u=V_{in}-V_{TH}$. Substituting $V_{out}=u$ and $I_D=\beta u^2/2$ into the output-node equation gives

$$\frac{\beta u^2}{2}+\frac{u}{R_D}=\frac{V_{DD}}{R_D}+\frac{V_{TH}}{R_F}.$$

The positive root locates the boundary at $V_{in}=V_{TH}+u$. A triode segment occurs if this input is below $V_{DD}$. The saturation peak belongs to the plotted curve if its input lies within the saturation segment and the sweep. In triode, assess the slope using $1/R_F-g_m$.

Slope in triode: Now $g_m = \beta V_{DS} = \beta V_{out}$ and the channel conductance is $g_{ds} = \beta(V_{in} - 0.7 - V_{out})$. Adding $g_{ds}v_{out}$ to the device current in the KCL of Step 3:

$$\frac{dV_{out}}{dV_{in}} = \frac{1/R_F - g_m}{1/R_D + 1/R_F + g_{ds}} .$$

For the illustrated example, $g_m$ decreases and $g_{ds}$ increases as $V_{out}$ falls in triode, so the negative slope becomes less steep.

If the sweep ends in triode, the node equation at $V_{in}=V_{DD}=3$ V is

$$(3 - V_{out})\left(\frac{1}{R_D} + \frac{1}{R_F}\right) = \beta\left[2.3V_{out} - \tfrac12V_{out}^2\right],$$

which gives a low but nonzero $V_{out}$, since both $R_D$ and $R_F$ (now from the 3-V input) feed current into the output.

The current in $R_F$ flows from output to input while $V_{out} > V_{in}$ and reverses once $V_{in} > V_{out}$, somewhere on the falling part of the curve.

### Step 6 — A numerical example

Take, for illustration, $\beta = 0.5\ \mathrm{mA/V^2}$ and $R_D = R_F = 10\ \mathrm{k}\Omega$ ($R_D\|R_F = 5\ \mathrm{k}\Omega$):

- Off: $V_{out} = (3 + V_{in})/2$: 1.5 V at $V_{in} = 0$, 1.85 V at 0.7 V.
- Saturation: $V_{out} = 5\ \mathrm{k}\Omega\left[0.3\ \mathrm{mA} + V_{in}/10\ \mathrm{k}\Omega - 0.25\ \mathrm{mA/V^2}\,(V_{in} - 0.7)^2\right] = 1.5 + 0.5V_{in} - 1.25(V_{in} - 0.7)^2$.
- Peak: $V_{in,pk} = 0.7 + 1/(0.5\ \mathrm{mA/V^2}\times10\ \mathrm{k}\Omega) = 0.7 + 0.2 = 0.9$ V, and $V_{out,pk} = 1.85 + 5\ \mathrm{k}\Omega/[2(0.5\ \mathrm{mA/V^2})(10\ \mathrm{k}\Omega)^2] = 1.85 + 0.05 = 1.90$ V.
- Triode entry: with $V_{out} = V_{in} - 0.7 \equiv x$ in the saturation parabola, $1.5 + 0.5(x + 0.7) - 1.25x^2 = x$, i.e. $1.25x^2 + 0.5x - 1.85 = 0$, so $x = (-0.5 + \sqrt{0.25 + 9.25})/2.5 = 1.033$. Entry at $V_{in} = 1.733$ V, $V_{out} = 1.033$ V.
- End: at $V_{in} = 3$ V, $(3 - V_{out})(0.2\ \mathrm{mS}) = 0.5\ \mathrm{mA/V^2}\,(2.3V_{out} - 0.5V_{out}^2)$, i.e. $2.5V_{out}^2 - 13.5V_{out} + 6 = 0$, so $V_{out} = (13.5 - \sqrt{122.25})/5 = 0.489$ V.

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

![Example transfer characteristic](/q/R089/solution-01.svg)

### Result

- $V_{in} < 0.7$ V ($M_1$ off): $V_{out} = (R_FV_{DD} + R_DV_{in})/(R_D + R_F)$, a rising line that starts at $V_{DD}R_F/(R_D + R_F)$ with slope $R_D/(R_D + R_F)$.
- $V_{in} > 0.7$ V, $M_1$ saturated ($V_{out} > V_{in} - 0.7$ V): $(V_{DD} - V_{out})/R_D + (V_{in} - V_{out})/R_F = \tfrac12\beta(V_{in} - 0.7)^2$, with slope $(1/R_F - g_m)(R_D\|R_F)$. It is still positive just above 0.7 V, zero where $g_m = 1/R_F$, i.e. at $V_{in} = 0.7 + 1/(\beta R_F)$ (the peak if it lies in the saturation segment of the sweep), and negative beyond, tending to $-g_m(R_D\|R_F)$.
- The triode boundary is $V_{out}=V_{in}-0.7$ V. Use Step 5 to check whether it falls within the sweep. In the example, the falling curve flattens in triode.
- The current in $R_F$ reverses once $V_{in} > V_{out}$.
- Transition points: turn-on at $V_{in} = 0.7$ V, peak where $g_m = 1/R_F$, triode entry at $V_{out} = V_{in} - 0.7$ V.

**Common mistake:** Taking $V_{out} = V_{DD}$ while $M_1$ is off. $R_F$ ties the output to the input source, so the output sits on the divider line, which starts well below $V_{DD}$ and rises with $V_{in}$.

**Common mistake:** Starting the fall right at $V_{in} = 0.7$ V. At turn-on $g_m = 0$, so the path through $R_F$ still dominates; $V_{out}$ keeps rising until $g_m = 1/R_F$.

**Common mistake:** Putting $M_1$ in triode right after turn-on. Its drain is then near the top of the curve, so it is saturated; it enters triode only once $V_{out}$ has fallen to $V_{in} - 0.7$ V.
