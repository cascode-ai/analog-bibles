# Golden Solution - R312

## Reference answer

$$Z_X = R_D\,\frac{g_{m2} + C_1s}{g_{m2}(1 + g_{m1}R_D) + C_1s} = R_D\left\|\left(\frac{1}{g_{m1}} + \frac{C_1}{g_{m1}g_{m2}}s\right)\right.$$
- $|Z_X|$ starts at $R_D\|(1/g_{m1}) = R_D/(1 + g_{m1}R_D)$, rises with +20 dB/dec between the zero $\omega_z = g_{m2}/C_1$ and the pole $\omega_p = g_{m2}(1 + g_{m1}R_D)/C_1$, and flattens at $R_D$: inductive.
- Equivalent network: $R_D$ in parallel with ($1/g_{m1}$ in series with $L = C_1/(g_{m1}g_{m2})$).

Derivation: test current into the drain of $M_1$ (node D, also the gate of $M_2$): $i_X = v_D/R_D + g_{m1}v_S$, where S (source of $M_2$, gate of $M_1$) satisfies $g_{m2}(v_D - v_S) = C_1sv_S$ ($I_1$ ideal), so $v_S = g_{m2}v_D/(g_{m2} + C_1s)$.
Intuition: at low frequencies the follower $M_2$ copies $v_D$ onto the gate of $M_1$, making $M_1$ act like a diode ($1/g_{m1}$); at high frequencies $C_1$ holds that gate still and only $R_D$ remains.

## Grading notes

+2: correct $Z_X$ (any equivalent form) and a sketch rising from $R_D/(1 + g_{m1}R_D)$ to $R_D$ with corners $g_{m2}/C_1$ and $g_{m2}(1 + g_{m1}R_D)/C_1$ (inductive, $L = C_1/g_{m1}g_{m2}$). +1: correct expression with an incomplete sketch, or vice versa. 0: only one asymptote right. -2 (asserted as fact): impedance claimed capacitive (falling), low-frequency value $R_D$ or $1/g_{m2}$, or $C_1$ read as being at the drain node.
