# Golden Solution - A526

## Reference answer

Maximum conversion rate ≈ 0.78 × 10⁶ samples/s (conversion time ≈ 1.28 µs); the slew rate does not limit it.

- Worst case: the input lies only 0.5 LSB from a tap, $|V^*_{in} - V_i| = \tfrac12 \cdot V_{REF}/2^6 = 5/128 = 39.1$ mV.
- Single-pole step response from the initial state 0 V: $v_{out}(t) = A_0(1 - e^{-\omega_p t})(V^*_{in} - V_i) = 10^4 \times 0.0391\,(1 - e^{-10^3 t})$ (the comparator output clips at 1 V).
- Halfway (0.5 V): $1 - e^{-10^3T} = 0.5/390.6 = 0.00128$, so $T = -10^{-3}\ln(1 - 0.00128) = 1.281$ µs. Rate $= 1/T \approx 0.781$ MS/s.
- Slew check: the steepest slope of this response is $A_0\omega_p(V^*_{in} - V_i) = 3.9 \times 10^5$ V/s = 0.39 V/µs < 3 V/µs (equivalently, 3 V/µs × 1.28 µs = 3.8 V ≫ 0.5 V), so the response is not slew limited.

## Grading notes

The question does not state the overdrive; the reference takes the worst case as an input midway between adjacent taps (0.5 LSB). An answer that works both 0.5 LSB and 1 LSB and identifies 0.5 LSB as the worst case is +2. +2: worst-case overdrive 0.5 LSB = 39 mV, linear single-pole response, T ≈ 1.28 µs (±5 %), rate ≈ 0.78 MS/s, and a slew-rate check showing it does not limit. +1: correct rate without the slew check, or a correct method with the overdrive taken as 1 LSB (78 mV, giving T ≈ 0.64 µs, ≈ 1.56 MS/s) clearly stated. 0: correct method with an arithmetic slip, or a time computed to reach the full 1-V output (≈ 2.56 µs, ≈ 0.39 MS/s) contrary to the stated halfway definition. −2 (asserted as fact): rate set by the slew rate (e.g., 0.5 V / 3 V/µs ≈ 0.17 µs → 6 MS/s), the comparator treated as having bandwidth $A_0\omega_p$ with a full-scale step, or the pole frequency treated as 10³ Hz.
