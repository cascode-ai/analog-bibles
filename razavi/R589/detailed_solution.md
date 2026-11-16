# Detailed solution - R589

**Approach.** The output swing is limited by the two transistors stacked at each output: the input NMOS ($M_1$ or $M_2$) leaves saturation if its drain falls too low, and the PMOS load ($M_3$ or $M_4$) leaves saturation if the drain rises too high. To find these limits we need the bias currents and overdrives, the gate voltage of the input pair during amplification (set by the reset and by charge conservation), and the tail-node voltage, including the body effect on $M_1$, $M_2$.

### Step 1 — Bias currents and overdrive voltages

The tail current splits equally between the two halves, and each PMOS load carries the same current (the common-mode feedback adjusts the loads so that they do):

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA}.$$

All four devices have $W/L = 50/0.5 = 100$. From the **square-law saturation current** $I_D = \tfrac12\mu C_{ox}(W/L)V_{ov}^2$, the overdrive voltage $V_{ov} = V_{GS} - V_{TH}$ is $V_{ov} = \sqrt{2I_D/(\mu C_{ox}W/L)}$.

**NMOS ($M_1$, $M_2$):**

$$V_{ov1} = \sqrt{\frac{2(0.5\times10^{-3}\ \mathrm{A})}{(134\times10^{-6}\ \mathrm{A/V^2})(100)}} = \sqrt{\frac{10^{-3}}{0.0134}}\ \mathrm{V} = \sqrt{0.0746}\ \mathrm{V} = 0.273\ \mathrm{V}.$$

**PMOS ($M_3$, $M_4$):** use $\mu_pC_{ox}$, not the NMOS value:

$$|V_{ov3}| = \sqrt{\frac{2(0.5\times10^{-3}\ \mathrm{A})}{(38.4\times10^{-6}\ \mathrm{A/V^2})(100)}} = \sqrt{\frac{10^{-3}}{0.00384}}\ \mathrm{V} = \sqrt{0.2604}\ \mathrm{V} = 0.510\ \mathrm{V}.$$

The PMOS needs almost twice the overdrive because its mobility is about 3.5 times lower.

### Step 2 — Gate voltage of the input pair during amplification

**Reset (sampling) mode.** The switch across $C_3$ shorts the gate of $M_1$ to its own drain (likewise for $M_2$). The drains are the outputs, whose common-mode level the CMFB holds at 1.5 V. Hence, during reset,

$$V_{G1} = V_{G2} = V_{out,CM} = 1.5\ \mathrm{V}.$$

**Amplification mode.** The switches open, so each gate node is connected only to $C_1$ (or $C_2$) and $C_3$ (or $C_4$) and to a MOS gate: it floats, and its charge is conserved. Charge on the gate node of $M_1$ at the end of reset (left plate of $C_1$ at $V_{in1}$):

$$Q = C_1(1.5 - V_{in1}) + C_3(1.5 - 1.5) = C_1(1.5 - V_{in1}).$$

In amplification (left plate at $V_{CM}$, gate at $V_G'$, output at $V_{out1}'$):

$$Q = C_1(V_G' - V_{CM}) + C_3(V_G' - V_{out1}').$$

Two observations fix $V_G'$:

1. **Differential part.** In steady state no current flows through the capacitors, so $M_1$ and $M_2$ again carry equal currents ($I_{SS}/2$ each, matching the equal loads). Equal currents in matched devices require equal $V_{GS}$, so $V_{G1}' = V_{G2}'$: the gates form a differential **virtual ground**, and the whole differential signal appears at the outputs.
2. **Common-mode part.** Average the charge equations of the two sides, with $V_{out,CM}' = 1.5$ V held by the CMFB:

$$
\begin{aligned}
C_1(1.5 - V_{in,CM}) &= C_1(V_G' - V_{CM}) + C_3(V_G' - 1.5)\\
(C_1 + C_3)\,V_G' &= C_1(1.5 + V_{CM} - V_{in,CM}) + 1.5\,C_3\\
V_G' &= 1.5\ \mathrm{V} + \frac{C_1}{C_1 + C_3}\,(V_{CM} - V_{in,CM}).
\end{aligned}
$$

With the usual assumption that the sampled input common-mode level equals $V_{CM}$, the second term vanishes:

$$V_{G1} = V_{G2} = 1.5\ \mathrm{V}\quad\text{throughout amplification}.$$

### Step 3 — Tail node voltage and $V_{TH}$ with body effect

The sources of $M_1$, $M_2$ meet at the tail node P, so

$$V_P = V_G - V_{GS1} = 1.5 - V_{TH1} - V_{ov1} = 1.5 - V_{TH1} - 0.273 .$$

The bulk is at ground and the source at $V_P$, so $V_{SB} = V_P$ and the **body effect** raises the threshold:

$$V_{TH1} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_P} - \sqrt{2|\phi_F|}\right) = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - 0.9487\right).$$

Substitute $u = \sqrt{0.9 + V_P}$, so $V_P = u^2 - 0.9$, and $0.45 \times 0.9487 = 0.4269$:

$$
\begin{aligned}
u^2 - 0.9 &= 1.5 - 0.273 - 0.7 - 0.45u + 0.4269\\
u^2 - 0.9 &= 0.9537 - 0.45u\\
u^2 + 0.45u - 1.8537 &= 0.
\end{aligned}
$$

Take the positive root (a square root is positive):

$$
\begin{aligned}
u &= \frac{-0.45 + \sqrt{0.45^2 + 4(1.8537)}}{2} = \frac{-0.45 + \sqrt{7.6174}}{2} = \frac{-0.45 + 2.7600}{2} = 1.1550,\\
V_P &= u^2 - 0.9 = 1.3340 - 0.9 = 0.434\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45(1.1550 - 0.9487) = 0.7 + 0.0928 = 0.793\ \mathrm{V}.
\end{aligned}
$$

Check: $V_P = 1.5 - 0.793 - 0.273 = 0.434$ V. ✓ The body effect raises the threshold by 93 mV.

Since the gate and the current stay constant during amplification, $V_P$ and $V_{TH1}$ stay at these values while the outputs swing.

### Step 4 — Lower limit of each output ($M_1$, $M_2$ in saturation)

An NMOS is saturated when $V_{DS} \ge V_{GS} - V_{TH}$. Adding $V_S$ to both sides gives the equivalent condition $V_D \ge V_G - V_{TH}$: the drain may fall at most one threshold below the gate.

$$V_{out,min} = V_G - V_{TH1} = 1.5\ \mathrm{V} - 0.793\ \mathrm{V} = 0.707\ \mathrm{V}.$$

(Without the body effect it would be $1.5 - 0.7 = 0.8$ V.)

### Step 5 — Upper limit of each output ($M_3$, $M_4$ in saturation)

The PMOS source is at $V_{DD} = 3$ V (its bulk is also at $V_{DD}$, so it has no body effect). It is saturated when $V_{SD} \ge |V_{ov3}|$:

$$
\begin{aligned}
V_{DD} - V_{out} &\ge |V_{ov3}|\\
V_{out,max} &= V_{DD} - |V_{ov3}| = 3\ \mathrm{V} - 0.510\ \mathrm{V} = 2.49\ \mathrm{V}.
\end{aligned}
$$

### Step 6 — Allowed swing

Each output may therefore move between 0.707 V and 2.49 V. Around the 1.5-V common-mode level:

$$
\begin{aligned}
\text{room downward} &= 1.5 - 0.707 = 0.793\ \mathrm{V},\\
\text{room upward} &= 2.49 - 1.5 = 0.99\ \mathrm{V}.
\end{aligned}
$$

In a fully differential circuit the two outputs move by equal amounts in opposite directions, so whenever one output goes down by $v$ the other goes up by $v$. The swing is therefore limited by the smaller room, the **downward** one:

$$
\begin{aligned}
\text{per output:}&\quad 1.5\ \mathrm{V} \pm 0.79\ \mathrm{V}\ \ (0.71\ \text{to}\ 2.29\ \mathrm{V}),\\
\text{differential peak:}&\quad V_{out1} - V_{out2} = \pm 2\times0.793\ \mathrm{V} = \pm1.59\ \mathrm{V},\\
\text{differential peak-to-peak:}&\quad 2\times1.59\ \mathrm{V} \approx 3.2\ \mathrm{V}.
\end{aligned}
$$

**Intuition.** The input pair's gates sit at 1.5 V, the same as the output CM level, because of the reset that shorts each gate to its drain. That leaves the drain only one threshold voltage of room below the CM level before $M_1$ enters triode, while the PMOS loads allow nearly 1 V of upward swing. Without the body effect, the limit would be $\pm0.7$ V per side, or 2.8 V peak-to-peak differential.

### Result

Each output must stay between $V_G - V_{TH1} \approx 0.71$ V (with the body effect, $V_{TH1} = 0.79$ V at $V_P = 0.43$ V) and $V_{DD} - |V_{ov3}| \approx 2.49$ V. With the CM level at 1.5 V, the lower limit dominates:

$$\text{maximum swing} \approx \pm0.79\ \mathrm{V}\ \text{per output} \;\Longleftrightarrow\; \approx \pm1.59\ \mathrm{V}\ \text{differential peak}\ (\approx 3.2\ \mathrm{V}\ \text{peak-to-peak differential}).$$

**Common mistake.** Assuming a gate voltage for $M_1$, $M_2$ other than 1.5 V (for example $V_{CM}$, or a gate that follows the output through the $C_3$/$C_1$ divider in steady state). The reset shorts each gate to its drain at the 1.5-V output CM level, charge conservation keeps the gate CM there (for equal input and $V_{CM}$ common-mode levels), and the equal branch currents make the gates a differential virtual ground.

**Common mistake.** Ignoring the body effect. $M_1$'s source sits 0.43 V above its grounded bulk, which raises $V_{TH}$ to 0.79 V and lowers the minimum output to 0.71 V; with $V_{TH} = 0.7$ V one finds only $\pm0.7$ V.

**Common mistake.** Using NMOS parameters for the PMOS loads, or quoting the rail-to-rail range. The PMOS overdrive is computed with $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$ (giving 0.51 V), and both transistors in each branch must stay saturated, so the outputs can come nowhere near 0 V or 3 V.
