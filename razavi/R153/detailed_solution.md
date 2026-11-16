# Detailed solution - R153

**Approach.** Each output reaches $V_{DD}$ when its transistor carries no current, and may fall only until the input transistor leaves saturation, one threshold below its gate. Compute that lower limit, including the body effect, and take the difference.

### Step 1 — What limits each output

The output at $X$ is $V_X = V_{DD} - R_DI_{D1}$.

**Upper limit.** $I_{D1} \ge 0$, so $V_X \le V_{DD}$; a resistive load has no saturation condition of its own, so the top limit is the full supply, $V_{DD} = 3$ V, reached when the current is completely steered to the other side.

**Lower limit.** $M_1$ must stay saturated:

$$
\begin{aligned}
V_{DS1} &\ge V_{GS1} - V_{TH1}\\
V_X - V_P &\ge V_{in1} - V_P - V_{TH1}\\
V_X &\ge V_{in1} - V_{TH1}.
\end{aligned}
$$

$V_P$ cancels: the drain may go as low as **one threshold below the gate**. The input swing is small, so $V_{in1} \approx V_{in,CM} = 1.2$ V and

$$V_{out,min} = V_{in,CM} - V_{TH1},$$

where $V_{TH1}$ includes the body effect, because the source of $M_1$ sits at $V_P > 0$ while its bulk is grounded.

### Step 2 — Overdrive of the input devices

Each device carries $I_{SS}/2 = 0.25$ mA, with $W/L = 50/0.5 = 100$:

$$
\begin{aligned}
\mu_nC_{ox}\frac{W}{L} &= (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
V_{ov1} &= \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.25\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0373\ \mathrm{V^2}} = 0.193\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Tail-node voltage and threshold with body effect

$$V_P = V_{in,CM} - V_{TH1} - V_{ov1} = 1.2 - 0.193 - V_{TH1}, \qquad V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - 0.9487\right)\ \mathrm{V}.$$

The two equations are coupled, so iterate, starting with $V_P = 0.25$ V:

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{1.15} - 0.9487\right) = 0.7 + 0.45(1.0724 - 0.9487) = 0.7557\ \mathrm{V},\\
V_P &= 1.2 - 0.193 - 0.7557 = 0.2512\ \mathrm{V}.
\end{aligned}
$$

Repeat with $V_P = 0.2512$ V:

$$V_{TH1} = 0.7 + 0.45\left(\sqrt{1.1512} - 0.9487\right) = 0.7559\ \mathrm{V}, \qquad V_P = 0.2510\ \mathrm{V}.$$

So $V_P \approx 0.251$ V and $V_{TH1} \approx 0.756$ V: the body effect raises the threshold by about 56 mV.

### Step 4 — The output range

**Lower limit:**

$$V_{out,min} = V_{in,CM} - V_{TH1} = 1.2\ \mathrm{V} - 0.756\ \mathrm{V} = 0.444\ \mathrm{V}.$$

**Upper limit:** $V_{out,max} = V_{DD} = 3$ V.

**Single-ended swing** (each output):

$$V_{out,max} - V_{out,min} = 3\ \mathrm{V} - 0.444\ \mathrm{V} = 2.56\ \mathrm{V}\ \text{peak-to-peak}.$$

**Differential swing.** When $V_X$ is at 3 V, $V_Y$ is at 0.444 V, and vice versa, so $V_X - V_Y$ ranges from $-2.56$ V to $+2.56$ V:

$$(V_X - V_Y)_{pp} = 2\times 2.56\ \mathrm{V} = 5.11\ \mathrm{V}\ \text{peak-to-peak}.$$

This needs the output common-mode level in the middle of the allowed range,

$$V_{out,CM} = \frac{3 + 0.444}{2}\ \mathrm{V} = 1.72\ \mathrm{V},$$

i.e. a drop of $R_DI_{SS}/2 = 3 - 1.72 = 1.28$ V across each resistor, so $R_D \approx 5.1$ kΩ.

**Without body effect** ($V_{TH1} = 0.7$ V): $V_{out,min} = 0.5$ V, a single-ended swing of 2.5 V and a differential swing of 5.0 V. The body effect thus *increases* the allowed swing slightly (by about 2 %): a higher threshold lets the drain fall further below the gate. (The tail headroom, $V_P \approx 0.25$ V, limits the input common-mode range, not the output swing.)

### Result

Each output can swing from $V_{in,CM} - V_{TH1} \approx 0.44$ V up to $V_{DD} = 3$ V:

$$\text{single-ended: } 3 - 0.444 \approx 2.56\ \mathrm{V_{pp}}, \qquad \text{differential: } \approx 5.1\ \mathrm{V_{pp}},$$

centred on an output common-mode level of about 1.72 V ($V_{TH1} = 0.756$ V with body effect at $V_P \approx 0.25$ V). Without the body effect the figures are 0.5 V, 2.5 V and 5.0 V.

**Common mistake.** Taking the lower limit as $V_{in,CM} - V_{GS1} = V_P \approx 0.25$ V, or as the overdrive (0.19 V). Saturation allows the drain to fall to one *threshold* below the gate, $V_{in,CM} - V_{TH1}$.

**Common mistake.** Limiting the top of the swing to $V_{DD} - V_{TH}$ or to some overdrive below $V_{DD}$. With a resistive load the output simply reaches $V_{DD}$ when its transistor turns off.

**Common mistake.** Using $V_{TH0} = 0.7$ V for $M_1$, whose source is about 0.25 V above its grounded bulk. This puts the lower limit at 0.5 V instead of 0.444 V and underestimates the swing by 56 mV per output.
