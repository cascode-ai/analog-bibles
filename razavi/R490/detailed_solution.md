# Detailed solution - R490

**Approach.** Place a compensation capacitor $C_C$ between the input and output of each second stage (X to $V_{out1}$, Y to $V_{out2}$). Analyse one half circuit: derive its transfer function by KCL, identify the pole-splitting approximations (dominant pole $\approx 1/(g_{m5}R_LR_XC_C)$, gain-bandwidth $\approx g_{m1}/C_C$, second pole $\approx g_{m5}/C_L$, right-half-plane zero $g_{m5}/C_C$), and choose $C_C$ for a 60° phase margin with the two-pole design rule. Then compute the actual pole and zero positions and check the effect of the zero.

### Step 1 — Half circuit and small-signal parameters

The circuit is symmetric and, for differential signals, the tail node is an AC ground, so one half circuit describes the differential behaviour: CS stage $M_1$ (load $M_3$) driving node X, followed by the PMOS CS stage $M_5$ (load $M_7$) driving $V_{out1}$ and $C_L = 1$ pF. In a fully differential unity-gain loop ($\beta = 1$ for differential signals) the loop gain is this half-circuit gain.

**First stage** ($I_D = I_{SS}/2 = 0.125$ mA, $W/L = 100$):

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(0.125\ \mathrm{mA})} = 1.830\ \mathrm{mS},\\
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.125\ \mathrm{mA})} = 80\ \mathrm{k}\Omega, \qquad r_{O3} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.125\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
R_X &= r_{O1} \parallel r_{O3} = 26.67\ \mathrm{k}\Omega, \qquad A_1 = g_{m1}R_X = 48.8 .
\end{aligned}
$$

**Second stage** ($I_D = 1$ mA, $(W/L)_5 = 120$):

$$
\begin{aligned}
g_{m5} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(120)(1\ \mathrm{mA})} = 3.036\ \mathrm{mS},\\
r_{O5} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega, \qquad r_{O7} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
R_L &= r_{O5} \parallel r_{O7} = 3.333\ \mathrm{k}\Omega, \qquad A_2 = g_{m5}R_L = 10.12 .
\end{aligned}
$$

**DC gain:** $A_0 = A_1A_2 = 48.8\times10.12 = 494$.

*Remark.* With all transistor capacitances neglected, node X has no capacitance of its own, so the *uncompensated* amplifier has only the output pole and is trivially stable. In a real circuit X carries the large gate capacitance of $M_5$; Miller compensation is used to make X the dominant pole and to push the output pole out ("pole splitting"). That is the design carried out below. (A literal reading, adding a tiny $C_C \approx 0.17$ fF just to bring a 90° margin down to 60°, is not a meaningful compensation.)

### Step 2 — Transfer function with $C_C$ (KCL)

**Small-signal model of the half circuit.** Input $V_{in}$ on the gate of $M_1$; $M_1$ pulls $g_{m1}V_{in}$ out of node X; X has $R_X$ to ground and $C_C$ to the output; $M_5$ (a PMOS with source at AC ground) pulls $g_{m5}V_X$ out of the output node (its current into the output is $-g_{m5}V_X$); the output has $R_L$ and $C_L$ to ground.

<!-- diagram: diagram-01.cir -->

**KCL at X** (currents leaving the node):

$$g_{m1}V_{in} + \frac{V_X}{R_X} + sC_C(V_X - V_{out}) = 0 .$$

**KCL at the output** (currents leaving the node):

$$g_{m5}V_X + \frac{V_{out}}{R_L} + sC_LV_{out} + sC_C(V_{out} - V_X) = 0 .$$

From the second equation:

$$V_X(g_{m5} - sC_C) = -V_{out}\left(\frac{1}{R_L} + sC_L + sC_C\right) .$$

Substituting $V_X$ into the first equation and collecting terms (multiply through by $R_XR_L$):

$$\frac{V_{out}}{V_{in}} = \frac{A_0\left(1 - \dfrac{sC_C}{g_{m5}}\right)}{1 + a\,s + b\,s^2},$$

$$a = R_X(1 + g_{m5}R_L)C_C + R_L(C_C + C_L), \qquad b = R_XR_LC_CC_L .$$

### Step 3 — Pole splitting: approximate pole and zero locations

When the two roots of $1 + as + bs^2$ are far apart, $\omega_{p1} \approx 1/a$ and $\omega_{p2} \approx a/b$:

$$
\begin{aligned}
\omega_{p1} &\approx \frac{1}{R_X(1 + g_{m5}R_L)C_C + R_L(C_C + C_L)} \approx \frac{1}{g_{m5}R_L\,R_XC_C},\\
\omega_{p2} &\approx \frac{R_X(1 + g_{m5}R_L)C_C + R_L(C_C + C_L)}{R_XR_LC_CC_L} \approx \frac{g_{m5}}{C_L}\quad(\text{for } g_{m5}R_L \gg 1).
\end{aligned}
$$

- The dominant pole is X's resistance times the **Miller-multiplied** capacitance $(1 + A_2)C_C$.
- The gain-bandwidth product is $\mathrm{GBW} = A_0\,\omega_{p1} \approx \dfrac{g_{m1}R_X\,g_{m5}R_L}{g_{m5}R_LR_XC_C} = \dfrac{g_{m1}}{C_C}$.
- The output pole is pushed out to about $g_{m5}/C_L$: at high frequency $C_C$ shorts gate and drain of $M_5$, which then looks like a diode, $1/g_{m5}$, at the output.
- The numerator gives a zero at $s = +g_{m5}/C_C$, in the **right half plane** (RHP). It arises because $C_C$ feeds the signal forward to the output, opposing $M_5$'s inverted current.

### Step 4 — Choosing $C_C$ for a 60° phase margin

Use the two-pole model with $\mathrm{GBW} = g_{m1}/C_C$ and $\omega_{p2} = g_{m5}/C_L$ (the RHP zero is set aside here and dealt with in Step 6).

**Phase condition.** With $\omega_u \gg \omega_{p1}$ the dominant pole contributes 90°, so the second pole may contribute only 30°:

$$\omega_u = \omega_{p2}\tan30° = \frac{\omega_{p2}}{\sqrt3}.$$

**Magnitude condition.** $|H(j\omega_u)| \approx \dfrac{\mathrm{GBW}}{\omega_u\sqrt{1 + (\omega_u/\omega_{p2})^2}} = 1$:

$$\mathrm{GBW} = \omega_u\sqrt{1 + \tfrac13} = \frac{\omega_{p2}}{\sqrt3}\cdot\frac{2}{\sqrt3} = \frac23\,\omega_{p2}.$$

**Solve for $C_C$.** $g_{m1}/C_C = \tfrac23\,g_{m5}/C_L$, so

$$C_C = \frac32\,\frac{g_{m1}}{g_{m5}}\,C_L = 1.5\times\frac{1.830\ \mathrm{mS}}{3.036\ \mathrm{mS}}\times1\ \mathrm{pF} = 1.5\times0.603\times1\ \mathrm{pF} = 0.90\ \mathrm{pF}.$$

One such capacitor goes from X to $V_{out1}$ and an identical one from Y to $V_{out2}$. (If the factor $\sqrt{1 + 1/3}$ is ignored, the same rule gives $C_C = \sqrt3\,(g_{m1}/g_{m5})C_L = 1.04$ pF.)

### Step 5 — Pole and zero positions with $C_C = 0.9$ pF

**Coefficients:**

$$
\begin{aligned}
a &= (26.67\ \mathrm{k}\Omega)(1 + 10.12)(0.9\ \mathrm{pF}) + (3.333\ \mathrm{k}\Omega)(0.9 + 1)\ \mathrm{pF}\\
&= 266.9\ \mathrm{ns} + 6.3\ \mathrm{ns} = 273.2\ \mathrm{ns},\\
b &= (26.67\ \mathrm{k}\Omega)(3.333\ \mathrm{k}\Omega)(0.9\ \mathrm{pF})(1\ \mathrm{pF}) = 8.0\times10^{-17}\ \mathrm{s^2}.
\end{aligned}
$$

**Dominant pole:**

$$\omega_{p1} \approx \frac1a = \frac{1}{273.2\ \mathrm{ns}} = 3.66\times10^6\ \mathrm{rad/s}\quad(\approx 0.58\ \mathrm{MHz}).$$

(The cruder $1/(g_{m5}R_LR_XC_C) = 1/(242.9\ \mathrm{ns}) = 4.1\times10^6$ rad/s.)

**Non-dominant pole:**

$$\omega_{p2} \approx \frac ab = \frac{273.2\times10^{-9}}{8.0\times10^{-17}}\ \mathrm{rad/s} = 3.41\times10^9\ \mathrm{rad/s}\quad(\approx 0.54\ \mathrm{GHz}).$$

It is about 12 % above the estimate $g_{m5}/C_L = 3.04\times10^9$ rad/s, because $g_{m5}R_L \approx 10$ is not much larger than 1.

**Zero (RHP):**

$$\omega_z = +\frac{g_{m5}}{C_C} = \frac{3.036\ \mathrm{mS}}{0.9\ \mathrm{pF}} = 3.37\times10^9\ \mathrm{rad/s}\quad(\approx 0.54\ \mathrm{GHz}).$$

**Gain-bandwidth:** $A_0\,\omega_{p1} = 494\times3.66\times10^6 = 1.81\times10^9$ rad/s (≈ 0.29 GHz).

With the exact pole positions (and the zero removed), this two-pole loop has PM ≈ 64.6°, slightly more than the 60° design target, because the true $\omega_{p2}$ is higher and the true GBW lower than the estimates. The exact two-pole denominator reaches exactly 60° at $C_C \approx 0.71$ pF.

### Step 6 — The right-half-plane zero, and how to remove it

A RHP zero raises the magnitude like a LHP zero but adds phase *lag* like a pole, $-\tan^{-1}(\omega/\omega_z)$. At the crossover,

$$\frac{\omega_u}{\omega_z} \approx \frac{g_{m1}/C_C}{g_{m5}/C_C} = \frac{g_{m1}}{g_{m5}} \approx 0.6,$$

independent of $C_C$, so the zero costs roughly $\tan^{-1}(0.6) \approx 30°$ whatever $C_C$ is (28° at $C_C = 0.9$ pF, where $\omega_u/\omega_z = 0.54$). Evaluating the full transfer function of Step 2 with the zero:

| $C_C$ (plain capacitor) | 0.5 pF | 0.9 pF | 2 pF | 5 pF | 24 pF | 100 pF |
|---|---|---|---|---|---|---|
| PM | 27° | 34° | 43° | 51° | 56° | 57° |

At $C_C = 0.9$ pF the actual margin is only about 34° (crossover $1.81\times10^9$ rad/s). For very large $C_C$ the crossover approaches the zero and the margin saturates near 57°: **a plain capacitor cannot deliver 60° here.**

**Fix: a nulling resistor.** Put $R_z$ in series with $C_C$. The feedforward admittance becomes $sC_C/(1 + sR_zC_C)$ and the zero moves to

$$\omega_z = \frac{1}{C_C\left(g_{m5}^{-1} - R_z\right)} .$$

Choosing $R_z = 1/g_{m5} = 1/(3.036\ \mathrm{mS}) \approx 330\ \Omega$ moves the zero to infinity. Redoing the KCL with $R_z$, the denominator becomes $1 + a's + b's^2$ with $a' = a + R_zC_C$ and $b' = R_LC_LC_C(R_X + R_z)$. Since $R_z \ll R_X$, the poles are practically unchanged. The loop is then a genuine two-pole system:

- with $C_C = 0.9$ pF, PM ≈ 64° (the design of Step 4, with margin to spare);
- for exactly 60°, $C_C \approx 0.71$ pF, giving $\omega_{p1} \approx 4.6\times10^6$ rad/s, $\omega_{p2} \approx 3.4\times10^9$ rad/s, crossover $\approx 1.96\times10^9$ rad/s, and no finite zero.

### Result

- **Compensation:** $C_C \approx 0.9$ pF from X to $V_{out1}$ and from Y to $V_{out2}$ (two-pole design: $\mathrm{GBW} = g_{m1}/C_C = \tfrac23\,g_{m5}/C_L$, i.e. $C_C = 1.5(g_{m1}/g_{m5})C_L$).
- **Dominant pole:** $\omega_{p1} \approx 3.7\times10^6$ rad/s (≈ 0.58 MHz).
- **Non-dominant pole:** $\omega_{p2} \approx 3.4\times10^9$ rad/s (≈ 0.54 GHz; the estimate $g_{m5}/C_L$ gives $3.0\times10^9$ rad/s).
- **Zero:** RHP at $g_{m5}/C_C \approx 3.4\times10^9$ rad/s (≈ 0.54 GHz).
- Because of this zero, the 60° margin is actually achieved only with a nulling resistor $R_z = 1/g_{m5} \approx 330\ \Omega$ in series with $C_C$; then $C_C \approx 0.71$ pF gives exactly 60° (poles ≈ $4.6\times10^6$ and $3.4\times10^9$ rad/s), and 0.9 pF gives ≈ 64°.

**Common mistake.** Using the wrong gain-bandwidth expression, such as $g_{m5}/C_C$ or $A_1g_{m1}/C_C$. With Miller compensation the first stage's current $g_{m1}V_{in}$ charges $C_C$ directly, so $\mathrm{GBW} = g_{m1}/C_C$.

**Common mistake.** Placing the plain-capacitor Miller zero in the left half plane, or ignoring it. The feedforward current through $C_C$ has the opposite sign to $M_5$'s current, so the zero $g_{m5}/C_C$ is in the RHP, and since $\omega_u/\omega_z \approx g_{m1}/g_{m5}$ it costs about 30° of margin here.

**Common mistake.** Using the 45° rule $C_C = (g_{m1}/g_{m5})C_L \approx 0.6$ pF, or choosing $C_C = C_L$ to "cancel" a pole. For 60° the second pole must sit at $1.5\times\mathrm{GBW}$, which requires $C_C = 1.5(g_{m1}/g_{m5})C_L$.
