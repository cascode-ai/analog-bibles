# Detailed solution - A474

Solve the two-node charge balance of the two-stage array with the actual coupling capacitor $C_x+\Delta C_x$, then express the unit capacitor through the nominal design relation $C=7C_x/8$ so that the result depends only on $\varepsilon=\Delta C_x/C_x$.

### Step 1 — Charge equations

Let the MSB node (buffer input) be at $v_{OUT}$ and the LSB node at $v_L$, with section codes

$$
A=\sum_{i=1}^{3}b_{i-1}2^{3-i}=4b_0+2b_1+b_2,\qquad B=\sum_{i=4}^{6}b_{i-1}2^{6-i}=4b_3+2b_4+b_5 .
$$

The MSB side has $7C$ in total, the LSB side $8C$ (including the terminating $C$), and the coupling capacitor is $C_x'=C_x+\Delta C_x$. All capacitors start discharged, so each floating node keeps zero charge:

$$
\begin{aligned}
7C\,v_{OUT}+C_x'\left(v_{OUT}-v_L\right)&=C\,V_{REF}A,\\
8C\,v_L+C_x'\left(v_L-v_{OUT}\right)&=C\,V_{REF}B .
\end{aligned}
$$

### Step 2 — Solve for $v_{OUT}$

From the second equation $v_L=(CV_{REF}B+C_x'v_{OUT})/(8C+C_x')$. Substituting into the first, the coefficient of $v_{OUT}$ becomes $\left[(7C+C_x')(8C+C_x')-C_x'^2\right]/(8C+C_x')=(56C^2+15CC_x')/(8C+C_x')$, so

$$
v_{OUT}=V_{REF}\,\frac{A\left(8C+C_x'\right)+C_x'B}{56C+15C_x'} .
$$

### Step 3 — Express in terms of $C_x$ and $\Delta C_x$

The nominal design gives $C_x=8C/7$, i.e. $C=7C_x/8$. With $C_x'=C_x(1+\varepsilon)$, $\varepsilon=\Delta C_x/C_x$, the numerator becomes $C_x[(8+\varepsilon)A+(1+\varepsilon)B]$ and the denominator $C_x(64+15\varepsilon)$:

$$
v_{OUT}=V_{REF}\,\frac{(8+\varepsilon)A+(1+\varepsilon)B}{64+15\varepsilon}
=\frac{V_{REF}}{8}\left(1-\frac{7\varepsilon}{64+15\varepsilon}\right)\left[A+\left(1+\frac{7\varepsilon}{8+\varepsilon}\right)\frac{B}{8}\right].
$$

Expanding the factors confirms the second form: $\frac{V_{REF}}{8}\cdot\frac{8(8+\varepsilon)}{64+15\varepsilon}\left[A+\frac{8(1+\varepsilon)}{8+\varepsilon}\cdot\frac B8\right]$ equals the first.

### Step 4 — First-order form and check

For $|\varepsilon|\ll1$,

$$
v_{OUT}\approx\frac{V_{REF}}{8}\left(1-\frac{7\Delta C_x}{64C_x}\right)\left[\sum_{i=1}^{3}b_{i-1}2^{3-i}+\left(1+\frac{7\Delta C_x}{8C_x}\right)\sum_{i=4}^{6}\frac{b_{i-1}2^{6-i}}{8}\right].
$$

For $\Delta C_x=0$ this reduces to $V_{REF}(A/8+B/64)$, the ideal 6-bit output. An error in $C_x$ therefore does two things: it changes the overall gain (factor $1-7\varepsilon/64$) and it changes the weight of the LSB section relative to the MSB section (factor $1+7\varepsilon/8$).
