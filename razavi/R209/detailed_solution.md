# Detailed solution - R209

**Approach.** Because the circuit is not symmetric, the tail node P is **not** a virtual ground, so no half circuit is allowed. Instead we write the small-signal equations of the whole circuit: one unknown current per branch, the node voltage $v_P$, the constraint from the ideal tail source, and the transistor equations including the body effect. Eliminating $v_P$ gives the branch current, and the two load resistors give the output.

### Step 1 — Reading the circuit and setting up unknowns

From the figure:

- $M_1$: gate at $V_{in1}$, drain to $V_{DD}$ through $R_{D1}$, source to node P through $R_{S1}$.
- $M_2$: gate at $V_{in2}$, drain through $R_{D2}$, source through $R_{S2}$ to P.
- An ideal current source $I_{SS}$ pulls current from P to ground.
- Bulks of $M_1$, $M_2$ at ground. $V_{out} = V_{D1} - V_{D2}$, with $\lambda = 0$ and $\gamma \ne 0$.

**Small-signal unknowns:**

- $i_1$, $i_2$: the small-signal drain currents flowing *down* through $M_1$ and $M_2$ (drain to source);
- $v_P$: the voltage of the tail node;
- $v_{S1}$, $v_{S2}$: the source voltages of $M_1$, $M_2$.

$V_{DD}$ is AC ground.

**Small-signal model of each transistor** (λ = 0, so no $r_O$): a controlled current from drain to source,

$$i_D = g_mv_{gs} + g_{mb}v_{bs},$$

where $g_{mb}$ is the body transconductance and $v_{bs}$ the bulk–source voltage. Here the bulks are grounded, so $v_{bs} = -v_s$.

### Step 2 — The tail constraint

The tail is an **ideal** current source: its current is fixed, so its small-signal current is zero. KCL at P:

$$i_1 + i_2 = 0\quad\Longrightarrow\quad i_2 = -i_1 .$$

*Note:* this is what makes the analysis different from two separate common-source stages. $v_P$ is free to move, and it moves exactly as needed to keep the total current constant.

### Step 3 — Source voltages (Ohm's law on $R_{S1}$, $R_{S2}$)

$i_1$ flows from the source of $M_1$ through $R_{S1}$ into P, and $i_2$ through $R_{S2}$:

$$v_{S1} = v_P + i_1R_{S1}, \qquad v_{S2} = v_P + i_2R_{S2} = v_P - i_1R_{S2}.$$

### Step 4 — Transistor equations with body effect

For $M_1$: $v_{gs1} = v_{in1} - v_{S1}$ and $v_{bs1} = 0 - v_{S1}$, so

$$
\begin{aligned}
i_1 &= g_{m1}(v_{in1} - v_{S1}) + g_{mb1}(0 - v_{S1}) = g_{m1}v_{in1} - (g_{m1} + g_{mb1})v_{S1}\\
v_{S1} &= \frac{g_{m1}v_{in1} - i_1}{g_{m1} + g_{mb1}} .
\end{aligned}
$$

Likewise for $M_2$, using $i_2 = -i_1$:

$$v_{S2} = \frac{g_{m2}v_{in2} - i_2}{g_{m2} + g_{mb2}} = \frac{g_{m2}v_{in2} + i_1}{g_{m2} + g_{mb2}} .$$

The body effect enters as $g_m + g_{mb}$ in the denominator. A rising source also lowers $v_{bs}$, which raises the threshold, so the source "fights back" more strongly than through $g_m$ alone.

### Step 5 — Eliminate $v_P$ and solve for $i_1$

Subtract the two Step 3 equations to remove $v_P$:

$$v_{S1} - v_{S2} = i_1R_{S1} + i_1R_{S2} = i_1(R_{S1} + R_{S2}).$$

Substitute the Step 4 expressions on the left:

$$\frac{g_{m1}v_{in1} - i_1}{g_{m1} + g_{mb1}} - \frac{g_{m2}v_{in2} + i_1}{g_{m2} + g_{mb2}} = i_1(R_{S1} + R_{S2}).$$

Move all the $i_1$ terms to the right-hand side:

$$\frac{g_{m1}}{g_{m1} + g_{mb1}}v_{in1} - \frac{g_{m2}}{g_{m2} + g_{mb2}}v_{in2} = i_1\left[R_{S1} + R_{S2} + \frac{1}{g_{m1} + g_{mb1}} + \frac{1}{g_{m2} + g_{mb2}}\right].$$

Hence

$$i_1 = \frac{\dfrac{g_{m1}}{g_{m1} + g_{mb1}}v_{in1} - \dfrac{g_{m2}}{g_{m2} + g_{mb2}}v_{in2}}{R_{S1} + R_{S2} + \dfrac{1}{g_{m1} + g_{mb1}} + \dfrac{1}{g_{m2} + g_{mb2}}} .$$

### Step 6 — Output voltage

Each drain current flows through its load resistor from $V_{DD}$ (AC ground), so by Ohm's law:

$$v_{D1} = -R_{D1}i_1, \qquad v_{D2} = -R_{D2}i_2 = +R_{D2}i_1 .$$

Therefore

$$v_{out} = v_{D1} - v_{D2} = -(R_{D1} + R_{D2})\,i_1,$$

$$V_{out} = -(R_{D1} + R_{D2})\,\frac{\dfrac{g_{m1}}{g_{m1} + g_{mb1}}V_{in1} - \dfrac{g_{m2}}{g_{m2} + g_{mb2}}V_{in2}}{R_{S1} + R_{S2} + \dfrac{1}{g_{m1} + g_{mb1}} + \dfrac{1}{g_{m2} + g_{mb2}}} .$$

Both load resistors appear because the *same* current $i_1$ leaves one side and enters the other.

### Step 7 — The gain $V_{out}/(V_{in1} - V_{in2})$

In general the output is not a function of $V_{in1} - V_{in2}$ alone: if $g_{m1}/(g_{m1} + g_{mb1}) \ne g_{m2}/(g_{m2} + g_{mb2})$, a common-mode input also produces some output. The gain is cleanly defined when the body-effect ratio is the same on both sides, $g_{mb1}/g_{m1} = g_{mb2}/g_{m2} = \eta$ (as for transistors sharing the same well and bias conditions). Then $g_m/(g_m + g_{mb}) = 1/(1 + \eta)$ on both sides, and

$$
\begin{aligned}
\frac{V_{out}}{V_{in1} - V_{in2}} &= -\frac{R_{D1} + R_{D2}}{1 + \eta}\cdot\frac{1}{R_{S1} + R_{S2} + \dfrac{1}{g_{m1}(1 + \eta)} + \dfrac{1}{g_{m2}(1 + \eta)}}\\
&= -\frac{R_{D1} + R_{D2}}{(1 + \eta)(R_{S1} + R_{S2}) + \dfrac{1}{g_{m1}} + \dfrac{1}{g_{m2}}} .
\end{aligned}
$$

**Checks:**

- *No body effect* ($\eta = 0$): $-\dfrac{R_{D1} + R_{D2}}{R_{S1} + R_{S2} + 1/g_{m1} + 1/g_{m2}}$.
- *Symmetric case* ($R_D$, $R_S$, $g_m$ equal on both sides): $-\dfrac{2R_D}{2(1 + \eta)R_S + 2/g_m} = -\dfrac{R_D}{(1 + \eta)R_S + 1/g_m}$, the familiar gain of a degenerated pair.
- *Effect of the body effect:* $\eta > 0$ **increases** the effective degeneration $(1 + \eta)(R_{S1} + R_{S2})$, so it **reduces** the gain.

*Numerical feel:* $g_{m1} = 1$ mS, $g_{m2} = 2$ mS, $\eta = 0.2$, $R_{S1} = 1\ \mathrm{k}\Omega$, $R_{S2} = 2\ \mathrm{k}\Omega$, $R_{D1} = 10\ \mathrm{k}\Omega$, $R_{D2} = 20\ \mathrm{k}\Omega$:

$$\frac{V_{out}}{V_{in1} - V_{in2}} = -\frac{30\ \mathrm{k}\Omega}{1.2\times3\ \mathrm{k}\Omega + 1\ \mathrm{k}\Omega + 0.5\ \mathrm{k}\Omega} = -\frac{30}{5.1} = -5.9 .$$

### Result

$$V_{out} = -(R_{D1} + R_{D2})\,\frac{\dfrac{g_{m1}}{g_{m1} + g_{mb1}}V_{in1} - \dfrac{g_{m2}}{g_{m2} + g_{mb2}}V_{in2}}{R_{S1} + R_{S2} + \dfrac{1}{g_{m1} + g_{mb1}} + \dfrac{1}{g_{m2} + g_{mb2}}},$$

and, with equal body-effect coefficients ($g_{mb}/g_m = \eta$ on both sides),

$$\frac{V_{out}}{V_{in1} - V_{in2}} = -\frac{R_{D1} + R_{D2}}{(1 + \eta)(R_{S1} + R_{S2}) + 1/g_{m1} + 1/g_{m2}} .$$

If the two sides have different $g_m/(g_m + g_{mb})$, a common-mode input also produces some output, so the ratio $V_{out}/(V_{in1} - V_{in2})$ is exact only for the equal-$\eta$ case or for a purely differential drive.

**Common mistake.** Treating P as an AC ground and analysing each side as a separate degenerated common-source stage. Without symmetry P moves. With the ideal tail it moves exactly enough to force $i_1 + i_2 = 0$, which is why both $R_S$'s and both $1/g_m$'s appear in one denominator.

**Common mistake.** Putting only one load resistor in the numerator. The current $i_1$ that flows down the left branch is the current that leaves the right branch ($i_2 = -i_1$), so the two drains move in opposite directions and $V_{out}$ involves $R_{D1} + R_{D2}$.

**Common mistake.** Giving $g_{mb}$ the wrong sign, so that the body effect increases the gain. With the bulk grounded, a rising source makes $v_{bs}$ negative, which reduces the drain current. The body effect therefore adds to the source "feedback", appearing as $g_m + g_{mb}$ in the source conductance and as $(1 + \eta)$ multiplying $R_S$.
