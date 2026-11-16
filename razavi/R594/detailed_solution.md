# Detailed solution - R594

**Approach.** First find the output common-mode (CM) level that the switched-capacitor CMFB establishes: $M_5$ must carry exactly the current supplied by the PMOS loads, which fixes $V_X = V_{GS5}$, and $S_1$ makes the output CM one follower $V_{GS}$ above $V_X$. Then require $M_5$ (lower limit) and $M_1$, $M_2$ (upper limit) to stay saturated, including the body effect on the NMOS devices whose sources are above ground.

### Step 1 — How the CMFB fixes the output CM level

The PMOS loads supply a fixed current that must all flow through $M_1$, $M_2$ and $M_5$. The CMFB adjusts the gate of $M_5$ (node X) until $I_{D5} = 1$ mA (0.5 mA per side), so, with no channel-length modulation,

$$V_X = V_{GS5}(1\ \mathrm{mA}).$$

In the CM-definition phase both outputs are at $V_{out,CM}$, the followers $M_6$, $M_7$ (50 µA each) put their common source one $V_{GS}$ below them, and $S_1$ connects that node to X:

$$V_X = V_{out,CM} - V_{GS6} \quad\Longrightarrow\quad V_{out,CM} = V_{GS5} + V_{GS6}.$$

When $S_1$ opens, $C_1$ and $C_2$ hold $V_{out} - V_X = V_{GS6}$ and keep transferring the output CM level to X, so the same output CM is maintained.

### Step 2 — $V_{GS5}$ (tail transistor)

With $W/L = 100$, $\mu_nC_{ox}(W/L) = 134\ \mu\mathrm{A/V^2}\times100 = 13.4\ \mathrm{mA/V^2}$, and

$$V_{ov5} = \sqrt{\frac{2I_{D5}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(1\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.1493}\ \mathrm{V} = 0.386\ \mathrm{V}.$$

$M_5$'s source is grounded, so $V_{TH5} = V_{TH0} = 0.7$ V and

$$V_{GS5} = 0.7 + 0.386 = 1.086\ \mathrm{V} = V_X .$$

### Step 3 — $V_{GS6}$ (follower, with body effect) and the output CM

$$V_{ov6} = \sqrt{\frac{2(50\ \mu\mathrm{A})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.00746}\ \mathrm{V} = 0.086\ \mathrm{V}.$$

The follower's source sits at $V_X = 1.086$ V with its bulk grounded, so $V_{SB6} = 1.086$ V:

$$
\begin{aligned}
V_{TH6} &= V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right)\\
&= 0.7 + 0.45\left(\sqrt{0.9 + 1.086} - \sqrt{0.9}\right)\\
&= 0.7 + 0.45\,(1.4094 - 0.9487) = 0.7 + 0.207 = 0.907\ \mathrm{V},\\
V_{GS6} &= V_{TH6} + V_{ov6} = 0.907 + 0.086 = 0.994\ \mathrm{V}.
\end{aligned}
$$

Output CM level:

$$V_{out,CM} = V_{GS5} + V_{GS6} = 1.086 + 0.994 = 2.08\ \mathrm{V}.$$

**Check of the loads.** $M_3$, $M_4$ carry 0.5 mA each:

$$|V_{ov3}| = \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = \sqrt{0.2604}\ \mathrm{V} = 0.510\ \mathrm{V},$$

so they are saturated for $V_{out} \le V_{DD} - |V_{ov3}| = 3 - 0.51 = 2.49$ V, which includes 2.08 V. ✓

The output CM does not depend on the input CM: the loop keeps $I_{D5} = 1$ mA, hence $V_X = 1.086$ V and $V_{out,CM} = 2.08$ V, as long as all devices stay saturated.

### Step 4 — Lower limit: $M_5$ must stay saturated

$M_5$ is saturated while its drain, the tail node P, satisfies

$$V_P \ge V_{ov5} = 0.386\ \mathrm{V}.$$

The input CM is $V_P$ plus $V_{GS1}$ at $I_{D1} = 0.5$ mA:

$$V_{ov1} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746}\ \mathrm{V} = 0.273\ \mathrm{V}.$$

At the edge, $V_{SB1} = V_P = 0.386$ V:

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 0.386} - 0.9487\right) = 0.7 + 0.45\,(1.1342 - 0.9487) = 0.783\ \mathrm{V},\\
V_{in,CM,min} &= V_P + V_{TH1} + V_{ov1} = 0.386 + 0.783 + 0.273 = 1.44\ \mathrm{V}.
\end{aligned}
$$

### Step 5 — Upper limit: $M_1$, $M_2$ must stay saturated

$M_1$ is saturated while $V_D \ge V_G - V_{TH1}$:

$$V_{in,CM} \le V_{out,CM} + V_{TH1}.$$

$V_{TH1}$ depends on $V_P$, which rises with the input. At the edge, $V_{in,CM} = V_{out,CM} + V_{TH1}$, so

$$V_P = V_{in,CM} - V_{TH1} - V_{ov1} = V_{out,CM} - V_{ov1} = 2.080 - 0.273 = 1.807\ \mathrm{V},$$

and

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{0.9 + 1.807} - 0.9487\right) = 0.7 + 0.45\,(1.6453 - 0.9487) = 1.013\ \mathrm{V},\\
V_{in,CM,max} &= V_{out,CM} + V_{TH1} = 2.080 + 1.013 = 3.09\ \mathrm{V}.
\end{aligned}
$$

This exceeds $V_{DD} = 3$ V, so within the supply the input pair never leaves saturation and the input CM can go up to essentially $V_{DD}$. The other devices only gain headroom as the input CM rises ($M_5$'s $V_{DS}$ grows; the followers and loads are unaffected).

### Step 6 — Summary and the role of the body effect

$$1.44\ \mathrm{V} \;\le\; V_{in,CM} \;\le\; 3.09\ \mathrm{V}\ (\text{i.e. up to } V_{DD} = 3\ \mathrm{V}).$$

Without the body effect ($V_{TH} = 0.7$ V everywhere):

$$
\begin{aligned}
V_{out,CM} &= 1.086 + 0.7 + 0.086 = 1.87\ \mathrm{V},\\
V_{in,CM,min} &= 0.386 + 0.7 + 0.273 = 1.36\ \mathrm{V},\\
V_{in,CM,max} &= 1.87 + 0.7 = 2.57\ \mathrm{V}.
\end{aligned}
$$

The body effect raises the output CM (through $M_6$, $M_7$) by 0.21 V and the threshold of $M_1$ at the upper edge by 0.31 V, which together lift the upper limit by about 0.5 V.

### Result

The CMFB sets $V_X = V_{GS5} = 1.086$ V and $V_{out,CM} = V_{GS5} + V_{GS6} = 1.086 + 0.994 \approx 2.08$ V. The input CM range is

$$\approx 1.44\ \mathrm{V} \le V_{in,CM} \le \approx 3.09\ \mathrm{V},$$

i.e. from 1.44 V (set by $M_5$ staying saturated, with $V_{TH1} = 0.78$ V) up to essentially the 3-V supply (the $M_1$/$M_2$ saturation limit, 3.09 V, lies above $V_{DD}$). Without the body effect the range would be 1.36 V to 2.57 V.

**Common mistake.** Taking the output CM as $V_{GS5}$ alone, or assuming a "typical" 1.5 V. In the CM-definition phase X is connected to the followers' source, so the outputs sit one follower $V_{GS}$ (about 1 V with body effect) above $V_X$.

**Common mistake.** Forgetting the headroom of $M_5$ (the lower limit is not simply $V_{GS1}$), or giving the 50-µA follower current to $M_1$, $M_2$, which carry 0.5 mA each.
