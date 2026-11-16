# Golden Solution - A439

## Reference answer

N = 11.

- Low-frequency gain $A_0 = 10^6/100 = 10^4$.
- Resistance from the inverting input into the ladder: R in series with node 1's resistance to ground (2R ∥ 2R = R), i.e. 2R; the ideal sinks are open circuits. With feedback R: $\beta = 2R/(2R + R) = 2/3$, loop gain $= 6667$, gain error $1/(1 + 6667) = 1.5\times10^{-4}$.
- Worst case at full scale: $(1 - 2^{-N})\cdot1.5\times10^{-4} \le 2^{-(N+1)}$ → $2^{N+1} \lesssim 6670$ → N = 11 (error 0.31 LSB; N = 12 would give 0.61 LSB).

## Grading notes

+2: N = 11 with β = 2/3 (loop gain ≈ 6.7×10³) and a 0.5-LSB criterion at full scale. +1: correct β and criterion with an off-by-one slip in reading the inequality. 0: N = 12 from a 1-LSB criterion with β = 2/3 stated. −2 (asserted as fact): N = 12 from β = 1 (ladder resistance ignored), or values from treating $10^6$ as the dc gain.
