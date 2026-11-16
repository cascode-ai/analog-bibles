# Golden Solution - R031

## Reference answer

$V_X$ stays at 1 V for $t < 0$ ($M_1$ off). After the step the source follower charges $C_1$: $V_X$ rises from 1 V, fast at first and then ever more slowly, approaching ≈ 1.97 V (where $3 - V_X = V_{TH}(V_X)$) asymptotically; without body effect the limit would be 2.3 V.
- At $t = 0^+$: $V_{GS} = 2$ V, $V_{TH}(V_{SB} = 1\ \mathrm{V}) = 0.89$ V, saturated ($V_{DS} = 2$ V), initial current $\tfrac12\beta(1.11)^2 = 0.61\beta$, initial slope $0.61\beta/C_1$.
- $C_1\,dV_X/dt = \tfrac12\beta[3 - V_X - V_{TH}(V_X)]^2$: the overdrive shrinks to zero, so the approach is hyperbolic (∝ 1/t), not exponential; $M_1$ stays saturated.
- Final value: $V_X + 0.7 + 0.45(\sqrt{0.9 + V_X} - \sqrt{0.9}) = 3$ → $V_X \approx 1.965$ V ($V_{TH} \approx 1.03$ V).

## Grading notes

+2: $V_X$ = 1 V before the step, rising after it with decreasing slope toward ≈ 1.97 V (±0.05 V) = $V_{DD} - V_{TH}(V_X)$, with the body effect included; never quite reaching it. +1: final value 2.3 V (body effect ignored) or the approach called exponential, otherwise right. 0: correct mechanism with a wrong final value from a slip. -2 (asserted as fact): $V_X$ jumping to 3 V or 4 V, decaying, or settling at 3 V.
