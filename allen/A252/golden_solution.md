# Golden Solution - A252

## Reference answer

Widely spaced roots: $1 + bs + cs^2 + ds^3 \approx (1 + s/|p_1|)(1 + s/|p_2|)(1 + s/|p_4|)$ with $|p_1| \ll |p_2| \ll |p_4|$, so $b \approx 1/|p_1|$, $c \approx 1/(|p_1||p_2|)$, $d = 1/(|p_1||p_2||p_4|)$, i.e. $|p_1| \approx 1/b$, $|p_2| \approx b/c$, $|p_4| \approx c/d$.

- $p_1$: in $b$ the terms with $C_c$ multiplied by $R_I$ dominate ($R_z \ll R_I, R_{II}$; $g_{mII}R_{II} \gg 1$): $b \approx R_IC_c + g_{mII}R_IR_{II}C_c = (1 + g_{mII}R_{II})R_IC_c \approx g_{mII}R_{II}R_IC_c$.
- $p_2$: in $c$ the $R_z$ term is negligible since $R_z \ll R_I, R_{II}$: $c \approx R_IR_{II}(C_IC_{II} + C_cC_I + C_cC_{II})$, so $p_2 \approx -b/c = \dfrac{-g_{mII}C_c}{C_IC_{II} + C_cC_I + C_cC_{II}}$; with $C_{II} \gg C_I$ and $C_c \gg C_I$ the denominator ≈ $C_cC_{II}$ and $p_2 \approx -g_{mII}/C_{II}$.
- $p_4$: $c/d = \dfrac{C_IC_{II} + C_cC_I + C_cC_{II}}{R_zC_IC_{II}C_c} = \dfrac{1}{R_z}\left(\dfrac{1}{C_c} + \dfrac{1}{C_I} + \dfrac{1}{C_{II}}\right) \approx \dfrac{1}{R_zC_I}$ for $C_I \ll C_c, C_{II}$, so $p_4 \approx -1/(R_zC_I)$.
- $z_1$: the numerator vanishes when $1 - s(C_c/g_{mII} - R_zC_c) = 0$, i.e. $s = z_1 = \dfrac{1}{C_c(1/g_{mII} - R_z)}$ (RHP for $R_z < 1/g_{mII}$, at infinity for $R_z = 1/g_{mII}$, LHP for $R_z > 1/g_{mII}$).

## Grading notes

+2: all four roots derived with the coefficient-ratio method (or equivalent) and the approximations named ($R_z \ll R_I, R_{II}$; widely spaced poles; $C_I$ small for $p_4$; $C_I \ll C_c, C_{II}$, i.e. $C_I(C_c + C_{II}) \ll C_cC_{II}$, for the last form of $p_2$). +1: all four results with one justification missing or one form of $p_2$ missing. 0: two or three of the four correct. A wrong root asserted as fact for one of the four, e.g. $p_4 = -1/(R_zC_c)$ or $-1/(R_zC_{II})$, or $z_1 = 1/[C_c(R_z - 1/g_{mII})]$ claimed as the RHP zero for small $R_z$ (sign inverted), caps the score at 0. −2 (asserted as fact): coefficient ratios inverted, or most of the four roots wrong.
