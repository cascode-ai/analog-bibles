# Detailed solution - R644

**Approach.** With equal control voltages, $M_5$ and $M_6$ split $I_T$ equally, each carrying 0.5 mA with its gate at 1.5 V and its source at 0.5 V (the voltage left for the current source). The source is above the grounded bulk, so the body effect raises the threshold. Compute the threshold, the overdrive, and then the aspect ratio from the square law.

### Step 1 — Operating point of $M_5$ and $M_6$

The common source node of $M_5$–$M_6$ must sit at $V_S = 0.5$ V so that the tail current source has 0.5 V across it. With $V_{cont1} = V_{cont2} = 1.5$ V the identical devices split the current equally:

$$I_{D5} = I_{D6} = \frac{I_T}{2} = 0.5\ \mathrm{mA},$$

$$
\begin{aligned}
V_{GS} &= V_G - V_S = 1.5 - 0.5 = 1.0\ \mathrm{V},\\
V_{SB} &= V_S - V_B = 0.5 - 0 = 0.5\ \mathrm{V}.
\end{aligned}
$$

### Step 2 — Threshold voltage with the body effect

$$
\begin{aligned}
V_{TH} &= V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right),\\
\sqrt{2|\phi_F| + V_{SB}} &= \sqrt{0.9 + 0.5} = \sqrt{1.4} = 1.1832\ \mathrm{V^{1/2}},\\
\sqrt{2|\phi_F|} &= \sqrt{0.9} = 0.9487\ \mathrm{V^{1/2}},\\
V_{TH} &= 0.7 + 0.45\,(1.1832 - 0.9487) = 0.7 + 0.45\times0.2345 = 0.7 + 0.1055 = 0.806\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Overdrive voltage

$$V_{ov} = V_{GS} - V_{TH} = 1.0 - 0.806 = 0.194\ \mathrm{V}.$$

The body effect takes more than a third of the 0.3 V that would otherwise be available, so it cannot be ignored here.

### Step 4 — Aspect ratio from the square law

With $M_5$, $M_6$ saturated and $\lambda = 0$, $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, so

$$\left(\frac{W}{L}\right)_{5,6} = \frac{2I_D}{\mu_nC_{ox}V_{ov}^2}.$$

$$
\begin{aligned}
V_{ov}^2 &= (0.194\ \mathrm{V})^2 = 0.0378\ \mathrm{V^2},\\
\mu_nC_{ox}V_{ov}^2 &= (134\times10^{-6}\ \mathrm{A/V^2})(0.0378\ \mathrm{V^2}) = 5.07\times10^{-6}\ \mathrm{A},\\
\left(\frac{W}{L}\right)_{5,6} &= \frac{2(0.5\times10^{-3}\ \mathrm{A})}{5.07\times10^{-6}\ \mathrm{A}} = 197 .
\end{aligned}
$$

For example, $W \approx 99\ \mu$m with $L = 0.5\ \mu$m.

### Step 5 — Comparison without the body effect

With $V_{TH} = 0.7$ V, $V_{ov} = 0.3$ V and

$$\left(\frac{W}{L}\right)_{5,6} = \frac{1\times10^{-3}\ \mathrm{A}}{(134\times10^{-6}\ \mathrm{A/V^2})(0.09\ \mathrm{V^2})} = 83 .$$

Since $W/L \propto 1/V_{ov}^2$, the 35 % lower overdrive caused by the body effect requires a $(0.3/0.194)^2 \approx 2.4$ times larger device. Devices sized without it would need a larger $V_{GS}$, pulling the common source node below 0.5 V and starving the current source of headroom.

**Saturation check.** $M_5$ and $M_6$ need $V_{DS} \ge V_{ov} = 0.19$ V, i.e. their drains (node P and the tail of $M_3$–$M_4$) must stay above about $0.5 + 0.19 = 0.69$ V, a requirement on the input and output common-mode levels that the problem's saturation assumption takes as met.

### Result

With $V_{cont1} = V_{cont2} = 1.5$ V, each of $M_5$, $M_6$ carries 0.5 mA with $V_{GS} = 1.0$ V and $V_{SB} = 0.5$ V, so $V_{TH} = 0.806$ V and $V_{ov} = 0.194$ V:

$$\left(\frac{W}{L}\right)_{5,6} = \frac{2I_D}{\mu_nC_{ox}V_{ov}^2} = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.194\ \mathrm{V})^2} \approx 197$$

(e.g. 99 µm/0.5 µm). Ignoring the body effect would give about 83.

**Common mistake.** Using the full $I_T = 1$ mA per device, which doubles the aspect ratio (about 394 with the body effect, 166 without). With equal control voltages the tail current splits equally.

**Common mistake.** Taking $V_{GS} = 1.5$ V, as if the sources were at ground, or taking the overdrive as 0.5 V. The sources sit at 0.5 V, so $V_{GS} = 1.0$ V.

**Common mistake.** Forgetting that the 0.5-V source–bulk voltage raises the threshold to 0.806 V, which changes the required size by a factor of about 2.4.
