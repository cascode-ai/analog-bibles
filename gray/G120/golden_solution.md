# Golden Solution - G120

## Reference answer

$R_{L,min} \approx 316\ \Omega$ (≈ 0.32 kΩ).
- Load line: $V_{ce1} = V_{CC} - (I_{c1} - I_Q)R_L$ with intercepts $V_0 = V_{CC} + I_QR_L$, $I_0 = I_Q + V_{CC}/R_L$; the maximum instantaneous dissipation is at the midpoint: $P_{max} = V_0I_0/4 = (V_{CC} + I_QR_L)^2/(4R_L)$.
- Setting $(15 + 0.00286R_L)^2/(4R_L) = 0.2$ W gives $R_L = 316\ \Omega$ (the other root, ≈ 87 kΩ, is irrelevant: for large $R_L$ the midpoint lies beyond the reachable range and the dissipation stays below ≈ 85 mW). Graphically: the load line through Q (15 V, 2.86 mA) tangent to the 0.2 W hyperbola.
- Check: midpoint at $V_{ce1} = 7.95$ V, $I_{c1} = 25.2$ mA, within the 30 mA drive limit, so it is reachable. Any smaller $R_L$ gives a steeper line crossing the 0.2 W hyperbola.

## Grading notes

+2: $R_L$ within 300–330 Ω with a correct tangency/midpoint argument that includes $I_Q$. +1: 281 Ω from $V_{CC}^2/(4R_L)$ neglecting $I_Q$, or a graphical estimate within ±15% with sound reasoning. 0: correct method stated, no or wrong number. −2 (asserted as fact): a maximum $R_L$ instead of a minimum, $R_L = V_{CC}/I_Q$ or other unrelated values, or the dissipation limit applied at the quiescent point only.
