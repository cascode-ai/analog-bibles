# Detailed solution - R438

**Approach.** X and Y, the outputs of the telescopic first stage, are dc-coupled to the gates of the second-stage PMOS devices $M_9$ and $M_{10}$. Since these must carry 0.5 mA each, their source-gate voltage is fixed by the square law, and that fixes the dc voltage at X and Y.

### Step 1 — Overdrive of $M_9$ for 0.5 mA

The voltage at X sets $|V_{GS9}| = V_{DD} - V_X$ and hence the current of $M_9$. With $M_9$ saturated and channel-length modulation ignored,

$$I_{D9} = \frac12\,\mu_pC_{ox}\left(\frac{W}{L}\right)_9|V_{ov9}|^2, \qquad \left(\frac{W}{L}\right)_9 = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200 ,$$

so

$$
\begin{aligned}
|V_{ov9}| &= \sqrt{\frac{2I_{D9}}{\mu_pC_{ox}(W/L)_9}}\\
&= \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{\frac{1.0\times10^{-3}\ \mathrm{A}}{7.68\times10^{-3}\ \mathrm{A/V^2}}}\\
&= \sqrt{0.1302\ \mathrm{V^2}}\\
&= 0.361\ \mathrm{V}.
\end{aligned}
$$

### Step 2 — Source-gate voltage of $M_9$

The source and n-well of $M_9$ are both at $V_{DD}$, so $V_{SB} = 0$ and there is no body effect:

$$
\begin{aligned}
|V_{GS9}| &= |V_{TH,p}| + |V_{ov9}|\\
&= 0.8\ \mathrm{V} + 0.361\ \mathrm{V}\\
&= 1.161\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Required common-mode level at X and Y

With the gate of $M_9$ at X and its source at $V_{DD}$, $|V_{GS9}| = V_{DD} - V_X$:

$$
\begin{aligned}
V_X &= V_{DD} - |V_{GS9}|\\
&= 3\ \mathrm{V} - 1.161\ \mathrm{V}\\
&= 1.839\ \mathrm{V}.
\end{aligned}
$$

$M_{10}$ is identical and also carries 0.5 mA, so

$$V_{X,CM} = V_{Y,CM} \approx 1.84\ \mathrm{V}.$$

### Step 4 — How sensitive the second-stage current is to this level

If X sits 50 mV too low, at 1.789 V, then $|V_{ov9}| = 0.361 + 0.050 = 0.411$ V and

$$I_{D9} = 0.5\ \mathrm{mA}\times\left(\frac{0.411\ \mathrm{V}}{0.361\ \mathrm{V}}\right)^2 = 0.5\ \mathrm{mA}\times1.296 \approx 0.65\ \mathrm{mA}.$$

A 50-mV error changes the output-stage current by about 30 %. Since X is a high-impedance node of a cascode stage, its dc level is not naturally well defined; in practice a common-mode feedback (CMFB) loop sets the first-stage output CM level to $V_{DD} - |V_{GS9}|$.

### Step 5 — What this means for the first stage

The PMOS cascode load ($M_7$ on top of $M_5$) between $V_{DD}$ and X has only

$$V_{DD} - V_X = |V_{GS9}| = 1.161\ \mathrm{V}$$

of headroom, so $|V_{ov7}| + |V_{ov5}| \le 1.161$ V (easily met with overdrives of a few hundred millivolts), with $V_{b2}$, $V_{b3}$ chosen accordingly. The NMOS cascode and the input pair below X use the remaining 1.84 V. The level is set by the *second* stage, and the first stage is designed around it.

### Result

$$V_{X,CM} = V_{Y,CM} = V_{DD} - |V_{GS9}| = 3\ \mathrm{V} - \left(0.8\ \mathrm{V} + \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}}\right) = 3 - 1.161 \approx 1.84\ \mathrm{V}.$$

**Common mistake.** Using $W/L = 100$ instead of $100\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 200$. The overdrive becomes $0.51$ V and the answer 1.69 V, wrong by 150 mV.

**Common mistake.** Thinking the level is set by $M_{11}$/$M_{12}$, $V_{b4}$, or the first-stage cascode biases $V_{b1}$, $V_{b2}$. These only need to be *compatible* with it; the level is fixed by $M_9$ having to carry 0.5 mA.

**Common mistake.** Writing $V_X = V_{DD} - |V_{TH9}| = 2.2$ V, which gives zero current; the 0.36-V overdrive needed for 0.5 mA must be added.
