# Detailed solution - R289

**Approach.** Compute the small-signal parameters: $g_m$ from the square law, and $C_{GS}$, $C_{GD}$, $C_{DB}$ from the device geometry. Then write Kirchhoff's current law (KCL) at the gate node X and at the output to obtain the exact second-order transfer function of the common-source stage. Its denominator gives the two poles and its numerator the zero. We neglect $r_O$ first (as in the drawn model) and then repeat with $r_O$ included.

### Step 1 — Transconductance and output resistance

The aspect ratio is $W/L = 50/0.5 = 100$. Square-law saturation, $I_D = \tfrac12\mu_nC_{ox}(W/L)V_{ov}^2$, gives

$$
\begin{aligned}
g_m &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{2.68\times10^{-5}}\ \mathrm{A/V} = 5.18\ \mathrm{mS},\\
V_{ov} &= \frac{2I_D}{g_m} = \frac{2(1\ \mathrm{mA})}{5.18\ \mathrm{mS}} = 0.386\ \mathrm{V},\\
r_O &= \frac{1}{\lambda I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .
\end{aligned}
$$

### Step 2 — Device capacitances

**Gate oxide capacitance:**

$$WLC_{ox} = (50\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = 96\ \mathrm{fF}.$$

**$C_{GS}$** (saturation: two-thirds of the channel capacitance plus the gate–source overlap):

$$C_{GS} = \tfrac23(96\ \mathrm{fF}) + (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 64 + 20 = 84.0\ \mathrm{fF}.$$

**$C_{GD}$** (in saturation, only the gate–drain overlap):

$$C_{GD} = (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20.0\ \mathrm{fF}.$$

**$C_{DB}$** (drain junction: bottom area $W\times E$ plus the sidewall perimeter $2(W + E)$, zero bias). Note $C_{jsw} = 0.35\times10^{-11}\ \mathrm{F/m} = 0.0035\ \mathrm{fF/\mu m}$:

$$
\begin{aligned}
C_{DB} &= (50)(1.5)\ \mu\mathrm{m^2}\times0.56\ \mathrm{fF/\mu m^2} + 2(50 + 1.5)\ \mu\mathrm{m}\times0.0035\ \mathrm{fF/\mu m}\\
&= 42.0 + 0.36 = 42.4\ \mathrm{fF}.
\end{aligned}
$$

### Step 3 — Small-signal model and KCL

The source of $M_1$ is grounded, and $V_{DD}$ is ac ground. Model (λ neglected for now):

- node X: $R_S$ from $V_{in}$, $C_{GS}$ to ground, $C_{GD}$ to the output;
- output node: a current $g_mV_X$ to ground, $R_D$ to ac ground, $C_{DB}$ to ground, $C_{GD}$ to X.

<!-- diagram: diagram-01.cir -->

**KCL at X** (current in through $R_S$ = currents out through $C_{GS}$ and $C_{GD}$):

$$\frac{V_{in} - V_X}{R_S} = V_XC_{GS}s + (V_X - V_{out})C_{GD}s . \tag{1}$$

**KCL at the output** (current in through $C_{GD}$ = currents out through the transistor, $R_D$ and $C_{DB}$):

$$(V_X - V_{out})C_{GD}s = g_mV_X + \frac{V_{out}}{R_D} + V_{out}C_{DB}s . \tag{2}$$

### Step 4 — Transfer function

From (2), solve for $V_X$:

$$V_X(C_{GD}s - g_m) = V_{out}\left[\frac{1}{R_D} + (C_{GD} + C_{DB})s\right] \quad\Longrightarrow\quad V_X = V_{out}\frac{1/R_D + (C_{GD} + C_{DB})s}{C_{GD}s - g_m}.$$

Rewrite (1) as $V_{in}/R_S = V_X[1/R_S + (C_{GS} + C_{GD})s] - V_{out}C_{GD}s$. Substitute $V_X$ and multiply by $(C_{GD}s - g_m)$:

$$\frac{V_{in}}{R_S}(C_{GD}s - g_m) = V_{out}\left\{\left[\frac{1}{R_S} + (C_{GS} + C_{GD})s\right]\left[\frac{1}{R_D} + (C_{GD} + C_{DB})s\right] - C_{GD}s(C_{GD}s - g_m)\right\}.$$

Expand the braces. The $s^2$ terms are $(C_{GS} + C_{GD})(C_{GD} + C_{DB}) - C_{GD}^2 = C_{GS}C_{GD} + C_{GS}C_{DB} + C_{GD}C_{DB} \equiv \xi$. Then multiply both sides by $R_SR_D$:

$$\frac{V_{out}}{V_{in}} = \frac{(C_{GD}s - g_m)R_D}{R_SR_D\xi s^2 + \left[R_S(1 + g_mR_D)C_{GD} + R_SC_{GS} + R_D(C_{GD} + C_{DB})\right]s + 1}.$$

### Step 5 — The zero

The numerator vanishes at

$$s_z = +\frac{g_m}{C_{GD}} = \frac{5.18\ \mathrm{mS}}{20.0\ \mathrm{fF}} = +2.59\times10^{11}\ \mathrm{rad/s}, \qquad f_z = 41\ \mathrm{GHz},$$

in the **right half plane**. At this frequency the current fed forward through $C_{GD}$ cancels the transistor's $g_mV_X$, so no current reaches the output.

### Step 6 — The poles (λ neglected)

Numbers:

$$
\begin{aligned}
\xi &= (84)(20) + (84)(42.4) + (20)(42.4)\ \mathrm{fF^2} = 1680 + 3558 + 847 = 6085\ \mathrm{fF^2} = 6.09\times10^{-27}\ \mathrm{F^2},\\
R_SR_D\xi &= (1\ \mathrm{k}\Omega)(2\ \mathrm{k}\Omega)(6.09\times10^{-27}\ \mathrm{F^2}) = 1.217\times10^{-20}\ \mathrm{s^2},\\
g_mR_D &= (5.18\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 10.35,\\
R_S(1 + g_mR_D)C_{GD} &= (1\ \mathrm{k}\Omega)(11.35)(20\ \mathrm{fF}) = 2.271\times10^{-10}\ \mathrm{s},\\
R_SC_{GS} &= (1\ \mathrm{k}\Omega)(84\ \mathrm{fF}) = 0.840\times10^{-10}\ \mathrm{s},\\
R_D(C_{GD} + C_{DB}) &= (2\ \mathrm{k}\Omega)(62.4\ \mathrm{fF}) = 1.247\times10^{-10}\ \mathrm{s},\\
b &= 2.271 + 0.840 + 1.247 = 4.358\times10^{-10}\ \mathrm{s}.
\end{aligned}
$$

Roots of $1.217\times10^{-20}s^2 + 4.358\times10^{-10}s + 1 = 0$:

$$
\begin{aligned}
s &= \frac{-4.358\times10^{-10} \pm \sqrt{(4.358\times10^{-10})^2 - 4(1.217\times10^{-20})}}{2(1.217\times10^{-20})} = \frac{-4.358 \pm 3.758}{2.434}\times10^{10}\ \mathrm{s^{-1}},\\
\omega_{p1} &= 2.46\times10^9\ \mathrm{rad/s}\ (f_{p1} = 392\ \mathrm{MHz}), \qquad \omega_{p2} = 3.33\times10^{10}\ \mathrm{rad/s}\ (f_{p2} = 5.3\ \mathrm{GHz}).
\end{aligned}
$$

Both poles are real and in the left half plane. The low-frequency gain is $-g_mR_D = -10.4$.

**Checks.** The dominant-pole approximation gives $\omega_{p1} \approx 1/b = 2.29\times10^9$ rad/s and $\omega_{p2} \approx b/(R_SR_D\xi) = 3.58\times10^{10}$ rad/s, close to the exact roots because the poles are far apart. The largest term in $b$ is the Miller term $R_S(1 + g_mR_D)C_{GD}$. A pure Miller nodal estimate, by contrast, would give 512 MHz for the input pole and 1.24 GHz for the output pole; the latter is far from the true second pole, because Miller's approximation misplaces it.

### Step 7 — Including $r_O$

With λ = 0.1 V⁻¹, replace $R_D$ by $R_D\|r_O = 2\ \|\ 10 = 1.67\ \mathrm{k}\Omega$ (in the denominator and in the gain). Then $g_m(R_D\|r_O) = 8.63$, $R_SR_D\xi = 1.014\times10^{-20}\ \mathrm{s^2}$ and $b = 1.926 + 0.840 + 1.039 = 3.805\times10^{-10}$ s, giving

$$\omega_{p1} = 2.84\times10^9\ \mathrm{rad/s}\ (453\ \mathrm{MHz}), \qquad \omega_{p2} = 3.47\times10^{10}\ \mathrm{rad/s}\ (5.5\ \mathrm{GHz}),$$

the same zero, and a gain of −8.6.

### Result

With $g_m = 5.18$ mS, $C_{GS} = 84.0$ fF, $C_{GD} = 20.0$ fF and $C_{DB} = 42.4$ fF, and λ neglected (as in the drawn model):

- **Poles:** $\omega_{p1} \approx 2.46\times10^9$ rad/s ($f \approx 392$ MHz) and $\omega_{p2} \approx 3.33\times10^{10}$ rad/s ($f \approx 5.3$ GHz), both in the left half plane.
- **Zero:** $s = +g_m/C_{GD} \approx +2.59\times10^{11}$ rad/s ($f \approx 41$ GHz), in the right half plane.
- **Low-frequency gain:** $-g_mR_D = -10.4$.

Including $r_O = 1/(\lambda I_D) = 10\ \mathrm{k}\Omega$ ($R_D\|r_O = 1.67\ \mathrm{k}\Omega$): poles ≈ $2.84\times10^9$ rad/s (453 MHz) and $3.47\times10^{10}$ rad/s (5.5 GHz), the same zero, and a gain of −8.6.

**Common mistake.** Placing the zero in the left half plane, or at $g_m/C_{GS}$. The zero comes from the feedforward through $C_{GD}$ cancelling $g_mV_X$ at the output, which happens at $s = +g_m/C_{GD}$.

**Common mistake.** Omitting the Miller effect, which puts the dominant pole at several GHz (e.g. $1/[R_S(C_{GS} + C_{GD})] \approx 1.5$ GHz). $C_{GD}$ is multiplied by about $1 + g_mR_D \approx 11$ at the input, and that term dominates the first pole.

**Common mistake.** Reporting the two Miller nodal estimates (≈ 0.51 GHz and ≈ 1.24 GHz) as the poles. The input estimate is roughly right, but the output "pole" is badly wrong. The exact second pole, about 5.3 GHz, follows from the full second-order denominator.
