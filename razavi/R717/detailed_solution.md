# Detailed solution - R717

**Approach.** The substrate is the bulk of $M_1$, so substrate noise modulates $M_1$'s threshold through the body effect: the bulk acts as a "back gate" with transconductance $g_{mb}$. Writing the small-signal drain current as the sum of the gate and bulk contributions shows that a bulk voltage $V_{sub}$ is equivalent to a gate voltage $(g_{mb}/g_m)V_{sub} = \eta V_{sub}$. We compute $\eta$ at the bias point, find the gate-referred amplitude, and confirm it with the large-signal threshold formula.

### Step 1 — How the substrate noise reaches $M_1$

The clock inverter ($M_2$, $M_3$) drives the node CK with sharp edges. Its drain junction capacitance $C_{DB2}$ couples these edges into the substrate, which is a resistive mesh returned to ground through the bond-wire inductance $L_b$. The substrate potential therefore fluctuates; under $M_1$ it takes the value $V_{sub}$, here 50 mV peak-to-peak.

$M_1$'s source is grounded, but its **bulk is the substrate**, so the source–bulk voltage changes with $V_{sub}$. A grounded source does **not** protect the device: the threshold depends on $V_{SB}$, not on the source voltage alone.

### Step 2 — Small-signal model and gate-referred noise

**Model.** $M_1$ is saturated. Its drain current has two controlled-source terms, both flowing from drain to source:

- $g_mv_{gs}$, controlled by the gate, with $v_{gs} = v_{in} - 0 = v_{in}$;
- $g_{mb}v_{bs}$, controlled by the bulk (body effect), with $v_{bs} = v_{sub} - 0 = v_{sub}$.

The load $R_D$ connects the drain (output) to AC ground.

<!-- diagram: diagram-01.cir -->

**Drain current:**

$$i_d = g_mv_{in} + g_{mb}v_{sub} = g_m\left(v_{in} + \frac{g_{mb}}{g_m}v_{sub}\right).$$

The bracket shows that, as far as the drain current (and the output) is concerned, the substrate noise is indistinguishable from an extra input voltage

$$v_{eq} = \frac{g_{mb}}{g_m}\,v_{sub} = \eta\,v_{sub},$$

where $\eta = g_{mb}/g_m$ is the body-effect coefficient.

### Step 3 — The body-effect coefficient $\eta$

From the threshold equation $V_{TH} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|}\right)$,

$$\eta = \frac{g_{mb}}{g_m} = \frac{\partial V_{TH}}{\partial V_{SB}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} .$$

On average the substrate is at ground (it is tied to ground through $L_b$) and the source is grounded, so the bias value is $V_{SB} = 0$:

$$\eta = \frac{0.45\ \mathrm{V^{1/2}}}{2\sqrt{0.9\ \mathrm{V}}} = \frac{0.45}{2\times0.9487} = \frac{0.45}{1.897} = 0.237 .$$

### Step 4 — Numerical values

**Gate-referred noise:**

$$v_{eq} = \eta\,V_{sub} = 0.237\times50\ \mathrm{mV} = 11.9\ \mathrm{mV}\ \text{peak-to-peak}.$$

**Device values for a concrete picture.** $W/L = 100/0.5 = 200$.

$$
\begin{aligned}
g_m &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_{D1}} = \sqrt{2(134\ \mu\mathrm{A/V^2})(200)(1\ \mathrm{mA})} = \sqrt{5.36\times10^{-5}}\ \mathrm{A/V} = 7.32\ \mathrm{mS},\\
g_{mb} &= \eta\,g_m = 0.237\times7.32\ \mathrm{mS} = 1.74\ \mathrm{mS},\\
\Delta I_{D1} &= g_{mb}V_{sub} = (1.74\ \mathrm{mS})(50\ \mathrm{mV}) = 86.8\ \mu\mathrm{A}\ \text{pp},\\
v_{eq} &= \frac{\Delta I_{D1}}{g_m} = \frac{86.8\ \mu\mathrm{A}}{7.32\ \mathrm{mS}} = 11.9\ \mathrm{mV}\ \text{pp}.
\end{aligned}
$$

The device size and current cancel in the ratio $g_{mb}/g_m$; only $\gamma$, $2|\phi_F|$ and $V_{SB}$ matter. The drain-current disturbance is a sizable 87 µA pp on a 1-mA bias, i.e. almost 9 %.

### Step 5 — Polarity and a large-signal check

**Polarity.** When $V_{sub}$ rises, $V_{SB} = 0 - V_{sub}$ falls, so $V_{TH}$ falls and $I_{D1}$ rises, exactly as if $V_{in}$ had risen. The gate-referred disturbance is therefore **in phase** with $V_{sub}$.

**Large-signal check.** The noise swings $V_{sub}$ between $+25$ mV and $-25$ mV, i.e. $V_{SB}$ between $-25$ mV and $+25$ mV:

$$
\begin{aligned}
V_{SB} = -25\ \mathrm{mV}:&\quad \Delta V_{TH} = 0.45\left(\sqrt{0.875} - \sqrt{0.9}\right) = 0.45(0.93541 - 0.94868) = -5.97\ \mathrm{mV},\\
V_{SB} = +25\ \mathrm{mV}:&\quad \Delta V_{TH} = 0.45\left(\sqrt{0.925} - \sqrt{0.9}\right) = 0.45(0.96177 - 0.94868) = +5.89\ \mathrm{mV}.
\end{aligned}
$$

Peak-to-peak threshold change: $5.97 + 5.89 = 11.9$ mV. A threshold change acts on the drain current exactly like an equal and opposite gate-voltage change, so this agrees with the small-signal result.

**Other paths.** The substrate can also couple capacitively into the drain of $M_1$ through its drain–bulk junction capacitance; that path depends on $R_D$ and the junction capacitance, which are not specified, and is separate from the body-effect mechanism asked about here.

### Result

The substrate noise acts on $M_1$ through the body effect as an equivalent gate voltage

$$v_{eq} = \frac{g_{mb}}{g_m}V_{sub} = \eta V_{sub} = 0.237\times50\ \mathrm{mV} \approx 11.9\ \mathrm{mV}\ \text{peak-to-peak},$$

in phase with $V_{sub}$ (a higher substrate voltage lowers $V_{TH1}$ and raises $I_{D1}$, like a higher $V_{in}$). Equivalently, $g_m = 7.32$ mS, $g_{mb} = 1.74$ mS, and the drain-current disturbance is about 87 µA pp.

**Common mistake.** Referring the full 50 mV to the gate ($\eta = 1$). The bulk is a much weaker control terminal than the gate: only the fraction $\eta = g_{mb}/g_m \approx 0.24$ of the bulk voltage appears as an equivalent gate voltage.

**Common mistake.** Arguing that the effect is zero because the source is grounded. The body effect depends on the source–bulk voltage; with the bulk moving and the source fixed, $V_{SB}$ changes by the full $V_{sub}$.

**Common mistake.** Taking $\eta = \gamma$ (giving 22.5 mV) or getting the sign of $V_{SB}$ wrong. $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$, and since $V_{SB} = -V_{sub}$, raising the substrate *lowers* the threshold.
