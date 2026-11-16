# Detailed solution - R185

**Approach.** $M_3$ and $M_4$ are PMOS current sources (gates at the fixed bias $V_{b2}$), so the only element that converts current into a *differential* output voltage is the floating resistor $R_1$ between the two outputs. KCL at the two output nodes gives $V_{out}$ directly in terms of the drain currents of the input pair. Combining this with the large-signal current-steering law of the differential pair yields the whole curve: its levels, its slope at the centre and the width of the transition.

### Step 1 — Reading the circuit and the sweep

From the figure:

- $M_1$–$M_2$ is an NMOS differential pair (sources joined at node P) with tail transistor $M_5$ (gate at $V_{b1}$). When saturated, $M_5$ carries $I_{SS}$.
- $M_3$ and $M_4$ are PMOS transistors with sources at $V_{DD}$ and gates at $V_{b2}$. When saturated (and with $\lambda = 0$) each is an ideal current source of value $I_P = \tfrac12\mu_pC_{ox}(W/L)_3(V_{DD} - V_{b2} - |V_{THP}|)^2$.
- The left output X is the drain node of $M_1$/$M_3$; the right output Y is the drain node of $M_2$/$M_4$. $R_1$ connects X to Y. $V_{out} = V_X - V_Y$.

**The sweep.** $V_{in2} = 3\ \mathrm{V} - V_{in1}$, so the input common-mode level is fixed at $(V_{in1} + V_{in2})/2 = 1.5$ V and the differential input is

$$\Delta V_{in} \equiv V_{in1} - V_{in2} = 2V_{in1} - 3\ \mathrm{V},$$

which runs from $-3$ V to $+3$ V.

**Symmetry.** Replacing $V_{in1}$ by $3\ \mathrm{V} - V_{in1}$ swaps the inputs, which (the circuit being symmetric) swaps $V_X$ and $V_Y$. So $V_{out}$ is an odd function of $V_{in1} - 1.5$ V and is zero at $V_{in1} = 1.5$ V.

### Step 2 — KCL at the two outputs: $V_{out}$ in terms of the drain currents

Assume all transistors are saturated, so $M_3$ and $M_4$ each push exactly $I_P$ into their output node. Let $I_{R} = (V_X - V_Y)/R_1$ be the current flowing through $R_1$ from X to Y (Ohm's law).

**KCL at X.** In: $I_P$ from $M_3$. Out: $I_{D1}$ into $M_1$, and $I_R$ into $R_1$:

$$
\begin{aligned}
I_P &= I_{D1} + \frac{V_X - V_Y}{R_1}\\
V_X - V_Y &= R_1\,(I_P - I_{D1}).
\end{aligned}
$$

**KCL at Y.** In: $I_P$ from $M_4$ and $I_R$ from $R_1$. Out: $I_{D2}$ into $M_2$:

$$
\begin{aligned}
I_P + \frac{V_X - V_Y}{R_1} &= I_{D2}\\
V_X - V_Y &= R_1\,(I_{D2} - I_P).
\end{aligned}
$$

**Consistency.** Both expressions must give the same $V_X - V_Y$:

$$
\begin{aligned}
R_1(I_P - I_{D1}) &= R_1(I_{D2} - I_P)\\
I_{D1} + I_{D2} &= 2I_P .
\end{aligned}
$$

But KCL at P says $I_{D1} + I_{D2} = I_{SS}$. So an operating point with every device saturated exists only if the biasing satisfies $2I_P = I_{SS}$, the nominal design. (If the two currents differ, the excess has nowhere to go, and both outputs are pushed toward a rail until some device leaves saturation. That is a common-mode problem, which we come back to in Step 6.)

**Differential output.** Add the two KCL results and divide by 2:

$$
\begin{aligned}
2(V_X - V_Y) &= R_1(I_P - I_{D1}) + R_1(I_{D2} - I_P) = R_1(I_{D2} - I_{D1})\\
V_{out} &= -\frac{R_1}{2}\,(I_{D1} - I_{D2}).
\end{aligned}
$$

The current sources cancel. Only the **difference** of the input-pair currents produces a differential output, and it does so through $R_1/2$.

### Step 3 — Large-signal current steering in the input pair

With $M_1$ and $M_2$ saturated, the square law gives

$$I_{D1} = \tfrac12\beta_n(V_{GS1} - V_{THN})^2, \qquad I_{D2} = \tfrac12\beta_n(V_{GS2} - V_{THN})^2, \qquad \beta_n = \mu_nC_{ox}\left(\frac WL\right)_{1,2}.$$

Take square roots and subtract. The sources are common, so $V_{GS1} - V_{GS2} = V_{in1} - V_{in2} = \Delta V_{in}$:

$$\sqrt{\frac{2I_{D1}}{\beta_n}} - \sqrt{\frac{2I_{D2}}{\beta_n}} = \Delta V_{in}.$$

Square both sides and use $I_{D1} + I_{D2} = I_{SS}$:

$$
\begin{aligned}
\frac{2}{\beta_n}\left(I_{D1} + I_{D2} - 2\sqrt{I_{D1}I_{D2}}\right) &= \Delta V_{in}^2\\
I_{SS} - 2\sqrt{I_{D1}I_{D2}} &= \frac{\beta_n}{2}\Delta V_{in}^2\\
4I_{D1}I_{D2} &= \left(I_{SS} - \frac{\beta_n}{2}\Delta V_{in}^2\right)^2 .
\end{aligned}
$$

Now use the identity $(I_{D1} - I_{D2})^2 = (I_{D1} + I_{D2})^2 - 4I_{D1}I_{D2}$:

$$
\begin{aligned}
(I_{D1} - I_{D2})^2 &= I_{SS}^2 - \left(I_{SS} - \frac{\beta_n}{2}\Delta V_{in}^2\right)^2\\
&= \beta_nI_{SS}\Delta V_{in}^2 - \frac{\beta_n^2}{4}\Delta V_{in}^4\\
&= \frac{\beta_n^2}{4}\Delta V_{in}^2\left(\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2\right)\\
I_{D1} - I_{D2} &= \frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}.
\end{aligned}
$$

This holds while both devices conduct. One device turns off ($I_{D1} - I_{D2} = \pm I_{SS}$) when

$$|\Delta V_{in}| = \Delta V_{max} = \sqrt{\frac{2I_{SS}}{\beta_n}},$$

which is $\sqrt2$ times the overdrive voltage of each device at balance. Beyond that, all of $I_{SS}$ flows in one device.

**Note on triode.** If the conducting input device enters triode, its current is still forced to equal the tail current, as long as $M_5$ stays saturated. Its $V_{GS}$ simply rises (and $V_P$ falls), so the current steering above is unchanged in the flat parts.

### Step 4 — The transfer curve

Substitute Step 3 into Step 2. For $|\Delta V_{in}| \le \Delta V_{max}$:

$$V_{out} = -\frac{R_1}{2}\cdot\frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}, \qquad \Delta V_{in} = 2V_{in1} - 3\ \mathrm{V}.$$

**Saturated levels.** For $|\Delta V_{in}| \ge \Delta V_{max}$, $I_{D1} - I_{D2} = \pm I_{SS}$:

$$V_{out} = \mp\frac{I_{SS}R_1}{2}.$$

Physically, at low $V_{in1}$, $M_1$ is off. The whole current $I_P = I_{SS}/2$ of $M_3$ must then flow through $R_1$ from X to Y, where $M_2$ sinks it together with $M_4$'s $I_P$ (total $I_{SS}$). So $V_X - V_Y = I_PR_1 = +I_{SS}R_1/2$. At high $V_{in1}$ the roles reverse and $V_{out} = -I_{SS}R_1/2$.

**Slope at the centre.** Differentiate at $\Delta V_{in} = 0$:

$$\left.\frac{d(I_{D1} - I_{D2})}{d\Delta V_{in}}\right|_0 = \frac{\beta_n}{2}\sqrt{\frac{4I_{SS}}{\beta_n}} = \sqrt{\beta_nI_{SS}} = g_{m1},$$

where $g_{m1} = \sqrt{2\beta_n(I_{SS}/2)}$ is the transconductance of each input device at balance. Hence

$$\frac{dV_{out}}{d\Delta V_{in}}\bigg|_0 = -\frac{g_{m1}R_1}{2}, \qquad \frac{dV_{out}}{dV_{in1}}\bigg|_{1.5\ \mathrm{V}} = -g_{m1}R_1 \quad(\text{since } d\Delta V_{in} = 2\,dV_{in1}).$$

**Half-circuit check.** For a small differential signal, X and Y move in opposite directions by equal amounts, so the **midpoint of $R_1$ does not move**: it is a virtual ground. Each half is then $M_1$ driving a resistance $R_1/2$ to AC ground. The PMOS current source is an open circuit in the small-signal model, because $\lambda = 0$.

<!-- diagram: diagram-01.cir -->

KCL at X in this half circuit: $g_{m1}\dfrac{\Delta v_{in}}{2} + \dfrac{v_X}{R_1/2} = 0$, so $v_X = -g_{m1}\dfrac{R_1}{2}\cdot\dfrac{\Delta v_{in}}{2}$. By symmetry $v_Y = -v_X$, so $v_X - v_Y = -g_{m1}\dfrac{R_1}{2}\Delta v_{in}$, which matches the large-signal slope.

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

For example, $x = 0.5$: $0.5\sqrt{2 - 0.25} = 0.5\sqrt{1.75} = 0.5\times1.323 = 0.661$. The curve has zero slope at the edges $x = \pm1$, where it joins the flat levels smoothly.

### Step 5 — A numerical illustration

Assume $\beta_n = 2\ \mathrm{mA/V^2}$, $I_{SS} = 200\ \mu$A and $R_1 = 10\ \mathrm{k}\Omega$ (these values are free choices):

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

- **Output common mode.** $R_1$ fixes only the *difference* $V_X - V_Y$. The common level of the two outputs is set only by the balance $2I_P = I_{SS}$. With ideal devices it is not defined, and any mismatch pushes both outputs toward one rail. In practice this needs common-mode feedback.
- **Headroom clipping.** The levels $\pm I_{SS}R_1/2$ assume every device stays saturated as the outputs swing by $\pm I_{SS}R_1/4$ around their common level. If $I_{SS}R_1/2$ is large, the curve clips earlier, flattening at a smaller magnitude:
  - at the top, the high-side PMOS leaves saturation when its drain rises above $V_{b2} + |V_{THP}| = V_{DD} - (V_{SG3} - |V_{THP}|)$;
  - at the bottom, $M_5$ leaves saturation when $V_P$ falls below $V_{b1} - V_{THN}$.
  
  The conducting input device entering triode does not clip the level by itself, because $M_5$ still forces its current to be $I_{SS}$.

### Result

$V_{out}$ is an **inverting S-curve centred at $V_{in1} = 1.5$ V**:

$$V_{out} = -\frac{R_1}{2}(I_{D1} - I_{D2}) = -\frac{R_1}{2}\cdot\frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}, \qquad \Delta V_{in} = V_{in1} - V_{in2} = 2V_{in1} - 3\ \mathrm{V}.$$

- It goes from $+I_{SS}R_1/2$ (low $V_{in1}$) to $-I_{SS}R_1/2$ (high $V_{in1}$).
- Its central slope is $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}R_1/2$, i.e. $-g_{m1}R_1$ per volt of $V_{in1}$, with $g_{m1} = \sqrt{\beta_nI_{SS}}$.
- It is flat outside the steering window $|V_{in1} - V_{in2}| < \sqrt{2I_{SS}/\beta_n}$, i.e. outside $1.5\ \mathrm{V} \pm \tfrac12\sqrt{2I_{SS}/\beta_n}$.

This assumes the nominal bias $2I_P = I_{SS}$ and enough headroom; otherwise the levels clip earlier (Step 6).

**Common mistake.** Treating the PMOS loads as if they set the gain, and drawing outputs that swing to the rails with near-infinite gain, as for an ideal current-source load. The ideal current sources are open circuits for differential signals. The differential load is $R_1$, which appears as $R_1/2$ per side because its midpoint is a virtual ground, so the gain is a modest $g_{m1}R_1/2$ and the levels are $\pm I_{SS}R_1/2$.

**Common mistake.** Losing the factor of 2: writing the levels as $\pm I_{SS}R_1$ or the slope as $-g_{m1}R_1$ per volt of differential input. In full steering only one PMOS current, $I_P = I_{SS}/2$, flows through $R_1$, and for small signals each half sees $R_1/2$, not $R_1$.

**Common mistake.** Drawing a non-inverting curve. Raising $V_{in1}$ increases $I_{D1}$, which pulls node X down and lets node Y rise, so $V_X - V_Y$ decreases.
