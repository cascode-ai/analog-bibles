# Golden Solution - R627

## Reference answer

Open loop (loop broken at the gate of $M_1$): $H(s) = \dfrac{V_{out}}{V_{in}} = -\dfrac{(g_mR_D)^2}{(1 + sR_DC_L)^2}$, i.e., a negative-feedback loop with loop gain $(g_mR_D)^2/(1 + s/\omega_p)^2$ and two coincident poles at $\omega_p = 1/(R_DC_L)$ (nodes E and F).
Phase margin: $\mathrm{PM} = 180^\circ - 2\tan^{-1}\sqrt{(g_mR_D)^2 - 1} = 2\sin^{-1}\dfrac{1}{g_mR_D}$ (for $g_mR_D > 1$), ≈ $2/(g_mR_D)$ rad ≈ $115^\circ/(g_mR_D)$ for large gain. Examples: $g_mR_D$ = 2, 5, 10, 20 → PM = 60°, 23.1°, 11.5°, 5.7°. PM stays positive for any finite gain (the loop rings but does not oscillate) and approaches 0° only as $g_mR_D \to \infty$.

Derivation:
- Each common-source stage: $V_E/V_{G1} = -g_mR_D/(1 + sR_DC_L)$, and the same for $V_F/V_E$; the ideal inverter multiplies by $-1$, giving $H(s)$ above. At dc $H(0) = -(g_mR_D)^2$: the extra inversion makes the feedback negative at low frequencies (no latch-up).
- Unity-gain frequency: $(g_mR_D)^2 = 1 + (\omega_u/\omega_p)^2$ → $\omega_u = \omega_p\sqrt{(g_mR_D)^2 - 1} = \sqrt{(g_mR_D)^2 - 1}/(R_DC_L)$.
- Frequency-dependent phase at $\omega_u$: $-2\tan^{-1}(\omega_u/\omega_p)$, so PM = $180^\circ - 2\tan^{-1}\sqrt{(g_mR_D)^2 - 1}$. Since $\cos[\tan^{-1}\sqrt{A^2-1}] = 1/A$, this equals $180^\circ - 2\cos^{-1}[1/(g_mR_D)] = 2\sin^{-1}[1/(g_mR_D)]$.
- If $g_mR_D \le 1$ the loop gain never reaches unity and the phase margin is undefined (effectively unlimited).

## Grading notes

+2: transfer function with two identical poles at $1/(R_DC_L)$ and dc magnitude $(g_mR_D)^2$ with negative feedback at dc (an overall sign convention written as "loop gain" is fine if consistent), unity-gain frequency $\omega_p\sqrt{(g_mR_D)^2-1}$, and PM = $180^\circ - 2\tan^{-1}\sqrt{(g_mR_D)^2-1}$ or an equivalent form ($2\sin^{-1}[1/(g_mR_D)]$, $180^\circ - 2\cos^{-1}[1/(g_mR_D)]$). +1: correct transfer function and only the large-gain approximation PM ≈ $2/(g_mR_D)$ rad (stated as an approximation), or a minor slip in an otherwise correct PM expression. 0: correct transfer function with the PM missing or wrong through an algebra slip. -2 (asserted as fact): one-pole or three-pole transfer function, poles at $g_m/C_L$, positive (latching) feedback at dc, PM = 0 or negative for finite gain / claim that the circuit oscillates, or the phase at the unity-gain frequency taken as −180° (PM = 0).
