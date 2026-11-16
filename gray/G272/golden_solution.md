# Golden Solution - G272

## Reference answer

Both choices give the same exact result, $R_{out} = r_{o1} + r_{o2} + (1+a)g_{m2}r_{o1}r_{o2} \approx a\,g_{m2}r_{o1}r_{o2}$; only the split into "$R(k{=}0)$" and return ratios differs. ($g_{m1}$ does not appear: the gate of $M_1$ is held at ac ground by the $M_3$–$R$ bias branch, so $M_1$ acts only as the resistance $r_{o1}$. Since $M_1$ and $M_2$ carry the same drain current with $(W/L)_1 = (W/L)_2$ and $\gamma = 0$, $g_{m1} = g_{m2}$, so the result may also be written with $g_{m1}$.)

- With $k = g_{m2}$: $R(g_{m2}{=}0) = r_{o1}+r_{o2}$, $\mathcal{R}_{sc} = (1+a)g_{m2}(r_{o1}\|r_{o2})$, $\mathcal{R}_{oc} = 0$. Here the "open-loop" resistance is tiny and all the multiplication (local cascode action and the op-amp loop) is in one large return ratio.
- With $k = a$: $R(a{=}0) = r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2}$ (the plain cascode, already including $M_2$'s local feedback), $\mathcal{R}_{sc} = a\,g_{m2}(r_{o1}\|r_{o2})/[1+g_{m2}(r_{o1}\|r_{o2})] \approx a$, $\mathcal{R}_{oc} = 0$.
- The products are identical because Blackman's formula is exact for any controlled source; the return ratio depends on which source is chosen, but the closed-loop impedance does not. In both cases the port-open return ratio is zero, so feedback raises the resistance by $1+\mathcal{R}_{sc}$; the active cascode is about $a$ times the plain cascode.

## Grading notes

+2: both results derived and shown equal, with the observation that the return ratios and $R(k{=}0)$ differ but the final impedance is the same (exactness of Blackman's formula). +1: both results right but the comparison superficial ("they agree"). 0: one result right, the other wrong or missing. −2 (asserted as fact): claiming the two choices give different output resistances, or that one choice is "wrong". A sign typo in one displayed KCL line whose following equation and all results are correct is trivial and does not lower +2. $g_{m1}$ does not appear in the correct result (the gate of $M_1$ is at ac ground); saying so is correct, and writing $g_{m1}$ in place of $g_{m2}$ is acceptable when justified by the equal W/L, equal drain currents and $\gamma = 0$.
