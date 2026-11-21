# Detailed solution - A260

Choose $R_z$ so that the zero $z_1=1/[C_c(1/g_{mII}-R_z)]$ lands on the output pole $p_2\approx-g_{mII}/C_{II}$, then find the remaining poles from the cubic denominator, approximately and exactly.

### Step 1 — $R_z$ for pole–zero cancellation

Set $z_1=p_2$:

$$
\frac{1}{C_c(1/g_{mII}-R_z)}=-\frac{g_{mII}}{C_{II}}
\quad\Rightarrow\quad
R_z=\frac{1}{g_{mII}}+\frac{C_{II}}{g_{mII}C_c}=\frac{C_c+C_{II}}{g_{mII}C_c}.
$$

$$
R_z=\frac{35\ \mathrm{pF}}{(500\ \mu\mathrm S)(30\ \mathrm{pF})}=2.33\ \mathrm{k\Omega}.
$$

Because $R_z>1/g_{mII}=2$ kΩ, the zero is in the left half-plane:

$$
z_1=\frac{1}{(30\ \mathrm{pF})(2\ \mathrm{k\Omega}-2.333\ \mathrm{k\Omega})}=-100\times10^{6}\ \mathrm{rad/s}.
$$

### Step 2 — Denominator coefficients

With $R_z=2.333$ kΩ,

$$
\begin{aligned}
b&=(C_{II}+C_c)R_{II}+(C_I+C_c)R_I+g_{mII}R_IR_{II}C_c+R_zC_c=2.332\times10^{-4}\ \mathrm s,\\
c&=R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II})+R_zC_c(R_IC_I+R_{II}C_{II})=2.821\times10^{-12}\ \mathrm{s^2},\\
d&=R_IR_{II}R_zC_IC_{II}C_c=5.25\times10^{-21}\ \mathrm{s^3}.
\end{aligned}
$$

### Step 3 — The poles

Using the widely-spaced-root forms with $R_z\ll R_I,R_{II}$ and $C_I\ll C_c,C_{II}$:

$$
p_1\approx\frac{-1}{g_{mII}R_{II}R_IC_c}=-4.44\times10^{3}\ \mathrm{rad/s},\qquad
p_2\approx\frac{-g_{mII}}{C_{II}}=-100\times10^{6}\ \mathrm{rad/s},
$$

$$
p_4\approx\frac{-1}{R_zC_I}=\frac{-1}{(2.333\ \mathrm{k\Omega})(1\ \mathrm{pF})}=-429\times10^{6}\ \mathrm{rad/s}.
$$

### Step 4 — Exact roots and result

| Root | Approximation (rad/s) | Exact (rad/s) |
|---|---|---|
| $p_1$ | $-4.44\times10^3$ | $-4.29\times10^3$ |
| $p_2$ | $-100\times10^6$ | $-102\times10^6$ |
| $z_1$ | $-100\times10^6$ | $-100\times10^6$ |
| $p_4$ | $-429\times10^6$ | $-435\times10^6$ |

The zero falls within 2% of the exact output pole, so the cancellation is nearly perfect. The amplifier is left with the dominant pole at about $-4.3\times10^3$ rad/s and the $R_z$ pole at about $-4.3\times10^8$ rad/s, which now limits the usable GB.
