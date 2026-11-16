# Golden Solution - A254

## Reference answer

$p_2 \approx -2.28\,GB = -1.43\times10^7$ rad/s (≈ −2.28 MHz).

$45° = 180° - 90° - \arctan\dfrac{GB}{|p_2|} - \arctan\dfrac13 - \arctan\dfrac1{20}$ (dominant pole ≈ 90°; the pole at 3GB gives 18.43°; the RHP zero adds a lag of 2.86°) → $\arctan(GB/|p_2|) = 23.70°$ → $|p_2| = 2.278\,GB = 2.278 \times 2\pi \times 10^6 = 14.3\times10^6$ rad/s.

## Grading notes

+2: $|p_2| \approx 2.28\,GB$ (14.2–14.4 × 10⁶ rad/s or ≈ 2.28 MHz), with the RHP zero adding phase lag. +1: correct method, result within ±5 % from rounding, or the answer given only as 2.28 GB without the conversion. 0: method right but the zero or the 3GB pole omitted (e.g. 2.02 GB without the zero). −2 (asserted as fact): the RHP zero treated as phase lead, the result given as 2.28 rad/s·10⁶ confused with Hz (e.g. 14.3 MHz), or $|p_2| < GB$.
