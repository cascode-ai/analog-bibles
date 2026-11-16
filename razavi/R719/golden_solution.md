# Golden Solution - R719

## Reference answer

≈ 1.16 mV peak (2.3 mV peak-to-peak), a 100-MHz sinusoid in quadrature (90°) with the current.

- Mutual inductance (image theory, long wires): $M = 0.1\ln[1 + (2h/d)^2]$ nH/mm × 4 mm $= 0.1\ln(101) \times 4 = 1.85$ nH.
- $v = M\,di/dt$, so $|v| = \omega M I_p = 2\pi(10^8)(1.85\times10^{-9})(10^{-3}) = 1.16$ mV.

## Grading notes

+2: ≈ 1.16 mV peak or 2.32 mV pp (±5%), from $\omega M I_p$ with $M$ ≈ 1.85 nH. +1: correct method with a slip in M carried consistently, or the correct value without stating peak/pp. 0: a finite-length mutual inductance (≈ 0.9 nH → ≈ 0.56 mV) despite the instruction to neglect end effects. -2 (asserted as fact): f used instead of ω (≈ 0.18 mV), $M \cdot I$ without the time derivative, or the self-inductance used in place of the mutual inductance.
