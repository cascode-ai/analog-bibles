# Golden Solution - A456

## Reference answer

$T \approx 1.99$ µs.

- β = 1/2, so the closed-loop −3 dB frequency is $\omega_H = \beta\cdot GB = 0.5 \times 2\pi \times 10^6 = 3.14\times10^6$ rad/s and $v_{out}(t) = V_{REF}(1 - e^{-\omega_H t})$.
- Settling within 0.5 LSB: $e^{-\omega_H T} \le 2^{-9}$ → $T = 9\ln2/\omega_H = 6.238/3.14\times10^6 = 1.986$ µs.

## Grading notes

+2: 1.9–2.05 µs with β = 1/2 and settling to $2^{-9}$ (GB = 2π × 10⁶ rad/s). +1: correct method with a slightly different stated criterion (e.g. $2^{-8}$ giving 1.77 µs). 0: right approach with an arithmetic or unit slip, including GB = 1 MHz used as $10^6$ rad/s (the 2π of the Hz-to-rad/s conversion dropped, ≈ 12.5 µs) with β = 1/2 and the $2^{-9}$ criterion right. An answer that gives both 12.5 µs and 1.99 µs with the unit reading as the condition, without committing to 1.99 µs, is also 0, even if it prefers 12.5 µs. −2 (asserted as fact): β = 1 (≈ 0.99 µs) or one time constant used as the conversion time.
