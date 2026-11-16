# Golden Solution - A248

## Reference answer

About 52° (51.8°), versus the 45° read from the asymptotes.

- Loop gain for $\omega \gg |p_1|$: $L(j\omega) \approx \dfrac{GB}{j\omega(1 + j\omega/|p_2|)}$ with $|p_2| = GB$.
- At $\omega = GB$ the actual magnitude is $1/\sqrt2$ (−3 dB), so the true 0-dB crossing is lower. With $x = \omega/GB$: $x^2(1 + x^2) = 1 \Rightarrow x^2 = (\sqrt5 - 1)/2 = 0.618$, $x = 0.786$.
- Phase margin $= 180° - 90° - \arctan(0.786) = 90° - 38.2° = 51.8°$ (the dominant pole contributes essentially 90°).

## Grading notes

+2: finds the actual unity-gain frequency below GB (≈ 0.79 GB) and a phase margin of 51–53°. +1: correct method with a small numerical slip (result 50–55°). 0: correctly notes that the real crossover is lower and the margin is therefore larger than 45°, without a value. −2 (asserted as the answer): 45° (the asymptotic value, or the actual phase evaluated at GB), or a margin smaller than 45°.
