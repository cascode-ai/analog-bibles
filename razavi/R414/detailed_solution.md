# Detailed solution - R414

**Approach.** "Equal dc levels at input and output" puts the inverter at its switching threshold $V_M$, where both transistors are saturated and carry the same current. Find $V_M$ and $I_D$ from the square law, compute $g_m$ and $r_O$ of both devices, and then use the small-signal model: both gates are driven by $V_{in}$, so the two transconductances add.

### Step 1 — The circuit

Reading the figure: $M_1$ (NMOS, source at ground) and $M_2$ (PMOS, source and bulk at $V_{DD}$) have their gates tied to $V_{in}$ and their drains tied to $V_{out}$. There is no feedback and no load other than the transistors themselves. Both devices have $W/L = 50/0.5 = 100$.

### Step 2 — Bias point: $V_{in} = V_{out} = V_M$

With $V_{in} = V_{out} = V_M$, each device has $V_{DS} = V_{GS}$ (for the PMOS, $|V_{DS}| = |V_{GS}|$), so both are saturated whenever they conduct. As usual for a bias calculation, use the square law without $\lambda$. Equate the two drain currents (KCL at the output, which carries no external current):

$$\frac12\mu_nC_{ox}\frac WL\,(V_M - V_{THN})^2 = \frac12\mu_pC_{ox}\frac WL\,(V_{DD} - V_M - |V_{THP}|)^2 .$$

Insert the numbers ($V_{DD} - |V_{THP}| = 3 - 0.8 = 2.2$ V) and cancel the common factors $\tfrac12$ and $W/L$:

$$134\,(V_M - 0.7)^2 = 38.4\,(2.2 - V_M)^2 .$$

Both brackets are positive, so take the square root of both sides:

$$
\begin{aligned}
\sqrt{\frac{134}{38.4}}\,(V_M - 0.7) &= 2.2 - V_M\\
1.868\,(V_M - 0.7) &= 2.2 - V_M\\
2.868\,V_M &= 2.2 + 1.308 = 3.508\\
V_M &= 1.223\ \mathrm{V}.
\end{aligned}
$$

**Overdrives:**

$$V_{ov1} = V_M - 0.7 = 0.523\ \mathrm{V},\qquad |V_{ov2}| = 2.2 - V_M = 0.977\ \mathrm{V}.$$

**Bias current:**

$$I_D = \frac12(134\ \mu\mathrm{A/V^2})(100)(0.523\ \mathrm{V})^2 = (6.7\ \mathrm{mA/V^2})(0.2735\ \mathrm{V^2}) = 1.83\ \mathrm{mA}.$$

Check with the PMOS: $\tfrac12(38.4\ \mu\mathrm{A/V^2})(100)(0.977\ \mathrm{V})^2 = (1.92\ \mathrm{mA/V^2})(0.9545\ \mathrm{V^2}) = 1.83$ mA. ✓

### Step 3 — Small-signal parameters

**Transconductances**, $g_m = 2I_D/|V_{ov}|$:

$$
\begin{aligned}
g_{m1} &= \frac{2(1.83\ \mathrm{mA})}{0.523\ \mathrm{V}} = 7.01\ \mathrm{mS},\\
g_{m2} &= \frac{2(1.83\ \mathrm{mA})}{0.977\ \mathrm{V}} = 3.75\ \mathrm{mS}.
\end{aligned}
$$

**Output resistances**, $r_O = 1/(\lambda I_D)$:

$$
\begin{aligned}
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1.83\ \mathrm{mA})} = 5.46\ \mathrm{k\Omega},\\
r_{O2} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1.83\ \mathrm{mA})} = 2.73\ \mathrm{k\Omega},\\
r_{O1}\parallel r_{O2} &= \frac{5.46\times2.73}{5.46 + 2.73}\ \mathrm{k\Omega} = 1.82\ \mathrm{k\Omega}.
\end{aligned}
$$

### Step 4 — Small-signal model and voltage gain

$V_{DD}$ and ground are both ac ground. The small-signal model has a single output node:

- $M_1$: a current $g_{m1}v_{in}$ flowing **out of** the output node to ground, plus $r_{O1}$ to ground.
- $M_2$: its source is at ac ground, so $v_{SG2} = 0 - v_{in}$ and it delivers $g_{m2}(0 - v_{in})$ **into** the output node. That is a current $g_{m2}v_{in}$ flowing out of the output node. Plus $r_{O2}$ to ac ground.

**KCL at the output** (currents leaving the node):

$$
\begin{aligned}
g_{m1}v_{in} + g_{m2}v_{in} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}} &= 0\\
v_{out}\,\frac{1}{r_{O1}\parallel r_{O2}} &= -(g_{m1} + g_{m2})\,v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -(g_{m1} + g_{m2})\,(r_{O1}\parallel r_{O2}) .
\end{aligned}
$$

**Numbers:**

$$A_v = -(7.01 + 3.75)\ \mathrm{mS}\times1.82\ \mathrm{k\Omega} = -(10.76\ \mathrm{mS})(1.82\ \mathrm{k\Omega}) = -19.6 .$$

**Intuition.** Unlike a common-source stage with a current-source load, here the "load" transistor $M_2$ is also driven by the input. When $V_{in}$ rises, $M_1$ pulls harder *and* $M_2$ pushes less, so both effects move the output down and the transconductances add.

### Step 5 — Output impedance

Set $v_{in} = 0$. Both controlled sources are then zero, and only the two output resistances remain between the output and ac ground:

$$R_{out} = r_{O1}\parallel r_{O2} = 1.82\ \mathrm{k\Omega}.$$

### Step 6 — Remark: keeping $\lambda$ in the bias calculation

If channel-length modulation is also kept in the bias equation, $I_D = \tfrac12\mu C_{ox}(W/L)V_{ov}^2(1 + \lambda|V_{DS}|)$, solving numerically gives $V_M \approx 1.254$ V and $I_D \approx 2.32$ mA. With consistent derivatives ($g_m = 2I_D/V_{ov}$, giving 8.36 and 4.90 mS, and $g_o = \lambda I_D/(1 + \lambda|V_{DS}|)$), this gives $A_v \approx -24.1$ and $R_{out} \approx 1.82\ \mathrm{k\Omega}$. Using the shortcut $g_o = \lambda I_D$ instead gives about −19.1 and 1.44 kΩ. The large sensitivity reflects how strongly a high-gain inverter's operating point depends on device details; the standard square-law result above (−19.6, 1.82 kΩ) is the intended level of modelling.

### Result

Bias: $V_{in} = V_{out} = V_M = 1.22$ V, $I_D = 1.83$ mA, $g_{m1} = 7.01$ mS, $g_{m2} = 3.75$ mS, $r_{O1} = 5.46\ \mathrm{k\Omega}$, $r_{O2} = 2.73\ \mathrm{k\Omega}$.

$$A_v = -(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2}) \approx -19.6,\qquad R_{out} = r_{O1}\parallel r_{O2} \approx 1.82\ \mathrm{k\Omega}.$$

**Common mistake.** Treating $M_2$ as a passive current-source load and writing $A_v = -g_{m1}(r_{O1}\parallel r_{O2}) \approx -12.7$. The gate of $M_2$ is connected to $V_{in}$, so $M_2$ also converts the input into output current; its $g_{m2}$ adds to $g_{m1}$.

**Common mistake.** Assuming $V_M = V_{DD}/2 = 1.5$ V. The NMOS is about 3.5 times stronger ($\mu_nC_{ox}/\mu_pC_{ox} = 3.49$) and the thresholds differ, so the switching threshold is pulled down to 1.22 V. At 1.5 V the two square-law currents would not match.

**Common mistake.** Adding the output resistances in series ($r_{O1} + r_{O2}$). With the input held at ac ground, both resistances connect the output to an ac ground ($V_{DD}$ or ground), so they appear in *parallel*.
