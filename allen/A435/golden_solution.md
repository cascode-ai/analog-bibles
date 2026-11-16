# Golden Solution - A435

## Reference answer

GB ≈ 0.50 MHz (0.496 MHz).

- The ideal current sinks have infinite output resistance, so the only element from the inverting input to ground is the sinks: feedback factor β = 1 and the closed-loop −3 dB frequency is ≈ GB (the dc-gain error, 10⁻⁵, is negligible).
- Worst case: full-scale step 255/256 V; error must fall to 0.5 LSB = 1/512 V: $e^{-2\pi GB\,T} \le (1/512)/(255/256) = 1/510$.
- $GB = \ln(510)/(2\pi\cdot2\ \mu\mathrm{s}) = 0.496$ MHz.

## Grading notes

+2: 0.48–0.52 MHz with β = 1 and 0.5-LSB settling of a full-scale step. +1: correct method with a slightly different stated settling criterion. 0: right approach with an arithmetic slip. −2 (asserted as fact): β < 1 assumed (e.g. β = 1/2 giving ≈ 1 MHz), a one-time-constant criterion, or GB confused between hertz and rad/s (≈ 3.1 MHz).
