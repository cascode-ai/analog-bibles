# Detailed solution - R393

**Approach.** Connect the G-parameter equations of the amplifier and the feedback network as in the figure: the input-side ports in series (same current $I_{in}$), the output-side ports in parallel (same voltage $V_{out}$). Solve for $V_{out}/V_{in}$ keeping $G_{12}I_2$, then compare that term with the rest of the denominator and bound the comparison independently of the feedback network.

### Step 1 — The two-port equations and the connections

**Amplifier:**

$$I_{in} = G_{11}V_e + G_{12}I_2, \qquad V_{out} = G_{21}V_e + G_{22}I_2,$$

with $Z_{in} = 1/G_{11}$, $A_0 = G_{21}$, $Z_{out} = G_{22}$ and $I_2$ flowing **into** the output port; $G_{12}$ is a dimensionless reverse current gain.

**Feedback network:** port 1 (across $V_{out}$) draws $g_{11}V_{out} + g_{12}I_{in}$ from the output, with $g_{12}I_{in}$ neglected; port 2 (in series with the amplifier input, carrying $I_{in}$) presents $g_{21}V_{out} + g_{22}I_{in}$, a fed-back voltage behind the impedance $g_{22}$.

Around the input loop, $V_{in}$ equals $V_e$ plus the port-2 voltage; at the unloaded output, the current leaving the amplifier enters the feedback network.

### Step 2 — Output side: $I_2$ and $V_e$ in terms of $V_{out}$

KCL at the output node:

$$I_2 + g_{11}V_{out} = 0 \quad\Longrightarrow\quad I_2 = -g_{11}V_{out}.$$

In the amplifier's output equation:

$$
\begin{aligned}
V_{out} &= A_0V_e + Z_{out}I_2 = A_0V_e - g_{11}Z_{out}V_{out}\\
V_{out}(1 + g_{11}Z_{out}) &= A_0V_e\\
V_e &= \frac{1 + g_{11}Z_{out}}{A_0}\,V_{out}.
\end{aligned}
$$

$1 + g_{11}Z_{out}$ is the output loading: part of $A_0V_e$ is lost across $Z_{out}$.

### Step 3 — Input current including the reverse term

With $G_{11} = 1/Z_{in}$ and $I_2 = -g_{11}V_{out}$:

$$I_{in} = \frac{V_e}{Z_{in}} + G_{12}I_2 = \frac{V_e}{Z_{in}} - G_{12}g_{11}V_{out}.$$

### Step 4 — KVL around the input loop

$$
\begin{aligned}
V_{in} &= V_e + g_{22}I_{in} + g_{21}V_{out}\\
&= V_e + g_{22}\left(\frac{V_e}{Z_{in}} - G_{12}g_{11}V_{out}\right) + g_{21}V_{out}\\
&= V_e\left(1 + \frac{g_{22}}{Z_{in}}\right) + V_{out}\left(g_{21} - G_{12}g_{11}g_{22}\right).
\end{aligned}
$$

$1 + g_{22}/Z_{in}$ is the input loading: part of the loop voltage drops across $g_{22}$.

### Step 5 — Closed-loop gain

Substituting $V_e$ from Step 2:

$$V_{in} = V_{out}\left[\frac{(1 + g_{11}Z_{out})(1 + g_{22}/Z_{in})}{A_0} + g_{21} - G_{12}g_{11}g_{22}\right],$$

$$\frac{V_{out}}{V_{in}} = \frac{A_0}{\left(1 + \dfrac{g_{22}}{Z_{in}}\right)(1 + g_{11}Z_{out}) + A_0g_{21} - A_0G_{12}g_{11}g_{22}}.$$

(The sign of the last term corresponds to $I_2$ defined into the amplifier; with the opposite convention it flips.)

**Checks.** For $G_{12} = 0$: $A_0/[(1 + g_{22}/Z_{in})(1 + g_{11}Z_{out}) + A_0g_{21}]$, the usual result with loading. If also $Z_{in} \to \infty$, $Z_{out} \to 0$: $A_0/(1 + A_0g_{21})$, the ideal formula with $\beta = g_{21}$.

The current $I_2$ delivered to the feedback network leaks back as $G_{12}I_2$, flows through $g_{22}$, and changes the loop voltage by $-G_{12}g_{11}g_{22}V_{out}$: effectively the feedback factor becomes $g_{21} - G_{12}g_{11}g_{22}$.

### Step 6 — When can $G_{12}I_2$ be neglected?

**Exact comparison.** The term is negligible when

$$A_0|G_{12}|\,g_{11}g_{22} \ll \left(1 + \frac{g_{22}}{Z_{in}}\right)(1 + g_{11}Z_{out}) + A_0g_{21}.$$

**A bound valid for any feedback network.** For passive (positive) $g_{11}$, $g_{22}$, $g_{21}$ and positive $Z_{in}$, $Z_{out}$, the product is at least its last term:

$$\left(1 + \frac{g_{22}}{Z_{in}}\right)(1 + g_{11}Z_{out}) = 1 + \frac{g_{22}}{Z_{in}} + g_{11}Z_{out} + \frac{g_{11}g_{22}Z_{out}}{Z_{in}} \ge \frac{g_{11}g_{22}Z_{out}}{Z_{in}} .$$

So it suffices that

$$A_0|G_{12}|\,g_{11}g_{22} \ll \frac{g_{11}g_{22}Z_{out}}{Z_{in}} \quad\Longleftrightarrow\quad |G_{12}| \ll \frac{Z_{out}}{A_0Z_{in}},$$

i.e. $A_0|G_{12}|Z_{in}/Z_{out} \ll 1$; $g_{11}$ and $g_{22}$ cancel, so this holds for **any** feedback network. Physically, $I_2$ is at most of order $A_0V_e/Z_{out}$, so the reverse current $|G_{12}|A_0V_e/Z_{out}$ must be small compared with the normal input current $V_e/Z_{in}$.

**Network-dependent alternative.** When the loop gain is large, $A_0g_{21}$ dominates and $|G_{12}| \ll g_{21}/(g_{11}g_{22})$ suffices. For a resistive divider with $R_1$ from the output to the tap and $R_2$ from the tap to ground, $g_{11} = 1/(R_1 + R_2)$, $g_{21} = R_2/(R_1 + R_2)$ and $g_{22} = R_1\parallel R_2$, so

$$\frac{g_{21}}{g_{11}g_{22}} = \frac{R_2/(R_1 + R_2)}{\dfrac{1}{R_1 + R_2}\cdot\dfrac{R_1R_2}{R_1 + R_2}} = \frac{R_1 + R_2}{R_1} = 1 + \frac{R_2}{R_1}.$$

### Result

$$\frac{V_{out}}{V_{in}} = \frac{A_0}{\left(1 + \dfrac{g_{22}}{Z_{in}}\right)(1 + g_{11}Z_{out}) + A_0g_{21} - A_0G_{12}g_{11}g_{22}}$$

(with $I_2$ defined into the amplifier, $I_2 = -g_{11}V_{out}$). The reverse term is negligible when $A_0|G_{12}|g_{11}g_{22} \ll (1 + g_{22}/Z_{in})(1 + g_{11}Z_{out}) + A_0g_{21}$. Since $(1 + g_{22}/Z_{in})(1 + g_{11}Z_{out}) \ge g_{11}g_{22}Z_{out}/Z_{in}$, a sufficient condition valid for any feedback network is

$$|G_{12}| \ll \frac{Z_{out}}{A_0Z_{in}} \qquad\left(\text{i.e. } \frac{A_0G_{12}Z_{in}}{Z_{out}} \ll 1\right).$$

**Common mistake.** Inverting the condition to $G_{12} \ll A_0Z_{in}/Z_{out}$. That bound is not sufficient: with $Z_{in} = 1\ \mathrm{M}\Omega$, $Z_{out} = 1\ \mathrm{k}\Omega$, $A_0 = 100$, a 10 k/10 k divider and $G_{12} = 1$, it is satisfied, yet the gain changes by about a factor of two.

**Common mistake.** Treating the input-port source as $G_{12}V_{out}$ because of its label in the figure. By definition it is $G_{12}I_2$, with $I_2 = -g_{11}V_{out}$.

**Common mistake.** Dropping the loading factors $(1 + g_{22}/Z_{in})$ and $(1 + g_{11}Z_{out})$ while keeping $G_{12}$. They are of comparable order, and the condition for neglecting $G_{12}$ is a comparison with exactly these terms.
