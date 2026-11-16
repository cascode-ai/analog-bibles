# Golden Solution - G271

## Reference answer

$$R_{out} = (r_{o1} + r_{o2} + g_{m2}r_{o1}r_{o2})\left[1 + \frac{a\,g_{m2}(r_{o1}\|r_{o2})}{1 + g_{m2}(r_{o1}\|r_{o2})}\right] = r_{o1}+r_{o2}+(1+a)\,g_{m2}r_{o1}r_{o2}.$$
($g_{m1}$ does not appear: the gate of $M_1$ is held at ac ground by the $M_3$–$R$ bias branch, so $M_1$ acts only as the resistance $r_{o1}$. Since $M_1$ and $M_2$ carry the same drain current with $(W/L)_1 = (W/L)_2$ and $\gamma = 0$, $g_{m1} = g_{m2}$, so the result may also be written with $g_{m1}$.)

- $R_{out}(a{=}0)$: gate of $M_2$ at ac ground, an ordinary cascode: $r_{o1} + r_{o2} + g_{m2}r_{o2}r_{o1}$.
- $\mathcal{R}$(output shorted): a test voltage $v_t$ at the gate of $M_2$; with the drain grounded, $M_2$ is a source follower into $r_{o1}\|r_{o2}$: $v_s = v_t\,\dfrac{g_{m2}(r_{o1}\|r_{o2})}{1+g_{m2}(r_{o1}\|r_{o2})}$, return $-a v_s$, so $\mathcal{R}_{sc} = \dfrac{a\,g_{m2}(r_{o1}\|r_{o2})}{1+g_{m2}(r_{o1}\|r_{o2})}$.
- $\mathcal{R}$(output open): $M_2$ cannot carry current, so $v_s = 0$ and $\mathcal{R}_{oc} = 0$.
- Using $r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2} = (r_{o1}+r_{o2})[1+g_{m2}(r_{o1}\|r_{o2})]$, the product simplifies to $r_{o1}+r_{o2}+(1+a)g_{m2}r_{o1}r_{o2} \approx a\,g_{m2}r_{o1}r_{o2}$.

## Grading notes

+2: correct $R(a{=}0)$, $\mathcal{R}_{sc}$, $\mathcal{R}_{oc} = 0$ and the final expression (either the product form or the simplified form). +1: correct with $\mathcal R_{sc}$ approximated as $a$ (valid for $g_{m2}r_o \gg 1$) and the final answer stated as approximate; the exact final expression obtained by direct nodal analysis without the Blackman steps; or Blackman's formula applied with $R(a{=}0)$ and $\mathcal{R}_{sc}$ correct but $\mathcal{R}_{oc} = 0$ not established. 0: only the approximate final answer without the Blackman steps. −2 (asserted as fact): $\mathcal{R}_{oc} \ne 0$ used, ratio inverted, or a final result lacking the factor $a$. $g_{m1}$ does not appear in the correct result (the gate of $M_1$ is at ac ground); saying so is correct, and writing $g_{m1}$ in place of $g_{m2}$ is acceptable when justified by the equal W/L, equal drain currents and $\gamma = 0$.
