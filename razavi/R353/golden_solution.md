# Golden Solution - R353

## Reference answer

$$\overline{V_{n,in}^2}\Big|_{1/f} = \frac{K_N}{C_{ox}f}\left[\frac{1}{(WL)_1} + \frac{g_{m2}^2}{g_{m1}^2}\cdot\frac{1}{(WL)_2}\right]$$

- $M_1$'s gate-referred flicker noise is directly in series with the input.
- $M_2$'s flicker noise is a current $g_{m2}V_{n2}$ into the output node, whose impedance is $1/(g_{m1}+g_{mb1})$: output noise $g_{m2}V_{n2}/(g_{m1}+g_{mb1})$. The gain is $g_{m1}/(g_{m1}+g_{mb1})$, so the referred value is $g_{m2}V_{n2}/g_{m1}$: the body effect cancels (with $r_O$ neglected).
- Same form as the thermal result $4kT\gamma(1/g_{m1} + g_{m2}/g_{m1}^2)$; to reduce it, make $M_1$ large in area and $g_{m2}$ small (large overdrive) and large in area.

## Grading notes

+2: expression equivalent to the reference, with the $(g_{m2}/g_{m1})^2$ weight on $M_2$, and either the body effect shown to cancel or $g_{mb}$ neglected with a statement. +1: correct with an inconsistent body-effect treatment (e.g., $(g_{m1}+g_{mb1})^2$ in the denominator of the $M_2$ term) noted as approximate. 0: only $M_1$'s term. -2 (asserted as fact): $M_2$'s noise said not to reach the output, $M_2$ term weighted by $(g_{m2}/g_{m1})$ to the first power or by $g_{m2}^2$ without division, or PMOS coefficients used for these NMOS devices.
