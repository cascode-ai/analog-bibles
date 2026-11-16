# Detailed solution - R562

**Approach.** The power budget fixes the current in each branch. The target $g_{m1}$ and that current then fix $(W/L)_1$ through the square law, and $(W/L)_2 = K(W/L)_1$. The loop equation $V_{GS1} = V_{GS2} + I_{D2}R_S$ gives the required $R_S$, first without and then with the body effect of $M_2$ (whose source is above ground). The switched-capacitor relation $R_S = 1/(C_Sf_{CK})$ then gives $C_S$. The PMOS mirror only needs to stay saturated.

### Step 1 — The circuit and the switched-capacitor resistor

Reading the figure:

- $M_1$ is a diode-connected NMOS with its source grounded; its gate/drain node drives the gate of $M_2$.
- $M_2$ ($K$ times wider than $M_1$) has its source connected to the switched-capacitor network.
- $M_3$ and $M_4$ are identical PMOS devices. $M_4$ is diode-connected at the drain of $M_2$ (where $C_B$ filters the switching ripple), and $M_3$ mirrors its current into $M_1$.

**Switched-capacitor resistor.** When $S_1$ is on, $C_S$ charges to the source voltage $V_S$ of $M_2$ and takes the charge $C_SV_S$. When $S_2$ is on, that charge is dumped to ground. This repeats $f_{CK}$ times per second, so the average current is

$$\bar I = C_SV_Sf_{CK} \quad\Longrightarrow\quad R_S = \frac{V_S}{\bar I} = \frac{1}{C_Sf_{CK}} .$$

### Step 2 — Branch currents from the power budget

The total supply current is

$$I_{tot} = \frac{P}{V_{DD}} = \frac{1\ \mathrm{mW}}{3\ \mathrm{V}} = 333\ \mu\mathrm{A}.$$

$M_3$ and $M_4$ are identical with the same $V_{GS}$, so the two branches carry equal currents:

$$I_{D1} = I_{D2} = I = \frac{333\ \mu\mathrm{A}}{2} = 167\ \mu\mathrm{A}.$$

### Step 3 — Sizing $M_1$ for $g_{m1} = 1/(500\ \Omega)$

The target is $g_{m1} = 1/(500\ \Omega) = 2$ mS. The square-law transconductance is $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$. Square it and solve for $W/L$:

$$
\begin{aligned}
\left(\frac WL\right)_1 &= \frac{g_{m1}^2}{2\mu_nC_{ox}I_{D1}}\\
&= \frac{(2\times10^{-3}\ \mathrm{S})^2}{2(134\times10^{-6}\ \mathrm{A/V^2})(166.7\times10^{-6}\ \mathrm{A})}\\
&= \frac{4\times10^{-6}}{4.467\times10^{-8}} = 89.6 .
\end{aligned}
$$

The overdrive voltage $V_{ov} = V_{GS} - V_{TH}$ follows from $g_m = 2I_D/V_{ov}$:

$$V_{ov1} = \frac{2I_{D1}}{g_{m1}} = \frac{2(166.7\ \mu\mathrm{A})}{2\ \mathrm{mS}} = 0.167\ \mathrm{V}, \qquad V_{GS1} = 0.7 + 0.167 = 0.867\ \mathrm{V}.$$

### Step 4 — Sizing $M_2$

By the problem's definition, $(W/L)_2 = K(W/L)_1$:

$$\left(\frac WL\right)_2 = 4\times89.6 = 358 .$$

$M_2$ carries the same current with $K$ times the width, so from $I = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$ its overdrive is smaller by $\sqrt K$:

$$V_{ov2} = \frac{V_{ov1}}{\sqrt K} = \frac{0.167}{2} = 0.0833\ \mathrm{V}.$$

### Step 5 — $R_S$ and $C_S$, ignoring the body effect

**KVL around the gate loop**, from ground up through $M_1$'s gate–source voltage and back down through $M_2$ and $R_S$:

$$V_{GS1} = V_{GS2} + IR_S .$$

If $V_{TH2} = V_{TH1}$, the thresholds cancel:

$$IR_S = V_{ov1} - V_{ov2} = 0.167 - 0.0833 = 0.0833\ \mathrm{V}, \qquad R_S = \frac{0.0833\ \mathrm{V}}{166.7\ \mu\mathrm{A}} = 500\ \Omega.$$

This agrees with the standard constant-$g_m$ result $g_{m1} = \dfrac{2}{R_S}\left(1 - \dfrac{1}{\sqrt K}\right)$, which for $K = 4$ gives $g_{m1} = 1/R_S$. Then

$$C_S = \frac{1}{R_Sf_{CK}} = \frac{1}{(500\ \Omega)(50\times10^{6}\ \mathrm{Hz})} = 40\ \mathrm{pF}.$$

### Step 6 — Including the body effect of $M_2$

The bulk of $M_2$ is grounded but its source sits at $V_{SB2} = IR_S$, so its threshold rises:

$$V_{TH2} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + IR_S} - \sqrt{2|\phi_F|}\right).$$

Write the loop equation with the two thresholds kept separate ($V_{TH1} = V_{TH0}$ because $M_1$'s source is grounded):

$$
\begin{aligned}
V_{TH0} + V_{ov1} &= V_{TH2} + V_{ov2} + IR_S\\
V_{ov1} - V_{ov2} &= IR_S + \gamma\left(\sqrt{2|\phi_F| + IR_S} - \sqrt{2|\phi_F|}\right).
\end{aligned}
$$

Substitute the numbers, with $x = IR_S$:

$$0.0833 = x + 0.45\left(\sqrt{0.9 + x} - 0.9487\right).$$

Solve by trial. Try $x = 0.0676$ V:

$$
\begin{aligned}
\sqrt{0.9 + 0.0676} &= \sqrt{0.9676} = 0.9837,\\
0.45(0.9837 - 0.9487) &= 0.45\times0.0350 = 0.0157\ \mathrm{V},\\
x + 0.0157 &= 0.0676 + 0.0157 = 0.0833\ \mathrm{V}.\ \checkmark
\end{aligned}
$$

So $IR_S = 67.6$ mV, and the threshold of $M_2$ is 15.7 mV higher than that of $M_1$. Then

$$
\begin{aligned}
R_S &= \frac{67.6\ \mathrm{mV}}{166.7\ \mu\mathrm{A}} = 406\ \Omega,\\
C_S &= \frac{1}{R_Sf_{CK}} = \frac{1}{(406\ \Omega)(50\times10^{6}\ \mathrm{Hz})} = 49\ \mathrm{pF}.
\end{aligned}
$$

**Why it matters.** The body effect "uses up" part of the overdrive difference, so less voltage is left for $R_S$. A smaller $R_S$ (larger $C_S$) is needed for the same $g_{m1}$. Ignoring it would give $C_S = 40$ pF, and the actual $g_{m1}$ would then come out about 20 % low.

### Step 7 — PMOS mirror and saturation checks

$(W/L)_{3,4}$ is not critical; the devices only need to stay saturated. Choose an overdrive of 0.3 V:

$$\left(\frac WL\right)_{3,4} = \frac{2|I_D|}{\mu_pC_{ox}|V_{ov}|^2} = \frac{2(166.7\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2} = \frac{333.3}{3.456} \approx 96,$$

which gives $|V_{GS3,4}| = 0.8 + 0.3 = 1.1$ V.

**Checks:**

- $M_4$ is diode-connected, hence saturated. Its drain, which is also the drain of $M_2$, sits at $V_{DD} - |V_{GS4}| = 3 - 1.1 = 1.9$ V.
- $M_2$: gate at $V_{GS1} = 0.867$ V, threshold $V_{TH2} = 0.716$ V. It is saturated if $V_{D2} \ge V_{G2} - V_{TH2} = 0.15$ V; it has 1.9 V. ✓
- $M_3$: drain at $V_{GS1} = 0.867$ V, so $|V_{DS3}| = 3 - 0.867 = 2.13$ V $> |V_{ov3}| = 0.3$ V. ✓
- $M_1$ is diode-connected, hence saturated.

Any PMOS size with $|V_{GS4}|$ up to about 2.8 V would still keep $M_2$ saturated, so the choice is free within wide limits.

### Result

- Branch currents: $I_{D1} = I_{D2} = 167\ \mu$A (from 1 mW / 3 V = 333 μA).
- $(W/L)_1 = g_{m1}^2/(2\mu_nC_{ox}I_{D1}) \approx 90$ and $(W/L)_2 = 4(W/L)_1 \approx 358$, with overdrives 0.167 V and 0.083 V.
- Including the body effect of $M_2$: $83.3\ \mathrm{mV} = IR_S + \Delta V_{TH2}$ gives $IR_S = 67.6$ mV, $R_S \approx 406\ \Omega$ and $C_S = 1/(R_Sf_{CK}) \approx 49$ pF. With the ideal constant-$g_m$ relation (body effect neglected), $R_S = 500\ \Omega$ and $C_S = 40$ pF.
- PMOS: $(W/L)_{3,4}$ is not critical, e.g. about 96–100 (overdrive about 0.3 V). All devices are saturated.

**Common mistake.** Assigning the whole 333 μA to each branch. The 1-mW budget covers *both* branches of the circuit, so each carries 167 μA. Doubling the current would halve $(W/L)_1$ and exceed the power budget by a factor of two.

**Common mistake.** Using $g_{m1} = 2/R_S$ (forgetting the $1 - 1/\sqrt K$ factor) and obtaining $R_S = 1$ kΩ and $C_S = 20$ pF. For $K = 4$, the factor is $1/2$, so $g_{m1} = 1/R_S$.

**Common mistake.** Ignoring the body effect of $M_2$ even though $\gamma$ is given and the bulk is grounded. The 15.7-mV threshold increase is a sizable fraction of the 83-mV overdrive difference, and it changes $C_S$ by about 20 %.
