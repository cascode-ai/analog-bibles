# Detailed solution - R436

**Approach.** The op amp is fully differential and symmetric, so its differential gain equals the gain of one half circuit: a common-source (CS) stage $M_1$ loaded by $M_3$, followed by a CS stage $M_5$ loaded by $M_7$. We compute $g_m$ and $r_O$ of each device from the square law, multiply the two stage gains, and then find the output swing from the saturation conditions of the two output transistors $M_5$ and $M_7$.

### Step 1 — Reading the circuit and the bias currents

From the figure:

- **First stage.** NMOS differential pair $M_1$–$M_2$ with tail current $I_{SS}$. The loads are the PMOS current sources $M_3$ (drain at node X) and $M_4$ (drain at node Y), with gates tied to the bias voltage $V_{b1}$.
- **Second stage.** PMOS CS amplifiers $M_5$ (gate at X, drain at $V_{out1}$) and $M_6$ (gate at Y, drain at $V_{out2}$), with sources at $V_{DD}$. Their loads are the NMOS current sources $M_7$ and $M_8$ (gates at $V_{b2}$).
- The differential input $V_{in}$ is applied between the gates of $M_1$ and $M_2$; the differential output is $V_{out1} - V_{out2}$.

**Bias currents.** With no differential input the tail current divides equally, and each load carries the same current as the device below it:

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = \frac{1\ \mathrm{mA}}{2} = 0.5\ \mathrm{mA},$$

$$I_{D5} = I_{D6} = I_{D7} = I_{D8} = 1\ \mathrm{mA}\quad\text{(given)}.$$

**Aspect ratio** of every transistor:

$$\frac{W}{L} = \frac{100\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 200 .$$

All transistors are in saturation (given), so we use the square law $I_D = \tfrac12\mu C_{ox}(W/L)V_{ov}^2$, where $V_{ov} = V_{GS} - V_{TH}$ is the overdrive voltage. Channel-length modulation is neglected when computing bias quantities; $\lambda$ is used only for the output resistances.

### Step 2 — Small-signal parameters of the first stage ($M_1$, $M_3$)

**Transconductance of $M_1$.** From the square law, $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$:

$$
\begin{aligned}
g_{m1} &= \sqrt{2\,\mu_nC_{ox}\,(W/L)\,I_{D1}}\\
&= \sqrt{2\,(134\ \mu\mathrm{A/V^2})\,(200)\,(0.5\ \mathrm{mA})}\\
&= \sqrt{26.8\times10^{-6}\ \mathrm{A^2/V^2}}\\
&= 5.18\ \mathrm{mS}.
\end{aligned}
$$

**Output resistances.** Channel-length modulation gives $r_O = 1/(\lambda I_D)$, with $\lambda_n = 0.1\ \mathrm{V^{-1}}$ for NMOS and $\lambda_p = 0.2\ \mathrm{V^{-1}}$ for PMOS:

$$
\begin{aligned}
r_{O1} &= \frac{1}{\lambda_n I_{D1}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{\lambda_p I_{D3}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega.
\end{aligned}
$$

**Resistance at node X.** Two drains meet at X: $M_1$ (looking down) and $M_3$ (looking up). The gate of $M_5$ draws no current, so

$$R_X = r_{O1}\parallel r_{O3} = \frac{(20\ \mathrm{k}\Omega)(10\ \mathrm{k}\Omega)}{20\ \mathrm{k}\Omega + 10\ \mathrm{k}\Omega} = 6.67\ \mathrm{k}\Omega .$$

### Step 3 — Small-signal parameters of the second stage ($M_5$, $M_7$)

**Transconductance of $M_5$** (PMOS, $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$):

$$
\begin{aligned}
g_{m5} &= \sqrt{2\,\mu_pC_{ox}\,(W/L)\,I_{D5}}\\
&= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})\,(200)\,(1\ \mathrm{mA})}\\
&= \sqrt{15.36\times10^{-6}\ \mathrm{A^2/V^2}}\\
&= 3.92\ \mathrm{mS}.
\end{aligned}
$$

**Output resistances:**

$$
\begin{aligned}
r_{O5} &= \frac{1}{\lambda_p I_{D5}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\\
r_{O7} &= \frac{1}{\lambda_n I_{D7}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega.
\end{aligned}
$$

**Resistance at the output node:**

$$R_{out} = r_{O5}\parallel r_{O7} = \frac{(5\ \mathrm{k}\Omega)(10\ \mathrm{k}\Omega)}{5\ \mathrm{k}\Omega + 10\ \mathrm{k}\Omega} = 3.33\ \mathrm{k}\Omega .$$

### Step 4 — The half circuit and the gain of each stage

**Why a half circuit.** For a purely differential input, the gate of $M_1$ moves by $+v_{in}/2$ and the gate of $M_2$ by $-v_{in}/2$. The two halves inject equal and opposite small-signal currents into the common source node P, so P does not move: it is a **virtual ground**. Each side then behaves as a cascade of two CS stages, and the differential gain $(v_{out1} - v_{out2})/v_{in}$ equals the gain of one half, $v_{out1}/(v_{in}/2)$.

**Small-signal model of the half circuit** (described in words, see also the drawing):

- Input node "in" (gate of $M_1$, small-signal voltage $v_{in1} = v_{in}/2$), node X, node "out1", and ground (which represents $V_{DD}$, P, and every bias node).
- A controlled current source $g_{m1}v_{in1}$ from X to ground (the drain current of $M_1$), in parallel with $r_{O1}$ and $r_{O3}$.
- A controlled current source $g_{m5}v_X$ from out1 to ground (the PMOS $M_5$ has its source at AC ground, so its drain current into out1 is $g_{m5}v_{sg5} = -g_{m5}v_X$), in parallel with $r_{O5}$ and $r_{O7}$.

<!-- diagram: diagram-01.cir -->

**First stage: KCL at node X.** The current leaving X through the controlled source plus the current leaving through $R_X$ must be zero:

$$
\begin{aligned}
g_{m1}v_{in1} + \frac{v_X}{R_X} &= 0\\
v_X &= -g_{m1}R_X\,v_{in1}\\
A_1 = \left|\frac{v_X}{v_{in1}}\right| &= g_{m1}(r_{O1}\parallel r_{O3}) .
\end{aligned}
$$

Numerically:

$$A_1 = (5.18\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 34.5 .$$

**Second stage: KCL at node out1:**

$$
\begin{aligned}
g_{m5}v_X + \frac{v_{out1}}{R_{out}} &= 0\\
v_{out1} &= -g_{m5}R_{out}\,v_X\\
A_2 = \left|\frac{v_{out1}}{v_X}\right| &= g_{m5}(r_{O5}\parallel r_{O7}) .
\end{aligned}
$$

Numerically:

$$A_2 = (3.92\ \mathrm{mS})(3.33\ \mathrm{k}\Omega) = 13.1 .$$

### Step 5 — Overall differential gain

The two inversions cancel, so $V_{out1}$ moves in the same direction as the gate of $M_1$: raising that gate increases $I_{D1}$, which pulls X down; a lower X increases $|V_{GS5}|$, so $M_5$ conducts more and pulls $V_{out1}$ up. Combining the two stage equations:

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

The gain is moderate (not thousands) because the output resistances are small: $\lambda$ is large and the bias currents are high (0.5 mA and 1 mA). For example, the intrinsic gain of $M_1$ is $g_{m1}r_{O1} = 5.18\ \mathrm{mS}\times20\ \mathrm{k}\Omega \approx 104$, and the PMOS load $r_{O3}$ in parallel cuts the first-stage gain to 34.5.

### Step 6 — Output swing: the limits set by $M_7$ and $M_5$

The output node $V_{out1}$ is the drain of both $M_5$ (PMOS, source at $V_{DD}$) and $M_7$ (NMOS, source at ground). Both must stay saturated.

**Lower limit ($M_7$ saturated).** An NMOS is saturated when $V_{DS} \ge V_{GS} - V_{TH} = V_{ov}$. The source of $M_7$ is grounded, so $V_{DS7} = V_{out1}$ and

$$V_{out1} \ge V_{ov7} .$$

Since $M_7$ carries a fixed 1 mA, its overdrive follows from the square law:

$$
\begin{aligned}
V_{ov7} &= \sqrt{\frac{2I_{D7}}{\mu_nC_{ox}(W/L)}}\\
&= \sqrt{\frac{2\,(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}}\\
&= \sqrt{\frac{2\times10^{-3}}{26.8\times10^{-3}}}\ \mathrm{V} = \sqrt{0.0746}\ \mathrm{V}\\
&= 0.273\ \mathrm{V}.
\end{aligned}
$$

**Upper limit ($M_5$ saturated).** A PMOS is saturated when $V_{SD} \ge |V_{GS}| - |V_{TH}| = |V_{ov}|$. The source of $M_5$ is at $V_{DD}$, so $V_{SD5} = V_{DD} - V_{out1}$ and

$$V_{out1} \le V_{DD} - |V_{ov5}| .$$

With $I_{D5} = 1$ mA:

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

Only overdrives appear, not full gate-source voltages: the output is a *drain* node, and a drain can come within one overdrive of the source rail before the device leaves saturation. This is why the two-stage topology has a much wider swing than a telescopic cascode.

**Sanity check of the internal bias.** $|V_{GS5}| = |V_{TH,p}| + |V_{ov5}| = 0.8 + 0.51 = 1.31$ V, so X and Y sit at $3 - 1.31 = 1.69$ V. $M_3$ needs only $|V_{ov3}| = \sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2}\cdot200)} = 0.36$ V across it and has $V_{SD3} = 1.31$ V, so it is comfortably saturated.

### Step 7 — Peak-to-peak swing, single-ended and differential

Each output can move between

$$V_{ov7} = 0.273\ \mathrm{V} \quad\text{and}\quad V_{DD} - |V_{ov5}| = 2.490\ \mathrm{V},$$

so the single-ended peak-to-peak swing is

$$V_{DD} - |V_{ov5}| - V_{ov7} = 3 - 0.510 - 0.273 = 2.22\ \mathrm{V_{pp}} .$$

The two outputs move in opposite directions: when $V_{out1}$ is at its maximum, $V_{out2}$ is at its minimum. The differential output $V_{out1} - V_{out2}$ therefore ranges from $-2.22$ V to $+2.22$ V:

$$V_{out,diff,pp} = 2\times2.22\ \mathrm{V} = 4.43\ \mathrm{V_{pp}} .$$

### Result

$$A_v = g_{m1}(r_{O1}\parallel r_{O3})\cdot g_{m5}(r_{O5}\parallel r_{O7}) = (5.18\ \mathrm{mS}\times6.67\ \mathrm{k}\Omega)(3.92\ \mathrm{mS}\times3.33\ \mathrm{k}\Omega) \approx 34.5\times13.1 \approx 450 .$$

Each output can swing from $V_{ov7} \approx 0.27$ V to $V_{DD} - |V_{ov5}| \approx 2.49$ V, i.e. **about 2.2 V p-p per output**, or **about 4.4 V p-p differential**.

**Common mistake.** Using $W/L = 100$ instead of $100/0.5 = 200$. Every $g_m$ then drops by $\sqrt2$, and the overall gain drops by a factor of 2 (to about 225). Always form the ratio of the given width and length.

**Common mistake.** Computing a stage gain with only one $r_O$, e.g. $g_{m1}r_{O1}$. The node X is loaded by *both* the input transistor and the current-source load, so the resistance is $r_{O1}\parallel r_{O3}$; likewise $r_{O5}\parallel r_{O7}$ at the output. Also keep $\lambda_n = 0.1$ and $\lambda_p = 0.2\ \mathrm{V^{-1}}$ on the right devices.

**Common mistake.** Writing the swing limits with full gate-source voltages, e.g. an upper limit of $V_{DD} - |V_{GS5}| \approx 1.69$ V. That is the DC level of the *gate* node X, not a limit on the drain. The output drain only has to stay one overdrive away from each rail.
