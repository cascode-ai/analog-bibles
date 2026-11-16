# Golden Solution - R128

## Reference answer

$M_1$ enters the triode region first, at $V_{out} \approx 2.43$ V ($I_D \approx 0.566$ mA, $V_{in} \approx 0.99$ V). With both devices saturated the output can range from ≈ 2.43 V up to $V_{DD} = 3$ V (zero current), i.e. a swing of only ≈ 0.57 V; below the 2.5-V bias point the output can fall by only ≈ 66 mV.

- As $V_{out}$ falls the current rises: $V_{out} = 3 - I_DR_D$. With $V_b$ fixed, $V_X = V_b - V_{TH2}(V_X) - \sqrt{2I_D/\beta_2}$ falls, while $M_1$ needs $V_X \ge \sqrt{2I_D/\beta_1}$ ($\beta_1 = 13.4$, $\beta_2 = 2.68\ \mathrm{mA/V^2}$).
- $M_1$'s margin (50 mV at 0.5 mA) closes at $I_D = 0.566$ mA: $V_X = V_{ov1} = 0.291$ V, $V_{out} = 2.434$ V.
- $M_2$ is far from triode there: it needs $V_{out} \ge V_b - V_{TH2} \approx 0.93$ V, a margin of ≈ 1.5 V.
- Upper limit: $V_{out} \to V_{DD}$ as $I_D \to 0$ ($R_D$ load), both devices still (marginally) saturated.

## Grading notes

+2: $M_1$ identified as entering triode first (because $V_X$ falls as the current rises), with $V_{out,min}$ ≈ 2.43 V (±0.02 V) and the swing ≈ 0.57 V up to $V_{DD}$ (or, equivalently, a downward excursion of ≈ 60–70 mV from the 2.5-V bias). +1: $M_1$ first with the right mechanism but the limit only estimated roughly (e.g., 2.40–2.47 V without body effect) or the upper limit omitted. 0: correct statement that $M_1$ enters first but no numbers. -2 (asserted as fact): $M_2$ entering triode first with $V_{out,min} \approx V_b - V_{TH2} \approx 0.93$ V (constant-current assumption), or a swing of the order of 1.5 V or more.
