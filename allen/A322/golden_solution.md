# Golden Solution - A322

## Reference answer

PM ≈ 16° (marginally stable).

- $|p_d| = 1/(7.44\ \mathrm{M\Omega}\times1\ \mathrm{pF}) = 134.4\times10^3$ rad/s; nominal $GB = A_{vd}(0)|p_d| = 3678\times134.4\times10^3 = 494\times10^6$ rad/s (78.7 MHz).
- At such a high GB the nondominant poles also reduce the magnitude, so the loop gain crosses unity lower: solving $\frac{GB}{\omega}\prod_i[1 + (\omega/p_i)^2]^{-1/2} = 1$ gives $\omega_u \approx 374\times10^6$ rad/s (≈ 60 MHz).
- Phase at $\omega_u$: $90° + 2\tan^{-1}(374/702) + \tan^{-1}(374/1652) + \tan^{-1}(374/4176) + \tan^{-1}(374/555000) = 90 + 56.1 + 12.8 + 5.1 + 0.04 ≈ 164°$ → PM ≈ 16°.
- The simple estimate that evaluates the phase at the nominal GB (494 Mrad/s) gives 90° − 70.3° − 16.6° − 6.8° ≈ −4°, which overstates the problem; either way the phase margin is far too small (compare ≈ 56–60° at $C_L$ ≈ 3 pF).

## Grading notes

+2: PM ≈ 13–19° from the actual unity-gain crossover (≈ 370 Mrad/s), with $|p_d|$ ≈ 134 krad/s computed correctly (stating the nominal GB ≈ 494 Mrad/s is not required); or the nominal-GB estimate (≈ −4°) together with the recognition that the true crossover is lower and the margin ≈ 16°. Writing the pole factors as $(1 + s/p_i)$ with the negative $p_i$ values while computing with the pole magnitudes is a notation slip that does not affect the result: do not deduct for it. +1: only the nominal-GB estimate (≈ −4°, "unstable/no margin") with correct numbers. 0: correct $p_d$ and GB but a phase sum missing a pole (e.g., $p_B$ omitted) with no other error. −2 (asserted as fact): a comfortable phase margin (≥ 45°), or GB computed with $C_L$ = 10 pF.
