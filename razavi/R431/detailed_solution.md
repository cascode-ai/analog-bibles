# Detailed solution - R431

**Approach.** With the output tied to the gate of $M_2$, the op amp is a unity-gain buffer, so the input pair's gates follow the output. Find the node voltages the cascodes pin, write each transistor's saturation condition as a limit on $V_{out}$, and take the tightest lower and upper limits.

### Step 1 — The fixed voltages

Each branch carries 0.5 mA; all devices have $W/L = 200$, and $\gamma = 0$:

$$V_{OD} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}} = 0.193\ \mathrm{V},\qquad V_{GS1\text{–}4} = 0.7 + 0.193 = 0.893\ \mathrm{V}.$$

The drain of $M_2$ (source of the cascode $M_4$) is pinned at

$$V_{D2} = V_{b1} - V_{GS4} = 1.7 - 0.893 = 0.807\ \mathrm{V},$$

regardless of $V_{out}$. For the PMOS devices, $|V_{OD}| = \sqrt{2(0.5\ \mathrm{mA})/((38.4\ \mu\mathrm{A/V^2})(200))} = 0.361$ V.

### Step 2 — Lower limit: $M_4$

$M_4$ has its gate at $V_{b1}$ and its drain at $V_{out}$:

$$V_{out} \ge V_{b1} - V_{TH4} = 1.7 - 0.7 = 1.0\ \mathrm{V}.$$

### Step 3 — Upper limit: $M_2$ (and $M_1$)

$M_2$'s gate is at $V_{out}$ and its drain at 0.807 V, so saturation requires $V_{D2} \ge V_{G2} - V_{TH2}$:

$$
\begin{aligned}
0.807 &\ge V_{out} - 0.7\\
V_{out} &\le 1.507\ \mathrm{V}.
\end{aligned}
$$

$M_1$ gives the same limit (gate at $V_{in} \approx V_{out}$, drain at $V_{b1} - V_{GS3} = 0.807$ V). Symbolically, $V_{out,max} = V_{b1} - V_{GS4} + V_{TH2}$.

### Step 4 — The other devices do not bind

- **PMOS side.** With $V_{b2}$ chosen properly, the low-voltage cascode $M_8$/$M_6$ stays saturated up to $V_{out} = V_{DD} - |V_{OD8}| - |V_{OD6}| = 3 - 0.361 - 0.361 = 2.28$ V, well above 1.51 V.
- **Tail.** $V_P = V_{out} - V_{GS2} \ge 1.0 - 0.893 = 0.107$ V stays above ground over the whole range.
- **$M_3$:** its drain is at $V_X = V_{DD} - |V_{GS7}| = 1.84$ V, above $V_{b1} - V_{TH} = 1.0$ V. ✓

### Step 5 — Swing

$$\text{swing} = 1.507 - 1.0 \approx 0.51\ \mathrm{V}.$$

$V_{out,max} - V_{out,min} = (V_{b1} - V_{GS4} + V_{TH}) - (V_{b1} - V_{TH}) = V_{TH} - V_{OD4} = 0.7 - 0.193$ V, independent of $V_{b1}$: moving $V_{b1}$ only shifts the window. Raising $V_{out}$ pushes the input pair toward triode, lowering it pushes $M_4$ there, so the telescopic cascode makes a poor unity-gain buffer even though its open-loop range is much wider.

### Result

$$V_{b1} - V_{TH4} = 1.0\ \mathrm{V} \le V_{out} \le V_{b1} - V_{GS4} + V_{TH2} \approx 1.51\ \mathrm{V},$$

so the maximum output swing is about **0.51 V** ($= V_{TH} - V_{OD4}$), limited by $M_4$ at the bottom and by $M_2$ (and $M_1$) at the top.

**Common mistake.** Quoting the open-loop output range (from $V_{b1} - V_{TH}$ up to $V_{DD} - |V_{OD8}| - |V_{OD6}|$, about 1.3 V). With the output tied to the gate of $M_2$, the input pair sets a much lower upper limit.

**Common mistake.** Treating the input as fixed, which removes the upper limit from the input pair; in a unity-gain buffer the gate of $M_2$ moves with the output.

**Common mistake.** Using $W/L = 100$ instead of 200, which gives $V_{OD} = 0.273$ V and a swing of about 0.43 V.
