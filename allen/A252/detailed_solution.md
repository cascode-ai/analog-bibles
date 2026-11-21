# Detailed solution - A252

For a cubic denominator with widely spaced real roots, each coefficient is dominated by the product of the reciprocals of the lowest poles, so each pole follows from a ratio of successive coefficients. Apply this with $R_z\ll R_I,R_{II}$ to simplify each coefficient, and read the zero directly from the numerator.

### Step 1 — Coefficient ratios for widely spaced poles

Let the poles be $p_1$, $p_2$, $p_4$ with $|p_1|\ll|p_2|\ll|p_4|$. Then

$$
1+bs+cs^2+ds^3=\Big(1+\frac{s}{|p_1|}\Big)\Big(1+\frac{s}{|p_2|}\Big)\Big(1+\frac{s}{|p_4|}\Big)
$$

and, keeping only the dominant term of each coefficient,

$$
b\approx\frac{1}{|p_1|},\qquad c\approx\frac{1}{|p_1||p_2|},\qquad d=\frac{1}{|p_1||p_2||p_4|},
$$

so that

$$
|p_1|\approx\frac1b,\qquad |p_2|\approx\frac bc,\qquad |p_4|\approx\frac cd .
$$

### Step 2 — Dominant pole $p_1$

In $b=(C_{II}+C_c)R_{II}+(C_I+C_c)R_I+g_{mII}R_IR_{II}C_c+R_zC_c$, the term $R_zC_c$ is negligible because $R_z\ll R_I$, and the Miller term $g_{mII}R_IR_{II}C_c$ exceeds $(C_{II}+C_c)R_{II}$ and $C_IR_I$ for a high-gain second stage ($g_{mII}R_{II}\gg1$, $g_{mII}R_I\gg1$). Keeping the terms that contain $R_IC_c$:

$$
b\approx R_IC_c+g_{mII}R_IR_{II}C_c=(1+g_{mII}R_{II})R_IC_c,
$$

$$
p_1\cong\frac{-1}{(1+g_{mII}R_{II})R_IC_c}\cong\frac{-1}{g_{mII}R_{II}R_IC_c}.
$$

### Step 3 — Output pole $p_2$

In $c$, the second term $R_zC_c(R_IC_I+R_{II}C_{II})$ is smaller than the first by a factor of order $R_z/R_{II}$ or $R_z/R_I$, so with $R_z\ll R_I,R_{II}$

$$
c\approx R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II}).
$$

Then

$$
p_2\approx-\frac bc=\frac{-g_{mII}R_IR_{II}C_c}{R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II})}
=\frac{-g_{mII}C_c}{C_IC_{II}+C_cC_I+C_cC_{II}}.
$$

If further $C_I\ll C_c$ and $C_I\ll C_{II}$, i.e. $C_I(C_c+C_{II})\ll C_cC_{II}$, the denominator is about $C_cC_{II}$ and $p_2\cong-g_{mII}/C_{II}$.

### Step 4 — Pole introduced by $R_z$

Using $c$ from Step 3 and $d=R_IR_{II}R_zC_IC_{II}C_c$:

$$
\frac cd=\frac{C_IC_{II}+C_cC_I+C_cC_{II}}{R_zC_IC_{II}C_c}
=\frac{1}{R_z}\Big(\frac1{C_c}+\frac1{C_{II}}+\frac1{C_I}\Big)\approx\frac{1}{R_zC_I},
$$

where the last step uses $C_I\ll C_c,C_{II}$ (the first-stage output node has only small device capacitances). Hence

$$
p_4\cong\frac{-1}{R_zC_I}.
$$

### Step 5 — Zero

No approximation is needed: the numerator vanishes when $1-s\big[(C_c/g_{mII})-R_zC_c\big]=0$, i.e.

$$
z_1=\frac{1}{C_c(1/g_{mII}-R_z)}.
$$

It lies in the right half-plane for $R_z<1/g_{mII}$, moves to infinity at $R_z=1/g_{mII}$, and enters the left half-plane for $R_z>1/g_{mII}$, which is what makes the nulling resistor useful.
