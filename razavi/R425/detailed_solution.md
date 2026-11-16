# Detailed solution - R425

**Approach.** The output is tied to the gate of $M_2$, so the op amp works as a unity-gain buffer: both input gates follow $V_{out}$. Find the fixed node voltages set by $V_b$ and the PMOS mirror, then write the saturation condition of each transistor as a bound on $V_{out}$. The tightest lower and upper bounds give the swing.

### Step 1 — The circuit and the currents

Reading the figure: $M_1$–$M_2$ form the input pair (tail $I_{SS} = 1$ mA at node P); $M_3$–$M_4$ are NMOS cascodes with gates at $V_b = 1.4$ V; $M_5$–$M_8$ form a PMOS cascode current mirror whose diode side ($M_7$ over $M_5$, both diode-connected) sits on the drain of $M_3$. The output is the drain of $M_4$/$M_6$ and is tied to the gate of $M_2$. Node X is the source of $M_4$ (drain of $M_2$).

Because of the feedback, $V_{in} \approx V_{out}$ and each branch carries 0.5 mA.

### Step 2 — Overdrives and fixed node voltages

**NMOS devices** ($W/L = 200$):

$$
\begin{aligned}
V_{OD1\text{–}4} &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.0373\ \mathrm{V^2}} = 0.193\ \mathrm{V},\\
V_{GS1\text{–}4} &= 0.7 + 0.193 = 0.893\ \mathrm{V}.
\end{aligned}
$$

**Node X** (source of the cascode $M_4$, whose gate is at $V_b$; no body effect):

$$V_X = V_b - V_{GS4} = 1.4 - 0.893 = 0.507\ \mathrm{V}.$$

The source of $M_3$ (drain of $M_1$) is at the same 0.507 V. The cascodes hold these drains fixed, regardless of $V_{out}$.

**PMOS devices** ($W/L = 106/0.5 = 212$):

$$|V_{OD5\text{–}8}| = \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(212)}} = \sqrt{0.1228\ \mathrm{V^2}} = 0.350\ \mathrm{V},\qquad |V_{GS}| = 1.150\ \mathrm{V}.$$

The gates of $M_5$ and $M_6$ are at the drain of $M_3$, two diode drops below $V_{DD}$:

$$V_{G6} = V_{DD} - 2|V_{GS}| = 3 - 2.30 = 0.70\ \mathrm{V}.$$

### Step 3 — Lower limit: $M_4$ must stay saturated

$M_4$ has its gate at $V_b$ and its drain at $V_{out}$. Saturation requires the drain to be no lower than one threshold below the gate:

$$V_{out} \ge V_b - V_{TH4} = 1.4 - 0.7 = 0.70\ \mathrm{V}.$$

### Step 4 — Upper limit: $M_2$ (and $M_1$) must stay saturated

$M_2$ has its gate at $V_{out}$ (the feedback connection) and its drain at the fixed node X. Saturation requires $V_X \ge V_{G2} - V_{TH2}$:

$$
\begin{aligned}
0.507 &\ge V_{out} - 0.7\\
V_{out} &\le 0.507 + 0.7 = 1.207\ \mathrm{V}.
\end{aligned}
$$

$M_1$ gives the same limit: its gate is at $V_{in} \approx V_{out}$ and its drain is at the source of $M_3$, also 0.507 V.

Symbolically, $V_{out,max} = V_b - V_{GS4} + V_{TH2}$.

**Intuition.** In a unity-gain buffer the input common-mode level *is* the output level. Raising $V_{out}$ raises the gates of the input pair while their drains are pinned by the cascodes at $V_b - V_{GS}$, so the input devices are pushed toward the triode region.

### Step 5 — The other devices do not limit the swing

- **$M_6$ (PMOS cascode):** its gate is at 0.70 V, so it stays saturated while $V_{out} \le V_{G6} + |V_{THP}| = 0.70 + 0.8 = 1.50$ V, above the 1.207-V limit.
- **$M_8$:** its drain is the source of $M_6$, at $V_{G6} + |V_{GS6}| = 0.70 + 1.15 = 1.85$ V, so $|V_{DS8}| = 1.15\ \mathrm{V} > 0.35$ V regardless of $V_{out}$.
- **$M_5$, $M_7$:** diode-connected, always saturated.
- **$M_3$:** its drain is at 0.70 V and its source at 0.507 V, so $V_{DS3} = 0.19$ V, just at the edge of saturation by the design of the PMOS widths; it does not depend on $V_{out}$.

### Step 6 — Swing

$$\text{swing} = V_{out,max} - V_{out,min} = 1.207 - 0.70 = 0.51\ \mathrm{V}.$$

Notice that $V_{out,max} - V_{out,min} = (V_b - V_{GS4} + V_{TH}) - (V_b - V_{TH}) = V_{TH} - V_{OD4} = 0.7 - 0.193$ V, independent of $V_b$: the telescopic op amp makes a poor unity-gain buffer.

**Remark on the tail.** The tail node is at $V_P = V_{out} - V_{GS1}$, which is negative ($-0.19$ V) at the bottom of the range. This is allowed only because $I_{SS}$ is taken as ideal. If a real tail transistor needed $V_P \ge 0$, the lower limit would become $V_{GS1} = 0.89$ V and the swing would shrink to about 0.31 V.

### Result

$$V_b - V_{TH4} \le V_{out} \le V_b - V_{GS4} + V_{TH2}\ \Longrightarrow\ 0.70\ \mathrm{V} \le V_{out} \le 1.21\ \mathrm{V},$$

so the maximum output swing is about **0.51 V** ($= V_{TH} - V_{OD4}$). The lower limit is set by $M_4$ and the upper limit by $M_2$ (and $M_1$), whose gates follow the output.

**Common mistake.** Treating the output as that of an open-loop telescopic op amp and quoting $V_{DD}$ minus the overdrives of the stacked devices (about 2 V or more). Here the input gates are connected to the output, so the input pair's saturation limits the swing.

**Common mistake.** Forgetting that the input moves with the output. If $V_{in}$ is treated as fixed, $M_1$/$M_2$ appear to impose no upper limit, which is wrong for a unity-gain buffer.

**Common mistake.** Using gate–source voltages instead of thresholds in the limits, e.g. $V_{out} \ge V_b - V_{GS4}$. The drain of an NMOS can go down to $V_G - V_{TH}$, not $V_G - V_{GS}$.
