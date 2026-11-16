# Detailed solution - R209

**Approach.** Without symmetry the tail node P is **not** a virtual ground, so write the small-signal equations of the whole circuit: one current per branch, the node voltage $v_P$, the constraint from the ideal tail, and the transistor equations with body effect. Eliminating $v_P$ gives the branch current, and the two load resistors give the output.

### Step 1 — Unknowns and the tail constraint

Call the common node of $R_{S1}$, $R_{S2}$ and the tail P. The unknowns are $i_1$, $i_2$ (the small-signal drain currents flowing *down* through $M_1$, $M_2$), $v_P$, and the source voltages $v_{S1}$, $v_{S2}$; $V_{DD}$ is ac ground. With $\lambda = 0$ each transistor is $i_D = g_mv_{gs} + g_{mb}v_{bs}$, with $v_{bs} = -v_s$ since the bulks are grounded.

The tail is an **ideal** current source, so its small-signal current is zero and KCL at P gives

$$i_1 + i_2 = 0\quad\Longrightarrow\quad i_2 = -i_1 .$$

Unlike two separate common-source stages, $v_P$ is free to move, exactly as needed to keep the total current constant.

### Step 2 — Source voltages

$i_1$ flows from the source of $M_1$ through $R_{S1}$ into P, and $i_2$ through $R_{S2}$:

$$v_{S1} = v_P + i_1R_{S1}, \qquad v_{S2} = v_P + i_2R_{S2} = v_P - i_1R_{S2}.$$

### Step 3 — Transistor equations with body effect

For $M_1$, $v_{gs1} = v_{in1} - v_{S1}$ and $v_{bs1} = 0 - v_{S1}$, so

$$
\begin{aligned}
i_1 &= g_{m1}(v_{in1} - v_{S1}) + g_{mb1}(0 - v_{S1}) = g_{m1}v_{in1} - (g_{m1} + g_{mb1})v_{S1}\\
v_{S1} &= \frac{g_{m1}v_{in1} - i_1}{g_{m1} + g_{mb1}} .
\end{aligned}
$$

Likewise for $M_2$, using $i_2 = -i_1$:

$$v_{S2} = \frac{g_{m2}v_{in2} - i_2}{g_{m2} + g_{mb2}} = \frac{g_{m2}v_{in2} + i_1}{g_{m2} + g_{mb2}} .$$

The body effect enters as $g_m + g_{mb}$: a rising source also lowers $v_{bs}$, raising the threshold, so the source "fights back" more strongly than through $g_m$ alone.

### Step 4 — Eliminate $v_P$ and solve for $i_1$

Subtracting the two Step 2 equations removes $v_P$:

$$v_{S1} - v_{S2} = i_1(R_{S1} + R_{S2}).$$

With the Step 3 expressions on the left:

$$\frac{g_{m1}v_{in1} - i_1}{g_{m1} + g_{mb1}} - \frac{g_{m2}v_{in2} + i_1}{g_{m2} + g_{mb2}} = i_1(R_{S1} + R_{S2}),$$

$$\frac{g_{m1}}{g_{m1} + g_{mb1}}v_{in1} - \frac{g_{m2}}{g_{m2} + g_{mb2}}v_{in2} = i_1\left[R_{S1} + R_{S2} + \frac{1}{g_{m1} + g_{mb1}} + \frac{1}{g_{m2} + g_{mb2}}\right],$$

so

$$i_1 = \frac{\dfrac{g_{m1}}{g_{m1} + g_{mb1}}v_{in1} - \dfrac{g_{m2}}{g_{m2} + g_{mb2}}v_{in2}}{R_{S1} + R_{S2} + \dfrac{1}{g_{m1} + g_{mb1}} + \dfrac{1}{g_{m2} + g_{mb2}}} .$$

### Step 5 — Output voltage

Each drain current flows through its load resistor from $V_{DD}$, so

$$v_{D1} = -R_{D1}i_1, \qquad v_{D2} = -R_{D2}i_2 = +R_{D2}i_1 ,$$

$$v_{out} = v_{D1} - v_{D2} = -(R_{D1} + R_{D2})\,i_1,$$

$$V_{out} = -(R_{D1} + R_{D2})\,\frac{\dfrac{g_{m1}}{g_{m1} + g_{mb1}}V_{in1} - \dfrac{g_{m2}}{g_{m2} + g_{mb2}}V_{in2}}{R_{S1} + R_{S2} + \dfrac{1}{g_{m1} + g_{mb1}} + \dfrac{1}{g_{m2} + g_{mb2}}} .$$

Both load resistors appear because the *same* current $i_1$ leaves one side and enters the other.

### Step 6 — The gain $V_{out}/(V_{in1} - V_{in2})$

If $g_{m1}/(g_{m1} + g_{mb1}) \ne g_{m2}/(g_{m2} + g_{mb2})$, a common-mode input also produces some output, so the output is not a function of $V_{in1} - V_{in2}$ alone. The gain is cleanly defined when the body-effect ratio is the same on both sides, $g_{mb1}/g_{m1} = g_{mb2}/g_{m2} = \eta$ (transistors sharing the same well and bias conditions). Then $g_m/(g_m + g_{mb}) = 1/(1 + \eta)$ on both sides, and

$$
\begin{aligned}
\frac{V_{out}}{V_{in1} - V_{in2}} &= -\frac{R_{D1} + R_{D2}}{1 + \eta}\cdot\frac{1}{R_{S1} + R_{S2} + \dfrac{1}{g_{m1}(1 + \eta)} + \dfrac{1}{g_{m2}(1 + \eta)}}\\
&= -\frac{R_{D1} + R_{D2}}{(1 + \eta)(R_{S1} + R_{S2}) + \dfrac{1}{g_{m1}} + \dfrac{1}{g_{m2}}} .
\end{aligned}
$$

**Checks:**

- *No body effect* ($\eta = 0$): $-\dfrac{R_{D1} + R_{D2}}{R_{S1} + R_{S2} + 1/g_{m1} + 1/g_{m2}}$.
- *Symmetric case* ($R_D$, $R_S$, $g_m$ equal on both sides): $-\dfrac{2R_D}{2(1 + \eta)R_S + 2/g_m} = -\dfrac{R_D}{(1 + \eta)R_S + 1/g_m}$, the familiar degenerated-pair gain.
- *Body effect:* $\eta > 0$ **increases** the effective degeneration $(1 + \eta)(R_{S1} + R_{S2})$, so it **reduces** the gain.

*Numerical feel:* $g_{m1} = 1$ mS, $g_{m2} = 2$ mS, $\eta = 0.2$, $R_{S1} = 1\ \mathrm{k}\Omega$, $R_{S2} = 2\ \mathrm{k}\Omega$, $R_{D1} = 10\ \mathrm{k}\Omega$, $R_{D2} = 20\ \mathrm{k}\Omega$:

$$\frac{V_{out}}{V_{in1} - V_{in2}} = -\frac{30\ \mathrm{k}\Omega}{1.2\times3\ \mathrm{k}\Omega + 1\ \mathrm{k}\Omega + 0.5\ \mathrm{k}\Omega} = -\frac{30}{5.1} = -5.9 .$$

### Result

$$V_{out} = -(R_{D1} + R_{D2})\,\frac{\dfrac{g_{m1}}{g_{m1} + g_{mb1}}V_{in1} - \dfrac{g_{m2}}{g_{m2} + g_{mb2}}V_{in2}}{R_{S1} + R_{S2} + \dfrac{1}{g_{m1} + g_{mb1}} + \dfrac{1}{g_{m2} + g_{mb2}}},$$

and, with equal body-effect coefficients ($g_{mb}/g_m = \eta$ on both sides),

$$\frac{V_{out}}{V_{in1} - V_{in2}} = -\frac{R_{D1} + R_{D2}}{(1 + \eta)(R_{S1} + R_{S2}) + 1/g_{m1} + 1/g_{m2}} .$$

If the two sides have different $g_m/(g_m + g_{mb})$, a common-mode input also produces some output, so the ratio $V_{out}/(V_{in1} - V_{in2})$ is exact only for the equal-$\eta$ case or for a purely differential drive.

**Common mistake.** Treating P as an ac ground and analysing each side as a separate degenerated common-source stage. Without symmetry P moves, exactly enough to force $i_1 + i_2 = 0$, which is why both $R_S$'s and both $1/g_m$'s appear in one denominator.

**Common mistake.** Putting only one load resistor in the numerator. The current $i_1$ down the left branch is the current that leaves the right branch ($i_2 = -i_1$), so $V_{out}$ involves $R_{D1} + R_{D2}$.

**Common mistake.** Giving $g_{mb}$ the wrong sign, so that the body effect increases the gain. With the bulk grounded, a rising source makes $v_{bs}$ negative and reduces the drain current, so the body effect appears as $(1 + \eta)$ multiplying $R_S$.
