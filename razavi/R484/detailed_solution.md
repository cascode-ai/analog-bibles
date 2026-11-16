# Detailed solution - R484

**Approach.** A zero of $V_{out}/V_{in}$ is a complex frequency $s_z$ at which the output is zero although the input is not. At that frequency the output node is at zero volts, so the load ($R_L$, $C_L$) carries no current and Kirchhoff's current law (KCL) at the output involves only two currents: the transistor's and the compensation branch's. Requiring them to cancel gives $s_z$. We then confirm the result from the full transfer function.

### Step 1 — Small-signal model

Reading the figure, and naming the gate of $M_9$ node E (voltage $V_E$):

- The first stage is represented by the source $V_{in}$ in series with $R_S$, driving node E.
- $C_E$ connects node E to $V_{DD}$, which is an AC ground.
- $M_9$ is a PMOS common-source device: source at $V_{DD}$ (AC ground), gate at E, drain at the output.
- The compensation branch, $R_z$ in series with $C_C$, connects E to the output. Its admittance is
$$Y_c(s) = \frac{1}{R_z + \dfrac{1}{sC_C}} = \frac{sC_C}{1 + sR_zC_C}.$$
- $R_L$ and $C_L$ load the output; their admittance is $G_L(s) = 1/R_L + sC_L$. (Any output resistance of $M_9$ can be absorbed into $R_L$.)

**The transistor.** With its source at AC ground, $M_9$ is a transconductance controlled by $V_{SG} = 0 - V_E$. Its small-signal drain current flowing *into* the output node is $g_{m9}V_{SG} = -g_{m9}V_E$; equivalently, $M_9$ pulls a current $g_{m9}V_E$ *out of* the output node (raising the gate of a PMOS reduces the current it pushes into the output). All other capacitances of $M_9$ are neglected.

<!-- diagram: diagram-01.cir -->

### Step 2 — What happens at the frequency of the zero

At $s = s_z$, $V_{out} = 0$ while $V_{in} \ne 0$. The gate voltage $V_E$ is then nonzero as well: if both $V_E$ and $V_{out}$ were zero, no current would flow in $C_E$ or in the compensation branch, hence none in $R_S$, which would force $V_{in} = 0$.

With $V_{out} = 0$:

- the current in $R_L$ is $V_{out}/R_L = 0$ and the current in $C_L$ is $sC_LV_{out} = 0$;
- equivalently, the output behaves as if it were shorted to ground, and the current flowing into that short must be zero (the hint).

So the only currents at the output node are the transistor current and the compensation-branch current.

### Step 3 — KCL at the output node

Current entering the output from the compensation branch (from E, at $V_E$, to the output, at 0 V):

$$I_c = \frac{V_E - 0}{R_z + 1/(sC_C)} = \frac{V_E}{R_z + 1/(sC_C)} .$$

Current entering the output from $M_9$: $-g_{m9}V_E$.

KCL (sum of currents entering the node = current leaving through the load = 0):

$$\frac{V_E}{R_z + 1/(sC_C)} - g_{m9}V_E = 0 .$$

### Step 4 — Solve for $s_z$

Divide by $V_E$ (allowed, since $V_E \ne 0$):

$$
\begin{aligned}
\frac{1}{R_z + \dfrac{1}{s_zC_C}} &= g_{m9}\\
R_z + \frac{1}{s_zC_C} &= \frac{1}{g_{m9}}\\
\frac{1}{s_zC_C} &= \frac{1}{g_{m9}} - R_z\\
s_z &= \frac{1}{C_C\left(g_{m9}^{-1} - R_z\right)} .
\end{aligned}
$$

This is the required result, $\omega_z = 1/[C_C(g_{m9}^{-1} - R_z)]$. With the sign convention of the problem (numerator $\propto 1 - s/\omega_z$), $s_z = +\omega_z$, so a positive $\omega_z$ is a zero in the right half plane (RHP).

Notice that $R_S$, $C_E$, $R_L$ and $C_L$ never entered the calculation: they only relate $V_E$ to $V_{in}$ (a nonzero factor that cancels) or carry no current at the zero.

### Step 5 — Check with the full transfer function

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

Expanding the denominator, the $Y_c^2$ terms cancel:

$$\frac{V_{out}}{V_{in}} = \frac{G_S\,(Y_c - g_{m9})}{G_L(G_S + sC_E) + Y_c\,(G_S + sC_E + G_L + g_{m9})} .$$

Multiply the numerator and the denominator by $(1 + sR_zC_C)$, using $Y_c(1 + sR_zC_C) = sC_C$. The numerator becomes

$$
\begin{aligned}
G_S\left[sC_C - g_{m9}(1 + sR_zC_C)\right] &= G_S\left[-g_{m9} + sC_C(1 - g_{m9}R_z)\right]\\
&= -G_Sg_{m9}\left[1 - sC_C\left(\frac{1}{g_{m9}} - R_z\right)\right],
\end{aligned}
$$

and the denominator becomes $G_L(G_S + sC_E)(1 + sR_zC_C) + sC_C(G_S + sC_E + G_L + g_{m9})$. Dividing both by $G_SG_L$ ($= 1/R_SR_L$, the value of the denominator at $s = 0$):

$$\frac{V_{out}}{V_{in}} = -g_{m9}R_L\,\frac{1 - s/\omega_z}{D(s)}, \qquad \omega_z = \frac{1}{C_C\left(g_{m9}^{-1} - R_z\right)}, \qquad D(0) = 1 .$$

The DC gain is $-g_{m9}R_L$, as expected for a common-source stage. $R_S$, $C_E$, $R_L$ and $C_L$ appear only in $D(s)$, i.e. they set the (three) poles, never the zero. Within this model the result is exact; the "≈" in the problem allows for the neglected capacitances of $M_9$ (for example $C_{GD9}$ would add $sC_{GD9}$ to the feedforward admittance $Y_c$).

### Step 6 — Interpretation: moving the zero with $R_z$

The signal reaches the output through two paths: the **inverting** path through $M_9$ (current $-g_{m9}V_E$) and the **non-inverting feedforward** path through the compensation branch (current $Y_cV_E$). The zero is the frequency at which they cancel exactly.

- **$R_z = 0$:** $\omega_z = g_{m9}/C_C$, a RHP zero. The feedforward admittance $sC_C$ equals $g_{m9}$ at that frequency. A RHP zero adds phase *lag* like a pole while raising the magnitude, which hurts the phase margin.
- **$0 < R_z < 1/g_{m9}$:** the RHP zero moves to higher frequencies ($\omega_z > 0$, larger).
- **$R_z = 1/g_{m9}$:** the denominator $g_{m9}^{-1} - R_z$ vanishes and the zero moves to infinity. The branch admittance can never exceed $1/R_z = g_{m9}$, so the feedforward current never fully cancels the transistor current.
- **$R_z > 1/g_{m9}$:** $\omega_z < 0$, i.e. a zero in the **left half plane** at $s = -1/[C_C(R_z - g_{m9}^{-1})]$. It adds phase *lead* and can be placed on top of the output pole to cancel it.

### Result

At the zero, $V_{out} = 0$, so the load carries no current and KCL at the output gives $Y_c(s_z) = g_{m9}$, i.e. $R_z + 1/(s_zC_C) = 1/g_{m9}$:

$$\omega_z = \frac{1}{C_C\left(g_{m9}^{-1} - R_z\right)},$$

with $V_{out}/V_{in} = -g_{m9}R_L(1 - s/\omega_z)/D(s)$. The zero is in the RHP for $R_z < 1/g_{m9}$ (it reduces to $g_{m9}/C_C$ for $R_z = 0$), at infinity for $R_z = 1/g_{m9}$, and in the LHP for $R_z > 1/g_{m9}$. It does not depend on $R_S$, $C_E$, $R_L$ or $C_L$.

**Common mistake.** Getting the sign of the PMOS current wrong and writing $V_E/(R_z + 1/sC_C) + g_{m9}V_E = 0$, which leads to $1/[C_C(R_z + g_{m9}^{-1})]$. Raising the gate of $M_9$ *reduces* the current it pushes into the output, so its contribution is $-g_{m9}V_E$; the feedforward current and the transistor current have opposite signs, which is why they can cancel.

**Common mistake.** Including $R_L$, $C_L$, $R_S$ or $C_E$ in the zero. At the zero the output voltage is zero, so the load carries no current, and $R_S$, $C_E$ only scale $V_E$; all four affect the poles only.

**Common mistake.** Believing that $R_z$ only shifts the poles. Its main purpose is to move the zero: it reduces the feedforward admittance of the compensation branch, pushing the RHP zero to infinity ($R_z = 1/g_{m9}$) or into the LHP ($R_z > 1/g_{m9}$).
