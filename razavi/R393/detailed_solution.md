# Detailed solution - R393

**Approach.** Write the G-parameter (inverse hybrid) equations of the amplifier and of the feedback network, and connect them as the figure shows: the two input-side ports are in series (they carry the same current $I_{in}$), and the two output-side ports are in parallel (they share the voltage $V_{out}$). Solve for $V_{out}/V_{in}$, keeping the amplifier's reverse term $G_{12}I_2$. Then compare that term with the rest of the denominator to find when it can be dropped, and bound the comparison independently of the feedback network.

### Step 1 — The two-port equations and the connections

**Amplifier** (port 1 = input, port 2 = output):

$$I_{in} = G_{11}V_e + G_{12}I_2, \qquad V_{out} = G_{21}V_e + G_{22}I_2,$$

with $Z_{in} = 1/G_{11}$ (input impedance), $A_0 = G_{21}$ (open-circuit voltage gain), $Z_{out} = G_{22}$ (output impedance), and $I_2$ the current flowing **into** the amplifier's output port. $G_{12}$ is a dimensionless reverse current gain: it injects a current $G_{12}I_2$ into the input port whenever current flows in the output port.

**Feedback network** (its port 1 across $V_{out}$, its port 2 in series with the amplifier input):

- port 1 draws the current $g_{11}V_{out} + g_{12}I_{in}$ from the output node, where $g_{12}I_{in}$ (forward transmission through the feedback network) is neglected;
- port 2 presents the voltage $g_{21}V_{out} + g_{22}I_{in}$, i.e. a fed-back voltage $g_{21}V_{out}$ behind the impedance $g_{22}$, carrying the loop current $I_{in}$.

**Connections.** Around the input loop, $V_{in}$ equals the amplifier input voltage $V_e$ plus the voltage across the feedback network's port 2. At the output node there is no external load, so the current leaving the amplifier equals the current entering the feedback network.

### Step 2 — Output side: $I_2$ and $V_e$ in terms of $V_{out}$

KCL at the output node (current into the amplifier's port 2 plus current into the feedback network's port 1 equals zero):

$$I_2 + g_{11}V_{out} = 0 \quad\Longrightarrow\quad I_2 = -g_{11}V_{out}.$$

Insert this into the amplifier's output equation:

$$
\begin{aligned}
V_{out} &= A_0V_e + Z_{out}I_2 = A_0V_e - g_{11}Z_{out}V_{out}\\
V_{out}(1 + g_{11}Z_{out}) &= A_0V_e\\
V_e &= \frac{1 + g_{11}Z_{out}}{A_0}\,V_{out}.
\end{aligned}
$$

The factor $1 + g_{11}Z_{out}$ is the output loading: part of $A_0V_e$ is lost across $Z_{out}$ because the feedback network draws current.

### Step 3 — Input current including the reverse term

From the amplifier's input equation with $G_{11} = 1/Z_{in}$ and $I_2 = -g_{11}V_{out}$:

$$I_{in} = \frac{V_e}{Z_{in}} + G_{12}I_2 = \frac{V_e}{Z_{in}} - G_{12}g_{11}V_{out}.$$

### Step 4 — KVL around the input loop

$$
\begin{aligned}
V_{in} &= V_e + g_{22}I_{in} + g_{21}V_{out}\\
&= V_e + g_{22}\left(\frac{V_e}{Z_{in}} - G_{12}g_{11}V_{out}\right) + g_{21}V_{out}\\
&= V_e\left(1 + \frac{g_{22}}{Z_{in}}\right) + V_{out}\left(g_{21} - G_{12}g_{11}g_{22}\right).
\end{aligned}
$$

The factor $1 + g_{22}/Z_{in}$ is the input loading: part of the loop voltage drops across the feedback network's own impedance $g_{22}$.

### Step 5 — Closed-loop gain

Substitute $V_e$ from Step 2:

$$
\begin{aligned}
V_{in} &= V_{out}\left[\frac{(1 + g_{11}Z_{out})(1 + g_{22}/Z_{in})}{A_0} + g_{21} - G_{12}g_{11}g_{22}\right].
\end{aligned}
$$

Multiply numerator and denominator by $A_0$:

$$\frac{V_{out}}{V_{in}} = \frac{A_0}{\left(1 + \dfrac{g_{22}}{Z_{in}}\right)(1 + g_{11}Z_{out}) + A_0g_{21} - A_0G_{12}g_{11}g_{22}}.$$

(The sign of the last term corresponds to $I_2$ defined into the amplifier; with the opposite convention it flips.)

**Checks.**

- $G_{12} = 0$: $V_{out}/V_{in} = A_0/[(1 + g_{22}/Z_{in})(1 + g_{11}Z_{out}) + A_0g_{21}]$, the usual result with loading.
- Additionally $Z_{in} \to \infty$, $Z_{out} \to 0$: $A_0/(1 + A_0g_{21})$, the ideal feedback formula with $\beta = g_{21}$.

**Physical meaning of the extra term.** The current $I_2$ that the amplifier delivers to the feedback network leaks back to its input as $G_{12}I_2$. That current flows through $g_{22}$ and changes the voltage around the input loop by $-G_{12}g_{11}g_{22}V_{out}$, which acts like a modification of the feedback factor from $g_{21}$ to $g_{21} - G_{12}g_{11}g_{22}$.

### Step 6 — When can $G_{12}I_2$ be neglected?

**Exact comparison.** The term is negligible when it is small compared with the rest of the denominator:

$$A_0|G_{12}|\,g_{11}g_{22} \ll \left(1 + \frac{g_{22}}{Z_{in}}\right)(1 + g_{11}Z_{out}) + A_0g_{21}.$$

**A bound valid for any feedback network.** For passive (positive) $g_{11}$, $g_{22}$, $g_{21}$ and positive $Z_{in}$, $Z_{out}$, expanding the product shows that it is at least its last term:

$$\left(1 + \frac{g_{22}}{Z_{in}}\right)(1 + g_{11}Z_{out}) = 1 + \frac{g_{22}}{Z_{in}} + g_{11}Z_{out} + \frac{g_{11}g_{22}Z_{out}}{Z_{in}} \ge \frac{g_{11}g_{22}Z_{out}}{Z_{in}} .$$

So it suffices that

$$A_0|G_{12}|\,g_{11}g_{22} \ll \frac{g_{11}g_{22}Z_{out}}{Z_{in}} \quad\Longleftrightarrow\quad |G_{12}| \ll \frac{Z_{out}}{A_0Z_{in}},$$

i.e. $A_0|G_{12}|Z_{in}/Z_{out} \ll 1$. The feedback parameters $g_{11}$, $g_{22}$ cancel, so this condition holds for **any** feedback network.

**Interpretation.** The amplifier's output current is at most of order $A_0V_e/Z_{out}$ (its short-circuit current). The reverse current $G_{12}I_2$ is then at most $|G_{12}|A_0V_e/Z_{out}$, and it is negligible if it is much smaller than the normal input current $V_e/Z_{in}$: exactly $|G_{12}| \ll Z_{out}/(A_0Z_{in})$.

**Network-dependent alternative.** When the loop gain is large, $A_0g_{21}$ dominates the denominator, and it is enough that $|G_{12}| \ll g_{21}/(g_{11}g_{22})$. For a resistive divider with $R_1$ from the output to the tap and $R_2$ from the tap to ground: $g_{11} = 1/(R_1 + R_2)$, $g_{21} = R_2/(R_1 + R_2)$ and $g_{22} = R_1\parallel R_2$, so

$$\frac{g_{21}}{g_{11}g_{22}} = \frac{R_2/(R_1 + R_2)}{\dfrac{1}{R_1 + R_2}\cdot\dfrac{R_1R_2}{R_1 + R_2}} = \frac{R_1 + R_2}{R_1} = 1 + \frac{R_2}{R_1}.$$

### Result

$$\frac{V_{out}}{V_{in}} = \frac{A_0}{\left(1 + \dfrac{g_{22}}{Z_{in}}\right)(1 + g_{11}Z_{out}) + A_0g_{21} - A_0G_{12}g_{11}g_{22}}$$

(with $I_2$ defined into the amplifier, $I_2 = -g_{11}V_{out}$). The reverse term is negligible when $A_0|G_{12}|g_{11}g_{22} \ll (1 + g_{22}/Z_{in})(1 + g_{11}Z_{out}) + A_0g_{21}$. Since $(1 + g_{22}/Z_{in})(1 + g_{11}Z_{out}) \ge g_{11}g_{22}Z_{out}/Z_{in}$, a sufficient condition valid for any feedback network is

$$|G_{12}| \ll \frac{Z_{out}}{A_0Z_{in}} \qquad\left(\text{i.e. } \frac{A_0G_{12}Z_{in}}{Z_{out}} \ll 1\right).$$

**Common mistake.** Inverting the condition to $G_{12} \ll A_0Z_{in}/Z_{out}$. That bound is usually huge and is *not* sufficient: with $Z_{in} = 1\ \mathrm{M}\Omega$, $Z_{out} = 1\ \mathrm{k}\Omega$, $A_0 = 100$, a 10 k/10 k divider and $G_{12} = 1$, it is satisfied, yet the gain changes by about a factor of two. The reverse current must be compared with the small input current $V_e/Z_{in}$.

**Common mistake.** Treating the input-port source as $G_{12}V_{out}$ (a current proportional to the output voltage) because of its label in the figure. By the stated definition it is $G_{12}I_2$, and $I_2 = -g_{11}V_{out}$ must be substituted.

**Common mistake.** Dropping the loading factors $(1 + g_{22}/Z_{in})$ and $(1 + g_{11}Z_{out})$ while keeping $G_{12}$. All of these effects are of comparable order, and the condition for neglecting $G_{12}$ is a comparison with exactly these terms.
