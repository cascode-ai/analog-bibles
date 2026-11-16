# Detailed solution - R484

**Approach.** At the zero $s_z$ the output is zero although the input is not, so the load ($R_L$, $C_L$) carries no current and KCL at the output involves only two currents, the transistor's and the compensation branch's. Requiring them to cancel gives $s_z$; the full transfer function confirms the result.

### Step 1 — Small-signal model

Call the gate of $M_9$ node E (voltage $V_E$); $C_E$ goes from E to $V_{DD}$, an ac ground. The compensation branch and the load have admittances

$$Y_c(s) = \frac{1}{R_z + \dfrac{1}{sC_C}} = \frac{sC_C}{1 + sR_zC_C}, \qquad G_L(s) = \frac{1}{R_L} + sC_L$$

(any output resistance of $M_9$ can be absorbed into $R_L$). $M_9$ is a PMOS with its source at ac ground, so its small-signal current *into* the output is $g_{m9}V_{SG} = -g_{m9}V_E$: raising its gate reduces the current it pushes into the output. All other capacitances of $M_9$ are neglected.

<!-- diagram: diagram-01.cir -->

### Step 2 — KCL at the output at the frequency of the zero

At $s = s_z$, $V_{out} = 0$ while $V_{in} \ne 0$. Then $V_E \ne 0$ as well: if both were zero, no current would flow in $C_E$ or in the branch, hence none in $R_S$, which would force $V_{in} = 0$. With $V_{out} = 0$ the currents in $R_L$ and $C_L$ vanish (the output acts as a short that carries no current, as in the hint), so only two currents remain at the output node. From the branch (E at $V_E$, output at 0 V):

$$I_c = \frac{V_E - 0}{R_z + 1/(sC_C)} = \frac{V_E}{R_z + 1/(sC_C)} ,$$

and from $M_9$, $-g_{m9}V_E$. KCL:

$$\frac{V_E}{R_z + 1/(sC_C)} - g_{m9}V_E = 0 .$$

### Step 3 — Solve for $s_z$

Divide by $V_E \ne 0$:

$$
\begin{aligned}
\frac{1}{R_z + \dfrac{1}{s_zC_C}} &= g_{m9}\\
R_z + \frac{1}{s_zC_C} &= \frac{1}{g_{m9}}\\
\frac{1}{s_zC_C} &= \frac{1}{g_{m9}} - R_z\\
s_z &= \frac{1}{C_C\left(g_{m9}^{-1} - R_z\right)} .
\end{aligned}
$$

This is the required result, $\omega_z = 1/[C_C(g_{m9}^{-1} - R_z)]$. With the problem's convention (numerator $\propto 1 - s/\omega_z$), $s_z = +\omega_z$, so a positive $\omega_z$ is a zero in the right half plane (RHP).

$R_S$, $C_E$, $R_L$ and $C_L$ never entered: they only relate $V_E$ to $V_{in}$ (a nonzero factor that cancels) or carry no current at the zero.

### Step 4 — Check with the full transfer function

**KCL at E** (current arriving through $R_S$ leaves through $C_E$ and the branch), with $G_S = 1/R_S$:

$$G_S(V_{in} - V_E) = sC_EV_E + Y_c(V_E - V_{out}). \tag{1}$$

**KCL at the output** (current in from the branch = current pulled by $M_9$ + current into the load):

$$Y_c(V_E - V_{out}) = g_{m9}V_E + G_LV_{out}. \tag{2}$$

From (2):

$$V_E\,(Y_c - g_{m9}) = V_{out}\,(Y_c + G_L) \quad\Longrightarrow\quad V_E = V_{out}\,\frac{Y_c + G_L}{Y_c - g_{m9}} .$$

Rewrite (1) as $G_SV_{in} = V_E(G_S + sC_E + Y_c) - Y_cV_{out}$ and substitute $V_E$:

$$
\begin{aligned}
G_SV_{in} &= V_{out}\left[\frac{(Y_c + G_L)(G_S + sC_E + Y_c)}{Y_c - g_{m9}} - Y_c\right]\\
\frac{V_{out}}{V_{in}} &= \frac{G_S\,(Y_c - g_{m9})}{(Y_c + G_L)(G_S + sC_E + Y_c) - Y_c(Y_c - g_{m9})} .
\end{aligned}
$$

In the denominator the $Y_c^2$ terms cancel:

$$\frac{V_{out}}{V_{in}} = \frac{G_S\,(Y_c - g_{m9})}{G_L(G_S + sC_E) + Y_c\,(G_S + sC_E + G_L + g_{m9})} .$$

Multiply the numerator and the denominator by $(1 + sR_zC_C)$, using $Y_c(1 + sR_zC_C) = sC_C$. The numerator becomes

$$
\begin{aligned}
G_S\left[sC_C - g_{m9}(1 + sR_zC_C)\right] &= G_S\left[-g_{m9} + sC_C(1 - g_{m9}R_z)\right]\\
&= -G_Sg_{m9}\left[1 - sC_C\left(\frac{1}{g_{m9}} - R_z\right)\right],
\end{aligned}
$$

and the denominator $G_L(G_S + sC_E)(1 + sR_zC_C) + sC_C(G_S + sC_E + G_L + g_{m9})$. Dividing both by $G_SG_L$ ($= 1/R_SR_L$, the denominator at $s = 0$):

$$\frac{V_{out}}{V_{in}} = -g_{m9}R_L\,\frac{1 - s/\omega_z}{D(s)}, \qquad \omega_z = \frac{1}{C_C\left(g_{m9}^{-1} - R_z\right)}, \qquad D(0) = 1 .$$

The DC gain is $-g_{m9}R_L$, and $R_S$, $C_E$, $R_L$, $C_L$ appear only in $D(s)$: they set the (three) poles, never the zero. Within this model the result is exact; the "≈" allows for the neglected capacitances of $M_9$ (for example, $C_{GD9}$ would add $sC_{GD9}$ to the feedforward admittance $Y_c$).

### Step 5 — Interpretation: moving the zero with $R_z$

The signal reaches the output through the **inverting** path through $M_9$ (current $-g_{m9}V_E$) and the **non-inverting feedforward** path through the compensation branch (current $Y_cV_E$); the zero is where they cancel exactly.

- **$R_z = 0$:** $\omega_z = g_{m9}/C_C$, a RHP zero, where $sC_C$ equals $g_{m9}$. It adds phase *lag* like a pole while raising the magnitude, which hurts the phase margin.
- **$0 < R_z < 1/g_{m9}$:** the RHP zero moves to higher frequencies.
- **$R_z = 1/g_{m9}$:** $g_{m9}^{-1} - R_z = 0$ and the zero moves to infinity; the branch admittance can never exceed $1/R_z = g_{m9}$, so the feedforward current never fully cancels the transistor current.
- **$R_z > 1/g_{m9}$:** $\omega_z < 0$, a zero in the **left half plane** at $s = -1/[C_C(R_z - g_{m9}^{-1})]$. It adds phase *lead* and can be placed on top of the output pole to cancel it.

### Result

At the zero, $V_{out} = 0$, so the load carries no current and KCL at the output gives $Y_c(s_z) = g_{m9}$, i.e. $R_z + 1/(s_zC_C) = 1/g_{m9}$:

$$\omega_z = \frac{1}{C_C\left(g_{m9}^{-1} - R_z\right)},$$

with $V_{out}/V_{in} = -g_{m9}R_L(1 - s/\omega_z)/D(s)$. The zero is in the RHP for $R_z < 1/g_{m9}$ (it reduces to $g_{m9}/C_C$ for $R_z = 0$), at infinity for $R_z = 1/g_{m9}$, and in the LHP for $R_z > 1/g_{m9}$. It does not depend on $R_S$, $C_E$, $R_L$ or $C_L$.

**Common mistake.** Getting the sign of the PMOS current wrong and writing $V_E/(R_z + 1/sC_C) + g_{m9}V_E = 0$, which leads to $1/[C_C(R_z + g_{m9}^{-1})]$. The feedforward current and the transistor current have opposite signs, which is why they can cancel.

**Common mistake.** Including $R_L$, $C_L$, $R_S$ or $C_E$ in the zero. At the zero the load carries no current and $R_S$, $C_E$ only scale $V_E$, so all four affect the poles only.

**Common mistake.** Believing that $R_z$ only shifts the poles. Its main purpose is to move the zero: it reduces the feedforward admittance of the branch, pushing the RHP zero to infinity ($R_z = 1/g_{m9}$) or into the LHP ($R_z > 1/g_{m9}$).
