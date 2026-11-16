# Golden Solution - A168

## Reference answer

Channel-length modulation matters only for the saturated device, M3; in the nonsaturation region the simple model has no λ term (and $v_{DS1}$, $v_{DS2}$ are small anyway). With $v_{SD3} = V_{DD} - v_{OUT}$:

$v_{OUT}(\min) = \dfrac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\dfrac{1}{V_{GG2}-V_{T2}} + \dfrac{1}{V_{DD}-V_{T1}}\right)\left[1+\lambda_3(V_{DD}-v_{OUT}(\min))\right] \approx A\,(1+\lambda_3V_{DD})$,

where $A$ is the λ = 0 result. Solving the linear equation exactly: $v_{OUT}(\min) = A(1+\lambda_3V_{DD})/(1+\lambda_3A)$.

- Derivation: the series current is now $I = \frac{\beta_3}{2}(V_{DD}-V_{GG3}-|V_{T3}|)^2[1+\lambda_3(V_{DD}-v_{OUT})]$; as before $v_{OUT} = v_{DS1}+v_{DS2} = I[1/(\beta_1(V_{DD}-V_{T1})) + 1/(\beta_2(V_{GG2}-V_{T2}))]$.
- Effect: the current through M3 rises by the factor $(1+\lambda_3V_{DD})$ because nearly all of $V_{DD}$ appears across it, so $v_{OUT}(\min)$ rises by the same factor (e.g. ×1.25 for $\lambda_3$ = 0.05 V⁻¹, $V_{DD}$ = 5 V).

## Grading notes

+2: λ applied to M3 only (saturated, $v_{SD3} \approx V_{DD}$), result = λ = 0 expression × $(1+\lambda_3V_{DD})$ or the exact form $A(1+\lambda_3V_{DD})/(1+\lambda_3A)$ or the implicit form with $(V_{DD}-v_{OUT})$. Including $(1+\lambda v_{DS})$ factors for M1/M2 as well is acceptable if the final result reduces correctly (those factors are ≈ 1). +1: correct idea with a slip (e.g. factor $(1+\lambda_3 V_{GG3})$ or a missing $\beta$ ratio). 0: says only M3 matters but gives no expression. −2 (asserted as fact): $v_{OUT}(\min)$ said to decrease with λ, the two reciprocal terms combined with a minus sign, or λ applied as a divisor.
