# Detailed solution - R188

**Approach.** Both inputs are tied together, so the excitation is purely common-mode and the symmetric circuit has identical voltages on its two sides. No current then flows in the resistor string $R_1$–$R_2$, and $V_{out} = V_X - V_Y$ is zero throughout. The common level of the two outputs, which does move, is followed only as a check.

### Step 1 — KCL gives the symmetric solution

Call the left output X (drains of $M_1$, $M_3$), the right output Y (drains of $M_2$, $M_4$), the junction of $R_1$ and $R_2$ (the PMOS gates) N, and the common source node of $M_1$, $M_2$ P. Throughout the sweep $V_{in1} = V_{in2} = V_{in,CM}$.

The gates draw no current, so the current $I_R$ from X to N through $R_1$ continues from N to Y through $R_2$:

$$I_R = \frac{V_X - V_N}{R_1} = \frac{V_N - V_Y}{R_2}.$$

Try $V_X = V_Y$. With $R_1 = R_2$, this gives $V_N = V_X = V_Y$ and $I_R = 0$. $M_3$ and $M_4$ then have equal gate (N), source ($V_{DD}$) and drain voltages, so $I_{D3} = I_{D4}$; $M_1$ and $M_2$ have equal gate ($V_{in,CM}$), source ($V_P$) and drain voltages, so $I_{D1} = I_{D2} = I_{D5}/2$. KCL at X ($I_{D3} = I_{D1} + I_R$) and at Y ($I_{D4} + I_R = I_{D2}$) reduce to the same equation, $I_{D3} = I_{D1}$. The symmetric solution is unique even with $\lambda = 0$, because the common level is pinned (Step 2). Therefore

$$V_X = V_Y \quad\Longrightarrow\quad V_{out} = 0\ \text{for every } V_{in,CM}.$$

With no current in $R_1$ and $R_2$, each PMOS gate sits at its own drain potential, so for common-mode signals $M_3$ and $M_4$ are **diode-connected**: both halves are identical diode-loaded stages driven by the same input.

### Step 2 — The common output level (for reference)

Each effectively diode-connected PMOS fixes the output level through its current $I_{D3} = I_{D5}/2$:

$$V_X = V_Y = V_{DD} - |V_{GS3}|, \qquad |V_{GS3}| = |V_{THP}| + \sqrt{\frac{2I_{D3}}{\beta_p}}, \qquad \beta_p = \mu_pC_{ox}\left(\frac WL\right)_{3,4}.$$

Example design (the sizes are free): $\beta_n = \mu_nC_{ox}(W/L)_{1,2} = 2\ \mathrm{mA/V^2}$, $\beta_p = 2.22\ \mathrm{mA/V^2}$, $V_b = 1$ V and $\mu_nC_{ox}(W/L)_5 = 4.44\ \mathrm{mA/V^2}$, so that

$$I_{SS} = \tfrac12(4.44\ \mathrm{mA/V^2})(1 - 0.7)^2\ \mathrm{V^2} = 200\ \mu\mathrm{A}.$$

**(a) $V_{in,CM} < V_{THN} = 0.7$ V: pair off.** A diode-connected PMOS carrying no current needs only $|V_{GS3}| \le |V_{THP}|$, so in the square-law model the output can be anywhere between $V_{DD} - |V_{THP}| = 2.2$ V and $V_{DD} = 3$ V. In a real device subthreshold conduction keeps charging the output while $V_{SG} > 0$, so the level drifts toward $V_{DD}$, limited only by leakage.

**(b) Pair conducting, tail in triode.** Just above 0.7 V, $V_P$ is small, $M_5$ is in triode and the tail current grows with $V_{in,CM}$. Each PMOS carries $I_{D5}/2$, so the outputs start at about $V_{DD} - |V_{THP}|$ and fall as the current grows.

*Worked point, $V_{in,CM} = 1.0$ V.* KCL at P ($M_5$ in triode), and $M_1$ saturated:

$$
\begin{aligned}
2I_{D1} &= (4.44\ \mathrm{mA/V^2})\left[0.3V_P - \tfrac12V_P^2\right],\\
I_{D1} &= \tfrac12(2\ \mathrm{mA/V^2})(1.0 - V_P - 0.7)^2 .
\end{aligned}
$$

These give $V_P = 0.082$ V and $I_{D1} = (1\ \mathrm{mA/V^2})(0.218\ \mathrm{V})^2 = 47.4\ \mu$A (check: $(4.44\ \mathrm{mA/V^2})(0.3\times0.082 - 0.5\times0.082^2) = 94.8\ \mu\mathrm{A} = 2I_{D1}$ ✓). Then

$$
\begin{aligned}
|V_{GS3}| &= 0.8 + \sqrt{\frac{2(47.4\ \mu\mathrm{A})}{2.22\ \mathrm{mA/V^2}}} = 0.8 + \sqrt{0.0427}\ \mathrm{V} = 0.8 + 0.207 = 1.007\ \mathrm{V},\\
V_X = V_Y &= 3 - 1.007 = 1.99\ \mathrm{V}.
\end{aligned}
$$

**(c) Tail saturated.** $V_P$ reaches $V_b - V_{THN} = 0.3$ V and the tail delivers $I_{SS}$ when, with $M_1$ saturated at $I_{SS}/2$,

$$V_{in,CM} = V_P + V_{THN} + \sqrt{\frac{2(I_{SS}/2)}{\beta_n}} = 0.3 + 0.7 + \sqrt{\frac{2(100\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 1.32\ \mathrm{V}.$$

From then on each PMOS carries $I_{SS}/2$ and the output level is constant:

$$V_X = V_Y = V_{DD} - |V_{THP}| - \sqrt{\frac{I_{SS}}{\beta_p}} = 3 - 0.8 - \sqrt{\frac{200\ \mu\mathrm{A}}{2.22\ \mathrm{mA/V^2}}} = 3 - 0.8 - 0.3 = 1.9\ \mathrm{V}.$$

Above $V_{in,CM} = V_X + V_{THN} = 2.6$ V the input devices enter triode, but the saturated tail still forces $I_{SS}/2$ through each, so the level does not change.

| $V_{in,CM}$ (V) | State | $V_X = V_Y$ (V) | $V_{out}$ (V) |
|---|---|---|---|
| 0 to 0.7 | pair off | between 2.2 and 3.0 (drifts toward 3.0) | 0 |
| 0.8 | pair on, tail triode | 2.12 | 0 |
| 1.0 | same | 1.99 | 0 |
| 1.2 | same | 1.92 | 0 |
| ≥ 1.32 | tail saturated | 1.90 | 0 |

### Result

$$V_{out} = 0 \quad\text{for the whole sweep } 0 \le V_{in1} = V_{in2} \le 3\ \mathrm{V}.$$

The circuit is symmetric, so the two outputs are identical and $R_1$, $R_2$ carry no current; the sketch is a horizontal line on the axis. For reference, the common output level, $V_{DD} - |V_{GS3}|$ of the effectively diode-connected loads:

- lies between $V_{DD} - |V_{THP}|$ (square-law limit) and $V_{DD}$ (subthreshold conduction) while the pair is off;
- falls as the pair turns on;
- settles at $V_{DD} - |V_{GS3}(I_{SS}/2)|$ once the tail saturates.

**Common mistake.** Plotting one output's voltage (the common level, for example falling from about 2.2 V to 1.9 V) and calling it $V_{out}$. The problem asks for $V_X - V_Y$, which is zero.

**Common mistake.** Giving a nonzero $V_{out}$ that varies with the common input, for instance by letting current flow through $R_1$ and $R_2$ as the level changes. With identical outputs the string has no voltage across it, so it carries no current.
