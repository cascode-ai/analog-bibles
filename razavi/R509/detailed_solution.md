# Detailed solution - R509

**Approach.** Close the loop with unity feedback ($\beta = 1$), write the closed-loop transfer function as a ratio of polynomials, and find its two poles for a zero that is 10 % below and 10 % above the nondominant pole. A partial-fraction expansion of $V_{out}(s) = H_{closed}(s)\,V_0/s$ then gives the step response. Perfect cancellation ($\omega_z = \omega_{p2}$) serves as the baseline for comparison.

### Step 1 — Closed-loop transfer function

The op amp output is fed back directly to its inverting input, so the feedback factor is $\beta = 1$ and

$$H_{closed}(s) = \frac{H_{open}(s)}{1 + H_{open}(s)} .$$

Multiply numerator and denominator by $(1 + s/\omega_{p1})(1 + s/\omega_{p2})$:

$$H_{closed}(s) = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_{p2}}\right) + A_0\left(1 + \dfrac{s}{\omega_z}\right)} .$$

Expand the product of the two pole factors:

$$\left(1 + \frac{s}{\omega_{p1}}\right)\left(1 + \frac{s}{\omega_{p2}}\right) = 1 + \left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}}\right)s + \frac{s^2}{\omega_{p1}\omega_{p2}} .$$

Add $A_0 + A_0s/\omega_z$ and group by powers of $s$. The denominator is

$$D(s) = \frac{s^2}{\omega_{p1}\omega_{p2}} + \left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right)s + (1 + A_0) .$$

Multiplying $D(s) = 0$ by $\omega_{p1}\omega_{p2}$ gives the characteristic equation in monic form:

$$s^2 + b\,s + c = 0,\qquad b = \omega_{p1} + \omega_{p2} + \frac{A_0\,\omega_{p1}\omega_{p2}}{\omega_z},\qquad c = (1 + A_0)\,\omega_{p1}\omega_{p2} .$$

The closed-loop DC gain is

$$A \equiv H_{closed}(0) = \frac{A_0}{1 + A_0} = \frac{494}{495} = 0.998 ,$$

so the output finally settles at $AV_0$, which is 0.2 % below $V_0$ because of the finite loop gain. The closed-loop zero is the open-loop zero $\omega_z$: feedback moves poles, not zeros.

### Step 2 — Baseline: perfect pole–zero cancellation

If $\omega_z = \omega_{p2}$ exactly, the open-loop function collapses to a single pole, $H_{open} = A_0/(1 + s/\omega_{p1})$, and

$$H_{closed}(s) = \frac{A_0}{1 + A_0 + s/\omega_{p1}} = \frac{A}{1 + s/\omega_0},\qquad \omega_0 = (1 + A_0)\,\omega_{p1} .$$

Numerically,

$$\omega_0 = 495 \times 3.66\times10^6\ \mathrm{rad/s} = 1.812\times10^9\ \mathrm{rad/s},\qquad \tau_0 = \frac{1}{\omega_0} = 0.552\ \mathrm{ns}.$$

The ideal step response is $V_{out}(t) = AV_0\left(1 - e^{-t/\tau_0}\right)$, and the time to settle within 0.1 % is

$$t_{0.1\%} = \tau_0\ln 1000 = 0.552\ \mathrm{ns}\times 6.91 = 3.81\ \mathrm{ns}.$$

Compare $\omega_{p2}$ with this closed-loop bandwidth:

$$\frac{\omega_{p2}}{\omega_0} = \frac{3.33\times10^9}{1.812\times10^9} = 1.84 .$$

The nondominant pole (and therefore the zero meant to cancel it) lies **above** the closed-loop bandwidth, not far below it. This fact decides the character of the answer (Step 7).

The common numbers for both mismatch cases are

$$
\begin{aligned}
\omega_{p1}\omega_{p2} &= (3.66\times10^6)(3.33\times10^9) = 1.2188\times10^{16}\ \mathrm{rad^2/s^2},\\
c &= (1 + A_0)\,\omega_{p1}\omega_{p2} = 495\times1.2188\times10^{16} = 6.033\times10^{18}\ \mathrm{rad^2/s^2},\\
4c &= 2.413\times10^{19}\ \mathrm{rad^2/s^2}.
\end{aligned}
$$

### Step 3 — Closed-loop poles, zero 10 % below the pole ($\omega_z = 0.9\,\omega_{p2}$)

$$\omega_z = 0.9\times3.33\times10^9 = 2.997\times10^9\ \mathrm{rad/s}.$$

The middle term of $b$:

$$\frac{A_0\,\omega_{p1}\omega_{p2}}{\omega_z} = \frac{A_0\,\omega_{p1}}{0.9} = \frac{494\times3.66\times10^6}{0.9} = 2.009\times10^9\ \mathrm{rad/s}.$$

Then

$$
\begin{aligned}
b &= 3.66\times10^6 + 3.33\times10^9 + 2.009\times10^9 = 5.343\times10^9\ \mathrm{rad/s},\\
b^2 - 4c &= 2.854\times10^{19} - 2.413\times10^{19} = 4.41\times10^{18},\\
\sqrt{b^2 - 4c} &= 2.100\times10^9\ \mathrm{rad/s}.
\end{aligned}
$$

The discriminant is positive, so both poles are **real**. With $s = -\omega_a$ and $s = -\omega_b$:

$$
\begin{aligned}
\omega_a &= \frac{b - \sqrt{b^2 - 4c}}{2} = \frac{(5.343 - 2.100)\times10^9}{2} = 1.621\times10^9\ \mathrm{rad/s}, & \tau_a &= 1/\omega_a = 0.617\ \mathrm{ns},\\
\omega_b &= \frac{b + \sqrt{b^2 - 4c}}{2} = \frac{(5.343 + 2.100)\times10^9}{2} = 3.721\times10^9\ \mathrm{rad/s}, & \tau_b &= 1/\omega_b = 0.269\ \mathrm{ns}.
\end{aligned}
$$

Check: $\omega_a\omega_b = 1.621\times3.721\times10^{18} = 6.03\times10^{18} = c$. ✓

### Step 4 — Closed-loop poles, zero 10 % above the pole ($\omega_z = 1.1\,\omega_{p2}$)

$$\omega_z = 1.1\times3.33\times10^9 = 3.663\times10^9\ \mathrm{rad/s},\qquad \frac{A_0\,\omega_{p1}}{1.1} = \frac{494\times3.66\times10^6}{1.1} = 1.644\times10^9\ \mathrm{rad/s}.$$

$$
\begin{aligned}
b &= 3.66\times10^6 + 3.33\times10^9 + 1.644\times10^9 = 4.977\times10^9\ \mathrm{rad/s},\\
b^2 - 4c &= 2.477\times10^{19} - 2.413\times10^{19} = 6.42\times10^{17},\\
\sqrt{b^2 - 4c} &= 0.801\times10^9\ \mathrm{rad/s}.
\end{aligned}
$$

Again two real poles:

$$
\begin{aligned}
\omega_a &= \frac{(4.977 - 0.801)\times10^9}{2} = 2.088\times10^9\ \mathrm{rad/s}, & \tau_a &= 0.479\ \mathrm{ns},\\
\omega_b &= \frac{(4.977 + 0.801)\times10^9}{2} = 2.889\times10^9\ \mathrm{rad/s}, & \tau_b &= 0.346\ \mathrm{ns}.
\end{aligned}
$$

Check: $2.088\times2.889\times10^{18} = 6.03\times10^{18} = c$. ✓

### Step 5 — Step response by partial fractions (general form)

Because $\omega_a\omega_b = c = (1 + A_0)\omega_{p1}\omega_{p2}$, the closed-loop function can be written with normalized factors:

$$H_{closed}(s) = \frac{A\left(1 + s/\omega_z\right)}{\left(1 + s/\omega_a\right)\left(1 + s/\omega_b\right)} .$$

The input is a step of height $V_0$, whose Laplace transform is $V_0/s$, so

$$V_{out}(s) = AV_0\,\frac{1 + s/\omega_z}{s\,(1 + s/\omega_a)(1 + s/\omega_b)} = AV_0\,\frac{\omega_a\omega_b\,(1 + s/\omega_z)}{s\,(s + \omega_a)(s + \omega_b)} .$$

Expand in partial fractions:

$$\frac{\omega_a\omega_b\,(1 + s/\omega_z)}{s\,(s + \omega_a)(s + \omega_b)} = \frac{1}{s} - \frac{K_a}{s + \omega_a} - \frac{K_b}{s + \omega_b} .$$

- **Residue at $s = 0$:** multiply by $s$ and set $s = 0$: $\omega_a\omega_b/(\omega_a\omega_b) = 1$.
- **Residue at $s = -\omega_a$:** multiply by $(s + \omega_a)$ and set $s = -\omega_a$:
$$-K_a = \frac{\omega_a\omega_b\,(1 - \omega_a/\omega_z)}{(-\omega_a)(\omega_b - \omega_a)} = -\frac{1 - \omega_a/\omega_z}{1 - \omega_a/\omega_b}
\quad\Longrightarrow\quad K_a = \frac{1 - \omega_a/\omega_z}{1 - \omega_a/\omega_b}.$$
- **Residue at $s = -\omega_b$:** by the same steps, $K_b = \dfrac{1 - \omega_b/\omega_z}{1 - \omega_b/\omega_a}$.

Inverting term by term ($1/s \to u(t)$, $1/(s + \omega) \to e^{-\omega t}u(t)$):

$$V_{out}(t) = AV_0\left[1 - K_a\,e^{-t/\tau_a} - K_b\,e^{-t/\tau_b}\right]u(t).$$

**Initial value.** The transfer function has one more pole than zeros, so $V_{out}(0^+) = \lim_{s\to\infty}sV_{out}(s) = 0$: the output cannot jump. This requires $K_a + K_b = 1$, which is a convenient check.

**Initial slope.** $\dot V_{out}(0^+) = \lim_{s\to\infty}s^2V_{out}(s) = AV_0\,\omega_a\omega_b/\omega_z$.

### Step 6 — Numerical step responses

**Case (a), $\omega_z = 0.9\,\omega_{p2}$** ($\omega_a = 1.621$, $\omega_b = 3.721$, $\omega_z = 2.997$, all $\times10^9$ rad/s):

$$
\begin{aligned}
K_a &= \frac{1 - 1.621/2.997}{1 - 1.621/3.721} = \frac{1 - 0.541}{1 - 0.436} = \frac{0.459}{0.564} = 0.814,\\
K_b &= 1 - K_a = 0.186 \quad\left(\text{directly: } \frac{1 - 3.721/2.997}{1 - 3.721/1.621} = \frac{-0.242}{-1.296} = 0.186\ \checkmark\right).
\end{aligned}
$$

$$V_{out}(t) = AV_0\left[1 - 0.814\,e^{-t/0.617\,\mathrm{ns}} - 0.186\,e^{-t/0.269\,\mathrm{ns}}\right].$$

**Case (b), $\omega_z = 1.1\,\omega_{p2}$** ($\omega_a = 2.088$, $\omega_b = 2.889$, $\omega_z = 3.663$, all $\times10^9$ rad/s):

$$
\begin{aligned}
K_a &= \frac{1 - 2.088/3.663}{1 - 2.088/2.889} = \frac{1 - 0.570}{1 - 0.723} = \frac{0.430}{0.277} = 1.550,\\
K_b &= 1 - K_a = -0.550 .
\end{aligned}
$$

$$V_{out}(t) = AV_0\left[1 - 1.550\,e^{-t/0.479\,\mathrm{ns}} + 0.550\,e^{-t/0.346\,\mathrm{ns}}\right].$$

**Shape.** Both responses start at 0 and rise **monotonically** to $AV_0$, with no overshoot and no ringing, because both closed-loop poles are real.
- In case (a) both exponentials are subtracted, so $V_{out} < AV_0$ and $dV_{out}/dt > 0$ at all times.
- In case (b) the positive term $0.550\,e^{-t/0.346\,\mathrm{ns}}$ decays faster than the main term $1.550\,e^{-t/0.479\,\mathrm{ns}}$ and is always smaller than it. The error therefore stays positive, and the slope, $AV_0\left[\tfrac{1.550}{0.479} e^{-t/0.479} - \tfrac{0.550}{0.346} e^{-t/0.346}\right]$ (t in ns), equals $AV_0(3.24 - 1.59)/\mathrm{ns} > 0$ at $t = 0$ and stays positive.

Normalized output $V_{out}/(AV_0)$ at a few instants:

| $t$ (ns) | $\omega_z = 0.9\,\omega_{p2}$ | perfect cancellation | $\omega_z = 1.1\,\omega_{p2}$ |
|---|---|---|---|
| 0.1 | 0.180 | 0.166 | 0.154 |
| 0.25 | 0.384 | 0.364 | 0.347 |
| 0.5 | 0.609 | 0.596 | 0.584 |
| 1 | 0.835 | 0.837 | 0.838 |
| 2 | 0.968 | 0.973 | 0.978 |
| 3 | 0.9937 | 0.9956 | 0.9971 |
| 4 | 0.9988 | 0.9993 | 0.9996 |

The initial slopes are $AV_0\,\omega_a\omega_b/\omega_z = AV_0\,\omega_0\,(\omega_{p2}/\omega_z)$: $2.01\times10^9\,AV_0$/s in case (a) and $1.65\times10^9\,AV_0$/s in case (b), against $1.81\times10^9\,AV_0$/s for perfect cancellation. A zero placed below the pole adds high-frequency loop gain (faster start), but its dominant closed-loop pole is slower.

**Settling.** At long times only the slow exponential matters:
- case (a): $0.814\,e^{-t/0.617\,\mathrm{ns}} = 10^{-3}$ gives $t = 0.617\ \mathrm{ns}\times\ln 814 = 0.617\times6.70 = 4.1$ ns;
- case (b): $1.550\,e^{-t/0.479\,\mathrm{ns}} = 10^{-3}$ gives $t = 0.479\ \mathrm{ns}\times\ln 1550 = 0.479\times7.35 = 3.5$ ns;
- perfect cancellation: 3.8 ns (Step 2).

### Step 7 — Why there is no slow-settling tail here

A pole–zero mismatch is usually feared because of the **doublet** effect. If the doublet sits far below the closed-loop bandwidth ($\omega_{p2},\omega_z \ll \omega_0$), one closed-loop pole lands almost on top of $\omega_z$. Its residue is small, about $(\omega_z - \omega_{p2})/\omega_0$, but it decays with the slow time constant $1/\omega_z \gg 1/\omega_0$. The output then quickly gets close to its final value and creeps the last few percent slowly.

That assumption requires $\omega_{p2} \ll (1 + A_0)\omega_{p1}$, and here it fails: $\omega_{p2} = 1.84\,\omega_0$ (Step 2). Consequences:
- The "mismatch" exponential (the $\tau_b$ term) has a time constant of 0.27 ns or 0.35 ns, **shorter** than the main one, so it dies out first. Even the rough doublet estimate gives an amplitude $|\omega_z - \omega_{p2}|/\omega_0 = 0.333/1.812 \approx 0.18$ decaying with $1/\omega_z \approx 0.3$ ns, again a fast term.
- The visible effect is instead a shift of the **dominant** closed-loop time constant: 0.617 ns (+12 %) or 0.479 ns (−13 %) instead of 0.552 ns. The 0.1 % settling time becomes about 4.1 ns or 3.5 ns instead of 3.8 ns.

So for this op amp a 10 % pole–zero mismatch is benign.

### Result

The closed-loop poles are the roots of

$$\frac{s^2}{\omega_{p1}\omega_{p2}} + \left(\frac{1}{\omega_{p1}} + \frac{1}{\omega_{p2}} + \frac{A_0}{\omega_z}\right)s + 1 + A_0 = 0,$$

and $V_{out}(t) = AV_0\left[1 - K_ae^{-\omega_at} - K_be^{-\omega_bt}\right]$, with $A = A_0/(1 + A_0) = 0.998$, $K_a = (1 - \omega_a/\omega_z)/(1 - \omega_a/\omega_b)$ and $K_b = 1 - K_a$.

- $\omega_z = 0.9\,\omega_{p2}$: poles $1.62\times10^9$ and $3.72\times10^9$ rad/s,
$$V_{out}(t) = AV_0\left[1 - 0.814\,e^{-t/0.617\,\mathrm{ns}} - 0.186\,e^{-t/0.269\,\mathrm{ns}}\right].$$
- $\omega_z = 1.1\,\omega_{p2}$: poles $2.09\times10^9$ and $2.89\times10^9$ rad/s,
$$V_{out}(t) = AV_0\left[1 - 1.55\,e^{-t/0.479\,\mathrm{ns}} + 0.55\,e^{-t/0.346\,\mathrm{ns}}\right].$$
- Both responses start at 0 and rise monotonically, with no overshoot. Because $\omega_{p2} \approx 1.8\,(1 + A_0)\omega_{p1}$, the doublet lies above the closed-loop bandwidth: the mismatch term decays faster than the main exponential, there is no slow tail, and the main effect is a ±12 % change of the dominant time constant (0.1 % settling ≈ 4.1 ns or 3.5 ns instead of 3.8 ns).

**Common mistake.** Quoting the textbook doublet picture without checking its assumption, and predicting a long, slow-settling tail of about 10 % amplitude. That picture needs $\omega_{p2} \ll (1 + A_0)\omega_{p1}$; here $\omega_{p2}$ is 1.8 times *larger* than the closed-loop bandwidth, so the mismatch term is fast.

**Common mistake.** Expecting overshoot or ringing because the system is second order. The discriminant $b^2 - 4c$ is positive in both cases, so both poles are real and the response is monotonic.

**Common mistake.** Thinking that the mismatch leaves a 10 % steady-state error. The final value is fixed by the DC gain, $A_0/(1 + A_0) = 0.998$, which does not depend on $\omega_z$ or $\omega_{p2}$ at all.
