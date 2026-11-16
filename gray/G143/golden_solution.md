# Golden Solution - G143

## Reference answer

Derivation:
- With $M_2$ off, $I_{d2} = 0$ and KCL gives $V_o/R_L = -I_{d1} = \tfrac{k'}{2}\tfrac{W}{L}(V_{gs1} + V_t)^2$.
- $V_{gs1} + V_t = -V_{ov} + A(V_o - V_i + V_{OSP}) = A(V_o - V')$ with $V' \equiv V_i + V_{ov}/A - V_{OSP}$.
- Let $u = V_o - V'$ and $\beta = k'(W/L)$: $(u + V')/R_L = \tfrac{\beta}{2}A^2u^2$, i.e. $\tfrac{\beta A^2}{2}u^2 - \tfrac{u}{R_L} - \tfrac{V'}{R_L} = 0$.
- $u = \dfrac{1/R_L \pm \sqrt{1/R_L^2 + 2\beta A^2V'/R_L}}{\beta A^2}$.
- Root selection: $M_1$ conducts only if $V_{gs1} < V_{t1} = -V_t$, i.e. $A u < 0$, so $u < 0$ and the minus sign applies (the plus root corresponds to the wrong branch of the square law, $V_{gs1} + V_t > 0$).
- Hence $V_o = V' + \dfrac{1}{\beta A^2R_L} - \dfrac{1}{\beta A^2}\sqrt{\dfrac{1}{R_L^2} + \dfrac{2\beta A^2}{R_L}V'}$, which is the stated result. (For $\beta A^2R_LV' \gg 1$ the output approaches $V' - \sqrt{2V'/(\beta A^2R_L)}$: unity slope with a gain error that decreases as the current rises.)

## Grading notes

+2: complete derivation: $I_{d2} = 0$, KCL with the square law for $M_1$, the quadratic in $V_o$ (or $u$), and a justified choice of the minus root (from $V_{gs1} + V_t < 0$ for conduction). +1: correct algebra reaching the result but the root choice unjustified or justified loosely. 0: correct setup (KCL and the substituted $V_{gs1}$) without completing the algebra. −2 (asserted as fact): sign errors leading to a different expression claimed equal to the target, the plus root selected with a wrong argument, or $M_2$'s current kept in the equation.
