# Detailed solution - A005

Mesh analysis needs voltage sources, so first convert the dependent current source $g_mv_1$ and its parallel resistor $R_4$ into a Thevenin equivalent. The circuit then has two meshes; write KVL around each, express the controlling voltage $v_1$ in mesh currents, solve, and form $v_{out}$.

### Step 1 — Thevenin form of the output branch

The source $g_mv_1$ draws current from the $v_{out}$ node to ground, in parallel with $R_4$. With nothing else connected, all of $g_mv_1$ flows up through $R_4$ and the open-circuit voltage is $-g_mR_4v_1$; the resistance seen with the source zeroed is $R_4$. The branch is therefore $R_4$ in series with a dependent voltage source $-g_mR_4v_1$ (positive terminal up, at the node marked x below $R_4$).

<!-- diagram: diagram-01.cir -->

The converted circuit is a two-mesh ladder: $v_{in}$, $R_1$ and $R_3$ form the left mesh; $R_3$, $R_2$, $R_4$ and the source $-g_mR_4v_1$ form the right mesh. Take both mesh currents clockwise: $i_a$ in the left mesh (down through $R_3$) and $i_b$ in the right mesh (up through $R_3$, then down through $R_4$). The voltages needed later are

$$
v_1=R_3(i_a-i_b),\qquad v_{out}=R_4i_b-g_mR_4v_1=R_4(i_b-g_mv_1).
$$

The second expression is the actual node voltage at the top of $R_4$, which the conversion leaves unchanged.

### Step 2 — Mesh equations

KVL around the left mesh, with the source voltage equal to the drops:

$$
v_{in}=(R_1+R_3)\,i_a-R_3\,i_b .
$$

Around the right mesh the drops are $R_3(i_b-i_a)$, $R_2i_b$ and $v_{out}$:

$$
0=-R_3i_a+(R_2+R_3+R_4)\,i_b-g_mR_4v_1 .
$$

Substituting $v_1=R_3(i_a-i_b)$ removes the controlling variable:

$$
0=-R_3(1+g_mR_4)\,i_a+(R_2+R_3+R_4+g_mR_3R_4)\,i_b .
$$

### Step 3 — Solve for the mesh currents

The determinant of the $2\times2$ system is

$$
\begin{aligned}
\Delta&=(R_1+R_3)(R_2+R_3+R_4+g_mR_3R_4)-R_3^2(1+g_mR_4)\\
&=R_1R_2+R_1R_3+R_1R_4+R_2R_3+R_3R_4+g_mR_1R_3R_4 ,
\end{aligned}
$$

since $R_3^2$ and $g_mR_3^2R_4$ cancel. Cramer's rule then gives

$$
i_a=\frac{R_2+R_3+R_4+g_mR_3R_4}{\Delta}\,v_{in},\qquad
i_b=\frac{R_3(1+g_mR_4)}{\Delta}\,v_{in}.
$$

### Step 4 — Output voltage and transfer function

From Step 1, $v_{out}=R_4[i_b-g_mR_3(i_a-i_b)]=R_4[(1+g_mR_3)i_b-g_mR_3i_a]$. Substituting the mesh currents:

$$
\begin{aligned}
v_{out}&=\frac{R_3R_4v_{in}}{\Delta}\Big[(1+g_mR_3)(1+g_mR_4)-g_m(R_2+R_3+R_4+g_mR_3R_4)\Big]\\
&=\frac{R_3R_4v_{in}}{\Delta}\,(1-g_mR_2).
\end{aligned}
$$

Hence

$$
\frac{v_{out}}{v_{in}}=\frac{R_3R_4(1-g_mR_2)}{R_1R_2+R_1R_3+R_1R_4+R_2R_3+R_3R_4+g_mR_1R_3R_4},
$$

or, dividing through by $R_1R_2R_3R_4$, $G_1(G_2-g_m)/(G_1G_2+G_1G_4+G_2G_3+G_2G_4+G_3G_4+g_mG_2)$ with $G_k=1/R_k$, the same result the nodal method gives. The zero of transmission at $g_mR_2=1$ is where the inverting current $g_mv_1$ exactly cancels the current fed forward through $R_2$.
