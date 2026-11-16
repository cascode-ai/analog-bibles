# Detailed solution - R187

**Approach.** The PMOS gates are driven from node N, the midpoint of the resistor string $R_1$–$R_2$ between the outputs, so N sits at the output common-mode level and the loads bias themselves. KCL shows that each PMOS carries exactly $I_{SS}/2$ and that $V_N$ stays constant; KCL at each output then relates $V_{out}$ to the difference of the input-pair currents, and the large-signal current-steering law of the pair gives the whole curve.

### Step 1 — The sweep

Call the left output X (drains of $M_1$, $M_3$), the right output Y (drains of $M_2$, $M_4$), the junction of $R_1$ and $R_2$ (the PMOS gates) N, and the common source node of $M_1$, $M_2$ P; $V_{out} = V_X - V_Y$. Since $V_{in2} = 3\ \mathrm{V} - V_{in1}$, the input common mode stays at 1.5 V and the differential input is

$$\Delta V_{in} \equiv V_{in1} - V_{in2} = 2V_{in1} - 3\ \mathrm{V}.$$

Swapping the inputs swaps $V_X$ and $V_Y$, so $V_{out}$ is odd about $V_{in1} = 1.5$ V and zero there.

### Step 2 — Node N sits at the output common-mode level

The gates draw no current, so the same current flows from X to N through $R_1$ and from N to Y through $R_2$; with $R_1 = R_2$,

$$\frac{V_X - V_N}{R_1} = \frac{V_N - V_Y}{R_2} \quad\Longrightarrow\quad V_N = \frac{V_X + V_Y}{2}.$$

The gate voltage of both PMOS loads is the **average of the two outputs**, the output common-mode level.

### Step 3 — Each PMOS carries $I_{SS}/2$, and $V_N$ is constant

$M_3$ and $M_4$ share their source ($V_{DD}$) and gate (N), so while both are saturated they carry the same current $I_L$:

$$I_{D3} = I_{D4} = I_L = \tfrac12\beta_p\left(V_{DD} - V_N - |V_{THP}|\right)^2, \qquad \beta_p = \mu_pC_{ox}\left(\frac WL\right)_{3,4}.$$

With $I_R$ the current in the string (X → N → Y), KCL at X gives $I_L = I_{D1} + I_R$ and at Y gives $I_L + I_R = I_{D2}$. Adding them, $I_R$ cancels:

$$2I_L = I_{D1} + I_{D2} = I_{SS} \quad\Longrightarrow\quad I_L = \frac{I_{SS}}{2}.$$

This holds for **every** $V_{in1}$ while both PMOS devices are saturated. Inverting the square law:

$$
\begin{aligned}
\frac{I_{SS}}{2} &= \tfrac12\beta_p(V_{SG3} - |V_{THP}|)^2\\
V_{SG3} &= |V_{THP}| + \sqrt{\frac{I_{SS}}{\beta_p}}\\
V_N &= V_{DD} - |V_{THP}| - \sqrt{\frac{I_{SS}}{\beta_p}} = \text{constant}.
\end{aligned}
$$

So the **output common-mode level $V_N = (V_X + V_Y)/2$ does not move** during the sweep: this is local common-mode feedback (if both outputs rose, N would rise, the loads would supply less current, and the outputs would be pulled back down).

### Step 4 — KCL at each output: $V_{out}$ in terms of the drain currents

**KCL at X**, with $I_L = I_{SS}/2$:

$$
\begin{aligned}
\frac{I_{SS}}{2} &= I_{D1} + \frac{V_X - V_N}{R_1}\\
V_X - V_N &= R_1\left(\frac{I_{SS}}{2} - I_{D1}\right).
\end{aligned}
$$

**KCL at Y**:

$$
\begin{aligned}
\frac{I_{SS}}{2} + \frac{V_N - V_Y}{R_2} &= I_{D2}\\
V_N - V_Y &= R_1\left(I_{D2} - \frac{I_{SS}}{2}\right).
\end{aligned}
$$

**Adding** them:

$$
\begin{aligned}
V_{out} &= (V_X - V_N) + (V_N - V_Y) = R_1\left(\frac{I_{SS}}{2} - I_{D1} + I_{D2} - \frac{I_{SS}}{2}\right)\\
V_{out} &= -R_1\,(I_{D1} - I_{D2}).
\end{aligned}
$$

Since $I_{D1} + I_{D2} = I_{SS}$, $\tfrac{I_{SS}}{2} - I_{D1} = -\tfrac12(I_{D1} - I_{D2})$, so each output moves by $\mp\tfrac12R_1(I_{D1} - I_{D2})$ around the fixed level $V_N$.

### Step 5 — Large-signal steering of the input pair

With $M_1$, $M_2$ saturated, $\sqrt{2I_{D1}/\beta_n} - \sqrt{2I_{D2}/\beta_n} = \Delta V_{in}$ and $I_{D1} + I_{D2} = I_{SS}$ give the standard steering law

$$I_{D1} - I_{D2} = \frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2},$$

valid for $|\Delta V_{in}| \le \sqrt{2I_{SS}/\beta_n}$. Beyond that, one device is off and $I_{D1} - I_{D2} = \pm I_{SS}$; if the conducting device enters triode, the saturated tail $M_5$ still forces its current to $I_{SS}$.

### Step 6 — The transfer curve

Combining Steps 4 and 5:

$$V_{out} = -R_1\frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}\quad\text{for } |\Delta V_{in}| \le \sqrt{\frac{2I_{SS}}{\beta_n}}, \qquad V_{out} = \mp I_{SS}R_1\ \text{beyond}.$$

**Levels.** At low $V_{in1}$, $M_1$ is off: all of $M_3$'s $I_{SS}/2$ flows through $R_1$ and $R_2$ to Y, where $M_2$ sinks it together with $M_4$'s $I_{SS}/2$. So $V_X - V_N = +I_{SS}R_1/2$, $V_N - V_Y = +I_{SS}R_1/2$ and $V_{out} = +I_{SS}R_1$. At high $V_{in1}$, $V_{out} = -I_{SS}R_1$.

**Central slope.** At $\Delta V_{in} = 0$:

$$\frac{d(I_{D1} - I_{D2})}{d\Delta V_{in}}\bigg|_0 = \frac{\beta_n}{2}\sqrt{\frac{4I_{SS}}{\beta_n}} = \sqrt{\beta_nI_{SS}} = g_{m1},$$

with $g_{m1} = \sqrt{2\beta_n(I_{SS}/2)}$ for each input device at balance, so

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})}\bigg|_0 = -g_{m1}R_1, \qquad \frac{dV_{out}}{dV_{in1}}\bigg|_{1.5\ \mathrm{V}} = -2g_{m1}R_1 .$$

**Half-circuit check.** For differential signals N is a virtual ground, so the gates of $M_3$, $M_4$ are at ac ground, each PMOS is an open circuit ($\lambda = 0$), and each output sees just $R_1$:

<!-- diagram: diagram-01.cir -->

Then $v_X = -g_{m1}R_1\Delta v_{in}/2$ and $v_Y = -v_X$, so $v_{out} = -g_{m1}R_1\Delta v_{in}$, in agreement with the slope above.

### Step 7 — Validity: the PMOS must stay saturated

The PMOS saturation condition $V_{SD3} \ge V_{SG3} - |V_{THP}|$ becomes

$$
\begin{aligned}
V_{DD} - V_X &\ge V_{DD} - V_N - |V_{THP}|\\
V_X - V_N &\le |V_{THP}| = 0.8\ \mathrm{V}.
\end{aligned}
$$

The largest $V_X - V_N$ is $I_{SS}R_1/2$, in full steering, so the levels are exactly $\pm I_{SS}R_1$ only if

$$\frac{I_{SS}R_1}{2} \le |V_{THP}| = 0.8\ \mathrm{V}.$$

Otherwise the high-side PMOS enters triode before full steering, can no longer deliver the full $I_{SS}/2$, and $V_{out}$ flattens at a smaller magnitude. For example, with $I_{SS} = 200\ \mu$A and $R_1 = 10\ \mathrm{k}\Omega$ the ideal levels would be ±2 V, but the curve actually saturates at about ±1.8 V.

### Step 8 — Numerical illustration

With the free choices $\beta_n = 2\ \mathrm{mA/V^2}$, $\beta_p = 2.22\ \mathrm{mA/V^2}$, $I_{SS} = 200\ \mu$A and $R_1 = R_2 = 5\ \mathrm{k}\Omega$:

$$
\begin{aligned}
V_N &= 3 - 0.8 - \sqrt{\frac{200\ \mu\mathrm{A}}{2.22\ \mathrm{mA/V^2}}} = 3 - 0.8 - 0.3 = 1.9\ \mathrm{V},\\
I_{SS}R_1 &= (200\ \mu\mathrm{A})(5\ \mathrm{k}\Omega) = 1.0\ \mathrm{V}\quad(\text{and } I_{SS}R_1/2 = 0.5\ \mathrm{V} < 0.8\ \mathrm{V}\ \checkmark),\\
\sqrt{2I_{SS}/\beta_n} &= \sqrt{\frac{2(200\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 0.447\ \mathrm{V},\\
g_{m1} &= \sqrt{\beta_nI_{SS}} = \sqrt{(2\ \mathrm{mA/V^2})(200\ \mu\mathrm{A})} = 0.632\ \mathrm{mS},\\
\frac{dV_{out}}{dV_{in1}}\bigg|_{1.5\ \mathrm{V}} &= -2(0.632\ \mathrm{mS})(5\ \mathrm{k}\Omega) = -6.3 .
\end{aligned}
$$

At $V_{in1} = 1.4$ V ($\Delta V_{in} = -0.2$ V):

$$
\begin{aligned}
I_{D1} - I_{D2} &= (1\ \mathrm{mA/V^2})(-0.2\ \mathrm{V})\sqrt{0.4 - 0.04}\ \mathrm{V} = -0.2\times0.6\ \mathrm{mA} = -120\ \mu\mathrm{A},\\
V_{out} &= -(5\ \mathrm{k}\Omega)(-120\ \mu\mathrm{A}) = +0.6\ \mathrm{V}\quad(V_X = 2.2\ \mathrm{V},\ V_Y = 1.6\ \mathrm{V}).
\end{aligned}
$$

| $V_{in1}$ (V) | $\Delta V_{in}$ (V) | $V_X$ (V) | $V_Y$ (V) | $V_{out}$ (V) |
|---|---|---|---|---|
| 0 to 1.276 | ≤ −0.447 | 2.40 | 1.40 | +1.0 |
| 1.4 | −0.2 | 2.20 | 1.60 | +0.6 |
| 1.5 | 0 | 1.90 | 1.90 | 0 |
| 1.6 | +0.2 | 1.60 | 2.20 | −0.6 |
| 1.724 to 3 | ≥ +0.447 | 1.40 | 2.40 | −1.0 |

Throughout, $(V_X + V_Y)/2 = 1.9$ V.

### Result

$V_{out}$ is an **inverting S-curve centred at $V_{in1} = 1.5$ V**:

$$V_{out} = -R_1(I_{D1} - I_{D2}) = -R_1\frac{\beta_n}{2}(V_{in1} - V_{in2})\sqrt{\frac{4I_{SS}}{\beta_n} - (V_{in1} - V_{in2})^2}.$$

- It goes from $+I_{SS}R_1$ to $-I_{SS}R_1$ (if $I_{SS}R_1/2 < |V_{THP}|$; otherwise it saturates at a smaller magnitude when a PMOS enters triode).
- The central slope is $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}R_1$, with $g_{m1} = \sqrt{\beta_nI_{SS}}$.
- It is flat for $|V_{in1} - V_{in2}| > \sqrt{2I_{SS}/\beta_n}$.
- Because the loads are biased from the output midpoint N, each PMOS carries $I_{SS}/2$ and the output common-mode level stays constant at $V_N = V_{DD} - |V_{THP}| - \sqrt{I_{SS}/\beta_p}$.

**Common mistake.** Treating $M_3$/$M_4$ as diode-connected loads, which gives a gain $g_{m1}/g_{m3}$. Their gates reach the drains only through $R_1$ and $R_2$, at N, which is a virtual ground for differential signals, so differentially the PMOS devices are current sources and the load is $R_1$ per side.

**Common mistake.** Levels of $\pm I_{SS}R_1/2$ or a slope of $g_{m1}R_1/2$, by analogy with a single resistor $R_1$ between the outputs. Here the outputs are joined by $R_1 + R_2 = 2R_1$, so each half sees $R_1$, and in full steering $I_{SS}/2$ flows through $2R_1$, giving $I_{SS}R_1$.

**Common mistake.** Drawing rail-to-rail outputs, as for a current-source load. The differential load is just $R_1$ and the output common mode is pinned at $V_N$, so the swing is limited to $\pm I_{SS}R_1$ (or less, by PMOS triode).
