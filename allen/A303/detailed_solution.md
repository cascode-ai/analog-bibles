# Detailed solution - A303

Find the resistance looking into each cascode source with the inspection formula $R_s=(r_{ds}+R_D)/(1+g_mr_{ds})$, where $R_D$ is the load on the cascode's drain. At node A this is immediate. At node B the drain load is the output node, which is high impedance only at low frequency; above the dominant pole $C_L$ shorts it, so the resistance that matters for the pole is different from the dc value. Node A is the source of M6 (drains of M1 and M3), node B the source of M7 (drains of M2 and M4); both have capacitance $C$, and the folding-node resistances $r_{ds1}\parallel r_{ds3}$, $r_{ds2}\parallel r_{ds4}$ are large.

### Step 1 — Node A (source of M6)

M6's drain drives the diode-connected cascode mirror M8/M10, whose input resistance is about $2/g_{mN}$. Hence

$$
R_A\approx\frac{r_{ds6}+2/g_{mN}}{1+g_{m6}r_{ds6}}\approx\frac1{g_{m6}}\qquad
p_A\approx-\frac{g_{m6}}{C}.
$$

The large folding-node resistance $r_{ds1}\parallel r_{ds3}$ in parallel with $R_A$ is negligible.

### Step 2 — Node B (source of M7) at dc

At dc, M7's drain sees the output resistance of the cascode M9/M11, $R_9=g_{m9}r_{ds9}r_{ds11}$:

$$
R_B(0)=(r_{ds2}\parallel r_{ds4})\parallel\frac{r_{ds7}+R_9}{1+g_{m7}r_{ds7}}\approx(r_{ds2}\parallel r_{ds4})\parallel\frac{R_9}{g_{m7}r_{ds7}},
$$

of the order of $r_{ds}$ (about 95 kΩ for the folded-cascode design with $g_{m7}=490\ \mu$S, $r_{ds7}=200$ kΩ, $R_9=102$ MΩ). A naive estimate would place a pole at $-1/(R_B(0)C)$, possibly below $GB$.

### Step 3 — Node B above the dominant pole

That high resistance exists only while the output node is high impedance. Above the dominant pole, $C_L$ makes M7's drain load small, $R_D\to1/(sC_L)$, and

$$
R_B\to\frac{r_{ds7}+1/(sC_L)}{1+g_{m7}r_{ds7}}\approx\frac1{g_{m7}} .
$$

Exactly, KCL at node B and at the output (with $G_B=g_{ds2}+g_{ds4}$, $k=g_{m7}+g_{ds7}$, $G_9=1/R_9$) gives the characteristic equation

$$
CC_Ls^2+\left[C(g_{ds7}+G_9)+C_L(G_B+k)\right]s+(G_B+k)G_9+G_Bg_{ds7}=0 .
$$

For a parasitic $C\ll g_{m7}r_{ds7}C_L$ (always true in practice) its roots split into the dominant output pole and

$$
p_B\approx-\frac{G_B+k}{C}\approx-\frac{g_{m7}}{C},
$$

so no pole appears near $1/(R_B(0)C)$. In the example design, $g_m/C=9.8\times10^8$ rad/s for $C=0.5$ pF, against a dominant pole near $-1.1\times10^4$ rad/s. The dc resistance at node B only sets how M2's signal current divides at dc, which is already contained in $R_{out}$.

### Step 4 — Influence on the frequency response

Both nodes give nondominant poles of about $-g_m/C$, equal here because $g_{m6}=g_{m7}$, and far above $GB$ when $C$ is a few hundred femtofarads. Each node carries half of the differential signal current in a parallel path to the output, so

$$
\frac{v_{out}}{v_{in}}\propto\frac12\left[\frac1{1+s/|p_A|}+\frac1{1+s/|p_B|}\right];
$$

for $p_A=p_B$ the pair acts as a single nondominant pole at $-g_m/C$ (a zero between the two poles nearly cancels one of them). The phase margin is reduced by about $\arctan(GB\cdot C/g_m)$, a few degrees for the example design ($\approx3.7^\circ$ with $GB=6.3\times10^7$ rad/s and $C=0.5$ pF), and remains small as long as $C\ll C_Lg_m/g_{m1}$.
