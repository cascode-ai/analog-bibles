# Detailed solution - R184

**Approach.** The two inputs are tied together, so the excitation is purely common-mode. In a perfectly symmetric circuit a common-mode input produces identical currents and identical voltages in the two halves, so the differential output $V_{out} = V_X - V_Y$ is zero for every input level. We prove this from the circuit equations, then (as a check on the physics) follow the common level of the two outputs through the sweep.

### Step 1 — Reading the circuit and the sweep

From the figure:

- $M_1$–$M_2$ is an NMOS differential pair with sources joined at node P and tail transistor $M_5$ (gate at $V_{b1}$).
- $M_3$, $M_4$ are PMOS current sources: gates at the fixed bias $V_{b2}$, sources returned to $V_{DD}$ through $R_1$ and $R_2$ (source degeneration).
- The left output X is the drain node of $M_1$/$M_3$; the right output Y is the drain node of $M_2$/$M_4$. $V_{out} = V_X - V_Y$.

**The sweep.** $V_{in1} = V_{in2} = V_{in,CM}$, which rises from 0 to 3 V. The differential input is

$$V_{in1} - V_{in2} = 0$$

for the whole sweep. Only the common-mode level $V_{in,CM}$ changes.

### Step 2 — Why the two halves carry identical currents

Write the equations of the two halves side by side. The left half is $M_1$, $M_3$, $R_1$ and node X; the right half is $M_2$, $M_4$, $R_2$ and node Y. With matched devices ($M_1 = M_2$, $M_3 = M_4$, $R_1 = R_2$):

- Square law for the input devices (if saturated): $I_{D1} = \tfrac12\beta_n(V_{in1} - V_P - V_{THN})^2$ and $I_{D2} = \tfrac12\beta_n(V_{in2} - V_P - V_{THN})^2$, where $\beta_n = \mu_nC_{ox}(W/L)_{1,2}$. With $V_{in1} = V_{in2}$ these are the **same function of the same voltages**, so $I_{D1} = I_{D2}$. The same holds in triode, where each current also depends on the drain voltage, as long as $V_X = V_Y$.
- KCL at P: $I_{D1} + I_{D2} = I_{D5}$, so each input device carries $I_{D5}/2$.
- Loads: $M_3$ and $M_4$ have the same gate voltage $V_{b2}$, the same degeneration resistor and the same current, so they have the same source voltage $V_{DD} - R_1I_{D5}/2$ and, by KCL at X and Y, the same drain voltage.

So the equations of the left half are identical to those of the right half. The symmetric solution $V_X = V_Y$ satisfies them, and it is the operating point the circuit settles at. (Any small output conductance $1/r_O$ makes the node voltages unique, and the unique solution of a symmetric circuit with symmetric excitation must itself be symmetric.) Therefore

$$V_X = V_Y \quad\Longrightarrow\quad V_{out} = V_X - V_Y = 0 .$$

*Intuition:* a differential output measures the **difference** between the halves. A common-mode input pushes both halves identically, so there is no difference to amplify. This is the common-mode rejection of a perfectly matched differential pair.

### Step 3 — The common level of the outputs (for reference)

Although $V_{out} = 0$ throughout, the level of both outputs does move with $V_{in,CM}$. Following it helps make sure the symmetric picture is consistent. Let $I_P$ be the current a degenerated PMOS delivers when saturated (solution of $I_P = \tfrac12\mu_pC_{ox}(W/L)_3(V_{DD} - I_PR_1 - V_{b2} - |V_{THP}|)^2$), and let $I_{SS}$ be the saturated tail current. Assume the nominal design $2I_P = I_{SS}$.

For numbers, use an example design (the sizes are free):

- $\beta_n = 2\ \mathrm{mA/V^2}$;
- $V_{b1} = 1$ V and $\mu_nC_{ox}(W/L)_5 = 4.44\ \mathrm{mA/V^2}$, so $I_{SS} = \tfrac12(4.44\ \mathrm{mA/V^2})(0.3\ \mathrm{V})^2 = 200\ \mu$A;
- $R_1 = R_2 = 5\ \mathrm{k}\Omega$, $V_{b2} = 1.4$ V and $\mu_pC_{ox}(W/L)_{3,4} = 2.22\ \mathrm{mA/V^2}$, so $I_P = 100\ \mu$A.

**(a) $V_{in,CM} < V_{THN} = 0.7$ V.** $V_{GS1} = V_{in,CM} - V_P \le V_{in,CM} < 0.7$ V, so $M_1$ and $M_2$ are off. No current flows in the loads, so $R_1$, $R_2$ drop nothing, and the PMOS channels (still formed, since $V_{SG} = 3 - 1.4 = 1.6\ \mathrm{V} > 0.8$ V) carry zero current only with $V_{SD} = 0$:

$$V_X = V_Y = V_{DD} = 3\ \mathrm{V}.$$

**(b) $V_{in,CM}$ just above 0.7 V.** The input devices conduct, but $V_P$ is still small, so $M_5$ is in triode and the tail current is below $I_{SS}$. Each load supplies $I_{D5}/2 < I_P$, so the PMOS devices are in triode and the outputs fall from $V_{DD}$.

*Worked point, $V_{in,CM} = 1.0$ V.* Unknowns $V_P$ and $I_{D1}$. KCL at P with $M_5$ in triode, and $M_1$ saturated:

$$
\begin{aligned}
2I_{D1} &= (4.44\ \mathrm{mA/V^2})\left[(1.0 - 0.7)V_P - \tfrac12V_P^2\right],\\
I_{D1} &= \tfrac12(2\ \mathrm{mA/V^2})(1.0 - V_P - 0.7)^2 .
\end{aligned}
$$

Solving (by trial on $V_P$) gives $V_P = 0.082$ V. Check:

$$
\begin{aligned}
I_{D1} &= (1\ \mathrm{mA/V^2})(0.218\ \mathrm{V})^2 = 47.4\ \mu\mathrm{A},\\
(4.44\ \mathrm{mA/V^2})[0.3(0.082) - 0.5(0.082)^2] &= (4.44\ \mathrm{mA/V^2})(0.0213\ \mathrm{V^2}) = 94.8\ \mu\mathrm{A} = 2(47.4\ \mu\mathrm{A}).\ \checkmark
\end{aligned}
$$

$M_3$ in triode carrying 47.4 µA:

$$
\begin{aligned}
V_{S3} &= 3 - (47.4\ \mu\mathrm{A})(5\ \mathrm{k}\Omega) = 2.763\ \mathrm{V},\\
V_{SG3} - |V_{THP}| &= 2.763 - 1.4 - 0.8 = 0.563\ \mathrm{V},\\
V_{SD3} &= 0.563 - \sqrt{0.563^2 - \frac{2(47.4\ \mu\mathrm{A})}{2.22\ \mathrm{mA/V^2}}} = 0.563 - \sqrt{0.317 - 0.043} = 0.039\ \mathrm{V},\\
V_X = V_Y &= 2.763 - 0.039 = 2.72\ \mathrm{V}.
\end{aligned}
$$

(The triode expression $V_{SD} = V_{ov} - \sqrt{V_{ov}^2 - 2I/\beta}$ is the smaller root of $I = \beta(V_{ov}V_{SD} - V_{SD}^2/2)$, where $V_{ov} = V_{SG} - |V_{THP}|$ is the overdrive voltage.)

**(c) $M_5$ saturates.** When $V_P$ reaches $V_{b1} - V_{THN} = 0.3$ V, the tail delivers its full $I_{SS}$ and each side carries $I_{SS}/2 = I_P$, so the loads reach their saturation edge, $V_X = V_Y = V_{b2} + |V_{THP}| = 2.2$ V. With $M_1$ saturated at $I_P$:

$$
\begin{aligned}
V_{ov1} &= \sqrt{\frac{2I_P}{\beta_n}} = \sqrt{\frac{2(100\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 0.316\ \mathrm{V},\\
V_{in,CM} &= V_P + V_{THN} + V_{ov1} = 0.3 + 0.7 + 0.316 = 1.32\ \mathrm{V}.
\end{aligned}
$$

**(d) $V_{in,CM} > 1.32$ V.** All devices are saturated. The tail current is fixed at $I_{SS}$ and each load is a current source $I_P$. With $\lambda = 0$ and exactly $2I_P = I_{SS}$, the square law no longer pins the output level anywhere in the range where all devices stay saturated. In a real circuit it is set by how $2I_P$ compares with $I_{SS}$:

- if $2I_P$ is slightly larger, the outputs stay up near $V_{b2} + |V_{THP}|$, with the loads just in triode;
- if it is slightly smaller, the outputs fall until the input pair (and possibly the tail) enter triode.

This is why a fully differential amplifier with current-source loads needs **common-mode feedback**. Whatever the level, it is the same on both sides, so $V_{out}$ is unaffected.

**Summary of the common level** (example design):

| $V_{in,CM}$ (V) | State | $V_X = V_Y$ (V) | $V_{out}$ (V) |
|---|---|---|---|
| 0 to 0.7 | $M_1$, $M_2$ off | 3.00 | 0 |
| 0.8 | pair on; $M_5$, $M_3$, $M_4$ in triode | 2.96 | 0 |
| 1.0 | same | 2.72 | 0 |
| 1.2 | same | 2.41 | 0 |
| 1.32 | $M_5$ and loads reach saturation | 2.20 | 0 |
| 1.32 to 3 | all saturated; level set by $2I_P$ vs $I_{SS}$ (needs CMFB) | not fixed by the ideal model | 0 |

### Result

$$V_{out} = 0 \quad\text{for the whole sweep } 0 \le V_{in1} = V_{in2} \le 3\ \mathrm{V}.$$

Equal inputs applied to a symmetric circuit give identical currents in the two halves and identical voltages at the two outputs. The sketch is a horizontal line on the axis. For reference, the common level of the two outputs is $V_{DD}$ while $M_1$, $M_2$ are off ($V_{in,CM} < 0.7$ V). It then falls as the pair turns on and, once all devices are saturated, is set by the balance between the PMOS source currents and the tail current. Without common-mode feedback that level is not well defined, but it is always the same on both sides.

**Common mistake.** Plotting the voltage of a single output node, for example $V_X$ falling from 3 V as the pair turns on, and calling it $V_{out}$. That is the common-mode output level. The problem defines $V_{out}$ as the difference between the two outputs, and that difference is zero.

**Common mistake.** Claiming that $V_{out}$ varies with the common-mode input because the tail current or the bias currents change during the sweep. Any such change acts identically on both halves, so it moves $V_X$ and $V_Y$ together and cancels in $V_X - V_Y$. A nonzero differential output would need an asymmetry (mismatch), which the problem rules out.
