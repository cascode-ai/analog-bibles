# Detailed solution - R183

**Approach.** This is a large-signal problem, solved region by region with the square law. Three facts organise the whole curve: (i) $M_3$ and $M_4$ are **source-degenerated PMOS current sources**, not resistive loads, and each can deliver at most a current $I_P$; (ii) the input common-mode level stays at 1.5 V, so by symmetry $V_{out}$ is an odd function about $V_{in1} = 1.5$ V; (iii) with $\lambda = 0$ these loads have infinite output resistance, so the gain at balance is enormous. We follow $V_{in1}$ from 0 to 1.5 V, obtain the other half by symmetry, and put numbers on the curve with an example design.

### Step 1 — Reading the circuit and the sweep

From the figure:

- $M_1$–$M_2$ is an NMOS differential pair. Their sources meet at node P, and the tail transistor $M_5$ (gate at $V_{b1}$) pulls current out of P. When $M_5$ is saturated it carries $I_{SS} = \tfrac12\mu_nC_{ox}(W/L)_5(V_{b1} - V_{THN})^2$.
- $M_3$ and $M_4$ are PMOS devices whose gates sit at the fixed voltage $V_{b2}$. Their sources go to $V_{DD}$ through $R_1$ and $R_2$.
- The left output, called X, is the drain node of $M_1$ and $M_3$. The right output, Y, is the drain node of $M_2$ and $M_4$. So $V_{out} = V_X - V_Y$.

**The sweep.** $V_{in1}$ goes from 0 to 3 V while $V_{in2} = 3\ \mathrm{V} - V_{in1}$. Hence

$$
\begin{aligned}
V_{in,CM} &= \frac{V_{in1} + V_{in2}}{2} = \frac{3\ \mathrm{V}}{2} = 1.5\ \mathrm{V}\quad\text{(constant)},\\
V_{in1} - V_{in2} &= 2V_{in1} - 3\ \mathrm{V}.
\end{aligned}
$$

The input is therefore purely differential.

**Symmetry.** Replacing $V_{in1}$ by $3\ \mathrm{V} - V_{in1}$ swaps the two input voltages. Because the circuit is symmetric, this simply mirrors it left to right, so $V_X$ and $V_Y$ swap places:

$$V_{out}(3\ \mathrm{V} - V_{in1}) = -V_{out}(V_{in1}).$$

So $V_{out}$ is **odd about $V_{in1} = 1.5$ V**, and $V_{out}(1.5\ \mathrm{V}) = 0$. It is enough to analyse $0 \le V_{in1} \le 1.5$ V.

### Step 2 — What a degenerated PMOS load can deliver

**Current when saturated.** Ohm's law on $R_1$ gives the source voltage of $M_3$, $V_{S3} = V_{DD} - I_{D3}R_1$, so $V_{SG3} = V_{DD} - I_{D3}R_1 - V_{b2}$. The square-law saturation current is then

$$I_{D3} = \tfrac12\mu_pC_{ox}\left(\frac WL\right)_3\left(V_{DD} - I_{D3}R_1 - V_{b2} - |V_{THP}|\right)^2 .$$

$I_{D3}$ appears on both sides, but the equation has one solution, which depends only on $V_{b2}$, $R_1$ and the size of $M_3$, not on the drain voltage (we neglect $\lambda$). Call this current $I_P$. $M_4$ supplies the same $I_P$ when saturated.

**When is $M_3$ saturated?** The PMOS saturation condition is $V_{SD} \ge V_{SG} - |V_{THP}|$:

$$
\begin{aligned}
V_{S3} - V_X &\ge V_{S3} - V_{b2} - |V_{THP}|\\
V_X &\le V_{b2} + |V_{THP}| = V_{b2} + 0.8\ \mathrm{V}.
\end{aligned}
$$

So the load behaves as follows:

- for $V_X \le V_{b2} + 0.8$ V: an ideal current source $I_P$ (with $\lambda = 0$);
- for $V_X > V_{b2} + 0.8$ V: triode, and the current falls below $I_P$;
- zero current only when $V_X = V_{S3} = V_{DD}$, since with no current there is no drop on $R_1$.

Note that the gate is **not** tied to the drain. This is not a diode-connected load, and the output can rise all the way to $V_{DD}$.

**Output resistance.** Use the small-signal model with the gate and $V_{DD}$ at AC ground. Apply a test voltage $v_x$ at the drain, and let $i_x$ flow into it. The same current flows through $R_1$, so the source moves by $v_s = i_xR_1$ and $v_{gs} = -i_xR_1$. The current in $r_{O3}$ is $i_x - g_{m3}v_{gs} = i_x(1 + g_{m3}R_1)$. KVL from drain to ground:

$$
\begin{aligned}
v_x &= i_x(1 + g_{m3}R_1)\,r_{O3} + i_xR_1\\
R_{up} = \frac{v_x}{i_x} &= R_1 + r_{O3}(1 + g_{m3}R_1).
\end{aligned}
$$

With $\lambda = 0$, $r_{O3} = \infty$, so $R_{up} = \infty$. $R_1$ makes the load an even better current source; it is **not** a load resistor.

**Nominal design.** The designer chooses the biases so that each load supplies half the tail current:

$$2I_P = I_{SS}.$$

We assume this (Step 8 shows what changes otherwise).

**Example design (the sizes are free).** To put numbers on the curve we pick:

- $\beta_n = \mu_nC_{ox}(W/L)_{1,2} = 2\ \mathrm{mA/V^2}$;
- $V_{b1} = 1.0$ V and $\mu_nC_{ox}(W/L)_5 = 4.44\ \mathrm{mA/V^2}$;
- $R_1 = R_2 = 5\ \mathrm{k}\Omega$, $V_{b2} = 1.4$ V and $\beta_p = \mu_pC_{ox}(W/L)_{3,4} = 2.22\ \mathrm{mA/V^2}$.

Then:

$$
\begin{aligned}
I_{SS} &= \tfrac12(4.44\ \mathrm{mA/V^2})(1.0 - 0.7)^2\ \mathrm{V^2} = \tfrac12(4.44\ \mathrm{mA/V^2})(0.09\ \mathrm{V^2}) = 200\ \mu\mathrm{A},\\
\text{try } I_P = 100\ \mu\mathrm{A}:\quad V_{S3} &= 3\ \mathrm{V} - (100\ \mu\mathrm{A})(5\ \mathrm{k}\Omega) = 2.5\ \mathrm{V},\\
V_{SG3} - |V_{THP}| &= 2.5 - 1.4 - 0.8 = 0.3\ \mathrm{V},\\
\tfrac12\beta_p(0.3\ \mathrm{V})^2 &= \tfrac12(2.22\ \mathrm{mA/V^2})(0.09\ \mathrm{V^2}) = 100\ \mu\mathrm{A}.\ \checkmark
\end{aligned}
$$

So $I_P = 100\ \mu$A and $2I_P = I_{SS}$. The saturation boundary of the loads is $V_{b2} + 0.8 = 2.2$ V.

### Step 3 — Low $V_{in1}$: $M_1$ off, $V_{out}$ near $+V_{DD}$

Take $V_{in1} = 0$, $V_{in2} = 3$ V.

**Left side.** $V_{GS1} = 0 - V_P \le 0 < V_{THN}$, so $M_1$ is off and $I_{D1} = 0$. KCL at X gives $I_{D3} = I_{D1} = 0$. With zero current, $R_1$ drops nothing ($V_{S3} = V_{DD}$). The channel of $M_3$ still exists ($V_{SG3} = 3 - 1.4 = 1.6\ \mathrm{V} > 0.8$ V), and a conducting channel carries zero current only if $V_{SD3} = 0$. Therefore

$$V_X = V_{DD} = 3\ \mathrm{V}.$$

**Right side.** $M_2$, with its gate at 3 V, would like to carry the whole tail current $I_{SS}$. But KCL at Y says $I_{D2} = I_{D4} \le I_P = I_{SS}/2$. The PMOS cannot supply what $M_2$ demands, so node Y is pulled down. As it falls, $M_2$ enters triode, and since the tail current must shrink to $I_P$, $M_5$ also leaves saturation ($V_P < V_{b1} - V_{THN}$). $M_4$ stays saturated (its drain is far below 2.2 V) and supplies $I_P$. The final state is $M_2$ and $M_5$ in triode, each carrying $I_P$, with $V_Y = V_{DS5} + V_{DS2}$ only a few tenths of a volt. Call this level $V_{low}$.

**Numbers.** $M_5$ in triode, $I_D = \mu_nC_{ox}(W/L)_5\left[(V_{b1} - V_{THN})V_{DS} - V_{DS}^2/2\right]$, with $V_{DS5} = V_P$:

$$
\begin{aligned}
100\ \mu\mathrm{A} &= (4.44\ \mathrm{mA/V^2})\left[0.3V_P - \tfrac12V_P^2\right]\\
0.0225 &= 0.3V_P - 0.5V_P^2\\
V_P^2 - 0.6V_P + 0.045 &= 0\\
V_P &= 0.3 - \sqrt{0.09 - 0.045} = 0.3 - 0.212 = 0.088\ \mathrm{V}.
\end{aligned}
$$

(The other root, 0.512 V, exceeds $V_{b1} - V_{THN} = 0.3$ V and is not a triode solution.) In general, a device in triode with overdrive $V_{ov}$ that must carry a current $I$ has $I = \beta\left(V_{ov}V_{DS} - V_{DS}^2/2\right)$, whose relevant root is $V_{DS} = V_{ov} - \sqrt{V_{ov}^2 - 2I/\beta}$; we use this repeatedly below. For $M_2$ in triode, the overdrive voltage is $V_{ov2} = V_{in2} - V_P - V_{THN} = 3 - 0.088 - 0.7 = 2.212$ V, and

$$
\begin{aligned}
100\ \mu\mathrm{A} &= (2\ \mathrm{mA/V^2})\left[2.212V_{DS2} - \tfrac12V_{DS2}^2\right]\\
V_{DS2}^2 - 4.424V_{DS2} + 0.1 &= 0\\
V_{DS2} &= 2.212 - \sqrt{2.212^2 - 0.1} = 2.212 - 2.189 = 0.023\ \mathrm{V}.
\end{aligned}
$$

$$
\begin{aligned}
V_Y &= V_P + V_{DS2} = 0.088 + 0.023 = 0.111\ \mathrm{V},\\
V_{out} &= V_X - V_Y = 3 - 0.111 = +2.89\ \mathrm{V}.
\end{aligned}
$$

As $V_{in1}$ rises in this region, $V_{in2}$ falls, so $V_{ov2}$ falls and $V_{DS2}$ grows slightly ($V_Y = 0.123$ V at $V_{in1} = 0.79$ V). $V_{out}$ stays almost flat at about $V_{DD} - V_{low} \approx 2.88$–$2.89$ V.

$M_1$ turns on when $V_{GS1} = V_{in1} - V_P$ reaches $V_{THN}$:

$$V_{in1} = V_P + V_{THN} = 0.088 + 0.7 \approx 0.79\ \mathrm{V}.$$

### Step 4 — $M_1$ turns on: the positive level sags

For $V_{in1} > 0.79$ V, $M_1$ carries a current $I_{D1}$. It is saturated, because its drain X is high.

- **Node X.** $M_3$ must supply exactly $I_{D1} < I_P$, so it is in triode and $V_X > V_{b2} + 0.8$ V. As $I_{D1}$ grows, $V_X$ falls from $V_{DD}$ toward the saturation edge $V_{b2} + |V_{THP}| = 2.2$ V.
- **Node Y.** $M_4$ is still saturated, so $I_{D2} = I_P$. The tail current $I_{D5} = I_{D1} + I_P$ grows, so $M_5$ comes out of deep triode, $V_P$ rises and $V_Y = V_P + V_{DS2}$ rises.
- **End of the region.** It ends when $I_{D1} = I_P$. Then $I_{D5} = 2I_P = I_{SS}$, so $M_5$ is exactly at its saturation edge, $V_P = V_{b1} - V_{THN} = 0.3$ V. For $M_1$, saturated with current $I_P$:

$$
\begin{aligned}
V_{ov,P} &= \sqrt{\frac{2I_P}{\beta_n}} = \sqrt{\frac{2(100\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = \sqrt{0.1}\ \mathrm{V} = 0.316\ \mathrm{V},\\
V_{in1} &= V_P + V_{THN} + V_{ov,P} = 0.3 + 0.7 + 0.316 = 1.316\ \mathrm{V}.
\end{aligned}
$$

**One point worked out: $V_{in1} = 1.0$ V** ($V_{in2} = 2.0$ V). The unknowns are $V_P$ and $I_{D1}$. KCL at P, with $M_5$ in triode:

$$I_{D1} + 100\ \mu\mathrm{A} = (4.44\ \mathrm{mA/V^2})\left[0.3V_P - \tfrac12V_P^2\right].$$

$M_1$ saturated:

$$I_{D1} = \tfrac12(2\ \mathrm{mA/V^2})(1.0 - V_P - 0.7)^2 .$$

Solving the two equations (for example by trying values of $V_P$) gives $V_P = 0.124$ V. Check:

$$
\begin{aligned}
I_{D1} &= (1\ \mathrm{mA/V^2})(0.176\ \mathrm{V})^2 = 31.0\ \mu\mathrm{A},\\
(4.44\ \mathrm{mA/V^2})[0.3(0.124) - 0.5(0.124)^2] &= (4.44\ \mathrm{mA/V^2})(0.0295\ \mathrm{V^2}) = 131\ \mu\mathrm{A} = 31 + 100\ \mu\mathrm{A}.\ \checkmark
\end{aligned}
$$

$M_3$ in triode carrying 31 µA:

$$
\begin{aligned}
V_{S3} &= 3 - (31\ \mu\mathrm{A})(5\ \mathrm{k}\Omega) = 2.845\ \mathrm{V},\\
V_{SG3} - |V_{THP}| &= 2.845 - 1.4 - 0.8 = 0.645\ \mathrm{V},\\
31\ \mu\mathrm{A} &= (2.22\ \mathrm{mA/V^2})\left[0.645V_{SD3} - \tfrac12V_{SD3}^2\right]\\
V_{SD3} &= 0.645 - \sqrt{0.645^2 - \frac{2(31\ \mu\mathrm{A})}{2.22\ \mathrm{mA/V^2}}} = 0.645 - \sqrt{0.416 - 0.028} = 0.645 - 0.623 = 0.022\ \mathrm{V},\\
V_X &= 2.845 - 0.022 = 2.823\ \mathrm{V}.
\end{aligned}
$$

$M_2$ in triode carrying 100 µA, with $V_{ov2} = 2.0 - 0.124 - 0.7 = 1.176$ V:

$$
\begin{aligned}
V_{DS2} &= 1.176 - \sqrt{1.176^2 - 0.1} = 1.176 - 1.133 = 0.043\ \mathrm{V},\\
V_Y &= 0.124 + 0.043 = 0.167\ \mathrm{V},\\
V_{out} &= 2.823 - 0.167 = +2.66\ \mathrm{V}.
\end{aligned}
$$

### Step 5 — From $V_{in1} \approx 1.32$ V up to balance

Now $I_{D1} = I_{D2} = I_P$ and $M_5$ is saturated ($I_{D5} = I_{SS} = 2I_P$). $M_1$ and $M_2$ carry equal currents, but $V_{GS2} > V_{GS1}$ because $V_{in2} > V_{in1}$. Both cannot be saturated, so $M_2$ is in triode (its smaller $V_{DS}$ offsets its larger $V_{GS}$), while $M_1$ is saturated and sets the tail node:

$$V_P = V_{in1} - V_{THN} - V_{ov,P}.$$

**Node Y** follows from $M_2$'s triode equation. At $V_{in1} = 1.4$ V:

$$
\begin{aligned}
V_P &= 1.4 - 0.7 - 0.316 = 0.384\ \mathrm{V},\\
V_{ov2} &= 1.6 - 0.384 - 0.7 = 0.516\ \mathrm{V},\\
V_{DS2} &= 0.516 - \sqrt{0.516^2 - 0.1} = 0.516 - 0.408 = 0.108\ \mathrm{V},\\
V_Y &= 0.384 + 0.108 = 0.492\ \mathrm{V}.
\end{aligned}
$$

As $V_{in1}\to1.5$ V, $M_2$ approaches its saturation edge and $V_Y \to V_{in2} - V_{THN} = 0.8$ V.

**Node X.** With $\lambda = 0$, $M_3$ and $M_1$ are two ideal current sources of the same value $I_P$ in series, so the square law alone does not fix $V_X$. Any small output conductance does fix it. $V_Y$ is far below $V_X$, so $M_4$ has the larger $V_{SD}$ and supplies slightly more current than $M_3$. The tail current is fixed, so $M_1$ receives slightly less than $M_3$ offers, and $V_X$ rises until $M_3$ just enters triode:

$$V_X \approx V_{b2} + |V_{THP}| = 2.2\ \mathrm{V}.$$

So in this range $V_{out} \approx 2.2 - V_Y$, which falls from about 1.83 V to about $2.2 - 0.8 = 1.4$ V.

### Step 6 — At balance: an (almost) vertical crossing

At $V_{in1} = V_{in2} = 1.5$ V all five transistors are saturated and $I_{D1} = I_{D2} = I_{SS}/2 = I_P$. For a small differential input, node P does not move (the two halves push equal and opposite currents into it), so it is a **virtual ground**. Each half is then a common-source stage: $M_1$ (transconductance $g_{m1}$, output resistance $r_{O1}$) loaded by the degenerated PMOS of resistance $R_{up}$ (Step 2).

<!-- diagram: diagram-01.cir -->

The half circuit is: input $v_{in,d}/2$ on the gate of $M_1$, the source of $M_1$ at ground (node P), drain at X; $M_3$ from X to node $s_3$ with its gate at AC ground; and $R_1$ from $s_3$ to AC ground. Node X therefore sees the controlled current $g_{m1}v_{in,d}/2$ (drawn by $M_1$) and two resistances to AC ground, $r_{O1}$ and $R_{up}$, whose parallel combination is

$$R_{out} = r_{O1}\parallel\left[R_1 + r_{O3}(1 + g_{m3}R_1)\right].$$

KCL at X (current leaving X through $M_1$ and through $R_{out}$ sums to zero):

$$
\begin{aligned}
g_{m1}\frac{v_{in,d}}{2} + \frac{v_X}{R_{out}} &= 0\\
v_X &= -g_{m1}R_{out}\frac{v_{in,d}}{2}.
\end{aligned}
$$

The other half sees $-v_{in,d}/2$, so $v_Y = +g_{m1}R_{out}v_{in,d}/2$, and

$$A_v = \frac{v_X - v_Y}{v_{in,d}} = -g_{m1}R_{out}, \qquad v_{in,d} = v_{in1} - v_{in2}.$$

In the sweep, $V_{in1} - V_{in2} = 2V_{in1} - 3$ V, so the slope of the plotted curve is

$$\frac{dV_{out}}{dV_{in1}} = 2A_v = -2g_{m1}R_{out}.$$

With $\lambda = 0$, $r_{O1} = r_{O3} = \infty$, so $R_{out} = \infty$ and the slope is infinite. The curve drops **vertically** through $V_{out} = 0$ at $V_{in1} = 1.5$ V, from about $+1.4$ V to about $-1.4$ V in the example.

*Physical picture:* at balance both output nodes are joined only to current sources (the input transistors below, the degenerated PMOS above). A tiny imbalance in current has nowhere to go but into the node capacitance, so the node voltage runs until some transistor leaves saturation.

*With a realistic $\lambda$* (for example 0.1 V⁻¹ at 100 µA): $r_O = 100\ \mathrm{k}\Omega$, $g_{m1} = \sqrt{2\beta_nI_P} = 0.632$ mS and $g_{m3} = \sqrt{2\beta_pI_P} = 0.667$ mS. Then

$$
\begin{aligned}
R_{up} &= 5\ \mathrm{k}\Omega + (100\ \mathrm{k}\Omega)(1 + 3.33) = 438\ \mathrm{k}\Omega,\\
R_{out} &= 100\ \mathrm{k}\Omega\parallel438\ \mathrm{k}\Omega = 81\ \mathrm{k}\Omega,\\
|A_v| &= (0.632\ \mathrm{mS})(81\ \mathrm{k}\Omega) \approx 51 .
\end{aligned}
$$

The slope is then about 100 V/V, so the ±1.4-V swing still happens within about ±14 mV of 1.5 V, which looks vertical on a 0–3 V axis.

### Step 7 — $V_{in1} > 1.5$ V: the mirror image

By the odd symmetry of Step 1, the right half of the curve is the left half rotated by 180° about the point (1.5 V, 0). Now $M_2$ gets less current, the right output Y rises (to 2.2 V, then to $V_{DD}$ once $M_2$ turns off at $V_{in1} \approx 2.21$ V), and the left output X is pulled down to $V_{low} \approx 0.11$ V. $V_{out}$ ends at $-(V_{DD} - V_{low}) \approx -2.89$ V.

**Example curve** (example design, $\lambda \to 0$):

| $V_{in1}$ (V) | State | $V_X$ (V) | $V_Y$ (V) | $V_{out}$ (V) |
|---|---|---|---|---|
| 0 | $M_1$ off; $M_2$, $M_5$ triode | 3.00 | 0.11 | +2.89 |
| 0.79 | $M_1$ at threshold | 3.00 | 0.12 | +2.88 |
| 1.0 | $M_1$ on, $M_3$ triode | 2.82 | 0.17 | +2.66 |
| 1.2 | same | 2.47 | 0.27 | +2.20 |
| 1.32 | $I_{D1} = I_P$, $M_5$ saturates | 2.20 | 0.38 | +1.83 |
| 1.4 | $M_2$ triode | 2.20 | 0.49 | +1.71 |
| 1.5⁻ | edge of balance | 2.20 | 0.80 | +1.40 |
| 1.5 | balance | — | — | 0 (vertical) |
| 1.5⁺ | mirror | 0.80 | 2.20 | −1.40 |
| 1.68 | mirror | 0.38 | 2.20 | −1.83 |
| 2.21 | $M_2$ at threshold | 0.12 | 3.00 | −2.88 |
| 3.0 | $M_2$ off | 0.11 | 3.00 | −2.89 |

### Step 8 — What if $2I_P \ne I_{SS}$?

Without common-mode feedback the two currents never match exactly, so it is worth knowing how the picture changes. The curve stays odd about 1.5 V in every case; only the central part changes.

- **$2I_P > I_{SS}$ (loads stronger).** Near balance each load must deliver only $I_{SS}/2 < I_P$, so both PMOS devices are in triode and both outputs sit high, above $V_{b2} + 0.8$ V. The triode loads are moderate resistances, so the crossing has a finite, moderate gain. If even $I_P > I_{SS}$, the conducting side is no longer pulled low: its PMOS can supply all of $I_{SS}$. The end levels then shrink to about $\pm(I_{SS}R_1 + |V_{SD}|)$.
- **$2I_P < I_{SS}$ (tail stronger).** Near balance the tail cannot get $I_{SS}$, so $M_5$ and the input pair are pushed into triode and both outputs sit low. The gain at balance is again finite, and the steep drops move outward, to where one input device's current reaches $I_P$.

### Result

$V_{out}$ is an **inverting, comparator-like characteristic, odd-symmetric about $V_{in1} = 1.5$ V** ($V_{out} = 0$ there). For the nominal bias $2I_P = I_{SS}$, where $I_P$ is the current of each degenerated PMOS source, set by $V_{b2}$, $R_1$ and its size:

- **Low $V_{in1}$** ($M_1$ off): the left output is at $V_{DD}$, because $M_3$ carries no current and $R_1$ drops nothing. The right output is pulled down to $V_{low}$, a few tenths of a volt, because $M_4$ can supply only $I_P < I_{SS}$, which forces $M_2$ and the tail into triode. So $V_{out} \approx V_{DD} - V_{low}$ (≈ +2.9 V in the example).
- **As $M_1$ turns on** ($V_{in1} \gtrsim V_P + 0.7$ V), $I_{D1}$ rises toward $I_P$. The left output falls from $V_{DD}$ to $M_3$'s saturation edge $V_{b2} + |V_{THP}|$ and the right output rises from about $V_P$ toward $V_{in2} - V_{THN}$, so the high level sags (2.89 → 1.4 V in the example).
- **At $V_{in1} = 1.5$ V** the slope is $dV_{out}/dV_{in1} = -2g_{m1}\{r_{O1}\parallel[R_1 + r_{O3}(1 + g_{m3}R_1)]\}$, which is infinite with $\lambda = 0$ because the degenerated PMOS loads are ideal current sources. The curve crosses zero **vertically**.
- **High $V_{in1}$**: the mirror image, ending near $-(V_{DD} - V_{low})$.

**Common mistake.** Treating $R_1$ and $R_2$ as the load resistors, which gives a gentle S-curve with gain $g_{m1}R_1$ and levels $\pm I_{SS}R_1$. $R_1$ sits in the **source** of $M_3$. It degenerates the PMOS and raises its output resistance to $R_1 + r_{O3}(1 + g_{m3}R_1)$; the output node sees the drain of $M_3$, not $R_1$.

**Common mistake.** Treating $M_3$/$M_4$ as diode-connected loads, or limiting the high output to $V_{DD} - |V_{THP}|$. Their gates are at the fixed bias $V_{b2}$. When $M_1$ is off, $M_3$'s current goes to zero, $R_1$ drops nothing, and the triode channel pulls $V_X$ all the way up to $V_{DD}$.

**Common mistake.** Thinking the conducting side settles at $V_{DD} - I_{SS}R_1$. With $2I_P = I_{SS}$, the PMOS on the conducting side can supply only $I_{SS}/2$ while its input device asks for $I_{SS}$. The node collapses to a few tenths of a volt, with the input device and the tail in triode, until the current demand falls to $I_P$.
