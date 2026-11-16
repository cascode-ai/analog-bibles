# Detailed solution - R218

**Approach.** The result rests on **symmetry plus linearity**: equal devices with equal loads, driven by equal and opposite input changes, respond with equal and opposite changes in every branch, so a node both halves share, such as P, can only stay where it is. Three views make this concrete (an intuitive current argument, a Thevenin picture seen from P, and a short formal check), and a fourth shows why the equal loads are essential.

### Step 1 — The setting

Call the upper terminals (drains) of $D_1$ and $D_2$ X and Y, each tied to the supply through $R_D$, and the device currents $I_1$, $I_2$. The inputs change by $\Delta V_{in1} = +\Delta V_{in}$ and $\Delta V_{in2} = -\Delta V_{in}$; for small changes each device obeys

$$\Delta I = g_m\Delta V_{GS} + \frac{\Delta V_{DS}}{r_O}.$$

With $r_O = \infty$, $\Delta I_1 = g_m(\Delta V_{in} - \Delta V_P)$ and $\Delta I_2 = g_m(-\Delta V_{in} - \Delta V_P)$, and the constant tail current requires $\Delta I_1 + \Delta I_2 = 0$:

$$-2g_m\Delta V_P = 0\quad\Longrightarrow\quad\Delta V_P = 0 .$$

The question is whether the terms $\Delta V_{DS}/r_O$ can upset this.

### Step 2 — Intuitive argument with channel-length modulation

Suppose $I_1$ rises by $\delta$ and $I_2$ falls by $\delta$, keeping the tail current constant.

- **Drain of $D_1$:** X falls by $R_D\delta$, which lowers $V_{DS1}$ and, through $r_O$, slightly *reduces* $I_1$, by $(R_D\delta + \Delta V_P)/r_O$ if P were to move.
- **Drain of $D_2$:** Y rises by $R_D\delta$, which raises $V_{DS2}$ and slightly *increases* $I_2$ by the same amount.

With equal loads these corrections are **equal and opposite**, so $I_1 + I_2$ stays equal to $I_T$ without any help from $V_P$. The drains move antisymmetrically ($\Delta V_X = -\Delta V_Y$), so whatever one side does to the shared node, the other undoes exactly, and P stays put.

### Step 3 — Thevenin picture seen from P

Looking into the lower terminal of one half (device plus load) from P: with source voltage $v_s$ and current $i$ flowing out of the source, $v_d = -R_Di$ and $i = g_m(v_{in} - v_s) + (v_d - v_s)/r_O$, so

$$
\begin{aligned}
i(r_O + R_D) &= g_mr_Ov_{in} - (1 + g_mr_O)v_s\\
i &= \frac{V_T - v_s}{R_T}, \qquad V_T = \frac{g_mr_O}{1 + g_mr_O}v_{in},\quad R_T = \frac{R_D + r_O}{1 + g_mr_O}.
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

P therefore sees two Thevenin sources, $V_{T1}$ and $V_{T2}$, each behind the **same** $R_T$ (equal devices, equal loads), plus the tail. KCL at P with the ideal tail's small-signal current set to zero:

$$
\begin{aligned}
\frac{V_{T1} - v_P}{R_T} + \frac{V_{T2} - v_P}{R_T} &= 0\\
v_P &= \frac{V_{T1} + V_{T2}}{2}.
\end{aligned}
$$

For a differential input $V_{T1} = -V_{T2}$, so $v_P = 0$. Even a finite tail resistance from P to ground only adds a term proportional to $v_P$ and still gives $v_P = 0$.

### Step 4 — Formal check

The device equations are

$$
\begin{aligned}
\Delta I_1 &= g_m(\Delta V_{in} - \Delta V_P) + \frac{\Delta V_X - \Delta V_P}{r_O},\\
\Delta I_2 &= g_m(-\Delta V_{in} - \Delta V_P) + \frac{\Delta V_Y - \Delta V_P}{r_O},
\end{aligned}
$$

and the loads give $\Delta V_X = -R_D\Delta I_1$, $\Delta V_Y = -R_D\Delta I_2$, so with a constant tail current

$$\Delta V_X + \Delta V_Y = -R_D(\Delta I_1 + \Delta I_2) = 0 .$$

Adding the two device equations:

$$
\begin{aligned}
\underbrace{\Delta I_1 + \Delta I_2}_{0} &= -2g_m\Delta V_P + \frac{\overbrace{\Delta V_X + \Delta V_Y}^{0} - 2\Delta V_P}{r_O}\\
0 &= -2\Delta V_P\left(g_m + \frac{1}{r_O}\right)\quad\Longrightarrow\quad\Delta V_P = 0 .
\end{aligned}
$$

### Step 5 — Why the equal loads matter

With $R_{D1} \ne R_{D2}$, the Thevenin resistances $R_{T1} = (R_{D1} + r_O)/(1 + g_mr_O)$ and $R_{T2} = (R_{D2} + r_O)/(1 + g_mr_O)$ differ, and

$$v_P = \frac{V_{T1}/R_{T1} + V_{T2}/R_{T2}}{1/R_{T1} + 1/R_{T2}} \ne 0 \quad\text{for } V_{T1} = -V_{T2}.$$

The side with the larger load has the larger drain swing, so its $r_O$ correction is larger and the two no longer cancel. With $r_O = \infty$ the loads drop out of the current equations and the lemma holds regardless; with finite $r_O$, it is the **equality of the loads** that keeps $V_P$ fixed.

### Result

$V_P$ still does not change because the circuit remains **symmetric and linear**: equal devices with equal loads, driven by equal and opposite inputs, produce equal and opposite changes everywhere, and the shared node P, which lies on the symmetry axis, can only stay put.

- **Intuition.** When $I_1$ rises by $\delta$, the drain of $D_1$ falls by $R_D\delta$, which through $r_O$ slightly reduces $I_1$. On the other side $I_2$ falls by $\delta$ and its drain rises by $R_D\delta$, which slightly increases $I_2$. These corrections are equal and opposite, so $I_1 + I_2$ stays $I_T$ without any help from $V_P$.
- **Thevenin view.** From P, each half is a source $V_T = \dfrac{g_mr_O}{1 + g_mr_O}V_{in}$ behind $R_T = \dfrac{R_D + r_O}{1 + g_mr_O}$. With equal loads the two $R_T$ are equal and the two $V_T$ change by equal and opposite amounts, so $V_P$ is unchanged.
- **Equal loads are essential:** with unequal loads the two $R_T$ differ and P moves.

**Common mistake.** Claiming that $V_P$ must move once $\lambda \ne 0$ because the drain voltages now affect the currents. They do, but antisymmetrically, so the effects cancel in $I_1 + I_2$ and at P.

**Common mistake.** Arguing from drains that move in the *same* direction (a common-mode picture). For a differential input they move in *opposite* directions, which is what makes the $r_O$ corrections cancel.

**Common mistake.** Leaving out the role of the loads. The argument needs equal Thevenin resistances seen from P; with unequal loads and finite $r_O$ the cancellation fails and P moves.
