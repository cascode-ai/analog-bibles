# Detailed solution - R023

**Approach.** $M_1$ (gate at a fixed $V_b$, source grounded) discharges $C_1$ from 3 V, with $C_1\,dV_X/dt = -I_X$. While $V_X$ is high, $M_1$ is saturated and draws a constant current, so $V_X$ falls linearly; once $V_X$ drops below $V_b - V_{TH}$, $M_1$ enters triode, behaves increasingly like a resistor, and $V_X$ decays roughly exponentially to zero. Solve each phase and join them.

### Step 1 — The governing equation

$V_{GS} = V_b$ and $V_{DS} = V_X$, with no body effect ($V_{TH} = 0.7$ V). $I_X$ can only come out of the capacitor:

$$I_X = -C_1\frac{dV_X}{dt} .$$

The overdrive $V_{ov} = V_b - V_{TH} = V_b - 0.7$ V is constant. **Assume** $V_b > 0.7$ V, so that $M_1$ conducts (if $V_b \le 0.7$ V nothing happens: $I_X = 0$ and $V_X$ stays at 3 V), and $V_{ov} < 3$ V (i.e. $V_b < 3.7$ V), so that $M_1$ starts in saturation.

### Step 2 — Phase 1: saturation, constant current, linear ramp

$M_1$ is saturated while

$$V_X \ge V_b - 0.7 = V_{ov},$$

which holds at $t = 0$ ($V_X = 3$ V). Neglecting channel-length modulation, the current does not depend on $V_X$:

$$I_X = I_{sat} = \tfrac12\beta\,(V_b - 0.7)^2 = \tfrac12\beta V_{ov}^2 \quad(\text{constant}),$$

$$\frac{dV_X}{dt} = -\frac{I_{sat}}{C_1} \quad\Longrightarrow\quad V_X(t) = 3\ \mathrm{V} - \frac{I_{sat}}{C_1}\,t .$$

**$V_X$ falls along a straight line.** Phase 1 ends when $V_X$ reaches $V_{ov}$:

$$
\begin{aligned}
3 - \frac{I_{sat}}{C_1}t_1 &= V_{ov}\\
t_1 &= \frac{C_1\,(3\ \mathrm{V} - V_{ov})}{I_{sat}} = \frac{C_1\,[3\ \mathrm{V} - (V_b - 0.7\ \mathrm{V})]}{\tfrac12\beta(V_b - 0.7\ \mathrm{V})^2} .
\end{aligned}
$$

(With channel-length modulation, $I_X$ would decline slightly as $V_X$ falls, and the ramp would bend a little.)

### Step 3 — Phase 2: triode, decaying current

For $t > t_1$, $V_X < V_{ov}$ and $M_1$ is in triode:

$$I_X = \beta\left[V_{ov}V_X - \tfrac12V_X^2\right],$$

$$C_1\frac{dV_X}{dt} = -\beta\left[V_{ov}V_X - \tfrac12V_X^2\right] = -\beta\,V_X\left(V_{ov} - \tfrac12V_X\right).$$

Separating the variables, with the partial fractions

$$\frac{1}{V_X\,(V_{ov} - V_X/2)} = \frac{1}{V_{ov}}\left(\frac{1}{V_X} + \frac{1}{2V_{ov} - V_X}\right)$$

(combining the bracket gives $\dfrac{2V_{ov}}{V_X(2V_{ov} - V_X)} = \dfrac{V_{ov}}{V_X(V_{ov} - V_X/2)}$, as required), and integrating:

$$
\begin{aligned}
\frac{1}{V_{ov}}\left[\ln V_X - \ln(2V_{ov} - V_X)\right] &= -\frac{\beta}{C_1}\,t + K\\
\ln\frac{V_X}{2V_{ov} - V_X} &= -\frac{\beta V_{ov}}{C_1}\,t + KV_{ov}.
\end{aligned}
$$

At $t = t_1$, $V_X = V_{ov}$ and the left side is $\ln 1 = 0$, which fixes the constant. With the time constant

$$\tau = \frac{C_1}{\beta V_{ov}} = R_{on}C_1, \qquad R_{on} = \frac{1}{\beta\,(V_b - 0.7)},$$

($R_{on}$ the deep-triode on-resistance) and $E(t) = e^{-(t - t_1)/\tau}$:

$$\frac{V_X}{2V_{ov} - V_X} = E \quad\Longrightarrow\quad V_X(t) = \frac{2V_{ov}\,E}{1 + E} .$$

Since $V_{ov} - V_X/2 = V_{ov} - V_{ov}E/(1 + E) = V_{ov}/(1 + E)$, the current is

$$I_X(t) = \beta\,V_X\left(V_{ov} - \tfrac12V_X\right) = \beta\,\frac{2V_{ov}E}{1 + E}\cdot\frac{V_{ov}}{1 + E} = \frac{2\beta V_{ov}^2\,E}{(1 + E)^2} .$$

**Checks.**

- At $t = t_1$ ($E = 1$): $V_X = V_{ov}$ and $I_X = 2\beta V_{ov}^2/4 = \tfrac12\beta V_{ov}^2 = I_{sat}$, so the current, and the slope of $V_X$, is **continuous** at the transition.
- For $t - t_1 \gg \tau$ ($E \ll 1$): $V_X \approx 2V_{ov}e^{-(t - t_1)/\tau}$ and $I_X \approx V_X/R_{on}$: $M_1$ is just a resistor $R_{on}$ discharging $C_1$, an **exponential tail** with time constant $R_{on}C_1$.
- Final state: $V_X \to 0$ and $I_X \to 0$, since a triode MOSFET with $V_{GS} > V_{TH}$ conducts down to $V_{DS} = 0$.

### Step 4 — Numerical example

Take $V_b = 1.7$ V, so $V_{ov} = 1$ V:

$$
\begin{aligned}
I_{sat} &= \tfrac12\beta\,(1\ \mathrm{V})^2 = 0.5\beta\ \mathrm{V^2},\\
\tau &= \frac{C_1}{\beta\,(1\ \mathrm{V})},\\
t_1 &= \frac{C_1\,(3 - 1)\ \mathrm{V}}{0.5\beta\ \mathrm{V^2}} = \frac{4C_1}{\beta\ \mathrm{V}} = 4\tau .
\end{aligned}
$$

For instance, with $\beta = 1\ \mathrm{mA/V^2}$ and $C_1 = 1$ pF: $I_{sat} = 0.5$ mA, $\tau = 1$ ns and $t_1 = 4$ ns.

| $t/\tau$ | Phase | $V_X$ (V) | $I_X/\beta$ (V²) |
|---|---|---|---|
| 0 | sat. | 3.00 | 0.50 |
| 1 | sat. | 2.50 | 0.50 |
| 2 | sat. | 2.00 | 0.50 |
| 3 | sat. | 1.50 | 0.50 |
| 4 | edge | 1.00 | 0.50 |
| 5 | triode | 0.54 | 0.39 |
| 6 | triode | 0.24 | 0.21 |
| 7 | triode | 0.095 | 0.090 |
| 8 | triode | 0.036 | 0.035 |

Sample line, $t = 5\tau$: $E = e^{-1} = 0.368$, $V_X = 2(1)(0.368)/1.368 = 0.538$ V, $I_X/\beta = 2(1)(0.368)/1.368^2 = 0.393\ \mathrm{V^2}$.

### Result

Assuming $V_b > V_{TH}$ and $V_b - V_{TH} < 3$ V:

- **Phase 1 (saturation, $V_X > V_b - 0.7$ V):** $M_1$ draws a constant current $I_X = \tfrac12\beta(V_b - 0.7)^2$, so $V_X$ **ramps down linearly** with slope $-I_X/C_1$. This phase lasts $t_1 = C_1[3 - (V_b - 0.7)]/I_X$.
- **Phase 2 (triode, $V_X < V_b - 0.7$ V):** $I_X = \beta[(V_b - 0.7)V_X - V_X^2/2]$ falls toward zero. Exactly, $V_X = 2V_{ov}E/(1 + E)$ and $I_X = 2\beta V_{ov}^2E/(1 + E)^2$ with $E = e^{-(t - t_1)/\tau}$. Near the end $M_1$ is a resistor $R_{on} = 1/[\beta(V_b - 0.7)]$ and $V_X \propto e^{-t/(R_{on}C_1)}$.
- **Final state:** $V_X = 0$, $I_X = 0$.
- **$I_X(t)$:** flat at $\tfrac12\beta(V_b - 0.7)^2$, then decaying continuously to zero. (If $V_b \le 0.7$ V nothing happens: $V_X$ stays at 3 V and $I_X = 0$.)

**Common mistake.** Drawing a pure $RC$ exponential from $t = 0$. At first $V_X = 3$ V exceeds the overdrive, so $M_1$ is saturated and acts as a *current source*; the initial discharge is a straight line.

**Common mistake.** Letting $V_X$ settle at $V_b - V_{TH}$. That level only marks the change from saturation to triode; with $V_{GS} = V_b > V_{TH}$ the channel stays on and discharges $C_1$ all the way to 0 V.

**Common mistake.** Drawing $I_X$ as rising or as dropping abruptly at $t_1$. The current is constant in saturation and continuous at $t_1$, after which it decays smoothly.
