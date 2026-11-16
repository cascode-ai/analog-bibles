# Detailed solution - R195

**Approach.** The load is a **cross-coupled** PMOS pair: the gate of $M_3$ is driven by the *right* output and the gate of $M_4$ by the *left* output. A small-signal analysis shows that this load has a negative differential resistance, so the balanced point is unstable and the circuit is a latch with two stable states. Following the large-signal state through the sweep then reveals an abrupt regenerative flip and hysteresis. Numbers come from an example sizing, since none is given.

### Step 1 — Small-signal view at balance: a negative-resistance load

Call the left output (drains of $M_1$, $M_3$; gate of $M_4$) X, the right output (drains of $M_2$, $M_4$; gate of $M_3$) Y and the common source node of $M_1$, $M_2$ P, so $V_{out} = V_X - V_Y$. Since $V_{in2} = 3\ \mathrm{V} - V_{in1}$, the input common mode is 1.5 V and $\Delta V_{in} = 2V_{in1} - 3$ V.

Suppose all devices are saturated at the balanced point ($V_{in1} = V_{in2}$, $V_X = V_Y$). For a differential perturbation, $v_Y = -v_X$ and P is a virtual ground. The source of $M_3$ is at ac ground and its gate at Y, so the current it injects into X changes by

$$i_3 = g_{m3}v_{sg3} = g_{m3}(0 - v_Y) = g_{m3}v_X .$$

When X rises, $M_3$ pushes *more* current into X: to node X it is a **negative conductance** $-g_{m3}$, in parallel with $r_{O3}$. KCL at X in the half circuit, with $M_1$ drawing $g_{m1}\Delta v_{in}/2$ and its $r_{O1}$:

$$
\begin{aligned}
g_{m1}\frac{\Delta v_{in}}{2} + v_X\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}}\right) - g_{m3}v_X &= 0\\
v_X &= -\frac{g_{m1}\,\Delta v_{in}/2}{\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} - g_{m3}} .
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

For any practical sizing $g_{m3} \gg 1/r_{O1} + 1/r_{O3}$ ($g_mr_O$ is typically 10–100), so the net conductance at X is **negative**. With the node capacitance $C$, a perturbation obeys $C\,dv_X/dt = (g_{m3} - 1/r_{O1} - 1/r_{O3})v_X$ and **grows exponentially**; equivalently, the loop $X \to M_4 \to Y \to M_3 \to X$ has gain $[g_{m3}(r_{O1}\parallel r_{O3})]^2 > 1$.

The balanced point is therefore unstable and there is no region of finite, well-defined gain: the circuit always settles in "X high / Y low" or "X low / Y high". It is a **latch**.

### Step 2 — Start of the sweep ($V_{in1} = 0$): the "+" state

With $V_{in1} = 0$ and $V_{in2} = 3$ V:

- $M_1$: $V_{GS1} = 0 - V_P \le 0$, so it is **off** and $I_{D1} = 0$.
- Node X: nothing draws current from it, and $M_3$ (gate at the low node Y) is on, so its channel pulls X up until $V_{SD3} = 0$: $V_X = V_{DD} = 3$ V.
- $M_4$: its gate is at $V_X = V_{DD}$, so $V_{SG4} = 0$ and it is **off**.
- Node Y: $M_2$ (gate at 3 V) is on, but nothing supplies current to Y, so $M_2$ pulls Y down to P at zero current, and with zero tail current $M_5$ pulls P to ground: $V_Y = V_P \approx 0$.

This is consistent ($V_{SG3} = 3 - 0 = 3\ \mathrm{V} > 0.8$ V with zero current and $V_{SD3} = 0$; $M_4$ and $M_1$ off), so

$$V_{out} = V_X - V_Y \approx 3 - 0 = +V_{DD}.$$

The tail current has **collapsed**: $M_5$ cannot force its current through the right branch, because $M_4$ is off.

### Step 3 — $V_{in1}$ rises: the "+" state droops but persists past balance

Example sizing: $\beta_n = \mu_nC_{ox}(W/L)_{1,2} = 2\ \mathrm{mA/V^2}$, $\beta_p = \mu_pC_{ox}(W/L)_{3,4} = 0.2\ \mathrm{mA/V^2}$, and a tail with $V_b = 1$ V and $\mu_nC_{ox}(W/L)_5 = 4.44\ \mathrm{mA/V^2}$, giving $I_{SS} = \tfrac12(4.44\ \mathrm{mA/V^2})(0.3\ \mathrm{V})^2 = 200\ \mu$A; $\lambda = 0$ for the large-signal numbers.

Once $V_{in1} > V_{THN} + V_P$, $M_1$ conducts through $M_3$, which is still strongly on because its gate sits at the low node Y. $M_4$ stays off, so $I_{D2} = 0$, $V_Y = V_P$, and all the tail current goes through $M_1$ and $M_3$.

**At $V_{in1} = 1.0$ V.** KCL at P ($M_5$ in triode) with the square law of $M_1$:

$$
\begin{aligned}
(4.44\ \mathrm{mA/V^2})\left[0.3V_P - \tfrac12V_P^2\right] &= (1\ \mathrm{mA/V^2})(1.0 - V_P - 0.7)^2\\
3.222V_P^2 - 1.933V_P + 0.09 &= 0\\
V_P &= \frac{1.933 - \sqrt{1.933^2 - 4(3.222)(0.09)}}{2(3.222)} = 0.051\ \mathrm{V},\\
I_{D1} &= (1\ \mathrm{mA/V^2})(0.249\ \mathrm{V})^2 = 62\ \mu\mathrm{A}.
\end{aligned}
$$

$M_3$ is in triode with $V_{SG3} - |V_{THP}| = (3 - 0.051) - 0.8 = 2.149$ V:

$$
\begin{aligned}
62\ \mu\mathrm{A} &= (0.2\ \mathrm{mA/V^2})\left[2.149V_{SD3} - \tfrac12V_{SD3}^2\right]\\
V_{SD3} &= 2.149 - \sqrt{2.149^2 - 0.62} = 2.149 - 2.000 = 0.149\ \mathrm{V},\\
V_X &= 3 - 0.149 = 2.85\ \mathrm{V}, \qquad V_{out} = 2.85 - 0.05 = +2.80\ \mathrm{V}.
\end{aligned}
$$

**At $V_{in1} = 1.5$ V (balanced inputs).** If $M_1$ carries all of $I_{SS}$, $V_P = 1.5 - 0.7 - \sqrt{2(200\ \mu\mathrm{A})/(2\ \mathrm{mA/V^2})} = 0.8 - 0.447 = 0.353$ V, above $V_b - V_{THN} = 0.3$ V, so the tail is saturated, as assumed. Then:

$$
\begin{aligned}
V_{SG3} - |V_{THP}| &= (3 - 0.353) - 0.8 = 1.847\ \mathrm{V},\\
200\ \mu\mathrm{A} &= (0.2\ \mathrm{mA/V^2})\left[1.847V_{SD3} - \tfrac12V_{SD3}^2\right]\ \Rightarrow\ V_{SD3} = 1.847 - \sqrt{1.847^2 - 2} = 0.659\ \mathrm{V},\\
V_X &= 2.341\ \mathrm{V}, \qquad V_Y = V_P = 0.353\ \mathrm{V}, \qquad V_{out} = +1.99\ \mathrm{V}.
\end{aligned}
$$

$M_4$ is still off ($V_{SG4} = 3 - 2.341 = 0.659\ \mathrm{V} < 0.8$ V ✓), so at $V_{in1} = V_{in2}$ the circuit is **still firmly in the "+" state**: the low Y keeps $M_3$ strong and the high X keeps $M_4$ off. This is the root of the **hysteresis**.

### Step 4 — The regenerative flip

As $V_{in1}$ rises further, $V_P = V_{in1} - 1.147$ V rises, and so does $V_Y = V_P$. $M_3$'s gate drive $V_{SG3} = V_{DD} - V_Y$ shrinks, so to keep carrying $I_{SS}$ it needs a larger $V_{SD3}$, and **X falls**. When X falls below $V_{DD} - |V_{THP}| = 2.2$ V, $M_4$ turns on and feeds Y; Y rises above $V_P$, which weakens $M_3$ further, X falls further and $M_4$ turns on harder. The loop gain of Step 1 quickly exceeds one, and the circuit **flips abruptly** to "X low / Y high".

**Onset in the example.** X reaches 2.2 V when $M_3$, at $V_{SD3} = 0.8$ V, can just carry $I_{SS}$:

$$
\begin{aligned}
200\ \mu\mathrm{A} &= (0.2\ \mathrm{mA/V^2})\left[(V_{SG3} - 0.8)(0.8) - \tfrac12(0.8)^2\right]\\
1 &= 0.8(V_{SG3} - 0.8) - 0.32\ \Rightarrow\ V_{SG3} = 2.45\ \mathrm{V},\\
V_Y = V_P &= 3 - 2.45 = 0.55\ \mathrm{V},\\
V_{in1} &= V_P + V_{GS1} = 0.55 + 0.7 + 0.447 = 1.70\ \mathrm{V}.
\end{aligned}
$$

So the "+" branch ends near $V_{in1} \approx 1.7$ V, at $V_{out} \approx 2.2 - 0.55 = +1.65$ V. There $M_2$ is barely on ($V_{GS2} = 1.30 - 0.55 = 0.75$ V) and can hardly sink the current $M_4$ starts delivering into Y, so the flip follows at once. (A full numerical solution with $\lambda = 0.05\ \mathrm{V^{-1}}$ puts the jump at $V_{in1} \approx 1.72$ V.)

**After the flip** the circuit is in the mirror-image state: $M_3$ is off (gate at the high node Y), $M_1$ carries no current, X sits at $V_P$, and all the tail current flows through $M_2$ and $M_4$. $V_{out}$ is the negative of the "+" branch value at the mirrored input $3\ \mathrm{V} - V_{in1}$; at $V_{in1} = 1.7$ V this is $-V_{out}(1.3\ \mathrm{V})$. Solving at 1.3 V as in Step 3 gives $V_P = 0.186$ V, $I_{D1} = 171\ \mu$A, $V_X = 2.52$ V and $V_{out} = +2.33$ V, so the output jumps from about $+1.65$ V to about $-2.33$ V. As $V_{in1}$ rises further, $M_2$ conducts less; once it turns off (near $V_{in1} \approx 2.3$ V, the mirror of 0.7 V) the current collapses and $V_{out}$ reaches $-V_{DD}$.

### Step 5 — Sweeping back: hysteresis

Starting from $V_{in1} = 3$ V in the "−" state and decreasing $V_{in1}$, the same sequence happens mirrored: the circuit stays "−" through $V_{in1} = 1.5$ V and flips back to "+" only near $V_{in1} \approx 3 - 1.7 = 1.3$ V. The result is a **hysteresis loop**:

| $V_{in1}$ (V) | Up-sweep $V_{out}$ (V) | Down-sweep $V_{out}$ (V) |
|---|---|---|
| 0 to 0.7 | +3.0 | +3.0 |
| 1.0 | +2.8 | +2.8 |
| 1.3 | +2.33 | +2.33 after the jump (−1.65 just before it) |
| 1.5 | +1.99 | −1.99 |
| 1.7 | +1.65 just before the jump, then −2.33 | −2.33 |
| 2.0 | −2.8 | −2.8 |
| 2.3 to 3.0 | −3.0 | −3.0 |

The switching points depend on $\beta_p/\beta_n$ and $I_{SS}$. Weak PMOS devices are overpowered by $M_1$ early, so the window is narrow (only a few tens of millivolts around 1.5 V when $\beta_p$ is very small); strong ones keep X high longer and widen it, and with very strong loads the flip may happen only after the low-side input device ($M_2$ here) turns off, leaving Y held down only by leakage. In every case the flip is abrupt and does **not** occur at $V_{in1} = V_{in2}$.

### Result

The cross-coupled PMOS pair is a positive-feedback (negative-resistance) load: its differential conductance at balance, $1/r_{O1} + 1/r_{O3} - g_{m3}$, is negative, so the circuit behaves as a **latch**, not a linear amplifier.

- **Low $V_{in1}$.** $M_1$ is off. $M_3$, whose gate sits at the low right node, pulls the left output to $V_{DD}$ and keeps $M_4$ off; the right node is pulled down by $M_2$ toward $V_P$, and the current collapses. $V_{out} \approx +V_{DD}$.
- **As $V_{in1}$ rises** past $V_{THN}$, $M_1$ draws current through $M_3$. The left node droops and the right node follows $V_P$ upward, but the feedback **holds the "+" state past $V_{in1} = V_{in2}$**.
- **When $M_1$ overpowers $M_3$** and X drops below $V_{DD} - |V_{THP}|$, $M_4$ turns on and the state **flips regeneratively** to X low / Y high, with $V_{out}$ then heading to $\approx -V_{DD}$.
- **Sweeping back**, the flip occurs at the mirror-image point, giving **hysteresis**. The thresholds depend on $\beta_p/\beta_n$ and $I_{SS}$ (about 1.7 V and 1.3 V in the example). There is no region of finite, well-defined gain around the centre.

**Common mistake.** Treating $M_3$/$M_4$ as diode-connected loads and drawing a smooth S-curve with gain $g_{m1}/g_{m3}$. The gates go to the *opposite* outputs, so the load conductance is $-g_{m3}$ and the feedback is positive.

**Common mistake.** Treating the load as a high-impedance current source with linear gain $g_{m1}(r_{O1}\parallel r_{O3})$. The $-g_{m3}$ term dominates and makes the balanced point unstable, so no such linear region exists.

**Common mistake.** Assuming that at $V_{in1} = 0$ the tail current flows through $M_2$ and $M_4$, making the right node high. $M_4$ is off because its gate is at the high left node, so the current collapses and the right node is low: $V_{out} \approx +V_{DD}$ at the start.
