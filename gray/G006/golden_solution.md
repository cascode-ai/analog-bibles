# Golden Solution - G006

## Reference answer

$BV_{CEO} \approx 13$ V (with $BV_{CBO} \approx 48.8$ V).

- One-sided plane junction: $BV_{CBO} = \dfrac{\epsilon\mathcal{E}_{crit}^2}{2qN_D} = \dfrac{(1.04\times10^{-12})(9\times10^{10})}{2(1.6\times10^{-19})(6\times10^{15})} = 48.75$ V.
- In the common-emitter connection the avalanche current is amplified: $I_C = \dfrac{M\alpha_F}{1-M\alpha_F}I_B$, so breakdown occurs at $M\alpha_F = 1$. With $V_{CB} \approx V_{CE}$: $1 - (BV_{CEO}/BV_{CBO})^n = \alpha_F$ → $BV_{CEO} = BV_{CBO}(1-\alpha_F)^{1/n} \approx BV_{CBO}/\beta_F^{1/n}$.
- $BV_{CEO} = 48.75/200^{1/4} = 48.75/3.76 = 13.0$ V.

## Grading notes

+2: $BV_{CEO}$ in 12.5–13.5 V with $BV_{CBO}$ ≈ 48–50 V. +1: right method with a small slip (e.g. 13.5–14.5 V). 0: $BV_{CBO}$ right but the $BV_{CEO}$ relation misapplied by a slip. -2 (asserted as fact): $BV_{CEO} = BV_{CBO}/\beta_F$ (≈ 0.24 V) or $BV_{CBO}/\sqrt{\beta_F}$, $BV_{CEO}$ claimed larger than $BV_{CBO}$, or $BV_{CBO}$ off by a formula error.
