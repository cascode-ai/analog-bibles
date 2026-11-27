# Detailed solution - R055

Approach. The PMOS and NMOS are in series between X and ground with their gates tied to $V_G$, so the same current flows through both and *both* must be on. Introduce the middle node Y, find which device is saturated in each range of $V_X$, and show that $I_X$ equals the smaller of the two saturation currents. Then differentiate with respect to $V_G$ to obtain the equivalent transconductance.

The four gate-voltage examples use $\beta_n=\beta_p=1\ \mathrm{mA/V^2}$ and the same axis scales. Dashed guides mark turn-on and transitions within the plotted range.

![I_X versus V_X](/q/R055/solution-ix.svg)

![Equivalent transconductance](/q/R055/solution-gm.svg)

### Step 1 — Terminal voltages and when current flows

Call the node between the two devices Y ($0 \le V_Y \le V_X$); the PMOS source is at X. The devices are in series, so $I_X = I_P = I_N$, and

$$
\begin{aligned}
\text{NMOS:}&\quad V_{GS} = V_G, & V_{DS} &= V_Y,\\
\text{PMOS:}&\quad V_{SG} = V_X - V_G, & V_{SD} &= V_X - V_Y ,
\end{aligned}
$$

with overdrives

$$V_{ovN} = V_G - 0.7, \qquad V_{ovP} = V_X - V_G - 0.8 .$$

A series path conducts only if both devices are on: the NMOS needs $V_G > 0.7$ V, and the PMOS needs $V_{SG} > 0.8$ V, i.e. $V_X > V_G + 0.8$ V. So

$$I_X = 0 \quad\text{if}\quad V_G \le 0.7\ \mathrm{V}\quad\text{or}\quad V_X \le V_G + 0.8\ \mathrm{V}.$$

For $V_G \ge 2.2$ V the PMOS never turns on within $0 \le V_X \le 3$ V, so $I_X = 0$ over the whole range.

### Step 2 — Which device is saturated?

NMOS saturated when $V_{DS} \ge V_{GS} - V_{THN}$:

$$V_Y \ge V_G - 0.7 .$$

PMOS saturated when $V_{SD} \ge V_{SG} - |V_{THP}|$:

$$V_X - V_Y \ge V_X - V_G - 0.8 \quad\Longleftrightarrow\quad V_Y \le V_G + 0.8 .$$

Consequences:

- If the NMOS is in triode ($V_Y < V_G - 0.7$), then $V_Y < V_G + 0.8$, so the PMOS is saturated.
- If the PMOS is in triode ($V_Y > V_G + 0.8$), then $V_Y > V_G - 0.7$, so the NMOS is saturated.

At least one device is always saturated, and that device sets the current. Both are saturated only at the single transition point (with $\lambda = 0$).

### Step 3 — Region I: PMOS saturated, NMOS in triode (PMOS-limited)

Just above $V_X = V_G + 0.8$ V the PMOS has a tiny overdrive and passes only a small current, which the NMOS, with its full overdrive $V_G - 0.7$, carries with a small $V_{DS}$: node Y sits near ground and the NMOS is in triode. The saturated PMOS sets the current:

$$I_X = \frac12\,\beta_p\,(V_X - V_G - 0.8)^2 ,$$

rising parabolically from zero as $V_X$ increases. (The NMOS triode equation $I_X = \beta_n[V_{ovN}V_Y - V_Y^2/2]$ then fixes $V_Y = V_{ovN} - \sqrt{V_{ovN}^2 - 2I_X/\beta_n}$, which grows from 0 as $I_X$ grows.)

Validity. The NMOS stays in triode only while the current is below its own saturation current:

$$\frac12\beta_p(V_X - V_G - 0.8)^2 < \frac12\beta_n(V_G - 0.7)^2 .$$

### Step 4 — Region II: NMOS saturated, PMOS in triode (NMOS-limited)

Once the PMOS saturation current exceeds the NMOS saturation current, the NMOS is saturated and the PMOS operates in triode. The saturated NMOS sets the current.

$$I_X = \frac12\,\beta_n\,(V_G - 0.7)^2 ,$$

independent of $V_X$ (because $\lambda = 0$): a flat ceiling.

Transition point. Equating the two saturation currents:

$$
\begin{aligned}
\frac12\beta_p(V_X - V_G - 0.8)^2 &= \frac12\beta_n(V_G - 0.7)^2\\
V_X - V_G - 0.8 &= \sqrt{\frac{\beta_n}{\beta_p}}\,(V_G - 0.7)\\
V_X &= V_G + 0.8 + \sqrt{\frac{\beta_n}{\beta_p}}\,(V_G - 0.7) .
\end{aligned}
$$

Compact form. Wherever both devices are on,

$$I_X = \min\left\{\tfrac12\beta_p(V_X - V_G - 0.8)^2,\ \tfrac12\beta_n(V_G - 0.7)^2\right\}:$$

the weaker device sets the current, like the narrower of two pipes in series.

### Step 5 — The family of curves

For each $V_G$ between 0.7 V and 2.2 V the curve is zero up to $V_X = V_G + 0.8$, then a parabolic rise, then a flat ceiling at $\tfrac12\beta_n(V_G - 0.7)^2$ (if the transition lies below 3 V). Increasing $V_G$:

- moves the turn-on point $V_G + 0.8$ right;
- moves the ceiling $\tfrac12\beta_n(V_G - 0.7)^2$ up;
- moves the transition point right even faster, so for larger $V_G$ the ceiling may lie beyond 3 V and only the parabola is seen.

Illustration with $\beta_n = \beta_p = 1\ \mathrm{mA/V^2}$ (sizes are not given; this is only an example). Then the transition is at $V_X = 2V_G + 0.1$. For $V_G = 1.2$ V: turn-on at 2.0 V, ceiling $\tfrac12(0.5)^2 = 0.125$ mA reached at $V_X = 2.5$ V. Values of $I_X$ in mA:

| $V_X$ (V) | 1.8 | 2.0 | 2.2 | 2.4 | 2.6 | 2.8 | 3.0 |
|---|---|---|---|---|---|---|---|
| $V_G = 1.0$ V | 0 | 0.020 | 0.045 | 0.045 | 0.045 | 0.045 | 0.045 |
| $V_G = 1.2$ V | 0 | 0 | 0.020 | 0.080 | 0.125 | 0.125 | 0.125 |
| $V_G = 1.5$ V | 0 | 0 | 0 | 0.005 | 0.045 | 0.125 | 0.245 |
| $V_G = 2.0$ V | 0 | 0 | 0 | 0 | 0 | 0 | 0.020 |

For $V_G = 1.5$ V the ceiling (0.32 mA) would be reached only at $V_X = 3.1$ V, outside the range. For $V_G \le 0.7$ V the current is zero everywhere.

### Step 6 — Equivalent transconductance $\partial I_X/\partial V_G$

Differentiate the expression valid in each region, at fixed $V_X$.

Region I (PMOS-limited):

$$\frac{\partial I_X}{\partial V_G} = \frac{\partial}{\partial V_G}\left[\tfrac12\beta_p(V_X - V_G - 0.8)^2\right] = \beta_p(V_X - V_G - 0.8)\cdot(-1) = -\beta_p(V_X - V_G - 0.8) .$$

It is negative, since raising the gate reduces the $V_{SG}$ of the PMOS, which controls the current. The slope with respect to $V_X$ is $-\beta_p$. The left-hand limit at the transition is $-\sqrt{\beta_n\beta_p}\,(V_G-0.7\ \mathrm{V})$.

Region II (NMOS-limited):

$$\frac{\partial I_X}{\partial V_G} = \frac{\partial}{\partial V_G}\left[\tfrac12\beta_n(V_G - 0.7)^2\right] = +\beta_n(V_G - 0.7),$$

positive and constant in $V_X$.

Where $I_X = 0$ ($V_X \le V_G + 0.8$ or $V_G \le 0.7$ V): $\partial I_X/\partial V_G = 0$.

For fixed $V_G$, the sweep starts at zero, follows a negative ramp, and jumps to a positive plateau if it passes the transition voltage from Step 4. At that point, keep $V_X$ fixed and vary $V_G$. Raising $V_G$ selects the PMOS-limited branch, while lowering it selects the NMOS-limited branch. These one-sided derivatives differ, so the partial derivative is undefined at the transition. The open circles show the limiting values. For $V_G=1.2\ \mathrm{V}$, the jump is at $V_X=2.5\ \mathrm{V}$, with left and right limits of $-0.5\ \mathrm{mS}$ and $+0.5\ \mathrm{mS}$.

Illustration ($\beta_n = \beta_p = 1\ \mathrm{mA/V^2}$), $\partial I_X/\partial V_G$ in mS:

| $V_X$ (V) | 1.8 | 2.0 | 2.2 | 2.4 | 2.6 | 2.8 | 3.0 |
|---|---|---|---|---|---|---|---|
| $V_G = 1.0$ V | 0 | −0.2 | 0.3 | 0.3 | 0.3 | 0.3 | 0.3 |
| $V_G = 1.2$ V | 0 | 0 | −0.2 | −0.4 | 0.5 | 0.5 | 0.5 |
| $V_G = 1.5$ V | 0 | 0 | 0 | −0.1 | −0.3 | −0.5 | −0.7 |

### Result

Both devices must conduct, so $I_X = 0$ unless $V_G > 0.7$ V and $V_X > V_G + 0.8$ V. Then

$$I_X = \min\left\{\tfrac12\beta_p(V_X - V_G - 0.8)^2,\ \tfrac12\beta_n(V_G - 0.7)^2\right\}:$$

a parabolic rise while the PMOS is saturated and the NMOS is in triode, followed, from $V_X = V_G + 0.8 + \sqrt{\beta_n/\beta_p}\,(V_G - 0.7)$, by a flat ceiling $\tfrac12\beta_n(V_G - 0.7)^2$ with the NMOS saturated and the PMOS in triode. A larger $V_G$ moves the turn-on to the right and raises the ceiling. The equivalent transconductance is $-\beta_p(V_X - V_G - 0.8)$ (negative) in the PMOS-limited region, $+\beta_n(V_G - 0.7)$ in the NMOS-limited region, and zero where no current flows.

Common mistake. Reading the devices as being in parallel and adding their currents. There is a single path X → PMOS → Y → NMOS → ground, so the same current flows in both, and the weaker device sets it.

Common mistake. Letting current flow for $V_G < 0.7$ V or for small $V_X$. The NMOS needs $V_G > 0.7$ V and the PMOS, whose source is at X (not at the middle node), needs $V_X > V_G + 0.8$ V; if either is off, $I_X = 0$.

Common mistake. Giving $\partial I_X/\partial V_G$ the same sign everywhere. In the PMOS-limited region a higher gate voltage *reduces* the current, so the equivalent transconductance is negative there and positive only where the NMOS limits the current.
