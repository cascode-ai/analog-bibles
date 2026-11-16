# Golden Solution - A247

## Reference answer

Write the denominator as $D(s) = 1 + as + bs^2$ with $a = R_I(C_I + C_c) + R_{II}(C_{II} + C_c) + g_{mII}R_IR_{II}C_c$ and $b = R_IR_{II}(C_IC_{II} + C_cC_I + C_cC_{II})$. In terms of the poles,

$D(s) = \left(1 - \dfrac{s}{p_1}\right)\left(1 - \dfrac{s}{p_2}\right) = 1 - s\left(\dfrac{1}{p_1} + \dfrac{1}{p_2}\right) + \dfrac{s^2}{p_1p_2}$.

- Widely spaced poles ($|p_2| \gg |p_1|$): $a = -(1/p_1 + 1/p_2) \approx -1/p_1$, so $p_1 \approx -1/a$.
- The Miller term dominates $a$ when $g_{mII}R_{II} \gg 1$ and $C_c$ is not small: $a \approx g_{mII}R_IR_{II}C_c$, hence $p_1 \cong -1/(g_{mII}R_IR_{II}C_c)$.
- $b = 1/(p_1p_2)$, so $p_2 = 1/(bp_1) \approx -a/b = -\dfrac{g_{mII}R_IR_{II}C_c}{R_IR_{II}(C_IC_{II} + C_cC_I + C_cC_{II})} = \dfrac{-g_{mII}C_c}{C_IC_{II} + C_{II}C_c + C_IC_c}$.
- Consistency: $|p_2/p_1| \approx a^2/b$, which is very large for typical values ($a$ contains the large Miller term $g_{mII}R_IR_{II}C_c$), so the widely-spaced assumption holds. (If $C_{II} \gg C_c \gg C_I$, $p_2 \approx -g_{mII}/C_{II}$.)

## Grading notes

+2: uses the widely-spaced-pole approximation ($p_1 \approx -1/a$, $p_2 \approx -a/b$) and the dominance of the $g_{mII}R_IR_{II}C_c$ term to obtain both expressions. +1: both results with one approximation not stated, or $p_2$ obtained only in the further-simplified form $-g_{mII}/C_{II}$ with the general form missing. 0: only $p_1$ derived correctly. −2 (asserted as fact): $p_2 \approx -b/a$ or $p_1 \approx -a/b$ (inverted coefficient ratios), or $p_1 = -1/(R_IC_I)$ claimed for the compensated amplifier.
