# Detailed solution - A175

The output resistance of each circuit is the resistance looking up from the output in parallel with the resistance looking down. A simple current source contributes one $r_{ds}$; a cascoded branch contributes about $g_mr_{ds}$ times the resistance at the cascode's source. Express all $g_m$ and $r_{ds}$ in units of one p-channel device at current $I$, evaluate each circuit, and compare.

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

### Step 3 — Lowest output resistance

The fully cascoded circuits 3 and 4 have output resistances of order $g_mr_{ds}^2$, so the lowest value is among circuits 1, 2, 5 and 6. In each of these the cascoded side is about $g_mr_{ds}$ times larger than the simple load, so $R_{out}$ is essentially the load's $r_{ds}$:

- Circuits 1 and 5: simple p-channel source, $R_{out}\approx r_{dsP}=\dfrac{1}{2\lambda_NI}=0.5\,r_{dsN}$.
- Circuits 2 and 6: simple n-channel sink, $R_{out}\approx r_{dsN}$.

Because $\lambda_P=2\lambda_N$, the p-channel load has half the output resistance. **Circuits 1 and 5 have the lowest output resistance**, both about $r_{dsP}$.

Keeping the next-order term separates them slightly. In Circuit 1 the cascode's source sees $r_{dsN}$; in Circuit 5 it sees $r_{dsN}(2I)\parallel r_{dsP}=r_{dsN}/2\parallel r_{dsN}/2=r_{dsN}/4$. With $R_{cas}\approx g_{mN}r_{dsN}R_S$,

$$
R_{out1}\approx\frac{r_{dsP}}{1+1/(2g_{mN}r_{dsN})},\qquad
R_{out5}\approx\frac{r_{dsP}}{1+2/(g_{mN}r_{dsN})},
$$

so Circuit 5 is marginally lower, by a relative amount of order $1/(g_mr_{ds})$; to leading order the two are equal.
