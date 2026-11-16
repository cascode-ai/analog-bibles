# Detailed solution - R315

**Approach.** A zero of $V_{out}/V_{in}$ is a complex frequency $s_z$ at which the output is zero even though the input is not. Equivalently, if the output node is shorted to ac ground, no current flows into the short at $s = s_z$. So we short the output, compute the current that the rest of the circuit pushes into the short, and find where it vanishes. We then confirm the result with the complete transfer function.

### Step 1 — Reading the small-signal circuit

From the figure:

- **Node E** (the mirror node, gate of $M_4$): connected to $V_{DD}$ (ac ground) through the resistance $1/g_{mP}$, which models the diode-connected $M_3$, and to ground through $C_E$.
- **$M_4$** (PMOS): source at $V_{DD}$, gate at E, drain at the output. It carries $g_{mP}V_E$ from its drain (the output) to its source (ac ground); equivalently it delivers $-g_{mP}V_E$ **into** the output node. Its output resistance is lumped into $r_{OP}$.
- **Thevenin branch** (dashed box) between the output and E: starting at the output, the "+" terminal of $V_X = g_{mN}r_{ON}V_{in}$, then its "−" terminal, then $R_X = 2r_{ON}$, then E. $I_X$ is the current in this branch, flowing **from the output toward E**.
- $C_L$ and $r_{OP}$ load the output.

KVL along the branch (from the output to E):

$$V_E = V_{out} - V_X - I_XR_X . \qquad (1)$$

### Step 2 — Short the output and analyse node E

Set $V_{out} = 0$ (output shorted to ac ground). $C_L$ and $r_{OP}$ then carry no current.

<!-- diagram: diagram-01.cir -->

**Impedance at E.** Node E sees $1/g_{mP}$ and $C_E$ to ground (the gate of $M_4$ draws nothing):

$$Z_E = \frac{1}{g_{mP} + C_Es}.$$

**KCL at E.** The branch current $I_X$ arrives at E and flows to ground through $Z_E$:

$$I_X = \frac{V_E}{Z_E}. \qquad (2)$$

**Solve (1) and (2) with $V_{out} = 0$:**

$$
\begin{aligned}
V_E &= -V_X - R_X\frac{V_E}{Z_E}\\
V_E\left(1 + \frac{R_X}{Z_E}\right) &= -V_X\\
V_E &= -V_X\,\frac{Z_E}{Z_E + R_X},\qquad I_X = \frac{V_E}{Z_E} = -\frac{V_X}{Z_E + R_X}.
\end{aligned}
$$

So $V_X$ drives the series combination $R_X + Z_E$; node E gets the divided fraction of $-V_X$.

### Step 3 — Current into the short

Two currents arrive at the shorted output node:

- from $M_4$: $-g_{mP}V_E$;
- from the branch: $-I_X$ (because $I_X$ is defined as flowing *out of* the output into the branch).

$$
\begin{aligned}
I_{short} &= -g_{mP}V_E - I_X\\
&= g_{mP}V_X\,\frac{Z_E}{Z_E + R_X} + \frac{V_X}{Z_E + R_X}\\
&= V_X\,\frac{g_{mP}Z_E + 1}{Z_E + R_X}.
\end{aligned}
$$

### Step 4 — Set the short-circuit current to zero

For $V_X\ne0$ (nonzero input), $I_{short} = 0$ requires

$$g_{mP}Z_E + 1 = 0\quad\Longleftrightarrow\quad\frac{g_{mP}}{g_{mP} + C_Es} = -1 .$$

Solve:

$$
\begin{aligned}
g_{mP} &= -g_{mP} - C_Es\\
C_Es &= -2g_{mP}\\
s_z &= -\frac{2g_{mP}}{C_E}.
\end{aligned}
$$

The zero is real and negative: a **left-half-plane zero** at twice the mirror-pole frequency $\omega_E = g_{mP}/C_E$.

**Interpretation.** The signal reaches the output by two paths that add:

- a **fast path**, straight through the Thevenin branch: its contribution to $I_{short}$ is $V_X/(Z_E + R_X)$;
- a **slow path**, through the mirror: the same branch current develops $V_E$ across $Z_E$, which $M_4$ copies to the output; its contribution is $g_{mP}Z_E$ times the fast one, i.e. $\dfrac{1}{1 + s/\omega_E}$ times it.

The total is proportional to $1 + \dfrac{1}{1 + s/\omega_E}$, which vanishes when $1 + s/\omega_E = -1$, i.e. at $s = -2\omega_E$. At low frequency the two paths contribute equally (the mirror doubles the output current); at high frequency $C_E$ kills the mirror path and only the fast path remains.

### Step 5 — Check with the full transfer function

Keep $V_{out}$ and write $Y_E = g_{mP} + C_Es$ and $Y_L = C_Ls + 1/r_{OP}$.

From (1) and (2): $V_E(1 + R_XY_E) = V_{out} - V_X$.

KCL at the output: the currents arriving from $M_4$ and from the branch flow into $Y_L$:

$$-g_{mP}V_E - I_X = Y_LV_{out}\quad\Longrightarrow\quad -(g_{mP} + Y_E)V_E = Y_LV_{out}.$$

Substitute $V_E = (V_{out} - V_X)/(1 + R_XY_E)$:

$$
\begin{aligned}
-(g_{mP} + Y_E)(V_{out} - V_X) &= Y_L(1 + R_XY_E)V_{out}\\
\frac{V_{out}}{V_X} &= \frac{g_{mP} + Y_E}{Y_L(1 + R_XY_E) + g_{mP} + Y_E} = \frac{2g_{mP} + C_Es}{Y_L(1 + R_XY_E) + 2g_{mP} + C_Es}.
\end{aligned}
$$

The numerator $2g_{mP} + C_Es$ vanishes at $s = -2g_{mP}/C_E$, confirming the short-circuit method. (Since $V_X = g_{mN}r_{ON}V_{in}$ is a constant multiple of $V_{in}$, $V_{out}/V_{in}$ has the same zero.)

### Result

$$s_z = -\frac{2g_{mP}}{C_E}$$

The zero lies in the left half plane, at twice the magnitude of the mirror pole $g_{mP}/C_E$. It arises because the direct path through $R_X$ and the mirror path through $M_4$ add at the output, and their sum, proportional to $1 + 1/(1 + sC_E/g_{mP})$, vanishes at $s = -2g_{mP}/C_E$.

**Common mistake.** Placing the zero in the right half plane, as for the feedforward zero $+g_m/C_{GD}$ of a common-source stage. Here the two paths add with the **same** sign at low frequency, so they can cancel only where the mirror path's response is negative real, i.e. at a negative real $s$.

**Common mistake.** Quoting the zero at $g_{mP}/C_E$ (the mirror pole) or at $1/(R_XC_E)$. The zero condition is $g_{mP}Z_E = -1$, which gives $2g_{mP}/C_E$; $R_X$ cancels out because both contributions are carried by the same branch current $V_X/(Z_E + R_X)$.

**Common mistake.** Writing only $M_4$'s current into the short and forgetting the branch current $-I_X$. Without the direct path the short-circuit current would be $-g_{mP}V_E$, which never vanishes for finite $s$, and one would wrongly conclude that the circuit has no zero.
