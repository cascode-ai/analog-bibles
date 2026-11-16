# Detailed solution - R587

**Approach.** Replace the op amp by its single-stage model (a transconductance $G_m$ with output resistance $R_0$), write KCL at X and at the output, and derive the closed-loop transfer function. Its DC value gives the gain error and its pole gives the time constant. With no load capacitance the time constant turns out to be set by $C_1 + C_{in}$ alone, so the speed specification caps $C_1$, and the accuracy specification then sets the smallest $C_2$ for that $C_1$.

### Step 1 — Small-signal model

- **Node X** (inverting input): $C_1$ to the input, $C_{in} = 0.2$ pF to ground, $C_2$ to the output.
- **Output node:** a controlled current source of value $G_m(V^+ - V^-) = -G_mV_X$ flowing *into* the output, the output resistance $R_0$ to ground, and the other end of $C_2$. There is no load capacitance.
- Numbers: $G_m = 1/(100\ \Omega) = 10$ mS and $R_0 = A_{v1}/G_m = 1000 \times 100\ \Omega = 100\ \mathrm{k}\Omega$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Node equations

**KCL at X** (current in through $C_1$ = current out through $C_{in}$ and $C_2$):

$$sC_1(V_{in} - V_X) = sC_{in}V_X + sC_2(V_X - V_{out}).$$

Let $C_T = C_1 + C_2 + C_{in}$, the total capacitance at X. Collecting terms and dividing by $s$:

$$V_X = \frac{C_1V_{in} + C_2V_{out}}{C_T}.$$

**KCL at the output** (current supplied by the source = current into $R_0$ plus current into $C_2$):

$$-G_mV_X = \frac{V_{out}}{R_0} + sC_2(V_{out} - V_X)\quad\Longrightarrow\quad V_{out}\left(\frac{1}{R_0} + sC_2\right) = V_X\,(sC_2 - G_m).$$

### Step 3 — Transfer function

Substitute $V_X$ and multiply by $C_T$:

$$
\begin{aligned}
V_{out}\left(\frac{1}{R_0} + sC_2\right)C_T &= (C_1V_{in} + C_2V_{out})(sC_2 - G_m)\\
V_{out}\left[\frac{C_T}{R_0} + sC_2C_T - sC_2^2 + G_mC_2\right] &= C_1V_{in}\,(sC_2 - G_m)\\
V_{out}\left[G_mC_2 + \frac{C_T}{R_0} + sC_2(C_1 + C_{in})\right] &= C_1V_{in}\,(sC_2 - G_m),
\end{aligned}
$$

using $C_T - C_2 = C_1 + C_{in}$. Hence

$$\frac{V_{out}}{V_{in}}(s) = \frac{C_1\,(sC_2 - G_m)}{G_mC_2 + C_T/R_0 + sC_2(C_1 + C_{in})}.$$

**DC gain** ($s = 0$), dividing numerator and denominator by $G_mC_2$ and using $G_mR_0 = A_{v1}$:

$$\frac{V_{out}}{V_{in}}(0) = -\frac{C_1}{C_2}\cdot\frac{1}{1 + \dfrac{C_T}{A_{v1}C_2}}.$$

**Pole.** The denominator vanishes at $s = -1/\tau$ with

$$\tau = \frac{C_2(C_1 + C_{in})}{G_mC_2 + C_T/R_0} = \frac{C_1 + C_{in}}{G_m\left(1 + \dfrac{C_T}{A_{v1}C_2}\right)} = \frac{R_0C_2(C_1 + C_{in})}{C_T + A_{v1}C_2}.$$

(The numerator also has a right-half-plane zero at $s = G_m/C_2$, from the direct feedforward through $C_2$. It only affects the first instant of the step response; the settling is governed by $\tau$.)

### Step 4 — Interpreting the time constant

Define the feedback factor $\beta = C_2/C_T$ (the fraction of $V_{out}$ that the divider $C_2$ / $(C_1 + C_{in})$ returns to X). The loop gain is $A_{v1}\beta = A_{v1}C_2/C_T$, and

$$\tau = \frac{C_1 + C_{in}}{G_m\,(1 + 1/(A_{v1}\beta))} \approx \frac{C_1 + C_{in}}{G_m}\qquad(A_{v1}\beta \gg 1).$$

**Why $C_2$ drops out.** The output node has no capacitance of its own. The OTA sees $C_2$ in series with $C_1 + C_{in}$, i.e. $C_s = C_2(C_1 + C_{in})/C_T$, and it is "degenerated" by the feedback to an effective transconductance $G_m\beta$. So $\tau = C_s/(G_m\beta) = (C_1 + C_{in})/G_m$: a smaller $C_2$ means a lighter load but also weaker feedback, and the two effects cancel.

### Step 5 — Speed constraint: largest allowed $C_1$

Require $\tau \le 2$ ns:

$$
\begin{aligned}
\frac{C_1 + C_{in}}{G_m} &\le 2\ \mathrm{ns}\\
C_1 + C_{in} &\le (2\times10^{-9}\ \mathrm{s})(10\times10^{-3}\ \mathrm{S}) = 20\ \mathrm{pF}\\
C_1 &\le 20\ \mathrm{pF} - 0.2\ \mathrm{pF} = 19.8\ \mathrm{pF}.
\end{aligned}
$$

### Step 6 — Accuracy constraint: smallest allowed $C_2$

From Step 3 the relative gain error is $x/(1 + x) \approx x$ with

$$x = \frac{C_T}{A_{v1}C_2} = \frac{C_1 + C_2 + C_{in}}{1000\,C_2}.$$

Require $x \le 0.01$:

$$
\begin{aligned}
C_1 + C_2 + C_{in} &\le 10\,C_2\\
C_2 &\ge \frac{C_1 + C_{in}}{9}.
\end{aligned}
$$

So the nominal gain is bounded by

$$\frac{C_1}{C_2} \le \frac{9\,C_1}{C_1 + C_{in}}.$$

This bound **increases with $C_1$**: a larger $C_1$ makes the fixed parasitic $C_{in}$ relatively less important, so the feedback factor improves. Therefore we should use the largest $C_1$ the speed specification allows.

### Step 7 — Design values

Take $C_1 = 19.8$ pF (so $C_1 + C_{in} = 20$ pF):

$$
\begin{aligned}
C_2 &= \frac{C_1 + C_{in}}{9} = \frac{20\ \mathrm{pF}}{9} = 2.22\ \mathrm{pF},\\
\frac{C_1}{C_2} &= \frac{19.8\ \mathrm{pF}}{2.222\ \mathrm{pF}} = 8.91 .
\end{aligned}
$$

**Checks.**

$$
\begin{aligned}
x &= \frac{19.8 + 2.222 + 0.2}{1000 \times 2.222} = \frac{22.22}{2222} = 0.0100 \;\Rightarrow\; \text{error} \approx 1\ \%,\\
\beta &= \frac{2.222}{22.22} = 0.100, \qquad A_{v1}\beta = 100 \gg 1,\\
\tau &= \frac{20\ \mathrm{pF}}{10\ \mathrm{mS}\times(1 + 0.01)} = 1.98\ \mathrm{ns} \le 2\ \mathrm{ns}.\ \checkmark
\end{aligned}
$$

**With the exact expressions.** Using the exact error $x/(1+x) = 0.01$ gives $x = 0.010101$ and $C_1 + C_{in} = 9.101\,C_2$. Using also the exact $\tau = (C_1 + C_{in})/[G_m(1 + x)] = 2$ ns gives $C_1 + C_{in} = 20\ \mathrm{pF}\times1.0101 = 20.20$ pF, so $C_1 = 20.0$ pF, $C_2 = 20.20/9.101 = 2.22$ pF and $C_1/C_2 = 9.01$. The answers agree to about 1 %, which is the precision of the specification itself.

**Comparison.** With $C_1 = 2$ pF (as in a design that ignores the speed budget), $\tau = 2.2\ \mathrm{pF}/10\ \mathrm{mS} = 0.22$ ns, much faster than needed, but $C_{in}$ is then 10 % of $C_1$ and the gain is limited to $9 \times 2/2.2 = 8.2$. Spending the speed budget on a larger $C_1$ buys gain. The absolute ceiling, for $C_1 \to \infty$, is 9 (first order).

### Result

With no load capacitance, $\tau \approx (C_1 + C_{in})/G_m$, independent of $C_2$; the gain error is $\approx (C_1 + C_2 + C_{in})/(A_{v1}C_2)$.

- Speed: $C_1 + C_{in} \le 20$ pF, so $C_1 \approx 19.8$ pF.
- Accuracy: $C_2 \ge (C_1 + C_{in})/9 \approx 2.2$ pF.
- **Maximum nominal gain $C_1/C_2 \approx 8.9$**, with $C_1 \approx 19.8$ pF and $C_2 \approx 2.22$ pF (exact expressions: $C_1 \approx 20.0$ pF, $C_2 \approx 2.22$ pF, gain $\approx 9.0$).

**Common mistake.** Using the wrong time constant: $C_2/G_m$, $(C_1 + C_2 + C_{in})/G_m$ or $R_0C_2$. The closed-loop pole comes from $G_m$ reduced by the feedback factor driving the series combination of $C_2$ and $C_1 + C_{in}$, which gives $(C_1 + C_{in})/G_m$ when there is no load capacitance. $R_0C_2$ is the time constant of the output node with X held at ground, an open-loop quantity that ignores the feedback and has nothing to do with closed-loop settling (it is 222 ns here, a hundred times too slow).

**Common mistake.** Keeping $C_1 = 2$ pF and claiming the gain is limited by the time constant. The speed specification limits $C_1$ from *above*; the gain is limited by the accuracy specification, and choosing $C_1$ as large as the speed budget allows maximizes it.
