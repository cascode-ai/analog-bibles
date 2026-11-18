# Golden Solution - R129

## Reference answer

$V_X$ ranges from ≈ 0.29 V (at $V_{out} \approx 2.43$ V, where $M_1$ reaches the edge of triode) to ≈ 0.84 V (at $V_{out} \to 3$ V, zero current): a swing of ≈ 0.55 V — about as large as the output swing itself.

- $V_X = V_b - V_{TH2}(V_X) - \sqrt{2I_D/\beta_2}$ with $\beta_2 = 2.68\ \mathrm{mA/V^2}$.
- At $I_D = 0.566$ mA (lower output limit): $V_X = 0.291$ V. At $I_D \to 0$: $V_X + 0.7 + 0.45(\sqrt{0.9 + V_X} - \sqrt{0.9}) = 1.705$ → $V_X \approx 0.838$ V.
- At the 0.5-mA bias point $V_X = 0.323$ V. (Without body effect the range would be 0.29–0.93 V.)

## Grading notes

+2: $V_X$ range ≈ 0.29–0.84 V (swing ≈ 0.55 V, ±0.03 V), consistent with the output range 2.43–3 V. +1: body effect neglected (≈ 0.29–0.93 V) or one endpoint slipped. 0: right method ($V_X = V_b - V_{GS2}(I_D)$) with wrong output limits carried over. -2 (asserted as fact): $V_X$ claimed constant (no swing) or a swing based on $M_2$ entering triode at $V_{out} \approx 0.94$ V.
