# Detailed solution - A119

With its gate held at the dc voltage $V_{GG2}$, M2 is a current source: in the small-signal model it contributes only its output conductance $g_{ds2}$, not $g_{m2}$. The output node is therefore loaded only by $g_{ds1}+g_{ds2}$, which gives a high gain and a high output resistance. With an ideal voltage source at the input, the output is the only node with a time constant, so a single pole sets the bandwidth.

### Step 1 — Small-signal parameters

Both transistors are saturated at $I_D=50$ µA. With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(50\ \mu\mathrm A)}=148.3\ \mu\mathrm S,
$$

$$
g_{ds1}=(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=2\ \mu\mathrm S,\qquad
g_{ds2}=(0.05\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=2.5\ \mu\mathrm S .
$$

### Step 2 — Gain and output resistance

$v_{sg2}=0$ because both the gate ($V_{GG2}$) and the source ($V_{DD}$) of M2 are at ac ground, so its controlled source is inactive. KCL at the output:

$$
g_{m1}v_{in}+(g_{ds1}+g_{ds2})v_{out}=0,
$$

$$
A_v=-\frac{g_{m1}}{g_{ds1}+g_{ds2}}=-\frac{148.3\ \mu\mathrm S}{4.5\ \mu\mathrm S}=-33.0\ \mathrm{V/V},\qquad
R_{out}=\frac1{g_{ds1}+g_{ds2}}=\frac1{4.5\ \mu\mathrm S}=222\ \mathrm{k\Omega}.
$$

### Step 3 — Capacitances

$V_{DD}$, ground and the gate of M2 are ac ground; the input is held by the ideal source.

- $C_{gs2}$ connects two ac-ground nodes (gate and source of M2) and does not load the output.
- $C_{gd2}$: from M2's drain (the output) to its gate, i.e. output to ac ground.
- $C_{bd1}$, $C_{bd2}$, $C_L$: output to ac ground.
- $C_{gd1}$: between input and output.

The capacitance seen by the output pole is

$$
C_{total}=C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}+C_L=4+4+10+10+1000\ \mathrm{fF}=1028\ \mathrm{fF}.
$$

### Step 4 — Transfer function and −3 dB frequency

KCL at the output, with current through $C_{gd1}$ entering from the input:

$$
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}-sC_{gd1}}{g_{ds1}+g_{ds2}+sC_{total}} .
$$

$$
f_{-3\,\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{2\pi C_{total}}=\frac{4.5\ \mu\mathrm S}{2\pi(1.028\ \mathrm{pF})}=0.697\ \mathrm{MHz}
$$

($4.38\times10^6$ rad/s). The right-half-plane zero $g_{m1}/(2\pi C_{gd1})=5.9$ GHz is irrelevant here. Compared with the diode-loaded inverter at the same current, the gain is about 17 times higher and the bandwidth about 17 times lower: the gain–bandwidth product $g_{m1}/(2\pi C_{total})\approx23$ MHz is essentially the same.
