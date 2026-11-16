# Detailed solution - R422

**Approach.** For a differential input the tail node P is a virtual ground, so each side is a common-source stage loaded by the PMOS current source in parallel with the NMOS output resistance: the gain is $g_{m1}(r_{O1}\parallel r_{O3})$. The output swing is bounded above by $M_3$/$M_4$ leaving saturation and below by $M_1$/$M_2$ leaving saturation; the lower bound depends on the threshold of $M_1$, which the body effect raises.

### Step 1 — Bias currents and overdrives

The 1-mA tail splits equally, and $V_b$ makes each PMOS carry $I_{SS}/2$:

$$I_{D1} = I_{D2} = |I_{D3}| = |I_{D4}| = 0.5\ \mathrm{mA}.$$

$$
\begin{aligned}
V_{OD1} &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(100)}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V},\\
|V_{OD3}| &= \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}} = \sqrt{0.260\ \mathrm{V^2}} = 0.510\ \mathrm{V}.
\end{aligned}
$$

### Step 2 — Small-signal differential gain

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{S} = 3.66\ \mathrm{mS},\\
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega},\qquad
r_{O3} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega},\\
r_{O1}\parallel r_{O3} &= \frac{20\times10}{20 + 10}\ \mathrm{k\Omega} = 6.67\ \mathrm{k\Omega}.
\end{aligned}
$$

With the ideal tail, P is a virtual ground for $\pm v_d/2$, and each output sees $r_{O3}$ (gate of $M_3$ at the fixed $V_b$) in parallel with $r_{O1}$:

$$v_{out1} = -g_{m1}(r_{O1}\parallel r_{O3})\,\frac{v_d}{2},\qquad v_{out2} = +g_{m1}(r_{O1}\parallel r_{O3})\,\frac{v_d}{2} ,$$

$$|A_v| = \frac{|v_{out1} - v_{out2}|}{v_d} = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k\Omega}) = 24.4 .$$

The body effect does not enter, since the sources of $M_1$, $M_2$ sit at the virtual ground.

### Step 3 — Upper limit of each output: $M_3$/$M_4$ saturation

$$V_{DD} - V_{out1} \ge |V_{OD3}|\ \Longrightarrow\ V_{out1} \le V_{DD} - |V_{OD3}| = 3 - 0.510 = 2.49\ \mathrm{V}.$$

(Equivalently, $V_b = V_{DD} - |V_{GS3}| = 3 - 1.31 = 1.69$ V, and the limit is $V_b + |V_{TH3}| = 2.49$ V.)

### Step 4 — Lower limit of each output: $M_1$/$M_2$ saturation

$M_1$ stays saturated while its drain is above $V_G - V_{TH}$:

$$V_{out1} \ge V_{in,CM} - V_{TH1} .$$

(With a gain of 24 the gate moves only by $V_{out}/24$, so it stays essentially at 1.3 V.)

**Threshold of $M_1$ with the body effect.** The bulk is grounded, so $V_{SB} = V_P$:

$$V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - \sqrt{0.9}\right),\qquad V_P = V_{in,CM} - V_{TH1} - V_{OD1} = 1.3 - V_{TH1} - 0.273 .$$

Iterating from $V_{TH1} = 0.7$ V:

$$
\begin{aligned}
V_P &= 1.3 - 0.7 - 0.273 = 0.327\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45(\sqrt{1.227} - 0.9487) = 0.7 + 0.45(1.1077 - 0.9487) = 0.772\ \mathrm{V},\\
V_P &= 1.3 - 0.772 - 0.273 = 0.255\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45(\sqrt{1.155} - 0.9487) = 0.7 + 0.45(1.0747 - 0.9487) = 0.757\ \mathrm{V},\\
V_P &= 1.3 - 0.757 - 0.273 = 0.270\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45(\sqrt{1.170} - 0.9487) = 0.7 + 0.45(1.0817 - 0.9487) = 0.760\ \mathrm{V}.
\end{aligned}
$$

Converged: $V_P \approx 0.27$ V and $V_{TH1} \approx 0.76$ V, so

$$V_{out,min} = 1.3 - 0.76 = 0.54\ \mathrm{V}$$

(0.60 V without the body effect). The tail source is ideal, so the low $V_P$ (0.27 V) imposes no further limit.

### Step 5 — Maximum output swing

$$\text{swing per output} = 2.49 - 0.54 = 1.95\ \mathrm{V_{pp}} .$$

The two outputs move in opposite directions, so

$$\text{differential swing} = 2\times1.95 \approx 3.9\ \mathrm{V_{pp}} .$$

(Common-mode feedback would set the output common-mode level midway, about 1.52 V, to use the full range.)

### Result

$$|A_v| = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k\Omega}) \approx 24.4 .$$

Each output can swing from $V_{in,CM} - V_{TH1} \approx 0.54$ V (with the body effect, $V_{TH1} \approx 0.76$ V) to $V_{DD} - |V_{OD3}| \approx 2.49$ V, i.e. about 1.95 V peak-to-peak per output and about 3.9 V peak-to-peak differentially (1.89 V and 3.78 V if the body effect is ignored).

**Common mistake.** Using $V_{DD} - |V_{GS3}|$ or $V_{in,CM} - V_{GS1}$ as swing limits. The edges of saturation are set by the PMOS **overdrive** and the NMOS **threshold**, not by the full gate–source voltages.

**Common mistake.** Ignoring the body effect in the lower limit. The source of $M_1$ sits about 0.27 V above its bulk, which raises $V_{TH1}$ to about 0.76 V and costs about 60 mV of swing per output.

**Common mistake.** Computing the gain with $r_{O1}$ or $r_{O3}$ alone. Both connect the output to an ac ground, so they are in parallel.
