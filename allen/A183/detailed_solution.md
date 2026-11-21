# Detailed solution - A183

Replace the bridging capacitor $C_2$ by two grounded capacitors using the Miller simplification, with the low-frequency gain $K$ from node 1 ($V_1$) to the output. The input node then becomes a single RC section, and its time constant gives the dominant pole. Finally compare the denominator with the nodal result term by term.

### Step 1 — Gain across $C_2$

At node 1 the source drives $V_1$; M1 converts it to the current $g_{m1}V_1$, which flows into $R_3$ and $C_3$ at the output. Because the reactance of $C_2$ at the frequencies of interest exceeds $R_3$, $C_2$ barely loads the output (and its feedforward current is small), so the gain from $V_1$ to $V_{out}$ is the low-frequency value

$$
K=\frac{V_{out}}{V_1}=-g_{m1}R_3 .
$$

### Step 2 — Miller simplification

A capacitor $C_2$ connected between two nodes whose voltages are related by $K$ draws the same currents as $C_2(1-K)$ from the first node to ground and $C_2(1-1/K)$ from the second node to ground:

$$
C_{M1}=C_2(1+g_{m1}R_3),\qquad C_{M2}=C_2\left(1+\frac1{g_{m1}R_3}\right)\approx C_2 .
$$

### Step 3 — Dominant pole

Node 1 now sees the resistance $R_1$ in parallel with the capacitance $C_1+C_{M1}$. Its time constant gives the pole

$$
p_1=\frac{-1}{R_1\left[C_1+(1+g_{m1}R_3)C_2\right]}\cong\frac{-1}{g_{m1}R_1R_3C_2},
$$

the approximation holding when the Miller term $g_{m1}R_3C_2$ dominates $C_1+C_2$. Since $R_1=R_s$ is large, this input pole is the dominant one: the Miller-multiplied $C_2$ appears across the high source resistance.

### Step 4 — Comparison with the nodal result

Expanding the Miller denominator gives

$$
R_1\left[C_1+(1+g_{m1}R_3)C_2\right]=R_1(C_1+C_2)+g_{m1}R_1R_3C_2 ,
$$

which contains every term of the nodal expression $R_1(C_1+C_2)+R_3(C_2+C_3)+g_{m1}R_1R_3C_2$ except $R_3(C_2+C_3)$, the time constant of the output node. The Miller simplification drops that term because it treats the output as responding instantly (its gain $K$ is taken as frequency independent). The term is negligible when $g_{m1}R_1\gg1$ and $R_1$ is comparable to or larger than $R_3$, as here with $R_s$ of order $r_{ds}$. In that case both results reduce to the same dominant pole,

$$
p_1\cong\frac{-1}{g_{m1}R_1R_3C_2}.
$$
