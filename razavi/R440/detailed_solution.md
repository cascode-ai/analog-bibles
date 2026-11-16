# Detailed solution - R440

**Approach.** Use the differential half circuit. The first stage is a telescopic cascode, whose gain is $G_m R_{out}$ with $R_{out}$ = (resistance looking down into the NMOS cascode) $\parallel$ (resistance looking up into the PMOS cascode load). The second stage is a common-source (CS) stage with gain $g_{m9}(r_{O9}\parallel r_{O11})$. Body effect matters for the cascode devices $M_3$ and $M_5$, whose sources are not at their bulk potentials, so we first find their DC source voltages from the bias conditions.

### Step 1 — Half circuit and bias currents

For a differential input the common source node P of $M_1$–$M_2$ is a **virtual ground** (the two halves inject equal and opposite currents into it), so each side acts independently. The half circuit is:

- **First stage:** input transistor $M_1$ (source at AC ground), NMOS cascode $M_3$ (gate at $V_{b1}$), PMOS cascode $M_5$ (gate at $V_{b2}$) and PMOS current source $M_7$ (gate at $V_{b3}$), with the output at node X.
- **Second stage:** PMOS CS device $M_9$ (gate at X, source at $V_{DD}$) loaded by the NMOS current source $M_{11}$; output $V_{out1}$.

The differential gain $(V_{out1} - V_{out2})/V_{in}$ equals the half-circuit gain. Every device carries 0.5 mA:

$$I_{D1} = I_{D3} = I_{D5} = I_{D7} = \frac{I_{SS}}{2} = 0.5\ \mathrm{mA}, \qquad I_{D9} = I_{D11} = 0.5\ \mathrm{mA}.$$

### Step 2 — Transconductances and output resistances of the first stage

For a square-law device in saturation, $g_m = 2I_D/V_{ov}$, where $V_{ov}$ is the overdrive voltage, and $r_O = 1/(\lambda I_D)$.

**NMOS $M_1$, $M_3$** (same size, same current, $V_{ov} = 0.67$ V):

$$
\begin{aligned}
g_{m1} = g_{m3} &= \frac{2I_D}{V_{ov}} = \frac{2\,(0.5\ \mathrm{mA})}{0.67\ \mathrm{V}} = 1.49\ \mathrm{mS},\\
r_{O1} = r_{O3} &= \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega.
\end{aligned}
$$

**PMOS $M_5$, $M_7$** ($|V_{ov}| = 0.53$ V):

$$
\begin{aligned}
g_{m5} = g_{m7} &= \frac{2\,(0.5\ \mathrm{mA})}{0.53\ \mathrm{V}} = 1.89\ \mathrm{mS},\\
r_{O5} = r_{O7} &= \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega.
\end{aligned}
$$

(Check with $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$: $\sqrt{2(134\ \mu)(16.6)(0.5\ \mathrm{m})} = 1.49$ mS and $\sqrt{2(38.4\ \mu)(92.6)(0.5\ \mathrm{m})} = 1.89$ mS.)

### Step 3 — Body-effect transconductances of the cascode devices

The body transconductance is $g_{mb} = \eta g_m$ with

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}},$$

where $V_{SB}$ is the source-bulk voltage (magnitude, for the PMOS).

**$M_3$.** The tail source sits at its minimum, so $V_P = 0.4$ V. $M_1$ is at the edge of saturation, so $V_{DS1} = V_{ov1}$, and the source of $M_3$ (the drain of $M_1$) is at

$$V_{S3} = V_P + V_{ov1} = 0.4\ \mathrm{V} + 0.67\ \mathrm{V} = 1.07\ \mathrm{V}.$$

The NMOS bulk is grounded, so $V_{SB3} = 1.07$ V and

$$
\begin{aligned}
\eta_3 &= \frac{0.45\ \mathrm{V^{1/2}}}{2\sqrt{0.9\ \mathrm{V} + 1.07\ \mathrm{V}}} = \frac{0.45}{2\times1.404} = 0.160,\\
g_{mb3} &= 0.160\times1.49\ \mathrm{mS} = 0.239\ \mathrm{mS}.
\end{aligned}
$$

**$M_5$.** $M_7$ is at the edge of saturation, so the source of $M_5$ is one overdrive below the supply: $V_{S5} = V_{DD} - |V_{ov7}| = 3 - 0.53 = 2.47$ V. The PMOS bulk is at $V_{DD}$, so $|V_{SB5}| = 0.53$ V and

$$
\begin{aligned}
\eta_5 &= \frac{0.4\ \mathrm{V^{1/2}}}{2\sqrt{0.8\ \mathrm{V} + 0.53\ \mathrm{V}}} = \frac{0.4}{2\times1.153} = 0.173,\\
g_{mb5} &= 0.173\times1.89\ \mathrm{mS} = 0.327\ \mathrm{mS}.
\end{aligned}
$$

**Devices with no body effect in the small-signal sense:** $M_1$ (its source is the virtual ground P, so $v_{bs1} = 0$), $M_7$ and $M_9$ (source at $V_{DD}$), and $M_{11}$ (source at ground).

### Step 4 — Small-signal model of the first-stage half circuit

Nodes: input (gate of $M_1$), A (drain of $M_1$ = source of $M_3$), X (output), B (drain of $M_7$ = source of $M_5$); the gates of $M_3$, $M_5$, $M_7$, all bulks, $V_{DD}$ and P are AC ground.

- $M_1$: current $g_{m1}v_{in}$ from A to ground, with $r_{O1}$ from A to ground.
- $M_3$: current $(g_{m3} + g_{mb3})(-v_A)$ from X to A (since $v_{gs3} = v_{bs3} = -v_A$), with $r_{O3}$ between X and A.
- $M_5$: current $(g_{m5} + g_{mb5})v_B$ from B to X (since $v_{sg5} = v_{sb5} = v_B$), with $r_{O5}$ between B and X.
- $M_7$: only $r_{O7}$ from B to AC ground (its gate and source are both at AC ground).

<!-- diagram: diagram-01.cir -->

### Step 5 — Resistance looking down into the NMOS cascode

Apply a test voltage $v_X$ at X and let $i_X$ flow into the drain of $M_3$. With $v_{in} = 0$, the same current flows through $r_{O1}$, so $v_A = i_Xr_{O1}$. KCL for the current through $M_3$:

$$
\begin{aligned}
i_X &= (g_{m3} + g_{mb3})(-v_A) + \frac{v_X - v_A}{r_{O3}}\\
i_X &= -(g_{m3} + g_{mb3})\,i_Xr_{O1} + \frac{v_X - i_Xr_{O1}}{r_{O3}}\\
i_Xr_{O3} &= -(g_{m3} + g_{mb3})r_{O3}r_{O1}\,i_X + v_X - i_Xr_{O1}\\
v_X &= i_X\left[(g_{m3} + g_{mb3})r_{O3}r_{O1} + r_{O1} + r_{O3}\right].
\end{aligned}
$$

So

$$
\begin{aligned}
R_{down} &= (g_{m3} + g_{mb3})r_{O3}r_{O1} + r_{O1} + r_{O3}\\
&= (1.49 + 0.239)\ \mathrm{mS}\times(20\ \mathrm{k}\Omega)(20\ \mathrm{k}\Omega) + 40\ \mathrm{k}\Omega\\
&= 693\ \mathrm{k}\Omega + 40\ \mathrm{k}\Omega = 733\ \mathrm{k}\Omega .
\end{aligned}
$$

The cascode multiplies $r_{O1}$ by roughly its intrinsic gain $(g_{m3} + g_{mb3})r_{O3} \approx 35$. That is why it is used.

### Step 6 — Resistance looking up into the PMOS cascode load

The same derivation, with $M_5$ as the cascode device and $r_{O7}$ as the degeneration:

$$
\begin{aligned}
R_{up} &= (g_{m5} + g_{mb5})r_{O5}r_{O7} + r_{O5} + r_{O7}\\
&= (1.89 + 0.327)\ \mathrm{mS}\times(10\ \mathrm{k}\Omega)(10\ \mathrm{k}\Omega) + 20\ \mathrm{k}\Omega\\
&= 221\ \mathrm{k}\Omega + 20\ \mathrm{k}\Omega = 241\ \mathrm{k}\Omega .
\end{aligned}
$$

The PMOS side is about three times smaller, because the PMOS devices have twice the $\lambda$ (half the $r_O$) of the NMOS devices. The load therefore dominates the output resistance.

**Total output resistance at X:**

$$R_{out} = R_{down}\parallel R_{up} = \frac{(733\ \mathrm{k}\Omega)(241\ \mathrm{k}\Omega)}{733\ \mathrm{k}\Omega + 241\ \mathrm{k}\Omega} = 182\ \mathrm{k}\Omega .$$

### Step 7 — First-stage gain

The cascode's short-circuit transconductance $G_m$ (output shorted to ground) is essentially $g_{m1}$, because $M_3$ presents a very low resistance at node A. Then

$$A_1 = G_mR_{out} \approx g_{m1}R_{out} = (1.49\ \mathrm{mS})(182\ \mathrm{k}\Omega) = 271 .$$

**Exact value.** With X shorted to ground, KCL at node A gives

$$
\begin{aligned}
g_{m1}v_{in} + \frac{v_A}{r_{O1}} &= -\left(g_{m3} + g_{mb3} + \frac{1}{r_{O3}}\right)v_A\\
v_A &= -\frac{g_{m1}v_{in}}{g_{m3} + g_{mb3} + 1/r_{O3} + 1/r_{O1}} .
\end{aligned}
$$

The short-circuit output current is the current through $M_3$, $i_{out} = -(g_{m3} + g_{mb3} + 1/r_{O3})v_A$, so

$$G_m = g_{m1}\,\frac{g_{m3} + g_{mb3} + 1/r_{O3}}{g_{m3} + g_{mb3} + 1/r_{O3} + 1/r_{O1}} = g_{m1}\,\frac{1.782\ \mathrm{mS}}{1.832\ \mathrm{mS}} = 0.973\,g_{m1},$$

and $A_1 = 0.973\times271 = 264$. The small loss is the signal current that leaks through $r_{O1}$ instead of entering the cascode.

### Step 8 — Second-stage gain

$M_9$ has $(W/L)_9 = 100/0.5 = 200$ and carries 0.5 mA:

$$
\begin{aligned}
g_{m9} &= \sqrt{2\mu_pC_{ox}(W/L)_9I_{D9}} = \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(200)(0.5\ \mathrm{mA})} = \sqrt{7.68\times10^{-6}}\ \mathrm{S} = 2.77\ \mathrm{mS},\\
r_{O9} &= \frac{1}{\lambda_pI_{D9}} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
r_{O11} &= \frac{1}{\lambda_nI_{D11}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O9}\parallel r_{O11} &= \frac{10\times20}{10+20}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega,\\
A_2 &= g_{m9}(r_{O9}\parallel r_{O11}) = (2.77\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 18.5 .
\end{aligned}
$$

The gate of $M_9$ draws no current, so the second stage does not load node X.

### Step 9 — Overall gain

Both stages invert, so the overall gain is positive:

$$A_v = A_1A_2 .$$

- With $G_m \approx g_{m1}$: $A_v = 271\times18.5 \approx 5.0\times10^3$.
- Exact half-circuit analysis: $A_v = 264\times18.5 \approx 4.87\times10^3$.

In decibels, $20\log_{10}(4.87\times10^3) \approx 74$ dB.

**Effect of the approximations.** Dropping the $r_{O1} + r_{O3}$ and $r_{O5} + r_{O7}$ terms gives $R_{down} = 693$ kΩ, $R_{up} = 221$ kΩ, $A_1 = 250$ and $A_v \approx 4.6\times10^3$. Ignoring body effect gives $R_{down} = 637$ kΩ, $R_{up} = 209$ kΩ, $A_1 \approx 235$ and $A_v \approx 4.3\times10^3$. The body effect *raises* the gain by about 15 %, because $g_{mb}$ adds to $g_m$ in the cascode boost factor.

### Result

$$A_v = g_{m1}(R_{down}\parallel R_{up})\times g_{m9}(r_{O9}\parallel r_{O11}) \approx 4.9\times10^3\ (\approx 74\ \mathrm{dB}),$$

with

$$R_{down} = (g_{m3} + g_{mb3})r_{O3}r_{O1} + r_{O1} + r_{O3} \approx 0.73\ \mathrm{M}\Omega, \qquad R_{up} = (g_{m5} + g_{mb5})r_{O5}r_{O7} + r_{O5} + r_{O7} \approx 0.24\ \mathrm{M}\Omega,$$

$A_1 \approx 264$–$271$ and $A_2 \approx 18.5$. Depending on the cascode approximation the gain is $4.6$–$5.0\times10^3$ (about $4.2$–$4.3\times10^3$ if body effect is ignored).

**Common mistake.** Treating the first stage as a simple stage with gain $g_{m1}(r_{O1}\parallel r_{O7})$, which ignores the cascodes and gives a first-stage gain of only $1.49\ \mathrm{mS}\times(20\ \mathrm{k}\Omega\parallel10\ \mathrm{k}\Omega) \approx 10$, about 27 times too small. In a telescopic stage the resistance at X is that of two *cascodes* in parallel.

**Common mistake.** Using only $r_{O9}$ in the second stage. The output node is loaded by both $M_9$ and the current source $M_{11}$, so the resistance is $r_{O9}\parallel r_{O11}$. Also, using $W/L = 100$ for $M_9$ gives $g_{m9} = 1.96$ mS and $A_2 \approx 13$.

**Common mistake.** Leaving out $g_{mb}$ of the cascode devices, or adding body effect to $M_1$. The sources of $M_3$ and $M_5$ sit away from their bulk potentials (1.07 V and 0.53 V), so $g_{mb3}$ and $g_{mb5}$ raise $R_{down}$ and $R_{up}$. $M_1$'s source is at the virtual ground P, so $v_{bs1} = 0$ and its $g_{mb}$ plays no role.
