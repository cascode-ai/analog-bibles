# Detailed solution - R095

**Approach.** $M_1$ is a common-source input device. Its load is the network $R_1$, $R_2$, $M_2$: the gate of $M_2$ sits at the tap of a divider across $V_{DD} - V_{out}$, so the load is a "$V_{GS}$ multiplier" (a PMOS diode whose voltage is scaled up by the divider). Show that $M_2$ is saturated whenever it conducts, then follow the curve: resistive load $R_1 + R_2$ until $M_2$ turns on, and a soft clamp afterwards, with the turn-on point and slopes from KCL and the small-signal model.

### Step 1 — The gate voltage of $M_2$ and KCL

Call the gate node of $M_2$ (the $R_1$–$R_2$ tap) $G$. No gate current flows, so $R_1$ and $R_2$ divide $V_{DD} - V_{out}$:

$$I_R = \frac{V_{DD} - V_{out}}{R_1 + R_2}, \qquad V_{SG2} = I_RR_1 = (V_{DD} - V_{out})\frac{R_1}{R_1 + R_2} .$$

$M_2$'s source–drain voltage is the full $V_{DD} - V_{out}$, so it is saturated whenever it is on:

$$V_{SD2} = V_{DD} - V_{out} \ge V_{SG2} > V_{SG2} - |V_{THP}| .$$

It turns on when $V_{SG2} > 0.8$ V, i.e.

$$V_{DD} - V_{out} > 0.8\left(1 + \frac{R_2}{R_1}\right)\ \mathrm{V},$$

equivalently when the divider current reaches $I_R = 0.8\ \mathrm{V}/R_1$. KCL at the output:

$$I_{D1} = \frac{V_{DD} - V_{out}}{R_1 + R_2} + I_{D2}, \qquad I_{D2} = \frac{\beta_2}{2}\left[(V_{DD} - V_{out})\frac{R_1}{R_1 + R_2} - 0.8\right]^2\ \text{(when on)}.$$

### Step 2 — Before $M_2$ turns on: $V_{DD}$, then a steep resistive fall

For $V_{in} \le 0.7$ V, $M_1$ is off, so the divider current is zero and

$$V_{out} = V_{DD} = 3\ \mathrm{V}.$$

Once $M_1$ conducts, and while $V_{DD} - V_{out} < 0.8(R_1 + R_2)/R_1$, $M_2$ is off and the load is just $R_1 + R_2$. With $M_1$ saturated:

$$V_{out} = V_{DD} - (R_1 + R_2)\,\frac{\beta_1}{2}(V_{in} - 0.7)^2, \qquad \frac{dV_{out}}{dV_{in}} = -(R_1 + R_2)\,\beta_1(V_{in} - 0.7) = -g_{m1}(R_1 + R_2) .$$

$R_1 + R_2$ is large, so once $g_{m1}$ has grown a little this fall is **steep**.

### Step 3 — $M_2$ turns on: the transition point

$M_2$ turns on when $V_{DD} - V_{out} = 0.8(1 + R_2/R_1)$, i.e. when $M_1$'s current equals $0.8/R_1$. If $M_1$ is still saturated there:

$$
\begin{aligned}
\frac{\beta_1}{2}(V_{in} - 0.7)^2 &= \frac{0.8\ \mathrm{V}}{R_1}\\
V_{in} &= 0.7 + \sqrt{\frac{1.6\ \mathrm{V}}{\beta_1R_1}} .
\end{aligned}
$$

The clamp appears inside the sweep only if this point is reached by $V_{in} = 3$ V and $0.8(1 + R_2/R_1) < 3$ V (otherwise the output would have to drop below 0 V to turn $M_2$ on).

### Step 4 — $M_2$ on: the soft clamp

Once on, $M_2$ absorbs most of any further increase of $M_1$'s current. With $V_{SG2} = 0.8 + \sqrt{2I_{D2}/\beta_2}$ and $V_{DD} - V_{out} = V_{SG2}(R_1 + R_2)/R_1$:

$$V_{DD} - V_{out} = \left(1 + \frac{R_2}{R_1}\right)\left[0.8 + \sqrt{\frac{2I_{D2}}{\beta_2}}\right].$$

$V_{SG2}$ grows only with $\sqrt{I_{D2}}$, so $V_{DD} - V_{out}$ stays close to $0.8(1 + R_2/R_1)$ and **grows only slowly**: the output is clamped.

**Small-signal model of the load.** With $V_{DD}$ as ac ground: $R_1$ from $g$ to ground, $R_2$ from $g$ to $out$; $M_2$ (source at ground, gate at $g$, drain at $out$) injects $g_{m2}v_{sg2} = -g_{m2}v_g$ into $out$; $M_1$ draws $g_{m1}v_{in}$ from $out$.

<!-- diagram: diagram-01.cir -->

With a test voltage $v_x$ at $out$, the divider gives $v_g = v_xR_1/(R_1 + R_2)$, and the current $i_x$ drawn by the load is the current down $R_2$ plus the current that $M_2$ draws:

$$
\begin{aligned}
i_x &= \frac{v_x}{R_1 + R_2} + g_{m2}v_g = \frac{v_x}{R_1 + R_2} + g_{m2}\frac{R_1}{R_1 + R_2}v_x = \frac{1 + g_{m2}R_1}{R_1 + R_2}\,v_x,\\
R_{load} &= \frac{v_x}{i_x} = \frac{R_1 + R_2}{1 + g_{m2}R_1} .
\end{aligned}
$$

**Slope:**

$$\frac{dV_{out}}{dV_{in}} = -g_{m1}R_{load} = -\frac{g_{m1}(R_1 + R_2)}{1 + g_{m2}R_1} \approx -\frac{g_{m1}}{g_{m2}}\left(1 + \frac{R_2}{R_1}\right)\quad (g_{m2}R_1 \gg 1).$$

At turn-on $g_{m2} = 0$, so the slope is continuous with the resistive region. As $M_2$'s current grows, $g_{m2}R_1$ quickly becomes large and the slope shrinks to about $(g_{m1}/g_{m2})(1 + R_2/R_1)$: the curve bends over sharply into the **clamp**.

### Step 5 — $M_1$ enters triode

If $V_{out}$ falls below $V_{in} - 0.7$ V (typically in the upper part of the input range), $M_1$ enters triode: its $g_m$ falls and its channel conductance appears, so the slope decreases further and the curve flattens toward a low final value at $V_{in} = 3$ V.

If $M_1$ reaches $V_{out} = V_{in} - 0.7$ V *before* $M_2$ turns on (e.g. for large $R_2/R_1$, where the turn-on drop $0.8(1 + R_2/R_1)$ is big), the two kinks occur in the opposite order.

### Step 6 — A numerical example

For illustration take $R_1 = R_2 = 10\ \mathrm{k}\Omega$, $\beta_1 = 0.5\ \mathrm{mA/V^2}$, $\beta_2 = 10\ \mathrm{mA/V^2}$.

- **Resistive region:** $V_{out} = 3 - (20\ \mathrm{k}\Omega)(0.25\ \mathrm{mA/V^2})(V_{in} - 0.7)^2 = 3 - 5(V_{in} - 0.7)^2$, slope $-10(V_{in} - 0.7)$.
- **$M_2$ turn-on:** $V_{DD} - V_{out} = 0.8\times2 = 1.6$ V, so $V_{out} = 1.4$ V, at $V_{in} = 0.7 + \sqrt{1.6/(0.5\ \mathrm{mA/V^2}\times10\ \mathrm{k}\Omega)} = 0.7 + \sqrt{0.32} = 1.266$ V.
- **Clamp:** at $V_{in} = 1.5$ V, $I_{D1} = 0.16$ mA, $V_{out} = 1.166$ V, $V_{SG2} = 0.917$ V, $I_{D2} = 0.068$ mA, $g_{m2} = 1.17$ mS, $g_{m1} = 0.4$ mS; slope $= -(0.4\ \mathrm{mS})(20\ \mathrm{k}\Omega)/(1 + 11.7) = -0.63$.
- **$M_1$ triode entry** at $V_{in} \approx 1.73$ V ($V_{out} \approx 1.03$ V).

| $V_{in}$ (V) | $V_{out}$ (V) | $M_1$ | $M_2$ | Slope |
|---|---|---|---|---|
| ≤ 0.7 | 3.000 | off | off | 0 |
| 0.9 | 2.800 | sat | off | −2.0 |
| 1.1 | 2.200 | sat | off | −4.0 |
| 1.266 | 1.400 | sat | turn-on | −5.7 |
| 1.3 | 1.328 | sat | on | −1.3 |
| 1.5 | 1.166 | sat | on | −0.63 |
| 1.73 | 1.033 | → triode | on | −0.5 |
| 2.0 | 0.924 | triode | on | −0.32 |
| 3.0 | 0.718 | triode | on | −0.14 |

The output falls steeply to about 1.4 V and is then held near $V_{DD} - 1.6\ \mathrm{V}$, sinking only slowly.

### Result

An **inverting** characteristic:

- **$V_{in} \le 0.7$ V:** no current, $V_{out} = V_{DD}$.
- **$M_1$ on, $M_2$ off** (while $V_{DD} - V_{out} < 0.8(R_1 + R_2)/R_1$): $V_{out} = V_{DD} - (R_1 + R_2)\cdot\tfrac12\beta_1(V_{in} - 0.7)^2$, slope $-g_{m1}(R_1 + R_2)$, steep.
- **$V_{DD} - V_{out} > 0.8(1 + R_2/R_1)$:** $M_2$ conducts and absorbs most of the extra current. $V_{DD} - V_{out} = (1 + R_2/R_1)[0.8 + \sqrt{2I_{D2}/\beta_2}]$ rises slowly; the incremental load is $(R_1 + R_2)/(1 + g_{m2}R_1)$ and the slope $\approx -g_{m1}(R_1 + R_2)/(1 + g_{m2}R_1)$ ($\approx -(g_{m1}/g_{m2})(1 + R_2/R_1)$ when $g_{m2}R_1 \gg 1$).
- $M_2$ is saturated whenever it is on, since $V_{SD2} = V_{DD} - V_{out} \ge V_{SG2}$.
- **$M_1$ enters triode** if $V_{out} < V_{in} - 0.7$ V, reducing the slope further.
- **Transition points:** $V_{in} = 0.7$ V; $V_{out} = V_{DD} - 0.8(1 + R_2/R_1)$ ($M_2$ turn-on, when the $R_1 + R_2$ current reaches $0.8/R_1$), i.e. $V_{in} = 0.7 + \sqrt{1.6/(\beta_1R_1)}$ if $M_1$ is still saturated there; $V_{out} = V_{in} - 0.7$ V. The clamp appears only if $0.8(1 + R_2/R_1) < 3$ V and the turn-on is reached by $V_{in} = 3$ V; the last two kinks may occur in either order.

**Common mistake.** Taking $V_{SG2}$ as the full $V_{DD} - V_{out}$, as if $M_2$ were diode-connected, or inverting the divider ratio. Only the fraction $R_1/(R_1 + R_2)$ appears as $V_{SG2}$, so $M_2$ turns on at $V_{DD} - V_{out} = 0.8(1 + R_2/R_1)$.

**Common mistake.** Assuming $M_2$ can be in triode when on. Its $V_{SD}$ is the whole $V_{DD} - V_{out}$, always larger than $V_{SG2}$.

**Common mistake.** Treating the load only as resistors (a steep fall all the way down) or only as a diode. Before $M_2$ turns on the load is $R_1 + R_2$; afterwards it is the much smaller $(R_1 + R_2)/(1 + g_{m2}R_1)$, which produces the clamp.
