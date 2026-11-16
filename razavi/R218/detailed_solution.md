# Detailed solution - R218

**Approach.** The result rests on **symmetry plus linearity**. Equal devices with equal loads, driven by equal and opposite input changes, respond with equal and opposite changes in every branch. A node that both halves share, such as P, can then only stay where it is. We explain this in three ways: an intuitive current argument showing why channel-length modulation does not spoil the balance, a Thevenin picture seen from P, and a short formal check. We also show why the equal loads are essential.

### Step 1 — The setting

From the figure: $D_1$ and $D_2$ are identical devices whose lower terminals meet at node P, which is biased by the tail source $I_T$. Their control voltages are $V_1 = V_{in1} - V_P$ and $V_2 = V_{in2} - V_P$, and their currents are $I_1$, $I_2$. Each upper terminal (drain) connects to the supply through an equal load resistor $R_D$; call the drains X and Y.

The inputs change differentially: $\Delta V_{in1} = +\Delta V_{in}$ and $\Delta V_{in2} = -\Delta V_{in}$. For small changes the circuit is linear, so every device is described by its small-signal model:

$$\Delta I = g_m\Delta V_{GS} + \frac{\Delta V_{DS}}{r_O},$$

where $r_O$ models channel-length modulation.

### Step 2 — Why the lemma holds without channel-length modulation (recap)

With $r_O = \infty$, $\Delta I_1 = g_m(\Delta V_{in} - \Delta V_P)$ and $\Delta I_2 = g_m(-\Delta V_{in} - \Delta V_P)$. KCL at P with a constant tail current requires $\Delta I_1 + \Delta I_2 = 0$:

$$-2g_m\Delta V_P = 0\quad\Longrightarrow\quad\Delta V_P = 0 .$$

The question is whether the new terms $\Delta V_{DS}/r_O$ can upset this.

### Step 3 — Intuitive argument with channel-length modulation

Suppose $I_1$ rises by $\delta$ and $I_2$ falls by $\delta$, which keeps the tail current constant. Then:

- **Drain of $D_1$:** the larger current makes X fall by $R_D\delta$. This lowers $V_{DS1}$, and through $r_O$ it slightly *reduces* $I_1$, by $(R_D\delta + \Delta V_P)/r_O$ if P were to move.
- **Drain of $D_2$:** the smaller current makes Y rise by $R_D\delta$. This raises $V_{DS2}$, and through $r_O$ it slightly *increases* $I_2$ by the same amount.

Because the loads are equal, these corrections are **equal and opposite**. They change $I_1$ and $I_2$ by the same amount in opposite directions, so the sum $I_1 + I_2$ stays equal to $I_T$ without any help from $V_P$. The drains move antisymmetrically ($\Delta V_X = -\Delta V_Y$), so whatever one side does to the shared node, the other side undoes exactly. Neither side "pulls" P, and P stays put.

### Step 4 — Thevenin picture seen from P

Look into the lower terminal of one half (device plus its load) from node P. A device with its gate at $v_{in}$ and its drain loaded by $R_D$ behaves, at its source, like a Thevenin source:

$$V_T = \frac{g_mr_O}{1 + g_mr_O}\,v_{in}, \qquad R_T = \frac{R_D + r_O}{1 + g_mr_O}.$$

*Derivation.* With source voltage $v_s$ and current $i$ flowing out of the source, $v_d = -R_Di$ and $i = g_m(v_{in} - v_s) + (v_d - v_s)/r_O$. Hence

$$
\begin{aligned}
i(r_O + R_D) &= g_mr_Ov_{in} - (1 + g_mr_O)v_s\\
i &= \frac{V_T - v_s}{R_T}, \qquad V_T = \frac{g_mr_O}{1 + g_mr_O}v_{in},\quad R_T = \frac{R_D + r_O}{1 + g_mr_O}.
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

Node P therefore sees two Thevenin sources, $V_{T1}$ and $V_{T2}$, each behind the **same** resistance $R_T$ (equal devices, equal loads), plus the tail. KCL at P, with the tail's small-signal current set to zero (ideal tail):

$$
\begin{aligned}
\frac{V_{T1} - v_P}{R_T} + \frac{V_{T2} - v_P}{R_T} &= 0\\
v_P &= \frac{V_{T1} + V_{T2}}{2}.
\end{aligned}
$$

For a differential input, $V_{T1} = -V_{T2}$, so $v_P = 0$. The tail source does not even need to be ideal: a finite tail resistance from P to ground only adds a term proportional to $v_P$ and still gives $v_P = 0$.

### Step 5 — Formal check

Let $\Delta V_X$, $\Delta V_Y$ be the drain changes. The device equations are:

$$
\begin{aligned}
\Delta I_1 &= g_m(\Delta V_{in} - \Delta V_P) + \frac{\Delta V_X - \Delta V_P}{r_O},\\
\Delta I_2 &= g_m(-\Delta V_{in} - \Delta V_P) + \frac{\Delta V_Y - \Delta V_P}{r_O}.
\end{aligned}
$$

The loads give $\Delta V_X = -R_D\Delta I_1$ and $\Delta V_Y = -R_D\Delta I_2$, so

$$\Delta V_X + \Delta V_Y = -R_D(\Delta I_1 + \Delta I_2) = 0$$

because the tail current is constant. Adding the two device equations:

$$
\begin{aligned}
\underbrace{\Delta I_1 + \Delta I_2}_{0} &= -2g_m\Delta V_P + \frac{\overbrace{\Delta V_X + \Delta V_Y}^{0} - 2\Delta V_P}{r_O}\\
0 &= -2\Delta V_P\left(g_m + \frac{1}{r_O}\right)\quad\Longrightarrow\quad\Delta V_P = 0 .
\end{aligned}
$$

### Step 6 — Why the equal loads matter

If the loads were unequal ($R_{D1} \ne R_{D2}$), the two Thevenin resistances $R_{T1} = (R_{D1} + r_O)/(1 + g_mr_O)$ and $R_{T2} = (R_{D2} + r_O)/(1 + g_mr_O)$ would differ. Then

$$v_P = \frac{V_{T1}/R_{T1} + V_{T2}/R_{T2}}{1/R_{T1} + 1/R_{T2}} \ne 0 \quad\text{for } V_{T1} = -V_{T2}.$$

Intuitively, the side with the larger load gets a larger drain swing, so its $r_O$ correction to the current is larger and the two corrections no longer cancel. With $r_O = \infty$ the loads drop out of the current equations and the lemma would hold regardless. With finite $r_O$, it is the **equality of the loads** that keeps $V_P$ fixed.

### Result

$V_P$ still does not change because the circuit remains **symmetric and linear**: equal devices with equal loads, driven by equal and opposite inputs, produce equal and opposite changes everywhere, and the shared node P, which lies on the symmetry axis, can only stay put.

- **Intuition.** When $I_1$ rises by $\delta$, the drain of $D_1$ falls by $R_D\delta$, which through $r_O$ slightly reduces $I_1$. On the other side $I_2$ falls by $\delta$ and its drain rises by $R_D\delta$, which slightly increases $I_2$. These corrections are equal and opposite, so $I_1 + I_2$ stays $I_T$ without any help from $V_P$.
- **Thevenin view.** From P, each half is a source $V_T = \dfrac{g_mr_O}{1 + g_mr_O}V_{in}$ behind $R_T = \dfrac{R_D + r_O}{1 + g_mr_O}$. With equal loads the two $R_T$ are equal and the two $V_T$ change by equal and opposite amounts, so $V_P$ is unchanged.
- **Equal loads are essential:** with unequal loads the two $R_T$ differ and P moves.

**Common mistake.** Claiming that $V_P$ must move once $\lambda \ne 0$ because the drain voltages now affect the currents. The drain voltages do affect the currents, but antisymmetrically, so the effects cancel in the sum $I_1 + I_2$ and at node P.

**Common mistake.** Arguing from drains that move in the *same* direction (a common-mode picture). For a differential input the drains move in *opposite* directions. Only then do the $r_O$ corrections cancel, which is the heart of the argument.

**Common mistake.** Leaving out the role of the loads. The argument needs the two Thevenin resistances seen from P to be equal; with unequal loads (and finite $r_O$) the cancellation fails and P moves.
