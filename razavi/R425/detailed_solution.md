# Detailed solution - R425

**Approach.** With the output tied to the gate of $M_2$, the op amp is a unity-gain buffer: both input gates follow $V_{out}$. Find the node voltages fixed by $V_b$ and the PMOS mirror, then write each transistor's saturation condition as a bound on $V_{out}$; the tightest bounds give the swing.

### Step 1 — Overdrives and fixed node voltages

Because of the feedback, $V_{in} \approx V_{out}$ and each branch carries 0.5 mA. For the NMOS devices ($W/L = 200$):

$$
\begin{aligned}
V_{OD1\text{–}4} &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.0373\ \mathrm{V^2}} = 0.193\ \mathrm{V},\\
V_{GS1\text{–}4} &= 0.7 + 0.193 = 0.893\ \mathrm{V}.
\end{aligned}
$$

Node X (source of the cascode $M_4$, drain of $M_2$) sits at

$$V_X = V_b - V_{GS4} = 1.4 - 0.893 = 0.507\ \mathrm{V},$$

and the source of $M_3$ (drain of $M_1$) at the same 0.507 V, regardless of $V_{out}$. For the PMOS devices ($W/L = 106/0.5 = 212$):

$$|V_{OD5\text{–}8}| = \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(212)}} = \sqrt{0.1228\ \mathrm{V^2}} = 0.350\ \mathrm{V},\qquad |V_{GS}| = 1.150\ \mathrm{V}.$$

The gates of $M_5$ and $M_6$ are at the drain of $M_3$, two diode drops ($M_7$ over $M_5$) below $V_{DD}$:

$$V_{G6} = V_{DD} - 2|V_{GS}| = 3 - 2.30 = 0.70\ \mathrm{V}.$$

### Step 2 — Lower limit: $M_4$ must stay saturated

$M_4$ has its gate at $V_b$ and its drain at $V_{out}$:

$$V_{out} \ge V_b - V_{TH4} = 1.4 - 0.7 = 0.70\ \mathrm{V}.$$

### Step 3 — Upper limit: $M_2$ (and $M_1$) must stay saturated

$M_2$ has its gate at $V_{out}$ and its drain at the fixed node X, so it needs $V_X \ge V_{G2} - V_{TH2}$:

$$
\begin{aligned}
0.507 &\ge V_{out} - 0.7\\
V_{out} &\le 0.507 + 0.7 = 1.207\ \mathrm{V}.
\end{aligned}
$$

$M_1$ gives the same limit (gate at $V_{in} \approx V_{out}$, drain at 0.507 V). Symbolically, $V_{out,max} = V_b - V_{GS4} + V_{TH2}$: raising $V_{out}$ raises the input gates while the cascodes pin their drains, pushing the input pair toward triode.

### Step 4 — The other devices do not limit the swing

- **$M_6$:** gate at 0.70 V, so it stays saturated while $V_{out} \le V_{G6} + |V_{THP}| = 0.70 + 0.8 = 1.50$ V, above the 1.207-V limit.
- **$M_8$:** its drain is the source of $M_6$, at $V_{G6} + |V_{GS6}| = 0.70 + 1.15 = 1.85$ V, so $|V_{DS8}| = 1.15\ \mathrm{V} > 0.35$ V regardless of $V_{out}$.
- **$M_5$, $M_7$:** diode-connected, always saturated.
- **$M_3$:** drain at 0.70 V, source at 0.507 V, so $V_{DS3} = 0.19$ V, just at the edge of saturation by design of the PMOS widths, independent of $V_{out}$.

### Step 5 — Swing

$$\text{swing} = V_{out,max} - V_{out,min} = 1.207 - 0.70 = 0.51\ \mathrm{V}.$$

$V_{out,max} - V_{out,min} = (V_b - V_{GS4} + V_{TH}) - (V_b - V_{TH}) = V_{TH} - V_{OD4} = 0.7 - 0.193$ V, independent of $V_b$: the telescopic op amp makes a poor unity-gain buffer.

**Remark on the tail.** The tail node is at $V_P = V_{out} - V_{GS1}$, which is negative ($-0.19$ V) at the bottom of the range; this is allowed only because $I_{SS}$ is ideal. If a real tail transistor needed $V_P \ge 0$, the lower limit would become $V_{GS1} = 0.89$ V and the swing would shrink to about 0.31 V.

### Result

$$V_b - V_{TH4} \le V_{out} \le V_b - V_{GS4} + V_{TH2}\ \Longrightarrow\ 0.70\ \mathrm{V} \le V_{out} \le 1.21\ \mathrm{V},$$

so the maximum output swing is about **0.51 V** ($= V_{TH} - V_{OD4}$). The lower limit is set by $M_4$ and the upper limit by $M_2$ (and $M_1$), whose gates follow the output.

**Common mistake.** Quoting the open-loop telescopic swing, $V_{DD}$ minus the stacked overdrives (about 2 V or more). With the input gates tied to the output, the input pair's saturation limits the swing.

**Common mistake.** Treating $V_{in}$ as fixed, so that $M_1$/$M_2$ appear to impose no upper limit. In a unity-gain buffer the input moves with the output.

**Common mistake.** Using gate–source voltages instead of thresholds, e.g. $V_{out} \ge V_b - V_{GS4}$. The drain of an NMOS can go down to $V_G - V_{TH}$.
