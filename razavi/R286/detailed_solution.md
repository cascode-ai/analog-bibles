# Detailed solution - R286

**Approach.** Write Kirchhoff's current law (KCL) at the output node Y directly in the Laplace domain: the impedance of $C_F$ is $1/(sC_F)$, and the amplifier is the controlled source $-AV_X$ behind $R_{out}$. Since $V_X = V_{in}$ (ideal source), one equation gives $V_Y/V_{in}$. For the step response, multiply by $\Delta V/s$, expand in partial fractions and invert the Laplace transform. Miller's theorem is not needed, and it would in fact miss the feedforward path through $C_F$.

### Step 1 — The model

- X is driven by the ideal source, so $V_X = V_{in}$ at all frequencies.
- The amplifier output is an ideal source $-AV_X$ at an internal node, connected to Y through $R_{out}$.
- $C_F$ connects X and Y.
- Nothing else is connected to Y.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at Y in the s-domain

The currents leaving Y must sum to zero:

- through $R_{out}$ toward the controlled source: $\dfrac{V_Y - (-AV_{in})}{R_{out}} = \dfrac{V_Y + AV_{in}}{R_{out}}$;
- through $C_F$ toward X: $(V_Y - V_{in})\,sC_F$.

$$\frac{V_Y + AV_{in}}{R_{out}} + (V_Y - V_{in})\,sC_F = 0 .$$

Multiply by $R_{out}$:

$$V_Y + AV_{in} + R_{out}C_Fs\,V_Y - R_{out}C_Fs\,V_{in} = 0 .$$

Collect the $V_Y$ terms on the left and the $V_{in}$ terms on the right:

$$V_Y\,(1 + R_{out}C_Fs) = V_{in}\,(R_{out}C_Fs - A).$$

### Step 3 — Transfer function, pole and zero

$$\boxed{\frac{V_Y}{V_{in}}(s) = \frac{R_{out}C_Fs - A}{1 + R_{out}C_Fs}} = -A\,\frac{1 - s\,\dfrac{R_{out}C_F}{A}}{1 + sR_{out}C_F}.$$

- **Pole:** $1 + R_{out}C_Fs = 0$, so $s_p = -\dfrac{1}{R_{out}C_F}$ (left half plane, stable).
- **Zero:** $R_{out}C_Fs - A = 0$, so $s_z = +\dfrac{A}{R_{out}C_F}$, a **right-half-plane zero**.
- **dc gain** ($s \to 0$): $-A$, the amplifier path.
- **High-frequency gain** ($s \to \infty$): $R_{out}C_Fs/(R_{out}C_Fs) = +1$. At high frequency $C_F$ is a short, so the input feeds directly to Y through it.

The two signal paths, inverting through the amplifier and non-inverting through $C_F$, have opposite signs and cancel at $s = s_z$. That is why the zero lies in the right half plane.

**Why Miller's theorem would mislead.** Splitting $C_F$ into $(1 + A)C_F$ at X and $(1 + 1/A)C_F$ at Y would give $-A/[1 + sR_{out}(1 + 1/A)C_F]$: a slightly different pole and **no zero**. Miller's theorem with the low-frequency gain cannot represent the direct feedforward through $C_F$.

### Step 4 — Step response via partial fractions

For an input step of height $\Delta V$, $V_{in}(s) = \Delta V/s$. Let $\tau = R_{out}C_F$:

$$V_Y(s) = \frac{\Delta V}{s}\cdot\frac{\tau s - A}{1 + \tau s} .$$

Write $\dfrac{\tau s - A}{s(1 + \tau s)} = \dfrac{a}{s} + \dfrac{b}{1 + \tau s}$ and find the coefficients:

$$
\begin{aligned}
a &= \left.\frac{\tau s - A}{1 + \tau s}\right|_{s = 0} = -A,\\
b &= \left.\frac{\tau s - A}{s}\right|_{s = -1/\tau} = \frac{-1 - A}{-1/\tau} = \tau(1 + A).
\end{aligned}
$$

So

$$V_Y(s) = \Delta V\left[-\frac{A}{s} + \frac{\tau(1 + A)}{1 + \tau s}\right] = \Delta V\left[-\frac{A}{s} + \frac{1 + A}{s + 1/\tau}\right].$$

Invert, using $1/s \leftrightarrow 1$ and $1/(s + 1/\tau) \leftrightarrow e^{-t/\tau}$ for $t \ge 0$:

$$\boxed{V_Y(t) = \Delta V\left[-A + (1 + A)\,e^{-t/(R_{out}C_F)}\right], \qquad t \ge 0 .}$$

### Step 5 — Checking the response

- **Initial value:** at $t = 0^+$, $V_Y = \Delta V[-A + 1 + A] = +\Delta V$. The initial value theorem gives the same, $\lim_{s\to\infty}sV_Y(s) = \Delta V\cdot H(\infty) = +\Delta V$. Physically, the voltage across $C_F$ cannot change instantly because the only charging path is the finite $R_{out}$, so Y jumps with X.
- **Final value:** $t \to \infty$ gives $-A\Delta V$, which the final value theorem confirms as $\lim_{s\to0}sV_Y(s) = H(0)\Delta V = -A\Delta V$.
- **Time constant:** $\tau = R_{out}C_F$, *not* $(1 + A)R_{out}C_F$. The pole is set by $R_{out}$ and $C_F$ alone, because X is held by an ideal source.
- **Zero crossing:** $V_Y = 0$ when $e^{-t/\tau} = A/(1 + A)$, i.e. at $t = \tau\ln[(1 + A)/A]$.

So the output first jumps up by $\Delta V$ (the non-inverting feedforward path), then decays exponentially to $-A\Delta V$ (the inverting main path).

### Step 6 — Numerical example

$A = 10$, $R_{out} = 10\ \mathrm{k}\Omega$, $C_F = 1$ pF, $\Delta V = 0.1$ V:

$$
\begin{aligned}
\tau &= (10\ \mathrm{k}\Omega)(1\ \mathrm{pF}) = 10\ \mathrm{ns}, \qquad s_p = -10^8\ \mathrm{s^{-1}}, \qquad s_z = +10^9\ \mathrm{s^{-1}},\\
V_Y(t) &= 0.1\left[-10 + 11\,e^{-t/10\,\mathrm{ns}}\right]\ \mathrm{V} = -1 + 1.1\,e^{-t/10\,\mathrm{ns}}\ \mathrm{V}.
\end{aligned}
$$

| $t$ | 0⁺ | 1 ns | 5 ns | 10 ns | 30 ns | ∞ |
|---|---|---|---|---|---|---|
| $V_Y$ (V) | +0.100 | −0.005 | −0.333 | −0.595 | −0.945 | −1.000 |

### Result

$$\frac{V_Y}{V_{in}}(s) = \frac{R_{out}C_Fs - A}{1 + R_{out}C_Fs},$$

with a pole at $s = -1/(R_{out}C_F)$ and a zero at $s = +A/(R_{out}C_F)$ (right half plane); the dc gain is $-A$ and the high-frequency gain is $+1$.

Step response ($t \ge 0$):

$$V_Y(t) = \Delta V\left[-A + (1 + A)\,e^{-t/(R_{out}C_F)}\right],$$

a jump to $+\Delta V$ at $t = 0^+$, then an exponential decay to $-A\Delta V$ with $\tau = R_{out}C_F$.

**Common mistake.** Dropping the zero and writing $-A/(1 + R_{out}C_Fs)$, or using a Miller pole with $(1 + A)C_F$. The capacitor connects the input directly to the output, which adds the $sC_F$ term to the numerator. Without it the step response would start at 0 instead of $+\Delta V$.

**Common mistake.** Putting the zero in the left half plane ($s = -A/(R_{out}C_F)$). The feedforward through $C_F$ is non-inverting while the main path is inverting, so they cancel at a *positive* real $s$, which is an RHP zero.

**Common mistake.** Using $(1 + A)R_{out}C_F$ as the time constant. That would be the Miller-multiplied capacitance seen at X, but X is driven by an ideal voltage source, so that capacitance plays no role. The only time constant is $R_{out}C_F$ at the output.
