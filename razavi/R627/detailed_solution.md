# Detailed solution - R627

**Approach.** Break the loop at the gate of $M_1$, apply a test voltage there, and follow it around the loop: two identical common-source stages, each with a single pole at its drain, then the ideal inverter. The result is a loop gain with a DC value of $(g_mR_D)^2$ and two coincident poles. We then find the frequency where its magnitude equals 1 and evaluate the phase there.

### Step 1 — The circuit

Reading the figure:

- $M_1$ is a common-source (CS) stage: source grounded, drain at node E, load $R_D$ to $V_{DD}$, and capacitor $C_L$ from E to ground.
- $M_2$ is a second, identical CS stage: gate at E, drain at node F, load $R_D$ and capacitor $C_L$.
- An ideal inverting amplifier (gain $-1$, no phase shift) takes F to $V_{out}$, and $V_{out}$ is fed back to the gate of $M_1$.

So the signal passes through three inversions around the loop: $M_1$, $M_2$ and the inverter.

### Step 2 — Breaking the loop and the small-signal model

Open the loop at the gate of $M_1$. The gate draws no current, so breaking the loop there does not change any loading. Apply a test voltage $V_{in}$ to the gate and compute the returned voltage $V_{out}$.

Small-signal model ($\lambda = 0$, only the two $C_L$ capacitors kept):

- **Node E:** the controlled source $g_mV_{in}$ (the drain current of $M_1$) pulls current from E to ground. $R_D$ goes from E to AC ground ($V_{DD}$) and $C_L$ from E to ground.
- **Node F:** the controlled source $g_mV_E$ (drain current of $M_2$) pulls current from F to ground, again with $R_D$ and $C_L$ from F to AC ground.
- **Inverter:** an ideal voltage-controlled source $V_{out} = -V_F$.

<!-- diagram: diagram-01.cir -->

### Step 3 — Gain of the first stage

The impedance at node E is $R_D$ in parallel with $C_L$:

$$Z_E = R_D \parallel \frac{1}{sC_L} = \frac{R_D\cdot\dfrac{1}{sC_L}}{R_D + \dfrac{1}{sC_L}} = \frac{R_D}{1 + sR_DC_L}.$$

**KCL at node E.** The current $g_mV_{in}$ leaves E through $M_1$, and it must be supplied by the current flowing through $Z_E$ from AC ground into E, which is $-V_E/Z_E$. Hence

$$g_mV_{in} = -\frac{V_E}{Z_E} \quad\Longrightarrow\quad V_E = -g_mZ_EV_{in}.$$

So

$$\frac{V_E}{V_{in}} = -\frac{g_mR_D}{1 + sR_DC_L}.$$

### Step 4 — Gain of the second stage and of the inverter

Node F is identical, driven by $V_E$:

$$\frac{V_F}{V_E} = -\frac{g_mR_D}{1 + sR_DC_L}.$$

The ideal inverter gives

$$\frac{V_{out}}{V_F} = -1 .$$

### Step 5 — Open-loop transfer function

Multiply the three factors:

$$
\begin{aligned}
H(s) = \frac{V_{out}}{V_{in}} &= \left(-\frac{g_mR_D}{1 + sR_DC_L}\right)\left(-\frac{g_mR_D}{1 + sR_DC_L}\right)(-1)\\
&= -\frac{(g_mR_D)^2}{(1 + sR_DC_L)^2}.
\end{aligned}
$$

It has two coincident poles at

$$\omega_p = \frac{1}{R_DC_L},$$

one at node E and one at node F, each set by the resistance and capacitance at that node.

**Type of feedback.** At DC, $H(0) = -(g_mR_D)^2 < 0$: the returned signal is inverted, so the feedback is **negative**. Writing the closed loop in the standard form $1/(1 + \beta H)$, the loop gain is

$$\beta H(s) = \frac{(g_mR_D)^2}{(1 + s/\omega_p)^2}.$$

(Without the inverter, the two CS stages alone would give positive feedback at DC and the circuit would latch.)

### Step 6 — Unity-gain frequency

Let $A = g_mR_D$. On the $j\omega$ axis

$$\left|\beta H(j\omega)\right| = \frac{A^2}{\left|1 + j\omega/\omega_p\right|^2} = \frac{A^2}{1 + (\omega/\omega_p)^2}.$$

Set this equal to 1 at the unity-gain frequency $\omega_u$:

$$
\begin{aligned}
1 + \left(\frac{\omega_u}{\omega_p}\right)^2 &= A^2,\\
\frac{\omega_u}{\omega_p} &= \sqrt{A^2 - 1},\\
\omega_u &= \frac{\sqrt{(g_mR_D)^2 - 1}}{R_DC_L}.
\end{aligned}
$$

This requires $A > 1$. If $g_mR_D \le 1$, the loop gain never reaches unity and the phase margin is undefined (the loop is trivially stable).

### Step 7 — Phase margin

Each pole contributes a phase of $-\tan^{-1}(\omega/\omega_p)$, so at $\omega_u$:

$$\angle\beta H(j\omega_u) = -2\tan^{-1}\frac{\omega_u}{\omega_p} = -2\tan^{-1}\sqrt{A^2 - 1}.$$

The **phase margin** is $180^\circ$ plus the phase of the loop gain at the unity-gain frequency:

$$\mathrm{PM} = 180^\circ - 2\tan^{-1}\sqrt{(g_mR_D)^2 - 1}.$$

**A simpler equivalent form.** Let $\phi = \tan^{-1}\sqrt{A^2 - 1}$. In a right triangle with opposite side $\sqrt{A^2 - 1}$ and adjacent side 1, the hypotenuse is $\sqrt{(A^2 - 1) + 1} = A$, so $\cos\phi = 1/A$ and $\phi = \cos^{-1}(1/A)$. Then

$$\mathrm{PM} = 180^\circ - 2\cos^{-1}\frac{1}{A} = 2\left(90^\circ - \cos^{-1}\frac1A\right) = 2\sin^{-1}\frac{1}{g_mR_D}.$$

For large gain, $\sin^{-1}x \approx x$:

$$\mathrm{PM} \approx \frac{2}{g_mR_D}\ \mathrm{rad} \approx \frac{115^\circ}{g_mR_D}.$$

| $g_mR_D$ | $\omega_u/\omega_p = \sqrt{A^2 - 1}$ | PM $= 2\sin^{-1}(1/A)$ |
|---|---|---|
| 2 | 1.73 | 60.0° |
| 5 | 4.90 | 23.1° |
| 10 | 9.95 | 11.5° |
| 20 | 20.0 | 5.7° |

### Step 8 — Interpretation and a check with the closed-loop poles

Two poles can contribute at most $-180^\circ$, and only as $\omega \to \infty$. At any finite $\omega_u$ the phase is less negative than $-180^\circ$, so **the phase margin is positive for every finite gain**. It approaches zero only as $g_mR_D \to \infty$.

**Check.** The closed-loop poles are the roots of $1 + \beta H(s) = 0$:

$$
\begin{aligned}
(1 + s/\omega_p)^2 + A^2 &= 0,\\
1 + s/\omega_p &= \pm jA,\\
s &= \omega_p(-1 \pm jA).
\end{aligned}
$$

Both poles have real part $-\omega_p < 0$ for any $A$, so the loop is always stable. However, their damping factor $\zeta = 1/\sqrt{1 + A^2}$ becomes very small for large $A$: the step response rings strongly and settles slowly, which is what a small phase margin means.

### Result

$$H(s) = \frac{V_{out}}{V_{in}} = -\frac{(g_mR_D)^2}{(1 + sR_DC_L)^2}$$

(loop broken at the gate of $M_1$), i.e. a negative-feedback loop with loop gain $(g_mR_D)^2/(1 + s/\omega_p)^2$ and two coincident poles at $\omega_p = 1/(R_DC_L)$, at nodes E and F. The unity-gain frequency is $\omega_u = \sqrt{(g_mR_D)^2 - 1}/(R_DC_L)$, and

$$\mathrm{PM} = 180^\circ - 2\tan^{-1}\sqrt{(g_mR_D)^2 - 1} = 2\sin^{-1}\frac{1}{g_mR_D} \approx \frac{2}{g_mR_D}\ \mathrm{rad}\quad(g_mR_D > 1).$$

For example, $g_mR_D = 2$, 5, 10, 20 give PM = 60°, 23.1°, 11.5°, 5.7°. The loop rings but does not oscillate for any finite gain.

**Common mistake.** Taking the phase at the unity-gain frequency as $-180^\circ$ and concluding that PM $= 0$ and the circuit oscillates. Two poles reach $-180^\circ$ only at infinite frequency; at $\omega_u$ each contributes $\tan^{-1}\sqrt{A^2 - 1} < 90^\circ$.

**Common mistake.** Placing the poles at $g_m/C_L$, as if each node were driven by a diode-connected device. The resistance at E and F is $R_D$ (the drains of $M_1$, $M_2$ are high-impedance with $\lambda = 0$), so the poles are at $1/(R_DC_L)$.

**Common mistake.** Concluding that the feedback is positive because the two CS stages together are non-inverting. The ideal inverter adds a third inversion, so the loop gain is negative at DC (negative feedback), which is why the circuit settles instead of latching.
