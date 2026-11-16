# Golden Solution - R529

## Reference answer

The phase margin falls from 45° to about 33°, a degradation of about 12°. A quicker estimate that keeps the crossover at the old $\omega_{p2}$ gives about 27° (≈ 18°).

- The output pole scales as $1/C_L$ ($\omega_{p2} \approx g_{m2}/C_L$), so it moves to $\omega_{p2}/2$. The dominant pole sits at the first-stage output (e.g., Miller compensation) and is unchanged, and so is the low-frequency asymptote $\omega_T/\omega$ of $|\beta H|$, with $\omega_T = \beta A_0\omega_{p1}$.
- Original design: $|\beta H(\omega_{p2})| = (\omega_T/\omega_{p2})/\sqrt2 = 1$, so $\omega_T = \sqrt2\,\omega_{p2}$, and the phase at $\omega_{p2}$ is −90° − 45°.
- New crossover $\omega_c$: $(\omega_T/\omega_c)/\sqrt{1 + (2\omega_c/\omega_{p2})^2} = 1$ gives $\omega_c \approx 0.77\,\omega_{p2}$. The phase there is $-90° - \tan^{-1}(1.54) \approx -147°$, so PM ≈ 33°.
- Keeping the crossover at $\omega_{p2}$ instead gives PM = 90° − tan⁻¹2 = 26.6°. This overestimates the loss, because the lowered pole also reduces $|\beta H|$ and pulls the crossover down. With the asymptotic convention $\omega_T = \omega_{p2}$, the PM goes from 51.8° to 38.7°, again about a 13° loss.

## Grading notes

+2: $\omega_{p2}$ halves while the dominant pole and the gain asymptote stay the same, and the new PM is estimated at ≈ 33° (≈ 12° degradation, by recomputing the crossover). Also +2: the cruder estimate that keeps the crossover at the old $\omega_{p2}$, PM ≈ 26.6° (≈ 18°), with that assumption stated, or the self-consistent asymptotic-convention result (51.8° → 38.7°). Any PM between 25° and 35° backed by correct reasoning earns +2. +1: right approach but mixed conventions (e.g., "45° → 38.7°, a 6° loss"), or the right analysis with a small computational slip that leaves the PM within 25°–35°. A wrong closed-form label for a root whose correct numerical value (x ≈ 0.77) is what the answer then uses is a trivial typo and does not cost the +2. 0: PM correctly said to degrade, with the right reason, but no estimate, or the right method with a slip that puts the PM outside 25°–35°. -2 (asserted as fact): PM unchanged or improved, $\omega_{p2}$ doubling, the dominant pole moving by the same factor so that PM is unchanged, or instability (PM ≤ 0) claimed.
