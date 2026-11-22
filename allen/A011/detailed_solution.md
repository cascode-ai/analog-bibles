# Detailed solution - A011

With $v_{in}=0$ the left end of $R_1$ is grounded, so $R_1$ and $R_3$ are in parallel from node $v_1$ to ground; write $R_{13}=R_1\parallel R_3=R_1R_3/(R_1+R_3)$. Drive the output with a test voltage $v_o$ and find the current $i_o$ it supplies. The Miller route reflects the bridging resistor $R_2$ to the output; the direct route writes KCL at the two nodes.

### Step 1 — Node-to-node gain $K$

Node $v_1$ is connected only to $R_{13}$ (to ground) and to $R_2$ (to the output). It is therefore a plain divider of the test voltage:

$$
v_1=v_o\,\frac{R_{13}}{R_2+R_{13}},
\qquad
K\equiv\frac{v_o}{v_1}=1+\frac{R_2}{R_{13}}.
$$

This $K$ is exact for the test excitation, so Miller's theorem will introduce no approximation.

### Step 2 — Output resistance by Miller's theorem

Miller's theorem replaces $R_2$, connected between $v_1$ and $v_o=Kv_1$, by $R_2/(1-K)$ from $v_1$ to ground and $R_2K/(K-1)$ from the output to ground. The output-side element is

$$
\frac{R_2K}{K-1}=\frac{R_2\left(1+R_2/R_{13}\right)}{R_2/R_{13}}=R_2+R_{13}.
$$

(The input-side element $R_2/(1-K)=-R_{13}$ cancels $R_{13}$ in parallel, consistent with node $v_1$ drawing no net current except through $R_2$.)

The controlled source draws from the output node

$$
g_mv_1=\frac{g_mR_{13}}{R_2+R_{13}}\,v_o ,
$$

so it behaves as a resistance $(R_2+R_{13})/(g_mR_{13})$ to ground. The output node thus sees three resistances in parallel:

$$
R_{out}=R_4\parallel(R_2+R_{13})\parallel\frac{R_2+R_{13}}{g_mR_{13}}
=R_4\,\Big\|\,\frac{R_2+R_{13}}{1+g_mR_{13}}.
$$

### Step 3 — Output resistance by direct nodal analysis

KCL at node $v_1$ with $G_k=1/R_k$:

$$
(G_1+G_2+G_3)\,v_1=G_2v_o .
$$

The test current leaving the source splits into $R_4$, the controlled source and $R_2$:

$$
i_o=G_4v_o+g_mv_1+G_2(v_o-v_1).
$$

Substituting $v_1$:

$$
\frac{i_o}{v_o}=G_4+\frac{G_2(G_1+G_3+g_m)}{G_1+G_2+G_3}.
$$

Multiplying through by $R_1R_2R_3R_4$ and inverting:

$$
R_{out}=\frac{v_o}{i_o}=\frac{R_4(R_1R_2+R_1R_3+R_2R_3)}{R_1R_2+R_1R_3+R_1R_4+R_2R_3+R_3R_4+g_mR_1R_3R_4}.
$$

### Step 4 — Comparison

Expanding the Miller form, with $R_{13}=R_1R_3/(R_1+R_3)$,

$$
\frac{R_2+R_{13}}{1+g_mR_{13}}=\frac{R_1R_2+R_1R_3+R_2R_3}{R_1+R_3+g_mR_1R_3},
$$

and its parallel combination with $R_4$ is exactly the nodal result. The two methods agree identically because $K$ in Step 1 is the true ratio of the two node voltages under the same excitation; Miller's theorem is exact whenever that holds, and becomes an approximation only when $K$ is estimated from a different condition. For $g_mR_{13}\gg1$ and large $R_4$, $R_{out}\approx(1+R_2/R_{13})/g_m$.
