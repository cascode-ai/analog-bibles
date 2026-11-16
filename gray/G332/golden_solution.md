# Golden Solution - G332

## Reference answer

PM ≈ 87.3° ($C_{\text{in}} = 0$), ≈ 86.7° (4 pF), ≈ 84.4° (20 pF).

- With $C_{\text{in}}$ the divider becomes $\dfrac{R\|(1/sC_{\text{in}})}{R + R\|(1/sC_{\text{in}})} = \dfrac{1/2}{1 + sRC_{\text{in}}/2}$ with $R$ = 100 kΩ, so
$\mathscr{R}(s) = \dfrac{500}{(1 + s/100)(1 + s/10^6)(1 + s/\omega_3)}$, $\omega_3 = 2/(RC_{\text{in}})$: $5 \times 10^6$ rad/s for 4 pF, $10^6$ rad/s for 20 pF.
- Crossover ≈ $5.0 \times 10^4$ rad/s in all three cases. Phase there: $-\arctan 500 - \arctan 0.05 - \arctan(5 \times 10^4/\omega_3)$:
$C_{\text{in}} = 0$: $-89.9° - 2.9°$ → PM 87.3°; 4 pF: additional −0.6° → PM 86.7°; 20 pF: additional −2.9° → PM 84.4°.
- The input capacitance adds a pole in the feedback path and erodes the margin, but here only slightly because the crossover is far below $\omega_3$.

## Grading notes

+2: the extra pole $2/(RC_{\text{in}})$ (or an equivalent divider expression) and the three margins within ±1°: ≈ 87°, ≈ 87°, ≈ 84°. +1: correct method with one margin off by a slip of a few degrees, or the feedback pole placed at $1/(RC_{\text{in}})$ instead of $2/(RC_{\text{in}})$ (margins ≈ 87°, 86°, 81.5°). 0: right idea but the margins off by more than ≈ 5° from a setup error. −2 (asserted as fact): margins near 45° or lower from treating the poles as Hz against rad/s, or a claim that $C_{\text{in}}$ increases the margin.
