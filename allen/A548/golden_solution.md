# Golden Solution - A548

## Reference answer

$OSR_{min} \approx 70$ (next power of two: 128).

- $B = 3$: $\Delta = V_{REF}/7$; $L = 2$: $\pi^2/\sqrt5 = 4.414$.
- Condition: $OSR^{2.5} \ge 2^{16}\times 4.414/7 = 4.13\times10^4$.
- $OSR \ge (4.13\times10^4)^{0.4} = 70.2$.

## Grading notes

+2: OSR ≈ 70 (±3 %) with Δ = V_REF/7, L = 2 and the stated criterion. +1: small numerical slip (within ±10 %), or Δ = V_REF/8 used (≈ 66.6) with that choice stated. 0: correct method with a different, stated noise criterion (e.g., $n_o \le V_{REF}/2^{16}$ giving ≈ 43). −2 (asserted as fact): third-order exponent used for this second-order case, or the quantizer bits ignored.
