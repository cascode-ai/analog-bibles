# Golden Solution - A441

## Reference answer

≈ 6 µs.

- Feedback factor $\beta = R_1/(R_0 + R_1) = 2/3$.
- Closed-loop pole: $\omega_H = 10(1 + 10^5\cdot2/3) \approx 6.67\times10^5$ rad/s (≈ β·GB, GB = 10⁶ rad/s), so τ = 1.5 µs.
- Time to the final state: 4τ = 6.0 µs.

## Grading notes

+2: 6 µs (±3 %) with β = 2/3; extra digits in intermediate values that differ only beyond the third significant figure are not slips. +1: correct β and pole with a minor arithmetic slip that leaves the result close to 6 µs (a slip that moves the final time outside the tolerance is at most 0). −2 (asserted as fact): β = 1 (4 µs), β = 1/2 (8 µs), β = 1/3 (12 µs), GB taken in hertz (≈ 0.95 µs), or the pole taken as the open-loop 10 rad/s.
