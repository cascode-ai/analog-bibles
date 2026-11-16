# Golden Solution - R667

## Reference answer

$G_m$ must be scaled up by a factor of 4.
- With $kT/C$ noise only, halving the noise voltage requires C × 4 ($v_{n,rms} = \sqrt{kT/C}$).
- The time constant $\propto C/G_m$ stays the same only if $G_m$ rises by the same factor: $G_m \times 4$.

## Grading notes

- +2: $G_m$ × 4, with C × 4 derived from the $kT/C$ requirement.
- +1: × 4 with the capacitor scaling asserted rather than derived.
- 0: $v_n = \sqrt{kT/C}$ written correctly but solved with an arithmetic slip (e.g., C × 2), with $G_m$ then scaled by the same factor.
- -2 (asserted as fact): $G_m$ unchanged or reduced; or C × 2 and hence $G_m$ × 2 asserted without the correct $kT/C$ relation (noise voltage treated as ∝ 1/C, a wrong noise model).
