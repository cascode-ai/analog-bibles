# Detailed solution - A201

With all gates at ac ground, the input node sees two paths: M1's output resistance $r_{ds1}$ to ground, and the source of the common-gate M2, whose drain is loaded by M3's $r_{ds3}$ when the output is open. Find the resistance looking into M2's source, then combine it in parallel with $r_{ds1}$.

### Step 1 — Resistance looking into the source of M2

Drive M2's source with a test current $i$ (gate at ac ground). With the output open, the current has no path at the drain except $r_{ds3}$, so $v_{out}=ir_{ds3}$. M2's drain-to-source current must equal $-i$:

$$
-i=g_{m2}(0-v_{in})+\frac{v_{out}-v_{in}}{r_{ds2}} .
$$

Substituting $v_{out}$ and multiplying by $r_{ds2}$ gives $v_{in}(1+g_{m2}r_{ds2})=i(r_{ds2}+r_{ds3})$:

$$
R_{s2}=\frac{r_{ds2}+r_{ds3}}{1+g_{m2}r_{ds2}} .
$$

### Step 2 — Input resistance

M1 (gate at ac ground, source grounded) adds $r_{ds1}$ from the input node to ground:

$$
R_{in}=r_{ds1}\parallel\frac{r_{ds2}+r_{ds3}}{1+g_{m2}r_{ds2}}
=\frac{r_{ds1}(r_{ds2}+r_{ds3})}{r_{ds1}+r_{ds2}+r_{ds3}+g_{m2}r_{ds1}r_{ds2}} .
$$

### Step 3 — Size of the result

Because $r_{ds3}$ is comparable to $r_{ds2}$, the source resistance is about $2/g_{m2}$, far below $r_{ds1}$, so $R_{in}\approx2/g_{m2}$. The open output roughly doubles the input resistance: with the output shorted, $R_D=0$ and $R_{in}=r_{ds1}\parallel[r_{ds2}/(1+g_{m2}r_{ds2})]\approx1/g_{m2}$.
