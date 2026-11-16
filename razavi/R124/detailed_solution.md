# Detailed solution - R124

**Approach.** KCL at $X$ and $Y$ shows that the current of $M_1$ circulates in a closed loop through $C_1$, so $M_2$ carries no current and pins $X$ at ground. The problem then reduces to a capacitor discharged by a single transistor with a constant gate–source voltage: a linear ramp while $M_1$ is saturated, then a triode decay to zero.

### Step 1 — KCL shows that $M_2$ carries no current

Let $I_1$ be the drain current of $M_1$ ($Y \to X$), $I_2$ that of $M_2$ ($X \to$ ground), and $V_C = V_Y - V_X$ the capacitor voltage with the marked polarity.

**KCL at $Y$.** $Y$ connects only to the "+" plate of $C_1$ and the drain of $M_1$, so

$$I_1 = -C_1\frac{dV_C}{dt}.$$

**KCL at $X$.** The current from $M_1$ splits between the "−" plate of $C_1$, which takes $C_1\,d(V_X - V_Y)/dt = -C_1\,dV_C/dt$, and $M_2$:

$$I_1 = -C_1\frac{dV_C}{dt} + I_2 .$$

Substituting the first equation into the second gives $I_1 = I_1 + I_2$, so

$$I_2 = 0 .$$

The charge that leaves the "+" plate through $M_1$ arrives at the "−" plate of the same capacitor: the discharge loop $C_1 \to M_1 \to C_1$ never passes through $M_2$.

### Step 2 — $V_X$ stays at 0 V

$M_2$ has $V_{GS2} = V_{b2}$, above its threshold ($V_{TH2} = V_{TH0} = 0.7$ V, with source and bulk at ground). An NMOS whose channel is on carries zero current only at $V_{DS} = 0$ (the triode current $\beta[(V_{GS} - V_{TH})V_{DS} - V_{DS}^2/2]$ vanishes only there). Therefore

$$V_X(t) = 0\quad\text{for all } t .$$

Any other $V_X$ would make $M_2$ sink or source current at $X$, which KCL forbids: $M_2$ acts as a closed switch tying $X$ to ground.

### Step 3 — Initial value and the discharge equation for $V_Y$

With $V_X = 0$, $V_C = V_Y$, so $V_C(0) = V_{DD}$ gives

$$V_Y(0) = V_{DD} = 3\ \mathrm{V}.$$

$M_1$'s source is at 0 V, so there is **no body effect**: $V_{TH1} = 0.7$ V and $V_{GS1} = V_{b1}$ are constant, and so is

$$V_{ov1} = V_{GS1} - V_{TH1} = V_{b1} - 0.7\ \mathrm{V}.$$

KCL at $Y$ with $V_C = V_Y$, and $\beta_1 = \mu_nC_{ox}(W/L)_1$:

$$C_1\frac{dV_Y}{dt} = -I_1(V_Y),\qquad I_1 = \begin{cases}\tfrac12\beta_1V_{ov1}^2, & V_Y \ge V_{ov1}\ \ (\text{saturation}),\\[4pt] \beta_1\left(V_{ov1}V_Y - \tfrac12V_Y^2\right), & V_Y < V_{ov1}\ \ (\text{triode}),\end{cases}$$

since $V_{DS1} = V_Y$.

### Step 4 — Phase 1: linear ramp ($M_1$ saturated)

In the usual case $V_{ov1} = V_{b1} - 0.7 < V_{DD}$, $M_1$ starts saturated ($V_{DS1} = 3$ V $> V_{ov1}$) and is a **constant current source**:

$$\frac{dV_Y}{dt} = -\frac{\beta_1V_{ov1}^2}{2C_1} \quad\Longrightarrow\quad V_Y(t) = V_{DD} - \frac{\beta_1V_{ov1}^2}{2C_1}\,t .$$

The ramp lasts until $V_Y = V_{ov1}$, at

$$t_1 = \frac{V_{DD} - V_{ov1}}{\beta_1V_{ov1}^2/(2C_1)} = \frac{2C_1(V_{DD} - V_{ov1})}{\beta_1V_{ov1}^2}.$$

### Step 5 — Phase 2: triode decay to zero

For $t > t_1$, $M_1$ is in triode:

$$\frac{dV_Y}{dt} = -\frac{\beta_1}{C_1}\left(V_{ov1}V_Y - \tfrac12V_Y^2\right).$$

This logistic-type equation, with $V_Y(t_1) = V_{ov1}$, has the solution

$$V_Y(t) = \frac{2V_{ov1}}{1 + e^{(t - t_1)/\tau}},\qquad \tau = \frac{C_1}{\beta_1V_{ov1}}.$$

*Check.* At $t = t_1$, $V_Y = 2V_{ov1}/2 = V_{ov1}$ ✓, and the slope there is $-2V_{ov1}/(4\tau) = -\beta_1V_{ov1}^2/(2C_1)$, the same as the ramp, so the curve is smooth at the transition ✓. For large $t$,

$$V_Y \approx 2V_{ov1}\,e^{-(t - t_1)/\tau},$$

an exponential decay with $\tau = R_{on1}C_1$, where $R_{on1} = 1/(\beta_1V_{ov1})$ is the small-$V_{DS}$ on-resistance of $M_1$.

**Final state:** $V_Y \to 0$ and $V_X = 0$, so $C_1$ discharges **completely**: $V_{GS1}$ stays at $V_{b1}$, the channel stays on, and the current falls to zero only because $V_{DS1} \to 0$.

(If instead $V_{b1} - 0.7 \ge V_{DD}$, $M_1$ is in triode from the start, and $V_Y = 2V_{ov1}/[1 + ((2V_{ov1} - V_{DD})/V_{DD})\,e^{t/\tau}]$, with no linear segment.)

### Step 6 — A numerical example of the sketch

Take $V_{b1} = 2$ V, so $V_{ov1} = 1.3$ V, and measure time in units of $T_0 = C_1/(\beta_1\cdot 1\ \mathrm{V})$ (e.g. $T_0 = 1$ ns for $C_1 = 1$ pF and $\beta_1 = 1$ mA/V²):

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

$V_Y$ is a straight line from 3 V down to $V_{b1} - 0.7$ V, then bends smoothly into an exponential-like tail to 0; $V_X$ is a flat line at 0.

### Result

- **$V_X = 0$ for all $t$.** The discharge current of $M_1$ circulates through $C_1$ itself, so KCL at $X$ forces $I_{D2} = 0$, and since $M_2$ is on, $V_{DS2} = 0$.
- **$V_Y$** starts at $V_{DD} = 3$ V and falls **linearly**, with slope $-\beta_1(V_{b1} - 0.7)^2/(2C_1)$, while $M_1$ is saturated. At $V_Y = V_{b1} - 0.7$ V, $M_1$ enters triode and $V_Y$ decays smoothly **to 0**, ending as an exponential with time constant $C_1/[\beta_1(V_{b1} - 0.7)]$.
- Final state: $V_X = V_Y = 0$; $C_1$ is fully discharged.

**Common mistake.** Assuming $C_1$ discharges through $M_2$ to ground, so that $V_X$ moves during the transient. The current leaving the "+" plate through $M_1$ returns to the "−" plate; none of it flows in $M_2$.

**Common mistake.** Letting $V_Y$ stop at a nonzero value such as $V_{b1} - V_{TH}$, as for a source follower. Here the falling node is the *drain* of $M_1$ and its source is held at 0 V, so the channel keeps conducting until $V_{DS1} = 0$.

**Common mistake.** Drawing a single exponential from the start. While $V_{DS1} > V_{b1} - 0.7$ V, $M_1$ is saturated and its current is constant, so the discharge begins as a straight line.
