# Detailed solution - A299

A folded-cascode op amp has one high-impedance node, the output, which gives the dominant pole; every other node is a low-impedance node whose pole is approximately the conductance looking into it (usually a $1/g_m$) divided by the capacitance on it. For the differential signal the common-source node of M1/M2 is taken as ac ground. Count the capacitance at each node as $C_{gs}$ for every gate–source capacitance attached to it (gate or source side, other terminal at ac ground) and $C_{bd}$ for every drain junction.

### Step 1 — Dominant pole at the output

Looking up from the output is the p-channel cascode M7, whose source sees $r_{ds2}\parallel r_{ds5}$; looking down is the n-channel cascode M9 over M11:

$$
R_{out}\approx(g_{m9}r_{ds9}r_{ds11})\parallel\left[g_{m7}r_{ds7}(r_{ds2}\parallel r_{ds5})\right]
=(400\ \mathrm{M\Omega})\parallel\left[(50\ \mu\mathrm S)(1\ \mathrm{M\Omega})(0.667\ \mathrm{M\Omega})\right]=400\parallel33.3=30.8\ \mathrm{M\Omega},
$$
$$
p_{out}=-\frac1{R_{out}C_L}=-\frac1{(30.8\ \mathrm{M\Omega})(10\ \mathrm{pF})}=-3.25\times10^3\ \mathrm{rad/s}\ (517\ \mathrm{Hz}).
$$

### Step 2 — Folding nodes A and B

Node A joins the drains of M1 and M4 and the source of the cascode M6; the resistance into M6's source is about $1/g_{m6}$, and the capacitance is $C_{gs6}$ plus two drain junctions:

$$
p_A\approx-\frac{g_{m6}}{C_{gs}+2C_{bd}}=-\frac{50\ \mu\mathrm S}{120\ \mathrm{fF}}=-4.17\times10^8\ \mathrm{rad/s},\qquad p_B\approx-\frac{g_{m7}}{C_{gs}+2C_{bd}}=-4.17\times10^8\ \mathrm{rad/s}.
$$

### Step 3 — Mirror nodes

| Node | Resistance | Capacitance | Pole (rad/s) |
|---|---|---|---|
| M6/M8 drains, M10/M11 gates | $1/g_{m10}$ | $2C_{gs}+2C_{bd}=220$ fF | $-g_{m10}/(220\ \mathrm{fF})=-4.55\times10^8$ |
| M8 source (M10 drain) | $1/g_{m8}$ | $C_{gs}+C_{bd}=110$ fF | $-g_{m8}/(110\ \mathrm{fF})=-9.09\times10^8$ |
| M9 source (M11 drain) | $1/g_{m9}$ | $C_{gs}+C_{bd}=110$ fF | $-g_{m9}/(110\ \mathrm{fF})=-9.09\times10^8$ |

At dc the M8-source node looks much stiffer, about $1/(g_{m8}r_{ds8}g_{m10})=50\ \Omega$, because of local feedback through the M10 gate. That resistance must not be used for the pole: the feedback needs the M6/M8 drain node to swing, and that node's own 220 fF removes the loop gain above about $4.5\times10^8$ rad/s. The two nodes are strongly coupled; solving them together gives a complex pair near the roots of $C_6C_8s^2+g_{m8}C_6s+g_{m8}g_{m10}=0$, magnitude $\sqrt{g_{m8}g_{m10}/(C_6C_8)}\approx6.4\times10^8$ rad/s, in place of the separate estimates $-4.55\times10^8$ and $-9.09\times10^8$ rad/s. There is no pole of order $10^{11}$ rad/s.

### Step 4 — Full nodal check and summary

A numerical solution of the six-node small-signal model ($C_{gd}$ neglected, tail node at ac ground) gives

$$
-3.10\times10^3,\quad -4.33\times10^8,\quad -4.38\times10^8,\quad (-4.65\pm j4.51)\times10^8,\quad -9.18\times10^8\ \mathrm{rad/s},
$$

in close agreement with the estimates (the dominant pole is $-3.10\times10^3$ rad/s when the $r_{ds}$ terms added to $g_mr_{ds}^2$ are kept). All nondominant poles lie near or above $4\times10^8$ rad/s (about 66 MHz), far above $GB\approx g_{m1}/C_L=10^7$ rad/s. Keeping the tail node (210 fF, about $2g_{mN}$) adds a seventh mode near $-9.7\times10^8$ rad/s, which, like the M9-source pole and one folding pole, is almost cancelled by a nearby zero in $v_{out}/v_{in}$.
