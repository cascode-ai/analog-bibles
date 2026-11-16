# Golden Solution - G328

## Reference answer

Phase margin ≈ 77°.

- Feedback factor (capacitive divider at the inverting input): $\beta = C_I/(C_I + C_S + C_{ip}) = 4/4.5 = 0.889$.
- Effective output load with the loop broken: $C_{L,\text{eff}} = C_L + C_I \| (C_S + C_{ip}) = 1.944$ pF.
- Loop transmission $T(s) ≈ \beta\dfrac{g_{m1}}{sC_{L,\text{eff}}}\cdot\dfrac{1}{1 + s/|p_2|}$ above the dominant pole; unity-gain frequency $\omega_u ≈ \beta g_{m1}/C_{L,\text{eff}} = 0.889 \times 0.1\text{ mA/V}/1.944\text{ pF} = 45.7$ Mrad/s (7.3 MHz).
- PM = 90° − arctan(45.7/200) = 90° − 12.9° ≈ 77° (77.4° with the exact crossover at 44.6 Mrad/s).

## Grading notes

+2: $\beta$ ≈ 0.89, effective load ≈ 1.94 pF, crossover ≈ 45 Mrad/s, PM ≈ 77° (accept 75–79°). +1: correct method with $\beta$ = 1 or load = $C_L$ only, giving a PM within 72–80°, reasoning otherwise right. 0: correct structure but crossover off by a factor of 2π or more. −2 (asserted as fact): phase margin below 60° from a wrong crossover (e.g. $g_{m1}/C_L$ in Hz compared with rad/s), or the dominant pole taken at $|p_2|$.
