# Detailed solution - R180

**Approach.** Collect the headroom limits first: the 0.4-V tail requirement sets the lowest input common-mode level and hence the lowest output voltage, and the PMOS devices set the highest. But the diode loads also fix the output common-mode level, and each diode stops conducting at $V_{DD} - |V_{THP}| = 2.2$ V. Since the two diodes share only 0.2 mA, a large-signal analysis of how the currents redistribute gives the true usable swing, far smaller than the headroom limits suggest.

### Step 1 — Currents and output common-mode level

All transistors have $W/L = 50/0.5 = 100$, so $\beta_n = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$ and $\beta_p = (38.4\ \mu\mathrm{A/V^2})(100) = 3.84\ \mathrm{mA/V^2}$.

Each input device carries $I_{SS}/2 = 0.5$ mA; $M_5$ supplies $0.8\times 0.5 = 0.4$ mA of it, so the diode $M_3$ carries $0.5 - 0.4 = 0.1$ mA (likewise on the right). The saturated diode sets its drain voltage from its current:

$$V_X = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_{D3}}{\beta_p}} .$$

At equilibrium:

$$V_{X,CM} = 3 - 0.8 - \sqrt{\frac{2(0.1\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = 2.2 - 0.228 = 1.972\ \mathrm{V},$$

only 0.228 V below 2.2 V, because the diodes carry little current.

### Step 2 — Headroom limits

**Lowest input common-mode level.** The tail needs $V_P \ge 0.4$ V, and $V_{GS1} = V_{TH1} + V_{ov1}$ with

$$V_{ov1} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V}, \qquad V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + 0.4} - \sqrt{0.9}\right) = 0.786\ \mathrm{V},$$

$$V_{in,CM,min} = 0.4 + 0.273 + 0.786 = 1.46\ \mathrm{V}.$$

**Lowest output voltage** (input devices saturated): $V_{out} \ge V_{in,CM} - V_{TH1} = 1.46 - 0.786 = 0.673$ V.

**Highest output voltage:**

- the diode $M_3$ conducts only while $V_{SG3} = V_{DD} - V_X > |V_{THP}|$, i.e. $V_X < 2.2$ V;
- $M_5$ stays saturated while $V_X \le V_{DD} - V_{ov5}$, with $V_{ov5} = \sqrt{2(0.4\ \mathrm{mA})/(3.84\ \mathrm{mA/V^2})} = 0.456$ V, i.e. $V_X \le 2.54$ V.

A headroom-only argument would let each output move from 0.673 V to 2.2 V (about 3 V peak-to-peak differential), but the diode loads dictate where the outputs sit.

### Step 3 — Large-signal redistribution of the currents

Steer $\Delta$ of current: $I_{D1} = 0.5\ \mathrm{mA} + \Delta$ and $I_{D2} = 0.5\ \mathrm{mA} - \Delta$. $M_5$ and $M_6$ still supply a fixed 0.4 mA each, so all of the change goes into the diodes:

$$I_{D3} = 0.1\ \mathrm{mA} + \Delta, \qquad I_{D4} = 0.1\ \mathrm{mA} - \Delta, \qquad I_{D3} + I_{D4} = 0.2\ \mathrm{mA},$$

$$V_X = 2.2\ \mathrm{V} - \sqrt{\frac{2(0.1\ \mathrm{mA} + \Delta)}{\beta_p}}, \qquad V_Y = 2.2\ \mathrm{V} - \sqrt{\frac{2(0.1\ \mathrm{mA} - \Delta)}{\beta_p}} .$$

| $\Delta$ (mA) | $I_{D3}$ (mA) | $I_{D4}$ (mA) | $V_X$ (V) | $V_Y$ (V) | $V_X - V_Y$ (V) |
|---|---|---|---|---|---|
| 0 | 0.100 | 0.100 | 1.972 | 1.972 | 0 |
| 0.025 | 0.125 | 0.075 | 1.945 | 2.002 | −0.058 |
| 0.050 | 0.150 | 0.050 | 1.921 | 2.039 | −0.118 |
| 0.075 | 0.175 | 0.025 | 1.898 | 2.086 | −0.188 |
| 0.100 | 0.200 | 0 | 1.877 | 2.200 | −0.323 |

At $\Delta = 0.1$ mA the diode $M_4$ turns off:

$$V_X = 2.2 - \sqrt{\frac{2(0.2\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = 2.2 - 0.323 = 1.877\ \mathrm{V}, \qquad V_Y = 2.2\ \mathrm{V}, \qquad V_X - V_Y = -0.323\ \mathrm{V}.$$

The outputs move *asymmetrically*: the rising output covers 0.228 V (to 2.2 V), the falling one only 0.095 V, because the diode's square-root characteristic changes slowly at the larger current.

### Step 4 — What happens beyond the diode cut-off

For $\Delta > 0.1$ mA, $M_4$ is off, while $M_6$ still pushes 0.4 mA into $Y$ and $M_2$ removes only $0.5\ \mathrm{mA} - \Delta < 0.4$ mA. The excess charges $Y$ upward until $M_6$ leaves saturation (above 2.54 V) and its current falls to match $I_{D2}$. So $V_Y$ jumps from 2.2 V to beyond 2.54 V: an almost vertical step in the transfer curve, which cannot be counted as useful swing.

### Step 5 — Maximum differential swing

By symmetry, steering the other way gives $V_X - V_Y = +0.323$ V when $M_3$ turns off, so

$$-0.32\ \mathrm{V} \le V_X - V_Y \le +0.32\ \mathrm{V}\quad\Longrightarrow\quad \approx 0.65\ \mathrm{V}\ \text{peak-to-peak}.$$

Over this range the outputs stay between 1.877 V and 2.2 V, far above the 0.673-V lower limit: **the diode cut-off, not the 0.4-V tail requirement, is the binding constraint.**

**Why not ±0.228 V per output?** A linearized estimate lets each output swing ±0.228 V around 1.972 V, about 0.91 V peak-to-peak differential. It is not reachable: for the falling output to reach $1.972 - 0.228 = 1.744$ V, its diode would need $\tfrac12\beta_p(2.2 - 1.744)^2 = 0.4$ mA, but the two diodes share only 0.2 mA.

### Result

The maximum differential output swing is only about **0.65 V peak-to-peak (±0.32 V)**.

- The diode-connected loads carry only 0.1 mA each, so they place the output common-mode level at 1.97 V, just 0.23 V below their cut-off point $V_{DD} - |V_{THP}| = 2.2$ V.
- Steering current between the sides moves the diode currents between 0 and 0.2 mA. When one diode turns off ($\Delta = 0.1$ mA), $V_X - V_Y = 1.877 - 2.2 = -0.32$ V. Beyond this the off-side output jumps toward the $M_5$/$M_6$ compliance limit and is no longer linearly controlled.
- The headroom bounds (outputs down to $V_{in,CM} - V_{TH1} = 0.673$ V with $V_{in,CM} = 1.46$ V; $M_5$ compliance at 2.54 V) are never reached.

**Common mistake.** Answering with the headroom range alone, from 0.673 V up to 2.2 V (≈ 3 V peak-to-peak differential), without checking where the diode loads put the outputs.

**Common mistake.** Taking the $M_5$/$M_6$ compliance limit ($V_{DD} - V_{ov5} \approx 2.54$ V), or even $V_{DD}$, as the upper limit. Above 2.2 V the diode is off and the output jumps instead of following the input.

**Common mistake.** Using the linearized estimate ±0.228 V per output (≈ 0.9 V peak-to-peak). The two diodes share only 0.2 mA, so the falling output can drop only 0.095 V while the rising one rises 0.228 V.
