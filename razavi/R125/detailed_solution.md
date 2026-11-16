# Detailed solution - R125

**Approach.** The lower plate of $C_1$ sits on the ideal bias source $V_{b1}$, so $V_Y$ starts at $V_{b1} + V_{DD}$ and changes only through the current of the chain $M_1$–$M_2$ to ground: $C_1\,dV_Y/dt = -I$. Node $X$ has no capacitance, so $V_X$ is always the value that makes the two drain currents equal. Follow the operating regions of $M_1$ and $M_2$ as $V_Y$ falls: a constant-current linear ramp, then triode regions, ending with both voltages decaying to zero.

### Step 1 — Initial values and the governing equations

The "−" plate of $C_1$ is the gate node of $M_1$, held by the ideal source $V_{b1}$. With the marked polarity the capacitor voltage is $V_Y - V_{b1}$, starting at $V_{DD}$:

$$V_Y(0) - V_{b1} = V_{DD}\quad\Longrightarrow\quad V_Y(0) = V_{b1} + V_{DD},$$

e.g. $V_Y(0) = 5$ V for $V_{b1} = 2$ V.

$Y$ connects only to $C_1$ and the drain of $M_1$, so the chain current $I$ ($Y \to M_1 \to X \to M_2 \to$ ground) comes out of $C_1$'s top plate, whose bottom plate is at the constant $V_{b1}$:

$$C_1\frac{dV_Y}{dt} = -I .$$

At $X$ (no capacitance), $I_{D1} = I_{D2} = I$ at every instant, which fixes $V_X$ instantaneously.

### Step 2 — Device equations

With $\beta_i = \mu_nC_{ox}(W/L)_i$:

- **$M_2$** (source at ground): $V_{TH2} = 0.7$ V and $V_{GS2} = V_{b2}$ are constant. It is saturated when $V_X \ge V_{b2} - 0.7$ V, with the constant current
$$I_{2,sat} = \tfrac12\beta_2(V_{b2} - 0.7)^2 ,$$
and in triode otherwise, with $I = \beta_2[(V_{b2} - 0.7)V_X - V_X^2/2]$.
- **$M_1$** (source at $X$) has the body effect,
$$V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + V_X} - \sqrt{0.9}\right)\ \mathrm{V},$$
and is saturated when $V_Y - V_X \ge V_{b1} - V_X - V_{TH1}$, i.e.
$$V_Y \ge V_{b1} - V_{TH1}(V_X),$$
with the current $\tfrac12\beta_1(V_{b1} - V_X - V_{TH1})^2$.

$M_1$ starts saturated, since $V_Y(0) = V_{b1} + V_{DD}$ is far above $V_{b1} - V_{TH1}$. The starting region of $M_2$ depends on the unspecified sizes and biases, so there are two cases: $M_2$ saturated (Steps 3–5) and $M_2$ in triode (Step 6).

### Step 3 — Phase 1: linear ramp, $V_X$ constant (both saturated)

The saturated $M_2$ sets the chain current:

$$I = I_{2,sat} = \tfrac12\beta_2(V_{b2} - 0.7)^2 = \text{constant},\qquad V_Y(t) = V_{b1} + V_{DD} - \frac{I_{2,sat}}{C_1}\,t .$$

**$V_X$.** $M_1$ is a saturated source follower carrying $I_{2,sat}$:

$$V_{b1} - V_X - V_{TH1}(V_X) = \sqrt{\frac{2I_{2,sat}}{\beta_1}}\quad\Longrightarrow\quad V_X + V_{TH1}(V_X) = V_{b1} - (V_{b2} - 0.7)\sqrt{\beta_2/\beta_1}.$$

The right-hand side is constant, so **$V_X$ is constant** at a value $V_{X1}$ that does not depend on $V_Y$ (a saturated transistor's current does not depend on its drain voltage). This case applies when $V_{X1} \ge V_{b2} - 0.7$ V.

Phase 1 ends when $M_1$ leaves saturation, at

$$V_Y = V_{b1} - V_{TH1}(V_{X1}).$$

### Step 4 — Phase 2: $M_1$ in triode, ramp continues, $V_X$ falls with $V_Y$

Once $V_Y < V_{b1} - V_{TH1}$, $M_1$ is in triode. While $X$ stays above $V_{b2} - 0.7$ V, $M_2$ is still saturated, so:

- the current is still $I_{2,sat}$, and **$V_Y$ keeps falling along the same straight line**;
- to pass this current with a shrinking $V_{DS1} = V_Y - V_X$, $M_1$ needs a larger $V_{GS1} = V_{b1} - V_X$, so **$V_X$ starts falling**, following $V_Y$ down and staying below it by $V_{DS1}$.

Phase 2 ends when $V_X$ reaches $V_{b2} - 0.7$ V and $M_2$ leaves saturation.

### Step 5 — Phase 3: both in triode, decay to zero

Now $M_2$ is also in triode, the current falls, and the ramp bends over. Both transistors stay on ($V_{GS2} = V_{b2} > 0.7$ V is fixed, and $V_{GS1} = V_{b1} - V_X$ only *increases* as $X$ falls), so the current stops only at $V_Y = V_X = 0$.

**Tail of the decay.** Near zero both devices are on-resistances ($M_1$'s threshold is 0.7 V since its source is at about 0 V):

$$R_{on1} = \frac{1}{\beta_1(V_{b1} - 0.7)},\qquad R_{on2} = \frac{1}{\beta_2(V_{b2} - 0.7)},$$

$$C_1\frac{dV_Y}{dt} = -\frac{V_Y}{R_{on1} + R_{on2}}\quad\Longrightarrow\quad V_Y \propto e^{-t/[(R_{on1} + R_{on2})C_1]},$$

with $X$ at the divider value $V_X = V_Y\,R_{on2}/(R_{on1} + R_{on2})$.

**Final state:** $V_Y = V_X = 0$, so the capacitor holds $V_Y - V_{b1} = -V_{b1}$: it has been discharged and then charged in reverse, because its bottom plate is held at $V_{b1}$.

### Step 6 — The other starting case: $M_2$ in triode from the start

If the current-balance value of $V_X$ is below $V_{b2} - 0.7$ V, $M_2$ is in triode at $t = 0$, and the current is set by the **saturated $M_1$** together with the triode $M_2$:

$$\tfrac12\beta_1(V_{b1} - V_X - V_{TH1})^2 = \beta_2\left[(V_{b2} - 0.7)V_X - \tfrac12V_X^2\right].$$

$V_Y$ does not appear, so again **$I$ and $V_X$ are constant** and $V_Y$ ramps down linearly. The difference: as soon as $M_1$ enters triode ($V_Y < V_{b1} - V_{TH1}$), the current falls, the ramp bends immediately, and $V_X$ and $V_Y$ decay together to 0 with the same exponential tail as in Step 5.

### Step 7 — Numerical examples

Time is in units of $T_0 = C_1/(\beta\cdot 1\ \mathrm{V})$, with $\beta_1 = \beta_2 = \beta$ (e.g. $T_0 = 1$ ns for $C_1 = 1$ pF and $\beta = 1$ mA/V²); the values come from solving the equations above numerically.

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

**Example 2** (Step 6: $V_{b1} = V_{b2} = 2$ V). $M_2$ starts in triode, $V_X = 0.344$ V, $I = 0.388\,\beta\ \mathrm{V^2}$ (slope $-0.388$ V/$T_0$), and $M_1$ enters triode at $V_Y = 2 - 0.775 = 1.225$ V ($t = 9.7\,T_0$):

| $t/T_0$ | 0 | 4 | 8 | 9.7 | 11 | 12 | 14 | 16 | 20 |
|---|---|---|---|---|---|---|---|---|---|
| $V_Y$ (V) | 5.00 | 3.45 | 1.90 | 1.22 | 0.76 | 0.47 | 0.15 | 0.04 | 0.003 |
| $V_X$ (V) | 0.34 | 0.34 | 0.34 | 0.34 | 0.29 | 0.20 | 0.07 | 0.02 | 0.002 |

### Result

- **$V_Y$** starts at $V_{b1} + V_{DD}$ and **falls linearly** at the constant rate $I/C_1$. With $M_2$ saturated, $I = \tfrac12\beta_2(V_{b2} - 0.7)^2$ and the ramp continues even after $M_1$ enters triode, until $V_X$ drops below $V_{b2} - 0.7$ V. If $M_2$ starts in triode, the saturated $M_1$ sets the current and the ramp bends as soon as $M_1$ enters triode. The curve then bends over and **decays asymptotically to 0** (exponential tail with $\tau = (R_{on1} + R_{on2})C_1$).
- **$V_X$** takes its current-balance value at $t = 0$ and **stays constant** while $M_1$ is saturated, at $V_X = V_{b1} - V_{GS1}$ (with $V_{TH1}$ including the body effect). After $M_1$ enters triode it **falls together with $V_Y$**, slightly below it, down to 0. It never rises during the discharge.
- Final state: $V_X = V_Y = 0$, and $C_1$ holds $-V_{b1}$ (with respect to the marked polarity).

**Common mistake.** Taking $V_Y(0) = V_{DD}$. The "−" plate of $C_1$ sits on the bias source $V_{b1}$, not on ground, so $V_Y(0) = V_{b1} + V_{DD}$.

**Common mistake.** Letting $V_Y$ stop at a nonzero value such as $V_{b1} - V_{TH}$. $Y$ is the *drain* of $M_1$; its $V_{GS}$ only grows as $X$ falls and $M_2$ stays on, so the chain conducts until $V_Y = V_X = 0$.

**Common mistake.** With $M_2$ saturated, ending the linear ramp when $M_1$ enters triode, or making $V_X$ move during Phase 1. $M_2$ alone fixes the current until it leaves saturation, and while $M_1$ is saturated its current does not depend on $V_Y$, so $V_X$ is constant.
