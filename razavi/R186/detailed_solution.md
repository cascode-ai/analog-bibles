# Detailed solution - R186

**Approach.** Both inputs are tied together, so the excitation is purely common-mode. A symmetric circuit driven symmetrically has identical node voltages on its two sides. Then $R_1$ (connected between the outputs) has zero voltage across it and carries no current, and the differential output $V_{out} = V_X - V_Y$ is zero for the whole sweep. We show this from KCL, then follow the common level of the outputs as a consistency check.

### Step 1 — Reading the circuit and the sweep

From the figure:

- $M_1$–$M_2$: NMOS differential pair, sources joined at node P, tail transistor $M_5$ with gate at $V_{b1}$.
- $M_3$, $M_4$: PMOS current sources, sources at $V_{DD}$, gates at the fixed bias $V_{b2}$. When saturated each supplies $I_P = \tfrac12\mu_pC_{ox}(W/L)_3(V_{DD} - V_{b2} - |V_{THP}|)^2$.
- Output X (left) is the drain node of $M_1$/$M_3$; output Y (right) is the drain node of $M_2$/$M_4$. $R_1$ is connected between X and Y. $V_{out} = V_X - V_Y$.

**The sweep.** $V_{in1} = V_{in2} = V_{in,CM}$ rises from 0 to 3 V, so the differential input $V_{in1} - V_{in2}$ is zero throughout.

### Step 2 — KCL shows the symmetric solution

Let $I_R = (V_X - V_Y)/R_1$ be the current in $R_1$ from X to Y (Ohm's law).

- KCL at X: $I_{D3} = I_{D1} + I_R$.
- KCL at Y: $I_{D4} + I_R = I_{D2}$.

Try the symmetric solution $V_X = V_Y$:

1. Then $I_R = 0$: $R_1$ has no voltage across it, so it carries no current.
2. $M_3$ and $M_4$ have the same gate voltage ($V_{b2}$), source voltage ($V_{DD}$) and drain voltage, so $I_{D3} = I_{D4}$.
3. $M_1$ and $M_2$ have the same gate voltage ($V_{in,CM}$), source voltage ($V_P$) and drain voltage, so $I_{D1} = I_{D2} = I_{D5}/2$ by KCL at P.
4. KCL at X becomes $I_{D3} = I_{D1}$ and KCL at Y becomes $I_{D4} = I_{D2}$. These are the **same equation**, so one value of $V_X = V_Y$ satisfies both.

So the symmetric operating point satisfies every circuit equation. It is the one the circuit settles at: with any small output conductance the solution is unique, and the unique solution of a symmetric circuit with symmetric excitation must be symmetric. Therefore

$$V_X = V_Y \quad\Longrightarrow\quad V_{out} = 0, \qquad I_{R_1} = 0 .$$

*Intuition:* $R_1$ only responds to a *difference* between the two outputs. A common-mode input moves both outputs together, so $R_1$ is "invisible". It neither loads the outputs nor creates a differential voltage.

### Step 3 — The common level of the outputs (for reference)

The common level moves even though $V_{out}$ does not. Use an example design (the sizes are free): $\beta_n = \mu_nC_{ox}(W/L)_{1,2} = 2\ \mathrm{mA/V^2}$; $V_{b1} = 1$ V and $\mu_nC_{ox}(W/L)_5 = 4.44\ \mathrm{mA/V^2}$, giving

$$I_{SS} = \tfrac12(4.44\ \mathrm{mA/V^2})(1 - 0.7)^2\ \mathrm{V^2} = 200\ \mu\mathrm{A};$$

and $V_{b2} = 1.9$ V with $\mu_pC_{ox}(W/L)_{3,4} = 2.22\ \mathrm{mA/V^2}$, giving

$$I_P = \tfrac12(2.22\ \mathrm{mA/V^2})(3 - 1.9 - 0.8)^2\ \mathrm{V^2} = 100\ \mu\mathrm{A} = \frac{I_{SS}}{2}\quad\text{(nominal design)}.$$

The PMOS saturation condition $V_{SD} \ge V_{SG} - |V_{THP}|$ becomes $V_X \le V_{b2} + |V_{THP}| = 2.7$ V.

**(a) $V_{in,CM} < 0.7$ V.** $M_1$, $M_2$ are off ($V_{GS} < V_{THN}$). With no current to carry, the PMOS channels (which exist, since $V_{SG} = 1.1\ \mathrm{V} > 0.8$ V) must have $V_{SD} = 0$:

$$V_X = V_Y = V_{DD} = 3\ \mathrm{V}.$$

**(b) Pair conducting, tail not yet saturated.** As $V_{in,CM}$ rises past 0.7 V, current flows. $V_P$ is still small, so $M_5$ is in triode and $I_{D5} < I_{SS}$. Each PMOS supplies $I_{D5}/2 < I_P$, so it is in triode and the outputs drop below $V_{DD}$.

*Worked point, $V_{in,CM} = 1.0$ V.* KCL at P with $M_5$ in triode and $M_1$ saturated gives two equations:

$$
\begin{aligned}
2I_{D1} &= (4.44\ \mathrm{mA/V^2})\left[0.3V_P - \tfrac12V_P^2\right],\\
I_{D1} &= \tfrac12(2\ \mathrm{mA/V^2})(1.0 - V_P - 0.7)^2 .
\end{aligned}
$$

Their solution (by trial on $V_P$) is $V_P = 0.082$ V and $I_{D1} = (1\ \mathrm{mA/V^2})(0.218\ \mathrm{V})^2 = 47.4\ \mu$A. Check: $(4.44\ \mathrm{mA/V^2})(0.3\times0.082 - 0.5\times0.082^2) = (4.44\ \mathrm{mA/V^2})(0.0213\ \mathrm{V^2}) = 94.8\ \mu$A $= 2I_{D1}$ ✓.

$M_3$ in triode carries 47.4 µA with overdrive $V_{SG3} - |V_{THP}| = 0.3$ V. From $I = \beta_p(V_{ov}V_{SD} - V_{SD}^2/2)$, taking the smaller root:

$$
\begin{aligned}
V_{SD3} &= 0.3 - \sqrt{0.3^2 - \frac{2(47.4\ \mu\mathrm{A})}{2.22\ \mathrm{mA/V^2}}} = 0.3 - \sqrt{0.090 - 0.043} = 0.3 - 0.218 = 0.082\ \mathrm{V},\\
V_X = V_Y &= 3 - 0.082 = 2.92\ \mathrm{V}.
\end{aligned}
$$

**(c) Tail saturates.** When $V_P$ reaches $V_{b1} - V_{THN} = 0.3$ V, the tail carries $I_{SS}$, each side carries $I_{SS}/2 = I_P$, and the PMOS devices reach their saturation edge ($V_X = V_Y = 2.7$ V). This happens at

$$V_{in,CM} = V_P + V_{THN} + \sqrt{\frac{2(I_{SS}/2)}{\beta_n}} = 0.3 + 0.7 + \sqrt{\frac{2(100\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 0.3 + 0.7 + 0.316 = 1.32\ \mathrm{V}.$$

**(d) Above 1.32 V.** All devices are saturated: two current sources $I_P$ on top and a tail sinking $I_{SS}$ below. With $\lambda = 0$ and exactly $2I_P = I_{SS}$, nothing pins the common level. In practice it drifts toward $V_{DD}$ if $2I_P > I_{SS}$, or toward ground (pushing the input pair into triode) if $2I_P < I_{SS}$. The circuit needs common-mode feedback to define it. Whatever it is, it is the same at X and Y.

| $V_{in,CM}$ (V) | State | $V_X = V_Y$ (V) | $V_{out}$ (V) |
|---|---|---|---|
| 0 to 0.7 | pair off | 3.00 | 0 |
| 0.8 | pair on; $M_5$, $M_3$, $M_4$ triode | 2.99 | 0 |
| 1.0 | same | 2.92 | 0 |
| 1.2 | same | 2.80 | 0 |
| 1.32 | tail and loads reach saturation | 2.70 | 0 |
| 1.32 to 3 | all saturated; level set by $2I_P$ vs $I_{SS}$ | not fixed (needs CMFB) | 0 |

### Result

$$V_{out} = 0 \quad\text{for the whole sweep } 0 \le V_{in1} = V_{in2} \le 3\ \mathrm{V}.$$

The circuit is symmetric, so the two outputs move together, $R_1$ has no voltage across it and carries no current, and the differential output stays zero. The sketch is a horizontal line on the axis. For reference, the common output level is $V_{DD}$ while the pair is off. It then falls as the pair turns on, and afterwards it is set by the balance between the PMOS source currents and the tail current. That level is ill-defined without common-mode feedback, but it is equal on both sides.

**Common mistake.** Plotting a single output-node voltage (for example $V_X$, which falls from 3 V as the pair turns on) and calling it $V_{out}$. That is the common-mode output level; the differential output $V_X - V_Y$ is zero.

**Common mistake.** Assuming $R_1$ loads the outputs or carries current as the common-mode level changes, which would give a nonzero, input-dependent $V_{out}$. $R_1$ connects two nodes at the same potential, so its current is zero and it has no effect on common-mode behaviour.
