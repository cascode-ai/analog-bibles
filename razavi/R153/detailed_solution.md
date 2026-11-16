# Detailed solution - R153

**Approach.** Each output of a resistively loaded differential pair moves between two limits. At the top, the output reaches $V_{DD}$ when its transistor carries no current. At the bottom, the output may fall only as long as the input transistor stays in saturation, i.e. until its drain is one threshold voltage below its gate. We compute that lower limit, including the body effect, and take the difference.

### Step 1 — What limits each output

Reading the figure: $M_1$ and $M_2$ have their sources at the tail node $P$, $M_3$ supplies $I_{SS} = 0.5$ mA, and the load resistors $R_D$ connect the drains $X$ and $Y$ to $V_{DD} = 3$ V. The output at $X$ is

$$V_X = V_{DD} - R_DI_{D1}.$$

**Upper limit.** $I_{D1}$ cannot be negative, so $V_X \le V_{DD}$. The output reaches $V_{DD}$ when the current is completely steered to the other side. A resistive load has no saturation condition of its own, so the top limit is the full supply, $V_{DD} = 3$ V.

**Lower limit.** For the stage to act as a linear amplifier, $M_1$ must stay in saturation:

$$
\begin{aligned}
V_{DS1} &\ge V_{GS1} - V_{TH1}\\
V_X - V_P &\ge V_{in1} - V_P - V_{TH1}\\
V_X &\ge V_{in1} - V_{TH1}.
\end{aligned}
$$

$V_P$ cancels: the drain may go as low as **one threshold below the gate**. Because the gain is high, the input swing is much smaller than the output swing, so $V_{in1} \approx V_{in,CM} = 1.2$ V:

$$V_{out,min} = V_{in,CM} - V_{TH1}.$$

$V_{TH1}$ includes the body effect, because the source of $M_1$ sits at $V_P > 0$ while its bulk is grounded. So we need $V_P$.

### Step 2 — Overdrive of the input devices

At equilibrium each device carries $I_{SS}/2 = 0.25$ mA. From the square law $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, with $V_{ov} = V_{GS} - V_{TH}$ the overdrive voltage and $W/L = 50/0.5 = 100$:

$$
\begin{aligned}
\mu_nC_{ox}\frac{W}{L} &= (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
V_{ov1} &= \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.25\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0373\ \mathrm{V^2}} = 0.193\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Tail-node voltage and threshold with body effect

The gate–source voltage of $M_1$ is $V_{GS1} = V_{TH1} + V_{ov1}$, so the tail node sits at

$$V_P = V_{in,CM} - V_{TH1} - V_{ov1} = 1.2 - 0.193 - V_{TH1}.$$

The threshold depends on the source–bulk voltage $V_{SB1} = V_P$:

$$V_{TH1} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_P} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - 0.9487\right)\ \mathrm{V}.$$

The two equations are coupled, so iterate. Start with $V_P = 0.25$ V:

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{1.15} - 0.9487\right) = 0.7 + 0.45(1.0724 - 0.9487) = 0.7557\ \mathrm{V},\\
V_P &= 1.2 - 0.193 - 0.7557 = 0.2512\ \mathrm{V}.
\end{aligned}
$$

Repeat with $V_P = 0.2512$ V:

$$V_{TH1} = 0.7 + 0.45\left(\sqrt{1.1512} - 0.9487\right) = 0.7559\ \mathrm{V}, \qquad V_P = 0.2510\ \mathrm{V}.$$

The values have converged: $V_P \approx 0.251$ V and $V_{TH1} \approx 0.756$ V. The body effect raises the threshold by about 56 mV.

### Step 4 — The output range

**Lower limit:**

$$V_{out,min} = V_{in,CM} - V_{TH1} = 1.2\ \mathrm{V} - 0.756\ \mathrm{V} = 0.444\ \mathrm{V}.$$

**Upper limit:** $V_{out,max} = V_{DD} = 3$ V.

**Single-ended swing** (each output):

$$V_{out,max} - V_{out,min} = 3\ \mathrm{V} - 0.444\ \mathrm{V} = 2.56\ \mathrm{V}\ \text{peak-to-peak}.$$

**Differential swing.** The two outputs move in opposite directions. When $V_X$ is at 3 V, $V_Y$ is at 0.444 V, and vice versa. So $V_X - V_Y$ ranges from $-2.56$ V to $+2.56$ V:

$$(V_X - V_Y)_{pp} = 2\times 2.56\ \mathrm{V} = 5.11\ \mathrm{V}\ \text{peak-to-peak}.$$

To use this full range symmetrically, the output common-mode level must sit in the middle of the allowed range:

$$V_{out,CM} = \frac{3 + 0.444}{2}\ \mathrm{V} = 1.72\ \mathrm{V}.$$

Equivalently, the drop across each resistor at equilibrium is $R_DI_{SS}/2 = 3 - 1.72 = 1.28$ V, which requires $R_D \approx 5.1$ kΩ.

**Without body effect** ($V_{TH1} = 0.7$ V): $V_{out,min} = 0.5$ V, a single-ended swing of 2.5 V and a differential swing of 5.0 V. The body effect therefore *increases* the allowed swing slightly (by about 2 %): a higher threshold lets the drain fall further below the gate before the transistor leaves saturation.

(The tail transistor does not enter this calculation. Its headroom, $V_P \approx 0.25$ V, limits the input common-mode range, not the output swing.)

### Result

Each output can swing from $V_{in,CM} - V_{TH1} \approx 0.44$ V up to $V_{DD} = 3$ V:

$$\text{single-ended: } 3 - 0.444 \approx 2.56\ \mathrm{V_{pp}}, \qquad \text{differential: } \approx 5.1\ \mathrm{V_{pp}},$$

centred on an output common-mode level of about 1.72 V ($V_{TH1} = 0.756$ V with body effect at $V_P \approx 0.25$ V). Without the body effect the figures are 0.5 V, 2.5 V and 5.0 V.

**Common mistake.** Taking the lower limit as $V_{in,CM} - V_{GS1} = V_P \approx 0.25$ V, or as the overdrive (0.19 V). The saturation condition $V_{DS} \ge V_{GS} - V_{TH}$ allows the drain to fall to one *threshold* below the gate, $V_{in,CM} - V_{TH1}$, not to the source voltage.

**Common mistake.** Limiting the top of the swing to $V_{DD} - V_{TH}$ or to some overdrive below $V_{DD}$. With a resistive load nothing has to stay saturated at the top: the output simply reaches $V_{DD}$ when its transistor turns off.

**Common mistake.** Using $V_{TH0} = 0.7$ V for $M_1$. Its source is at $V_P \approx 0.25$ V above its grounded bulk, which raises its threshold to about 0.756 V. Ignoring this puts the lower limit at 0.5 V instead of 0.444 V and underestimates the swing by 56 mV per output.
