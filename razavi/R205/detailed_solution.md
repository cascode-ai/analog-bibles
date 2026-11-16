# Detailed solution - R205

**Approach.** Each output node is loaded by a diode-connected PMOS ($M_5$ or $M_6$), which gives a positive conductance, and by one device of a cross-coupled PMOS pair ($M_3$ or $M_4$), which for differential signals gives a negative conductance. We write the large-signal KCL at both outputs in terms of the overdrive voltages of the two diodes, solve it exactly in the central region, and then follow the circuit out to full current steering. The intended sizing is $W_{3,4} < W_{5,6}$ (equal $L$), i.e. $\beta_3 < \beta_5$. At the end we note what changes if $\beta_3 > \beta_5$.

### Step 1 — Reading the circuit and the sweep

From the figure (left output X, right output Y):

- $M_5$: PMOS, source at $V_{DD}$, gate and drain at X (diode).
- $M_3$: PMOS, source at $V_{DD}$, drain at X, **gate at Y**.
- $M_6$: PMOS diode at Y.
- $M_4$: PMOS, drain at Y, **gate at X**.
- $M_1$, $M_2$: NMOS input pair, with tail $M_7$ carrying $I_{SS}$.

$V_{out} = V_X - V_Y$. The sweep: $V_{in2} = 3\ \mathrm{V} - V_{in1}$, so the input common mode is 1.5 V and $\Delta V_{in} = V_{in1} - V_{in2} = 2V_{in1} - 3$ V. By symmetry $V_{out}$ is odd about $V_{in1} = 1.5$ V.

### Step 2 — Large-signal equations in terms of the diode overdrives

Define the overdrive voltages of the two diodes:

$$a = V_{DD} - V_X - |V_{THP}|\ (\text{for } M_5), \qquad b = V_{DD} - V_Y - |V_{THP}|\ (\text{for } M_6),$$

so that $V_{out} = V_X - V_Y = b - a$.

$M_3$ has its gate at Y, so its overdrive is $b$. $M_4$ has its gate at X, so its overdrive is $a$. With all four PMOS saturated, the square law and KCL at the outputs give:

$$
\begin{aligned}
I_{D1} &= I_5 + I_3 = \tfrac12\beta_5a^2 + \tfrac12\beta_3b^2 \quad(\text{KCL at X}),\\
I_{D2} &= I_6 + I_4 = \tfrac12\beta_5b^2 + \tfrac12\beta_3a^2 \quad(\text{KCL at Y}).
\end{aligned}
$$

**Add and subtract** the two equations, using $I_{D1} + I_{D2} = I_{SS}$ and $\Delta I = I_{D1} - I_{D2}$:

$$
\begin{aligned}
I_{SS} &= \tfrac12(\beta_5 + \beta_3)(a^2 + b^2),\\
\Delta I &= \tfrac12(\beta_5 - \beta_3)(a^2 - b^2).
\end{aligned}
$$

**Solve** for $a^2$ and $b^2$:

$$a^2 = \frac{I_{SS}}{\beta_5 + \beta_3} + \frac{\Delta I}{\beta_5 - \beta_3}, \qquad b^2 = \frac{I_{SS}}{\beta_5 + \beta_3} - \frac{\Delta I}{\beta_5 - \beta_3}.$$

Hence, in the central region,

$$V_{out} = b - a = \sqrt{\frac{I_{SS}}{\beta_5 + \beta_3} - \frac{\Delta I}{\beta_5 - \beta_3}} - \sqrt{\frac{I_{SS}}{\beta_5 + \beta_3} + \frac{\Delta I}{\beta_5 - \beta_3}},$$

where the input pair gives the usual steering law $\Delta I = \tfrac{\beta_n}{2}\Delta V_{in}\sqrt{4I_{SS}/\beta_n - \Delta V_{in}^2}$, with $\beta_n = \mu_nC_{ox}(W/L)_{1,2}$.

The curve is **inverting**: $\Delta I > 0$ (high $V_{in1}$) makes $a > b$, i.e. $V_{out} < 0$.

**Validity.** $M_3$ is saturated while $V_{SD3} \ge V_{SG3} - |V_{THP}|$, i.e. $V_{DD} - V_X \ge b$, i.e. $V_{out} \le |V_{THP}|$. This holds throughout this region if $\sqrt{2I_{SS}/(\beta_5 + \beta_3)} < |V_{THP}|$, which we assume.

### Step 3 — Central slope (small-signal check)

At balance, $a = b = a_0 = \sqrt{I_{SS}/(\beta_5 + \beta_3)}$. Differentiate:

$$\frac{dV_{out}}{d\Delta I}\bigg|_0 = \frac{db}{d\Delta I} - \frac{da}{d\Delta I} = -\frac{1}{2a_0(\beta_5 - \beta_3)} - \frac{1}{2a_0(\beta_5 - \beta_3)} = -\frac{1}{(\beta_5 - \beta_3)a_0}.$$

With $d\Delta I/d\Delta V_{in} = g_{m1} = \sqrt{\beta_nI_{SS}}$, and recognising $g_{m5} = \beta_5a_0$ and $g_{m3} = \beta_3a_0$ (same overdrive at balance):

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})}\bigg|_0 = -\frac{g_{m1}}{g_{m5} - g_{m3}} .$$

**Small-signal picture.** Per side, the diode $M_5$ gives $+g_{m5}$. $M_3$, whose gate sees $v_Y = -v_X$, injects $+g_{m3}v_X$ into X, i.e. a conductance $-g_{m3}$. The net conductance $g_{m5} - g_{m3}$ is small but positive when $\beta_3 < \beta_5$, so the gain is high.

### Step 4 — No regeneration, no hysteresis (for $\beta_3 < \beta_5$)

Break the loop $X \to M_4 \to Y \to M_3 \to X$ (inputs fixed, so the input-pair currents are fixed). A change $v_X$ changes $M_4$'s current by $-g_{m4}v_X$. With $I_{D2}$ fixed, diode $M_6$ must take up the difference, so $v_Y = -(g_{m4}/g_{m6})v_X$. Likewise the return trip gives $v_X' = -(g_{m3}/g_{m5})v_Y$. The loop gain is

$$LG = \frac{g_{m3}g_{m4}}{g_{m5}g_{m6}} = \frac{\beta_3b\cdot\beta_3a}{\beta_5a\cdot\beta_5b} = \left(\frac{\beta_3}{\beta_5}\right)^2 ,$$

because $M_3$ shares its overdrive $b$ with $M_6$, and $M_4$ shares $a$ with $M_5$. For $\beta_3 < \beta_5$ this is below 1 at **every** bias point with all devices saturated. So there is never regeneration: the curve is single-valued (no hysteresis) and monotonic.

### Step 5 — Edge of the central region: a near-vertical step

As $V_{in1}$ falls below 1.5 V, $\Delta I < 0$ grows and $a$ shrinks. When

$$|\Delta I| = I_{SS}\frac{\beta_5 - \beta_3}{\beta_5 + \beta_3},\qquad\text{i.e.}\quad \frac{I_{D1}}{I_{D2}} = \frac{\beta_3}{\beta_5},$$

$a$ reaches 0. $M_5$ and $M_4$ (both with overdrive $a$) turn off, X has risen to $V_{DD} - |V_{THP}|$, and $V_{out} = b = \sqrt{2I_{SS}/(\beta_5 + \beta_3)}$.

Just beyond this point, node X is connected only to two saturated devices: $M_3$, a current source of $\tfrac12\beta_3b^2$, and $M_1$, which sinks $I_{D1}$. ($M_5$ is off and $M_4$'s gate draws no current.) With $\lambda = 0$ nothing fixes $V_X$ until $M_3$ leaves saturation at $V_X = V_Y + |V_{THP}|$. So $V_X$ jumps from $V_{DD} - |V_{THP}|$ to $V_Y + |V_{THP}|$ and $V_{out}$ steps **vertically** from $\sqrt{2I_{SS}/(\beta_5 + \beta_3)}$ up to $|V_{THP}|$. A real device (with $\lambda$ and subthreshold conduction) turns this into a very steep but still single-valued segment.

### Step 6 — Outer region and the end levels

Beyond the step, $M_5$ and $M_4$ are off, $M_6$ alone carries $I_{D2}$, and $M_3$ is in triode carrying $I_{D1}$:

$$
\begin{aligned}
b &= \sqrt{\frac{2I_{D2}}{\beta_5}}, \qquad V_Y = V_{DD} - |V_{THP}| - b,\\
I_{D1} &= \beta_3\left(bV_{SD3} - \tfrac12V_{SD3}^2\right)\ \Rightarrow\ V_{SD3} = b - \sqrt{b^2 - \frac{2I_{D1}}{\beta_3}},\\
V_X &= V_{DD} - V_{SD3}.
\end{aligned}
$$

Subtracting:

$$V_{out} = V_X - V_Y = |V_{THP}| + \sqrt{\frac{2I_{D2}}{\beta_5} - \frac{2I_{D1}}{\beta_3}} .$$

At the start of this region $I_{D1}/I_{D2} = \beta_3/\beta_5$ and $V_{out} = |V_{THP}|$, which matches the top of the step. At **full steering** (low $V_{in1}$: $I_{D1} = 0$, $I_{D2} = I_{SS}$, reached when $|\Delta V_{in}| \ge \sqrt{2I_{SS}/\beta_n}$):

- the left node goes to $V_{DD}$. $M_3$ is on (its gate is at the low right node) but must carry no current, so $V_{SD3} = 0$; $M_5$ is off.
- $M_4$ (gate at $V_{DD}$) is off, so the diode $M_6$ alone carries $I_{SS}$.

$$V_{out} = |V_{THP}| + \sqrt{\frac{2I_{SS}}{\beta_5}}\quad(\text{low } V_{in1}),$$

and the negative of this at high $V_{in1}$.

### Step 7 — Numerical example

Take $\beta_n = 2\ \mathrm{mA/V^2}$, $\beta_5 = 1\ \mathrm{mA/V^2}$, $\beta_3 = 0.8\ \mathrm{mA/V^2}$ and $I_{SS} = 200\ \mu$A (example values):

$$
\begin{aligned}
a_0 &= \sqrt{\frac{200\ \mu\mathrm{A}}{1.8\ \mathrm{mA/V^2}}} = 0.333\ \mathrm{V}\ \Rightarrow\ V_X = V_Y = 2.2 - 0.333 = 1.867\ \mathrm{V}\ \text{at balance},\\
g_{m1} &= \sqrt{(2\ \mathrm{mA/V^2})(200\ \mu\mathrm{A})} = 0.632\ \mathrm{mS}, \quad g_{m5} - g_{m3} = (0.2\ \mathrm{mA/V^2})(0.333\ \mathrm{V}) = 0.0667\ \mathrm{mS},\\
\text{central slope} &= -\frac{0.632}{0.0667} = -9.5\ \text{per volt of } \Delta V_{in}\ (-19\ \text{per volt of } V_{in1}),\\
\text{step} &: |\Delta I| = 200\ \mu\mathrm{A}\times\frac{0.2}{1.8} = 22.2\ \mu\mathrm{A}\ \Rightarrow\ \Delta V_{in} = \mp0.035\ \mathrm{V},\ V_{in1} = 1.5 \mp 0.018\ \mathrm{V},\\
&\phantom{:}\ |V_{out}|\ \text{jumps from}\ \sqrt{0.222}\ \mathrm{V} = 0.47\ \mathrm{V}\ \text{to}\ 0.8\ \mathrm{V},\\
\text{end levels} &= \pm\left(0.8 + \sqrt{\frac{2(200\ \mu\mathrm{A})}{1\ \mathrm{mA/V^2}}}\right) = \pm(0.8 + 0.632) = \pm1.43\ \mathrm{V},\ \text{for } |V_{in1} - 1.5\ \mathrm{V}| \ge 0.224\ \mathrm{V}.
\end{aligned}
$$

*Two points worked out:*

- **$V_{in1} = 1.49$ V** ($\Delta V_{in} = -0.02$ V): $\Delta I = (1\ \mathrm{mA/V^2})(-0.02)\sqrt{0.4 - 0.0004} = -12.6\ \mu$A, so $a^2 = 0.1111 - 0.0632 = 0.0479$ and $b^2 = 0.1743$, giving $V_{out} = 0.4175 - 0.2189 = 0.199$ V.
- **$V_{in1} = 1.40$ V** ($\Delta V_{in} = -0.2$ V): $\Delta I = (1\ \mathrm{mA/V^2})(-0.2)(0.6) = -120\ \mu$A, so $I_{D1} = 40\ \mu$A and $I_{D2} = 160\ \mu$A, giving $V_{out} = 0.8 + \sqrt{0.32 - 0.10} = 1.27$ V.

| $V_{in1}$ (V) | Region | $V_{out}$ (V) |
|---|---|---|
| 0 to 1.276 | full steering | +1.43 |
| 1.40 | outer ($M_5$, $M_4$ off) | +1.27 |
| 1.45 | outer | +1.10 |
| 1.482 | step | 0.47 → 0.80 |
| 1.485 | central | +0.33 |
| 1.49 | central | +0.20 |
| 1.495 | central | +0.10 |
| 1.50 | balance | 0 |
| > 1.5 | mirror image | down to −1.43 |

A numerical DC sweep of this example in both directions gives the same curve with no hysteresis.

### Step 8 — If instead $W_{3,4} > W_{5,6}$

Then $\beta_3 > \beta_5$, so $g_{m3} > g_{m5}$ and $(\beta_3/\beta_5)^2 > 1$. The net load conductance $g_{m5} - g_{m3}$ is negative, the balanced point is unstable, and the circuit **latches with hysteresis**, like a plain cross-coupled load.

### Result

For the intended sizing $W_{3,4} < W_{5,6}$, $V_{out}$ is an **inverting, high-gain S-curve** centred at $V_{in1} = V_{in2}$, with **no hysteresis**:

- **Central slope:** $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}/(g_{m5} - g_{m3})$. Per side the load is the diode $M_5$ ($+g_{m5}$) in parallel with the negative conductance $-g_{m3}$ of the cross-coupled device. The net load conductance $g_{m5} - g_{m3}$ is small but positive, which gives high gain without regeneration: the loop gain $(\beta_3/\beta_5)^2 < 1$ at every bias point with all devices saturated.
- **Edge of the central region:** at $|V_{out}| = \sqrt{2I_{SS}/(\beta_5 + \beta_3)}$ the curve becomes very steep (vertical in the ideal model) up to $|V_{out}| = |V_{THP}|$.
- **Outer region and ends:** $V_{out} = |V_{THP}| + \sqrt{2I_{D2}/\beta_5 - 2I_{D1}/\beta_3}$, saturating at
$$V_{out} = \pm\left(|V_{THP}| + \sqrt{\frac{2I_{SS}}{\beta_5}}\right)$$
(positive for low $V_{in1}$). At full steering one output is at $V_{DD}$, and the other is set by the diode carrying all of $I_{SS}$.
- If $W_{3,4} > W_{5,6}$, the circuit latches with hysteresis.

**Common mistake.** Treating the cross-coupled pair as extra diodes, which gives gain $g_{m1}/(g_{m5} + g_{m3})$. The gates of $M_3$/$M_4$ are driven by the **opposite** outputs, so for differential signals they subtract conductance: $g_{m5} - g_{m3}$.

**Common mistake.** Claiming hysteresis or latching for $W_3 < W_5$. Positive feedback is present, but its loop gain $(\beta_3/\beta_5)^2$ stays below one. The cross-coupled pair only boosts the gain; the transfer curve remains single-valued.

**Common mistake.** Giving the end levels as those of a plain diode-loaded pair, $\pm\sqrt{2I_{SS}/\beta_5}$. At full steering the off-side node is pulled all the way to $V_{DD}$ by $M_3$ (which carries no current), so the end level gains an extra $|V_{THP}|$.
