# Detailed solution - R508

**Approach.** With perfect pole–zero cancellation ($\omega_z = \omega_{p2}$) the open-loop transfer function collapses to a single pole, so the unity-gain closed loop also has one pole and its step response is a single exponential. Compute its final value and time constant from the given numbers.

### Step 1 — Open loop with perfect cancellation

With $\omega_z = \omega_{p2}$ the factor $(1 + s/\omega_{p2})$ cancels:

$$H_{open}(s) = \frac{A_0\left(1 + s/\omega_{p2}\right)}{\left(1 + s/\omega_{p1}\right)\left(1 + s/\omega_{p2}\right)} = \frac{A_0}{1 + s/\omega_{p1}} ,$$

an ideal one-pole amplifier with DC gain $A_0 = 494$ and pole $\omega_{p1} = 3.66\times10^6$ rad/s; the non-dominant pole at $3.33\times10^9$ rad/s no longer appears.

### Step 2 — Closed loop with unity feedback

With $\beta = 1$, $H_{closed} = H_{open}/(1 + H_{open})$:

$$
\begin{aligned}
H_{closed}(s) &= \frac{\dfrac{A_0}{1 + s/\omega_{p1}}}{1 + \dfrac{A_0}{1 + s/\omega_{p1}}} = \frac{A_0}{1 + s/\omega_{p1} + A_0} = \frac{A_0}{(1 + A_0) + s/\omega_{p1}}\\
&= \frac{A_0}{1 + A_0}\cdot\frac{1}{1 + \dfrac{s}{(1 + A_0)\,\omega_{p1}}} .
\end{aligned}
$$

**DC gain:**

$$A = \frac{A_0}{1 + A_0} = \frac{494}{495} = 0.99798 .$$

**Single pole**, widened by $1 + A_0$:

$$\omega_{-3dB} = (1 + A_0)\,\omega_{p1} = 495\times3.66\times10^6\ \mathrm{rad/s} = 1.81\times10^9\ \mathrm{rad/s}\quad(f = 288\ \mathrm{MHz}).$$

**Time constant:**

$$\tau = \frac{1}{(1 + A_0)\,\omega_{p1}} = \frac{1}{1.8117\times10^9\ \mathrm{rad/s}} = 0.552\ \mathrm{ns}.$$

### Step 3 — Step response

For $V_{in}(s) = V_0/s$:

$$V_{out}(s) = \frac{AV_0}{s\,(1 + s\tau)} = AV_0\left[\frac1s - \frac{\tau}{1 + s\tau}\right] = AV_0\left[\frac1s - \frac{1}{s + 1/\tau}\right]$$

(check: $\frac1s - \frac{1}{s + 1/\tau} = \frac{1/\tau}{s(s + 1/\tau)} = \frac{1}{s(1 + s\tau)}$ ✓), so

$$V_{out}(t) = AV_0\left(1 - e^{-t/\tau}\right)u(t) = 0.998\,V_0\left(1 - e^{-t/0.552\ \mathrm{ns}}\right)u(t).$$

### Step 4 — Properties of the response

- **Shape:** a single rising exponential that starts at 0 with slope $AV_0/\tau$ and approaches its final value monotonically: **no overshoot and no ringing** (one real pole).
- **Final value:** $0.998\,V_0$, a static error of $1/(1 + A_0) = 0.2\,\%$ from the finite open-loop gain.
- **Settling times** (to within $\epsilon$ of the final value, $t = \tau\ln(1/\epsilon)$):
$$
\begin{aligned}
1\,\%: &\quad t = \tau\ln100 = 4.6\tau = 2.5\ \mathrm{ns},\\
0.1\,\%: &\quad t = \tau\ln1000 = 6.9\tau = 3.8\ \mathrm{ns}.
\end{aligned}
$$
- **10–90 % rise time:** $2.2\tau = 1.2$ ns.

With the zero exactly on the non-dominant pole the phase margin is essentially 90°; any mismatch between $\omega_z$ and $\omega_{p2}$ would add a small, slow "doublet" tail with a time constant near $1/\omega_{p2}$.

### Result

$$V_{out}(t) = V_0\,\frac{A_0}{1 + A_0}\left[1 - e^{-t/\tau}\right]u(t), \qquad \tau = \frac{1}{(1 + A_0)\,\omega_{p1}} = \frac{1}{495\times3.66\times10^6\ \mathrm{rad/s}} \approx 0.55\ \mathrm{ns},$$

i.e. $V_{out}(t) \approx 0.998\,V_0\,(1 - e^{-t/0.55\ \mathrm{ns}})$: a single exponential with no overshoot, settling to 1 % in about 2.5 ns and to 0.1 % in about 3.8 ns.

**Common mistake.** Using $\tau = 1/\omega_{p1}$ (273 ns) or $1/\omega_{p2}$ (0.3 ns). Feedback moves the dominant pole up by $1 + A_0$, and with perfect cancellation $\omega_{p2}$ no longer appears in the response.

**Common mistake.** Predicting overshoot, ringing, or a second exponential. With $\omega_z = \omega_{p2}$ exactly, the closed loop has a single real pole.

**Common mistake.** Taking the final value as exactly $V_0$. With $A_0 = 494$ the buffer settles to $A_0/(1 + A_0) = 0.998$ of the input, a 0.2 % static error.
