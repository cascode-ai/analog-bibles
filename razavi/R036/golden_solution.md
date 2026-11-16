# Golden Solution - R036

## Reference answer

Just before the step $V_X = 0 - 3 = -3$ V; at $t = 0$ it jumps by 3 V to 0 V. Then $M_1$ (drain at $V_{DD}$, gate at 3 V, source at X) is saturated and charges X, whose capacitor's other plate is held by $V_{in}$: $V_X$ rises with decreasing slope toward ≈ 1.97 V, where $3 - V_X = V_{TH}(V_X)$ (2.3 V without body effect), approaching it asymptotically (hyperbolic tail).
- Initial current $\tfrac12\beta(3 - 0.7)^2 = 2.65\beta$, initial slope $2.65\beta/C_1$.
- $M_1$ stays saturated because $V_{DS} = 3 - V_X \ge V_{GS}$.

## Grading notes

+2: jump from −3 V to 0 V at the step, then a source-follower charge-up toward ≈ 1.97 V (±0.05 V; body effect), slowing down near the end. +1: final value 2.3 V (body effect ignored) or the jump omitted, otherwise right. 0: correct direction but wrong final value through a slip. -2 (asserted as fact): $V_X$ rising to 3 V, falling after the step, or settling at 0 V.
