# Detailed solution - A218

Replace both transistors by their small-signal models, lump the capacitances into one between input and output ($C_1$) and one from output to ground ($C_2$), and write a single node equation at the output. The diode-connected load M2 contributes its full $g_{m2}$.

### Step 1 — Small-signal parameters

Both devices carry $I_D=100\ \mu\mathrm A$ with $W/L=10$ and are saturated (M2 is diode-connected, M1 has its drain at $V_{DD}$):

$$
g_{m1}=g_{m2}=\sqrt{2K'_N\frac WL I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=469.0\ \mu\mathrm S,
$$

$$
g_{mbs1}=\frac{\gamma\,g_{m1}}{2\sqrt{2|\phi_F|+V_{SB1}}}=\frac{(0.4\ \mathrm{V^{1/2}})(469.0\ \mu\mathrm S)}{2\sqrt{5.7\ \mathrm V}}=39.3\ \mu\mathrm S,
$$

$$
g_{ds1}=g_{ds2}=\lambda I_D=4\ \mu\mathrm S .
$$

M2 has its source at $V_{SS}$, which is also its bulk, so it has no body effect. A diode-connected device has $v_{gs2}=v_{out}$, so it behaves as a conductance $g_{m2}+g_{ds2}$ to ac ground.

### Step 2 — Capacitances

$C_{gs1}$ connects the input to the output; everything else connects the output to ac ground:

$$
C_1=C_{gs1}=5\ \mathrm{fF},\qquad
C_2=C_{bs1}+C_{gs2}+C_{bd2}+C_L=30+5+30+1000\ \mathrm{fF}=1.065\ \mathrm{pF}.
$$

### Step 3 — Transfer function

The small-signal circuit: $C_1$ from $v_{in}$ to $v_{out}$; at the output, the controlled source $g_{m1}(v_{in}-v_{out})$ flowing in, the body source $g_{mbs1}v_{bs1}=-g_{mbs1}v_{out}$, and $1/g_{ds1}$, $1/g_{m2}$, $1/g_{ds2}$ and $C_2$ to ground.

<!-- diagram: diagram-01.cir -->

KCL at the output:

$$
(g_{m1}+sC_1)(v_{in}-v_{out})=(g_{mbs1}+g_{ds1}+g_{m2}+g_{ds2}+sC_2)\,v_{out},
$$

$$
\frac{v_{out}}{v_{in}}=\frac{g_{m1}+sC_1}{g_{m1}+g_{mbs1}+g_{m2}+g_{ds1}+g_{ds2}+s(C_1+C_2)} .
$$

### Step 4 — Zero and pole

The numerator gives a left-half-plane zero, because $C_{gs1}$ feeds the input forward in phase with $g_{m1}$:

$$
z=-\frac{g_{m1}}{C_1}=-\frac{469.0\ \mu\mathrm S}{5\ \mathrm{fF}}=-9.38\times10^{10}\ \mathrm{rad/s}\quad(-14.9\ \mathrm{GHz}).
$$

The denominator gives the single pole, with the total conductance $469.0+39.3+469.0+4+4=985.4\ \mu\mathrm S$:

$$
p=-\frac{g_{m1}+g_{mbs1}+g_{m2}+g_{ds1}+g_{ds2}}{C_1+C_2}=-\frac{985.4\ \mu\mathrm S}{1.07\ \mathrm{pF}}=-9.21\times10^{8}\ \mathrm{rad/s}\quad(-146.6\ \mathrm{MHz}).
$$

The diode load's $g_{m2}$ roughly doubles the output conductance, and hence the pole frequency, compared with a current-sink load, at the cost of a dc gain of only about $g_{m1}/985.4\ \mu\mathrm S\approx0.48$.

The value $V_{SB1}=5$ V is used as stated. In the circuit as drawn, M1's source sits at $V_{SS}+V_{GS2}$, with $V_{GS2}=V_T+\sqrt{2I_D/\beta}=1.13$ V; using $V_{SB1}=1.13$ V gives $g_{mbs1}=69.4\ \mu\mathrm S$ and $p\approx-9.49\times10^{8}$ rad/s ($-151$ MHz). The zero does not change.
