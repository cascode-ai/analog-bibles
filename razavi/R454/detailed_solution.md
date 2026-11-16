# Detailed solution - R454

**Approach.** The output node is the drain of the NMOS common-source device $M_5$ and of the PMOS current source $M_6$. Both must stay saturated over the whole output swing, so the swing specification fixes the sum of their overdrive voltages. Splitting that budget equally and using the square law with the 1-mA output-stage current gives the two aspect ratios.

### Step 1 — The topology and the current budget

From the figure:

- **First stage:** PMOS input pair $M_1$–$M_2$ with tail current source $M_7$ (gate at $V_b$), and NMOS current-mirror load $M_3$ (diode-connected, at node X) and $M_4$ (at node Y).
- **Second stage:** NMOS common-source (CS) device $M_5$, with its gate at Y and its source grounded, loaded by the PMOS current source $M_6$ (gate at $V_b$, source at $V_{DD}$). The output is the common drain of $M_5$ and $M_6$.

The power budget allows a total supply current of

$$I_{total} = \frac{P}{V_{DD}} = \frac{6\ \mathrm{mW}}{3\ \mathrm{V}} = 2\ \mathrm{mA}.$$

We are told to give 1 mA to the output stage, so

$$I_{D5} = I_{D6} = 1\ \mathrm{mA},$$

and the remaining 1 mA is available for the first stage (the tail $M_7$).

### Step 2 — Swing budget: the overdrives of $M_5$ and $M_6$

We use the square law in saturation, $I_D = \tfrac12\mu C_{ox}(W/L)V_{ov}^2$, where $V_{ov} = |V_{GS}| - |V_{TH}|$ is the overdrive voltage.

**Lowest output voltage ($M_5$ saturated).** An NMOS is saturated when $V_{DS} \ge V_{ov}$. The source of $M_5$ is grounded, so $V_{DS5} = V_{out}$ and

$$V_{out} \ge V_{ov5} .$$

**Highest output voltage ($M_6$ saturated).** A PMOS is saturated when $V_{SD} \ge |V_{ov}|$. The source of $M_6$ is at $V_{DD}$, so $V_{SD6} = V_{DD} - V_{out}$ and

$$V_{out} \le V_{DD} - |V_{ov6}| .$$

**Swing.** The output can therefore move over $V_{DD} - |V_{ov6}| - V_{ov5}$. Requiring at least 2.5 V p-p:

$$
\begin{aligned}
V_{DD} - |V_{ov6}| - V_{ov5} &\ge 2.5\ \mathrm{V}\\
V_{ov5} + |V_{ov6}| &\le 3\ \mathrm{V} - 2.5\ \mathrm{V} = 0.5\ \mathrm{V}.
\end{aligned}
$$

**Equal split** (as specified):

$$V_{ov5} = |V_{ov6}| = \frac{0.5\ \mathrm{V}}{2} = 0.25\ \mathrm{V}.$$

Only overdrives appear, not full gate-source voltages: the output is a drain node, and a drain only needs to stay one overdrive away from the rail its source is tied to.

### Step 3 — Aspect ratio of $M_5$ (NMOS)

Rearranging the square law, $W/L = 2I_D/(\mu C_{ox}V_{ov}^2)$:

$$
\begin{aligned}
\left(\frac{W}{L}\right)_5 &= \frac{2I_{D5}}{\mu_nC_{ox}V_{ov5}^2}\\
&= \frac{2\,(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2}\\
&= \frac{2\times10^{-3}}{(134\times10^{-6})(0.0625)}\\
&= \frac{2\times10^{-3}}{8.375\times10^{-6}}\\
&= 239 .
\end{aligned}
$$

With $L = 0.5\ \mu\mathrm{m}$: $W_5 = 239\times0.5\ \mu\mathrm{m} \approx 119\ \mu\mathrm{m}$.

### Step 4 — Aspect ratio of $M_6$ (PMOS)

$$
\begin{aligned}
\left(\frac{W}{L}\right)_6 &= \frac{2I_{D6}}{\mu_pC_{ox}|V_{ov6}|^2}\\
&= \frac{2\,(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2}\\
&= \frac{2\times10^{-3}}{(38.4\times10^{-6})(0.0625)}\\
&= \frac{2\times10^{-3}}{2.4\times10^{-6}}\\
&= 833 .
\end{aligned}
$$

With $L = 0.5\ \mu\mathrm{m}$: $W_6 = 833\times0.5\ \mu\mathrm{m} \approx 417\ \mu\mathrm{m}$.

$M_6$ is about 3.5 times wider than $M_5$ only because the hole mobility is lower ($134/38.4 = 3.5$). That is acceptable, as the problem notes: the gate of $M_6$ sits at the fixed bias $V_b$, so its large gate capacitance does not load any signal node. The gate-source capacitance of $M_5$, by contrast, loads node Y (the first-stage output), which is why $M_5$ should not be made larger than necessary.

### Step 5 — Resulting bias voltages (consistency check)

- $V_{GS5} = V_{TH,n} + V_{ov5} = 0.7 + 0.25 = 0.95$ V. This must be the DC level of node Y. In a pair with a mirror load, Y sits (when balanced) at the diode voltage $V_{GS3}$, so $M_3$, $M_4$ should later be sized to give $V_{GS3} = 0.95$ V (the same current density as $M_5$) to avoid a systematic offset.
- $|V_{GS6}| = |V_{TH,p}| + |V_{ov6}| = 0.8 + 0.25 = 1.05$ V, so $V_b = 3 - 1.05 = 1.95$ V. $M_7$ shares this bias.
- Both devices have $g_m = 2I_D/V_{ov} = 2(1\ \mathrm{mA})/0.25\ \mathrm{V} = 8$ mS.

### Result

With $V_{ov5} = |V_{ov6}| = 0.25$ V (from $V_{ov5} + |V_{ov6}| \le 3 - 2.5 = 0.5$ V) and $I_D = 1$ mA:

$$\left(\frac{W}{L}\right)_5 = \frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2} \approx 239, \qquad \left(\frac{W}{L}\right)_6 = \frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2} \approx 833,$$

i.e. $W_5 \approx 119\ \mu\mathrm{m}$ and $W_6 \approx 417\ \mu\mathrm{m}$ with $L = 0.5\ \mu\mathrm{m}$.

**Common mistake.** Reading the 2.5-V swing as $\pm2.5$ V (5 V p-p), which is impossible with a 3-V supply. Peak-to-peak means the total excursion, which leaves $3 - 2.5 = 0.5$ V for the two overdrives.

**Common mistake.** Writing the swing limits with full gate-source voltages, e.g. $V_{out} \ge V_{GS5}$. Saturation of $M_5$ requires $V_{DS5} \ge V_{GS5} - V_{TH}$, i.e. only the overdrive.

**Common mistake.** Using $\mu_nC_{ox}$ for the PMOS $M_6$ (giving $W/L \approx 239$) or $\mu_pC_{ox}$ for the NMOS $M_5$. Each device's own mobility must be used; the PMOS needs about 3.5 times the width for the same current and overdrive.
