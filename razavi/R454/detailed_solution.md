# Detailed solution - R454

**Approach.** The output is the drain of the NMOS CS device $M_5$ and of the PMOS current source $M_6$. Both must stay saturated over the whole swing, so the swing fixes the sum of their overdrives; splitting it equally and using the 1-mA output-stage current gives the two aspect ratios.

### Step 1 — The current budget

The power budget allows

$$I_{total} = \frac{P}{V_{DD}} = \frac{6\ \mathrm{mW}}{3\ \mathrm{V}} = 2\ \mathrm{mA}.$$

With 1 mA given to the output stage,

$$I_{D5} = I_{D6} = 1\ \mathrm{mA},$$

and the remaining 1 mA is available for the first stage (the tail $M_7$).

### Step 2 — Swing budget: the overdrives of $M_5$ and $M_6$

$M_5$ (source grounded) stays saturated for $V_{out} \ge V_{ov5}$, and $M_6$ (source at $V_{DD}$) for $V_{out} \le V_{DD} - |V_{ov6}|$. The output can therefore move over $V_{DD} - |V_{ov6}| - V_{ov5}$, and a 2.5-V p-p swing requires

$$
\begin{aligned}
V_{DD} - |V_{ov6}| - V_{ov5} &\ge 2.5\ \mathrm{V}\\
V_{ov5} + |V_{ov6}| &\le 3\ \mathrm{V} - 2.5\ \mathrm{V} = 0.5\ \mathrm{V}.
\end{aligned}
$$

Splitting equally, as specified:

$$V_{ov5} = |V_{ov6}| = \frac{0.5\ \mathrm{V}}{2} = 0.25\ \mathrm{V}.$$

### Step 3 — Aspect ratio of $M_5$ (NMOS)

With $W/L = 2I_D/(\mu C_{ox}V_{ov}^2)$:

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

$M_6$ is about 3.5 times wider only because of the lower hole mobility ($134/38.4 = 3.5$). That is acceptable: its gate sits at the fixed bias $V_b$, so its capacitance loads no signal node, whereas $C_{GS5}$ loads node Y, the first-stage output.

### Step 5 — Resulting bias voltages (consistency check)

- $V_{GS5} = V_{TH,n} + V_{ov5} = 0.7 + 0.25 = 0.95$ V, which must be the dc level of Y. A balanced mirror-loaded pair puts Y at $V_{GS3}$, so $M_3$, $M_4$ should later be sized for $V_{GS3} = 0.95$ V (the same current density as $M_5$) to avoid a systematic offset.
- $|V_{GS6}| = |V_{TH,p}| + |V_{ov6}| = 0.8 + 0.25 = 1.05$ V, so $V_b = 3 - 1.05 = 1.95$ V, shared by $M_7$.
- Both devices have $g_m = 2I_D/V_{ov} = 2(1\ \mathrm{mA})/0.25\ \mathrm{V} = 8$ mS.

### Result

With $V_{ov5} = |V_{ov6}| = 0.25$ V (from $V_{ov5} + |V_{ov6}| \le 3 - 2.5 = 0.5$ V) and $I_D = 1$ mA:

$$\left(\frac{W}{L}\right)_5 = \frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2} \approx 239, \qquad \left(\frac{W}{L}\right)_6 = \frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2} \approx 833,$$

i.e. $W_5 \approx 119\ \mu\mathrm{m}$ and $W_6 \approx 417\ \mu\mathrm{m}$ with $L = 0.5\ \mu\mathrm{m}$.

**Common mistake.** Reading the 2.5-V swing as $\pm2.5$ V (5 V p-p), impossible with a 3-V supply. Peak-to-peak leaves $3 - 2.5 = 0.5$ V for the two overdrives.

**Common mistake.** Writing the swing limits with full gate-source voltages, e.g. $V_{out} \ge V_{GS5}$; saturation of $M_5$ needs only the overdrive.

**Common mistake.** Using $\mu_nC_{ox}$ for the PMOS $M_6$ (giving $W/L \approx 239$) or $\mu_pC_{ox}$ for $M_5$. The PMOS needs about 3.5 times the width for the same current and overdrive.
