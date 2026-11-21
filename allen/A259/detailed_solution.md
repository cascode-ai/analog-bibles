# Detailed solution - A259

The nulling resistor places the zero at $z_1=1/[C_c(1/g_{mII}-R_z)]$, so the zero goes to infinity when the bracket vanishes. With that $R_z$, find the three poles from the cubic denominator, first with the widely-spaced-root approximations and then exactly.

### Step 1 — $R_z$ for a zero at infinity

The numerator of $V_{out}/V_{in}$ is $1-s\,C_c(1/g_{mII}-R_z)$. Its $s$ term disappears, and the zero moves to infinity, when

$$
R_z=\frac{1}{g_{mII}}=\frac{1}{500\ \mu\mathrm S}=2\ \mathrm{k\Omega}.
$$

### Step 2 — Denominator coefficients

The denominator is $1+bs+cs^2+ds^3$ with

$$
\begin{aligned}
b&=(C_{II}+C_c)R_{II}+(C_I+C_c)R_I+g_{mII}R_IR_{II}C_c+R_zC_c=2.332\times10^{-4}\ \mathrm s,\\
c&=R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II})+R_zC_c(R_IC_I+R_{II}C_{II})=2.814\times10^{-12}\ \mathrm{s^2},\\
d&=R_IR_{II}R_zC_IC_{II}C_c=4.5\times10^{-21}\ \mathrm{s^3}.
\end{aligned}
$$

For widely spaced roots, $p_1\approx-1/b$, $p_2\approx-b/c$ and $p_4\approx-c/d$; the simplified forms below follow from $R_z\ll R_I,R_{II}$ and $C_I\ll C_c,C_{II}$.

### Step 3 — The poles

Dominant pole, using the Miller term of $b$:

$$
p_1\approx\frac{-1}{g_{mII}R_{II}R_IC_c}=\frac{-1}{(500\ \mu\mathrm S)(100\ \mathrm{k\Omega})(150\ \mathrm{k\Omega})(30\ \mathrm{pF})}=-4.44\times10^{3}\ \mathrm{rad/s}.
$$

Output pole:

$$
p_2\approx\frac{-g_{mII}}{C_{II}}=\frac{-500\ \mu\mathrm S}{5\ \mathrm{pF}}=-100\times10^{6}\ \mathrm{rad/s},
$$

or, in the fuller form, $-g_{mII}C_c/(C_IC_{II}+C_cC_I+C_cC_{II})=-81\times10^6$ rad/s.

Pole created by $R_z$:

$$
p_4\approx\frac{-1}{R_zC_I}=\frac{-1}{(2\ \mathrm{k\Omega})(1\ \mathrm{pF})}=-500\times10^{6}\ \mathrm{rad/s}.
$$

### Step 4 — Exact roots and result

Solving the cubic numerically:

| Root | Approximation (rad/s) | Exact root (rad/s) |
|---|---|---|
| $p_1$ | $-4.44\times10^3$ | $-4.29\times10^3$ |
| $p_2$ | $-100\times10^6$ ($-81\times10^6$ fuller form) | $-98.3\times10^6$ |
| $p_4$ | $-500\times10^6$ | $-527\times10^6$ |
| $z_1$ | $\infty$ | $\infty$ |

The approximations are within about 20%. The exact $p_1$ is a little lower in magnitude than $1/(g_{mII}R_IR_{II}C_c)$ because $g_{mII}R_{II}=50$ is not very large, so the other terms of $b$ add a few percent. With $R_z=2$ kΩ the RHP zero is removed, leaving the output pole near $-1\times10^8$ rad/s and a high-frequency pole near $-5\times10^8$ rad/s.
