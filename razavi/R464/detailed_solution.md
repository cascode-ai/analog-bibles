# Detailed solution - R464

**Approach.** With the input on the n-wells, the input common-mode level is limited by the **pn junctions** each well forms with the surrounding p regions, and by the body effect on the threshold. Find which junction forward-biases first as $V_{in,CM}$ falls, then what limits $V_{in,CM}$ from above.

### Step 1 — The junctions of each n-well

Each n-well (at $V_{in,CM}$) forms three pn junctions; $V_{D,on}$ denotes the forward voltage at which a junction conducts appreciably (a few hundred millivolts):

| Junction | p side (potential) | n side (potential) | Forward-biased when |
|---|---|---|---|
| p+ source / n-well | $V_{DD}$ | $V_{in,CM}$ | $V_{in,CM} < V_{DD} - V_{D,on}$ |
| p+ drain / n-well | $V_{D1}$ (below $V_{DD}$) | $V_{in,CM}$ | $V_{in,CM} < V_{D1} - V_{D,on}$ |
| p-substrate / n-well | 0 | $V_{in,CM}$ | $V_{in,CM} < -V_{D,on}$ |

While the well is above all its p neighbours, every junction is reverse-biased and the well draws essentially no current, as an input must.

### Step 2 — Lower limit: the source–well junction

The p+ source is at $V_{DD}$, the highest potential, so the source–well junction forward-biases first as $V_{in,CM}$ falls below $V_{DD}$. It would then draw an exponentially growing input current and turn on the parasitic vertical PNP (p+ source / n-well / p-substrate), risking latch-up. A forward bias up to roughly 0.3–0.5 V keeps the junction current negligible at room temperature, so

$$V_{in,CM} \gtrsim V_{DD} - V_{D,on} \approx V_{DD} - (0.3\ \text{to}\ 0.5)\ \mathrm{V}.$$

With no forward bias tolerated, the strict condition is $V_{in,CM} \ge V_{DD}$; the allowance $V_{D,on}$ is an engineering judgement set by the acceptable input current.

The drains sit well below $V_{DD}$ (leaving room for $M_3$, $M_4$), so the drain–well junction stays reverse-biased, and the substrate–well junction is reverse-biased for any positive $V_{in,CM}$.

### Step 3 — Upper limit

Raising the wells above $V_{DD}$ only increases the reverse bias, which raises the threshold:

$$|V_{TH}| = |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|}\right), \qquad V_{BS} = V_{in,CM} - V_{DD}.$$

With $V_{SG} = V_{DD} - V_{b1}$ fixed, the devices turn off when $|V_{TH}|$ reaches $V_{SG}$:

$$
\begin{aligned}
0.8 + 0.4\left(\sqrt{0.8 + V_{BS}} - \sqrt{0.8}\right) &= V_{SG}\\
\sqrt{0.8 + V_{BS}} &= \sqrt{0.8} + \frac{V_{SG} - 0.8}{0.4}\\
V_{in,CM,max} &= V_{DD} - 0.8 + \left[\sqrt{0.8} + \frac{V_{DD} - V_{b1} - 0.8}{0.4}\right]^2\quad\text{(volts)}.
\end{aligned}
$$

For example, with $V_{SG} = 1.0$ V (0.2 V of overdrive at $V_{BS} = 0$), $\sqrt{0.8 + V_{BS}} = 0.894 + 0.5 = 1.394$, so $V_{BS} = 1.94 - 0.8 = 1.14$ V: turn-off only about 1.1 V *above* $V_{DD}$. With inputs confined to the supply rails, the practical upper limit is

$$V_{in,CM} \le V_{DD}.$$

### Step 4 — The resulting range

$$V_{DD} - (0.3\ \text{to}\ 0.5)\ \mathrm{V} \;\lesssim\; V_{in,CM} \;\lesssim\; V_{DD},$$

a window a few hundred millivolts wide just below the positive supply. The body terminal avoids the $V_{GS}$ headroom penalty, but it is diode-isolated and must stay reverse-biased.

### Step 5 — A practical consequence: the output CM level

There is no tail current source, and across this range the threshold moves from $|V_{TH}| = 0.80$ V at $V_{BS} = 0$ to

$$|V_{TH}| = 0.8 + 0.4\left(\sqrt{0.8 - 0.4} - \sqrt{0.8}\right) = 0.8 + 0.4(0.632 - 0.894) = 0.695\ \mathrm{V}$$

at $V_{BS} = -0.4$ V. With $V_{SG} = 1.0$ V, for example, the current of $M_1$/$M_2$ rises by a factor $(0.305/0.2)^2 \approx 2.3$ across the range while $M_3$/$M_4$ sink fixed currents, so without common-mode feedback (adjusting $V_{b1}$ or $V_{b2}$) the output CM level would hit a rail for even a small change of $V_{in,CM}$.

### Result

The input common-mode level must stay close to the positive supply:

$$V_{DD} - (0.3\ \text{to}\ 0.5)\ \mathrm{V} \;\lesssim\; V_{in,CM} \;\lesssim\; V_{DD}.$$

- **Lower limit:** forward bias of the p+ source / n-well junction (source at $V_{DD}$). Strictly, with no forward bias allowed, $V_{in,CM} \ge V_{DD}$.
- **Upper limit:** the supply rail; the devices themselves would turn off (body effect raising $|V_{TH}|$ to $V_{DD} - V_{b1}$) only well above $V_{DD}$.

Common-mode feedback is required to hold the output CM level, because there is no tail current source.

**Common mistake.** Claiming a rail-to-rail or near-ground input range "because the gate is not the input". Taking the well more than a few hundred millivolts below the source forward-biases the source–well diode, drawing input current and risking latch-up.

**Common mistake.** Deriving the limits as for a gate-driven pair, e.g. $V_{in,CM} \le V_{DD} - |V_{GS}| - \ldots$; the binding constraints are the well's junctions and the body effect.

**Common mistake.** Considering only the substrate–well junction, which is safe for any positive input; the dangerous one is the source–well junction, with the source at $V_{DD}$.
