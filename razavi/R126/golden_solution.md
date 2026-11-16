# Golden Solution - R126

## Reference answer

$V_b \approx 1.70$ V (≈ 1.63 V if the body effect of $M_2$ were neglected).

- $M_1$: overdrive $\sqrt{2(0.5\ \mathrm{mA})/(13.4\ \mathrm{mA/V^2})} = 0.273$ V, so $V_X = 0.273 + 0.05 = 0.323$ V.
- $M_2$: overdrive $\sqrt{2(0.5\ \mathrm{mA})/(2.68\ \mathrm{mA/V^2})} = 0.611$ V; body effect with $V_{SB} = V_X$: $V_{TH2} = 0.7 + 0.45(\sqrt{1.223} - \sqrt{0.9}) = 0.771$ V.
- $V_b = V_X + V_{TH2} + V_{ov2} = 0.323 + 0.771 + 0.611 \approx 1.705$ V.

## Grading notes

+2: $V_b$ ≈ 1.70 V (±0.02 V) with the body effect of $M_2$ included. +1: body effect neglected (1.63 V) with an otherwise correct calculation, or one slip. 0: right structure ($V_b = V_X + V_{GS2}$) with a wrong $V_X$ by a slip. -2 (asserted as fact): $V_b$ set so that $M_2$ (not $M_1$) is 50 mV from triode, $V_X$ taken as $V_{GS1}$ + 50 mV, or $V_{GS2}$ computed with $(W/L)_1$.
