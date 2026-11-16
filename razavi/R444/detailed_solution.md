# Detailed solution - R444

**Approach.** The stage is a CS amplifier $M_1$ with a regulated (gain-boosted) cascode $M_2$, whose gate is driven by the auxiliary amplifier $M_3$ (load $I_1$). Its gain is $-G_mR_{out}$, with $R_{out}$ the regulated-cascode resistance in parallel with the PMOS load $I_2$. Compute the small-signal parameters, show that the PMOS load dominates $R_{out}$, and refer each transistor's drain noise current to the input.

### Step 1 — Bias currents and operating point

Call the drain of $M_3$ (gate of $M_2$) node G. Since the gates draw no current,

$$I_{D1} = I_{D2} = I_2 = 0.5\ \mathrm{mA}, \qquad I_{D3} = I_1 = 100\ \mu\mathrm{A}.$$

All NMOS devices have $W/L = 100/0.5 = 200$; the PMOS sources have $W/L = 50/0.5 = 100$. The feedback loop through $M_3$ holds X at the gate-source voltage that makes $M_3$ carry $I_1$:

$$V_X = V_{GS3} = 0.7\ \mathrm{V} + \sqrt{\frac{2\,(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(200)}} = 0.7 + 0.086 = 0.786\ \mathrm{V}.$$

So $V_{SB2} = 0.786$ V, which gives $M_2$ a body effect.

### Step 2 — Small-signal parameters

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

With $v_{in} = 0$: $r_{O1}$ runs from X to ground; $M_3$ is a current $g_{m3}v_X$ from G to ground with $r_{O3}\parallel r_{OP1}$; $M_2$ is a current $g_{m2}(v_G - v_X) - g_{mb2}v_X$ from the output to X, with $r_{O2}$ in parallel. A test current $i_t$ into the drain of $M_2$ flows on through $r_{O1}$, so $v_X = i_tr_{O1}$, and KCL at G gives $v_G = -A_3v_X$. The current through $M_2$ is then

$$
\begin{aligned}
i_t &= g_{m2}(v_G - v_X) - g_{mb2}v_X + \frac{v_t - v_X}{r_{O2}}\\
v_t &= i_t\left\{\left[g_{m2}(1 + A_3) + g_{mb2}\right]r_{O2}r_{O1} + r_{O1} + r_{O2}\right\},
\end{aligned}
$$

so

$$
\begin{aligned}
R_{up} &= \left[g_{m2}(1 + A_3) + g_{mb2}\right]r_{O2}r_{O1} + r_{O1} + r_{O2}\\
&= \left[(5.18\ \mathrm{mS})(78.2) + 0.90\ \mathrm{mS}\right](20\ \mathrm{k}\Omega)(20\ \mathrm{k}\Omega) + 40\ \mathrm{k}\Omega\\
&= (0.406\ \mathrm{S})(4\times10^8\ \Omega^2) + 40\ \mathrm{k}\Omega\\
&\approx 162\ \mathrm{M}\Omega ,
\end{aligned}
$$

the ordinary cascode resistance multiplied by about $1 + A_3 \approx 78$.

### Step 4 — Output resistance and voltage gain

$$R_{out} = R_{up}\parallel r_{OP2} = \frac{(162\ \mathrm{M}\Omega)(10\ \mathrm{k}\Omega)}{162\ \mathrm{M}\Omega + 10\ \mathrm{k}\Omega} \approx 10\ \mathrm{k}\Omega .$$

<!-- diagram: diagram-01.cir -->

The short-circuit transconductance is $G_m = g_{m1}Kr_{O1}/(1 + Kr_{O1})$ with $K = g_{m2}(1 + A_3) + g_{mb2} + 1/r_{O2} = 0.406$ S; since $Kr_{O1} \approx 8100 \gg 1$, $G_m = 0.9999\,g_{m1} \approx g_{m1}$. Hence

$$
\begin{aligned}
A_v &= -G_mR_{out} \approx -g_{m1}(R_{up}\parallel r_{OP2}) \approx -g_{m1}r_{OP2}\\
&= -(5.18\ \mathrm{mS})(10\ \mathrm{k}\Omega)\\
&\approx -52 ,
\end{aligned}
$$

negative, as for any CS stage. The 162-MΩ regulated cascode is wasted behind the 10-kΩ PMOS load: the gain equals that of a plain CS stage with a PMOS load unless the load is also cascoded.

### Step 5 — Input-referred noise: the dominant sources

Each drain noise current, $\overline{I_n^2} = 4kT\cdot\tfrac23g_m$, is referred to the input by dividing the short-circuit output current it causes by $G_m \approx g_{m1}$.

- **$M_1$.** Its noise current is in parallel with $g_{m1}v_{in}$, so it is equivalent to $I_{n1}/g_{m1}$ at the input:
$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{4kT\cdot\tfrac23g_{m1}}{g_{m1}^2} = \frac{4kT\cdot\tfrac23}{g_{m1}} .$$
- **PMOS $I_2$.** Its noise current flows straight into the output, and the input must supply it through $g_{m1}$:
$$\overline{V_{n,in}^2}\Big|_{P2} = \frac{4kT\cdot\tfrac23g_{mP2}}{g_{m1}^2} .$$

### Step 6 — Input-referred noise: the negligible sources

- **$M_2$.** With the output shorted, only $I_{n2}/(1 + Kr_{O1})$ reaches the output, which refers to the input as $I_{n2}/(g_{m1}Kr_{O1})$. Its weight is
$$\frac{g_{m2}}{(g_{m1}Kr_{O1})^2} = \frac{5.18\ \mathrm{mS}}{(5.18\ \mathrm{mS}\times0.406\ \mathrm{S}\times20\ \mathrm{k}\Omega)^2} \approx 3\times10^{-6}\ \Omega,$$
against 193 Ω for $M_1$.
- **$M_3$ and PMOS $I_1$.** Their noise currents enter G and move X by about $I_{nG}/g_{m3}$. A voltage at X changes the output current only through $1/r_{O1}$, so it is divided by $g_{m1}r_{O1} = 5.18\ \mathrm{mS}\times20\ \mathrm{k}\Omega = 104$ at the input. With $g_{mP1} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(100\ \mu\mathrm{A})} = 0.88$ mS:
$$\frac{1}{(g_{m1}r_{O1})^2}\left(\frac{1}{g_{m3}} + \frac{g_{mP1}}{g_{m3}^2}\right) = \frac{1}{104^2}\left(432\ \Omega + 164\ \Omega\right) \approx 0.055\ \Omega .$$

Both are negligible against the 266 Ω of the dominant terms.

### Step 7 — Numerical value of the noise

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{5.18\ \mathrm{mS}} = 193\ \Omega,\\
\frac{g_{mP2}}{g_{m1}^2} &= \frac{1.96\times10^{-3}\ \mathrm{S}}{26.8\times10^{-6}\ \mathrm{S^2}} = 73\ \Omega,\\
4kT\cdot\tfrac23 &= 4\,(1.38\times10^{-23}\ \mathrm{J/K})(300\ \mathrm{K})\left(\tfrac23\right) = 1.104\times10^{-20}\ \mathrm{J},\\
\overline{V_{n,in}^2} &= (1.104\times10^{-20}\ \mathrm{J})(193\ \Omega + 73\ \Omega) = (1.104\times10^{-20})(266)\ \mathrm{V^2/Hz}\\
&= 2.94\times10^{-18}\ \mathrm{V^2/Hz},
\end{aligned}
$$

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{2.94\times10^{-18}}\ \mathrm{V/\sqrt{Hz}} = 1.71\ \mathrm{nV/\sqrt{Hz}} .$$

(An exact nodal analysis keeping all five noise sources gives the same 1.71 nV/√Hz to three digits.)

### Result

- **Gain:** $A_v \approx -g_{m1}(r_{OP2}\parallel R_{up}) \approx -g_{m1}r_{OP2} = -(5.18\ \mathrm{mS})(10\ \mathrm{k}\Omega) \approx -52$. The regulated-cascode resistance ($\approx 162$ MΩ) is irrelevant because the PMOS load (10 kΩ) dominates.
- **Noise:** $\overline{V_{n,in}^2} \approx 4kT\cdot\tfrac23\left(\dfrac{1}{g_{m1}} + \dfrac{g_{mP2}}{g_{m1}^2}\right) = 1.104\times10^{-20}\times(193 + 73)\ \approx 2.9\times10^{-18}\ \mathrm{V^2/Hz}$, i.e. about **1.7 nV/√Hz**. $M_2$, $M_3$ and $I_1$ contribute negligibly.

**Common mistake.** Quoting the gain as $g_{m1}R_{up}$ (hundreds of thousands). The output resistance is $R_{up}\parallel r_{OP2}$, set by the 10-kΩ PMOS load.

**Common mistake.** Computing the gain with $r_{O1}$ alone ($g_{m1}r_{O1} \approx 104$). The cascode shields the output from $r_{O1}$; the load sets the output resistance.

**Common mistake.** Believing the low-current auxiliary amplifier ($M_3$, $I_1$) dominates the noise. Its noise appears at X and is divided by $(g_{m1}r_{O1})^2 \approx 10^4$ at the input.
