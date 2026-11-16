# Detailed solution - R190

**Approach.** The inputs are tied together, so the excitation is purely common-mode. In a perfectly symmetric circuit, identical inputs produce identical currents and identical voltages in the two halves. The differential output $V_{out} = V_A - V_{A'}$ is therefore zero for the whole sweep. We show this with the branch equations and then, for reference, follow the common level of the two outputs.

### Step 1 — Reading the circuit and the sweep

Left half (the right half mirrors it):

- $M_3$ (PMOS) has its source at $V_{DD}$ and its drain at node A, the left output.
- $R_1$ runs from A down to node B, the drain of $M_1$.
- The gate of $M_3$ is tied to B, the bottom of $R_1$.

$M_1$, $M_2$ form the NMOS input pair, and $M_5$ (gate at $V_b$) is the tail, carrying $I_{SS}$ when saturated. On the right, $M_4$, $R_2$, $M_2$ form nodes A′ and B′. $V_{out} = V_A - V_{A'}$.

**The sweep.** $V_{in1} = V_{in2} = V_{in,CM}$ goes from 0 to 3 V. The differential input is zero throughout.

### Step 2 — The two halves obey identical equations

The gate of $M_3$ draws no current, so $M_3$ carries the same current as $M_1$. With $M_3$ saturated:

$$V_A = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_{D1}}{\beta_p}} + I_{D1}R_1, \qquad \beta_p = \mu_pC_{ox}\left(\frac WL\right)_{3,4},$$

and likewise

$$V_{A'} = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_{D2}}{\beta_p}} + I_{D2}R_2 .$$

$M_1$ and $M_2$ have the same gate voltage ($V_{in,CM}$), the same source voltage ($V_P$) and identical sizes. In saturation their currents depend only on $V_{GS}$, so they are equal. KCL at P then gives

$$I_{D1} = I_{D2} = \frac{I_{D5}}{2}.$$

With $I_{D1} = I_{D2}$ and $R_1 = R_2$, the two expressions above are identical, so

$$V_A = V_{A'} \quad\Longrightarrow\quad V_{out} = V_A - V_{A'} = 0 .$$

(If an input device enters triode at high $V_{in,CM}$, both enter it identically, with the same drain voltage, so the currents are still equal.)

*Intuition:* a differential output measures the difference between two halves. A common-mode input drives both halves in exactly the same way, so there is no difference to report. This is the common-mode rejection of a perfectly matched pair.

### Step 3 — The common output level (for reference)

The level of both outputs does change with $V_{in,CM}$. Each output equals the "diode" voltage $V_{DD} - |V_{GS3}|$ plus the drop $I_{D1}R_1$. Example design (free choices): $\beta_n = 2\ \mathrm{mA/V^2}$, $\beta_p = 2\ \mathrm{mA/V^2}$, $R_1 = R_2 = 500\ \Omega$, and a tail with $V_b = 1$ V and $\mu_nC_{ox}(W/L)_5 = 4.44\ \mathrm{mA/V^2}$, so

$$I_{SS} = \tfrac12(4.44\ \mathrm{mA/V^2})(1 - 0.7)^2\ \mathrm{V^2} = 200\ \mu\mathrm{A}.$$

**(a) Pair off, $V_{in,CM} < 0.7$ V.** No current flows. $R_1$ drops nothing, so the gate of $M_3$ is at its drain potential, and a PMOS in that connection carrying zero current has $V_{SG} \approx |V_{THP}|$:

$$V_A = V_{A'} \approx V_{DD} - |V_{THP}| = 2.2\ \mathrm{V}$$

(slightly higher in practice, because subthreshold conduction lets it creep up).

**(b) Pair on, tail in triode.** For $V_{in,CM}$ a little above 0.7 V, the tail current grows with $V_{in,CM}$ and each side carries $I_{D5}/2$. *Worked point, $V_{in,CM} = 1.0$ V.* KCL at P with $M_5$ in triode, and $M_1$ saturated:

$$2I_{D1} = (4.44\ \mathrm{mA/V^2})\left[0.3V_P - \tfrac12V_P^2\right], \qquad I_{D1} = \tfrac12(2\ \mathrm{mA/V^2})(1.0 - V_P - 0.7)^2 .$$

These give $V_P = 0.082$ V and $I_{D1} = (1\ \mathrm{mA/V^2})(0.218\ \mathrm{V})^2 = 47.4\ \mu$A. Check: $(4.44\ \mathrm{mA/V^2})(0.3\times0.082 - 0.5\times0.082^2) = 94.8\ \mu\mathrm{A} = 2I_{D1}$ ✓. Then

$$
\begin{aligned}
\sqrt{\frac{2I_{D1}}{\beta_p}} &= \sqrt{\frac{2(47.4\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = \sqrt{0.0474}\ \mathrm{V} = 0.218\ \mathrm{V},\\
I_{D1}R_1 &= (47.4\ \mu\mathrm{A})(500\ \Omega) = 0.024\ \mathrm{V},\\
V_A = V_{A'} &= 3 - 0.8 - 0.218 + 0.024 = 2.006\ \mathrm{V}.
\end{aligned}
$$

$M_3$ is saturated, since $I_{D1}R_1 = 0.024\ \mathrm{V} < |V_{THP}|$.

**(c) Tail saturated.** $M_5$ saturates when $V_P = V_b - V_{THN} = 0.3$ V. With each input device then at $I_{SS}/2 = 100\ \mu$A,

$$V_{in,CM} = 0.3 + 0.7 + \sqrt{\frac{2(100\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 1.32\ \mathrm{V}.$$

From here on the current per side is fixed at $I_{SS}/2$, so the output level is constant:

$$
\begin{aligned}
V_A = V_{A'} &= V_{DD} - |V_{THP}| - \sqrt{\frac{I_{SS}}{\beta_p}} + \frac{I_{SS}R_1}{2}\\
&= 3 - 0.8 - \sqrt{\frac{200\ \mu\mathrm{A}}{2\ \mathrm{mA/V^2}}} + \frac{(200\ \mu\mathrm{A})(500\ \Omega)}{2}\\
&= 3 - 0.8 - 0.316 + 0.05 = 1.93\ \mathrm{V}.
\end{aligned}
$$

At very high $V_{in,CM}$ (above $V_B + V_{THN} \approx 1.88 + 0.7 = 2.58$ V) the input devices enter triode. The tail still forces $I_{SS}/2$ through each of them, so the output level does not change.

| $V_{in,CM}$ (V) | State | $V_A = V_{A'}$ (V) | $V_{out}$ (V) |
|---|---|---|---|
| 0 to 0.7 | pair off | ≈ 2.2 | 0 |
| 0.8 | pair on, tail triode | 2.12 | 0 |
| 1.0 | same | 2.01 | 0 |
| 1.2 | same | 1.95 | 0 |
| ≥ 1.32 | tail saturated | 1.93 | 0 |

### Result

$$V_{out} = 0 \quad\text{for the whole sweep } 0 \le V_{in1} = V_{in2} \le 3\ \mathrm{V}.$$

Equal inputs applied to a symmetric circuit give identical voltages at the two outputs, so the sketch is a horizontal line on the axis. For reference, the common level of the outputs is about $V_{DD} - |V_{THP}|$ while the pair is off. Once the tail saturates it settles at $V_{DD} - |V_{THP}| - \sqrt{I_{SS}/\beta_p} + I_{SS}R_1/2$.

**Common mistake.** Describing the voltage of a single output node (which falls from about 2.2 V to about 1.93 V in the example) and calling it $V_{out}$. That is the common-mode output level. The problem defines $V_{out}$ as the difference between the two terminals, and that difference is zero.

**Common mistake.** Claiming a nonzero differential output that changes with the common input, for example because "the tail current changes during the sweep". A change of the tail current is shared equally by the two halves, so it moves both outputs by the same amount and cancels in $V_A - V_{A'}$.
