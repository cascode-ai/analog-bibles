# Detailed solution - R595

**Approach.** First find the output common-mode (CM) level set by the switched-capacitor CMFB: $M_5$ must carry exactly the load current, which fixes $V_X = V_{GS5}$, and during CM definition $S_1$ ties X to the followers' common source, so the outputs sit one follower $V_{GS}$ above X. Then require $M_5$ (lower limit) and $M_1$, $M_2$ (upper limit) to remain saturated, including the body effect on every NMOS whose source is above ground.

### Step 1 — How the CMFB fixes the output CM level

The PMOS loads $M_3$, $M_4$ are current sources (gates at $V_b$). Their total current must flow through $M_1$, $M_2$ and the tail transistor $M_5$. The CMFB adjusts the gate of $M_5$ (node X) until $M_5$ conducts exactly that current, $I_{D5} = 1$ mA. With channel-length modulation neglected, $I_{D5}$ depends only on $V_{GS5}$, so

$$V_X = V_{GS5}(1\ \mathrm{mA}).$$

In the CM-definition phase (zero differential input) both outputs are at $V_{out,CM}$, the followers $M_6$, $M_7$ (50 µA each) place their common source at $V_{out,CM} - V_{GS6}$, and $S_1$ connects that node to X:

$$V_{out,CM} = V_X + V_{GS6} = V_{GS5} + V_{GS6}.$$

After $S_1$ opens, $C_1$ and $C_2$ hold $V_{GS6}$ and keep transferring the output CM level to X, so the same output CM is maintained. This output CM does not depend on the input CM, as long as all devices are saturated.

### Step 2 — $V_{GS5}$

For $M_1$–$M_5$, $\mu_nC_{ox}(W/L) = 134\ \mu\mathrm{A/V^2}\times(50/0.5) = 13.4\ \mathrm{mA/V^2}$. The square law $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$ gives the overdrive $V_{ov} = V_{GS} - V_{TH}$:

$$V_{ov5} = \sqrt{\frac{2(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.1493}\ \mathrm{V} = 0.386\ \mathrm{V}.$$

$M_5$'s source is grounded (no body effect):

$$V_{GS5} = V_{TH0} + V_{ov5} = 0.7 + 0.386 = 1.086\ \mathrm{V} = V_X.$$

### Step 3 — $V_{GS6}$ of the smaller followers, and the output CM

The followers are now only $W/L = 10/0.5 = 20$, so $\mu_nC_{ox}(W/L)_6 = 134\ \mu\mathrm{A/V^2}\times20 = 2.68\ \mathrm{mA/V^2}$:

$$V_{ov6} = \sqrt{\frac{2(50\ \mu\mathrm{A})}{2.68\ \mathrm{mA/V^2}}} = \sqrt{0.0373}\ \mathrm{V} = 0.193\ \mathrm{V}.$$

Their common source is at $V_X = 1.086$ V while their bulk is grounded, so $V_{SB6} = 1.086$ V and the **body effect** gives

$$
\begin{aligned}
V_{TH6} &= V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB6}} - \sqrt{2|\phi_F|}\right)\\
&= 0.7 + 0.45\left(\sqrt{1.986} - \sqrt{0.9}\right) = 0.7 + 0.45\,(1.4094 - 0.9487) = 0.907\ \mathrm{V},\\
V_{GS6} &= V_{TH6} + V_{ov6} = 0.907 + 0.193 = 1.100\ \mathrm{V}.
\end{aligned}
$$

Output CM level:

$$V_{out,CM} = V_{GS5} + V_{GS6} = 1.086 + 1.100 = 2.19\ \mathrm{V}.$$

**Check of the PMOS loads** (0.5 mA each):

$$|V_{ov3}| = \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = 0.510\ \mathrm{V},\qquad V_{out,max} = 3 - 0.510 = 2.49\ \mathrm{V} > 2.19\ \mathrm{V}.\ \checkmark$$

So the loads are saturated, with 0.3 V to spare.

### Step 4 — Lower limit of the input CM ($M_5$ in saturation)

$M_5$ stays saturated if its drain (the tail node P) satisfies $V_P \ge V_{ov5} = 0.386$ V. Each input device carries 0.5 mA:

$$V_{ov1} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746}\ \mathrm{V} = 0.273\ \mathrm{V}.$$

At the edge, $V_{SB1} = V_P = 0.386$ V:

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 0.386} - 0.9487\right) = 0.7 + 0.45\,(1.1342 - 0.9487) = 0.783\ \mathrm{V},\\
V_{in,CM,min} &= V_P + V_{TH1} + V_{ov1} = 0.386 + 0.783 + 0.273 = 1.44\ \mathrm{V}.
\end{aligned}
$$

This limit involves only $M_5$ and $M_1$, so it is unaffected by the follower size.

### Step 5 — Upper limit of the input CM ($M_1$, $M_2$ in saturation)

$M_1$ is saturated if $V_D \ge V_G - V_{TH1}$, i.e.

$$V_{in,CM} \le V_{out,CM} + V_{TH1}.$$

At this edge, $V_P = V_{in,CM} - V_{TH1} - V_{ov1} = V_{out,CM} - V_{ov1}$:

$$
\begin{aligned}
V_P &= 2.187 - 0.273 = 1.914\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 1.914} - 0.9487\right) = 0.7 + 0.45\,(1.6774 - 0.9487) = 1.028\ \mathrm{V},\\
V_{in,CM,max} &= V_{out,CM} + V_{TH1} = 2.187 + 1.028 = 3.21\ \mathrm{V}.
\end{aligned}
$$

This exceeds $V_{DD} = 3$ V, so the input pair remains saturated for any input CM up to the supply. (Raising the input CM only increases $V_{DS5}$; the loads and followers are unaffected.)

### Step 6 — Summary and comparison

$$1.44\ \mathrm{V} \;\le\; V_{in,CM} \;\le\; 3.21\ \mathrm{V}\ \ (\text{effectively up to } V_{DD} = 3\ \mathrm{V}).$$

Without the body effect ($V_{TH} = 0.7$ V for all devices):

$$
\begin{aligned}
V_{out,CM} &= 1.086 + 0.7 + 0.193 = 1.98\ \mathrm{V},\\
V_{in,CM,min} &= 0.386 + 0.7 + 0.273 = 1.36\ \mathrm{V},\\
V_{in,CM,max} &= 1.98 + 0.7 = 2.68\ \mathrm{V}.
\end{aligned}
$$

**Effect of the smaller followers.** Shrinking $M_6$, $M_7$ from 50/0.5 to 10/0.5 raises their overdrive from 0.086 V to 0.193 V, so the output CM rises by about 0.11 V (from 2.08 V to 2.19 V). That moves the upper limit up by a similar amount but leaves the lower limit unchanged; it also eats into the headroom of the PMOS loads (2.19 V against their 2.49-V limit).

### Result

The CMFB sets $V_X = V_{GS5} = 1.086$ V and $V_{out,CM} = V_{GS5} + V_{GS6} = 1.086 + 1.100 \approx 2.19$ V. The allowed input CM range is

$$\approx 1.44\ \mathrm{V} \le V_{in,CM} \le \approx 3.21\ \mathrm{V},$$

i.e. from 1.44 V (tail transistor $M_5$ at the edge of saturation) up to essentially $V_{DD} = 3$ V (the $M_1$/$M_2$ saturation limit, 3.21 V, lies above the supply). Without the body effect: 1.36 V to 2.68 V.

**Common mistake.** Taking the output CM as $V_{GS5}$ alone (X connected directly to the outputs) or assuming 1.5 V. In the CM-definition phase X is connected to the followers' common source, so the outputs are one follower $V_{GS}$ (1.10 V here, including body effect) above X.

**Common mistake.** Letting the follower size change the lower limit. The lower limit is set only by $M_5$'s headroom and $M_1$'s $V_{GS}$ at 0.5 mA; the followers' 50 µA flows only in $M_6$, $M_7$ and must not be assigned to the input pair.
