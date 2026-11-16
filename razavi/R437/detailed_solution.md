# Detailed solution - R437

**Approach.** Turn the specifications into budgets: the power fixes the total supply current, and the output swing fixes how much overdrive voltage the two output transistors may use. Size the output stage first, because its gate voltage sets the DC level that the first stage must produce at X and Y; then size the first stage, check every device for saturation, and finally compute the gain with the square-law $g_m$ and $r_O = 1/(\lambda I_D)$. Several choices are free; one complete, consistent design is given and the free choices are pointed out.

### Step 1 — The topology

From the figure:

- **First stage.** NMOS differential pair $M_1$–$M_2$ with tail current $I_{SS}$, loaded by PMOS current sources $M_3$, $M_4$ (gates at $V_{b1}$). Its outputs are nodes X and Y.
- **Second stage.** PMOS common-source (CS) devices $M_5$ (gate at X) and $M_6$ (gate at Y), sources at $V_{DD}$, loaded by NMOS current sources $M_7$, $M_8$ (gates at $V_{b2}$). The outputs are $V_{out1}$ and $V_{out2}$.

All devices use $L = 0.5\ \mu\mathrm{m}$. We use the square law in saturation, $I_D = \tfrac12\mu C_{ox}(W/L)V_{ov}^2$, where $V_{ov} = |V_{GS}| - |V_{TH}|$ is the overdrive voltage. Rearranged, it gives the aspect ratio needed for a chosen current and overdrive:

$$\frac{W}{L} = \frac{2I_D}{\mu C_{ox}V_{ov}^2} .$$

Body effect is ignored (no $\gamma$ is given), and $\lambda$ is neglected in bias calculations.

### Step 2 — Power budget: how much current each branch gets

The total power is the supply voltage times the total supply current:

$$I_{total} = \frac{P}{V_{DD}} = \frac{6\ \mathrm{mW}}{3\ \mathrm{V}} = 2\ \mathrm{mA}.$$

The first stage uses $I_{SS} = 0.5$ mA, so the second stage receives what is left (neglecting the small bias-generation network):

$$I_{stage2} = 2\ \mathrm{mA} - 0.5\ \mathrm{mA} = 1.5\ \mathrm{mA}.$$

This is shared by the two identical output branches:

$$I_{D5} = I_{D6} = I_{D7} = I_{D8} = \frac{1.5\ \mathrm{mA}}{2} = 0.75\ \mathrm{mA},$$

and in the first stage

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.25\ \mathrm{mA}.$$

### Step 3 — Swing budget: overdrives of the output devices

The differential output $V_{out1} - V_{out2}$ is the difference of two outputs moving in opposite directions. A 4-V p-p differential swing therefore needs only

$$\text{swing per output} = \frac{4\ \mathrm{V_{pp}}}{2} = 2\ \mathrm{V_{pp}} .$$

Each output is the common drain of $M_5$ and $M_7$:

- $M_7$ stays saturated if $V_{out} \ge V_{ov7}$ (its source is grounded);
- $M_5$ stays saturated if $V_{DD} - V_{out} \ge |V_{ov5}|$, i.e. $V_{out} \le V_{DD} - |V_{ov5}|$.

So the available single-ended swing is $V_{DD} - |V_{ov5}| - V_{ov7}$, and the requirement is

$$
\begin{aligned}
V_{DD} - |V_{ov5}| - V_{ov7} &\ge 2\ \mathrm{V}\\
|V_{ov5}| + V_{ov7} &\le 3\ \mathrm{V} - 2\ \mathrm{V} = 1\ \mathrm{V}.
\end{aligned}
$$

**Choice (free).** Use the whole 1-V budget and split it equally:

$$|V_{ov5}| = |V_{ov6}| = 0.5\ \mathrm{V}, \qquad V_{ov7} = V_{ov8} = 0.5\ \mathrm{V}.$$

Using the full budget gives the largest overdrives allowed, hence the smallest transistors and the least parasitic capacitance. Any other split with a sum of at most 1 V also meets the swing specification.

### Step 4 — Sizing the output stage ($M_5$–$M_8$)

**PMOS $M_5$, $M_6$** (0.75 mA, $|V_{ov}| = 0.5$ V):

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{5,6} &= \frac{2I_{D5}}{\mu_pC_{ox}|V_{ov5}|^2} = \frac{2\,(0.75\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.5\ \mathrm{V})^2}\\
&= \frac{1.5\times10^{-3}}{9.6\times10^{-6}} = 156 ,
\end{aligned}
$$

so $W_{5,6} = 156\times0.5\ \mu\mathrm{m} \approx 78\ \mu\mathrm{m}$.

**NMOS $M_7$, $M_8$** (0.75 mA, $V_{ov} = 0.5$ V):

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{7,8} &= \frac{2I_{D7}}{\mu_nC_{ox}V_{ov7}^2} = \frac{2\,(0.75\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{V})^2}\\
&= \frac{1.5\times10^{-3}}{33.5\times10^{-6}} = 44.8 ,
\end{aligned}
$$

so $W_{7,8} \approx 22.4\ \mu\mathrm{m}$.

**Bias voltage $V_{b2}$.** The gate-source voltage of $M_7$ is threshold plus overdrive:

$$V_{b2} = V_{TH,n} + V_{ov7} = 0.7\ \mathrm{V} + 0.5\ \mathrm{V} = 1.2\ \mathrm{V}.$$

**Output common-mode level.** For a symmetric $\pm1$ V swing, the outputs should rest at the middle of the allowed range:

$$V_{out,CM} = \frac{V_{ov7} + (V_{DD} - |V_{ov5}|)}{2} = \frac{0.5 + 2.5}{2}\ \mathrm{V} = 1.5\ \mathrm{V}.$$

### Step 5 — The DC level the first stage must deliver at X and Y

$M_5$ carries 0.75 mA only if its source-gate voltage is threshold plus overdrive:

$$|V_{GS5}| = |V_{TH,p}| + |V_{ov5}| = 0.8\ \mathrm{V} + 0.5\ \mathrm{V} = 1.3\ \mathrm{V}.$$

Its source is at $V_{DD}$ and its gate is X, so

$$V_X = V_Y = V_{DD} - |V_{GS5}| = 3\ \mathrm{V} - 1.3\ \mathrm{V} = 1.7\ \mathrm{V}.$$

This is the key link between the two stages: the first stage's output common-mode level *is* the second stage's bias. If X drifted, the output-branch current would change.

### Step 6 — Sizing the first stage

**Load devices $M_3$, $M_4$** (0.25 mA). **Choice (free):** $|V_{ov3}| = 0.4$ V. A fairly large overdrive keeps $g_{m3}$ small (less noise from the load) and the device compact.

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{3,4} &= \frac{2I_{D3}}{\mu_pC_{ox}|V_{ov3}|^2} = \frac{2\,(0.25\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.4\ \mathrm{V})^2}\\
&= \frac{0.5\times10^{-3}}{6.144\times10^{-6}} = 81.4 ,
\end{aligned}
$$

so $W_{3,4} \approx 40.7\ \mu\mathrm{m}$. The gate bias:

$$V_{b1} = V_{DD} - (|V_{TH,p}| + |V_{ov3}|) = 3\ \mathrm{V} - (0.8 + 0.4)\ \mathrm{V} = 1.8\ \mathrm{V}.$$

Saturation check: $V_{SD3} = V_{DD} - V_X = 3 - 1.7 = 1.3\ \mathrm{V} \ge |V_{ov3}| = 0.4$ V. ✓

**Input pair $M_1$, $M_2$** (0.25 mA). **Choice (free):** $V_{ov1} = 0.2$ V, a small overdrive that gives a large $g_m$ for a given current (more gain, less input noise).

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{1,2} &= \frac{2I_{D1}}{\mu_nC_{ox}V_{ov1}^2} = \frac{2\,(0.25\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.2\ \mathrm{V})^2}\\
&= \frac{0.5\times10^{-3}}{5.36\times10^{-6}} = 93.3 ,
\end{aligned}
$$

so $W_{1,2} \approx 46.6\ \mu\mathrm{m}$, and $V_{GS1} = 0.7 + 0.2 = 0.9$ V.

**Tail current source** (an NMOS $M_{SS}$ carrying 0.5 mA). **Choice (free):** $V_{ov,SS} = 0.3$ V.

$$
\begin{aligned}
\left(\frac{W}{L}\right)_{SS} &= \frac{2I_{SS}}{\mu_nC_{ox}V_{ov,SS}^2} = \frac{2\,(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2}\\
&= \frac{1.0\times10^{-3}}{12.06\times10^{-6}} = 82.9 ,
\end{aligned}
$$

so $W_{SS} \approx 41.5\ \mu\mathrm{m}$, with gate bias $0.7 + 0.3 = 1.0$ V.

### Step 7 — Input common-mode range

**Lower limit.** The tail device needs $V_P \ge V_{ov,SS}$, where $V_P = V_{in,CM} - V_{GS1}$ is the common source node of the pair:

$$V_{in,CM} \ge V_{GS1} + V_{ov,SS} = 0.9\ \mathrm{V} + 0.3\ \mathrm{V} = 1.2\ \mathrm{V}.$$

**Upper limit.** $M_1$ stays saturated while its drain is no lower than its gate minus one threshold, $V_X \ge V_{in,CM} - V_{TH,n}$:

$$V_{in,CM} \le V_X + V_{TH,n} = 1.7\ \mathrm{V} + 0.7\ \mathrm{V} = 2.4\ \mathrm{V}.$$

(Body effect raises $V_{TH1}$ and would push this limit slightly higher.) For example, $V_{in,CM} = 1.5$ V gives $V_P = 0.6$ V, so $V_{DS,SS} = 0.6\ \mathrm{V} > 0.3$ V and $V_{DS1} = 1.7 - 0.6 = 1.1\ \mathrm{V} > 0.2$ V. ✓

### Step 8 — Small-signal parameters and the gain

**First stage.** For a square-law device, $g_m = 2I_D/V_{ov}$:

$$
\begin{aligned}
g_{m1} &= \frac{2I_{D1}}{V_{ov1}} = \frac{2\,(0.25\ \mathrm{mA})}{0.2\ \mathrm{V}} = 2.5\ \mathrm{mS},\\
r_{O1} &= \frac{1}{\lambda_nI_{D1}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{\lambda_pI_{D3}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O1}\parallel r_{O3} &= \frac{40\times20}{40+20}\ \mathrm{k}\Omega = 13.3\ \mathrm{k}\Omega,\\
A_1 &= g_{m1}(r_{O1}\parallel r_{O3}) = (2.5\ \mathrm{mS})(13.3\ \mathrm{k}\Omega) = 33.3 .
\end{aligned}
$$

**Second stage:**

$$
\begin{aligned}
g_{m5} &= \frac{2I_{D5}}{|V_{ov5}|} = \frac{2\,(0.75\ \mathrm{mA})}{0.5\ \mathrm{V}} = 3\ \mathrm{mS},\\
r_{O5} &= \frac{1}{\lambda_pI_{D5}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.75\ \mathrm{mA})} = 6.67\ \mathrm{k}\Omega,\\
r_{O7} &= \frac{1}{\lambda_nI_{D7}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.75\ \mathrm{mA})} = 13.3\ \mathrm{k}\Omega,\\
r_{O5}\parallel r_{O7} &= \frac{6.67\times13.3}{6.67+13.3}\ \mathrm{k}\Omega = 4.44\ \mathrm{k}\Omega,\\
A_2 &= g_{m5}(r_{O5}\parallel r_{O7}) = (3\ \mathrm{mS})(4.44\ \mathrm{k}\Omega) = 13.3 .
\end{aligned}
$$

**Overall differential gain.** In the differential half circuit the source node P is a virtual ground, so each half is a CS stage driving a second CS stage, and

$$A_v = A_1A_2 = g_{m1}(r_{O1}\parallel r_{O3})\cdot g_{m5}(r_{O5}\parallel r_{O7}) = 33.3\times13.3 \approx 444 .$$

### Step 9 — Practical note: common-mode feedback

Nodes X, Y and the outputs are high-impedance nodes whose DC levels are set by the *difference* between two current sources (e.g. $I_{D3}$ versus $I_{SS}/2$). Any mismatch would drive them toward a rail. In practice a common-mode feedback (CMFB) loop adjusts $V_{b1}$ to hold X and Y at 1.7 V, and another adjusts $V_{b2}$ to hold the outputs at 1.5 V.

### Result

One consistent design (all $L = 0.5\ \mu\mathrm{m}$):

| Device | $I_D$ | $\lvert V_{ov}\rvert$ | $W/L$ | $W$ |
|---|---|---|---|---|
| $M_1$, $M_2$ | 0.25 mA | 0.2 V | 93 | 46.6 μm |
| $M_3$, $M_4$ | 0.25 mA | 0.4 V | 81 | 40.7 μm |
| $M_5$, $M_6$ | 0.75 mA | 0.5 V | 156 | 78 μm |
| $M_7$, $M_8$ | 0.75 mA | 0.5 V | 45 | 22.4 μm |
| tail ($I_{SS}$) | 0.5 mA | 0.3 V | 83 | 41.5 μm |

- Budgets: 2 mA total ($6\ \mathrm{mW}/3\ \mathrm{V}$), 0.75 mA per output branch; 2 V p-p per output requires $|V_{ov5}| + V_{ov7} \le 1$ V.
- Bias levels: $V_{b2} = 1.2$ V, $V_{b1} = 1.8$ V, $V_X = V_Y = V_{DD} - |V_{GS5}| = 1.7$ V, output CM level 1.5 V, input CM range 1.2–2.4 V.
- Gain: $A_1 \approx 33$, $A_2 \approx 13.3$, $A_v \approx 440$.

The overdrives of $M_1$–$M_4$ and the tail device, and the split of the 1-V budget between $M_5$ and $M_7$, are free choices; the current budget, the swing condition and $V_X = 1.7$ V are not.

**Common mistake.** Treating 4 V p-p as the swing of *each* output. That leaves only $3 - 4 < 0$ V for the overdrives, an impossible design. The differential swing is twice the single-ended swing, so each output needs only 2 V p-p.

**Common mistake.** Sizing the first stage independently of the second. The DC voltage at X is the gate voltage of $M_5$; unless $V_X = V_{DD} - |V_{GS5}| = 1.7$ V, $M_5$ will not carry the 0.75 mA that the power budget assigned to it.

**Common mistake.** Splitting the 2 mA wrongly, for example giving 1.5 mA to *each* output branch (9 mW total) or forgetting that $I_{SS}$ is part of the 6-mW budget. Only 1.5 mA remains for the two output branches together.
