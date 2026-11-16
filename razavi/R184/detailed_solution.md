# Detailed solution - R184

**Approach.** The inputs are tied together, so the excitation is purely common-mode. A symmetric circuit then has identical currents and voltages in its two halves, so the differential output $V_{out} = V_X - V_Y$ is zero at every input level. The common level of the two outputs is followed through the sweep only as a check on the physics.

### Step 1 — Why the two halves are identical

Call the left output X (drains of $M_1$, $M_3$), the right output Y (drains of $M_2$, $M_4$) and the common source node of $M_1$, $M_2$ P. Throughout the sweep $V_{in1} = V_{in2} = V_{in,CM}$, so

$$V_{in1} - V_{in2} = 0 .$$

With matched devices ($M_1 = M_2$, $M_3 = M_4$, $R_1 = R_2$) and equal inputs, the two halves obey the same equations: $M_1$ and $M_2$ see the same voltages, so KCL at P gives each $I_{D5}/2$, and $M_3$, $M_4$, with the same gate bias $V_{b2}$, the same degeneration and the same current, sit at the same source voltage $V_{DD} - R_1I_{D5}/2$ and the same drain voltage. Any small output conductance $1/r_O$ makes this symmetric solution the unique operating point, so

$$V_X = V_Y \quad\Longrightarrow\quad V_{out} = V_X - V_Y = 0 .$$

A common-mode input pushes both halves identically, so there is no difference to amplify: the common-mode rejection of a perfectly matched pair.

### Step 2 — The common level of the outputs (for reference)

Let $I_P$ be the current of a saturated degenerated PMOS load, the solution of $I_P = \tfrac12\mu_pC_{ox}(W/L)_3(V_{DD} - I_PR_1 - V_{b2} - |V_{THP}|)^2$, and $I_{SS}$ the saturated tail current, with the nominal design $2I_P = I_{SS}$. Example design (the sizes are free): $\beta_n = \mu_nC_{ox}(W/L)_{1,2} = 2\ \mathrm{mA/V^2}$; $V_{b1} = 1$ V and $\mu_nC_{ox}(W/L)_5 = 4.44\ \mathrm{mA/V^2}$, so $I_{SS} = \tfrac12(4.44\ \mathrm{mA/V^2})(0.3\ \mathrm{V})^2 = 200\ \mu$A; $R_1 = R_2 = 5\ \mathrm{k}\Omega$, $V_{b2} = 1.4$ V and $\mu_pC_{ox}(W/L)_{3,4} = 2.22\ \mathrm{mA/V^2}$, so $I_P = 100\ \mu$A.

**(a) $V_{in,CM} < V_{THN} = 0.7$ V.** $V_{GS1} = V_{in,CM} - V_P \le V_{in,CM} < 0.7$ V, so $M_1$ and $M_2$ are off. With no load current, $R_1$, $R_2$ drop nothing, and the PMOS channels (still on, since $V_{SG} = 3 - 1.4 = 1.6\ \mathrm{V} > 0.8$ V) carry zero current only with $V_{SD} = 0$:

$$V_X = V_Y = V_{DD} = 3\ \mathrm{V}.$$

**(b) $V_{in,CM}$ just above 0.7 V.** The input devices conduct, but $V_P$ is still small, so $M_5$ is in triode and the tail current is below $I_{SS}$. Each load supplies $I_{D5}/2 < I_P$, so the PMOS devices are in triode and the outputs fall from $V_{DD}$.

*Worked point, $V_{in,CM} = 1.0$ V.* KCL at P with $M_5$ in triode, and $M_1$ saturated:

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

$M_3$ in triode carrying 47.4 µA, with $V_{SD} = V_{ov} - \sqrt{V_{ov}^2 - 2I/\beta}$ (the smaller root of the triode equation):

$$
\begin{aligned}
V_{S3} &= 3 - (47.4\ \mu\mathrm{A})(5\ \mathrm{k}\Omega) = 2.763\ \mathrm{V},\\
V_{SG3} - |V_{THP}| &= 2.763 - 1.4 - 0.8 = 0.563\ \mathrm{V},\\
V_{SD3} &= 0.563 - \sqrt{0.563^2 - \frac{2(47.4\ \mu\mathrm{A})}{2.22\ \mathrm{mA/V^2}}} = 0.563 - \sqrt{0.317 - 0.043} = 0.039\ \mathrm{V},\\
V_X = V_Y &= 2.763 - 0.039 = 2.72\ \mathrm{V}.
\end{aligned}
$$

**(c) $M_5$ saturates.** When $V_P$ reaches $V_{b1} - V_{THN} = 0.3$ V, the tail delivers its full $I_{SS}$ and each side carries $I_{SS}/2 = I_P$, so the loads reach their saturation edge, $V_X = V_Y = V_{b2} + |V_{THP}| = 2.2$ V. With $M_1$ saturated at $I_P$:

$$
\begin{aligned}
V_{ov1} &= \sqrt{\frac{2I_P}{\beta_n}} = \sqrt{\frac{2(100\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 0.316\ \mathrm{V},\\
V_{in,CM} &= V_P + V_{THN} + V_{ov1} = 0.3 + 0.7 + 0.316 = 1.32\ \mathrm{V}.
\end{aligned}
$$

**(d) $V_{in,CM} > 1.32$ V.** All devices are saturated, the tail current is fixed at $I_{SS}$ and each load is a current source $I_P$. With $\lambda = 0$ and exactly $2I_P = I_{SS}$, the square law no longer pins the output level. In a real circuit it depends on how $2I_P$ compares with $I_{SS}$: slightly larger, and the outputs stay near $V_{b2} + |V_{THP}|$ with the loads just in triode; slightly smaller, and they fall until the input pair (and possibly the tail) enter triode. This is why such an amplifier needs **common-mode feedback**. Whatever the level, it is the same on both sides, so $V_{out}$ is unaffected.

**Common level** (example design):

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

Equal inputs applied to a symmetric circuit give identical voltages at the two outputs, so the sketch is a horizontal line on the axis. For reference, the common level of the outputs is $V_{DD}$ while $M_1$, $M_2$ are off ($V_{in,CM} < 0.7$ V), then falls as the pair turns on; once all devices are saturated it is set by the balance between the PMOS source currents and the tail current. Without common-mode feedback that level is not well defined, but it is always the same on both sides.

**Common mistake.** Plotting a single output, for example $V_X$ falling from 3 V as the pair turns on, and calling it $V_{out}$. That is the common-mode output level; the difference between the outputs is zero.

**Common mistake.** Claiming that $V_{out}$ varies because the tail or bias currents change during the sweep. Any such change acts identically on both halves and cancels in $V_X - V_Y$; only a mismatch, which the problem rules out, would give a nonzero output.
