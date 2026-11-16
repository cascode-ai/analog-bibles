# Detailed solution - R600

**Approach.** Substitute the input into the characteristic, expand the square with the identity $\cos^2\theta = \tfrac12(1 + \cos2\theta)$, and collect the DC, fundamental and second-harmonic terms. The THD is the ratio of the harmonic amplitude to the fundamental amplitude.

### Step 1 — Write the input in a convenient form

The input is

$$x(t) = \frac{x_{max}\cos\omega t + x_{max}}{2} = A + A\cos\omega t, \qquad A = \frac{x_{max}}{2}.$$

It is a sinusoid of amplitude $A = x_{max}/2$ riding on a DC level $A$, so it sweeps exactly the range $[0, x_{max}]$: $x = 0$ when $\cos\omega t = -1$ and $x = x_{max}$ when $\cos\omega t = +1$.

### Step 2 — Expand the square term

$$
\begin{aligned}
x^2(t) &= A^2(1 + \cos\omega t)^2\\
&= A^2\left(1 + 2\cos\omega t + \cos^2\omega t\right)\\
&= A^2\left(1 + 2\cos\omega t + \tfrac12 + \tfrac12\cos2\omega t\right)\qquad\left(\cos^2\theta = \tfrac12 + \tfrac12\cos2\theta\right)\\
&= A^2\left(\tfrac32 + 2\cos\omega t + \tfrac12\cos2\omega t\right).
\end{aligned}
$$

Note the cross term $2\cos\omega t$: because the input has a DC component, squaring it also produces a component at the fundamental frequency.

### Step 3 — Output components

$$
\begin{aligned}
y(t) &= \alpha_1(A + A\cos\omega t) + \alpha_2A^2\left(\tfrac32 + 2\cos\omega t + \tfrac12\cos2\omega t\right)\\
&= \underbrace{\left(\alpha_1A + \tfrac32\alpha_2A^2\right)}_{\text{DC}} + \underbrace{\left(\alpha_1A + 2\alpha_2A^2\right)}_{\text{fundamental } Y_1}\cos\omega t + \underbrace{\tfrac12\alpha_2A^2}_{\text{2nd harmonic } Y_2}\cos2\omega t .
\end{aligned}
$$

In terms of $x_{max}$ ($A = x_{max}/2$, $A^2 = x_{max}^2/4$):

$$
\begin{aligned}
Y_1 &= \alpha_1\frac{x_{max}}{2} + 2\alpha_2\frac{x_{max}^2}{4} = \frac{x_{max}}{2}\left(\alpha_1 + \alpha_2x_{max}\right),\\
Y_2 &= \frac12\alpha_2\frac{x_{max}^2}{4} = \frac{\alpha_2x_{max}^2}{8}.
\end{aligned}
$$

There are **no third or higher harmonics**: a second-order polynomial acting on a single sinusoid can create frequencies only up to $2\omega$. The DC term is not distortion; it is simply the output's operating level.

### Step 4 — Total harmonic distortion

THD (as an amplitude ratio) is the rms sum of all harmonic amplitudes divided by the fundamental amplitude, $\mathrm{THD} = \sqrt{Y_2^2 + Y_3^2 + \dots}\,/\,Y_1$. Here only $Y_2$ exists:

$$
\begin{aligned}
\mathrm{THD} &= \frac{|Y_2|}{Y_1} = \frac{|\alpha_2|\,x_{max}^2/8}{(x_{max}/2)(\alpha_1 + \alpha_2x_{max})}\\
&= \frac{|\alpha_2|\,x_{max}^2}{8}\cdot\frac{2}{x_{max}(\alpha_1 + \alpha_2x_{max})}\\
&= \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})}.
\end{aligned}
$$

For small nonlinearity ($|\alpha_2|x_{max} \ll \alpha_1$):

$$\mathrm{THD} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}.$$

If THD is quoted as a power ratio instead, it is the square of this value.

### Step 5 — Example and interpretation

With $\alpha_1 = 1$, $\alpha_2 = 0.1$ and $x_{max} = 1$:

$$
\begin{aligned}
Y_1 &= \tfrac12(1 + 0.1) = 0.55,\qquad Y_2 = \frac{0.1}{8} = 0.0125,\\
\mathrm{THD} &= \frac{0.0125}{0.55} = 2.27\ \% \quad(-32.9\ \mathrm{dB}).
\end{aligned}
$$

**Observations.**

- The fundamental is $\alpha_1A + 2\alpha_2A^2$, not just $\alpha_1A$: the DC level of the input moves the operating point to where the incremental gain is $\alpha_1 + 2\alpha_2A = \alpha_1 + \alpha_2x_{max}$, the average slope of the characteristic over the range.
- The THD grows in proportion to $x_{max}$, as is typical of second-order distortion.
- The result is identical to the end-point nonlinearity of the same characteristic over $[0, x_{max}]$, namely (maximum deviation $|\alpha_2|x_{max}^2/4$) / (swing $\alpha_1x_{max} + \alpha_2x_{max}^2$). For a purely quadratic characteristic, the two measures of nonlinearity coincide.

### Result

Only a second harmonic is produced, with amplitude $\alpha_2x_{max}^2/8$, against a fundamental of $(x_{max}/2)(\alpha_1 + \alpha_2x_{max})$. Hence

$$\mathrm{THD} = \frac{|\alpha_2|\,x_{max}}{4\,(\alpha_1 + \alpha_2x_{max})} \approx \frac{|\alpha_2|\,x_{max}}{4\alpha_1}$$

(as a ratio of harmonic to fundamental amplitude; the square of this as a power ratio).

**Common mistake.** Taking the fundamental as $\alpha_1x_{max}/2$ only. The cross term $2\alpha_2A^2\cos\omega t$, which comes from squaring a signal that has a DC component, also lies at the fundamental frequency; dropping it gives $\alpha_2x_{max}/(4\alpha_1)$, which is only the small-nonlinearity approximation.

**Common mistake.** Using $x_{max}$ instead of $x_{max}/2$ as the signal amplitude (giving THD $= \alpha_2x_{max}/(2\alpha_1)$), counting the DC term as distortion, or claiming third and higher harmonics. A square law acting on a single tone produces only DC, the fundamental and the second harmonic.
