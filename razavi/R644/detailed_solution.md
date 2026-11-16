# Detailed solution - R644

**Approach.** With equal control voltages, $M_5$ and $M_6$ split $I_T$ equally. Each then carries 0.5 mA with its gate at 1.5 V and its source at 0.5 V (the voltage left for the current source). The source is above the grounded bulk, so the body effect raises the threshold. We compute the threshold, the overdrive, and finally the aspect ratio from the square law.

### Step 1 — The steering pair and its operating point

Reading the figure: $M_5$ and $M_6$ form a differential pair whose common source node is fed by the tail current source $I_T$ to ground. $M_5$ delivers $I_{SS}$ to the input pair $M_1$–$M_2$, and $M_6$ delivers $I_1$ to the cross-coupled pair $M_3$–$M_4$. Their gates are driven by $V_{cont1}$ and $V_{cont2}$.

The requirement is that the current source $I_T$ "sustains" 0.5 V: the common source node of $M_5$–$M_6$ must sit at

$$V_S = 0.5\ \mathrm{V},$$

so that the tail current source has 0.5 V across it to operate properly.

With $V_{cont1} = V_{cont2} = 1.5$ V (equal to the common-mode level), the pair is balanced and the current splits equally (KCL at the common source node, identical devices):

$$I_{D5} = I_{D6} = \frac{I_T}{2} = 0.5\ \mathrm{mA}.$$

The terminal voltages of each device are

$$
\begin{aligned}
V_{GS} &= V_G - V_S = 1.5 - 0.5 = 1.0\ \mathrm{V},\\
V_{SB} &= V_S - V_B = 0.5 - 0 = 0.5\ \mathrm{V}.
\end{aligned}
$$

### Step 2 — Threshold voltage with the body effect

The source is 0.5 V above the bulk (which is at ground), so the threshold rises above $V_{TH0}$:

$$V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right),$$

where $V_{TH0} = 0.7$ V is the threshold at $V_{SB} = 0$, $\gamma = 0.45\ \mathrm{V^{1/2}}$ is the body-effect coefficient and $2|\phi_F| = 0.9$ V. Substitute:

$$
\begin{aligned}
\sqrt{2|\phi_F| + V_{SB}} &= \sqrt{0.9 + 0.5} = \sqrt{1.4} = 1.1832\ \mathrm{V^{1/2}},\\
\sqrt{2|\phi_F|} &= \sqrt{0.9} = 0.9487\ \mathrm{V^{1/2}},\\
V_{TH} &= 0.7 + 0.45\,(1.1832 - 0.9487) = 0.7 + 0.45\times0.2345 = 0.7 + 0.1055 = 0.806\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Overdrive voltage

$$V_{ov} = V_{GS} - V_{TH} = 1.0 - 0.806 = 0.194\ \mathrm{V}.$$

The body effect has eaten more than a third of the 0.3 V that would otherwise be available. This is why it cannot be ignored here.

### Step 4 — Aspect ratio from the square law

$M_5$ and $M_6$ are saturated, and channel-length modulation is neglected, so the **square-law saturation current** applies:

$$I_D = \frac12\mu_nC_{ox}\frac{W}{L}V_{ov}^2 .$$

Solve for $W/L$:

$$\left(\frac{W}{L}\right)_{5,6} = \frac{2I_D}{\mu_nC_{ox}V_{ov}^2}.$$

Substitute the numbers:

$$
\begin{aligned}
V_{ov}^2 &= (0.194\ \mathrm{V})^2 = 0.0378\ \mathrm{V^2},\\
\mu_nC_{ox}V_{ov}^2 &= (134\times10^{-6}\ \mathrm{A/V^2})(0.0378\ \mathrm{V^2}) = 5.07\times10^{-6}\ \mathrm{A},\\
\left(\frac{W}{L}\right)_{5,6} &= \frac{2(0.5\times10^{-3}\ \mathrm{A})}{5.07\times10^{-6}\ \mathrm{A}} = 197 .
\end{aligned}
$$

For example, $W \approx 99\ \mu$m with $L = 0.5\ \mu$m.

### Step 5 — Comparison without the body effect

If the body effect were ignored, $V_{TH} = 0.7$ V and $V_{ov} = 0.3$ V, giving

$$\left(\frac{W}{L}\right)_{5,6} = \frac{1\times10^{-3}\ \mathrm{A}}{(134\times10^{-6}\ \mathrm{A/V^2})(0.09\ \mathrm{V^2})} = 83 .$$

Because $W/L \propto 1/V_{ov}^2$, the 35 % reduction in overdrive caused by the body effect requires a $(0.3/0.194)^2 \approx 2.4$ times larger device. Neglecting it would leave the devices too small: they would need a larger $V_{GS}$, which would pull the common source node below 0.5 V and starve the current source of headroom.

**Saturation check.** $M_5$ and $M_6$ need $V_{DS} \ge V_{ov} = 0.19$ V, i.e. their drains (node P and the tail of $M_3$–$M_4$) must stay above about $0.5 + 0.19 = 0.69$ V. Those nodes sit one gate–source voltage below the input and output common-mode levels, so this is a requirement on those levels; the problem states that $M_5$ and $M_6$ are saturated, so it is assumed to be met.

### Result

With $V_{cont1} = V_{cont2} = 1.5$ V, each of $M_5$, $M_6$ carries 0.5 mA with $V_{GS} = 1.0$ V and $V_{SB} = 0.5$ V, so $V_{TH} = 0.806$ V and $V_{ov} = 0.194$ V:

$$\left(\frac{W}{L}\right)_{5,6} = \frac{2I_D}{\mu_nC_{ox}V_{ov}^2} = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.194\ \mathrm{V})^2} \approx 197$$

(e.g. 99 µm/0.5 µm). Ignoring the body effect would give about 83.

**Common mistake.** Using the full $I_T = 1$ mA per device, which doubles the aspect ratio (about 394 with the body effect, 166 without). With equal control voltages the tail current splits equally between $M_5$ and $M_6$.

**Common mistake.** Taking $V_{GS} = 1.5$ V, as if the sources were at ground, or taking the overdrive as 0.5 V. The sources sit at 0.5 V, the voltage across the current source, so $V_{GS} = 1.0$ V.

**Common mistake.** Forgetting that the source–bulk voltage of 0.5 V raises the threshold. With the bulk at ground, $V_{TH} = 0.806$ V rather than 0.7 V, which changes the required size by a factor of about 2.4.
