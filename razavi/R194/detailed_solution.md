# Detailed solution - R194

**Approach.** The inputs are tied together, so the excitation is purely common-mode. In a symmetric circuit the two input devices then carry equal currents, the two cascodes carry equal currents, and the two outputs sit at the same voltage. The differential output is therefore zero for the whole sweep. We show this with KCL at the folding nodes and then, for reference, follow the common output level.

### Step 1 — Reading the circuit and the sweep

From the figure:

- PMOS input pair $M_1$, $M_2$, with tail current source $M_7$ (PMOS, gate at $V_{b2}$) from $V_{DD}$.
- NMOS current sinks $M_3$, $M_4$ (gates at $V_{b1}$), each sinking $I_N$ from a folding node.
- NMOS cascodes $M_5$, $M_6$ (gates at $V_{b3}$), whose drains go to $V_{DD}$ through $R_D$.
- Crossed wiring:
  - the drain of $M_1$ joins $M_3$ and the source of $M_6$ (right output branch);
  - the drain of $M_2$ joins $M_4$ and the source of $M_5$ (left output branch).
- $V_{out} = V_{left} - V_{right}$, where the left output is the drain of $M_5$ and the right output is the drain of $M_6$.

**The sweep.** $V_{in1} = V_{in2} = V_{in,CM}$ goes from 0 to 3 V; the differential input is zero.

### Step 2 — KCL shows the two outputs are equal

KCL at the folding node of $M_1$ (current in from $M_1$ plus current in from the cascode equals current out through $M_3$):

$$I_{D1} + I_{M6} = I_N \quad\Longrightarrow\quad I_{M6} = I_N - I_{D1}.$$

Likewise, at the folding node of $M_2$:

$$I_{M5} = I_N - I_{D2}.$$

Ohm's law on the load resistors gives the outputs:

$$V_{left} = V_{DD} - R_D(I_N - I_{D2}), \qquad V_{right} = V_{DD} - R_D(I_N - I_{D1}).$$

So

$$V_{out} = V_{left} - V_{right} = R_D(I_{D2} - I_{D1}).$$

$M_1$ and $M_2$ have the same gate voltage ($V_{in,CM}$), the same source (node S) and identical sizes. Their drains, the folding nodes, are held by identical cascodes and sinks, so they carry equal currents (KCL at S: $I_{D1} = I_{D2} = I_{D7}/2$). Therefore

$$V_{out} = R_D(I_{D2} - I_{D1}) = 0 .$$

*Intuition:* the crossing of the wires does not matter here. Each output depends on the current of one input device, and with equal gate voltages both devices carry the same current, so both outputs are pulled down by the same amount.

### Step 3 — The common output level (for reference)

With $I_{D1} = I_{D2} = I_{D7}/2$, both outputs are at

$$V_{left} = V_{right} = V_{DD} - R_D\left(I_N - \frac{I_{D7}}{2}\right).$$

So the common level follows the tail current. Take an example design (free choices): $\beta_p = \mu_pC_{ox}(W/L)_{1,2} = 2\ \mathrm{mA/V^2}$, $I_{SS} = 200\ \mu$A, $I_N = 300\ \mu$A, $R_D = 5\ \mathrm{k}\Omega$. The tail $M_7$ has overdrive 0.3 V, i.e. $V_{SG7} = 1.1$ V, so $V_{b2} = 1.9$ V.

**(a) Low and middle $V_{in,CM}$: pair and tail saturated.** Each branch carries $I_{SS}/2$:

$$V_{left} = V_{right} = V_{DD} - R_D\left(I_N - \frac{I_{SS}}{2}\right) = 3 - (5\ \mathrm{k}\Omega)(300 - 100)\ \mu\mathrm{A} = 2.0\ \mathrm{V}.$$

At very low $V_{in,CM}$ the PMOS input devices may enter triode (their drains, the folding nodes, sit above $V_{in,CM} + |V_{THP}|$). The saturated tail still forces $I_{SS}/2$ through each, so the level does not change.

**(b) The tail leaves saturation.** The common source node sits at $V_S = V_{in,CM} + V_{SG1}$, with

$$V_{SG1} = |V_{THP}| + \sqrt{\frac{2(I_{SS}/2)}{\beta_p}} = 0.8 + \sqrt{\frac{2(100\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 0.8 + 0.316 = 1.116\ \mathrm{V}.$$

The PMOS tail is saturated while $V_{SD7} \ge V_{SG7} - |V_{THP}|$, i.e. $V_S \le V_{b2} + |V_{THP}| = 2.7$ V. This fails for

$$V_{in,CM} > 2.7 - 1.116 = 1.58\ \mathrm{V}.$$

Above that, $M_7$ is in triode and the tail current shrinks. With less current folded into the folding nodes, the cascodes must carry *more* ($I_N - I_{D7}/2$ grows), so both outputs **fall**.

**(c) Pair off.** When $V_{in,CM} \ge V_{DD} - |V_{THP}| = 2.2$ V, even $V_S = V_{DD}$ gives $V_{SG} \le |V_{THP}|$, so the pair is off. The cascodes then carry the full $I_N$:

$$V_{left} = V_{right} = V_{DD} - R_DI_N = 3 - (5\ \mathrm{k}\Omega)(300\ \mu\mathrm{A}) = 1.5\ \mathrm{V}.$$

Solving the triode tail together with the square law of the pair at a few points gives:

| $V_{in,CM}$ (V) | Tail current (µA) | $V_{left} = V_{right}$ (V) | $V_{out}$ (V) |
|---|---|---|---|
| 0 to 1.58 | 200 | 2.00 | 0 |
| 1.8 | 140 | 1.85 | 0 |
| 2.0 | 51 | 1.63 | 0 |
| 2.2 to 3.0 | 0 | 1.50 | 0 |

(The breakpoint at 1.58 V depends on the chosen $V_{b2}$ and device sizes; the end value $V_{DD} - R_DI_N$ and the turn-off point $V_{DD} - |V_{THP}|$ do not.)

### Result

$$V_{out} = 0 \quad\text{for the whole sweep } 0 \le V_{in1} = V_{in2} \le 3\ \mathrm{V}.$$

Equal inputs applied to a symmetric circuit give equal currents in $M_1$ and $M_2$, hence equal cascode currents and identical output voltages. The sketch is a horizontal line on the axis. For reference, the common output level is $V_{DD} - R_D(I_N - I_{SS}/2)$ while the PMOS pair and tail are saturated. As the input common mode approaches $V_{DD} - |V_{THP}|$, the tail leaves saturation, the pair turns off, and the outputs fall to $V_{DD} - R_DI_N$.

**Common mistake.** Plotting one output-node voltage (for example its drop from 2.0 V to 1.5 V near the top of the sweep) and calling it $V_{out}$. That is the common-mode output level; the differential output $V_{left} - V_{right}$ is zero.

**Common mistake.** Thinking that the crossed folding connections create a differential output for a common-mode input. The crossing only decides which output each input device controls. With identical gate voltages both devices carry identical currents, so both outputs move together.
