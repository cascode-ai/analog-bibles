# Golden Solution - G270

## Reference answer

$$R_{out} = (r_{o1}+r_{o2})\,[1 + (1+a)\,g_{m2}\,(r_{o1}\|r_{o2})] = r_{o1} + r_{o2} + (1+a)\,g_{m2}r_{o1}r_{o2} \approx a\,g_{m2}r_{o1}r_{o2}.$$
($g_{m1}$ does not appear: the gate of $M_1$ is at ac ground, so $M_1$ acts as the resistance $r_{o1}$. Since $M_1$ and $M_2$ carry the same drain current with $(W/L)_1 = (W/L)_2$ and $\gamma = 0$, $g_{m1} = g_{m2}$, so the result may also be written with $g_{m1}$; physically the factor comes from $M_2$.)

- $R_{out}(g_{m2}{=}0) = r_{o1} + r_{o2}$.
- $\mathcal{R}$(output shorted): replace $g_{m2}v_{gs2}$ by a test current $i_t$ (drain → source). With the drain grounded, $i_t$ flows into the source node, whose resistance to ground is $r_{o1}\|r_{o2}$: $v_s = i_t(r_{o1}\|r_{o2})$. The op amp drives the gate to $v_g = -a v_s$, so $v_{gs2} = -(1+a)v_s$ and the return current is $g_{m2}v_{gs2}$: $\mathcal{R}_{sc} = (1+a)g_{m2}(r_{o1}\|r_{o2})$.
- $\mathcal{R}$(output open): with the drain open, $i_t$ returns through $r_{o2}$, no net current enters $r_{o1}$, $v_s = 0$, $\mathcal{R}_{oc} = 0$.
- $R_{out} = (r_{o1}+r_{o2})[1 + (1+a)g_{m2}(r_{o1}\|r_{o2})]$.

## Grading notes

+2: $R_{out} = r_{o1}+r_{o2}+(1+a)g_{m2}r_{o1}r_{o2}$ (or an equivalent form) with $R(g_{m2}{=}0) = r_{o1}+r_{o2}$, $\mathcal{R}_{sc} = (1+a)g_{m2}(r_{o1}\|r_{o2})$, $\mathcal{R}_{oc} = 0$. Writing $a$ instead of $1+a$ in the final approximate form is fine if the exact form is right. +1: correct final result with one intermediate return ratio mis-stated but compensated, or $(1+a)$ replaced by $a$ throughout. 0: approximate result $a g_{m2}r_{o1}r_{o2}$ without the Blackman steps. −2 (asserted as fact): $g_{m1}$ entering through $M_1$ acting as a transconductor (e.g. a factor $g_{m1}g_{m2}$, or $g_{m1}r_{o1}$ in place of the $r_{o1}$ term), ratio inverted, or $R_{out} = g_{m2}r_{o2}r_{o1}$ (op amp ignored). Writing $g_{m1}$ in place of $g_{m2}$ is acceptable when the answer derives the $g_{m2}$ form and justifies $g_{m1} = g_{m2}$ from the equal W/L, equal drain currents and $\gamma = 0$.
