# Detailed solution - A010

In [Fig. 1] the input and output halves are coupled only through the controlled source, so the transresistance is the input-node resistance times the output gain. Writing the exact result of [Fig. 2] in the same resistance form shows term by term what the Miller simplification discards.

### Step 1 — Transresistance of the simplified circuit

At the input of [Fig. 1], $i_{in}$ flows into $R_1\parallel R_2'$ with $R_2'=R_2/(1+g_mR_3)$:

$$
R_1\parallel R_2'=\frac{R_1\dfrac{R_2}{1+g_mR_3}}{R_1+\dfrac{R_2}{1+g_mR_3}}
=\frac{R_1R_2}{R_1+R_2+g_mR_1R_3},
\qquad v_1=i_{in}\,(R_1\parallel R_2').
$$

At the output, the source $g_mv_1$ draws current from the output node to ground, so all of it flows up through $R_3$: $v_{out}=-g_mR_3v_1$. Combining,

$$
\left.\frac{v_{out}}{i_{in}}\right|_{\text{Fig. 1}}=-\frac{g_mR_1R_2R_3}{R_1+R_2+g_mR_1R_3}.
$$

### Step 2 — Exact result in resistance form

Multiplying numerator and denominator of the given exact result by $R_1R_2R_3$:

$$
\left.\frac{v_{out}}{i_{in}}\right|_{\text{Fig. 2}}=\frac{(G_2-g_m)R_1R_2R_3}{(G_1G_2+G_1G_3+G_2G_3+g_mG_2)R_1R_2R_3}
=\frac{R_1R_3(1-g_mR_2)}{R_1+R_2+R_3+g_mR_1R_3}.
$$

### Step 3 — Compare term by term

The two results differ in two places.

| | Numerator | Denominator |
|---|---|---|
| Exact [Fig. 2] | $R_1R_3(1-g_mR_2)$ | $R_1+R_2+R_3+g_mR_1R_3$ |
| Simplified [Fig. 1] | $R_1R_3(-g_mR_2)$ | $R_1+R_2+g_mR_1R_3$ |

1. **Numerator.** The term $1$ in $1-g_mR_2$ is the feedforward current that $R_2$ carries directly from node A to node B, of opposite sign to $g_mv_1$. [Fig. 1] drops it by assuming $v_{out}\approx-g_mR_3v_1$. It is negligible when $g_mR_2\gg1$, i.e. $g_m\gg G_2$.
2. **Denominator.** The extra $R_3$ in the exact result reflects the current $R_2$ draws from the output node, which loads $R_3$. [Fig. 1] adds nothing at the output and so ignores it. It is negligible when $R_3\ll R_1+R_2+g_mR_1R_3$, which the stated assumption $R_2\gg R_3$ guarantees.

So the two agree when $g_mR_2\gg1$ and $R_3\ll R_2$, exactly the assumptions used to build [Fig. 1].

### Step 4 — Size and direction of the error

The ratio of the two magnitudes, for $g_mR_2>1$, is

$$
\frac{|\text{simplified}|}{|\text{exact}|}=\frac{g_mR_2}{g_mR_2-1}\cdot\frac{R_1+R_2+R_3+g_mR_1R_3}{R_1+R_2+g_mR_1R_3}>1,
$$

since both factors exceed 1: the simplified circuit always overstates the magnitude. If $g_mR_2<1$, the exact transresistance changes sign (the feedforward through $R_2$ dominates), while the simplified one stays negative, so the simplification fails qualitatively.

Numerical example with $R_1=10$ kΩ, $R_2=100$ kΩ, $g_m=1$ mS ($g_mR_2=100$):

| $R_3$ | Exact | Simplified | Overstatement |
|---|---|---|---|
| 10 kΩ | −45.0 kΩ | −47.6 kΩ | 5.8 % |
| 1 kΩ | −8.18 kΩ | −8.33 kΩ | 1.9 % |

For $R_3=10$ kΩ, for instance, exact: $(10\ \mathrm{k\Omega})(10\ \mathrm{k\Omega})(1-100)/(10+100+10+100)\ \mathrm{k\Omega}=-45.0$ kΩ; simplified: $-(1\ \mathrm{mS})(10)(100)(10)\ (\mathrm{k\Omega})^3/(10+100+100)\ \mathrm{k\Omega}=-47.6$ kΩ. The error shrinks as $R_3/R_2$ falls, as Step 3 predicts.
