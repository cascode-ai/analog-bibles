# Detailed solution - R187

**Approach.** The PMOS gates are driven from node N, the midpoint of the resistor string $R_1$–$R_2$ between the two outputs. N therefore sits at the output common-mode level, and the loads bias themselves. First we use KCL to show that each PMOS carries exactly $I_{SS}/2$ and that $V_N$ stays constant. Then KCL at each output relates $V_{out}$ to the difference of the input-pair currents, and the large-signal current-steering law of the differential pair gives the whole curve.

### Step 1 — Reading the circuit and the sweep

From the figure:

- $M_1$–$M_2$: NMOS differential pair, sources joined at node P, tail transistor $M_5$ (gate at $V_b$) carrying $I_{SS}$ when saturated.
- $M_3$, $M_4$: PMOS, sources at $V_{DD}$, drains at the outputs X (left) and Y (right). **Their gates are tied together to node N**, the junction between $R_1$ (from X) and $R_2$ (to Y).
- $V_{out} = V_X - V_Y$, and $R_1 = R_2$.

**The sweep.** $V_{in2} = 3\ \mathrm{V} - V_{in1}$, so the input common mode stays at 1.5 V and the differential input is

$$\Delta V_{in} \equiv V_{in1} - V_{in2} = 2V_{in1} - 3\ \mathrm{V}.$$

By symmetry (swapping the inputs swaps $V_X$ and $V_Y$), $V_{out}$ is odd about $V_{in1} = 1.5$ V and equals zero there.

### Step 2 — Node N sits at the output common-mode level

The MOS gates draw no current, so KCL at N says that the current flowing from X to N through $R_1$ equals the current flowing from N to Y through $R_2$:

$$
\begin{aligned}
\frac{V_X - V_N}{R_1} &= \frac{V_N - V_Y}{R_2}\\
V_X - V_N &= V_N - V_Y \qquad (R_1 = R_2)\\
V_N &= \frac{V_X + V_Y}{2}.
\end{aligned}
$$

So the gate voltage of both PMOS loads is the **average of the two outputs**, i.e. the output common-mode level.

### Step 3 — Each PMOS carries $I_{SS}/2$, and $V_N$ is constant

$M_3$ and $M_4$ have the same source ($V_{DD}$) and the same gate (N), so they have the same $V_{SG} = V_{DD} - V_N$. While both are saturated they carry the same current, which we call $I_L$:

$$I_{D3} = I_{D4} = I_L = \tfrac12\beta_p\left(V_{DD} - V_N - |V_{THP}|\right)^2, \qquad \beta_p = \mu_pC_{ox}\left(\frac WL\right)_{3,4}.$$

Let $I_R$ be the current in the resistor string (X → N → Y). KCL:

- at X: $I_L = I_{D1} + I_R$;
- at Y: $I_L + I_R = I_{D2}$.

Adding the two equations, $I_R$ cancels:

$$
\begin{aligned}
2I_L + I_R &= I_{D1} + I_{D2} + I_R\\
2I_L &= I_{D1} + I_{D2} = I_{SS}\\
I_L &= \frac{I_{SS}}{2}.
\end{aligned}
$$

This holds for **every** $V_{in1}$, as long as both PMOS devices are saturated. Inverting the square law:

$$
\begin{aligned}
\frac{I_{SS}}{2} &= \tfrac12\beta_p(V_{SG3} - |V_{THP}|)^2\\
V_{SG3} &= |V_{THP}| + \sqrt{\frac{I_{SS}}{\beta_p}}\\
V_N &= V_{DD} - |V_{THP}| - \sqrt{\frac{I_{SS}}{\beta_p}} = \text{constant}.
\end{aligned}
$$

So the **output common-mode level $V_N = (V_X + V_Y)/2$ does not move** during the sweep. This is local common-mode feedback: if both outputs drifted up, N would rise, $V_{SG}$ of the loads would fall, they would supply less current, and the outputs would be pulled back down.

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

**Add** them to get $V_X - V_Y$:

$$
\begin{aligned}
V_{out} &= (V_X - V_N) + (V_N - V_Y) = R_1\left(\frac{I_{SS}}{2} - I_{D1} + I_{D2} - \frac{I_{SS}}{2}\right)\\
V_{out} &= -R_1\,(I_{D1} - I_{D2}).
\end{aligned}
$$

Since $I_{D1} + I_{D2} = I_{SS}$, $\tfrac{I_{SS}}{2} - I_{D1} = -\tfrac12(I_{D1} - I_{D2})$. Each output therefore moves by $\mp\tfrac12R_1(I_{D1} - I_{D2})$ around the fixed level $V_N$.

### Step 5 — Large-signal steering of the input pair

With $M_1$, $M_2$ saturated, $\sqrt{2I_{D1}/\beta_n} - \sqrt{2I_{D2}/\beta_n} = V_{GS1} - V_{GS2} = \Delta V_{in}$. Squaring and using $I_{D1} + I_{D2} = I_{SS}$:

$$
\begin{aligned}
\frac{2}{\beta_n}\left(I_{SS} - 2\sqrt{I_{D1}I_{D2}}\right) &= \Delta V_{in}^2\\
4I_{D1}I_{D2} &= \left(I_{SS} - \frac{\beta_n}{2}\Delta V_{in}^2\right)^2\\
(I_{D1} - I_{D2})^2 = I_{SS}^2 - 4I_{D1}I_{D2} &= \beta_nI_{SS}\Delta V_{in}^2 - \frac{\beta_n^2}{4}\Delta V_{in}^4\\
I_{D1} - I_{D2} &= \frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}.
\end{aligned}
$$

This is valid for $|\Delta V_{in}| \le \sqrt{2I_{SS}/\beta_n}$. Beyond that, one device is off and $I_{D1} - I_{D2} = \pm I_{SS}$. If the conducting device later enters triode, its current is still $I_{SS}$, because the saturated tail $M_5$ forces it.

### Step 6 — The transfer curve

Combine Steps 4 and 5:

$$V_{out} = -R_1\frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}\quad\text{for } |\Delta V_{in}| \le \sqrt{\frac{2I_{SS}}{\beta_n}}, \qquad V_{out} = \mp I_{SS}R_1\ \text{beyond}.$$

**Levels.** At low $V_{in1}$, $M_1$ is off. All of $M_3$'s $I_{SS}/2$ flows through $R_1$ and $R_2$ to Y, where $M_2$ sinks it together with $M_4$'s $I_{SS}/2$. So $V_X - V_N = +I_{SS}R_1/2$, $V_N - V_Y = +I_{SS}R_1/2$ and $V_{out} = +I_{SS}R_1$. At high $V_{in1}$, $V_{out} = -I_{SS}R_1$.

**Central slope.** At $\Delta V_{in} = 0$:

$$\frac{d(I_{D1} - I_{D2})}{d\Delta V_{in}}\bigg|_0 = \frac{\beta_n}{2}\sqrt{\frac{4I_{SS}}{\beta_n}} = \sqrt{\beta_nI_{SS}} = g_{m1},$$

so

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})}\bigg|_0 = -g_{m1}R_1, \qquad \frac{dV_{out}}{dV_{in1}}\bigg|_{1.5\ \mathrm{V}} = -2g_{m1}R_1 .$$

Here $g_{m1} = \sqrt{2\beta_n(I_{SS}/2)}$ is the transconductance of each input device at balance.

**Half-circuit check.** For a differential signal, X and Y move by equal and opposite amounts, so the midpoint N does not move: N is a **virtual ground**. Hence the gates of $M_3$, $M_4$ are at AC ground, each PMOS acts as an ideal current source (an open circuit, with $\lambda = 0$), and each output sees just $R_1$ to AC ground.

<!-- diagram: diagram-01.cir -->

KCL at X in the half circuit: $g_{m1}\dfrac{\Delta v_{in}}{2} + \dfrac{v_X}{R_1} = 0$, so $v_X = -g_{m1}R_1\dfrac{\Delta v_{in}}{2}$. With $v_Y = -v_X$, $v_{out} = v_X - v_Y = -g_{m1}R_1\Delta v_{in}$, in agreement with the slope above.

### Step 7 — Validity: the PMOS must stay saturated

The PMOS saturation condition $V_{SD3} \ge V_{SG3} - |V_{THP}|$ becomes

$$
\begin{aligned}
V_{DD} - V_X &\ge V_{DD} - V_N - |V_{THP}|\\
V_X - V_N &\le |V_{THP}| = 0.8\ \mathrm{V}.
\end{aligned}
$$

The largest value of $V_X - V_N$ is $I_{SS}R_1/2$, reached in full steering. So the levels are exactly $\pm I_{SS}R_1$ only if

$$\frac{I_{SS}R_1}{2} \le |V_{THP}| = 0.8\ \mathrm{V}.$$

If $I_{SS}R_1/2 > 0.8$ V, the PMOS on the high side enters triode before full steering. It can then no longer deliver the full $I_{SS}/2$, and $V_{out}$ flattens at a magnitude smaller than $I_{SS}R_1$. For example, with $I_{SS} = 200\ \mu$A and $R_1 = 10\ \mathrm{k}\Omega$, the ideal levels would be ±2 V, but the curve actually saturates at about ±1.8 V.

### Step 8 — Numerical illustration

Choose $\beta_n = 2\ \mathrm{mA/V^2}$, $\beta_p = 2.22\ \mathrm{mA/V^2}$, $I_{SS} = 200\ \mu$A and $R_1 = R_2 = 5\ \mathrm{k}\Omega$ (free choices):

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

**Common mistake.** Treating $M_3$/$M_4$ as diode-connected loads, which gives a gain $g_{m1}/g_{m3}$. Their gates connect to the drains only through $R_1$ and $R_2$, at the midpoint N, which is a virtual ground for differential signals. So differentially the PMOS devices are current sources, and the load is $R_1$ per side.

**Common mistake.** Getting the factor of 2 wrong, with levels $\pm I_{SS}R_1/2$ or slope $g_{m1}R_1/2$, by analogy with a single resistor $R_1$ between the outputs. Here the resistance between the outputs is $R_1 + R_2 = 2R_1$, so each half sees $R_1$, and in full steering $I_{SS}/2$ flows through $2R_1$, giving $I_{SS}R_1$.

**Common mistake.** Drawing outputs that swing to the rails, as for a high-impedance current-source load. The differential load here is just $R_1$, and the output common mode is pinned at $V_N$, so the swing is limited to $\pm I_{SS}R_1$ (or less, by PMOS triode).
