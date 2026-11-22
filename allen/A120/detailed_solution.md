# Detailed solution - A120

In the push–pull inverter both gates are driven by $v_{in}$, so both transistors act as transconductors: M1 pulls the output down while M2 pushes it up, and their transconductances add. The output is loaded only by the two output conductances. With an ideal source at the input, the output is the only node with a time constant, so a single pole sets the bandwidth.

### Step 1 — Small-signal parameters

Both transistors are saturated at $I_D=50$ µA. With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(50\ \mu\mathrm A)}=148.3\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(1)(50\ \mu\mathrm A)}=70.7\ \mu\mathrm S,
$$

$$
g_{ds1}=2\ \mu\mathrm S,\qquad g_{ds2}=2.5\ \mu\mathrm S .
$$

### Step 2 — Gain and output resistance

M1 draws $g_{m1}v_{in}$ from the output. For M2, $v_{sg2}=0-v_{in}=-v_{in}$ (its source is at ac ground), so it supplies $g_{m2}v_{sg2}=-g_{m2}v_{in}$ to the output, i.e. it also draws $g_{m2}v_{in}$. KCL at the output:

$$
(g_{m1}+g_{m2})v_{in}+(g_{ds1}+g_{ds2})v_{out}=0,
$$

$$
A_v=-\frac{g_{m1}+g_{m2}}{g_{ds1}+g_{ds2}}=-\frac{219.0\ \mu\mathrm S}{4.5\ \mu\mathrm S}=-48.7\ \mathrm{V/V},\qquad
R_{out}=\frac1{g_{ds1}+g_{ds2}}=222\ \mathrm{k\Omega}.
$$

Setting $v_{in}=0$ to find $R_{out}$ turns off both controlled sources, which is why the output resistance is the same as for the current-source load.

### Step 3 — Capacitances

$V_{DD}$ and ground are ac ground; the input is held by the ideal source.

- $C_{gd1}$ and $C_{gd2}$: both gates are at the input and both drains at the output, so both connect input to output, $C_M=C_{gd1}+C_{gd2}=8$ fF.
- $C_{gs2}$: from the input to $V_{DD}$; it is driven by the source and does not load the output.
- $C_{bd1}$, $C_{bd2}$, $C_L$: output to ac ground.

$$
C_{total}=C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}+C_L=4+4+10+10+1000\ \mathrm{fF}=1028\ \mathrm{fF}.
$$

### Step 4 — Transfer function and −3 dB frequency

KCL at the output, with the current in $C_M$ entering from the input:

$$
\frac{v_{out}}{v_{in}}=-\frac{(g_{m1}+g_{m2})-sC_M}{g_{ds1}+g_{ds2}+sC_{total}} .
$$

$$
f_{-3\,\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{2\pi C_{total}}=\frac{4.5\ \mu\mathrm S}{2\pi(1.028\ \mathrm{pF})}=0.697\ \mathrm{MHz}
$$

($4.38\times10^6$ rad/s). The right-half-plane zero is at $(g_{m1}+g_{m2})/(2\pi C_M)=4.4$ GHz, far above the pole. The bandwidth equals that of the current-source-load inverter because the output conductance and capacitance are the same, while the gain is higher by the factor $(g_{m1}+g_{m2})/g_{m1}=1.48$.
