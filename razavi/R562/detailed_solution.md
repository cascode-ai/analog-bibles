# Detailed solution - R562

**Approach.** The power budget fixes the branch current; the target $g_{m1}$ then fixes $(W/L)_1$, and $(W/L)_2 = K(W/L)_1$. The loop equation $V_{GS1} = V_{GS2} + I_{D2}R_S$ gives the required $R_S$, first without and then with the body effect of $M_2$ (whose source is above ground), and $R_S = 1/(C_Sf_{CK})$ gives $C_S$. The PMOS mirror only needs to stay saturated.

### Step 1 — Branch currents and sizing of $M_1$, $M_2$

The total supply current is

$$I_{tot} = \frac{P}{V_{DD}} = \frac{1\ \mathrm{mW}}{3\ \mathrm{V}} = 333\ \mu\mathrm{A},$$

and the identical mirror $M_3$, $M_4$ splits it equally:

$$I_{D1} = I_{D2} = I = \frac{333\ \mu\mathrm{A}}{2} = 167\ \mu\mathrm{A}.$$

The target is $g_{m1} = 1/(500\ \Omega) = 2$ mS, so

$$
\begin{aligned}
\left(\frac WL\right)_1 &= \frac{g_{m1}^2}{2\mu_nC_{ox}I_{D1}}\\
&= \frac{(2\times10^{-3}\ \mathrm{S})^2}{2(134\times10^{-6}\ \mathrm{A/V^2})(166.7\times10^{-6}\ \mathrm{A})}\\
&= \frac{4\times10^{-6}}{4.467\times10^{-8}} = 89.6 ,
\end{aligned}
$$

$$V_{ov1} = \frac{2I_{D1}}{g_{m1}} = \frac{2(166.7\ \mu\mathrm{A})}{2\ \mathrm{mS}} = 0.167\ \mathrm{V}, \qquad V_{GS1} = 0.7 + 0.167 = 0.867\ \mathrm{V}.$$

Then $(W/L)_2 = K(W/L)_1 = 4\times89.6 = 358$. $M_2$ carries the same current with $K$ times the width, so its overdrive is smaller by $\sqrt K$:

$$V_{ov2} = \frac{V_{ov1}}{\sqrt K} = \frac{0.167}{2} = 0.0833\ \mathrm{V}.$$

### Step 2 — $R_S$ and $C_S$, ignoring the body effect

KVL around the gate loop:

$$V_{GS1} = V_{GS2} + IR_S .$$

If $V_{TH2} = V_{TH1}$, the thresholds cancel:

$$IR_S = V_{ov1} - V_{ov2} = 0.167 - 0.0833 = 0.0833\ \mathrm{V}, \qquad R_S = \frac{0.0833\ \mathrm{V}}{166.7\ \mu\mathrm{A}} = 500\ \Omega,$$

in agreement with the constant-$g_m$ result $g_{m1} = \dfrac{2}{R_S}\left(1 - \dfrac{1}{\sqrt K}\right) = 1/R_S$ for $K = 4$. Then

$$C_S = \frac{1}{R_Sf_{CK}} = \frac{1}{(500\ \Omega)(50\times10^{6}\ \mathrm{Hz})} = 40\ \mathrm{pF}.$$

### Step 3 — Including the body effect of $M_2$

$M_2$'s bulk is grounded but its source sits at $V_{SB2} = IR_S$, so

$$V_{TH2} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + IR_S} - \sqrt{2|\phi_F|}\right).$$

With $V_{TH1} = V_{TH0}$ (source grounded), the loop equation becomes

$$
\begin{aligned}
V_{TH0} + V_{ov1} &= V_{TH2} + V_{ov2} + IR_S\\
V_{ov1} - V_{ov2} &= IR_S + \gamma\left(\sqrt{2|\phi_F| + IR_S} - \sqrt{2|\phi_F|}\right).
\end{aligned}
$$

With $x = IR_S$:

$$0.0833 = x + 0.45\left(\sqrt{0.9 + x} - 0.9487\right).$$

By trial, $x = 0.0676$ V:

$$
\begin{aligned}
\sqrt{0.9 + 0.0676} &= \sqrt{0.9676} = 0.9837,\\
0.45(0.9837 - 0.9487) &= 0.45\times0.0350 = 0.0157\ \mathrm{V},\\
x + 0.0157 &= 0.0676 + 0.0157 = 0.0833\ \mathrm{V}.\ \checkmark
\end{aligned}
$$

So $IR_S = 67.6$ mV, and $M_2$'s threshold is 15.7 mV higher than $M_1$'s. Then

$$
\begin{aligned}
R_S &= \frac{67.6\ \mathrm{mV}}{166.7\ \mu\mathrm{A}} = 406\ \Omega,\\
C_S &= \frac{1}{R_Sf_{CK}} = \frac{1}{(406\ \Omega)(50\times10^{6}\ \mathrm{Hz})} = 49\ \mathrm{pF}.
\end{aligned}
$$

The body effect uses up part of the overdrive difference, leaving less voltage for $R_S$. Ignoring it would give $C_S = 40$ pF, and the actual $g_{m1}$ would then come out about 20 % low.

### Step 4 — PMOS mirror and saturation checks

$(W/L)_{3,4}$ is not critical; the devices only need to stay saturated. With a 0.3-V overdrive:

$$\left(\frac WL\right)_{3,4} = \frac{2|I_D|}{\mu_pC_{ox}|V_{ov}|^2} = \frac{2(166.7\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2} = \frac{333.3}{3.456} \approx 96,$$

so $|V_{GS3,4}| = 0.8 + 0.3 = 1.1$ V. $M_1$ and $M_4$ are diode-connected, hence saturated. $M_4$ puts the drain of $M_2$ at $V_{DD} - |V_{GS4}| = 3 - 1.1 = 1.9$ V, well above $V_{G2} - V_{TH2} = 0.867 - 0.716 = 0.15$ V, so $M_2$ is saturated. $M_3$'s drain is at $V_{GS1} = 0.867$ V, so $|V_{DS3}| = 3 - 0.867 = 2.13$ V $> |V_{ov3}| = 0.3$ V. Any PMOS size with $|V_{GS4}|$ up to about 2.8 V would still keep $M_2$ saturated.

### Result

- Branch currents: $I_{D1} = I_{D2} = 167\ \mu$A (from 1 mW / 3 V = 333 μA).
- $(W/L)_1 = g_{m1}^2/(2\mu_nC_{ox}I_{D1}) \approx 90$ and $(W/L)_2 = 4(W/L)_1 \approx 358$, with overdrives 0.167 V and 0.083 V.
- Including the body effect of $M_2$: $83.3\ \mathrm{mV} = IR_S + \Delta V_{TH2}$ gives $IR_S = 67.6$ mV, $R_S \approx 406\ \Omega$ and $C_S = 1/(R_Sf_{CK}) \approx 49$ pF. With the ideal constant-$g_m$ relation (body effect neglected), $R_S = 500\ \Omega$ and $C_S = 40$ pF.
- PMOS: $(W/L)_{3,4}$ is not critical, e.g. about 96–100 (overdrive about 0.3 V). All devices are saturated.

**Common mistake.** Assigning the whole 333 μA to each branch. The 1-mW budget covers *both* branches; doubling the current would halve $(W/L)_1$ and exceed the budget by a factor of two.

**Common mistake.** Using $g_{m1} = 2/R_S$ (forgetting the $1 - 1/\sqrt K$ factor), which gives $R_S = 1$ kΩ and $C_S = 20$ pF. For $K = 4$ the factor is $1/2$, so $g_{m1} = 1/R_S$.

**Common mistake.** Ignoring the body effect of $M_2$ even though $\gamma$ is given and the bulk is grounded. The 15.7-mV threshold increase is a sizable fraction of the 83-mV overdrive difference and changes $C_S$ by about 20 %.
