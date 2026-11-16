# Detailed solution - R123

**Approach.** $C_1$'s other plate is the fixed supply, so $V_Y$ changes only through the chain current: $C_1\,dV_Y/dt = I$. Find $V_Y(0)$, show that $I$ charges $Y$ upward and falls as $V_Y$ rises, and find where it stops: when a transistor's source is within one threshold (with the body effect) of its gate. $V_X$ follows from equal currents in $M_1$ and $M_2$ at every instant.

### Step 1 — Initial values and the governing equation

With the marked polarity, $V_{C1} = V_{DD} - V_Y$, and at $t = 0$ it equals $V_{DD}$:

$$V_{DD} - V_Y(0) = V_{DD}\quad\Longrightarrow\quad V_Y(0) = 0.$$

Only the source of $M_2$ and the lower plate of $C_1$ connect to $Y$, so the chain current $I$ ($V_{DD} \to M_1 \to X \to M_2 \to Y$) flows into $C_1$, whose upper plate is at the constant $V_{DD}$:

$$I = C_1\frac{d(V_Y - V_{DD})}{dt} = C_1\frac{dV_Y}{dt}.$$

So $V_Y$ **rises** at the rate $I/C_1$, and $C_1$ partially discharges. Node $X$ has no capacitance, so at every instant $V_X$ takes the value that makes the drain currents of $M_1$ and $M_2$ equal.

### Step 2 — Threshold voltage with the body effect

Both bulks are at ground, so for a device whose source is at $V_S$,

$$V_{TH}(V_S) = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_S} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_S} - 0.9487\right)\ \mathrm{V}.$$

**Cut-off source voltage.** A transistor with gate voltage $V_b$ stops conducting when its source reaches $V_S = f(V_b)$, where

$$V_S + V_{TH}(V_S) = V_b .$$

With $u = \sqrt{0.9 + V_S}$, so that $V_S = u^2 - 0.9$:

$$
\begin{aligned}
u^2 - 0.9 + 0.7 + 0.45u - 0.4269 &= V_b\\
u^2 + 0.45u - (V_b + 0.6269) &= 0\\
u &= \frac{-0.45 + \sqrt{0.2025 + 4(V_b + 0.6269)}}{2}\quad(\text{positive root}).
\end{aligned}
$$

Two examples used below:

| $V_b$ | $u$ | $f(V_b) = u^2 - 0.9$ | $V_{TH}$ at cut-off |
|---|---|---|---|
| 2.0 V | 1.4113 | 1.09 V | 0.91 V |
| 2.5 V | 1.5576 | 1.53 V | 0.97 V |

$f(V_b)$ increases with $V_b$, and since $M_1$ and $M_2$ have the same $V_{TH0}$, $\gamma$ and bulk connection, the same $f$ applies to both.

### Step 3 — Operating regions of $M_1$ and $M_2$

**$M_1$ is saturated whenever it conducts:** $V_{DS1} = V_{DD} - V_X \ge V_{b1} - V_X - V_{TH1}$ reduces to $V_{b1} - V_{TH1} \le V_{DD}$, which the problem guarantees. So $M_1$ is a **source follower**:

$$I = \tfrac12\beta_1\left(V_{b1} - V_X - V_{TH1}(V_X)\right)^2,\qquad \beta_1 = \mu_nC_{ox}(W/L)_1,$$

$$V_X = V_{b1} - V_{TH1}(V_X) - \sqrt{\frac{2I}{\beta_1}} .$$

Hence **$V_X$ rises whenever $I$ falls**, and as $I \to 0$, $V_X \to f(V_{b1})$.

**$M_2$** (gate $V_{b2}$, source $V_Y$, drain $V_X$) is saturated if $V_X \ge V_{b2} - V_{TH2}(V_Y)$, and in triode otherwise.

### Step 4 — The current falls as $V_Y$ rises, so the curves are monotonic and saturating

For a fixed $V_X$, raising $V_Y$ lowers $V_{GS2}$ and $V_{DS2}$ (and raises $V_{TH2}$), so $M_2$'s current drops, while $M_1$'s current depends only on $V_X$ and falls as $V_X$ rises. So when $V_Y$ goes up, the balance moves to a **higher $V_X$ and a smaller $I$**:

- $dV_Y/dt = I/C_1 > 0$ but keeps decreasing: $V_Y$ rises **fast at first and then ever more slowly** (a concave curve).
- $V_X$ rises monotonically as well.
- The system is first-order ($V_Y$ is the only state variable), so there is no overshoot or oscillation.

### Step 5 — Where the current stops: the final values

Current flows as long as both transistors conduct, and $V_Y \le V_X$ always (current flows from $X$ to $Y$ through $M_2$).

- $M_2$ turns off when $V_Y$ reaches $f(V_{b2})$.
- $M_1$ turns off when $V_X$ reaches $f(V_{b1})$. If $M_2$ is still on then, it carries zero current with a nonzero channel, so $V_{DS2} = 0$ and $V_Y = V_X = f(V_{b1})$.

Therefore

$$V_Y(\infty) = \min\left[f(V_{b1}),\ f(V_{b2})\right] = \min\left(V_{b1} - V_{TH1},\ V_{b2} - V_{TH2}\right),$$

with each threshold evaluated at that device's final source voltage. Since $f$ is increasing, **the device with the lower gate voltage sets the final value**. In every case $V_X(\infty) = f(V_{b1})$, and $C_1$ ends with $V_{DD} - V_Y(\infty)$ across it: it only partially discharges.

### Step 6 — Case A: $V_{b2} < V_{b1}$ ($M_2$ limits)

**Final values:** $V_Y \to f(V_{b2}) = V_{b2} - V_{TH2}$ and $V_X \to f(V_{b1}) = V_{b1} - V_{TH1} > V_Y(\infty)$.

**Late phase.** $M_2$ is a saturated source follower charging $C_1$:

$$C_1\frac{dV_Y}{dt} = \tfrac12\beta_2\left(V_{b2} - V_Y - V_{TH2}\right)^2 .$$

Freezing $V_{TH2}$ at its final value and writing $V_\infty = V_{b2} - V_{TH2}$, this integrates in closed form:

$$
\begin{aligned}
\frac{dV_Y}{(V_\infty - V_Y)^2} &= \frac{\beta_2}{2C_1}\,dt\\
\frac{1}{V_\infty - V_Y} - \frac{1}{V_\infty} &= \frac{\beta_2t}{2C_1}\\
V_Y(t) &= V_\infty\left[1 - \frac{1}{1 + t/\tau}\right],\qquad \tau = \frac{2C_1}{\beta_2V_\infty}.
\end{aligned}
$$

The approach is **hyperbolic, not exponential**: the remaining error falls only as $1/t$ (it takes $9\tau$ to reach 90 % and $99\tau$ to reach 99 %), because a square-law device's current vanishes quadratically with its overdrive. In reality subthreshold conduction continues the charging, extremely slowly.

**Early phase.** At $t = 0$ ($V_Y = 0$, $V_{TH2} = 0.7$ V), $M_2$ is saturated only if $V_X(0) \ge V_{b2} - 0.7$ V, which needs a wide $M_1$. Otherwise $M_2$ starts in triode, the initial current is set mainly by $M_1$, and $M_2$ saturates after $V_Y$ has risen a little.

**Example** ($V_{b1} = 2.5$ V, $V_{b2} = 2.0$ V, $\beta_1 = \beta_2 = \beta$; time in units of $T_0 = C_1/(\beta\cdot 1\ \mathrm{V})$, e.g. $T_0 = 1$ ns for $C_1 = 1$ pF and $\beta = 1$ mA/V²), from a numerical solution of the equations above:

| $t/T_0$ | 0 | 0.5 | 1 | 2 | 3 | 5 | 8 | 12 | 20 | 60 | $\infty$ |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $V_Y$ (V) | 0 | 0.24 | 0.40 | 0.61 | 0.73 | 0.85 | 0.93 | 0.98 | 1.02 | 1.07 | 1.09 |
| $V_X$ (V) | 0.59 | 0.76 | 0.89 | 1.05 | 1.16 | 1.28 | 1.36 | 1.41 | 1.46 | 1.50 | 1.53 |

$M_2$ is in triode until $t \approx 2.5\,T_0$ and saturated afterwards. The initial slope is $dV_Y/dt = I(0)/C_1 \approx 0.59\ \mathrm{V}/T_0$. (With a much wider $M_1$, e.g. $\beta_1 = 50\beta_2$, $M_2$ is saturated from the start, $V_X$ starts near 1.37 V and creeps up to 1.53 V, and $V_Y$ rises a little faster at first, with initial slope $\tfrac12\beta_2(V_{b2} - 0.7)^2/C_1 = 0.845\ \mathrm{V}/T_0$, but has the same tail.)

### Step 7 — Case B: $V_{b1} < V_{b2}$ ($M_1$ limits)

**$M_2$ is in triode throughout.** $M_1$ conducts only if $V_X < V_{b1} - V_{TH}(V_X)$, and $V_X \ge V_Y$ gives $V_{TH}(V_X) \ge V_{TH}(V_Y)$, so

$$V_X < V_{b1} - V_{TH}(V_Y) < V_{b2} - V_{TH}(V_Y),$$

which violates $M_2$'s saturation condition. $M_2$ acts as a resistor with a small $V_{DS2}$.

**Waveforms.** The saturated follower $M_1$ sets the current, $V_X$ sits just above $V_Y$, and both rise together toward $f(V_{b1}) = V_{b1} - V_{TH1}$, again with a hyperbolic ($\propto 1/t$) tail, now from $M_1$'s square law.

**Example** ($V_{b1} = 2.0$ V, $V_{b2} = 2.5$ V, $\beta_1 = \beta_2 = \beta$, same time unit):

| $t/T_0$ | 0 | 0.5 | 1 | 2 | 5 | 12 | 60 | $\infty$ |
|---|---|---|---|---|---|---|---|---|
| $V_Y$ (V) | 0 | 0.19 | 0.33 | 0.51 | 0.76 | 0.94 | 1.06 | 1.09 |
| $V_X$ (V) | 0.28 | 0.41 | 0.51 | 0.64 | 0.82 | 0.96 | 1.06 | 1.09 |

The gap $V_X - V_Y$ shrinks as the current falls, and is smaller for a wider $M_2$.

### Result

- **$V_Y$** starts at **0** (because $C_1$ holds $V_{DD}$ with its "+" plate at $V_{DD}$) and **rises monotonically**, fast at first and then ever more slowly (a $1/t$ tail), toward
$$V_Y(\infty) = \min\left(V_{b1} - V_{TH1},\ V_{b2} - V_{TH2}\right),$$
with each threshold raised by the body effect at its own source voltage. The device with the lower gate bias sets this value (e.g. 1.09 V for a 2-V gate, where $V_{TH} \approx 0.91$ V).
- **$V_X$** jumps at $t = 0$ to the value that balances the two drain currents and then **rises monotonically toward $V_{b1} - V_{TH1}$** (e.g. 1.53 V for $V_{b1} = 2.5$ V). If $V_{b2} < V_{b1}$, $V_X$ ends above $V_Y$ and $M_2$ cuts off. If $V_{b1} < V_{b2}$, $M_2$ stays in triode, $V_X$ stays just above $V_Y$, and both settle at $V_{b1} - V_{TH1}$.
- $C_1$ discharges only partially, to $V_{DD} - V_Y(\infty)$ (e.g. $3 - 1.09 = 1.91$ V).

**Common mistake.** Starting $V_Y$ at $V_{DD}$, or making it fall. The "+" plate of $C_1$ is tied to $V_{DD}$ and the capacitor holds $V_{DD}$, so $Y$ starts at ground, and the chain current pushes it up.

**Common mistake.** Letting $C_1$ discharge completely ($V_Y \to V_{DD}$). Each source follower turns off once its source is within one threshold of its gate, so $V_Y$ stops at $\min(V_{b1}, V_{b2}) - V_{TH}$, well below $V_{DD}$.

**Common mistake.** Ignoring the body effect. With the sources rising by about 1 V, the threshold rises from 0.7 V to about 0.9–1.0 V, so the final voltages are noticeably lower (1.09 V instead of 1.3 V for a 2-V gate).
