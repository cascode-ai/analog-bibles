# Detailed solution - R181

**Approach.** The inputs move in opposite directions around a fixed common-mode level of 1.5 V, so the pair simply steers the tail current from one side to the other. The output is zero at balance, changes with a slope set by the diode loads in parallel with half of $R_1$, and saturates once all the current is on one side, at a level fixed by a current balance between the two diodes and $R_1$.

### Step 1 — The input drive

Call the left output node (drains of $M_1$, $M_3$) $X$, the right one $Y$, and the tail node $P$; $V_{out} = V_X - V_Y$. With $V_{in2} = V_{DD} - V_{in1}$,

$$V_{in,CM} = \frac{V_{in1} + V_{in2}}{2} = \frac{V_{DD}}{2} = 1.5\ \mathrm{V}\ \text{(constant)}, \qquad \Delta V \equiv V_{in1} - V_{in2} = 2V_{in1} - 3\ \mathrm{V}.$$

As $V_{in1}$ goes from 0 to 3 V, $\Delta V$ sweeps from $-3$ V to $+3$ V, passing through zero at $V_{in1} = 1.5$ V.

### Step 2 — How the tail current is split

With an ideal tail and square-law devices, the currents depend only on $\Delta V$:

$$I_{D1} - I_{D2} = \frac{\beta_n}{2}\Delta V\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V^2}, \qquad I_{D1} + I_{D2} = I_{SS},$$

valid for $|\Delta V| \le \sqrt{2I_{SS}/\beta_n}$; beyond this one device carries all of $I_{SS}$. In terms of $V_{in1}$, the steering window is

$$1.5\ \mathrm{V} - \sqrt{\frac{I_{SS}}{2\beta_n}} \;<\; V_{in1} \;<\; 1.5\ \mathrm{V} + \sqrt{\frac{I_{SS}}{2\beta_n}},$$

a narrow region around the centre. Outside it the conducting device may even enter triode as its gate approaches 3 V, but it still carries exactly $I_{SS}$, fixed by the saturated tail, so $V_{out}$ is **flat**.

### Step 3 — Balance point

At $V_{in1} = V_{in2} = 1.5$ V, $V_X = V_Y$, $R_1$ carries no current, and each diode carries $I_{SS}/2$:

$$V_X = V_Y = V_{DD} - |V_{THP}| - \sqrt{\frac{2(I_{SS}/2)}{\beta_p}} = 2.2\ \mathrm{V} - \sqrt{\frac{I_{SS}}{\beta_p}}, \qquad V_{out} = 0 .$$

So $R_1$ does not affect the output common-mode level.

### Step 4 — Slope at the centre (small-signal gain)

For $\pm v_d/2$ about balance, $v_Y = -v_X$, so the midpoint of $R_1$ stays at ac ground, and each half sees $R_1/2$ in parallel with the diode resistance $1/g_{m3}$ (channel-length modulation neglected).

<!-- diagram: diagram-01.cir -->

KCL at $X$, with the current through $R_1$ equal to $(v_X - v_Y)/R_1 = v_X/(R_1/2)$:

$$
\begin{aligned}
g_{m1}\frac{v_d}{2} + g_{m3}v_X + \frac{v_X}{R_1/2} &= 0\\
v_X &= -g_{m1}\left(\frac{1}{g_{m3}}\parallel\frac{R_1}{2}\right)\frac{v_d}{2},\\
v_{out} = v_X - v_Y = 2v_X &= -g_{m1}\left(\frac{1}{g_{m3}}\parallel\frac{R_1}{2}\right)v_d .
\end{aligned}
$$

So

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})} = -g_{m1}\left(\frac{1}{g_{m3}}\parallel\frac{R_1}{2}\right), \qquad \frac{dV_{out}}{dV_{in1}} = -2g_{m1}\left(\frac{1}{g_{m3}}\parallel\frac{R_1}{2}\right),$$

with $g_{m1} = \sqrt{\beta_nI_{SS}}$ and $g_{m3} = \sqrt{\beta_pI_{SS}}$. The curve is **inverting**: raising $V_{in1}$ pulls $X$ down and lets $Y$ rise.

### Step 5 — Saturation level

Take $V_{in1}$ low, so that $M_1$ is off and $M_2$ carries $I_{SS}$. With $M_1$ off, the whole diode current of $M_3$, call it $I_R$, flows through $R_1$ into $Y$; at $Y$, $M_2$ takes $I_{SS}$, supplied by $R_1$ ($I_R$) and $M_4$ ($I_{SS} - I_R$). The diode equations give

$$V_X = 2.2\ \mathrm{V} - \sqrt{\frac{2I_R}{\beta_p}}, \qquad V_Y = 2.2\ \mathrm{V} - \sqrt{\frac{2(I_{SS} - I_R)}{\beta_p}} ,$$

and Ohm's law for $R_1$ closes the loop:

$$V_{sat} = V_X - V_Y = I_RR_1 = \sqrt{\frac{2}{\beta_p}}\left(\sqrt{I_{SS} - I_R} - \sqrt{I_R}\right).$$

This equation fixes $I_R$ (between 0 and $I_{SS}/2$), and then $V_{sat} = I_RR_1$. Limiting cases:

- **Small $R_1$:** $I_R \to I_{SS}/2$ (the resistor nearly shorts the outputs), so $V_{sat} \approx I_{SS}R_1/2$, small.
- **Large $R_1$:** $I_R \to 0$, so $V_{sat} \to \sqrt{2I_{SS}/\beta_p}$, the value for plain diode loads.

In general $0 < V_{sat} < \sqrt{2I_{SS}/\beta_p}$: the resistor reduces the swing. The off-side output sits at $2.2\ \mathrm{V} - \sqrt{2I_R/\beta_p}$, just below 2.2 V for large $R_1$ and near the balanced level for small $R_1$. For $V_{in1}$ high the roles reverse: $V_{out} = -V_{sat}$.

### Step 6 — Illustrative numbers

For illustration only, take $\beta_n = 13.4\ \mathrm{mA/V^2}$, $\beta_p = 3.84\ \mathrm{mA/V^2}$, $I_{SS} = 1$ mA and $R_1 = 2$ kΩ:

$$
\begin{aligned}
g_{m1} &= \sqrt{13.4\times 1}\ \mathrm{mS} = 3.66\ \mathrm{mS}, \qquad g_{m3} = \sqrt{3.84\times 1}\ \mathrm{mS} = 1.96\ \mathrm{mS}\ \ (1/g_{m3} = 510\ \Omega),\\
\frac{dV_{out}}{d\Delta V} &= -(3.66\ \mathrm{mS})(510\ \Omega\parallel 1\ \mathrm{k}\Omega) = -(3.66\ \mathrm{mS})(338\ \Omega) = -1.24,\\
\text{steering window:}\quad & V_{in1} = 1.5 \pm \sqrt{1/(2\times 13.4)}\ \mathrm{V} = 1.5 \pm 0.193\ \mathrm{V},\\
\text{balance level:}\quad & 2.2 - \sqrt{1/3.84} = 1.69\ \mathrm{V}.
\end{aligned}
$$

Solving the saturation equation gives $I_R = 0.176$ mA, so $V_{sat} = (0.176\ \mathrm{mA})(2\ \mathrm{k}\Omega) = 0.35$ V, below both limiting values $I_{SS}R_1/2 = 1.0$ V and $\sqrt{2I_{SS}/\beta_p} = 0.72$ V. The full curve:

| $V_{in1}$ (V) | $\Delta V$ (V) | $I_{D1}$ (mA) | $V_X$ (V) | $V_Y$ (V) | $V_{out}$ (V) |
|---|---|---|---|---|---|
| 0 – 1.30 | ≤ −0.40 | 0 | 1.897 | 1.545 | +0.352 |
| 1.35 | −0.30 | 0.041 | 1.876 | 1.555 | +0.321 |
| 1.40 | −0.20 | 0.159 | 1.821 | 1.586 | +0.234 |
| 1.45 | −0.10 | 0.320 | 1.754 | 1.632 | +0.122 |
| 1.50 | 0 | 0.500 | 1.690 | 1.690 | 0 |
| 1.55 | +0.10 | 0.680 | 1.632 | 1.754 | −0.122 |
| 1.60 | +0.20 | 0.841 | 1.586 | 1.821 | −0.234 |
| 1.70 – 3 | ≥ +0.40 | 1.000 | 1.545 | 1.897 | −0.352 |

### Result

$V_{out}$ is an **inverting, odd-symmetric S-curve centred at $V_{in1} = V_{in2} = 1.5$ V**:

- $V_{out} = +V_{sat}$ (flat) for $V_{in1} \le 1.5\ \mathrm{V} - \sqrt{I_{SS}/(2\beta_n)}$ ($M_1$ off), and $V_{out} = -V_{sat}$ (flat) for $V_{in1} \ge 1.5\ \mathrm{V} + \sqrt{I_{SS}/(2\beta_n)}$ ($M_2$ off). That is, the curve changes only while $|V_{in1} - V_{in2}| < \sqrt{2I_{SS}/\beta_n}$.
- Through the centre ($V_{out} = 0$, both outputs at $V_{DD} - |V_{THP}| - \sqrt{I_{SS}/\beta_p}$; $R_1$ carries no current) the slope is
$$\frac{dV_{out}}{d(V_{in1} - V_{in2})} = -g_{m1}\left(\frac{1}{g_{m3}}\parallel\frac{R_1}{2}\right),$$
because the midpoint of $R_1$ is a virtual ground.
- The saturation level is $V_{sat} = I_RR_1 = \sqrt{2/\beta_p}\,(\sqrt{I_{SS} - I_R} - \sqrt{I_R})$, with $0 < V_{sat} < \sqrt{2I_{SS}/\beta_p}$. It is about $I_{SS}R_1/2$ for small $R_1$ and approaches the plain diode-load value $\sqrt{2I_{SS}/\beta_p}$ for large $R_1$.

$R_1$ lowers both the gain and the swing compared with plain diode loads.

**Common mistake.** Taking the saturation level as exactly $\sqrt{2I_{SS}/\beta_p}$ (ignoring the current that the off-side diode sends through $R_1$) or as exactly $I_{SS}R_1/2$. Both are only limiting cases; $I_R$ must satisfy the current balance of Step 5.

**Common mistake.** Using $R_1$ instead of $R_1/2$ in the half circuit. The midpoint of $R_1$ is at ac ground for differential signals.

**Common mistake.** Drawing a non-inverting curve, a straight line over the whole 0–3 V sweep, or outputs that reach $V_{DD}$ or ground. The pair saturates within a few hundred millivolts of balance, and the diodes keep both outputs between about $2.2\ \mathrm{V} - \sqrt{2I_{SS}/\beta_p}$ and 2.2 V.
