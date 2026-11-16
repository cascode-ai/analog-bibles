# Detailed solution - R627

**Approach.** Break the loop at the gate of $M_1$ and follow a test voltage around it: two identical common-source stages, each with a single pole at its drain, then the ideal inverter. The loop gain has a dc value of $(g_mR_D)^2$ and two coincident poles; find the frequency where its magnitude is 1 and evaluate the phase there.

### Step 1 — Breaking the loop

The gate of $M_1$ draws no current, so opening the loop there changes no loading. Apply a test voltage $V_{in}$ to the gate and compute the returned $V_{out}$. In the small-signal model ($\lambda = 0$, only the two $C_L$ kept), $g_mV_{in}$ pulls current out of E and $g_mV_E$ out of F, each node has $R_D$ and $C_L$ to ac ground, and the inverter gives $V_{out} = -V_F$.

<!-- diagram: diagram-01.cir -->

### Step 2 — Open-loop transfer function

Each drain sees

$$Z_E = R_D \parallel \frac{1}{sC_L} = \frac{R_D}{1 + sR_DC_L},$$

and KCL at E gives $g_mV_{in} = -V_E/Z_E$. Node F is identical, driven by $V_E$, so

$$\frac{V_E}{V_{in}} = -\frac{g_mR_D}{1 + sR_DC_L}, \qquad \frac{V_F}{V_E} = -\frac{g_mR_D}{1 + sR_DC_L}, \qquad \frac{V_{out}}{V_F} = -1 .$$

Multiplying the three factors:

$$
\begin{aligned}
H(s) = \frac{V_{out}}{V_{in}} &= \left(-\frac{g_mR_D}{1 + sR_DC_L}\right)\left(-\frac{g_mR_D}{1 + sR_DC_L}\right)(-1)\\
&= -\frac{(g_mR_D)^2}{(1 + sR_DC_L)^2},
\end{aligned}
$$

with two coincident poles, one at E and one at F, at

$$\omega_p = \frac{1}{R_DC_L}.$$

At dc, $H(0) = -(g_mR_D)^2 < 0$, so the feedback is **negative**. In the form $1/(1 + \beta H)$, the loop gain is

$$\beta H(s) = \frac{(g_mR_D)^2}{(1 + s/\omega_p)^2}.$$

(Without the inverter, the two CS stages alone would give positive feedback at dc and the circuit would latch.)

### Step 3 — Unity-gain frequency

Let $A = g_mR_D$. On the $j\omega$ axis

$$\left|\beta H(j\omega)\right| = \frac{A^2}{\left|1 + j\omega/\omega_p\right|^2} = \frac{A^2}{1 + (\omega/\omega_p)^2}.$$

Setting this to 1 at $\omega_u$:

$$
\begin{aligned}
1 + \left(\frac{\omega_u}{\omega_p}\right)^2 &= A^2,\\
\frac{\omega_u}{\omega_p} &= \sqrt{A^2 - 1},\\
\omega_u &= \frac{\sqrt{(g_mR_D)^2 - 1}}{R_DC_L}.
\end{aligned}
$$

This requires $A > 1$; if $g_mR_D \le 1$ the loop gain never reaches unity and the phase margin is undefined (the loop is trivially stable).

### Step 4 — Phase margin

Each pole contributes $-\tan^{-1}(\omega/\omega_p)$, so

$$\angle\beta H(j\omega_u) = -2\tan^{-1}\frac{\omega_u}{\omega_p} = -2\tan^{-1}\sqrt{A^2 - 1},$$

$$\mathrm{PM} = 180^\circ - 2\tan^{-1}\sqrt{(g_mR_D)^2 - 1}.$$

A right triangle with sides $\sqrt{A^2 - 1}$ and 1 has hypotenuse $\sqrt{(A^2 - 1) + 1} = A$, so $\tan^{-1}\sqrt{A^2 - 1} = \cos^{-1}(1/A)$ and

$$\mathrm{PM} = 180^\circ - 2\cos^{-1}\frac{1}{A} = 2\left(90^\circ - \cos^{-1}\frac1A\right) = 2\sin^{-1}\frac{1}{g_mR_D}.$$

For large gain, $\sin^{-1}x \approx x$:

$$\mathrm{PM} \approx \frac{2}{g_mR_D}\ \mathrm{rad} \approx \frac{115^\circ}{g_mR_D}.$$

| $g_mR_D$ | $\omega_u/\omega_p = \sqrt{A^2 - 1}$ | PM $= 2\sin^{-1}(1/A)$ |
|---|---|---|
| 2 | 1.73 | 60.0° |
| 5 | 4.90 | 23.1° |
| 10 | 9.95 | 11.5° |
| 20 | 20.0 | 5.7° |

### Step 5 — Interpretation and a check with the closed-loop poles

Two poles reach $-180^\circ$ only as $\omega \to \infty$, so at any finite $\omega_u$ **the phase margin is positive**; it approaches zero only as $g_mR_D \to \infty$.

**Check.** The closed-loop poles are the roots of $1 + \beta H(s) = 0$:

$$
\begin{aligned}
(1 + s/\omega_p)^2 + A^2 &= 0,\\
1 + s/\omega_p &= \pm jA,\\
s &= \omega_p(-1 \pm jA).
\end{aligned}
$$

Both have real part $-\omega_p < 0$ for any $A$, so the loop is always stable, but their damping factor $\zeta = 1/\sqrt{1 + A^2}$ becomes very small for large $A$: the step response rings strongly and settles slowly, as a small phase margin implies.

### Result

$$H(s) = \frac{V_{out}}{V_{in}} = -\frac{(g_mR_D)^2}{(1 + sR_DC_L)^2}$$

(loop broken at the gate of $M_1$), i.e. a negative-feedback loop with loop gain $(g_mR_D)^2/(1 + s/\omega_p)^2$ and two coincident poles at $\omega_p = 1/(R_DC_L)$, at nodes E and F. The unity-gain frequency is $\omega_u = \sqrt{(g_mR_D)^2 - 1}/(R_DC_L)$, and

$$\mathrm{PM} = 180^\circ - 2\tan^{-1}\sqrt{(g_mR_D)^2 - 1} = 2\sin^{-1}\frac{1}{g_mR_D} \approx \frac{2}{g_mR_D}\ \mathrm{rad}\quad(g_mR_D > 1).$$

For example, $g_mR_D = 2$, 5, 10, 20 give PM = 60°, 23.1°, 11.5°, 5.7°. The loop rings but does not oscillate for any finite gain.

**Common mistake.** Taking the phase at the unity-gain frequency as $-180^\circ$ and concluding that PM $= 0$. Two poles reach $-180^\circ$ only at infinite frequency; at $\omega_u$ each contributes $\tan^{-1}\sqrt{A^2 - 1} < 90^\circ$.

**Common mistake.** Placing the poles at $g_m/C_L$, as if each node were driven by a diode-connected device. With $\lambda = 0$ the resistance at E and F is $R_D$, so the poles are at $1/(R_DC_L)$.

**Common mistake.** Calling the feedback positive because the two CS stages together are non-inverting. The ideal inverter adds a third inversion, so the loop gain is negative at dc and the circuit settles instead of latching.
