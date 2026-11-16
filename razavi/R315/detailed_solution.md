# Detailed solution - R315

**Approach.** Short the output to ac ground, compute the current the rest of the circuit pushes into the short, and find the $s$ at which it vanishes. Then confirm the zero with the complete transfer function.

### Step 1 — Branch equations

$M_4$ (source at $V_{DD}$, gate at E) carries $g_{mP}V_E$ from the output to ac ground, i.e. it delivers $-g_{mP}V_E$ **into** the output. In the Thevenin branch, going from the output through the "+" and "−" terminals of $V_X = g_{mN}r_{ON}V_{in}$ and then $R_X = 2r_{ON}$ to E, let $I_X$ flow **from the output toward E**. KVL along the branch:

$$V_E = V_{out} - V_X - I_XR_X . \qquad (1)$$

### Step 2 — Short the output and analyse node E

With $V_{out} = 0$, $C_L$ and $r_{OP}$ carry no current.

<!-- diagram: diagram-01.cir -->

Node E sees $1/g_{mP}$ and $C_E$ to ground (the gate of $M_4$ draws nothing), so

$$Z_E = \frac{1}{g_{mP} + C_Es}, \qquad I_X = \frac{V_E}{Z_E}. \qquad (2)$$

Solving (1) and (2) with $V_{out} = 0$:

$$
\begin{aligned}
V_E &= -V_X - R_X\frac{V_E}{Z_E}\\
V_E\left(1 + \frac{R_X}{Z_E}\right) &= -V_X\\
V_E &= -V_X\,\frac{Z_E}{Z_E + R_X},\qquad I_X = \frac{V_E}{Z_E} = -\frac{V_X}{Z_E + R_X}.
\end{aligned}
$$

$V_X$ drives the series combination $R_X + Z_E$, and E gets the divided fraction of $-V_X$.

### Step 3 — Current into the short

$M_4$ delivers $-g_{mP}V_E$ and the branch delivers $-I_X$ ($I_X$ flows *out of* the output):

$$
\begin{aligned}
I_{short} &= -g_{mP}V_E - I_X\\
&= g_{mP}V_X\,\frac{Z_E}{Z_E + R_X} + \frac{V_X}{Z_E + R_X}\\
&= V_X\,\frac{g_{mP}Z_E + 1}{Z_E + R_X}.
\end{aligned}
$$

### Step 4 — Set the short-circuit current to zero

For $V_X\ne0$, $I_{short} = 0$ requires

$$g_{mP}Z_E + 1 = 0\quad\Longleftrightarrow\quad\frac{g_{mP}}{g_{mP} + C_Es} = -1 ,$$

$$
\begin{aligned}
g_{mP} &= -g_{mP} - C_Es\\
C_Es &= -2g_{mP}\\
s_z &= -\frac{2g_{mP}}{C_E}.
\end{aligned}
$$

The zero is real and negative: a **left-half-plane zero** at twice the mirror-pole frequency $\omega_E = g_{mP}/C_E$.

The signal reaches the output by two paths that add: a **fast path** straight through the branch, contributing $V_X/(Z_E + R_X)$ to $I_{short}$, and a **slow path** in which the same branch current develops $V_E$ across $Z_E$ and $M_4$ copies it, contributing $g_{mP}Z_E = 1/(1 + s/\omega_E)$ times as much. The total, proportional to $1 + \dfrac{1}{1 + s/\omega_E}$, vanishes when $1 + s/\omega_E = -1$, i.e. at $s = -2\omega_E$. At low frequency the mirror doubles the output current; at high frequency $C_E$ kills the mirror path.

### Step 5 — Check with the full transfer function

Keep $V_{out}$, and let $Y_E = g_{mP} + C_Es$ and $Y_L = C_Ls + 1/r_{OP}$. From (1) and (2), $V_E(1 + R_XY_E) = V_{out} - V_X$. KCL at the output (the currents from $M_4$ and the branch flow into $Y_L$):

$$-g_{mP}V_E - I_X = Y_LV_{out}\quad\Longrightarrow\quad -(g_{mP} + Y_E)V_E = Y_LV_{out}.$$

Substituting $V_E = (V_{out} - V_X)/(1 + R_XY_E)$:

$$
\begin{aligned}
-(g_{mP} + Y_E)(V_{out} - V_X) &= Y_L(1 + R_XY_E)V_{out}\\
\frac{V_{out}}{V_X} &= \frac{g_{mP} + Y_E}{Y_L(1 + R_XY_E) + g_{mP} + Y_E} = \frac{2g_{mP} + C_Es}{Y_L(1 + R_XY_E) + 2g_{mP} + C_Es}.
\end{aligned}
$$

The numerator $2g_{mP} + C_Es$ vanishes at $s = -2g_{mP}/C_E$, confirming the short-circuit method; $V_X = g_{mN}r_{ON}V_{in}$, so $V_{out}/V_{in}$ has the same zero.

### Result

$$s_z = -\frac{2g_{mP}}{C_E}$$

The zero lies in the left half plane, at twice the magnitude of the mirror pole $g_{mP}/C_E$. It arises because the direct path through $R_X$ and the mirror path through $M_4$ add at the output, and their sum, proportional to $1 + 1/(1 + sC_E/g_{mP})$, vanishes at $s = -2g_{mP}/C_E$.

**Common mistake.** Placing the zero in the right half plane, as for the feedforward zero $+g_m/C_{GD}$ of a common-source stage. Here the two paths add with the **same** sign at low frequency, so they cancel only where the mirror path's response is negative real, i.e. at a negative real $s$.

**Common mistake.** Quoting the zero at $g_{mP}/C_E$ (the mirror pole) or at $1/(R_XC_E)$. The condition $g_{mP}Z_E = -1$ gives $2g_{mP}/C_E$; $R_X$ cancels because both contributions are carried by the same branch current $V_X/(Z_E + R_X)$.

**Common mistake.** Forgetting the branch current $-I_X$ in the short. With only $M_4$'s current, $-g_{mP}V_E$, the short-circuit current never vanishes for finite $s$, wrongly suggesting that there is no zero.
