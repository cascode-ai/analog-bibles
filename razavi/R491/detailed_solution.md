# Detailed solution - R491

**Approach.** Adding a resistor $R_z$ in series with each Miller capacitor moves the zero of the transfer function to $s_z = 1/[C_C(g_{m5}^{-1} - R_z)]$. For $R_z > 1/g_{m5}$ the zero lies in the left half plane, and its distance from the origin can be chosen. Find the non-dominant pole of the compensated amplifier, then choose $R_z$ so that the left-half-plane zero lands exactly on it and cancels it.

### Step 1 — Half circuit and the needed parameters

By symmetry, one half circuit suffices: the CS stage $M_1$ (load $M_3$) drives node X; the PMOS CS stage $M_5$ (load $M_7$) drives $V_{out1}$, which is loaded by $C_L = 1$ pF; $R_z$ and $C_C = 0.9$ pF in series connect X to $V_{out1}$.

**Second-stage parameters** ($I_D = 1$ mA, $(W/L)_5 = 60/0.5 = 120$):

$$
\begin{aligned}
g_{m5} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(120)(1\ \mathrm{mA})} = \sqrt{9.216\times10^{-6}}\ \mathrm{A/V} = 3.036\ \mathrm{mS},\qquad \frac{1}{g_{m5}} = 329.4\ \Omega,\\
r_{O5} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 5\ \mathrm{k}\Omega,\qquad r_{O7} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
R_L &= r_{O5} \parallel r_{O7} = 3.333\ \mathrm{k}\Omega,\qquad g_{m5}R_L = 10.12 .
\end{aligned}
$$

(For the first stage, $g_{m1} = 1.830$ mS and $R_X = r_{O1} \parallel r_{O3} = 26.67$ kΩ; these set the dominant pole but do not enter the answer.)

**Small-signal model.** $M_1$ pulls $g_{m1}V_{in}$ out of X; X has $R_X$ to ground; the branch $R_z$–$C_C$ joins X to the output; $M_5$ pulls $g_{m5}V_X$ out of the output (a PMOS with its source at AC ground, so its current *into* the output is $-g_{m5}V_X$); the output has $R_L$ and $C_L$ to ground.

<!-- diagram: diagram-01.cir -->

### Step 2 — Where the zero is with $R_z$

At the zero, $V_{out} = 0$ while $V_X \ne 0$. Then $R_L$ and $C_L$ carry no current, and KCL at the output involves only the compensation branch and $M_5$:

$$\frac{V_X - 0}{R_z + \dfrac{1}{sC_C}} - g_{m5}V_X = 0 .$$

Divide by $V_X$ and solve:

$$
\begin{aligned}
R_z + \frac{1}{s_zC_C} &= \frac{1}{g_{m5}}\\
\frac{1}{s_zC_C} &= \frac{1}{g_{m5}} - R_z\\
s_z &= \frac{1}{C_C\left(g_{m5}^{-1} - R_z\right)} .
\end{aligned}
$$

- $R_z = 0$: $s_z = +g_{m5}/C_C$, a right-half-plane (RHP) zero.
- $R_z = 1/g_{m5}$: the zero goes to infinity.
- $R_z > 1/g_{m5}$: $s_z = -\dfrac{1}{C_C(R_z - g_{m5}^{-1})}$, a **left-half-plane (LHP)** zero at the frequency $\omega_z = 1/[C_C(R_z - g_{m5}^{-1})]$.

A LHP zero contributes phase *lead*, so placed on top of the non-dominant pole it cancels that pole's phase lag (and its magnitude roll-off).

### Step 3 — The non-dominant pole

With Miller compensation the poles split. The dominant pole is set by X and the Miller-multiplied $C_C$ (a few Mrad/s). At the much higher frequency of the second pole, $C_C$ behaves as a short between the gate and drain of $M_5$, so $M_5$ looks like a diode-connected device at the output. The output node then sees the conductance $g_{m5} + 1/R_L$ and the capacitance $C_L$ (node X has no capacitance of its own here):

$$\omega_{p2} \approx \frac{g_{m5} + 1/R_L}{C_L} = \frac{1 + g_{m5}R_L}{R_LC_L} \approx \frac{g_{m5}}{C_L}\quad(\text{for } g_{m5}R_L \gg 1).$$

Numerically:

$$
\begin{aligned}
\frac{g_{m5}}{C_L} &= \frac{3.036\ \mathrm{mS}}{1\ \mathrm{pF}} = 3.04\times10^9\ \mathrm{rad/s},\\
\frac{1 + g_{m5}R_L}{R_LC_L} &= \frac{11.12}{(3.333\ \mathrm{k}\Omega)(1\ \mathrm{pF})} = 3.34\times10^9\ \mathrm{rad/s}.
\end{aligned}
$$

The usual textbook estimate is $g_{m5}/C_L$; the second, slightly higher value accounts for $g_{m5}R_L$ being only about 10.

### Step 4 — Put the LHP zero on the non-dominant pole

Require $\omega_z = \omega_{p2}$:

$$
\begin{aligned}
\frac{1}{C_C\left(R_z - g_{m5}^{-1}\right)} &= \omega_{p2}\\
R_z - \frac{1}{g_{m5}} &= \frac{1}{\omega_{p2}C_C}\\
R_z &= \frac{1}{g_{m5}} + \frac{1}{\omega_{p2}C_C} .
\end{aligned}
$$

**With $\omega_{p2} = g_{m5}/C_L$:**

$$R_z = \frac{1}{g_{m5}} + \frac{C_L}{g_{m5}C_C} = \frac{1}{g_{m5}}\left(1 + \frac{C_L}{C_C}\right) = 329.4\ \Omega\times\left(1 + \frac{1\ \mathrm{pF}}{0.9\ \mathrm{pF}}\right) = 329.4\ \Omega\times2.111 = 695\ \Omega .$$

**With the more accurate $\omega_{p2} = 3.34\times10^9$ rad/s:**

$$R_z = 329.4\ \Omega + \frac{1}{(3.34\times10^9\ \mathrm{rad/s})(0.9\ \mathrm{pF})} = 329.4\ \Omega + 333\ \Omega = 663\ \Omega .$$

### Step 5 — Check: does $R_z$ disturb the pole it is meant to cancel?

Redoing the KCL of the half circuit with $Y_c = sC_C/(1 + sR_zC_C)$ in place of $sC_C$, the denominator becomes $1 + a's + b's^2$ with

$$a' = R_X(1 + g_{m5}R_L)C_C + R_L(C_C + C_L) + R_zC_C, \qquad b' = R_LC_LC_C(R_X + R_z).$$

Because $R_z$ (≈ 0.7 kΩ) is small compared with $R_X$ (26.7 kΩ), the poles barely move: the dominant pole stays near $3.7\times10^6$ rad/s and the second pole near $3.3\times10^9$ rad/s. In fact, for this model (no capacitance at X), substituting the zero into the denominator shows that the pole it can cancel is exactly $(g_{m5} + 1/R_L)/C_L$, which is why the 663-Ω value gives an exact cancellation. The loop then behaves as a single-pole system, with a phase margin close to 90° in unity-gain feedback.

### Result

$$R_z = \frac{1}{g_{m5}} + \frac{1}{\omega_{p2}C_C} = \frac{1}{g_{m5}}\left(1 + \frac{C_L}{C_C}\right) \approx 695\ \Omega \approx 0.7\ \mathrm{k}\Omega$$

in series with each $C_C$, using $\omega_{p2} \approx g_{m5}/C_L$. With the more accurate $\omega_{p2} = (1 + g_{m5}R_L)/(R_LC_L) \approx 3.3\times10^9$ rad/s, $R_z \approx 663\ \Omega$. Either way the zero moves into the left half plane, about $3\times10^9$ rad/s from the origin, on top of the non-dominant pole.

**Common mistake.** Choosing $R_z = 1/g_{m5} \approx 330\ \Omega$. That moves the zero to infinity (it removes the RHP zero) but does not place it on the non-dominant pole; an additional $1/(\omega_{p2}C_C)$ is needed to bring the zero back in from infinity on the left side.

**Common mistake.** Inverting the capacitor ratio, $R_z = (1 + C_C/C_L)/g_{m5}$. The required extra resistance is $1/(\omega_{p2}C_C) = C_L/(g_{m5}C_C)$, so the ratio is $C_L/C_C$.

**Common mistake.** Using $R_z < 1/g_{m5}$ (the zero stays in the RHP and cannot cancel a LHP pole), or placing the zero on the *dominant* pole, which would destroy the dominant-pole behaviour instead of cancelling the troublesome second pole.
