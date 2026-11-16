# Detailed solution - R223

**Approach.** Replace the two ideal current sources by open circuits and apply KCL at each node. The drain of $M_1$ connects only to the ideal source $I_1$, so the small-signal current of $M_1$ is zero. This forces the current of $M_2$ to zero as well, which fixes $v_{out2}$, then $v_P$, and finally $v_{out1}$.

### Step 1 — Bias point and small-signal model

Call the common source node P. The only current that can flow into $M_1$ is $I_1$, so $I_{D1} = I_1$, and KCL at P gives

$$I_{D2} = I_{SS} - I_1 ,$$

which requires $I_1 < I_{SS}$. The two currents generally differ, so the devices have different parameters:

$$g_{m1} = \sqrt{2\mu_nC_{ox}(W/L)_1I_1}, \quad r_{O1} = \frac{1}{\lambda I_1}, \qquad g_{m2} = \sqrt{2\mu_nC_{ox}(W/L)_2(I_{SS} - I_1)}, \quad r_{O2} = \frac{1}{\lambda(I_{SS} - I_1)} .$$

Both transistors are saturated; $V_{out1}$ is a high-impedance node that settles wherever $M_1$ carries exactly $I_1$.

In the small-signal model $V_{DD}$ and $V_b$ are ac ground and $I_1$, $I_{SS}$ are open circuits. With the bulks at ground, the controlling voltages are

$$
\begin{aligned}
M_1:&\quad v_{gs1} = v_{in} - v_P, & v_{bs1} &= -v_P,\\
M_2:&\quad v_{gs2} = 0 - v_P = -v_P, & v_{bs2} &= -v_P .
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

The drain-to-source small-signal currents are

$$
\begin{aligned}
i_1 &= g_{m1}(v_{in} - v_P) - g_{mb1}v_P + \frac{v_{out1} - v_P}{r_{O1}},\\
i_2 &= -g_{m2}v_P - g_{mb2}v_P + \frac{v_{out2} - v_P}{r_{O2}} .
\end{aligned}
$$

### Step 2 — KCL: no signal current flows, so $v_{out2} = 0$

**At $V_{out1}$.** The only current feeding the node comes from $I_1$, whose small-signal value is zero, so $i_1 = 0$: the input cannot change the current of $M_1$, because an ideal current source is in series with it.

**At P.** The open tail takes nothing:

$$i_1 + i_2 = 0 \quad\Longrightarrow\quad i_2 = -i_1 = 0 .$$

**At $V_{out2}$.** The current drawn by $M_2$ comes from ac ground through $R_1$:

$$\frac{0 - v_{out2}}{R_1} = i_2 \quad\Longrightarrow\quad v_{out2} = -R_1i_2 = 0, \qquad \frac{V_{out2}}{V_{in}} = 0 .$$

### Step 3 — Node P does not move

With $v_{out2} = 0$ and $i_2 = 0$, the current equation of $M_2$ gives

$$0 = -g_{m2}v_P - g_{mb2}v_P + \frac{0 - v_P}{r_{O2}} = -\left(g_{m2} + g_{mb2} + \frac{1}{r_{O2}}\right)v_P .$$

The bracket is positive, so

$$v_P = 0 .$$

$M_2$ has a fixed gate voltage, drain voltage and current, so its source cannot move either: P is a true ac ground, though not for the usual differential-symmetry reason.

### Step 4 — Gain to $V_{out1}$

With $v_P = 0$ and $i_1 = 0$, the current equation of $M_1$ gives

$$0 = g_{m1}(v_{in} - 0) - g_{mb1}\cdot0 + \frac{v_{out1} - 0}{r_{O1}} = g_{m1}v_{in} + \frac{v_{out1}}{r_{O1}} ,$$

$$v_{out1} = -g_{m1}r_{O1}\,v_{in}, \qquad \frac{V_{out1}}{V_{in}} = -g_{m1}r_{O1} ,$$

the **intrinsic gain** of $M_1$: since $I_1$ fixes its current, $V_{DS1}$ must fall until channel-length modulation cancels the increase, $g_{m1}v_{in} = -v_{out1}/r_{O1}$. $M_1$ acts as a common-source stage with its source at ac ground and an ideal current-source load.

**Body effect plays no role**, since both $g_{mb}$ terms multiply $v_P = 0$. The finite $\lambda$ is essential: with $r_{O1} \to \infty$ the equation would read $0 = g_{m1}v_{in}$, with no solution for $v_{in} \neq 0$ (unbounded gain; in practice $V_{out1}$ would hit a rail).

### Step 5 — Check by solving all equations together

$$
\begin{aligned}
i_1 &= 0, \qquad i_1 + i_2 = 0, \qquad v_{out2} = -R_1i_2,\\
i_1 &= g_{m1}(v_{in} - v_P) - g_{mb1}v_P + (v_{out1} - v_P)/r_{O1},\\
i_2 &= -(g_{m2} + g_{mb2})v_P + (v_{out2} - v_P)/r_{O2} .
\end{aligned}
$$

These five linear equations have the unique solution $i_1 = i_2 = 0$, $v_{out2} = 0$, $v_P = 0$, $v_{out1} = -g_{m1}r_{O1}v_{in}$, confirming Steps 2–4.

### Result

$$\frac{V_{out1}}{V_{in}} = -g_{m1}r_{O1}, \qquad \frac{V_{out2}}{V_{in}} = 0 .$$

The ideal source $I_1$ forces the signal current of $M_1$ to zero, and the ideal tail then forces the signal current of $M_2$ to zero. So $V_{out2}$ does not move, P does not move (body effect is irrelevant), and $V_{out1}$ shows the intrinsic gain of $M_1$.

**Common mistake.** Treating the circuit as a standard differential pair and writing $V_{out2}/V_{in} = g_mR_1/2$ or another nonzero value. $I_1$ blocks any change in the current of $M_1$, so with an ideal tail no current can be steered into $M_2$.

**Common mistake.** Writing $V_{out1}/V_{in} = -g_{m1}r_{O1}/2$ with a "virtual ground" half circuit. P is at ac ground because $M_2$'s current, gate and drain are all fixed, and the input is not split between two halves.

**Common mistake.** Declaring $V_{out1}/V_{in}$ infinite because the load is an ideal current source; that holds only for $\lambda = 0$. Also avoid $-(1 + g_{m1}r_{O1})$: the "$+1$" appears only when the input drives the *source*.
