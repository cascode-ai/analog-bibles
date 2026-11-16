# Detailed solution - R214

**Approach.** Each output must stay inside a window in which both transistors on that side remain saturated. The PMOS load $M_3$ leaves saturation if the output rises too high, and the input device $M_1$ leaves saturation if the output falls too low. We compute both limits from the bias currents (square law, $\lambda$ neglected). For the lower limit we must find the source voltage of $M_1$ and its threshold, which is raised by the body effect. The allowable swing is the distance between the two limits.

### Step 1 — Bias currents and device parameters

From the figure, $M_1$, $M_2$ form an NMOS pair on an ideal tail $I_{SS} = 1$ mA, and $M_3$, $M_4$ are PMOS current sources biased by $V_b$ to carry $I_{SS}/2$ each. All devices have $W/L = 50/0.5 = 100$. Each branch carries

$$I_D = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}.$$

The transconductance parameters are

$$k_n = \mu_nC_{ox}\frac WL = 13.4\ \mathrm{mA/V^2}, \qquad k_p = \mu_pC_{ox}\frac WL = 3.84\ \mathrm{mA/V^2}.$$

### Step 2 — Upper limit: $M_3$ must stay saturated

The PMOS saturation condition $V_{SD3} \ge V_{SG3} - |V_{THP}|$ means the output (the drain of $M_3$) must satisfy

$$V_{out1} \le V_{DD} - |V_{GS3} - V_{TH3}| .$$

The overdrive of $M_3$ follows from its fixed bias current:

$$|V_{GS3} - V_{TH3}| = \sqrt{\frac{2|I_{D3}|}{k_p}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{3.84\ \mathrm{mA/V^2}}} = \sqrt{0.260}\ \mathrm{V} = 0.510\ \mathrm{V}.$$

So

$$V_{out,max} = 3 - 0.510 = 2.49\ \mathrm{V}.$$

### Step 3 — Lower limit: $M_1$ must stay saturated

The NMOS saturation condition $V_{DS1} \ge V_{GS1} - V_{TH1}$, with $V_{DS1} = V_{out1} - V_P$ and $V_{GS1} = V_{in,CM} - V_P$, becomes

$$V_{out1} - V_P \ge V_{in,CM} - V_P - V_{TH1}\quad\Longrightarrow\quad V_{out1} \ge V_{in,CM} - V_{TH1}.$$

The output may sit one threshold voltage *below* the gate. Because the source of $M_1$ sits at $V_P > 0$ while its bulk is grounded, $V_{TH1}$ is raised by the body effect, so we need $V_P$.

**Overdrive of $M_1$:**

$$V_{ov1} = \sqrt{\frac{2I_{D1}}{k_n}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0746}\ \mathrm{V} = 0.273\ \mathrm{V}.$$

**Source voltage and threshold** (they depend on each other):

$$V_P = V_{in,CM} - V_{ov1} - V_{TH1} = 1.5 - 0.273 - V_{TH1}, \qquad V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - \sqrt{0.9}\right).$$

Solve by iteration, starting from $V_P = 0.43$ V:

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45(\sqrt{1.330} - 0.9487) = 0.7 + 0.45(1.1533 - 0.9487) = 0.792\ \mathrm{V}\ \Rightarrow\ V_P = 1.5 - 0.273 - 0.792 = 0.435\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45(\sqrt{1.335} - 0.9487) = 0.7 + 0.45(1.1553 - 0.9487) = 0.793\ \mathrm{V}\ \Rightarrow\ V_P = 0.434\ \mathrm{V}.
\end{aligned}
$$

The iteration has converged: $V_P \approx 0.434$ V and $V_{TH1} \approx 0.793$ V. Therefore

$$V_{out,min} = V_{in,CM} - V_{TH1} = 1.5 - 0.793 = 0.707\ \mathrm{V}.$$

(Without body effect $V_{TH1} = 0.7$ V and the lower limit would be 0.8 V.)

### Step 4 — The allowable swing

Each output can move between 0.707 V and 2.49 V. To use the whole window, the output common-mode level must sit at its centre (set by $V_b$ or by common-mode feedback):

$$V_{out,CM} = \frac{2.49 + 0.707}{2} \approx 1.60\ \mathrm{V}.$$

**Single-ended swing** (each output):

$$2.49 - 0.707 = 1.78\ \mathrm{V}\ \text{peak-to-peak}.$$

**Differential swing.** The two outputs move in opposite directions, so $V_{out1} - V_{out2}$ ranges from $-1.78$ V to $+1.78$ V:

$$2\times1.78 = 3.57\ \mathrm{V}\ \text{peak-to-peak}.$$

Without the body effect the numbers would be 0.8 V to 2.49 V, i.e. 1.69 V single-ended and 3.38 V differential.

### Result

Each output can swing between about 0.71 V and about 2.49 V:

- **Upper limit:** $V_{DD} - |V_{GS3} - V_{TH3}| = 3 - 0.510 = 2.49$ V ($M_3$ at the edge of saturation).
- **Lower limit:** $V_{in,CM} - V_{TH1} = 1.5 - 0.793 = 0.707$ V ($M_1$ at the edge of saturation, with $V_{TH1}$ raised by the body effect since $V_P \approx 0.434$ V).

That is about 1.78 V peak-to-peak per output, or about **3.57 V peak-to-peak differential**, with the output common-mode level near 1.6 V. Without the body effect: 0.8–2.49 V, 1.69 V and 3.38 V.

**Common mistake.** Taking the upper limit as $V_{DD}$ or $V_{DD} - |V_{THP}|$. A current-source load stays saturated only while its drain is at least one *overdrive* (0.51 V), not one threshold, below $V_{DD}$.

**Common mistake.** Taking the lower limit as $V_P = V_{in,CM} - V_{GS1}$ (about 0.43 V), or as the tail-source headroom. $M_1$ stays saturated as long as its drain is no more than one *threshold* below its gate. The relevant limit is $V_{in,CM} - V_{TH1}$, and the body effect makes $V_{TH1} \approx 0.79$ V.

**Common mistake.** Computing the PMOS overdrive with $\mu_nC_{ox}$, or with the full 1 mA. $M_3$ is a PMOS carrying 0.5 mA, so its overdrive is $\sqrt{2(0.5\ \mathrm{mA})/(3.84\ \mathrm{mA/V^2})} = 0.51$ V.
