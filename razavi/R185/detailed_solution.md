# Detailed solution - R185

**Approach.** $M_3$ and $M_4$ are PMOS current sources (gates at the fixed bias $V_{b2}$), so the only element that turns current into a *differential* output voltage is the floating resistor $R_1$ between the outputs. KCL at the two outputs gives $V_{out}$ in terms of the input-pair drain currents; combined with the large-signal current-steering law of the pair, it yields the levels, the central slope and the width of the transition.

### Step 1 — The sweep

Call the left output X (drains of $M_1$, $M_3$), the right output Y (drains of $M_2$, $M_4$) and the common source node of $M_1$, $M_2$ P, so $V_{out} = V_X - V_Y$. When saturated, $M_5$ carries $I_{SS}$ and each PMOS is an ideal current source $I_P = \tfrac12\mu_pC_{ox}(W/L)_3(V_{DD} - V_{b2} - |V_{THP}|)^2$.

Since $V_{in2} = 3\ \mathrm{V} - V_{in1}$, the input common-mode level is fixed at $(V_{in1} + V_{in2})/2 = 1.5$ V and the differential input is

$$\Delta V_{in} \equiv V_{in1} - V_{in2} = 2V_{in1} - 3\ \mathrm{V},$$

which runs from $-3$ V to $+3$ V. Replacing $V_{in1}$ by $3\ \mathrm{V} - V_{in1}$ swaps the inputs and hence, by symmetry, $V_X$ and $V_Y$, so $V_{out}$ is an odd function of $V_{in1} - 1.5$ V and is zero at $V_{in1} = 1.5$ V.

### Step 2 — KCL at the two outputs: $V_{out}$ in terms of the drain currents

With all transistors saturated, $M_3$ and $M_4$ each push exactly $I_P$ into their output node, and $(V_X - V_Y)/R_1$ flows through $R_1$ from X to Y.

**KCL at X** ($I_P$ in; $I_{D1}$ and the $R_1$ current out):

$$
\begin{aligned}
I_P &= I_{D1} + \frac{V_X - V_Y}{R_1}\\
V_X - V_Y &= R_1\,(I_P - I_{D1}).
\end{aligned}
$$

**KCL at Y** ($I_P$ and the $R_1$ current in; $I_{D2}$ out):

$$
\begin{aligned}
I_P + \frac{V_X - V_Y}{R_1} &= I_{D2}\\
V_X - V_Y &= R_1\,(I_{D2} - I_P).
\end{aligned}
$$

**Consistency.** Both must give the same $V_X - V_Y$:

$$
\begin{aligned}
R_1(I_P - I_{D1}) &= R_1(I_{D2} - I_P)\\
I_{D1} + I_{D2} &= 2I_P .
\end{aligned}
$$

KCL at P also says $I_{D1} + I_{D2} = I_{SS}$, so an all-saturated operating point exists only for the nominal bias $2I_P = I_{SS}$. (Otherwise the excess current pushes both outputs toward a rail until some device leaves saturation, a common-mode problem; see Step 6.)

**Differential output.** Adding the two KCL results and dividing by 2:

$$
\begin{aligned}
2(V_X - V_Y) &= R_1(I_P - I_{D1}) + R_1(I_{D2} - I_P) = R_1(I_{D2} - I_{D1})\\
V_{out} &= -\frac{R_1}{2}\,(I_{D1} - I_{D2}).
\end{aligned}
$$

The current sources cancel: only the **difference** of the input-pair currents produces a differential output, through $R_1/2$.

### Step 3 — Large-signal current steering in the input pair

With $M_1$ and $M_2$ saturated and their sources common, $\sqrt{2I_{D1}/\beta_n} - \sqrt{2I_{D2}/\beta_n} = V_{GS1} - V_{GS2} = \Delta V_{in}$; together with $I_{D1} + I_{D2} = I_{SS}$ this gives the standard steering law of a square-law pair,

$$I_{D1} - I_{D2} = \frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2},$$

valid while both devices conduct. One device turns off ($I_{D1} - I_{D2} = \pm I_{SS}$) at

$$|\Delta V_{in}| = \Delta V_{max} = \sqrt{\frac{2I_{SS}}{\beta_n}},$$

which is $\sqrt2$ times each device's overdrive at balance; beyond it, all of $I_{SS}$ flows in one device. If the conducting device enters triode, $M_5$ (still saturated) still forces its current to $I_{SS}$; only its $V_{GS}$ rises and $V_P$ falls, so the steering is unchanged in the flat parts.

### Step 4 — The transfer curve

Substituting Step 3 into Step 2, for $|\Delta V_{in}| \le \Delta V_{max}$:

$$V_{out} = -\frac{R_1}{2}\cdot\frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}, \qquad \Delta V_{in} = 2V_{in1} - 3\ \mathrm{V}.$$

**Saturated levels.** For $|\Delta V_{in}| \ge \Delta V_{max}$, $I_{D1} - I_{D2} = \pm I_{SS}$:

$$V_{out} = \mp\frac{I_{SS}R_1}{2}.$$

At low $V_{in1}$, $M_1$ is off, so the whole current $I_P = I_{SS}/2$ of $M_3$ flows through $R_1$ from X to Y, where $M_2$ sinks it together with $M_4$'s $I_P$ (total $I_{SS}$): $V_X - V_Y = I_PR_1 = +I_{SS}R_1/2$. At high $V_{in1}$ the roles reverse and $V_{out} = -I_{SS}R_1/2$.

**Slope at the centre.** Differentiating at $\Delta V_{in} = 0$:

$$\left.\frac{d(I_{D1} - I_{D2})}{d\Delta V_{in}}\right|_0 = \frac{\beta_n}{2}\sqrt{\frac{4I_{SS}}{\beta_n}} = \sqrt{\beta_nI_{SS}} = g_{m1},$$

with $g_{m1} = \sqrt{2\beta_n(I_{SS}/2)}$ for each input device at balance. Hence

$$\frac{dV_{out}}{d\Delta V_{in}}\bigg|_0 = -\frac{g_{m1}R_1}{2}, \qquad \frac{dV_{out}}{dV_{in1}}\bigg|_{1.5\ \mathrm{V}} = -g_{m1}R_1 \quad(\text{since } d\Delta V_{in} = 2\,dV_{in1}).$$

**Half-circuit check.** For small differential signals the midpoint of $R_1$ is a virtual ground, and the ideal PMOS current source is an open circuit, so each half is $M_1$ driving $R_1/2$:

<!-- diagram: diagram-01.cir -->

Then $v_X = -g_{m1}\dfrac{R_1}{2}\cdot\dfrac{\Delta v_{in}}{2}$ and $v_Y = -v_X$, so $v_X - v_Y = -g_{m1}\dfrac{R_1}{2}\Delta v_{in}$, matching the large-signal slope.

**Normalised curve.** With $x = \Delta V_{in}/\Delta V_{max}$ (so $4I_{SS}/\beta_n = 2\Delta V_{max}^2$):

$$\frac{I_{D1} - I_{D2}}{I_{SS}} = x\sqrt{2 - x^2}, \qquad \frac{V_{out}}{I_{SS}R_1/2} = -x\sqrt{2 - x^2}\quad(|x| \le 1).$$

| $x = \Delta V_{in}/\Delta V_{max}$ | $V_{in1}$ | $V_{out}/(I_{SS}R_1/2)$ |
|---|---|---|
| $\le -1$ | $\le 1.5\ \mathrm{V} - \Delta V_{max}/2$ | $+1$ (flat) |
| −0.75 | $1.5\ \mathrm{V} - 0.375\,\Delta V_{max}$ | +0.90 |
| −0.5 | $1.5\ \mathrm{V} - 0.25\,\Delta V_{max}$ | +0.66 |
| −0.25 | $1.5\ \mathrm{V} - 0.125\,\Delta V_{max}$ | +0.35 |
| 0 | 1.5 V | 0 |
| +0.25 | $1.5\ \mathrm{V} + 0.125\,\Delta V_{max}$ | −0.35 |
| +0.5 | $1.5\ \mathrm{V} + 0.25\,\Delta V_{max}$ | −0.66 |
| +0.75 | $1.5\ \mathrm{V} + 0.375\,\Delta V_{max}$ | −0.90 |
| $\ge 1$ | $\ge 1.5\ \mathrm{V} + \Delta V_{max}/2$ | −1 (flat) |

For example, $x = 0.5$: $0.5\sqrt{2 - 0.25} = 0.5\sqrt{1.75} = 0.5\times1.323 = 0.661$. The curve has zero slope at $x = \pm1$, where it joins the flat levels smoothly.

### Step 5 — A numerical illustration

With the free choices $\beta_n = 2\ \mathrm{mA/V^2}$, $I_{SS} = 200\ \mu$A and $R_1 = 10\ \mathrm{k}\Omega$:

$$
\begin{aligned}
\Delta V_{max} &= \sqrt{\frac{2(200\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = \sqrt{0.2}\ \mathrm{V} = 0.447\ \mathrm{V},\\
\frac{I_{SS}R_1}{2} &= \frac{(200\ \mu\mathrm{A})(10\ \mathrm{k}\Omega)}{2} = 1.0\ \mathrm{V},\\
g_{m1} &= \sqrt{\beta_nI_{SS}} = \sqrt{(2\ \mathrm{mA/V^2})(200\ \mu\mathrm{A})} = 0.632\ \mathrm{mS},\\
\frac{dV_{out}}{dV_{in1}}\bigg|_{1.5\ \mathrm{V}} &= -g_{m1}R_1 = -(0.632\ \mathrm{mS})(10\ \mathrm{k}\Omega) = -6.3 .
\end{aligned}
$$

So $V_{out} = +1$ V for $V_{in1} \le 1.5 - 0.224 = 1.276$ V, falls through zero at 1.5 V with slope −6.3, and reaches $-1$ V for $V_{in1} \ge 1.724$ V.

### Step 6 — Limits: headroom and the common-mode level

- **Output common mode.** $R_1$ fixes only the difference $V_X - V_Y$. The common level of the outputs is set only by the balance $2I_P = I_{SS}$: with ideal devices it is undefined, and any mismatch pushes both outputs toward one rail, so in practice common-mode feedback is needed.
- **Headroom clipping.** The levels $\pm I_{SS}R_1/2$ assume every device stays saturated as the outputs swing by $\pm I_{SS}R_1/4$ around their common level. If $I_{SS}R_1/2$ is large, the curve flattens earlier, at a smaller magnitude: at the top when the high-side PMOS leaves saturation (drain above $V_{b2} + |V_{THP}| = V_{DD} - (V_{SG3} - |V_{THP}|)$), at the bottom when $M_5$ leaves saturation ($V_P < V_{b1} - V_{THN}$). The conducting input device entering triode does not clip the level by itself, because $M_5$ still forces its current to be $I_{SS}$.

### Result

$V_{out}$ is an **inverting S-curve centred at $V_{in1} = 1.5$ V**:

$$V_{out} = -\frac{R_1}{2}(I_{D1} - I_{D2}) = -\frac{R_1}{2}\cdot\frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}, \qquad \Delta V_{in} = V_{in1} - V_{in2} = 2V_{in1} - 3\ \mathrm{V}.$$

- It goes from $+I_{SS}R_1/2$ (low $V_{in1}$) to $-I_{SS}R_1/2$ (high $V_{in1}$).
- Its central slope is $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}R_1/2$, i.e. $-g_{m1}R_1$ per volt of $V_{in1}$, with $g_{m1} = \sqrt{\beta_nI_{SS}}$.
- It is flat outside the steering window $|V_{in1} - V_{in2}| < \sqrt{2I_{SS}/\beta_n}$, i.e. outside $1.5\ \mathrm{V} \pm \tfrac12\sqrt{2I_{SS}/\beta_n}$.

This assumes the nominal bias $2I_P = I_{SS}$ and enough headroom; otherwise the levels clip earlier (Step 6).

**Common mistake.** Letting the PMOS loads set the gain and drawing rail-to-rail outputs with near-infinite gain. The ideal current sources are open circuits for differential signals; the differential load is $R_1$, seen as $R_1/2$ per side, so the gain is a modest $g_{m1}R_1/2$ and the levels are $\pm I_{SS}R_1/2$.

**Common mistake.** Losing the factor of 2: levels of $\pm I_{SS}R_1$, or a slope of $-g_{m1}R_1$ per volt of differential input. In full steering only one PMOS current, $I_P = I_{SS}/2$, flows through $R_1$, and for small signals each half sees $R_1/2$.

**Common mistake.** Drawing a non-inverting curve. Raising $V_{in1}$ increases $I_{D1}$, which pulls X down and lets Y rise, so $V_X - V_Y$ decreases.
