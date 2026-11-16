# Detailed solution - R057

**Approach.** Node X has no dc path anywhere (it touches only the gate of $M_1$ and capacitor $C_1$), so the charge on $C_1$ is frozen and $V_X - V_Y = V_{GS1}$ never changes. The input step is coupled to Y through $C_2$, which pushes $M_1$ out of saturation; the current deficit then discharges $C_2$ until $M_1$ can again carry $I_1$. Writing KCL at node Y gives a differential equation that can be solved exactly.

### Step 1 — Reading the circuit and the initial state

From the figure:

- $M_1$ (NMOS): drain at $V_{DD}$, gate at node X, source at node Y.
- $C_1$ connects X and Y (gate to source).
- The current source $I_1$ pulls current from Y to ground.
- $C_2$ couples the input $V_{in}$ to node Y.

Before $t = 0$ the circuit is at rest with $V_X = V_{DD}$, and $M_1$ carries $I_1$. Its drain–source voltage $V_{DD} - V_Y$ equals its gate–source voltage, so it is saturated, and from the **square law** ($\lambda = 0$)

$$I_1 = \frac{\beta}{2}(V_{GS1} - V_{TH})^2 \quad\Longrightarrow\quad V_{GS1} = V_{TH} + \sqrt{\frac{2I_1}{\beta}},$$

where $\beta = \mu_nC_{ox}W/L$. Define the overdrive $V_{ov} = \sqrt{2I_1/\beta}$. The initial voltages are

$$V_X(0^-) = V_{DD}, \qquad V_Y(0^-) = V_{DD} - V_{GS1} = V_{DD} - V_{TH} - V_{ov} .$$

### Step 2 — Node X floats: $V_X - V_Y$ is constant

**KCL at node X.** The only elements touching X are the gate of $M_1$ (no dc or capacitive current, since other capacitances are neglected) and $C_1$. Hence the current in $C_1$ must be zero at all times:

$$C_1\frac{d(V_X - V_Y)}{dt} = 0 \quad\Longrightarrow\quad V_X(t) - V_Y(t) = \text{constant} = V_{GS1} .$$

$C_1$ behaves like a floating battery of voltage $V_{GS1}$: X follows every movement of Y exactly. In particular, the gate–source voltage of $M_1$ is always $V_{GS1}$, so whatever happens, $M_1$ can carry $I_1$ only if it is saturated.

### Step 3 — The jump at $t = 0$

At $t = 0$, $V_{in}$ jumps by $V_0$. A capacitor's voltage cannot change instantaneously unless an infinite current flows, and the only elements that can carry the impulse of current needed for a jump are capacitors. Looking from node Y:

- $C_2$ goes to $V_{in}$;
- $C_1$ goes to X, which leads nowhere else, so no charge can flow through $C_1$;
- $M_1$ and $I_1$ carry finite currents.

The voltage across $C_2$ therefore stays the same across the step, and Y rises by the full $V_0$; X rides along (Step 2):

$$V_Y(0^+) = V_{DD} - V_{GS1} + V_0, \qquad V_X(0^+) = V_{DD} + V_0 .$$

### Step 4 — $M_1$ is pushed out of saturation

Just after the step:

$$V_{GS1} \;\text{(unchanged)}, \qquad V_{DS1} = V_{DD} - V_Y(0^+) = V_{GS1} - V_0 .$$

Saturation would require $V_{DS1} \ge V_{GS1} - V_{TH}$, i.e. $V_0 \le V_{TH}$. Since $V_0 > V_{TH}$, **$M_1$ is in the triode region**: equivalently, the gate is now more than $V_{TH}$ above the $V_{DD}$ terminal, so the channel is inverted at both ends. (If $V_0 > V_{GS1}$, Y is even above $V_{DD}$, and the drain and source exchange roles; the device then conducts *from* Y *to* $V_{DD}$.)

With the gate–source voltage fixed at $V_{GS1}$, a device in triode carries **less** than its saturation current $I_1$. Write the triode current with $\gamma = 0$ in the "two overdrives" form:

$$I_{M1} = \frac{\beta}{2}\left[(V_X - V_Y - V_{TH})^2 - (V_X - V_{DD} - V_{TH})^2\right] = I_1 - \frac{\beta}{2}\,u^2,$$

where

$$u = V_X - V_{DD} - V_{TH}$$

is the overdrive at the $V_{DD}$ end of the channel. This form is valid whenever $u > 0$, in both directions of conduction. At $t = 0^+$, $u(0^+) = V_{DD} + V_0 - V_{DD} - V_{TH} = V_0 - V_{TH} > 0$.

### Step 5 — KCL at node Y: the discharge equation

For $t > 0$, $V_{in}$ is constant, so the current flowing from $C_2$ into Y is $C_2\,d(V_{in} - V_Y)/dt = -C_2\,dV_Y/dt$. The current in $C_1$ is zero (Step 2).

**KCL at node Y** (current in = current out):

$$I_{M1} - C_2\frac{dV_Y}{dt} = I_1 .$$

Rearrange:

$$C_2\frac{dV_Y}{dt} = I_{M1} - I_1 = -\frac{\beta}{2}u^2 < 0 .$$

So $I_1$ draws more than $M_1$ supplies, and the difference is taken from $C_2$: **$V_Y$ falls, and $V_X$ falls with it.** Since $V_X = V_Y + V_{GS1}$, $du/dt = dV_X/dt = dV_Y/dt$:

$$\frac{du}{dt} = -\frac{\beta}{2C_2}\,u^2 .$$

### Step 6 — Solving the equation and the final values

Separate the variables:

$$\frac{du}{u^2} = -\frac{\beta}{2C_2}\,dt .$$

Integrate from $0$ to $t$ (with $\int du/u^2 = -1/u$):

$$-\frac{1}{u(t)} + \frac{1}{u(0^+)} = -\frac{\beta}{2C_2}\,t \quad\Longrightarrow\quad \frac{1}{u(t)} = \frac{1}{V_0 - V_{TH}} + \frac{\beta t}{2C_2} .$$

Solve for $u$:

$$u(t) = \frac{V_0 - V_{TH}}{1 + t/\tau}, \qquad \tau = \frac{2C_2}{\beta(V_0 - V_{TH})} .$$

Convert back, using $V_X = V_{DD} + V_{TH} + u$ and $V_Y = V_X - V_{GS1}$:

$$
\begin{aligned}
V_X(t) &= V_{DD} + V_{TH} + \frac{V_0 - V_{TH}}{1 + t/\tau},\\
V_Y(t) &= V_{DD} - \sqrt{\frac{2I_1}{\beta}} + \frac{V_0 - V_{TH}}{1 + t/\tau} .
\end{aligned}
$$

**Final values** ($t \to \infty$, $u \to 0$):

$$V_X(\infty) = V_{DD} + V_{TH}, \qquad V_Y(\infty) = V_{DD} - \sqrt{2I_1/\beta} .$$

**Interpretation.** The discharge stops when $u = 0$, i.e. when $M_1$ reaches the **edge of saturation**, $V_{DS1} = V_{GS1} - V_{TH} = V_{ov}$, because only then does it carry $I_1$ with its fixed $V_{GS1}$. Both nodes end exactly $V_{TH}$ above their initial values, not $V_0$ above. The approach is **hyperbolic** ($\propto 1/t$), not exponential: the current deficit $\tfrac{\beta}{2}u^2$ shrinks quadratically as the edge of saturation is approached, so the last part of the settling is slow.

### Step 7 — The waveforms

Both waveforms have the same shape, offset by the constant $V_{GS1}$:

| Time | $V_X$ | $V_Y$ |
|---|---|---|
| $t < 0$ | $V_{DD}$ | $V_{DD} - V_{GS1}$ |
| $t = 0^+$ (jump up by $V_0$) | $V_{DD} + V_0$ | $V_{DD} - V_{GS1} + V_0$ |
| $t = \tau$ (half of the excess left) | $V_{DD} + V_{TH} + (V_0 - V_{TH})/2$ | $V_{DD} - V_{ov} + (V_0 - V_{TH})/2$ |
| $t = 9\tau$ (10 % left) | $V_{DD} + V_{TH} + 0.1(V_0 - V_{TH})$ | $V_{DD} - V_{ov} + 0.1(V_0 - V_{TH})$ |
| $t \to \infty$ | $V_{DD} + V_{TH}$ | $V_{DD} - V_{ov}$ |

**Numerical illustration** (assumed values: $V_{DD} = 3$ V, $V_{TH} = 0.7$ V, $\beta = 1\ \mathrm{mA/V^2}$, $I_1 = 0.1$ mA, $C_2 = 1$ pF, $V_0 = 1$ V):

$$
\begin{aligned}
V_{ov} &= \sqrt{2(0.1\ \mathrm{mA})/(1\ \mathrm{mA/V^2})} = 0.447\ \mathrm{V}, \qquad V_{GS1} = 1.147\ \mathrm{V},\\
\tau &= \frac{2(1\ \mathrm{pF})}{(1\ \mathrm{mA/V^2})(1 - 0.7\ \mathrm{V})} = 6.7\ \mathrm{ns}.
\end{aligned}
$$

$V_X$: 3 V → jumps to 4.0 V → 3.85 V at 6.7 ns → 3.73 V at 60 ns → 3.7 V. $V_Y$: 1.85 V → jumps to 2.85 V → 2.70 V at 6.7 ns → 2.58 V at 60 ns → 2.55 V.

If instead $V_0 \le V_{TH}$, $M_1$ would stay saturated after the jump, carry exactly $I_1$, and both nodes would simply stay at their jumped values. The condition $V_0 > V_{TH}$ is what drives $M_1$ into triode.

### Result

$V_X - V_Y = V_{GS1} = V_{TH} + \sqrt{2I_1/\beta}$ at all times, because node X has no discharge path. At $t = 0$ both nodes jump up by $V_0$ (to $V_{DD} + V_0$ and $V_{DD} - V_{GS1} + V_0$). Because $V_0 > V_{TH}$, $M_1$ enters triode and carries less than $I_1$; the deficit discharges $C_2$, and both nodes fall together:

$$V_X(t) = V_{DD} + V_{TH} + \frac{V_0 - V_{TH}}{1 + t/\tau}, \quad V_Y(t) = V_{DD} - \sqrt{\frac{2I_1}{\beta}} + \frac{V_0 - V_{TH}}{1 + t/\tau}, \quad \tau = \frac{2C_2}{\beta(V_0 - V_{TH})} .$$

They settle asymptotically at $V_X = V_{DD} + V_{TH}$ and $V_Y = V_{DD} - \sqrt{2I_1/\beta}$ ($M_1$ at the edge of saturation), i.e. $V_{TH}$ above their initial values.

**Common mistake.** Assuming $V_X$ stays at $V_{DD}$ or that $C_1$ discharges through the gate. The gate draws no current and nothing else touches X, so the charge on $C_1$ cannot change; X must move with Y.

**Common mistake.** Letting the circuit return to its initial voltages, or stay at the jumped values. $M_1$ keeps the same $V_{GS1}$, so it carries $I_1$ again only at the edge of saturation, which is reached with both nodes $V_{TH}$ above their starting points.

**Common mistake.** Having $V_X$ and $V_Y$ move in opposite directions, e.g. treating $C_1$ and $C_2$ as a voltage divider for the step. With X floating, $C_1$ carries no charge and is just a level shifter; both nodes jump by the full $V_0$ and then fall together.
