# Golden Solution - G135

## Reference answer

$P_L \approx 89.8$ mW, $\eta \approx 70\%$, peak dissipation 56.3 mW in each of $Q_{14}$ and $Q_{20}$.
- Limits with 1 kΩ: $V_o^+ = 14.1$ V ($Q_{13A}$ saturation; the 40 mA drive limit is not reached), $V_o^- = -13.4$ V ($Q_{17}$ saturation). A symmetrical sine clips first on the negative side: $\hat V_o = 13.4$ V.
- $P_L = 13.4^2/2000 = 89.8$ mW; output-device supply power $2V_{CC}\hat V_o/(\pi R_L) = 128$ mW; $\eta = (\pi/4)(13.4/15) = 70.2\%$.
- Peak device dissipation: $V_{CC}^2/(4R_L) = 225/4000 = 56.3$ mW, at $|V_o| = 7.5$ V (inside the swing), for each output transistor.

## Grading notes

+2: amplitude 13.4 V, $P_L$ 89.8 mW (±3%), η ≈ 70% (±1 point), peak dissipation 56 mW per device. +1: amplitude 14.1 V used (P ≈ 99 mW, η ≈ 74%) with otherwise correct method, or one value slipped. 0: correct formulas with a wrong amplitude from both slips. −2 (asserted as fact): class A formulas, peak dissipation placed at the output peak (13.4 mA × 1.6 V), or efficiency above 78.6%.
