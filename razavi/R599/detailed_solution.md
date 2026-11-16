# Detailed solution - R599

**Approach.** Draw the straight line through the two end points of the characteristic, write the difference between the actual characteristic and that line as a function of $x$, find where this difference is largest by setting its derivative to zero, and divide the largest deviation by the output swing $y(x_{max}) - y(0)$.

### Step 1 — The end points and the end-point line

Evaluate the characteristic $y = \alpha_1x + \alpha_2x^2$ at the two ends of the range:

$$
\begin{aligned}
y(0) &= \alpha_1\cdot0 + \alpha_2\cdot0^2 = 0,\\
y(x_{max}) &= \alpha_1x_{max} + \alpha_2x_{max}^2 .
\end{aligned}
$$

The straight line through $(0, 0)$ and $(x_{max}, y(x_{max}))$ has slope

$$m = \frac{y(x_{max}) - y(0)}{x_{max} - 0} = \frac{\alpha_1x_{max} + \alpha_2x_{max}^2}{x_{max}} = \alpha_1 + \alpha_2x_{max},$$

and passes through the origin, so

$$y_1(x) = (\alpha_1 + \alpha_2x_{max})\,x .$$

This line is the "ideal" linear amplifier that has the same gain as the real one when measured end to end. Its slope is the average gain over the range.

### Step 2 — Deviation from the line

The deviation of the actual characteristic from the line is

$$
\begin{aligned}
\Delta y(x) &= y(x) - y_1(x)\\
&= \alpha_1x + \alpha_2x^2 - \alpha_1x - \alpha_2x_{max}x\\
&= \alpha_2x^2 - \alpha_2x_{max}x\\
&= \alpha_2\,x\,(x - x_{max}).
\end{aligned}
$$

As expected, $\Delta y = 0$ at both ends ($x = 0$ and $x = x_{max}$), because the line was drawn through them. The linear term $\alpha_1x$ cancels completely: only the quadratic coefficient causes nonlinearity.

### Step 3 — Where the deviation is largest

Set the derivative to zero:

$$
\begin{aligned}
\frac{d\Delta y}{dx} &= \alpha_2\,(2x - x_{max}) = 0\\
x &= \frac{x_{max}}{2}.
\end{aligned}
$$

The second derivative, $d^2\Delta y/dx^2 = 2\alpha_2$, is nonzero, so this is the extremum (a minimum of $\Delta y$ for $\alpha_2 > 0$, a maximum for $\alpha_2 < 0$); in magnitude it is the largest deviation. Its value:

$$\Delta y\!\left(\frac{x_{max}}{2}\right) = \alpha_2\cdot\frac{x_{max}}{2}\left(\frac{x_{max}}{2} - x_{max}\right) = \alpha_2\cdot\frac{x_{max}}{2}\cdot\left(-\frac{x_{max}}{2}\right) = -\frac{\alpha_2x_{max}^2}{4}.$$

So

$$|\Delta y|_{max} = \frac{|\alpha_2|\,x_{max}^2}{4}\quad\text{at}\quad x = \frac{x_{max}}{2}.$$

The shape of the error is a symmetric parabola that vanishes at both ends:

| $x/x_{max}$ | 0 | 0.25 | 0.5 | 0.75 | 1 |
|---|---|---|---|---|---|
| $\Delta y/(\alpha_2x_{max}^2)$ | 0 | −0.1875 | −0.25 | −0.1875 | 0 |

**Geometric picture.** For $\alpha_2 > 0$ the characteristic is convex (it bends upward), so it lies *below* its chord, with the largest gap in the middle; for $\alpha_2 < 0$ (gain compression) it lies above the chord.

### Step 4 — Normalize to the output swing

The maximum output swing is the output change over the range:

$$y(x_{max}) - y(0) = \alpha_1x_{max} + \alpha_2x_{max}^2 .$$

Divide:

$$
\text{nonlinearity} = \frac{|\alpha_2|\,x_{max}^2/4}{\alpha_1x_{max} + \alpha_2x_{max}^2} = \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})}.
$$

For a mildly nonlinear amplifier, $|\alpha_2|x_{max} \ll \alpha_1$, the denominator is approximately $4\alpha_1$:

$$\text{nonlinearity} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}.$$

### Step 5 — Example and interpretation

Take $\alpha_1 = 1$, $\alpha_2 = 0.1$ (in units of $1/x$) and $x_{max} = 1$:

$$
\begin{aligned}
|\Delta y|_{max} &= \frac{0.1\times1^2}{4} = 0.025,\\
\text{swing} &= 1\times1 + 0.1\times1^2 = 1.1,\\
\text{nonlinearity} &= \frac{0.025}{1.1} = 2.27\ \%\quad(\text{approximation: } 0.1/4 = 2.5\ \%).
\end{aligned}
$$

The relative nonlinearity is proportional to $x_{max}$: halving the input range halves the nonlinearity. This is characteristic of a second-order (quadratic) term. A purely odd, cubic characteristic over a symmetric range would instead give a nonlinearity proportional to $x_{max}^2$, which falls faster as the range shrinks.

### Result

The maximum deviation from the end-point line occurs at the middle of the range, $x = x_{max}/2$, and equals

$$|\Delta y|_{max} = \frac{|\alpha_2|\,x_{max}^2}{4}.$$

Normalized to the output swing $\alpha_1x_{max} + \alpha_2x_{max}^2$:

$$\text{maximum nonlinearity} = \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}\quad(\text{for } |\alpha_2|x_{max} \ll \alpha_1).$$

**Common mistake.** Measuring the deviation from the tangent at the origin, $y = \alpha_1x$, instead of from the end-point line. That deviation is $\alpha_2x^2$, largest at $x = x_{max}$ and four times bigger ($\alpha_2x_{max}^2$); it describes a different (gain-referenced) definition, not the end-point nonlinearity asked for here.

**Common mistake.** Locating the maximum elsewhere (for example at $x_{max}/\sqrt3$, which belongs to a cubic characteristic) or normalizing to the wrong quantity (for example twice the swing, as for a range symmetric about zero). For a quadratic characteristic on $[0, x_{max}]$, the error parabola $\alpha_2x(x - x_{max})$ is symmetric about the middle of the range, and the swing is simply $y(x_{max}) - y(0)$.
