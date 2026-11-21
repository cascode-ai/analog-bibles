# Detailed solution - A247

Write the denominator as a quadratic $1+as+bs^2$, relate its coefficients to the two poles, and use two approximations: the poles are widely spaced, and the Miller term $g_{mII}R_IR_{II}C_c$ dominates the $s$ coefficient.

### Step 1 — Denominator coefficients and the poles

Write $D(s)=1+as+bs^2$ with

$$
a=R_I(C_I+C_c)+R_{II}(C_{II}+C_c)+g_{mII}R_IR_{II}C_c,\qquad
b=R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II}).
$$

In terms of its roots $p_1$ and $p_2$,

$$
D(s)=\Big(1-\frac{s}{p_1}\Big)\Big(1-\frac{s}{p_2}\Big)=1-s\Big(\frac1{p_1}+\frac1{p_2}\Big)+\frac{s^2}{p_1p_2},
$$

so that

$$
a=-\Big(\frac1{p_1}+\frac1{p_2}\Big),\qquad b=\frac{1}{p_1p_2}.
$$

### Step 2 — Dominant pole

Assume widely spaced poles, $|p_2|\gg|p_1|$. Then $1/|p_2|$ is negligible beside $1/|p_1|$, and

$$
a\approx-\frac1{p_1}\quad\Rightarrow\quad p_1\approx-\frac1a .
$$

The Miller term exceeds $R_I(C_I+C_c)$ by about $g_{mII}R_{II}$ (if $C_c$ is not small compared with $C_I$) and $R_{II}(C_{II}+C_c)$ by about $g_{mII}R_IC_c/(C_{II}+C_c)$. Both factors are large because $R_I$ and $R_{II}$ are high-impedance nodes, so

$$
a\approx g_{mII}R_IR_{II}C_c\quad\Rightarrow\quad p_1\cong\frac{-1}{g_{mII}R_IR_{II}C_c}.
$$

### Step 3 — Output pole

From $b=1/(p_1p_2)$ and $p_1\approx-1/a$,

$$
p_2=\frac{1}{bp_1}\approx-\frac ab
=-\frac{g_{mII}R_IR_{II}C_c}{R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II})}
=\frac{-g_{mII}C_c}{C_IC_{II}+C_{II}C_c+C_IC_c}.
$$

The resistances cancel, so the output pole is set by $g_{mII}$ and the capacitances.

### Step 4 — Consistency of the approximation

The pole ratio is

$$
\frac{p_2}{p_1}\approx\frac{a^2}{b}\approx\frac{(g_{mII}R_IR_{II}C_c)^2}{R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II})},
$$

which is very large for typical values because $a$ contains the large Miller product, so the widely spaced assumption holds: this is pole splitting. If moreover $C_{II}\gg C_c\gg C_I$, the output pole reduces to $p_2\approx-g_{mII}/C_{II}$.
