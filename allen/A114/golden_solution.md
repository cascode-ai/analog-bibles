# Golden Solution - A114

## Reference answer

No finite $\beta_1/\beta_2$ gives an 80 % swing. With $V_T = 0.2V_{DD}$ the output cannot exceed $V_{DD} - V_T = 0.8V_{DD}$, so an 80 % swing would need $v_{OUT}(\min) = 0$, which is reached only in the limit $\beta_1/\beta_2 \to \infty$, where the gain $-\sqrt{\beta_1/\beta_2}$ also grows without bound.

- $v_{OUT}(\max) = V_{DD} - |V_{T2}| = 0.8V_{DD}$: M2 turns off when its $v_{SG}$ falls to $V_T$.
- $v_{OUT}(\min)$ ($v_{IN} = V_{DD}$, M1 in triode, M2 saturated): $\beta_1[(V_{DD}-V_T)v - v^2/2] = \frac{\beta_2}{2}(V_{DD}-V_T-v)^2$ gives $v_{OUT}(\min) = (V_{DD}-V_T)\left[1 - 1/\sqrt{1+\beta_2/\beta_1}\right] > 0$ for any finite ratio.
- Swing $= v_{OUT}(\max) - v_{OUT}(\min) = 0.8V_{DD}/\sqrt{1+\beta_2/\beta_1} < 0.8V_{DD}$. For example $\beta_1/\beta_2 = 3.27$ gives $v_{OUT}(\min) = 0.1V_{DD}$, only a 70 % swing, with $A_v \approx -1.81$. $\beta_1/\beta_2 = 39$ gives 79 % with $A_v \approx -6.2$. The swing approaches 80 % only asymptotically.
- Small-signal gain in the amplifying region (both devices saturated, gds neglected): $A_v = -g_{m1}/g_{m2} = -\sqrt{\beta_1/\beta_2}$, unbounded in the limit, so no finite value corresponds to an 80 % swing.
- If the gain is instead evaluated at the low-output point $v_{IN} = V_{DD}$ (M1 in triode, its $g_{ds1} = \beta_1(V_{DD}-V_T-v_{OUT})$ kept), $A_v = -g_{m1}/(g_{m2}+g_{ds1}) = -q(1-q)$ with $q = \sqrt{(\beta_1/\beta_2)/(1+\beta_1/\beta_2)}$, which tends to 0 in the same limit.

## Grading notes

+2: shows that the 80 % swing cannot be met: $v_{OUT}(\max) = V_{DD} - V_T = 0.8V_{DD}$ and $v_{OUT}(\min) > 0$ for any finite $\beta_1/\beta_2$, so 80 % requires $\beta_1/\beta_2 \to \infty$ (gain $-\sqrt{\beta_1/\beta_2}$ unbounded). Giving nearby feasible examples is a plus, not required. A gain stated for an explicitly named bias point is also +2 if correct for that point: $-\sqrt{\beta_1/\beta_2}$ (unbounded) in the saturated amplifying region, or $-q(1-q) \to 0$ at $v_{IN} = V_{DD}$ with M1 in triode. +1: recognizes the infeasibility with correct reasoning but omits the gain, or has a minor slip in the swing expression. 0: correct swing expression and gain formula but no clear conclusion about 80 %. −2 (asserted as fact): any finite ratio presented as giving an 80 % swing. This includes β2/β1 = 0.306 (β1/β2 ≈ 3.27, Av ≈ −1.8), obtained by placing the swing between 0.1VDD and 0.9VDD although the output cannot exceed VDD − VT. Also −2: a ratio derived with VOUT(max) = VDD.
