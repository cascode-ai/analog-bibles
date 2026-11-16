# Detailed solution - R589

**Approach.** At each output the input NMOS ($M_1$ or $M_2$) leaves saturation if the drain falls too low, and the PMOS load ($M_3$ or $M_4$) if it rises too high. These limits need the overdrives, the gate voltage of the input pair during amplification (set by the reset and by charge conservation), and the tail-node voltage, including the body effect on $M_1$, $M_2$.

### Step 1 — Bias currents and overdrive voltages

The tail current splits equally, and the CMFB makes each PMOS load carry the same current:

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}.$$

With $W/L = 50/0.5 = 100$ and $V_{ov} = \sqrt{2I_D/(\mu C_{ox}W/L)}$:

$$V_{ov1} = \sqrt{\frac{2(0.5\times10^{-3}\ \mathrm{A})}{(134\times10^{-6}\ \mathrm{A/V^2})(100)}} = \sqrt{\frac{10^{-3}}{0.0134}}\ \mathrm{V} = \sqrt{0.0746}\ \mathrm{V} = 0.273\ \mathrm{V},$$

$$|V_{ov3}| = \sqrt{\frac{2(0.5\times10^{-3}\ \mathrm{A})}{(38.4\times10^{-6}\ \mathrm{A/V^2})(100)}} = \sqrt{\frac{10^{-3}}{0.00384}}\ \mathrm{V} = \sqrt{0.2604}\ \mathrm{V} = 0.510\ \mathrm{V}.$$

The PMOS needs almost twice the overdrive because its mobility is about 3.5 times lower.

### Step 2 — Gate voltage of the input pair during amplification

**Reset.** The switch across $C_3$ shorts the gate of $M_1$ to its drain (likewise for $M_2$), and the CMFB holds the output CM level at 1.5 V, so

$$V_{G1} = V_{G2} = V_{out,CM} = 1.5\ \mathrm{V}.$$

**Amplification.** The switches open and each gate node floats, so its charge is conserved. For $M_1$, at the end of reset (left plate of $C_1$ at $V_{in1}$):

$$Q = C_1(1.5 - V_{in1}) + C_3(1.5 - 1.5) = C_1(1.5 - V_{in1}).$$

In amplification (left plate at $V_{CM}$, gate at $V_G'$, output at $V_{out1}'$):

$$Q = C_1(V_G' - V_{CM}) + C_3(V_G' - V_{out1}').$$

1. **Differential part.** In steady state no current flows through the capacitors, so $M_1$ and $M_2$ again carry $I_{SS}/2$ each; equal currents in matched devices need equal $V_{GS}$, so $V_{G1}' = V_{G2}'$: the gates form a differential **virtual ground**, and the whole differential signal appears at the outputs.
2. **Common-mode part.** Average the two sides' charge equations, with $V_{out,CM}' = 1.5$ V held by the CMFB:

$$
\begin{aligned}
C_1(1.5 - V_{in,CM}) &= C_1(V_G' - V_{CM}) + C_3(V_G' - 1.5)\\
(C_1 + C_3)\,V_G' &= C_1(1.5 + V_{CM} - V_{in,CM}) + 1.5\,C_3\\
V_G' &= 1.5\ \mathrm{V} + \frac{C_1}{C_1 + C_3}\,(V_{CM} - V_{in,CM}).
\end{aligned}
$$

With the usual assumption that the sampled input CM level equals $V_{CM}$, the second term vanishes:

$$V_{G1} = V_{G2} = 1.5\ \mathrm{V}\quad\text{throughout amplification}.$$

### Step 3 — Tail node voltage and $V_{TH}$ with body effect

At the tail node P,

$$V_P = V_G - V_{GS1} = 1.5 - V_{TH1} - V_{ov1} = 1.5 - V_{TH1} - 0.273,$$

and with $V_{SB} = V_P$ (bulk grounded)

$$V_{TH1} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_P} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - 0.9487\right).$$

Substitute $u = \sqrt{0.9 + V_P}$, so $V_P = u^2 - 0.9$, and $0.45 \times 0.9487 = 0.4269$:

$$
\begin{aligned}
u^2 - 0.9 &= 1.5 - 0.273 - 0.7 - 0.45u + 0.4269\\
u^2 - 0.9 &= 0.9537 - 0.45u\\
u^2 + 0.45u - 1.8537 &= 0.
\end{aligned}
$$

Taking the positive root:

$$
\begin{aligned}
u &= \frac{-0.45 + \sqrt{0.45^2 + 4(1.8537)}}{2} = \frac{-0.45 + \sqrt{7.6174}}{2} = \frac{-0.45 + 2.7600}{2} = 1.1550,\\
V_P &= u^2 - 0.9 = 1.3340 - 0.9 = 0.434\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45(1.1550 - 0.9487) = 0.7 + 0.0928 = 0.793\ \mathrm{V}.
\end{aligned}
$$

Check: $V_P = 1.5 - 0.793 - 0.273 = 0.434$ V. ✓ The body effect raises the threshold by 93 mV. The gate and the current stay constant during amplification, so $V_P$ and $V_{TH1}$ stay at these values while the outputs swing.

### Step 4 — Lower limit of each output ($M_1$, $M_2$ in saturation)

$M_1$ is saturated while its drain is no more than one threshold below its gate, $V_D \ge V_G - V_{TH1}$:

$$V_{out,min} = V_G - V_{TH1} = 1.5\ \mathrm{V} - 0.793\ \mathrm{V} = 0.707\ \mathrm{V}$$

(without the body effect, $1.5 - 0.7 = 0.8$ V).

### Step 5 — Upper limit of each output ($M_3$, $M_4$ in saturation)

The PMOS source and bulk are at $V_{DD} = 3$ V (no body effect), and saturation needs $V_{SD} \ge |V_{ov3}|$:

$$
\begin{aligned}
V_{DD} - V_{out} &\ge |V_{ov3}|\\
V_{out,max} &= V_{DD} - |V_{ov3}| = 3\ \mathrm{V} - 0.510\ \mathrm{V} = 2.49\ \mathrm{V}.
\end{aligned}
$$

### Step 6 — Allowed swing

Each output may move between 0.707 V and 2.49 V. Around the 1.5-V CM level:

$$
\begin{aligned}
\text{room downward} &= 1.5 - 0.707 = 0.793\ \mathrm{V},\\
\text{room upward} &= 2.49 - 1.5 = 0.99\ \mathrm{V}.
\end{aligned}
$$

The two outputs move by equal amounts in opposite directions, so the smaller, **downward** room limits the swing:

$$
\begin{aligned}
\text{per output:}&\quad 1.5\ \mathrm{V} \pm 0.79\ \mathrm{V}\ \ (0.71\ \text{to}\ 2.29\ \mathrm{V}),\\
\text{differential peak:}&\quad V_{out1} - V_{out2} = \pm 2\times0.793\ \mathrm{V} = \pm1.59\ \mathrm{V},\\
\text{differential peak-to-peak:}&\quad 2\times1.59\ \mathrm{V} \approx 3.2\ \mathrm{V}.
\end{aligned}
$$

Because the reset puts the gates at the output CM level, the drains have only one threshold of room below it. Without the body effect, the limit would be $\pm0.7$ V per side, or 2.8 V peak-to-peak differential.

### Result

Each output must stay between $V_G - V_{TH1} \approx 0.71$ V (with the body effect, $V_{TH1} = 0.79$ V at $V_P = 0.43$ V) and $V_{DD} - |V_{ov3}| \approx 2.49$ V. With the CM level at 1.5 V, the lower limit dominates:

$$\text{maximum swing} \approx \pm0.79\ \mathrm{V}\ \text{per output} \;\Longleftrightarrow\; \approx \pm1.59\ \mathrm{V}\ \text{differential peak}\ (\approx 3.2\ \mathrm{V}\ \text{peak-to-peak differential}).$$

**Common mistake.** Assuming a gate voltage for $M_1$, $M_2$ other than 1.5 V (for example $V_{CM}$, or a gate that follows the output through the $C_3$/$C_1$ divider in steady state). The reset sets the gates to the 1.5-V output CM level, charge conservation keeps their CM there, and the equal branch currents make them a differential virtual ground.

**Common mistake.** Ignoring the body effect. $M_1$'s source sits 0.43 V above its grounded bulk, which raises $V_{TH}$ to 0.79 V and lowers the minimum output to 0.71 V; with $V_{TH} = 0.7$ V one finds only $\pm0.7$ V.

**Common mistake.** Using NMOS parameters for the PMOS loads (the PMOS overdrive is 0.51 V with $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$), or quoting a rail-to-rail range: both transistors in each branch must stay saturated, so the outputs come nowhere near 0 V or 3 V.
