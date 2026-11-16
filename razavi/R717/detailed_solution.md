# Detailed solution - R717

**Approach.** The substrate is the bulk of $M_1$, so substrate noise modulates $M_1$'s threshold through the body effect: the bulk is a "back gate" with transconductance $g_{mb}$. A bulk voltage $V_{sub}$ is therefore equivalent to a gate voltage $(g_{mb}/g_m)V_{sub} = \eta V_{sub}$. Compute $\eta$ at the bias point, find the gate-referred amplitude, and confirm it with the large-signal threshold formula.

### Step 1 — Small-signal model and gate-referred noise

The grounded source does **not** protect $M_1$: its bulk is the substrate, so $V_{SB}$ changes with $V_{sub}$. With $M_1$ saturated, $v_{gs} = v_{in}$ and $v_{bs} = v_{sub}$, and the load $R_D$ runs from the drain to ac ground.

<!-- diagram: diagram-01.cir -->

$$i_d = g_mv_{in} + g_{mb}v_{sub} = g_m\left(v_{in} + \frac{g_{mb}}{g_m}v_{sub}\right).$$

As far as the drain current (and the output) is concerned, the substrate noise is indistinguishable from an extra input voltage

$$v_{eq} = \frac{g_{mb}}{g_m}\,v_{sub} = \eta\,v_{sub}.$$

### Step 2 — The body-effect coefficient $\eta$

From the body-effect threshold equation,

$$\eta = \frac{g_{mb}}{g_m} = \frac{\partial V_{TH}}{\partial V_{SB}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} .$$

On average the substrate is at ground (through $L_b$) and the source is grounded, so $V_{SB} = 0$:

$$\eta = \frac{0.45\ \mathrm{V^{1/2}}}{2\sqrt{0.9\ \mathrm{V}}} = \frac{0.45}{2\times0.9487} = \frac{0.45}{1.897} = 0.237 .$$

### Step 3 — Numerical values

$$v_{eq} = \eta\,V_{sub} = 0.237\times50\ \mathrm{mV} = 11.9\ \mathrm{mV}\ \text{peak-to-peak}.$$

**Device values** ($W/L = 100/0.5 = 200$):

$$
\begin{aligned}
g_m &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_{D1}} = \sqrt{2(134\ \mu\mathrm{A/V^2})(200)(1\ \mathrm{mA})} = \sqrt{5.36\times10^{-5}}\ \mathrm{A/V} = 7.32\ \mathrm{mS},\\
g_{mb} &= \eta\,g_m = 0.237\times7.32\ \mathrm{mS} = 1.74\ \mathrm{mS},\\
\Delta I_{D1} &= g_{mb}V_{sub} = (1.74\ \mathrm{mS})(50\ \mathrm{mV}) = 86.8\ \mu\mathrm{A}\ \text{pp},\\
v_{eq} &= \frac{\Delta I_{D1}}{g_m} = \frac{86.8\ \mu\mathrm{A}}{7.32\ \mathrm{mS}} = 11.9\ \mathrm{mV}\ \text{pp}.
\end{aligned}
$$

The device size and current cancel in $g_{mb}/g_m$; only $\gamma$, $2|\phi_F|$ and $V_{SB}$ matter. The drain-current disturbance, 87 µA pp on a 1-mA bias, is almost 9 %.

### Step 4 — Polarity and a large-signal check

**Polarity.** When $V_{sub}$ rises, $V_{SB} = 0 - V_{sub}$ falls, so $V_{TH}$ falls and $I_{D1}$ rises, exactly as if $V_{in}$ had risen: the gate-referred disturbance is **in phase** with $V_{sub}$.

**Large-signal check.** $V_{sub}$ swings between $\pm25$ mV, i.e. $V_{SB}$ between $\mp25$ mV:

$$
\begin{aligned}
V_{SB} = -25\ \mathrm{mV}:&\quad \Delta V_{TH} = 0.45\left(\sqrt{0.875} - \sqrt{0.9}\right) = 0.45(0.93541 - 0.94868) = -5.97\ \mathrm{mV},\\
V_{SB} = +25\ \mathrm{mV}:&\quad \Delta V_{TH} = 0.45\left(\sqrt{0.925} - \sqrt{0.9}\right) = 0.45(0.96177 - 0.94868) = +5.89\ \mathrm{mV}.
\end{aligned}
$$

The peak-to-peak threshold change, $5.97 + 5.89 = 11.9$ mV, acts on the drain current like an equal and opposite gate-voltage change, in agreement with the small-signal result.

**Other paths.** The substrate can also couple into the drain of $M_1$ through its drain–bulk junction capacitance; that path depends on the unspecified $R_D$ and junction capacitance, and is separate from the body-effect mechanism asked about here.

### Result

The substrate noise acts on $M_1$ through the body effect as an equivalent gate voltage

$$v_{eq} = \frac{g_{mb}}{g_m}V_{sub} = \eta V_{sub} = 0.237\times50\ \mathrm{mV} \approx 11.9\ \mathrm{mV}\ \text{peak-to-peak},$$

in phase with $V_{sub}$ (a higher substrate voltage lowers $V_{TH1}$ and raises $I_{D1}$, like a higher $V_{in}$). Equivalently, $g_m = 7.32$ mS, $g_{mb} = 1.74$ mS, and the drain-current disturbance is about 87 µA pp.

**Common mistake.** Referring the full 50 mV to the gate ($\eta = 1$). The bulk is a much weaker control terminal: only $\eta = g_{mb}/g_m \approx 0.24$ of the bulk voltage appears at the gate.

**Common mistake.** Arguing that the effect is zero because the source is grounded. The body effect depends on $V_{SB}$, which changes by the full $V_{sub}$.

**Common mistake.** Taking $\eta = \gamma$ (giving 22.5 mV) or getting the sign of $V_{SB}$ wrong. $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$, and since $V_{SB} = -V_{sub}$, raising the substrate *lowers* the threshold.
