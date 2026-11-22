# Detailed solution - G254

The 1-kΩ source resistance $R_S$ appears in shunt with the input node, so it diverts most of the fed-back current and reduces the loop gain. Repeat the two-port shunt–shunt analysis with $R_S$ included in the basic amplifier's input; the output resistance of the loaded amplifier is unchanged, so only $1+T$ changes.

### Step 1 — Device parameters and stage gains

From the square law and $\lambda$: $g_m=\sqrt{2k'(W/L)I_D}=3.464$ mA/V and $r_o=1/(\lambda I_D)=50\ \mathrm{k\Omega}$. With the feedback resistor $R_F$ loading the output (from $y_{22f}=1/R_F$):

| Stage | Drain load | Gain |
|---|---|---|
| $M_1$, $M_2$ | $5\ \mathrm{k\Omega}\parallel50\ \mathrm{k\Omega}=4545\ \Omega$ | $-g_m(4545\ \Omega)=-15.75$ |
| $M_3$ | $5\ \mathrm{k\Omega}\parallel50\ \mathrm{k\Omega}\parallel10\ \mathrm{k\Omega}=3125\ \Omega$ | $-g_m(3125\ \Omega)=-10.83$ |

### Step 2 — Loop gain with the source resistance

At the input, the loading term $y_{11f}$ places $R_F$ in parallel with $R_S$, so a current $i$ into the input node develops

$$
v_{g1}=i\,(R_S\parallel R_F)=i\,(1\ \mathrm{k\Omega}\parallel10\ \mathrm{k\Omega})=(909\ \Omega)\,i .
$$

$$
a=(909\ \Omega)(-15.75)^2(-10.83)=-2.44\ \mathrm{M\Omega},\qquad
T=af=(-2.44\ \mathrm{M\Omega})\left(-\frac1{10\ \mathrm{k\Omega}}\right)=244 .
$$

With an ideal current-source drive the input resistance was $R_F=10\ \mathrm{k\Omega}$ and $T=2684$; the 1-kΩ source resistance cuts $T$ by a factor of 11.

### Step 3 — Output resistance

The loaded basic amplifier's output resistance is unchanged, $z_{oa}=5\ \mathrm{k\Omega}\parallel r_o\parallel R_F=3125\ \Omega$, and shunt sampling divides it by $1+T$:

$$
Z_{out}=\frac{3125\ \Omega}{1+244}=12.8\ \Omega .
$$

The output resistance rises from 1.16 Ω (ideal current-source drive) to 12.8 Ω because the loop gain is about eleven times smaller.

As a check with the return ratio of $M_1$'s controlled source: breaking the loop at $g_{m1}$, the returned gate voltage gives $\mathcal R=251$, and $R_{out}(g_{m1}{=}0)=4545\ \Omega\parallel(R_F+R_S)=3216\ \Omega$; Blackman's formula (the ratio is $1/(1+\mathcal R)$ since shorting the output kills the return) gives $3216/252=12.8\ \Omega$, matching a direct nodal solution.
