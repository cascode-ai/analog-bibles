# Detailed solution - G191

Drive the source terminal with a test voltage $v_x$, with the gate returned to ground through $R_S$ and the drain and body at ac ground. Compute the current $i_x$ that $v_x$ supplies, then split the admittance $Y_o=i_x/v_x$ into a constant conductance plus a series $R$–$L$ branch.

### Step 1 — Gate-source voltage

With $C_{gd}$, $C_{gb}$ neglected, the only path from the source to the gate is $C_{gs}$, which forms a divider with $R_S$:

$$
v_g=v_x\frac{sC_{gs}R_S}{1+sC_{gs}R_S},\qquad
v_{gs}=v_g-v_x=-\frac{v_x}{1+sR_SC_{gs}} .
$$

The body is at ac ground, so $v_{bs}=-v_x$.

### Step 2 — Test current

The channel current flowing from drain to source is $g_mv_{gs}+g_{mb}v_{bs}$, and $C_{gs}$ carries $sC_{gs}v_{gs}$ from the gate into the source node. KCL at the source therefore gives

$$
i_x=-(g_mv_{gs}+g_{mb}v_{bs})-sC_{gs}v_{gs}
=v_x\left[g_{mb}+\frac{g_m+sC_{gs}}{1+sR_SC_{gs}}\right].
$$

### Step 3 — Split into the equivalent circuit

Dividing the fraction, $\dfrac{g_m+sC_{gs}}{1+sR_SC_{gs}}=\dfrac1{R_S}+\dfrac{g_m-1/R_S}{1+sR_SC_{gs}}$, so

$$
Y_o=\left(g_{mb}+\frac1{R_S}\right)+\frac{1}{\dfrac{1}{g_m-1/R_S}+s\,\dfrac{R_SC_{gs}}{g_m-1/R_S}} .
$$

The first term is a conductance; the second is a resistor in series with an inductor. Comparing with $R_2\parallel(R_1+sL)$:

$$
R_2=R_S\parallel\frac1{g_{mb}},\qquad
R_1=\frac1{g_m-1/R_S}\approx\frac1{g_m},\qquad
L=\frac{R_SC_{gs}}{g_m-1/R_S}\approx\frac{R_SC_{gs}}{g_m},
$$

where the approximations use $R_S\gg1/g_m$. This condition makes $R_1$ and $L$ positive, so the branch is a real inductor and the output impedance rises with frequency.

### Step 4 — Checks

At $s=0$, $Y_o=g_{mb}+1/R_S+g_m-1/R_S=g_m+g_{mb}$, so $z_o(0)=R_1\parallel R_2=1/(g_m+g_{mb})$, the familiar follower output resistance. As $s\to\infty$ the inductive branch opens and $z_o(\infty)=R_2=R_S\parallel(1/g_{mb})$: $C_{gs}$ then shorts the gate to the source, so the source looks back into $R_S$, and the $g_{mb}$ generator, controlled by the output voltage itself, acts as a resistor $1/g_{mb}$ to ground. Body effect therefore modifies only $R_2$.
