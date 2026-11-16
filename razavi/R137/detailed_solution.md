# Detailed solution - R137

**Approach.** The level shift of a source follower is the gate–source voltage of the follower: $V_{in} - V_{out} = V_{GS1}$. The given difference then fixes $V_{GS2}$ of the current source $M_2$, and with the common current the square law gives each aspect ratio.

### Step 1 — Gate–source and overdrive voltages

With $\lambda = \gamma = 0$, both devices have $V_{TH} = 0.7$ V (no body effect for $M_1$). Then

$$V_{GS1} = V_{in} - V_{out} = 1\ \mathrm{V},\qquad V_{GS2} = V_{GS1} + 0.5\ \mathrm{V} = 1.5\ \mathrm{V},$$

and since $M_2$'s source is grounded, $V_b = V_{GS2} = 1.5$ V. The overdrives are

$$
\begin{aligned}
V_{ov1} &= 1 - 0.7 = 0.3\ \mathrm{V},\\
V_{ov2} &= 1.5 - 0.7 = 0.8\ \mathrm{V}.
\end{aligned}
$$

### Step 2 — Aspect ratios

From $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, $W/L = 2I_D/(\mu_nC_{ox}V_{ov}^2)$:

$$\left(\frac{W}{L}\right)_1 = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2} = \frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(0.09\ \mathrm{V^2})} = \frac{1000\ \mu\mathrm{A}}{12.06\ \mu\mathrm{A}} = 82.9 ,$$

e.g. $W/L = 41.5\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$, and

$$\left(\frac{W}{L}\right)_2 = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.8\ \mathrm{V})^2} = \frac{1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(0.64\ \mathrm{V^2})} = \frac{1000\ \mu\mathrm{A}}{85.76\ \mu\mathrm{A}} = 11.7 ,$$

e.g. $W/L = 5.83\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$. Only the ratios are determined; the channel length (0.5 μm here) is a free choice.

Both devices carry 0.5 mA, but $M_1$ has only 0.3 V of overdrive against 0.8 V for $M_2$, so it must be $(0.8/0.3)^2 = 7.1$ times larger in $W/L$: $82.9/11.7 = 7.1$ ✓.

### Step 3 — Operating regions

**$M_2$ saturated:** $V_{DS2} = V_{out} \ge V_{ov2} = 0.8$ V, i.e.

$$V_{in} = V_{out} + 1\ \mathrm{V} \ge 1.8\ \mathrm{V}.$$

Below that, $M_2$ enters triode, its current falls below 0.5 mA, and the 1-V shift is lost.

**$M_1$ saturated:** $V_{DD} - V_{out} \ge V_{ov1} = 0.3$ V, i.e. $V_{out} \le 2.7$ V, or $V_{in} \le 3.7$ V, which always holds within the supply.

So the level shifter works as designed for $1.8\ \mathrm{V} \le V_{in} \le 3$ V, and with $\lambda = \gamma = 0$ the shift is exactly 1 V throughout: $M_2$ fixes the current, so $V_{GS1}$ is fixed.

### Step 4 — Verification of the design

$$
\begin{aligned}
I_{D1} &= \tfrac12(134\ \mu\mathrm{A/V^2})(82.9)(0.3\ \mathrm{V})^2 = \tfrac12(134)(82.9)(0.09)\ \mu\mathrm{A} = 0.500\ \mathrm{mA},\\
I_{D2} &= \tfrac12(134\ \mu\mathrm{A/V^2})(11.66)(0.8\ \mathrm{V})^2 = \tfrac12(134)(11.66)(0.64)\ \mu\mathrm{A} = 0.500\ \mathrm{mA}\ \checkmark
\end{aligned}
$$

With the ideal current source $M_2$, the follower's small-signal gain is exactly 1, and its output resistance is $1/g_{m1}$ with

$$g_{m1} = \frac{2I_D}{V_{ov1}} = \frac{2(0.5\ \mathrm{mA})}{0.3\ \mathrm{V}} = 3.33\ \mathrm{mS},\qquad \frac{1}{g_{m1}} = 300\ \Omega ,$$

so the wide $M_1$ also gives the level shifter a low output resistance.

### Result

$$\left(\frac{W}{L}\right)_1 = \frac{2I_D}{\mu_nC_{ox}(V_{GS1} - V_{TH})^2} \approx 82.9\ \ (\text{e.g. } 41.5/0.5),\qquad \left(\frac{W}{L}\right)_2 = \frac{2I_D}{\mu_nC_{ox}(V_{GS2} - V_{TH})^2} \approx 11.7\ \ (\text{e.g. } 5.8/0.5),$$

with $V_{GS1} = 1$ V, $V_{GS2} = V_b = 1.5$ V. $M_2$ stays saturated for $V_{in} \ge 1.8$ V.

**Common mistake.** Reading the condition as $V_{GS2} = 0.5$ V (below threshold) or $V_{GS1} - V_{GS2} = 0.5$ V. With $V_{GS1} = 1$ V, $V_{GS2} - V_{GS1} = 0.5$ V gives $V_{GS2} = 1.5$ V.

**Common mistake.** Using $V_{GS}$ instead of the overdrive in the square law, e.g. $(W/L)_1 = 2I_D/(\mu_nC_{ox}\cdot1^2) = 7.5$. $M_1$'s overdrive is 0.3 V, not 1 V.

**Common mistake.** Dropping the factor $\tfrac12$ in the square law, which halves both ratios (41.5 and 5.8), or using it twice, which doubles them.
