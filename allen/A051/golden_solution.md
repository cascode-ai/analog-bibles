# Golden Solution - A051

## Reference answer

Measure the channel-length modulation from the saturation point:
$$i_D = \frac{K'W}{2L}(v_{GS}-V_T)^2\left[1+\lambda\left(v_{DS}-v_{DS}(\text{sat})\right)\right],\qquad v_{DS} \ge v_{DS}(\text{sat}) = v_{GS}-V_T.$$

- At $v_{DS} = v_{DS}(\text{sat})$ the nonsaturation equation gives $K'\frac{W}{L}\left[(v_{GS}-V_T) - \frac{v_{GS}-V_T}{2}\right](v_{GS}-V_T) = \frac{K'W}{2L}(v_{GS}-V_T)^2$.
- The original saturation equation gives this value times $(1 + \lambda v_{DS}(\text{sat}))$, a jump of $\lambda v_{DS}(\text{sat})$ (e.g. 4% for λ = 0.04 V⁻¹ and $v_{DS}(\text{sat})$ = 1 V).
- With the modified factor the bracket equals 1 at $v_{DS}(\text{sat})$, so the two equations meet; above it the current still rises with slope $\lambda\frac{K'W}{2L}(v_{GS}-V_T)^2$. (The slope remains discontinuous, zero on the nonsaturation side and λ·$I_D$ on the saturation side; only the current is made continuous.)
- An equivalent fix is to divide by the same factor: $i_D = \frac{K'W}{2L}(v_{GS}-V_T)^2\frac{1+\lambda v_{DS}}{1+\lambda v_{DS}(\text{sat})}$.

## Grading notes

+2: a modified saturation equation that equals $\frac{K'W}{2L}(v_{GS}-V_T)^2$ at $v_{DS} = v_{GS} - V_T$ and keeps the channel-length-modulation increase above it, e.g. $[1+\lambda(v_{DS}-v_{DS}(\text{sat}))]$ or the normalized form $(1+\lambda v_{DS})/(1+\lambda v_{DS}(\text{sat}))$, with a check at the transition. +1: making the two equations consistent instead by multiplying the nonsaturation equation by $(1+\lambda v_{DS})$ (the usual simulator choice), which changes the other equation rather than the saturation one; or a correct modified equation without any check. 0: correctly identifying the mismatch factor $(1+\lambda v_{DS}(\text{sat}))$ without proposing a working change. −2 (asserted as fact): setting λ = 0 or deleting the channel-length-modulation term as "the fix", a proposed equation that still does not match at $v_{DS}(\text{sat})$, or replacing $v_{DS}$ by $v_{DS}(\text{sat})$ everywhere.
