# Detailed solution - R288

**Approach.** Write Kirchhoff's current law (KCL) at the output node Y in the Laplace domain. The capacitors become admittances $sC_F$ and $sC_L$, and the amplifier is the controlled source $-AV_X$ behind $R_{out}$. Because X is held by an ideal source, $V_X = V_{in}$, and a single equation gives $V_Y/V_{in}$. The step response then follows from a partial-fraction expansion of $H(s)\,\Delta V/s$.

### Step 1 — The model

- X is driven by the ideal source: $V_X = V_{in}$.
- The amplifier output is an ideal source $-AV_X$ at an internal node, connected to Y through $R_{out}$.
- $C_F$ connects X and Y; $C_L$ connects Y to ground. Nothing else is connected to Y.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at Y

The three currents leaving Y must sum to zero:

$$\underbrace{\frac{V_Y - (-AV_{in})}{R_{out}}}_{\text{through } R_{out}} + \underbrace{(V_Y - V_{in})\,sC_F}_{\text{through } C_F} + \underbrace{V_Y\,sC_L}_{\text{through } C_L} = 0 .$$

Multiply by $R_{out}$:

$$V_Y + AV_{in} + sR_{out}C_F\,V_Y - sR_{out}C_F\,V_{in} + sR_{out}C_L\,V_Y = 0 .$$

Collect $V_Y$ on the left and $V_{in}$ on the right:

$$V_Y\left[1 + sR_{out}(C_F + C_L)\right] = V_{in}\left(sR_{out}C_F - A\right).$$

### Step 3 — Transfer function, pole and zero

$$\boxed{\frac{V_Y}{V_{in}}(s) = \frac{R_{out}C_Fs - A}{1 + R_{out}(C_F + C_L)s}}$$

- **Pole:** $s_p = -\dfrac{1}{R_{out}(C_F + C_L)}$. The output resistance drives the total capacitance at Y; $C_F$ counts fully because its other end is held by an ideal source.
- **Zero:** $s_z = +\dfrac{A}{R_{out}C_F}$, a **right-half-plane zero**. It depends only on $C_F$, the feedforward element, not on $C_L$.
- **dc gain:** $-A$. **High-frequency gain:** $\dfrac{R_{out}C_F}{R_{out}(C_F + C_L)} = \dfrac{C_F}{C_F + C_L}$, positive: the input is fed forward through $C_F$ and divided against $C_L$.

(With Miller's theorem one would place $(1 + 1/A)C_F$ at the output and find a single pole and **no zero**, missing the feedforward path. That is why the direct nodal analysis is needed.)

### Step 4 — Step response by partial fractions

Let $\tau = R_{out}(C_F + C_L)$ and $\tau_F = R_{out}C_F$. For $V_{in}(s) = \Delta V/s$:

$$V_Y(s) = \frac{\Delta V}{s}\cdot\frac{\tau_Fs - A}{1 + \tau s} = \Delta V\left[\frac{a}{s} + \frac{b}{1 + \tau s}\right].$$

Coefficients (cover-up method):

$$
\begin{aligned}
a &= \left.\frac{\tau_Fs - A}{1 + \tau s}\right|_{s = 0} = -A,\\
b &= \left.\frac{\tau_Fs - A}{s}\right|_{s = -1/\tau} = \frac{-\tau_F/\tau - A}{-1/\tau} = \tau_F + A\tau .
\end{aligned}
$$

Hence

$$V_Y(s) = \Delta V\left[-\frac{A}{s} + \frac{\tau_F + A\tau}{1 + \tau s}\right] = \Delta V\left[-\frac{A}{s} + \frac{A + \tau_F/\tau}{s + 1/\tau}\right].$$

With $\tau_F/\tau = C_F/(C_F + C_L)$ and the inverse transforms $1/s \to 1$ and $1/(s + 1/\tau) \to e^{-t/\tau}$:

$$\boxed{V_Y(t) = \Delta V\left[-A + \left(A + \frac{C_F}{C_F + C_L}\right)e^{-t/\tau}\right], \qquad \tau = R_{out}(C_F + C_L),\ \ t \ge 0 .}$$

### Step 5 — Checking the result

- **$t = 0^+$:** $V_Y = \Delta V\,C_F/(C_F + C_L)$, a jump in the same direction as the input. It agrees with $H(\infty)\Delta V$ (initial value theorem) and with charge conservation at Y. The finite $R_{out}$ cannot deliver charge instantly, so the step reaches Y only through the capacitive divider $C_F$–$C_L$.
- **$t \to \infty$:** $V_Y = -A\Delta V$, equal to $H(0)\Delta V$ (final value theorem).
- **Special case $C_L = 0$:** $V_Y(t) = \Delta V[-A + (1 + A)e^{-t/(R_{out}C_F)}]$, the unloaded result.
- **Zero crossing:** $e^{-t/\tau} = A/[A + C_F/(C_F + C_L)]$, i.e. $t = \tau\ln\left[1 + \frac{C_F}{A(C_F + C_L)}\right]$, a very short time when $A$ is large.

### Step 6 — Numerical example

$A = 10$, $R_{out} = 10\ \mathrm{k}\Omega$, $C_F = 1$ pF, $C_L = 4$ pF, $\Delta V = 0.1$ V:

$$
\begin{aligned}
\tau &= (10\ \mathrm{k}\Omega)(5\ \mathrm{pF}) = 50\ \mathrm{ns}, \qquad \frac{C_F}{C_F + C_L} = 0.2,\\
V_Y(t) &= 0.1\left[-10 + 10.2\,e^{-t/50\,\mathrm{ns}}\right]\ \mathrm{V} = -1 + 1.02\,e^{-t/50\,\mathrm{ns}}\ \mathrm{V},\\
s_p &= -2\times10^7\ \mathrm{s^{-1}}, \qquad s_z = +\frac{10}{(10\ \mathrm{k}\Omega)(1\ \mathrm{pF})} = +10^9\ \mathrm{s^{-1}}.
\end{aligned}
$$

| $t$ | 0⁺ | 5 ns | 10 ns | 50 ns | 150 ns | ∞ |
|---|---|---|---|---|---|---|
| $V_Y$ (V) | +0.020 | −0.077 | −0.165 | −0.625 | −0.949 | −1.000 |

The output starts 20 mV *above* its initial value, crosses zero after about 1 ns, and settles at −1 V with a 50 ns time constant.

### Result

$$\frac{V_Y}{V_{in}}(s) = \frac{R_{out}C_Fs - A}{1 + R_{out}(C_F + C_L)s},$$

with a pole at $s = -1/[R_{out}(C_F + C_L)]$ and a right-half-plane zero at $s = +A/(R_{out}C_F)$; the dc gain is $-A$ and the high-frequency gain is $C_F/(C_F + C_L)$.

Step response ($t \ge 0$), with $\tau = R_{out}(C_F + C_L)$:

$$V_Y(t) = \Delta V\left[-A + \left(A + \frac{C_F}{C_F + C_L}\right)e^{-t/\tau}\right].$$

It starts at $\Delta V\,C_F/(C_F + C_L)$ and decays to $-A\Delta V$.

**Common mistake.** Leaving $C_L$ out of the pole, i.e. using $\tau = R_{out}C_F$. Both capacitors hang on node Y, and the other end of each is held at a fixed voltage after the step (the ideal source and ground), so $R_{out}$ sees $C_F + C_L$.

**Common mistake.** Putting $C_L$ into the zero, or placing the zero in the left half plane. The zero comes from the cancellation of the feedforward current $sC_FV_{in}$ and the amplifier current $AV_{in}/R_{out}$. It involves only $C_F$, and since the two currents have opposite signs, it lies at positive $s$.

**Common mistake.** Using Miller's theorem, which gives a single pole with $(1 + 1/A)C_F + C_L$ and no zero. It predicts a step response that starts at 0 and goes straight down, missing the initial jump.
