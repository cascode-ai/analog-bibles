# Detailed solution - R192

**Approach.** The two inputs are tied together, so the excitation is purely common-mode. In a perfectly symmetric circuit this produces the same currents and node voltages in both halves, so the differential output $V_{out} = V_X - V_Y$ is zero throughout the sweep. We prove it with KCL and then, for reference, follow the common level of the outputs, which does move.

### Step 1 — Reading the circuit and the sweep

Left half (the right half mirrors it):

- Node X, the left output, is the drain of the NMOS input device $M_1$.
- $M_3$: PMOS, diode-connected (gate tied to drain at X), source at $V_{DD}$.
- $M_5$: PMOS current source (gate at $V_{b1}$) in parallel with $M_3$. It supplies a current $I_P$ while saturated.
- $M_7$ is the NMOS tail, carrying $I_{SS}$ when saturated.
- On the right, $M_2$, $M_4$, $M_6$ form node Y. $V_{out} = V_X - V_Y$.

**The sweep.** $V_{in1} = V_{in2} = V_{in,CM}$ rises from 0 to 3 V. The differential input is zero throughout.

### Step 2 — Both halves obey the same equations

- $M_1$ and $M_2$ have the same gate voltage ($V_{in,CM}$), the same source (the common node P) and identical sizes. Whenever their drain voltages are equal, they carry equal currents: $I_{D1} = I_{D2} = I_{D7}/2$ by KCL at P.
- KCL at X: $I_{D1} = I_{D5} + I_{D3}$. KCL at Y: $I_{D2} = I_{D6} + I_{D4}$.
- $M_5$ and $M_6$ share the gate bias $V_{b1}$ and the source $V_{DD}$; $M_3$ and $M_4$ are identical diodes. So, for equal node voltages, the two right-hand sides are the same function of the node voltage.

With equal currents $I_{D1} = I_{D2}$, the two KCL equations are identical, so the voltage that satisfies one also satisfies the other:

$$V_X = V_Y \quad\Longrightarrow\quad V_{out} = V_X - V_Y = 0 .$$

*Intuition:* the differential output reports only the *difference* between the halves. A common-mode input moves both halves in exactly the same way, so the difference stays zero. That is ideal common-mode rejection.

### Step 3 — The common output level (for reference)

Each output node receives current from two PMOS devices in parallel: the current source ($M_5$, at most $I_P$) and the diode ($M_3$). The node voltage depends on how the input current $I_{D1} = I_{D7}/2$ compares with $I_P$.

**(a) $I_{D1} < I_P$** (pair off, $V_{in,CM} < V_{THN} = 0.7$ V, or just turning on). The current source alone can supply more than $M_1$ draws. A diode-connected PMOS can only *deliver* current into X, never absorb it, so $M_3$ is off. The surplus from $M_5$ charges X upward until $M_5$ leaves saturation and its triode current falls to $I_{D1}$. With $I_{D1}$ small, $M_5$ needs only a small $V_{SD}$, so

$$V_X = V_Y \approx V_{DD} = 3\ \mathrm{V}.$$

This lasts as long as the tail current is below $2I_P$.

**(b) $I_{D1} > I_P$** (tail current above $2I_P$). Now $M_5$ is saturated and supplies $I_P$, and the diode supplies the rest, $I_{D3} = I_{D1} - I_P$. For the diode-connected PMOS (always saturated):

$$
\begin{aligned}
I_{D1} - I_P &= \tfrac12\beta_p\left(V_{DD} - V_X - |V_{THP}|\right)^2\\
V_X = V_Y &= V_{DD} - |V_{THP}| - \sqrt{\frac{2(I_{D1} - I_P)}{\beta_p}}, \qquad \beta_p = \mu_pC_{ox}\left(\frac WL\right)_{3,4}.
\end{aligned}
$$

As the diode current rises from zero, the level drops quickly from near $V_{DD}$ to just below $V_{DD} - |V_{THP}| = 2.2$ V.

**(c) Tail saturated.** Once $V_{in,CM}$ is high enough that $M_7$ is saturated, $I_{D1} = I_{SS}/2$, and the level becomes constant:

$$V_X = V_Y = V_{DD} - |V_{THP}| - \sqrt{\frac{2(I_{SS}/2 - I_P)}{\beta_p}} .$$

*Example values:* $I_{SS} = 1$ mA, $I_P = 0.4$ mA, $\beta_p = (38.4\ \mu\mathrm{A/V^2})(50/0.5) = 3.84\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
\sqrt{\frac{2(0.5 - 0.4)\ \mathrm{mA}}{3.84\ \mathrm{mA/V^2}}} &= \sqrt{0.0521\ \mathrm{V^2}} = 0.228\ \mathrm{V},\\
V_X = V_Y &= 3 - 0.8 - 0.228 = 1.97\ \mathrm{V}.
\end{aligned}
$$

At very high $V_{in,CM}$ (above about $V_X + V_{THN} \approx 2.7$ V) the input devices enter triode. Their current is still forced to $I_{SS}/2$ by the saturated tail, so the level stays put (as long as $M_7$ remains saturated).

| $V_{in,CM}$ | Tail current | State of the loads | $V_X = V_Y$ | $V_{out}$ |
|---|---|---|---|---|
| below 0.7 V | 0 | diodes off, $M_5$/$M_6$ in triode with zero current | $V_{DD}$ | 0 |
| pair turning on | below $2I_P$ | diodes off | just below $V_{DD}$ | 0 |
| higher | between $2I_P$ and $I_{SS}$ | diodes on | drops to below 2.2 V | 0 |
| tail saturated | $I_{SS}$ | diodes carry $I_{SS}/2 - I_P$ | $V_{DD} - \lvert V_{THP}\rvert - \sqrt{2(I_{SS}/2 - I_P)/\beta_p}$ (1.97 V in the example) | 0 |

### Result

$$V_{out} = 0 \quad\text{for the whole sweep } 0 \le V_{in1} = V_{in2} \le 3\ \mathrm{V}.$$

Equal inputs applied to a symmetric circuit give identical voltages at the two outputs, so the sketch is a horizontal line on the axis. For reference, the common output level behaves as follows:

- It is at $V_{DD}$ while the pair carries less than $2I_P$, because the PMOS current sources pull the outputs up and the diodes are off.
- It then drops below $V_{DD} - |V_{THP}|$ once the diodes conduct.
- It settles at $V_{DD} - |V_{THP}| - \sqrt{2(I_{SS}/2 - I_P)/\beta_p}$ once the tail saturates.

**Common mistake.** Sketching the voltage of one output node (for example, its fall from $V_{DD}$ to about 1.97 V) and calling it $V_{out}$. That curve is the common-mode output level. The problem asks for the difference between the two outputs, which is zero.

**Common mistake.** Predicting a nonzero differential output because the diodes switch on or the tail current changes during the sweep. Every such event happens simultaneously and identically in both halves, so it cancels in $V_X - V_Y$.
