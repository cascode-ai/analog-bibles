# Detailed solution - R444

**Approach.** The stage is a common-source (CS) amplifier $M_1$ with a regulated (gain-boosted) cascode $M_2$, whose gate is driven by the auxiliary amplifier $M_3$ (load $I_1$). Its gain is $-G_mR_{out}$, where $R_{out}$ is the regulated-cascode resistance in parallel with the PMOS load $I_2$. We compute every small-signal parameter, show that the PMOS load completely dominates $R_{out}$, and then find the input-referred noise by referring each transistor's drain noise current to the input.

### Step 1 — Bias currents and operating point

Reading the figure: $M_1$ (gate $V_{in}$) has its drain at X; $M_2$ runs from X to $V_{out}$ with its gate at node G; $M_3$ (gate at X, source grounded) has its drain at G and is loaded by the PMOS source $I_1$; the PMOS source $I_2$ loads the output.

By KCL (gates draw no current):

$$I_{D1} = I_{D2} = I_2 = 0.5\ \mathrm{mA}, \qquad I_{D3} = I_1 = 100\ \mu\mathrm{A}.$$

All NMOS devices have $W/L = 100/0.5 = 200$; the PMOS sources have $W/L = 50/0.5 = 100$.

The feedback loop through $M_3$ holds X at the gate-source voltage that makes $M_3$ carry $I_1$:

$$V_X = V_{GS3} = 0.7\ \mathrm{V} + \sqrt{\frac{2\,(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(200)}} = 0.7 + 0.086 = 0.786\ \mathrm{V}.$$

So the source of $M_2$ sits at $V_{SB2} = 0.786$ V above its grounded bulk, which gives $M_2$ a body effect.

### Step 2 — Small-signal parameters

Transconductance from the square law, $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$; output resistance $r_O = 1/(\lambda I_D)$.

**Main path ($M_1$, $M_2$; 0.5 mA):**

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(200)(0.5\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{S} = 5.18\ \mathrm{mS},\\
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .
\end{aligned}
$$

**Body transconductance of $M_2$**, $g_{mb2} = \eta g_{m2}$ with $\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$:

$$
\eta_2 = \frac{0.45}{2\sqrt{0.9 + 0.786}} = \frac{0.45}{2\times1.2986} = 0.173, \qquad g_{mb2} = 0.173\times5.18\ \mathrm{mS} = 0.90\ \mathrm{mS}.
$$

**Auxiliary amplifier ($M_3$ with load $I_1$; 100 μA):**

$$
\begin{aligned}
g_{m3} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(200)(100\ \mu\mathrm{A})} = \sqrt{5.36\times10^{-6}}\ \mathrm{S} = 2.32\ \mathrm{mS},\\
r_{O3} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})} = 100\ \mathrm{k}\Omega,\\
r_{OP1} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})} = 50\ \mathrm{k}\Omega,\\
A_3 &= g_{m3}(r_{O3}\parallel r_{OP1}) = (2.32\ \mathrm{mS})(33.3\ \mathrm{k}\Omega) = 77.2 .
\end{aligned}
$$

**Output load (PMOS $I_2$; 0.5 mA):**

$$
\begin{aligned}
r_{OP2} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
g_{mP2} &= \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{3.84\times10^{-6}}\ \mathrm{S} = 1.96\ \mathrm{mS}.
\end{aligned}
$$

### Step 3 — Resistance looking down into the drain of $M_2$

Small-signal model (with $v_{in} = 0$): $r_{O1}$ from X to ground; $M_3$ is a current $g_{m3}v_X$ from G to ground with $r_{O3}\parallel r_{OP1}$ from G to ground; $M_2$ is a current $g_{m2}(v_G - v_X) - g_{mb2}v_X$ from the output to X, with $r_{O2}$ in parallel.

Apply a test voltage $v_t$ at the drain of $M_2$ and let $i_t$ flow in. It flows on through $r_{O1}$, so $v_X = i_tr_{O1}$. KCL at G gives $v_G = -A_3v_X$. The current through $M_2$:

$$
\begin{aligned}
i_t &= g_{m2}(v_G - v_X) - g_{mb2}v_X + \frac{v_t - v_X}{r_{O2}}\\
i_t &= -\left[g_{m2}(1 + A_3) + g_{mb2}\right]i_tr_{O1} + \frac{v_t - i_tr_{O1}}{r_{O2}}\\
v_t &= i_t\left\{\left[g_{m2}(1 + A_3) + g_{mb2}\right]r_{O2}r_{O1} + r_{O1} + r_{O2}\right\}.
\end{aligned}
$$

So the regulated-cascode resistance is

$$
\begin{aligned}
R_{reg} &= \left[g_{m2}(1 + A_3) + g_{mb2}\right]r_{O2}r_{O1} + r_{O1} + r_{O2}\\
&= \left[(5.18\ \mathrm{mS})(78.2) + 0.90\ \mathrm{mS}\right](20\ \mathrm{k}\Omega)(20\ \mathrm{k}\Omega) + 40\ \mathrm{k}\Omega\\
&= (0.406\ \mathrm{S})(4\times10^8\ \Omega^2) + 40\ \mathrm{k}\Omega\\
&\approx 162\ \mathrm{M}\Omega .
\end{aligned}
$$

The auxiliary amplifier multiplies the ordinary cascode resistance by about $1 + A_3 \approx 78$.

### Step 4 — Output resistance and voltage gain

The output node sees $R_{reg}$ looking down and $r_{OP2}$ looking up, in parallel:

$$R_{out} = R_{reg}\parallel r_{OP2} = \frac{(162\ \mathrm{M}\Omega)(10\ \mathrm{k}\Omega)}{162\ \mathrm{M}\Omega + 10\ \mathrm{k}\Omega} \approx 10\ \mathrm{k}\Omega .$$

<!-- diagram: diagram-01.cir -->

The short-circuit transconductance is $G_m = g_{m1}Kr_{O1}/(1 + Kr_{O1})$ with $K = g_{m2}(1 + A_3) + g_{mb2} + 1/r_{O2} = 0.406$ S; since $Kr_{O1} \approx 8100 \gg 1$, $G_m = 0.9999\,g_{m1} \approx g_{m1}$. Hence

$$
\begin{aligned}
A_v &= -G_mR_{out} \approx -g_{m1}(R_{reg}\parallel r_{OP2}) \approx -g_{m1}r_{OP2}\\
&= -(5.18\ \mathrm{mS})(10\ \mathrm{k}\Omega)\\
&\approx -52 .
\end{aligned}
$$

The gain is negative because this is a CS stage: raising $V_{in}$ draws more current and pulls the output down.

**Intuition.** Two resistances in parallel are dominated by the smaller one. The regulated cascode raises the resistance looking down to 162 MΩ, but the simple PMOS current source looking up is only 10 kΩ, so the gain is the same as that of a plain CS stage with a PMOS load, $g_{m1}r_{OP2}$. The gain boosting is wasted unless the load is also a high-impedance (cascoded) current source.

### Step 5 — Input-referred noise: the dominant sources

Each transistor has a drain noise current of density $\overline{I_n^2} = 4kT\cdot\tfrac23g_m$. We refer each to the input by dividing the short-circuit output noise current it causes by $G_m \approx g_{m1}$, and add the powers.

- **$M_1$.** Its noise current is in parallel with $g_{m1}v_{in}$, so it is equivalent to an input voltage $I_{n1}/g_{m1}$:
$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{4kT\cdot\tfrac23g_{m1}}{g_{m1}^2} = \frac{4kT\cdot\tfrac23}{g_{m1}} .$$
- **PMOS $I_2$.** Its noise current flows straight into the output node, like an output current; the input must supply it through $g_{m1}$:
$$\overline{V_{n,in}^2}\Big|_{P2} = \frac{4kT\cdot\tfrac23g_{mP2}}{g_{m1}^2} .$$

### Step 6 — Input-referred noise: the negligible sources

- **$M_2$.** The cascode's noise current mostly circulates inside the stiff cascode. With the output shorted, the part that reaches the output is $I_{n2}/(1 + Kr_{O1})$, and referred to the input it becomes $I_{n2}/(g_{m1}Kr_{O1})$. Its weight is therefore
$$\frac{g_{m2}}{(g_{m1}Kr_{O1})^2} = \frac{5.18\ \mathrm{mS}}{(5.18\ \mathrm{mS}\times0.406\ \mathrm{S}\times20\ \mathrm{k}\Omega)^2} \approx 3\times10^{-6}\ \Omega,$$
against 193 Ω for $M_1$.
- **$M_3$ and PMOS $I_1$.** Their noise currents enter node G and move X by about $I_{nG}/g_{m3}$. A voltage at X changes the output current only through $1/r_{O1}$, so referred to the input it is divided by $g_{m1}r_{O1} = 5.18\ \mathrm{mS}\times20\ \mathrm{k}\Omega = 104$. With $g_{mP1} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(100\ \mu\mathrm{A})} = 0.88$ mS:
$$\frac{1}{(g_{m1}r_{O1})^2}\left(\frac{1}{g_{m3}} + \frac{g_{mP1}}{g_{m3}^2}\right) = \frac{1}{104^2}\left(432\ \Omega + 164\ \Omega\right) \approx 0.055\ \Omega .$$

Both are negligible against the 266 Ω of the dominant terms.

### Step 7 — Numerical value of the noise

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{5.18\ \mathrm{mS}} = 193\ \Omega,\\
\frac{g_{mP2}}{g_{m1}^2} &= \frac{1.96\times10^{-3}\ \mathrm{S}}{26.8\times10^{-6}\ \mathrm{S^2}} = 73\ \Omega,\\
4kT\cdot\tfrac23 &= 4\,(1.38\times10^{-23}\ \mathrm{J/K})(300\ \mathrm{K})\left(\tfrac23\right) = 1.104\times10^{-20}\ \mathrm{J},\\
\overline{V_{n,in}^2} &= (1.104\times10^{-20}\ \mathrm{J})(193\ \Omega + 73\ \Omega) = (1.104\times10^{-20})(266)\ \mathrm{V^2/Hz}\\
&= 2.94\times10^{-18}\ \mathrm{V^2/Hz}.
\end{aligned}
$$

The rms density is

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{2.94\times10^{-18}}\ \mathrm{V/\sqrt{Hz}} = 1.71\ \mathrm{nV/\sqrt{Hz}} .$$

(An exact nodal analysis that keeps all five noise sources gives the same 1.71 nV/√Hz to three digits.)

### Result

- **Gain:** $A_v \approx -g_{m1}(r_{OP2}\parallel R_{reg}) \approx -g_{m1}r_{OP2} = -(5.18\ \mathrm{mS})(10\ \mathrm{k}\Omega) \approx -52$. The regulated-cascode resistance ($\approx 162$ MΩ) is irrelevant because the PMOS load (10 kΩ) dominates.
- **Noise:** $\overline{V_{n,in}^2} \approx 4kT\cdot\tfrac23\left(\dfrac{1}{g_{m1}} + \dfrac{g_{mP2}}{g_{m1}^2}\right) = 1.104\times10^{-20}\times(193 + 73)\ \approx 2.9\times10^{-18}\ \mathrm{V^2/Hz}$, i.e. about **1.7 nV/√Hz**. $M_2$, $M_3$ and $I_1$ contribute negligibly.

**Common mistake.** Quoting the gain as $g_{m1}R_{reg}$ (hundreds of thousands) because "the regulated cascode boosts the output resistance". The output resistance is $R_{reg}\parallel r_{OP2}$, and the 10-kΩ PMOS load sets it.

**Common mistake.** Computing the gain with $r_{O1}$ alone ($g_{m1}r_{O1} \approx 104$). The cascode shields the output from $r_{O1}$; the resistance at the output is set by the load.

**Common mistake.** Believing the auxiliary amplifier ($M_3$, $I_1$) dominates the noise because it carries little current and has a small $g_m$. Its noise appears at node X and is divided by $(g_{m1}r_{O1})^2 \approx 10^4$ when referred to the input.
