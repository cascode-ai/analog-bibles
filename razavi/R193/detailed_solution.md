# Detailed solution - R193

**Approach.** This is a folded-cascode differential stage with a **PMOS** input pair, and the folding connections **cross over**: $M_1$ feeds the right output and $M_2$ feeds the left. KCL at the two folding nodes gives the cascode currents, Ohm's law on $R_D$ gives the outputs, and the large-signal current steering of the PMOS pair gives the whole curve. The two details that fix the sign of the answer are the PMOS input and the crossed wiring.

### Step 1 — Reading the circuit and the sweep

From the figure:

- $M_7$ (PMOS, gate at $V_{b2}$) is the tail current source from $V_{DD}$, delivering $I_{SS}$ into the common source node S of the PMOS input pair $M_1$, $M_2$.
- $M_3$, $M_4$ (NMOS, gates at $V_{b1}$) sink a constant current $I_N$ each from the folding nodes.
- $M_5$, $M_6$ (NMOS, gates at $V_{b3}$) are common-gate cascodes. Their drains connect to $V_{DD}$ through the load resistors $R_D$.
- **Crossed wiring.**
  - The drain of $M_1$ connects to the drain of $M_3$ and to the source of $M_6$, the **right** cascode. Call this node F1.
  - The drain of $M_2$ connects to the drain of $M_4$ and to the source of $M_5$, the **left** cascode. Call this node F2.
- The left output is the drain of $M_5$; the right output is the drain of $M_6$. $V_{out} = V_{left} - V_{right}$.

**The sweep.** $V_{in2} = 3\ \mathrm{V} - V_{in1}$. The input common mode stays at 1.5 V, and the differential input is $\Delta V_{in} = V_{in1} - V_{in2} = 2V_{in1} - 3$ V. By symmetry, $V_{out}$ is odd about $V_{in1} = 1.5$ V.

### Step 2 — KCL at the folding nodes

Assume first that $I_N \ge I_{SS}$, the normal folded-cascode design, and that every transistor is saturated.

**Node F1.** $M_1$ pushes $I_{D1}$ into F1, $M_3$ pulls $I_N$ out, and the rest is pulled out through the cascode $M_6$:

$$
\begin{aligned}
I_{D1} + I_{M6} &= I_N\\
I_{M6} &= I_N - I_{D1}.
\end{aligned}
$$

**Node F2**, in the same way:

$$I_{M5} = I_N - I_{D2}.$$

Since $I_{D1}, I_{D2} \le I_{SS} \le I_N$, both cascode currents stay non-negative, so the cascodes never turn off.

### Step 3 — The outputs and $V_{out}$

The cascode drain current flows from $V_{DD}$ through $R_D$, so by Ohm's law:

$$
\begin{aligned}
V_{left} &= V_{DD} - R_DI_{M5} = V_{DD} - R_D(I_N - I_{D2}),\\
V_{right} &= V_{DD} - R_DI_{M6} = V_{DD} - R_D(I_N - I_{D1}).
\end{aligned}
$$

Subtract:

$$
\begin{aligned}
V_{out} &= V_{left} - V_{right} = -R_D(I_N - I_{D2}) + R_D(I_N - I_{D1})\\
V_{out} &= R_D\,(I_{D2} - I_{D1}).
\end{aligned}
$$

$I_N$ cancels. The constant sinks set only the output common-mode level, not the differential output.

### Step 4 — Current steering in the PMOS pair

For a PMOS in saturation, $I_D = \tfrac12\beta_p(V_{SG} - |V_{THP}|)^2$ with $\beta_p = \mu_pC_{ox}(W/L)_{1,2}$. Both devices share the source node S, so

$$V_{SG1} - V_{SG2} = (V_S - V_{in1}) - (V_S - V_{in2}) = V_{in2} - V_{in1} = -\Delta V_{in}.$$

A **lower** gate voltage means **more** current in a PMOS. The same algebra as for an NMOS pair (take square roots, subtract, square, use $I_{D1} + I_{D2} = I_{SS}$) gives

$$I_{D1} - I_{D2} = -\frac{\beta_p}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_p} - \Delta V_{in}^2}, \qquad |\Delta V_{in}| \le \sqrt{\frac{2I_{SS}}{\beta_p}}.$$

Outside this window one device carries all of $I_{SS}$:

- **low $V_{in1}$:** $M_1$ (gate near 0) conducts everything, $I_{D1} = I_{SS}$, $I_{D2} = 0$;
- **high $V_{in1}$:** $I_{D2} = I_{SS}$, $I_{D1} = 0$.

### Step 5 — The transfer curve

Substitute Step 4 into Step 3:

$$V_{out} = R_D(I_{D2} - I_{D1}) = R_D\,\frac{\beta_p}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_p} - \Delta V_{in}^2}, \qquad \Delta V_{in} = 2V_{in1} - 3\ \mathrm{V}.$$

**End levels:**

- low $V_{in1}$: $V_{out} = R_D(0 - I_{SS}) = -R_DI_{SS}$;
- high $V_{in1}$: $V_{out} = R_D(I_{SS} - 0) = +R_DI_{SS}$.

**Central slope.** At $\Delta V_{in} = 0$, $\dfrac{d(I_{D2} - I_{D1})}{d\Delta V_{in}} = \dfrac{\beta_p}{2}\sqrt{\dfrac{4I_{SS}}{\beta_p}} = \sqrt{\beta_pI_{SS}} = g_{m1}$, the transconductance of each input device at $I_{SS}/2$. So

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})}\bigg|_0 = +g_{m1}R_D, \qquad \frac{dV_{out}}{dV_{in1}}\bigg|_{1.5\ \mathrm{V}} = +2g_{m1}R_D .$$

**Why it is non-inverting.** Raising $V_{in1}$ *reduces* the current of the PMOS $M_1$. Less current is pushed into F1, so the right cascode $M_6$ must carry *more* ($I_N - I_{D1}$ grows) and the right output *falls*. On the other side, $I_{D2}$ grows, $M_5$ carries less, and the left output *rises*. Left minus right therefore increases. The two inversions (PMOS input, folding) combine with the crossed wiring to make the stage non-inverting from $V_{in1}$ to $V_{left} - V_{right}$.

**Small-signal picture.** For a differential input, node S is a virtual ground. $M_1$'s signal current $g_{m1}\Delta v_{in}/2$ enters F1. $M_3$ is an ideal current source (open circuit), so all of it flows into the low-impedance source of $M_6$ ($1/g_{m6}$) and on through $R_D$. Each output therefore moves by $g_{m1}R_D\Delta v_{in}/2$, in agreement with the slope above.

### Step 6 — A numerical illustration

Take $\beta_p = 2\ \mathrm{mA/V^2}$, $I_{SS} = 200\ \mu$A, $I_N = 300\ \mu$A and $R_D = 5\ \mathrm{k}\Omega$ (free choices):

$$
\begin{aligned}
R_DI_{SS} &= (5\ \mathrm{k}\Omega)(200\ \mu\mathrm{A}) = 1.0\ \mathrm{V},\\
g_{m1} &= \sqrt{\beta_pI_{SS}} = \sqrt{(2\ \mathrm{mA/V^2})(200\ \mu\mathrm{A})} = 0.632\ \mathrm{mS},\\
g_{m1}R_D &= (0.632\ \mathrm{mS})(5\ \mathrm{k}\Omega) = 3.16\quad(6.3\ \text{per volt of } V_{in1}),\\
\sqrt{2I_{SS}/\beta_p} &= \sqrt{\frac{2(200\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 0.447\ \mathrm{V}\ \Rightarrow\ \text{flat outside } 1.276\ \mathrm{V} < V_{in1} < 1.724\ \mathrm{V}.
\end{aligned}
$$

Output nodes:

- at balance, $V_{left} = V_{right} = 3 - (5\ \mathrm{k}\Omega)(300 - 100)\ \mu\mathrm{A} = 2.0$ V;
- at low $V_{in1}$, $V_{left} = 3 - (5\ \mathrm{k}\Omega)(300\ \mu\mathrm{A}) = 1.5$ V and $V_{right} = 3 - (5\ \mathrm{k}\Omega)(100\ \mu\mathrm{A}) = 2.5$ V, so $V_{out} = -1.0$ V.

At $V_{in1} = 1.6$ V ($\Delta V_{in} = 0.2$ V):

$$V_{out} = (5\ \mathrm{k}\Omega)(1\ \mathrm{mA/V^2})(0.2\ \mathrm{V})\sqrt{0.4 - 0.04}\ \mathrm{V} = (5\ \mathrm{k}\Omega)(120\ \mu\mathrm{A}) = +0.6\ \mathrm{V}.$$

| $V_{in1}$ (V) | $I_{D1}$ (µA) | $I_{D2}$ (µA) | $V_{left}$ (V) | $V_{right}$ (V) | $V_{out}$ (V) |
|---|---|---|---|---|---|
| 0 to 1.276 | 200 | 0 | 1.5 | 2.5 | −1.0 |
| 1.4 | 160 | 40 | 1.7 | 2.3 | −0.6 |
| 1.5 | 100 | 100 | 2.0 | 2.0 | 0 |
| 1.6 | 40 | 160 | 2.3 | 1.7 | +0.6 |
| 1.724 to 3 | 0 | 200 | 2.5 | 1.5 | +1.0 |

### Step 7 — Conditions and other cases

**Headroom.** The cascodes must stay saturated even at the lowest output, $V_{DD} - R_DI_N$. This requires $V_{DD} - R_DI_N \ge V_{b3} - V_{THN}$, i.e. $R_DI_N$ small enough. $M_3$, $M_4$ and the tail $M_7$ must also stay saturated. If the conducting PMOS input device enters triode at the extremes of the sweep, its current is still forced to $I_{SS}$ by the saturated tail, so the end levels do not change.

**If $I_{SS}/2 < I_N < I_{SS}$.** The curve follows the formula until the strong branch reaches $I_N$, i.e. at $|V_{out}| = R_D(2I_N - I_{SS})$. Then that cascode cuts off ($I_N - I_{D1} = 0$), the input device and the tail are pushed into triode, the slope changes, and the ends become $\pm R_DI_N$.

**If $I_{SS} > 2I_N$.** Even at balance each branch would need $I_{SS}/2 > I_N$, so the tail cannot carry its nominal current. Both cascodes are off around the centre, giving a dead zone with $V_{out} = 0$, before the curve moves out toward $\pm R_DI_N$.

### Result

$V_{out}$ is a **non-inverting S-curve** centred at $V_{in1} = V_{in2} = 1.5$ V:

$$V_{out} = R_D(I_{D2} - I_{D1}) = R_D\frac{\beta_p}{2}(V_{in1} - V_{in2})\sqrt{\frac{4I_{SS}}{\beta_p} - (V_{in1} - V_{in2})^2}.$$

- It goes from $-R_DI_{SS}$ (low $V_{in1}$) to $+R_DI_{SS}$ (high $V_{in1}$).
- Its central slope is $+g_{m1}R_D$ per volt of $V_{in1} - V_{in2}$ (i.e. $2g_{m1}R_D$ per volt of $V_{in1}$), with $g_{m1} = \sqrt{\beta_pI_{SS}}$.
- It is flat for $|V_{in1} - V_{in2}| > \sqrt{2I_{SS}/\beta_p}$.

This assumes $I_N \ge I_{SS}$ and enough headroom for $M_3$–$M_7$. For $I_N < I_{SS}$ the ends shrink to $\pm R_DI_N$ (Step 7).

**Common mistake.** Drawing an inverting curve. This comes from overlooking either the PMOS input (raising $V_{in1}$ *lowers* $I_{D1}$) or the crossed wiring ($M_1$'s current folds into the *right* cascode). Tracking one branch through KCL at its folding node shows that $V_{left} - V_{right}$ rises with $V_{in1}$.

**Common mistake.** Giving the end levels as $\pm R_DI_N$ for the normal case $I_N \ge I_{SS}$. The constant $I_N$ appears in both outputs and cancels in the difference; only the steered current $I_{SS}$ appears in $V_{out}$.

**Common mistake.** Quoting a cascode-boosted gain such as $g_{m1}(R_D \parallel g_{m5}r_{O5}r_{O1})$ as if it fixed the curve. With $\lambda = 0$ the output resistance is just $R_D$, so the slope is $g_{m1}R_D$, and the end levels follow from the large-signal current steering, not from a small-signal gain.
