# Detailed solution - R436

**Approach.** By symmetry the differential gain equals the gain of one half circuit: a common-source (CS) stage $M_1$ loaded by $M_3$, followed by a CS stage $M_5$ loaded by $M_7$. Compute $g_m$ and $r_O$ of each device, multiply the two stage gains, and find the output swing from the saturation limits of $M_5$ and $M_7$.

### Step 1 — Bias currents and aspect ratio

The tail current divides equally, and each load carries the current of the device it serves:

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA},$$

$$I_{D5} = I_{D6} = I_{D7} = I_{D8} = 1\ \mathrm{mA}\quad\text{(given)}.$$

Every transistor has

$$\frac{W}{L} = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200 .$$

All devices are saturated (given); $\lambda$ is neglected in the bias calculations and used only for the output resistances.

### Step 2 — Small-signal parameters of the first stage ($M_1$, $M_3$)

$$
\begin{aligned}
g_{m1} &= \sqrt{2\,\mu_nC_{ox}\,(W/L)\,I_{D1}}\\
&= \sqrt{2\,(134\ \mu\mathrm{A/V^2})\,(200)\,(0.5\ \mathrm{mA})}\\
&= \sqrt{26.8\times10^{-6}\ \mathrm{A^2/V^2}}\\
&= 5.18\ \mathrm{mS},
\end{aligned}
$$

$$
\begin{aligned}
r_{O1} &= \frac{1}{\lambda_n I_{D1}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{\lambda_p I_{D3}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega.
\end{aligned}
$$

Node X sees the two drains (the gate of $M_5$ draws no current):

$$R_X = r_{O1}\parallel r_{O3} = \frac{(20\ \mathrm{k}\Omega)(10\ \mathrm{k}\Omega)}{20\ \mathrm{k}\Omega + 10\ \mathrm{k}\Omega} = 6.67\ \mathrm{k}\Omega .$$

### Step 3 — Small-signal parameters of the second stage ($M_5$, $M_7$)

$$
\begin{aligned}
g_{m5} &= \sqrt{2\,\mu_pC_{ox}\,(W/L)\,I_{D5}}\\
&= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})\,(200)\,(1\ \mathrm{mA})}\\
&= \sqrt{15.36\times10^{-6}\ \mathrm{A^2/V^2}}\\
&= 3.92\ \mathrm{mS},
\end{aligned}
$$

$$
\begin{aligned}
r_{O5} &= \frac{1}{\lambda_p I_{D5}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\\
r_{O7} &= \frac{1}{\lambda_n I_{D7}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,
\end{aligned}
$$

$$R_{out} = r_{O5}\parallel r_{O7} = \frac{(5\ \mathrm{k}\Omega)(10\ \mathrm{k}\Omega)}{5\ \mathrm{k}\Omega + 10\ \mathrm{k}\Omega} = 3.33\ \mathrm{k}\Omega .$$

### Step 4 — The half circuit and the gain of each stage

For a differential input the gates move by $\pm v_{in}/2$ and the common source node P is a virtual ground, so the differential gain $(v_{out1} - v_{out2})/v_{in}$ equals the half-circuit gain $v_{out1}/(v_{in}/2)$. In the half circuit, $M_1$ draws $g_{m1}v_{in1}$ (with $v_{in1} = v_{in}/2$) from X, across $r_{O1}\parallel r_{O3}$; $M_5$, with its source at ac ground, draws $g_{m5}v_X$ from out1 (its drain current into out1 is $g_{m5}v_{sg5} = -g_{m5}v_X$), across $r_{O5}\parallel r_{O7}$.

<!-- diagram: diagram-01.cir -->

**First stage (KCL at X):**

$$
\begin{aligned}
g_{m1}v_{in1} + \frac{v_X}{R_X} &= 0\\
v_X &= -g_{m1}R_X\,v_{in1}\\
A_1 = \left|\frac{v_X}{v_{in1}}\right| &= g_{m1}(r_{O1}\parallel r_{O3}) = (5.18\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 34.5 .
\end{aligned}
$$

**Second stage (KCL at out1):**

$$
\begin{aligned}
g_{m5}v_X + \frac{v_{out1}}{R_{out}} &= 0\\
v_{out1} &= -g_{m5}R_{out}\,v_X\\
A_2 = \left|\frac{v_{out1}}{v_X}\right| &= g_{m5}(r_{O5}\parallel r_{O7}) = (3.92\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = 13.1 .
\end{aligned}
$$

### Step 5 — Overall differential gain

The two inversions cancel, so $V_{out1}$ moves in the same direction as the gate of $M_1$:

$$
\begin{aligned}
v_{out1} &= -g_{m5}R_{out}\,v_X = -g_{m5}R_{out}\,(-g_{m1}R_X\,v_{in1}) = A_1A_2\,\frac{v_{in}}{2}\\
v_{out2} &= A_1A_2\left(-\frac{v_{in}}{2}\right) \quad\text{(mirror-image half)}\\
v_{out1} - v_{out2} &= A_1A_2\,v_{in}\\
\frac{v_{out1} - v_{out2}}{v_{in}} &= g_{m1}(r_{O1}\parallel r_{O3})\cdot g_{m5}(r_{O5}\parallel r_{O7}) = A_1A_2 .
\end{aligned}
$$

Numerically:

$$A_v = 34.5\times13.1 \approx 451 .$$

The gain is moderate because $\lambda$ is large and the bias currents are high: the intrinsic gain of $M_1$ is only $g_{m1}r_{O1} = 5.18\ \mathrm{mS}\times20\ \mathrm{k}\Omega \approx 104$, and $r_{O3}$ in parallel cuts the first-stage gain to 34.5.

### Step 6 — Output swing: the limits set by $M_7$ and $M_5$

$V_{out1}$ is the drain of both $M_5$ (source at $V_{DD}$) and $M_7$ (source at ground), and both must stay saturated.

**Lower limit.** $M_7$ needs $V_{DS7} = V_{out1} \ge V_{ov7}$, and at its fixed 1 mA:

$$
\begin{aligned}
V_{ov7} &= \sqrt{\frac{2I_{D7}}{\mu_nC_{ox}(W/L)}}\\
&= \sqrt{\frac{2\,(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{\frac{2\times10^{-3}}{26.8\times10^{-3}}}\ \mathrm{V} = \sqrt{0.0746}\ \mathrm{V}\\
&= 0.273\ \mathrm{V}.
\end{aligned}
$$

**Upper limit.** $M_5$ needs $V_{SD5} = V_{DD} - V_{out1} \ge |V_{ov5}|$, i.e. $V_{out1} \le V_{DD} - |V_{ov5}|$, with $I_{D5} = 1$ mA:

$$
\begin{aligned}
|V_{ov5}| &= \sqrt{\frac{2I_{D5}}{\mu_pC_{ox}(W/L)}}\\
&= \sqrt{\frac{2\,(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{\frac{2\times10^{-3}}{7.68\times10^{-3}}}\ \mathrm{V} = \sqrt{0.260}\ \mathrm{V}\\
&= 0.510\ \mathrm{V},
\end{aligned}
$$

so

$$V_{out1,max} = 3\ \mathrm{V} - 0.510\ \mathrm{V} = 2.49\ \mathrm{V}.$$

Only overdrives appear, because a drain node can come within one overdrive of its source rail; this is why a two-stage op amp swings much wider than a telescopic cascode.

**Internal bias check.** $|V_{GS5}| = |V_{TH,p}| + |V_{ov5}| = 0.8 + 0.51 = 1.31$ V, so X and Y sit at $3 - 1.31 = 1.69$ V. $M_3$ needs only $|V_{ov3}| = \sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2}\cdot200)} = 0.36$ V and has $V_{SD3} = 1.31$ V, so it is comfortably saturated.

### Step 7 — Peak-to-peak swing, single-ended and differential

Each output can move between

$$V_{ov7} = 0.273\ \mathrm{V} \quad\text{and}\quad V_{DD} - |V_{ov5}| = 2.490\ \mathrm{V},$$

so the single-ended peak-to-peak swing is

$$V_{DD} - |V_{ov5}| - V_{ov7} = 3 - 0.510 - 0.273 = 2.22\ \mathrm{V_{pp}} .$$

The two outputs move in opposite directions, so $V_{out1} - V_{out2}$ ranges from $-2.22$ V to $+2.22$ V:

$$V_{out,diff,pp} = 2\times2.22\ \mathrm{V} = 4.43\ \mathrm{V_{pp}} .$$

### Result

$$A_v = g_{m1}(r_{O1}\parallel r_{O3})\cdot g_{m5}(r_{O5}\parallel r_{O7}) = (5.18\ \mathrm{mS}\times6.67\ \mathrm{k}\Omega)(3.92\ \mathrm{mS}\times3.33\ \mathrm{k}\Omega) \approx 34.5\times13.1 \approx 450 .$$

Each output can swing from $V_{ov7} \approx 0.27$ V to $V_{DD} - |V_{ov5}| \approx 2.49$ V, i.e. **about 2.2 V p-p per output**, or **about 4.4 V p-p differential**.

**Common mistake.** Using $W/L = 100$ instead of $100/0.5 = 200$. Every $g_m$ then drops by $\sqrt2$, and the overall gain halves (to about 225).

**Common mistake.** Computing a stage gain with only one $r_O$, e.g. $g_{m1}r_{O1}$. Node X is loaded by both $M_1$ and $M_3$, so the resistance is $r_{O1}\parallel r_{O3}$ (likewise $r_{O5}\parallel r_{O7}$); also keep $\lambda_n = 0.1$ and $\lambda_p = 0.2\ \mathrm{V^{-1}}$ on the right devices.

**Common mistake.** Writing the swing limits with full gate-source voltages, e.g. an upper limit of $V_{DD} - |V_{GS5}| \approx 1.69$ V. That is the dc level of the gate node X; the output drain only has to stay one overdrive away from each rail.
