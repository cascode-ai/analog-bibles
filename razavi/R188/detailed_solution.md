# Detailed solution - R188

**Approach.** Both inputs are tied together, so the excitation is purely common-mode. In a symmetric circuit this produces identical voltages on the two sides. No current then flows in the resistor string $R_1$–$R_2$, and the differential output $V_{out} = V_X - V_Y$ is zero throughout. We prove this with KCL and then, as a check, follow the common level of the two outputs (which does move) through the sweep.

### Step 1 — Reading the circuit and the sweep

From the figure:

- $M_1$–$M_2$: NMOS differential pair (sources at node P) with tail transistor $M_5$ (gate at $V_b$), which carries $I_{SS}$ when saturated.
- $M_3$, $M_4$: PMOS loads, sources at $V_{DD}$, drains at the outputs X (left) and Y (right). Their gates are tied to node N, the junction of $R_1$ (from X) and $R_2$ (to Y), with $R_1 = R_2$.
- $V_{out} = V_X - V_Y$.

**The sweep.** $V_{in1} = V_{in2} = V_{in,CM}$ goes from 0 to 3 V; the differential input is zero throughout.

### Step 2 — KCL gives the symmetric solution

The gates draw no current, so the current $I_R$ that flows from X to N through $R_1$ continues from N to Y through $R_2$:

$$I_R = \frac{V_X - V_N}{R_1} = \frac{V_N - V_Y}{R_2}.$$

Try $V_X = V_Y$:

1. With $R_1 = R_2$, the previous equation gives $V_N = V_X = V_Y$ and $I_R = 0$: the resistors have no voltage across them and carry no current.
2. $M_3$ and $M_4$ then have equal gate (N), source ($V_{DD}$) and drain voltages, so $I_{D3} = I_{D4}$.
3. $M_1$ and $M_2$ have equal gate ($V_{in,CM}$), source ($V_P$) and drain voltages, so $I_{D1} = I_{D2} = I_{D5}/2$ (KCL at P).
4. KCL at X ($I_{D3} = I_{D1} + I_R$) and KCL at Y ($I_{D4} + I_R = I_{D2}$) reduce to the same equation, $I_{D3} = I_{D1}$.

So the symmetric operating point satisfies all the circuit equations. Moreover, here it is unique even with $\lambda = 0$, because the common level is pinned (Step 3). Therefore

$$V_X = V_Y \quad\Longrightarrow\quad V_{out} = 0\ \text{for every } V_{in,CM}.$$

*Intuition:* with no current in $R_1$ and $R_2$, the gate of each PMOS is at the potential of its own drain, so for common-mode signals $M_3$ and $M_4$ behave as **diode-connected** devices. Both halves are identical diode-loaded stages driven by the same input, so they produce identical outputs.

### Step 3 — The common output level (for reference)

Because each PMOS behaves as a diode for common-mode signals, its current fixes its $V_{SG}$, and hence the output level:

$$V_X = V_Y = V_{DD} - |V_{GS3}|, \qquad |V_{GS3}| = |V_{THP}| + \sqrt{\frac{2I_{D3}}{\beta_p}}, \qquad \beta_p = \mu_pC_{ox}\left(\frac WL\right)_{3,4},$$

with $I_{D3} = I_{D5}/2$. We follow it with an example design (sizes are free): $\beta_n = \mu_nC_{ox}(W/L)_{1,2} = 2\ \mathrm{mA/V^2}$, $\beta_p = 2.22\ \mathrm{mA/V^2}$, $V_b = 1$ V and $\mu_nC_{ox}(W/L)_5 = 4.44\ \mathrm{mA/V^2}$, so that

$$I_{SS} = \tfrac12(4.44\ \mathrm{mA/V^2})(1 - 0.7)^2\ \mathrm{V^2} = 200\ \mu\mathrm{A}.$$

**(a) $V_{in,CM} < V_{THN} = 0.7$ V: pair off.** No current flows. A diode-connected PMOS carrying zero current must have $|V_{GS3}| \le |V_{THP}|$, so in the square-law model the output can be anywhere between $V_{DD} - |V_{THP}| = 2.2$ V and $V_{DD} = 3$ V. In a real device, subthreshold conduction keeps charging the output upward as long as $V_{SG} > 0$, so the level drifts toward $V_{DD}$, limited only by leakage.

**(b) Pair conducting, tail in triode.** For $V_{in,CM}$ a little above 0.7 V, $V_P$ is small, $M_5$ is in triode, and the tail current grows with $V_{in,CM}$. Each diode-connected PMOS carries $I_{D5}/2$, so the outputs start at about $V_{DD} - |V_{THP}|$ and fall as the current grows.

*Worked point, $V_{in,CM} = 1.0$ V.* KCL at P ($M_5$ in triode) and the square law for $M_1$ (saturated):

$$
\begin{aligned}
2I_{D1} &= (4.44\ \mathrm{mA/V^2})\left[0.3V_P - \tfrac12V_P^2\right],\\
I_{D1} &= \tfrac12(2\ \mathrm{mA/V^2})(1.0 - V_P - 0.7)^2 .
\end{aligned}
$$

These are satisfied by $V_P = 0.082$ V, which gives $I_{D1} = (1\ \mathrm{mA/V^2})(0.218\ \mathrm{V})^2 = 47.4\ \mu$A. (Check: $(4.44\ \mathrm{mA/V^2})(0.3\times0.082 - 0.5\times0.082^2) = 94.8\ \mu\mathrm{A} = 2I_{D1}$ ✓.) Then

$$
\begin{aligned}
|V_{GS3}| &= 0.8 + \sqrt{\frac{2(47.4\ \mu\mathrm{A})}{2.22\ \mathrm{mA/V^2}}} = 0.8 + \sqrt{0.0427}\ \mathrm{V} = 0.8 + 0.207 = 1.007\ \mathrm{V},\\
V_X = V_Y &= 3 - 1.007 = 1.99\ \mathrm{V}.
\end{aligned}
$$

**(c) Tail saturated.** When $V_P$ reaches $V_b - V_{THN} = 0.3$ V, the tail delivers $I_{SS}$. With $M_1$ saturated at $I_{SS}/2$:

$$V_{in,CM} = V_P + V_{THN} + \sqrt{\frac{2(I_{SS}/2)}{\beta_n}} = 0.3 + 0.7 + \sqrt{\frac{2(100\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 1.32\ \mathrm{V}.$$

From then on each PMOS carries $I_{SS}/2$ and the output level is constant:

$$V_X = V_Y = V_{DD} - |V_{THP}| - \sqrt{\frac{I_{SS}}{\beta_p}} = 3 - 0.8 - \sqrt{\frac{200\ \mu\mathrm{A}}{2.22\ \mathrm{mA/V^2}}} = 3 - 0.8 - 0.3 = 1.9\ \mathrm{V}.$$

At high $V_{in,CM}$ (above $V_X + V_{THN} = 2.6$ V) the input devices enter triode. Their current is still forced to $I_{SS}/2$ each by the saturated tail, so the output level does not change.

| $V_{in,CM}$ (V) | State | $V_X = V_Y$ (V) | $V_{out}$ (V) |
|---|---|---|---|
| 0 to 0.7 | pair off | between 2.2 and 3.0 (drifts toward 3.0) | 0 |
| 0.8 | pair on, tail triode | 2.12 | 0 |
| 1.0 | same | 1.99 | 0 |
| 1.2 | same | 1.92 | 0 |
| ≥ 1.32 | tail saturated | 1.90 | 0 |

### Result

$$V_{out} = 0 \quad\text{for the whole sweep } 0 \le V_{in1} = V_{in2} \le 3\ \mathrm{V}.$$

The circuit is symmetric, so the two outputs have identical voltages and $R_1$, $R_2$ carry no current. The sketch is a horizontal line on the axis. For reference, the common output level, $V_{DD} - |V_{GS3}|$ of the effectively diode-connected loads, behaves as follows:

- While the pair is off, it lies between $V_{DD} - |V_{THP}|$ (square-law limit) and $V_{DD}$ (subthreshold conduction).
- It falls as the pair turns on.
- It settles at $V_{DD} - |V_{GS3}(I_{SS}/2)|$ once the tail saturates.

**Common mistake.** Plotting one output node's voltage (the common level, for example falling from about 2.2 V to 1.9 V) and calling it $V_{out}$. The problem asks for the difference $V_X - V_Y$, which is zero.

**Common mistake.** Giving a nonzero $V_{out}$ that varies with the common input, for instance by assuming current flows through $R_1$ and $R_2$ as the level changes. With identical outputs the resistor string has no voltage across it, so it carries no current, and any common-mode change cancels in $V_X - V_Y$.
