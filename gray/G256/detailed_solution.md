# Detailed solution - G256

The 1-kΩ source resistance $R_S$ shunts the input node, diverting fed-back current and lowering the loop gain. Redo the two-port shunt–shunt analysis with $R_S$ included in the input loading; the loaded output resistance is unchanged, so the new output resistance follows from the new $1+T$.

### Step 1 — Device parameters and stage gains

$g_m=I_C/V_T=38.46$ mA/V, $r_\pi=\beta/g_m=5.2\ \mathrm{k\Omega}$, $r_o=V_A/I_C=50\ \mathrm{k\Omega}$. The stage gains are unchanged by $R_S$:

| Stage | Collector load | Gain |
|---|---|---|
| $Q_1$, $Q_2$ | $5\ \mathrm{k\Omega}\parallel r_o\parallel r_\pi=2425\ \Omega$ | −93.3 |
| $Q_3$ | $5\ \mathrm{k\Omega}\parallel r_o\parallel R_F=3125\ \Omega$ | −120.2 |

### Step 2 — Loop gain with the source resistance

At the input node, the current now divides among $R_S$, $R_F$ (from $y_{11f}$) and $r_{\pi1}$:

$$
R_S\parallel R_F\parallel r_\pi=1\ \mathrm{k\Omega}\parallel10\ \mathrm{k\Omega}\parallel5.2\ \mathrm{k\Omega}=774\ \Omega .
$$

$$
a=(774\ \Omega)(-93.3)^2(-120.2)=-8.09\times10^{8}\ \Omega,\qquad T=af=\frac{8.09\times10^{8}\ \Omega}{10\ \mathrm{k\Omega}}=8.09\times10^{4}.
$$

The loop gain falls from $3.58\times10^5$ (ideal current drive, input loading 3421 Ω) by the ratio $3421/774=4.4$.

### Step 3 — Output resistance

With the loaded output resistance $5\ \mathrm{k\Omega}\parallel r_o\parallel R_F=3125\ \Omega$ divided by $1+T$:

$$
Z_{out}=\frac{3125\ \Omega}{1+8.09\times10^{4}}=38.6\ \mathrm{m\Omega}.
$$

The output resistance rises from 8.7 mΩ to about 39 mΩ. The return ratio of $Q_1$'s controlled source gives the same result: with $g_{m1}=0$ the output sees $5\ \mathrm{k\Omega}\parallel r_o\parallel(R_F+R_S\parallel r_\pi)=3202\ \Omega$, the return ratio is $\mathcal R=82{,}940$, and since shorting the output removes the return, Blackman's formula gives $3202\ \Omega/(1+\mathcal R)=38.6$ mΩ, in agreement with a direct nodal solution.
