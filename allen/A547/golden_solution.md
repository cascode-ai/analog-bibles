# Golden Solution - A547

## Reference answer

$OSR_{min} \approx 35$ (next power of two: 64; 32 is not enough).

- $B = 2$: $\Delta = V_{REF}/3$; $L = 3$: $\pi^3/\sqrt7 = 11.72$.
- Condition: $OSR^{3.5} \ge 2^{16}\times 11.72/3 = 2.56\times10^5$.
- $OSR \ge (2.56\times10^5)^{1/3.5} = 35.1$.

## Grading notes

+2: OSR ≈ 35 (±3 %) with Δ = V_REF/3 and the stated criterion. +1: small numerical slip (within ±10 %), or Δ = V_REF/4 used (giving ≈ 32.3) with that choice stated. 0: correct method with a different, stated noise criterion (e.g., $n_o \le V_{REF}/2^{16}$ giving ≈ 25). −2 (asserted as fact): the quantizer bits ignored (same OSR as the 1-bit case), or another wrong value from a formula error.
