# Detailed solution - R138

**Approach.** The level shift equals the follower's gate–source voltage, $V_{GS1} = V_{in} - V_{out} = 1$ V. With the body effect, $M_1$'s threshold at the design point ($V_{out} = 1.5$ V) leaves very little overdrive, so $M_1$ must be very wide; $M_2$, with its source at ground, is sized as without body effect. For the minimum input, find the output level at which $M_2$ leaves saturation and recompute $M_1$'s threshold *at that level*.

### Step 1 — The design point

$V_{in} = 2.5$ V and $V_{in} - V_{out} = 1$ V give

$$V_{out} = 1.5\ \mathrm{V},\qquad V_{GS1} = 1\ \mathrm{V},\qquad V_{GS2} = V_{GS1} + 0.5\ \mathrm{V} = 1.5\ \mathrm{V} = V_b.$$

### Step 2 — Threshold of $M_1$ with the body effect

$V_{SB1} = V_{out} = 1.5$ V:

$$
\begin{aligned}
V_{TH1} &= V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB1}} - \sqrt{2|\phi_F|}\right),\\
\sqrt{0.9 + 1.5} &= \sqrt{2.4} = 1.5492\ \mathrm{V^{1/2}},\qquad \sqrt{0.9} = 0.9487\ \mathrm{V^{1/2}},\\
V_{TH1} &= 0.7 + 0.45\,(1.5492 - 0.9487) = 0.7 + 0.45\times0.6005 = 0.7 + 0.2702 = 0.9702\ \mathrm{V},
\end{aligned}
$$

0.27 V above $V_{TH0}$.

### Step 3 — Size of $M_1$

$$V_{ov1} = V_{GS1} - V_{TH1} = 1 - 0.9702 = 0.0298\ \mathrm{V},$$

$$\left(\frac{W}{L}\right)_1 = \frac{2I_D}{\mu_nC_{ox}V_{ov1}^2} = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.0298\ \mathrm{V})^2} = \frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(8.86\times10^{-4}\ \mathrm{V^2})} \approx 8.4\times10^3 .$$

With $L = 0.5$ μm, $W \approx 4.2$ mm, about 100 times wider than the 41.5 μm needed without body effect.

- The result is very sensitive to $V_{TH1}$: the overdrive is the small difference $1 - 0.970$ V, so a few millivolts of threshold change alter $W/L$ by several percent.
- With only 30 mV of overdrive the device is close to weak inversion, where the square law is inaccurate. In practice one would relax the specification (accept a smaller shift or, with isolated wells, tie $M_1$'s bulk to its source); within the problem's model the answer is $\approx 8.4\times10^3$.

### Step 4 — Size of $M_2$

$M_2$'s source and bulk are at ground, so $V_{TH2} = 0.7$ V:

$$
\begin{aligned}
V_{ov2} &= V_{GS2} - V_{TH2} = 1.5 - 0.7 = 0.8\ \mathrm{V},\\
\left(\frac{W}{L}\right)_2 &= \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.8\ \mathrm{V})^2} = \frac{1\ \mathrm{mA}}{85.76\ \mu\mathrm{A}} = 11.7,
\end{aligned}
$$

the same as without body effect (e.g. 5.8/0.5), with $V_b = 1.5$ V.

### Step 5 — Minimum input for $M_2$ to remain saturated

$M_2$ is saturated for $V_{DS2} = V_{out} \ge V_{ov2} = 0.8$ V, so the lowest output is 0.8 V. There $M_2$ still forces 0.5 mA, so $M_1$ keeps $V_{ov1} = 0.0298$ V, but its threshold is lower because its source has moved down to 0.8 V:

$$
\begin{aligned}
\sqrt{0.9 + 0.8} &= \sqrt{1.7} = 1.3038\ \mathrm{V^{1/2}},\\
V_{TH1}(V_{SB} = 0.8\ \mathrm{V}) &= 0.7 + 0.45\,(1.3038 - 0.9487) = 0.7 + 0.45\times0.3552 = 0.7 + 0.1598 = 0.8598\ \mathrm{V},\\
V_{GS1} &= V_{TH1} + V_{ov1} = 0.8598 + 0.0298 = 0.8896\ \mathrm{V},\\
V_{in,min} &= V_{out} + V_{GS1} = 0.8 + 0.8896 \approx 1.69\ \mathrm{V}.
\end{aligned}
$$

Without body effect the minimum input would be $0.8 + 1.0 = 1.8$ V. With it, the follower's $V_{GS}$ shrinks as its source falls, so the shift is **not constant**: 1 V at $V_{in} = 2.5$ V but only 0.89 V at $V_{in} = 1.69$ V (the follower's small-signal gain is below 1). Below 1.69 V, $M_2$ enters triode and the current drops below 0.5 mA.

$M_1$ stays saturated throughout: $V_{DS1} = 3 - V_{out} \ge 1.5$ V $\gg V_{ov1} = 0.03$ V ✓.

### Result

- $(W/L)_1 = \dfrac{2I_D}{\mu_nC_{ox}(V_{GS1} - V_{TH1})^2} \approx 8.4\times10^3$ (e.g. $W \approx 4.2$ mm for $L = 0.5$ μm), because $V_{TH1} = 0.970$ V at $V_{SB} = 1.5$ V leaves only 30 mV of overdrive.
- $(W/L)_2 \approx 11.7$ (unchanged; $V_b = 1.5$ V, no body effect).
- Minimum input for $M_2$ to stay saturated: $V_{out} = 0.8$ V, $V_{TH1} = 0.860$ V, $V_{GS1} = 0.890$ V, so **$V_{in,min} \approx 1.69$ V**.

**Common mistake.** Leaving $(W/L)_1$ at the value without body effect (≈ 83). The threshold rises to 0.97 V, so a 1-V $V_{GS}$ gives 30 mV of overdrive instead of 300 mV, and the device must be about 100 times larger.

**Common mistake.** Applying the body effect to $M_2$. Its source is at its bulk potential, so $V_{TH2} = 0.7$ V.

**Common mistake.** Computing the minimum input with $V_{TH1}$ frozen at its 1.5-V value, which gives 1.80 V; at $V_{out} = 0.8$ V, $V_{TH1}$ drops to 0.86 V, giving 1.69 V. The limit is set by $M_2$ leaving saturation, not by $M_1$, whose drain is at $V_{DD}$.
