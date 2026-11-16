# Detailed solution - R485

**Approach.** From the bias point, find the resistance to ground at node X (the high-impedance drain of $M_2$) and at node Y (the source-follower output), and multiply each by its capacitance to get the poles. With the low-frequency gain $A_0$, the unity-gain loop gain is $A_0/[(1 + s/\omega_X)(1 + s/\omega_Y)]$; find where its magnitude is 1 and read the phase margin there.

### Step 1 — Feedback polarity and small-signal parameters

Call the common source node of $M_1$ and $M_2$ P. Raising the gate of $M_2$ increases its drain current against the fixed current of $M_3$, so X and the follower output Y fall: the gate of $M_2$ is the **inverting** input, and tying $V_{out}$ (node Y) to it gives negative feedback with $\beta = 1$.

$I_{D1} = I_{D2} = I_{D3} = I_{SS}/2 = 0.25$ mA and $I_{D4} = I_1 = 0.5$ mA, with $W/L = 50/0.5 = 100$ for all devices:

$$
\begin{aligned}
g_{m1} = g_{m2} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = \sqrt{6.70\times10^{-6}}\ \mathrm{A/V} = 2.59\ \mathrm{mS},\\
g_{m4} &= \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.5\ \mathrm{mA})} = \sqrt{13.4\times10^{-6}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.
\end{aligned}
$$

With $r_O = 1/(\lambda I_D)$:

$$
\begin{aligned}
r_{O1} = r_{O2} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
r_{O3} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\\
r_{O4} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega.
\end{aligned}
$$

### Step 2 — Resistance at node X

With both inputs at ac ground, X sees $r_{O3}$ upward and the drain of $M_2$ downward. From P, $M_1$ (gate and drain at ac ground) looks like a diode-connected device, $R_S = (1/g_{m1}) \parallel r_{O1} = r_{O1}/(1 + g_{m1}r_{O1})$; the ideal tail source adds nothing. A test current $I_t$ into X flows through $M_2$ to P and then through $R_S$ to ground.

<!-- diagram: diagram-01.cir -->

$V_P = I_tR_S$ and $V_{GS2} = 0 - V_P = -I_tR_S$, so

$$
\begin{aligned}
I_t &= g_{m2}V_{GS2} + \frac{V_X - V_P}{r_{O2}} = -g_{m2}I_tR_S + \frac{V_X - I_tR_S}{r_{O2}}\\
V_X &= I_t\left[r_{O2} + (1 + g_{m2}r_{O2})R_S\right].
\end{aligned}
$$

With identical devices, $(1 + g_{m2}r_{O2})R_S = r_{O1} = r_{O2}$, so

$$R_{down} = r_{O2} + r_{O2} = 2r_{O2} = 80\ \mathrm{k}\Omega ,$$

$$R_X = R_{down} \parallel r_{O3} = \frac{80\times20}{80 + 20}\ \mathrm{k}\Omega = 16\ \mathrm{k}\Omega .$$

### Step 3 — Resistance at node Y and the gain

**Node Y**, the source of the follower $M_4$ with an ideal bias source $I_1$:

$$R_Y = \frac{1}{g_{m4}} \parallel r_{O4} = 273\ \Omega \parallel 20\ \mathrm{k}\Omega = \frac{273\times20\,000}{20\,273}\ \Omega = 269.5\ \Omega .$$

**First-stage transconductance.** With X shorted to ac ground the pair is symmetric, P is a virtual ground, and $M_2$'s drain current changes by $g_{m2}V_{in}/2$:

$$G_m = \frac{g_{m2}}{2} = \frac{2.59\ \mathrm{mS}}{2} = 1.294\ \mathrm{mS}.$$

(Exactly: the degenerated device gives $G_m = g_{m2}/[1 + (g_{m2} + 1/r_{O2})R_S] = g_{m2}/2$ here.)

**Gains:**

$$
\begin{aligned}
A_1 &= G_mR_X = (1.294\ \mathrm{mS})(16\ \mathrm{k}\Omega) = 20.7,\\
A_{v4} &= \frac{g_{m4}r_{O4}}{1 + g_{m4}r_{O4}} = \frac{(3.66\ \mathrm{mS})(20\ \mathrm{k}\Omega)}{1 + 73.2} = \frac{73.2}{74.2} = 0.987,\\
A_0 &= A_1A_{v4} = 20.7\times0.987 = 20.4 .
\end{aligned}
$$

### Step 4 — The two poles

$$
\begin{aligned}
\omega_X &= \frac{1}{R_XC_X} = \frac{1}{(16\ \mathrm{k}\Omega)(0.5\ \mathrm{pF})} = \frac{1}{8\ \mathrm{ns}} = 1.25\times10^8\ \mathrm{rad/s}\quad(\approx 20\ \mathrm{MHz}),\\
\omega_Y &= \frac{1}{R_YC_Y} = \frac{1}{(269.5\ \Omega)(0.5\ \mathrm{pF})} = \frac{1}{0.135\ \mathrm{ns}} = 7.42\times10^9\ \mathrm{rad/s}\quad(\approx 1.18\ \mathrm{GHz}).
\end{aligned}
$$

X is the dominant pole; Y is about 60 times higher.

### Step 5 — Gain crossover in unity-gain feedback

With $\beta = 1$,

$$H(j\omega) = \frac{A_0}{(1 + j\omega/\omega_X)(1 + j\omega/\omega_Y)}, \qquad |H(j\omega_u)| = 1 .$$

Since $\omega_u \gg \omega_X$, $\sqrt{1 + (\omega/\omega_X)^2} \approx \omega/\omega_X$ and the crossover is near

$$\mathrm{GBW} = A_0\,\omega_X = 20.4\times1.25\times10^8 = 2.55\times10^9\ \mathrm{rad/s}.$$

The Y pole lowers the magnitude by $\sqrt{1 + (\omega_u/\omega_Y)^2}$, so $\omega_u \approx \mathrm{GBW}/\sqrt{1 + (\omega_u/\omega_Y)^2}$. Iterating from $\omega_u = 2.55\times10^9$:

$$\omega_u \approx \frac{2.55\times10^9}{\sqrt{1 + (2.55/7.42)^2}} = \frac{2.55\times10^9}{1.058} = 2.41\times10^9\ \mathrm{rad/s},$$

and one more pass (with the exact X-pole factor) converges to $\omega_u = 2.42\times10^9$ rad/s. Check:

$$|H| = \frac{20.4}{\sqrt{1 + 19.39^2}\,\sqrt{1 + 0.327^2}} = \frac{20.4}{19.42\times1.052} = \frac{20.4}{20.43} = 1.00 .\ \checkmark$$

### Step 6 — Phase margin

$$
\begin{aligned}
\tan^{-1}\frac{\omega_u}{\omega_X} &= \tan^{-1}\frac{2.42\times10^9}{1.25\times10^8} = \tan^{-1}(19.4) = 87.0°,\\
\tan^{-1}\frac{\omega_u}{\omega_Y} &= \tan^{-1}\frac{2.42\times10^9}{7.42\times10^9} = \tan^{-1}(0.327) = 18.1°,\\
\angle H(j\omega_u) &= -(87.0° + 18.1°) = -105.1°,\\
\mathrm{PM} &= 180° - 105.1° = 74.9° \approx 75° .
\end{aligned}
$$

Because $A_0$ is only about 20, the dominant pole contributes 87°, not a full 90°. With the cruder $R_X \approx r_{O2} \parallel r_{O3} = 13.3$ kΩ, $\omega_X = 1.5\times10^8$ rad/s and $A_0 = 17$, but the GBW (and hence $\omega_u$) barely changes and PM ≈ 75.5°: the margin is set mainly by $\omega_Y/\mathrm{GBW}$.

### Result

- $\omega_X = 1/(R_XC_X) \approx 1.25\times10^8$ rad/s (≈ 20 MHz), with $R_X = 2r_{O2} \parallel r_{O3} = 16$ kΩ.
- $\omega_Y = 1/(R_YC_Y) \approx 7.4\times10^9$ rad/s (≈ 1.18 GHz), with $R_Y = (1/g_{m4}) \parallel r_{O4} \approx 270\ \Omega$.
- $A_0 = (g_m/2)R_X\,A_{v4} \approx 20.4$; unity-gain crossover at $\omega_u \approx 2.42\times10^9$ rad/s.
- **Phase margin ≈ 75°.**

**Common mistake.** Using $G_m = g_m$ for the first stage. Only half of the differential input appears across $M_2$'s gate–source, so $G_m = g_m/2$; using $g_m$ doubles $A_0$ and the GBW, pushes the crossover toward $\omega_Y$, and gives a PM of about 61°.

**Common mistake.** Taking $R_Y = r_{O4}$ (20 kΩ) instead of $(1/g_{m4}) \parallel r_{O4}$, which would put the Y pole near $10^8$ rad/s. The follower's source is a low-impedance node, about $1/g_{m4}$, just as X is a high-impedance node (tens of kΩ), not $1/g_m$.

**Common mistake.** Getting the feedback sign wrong. The gate of $M_2$ is the inverting input (raising it lowers X and Y), so connecting $V_{out}$ to it gives negative feedback with $\beta = 1$.
