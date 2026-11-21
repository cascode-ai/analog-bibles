# Detailed solution - A192

With the output shorted, the only node that moves is the common gate node of M1 and M2 (the drain of the diode-connected M1). The input current develops a voltage there across $1/(g_{m1}+g_{ds1})$, and M2 converts it back to a current. The low-frequency gain and resistances follow from that, and the −3 dB frequency from the total capacitance on that single node.

### Step 1 — Small-signal parameters

Both devices carry 100 µA with $W/L=5$, so

$$
g_{m1}=g_{m2}=\sqrt{2(110\ \mu\mathrm{A/V^2})(5)(100\ \mu\mathrm A)}=332\ \mu\mathrm S,\qquad
g_{ds1}=g_{ds2}=(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=4\ \mu\mathrm S .
$$

### Step 2 — Low-frequency gain and input resistance

At the gate node, $i_{in}$ flows into the diode M1, whose conductance is $g_{m1}+g_{ds1}$ (the current source is ideal):

$$
R_{in}=\frac{1}{g_{m1}+g_{ds1}}=\frac{1}{336\ \mu\mathrm S}=2.98\ \mathrm{k\Omega}
$$

(3.02 kΩ if $g_{ds1}$ is neglected). The gate voltage $v_{gs}=i_{in}R_{in}$ drives M2, whose drain is held by the short, so $i_{out}=g_{m2}v_{gs}$:

$$
A_i(0)=\frac{i_{out}}{i_{in}}=\frac{g_{m2}}{g_{m1}+g_{ds1}}=\frac{332}{336}=0.988,
$$

exactly 1 if $g_{ds1}$ is neglected, as expected for a 1:1 mirror.

### Step 3 — Output resistance

Looking into the drain of M2 with $i_{in}=0$, the gate is at ac ground and the 100-µA source is ideal:

$$
R_{out}=r_{ds2}=\frac1{g_{ds2}}=250\ \mathrm{k\Omega}.
$$

### Step 4 — −3 dB frequency

Identify which capacitances load the gate node when the output is shorted:

- $C_{gs1}$ and $C_{gs2}$: gate node to ground, both count.
- $C_{bd1}$: drain of M1, which is the gate node, to ground, counts.
- $C_{gd1}$: gate to drain of M1, both ends on the same node, shorted out.
- $C_{gd2}$: gate node to M2's drain, which is at ac ground, counts.
- $C_{bd2}$: M2's drain to ground, shorted by $R_L=0$.

$$
C=C_{gs1}+C_{gs2}+C_{bd1}+C_{gd2}=20+20+10+5=55\ \mathrm{fF}.
$$

The single pole is

$$
\omega_{-3\,\mathrm{dB}}=\frac{g_{m1}+g_{ds1}}{C}=\frac{336\ \mu\mathrm S}{55\ \mathrm{fF}}=6.10\times10^9\ \mathrm{rad/s},\qquad
f_{-3\,\mathrm{dB}}=\frac{\omega_{-3\,\mathrm{dB}}}{2\pi}=971\ \mathrm{MHz}
$$

(960 MHz with $g_{m1}$ alone). $C_{gd2}$ also passes a feedforward current into the output, creating a zero at $g_{m2}/C_{gd2}$, i.e. at about 10.6 GHz, far above the pole, so $f_{-3\,\mathrm{dB}}\approx970$ MHz.
