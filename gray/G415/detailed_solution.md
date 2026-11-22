# Detailed solution - G415

Use the CM half circuit with $v_{ic}=0$. The CMC signal enters at the gate of $M_5$; half of $M_5$ converts it into a current that flows up through $M_1$ (acting as a common-gate stage), into diode $M_3$, and is copied by $M_8$ into the output node. The gain is that current per volt times the output-node resistance.

### Step 1 — Small-signal parameters

$M_5$ carries 200 μA, so in the CM half circuit each half carries 100 μA:

$$
g_{m5h}=\frac{g_{m5}}2=\frac12\cdot\frac{2(200\ \mu\mathrm A)}{0.2\ \mathrm V}=1\ \mathrm{mA/V},\qquad
r_{o5h}=2\cdot\frac{10\ \mathrm V}{200\ \mu\mathrm A}=100\ \mathrm{k\Omega}.
$$

All other devices carry 100 μA: $g_{m1}=g_{m3}=1$ mA/V, $r_{o1}=r_{o9}=100$ kΩ, $r_{o3}=r_{o8}=200$ kΩ.

### Step 2 — Current path from $v_{cmc}$ to the output

With $v_{ic}=0$ the gate of $M_1$ is at ac ground, so $M_1$ is a common-gate device whose source presents a conductance of about $g_{m1}$. The current $g_{m5h}v_{cmc}$ pulled from the source node splits between $M_1$ and $r_{o5h}$; the fraction through $M_1$ is

$$
\frac{r_{o5h}}{r_{o5h}+1/g_{m1}}=\frac{100\ \mathrm{k\Omega}}{101\ \mathrm{k\Omega}}=0.99.
$$

This current is drawn from diode-connected $M_3$, and $M_8$ (same size, 1:1 mirror) copies it. More current in $M_1$ means more current in $M_3$ and therefore more current pushed by $M_8$ into the $V_{o2}$ node; the same happens on the other side through $M_2$, $M_4$ and $M_6$.

### Step 3 — Output-node resistance and gain

The output node is the junction of the drains of $M_8$ and $M_9$, with nothing else connected, so its resistance is

$$
R=r_{o8}\parallel r_{o9}=200\ \mathrm{k\Omega}\parallel100\ \mathrm{k\Omega}=66.7\ \mathrm{k\Omega}.
$$

The extra mirrored current flows into this resistance and raises the output, so the gain is positive:

$$
a_{cmc}=\frac{v_{oc}}{v_{cmc}}\approx+g_{m5h}R=+(1\ \mathrm{mA/V})(66.7\ \mathrm{k\Omega})=+66.7.
$$

Including the 0.99 split of Step 2 and the mirror ratio $g_{m8}/(g_{m3}+1/r_{o3})=0.995$ gives $a_{cmc}\approx+65.7$, i.e. about $+66$.
