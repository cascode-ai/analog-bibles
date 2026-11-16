# Detailed solution - R176

**Approach.** (1) The gain follows from the half circuit: $M_1$ drives the diode load $1/g_{m3}$, in parallel with $r_{O1}$ and $r_{O3}$. (2) The minimum input common-mode level stacks the 0.4-V tail headroom, the overdrive of $M_1$ and its body-affected threshold. (3) For the swing, compare the limit set by the input devices staying saturated with the range a diode load can actually reach while carrying between 0 and $I_{SS}$; the tighter limit wins.

### Step 1 — Small-signal parameters

At equilibrium each side carries $I_{SS}/2 = 0.5$ mA.

**Input devices** ($\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$):

$$g_{m1} = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS}, \qquad r_{O1} = \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .$$

**PMOS loads** ($\beta_p = \mu_pC_{ox}(W/L) = (38.4\ \mu\mathrm{A/V^2})(50/1) = 1.92\ \mathrm{mA/V^2}$):

$$g_{m3} = \sqrt{2(1.92\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 1.386\ \mathrm{mS}\ \ \left(\frac{1}{g_{m3}} = 722\ \Omega\right), \qquad r_{O3} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .$$

### Step 2 — Differential voltage gain

With the tail node at ac ground, each half is a common-source stage loaded by the diode $M_3$ ($1/g_{m3}\parallel r_{O3}$) and by $r_{O1}$:

$$
\begin{aligned}
|A_v| &= g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\right) = \frac{g_{m1}}{g_{m3} + 1/r_{O1} + 1/r_{O3}}\\
&= \frac{3.66\ \mathrm{mS}}{1.386\ \mathrm{mS} + 0.05\ \mathrm{mS} + 0.1\ \mathrm{mS}} = \frac{3.66}{1.536} = 2.38 .
\end{aligned}
$$

Neglecting channel-length modulation, $|A_v| = g_{m1}/g_{m3} = \sqrt{\mu_n(W/L)_1/[\mu_p(W/L)_3]} = 3.66/1.386 = 2.64$. The gain is low because the diode load is only about $1/g_{m3}$.

### Step 3 — Minimum input common-mode level

The tail needs $V_P \ge 0.4$ V, and the input devices sit $V_{GS1} = V_{TH1} + V_{ov1}$ above $P$:

$$V_{ov1} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V}.$$

With $V_{SB1} = V_P = 0.4$ V:

$$V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + 0.4} - \sqrt{0.9}\right) = 0.7 + 0.45(1.1402 - 0.9487) = 0.786\ \mathrm{V}.$$

Therefore

$$V_{in,CM,min} = V_P + V_{ov1} + V_{TH1} = 0.4 + 0.273 + 0.786 = 1.46\ \mathrm{V}.$$

(Without body effect: $0.4 + 0.273 + 0.7 = 1.37$ V.)

### Step 4 — Swing limit from the input devices

With $V_{in,CM} = 1.46$ V and a small differential input, $M_1$ stays saturated while

$$V_X \ge V_{in,CM} - V_{TH1} = 1.46 - 0.786 = 0.673\ \mathrm{V}.$$

At full current steering ($|V_{in1} - V_{in2}| \ge \sqrt2\,V_{ov1} = 0.386$ V) the gate of the conducting device is about 0.19 V higher, it carries all of $I_{SS}$, and the tail node rises to about 0.47 V. Its threshold is then about 0.80 V, so its drain must stay above $1.65 - 0.80 \approx 0.85$ V. (The tail headroom only *grows* as the pair steers.)

### Step 5 — Swing limit from the diode-connected loads

A diode-connected PMOS is always saturated, and its drain voltage is tied to its current:

$$V_{out} = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_D}{\beta_p}} .$$

Each load current can only range from 0 to $I_{SS}$:

- $I_D \to 0$ (the other side takes all the current): $V_{out} \to V_{DD} - |V_{THP}| = 3 - 0.8 = 2.2$ V;
- $I_D = I_{SS} = 1$ mA: $V_{out} = 2.2 - \sqrt{2(1\ \mathrm{mA})/(1.92\ \mathrm{mA/V^2})} = 2.2 - 1.021 = 1.18$ V;
- at equilibrium (0.5 mA): $V_{out} = 2.2 - \sqrt{2(0.5)/1.92} = 2.2 - 0.722 = 1.48$ V (the output common-mode level).

So each output can only move between **1.18 V and 2.2 V**. The lower end is well above both input-device limits (0.673 V at balance, about 0.85 V at full steering), so the input pair never leaves saturation: **the diode loads, not the input pair, set the swing**.

### Step 6 — Maximum swing

- Single-ended: $2.2 - 1.18 = 1.02$ V peak-to-peak per output.
- Differential: at full steering one output is at 2.2 V and the other at 1.18 V, so $V_{out1} - V_{out2}$ reaches $\pm 1.02$ V, i.e. about **2.0 V peak-to-peak**.

The naive range from $V_{DD} - |V_{THP}|$ = 2.2 V down to $V_{in,CM} - V_{TH1}$ = 0.673 V (1.53 V per output) is *not* reachable: going below 1.18 V would require a diode current larger than the whole tail current.

### Result

- **Differential gain:** $|A_v| = g_{m1}(1/g_{m3}\parallel r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(651\ \Omega) \approx 2.4$, or $g_{m1}/g_{m3} = 2.64$ if $\lambda$ is neglected.
- **Minimum input CM level:** $V_{in,CM,min} = 0.4 + 0.273 + 0.786 \approx 1.46$ V (1.37 V without body effect).
- **Maximum output swing:** limited by the diode-connected loads. Each output moves only between $V_{DD} - |V_{THP}| - \sqrt{2I_{SS}/\beta_p} \approx 1.18$ V and $V_{DD} - |V_{THP}| = 2.2$ V, about 1.0 V peak-to-peak single-ended. The differential output reaches ±1.02 V, about 2.0 V peak-to-peak.

**Common mistake.** Using the gain formula of a current-source load, $g_{m1}(r_{O1}\parallel r_{O3}) \approx 24$. A diode-connected load presents only $1/g_{m3} \approx 0.72$ kΩ, so the gain is about 2.4.

**Common mistake.** Letting the outputs swing up to $V_{DD}$, or down to 0.673 V without checking whether the load can get there. A diode-connected PMOS cannot pull its drain above $V_{DD} - |V_{THP}|$, nor below 1.18 V with at most 1 mA available.

**Common mistake.** Computing the minimum common-mode level without the 0.4-V tail headroom (giving only $V_{GS1} \approx 1.0$ V), or without the body effect on $V_{TH1}$, which raises it by 86 mV.
