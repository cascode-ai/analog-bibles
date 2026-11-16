# Detailed solution - R438

**Approach.** Nodes X and Y are the outputs of the first (telescopic cascode) stage, but they are also the gates of the second-stage PMOS devices $M_9$ and $M_{10}$. Since $M_9$ and $M_{10}$ must carry 0.5 mA each, their source-gate voltage is fixed by the square law, and that fixes the DC voltage at X and Y.

### Step 1 — What X and Y are connected to

Reading the figure:

- **First stage.** A telescopic cascode: input pair $M_1$–$M_2$ with tail current $I_{SS}$, NMOS cascodes $M_3$–$M_4$ (gates at $V_{b1}$), and PMOS cascode current-source loads $M_5$–$M_8$ (gates at $V_{b2}$ and $V_{b3}$). Its outputs are X (drains of $M_3$ and $M_5$) and Y (drains of $M_4$ and $M_6$).
- **Second stage.** PMOS common-source devices $M_9$ (gate at X) and $M_{10}$ (gate at Y) with sources at $V_{DD}$, loaded by NMOS current sources $M_{11}$ and $M_{12}$ (gates at $V_{b4}$).

So X and Y are **DC-coupled** to the gates of $M_9$ and $M_{10}$. Whatever DC voltage sits at X directly sets $|V_{GS9}| = V_{DD} - V_X$, and therefore the current of $M_9$. The second stage is biased at 0.5 mA per side only if X and Y sit at the right level.

### Step 2 — Overdrive of $M_9$ for 0.5 mA

$M_9$ is in saturation (it is the amplifying device of the output stage), so the square law applies, with channel-length modulation ignored as instructed:

$$I_{D9} = \frac12\,\mu_pC_{ox}\left(\frac{W}{L}\right)_9|V_{ov9}|^2 ,$$

where $|V_{ov9}| = |V_{GS9}| - |V_{TH,p}|$ is the overdrive voltage. The aspect ratio is

$$\left(\frac{W}{L}\right)_9 = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200 .$$

Solve for the overdrive:

$$
\begin{aligned}
|V_{ov9}| &= \sqrt{\frac{2I_{D9}}{\mu_pC_{ox}(W/L)_9}}\\
&= \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{\frac{1.0\times10^{-3}\ \mathrm{A}}{7.68\times10^{-3}\ \mathrm{A/V^2}}}\\
&= \sqrt{0.1302\ \mathrm{V^2}}\\
&= 0.361\ \mathrm{V}.
\end{aligned}
$$

### Step 3 — Source-gate voltage of $M_9$

The threshold voltage of $M_9$ equals $V_{TH0}$: its source and its n-well (bulk) are both tied to $V_{DD}$, so $V_{SB} = 0$ and there is **no body effect**. Hence

$$
\begin{aligned}
|V_{GS9}| &= |V_{TH,p}| + |V_{ov9}|\\
&= 0.8\ \mathrm{V} + 0.361\ \mathrm{V}\\
&= 1.161\ \mathrm{V}.
\end{aligned}
$$

### Step 4 — Required common-mode level at X and Y

The gate of $M_9$ is node X and its source is at $V_{DD}$, so $|V_{GS9}| = V_{DD} - V_X$. Solving for $V_X$:

$$
\begin{aligned}
V_X &= V_{DD} - |V_{GS9}|\\
&= 3\ \mathrm{V} - 1.161\ \mathrm{V}\\
&= 1.839\ \mathrm{V}.
\end{aligned}
$$

By symmetry ($M_{10}$ is identical to $M_9$ and also carries 0.5 mA), the same holds for Y:

$$V_{X,CM} = V_{Y,CM} \approx 1.84\ \mathrm{V}.$$

### Step 5 — How sensitive the second-stage current is to this level

To see why this level must be held accurately, suppose X sits 50 mV too low, at 1.789 V. Then $|V_{ov9}| = 0.361 + 0.050 = 0.411$ V, and by the square law the current scales with the overdrive squared:

$$I_{D9} = 0.5\ \mathrm{mA}\times\left(\frac{0.411\ \mathrm{V}}{0.361\ \mathrm{V}}\right)^2 = 0.5\ \mathrm{mA}\times1.296 \approx 0.65\ \mathrm{mA}.$$

A 50-mV error changes the output-stage current by about 30 %. Moreover, X is a high-impedance node of a cascode stage, so its DC level is not naturally well defined. In practice a common-mode feedback (CMFB) loop sets the first-stage output CM level to $V_{DD} - |V_{GS9}|$.

### Step 6 — What this means for the first stage

The PMOS cascode load ($M_7$ on top of $M_5$) sits between $V_{DD}$ and X, so it has only

$$V_{DD} - V_X = |V_{GS9}| = 1.161\ \mathrm{V}$$

of headroom. Both $M_7$ and $M_5$ must remain saturated within it, which requires $|V_{ov7}| + |V_{ov5}| \le 1.161$ V (easily met with overdrives of a few hundred millivolts), and $V_{b2}$, $V_{b3}$ must be chosen accordingly. Below X, the NMOS cascode and the input pair use the remaining 1.84 V. The level is set by the *second* stage, and the first stage is designed around it, not the other way round.

### Result

$$V_{X,CM} = V_{Y,CM} = V_{DD} - |V_{GS9}| = 3\ \mathrm{V} - \left(0.8\ \mathrm{V} + \sqrt{\frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}}\right) = 3 - 1.161 \approx 1.84\ \mathrm{V}.$$

**Common mistake.** Using $W/L = 100$ instead of $100\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 200$. The overdrive becomes $0.51$ V and the answer 1.69 V, which is wrong by 150 mV.

**Common mistake.** Thinking the level is set by $M_{11}$/$M_{12}$, by $V_{b4}$, or by the first-stage cascode biases $V_{b1}$, $V_{b2}$. Those only need to be *compatible* with the level. The level itself is fixed by the requirement that the PMOS $M_9$, whose gate is X, carries 0.5 mA.

**Common mistake.** Writing $V_X = V_{DD} - |V_{TH9}| = 2.2$ V. A gate-source voltage equal to the threshold gives (in the square law) zero current; the 0.36-V overdrive needed for 0.5 mA must be added.
