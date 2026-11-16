# Golden Solution - A321

## Reference answer

$k \approx 11.5$, i.e., GB ≈ 0.087 $|p_6|$ ≈ $1.43\times10^8$ rad/s (≈ 22.8 MHz).

- Phase margin with the dominant pole contributing 90°: $PM = 90° - 2\tan^{-1}\frac{GB}{0.702\,\mathrm{G}} - \tan^{-1}\frac{GB}{1.652\,\mathrm{G}} - \tan^{-1}\frac{GB}{4.176\,\mathrm{G}} - \tan^{-1}\frac{GB}{555\,\mathrm{G}} = 60°$.
- Solving: GB = 143 Mrad/s; check: 2(11.53°) + 4.96° + 1.96° + 0.01° = 30.0°. So $|p_6|/GB = 1652/143 = 11.5$.
- The 2.2 rule fails here: GB = $|p_A|/2.2$ = 319 Mrad/s would leave only ≈ 26° of phase margin, because $p_A$ and $p_B$ coincide and $p_6$, $p_9$ are close to them.
(If the phase is evaluated at the true unity-gain frequency, including the magnitude roll-off of the nondominant poles, $g_m/C$-type GB = 0.091 $|p_6|$, $k$ ≈ 11.0.)

## Grading notes

+2: $k$ between about 10.5 and 12 (GB/$|p_6|$ ≈ 0.083–0.095) from summing the phase of all the listed poles (the two at $p_A = p_B$ counted twice). +1: right method with only $p_A$, $p_B$ and $p_6$ included ($k$ ≈ 10.8) or a small arithmetic slip. 0: right method but $p_A$ counted once (giving $k$ ≈ 7), or the answer given only as a GB value without the ratio. −2 (asserted as fact): $k$ = 2.2 or 4.35 (GB ≈ 0.23 $|p_6|$, which gives a phase margin of only ≈ 15° with these poles), or a phase budget that ignores $p_A$ and $p_B$.
