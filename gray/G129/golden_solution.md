# Golden Solution - G129

## Reference answer

$P_{L,max} \approx 69.6$ mW, $\eta \approx 77.2\%$, maximum instantaneous dissipation per device = 36 mW.
- $\hat V_{om} = V_{CC} - V_{CE(\text{sat})} = 11.8$ V; $P_L = \hat V_{om}^2/(2R_L) = 139.24/2000 = 69.6$ mW.
- Each supply delivers a half-wave current of average $\hat V_o/(\pi R_L)$: $P_{supply} = 2V_{CC}\hat V_o/(\pi R_L) = 24 \times 11.8/(1000\pi) = 90.1$ mW; $\eta = 69.6/90.1 = 0.772$ $(= \tfrac{\pi}{4}\cdot 11.8/12)$.
- Device dissipation $P_c = I_c(V_{CC} - I_cR_L)$ peaks at $I_c = V_{CC}/(2R_L) = 6$ mA, $V_{ce} = 6$ V (reached, since the swing exceeds $V_{CC}/2$): $P_{c,max} = V_{CC}^2/(4R_L) = 36$ mW.

## Grading notes

+2: all three within ±2% (69.6 mW, 77.2%, 36 mW). +1: one value wrong by a slip (e.g. efficiency 78.5% from $\hat V_o = V_{CC}$, or power 72 mW with $V_{CE(\text{sat})}$ neglected) with the rest right. 0: two of three values wrong but the method sound. −2 (asserted as fact): class A formulas (efficiency ≤ 25% or constant supply power), maximum dissipation placed at the output peak ($I_c = 11.8$ mA × 0.2 V) or at zero output, or efficiency above 78.6%.
