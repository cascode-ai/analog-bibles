# Detailed solution - R285

**Approach.** Model the amplifier as the ideal controlled source $-AV_X$ in series with $R_{out}$, driving node Y, with $C_F$ between X and Y. A capacitor's voltage can change instantly only if an infinite (impulsive) current flows into it. With a finite $R_{out}$ in the only path to Y, no such current is available, so at the instant of the step $C_F$ keeps its voltage and Y is dragged up with X. We then solve the circuit for $t > 0$ and derive the transfer function to show the right-half-plane zero behind this behaviour.

### Step 1 — The model and its KCL equation

The circuit (all quantities are changes from the initial state, so $V_X = V_Y = 0$ before the step):

- An ideal source drives X with a step $\Delta V$ at $t = 0$.
- The amplifier is an ideal voltage-controlled source $-AV_X$ (internal node, say N) in series with $R_{out}$ from N to Y.
- $C_F$ connects X and Y. Nothing else is connected to Y.

<!-- diagram: diagram-01.cir -->

**KCL at Y.** Two currents enter Y: through $C_F$ from X, $C_F\,d(V_X - V_Y)/dt$, and through $R_{out}$ from N, $(-AV_X - V_Y)/R_{out}$. They must sum to zero:

$$C_F\frac{d(V_X - V_Y)}{dt} + \frac{-AV_X - V_Y}{R_{out}} = 0. \tag{1}$$

### Step 2 — What happens at $t = 0^+$

Integrate (1) over the vanishingly short interval from $0^-$ to $0^+$:

$$C_F\left[\Delta(V_X - V_Y)\right]_{0^-}^{0^+} = -\int_{0^-}^{0^+}\frac{-AV_X - V_Y}{R_{out}}\,dt .$$

The integrand on the right is finite (finite voltages over a finite $R_{out}$), so the integral over a zero-length interval is zero. Hence

$$V_X - V_Y \ \text{is continuous at } t = 0 \quad\Longrightarrow\quad V_Y(0^+) - V_Y(0^-) = V_X(0^+) - V_X(0^-) = \Delta V .$$

**The output jumps up by $+\Delta V$.** Physically, to make Y follow the amplifier's command ($-A\Delta V$) instantly, the voltage across $C_F$ would have to change by $(1 + A)\Delta V$ in zero time. That requires an infinite current, which the amplifier cannot deliver through $R_{out}$. So at first $C_F$ acts like a battery (a short for changes) and simply carries the input step straight through to the output.

### Step 3 — Response for $t > 0$

Now $V_X = \Delta V$ is constant, so (1) becomes

$$-C_F\frac{dV_Y}{dt} = \frac{A\Delta V + V_Y}{R_{out}} \quad\Longrightarrow\quad R_{out}C_F\frac{dV_Y}{dt} + V_Y = -A\Delta V .$$

This is a first-order equation with time constant $\tau = R_{out}C_F$ and final value $-A\Delta V$. With the initial value $V_Y(0^+) = +\Delta V$:

$$V_Y(t) = -A\Delta V + (1 + A)\Delta V\,e^{-t/(R_{out}C_F)} .$$

So the output **starts at $+\Delta V$** and then **decays exponentially toward $-A\Delta V$**, the value an ideal amplifier would have produced at once. The current $[V_Y - (-A\Delta V)]/R_{out}$ through $R_{out}$ is what gradually charges $C_F$. It crosses zero at $t = R_{out}C_F\ln[(1 + A)/A]$.

### Step 4 — The transfer function: a right-half-plane zero

Take the Laplace transform of (1):

$$
\begin{aligned}
sC_F(V_X - V_Y) + \frac{-AV_X - V_Y}{R_{out}} &= 0\\
V_X\left(sC_F - \frac{A}{R_{out}}\right) &= V_Y\left(sC_F + \frac{1}{R_{out}}\right)\\
\frac{V_Y}{V_X}(s) &= \frac{sC_F - A/R_{out}}{sC_F + 1/R_{out}} = -A\,\frac{1 - s\dfrac{R_{out}C_F}{A}}{1 + sR_{out}C_F}.
\end{aligned}
$$

- **Pole** at $s_p = -1/(R_{out}C_F)$: the time constant of the decay.
- **Zero** at $s_z = +A/(R_{out}C_F)$: a real, *positive* value, i.e. a **right-half-plane (RHP) zero**.
- **Low frequency:** $V_Y/V_X \to -A$, the main, inverting path through the amplifier.
- **High frequency:** $V_Y/V_X \to +1$, the feedforward path through $C_F$, non-inverting.

The two paths have opposite signs, and at the complex frequency $s_z$ they cancel exactly, which is what a zero means. A high-frequency gain with the opposite sign to the dc gain is the signature of an RHP zero, and in the time domain it shows up as a step response that starts in the "wrong" direction. The initial value theorem confirms the jump: $V_Y(0^+) = \lim_{s\to\infty}sH(s)\,\Delta V/s = H(\infty)\Delta V = +\Delta V$.

With $R_{out} = 0$ the zero moves to infinity, the amplifier supplies the impulsive charging current, and the output steps directly to $-A\Delta V$. The jump is a consequence of the finite $R_{out}$.

### Step 5 — Numerical example

$A = 10$, $R_{out} = 10\ \mathrm{k}\Omega$, $C_F = 1$ pF, $\Delta V = 0.1$ V:

$$
\begin{aligned}
\tau &= R_{out}C_F = (10\ \mathrm{k}\Omega)(1\ \mathrm{pF}) = 10\ \mathrm{ns},\\
V_Y(0^+) &= +0.1\ \mathrm{V}, \qquad V_Y(\infty) = -10\times0.1 = -1\ \mathrm{V},\\
V_Y(t) &= -1 + 1.1\,e^{-t/10\,\mathrm{ns}}\ \mathrm{V}, \qquad \text{zero crossing at } t = 10\ \mathrm{ns}\times\ln(1.1) = 0.95\ \mathrm{ns},\\
s_z &= \frac{A}{R_{out}C_F} = \frac{10}{10\ \mathrm{ns}} = 10^9\ \mathrm{rad/s}\ \ (159\ \mathrm{MHz}).
\end{aligned}
$$

### Result

At the instant of the step, the voltage across $C_F$ cannot change, because the only path that could supply charge to Y is $R_{out}$, which carries only a finite current. So $V_Y - V_X$ keeps its initial value and Y is dragged up together with X: $\Delta V_Y(0^+) = +\Delta V$. Only afterwards does the amplifier act. The current $[V_Y - (-A\Delta V)]/R_{out}$ charges $C_F$, and Y decays exponentially from $+\Delta V$ toward $-A\Delta V$ with time constant $R_{out}C_F$:

$$V_Y(t) = -A\Delta V + (1 + A)\Delta V\,e^{-t/(R_{out}C_F)}.$$

$C_F$ is a feedforward path with gain $+1$ at high frequencies, opposite in sign to the main path ($-A$). The two cancel at $s_z = +A/(R_{out}C_F)$, a right-half-plane zero of $V_Y/V_X = (sC_F - A/R_{out})/(sC_F + 1/R_{out})$.

**Common mistake.** Claiming the output jumps to $-A\Delta V$ (or by $-(1 + A)\Delta V$) immediately. That would require the capacitor voltage to change by $(1 + A)\Delta V$ in zero time, i.e. an infinite current through the finite $R_{out}$.

**Common mistake.** Attributing the initial upward jump to amplifier overshoot or ringing. The model has a single pole and no resonance. The jump is direct capacitive feedthrough from the input, and it is the time-domain signature of the right-half-plane zero.

**Common mistake.** Saying that the output first moves down a little. The feedforward path is non-inverting, so the output first moves *up*, by exactly $\Delta V$, before the inverting main path takes over.
