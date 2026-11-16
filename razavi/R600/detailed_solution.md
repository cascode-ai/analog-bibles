# Detailed solution - R600

**Approach.** Substitute the input into the characteristic, expand the square, and collect the DC, fundamental and second-harmonic terms. The THD is the ratio of the harmonic amplitude to the fundamental amplitude.

### Step 1 — Write the input in a convenient form

The input is a sinusoid of amplitude $A$ on a DC level $A$, sweeping exactly $[0, x_{max}]$:

$$x(t) = \frac{x_{max}\cos\omega t + x_{max}}{2} = A + A\cos\omega t, \qquad A = \frac{x_{max}}{2}.$$

### Step 2 — Expand the square term

$$
\begin{aligned}
x^2(t) &= A^2(1 + \cos\omega t)^2\\
&= A^2\left(1 + 2\cos\omega t + \cos^2\omega t\right)\\
&= A^2\left(1 + 2\cos\omega t + \tfrac12 + \tfrac12\cos2\omega t\right)\qquad\left(\cos^2\theta = \tfrac12 + \tfrac12\cos2\theta\right)\\
&= A^2\left(\tfrac32 + 2\cos\omega t + \tfrac12\cos2\omega t\right).
\end{aligned}
$$

Because the input has a DC component, squaring it also produces the cross term $2\cos\omega t$ at the fundamental.

### Step 3 — Output components

$$
\begin{aligned}
y(t) &= \alpha_1(A + A\cos\omega t) + \alpha_2A^2\left(\tfrac32 + 2\cos\omega t + \tfrac12\cos2\omega t\right)\\
&= \underbrace{\left(\alpha_1A + \tfrac32\alpha_2A^2\right)}_{\text{DC}} + \underbrace{\left(\alpha_1A + 2\alpha_2A^2\right)}_{\text{fundamental } Y_1}\cos\omega t + \underbrace{\tfrac12\alpha_2A^2}_{\text{2nd harmonic } Y_2}\cos2\omega t .
\end{aligned}
$$

With $A = x_{max}/2$, $A^2 = x_{max}^2/4$:

$$
\begin{aligned}
Y_1 &= \alpha_1\frac{x_{max}}{2} + 2\alpha_2\frac{x_{max}^2}{4} = \frac{x_{max}}{2}\left(\alpha_1 + \alpha_2x_{max}\right),\\
Y_2 &= \frac12\alpha_2\frac{x_{max}^2}{4} = \frac{\alpha_2x_{max}^2}{8}.
\end{aligned}
$$

A second-order polynomial acting on one sinusoid produces nothing above $2\omega$, so there are **no third or higher harmonics**; the DC term is the operating level, not distortion.

### Step 4 — Total harmonic distortion

Only $Y_2$ exists, so

$$
\begin{aligned}
\mathrm{THD} &= \frac{|Y_2|}{Y_1} = \frac{|\alpha_2|\,x_{max}^2/8}{(x_{max}/2)(\alpha_1 + \alpha_2x_{max})}\\
&= \frac{|\alpha_2|\,x_{max}^2}{8}\cdot\frac{2}{x_{max}(\alpha_1 + \alpha_2x_{max})}\\
&= \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})}.
\end{aligned}
$$

For small nonlinearity ($|\alpha_2|x_{max} \ll \alpha_1$):

$$\mathrm{THD} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}.$$

As a power ratio, THD is the square of this value.

### Step 5 — Example and interpretation

With $\alpha_1 = 1$, $\alpha_2 = 0.1$ and $x_{max} = 1$:

$$
\begin{aligned}
Y_1 &= \tfrac12(1 + 0.1) = 0.55,\qquad Y_2 = \frac{0.1}{8} = 0.0125,\\
\mathrm{THD} &= \frac{0.0125}{0.55} = 2.27\ \% \quad(-32.9\ \mathrm{dB}).
\end{aligned}
$$

- The fundamental is $\alpha_1A + 2\alpha_2A^2$, not just $\alpha_1A$: the input's DC level sets the incremental gain to $\alpha_1 + 2\alpha_2A = \alpha_1 + \alpha_2x_{max}$, the average slope over the range.
- The THD grows in proportion to $x_{max}$, as is typical of second-order distortion.
- The result equals the end-point nonlinearity of the same characteristic over $[0, x_{max}]$, (maximum deviation $|\alpha_2|x_{max}^2/4$) / (swing $\alpha_1x_{max} + \alpha_2x_{max}^2$): for a purely quadratic characteristic the two measures coincide.

### Result

Only a second harmonic is produced, with amplitude $\alpha_2x_{max}^2/8$, against a fundamental of $(x_{max}/2)(\alpha_1 + \alpha_2x_{max})$. Hence

$$\mathrm{THD} = \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}$$

(as a ratio of harmonic to fundamental amplitude; the square of this as a power ratio).

**Common mistake.** Taking the fundamental as $\alpha_1x_{max}/2$ only. The cross term $2\alpha_2A^2\cos\omega t$ also lies at the fundamental; dropping it gives $\alpha_2x_{max}/(4\alpha_1)$, which is only the small-nonlinearity approximation.

**Common mistake.** Using $x_{max}$ instead of $x_{max}/2$ as the signal amplitude (giving THD $= \alpha_2x_{max}/(2\alpha_1)$), counting the DC term as distortion, or claiming third and higher harmonics.
