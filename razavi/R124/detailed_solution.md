# Detailed solution - R124

**Approach.** First identify which elements connect to $X$ and $Y$, and apply Kirchhoff's current law (KCL) at both nodes. This shows that the current of $M_1$ circulates in a closed loop through $C_1$, so $M_2$ carries no current and pins $X$ at ground. The problem then reduces to a capacitor discharged by a single transistor with a constant gate–source voltage: a linear ramp while $M_1$ is saturated, followed by a triode decay to zero.

### Step 1 — Reading the circuit

From the figure:

- $M_1$: gate at $V_{b1}$, drain at node $Y$, source at node $X$.
- $C_1$: "+" plate at $Y$, "−" plate at $X$. So $C_1$ is connected directly across $M_1$'s drain and source.
- $M_2$: gate at $V_{b2}$, drain at $X$, source at ground.

Node $Y$ connects **only** to the top plate of $C_1$ and the drain of $M_1$. Node $X$ connects to the bottom plate of $C_1$, the source of $M_1$ and the drain of $M_2$.

### Step 2 — KCL shows that $M_2$ carries no current

Let $I_1$ be the drain current of $M_1$ (from $Y$ to $X$) and $I_2$ that of $M_2$ (from $X$ to ground). Let $V_C = V_Y - V_X$ be the capacitor voltage with the marked polarity.

**KCL at $Y$.** The current $I_1$ leaving $Y$ through $M_1$ can only come out of the top plate of $C_1$:

$$I_1 = -C_1\frac{dV_C}{dt}.$$

**KCL at $X$.** The current arriving from $M_1$ splits between the bottom plate of $C_1$ and $M_2$. The current flowing *into* the bottom plate is $C_1\,d(V_X - V_Y)/dt = -C_1\,dV_C/dt$, so

$$I_1 = -C_1\frac{dV_C}{dt} + I_2 .$$

**Compare the two equations.** The first equation says $-C_1\,dV_C/dt = I_1$; substituting into the second gives $I_1 = I_1 + I_2$, so

$$I_2 = 0 .$$

Physically, the charge that leaves the top plate of $C_1$ through $M_1$ arrives at the bottom plate of the same capacitor. The discharge loop $C_1 \to M_1 \to C_1$ is closed and never passes through $M_2$.

### Step 3 — $V_X$ stays at 0 V

$M_2$ has $V_{GS2} = V_{b2}$, which is above its threshold (its source is at ground and its bulk at ground, so $V_{TH2} = V_{TH0} = 0.7$ V). An NMOS whose channel is on can carry zero current only when its drain–source voltage is zero. (In the triode region $I_D = \beta[(V_{GS} - V_{TH})V_{DS} - V_{DS}^2/2]$ vanishes only at $V_{DS} = 0$.) Therefore

$$V_X(t) = 0\quad\text{for all } t .$$

Any positive $V_X$ would make $M_2$ sink current from $X$, and any negative $V_X$ would make it source current into $X$. Neither is allowed by KCL, so $M_2$ acts as a closed switch that ties $X$ to ground.

### Step 4 — Initial value and the discharge equation for $V_Y$

With $V_X = 0$, the capacitor voltage is $V_C = V_Y$, so the initial condition $V_C(0) = V_{DD}$ gives

$$V_Y(0) = V_{DD} = 3\ \mathrm{V}.$$

$M_1$ has its source at 0 V, so there is **no body effect**: $V_{TH1} = 0.7$ V and $V_{GS1} = V_{b1}$, both constant. Its overdrive voltage is constant too:

$$V_{ov1} = V_{GS1} - V_{TH1} = V_{b1} - 0.7\ \mathrm{V}.$$

The discharge equation is KCL at $Y$ with $V_C = V_Y$:

$$C_1\frac{dV_Y}{dt} = -I_1(V_Y),$$

where $I_1$ depends on $V_Y = V_{DS1}$ through the square-law model, with $\beta_1 = \mu_nC_{ox}(W/L)_1$:

$$I_1 = \begin{cases}\tfrac12\beta_1V_{ov1}^2, & V_Y \ge V_{ov1}\ \ (\text{saturation}),\\[4pt] \beta_1\left(V_{ov1}V_Y - \tfrac12V_Y^2\right), & V_Y < V_{ov1}\ \ (\text{triode}).\end{cases}$$

### Step 5 — Phase 1: linear ramp ($M_1$ saturated)

Assume the usual case $V_{ov1} = V_{b1} - 0.7 < V_{DD}$. At $t = 0$, $V_{DS1} = 3$ V exceeds $V_{ov1}$, so $M_1$ starts saturated and acts as a **constant current source**:

$$\frac{dV_Y}{dt} = -\frac{\beta_1V_{ov1}^2}{2C_1} \quad\Longrightarrow\quad V_Y(t) = V_{DD} - \frac{\beta_1V_{ov1}^2}{2C_1}\,t .$$

This straight line lasts until $V_Y$ falls to $V_{ov1}$, at the time

$$t_1 = \frac{V_{DD} - V_{ov1}}{\beta_1V_{ov1}^2/(2C_1)} = \frac{2C_1(V_{DD} - V_{ov1})}{\beta_1V_{ov1}^2}.$$

### Step 6 — Phase 2: triode decay to zero

For $t > t_1$, $M_1$ is in the triode region:

$$\frac{dV_Y}{dt} = -\frac{\beta_1}{C_1}\left(V_{ov1}V_Y - \tfrac12V_Y^2\right).$$

This is a logistic-type equation. Its solution with $V_Y(t_1) = V_{ov1}$ is

$$V_Y(t) = \frac{2V_{ov1}}{1 + e^{(t - t_1)/\tau}},\qquad \tau = \frac{C_1}{\beta_1V_{ov1}}.$$

*Check.* At $t = t_1$: $V_Y = 2V_{ov1}/2 = V_{ov1}$ ✓. Its slope there is $-2V_{ov1}/(4\tau) = -\beta_1V_{ov1}^2/(2C_1)$, the same as the ramp, so the curve is smooth at the transition ✓. For large $t$ the 1 in the denominator is negligible and

$$V_Y \approx 2V_{ov1}\,e^{-(t - t_1)/\tau},$$

an exponential decay with time constant $\tau = R_{on1}C_1$. Here $R_{on1} = 1/(\beta_1V_{ov1})$ is the on-resistance of $M_1$ for a small $V_{DS}$.

**Final state:** $V_Y \to 0$ and $V_X = 0$, so $C_1$ discharges **completely**. Nothing stops $M_1$: its gate–source voltage stays at $V_{b1}$, so its channel stays on, and the current falls to zero only because $V_{DS1} \to 0$.

(If instead $V_{b1} - 0.7 \ge V_{DD}$, $M_1$ is in triode from the start, and $V_Y = 2V_{ov1}/[1 + ((2V_{ov1} - V_{DD})/V_{DD})\,e^{t/\tau}]$, with no linear segment.)

### Step 7 — A numerical example of the sketch

Take $V_{b1} = 2$ V, so $V_{ov1} = 1.3$ V. Measure time in units of $T_0 = C_1/(\beta_1\cdot 1\ \mathrm{V})$ (for example, $T_0 = 1$ ns for $C_1 = 1$ pF and $\beta_1 = 1$ mA/V²). Then:

$$
\begin{aligned}
\text{ramp slope} &= \tfrac12(1.3)^2 = 0.845\ \mathrm{V}/T_0,\\
t_1 &= \frac{3 - 1.3}{0.845}\,T_0 = 2.01\,T_0,\\
\tau &= \frac{1}{1.3}\,T_0 = 0.77\,T_0 .
\end{aligned}
$$

| $t/T_0$ | 0 | 1 | 2.01 | 2.5 | 3 | 4 | 5 | 6 |
|---|---|---|---|---|---|---|---|---|
| $V_Y$ (V) | 3.00 | 2.16 | 1.30 | 0.90 | 0.56 | 0.18 | 0.05 | 0.01 |
| $V_X$ (V) | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |

The sketch: $V_Y$ is a straight line from 3 V down to $V_{b1} - 0.7$ V, then bends smoothly into an exponential-like tail to 0; $V_X$ is a flat line at 0.

### Result

- **$V_X = 0$ for all $t$.** The discharge current of $M_1$ circulates through $C_1$ itself, so KCL at $X$ forces $I_{D2} = 0$, and since $M_2$ is on, this requires $V_{DS2} = 0$.
- **$V_Y$** starts at $V_{DD} = 3$ V and falls **linearly**, with slope $-\beta_1(V_{b1} - 0.7)^2/(2C_1)$, while $M_1$ is saturated. When $V_Y = V_{b1} - 0.7$ V, $M_1$ enters the triode region and $V_Y$ decays smoothly **to 0**, ending as an exponential with time constant $C_1/[\beta_1(V_{b1} - 0.7)]$.
- Final state: $V_X = V_Y = 0$; $C_1$ is fully discharged.

**Common mistake.** Assuming $C_1$ discharges through $M_2$ to ground, so that $V_X$ jumps up or moves during the transient. Both plates of $C_1$ sit on $M_1$'s terminals; the current leaving the "+" plate through $M_1$ returns to the "−" plate, and none of it can flow in $M_2$.

**Common mistake.** Letting $V_Y$ stop at a nonzero value such as $V_{b1} - V_{TH}$. That would be the behaviour of a source follower whose *source* is the falling node. Here the falling node is the *drain* of $M_1$, and its source is held at 0 V, so $V_{GS1} = V_{b1}$ stays above threshold and the channel keeps conducting until $V_{DS1} = 0$.

**Common mistake.** Drawing a single exponential from the start. While $V_{DS1} > V_{b1} - 0.7$ V, $M_1$ is saturated and its current is constant, so the first part of the discharge is a straight line; only in the triode region does the current become proportional to $V_Y$.
