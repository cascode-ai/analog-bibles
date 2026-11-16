# Detailed solution - R125

**Approach.** The lower plate of $C_1$ sits on the ideal bias source $V_{b1}$, so $V_Y$ starts at $V_{b1} + V_{DD}$ and changes only through the current of the chain $M_1$–$M_2$ to ground: $C_1\,dV_Y/dt = -I$. Node $X$ has no capacitance, so $V_X$ is always the value that makes the two drain currents equal. We follow the operating regions of $M_1$ and $M_2$ as $V_Y$ falls: a constant-current linear ramp first, then triode regions, ending with both voltages decaying to zero.

### Step 1 — Reading the circuit and the initial values

From the figure:

- $C_1$: "+" plate at node $Y$, "−" plate at the gate node of $M_1$, which is the ideal dc source $V_{b1}$.
- $M_1$: gate at $V_{b1}$, drain at $Y$, source at node $X$.
- $M_2$: gate at $V_{b2}$, drain at $X$, source at ground.

**Initial value.** The capacitor voltage with the marked polarity is $V_Y - V_{b1}$, and it starts at $V_{DD}$:

$$V_Y(0) - V_{b1} = V_{DD}\quad\Longrightarrow\quad V_Y(0) = V_{b1} + V_{DD}.$$

For example, $V_Y(0) = 5$ V for $V_{b1} = 2$ V.

**KCL at $Y$.** $Y$ connects only to $C_1$ and to the drain of $M_1$. The chain current $I$ (flowing $Y \to M_1 \to X \to M_2 \to$ ground) comes out of $C_1$'s top plate. Since the bottom plate is held at the constant $V_{b1}$,

$$C_1\frac{dV_Y}{dt} = -I .$$

**KCL at $X$.** $X$ has no capacitance, so $I_{D1} = I_{D2} = I$ at every instant. This fixes $V_X$ instantaneously; $V_X$ has no memory of its own.

### Step 2 — Device equations

Let $\beta_i = \mu_nC_{ox}(W/L)_i$. Neglect channel-length modulation, as instructed.

- **$M_2$** has its source at ground, so $V_{TH2} = V_{TH0} = 0.7$ V and $V_{GS2} = V_{b2}$ is constant. It is saturated when $V_X \ge V_{b2} - 0.7$ V, with the constant current
$$I_{2,sat} = \tfrac12\beta_2(V_{b2} - 0.7)^2 ,$$
and in the triode region otherwise, with $I = \beta_2[(V_{b2} - 0.7)V_X - V_X^2/2]$.
- **$M_1$** has its source at $X$, so its threshold includes the body effect:
$$V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - \sqrt{0.9}\right)\ \mathrm{V}.$$
It is saturated when $V_{DS1} \ge V_{GS1} - V_{TH1}$, i.e. $V_Y - V_X \ge V_{b1} - V_X - V_{TH1}$, i.e.
$$V_Y \ge V_{b1} - V_{TH1}(V_X).$$
Its saturation current is $\tfrac12\beta_1(V_{b1} - V_X - V_{TH1})^2$.

**$M_1$ starts saturated.** $V_Y(0) = V_{b1} + V_{DD}$ is far above $V_{b1} - V_{TH1}$.

Which region $M_2$ starts in depends on the unspecified sizes and biases, so there are two possible starting cases. We treat the case with $M_2$ saturated first (Steps 3–5), then the other (Step 6).

### Step 3 — Phase 1: linear ramp, $V_X$ constant (both saturated)

With $M_2$ saturated, it acts as a current source and sets the chain current:

$$I = I_{2,sat} = \tfrac12\beta_2(V_{b2} - 0.7)^2 = \text{constant}.$$

**$V_Y$** therefore falls linearly:

$$V_Y(t) = V_{b1} + V_{DD} - \frac{I_{2,sat}}{C_1}\,t .$$

**$V_X$.** $M_1$ is a saturated source follower carrying $I_{2,sat}$. Setting its saturation current equal to $I_{2,sat}$ and solving for the gate–source voltage:

$$V_{b1} - V_X - V_{TH1}(V_X) = \sqrt{\frac{2I_{2,sat}}{\beta_1}}\quad\Longrightarrow\quad V_X + V_{TH1}(V_X) = V_{b1} - (V_{b2} - 0.7)\sqrt{\beta_2/\beta_1}.$$

The right-hand side is constant, so **$V_X$ is constant** during this phase. Its value $V_{X1}$ does not depend on $V_Y$, because a saturated transistor's current does not depend on its drain voltage. This case applies when $V_{X1} \ge V_{b2} - 0.7$ V, which is what keeps $M_2$ saturated.

Phase 1 ends when $M_1$ leaves saturation, at

$$V_Y = V_{b1} - V_{TH1}(V_{X1}).$$

### Step 4 — Phase 2: $M_1$ in triode, ramp continues, $V_X$ falls with $V_Y$

Once $V_Y < V_{b1} - V_{TH1}$, $M_1$ is in the triode region and behaves like a resistor whose value depends on its $V_{GS}$. As long as $X$ stays above $V_{b2} - 0.7$ V, $M_2$ is still saturated, so:

- the current is still $I_{2,sat}$, and **$V_Y$ keeps falling along the same straight line**;
- to pass this fixed current with a shrinking $V_{DS1} = V_Y - V_X$, $M_1$ needs a larger $V_{GS1} = V_{b1} - V_X$. So **$V_X$ starts falling**, following $V_Y$ down and staying below it by $V_{DS1}$.

Phase 2 ends when $V_X$ reaches $V_{b2} - 0.7$ V and $M_2$ leaves saturation.

### Step 5 — Phase 3: both in triode, decay to zero

Now $M_2$ is also in triode, the current falls, and the ramp bends over. Both transistors stay on throughout:

- $V_{GS2} = V_{b2} > 0.7$ V is fixed;
- $V_{GS1} = V_{b1} - V_X$ only *increases* as $X$ falls.

So the current stops only when both drain–source voltages are zero, i.e. $V_Y = V_X = 0$.

**Tail of the decay.** Near zero both devices are deep in triode and act as on-resistances:

$$R_{on1} = \frac{1}{\beta_1(V_{b1} - 0.7)},\qquad R_{on2} = \frac{1}{\beta_2(V_{b2} - 0.7)}.$$

$M_1$'s threshold is 0.7 V here because its source is at about 0 V. The capacitor discharges through the series combination:

$$C_1\frac{dV_Y}{dt} = -\frac{V_Y}{R_{on1} + R_{on2}}\quad\Longrightarrow\quad V_Y \propto e^{-t/[(R_{on1} + R_{on2})C_1]},$$

and $X$ sits at the divider value $V_X = V_Y\,R_{on2}/(R_{on1} + R_{on2})$.

**Final state:** $V_Y = V_X = 0$. The capacitor now holds $V_Y - V_{b1} = -V_{b1}$: it has been discharged and then charged in reverse by $V_{b1}$, because its bottom plate is held at $V_{b1}$.

### Step 6 — The other starting case: $M_2$ in triode from the start

If the value of $V_X$ found from the current balance is below $V_{b2} - 0.7$ V, $M_2$ is in triode at $t = 0$. The current is then set by the **saturated $M_1$** together with the triode $M_2$ (which fixes $V_X$):

$$\tfrac12\beta_1(V_{b1} - V_X - V_{TH1})^2 = \beta_2\left[(V_{b2} - 0.7)V_X - \tfrac12V_X^2\right].$$

$V_Y$ does not appear in this equation, so again **$I$ and $V_X$ are constant** and $V_Y$ ramps down linearly. The difference from the first case: as soon as $M_1$ enters triode ($V_Y < V_{b1} - V_{TH1}$), the current starts to fall, so the ramp bends immediately, and $V_X$ and $V_Y$ decay together to 0 with the same exponential tail as in Step 5.

### Step 7 — Numerical examples

Time is in units of $T_0 = C_1/(\beta\cdot 1\ \mathrm{V})$, with $\beta_1 = \beta_2 = \beta$ (e.g. $T_0 = 1$ ns for $C_1 = 1$ pF and $\beta = 1$ mA/V²). The values come from solving the equations above numerically.

**Example 1** (Steps 3–5: $V_{b1} = 2$ V, $V_{b2} = 1.2$ V).

$$
\begin{aligned}
I_{2,sat} &= \tfrac12\beta(1.2 - 0.7)^2 = 0.125\,\beta\ \mathrm{V^2},\qquad \text{slope} = -0.125\ \mathrm{V}/T_0,\\
V_{X1} + V_{TH1}(V_{X1}) &= 2 - 0.5 = 1.5\ \mathrm{V}\ \Rightarrow\ V_{X1} = 0.664\ \mathrm{V},\ V_{TH1} = 0.836\ \mathrm{V}\ \ (V_{X1} \ge 0.5\ \mathrm{V},\ \text{so } M_2 \text{ is saturated}),\\
\text{Phase 1 ends at } V_Y &= 2 - 0.836 = 1.164\ \mathrm{V},\ \ t = (5 - 1.164)/0.125 = 30.7\,T_0,\\
\text{Phase 2 ends at } V_X &= 0.5\ \mathrm{V}\ (V_Y = 0.71\ \mathrm{V}),\ \ t = 34.3\,T_0,\\
\text{tail: } \tau &= (R_{on1} + R_{on2})C_1 = \left(\tfrac{1}{1.3} + \tfrac{1}{0.5}\right)T_0 = 2.77\,T_0 .
\end{aligned}
$$

| $t/T_0$ | 0 | 10 | 20 | 30.7 | 32 | 34.3 | 36 | 38 | 40 | 45 | 50 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $V_Y$ (V) | 5.00 | 3.75 | 2.50 | 1.16 | 1.00 | 0.71 | 0.51 | 0.30 | 0.17 | 0.03 | 0.005 |
| $V_X$ (V) | 0.66 | 0.66 | 0.66 | 0.66 | 0.64 | 0.50 | 0.36 | 0.22 | 0.12 | 0.02 | 0.004 |

**Example 2** (Step 6: $V_{b1} = V_{b2} = 2$ V). Here $M_2$ starts in triode, $V_X = 0.344$ V, $I = 0.388\,\beta\ \mathrm{V^2}$ (slope $-0.388$ V/$T_0$), and $M_1$ enters triode at $V_Y = 2 - 0.775 = 1.225$ V ($t = 9.7\,T_0$):

| $t/T_0$ | 0 | 4 | 8 | 9.7 | 11 | 12 | 14 | 16 | 20 |
|---|---|---|---|---|---|---|---|---|---|
| $V_Y$ (V) | 5.00 | 3.45 | 1.90 | 1.22 | 0.76 | 0.47 | 0.15 | 0.04 | 0.003 |
| $V_X$ (V) | 0.34 | 0.34 | 0.34 | 0.34 | 0.29 | 0.20 | 0.07 | 0.02 | 0.002 |

### Result

- **$V_Y$** starts at $V_{b1} + V_{DD}$ and **falls linearly** at the constant rate $I/C_1$. With $M_2$ saturated, $I = \tfrac12\beta_2(V_{b2} - 0.7)^2$ and the ramp continues even after $M_1$ enters triode, until $V_X$ drops below $V_{b2} - 0.7$ V. If $M_2$ starts in triode, the current is set by the saturated $M_1$ and the ramp bends as soon as $M_1$ enters triode. The curve then bends over and **decays asymptotically to 0** (exponential tail with $\tau = (R_{on1} + R_{on2})C_1$).
- **$V_X$** takes its current-balance value at $t = 0$ and **stays constant** while $M_1$ is saturated, at $V_X = V_{b1} - V_{GS1}$ (with $V_{TH1}$ including the body effect). After $M_1$ enters triode it **falls together with $V_Y$**, slightly below it, down to 0. It never rises during the discharge.
- Final state: $V_X = V_Y = 0$, and $C_1$ holds $-V_{b1}$ (with respect to the marked polarity).

**Common mistake.** Taking $V_Y(0) = V_{DD}$. The "−" plate of $C_1$ is not grounded; it sits on the bias source $V_{b1}$, so the initial node voltage is $V_{b1} + V_{DD}$.

**Common mistake.** Letting $V_Y$ stop at a nonzero value such as $V_{b1} - V_{TH}$. Here the falling node $Y$ is the *drain* of $M_1$, not its source. $M_1$'s gate–source voltage only grows as $X$ falls, and $M_2$ stays on, so the chain keeps conducting until both $V_Y$ and $V_X$ reach 0.

**Common mistake.** Ending the linear ramp when $M_1$ enters triode in the case where $M_2$ is saturated, or making $V_X$ move during Phase 1. While $M_2$ is saturated, it alone fixes the current, so the slope of $V_Y$ is unchanged until $M_2$ leaves saturation. While $M_1$ is saturated, its current does not depend on $V_Y$, so $V_X$ is constant.
