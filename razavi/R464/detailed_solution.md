# Detailed solution - R464

**Approach.** In a bulk-driven pair the input is connected to the n-wells, so the input common-mode level is limited by the **pn junctions** that each n-well forms with the surrounding p-type regions, and by how the body effect moves the threshold voltage. We list the junctions, find which one forward-biases first as $V_{in,CM}$ falls, and then see what limits $V_{in,CM}$ from above.

### Step 1 — The structure and its junctions

From the figure: $M_1$ and $M_2$ are PMOS devices with their sources at $V_{DD}$ and their gates at the fixed bias $V_{b1}$. Their n-wells are driven by $V_{in}$. $M_3$ and $M_4$ are NMOS current sources. The p-type substrate is grounded.

Each n-well (at potential $V_{in,CM}$) forms three pn junctions:

| Junction | p side (potential) | n side (potential) | Forward-biased when |
|---|---|---|---|
| p+ source / n-well | $V_{DD}$ | $V_{in,CM}$ | $V_{in,CM} < V_{DD} - V_{D,on}$ |
| p+ drain / n-well | $V_{D1}$ (below $V_{DD}$) | $V_{in,CM}$ | $V_{in,CM} < V_{D1} - V_{D,on}$ |
| p-substrate / n-well | 0 | $V_{in,CM}$ | $V_{in,CM} < -V_{D,on}$ |

Here $V_{D,on}$ is the forward voltage at which a junction starts to conduct appreciably (a few hundred millivolts). As long as an n-well is *higher* than all its p neighbours, every junction is reverse-biased and the well draws essentially no current, which is what an input must do.

### Step 2 — Lower limit: the source–well junction

The p+ source is at $V_{DD}$, the highest potential in the circuit. So the source–well junction is the first to forward-bias as $V_{in,CM}$ falls below $V_{DD}$. A forward-biased junction would:

- draw a large, exponentially growing current from the input source;
- turn on the parasitic vertical PNP transistor (p+ source / n-well / p-substrate), injecting current into the substrate and risking latch-up.

A small forward bias, up to roughly 0.3–0.5 V, leaves the junction current negligible at room temperature. Hence

$$V_{in,CM} \gtrsim V_{DD} - V_{D,on} \approx V_{DD} - (0.3\ \text{to}\ 0.5)\ \mathrm{V}.$$

If no forward bias at all is tolerated, the strict condition is $V_{in,CM} \ge V_{DD}$. The size of the allowance $V_{D,on}$ is an engineering judgement that depends on how much input current can be accepted.

The other two junctions are safe in this range. The drains sit well below $V_{DD}$ (they must leave room for $M_3$, $M_4$), so the drain–well junction is reverse-biased; and the substrate–well junction is reverse-biased for any positive $V_{in,CM}$.

### Step 3 — Upper limit

Raising the wells *above* $V_{DD}$ only reverse-biases the source–well junction more. Through the body effect this increases the threshold magnitude:

$$|V_{TH}| = |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|}\right), \qquad V_{BS} = V_{in,CM} - V_{DD},$$

with $\gamma = 0.4\ \mathrm{V^{1/2}}$, $2|\phi_F| = 0.8$ V and $V_{BS}$ the well-to-source voltage. The source-gate voltage $V_{SG} = V_{DD} - V_{b1}$ is fixed, so the devices turn off when $|V_{TH}|$ reaches $V_{SG}$:

$$
\begin{aligned}
0.8 + 0.4\left(\sqrt{0.8 + V_{BS}} - \sqrt{0.8}\right) &= V_{SG}\\
\sqrt{0.8 + V_{BS}} &= \sqrt{0.8} + \frac{V_{SG} - 0.8}{0.4}\\
V_{in,CM,max} &= V_{DD} - 0.8 + \left[\sqrt{0.8} + \frac{V_{DD} - V_{b1} - 0.8}{0.4}\right]^2\quad\text{(volts)}.
\end{aligned}
$$

For example, with $V_{SG} = 1.0$ V (0.2 V of overdrive at $V_{BS} = 0$): $\sqrt{0.8 + V_{BS}} = 0.894 + 0.5 = 1.394$, so $V_{BS} = 1.94 - 0.8 = 1.14$ V. The devices would turn off only about 1.1 V *above* $V_{DD}$. With inputs confined between the supply rails, the practical upper limit is therefore simply

$$V_{in,CM} \le V_{DD}.$$

### Step 4 — The resulting range

$$V_{DD} - (0.3\ \text{to}\ 0.5)\ \mathrm{V} \;\lesssim\; V_{in,CM} \;\lesssim\; V_{DD}.$$

This is a narrow window, a few hundred millivolts wide, just below the positive supply. That is the opposite of what one might expect from an input that "does not need a gate-source voltage". The body terminal avoids the $V_{GS}$ headroom penalty, but it is a diode-isolated terminal and must stay reverse-biased.

### Step 5 — A practical consequence: the output CM level

The circuit has no tail current source. Across the input range the threshold changes noticeably: from $|V_{TH}| = 0.80$ V at $V_{BS} = 0$ to

$$|V_{TH}| = 0.8 + 0.4\left(\sqrt{0.8 - 0.4} - \sqrt{0.8}\right) = 0.8 + 0.4(0.632 - 0.894) = 0.695\ \mathrm{V}$$

at $V_{BS} = -0.4$ V. With $V_{SG} = 1.0$ V, for example, the drain current of $M_1$/$M_2$ would rise by a factor $(0.305/0.2)^2 \approx 2.3$ across the range, while $M_3$/$M_4$ still sink their fixed currents. Without common-mode feedback (adjusting $V_{b1}$ or $V_{b2}$) the output CM level would run into a rail for even a small change of $V_{in,CM}$.

### Result

The input common-mode level must stay close to the positive supply:

$$V_{DD} - (0.3\ \text{to}\ 0.5)\ \mathrm{V} \;\lesssim\; V_{in,CM} \;\lesssim\; V_{DD}.$$

- **Lower limit:** forward bias of the p+ source / n-well junction (source at $V_{DD}$). Strictly, with no forward bias allowed, $V_{in,CM} \ge V_{DD}$.
- **Upper limit:** the supply rail; the devices themselves would turn off (body effect raising $|V_{TH}|$ to $V_{DD} - V_{b1}$) only well above $V_{DD}$.

Common-mode feedback is required to hold the output CM level, because there is no tail current source.

**Common mistake.** Claiming a rail-to-rail or near-ground input range "because the gate is not the input". Taking the n-well more than a few hundred millivolts below the source at $V_{DD}$ forward-biases the source–well diode, which draws input current and can trigger latch-up.

**Common mistake.** Deriving the limits as for a gate-driven pair, e.g. $V_{in,CM} \le V_{DD} - |V_{GS}| - \ldots$. The input is not a gate: the binding constraints are the well's junctions and the body effect, not gate-source headroom.

**Common mistake.** Considering only the substrate–well junction (well to ground). That junction is safe for any positive input; the dangerous one is the source–well junction, because the source sits at the highest potential, $V_{DD}$.
