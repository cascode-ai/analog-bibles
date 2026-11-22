# Detailed solution - A423

The ladder is linear, so find each source's share of $I_{OUT}$ by superposition, with the other current sources open-circuited. At every node the current divides among the branches in proportion to their conductances, so the job is to find the resistance seen in each direction from the node.

### Step 1 — Labels

Call the ladder nodes A (fed by $I_3$, with $R$ to ground), B ($I_2$, $2R$ to ground), C ($I_1$, $2R$ to ground) and D, the output node fed by $I_0$. Horizontal resistors $R$ join A–B, B–C and C–D. $I_{OUT}$ flows from D into ground, so D is held at 0 V.

### Step 2 — Contribution of $I_0$

$I_0$ enters node D, which is at ground potential, so no current flows into the resistor C–D on its account and all of it leaves as $I_{OUT}$: weight 1.

### Step 3 — Contribution of $I_1$ (node C)

From C there are three paths to ground: the vertical $2R$; the resistor $R$ to D; and, to the left, $R$ in series with node B's resistance to ground. Looking left from B, the vertical $2R$ is in parallel with $R+R=2R$ through A, giving $R$, so the left path is $R+R=2R$. The share reaching D is

$$
\frac{1/R}{1/2R+1/R+1/2R}=\frac12 .
$$

### Step 4 — Contribution of $I_2$ (node B)

From B: the vertical $2R$; to the left $R+R=2R$ through A; to the right $R$ in series with node C's resistance to ground excluding B, $2R\,\|\,R=2R/3$, i.e. $5R/3$. The share going right is

$$
\frac{3/5R}{1/2R+1/2R+3/5R}=\frac38 ,
$$

and at C that current divides between $2R$ and the path $R$ to D in the ratio $1:2$, so $2/3$ of it reaches D:

$$
\frac38\cdot\frac23=\frac14 .
$$

### Step 5 — Contribution of $I_3$ (node A)

From A: the vertical $R$, and to the right $R$ in series with node B's resistance excluding A, $2R\,\|\,(5R/3)=10R/11$, i.e. $21R/11$. The share going right is

$$
\frac{11/21R}{1/R+11/21R}=\frac{11}{32}.
$$

At B, between $2R$ and $5R/3$, the fraction $\tfrac{3/5}{1/2+3/5}=\tfrac6{11}$ continues right, and at C the fraction $2/3$ reaches D:

$$
\frac{11}{32}\cdot\frac6{11}\cdot\frac23=\frac18 .
$$

### Step 6 — Result and check

$$
I_{OUT}=I_0+\frac{I_1}2+\frac{I_2}4+\frac{I_3}8 .
$$

Nodal analysis confirms it. Writing KCL at A, B and C with D at 0 V and solving gives

$$
V_C=\frac R8\,(4I_1+2I_2+I_3),\qquad I_{OUT}=I_0+\frac{V_C}R ,
$$

which is the same expression. Each source one node further from the output is weighted by a further factor of 1/2, so with binary-weighted switching of equal currents the ladder forms a 4-bit current-mode DAC with $I_0$ as the MSB.
