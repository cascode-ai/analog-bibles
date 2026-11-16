# Detailed solution - R192

**Approach.** The two inputs are tied together, so the excitation is purely common-mode, and a perfectly symmetric circuit has the same currents and node voltages in both halves. The differential output $V_{out} = V_X - V_Y$ is therefore zero throughout the sweep. KCL shows this; the common level of the outputs, which does move, is followed for reference.

### Step 1 — Both halves obey the same equations

Call the left output (drains of $M_1$, $M_3$, $M_5$) X, the right output Y and the common source node of $M_1$, $M_2$ P. Throughout the sweep $V_{in1} = V_{in2} = V_{in,CM}$.

$M_1$ and $M_2$ have the same gate ($V_{in,CM}$) and source (P) voltages and identical sizes, so whenever their drain voltages are equal they carry equal currents, $I_{D1} = I_{D2} = I_{D7}/2$. KCL at X gives $I_{D1} = I_{D5} + I_{D3}$ and at Y $I_{D2} = I_{D6} + I_{D4}$; since $M_5$, $M_6$ share the gate bias $V_{b1}$ and the source $V_{DD}$, and $M_3$, $M_4$ are identical diodes, the two right-hand sides are the same function of the node voltage. With $I_{D1} = I_{D2}$ the two KCL equations are identical, so

$$V_X = V_Y \quad\Longrightarrow\quad V_{out} = V_X - V_Y = 0 .$$

A common-mode input moves both halves in exactly the same way, so the difference stays zero: ideal common-mode rejection.

### Step 2 — The common output level (for reference)

Each output receives current from two PMOS devices in parallel, the current source ($M_5$, at most $I_P$) and the diode ($M_3$), so its voltage depends on how $I_{D1} = I_{D7}/2$ compares with $I_P$.

**(a) $I_{D1} < I_P$** (pair off, $V_{in,CM} < V_{THN} = 0.7$ V, or just turning on). $M_5$ alone can supply more than $M_1$ draws, and a diode-connected PMOS can only deliver current into X, so $M_3$ is off. The surplus from $M_5$ charges X upward until $M_5$ leaves saturation and its triode current falls to $I_{D1}$; with $I_{D1}$ small, $M_5$ needs only a small $V_{SD}$, so

$$V_X = V_Y \approx V_{DD} = 3\ \mathrm{V}.$$

This lasts as long as the tail current is below $2I_P$.

**(b) $I_{D1} > I_P$** (tail current above $2I_P$). $M_5$ is saturated and supplies $I_P$, and the diode supplies the rest, $I_{D3} = I_{D1} - I_P$:

$$
\begin{aligned}
I_{D1} - I_P &= \tfrac12\beta_p\left(V_{DD} - V_X - |V_{THP}|\right)^2\\
V_X = V_Y &= V_{DD} - |V_{THP}| - \sqrt{\frac{2(I_{D1} - I_P)}{\beta_p}}, \qquad \beta_p = \mu_pC_{ox}\left(\frac WL\right)_{3,4}.
\end{aligned}
$$

As the diode current rises from zero, the level drops quickly from near $V_{DD}$ to just below $V_{DD} - |V_{THP}| = 2.2$ V.

**(c) Tail saturated.** Once $M_7$ is saturated, $I_{D1} = I_{SS}/2$ and the level becomes constant:

$$V_X = V_Y = V_{DD} - |V_{THP}| - \sqrt{\frac{2(I_{SS}/2 - I_P)}{\beta_p}} .$$

*Example values:* $I_{SS} = 1$ mA, $I_P = 0.4$ mA, $\beta_p = (38.4\ \mu\mathrm{A/V^2})(50/0.5) = 3.84\ \mathrm{mA/V^2}$:

$$
\begin{aligned}
\sqrt{\frac{2(0.5 - 0.4)\ \mathrm{mA}}{3.84\ \mathrm{mA/V^2}}} &= \sqrt{0.0521\ \mathrm{V^2}} = 0.228\ \mathrm{V},\\
V_X = V_Y &= 3 - 0.8 - 0.228 = 1.97\ \mathrm{V}.
\end{aligned}
$$

Above about $V_{in,CM} = V_X + V_{THN} \approx 2.7$ V the input devices enter triode, but the saturated tail still forces $I_{SS}/2$ through each, so the level stays put (as long as $M_7$ remains saturated).

| $V_{in,CM}$ | Tail current | State of the loads | $V_X = V_Y$ | $V_{out}$ |
|---|---|---|---|---|
| below 0.7 V | 0 | diodes off, $M_5$/$M_6$ in triode with zero current | $V_{DD}$ | 0 |
| pair turning on | below $2I_P$ | diodes off | just below $V_{DD}$ | 0 |
| higher | between $2I_P$ and $I_{SS}$ | diodes on | drops to below 2.2 V | 0 |
| tail saturated | $I_{SS}$ | diodes carry $I_{SS}/2 - I_P$ | $V_{DD} - \lvert V_{THP}\rvert - \sqrt{2(I_{SS}/2 - I_P)/\beta_p}$ (1.97 V in the example) | 0 |

### Result

$$V_{out} = 0 \quad\text{for the whole sweep } 0 \le V_{in1} = V_{in2} \le 3\ \mathrm{V}.$$

Equal inputs applied to a symmetric circuit give identical voltages at the two outputs, so the sketch is a horizontal line on the axis. For reference, the common output level:

- is at $V_{DD}$ while the pair carries less than $2I_P$ (the PMOS current sources pull the outputs up and the diodes are off);
- drops below $V_{DD} - |V_{THP}|$ once the diodes conduct;
- settles at $V_{DD} - |V_{THP}| - \sqrt{2(I_{SS}/2 - I_P)/\beta_p}$ once the tail saturates.

**Common mistake.** Sketching one output (for example, its fall from $V_{DD}$ to about 1.97 V) and calling it $V_{out}$. That is the common-mode output level; the difference between the outputs is zero.

**Common mistake.** Predicting a nonzero $V_{out}$ because the diodes switch on or the tail current changes during the sweep. Every such event happens identically in both halves and cancels in $V_X - V_Y$.
