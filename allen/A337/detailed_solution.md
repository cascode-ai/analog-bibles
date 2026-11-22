# Detailed solution - A337

For differential signals the common source of the input pair is an ac ground, so the amplifier splits into two half circuits, each a common-source input stage followed by a CMOS inverter. The differential gain is the product of the two stage gains; the only new element is the inverter, whose two devices are driven by the same gate voltage.

### Step 1 — Small-signal parameters

All devices are in saturation at $I_D=50\ \mu$A with $W/L=10$; with $g_m=\sqrt{2K'(W/L)I_D}$ and $r_{ds}=1/(\lambda I_D)$:

$$
g_{mN}=\sqrt{2(110\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=331.7\ \mu\mathrm S,\qquad
g_{mP}=\sqrt{2(50\ \mu\mathrm{A/V^2})(10)(50\ \mu\mathrm A)}=223.6\ \mu\mathrm S,
$$
$$
r_{dsN}\parallel r_{dsP}=500\ \mathrm{k\Omega}\parallel400\ \mathrm{k\Omega}=222.2\ \mathrm{k\Omega}.
$$

### Step 2 — First stage

The n-channel pair with p-channel current-source loads gives, with each drain loaded by $r_{dsN}\parallel r_{dsP}$,

$$
A_{v1}=g_{mN}(r_{dsN}\parallel r_{dsP})=(331.7\ \mu\mathrm S)(222.2\ \mathrm{k\Omega})=73.7 .
$$

### Step 3 — Output inverters

In each inverter the gates of the p- and n-channel devices are tied together, so a gate signal $v_g$ changes both drain currents in the same direction at the output node: the n-channel device sinks $g_{mN}v_g$ and the p-channel device sources $g_{mP}v_g$ less. The total output current is $-(g_{mN}+g_{mP})v_g$, flowing into $r_{dsN}\parallel r_{dsP}$:

$$
A_{v2}=(g_{mN}+g_{mP})(r_{dsN}\parallel r_{dsP})=(555.3\ \mu\mathrm S)(222.2\ \mathrm{k\Omega})=123.4 .
$$

### Step 4 — Overall differential gain

Each stage inverts once, so the overall gain is positive:

$$
A_{vd}=\frac{v_{od}}{v_{id}}=g_{mN}(r_{dsN}\parallel r_{dsP})\cdot(g_{mN}+g_{mP})(r_{dsN}\parallel r_{dsP})=(73.7)(123.4)=9.09\times10^3\ \mathrm{V/V}\ (79.2\ \mathrm{dB}).
$$

This is about 2.5 times the gain of the version whose second stage is a p-channel pair with current-sink loads ($3.66\times10^3$ V/V), because the push–pull inverter adds the transconductances of both devices while presenting the same output resistance.
