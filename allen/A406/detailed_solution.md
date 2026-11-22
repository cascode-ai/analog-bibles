# Detailed solution - A406

The preamplifier is a differential pair with diode-connected loads, so each output node sees a low resistance of about $1/g_{m3}$. Use the differential half circuit: the gain is $g_{m1}$ over the node conductance, and the single pole is that conductance over the total node capacitance. The floating load $C_L$ counts as $2C_L$ to ground in the half circuit.

### Step 1 — Bias and small-signal parameters

Each branch carries half the tail current, 25 µA. With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$:

| Parameter | Value |
|---|---|
| $g_{m1}=\sqrt{2(110)(40)(25)}\ \mu\mathrm S$ | 469 µS |
| $g_{m3}=\sqrt{2(50)(2)(25)}\ \mu\mathrm S$ | 70.7 µS |
| $g_{ds1}=0.04(25)\ \mu\mathrm S$ | 1.00 µS |
| $g_{ds3}=0.05(25)\ \mu\mathrm S$ | 1.25 µS |

### Step 2 — Differential gain

For a differential input the tail node is an ac ground and M1 sees $v_{in}/2$. Its drain current flows into the node formed by the diode M3 and the output conductances:

$$
G=g_{m3}+g_{ds1}+g_{ds3}=70.7+1.00+1.25=73.0\ \mu\mathrm S,\qquad
v_{o1}=-\frac{g_{m1}}G\cdot\frac{v_{in}}2,\quad v_{o2}=+\frac{g_{m1}}G\cdot\frac{v_{in}}2 .
$$

With $v_{out}=v_{o2}-v_{o1}$:

$$
\frac{v_{out}}{v_{in}}=\frac{g_{m1}}G=\frac{469\ \mu\mathrm S}{73.0\ \mu\mathrm S}=6.43 .
$$

Neglecting the output conductances, $g_{m1}/g_{m3}=\sqrt{(110\cdot40)/(50\cdot2)}=6.63$; the gain is set by a ratio of device parameters, so it is well controlled but low, as suits a preamplifier.

### Step 3 — Capacitance at each output node

$C_L$ sits between the two outputs, whose voltages move oppositely, so the voltage across it is twice the node voltage and it loads each node as $2C_L$ to ground. The device capacitances at node $v_{o1}$, with zero-bias junctions on a $W\times5\ \mu$m drain (area $5W$, perimeter $2W+10\ \mu$m):

| Component | Expression | Value |
|---|---|---|
| $2C_L$ | — | 2000 fF |
| $C_{bd1}$ | $(770\ \mu\mathrm{F/m^2})(200\ \mu\mathrm m^2)+(380\ \mathrm{pF/m})(90\ \mu\mathrm m)$ | 154 + 34.2 fF |
| $C_{gd1}$ | $C_{GDO}W_1=(220\ \mathrm{pF/m})(40\ \mu\mathrm m)$ | 8.8 fF |
| $C_{bd3}$ | $(560\ \mu\mathrm{F/m^2})(10\ \mu\mathrm m^2)+(350\ \mathrm{pF/m})(14\ \mu\mathrm m)$ | 5.6 + 4.9 fF |
| $C_{gs3}$ | $\tfrac23C_{ox}W_3L_3+C_{GSO}W_3$ | 3.7 fF |
| Total $C$ | | 2.21 pF |

$C_{gd1}$ goes to the input, which is driven by a low-impedance source, so it acts as a capacitance to ac ground; $C_{gd3}$ is shorted by the diode connection.

### Step 4 — Bandwidth

The half circuit has a single pole at the output node:

$$
f_{-3dB}=\frac{G}{2\pi C}=\frac{73.0\ \mu\mathrm S}{2\pi(2.21\ \mathrm{pF})}=5.25\ \mathrm{MHz}.
$$

With $G\approx g_{m3}$ the result is 5.09 MHz, and with the junction sidewalls also omitted ($C=2.17$ pF) it is 5.18 MHz, so $f_{-3dB}\approx5.1$–5.3 MHz. The load $C_L$ contributes over 90 % of the node capacitance; the drain junction of the wide input device is the largest parasitic.
