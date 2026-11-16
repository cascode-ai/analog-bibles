# Detailed solution - R186

**Approach.** Both inputs are tied together, so the excitation is purely common-mode and the symmetric circuit has identical node voltages on its two sides. $R_1$, connected between the outputs, then has no voltage across it and carries no current, and $V_{out} = V_X - V_Y$ is zero for the whole sweep. The common level of the outputs is followed only as a consistency check.

### Step 1 — KCL shows the symmetric solution

Call the left output X (drains of $M_1$, $M_3$), the right output Y (drains of $M_2$, $M_4$) and the common source node of $M_1$, $M_2$ P. Throughout the sweep $V_{in1} = V_{in2} = V_{in,CM}$, so the differential input is zero.

With $I_R = (V_X - V_Y)/R_1$ the current in $R_1$ from X to Y:

- KCL at X: $I_{D3} = I_{D1} + I_R$.
- KCL at Y: $I_{D4} + I_R = I_{D2}$.

Try $V_X = V_Y$. Then $I_R = 0$; $M_3$ and $M_4$ have the same gate ($V_{b2}$), source ($V_{DD}$) and drain voltages, so $I_{D3} = I_{D4}$; and $M_1$, $M_2$ have the same gate ($V_{in,CM}$), source ($V_P$) and drain voltages, so $I_{D1} = I_{D2} = I_{D5}/2$. The two KCL equations become $I_{D3} = I_{D1}$ and $I_{D4} = I_{D2}$, the **same equation**, so one value of $V_X = V_Y$ satisfies both. Any small output conductance makes this symmetric solution the unique one, so

$$V_X = V_Y \quad\Longrightarrow\quad V_{out} = 0, \qquad I_{R_1} = 0 .$$

$R_1$ responds only to a difference between the outputs; under a common-mode input it is invisible.

### Step 2 — The common level of the outputs (for reference)

Example design (the sizes are free): $\beta_n = \mu_nC_{ox}(W/L)_{1,2} = 2\ \mathrm{mA/V^2}$; $V_{b1} = 1$ V and $\mu_nC_{ox}(W/L)_5 = 4.44\ \mathrm{mA/V^2}$, giving

$$I_{SS} = \tfrac12(4.44\ \mathrm{mA/V^2})(1 - 0.7)^2\ \mathrm{V^2} = 200\ \mu\mathrm{A};$$

and $V_{b2} = 1.9$ V with $\mu_pC_{ox}(W/L)_{3,4} = 2.22\ \mathrm{mA/V^2}$, giving the saturated PMOS current

$$I_P = \tfrac12(2.22\ \mathrm{mA/V^2})(3 - 1.9 - 0.8)^2\ \mathrm{V^2} = 100\ \mu\mathrm{A} = \frac{I_{SS}}{2}\quad\text{(nominal design)}.$$

The PMOS devices are saturated for $V_X \le V_{b2} + |V_{THP}| = 2.7$ V.

**(a) $V_{in,CM} < 0.7$ V.** $M_1$, $M_2$ are off. The PMOS channels are on ($V_{SG} = 1.1\ \mathrm{V} > 0.8$ V) but carry no current, so $V_{SD} = 0$:

$$V_X = V_Y = V_{DD} = 3\ \mathrm{V}.$$

**(b) Pair conducting, tail not yet saturated.** Past 0.7 V current flows, but $V_P$ is still small, so $M_5$ is in triode and $I_{D5} < I_{SS}$. Each PMOS supplies $I_{D5}/2 < I_P$, so it is in triode and the outputs drop below $V_{DD}$.

*Worked point, $V_{in,CM} = 1.0$ V.* KCL at P with $M_5$ in triode, and $M_1$ saturated:

$$
\begin{aligned}
2I_{D1} &= (4.44\ \mathrm{mA/V^2})\left[0.3V_P - \tfrac12V_P^2\right],\\
I_{D1} &= \tfrac12(2\ \mathrm{mA/V^2})(1.0 - V_P - 0.7)^2 .
\end{aligned}
$$

Their solution (by trial on $V_P$) is $V_P = 0.082$ V and $I_{D1} = (1\ \mathrm{mA/V^2})(0.218\ \mathrm{V})^2 = 47.4\ \mu$A. Check: $(4.44\ \mathrm{mA/V^2})(0.3\times0.082 - 0.5\times0.082^2) = (4.44\ \mathrm{mA/V^2})(0.0213\ \mathrm{V^2}) = 94.8\ \mu$A $= 2I_{D1}$ ✓.

$M_3$ in triode carries 47.4 µA with overdrive $V_{SG3} - |V_{THP}| = 0.3$ V; the smaller root of $I = \beta_p(V_{ov}V_{SD} - V_{SD}^2/2)$ gives

$$
\begin{aligned}
V_{SD3} &= 0.3 - \sqrt{0.3^2 - \frac{2(47.4\ \mu\mathrm{A})}{2.22\ \mathrm{mA/V^2}}} = 0.3 - \sqrt{0.090 - 0.043} = 0.3 - 0.218 = 0.082\ \mathrm{V},\\
V_X = V_Y &= 3 - 0.082 = 2.92\ \mathrm{V}.
\end{aligned}
$$

**(c) Tail saturates.** When $V_P$ reaches $V_{b1} - V_{THN} = 0.3$ V, the tail carries $I_{SS}$, each side carries $I_{SS}/2 = I_P$, and the PMOS devices reach their saturation edge ($V_X = V_Y = 2.7$ V). This happens at

$$V_{in,CM} = V_P + V_{THN} + \sqrt{\frac{2(I_{SS}/2)}{\beta_n}} = 0.3 + 0.7 + \sqrt{\frac{2(100\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 0.3 + 0.7 + 0.316 = 1.32\ \mathrm{V}.$$

**(d) Above 1.32 V.** All devices are saturated: two current sources $I_P$ on top and a tail sinking $I_{SS}$ below. With $\lambda = 0$ and exactly $2I_P = I_{SS}$, nothing pins the common level; in practice it drifts toward $V_{DD}$ if $2I_P > I_{SS}$, or toward ground (pushing the input pair into triode) if $2I_P < I_{SS}$, so common-mode feedback is needed. Whatever it is, it is the same at X and Y.

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

The circuit is symmetric, so the two outputs move together, $R_1$ has no voltage across it and carries no current, and the sketch is a horizontal line on the axis. For reference, the common output level is $V_{DD}$ while the pair is off, falls as the pair turns on, and is afterwards set by the balance between the PMOS source currents and the tail current: ill-defined without common-mode feedback, but equal on both sides.

**Common mistake.** Plotting a single output (for example $V_X$, which falls from 3 V as the pair turns on) and calling it $V_{out}$. That is the common-mode output level; $V_X - V_Y$ is zero.

**Common mistake.** Assuming $R_1$ carries current as the common-mode level changes, which would give a nonzero $V_{out}$. $R_1$ connects two nodes at the same potential, so its current is zero.
