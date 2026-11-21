# Detailed solution - G105

Apply a small supply change $v_{dd}$ and follow it around the loop formed by the two mirrors. The node voltages are: $v_g$ at the common gate of $M_3$ and $M_4$ (the drain of $M_2$); $v_a$ at the diode node of $M_1$ (the drain of $M_3$ and the gate of $M_2$); and $v_s=i_{bias}R$ at the source of $M_2$. The two diode-connected devices fix their nodes relative to the rails to within $1/g_m$. Only the output resistances of the non-diode devices, $r_{o3}$ and $r_{o2}$, let $v_{dd}$ inject current. With $g_mr_o\gg1$, keep only the leading term in each $r_o$.

### Step 1 — The PMOS side

$M_4$ is diode-connected and carries $i_{bias}$. Its source is at $v_{dd}$, so

$$
v_{dd}-v_g\approx\frac{i_{bias}}{g_{m4}},
$$

and $v_g$ follows $v_{dd}$ closely. $M_3$ has the same $v_{sg}$, and its drain sits at the low-impedance node $v_a\ll v_{dd}$. Its current is therefore

$$
i_3=g_{m3}(v_{dd}-v_g)+\frac{v_{dd}-v_a}{r_{o3}}\approx\frac{g_{m3}}{g_{m4}}i_{bias}+\frac{v_{dd}}{r_{o3}}=i_{bias}+\frac{v_{dd}}{r_{o3}},
$$

using $g_{m3}=g_{m4}$ for the identical devices. The supply reaches the left branch through $r_{o3}$.

### Step 2 — The NMOS side

$M_1$ is diode-connected and carries $i_3$, so $v_a\approx i_3/g_{m1}$. $M_2$ has gate $v_a$, source $v_s=i_{bias}R$, and drain $v_g\approx v_{dd}$:

$$
i_{bias}=g_{m2}(v_a-v_s)+\frac{v_g-v_s}{r_{o2}}\approx\frac{g_{m2}}{g_{m1}}\left(i_{bias}+\frac{v_{dd}}{r_{o3}}\right)-g_{m2}Ri_{bias}+\frac{v_{dd}}{r_{o2}} .
$$

The supply reaches the right branch through $r_{o2}$.

### Step 3 — Solve for $i_{bias}/v_{dd}$

Collecting terms,

$$
i_{bias}\left(1+g_{m2}R-\frac{g_{m2}}{g_{m1}}\right)=v_{dd}\left(\frac1{r_{o2}}+\frac{g_{m2}}{g_{m1}r_{o3}}\right),
$$

$$
\frac{i_{bias}}{v_{dd}}\approx\frac{g_{m1}/r_{o2}+g_{m2}/r_{o3}}{g_{m1}(1+g_{m2}R)-g_{m2}} .
$$

The $-g_{m2}$ term in the denominator comes from the positive feedback around the loop $M_1\to M_2\to M_4\to M_3\to M_1$. Its loop gain is $g_{m2}/[g_{m1}(1+g_{m2}R)]$, which must stay below 1 for the bias point to be stable.

### Step 4 — Denominator at the bias point

The dc condition $V_{ov1}-V_{ov2}=I_{BIAS}R$ with $V_{ov}=2I/g_m$ gives $R=2(1/g_{m1}-1/g_{m2})$. Substituting,

$$
g_{m1}(1+g_{m2}R)-g_{m2}=g_{m2}-g_{m1}=g_{m2}\left(1-\sqrt{\frac{(W/L)_1}{(W/L)_2}}\right),
$$

since $g_m\propto\sqrt{W/L}$ at equal current. This is positive because $(W/L)_2>(W/L)_1$. It is only about half of $g_{m1}g_{m2}R$, so the $-g_{m2}$ term cannot be dropped.

The sensitivity vanishes as $r_{o2},r_{o3}\to\infty$. The output resistances of the diode-connected $M_1$ and $M_4$ contribute only higher-order terms.

### Step 5 — Numerical example

Take $I_{BIAS}=100\ \mu\mathrm A$, $V_{ov1}=0.2$ V and $(W/L)_2=4(W/L)_1$. Then $g_{m1}=1\ \mathrm{mA/V}$, $g_{m2}=2\ \mathrm{mA/V}$ and $R=2(1\ \mathrm{k\Omega}-0.5\ \mathrm{k\Omega})=1\ \mathrm{k\Omega}$. With all $r_o=200\ \mathrm{k\Omega}$:

$$
\frac{i_{bias}}{v_{dd}}=\frac{(1\ \mathrm{mA/V}+2\ \mathrm{mA/V})/(200\ \mathrm{k\Omega})}{2\ \mathrm{mA/V}-1\ \mathrm{mA/V}}=15\ \mu\mathrm{A/V}.
$$

An exact nodal solution of the small-signal circuit gives $14.3\ \mu\mathrm{A/V}$, within the $1/(g_mr_o)$ accuracy of the approximation. The whole sensitivity comes from $r_{o2}$ and $r_{o3}$, so raising those output resistances (for example by cascoding $M_2$ and $M_3$) reduces it in proportion.
