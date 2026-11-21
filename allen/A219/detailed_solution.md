# Detailed solution - A219

Replace both transistors by their small-signal models, lump the capacitances into one between input and output ($C_1$) and one from output to ground ($C_2$), and write a single node equation at the output. Because M2's gate is at the fixed voltage $V_{GG2}$, M2 contributes only its output conductance.

### Step 1 — Small-signal parameters

Both devices carry $I_D=100\ \mu\mathrm A$ with $W/L=10$ and are saturated:

$$
g_{m1}=\sqrt{2K'_N\frac WL I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=469.0\ \mu\mathrm S,
$$

$$
g_{mbs1}=\frac{\gamma\,g_{m1}}{2\sqrt{2|\phi_F|+V_{SB1}}}=\frac{(0.4\ \mathrm{V^{1/2}})(469.0\ \mu\mathrm S)}{2\sqrt{5.7\ \mathrm V}}=39.3\ \mu\mathrm S,
$$

$$
g_{ds1}=g_{ds2}=\lambda I_D=4\ \mu\mathrm S .
$$

M2 has $v_{gs2}=0$ (gate at $V_{GG2}$, source at $V_{SS}$, both ac ground), so its $g_{m2}$ source carries no signal current.

### Step 2 — Capacitances

$C_{gs1}$ connects the input to the output; the others connect the output to ac ground ($C_{gd2}$ goes to M2's gate, which is ac ground):

$$
C_1=C_{gs1}=5\ \mathrm{fF},\qquad
C_2=C_{bs1}+C_{gd2}+C_{bd2}+C_L=30+5+30+1000\ \mathrm{fF}=1.065\ \mathrm{pF}.
$$

### Step 3 — Transfer function

The small-signal circuit: $C_1$ from $v_{in}$ to $v_{out}$; at the output, the controlled source $g_{m1}(v_{in}-v_{out})$ flowing in, the body source $-g_{mbs1}v_{out}$, and $1/g_{ds1}$, $1/g_{ds2}$ and $C_2$ to ground.

<!-- diagram: diagram-01.cir -->

KCL at the output:

$$
(g_{m1}+sC_1)(v_{in}-v_{out})=(g_{mbs1}+g_{ds1}+g_{ds2}+sC_2)\,v_{out},
$$

$$
\frac{v_{out}}{v_{in}}=\frac{g_{m1}+sC_1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}+s(C_1+C_2)} .
$$

### Step 4 — Zero and pole

The numerator gives a left-half-plane zero:

$$
z=-\frac{g_{m1}}{C_1}=-\frac{469.0\ \mu\mathrm S}{5\ \mathrm{fF}}=-9.38\times10^{10}\ \mathrm{rad/s}\quad(-14.9\ \mathrm{GHz}).
$$

The denominator gives the single pole, with total conductance $469.0+39.3+4+4=516.3\ \mu\mathrm S$:

$$
p=-\frac{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}{C_1+C_2}=-\frac{516.3\ \mu\mathrm S}{1.07\ \mathrm{pF}}=-4.83\times10^{8}\ \mathrm{rad/s}\quad(-76.8\ \mathrm{MHz}).
$$

The pole lies at the output node, where the large $C_L$ meets the low resistance $\approx1/(g_{m1}+g_{mbs1})$. It is about half the frequency of the diode-loaded follower, whose extra $g_{m2}$ nearly doubles the output conductance, but here the dc gain is $469.0/516.3=0.91$ instead of about 0.48. Without $g_{mbs1}$ the pole would be $-71.0$ MHz.
