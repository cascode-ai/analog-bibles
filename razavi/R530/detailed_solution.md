# Detailed solution - R530

**Approach.** A 45° phase margin in a two-pole loop means that $|\beta H|$ crosses unity exactly at the nondominant pole. Doubling $C_L$ halves that pole. To restore 45°, the crossover must move down to the new pole, so the whole $|\beta H|$ curve has to be lowered by a factor of 2 at high frequencies. This is done by halving the dominant pole. With Miller compensation that means doubling $C_C$.

### Step 1 — The original design condition

With a dominant pole $\omega_{p1}$ far below the crossover, the loop gain above $\omega_{p1}$ is

$$|\beta H(j\omega)| \approx \frac{\omega_T}{\omega\sqrt{1 + (\omega/\omega_{p2})^2}},\qquad \angle\beta H(j\omega) \approx -90^\circ - \tan^{-1}\frac{\omega}{\omega_{p2}},$$

where $\omega_T = \beta A_0\omega_{p1}$ ($A_0$ is the op amp's DC gain). The phase margin is 45° when the crossover is at $\omega_{p2}$, because then $\tan^{-1}(\omega_{p2}/\omega_{p2}) = 45^\circ$. The magnitude condition at $\omega_{p2}$ gives

$$\frac{\omega_T}{\omega_{p2}\sqrt2} = 1 \quad\Longrightarrow\quad \omega_T = \sqrt2\,\omega_{p2},\qquad\text{i.e.}\qquad \omega_{p1} = \frac{\sqrt2\,\omega_{p2}}{\beta A_0}.$$

The required dominant pole is proportional to the output pole.

### Step 2 — Effect of doubling $C_L$

In a Miller-compensated two-stage op amp the output pole is

$$\omega_{p2} \approx \frac{g_{m2}C_C}{C_EC_C + C_EC_L + C_CC_L} \approx \frac{g_{m2}}{C_L}\qquad(C_C \gg C_E),$$

where $g_{m2}$ is the transconductance of the second stage, $C_C$ the Miller capacitor and $C_E$ the capacitance at the first-stage output. Doubling $C_L$ gives

$$\omega'_{p2} \approx \frac{g_{m2}}{2C_L} = \frac{\omega_{p2}}{2}.$$

The dominant pole, and hence $\omega_T$, does not change. As a result the crossover now lies *above* the new output pole and the phase margin drops (to about 33°).

### Step 3 — Required change of the dominant pole

To get 45° again, the crossover must sit at the new pole $\omega_{p2}/2$. Applying the condition of Step 1 to the new pole:

$$\omega'_T = \sqrt2\,\omega'_{p2} = \sqrt2\,\frac{\omega_{p2}}{2} = \frac{\omega_T}{2}
\quad\Longrightarrow\quad
\omega'_{p1} = \frac{\omega'_T}{\beta A_0} = \frac{\omega_{p1}}{2}.$$

**The dominant pole (and with it the unity-gain frequency of the loop) must be lowered by a factor of 2.**

Check: the new loop gain is

$$\beta H'(s) = \frac{\beta A_0}{\left(1 + \dfrac{2s}{\omega_{p1}}\right)\left(1 + \dfrac{2s}{\omega_{p2}}\right)} = \beta H(2s).$$

It is the old loop gain with every frequency scaled down by 2. Magnitude and phase curves keep their shapes and simply shift down in frequency by an octave, so the phase margin is again exactly 45°, now at $\omega_c = \omega_{p2}/2$.

### Step 4 — Implementation with Miller compensation

For the Miller-compensated two-stage op amp:
- Dominant pole: $\omega_{p1} \approx \dfrac{1}{R_1\,g_{m2}R_L\,C_C}$, where $R_1$ and $R_L$ are the output resistances of the first and second stages.
- DC gain: $A_0 = g_{m1}R_1\,g_{m2}R_L$, where $g_{m1}$ is the input-pair transconductance.
- Unity-gain frequency of the op amp: $A_0\omega_{p1} = \dfrac{g_{m1}}{C_C}$, so $\omega_T = \dfrac{\beta g_{m1}}{C_C}$.

Both $\omega_{p1}$ and $\omega_T$ are inversely proportional to $C_C$. Therefore

$$\boxed{C'_C = 2\,C_C}$$

halves the dominant pole and the unity-gain frequency, as required.

**Side effects on the other singularities:**
- The output pole $\omega_{p2} \approx g_{m2}/(C_L + C_E + C_EC_L/C_C)$ barely depends on $C_C$ once $C_C \gg C_E$. A larger $C_C$ even raises it very slightly, which helps.
- The right-half-plane zero $g_{m2}/C_C$ halves, exactly as the output pole did, so its position *relative* to the poles is unchanged.
- If a series nulling resistor $R_z$ is used, the zero $1/[C_C(R_z - 1/g_{m2})]$ also halves when $C_C$ doubles. A zero that was placed on the old output pole $g_{m2}/C_L$ therefore lands on the new one, $g_{m2}/(2C_L)$, to first order. Only a fine retune may be needed.

### Step 5 — The price, and an alternative

| | before | $C_L$ doubled, no change | $C_L$ and $C_C$ doubled |
|---|---|---|---|
| output pole | $\omega_{p2}$ | $\omega_{p2}/2$ | $\omega_{p2}/2$ |
| dominant pole | $\omega_{p1}$ | $\omega_{p1}$ | $\omega_{p1}/2$ |
| crossover | $\omega_{p2}$ | $0.77\,\omega_{p2}$ | $\omega_{p2}/2$ |
| phase margin | 45° | ≈ 33° | 45° |

- **Speed:** the loop crossover, and thus the closed-loop bandwidth, is halved. Settling becomes twice as slow.
- **Slew rate:** the slew rate of a Miller-compensated op amp is about $I_{SS}/C_C$ ($I_{SS}$ is the tail current of the first stage), so it also halves.
- **Alternative (not a compensation change):** restore $\omega_{p2}$ by doubling the output-stage transconductance $g_{m2}$. This keeps the bandwidth but costs extra power (and changes the op amp itself).

### Result

Lower the dominant pole by a factor of 2, which halves the unity-gain frequency of the loop, so that $|\beta H|$ again reaches unity exactly at the new output pole $\omega_{p2}/2$. With Miller compensation ($\omega_{p1} \propto 1/C_C$, $\omega_T = \beta g_{m1}/C_C$) this means **doubling $C_C$**. The new loop gain is the old one scaled down in frequency by 2, so the phase margin is again 45°. The right-half-plane zero (or a nulling-resistor zero) scales along with it. The cost is half the closed-loop bandwidth and half the slew rate.

**Common mistake.** Reducing $C_C$ (raising the dominant pole) "to speed things up". That pushes the crossover even further above the lowered output pole and makes the phase margin worse. A slower output pole requires *more* compensation, not less.

**Common mistake.** Leaving the compensation unchanged on the grounds that "the loop is still stable". It is stable, but its phase margin has fallen to about 33°, and the requirement is 45°.

**Common mistake.** Saying only "increase $C_C$" without the factor. The 45° condition $\omega_T = \sqrt2\,\omega_{p2}$ ties $\omega_T$ linearly to $\omega_{p2}$, so halving $\omega_{p2}$ requires exactly halving $\omega_T$, i.e. doubling $C_C$.
