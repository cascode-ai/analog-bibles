# Detailed solution - A004

The circuit has two unknown node voltages, $v_1$ at the top of $R_3$ and $v_{out}$ at the top of $R_4$; $v_{in}$ fixes the third node. Write KCL at the two unknown nodes in conductance form, $G_k=1/R_k$, and solve the $2\times2$ system by Cramer's rule.

### Step 1 — KCL at node $v_1$

Summing the currents leaving node $v_1$ through $R_1$ (to $v_{in}$), $R_3$ (to ground) and $R_2$ (to $v_{out}$):

$$
G_1(v_1-v_{in})+G_3v_1+G_2(v_1-v_{out})=0
\;\Rightarrow\;
(G_1+G_2+G_3)\,v_1-G_2\,v_{out}=G_1v_{in}.
$$

### Step 2 — KCL at node $v_{out}$

The dependent source $g_mv_1$ points from the $v_{out}$ node down to ground, so it carries current $g_mv_1$ out of that node. With the currents through $R_2$ and $R_4$:

$$
G_2(v_{out}-v_1)+g_mv_1+G_4v_{out}=0
\;\Rightarrow\;
(g_m-G_2)\,v_1+(G_2+G_4)\,v_{out}=0.
$$

### Step 3 — Solve by Cramer's rule

In matrix form,

$$
\begin{bmatrix}G_1+G_2+G_3 & -G_2\\ g_m-G_2 & G_2+G_4\end{bmatrix}
\begin{bmatrix}v_1\\ v_{out}\end{bmatrix}
=\begin{bmatrix}G_1v_{in}\\ 0\end{bmatrix}.
$$

The determinant is

$$
\begin{aligned}
\Delta&=(G_1+G_2+G_3)(G_2+G_4)+G_2(g_m-G_2)\\
&=G_1G_2+G_1G_4+G_2G_3+G_2G_4+G_3G_4+g_mG_2 ,
\end{aligned}
$$

where the $G_2^2$ terms cancel. Replacing the second column by the right-hand side gives

$$
v_{out}=\frac{1}{\Delta}\begin{vmatrix}G_1+G_2+G_3 & G_1v_{in}\\ g_m-G_2 & 0\end{vmatrix}
=\frac{G_1(G_2-g_m)}{\Delta}\,v_{in}.
$$

### Step 4 — Transfer function

$$
\frac{v_{out}}{v_{in}}=\frac{G_1(G_2-g_m)}{G_1G_2+G_1G_4+G_2G_3+G_2G_4+G_3G_4+g_mG_2}.
$$

Multiplying numerator and denominator by $R_1R_2R_3R_4$ gives the resistance form

$$
\frac{v_{out}}{v_{in}}=\frac{R_3R_4(1-g_mR_2)}{R_1R_2+R_1R_3+R_1R_4+R_2R_3+R_3R_4+g_mR_1R_3R_4}.
$$

Two checks support the result. With $g_m=0$ it reduces to the passive ladder $R_1$–$R_3$–$R_2$–$R_4$. The numerator $G_2-g_m$ shows two paths from $v_1$ to $v_{out}$ of opposite sign: forward conduction through $R_2$ and the inverting current $g_mv_1$. They cancel when $g_m=G_2$, giving zero output; for $g_mR_2\gg1$ the inverting path dominates.
