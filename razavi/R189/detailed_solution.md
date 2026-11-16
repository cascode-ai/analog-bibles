# Detailed solution - R189

**Approach.** Each PMOS takes its gate voltage from the **bottom** of its resistor, while the output is taken at the **top** (the PMOS drain). So each output is a diode-like voltage, $V_{DD} - |V_{GS3}|$, plus the drop across $R_1$. Writing both outputs as functions of the drain currents and using the large-signal current steering of the input pair gives the central gain, the end levels, and how both depend on $R_1$.

### Step 1 — Nodes and the sweep

Call the left output (drain of $M_3$, top of $R_1$) A and the drain of $M_1$ (bottom of $R_1$, which also drives the gate of $M_3$) B; A′ and B′ are their mirror images on the right, so $V_{out} = V_A - V_{A'}$. Since $V_{in2} = 3\ \mathrm{V} - V_{in1}$, the input common mode is fixed at 1.5 V and the differential input is $\Delta V_{in} = V_{in1} - V_{in2} = 2V_{in1} - 3$ V. Swapping the inputs mirrors the circuit, so $V_{out}$ is odd about $V_{in1} = 1.5$ V.

### Step 2 — Each output as a function of its branch current

The gate of $M_3$ draws no current, so all of $M_3$'s drain current flows through $R_1$ into $M_1$: $M_3$ carries $I_{D1}$. With $M_3$ saturated,

$$
\begin{aligned}
I_{D1} &= \tfrac12\beta_p\left(V_{SG3} - |V_{THP}|\right)^2, \qquad V_{SG3} = V_{DD} - V_B,\\
V_B &= V_{DD} - |V_{THP}| - \sqrt{\frac{2I_{D1}}{\beta_p}} .
\end{aligned}
$$

With $V_A = V_B + I_{D1}R_1$,

$$V_A = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_{D1}}{\beta_p}} + I_{D1}R_1 .$$

**Saturation of $M_3$.** $V_{SD3} \ge V_{SG3} - |V_{THP}|$ means $V_{DD} - V_A \ge V_{DD} - V_B - |V_{THP}|$, i.e.

$$V_A - V_B = I_{D1}R_1 \le |V_{THP}| = 0.8\ \mathrm{V}.$$

This is assumed for now (it holds for all currents if $I_{SS}R_1 \le 0.8$ V); Step 8 treats the other case.

**Output difference.** Define

$$f(I) = IR_1 - \sqrt{\frac{2I}{\beta_p}} .$$

Then $V_A = V_{DD} - |V_{THP}| + f(I_{D1})$ and $V_{A'} = V_{DD} - |V_{THP}| + f(I_{D2})$, and the constant terms cancel:

$$V_{out} = f(I_{D1}) - f(I_{D2}).$$

$R_1$ works *against* the diode term: more current lowers the gate node B (the $-\sqrt{\cdot}$ term) but raises the drop across $R_1$ (the $+IR_1$ term).

### Step 3 — Large-signal steering of the input pair

With $M_1$ and $M_2$ saturated and $I_{D1} + I_{D2} = I_{SS}$, the standard result (from $\sqrt{2I_{D1}/\beta_n} - \sqrt{2I_{D2}/\beta_n} = \Delta V_{in}$) is

$$I_{D1} - I_{D2} = \frac{\beta_n}{2}\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}, \qquad |\Delta V_{in}| \le \Delta V_{max} = \sqrt{\frac{2I_{SS}}{\beta_n}},$$

with $I_{D1} = \tfrac12[I_{SS} + (I_{D1} - I_{D2})]$ and $I_{D2} = \tfrac12[I_{SS} - (I_{D1} - I_{D2})]$. Outside this window one device carries all of $I_{SS}$; if it later enters triode (at the extremes of the sweep), the tail $M_5$ still forces its current to $I_{SS}$, so the plateau is unchanged.

### Step 4 — Slope at the centre (large-signal derivative)

The derivative of $f$ is

$$f'(I) = R_1 - \frac{d}{dI}\sqrt{\frac{2I}{\beta_p}} = R_1 - \frac{1}{\sqrt{2\beta_pI}} = R_1 - \frac{1}{g_{m3}(I)},$$

since $g_{m3} = \sqrt{2\beta_pI}$ at current $I$. At balance $dI_{D1}/d\Delta V_{in} = +g_{m1}/2$ and $dI_{D2}/d\Delta V_{in} = -g_{m1}/2$, with $g_{m1} = \sqrt{\beta_nI_{SS}}$, so

$$
\begin{aligned}
\frac{dV_{out}}{d\Delta V_{in}}\bigg|_0 &= f'\!\left(\frac{I_{SS}}{2}\right)\frac{g_{m1}}{2} - f'\!\left(\frac{I_{SS}}{2}\right)\left(-\frac{g_{m1}}{2}\right) = g_{m1}\,f'\!\left(\frac{I_{SS}}{2}\right)\\
&= -g_{m1}\left(\frac{1}{g_{m3}} - R_1\right), \qquad g_{m3} = \sqrt{\beta_pI_{SS}} .
\end{aligned}
$$

### Step 5 — Small-signal check of the slope

In the differential half circuit P is a virtual ground, so $M_1$ draws $g_{m1}v_{in}$ out of B; $M_3$, with its source at ac ground and its gate at B, injects $-g_{m3}v_B$ into A; and $R_1$ joins A and B.

<!-- diagram: diagram-01.cir -->

KCL at B (the current through $R_1$ is what $M_1$ draws) and at A (what $M_3$ injects leaves through $R_1$):

$$\frac{v_A - v_B}{R_1} = g_{m1}v_{in}, \qquad -g_{m3}v_B = \frac{v_A - v_B}{R_1} = g_{m1}v_{in}\quad\Longrightarrow\quad v_B = -\frac{g_{m1}}{g_{m3}}v_{in}.$$

Then

$$v_A = v_B + R_1g_{m1}v_{in} = -g_{m1}\left(\frac{1}{g_{m3}} - R_1\right)v_{in},$$

the same result. A plain diode load would give $-g_{m1}/g_{m3}$; here $R_1$ **subtracts** from $1/g_{m3}$ because the output, above $R_1$, moves opposite to the gate node.

### Step 6 — End levels (full steering)

**Low $V_{in1}$** ($\Delta V_{in} \le -\Delta V_{max}$): $I_{D1} = 0$ and $I_{D2} = I_{SS}$.

- Left: with no current there is no drop on $R_1$ ($V_A = V_B$), so the gate of $M_3$ is at its drain potential, and at zero current the square law gives $V_{SG3} = |V_{THP}|$: $V_A = V_{DD} - |V_{THP}| = 2.2$ V (subthreshold conduction would let it creep a little higher). Formally, $f(0) = 0$.
- Right: $V_{A'} = V_{DD} - |V_{THP}| - \sqrt{2I_{SS}/\beta_p} + I_{SS}R_1$.

$$V_{out} = f(0) - f(I_{SS}) = \sqrt{\frac{2I_{SS}}{\beta_p}} - I_{SS}R_1 .$$

**High $V_{in1}$**: by symmetry, $V_{out} = -\left(\sqrt{2I_{SS}/\beta_p} - I_{SS}R_1\right)$.

### Step 7 — Typical case $R_1 < 1/g_{m3}$, with numbers

For $R_1 < 1/g_{m3}$ the central slope is negative and the end level is positive at low $V_{in1}$: an **inverting S-curve**, like a diode-loaded pair but with smaller gain and swing.

Example (free choices): $\beta_n = \beta_p = 2\ \mathrm{mA/V^2}$, $I_{SS} = 200\ \mu$A, $R_1 = 500\ \Omega$.

$$
\begin{aligned}
g_{m1} &= \sqrt{\beta_nI_{SS}} = \sqrt{(2\ \mathrm{mA/V^2})(200\ \mu\mathrm{A})} = 0.632\ \mathrm{mS},\\
g_{m3} &= \sqrt{\beta_pI_{SS}} = 0.632\ \mathrm{mS}, \qquad \frac{1}{g_{m3}} = 1.58\ \mathrm{k}\Omega > R_1\ \checkmark,\\
\frac{dV_{out}}{d\Delta V_{in}}\bigg|_0 &= -(0.632\ \mathrm{mS})(1.58\ \mathrm{k}\Omega - 0.5\ \mathrm{k}\Omega) = -0.68\quad(-1.37\ \text{per volt of } V_{in1}),\\
\sqrt{2I_{SS}/\beta_p} &= \sqrt{\frac{2(200\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 0.447\ \mathrm{V}, \qquad I_{SS}R_1 = 0.1\ \mathrm{V}\ (< 0.8\ \mathrm{V}\ \checkmark),\\
\text{end levels} &= \pm(0.447 - 0.1) = \pm0.347\ \mathrm{V},\\
\Delta V_{max} &= \sqrt{2I_{SS}/\beta_n} = 0.447\ \mathrm{V}\ \Rightarrow\ \text{flat for } V_{in1} \le 1.276\ \mathrm{V} \text{ and } V_{in1} \ge 1.724\ \mathrm{V}.
\end{aligned}
$$

*One interior point, $V_{in1} = 1.4$ V ($\Delta V_{in} = -0.2$ V):*

$$
\begin{aligned}
I_{D1} - I_{D2} &= (1\ \mathrm{mA/V^2})(-0.2)\sqrt{0.4 - 0.04}\ \mathrm{V^2} = -120\ \mu\mathrm{A} \Rightarrow I_{D1} = 40\ \mu\mathrm{A},\ I_{D2} = 160\ \mu\mathrm{A},\\
f(I_{D1}) &= (40\ \mu\mathrm{A})(500\ \Omega) - \sqrt{2(40\ \mu\mathrm{A})/(2\ \mathrm{mA/V^2})} = 0.020 - 0.200 = -0.180\ \mathrm{V},\\
f(I_{D2}) &= (160\ \mu\mathrm{A})(500\ \Omega) - \sqrt{2(160\ \mu\mathrm{A})/(2\ \mathrm{mA/V^2})} = 0.080 - 0.400 = -0.320\ \mathrm{V},\\
V_{out} &= -0.180 - (-0.320) = +0.140\ \mathrm{V}.
\end{aligned}
$$

| $V_{in1}$ (V) | $V_A$ (V) | $V_{A'}$ (V) | $V_{out}$ (V) |
|---|---|---|---|
| 0 to 1.276 | 2.200 | 1.853 | +0.347 |
| 1.30 | 2.156 | 1.854 | +0.302 |
| 1.40 | 2.020 | 1.880 | +0.140 |
| 1.50 | 1.934 | 1.934 | 0 |
| 1.60 | 1.880 | 2.020 | −0.140 |
| 1.70 | 1.854 | 2.156 | −0.302 |
| 1.724 to 3 | 1.853 | 2.200 | −0.347 |

(A full DC solution of the circuit with these values reproduces this table.)

### Step 8 — Other values of $R_1$ (for completeness)

Since $f$ is convex ($f'' > 0$), the shape changes as $R_1$ grows:

- **$R_1 = 1/g_{m3}$:** zero central gain (flat at the centre), but the end levels $\pm\sqrt{I_{SS}/\beta_p}(\sqrt2 - 1)$ are still nonzero, with the inverting signs.
- **$1/g_{m3} < R_1 < \sqrt2/g_{m3}$:** the central slope is positive while the ends keep the inverting signs, so the curve is non-monotonic.
- **$R_1 > \sqrt2/g_{m3}$:** the end levels change sign and the centre is non-inverting.
- **Near the edges of the steering window** the slope tends to $-\sqrt{\beta_n/\beta_p}$ for any $R_1$: the side whose current goes to zero has $1/g_{m3} \to \infty$, while $dI_{D1}/d\Delta V_{in} \approx \sqrt{2\beta_nI_{D1}}$, so $f'(I_{D1})\,dI_{D1}/d\Delta V_{in} \to -\sqrt{\beta_n/\beta_p}$.

**PMOS in triode** (if $I_{SS}R_1 > |V_{THP}|$). The device carrying the large current leaves saturation at full steering. With $V_{ov} = V_{SG} - |V_{THP}|$ and $V_{SD} = V_{SG} - IR_1 = V_{ov} - (IR_1 - |V_{THP}|)$, the triode law gives

$$I = \beta_p\left[V_{ov}V_{SD} - \tfrac12V_{SD}^2\right] = \tfrac12\beta_p\left[V_{ov}^2 - (IR_1 - |V_{THP}|)^2\right].$$

So the end level for low $V_{in1}$ becomes $+\left[\sqrt{2I_{SS}/\beta_p + (I_{SS}R_1 - |V_{THP}|)^2} - I_{SS}R_1\right]$ (its negative at high $V_{in1}$), algebraically larger than the saturated formula would give.

### Result

$M_3$ carries $I_{D1}$, with its gate driven from the bottom of $R_1$, so

$$V_A = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_{D1}}{\beta_p}} + I_{D1}R_1, \qquad V_{out} = f(I_{D1}) - f(I_{D2}),\quad f(I) = IR_1 - \sqrt{\frac{2I}{\beta_p}}$$

(valid while $I_{D1}R_1 < |V_{THP}|$).

For the typical case $R_1 < 1/g_{m3}$, with $g_{m3} = \sqrt{\beta_pI_{SS}}$, the curve is an **inverting S-curve** centred at $V_{in1} = 1.5$ V:

- **Central slope:** $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}(1/g_{m3} - R_1)$, with $g_{m1} = \sqrt{\beta_nI_{SS}}$.
- **Flat ends** for $|V_{in1} - V_{in2}| > \sqrt{2I_{SS}/\beta_n}$, at $V_{out} = \pm\left[\sqrt{2I_{SS}/\beta_p} - I_{SS}R_1\right]$, positive for low $V_{in1}$. The off side sits at $V_{DD} - |V_{THP}| = 2.2$ V.
- **Larger $R_1$** reduces, cancels ($R_1 = 1/g_{m3}$) or reverses the central gain and produces non-monotonic curves (Step 8).

**Common mistake.** Treating $M_3$/$M_4$ as ordinary diode-connected loads (gate at the output node), or taking the outputs at the drains of $M_1$/$M_2$. Either way $R_1$ drops out, giving gain $g_{m1}/g_{m3} = \sqrt{\beta_n/\beta_p}$ and ends $\pm\sqrt{2I_{SS}/\beta_p}$.

**Common mistake.** Adding $R_1$ in series with the diode, i.e. gain $g_{m1}(1/g_{m3} + R_1)$. More current pulls B down by $\Delta I/g_{m3}$ but raises A above B by $\Delta I\,R_1$, so $R_1$ subtracts.

**Common mistake.** Quoting the end levels as $\pm\sqrt{2I_{SS}/\beta_p}$. The conducting side's output is raised by $I_{SS}R_1$, so the levels are $\pm(\sqrt{2I_{SS}/\beta_p} - I_{SS}R_1)$.
