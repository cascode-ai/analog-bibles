[Fig. 1] is the small-signal model of a two-stage op amp with a nulling resistor $R_z$ in series with the Miller capacitor $C_c$. Its transfer function is

$\dfrac{V_{out}(s)}{V_{in}(s)} = \dfrac{a\{1 - s[(C_c/g_{mII}) - R_zC_c]\}}{1 + bs + cs^2 + ds^3}$

with $a = g_{mI}g_{mII}R_IR_{II}$, $b = (C_{II} + C_c)R_{II} + (C_I + C_c)R_I + g_{mII}R_IR_{II}C_c + R_zC_c$, $c = R_IR_{II}(C_IC_{II} + C_cC_I + C_cC_{II}) + R_zC_c(R_IC_I + R_{II}C_{II})$, $d = R_IR_{II}R_zC_IC_{II}C_c$.

Assuming that $R_z$ is much less than $R_I$ and $R_{II}$ and that the poles are widely spaced, derive the approximate roots

$p_1 \cong \dfrac{-1}{(1 + g_{mII}R_{II})R_IC_c} \cong \dfrac{-1}{g_{mII}R_{II}R_IC_c}$, $p_2 \cong \dfrac{-g_{mII}C_c}{C_IC_{II} + C_cC_I + C_cC_{II}} \cong \dfrac{-g_{mII}}{C_{II}}$, $p_4 = \dfrac{-1}{R_zC_I}$, and $z_1 = \dfrac{1}{C_c(1/g_{mII} - R_z)}$,

stating where each further approximation is used.
