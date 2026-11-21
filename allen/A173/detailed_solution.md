# Detailed solution - A173

Every circuit has gain $|A_v|\approx g_{m,in}R_{out}$, where $g_{m,in}$ is the input transistor's transconductance and $R_{out}$ the parallel combination of the resistances looking up and down from the output. Express all $g_m$ and $r_{ds}$ in units of one p-channel device at current $I$, evaluate each circuit, and look for the smallest product.

### Step 1 — Normalized device parameters

With $g_m=\sqrt{2K'(W/L)I_D}$, equal $W/L$ and $K'_N=2K'_P$, and $r_{ds}=1/(\lambda I_D)$ with $\lambda_P=2\lambda_N$:

$$
g_{mN}(I)=\sqrt2\,g_{mP},\qquad g_m(2I)=\sqrt2\,g_m(I),\qquad r_{dsP}=\frac{r_{dsN}}2,
$$

where $g_{mP}$ is the p-channel transconductance at $I$ and $r_{dsN}=1/(\lambda_NI)$. A cascoded branch looks like $g_mr_{ds}\cdot R_S$ (cascode $g_mr_{ds}$ times the resistance at its source), so it is larger than any single $r_{ds}$ by the factor $g_mr_{ds}\gg1$.

### Step 2 — Output resistance and gain of each circuit

Reading the figure:

- **C1:** n input, n cascode; simple p source load. The cascode side is $\sim g_mr_{ds}^2$, so $R_{out}\approx r_{dsP}$.
- **C2:** p input, p cascode; simple n sink load. $R_{out}\approx r_{dsN}$.
- **C3:** n input, n cascode; p cascode load. Both sides are cascoded: $R_{out}=(g_{mP}r_{dsP}^2)\parallel(g_{mN}r_{dsN}^2)$.
- **C4:** p input, p cascode; n cascode load. Same $R_{out}$ as C3.
- **C5:** n input carrying $2I$ (an extra p source feeds the cascode's source), n cascode; simple p source load. $R_{out}\approx r_{dsP}$.
- **C6:** p input carrying $2I$ (an extra n sink at the cascode's source), p cascode; simple n sink load. $R_{out}\approx r_{dsN}$.

For C3, $g_{mP}r_{dsP}^2=0.25\,g_{mP}r_{dsN}^2$ and $g_{mN}r_{dsN}^2=1.414\,g_{mP}r_{dsN}^2$, so

$$
R_{out,3}=\frac{(0.25)(1.414)}{0.25+1.414}\,g_{mP}r_{dsN}^2=0.212\,g_{mP}r_{dsN}^2,\qquad
|A_{v3}|=g_{mN}R_{out,3}=(1.414)(0.212)(g_{mP}r_{dsN})^2=0.30\,(g_{mP}r_{dsN})^2 .
$$

The others follow the same way:

| Circuit | $g_{m,in}/g_{mP}$ | $R_{out}$ | $\lvert A_v\rvert$ |
|---|---|---|---|
| 1 | 1.41 | $0.5\,r_{dsN}$ | $0.71\,g_{mP}r_{dsN}$ |
| 2 | 1 | $r_{dsN}$ | $1.0\,g_{mP}r_{dsN}$ |
| 3 | 1.41 | $0.212\,g_{mP}r_{dsN}^2$ | $0.30\,(g_{mP}r_{dsN})^2$ |
| 4 | 1 | $0.212\,g_{mP}r_{dsN}^2$ | $0.21\,(g_{mP}r_{dsN})^2$ |
| 5 | 2 | $0.5\,r_{dsN}$ | $1.0\,g_{mP}r_{dsN}$ |
| 6 | 1.41 | $r_{dsN}$ | $1.41\,g_{mP}r_{dsN}$ |

### Step 3 — Lowest gain

The fully cascoded circuits 3 and 4 have gains of order $(g_mr_{ds})^2$ and are far above the rest, so the lowest gain is among the single-cascode circuits 1, 2, 5 and 6, whose output resistance is just the $r_{ds}$ of the simple current-source load. Of these:

- Circuits 1 and 5 have the lowest output resistance, the p-channel $r_{dsP}=r_{dsN}/2$, because $\lambda_P=2\lambda_N$.
- Circuit 5's input transistor carries $2I$, so its $g_m=2g_{mP}$ is $\sqrt2$ larger than Circuit 1's $g_{mN}=\sqrt2\,g_{mP}$; that raises its gain to $1.0\,g_{mP}r_{dsN}$.
- Circuits 2 and 6 have the larger $r_{dsN}$ and gains of $1.0$ and $1.41\,g_{mP}r_{dsN}$.

**Circuit 1 has the lowest voltage gain**, $|A_v|\approx g_{mN}r_{dsP}=0.71\,g_{mP}r_{dsN}$: its n-channel input $g_m$ does not make up for the low $r_{dsP}$ of its simple p-channel load.
