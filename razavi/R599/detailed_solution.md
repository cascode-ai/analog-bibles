# Detailed solution - R599

**Approach.** Draw the straight line through the two end points of the characteristic, write the difference between the characteristic and that line as a function of $x$, find its extremum, and divide the largest deviation by the output swing $y(x_{max}) - y(0)$.

### Step 1 — The end-point line

The characteristic has $y(0) = 0$ and $y(x_{max}) = \alpha_1x_{max} + \alpha_2x_{max}^2$, so the line through the end points has slope

$$m = \frac{y(x_{max}) - y(0)}{x_{max} - 0} = \frac{\alpha_1x_{max} + \alpha_2x_{max}^2}{x_{max}} = \alpha_1 + \alpha_2x_{max}$$

(the average gain over the range) and passes through the origin:

$$y_1(x) = (\alpha_1 + \alpha_2x_{max})\,x .$$

### Step 2 — Deviation from the line

$$
\begin{aligned}
\Delta y(x) &= y(x) - y_1(x)\\
&= \alpha_1x + \alpha_2x^2 - \alpha_1x - \alpha_2x_{max}x\\
&= \alpha_2x^2 - \alpha_2x_{max}x\\
&= \alpha_2\,x\,(x - x_{max}).
\end{aligned}
$$

$\Delta y = 0$ at both ends, and the linear term $\alpha_1x$ cancels: only the quadratic coefficient causes nonlinearity.

### Step 3 — Where the deviation is largest

$$
\begin{aligned}
\frac{d\Delta y}{dx} &= \alpha_2\,(2x - x_{max}) = 0\\
x &= \frac{x_{max}}{2}.
\end{aligned}
$$

Since $d^2\Delta y/dx^2 = 2\alpha_2 \ne 0$, this is the extremum (a minimum of $\Delta y$ for $\alpha_2 > 0$, a maximum for $\alpha_2 < 0$) and, in magnitude, the largest deviation:

$$\Delta y\!\left(\frac{x_{max}}{2}\right) = \alpha_2\cdot\frac{x_{max}}{2}\left(\frac{x_{max}}{2} - x_{max}\right) = \alpha_2\cdot\frac{x_{max}}{2}\cdot\left(-\frac{x_{max}}{2}\right) = -\frac{\alpha_2x_{max}^2}{4},$$

so

$$|\Delta y|_{max} = \frac{|\alpha_2|\,x_{max}^2}{4}\quad\text{at}\quad x = \frac{x_{max}}{2}.$$

The error is a symmetric parabola that vanishes at both ends:

| $x/x_{max}$ | 0 | 0.25 | 0.5 | 0.75 | 1 |
|---|---|---|---|---|---|
| $\Delta y/(\alpha_2x_{max}^2)$ | 0 | −0.1875 | −0.25 | −0.1875 | 0 |

For $\alpha_2 > 0$ the characteristic bends upward and lies *below* its chord; for $\alpha_2 < 0$ (gain compression) it lies above.

### Step 4 — Normalize to the output swing

The output swing is

$$y(x_{max}) - y(0) = \alpha_1x_{max} + \alpha_2x_{max}^2,$$

so

$$
\text{nonlinearity} = \frac{|\alpha_2|\,x_{max}^2/4}{\alpha_1x_{max} + \alpha_2x_{max}^2} = \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})}.
$$

For a mildly nonlinear amplifier, $|\alpha_2|x_{max} \ll \alpha_1$:

$$\text{nonlinearity} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}.$$

### Step 5 — Example and interpretation

With $\alpha_1 = 1$, $\alpha_2 = 0.1$ (in units of $1/x$) and $x_{max} = 1$:

$$
\begin{aligned}
|\Delta y|_{max} &= \frac{0.1\times1^2}{4} = 0.025,\\
\text{swing} &= 1\times1 + 0.1\times1^2 = 1.1,\\
\text{nonlinearity} &= \frac{0.025}{1.1} = 2.27\ \%\quad(\text{approximation: } 0.1/4 = 2.5\ \%).
\end{aligned}
$$

The relative nonlinearity is proportional to $x_{max}$ (halving the range halves it), the signature of a quadratic term. A purely odd, cubic characteristic over a symmetric range would instead give a nonlinearity proportional to $x_{max}^2$.

### Result

The maximum deviation from the end-point line occurs at the middle of the range, $x = x_{max}/2$, and equals

$$|\Delta y|_{max} = \frac{|\alpha_2|\,x_{max}^2}{4}.$$

Normalized to the output swing $\alpha_1x_{max} + \alpha_2x_{max}^2$:

$$\text{maximum nonlinearity} = \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}\quad(\text{for } |\alpha_2|x_{max} \ll \alpha_1).$$

**Common mistake.** Measuring the deviation from the tangent at the origin, $y = \alpha_1x$, instead of from the end-point line. That deviation is $\alpha_2x^2$, largest at $x = x_{max}$ and four times bigger ($\alpha_2x_{max}^2$): a different, gain-referenced definition.

**Common mistake.** Locating the maximum elsewhere (for example at $x_{max}/\sqrt3$, which belongs to a cubic characteristic) or normalizing to the wrong quantity (for example twice the swing, as for a range symmetric about zero). Here the error parabola is symmetric about the middle of the range, and the swing is simply $y(x_{max}) - y(0)$.
