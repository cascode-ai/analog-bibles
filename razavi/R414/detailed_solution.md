# Detailed solution - R414

**Approach.** Equal dc levels at input and output put the inverter at its switching threshold $V_M$, where both transistors are saturated and carry the same current. Find $V_M$ and $I_D$ from the square law, compute $g_m$ and $r_O$ of both devices, and use the small-signal model: both gates are driven by $V_{in}$, so the two transconductances add.

### Step 1 — Bias point: $V_{in} = V_{out} = V_M$

Each device has $V_{DS} = V_{GS}$ ($|V_{DS}| = |V_{GS}|$ for the PMOS), so both are saturated. Using the square law without $\lambda$ for the bias, the two drain currents must be equal:

$$\frac12\mu_nC_{ox}\frac WL\,(V_M - V_{THN})^2 = \frac12\mu_pC_{ox}\frac WL\,(V_{DD} - V_M - |V_{THP}|)^2 .$$

With $V_{DD} - |V_{THP}| = 3 - 0.8 = 2.2$ V and the common factors cancelled:

$$134\,(V_M - 0.7)^2 = 38.4\,(2.2 - V_M)^2 .$$

Both brackets are positive, so

$$
\begin{aligned}
\sqrt{\frac{134}{38.4}}\,(V_M - 0.7) &= 2.2 - V_M\\
1.868\,(V_M - 0.7) &= 2.2 - V_M\\
2.868\,V_M &= 2.2 + 1.308 = 3.508\\
V_M &= 1.223\ \mathrm{V}.
\end{aligned}
$$

$$V_{ov1} = V_M - 0.7 = 0.523\ \mathrm{V},\qquad |V_{ov2}| = 2.2 - V_M = 0.977\ \mathrm{V}.$$

With $W/L = 50/0.5 = 100$:

$$I_D = \frac12(134\ \mu\mathrm{A/V^2})(100)(0.523\ \mathrm{V})^2 = (6.7\ \mathrm{mA/V^2})(0.2735\ \mathrm{V^2}) = 1.83\ \mathrm{mA}.$$

Check with the PMOS: $\tfrac12(38.4\ \mu\mathrm{A/V^2})(100)(0.977\ \mathrm{V})^2 = (1.92\ \mathrm{mA/V^2})(0.9545\ \mathrm{V^2}) = 1.83$ mA. ✓

### Step 2 — Small-signal parameters

$$
\begin{aligned}
g_{m1} &= \frac{2I_D}{V_{ov1}} = \frac{2(1.83\ \mathrm{mA})}{0.523\ \mathrm{V}} = 7.01\ \mathrm{mS},\\
g_{m2} &= \frac{2I_D}{|V_{ov2}|} = \frac{2(1.83\ \mathrm{mA})}{0.977\ \mathrm{V}} = 3.75\ \mathrm{mS},\\
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(1.83\ \mathrm{mA})} = 5.46\ \mathrm{k\Omega},\\
r_{O2} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1.83\ \mathrm{mA})} = 2.73\ \mathrm{k\Omega},\\
r_{O1}\parallel r_{O2} &= \frac{5.46\times2.73}{5.46 + 2.73}\ \mathrm{k\Omega} = 1.82\ \mathrm{k\Omega}.
\end{aligned}
$$

### Step 3 — Voltage gain

$M_1$ draws $g_{m1}v_{in}$ out of the output node. $M_2$'s source is at ac ground, so it delivers $g_{m2}(0 - v_{in})$ into the output, i.e. it also draws $g_{m2}v_{in}$ out. With $r_{O1}$ and $r_{O2}$ to ac ground, KCL at the output gives

$$
\begin{aligned}
g_{m1}v_{in} + g_{m2}v_{in} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}} &= 0\\
v_{out}\,\frac{1}{r_{O1}\parallel r_{O2}} &= -(g_{m1} + g_{m2})\,v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= -(g_{m1} + g_{m2})\,(r_{O1}\parallel r_{O2}) ,
\end{aligned}
$$

$$A_v = -(7.01 + 3.75)\ \mathrm{mS}\times1.82\ \mathrm{k\Omega} = -(10.76\ \mathrm{mS})(1.82\ \mathrm{k\Omega}) = -19.6 .$$

When $V_{in}$ rises, $M_1$ pulls harder *and* $M_2$ pushes less, so the transconductances add.

### Step 4 — Output impedance

With $v_{in} = 0$ both controlled sources vanish, leaving the two output resistances to ac ground:

$$R_{out} = r_{O1}\parallel r_{O2} = 1.82\ \mathrm{k\Omega}.$$

### Step 5 — Remark: keeping $\lambda$ in the bias calculation

With $I_D = \tfrac12\mu C_{ox}(W/L)V_{ov}^2(1 + \lambda|V_{DS}|)$ in the bias, a numerical solution gives $V_M \approx 1.254$ V and $I_D \approx 2.32$ mA. Consistent derivatives ($g_m = 2I_D/V_{ov}$, giving 8.36 and 4.90 mS, and $g_o = \lambda I_D/(1 + \lambda|V_{DS}|)$) then give $A_v \approx -24.1$ and $R_{out} \approx 1.82\ \mathrm{k\Omega}$; the shortcut $g_o = \lambda I_D$ gives about −19.1 and 1.44 kΩ. This sensitivity reflects how strongly a high-gain inverter's operating point depends on device details; the standard square-law result (−19.6, 1.82 kΩ) is the intended level of modelling.

### Result

Bias: $V_{in} = V_{out} = V_M = 1.22$ V, $I_D = 1.83$ mA, $g_{m1} = 7.01$ mS, $g_{m2} = 3.75$ mS, $r_{O1} = 5.46\ \mathrm{k\Omega}$, $r_{O2} = 2.73\ \mathrm{k\Omega}$.

$$A_v = -(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2}) \approx -19.6,\qquad R_{out} = r_{O1}\parallel r_{O2} \approx 1.82\ \mathrm{k\Omega}.$$

**Common mistake.** Treating $M_2$ as a passive current-source load, $A_v = -g_{m1}(r_{O1}\parallel r_{O2}) \approx -12.7$. The gate of $M_2$ is driven by $V_{in}$, so $g_{m2}$ adds to $g_{m1}$.

**Common mistake.** Assuming $V_M = V_{DD}/2 = 1.5$ V. The NMOS is about 3.5 times stronger ($\mu_nC_{ox}/\mu_pC_{ox} = 3.49$) and the thresholds differ, so $V_M$ is pulled down to 1.22 V.

**Common mistake.** Adding the output resistances in series ($r_{O1} + r_{O2}$). Both connect the output to an ac ground, so they appear in *parallel*.
