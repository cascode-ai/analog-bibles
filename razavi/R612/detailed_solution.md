# Detailed solution - R612

**Approach.** Use harmonic balance: assume the output contains a fundamental and a small third harmonic, compute the amplifier input $y_S = x - \beta y$, pass it through $\alpha_1y_S + \alpha_3y_S^3$, and require the resulting $\cos\omega t$ and $\cos3\omega t$ coefficients to reproduce the assumed output. Because the nonlinearity is mild, products involving the small third harmonic can be dropped; a power-series check confirms the result.

### Step 1 — Assumed form of the output

The characteristic is odd and the feedback linear, so a cosine input produces only odd harmonics. With phase shifts neglected,

$$y(t) \approx a\cos\omega t + c\cos3\omega t,$$

with fundamental $a$ and third harmonic $c$, $|c| \ll a$; fifth and higher harmonics are of higher order in $\alpha_3$ and neglected.

### Step 2 — The amplifier input

$$y_S(t) = x(t) - \beta y(t) = (V_m - \beta a)\cos\omega t - \beta c\cos3\omega t .$$

Call $A = V_m - \beta a$ the fundamental amplitude at the amplifier input; the term $-\beta c\cos3\omega t$ is the fed-back third harmonic.

### Step 3 — Pass $y_S$ through the amplifier

**Linear term:**

$$\alpha_1y_S = \alpha_1A\cos\omega t - \alpha_1\beta c\cos3\omega t .$$

**Cubic term.** Since $|\beta c| \ll A$, keep only $A^3\cos^3\omega t$ (cross terms with $c$ are second-order small), and use $\cos^3\theta = \tfrac34\cos\theta + \tfrac14\cos3\theta$:

$$\alpha_3y_S^3 \approx \alpha_3A^3\left(\tfrac34\cos\omega t + \tfrac14\cos3\omega t\right).$$

**Total output:**

$$y \approx \left(\alpha_1A + \tfrac34\alpha_3A^3\right)\cos\omega t + \left(-\alpha_1\beta c + \tfrac14\alpha_3A^3\right)\cos3\omega t .$$

### Step 4 — Match the coefficients

**Fundamental.** $a = \alpha_1A + \tfrac34\alpha_3A^3 \approx \alpha_1A$ for a mild nonlinearity, so

$$
\begin{aligned}
A &= V_m - \beta a \approx V_m - \beta\alpha_1A\\
A\,(1 + \beta\alpha_1) &= V_m\\
A &= \frac{V_m}{1 + \beta\alpha_1}, \qquad a \approx \frac{\alpha_1V_m}{1 + \beta\alpha_1}.
\end{aligned}
$$

The amplifier's own input swing is smaller than $V_m$ by $1 + \beta\alpha_1$.

**Third harmonic.** Equating the $\cos3\omega t$ coefficient with $c$:

$$
\begin{aligned}
c &= -\alpha_1\beta c + \tfrac14\alpha_3A^3\\
c\,(1 + \beta\alpha_1) &= \tfrac14\alpha_3A^3\\
c &= \frac{\alpha_3A^3}{4\,(1 + \beta\alpha_1)}.
\end{aligned}
$$

With $A = V_m/(1 + \beta\alpha_1)$:

$$c = \frac{\alpha_3}{4(1 + \beta\alpha_1)}\cdot\frac{V_m^3}{(1 + \beta\alpha_1)^3} = \frac{\alpha_3V_m^3}{4\,(1 + \beta\alpha_1)^4}.$$

### Step 5 — Cross-check with a power series

Write the closed-loop characteristic as $y = b_1x + b_3x^3 + \dots$ (no even terms). Then $y_S = (1 - \beta b_1)x - \beta b_3x^3$ and

$$y = \alpha_1(1 - \beta b_1)x + \left[\alpha_3(1 - \beta b_1)^3 - \alpha_1\beta b_3\right]x^3 + \dots$$

Matching gives $b_1 = \alpha_1/(1 + \beta\alpha_1)$, $1 - \beta b_1 = 1/(1 + \beta\alpha_1)$, and

$$b_3(1 + \beta\alpha_1) = \frac{\alpha_3}{(1 + \beta\alpha_1)^3} \;\Rightarrow\; b_3 = \frac{\alpha_3}{(1 + \beta\alpha_1)^4}.$$

For $x = V_m\cos\omega t$ the $x^3$ term contributes $\tfrac14b_3V_m^3\cos3\omega t$, i.e. $c = \alpha_3V_m^3/[4(1 + \beta\alpha_1)^4]$, the same result.

### Step 6 — Interpretation and comparison with open loop

Relative to the fundamental,

$$\frac{|c|}{a} = \frac{|\alpha_3|V_m^3/[4(1 + \beta\alpha_1)^4]}{\alpha_1V_m/(1 + \beta\alpha_1)} = \frac{|\alpha_3|V_m^2}{4\alpha_1}\cdot\frac{1}{(1 + \beta\alpha_1)^3}.$$

Open loop with the same input, $c_{OL} = \alpha_3V_m^3/4$ and $\mathrm{HD3}_{OL} = |\alpha_3|V_m^2/(4\alpha_1)$, so feedback lowers HD3 by $(1 + \beta\alpha_1)^3$: the input swing shrinks by $1 + \beta\alpha_1$ and the cubic term scales as its cube while the fundamental scales linearly (a factor $(1 + \beta\alpha_1)^2$), and the loop suppresses the generated harmonic by another $1 + \beta\alpha_1$. Compared at the same *output* amplitude (open-loop input $V_m/(1 + \beta\alpha_1)$), the closed-loop HD3 is lower by $1 + \beta\alpha_1$.

**Example.** For $\alpha_1 = 10$, $\alpha_3 = -5\ \mathrm{V^{-2}}$, $\beta = 0.2$ and $V_m = 0.1$ V: $1 + \beta\alpha_1 = 3$, $|c| = 5(0.001)/(4\times81) = 1.54\times10^{-5}$ V and $a = 0.333$ V, so HD3 $= 4.6\times10^{-5}$, against $1.25\times10^{-3}$ open loop (27 times larger). A numerical solution of the loop equation agrees to within 0.2 %.

### Result

$$|c| \approx \frac{|\alpha_3|\,V_m^3}{4\,(1 + \beta\alpha_1)^4},$$

and, relative to the fundamental $a \approx \alpha_1V_m/(1 + \beta\alpha_1)$,

$$\frac{|c|}{a} \approx \frac{|\alpha_3|V_m^2}{4\alpha_1}\cdot\frac{1}{(1 + \beta\alpha_1)^3},$$

i.e. $(1 + \beta\alpha_1)^3$ below the open-loop value for the same input amplitude. No second harmonic appears, because the characteristic is odd.

**Common mistake.** Dropping the fed-back third harmonic $-\beta c\cos3\omega t$ in $y_S$. That gives $c = \alpha_3V_m^3/[4(1 + \beta\alpha_1)^3]$, one power of $1 + \beta\alpha_1$ too large.

**Common mistake.** Using the full input amplitude $V_m$ at the amplifier input (getting $c = \alpha_3V_m^3/4$, "unchanged by feedback", or $c = \alpha_3V_m^3/[4(1 + \beta\alpha_1)]$). The amplifier sees only $V_m/(1 + \beta\alpha_1)$, and the cubic distortion feels this reduction to the third power.
