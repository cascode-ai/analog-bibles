# Detailed solution - R071

**Approach.** The output voltage fixes the drain current through the load line, $I_D = (V_{DD} - V_{out})/R_D$. After checking that $M_1$ is saturated, the square-law transconductance $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ follows from that current.

### Step 1 — Load line and transconductance formula

No current flows into the output terminal, so the whole drain current flows through $R_D$:

$$V_{out} = V_{DD} - R_DI_D \quad\Longrightarrow\quad I_D = \frac{V_{DD} - V_{out}}{R_D} .$$

With $\lambda = 0$ and

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})\times\frac{50}{0.5} = 13.4\ \mathrm{mA/V^2},$$

eliminating $V_{ov} = \sqrt{2I_D/\beta}$ from $g_m = \beta V_{ov}$ gives

$$g_m = \beta\sqrt{\frac{2I_D}{\beta}} = \sqrt{2\beta I_D} = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} .$$

### Step 2 — $V_{out} = 1$ V

$$I_D = \frac{3\ \mathrm{V} - 1\ \mathrm{V}}{2\ \mathrm{k}\Omega} = \frac{2\ \mathrm{V}}{2\ \mathrm{k}\Omega} = 1\ \mathrm{mA}.$$

The overdrive is $V_{ov} = \sqrt{2I_D/\beta} = \sqrt{2(1\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = \sqrt{0.1493}\ \mathrm{V} = 0.386$ V $< V_{DS} = 1$ V, so $M_1$ is saturated ✓, and

$$g_m = \sqrt{2(13.4\times10^{-3}\ \mathrm{A/V^2})(1\times10^{-3}\ \mathrm{A})} = \sqrt{2.68\times10^{-5}}\ \mathrm{A/V} = 5.18\ \mathrm{mS}.$$

(Equivalently $g_m = \beta V_{ov} = 13.4\times0.386 = 5.18$ mS, or $2I_D/V_{ov} = 2/0.386 = 5.18$ mS.)

### Step 3 — $V_{out} = 2.5$ V

$$I_D = \frac{3\ \mathrm{V} - 2.5\ \mathrm{V}}{2\ \mathrm{k}\Omega} = \frac{0.5\ \mathrm{V}}{2\ \mathrm{k}\Omega} = 0.25\ \mathrm{mA}.$$

$V_{ov} = \sqrt{2(0.25\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = \sqrt{0.0373}\ \mathrm{V} = 0.193$ V $< V_{DS} = 2.5$ V, so $M_1$ is saturated ✓, and

$$g_m = \sqrt{2(13.4\times10^{-3}\ \mathrm{A/V^2})(0.25\times10^{-3}\ \mathrm{A})} = \sqrt{6.7\times10^{-6}}\ \mathrm{A/V} = 2.59\ \mathrm{mS}.$$

### Step 4 — Comparison

The current changes by a factor of 4 (1 mA versus 0.25 mA), but the transconductance only by a factor of 2 (5.18 mS versus 2.59 mS), because $g_m \propto \sqrt{I_D}$ at a fixed $W/L$:

$$\frac{g_m(1\ \mathrm{V})}{g_m(2.5\ \mathrm{V})} = \sqrt{\frac{1\ \mathrm{mA}}{0.25\ \mathrm{mA}}} = \sqrt4 = 2 .$$

Since the small-signal gain is $-g_mR_D$, the gain also changes by a factor of 2 over this output range ($-10.4$ to $-5.2$).

### Result

| $V_{out}$ | $I_D = (V_{DD} - V_{out})/R_D$ | $V_{ov}$ | $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ |
|---|---|---|---|
| 1 V | 1 mA | 0.386 V | 5.18 mS |
| 2.5 V | 0.25 mA | 0.193 V | 2.59 mS |

$M_1$ is saturated in both cases.

**Common mistake.** Using a $g_m$ formula linear in the current, such as $g_m = \beta I_D$ or $g_m = I_D/V_T$ (a bipolar/subthreshold formula). For a square-law MOSFET a 4× change in current gives only a 2× change in $g_m$.

**Common mistake.** Taking the current as $V_{out}/R_D$ instead of $(V_{DD} - V_{out})/R_D$. The resistor sits between $V_{DD}$ and the output, so its voltage is $V_{DD} - V_{out}$.
