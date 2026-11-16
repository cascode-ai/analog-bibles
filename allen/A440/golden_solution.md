# Golden Solution - A440

## Reference answer

≈ 87.5×10³ conversions/s (T ≈ 11.4 µs).

- Feedback factor β = 2R/(2R + R) = 2/3 (ladder source resistance 2R, feedback R).
- Closed-loop pole: $\omega_H = 100(1 + 10^4\cdot2/3) = 6.67\times10^5$ rad/s (≈ β·GB with GB = 10⁶ rad/s).
- Worst case: full-scale step; $e^{-\omega_H T} \le 0.5\,\mathrm{LSB}/FS = 1/2046$ → $T = \ln(2046)/\omega_H = 11.43$ µs → $f = 1/T = 87.5$ kHz (using $2^{N+1}$: 11.44 µs, 87.4 kHz).

## Grading notes

+2: 85–90 ×10³ conversions/s with β = 2/3 and 0.5-LSB settling. +1: correct method with a slightly different stated settling criterion. 0: right approach with an arithmetic slip. −2 (asserted as fact): β = 1 (≈ 131×10³/s), GB = 10⁶ taken in hertz (≈ 550×10³/s), or one time constant used as the conversion time.
