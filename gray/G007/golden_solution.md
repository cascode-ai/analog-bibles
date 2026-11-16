# Golden Solution - G007

## Reference answer

$BV_{CEO} \approx 65$ V (with $BV_{CBO} \approx 293$ V).

- $BV_{CBO} = \dfrac{\epsilon\mathcal{E}_{crit}^2}{2qN_D} = \dfrac{(1.04\times10^{-12})(9\times10^{10})}{2(1.6\times10^{-19})(10^{15})} = 292.5$ V.
- Breakdown in the common-emitter connection at $M\alpha_F = 1$, with $V_{CB} \approx V_{CE}$: $BV_{CEO} = BV_{CBO}(1-\alpha_F)^{1/n} \approx BV_{CBO}/\beta_F^{1/n} = 292.5/400^{1/4} = 292.5/4.47 = 65.4$ V.
- The lighter collector doping raises $BV_{CBO}$ sixfold, but the higher $\beta_F$ claws back part of it.

## Grading notes

+2: $BV_{CEO}$ in 63–67 V with $BV_{CBO}$ ≈ 290–295 V. +1: right method with a small slip. 0: $BV_{CBO}$ right but $BV_{CEO}$ wrong through a slip. -2 (asserted as fact): $BV_{CEO} = BV_{CBO}/\beta_F$ or $/\sqrt{\beta_F}$, $BV_{CEO} > BV_{CBO}$, or $BV_{CBO}$ off by a formula error.
