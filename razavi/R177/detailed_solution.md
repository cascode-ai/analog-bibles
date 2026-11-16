# Detailed solution - R177

**Approach.** (1) With PMOS current-source loads, each output node sees only output resistances, so the half-circuit gain is $g_{m1}(r_{O1}\parallel r_{O3})$. (2) The minimum input common-mode level stacks the 0.4-V tail headroom, the overdrive of $M_1$ and its body-affected threshold. (3) Each output may move between the point where $M_1$ leaves saturation (bottom) and the point where the PMOS current source $M_3$ leaves saturation (top).

### Step 1 — Small-signal parameters

At equilibrium each branch carries $I_{SS}/2 = 0.5$ mA, and $V_b$ is set so that each PMOS load also carries 0.5 mA.

**Input devices** ($\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2}$):

$$
\begin{aligned}
g_{m1} &= \sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
r_{O1} &= \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .
\end{aligned}
$$

**PMOS loads** ($\lambda_p = 0.2\ \mathrm{V^{-1}}$, used as given for $L = 1\ \mu$m):

$$r_{O3} = \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .$$

### Step 2 — Differential voltage gain

For a small differential input the tail node $P$ is an AC ground. Each half is then a common-source stage: $M_1$, a current source $g_{m1}v_{gs1}$ in parallel with $r_{O1}$, drives node $X$. Its load is $M_3$, whose gate ($V_b$) and source ($V_{DD}$) are both AC grounds, so $M_3$ contributes only its output resistance $r_{O3}$. Summing the currents leaving $X$:

$$
\begin{aligned}
g_{m1}\frac{v_{in}}{2} + \frac{v_X}{r_{O1}} + \frac{v_X}{r_{O3}} &= 0\\
v_X &= -g_{m1}(r_{O1}\parallel r_{O3})\frac{v_{in}}{2},
\end{aligned}
$$

and $v_Y = -v_X$ by symmetry, so

$$
\begin{aligned}
|A_v| = \left|\frac{v_X - v_Y}{v_{in}}\right| &= g_{m1}(r_{O1}\parallel r_{O3}),\\
r_{O1}\parallel r_{O3} &= \frac{(20)(10)}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega,\\
|A_v| &= (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 24.4 .
\end{aligned}
$$

This is about ten times the gain obtained with diode-connected loads of the same size, because the load is now a high output resistance rather than $1/g_{m3}$.

### Step 3 — Minimum input common-mode level

The tail needs $V_P \ge 0.4$ V. The input devices sit $V_{GS1} = V_{TH1} + V_{ov1}$ above $P$:

$$V_{ov1} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V}.$$

The source of $M_1$ is 0.4 V above its grounded bulk, so

$$V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + 0.4} - \sqrt{0.9}\right) = 0.7 + 0.45(1.1402 - 0.9487) = 0.786\ \mathrm{V},$$

$$V_{in,CM,min} = 0.4 + 0.273 + 0.786 = 1.46\ \mathrm{V}.$$

(Without body effect: 1.37 V.)

### Step 4 — Lower limit of each output

$M_1$ must stay saturated, $V_{DS1} \ge V_{GS1} - V_{TH1}$, i.e. $V_X \ge V_{in,CM} - V_{TH1}$ (the input swing is small). With $V_{in,CM} = 1.46$ V:

$$V_{out,min} = 1.46 - 0.786 = 0.673\ \mathrm{V},$$

which is simply $V_P + V_{ov1} = 0.4 + 0.273$ V.

### Step 5 — Upper limit of each output

$M_3$ must stay saturated as a current source: $V_{SD3} \ge |V_{GS3}| - |V_{TH3}|$, its overdrive. With 0.5 mA and $\mu_pC_{ox}(W/L)_3 = (38.4\ \mu\mathrm{A/V^2})(50/1) = 1.92\ \mathrm{mA/V^2}$:

$$|V_{GS3} - V_{TH3}| = \sqrt{\frac{2(0.5\ \mathrm{mA})}{1.92\ \mathrm{mA/V^2}}} = \sqrt{0.521\ \mathrm{V^2}} = 0.722\ \mathrm{V},$$

$$V_{out,max} = V_{DD} - |V_{GS3} - V_{TH3}| = 3 - 0.722 = 2.278\ \mathrm{V}.$$

### Step 6 — Maximum swing

$$
\begin{aligned}
\text{per output:}\quad & V_{out,max} - V_{out,min} = 2.278 - 0.673 = 1.61\ \mathrm{V}\ \text{peak-to-peak},\\
\text{differential:}\quad & 2\times 1.61 = 3.21\ \mathrm{V}\ \text{peak-to-peak}.
\end{aligned}
$$

To obtain the full symmetric swing, the output common-mode level must sit at the midpoint, $(2.278 + 0.673)/2 \approx 1.48$ V. With current-source loads this level is not fixed by the circuit itself (the output nodes are high-impedance), so in practice common-mode feedback must hold it there.

### Result

- **Gain:** $|A_v| = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) \approx 24.4$.
- **Minimum input CM level:** $V_{in,CM,min} = 0.4 + 0.273 + 0.786 \approx 1.46$ V (1.37 V without body effect).
- **Maximum swing:** each output from $V_{in,CM} - V_{TH1} = 0.673$ V to $V_{DD} - |V_{GS3} - V_{TH3}| = 2.28$ V, i.e. about 1.6 V peak-to-peak single-ended, or about 3.2 V peak-to-peak differential (with the output CM level held near 1.48 V).

**Common mistake.** Using the diode-load formula $g_{m1}/g_{m3}$. Here the gates of $M_3$, $M_4$ are at a fixed $V_b$, not tied to the drains, so the loads are current sources with resistance $r_{O3}$, not $1/g_{m3}$.

**Common mistake.** Taking the upper output limit as $V_{DD}$ or $V_{DD} - |V_{THP}|$. A PMOS current source stays saturated only while its source–drain voltage exceeds its *overdrive* (0.72 V), so the output can rise to 2.28 V and no further.

**Common mistake.** Computing the PMOS overdrive with $\mu_nC_{ox}$. The loads are PMOS devices with $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$, which gives the 0.72-V overdrive.
