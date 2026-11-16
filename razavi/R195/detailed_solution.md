# Detailed solution - R195

**Approach.** The load is a **cross-coupled** PMOS pair: the gate of $M_3$ is driven by the *right* output and the gate of $M_4$ by the *left* output. First we show with a small-signal analysis that this load has a negative differential resistance, which makes the balanced point unstable. The circuit is therefore a latch: it has two stable states, and which one it sits in depends on its history. Then we follow the large-signal state through the sweep, which reveals an abrupt regenerative flip and hysteresis. Numbers come from an example sizing, since none is given.

### Step 1 — Reading the circuit

From the figure:

- $M_1$, $M_2$: NMOS input pair, sources at node P, tail transistor $M_5$ (gate at $V_b$) carrying up to $I_{SS}$.
- X is the left output (drain of $M_1$ and $M_3$); Y is the right output (drain of $M_2$ and $M_4$). $V_{out} = V_X - V_Y$.
- $M_3$, $M_4$: PMOS with sources at $V_{DD}$. The wires cross: **the gate of $M_3$ is at Y and the gate of $M_4$ is at X.**
- The sweep: $V_{in2} = 3\ \mathrm{V} - V_{in1}$, so the input common mode is 1.5 V and $\Delta V_{in} = 2V_{in1} - 3$ V.

### Step 2 — Small-signal view at balance: a negative-resistance load

Suppose all devices are saturated at the balanced point ($V_{in1} = V_{in2}$, $V_X = V_Y$). For a differential perturbation, $v_Y = -v_X$ and P is a virtual ground.

**Current that $M_3$ injects into X.** The source of $M_3$ is at AC ground and its gate is at Y. Its drain current (source to drain, into X) changes by

$$i_3 = g_{m3}v_{sg3} = g_{m3}(0 - v_Y) = g_{m3}v_X .$$

So when X rises, $M_3$ pushes *more* current into X, which makes X rise further. To node X, $M_3$ looks like a **negative conductance** $-g_{m3}$, in parallel with its output resistance $r_{O3}$.

**Half-circuit KCL at X.** The other elements are $M_1$ (a current $g_{m1}v_{in}/2$ out of X, plus $r_{O1}$) and $r_{O3}$:

$$
\begin{aligned}
g_{m1}\frac{\Delta v_{in}}{2} + v_X\left(\frac{1}{r_{O1}} + \frac{1}{r_{O3}}\right) - g_{m3}v_X &= 0\\
v_X &= -\frac{g_{m1}\,\Delta v_{in}/2}{\dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} - g_{m3}} .
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

For any practical sizing $g_{m3} \gg 1/r_{O1} + 1/r_{O3}$, because $g_mr_O$ is typically 10–100. The net conductance at X is then **negative**. With the node capacitance $C$, a perturbation obeys $C\,dv_X/dt = (g_{m3} - 1/r_{O1} - 1/r_{O3})v_X$, so it **grows exponentially**. Equivalently, the loop $X \to M_4 \to Y \to M_3 \to X$ has gain $[g_{m3}(r_{O1}\parallel r_{O3})]^2 > 1$, i.e. positive feedback stronger than unity.

**Conclusion.** The balanced point is unstable, and there is no region of finite, well-defined gain. The circuit always settles in one of two states, "X high / Y low" or "X low / Y high". It is a **latch**.

### Step 3 — Start of the sweep ($V_{in1} = 0$): the "+" state

With $V_{in1} = 0$ and $V_{in2} = 3$ V:

- $M_1$: $V_{GS1} = 0 - V_P \le 0$, so it is **off** and $I_{D1} = 0$.
- Node X: nothing draws current from it. $M_3$ (whose gate is at the low node Y) is on, so its channel pulls X up until $V_{SD3} = 0$: $V_X = V_{DD} = 3$ V.
- $M_4$: its gate is at $V_X = V_{DD}$, so $V_{SG4} = 0$ and it is **off**.
- Node Y: $M_2$ (gate at 3 V) is on, but nothing supplies current to Y. $M_2$ therefore pulls Y down to P and carries zero current. With zero tail current, $M_5$ pulls P to ground: $V_Y = V_P \approx 0$.

**Consistency check.** $M_3$ has $V_{SG3} = 3 - 0 = 3\ \mathrm{V} > 0.8$ V (on, zero current, $V_{SD3} = 0$) ✓. $M_4$ has $V_{SG4} = 0$ (off) ✓. $M_1$ is off ✓. So

$$V_{out} = V_X - V_Y \approx 3 - 0 = +V_{DD}.$$

The tail current has **collapsed**: $M_5$ cannot force its current through the right branch, because $M_4$ is off.

### Step 4 — $V_{in1}$ rises: the "+" state droops but persists past balance

For a concrete example, take $\beta_n = \mu_nC_{ox}(W/L)_{1,2} = 2\ \mathrm{mA/V^2}$, $\beta_p = \mu_pC_{ox}(W/L)_{3,4} = 0.2\ \mathrm{mA/V^2}$, and a tail with $V_b = 1$ V and $\mu_nC_{ox}(W/L)_5 = 4.44\ \mathrm{mA/V^2}$, giving $I_{SS} = \tfrac12(4.44\ \mathrm{mA/V^2})(0.3\ \mathrm{V})^2 = 200\ \mu$A. We use $\lambda = 0$ for the large-signal numbers.

Once $V_{in1} > V_{THN} + V_P$, $M_1$ conducts. Its current flows through $M_3$, which is still strongly on because its gate sits at the low node Y. $M_4$ stays off, so $I_{D2} = 0$, $M_2$ carries no current, and $V_Y = V_P$. All the tail current goes through $M_1$ and $M_3$.

**At $V_{in1} = 1.0$ V.** KCL at P ($M_5$ in triode) together with the square law of $M_1$:

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

**At $V_{in1} = 1.5$ V (balanced inputs).** If $M_1$ carries all of $I_{SS}$, then $V_P = 1.5 - 0.7 - \sqrt{2(200\ \mu\mathrm{A})/(2\ \mathrm{mA/V^2})} = 0.8 - 0.447 = 0.353$ V. That is above $V_b - V_{THN} = 0.3$ V, so the tail is saturated, consistent with this assumption. Then:

$$
\begin{aligned}
V_{SG3} - |V_{THP}| &= (3 - 0.353) - 0.8 = 1.847\ \mathrm{V},\\
200\ \mu\mathrm{A} &= (0.2\ \mathrm{mA/V^2})\left[1.847V_{SD3} - \tfrac12V_{SD3}^2\right]\ \Rightarrow\ V_{SD3} = 1.847 - \sqrt{1.847^2 - 2} = 0.659\ \mathrm{V},\\
V_X &= 2.341\ \mathrm{V}, \qquad V_Y = V_P = 0.353\ \mathrm{V}, \qquad V_{out} = +1.99\ \mathrm{V}.
\end{aligned}
$$

Check that $M_4$ is still off: $V_{SG4} = 3 - 2.341 = 0.659\ \mathrm{V} < 0.8$ V ✓. So at $V_{in1} = V_{in2}$ the circuit is **still firmly in the "+" state**. The positive feedback (low Y keeps $M_3$ strong, high X keeps $M_4$ off) holds the state even though the inputs are balanced. This is the essence of **hysteresis**.

### Step 5 — The regenerative flip

As $V_{in1}$ rises further, $V_P = V_{in1} - 1.147$ V rises, and Y (which equals $V_P$) rises with it. $M_3$'s gate drive $V_{SG3} = V_{DD} - V_Y$ shrinks, so to keep carrying $I_{SS}$, $M_3$ needs a larger $V_{SD3}$, and **X falls**.

When X falls below $V_{DD} - |V_{THP}| = 2.2$ V, $M_4$ turns on and starts feeding Y. Y rises above $V_P$, which weakens $M_3$ further, so X falls further and $M_4$ turns on harder. This closes the positive-feedback loop of Step 2. As $M_4$ turns on, the loop gain quickly exceeds one, and the circuit **flips abruptly** to the opposite state, "X low / Y high".

**Onset in the example.** X reaches 2.2 V when $M_3$, at $V_{SD3} = 0.8$ V, can just carry $I_{SS}$:

$$
\begin{aligned}
200\ \mu\mathrm{A} &= (0.2\ \mathrm{mA/V^2})\left[(V_{SG3} - 0.8)(0.8) - \tfrac12(0.8)^2\right]\\
1 &= 0.8(V_{SG3} - 0.8) - 0.32\ \Rightarrow\ V_{SG3} = 2.45\ \mathrm{V},\\
V_Y = V_P &= 3 - 2.45 = 0.55\ \mathrm{V},\\
V_{in1} &= V_P + V_{GS1} = 0.55 + 0.7 + 0.447 = 1.70\ \mathrm{V}.
\end{aligned}
$$

So the "+" branch ends near $V_{in1} \approx 1.7$ V, at $V_{out} \approx 2.2 - 0.55 = +1.65$ V. At this point $M_2$ is also barely on ($V_{GS2} = 1.30 - 0.55 = 0.75$ V), so it can hardly sink the current that $M_4$ starts delivering into Y, and the flip follows at once. (A full numerical solution with $\lambda = 0.05\ \mathrm{V^{-1}}$ puts the jump at $V_{in1} \approx 1.72$ V.)

**After the flip** the circuit is in the mirror-image state. $M_2$ carries the current through $M_4$, X sits at $V_P$, and $V_{out}$ is the negative of the "+" branch value at the mirrored input $3\ \mathrm{V} - V_{in1}$. At $V_{in1} = 1.7$ V this is $-V_{out}(1.3\ \mathrm{V})$. Solving at 1.3 V exactly as in Step 4 gives $V_P = 0.186$ V, $I_{D1} = 171\ \mu$A, $V_X = 2.52$ V and $V_{out} = +2.33$ V. So the output jumps from about $+1.65$ V to about $-2.33$ V. In the new state $M_3$ is off (its gate is at the high node Y), so $M_1$ carries no current and X sits at $V_P$; all the tail current flows through $M_2$ and $M_4$. As $V_{in1}$ rises further, $V_{in2}$ falls and $M_2$ conducts less. Once $M_2$ turns off (near $V_{in1} \approx 2.3$ V, the mirror of 0.7 V) the current collapses and $V_{out}$ reaches $-V_{DD}$.

### Step 6 — Sweeping back: hysteresis

Starting from $V_{in1} = 3$ V in the "−" state and decreasing $V_{in1}$, the same sequence happens mirrored. The circuit stays in the "−" state through $V_{in1} = 1.5$ V and flips back to "+" only near $V_{in1} \approx 3 - 1.7 = 1.3$ V. The result is a **hysteresis loop**:

| $V_{in1}$ (V) | Up-sweep $V_{out}$ (V) | Down-sweep $V_{out}$ (V) |
|---|---|---|
| 0 to 0.7 | +3.0 | +3.0 |
| 1.0 | +2.8 | +2.8 |
| 1.3 | +2.33 | +2.33 after the jump (−1.65 just before it) |
| 1.5 | +1.99 | −1.99 |
| 1.7 | +1.65 just before the jump, then −2.33 | −2.33 |
| 2.0 | −2.8 | −2.8 |
| 2.3 to 3.0 | −3.0 | −3.0 |

**How the thresholds depend on sizing.** The switching points depend on $\beta_p/\beta_n$ and on $I_{SS}$:

- **Weak PMOS devices** are overpowered by $M_1$ early, so the hysteresis window is narrow (only a few tens of millivolts around 1.5 V when $\beta_p$ is very small).
- **Strong PMOS devices** keep X high longer, so the window widens. With very strong loads the flip may happen only after the input device on the low side ($M_2$ here) turns off, leaving Y with nothing but leakage to hold it down.

In every case the flip is abrupt, and it does **not** occur at $V_{in1} = V_{in2}$.

### Result

The cross-coupled PMOS pair is a positive-feedback (negative-resistance) load. Its differential conductance at balance, $1/r_{O1} + 1/r_{O3} - g_{m3}$, is negative, so the circuit behaves as a **latch**, not a linear amplifier.

- **Low $V_{in1}$.** $M_1$ is off. $M_3$, whose gate sits at the low right node, pulls the left output to $V_{DD}$ and keeps $M_4$ off. The right node is pulled down by $M_2$ toward $V_P$, and the current collapses. $V_{out} \approx +V_{DD}$.
- **As $V_{in1}$ rises** past $V_{THN}$, $M_1$ draws current through $M_3$. The left node droops and the right node follows $V_P$ upward, but the feedback **holds the "+" state past $V_{in1} = V_{in2}$**.
- **When $M_1$ overpowers $M_3$** and X drops below $V_{DD} - |V_{THP}|$, $M_4$ turns on and the state **flips regeneratively** to X low / Y high, with $V_{out}$ then heading to $\approx -V_{DD}$.
- **Sweeping back**, the flip occurs at the mirror-image point, giving **hysteresis**. The thresholds depend on $\beta_p/\beta_n$ and $I_{SS}$ (about 1.7 V and 1.3 V in the example). There is no region of finite, well-defined gain around the centre.

**Common mistake.** Treating $M_3$/$M_4$ as diode-connected loads and drawing a smooth S-curve with gain $g_{m1}/g_{m3}$. The gates are cross-coupled to the *opposite* outputs, so the load conductance is $-g_{m3}$, not $+g_{m3}$, and the feedback is positive.

**Common mistake.** Treating the load as a high-impedance current source and quoting a linear gain $g_{m1}(r_{O1}\parallel r_{O3})$. The term $-g_{m3}$ dominates the node conductance and makes the balanced point unstable, so no such linear region exists.

**Common mistake.** Getting the polarity of the starting state backwards, for example by assuming that at $V_{in1} = 0$ the tail current must flow through $M_2$ and $M_4$, which would make the right node high. In fact $M_4$ is off because its gate is at the high left node, so the right branch cannot conduct, the current collapses, and the right node is low: $V_{out} \approx +V_{DD}$ at the start.
