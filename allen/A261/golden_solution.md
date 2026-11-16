# Golden Solution - A261

## Reference answer

GB ≈ 28 MHz; $p_1 \approx -1.76\times10^4$ rad/s (≈ 2.8 kHz); $C_L \approx 5.7$ pF.

- Phase margin: $60° = 180° - 90° - 3\arctan(GB/10^9)$ → $\arctan(GB/10^9) = 10°$ → GB $= 10^9\tan10° = 1.763\times10^8$ rad/s = 28.1 MHz.
- $A_v(0) = 10^4$: $|p_1| = GB/A_v(0) = 1.763\times10^4$ rad/s (2.81 kHz), $p_1 = -1.76\times10^4$ rad/s.
- $|p_1| = 1/(R_{out}C_L)$ → $C_L = \dfrac{1}{10^7 \times 1.763\times10^4} = 5.67$ pF.

## Grading notes

Three parts, equal weight. +2: GB ≈ 28 MHz (1.76 × 10⁸ rad/s), $p_1$ ≈ −1.76 × 10⁴ rad/s (≈ 2.8 kHz), $C_L$ ≈ 5.7 pF, all within ±3 %. +1: one part off by a slip. 0: one part right, others wrong through slips. Unit slips are slips, not −2: GB in Hz used as rad/s in the $C_L$ step (≈ 36 pF) with GB and $p_1$ right is +1; 80 dB taken as 8000 (so $p_1$ and $C_L$ off by 25 %) with GB right is 0. A missing minus sign when writing $|p_1| = 1/(R_{out}C_L)$ as $p_1 = 1/(R_{out}C_L)$, with magnitudes used and the signed $p_1$ given correctly, is trivial: +2. −2 (asserted as fact): the three poles counted as one ($\tan^{-1}(GB/10^9) = 30°$, GB = 10⁹·tan30° ≈ 5.8 × 10⁸ rad/s ≈ 92 MHz), which carries into $p_1$ and $C_L$.
