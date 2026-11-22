# Detailed solution - A134

In the push–pull inverter both gates are driven by $v_{in}$, so M1 and M2 both act as transconductors on the output node and their transconductances add, while only their output conductances load it. The supplies $V_{DD}$ and $V_{SS}$ are ac ground and do not enter the small-signal result. With an ideal source at the input, the output node sets a single pole.

### Step 1 — Small-signal parameters

Both devices carry $I_D=200$ µA in saturation with $W/L=5$. With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(5)(200\ \mu\mathrm A)}=469.0\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(5)(200\ \mu\mathrm A)}=316.2\ \mu\mathrm S,
$$

$$
g_{ds1}+g_{ds2}=(0.04+0.05\ \mathrm{V^{-1}})(200\ \mu\mathrm A)=18\ \mu\mathrm S .
$$

### Step 2 — Gain and output resistance

M1 (source at $V_{SS}$) draws $g_{m1}v_{in}$ from the output; M2 (source at $V_{DD}$) has $v_{sg2}=-v_{in}$ and so also draws $g_{m2}v_{in}$. KCL at the output:

$$
(g_{m1}+g_{m2})v_{in}+(g_{ds1}+g_{ds2})v_{out}=0,
$$

$$
A_v=-\frac{g_{m1}+g_{m2}}{g_{ds1}+g_{ds2}}=-\frac{785.2\ \mu\mathrm S}{18\ \mu\mathrm S}=-43.6\ \mathrm{V/V},
\qquad
R_{out}=\frac1{g_{ds1}+g_{ds2}}=55.6\ \mathrm{k\Omega}.
$$

For $R_{out}$ the input is set to zero, which turns off both controlled sources and leaves only $r_{ds1}\|r_{ds2}$.

### Step 3 — −3 dB frequency

The input is ideally driven, so $C_{gd1}$ and $C_{gd2}$ connect the output to an ac-fixed node, as do $C_{bd1}$, $C_{bd2}$ and $C_L$:

$$
C_{out}=C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}+C_L=5+5+30+30\ \mathrm{fF}+10\ \mathrm{pF}=10.07\ \mathrm{pF}.
$$

KCL at the output gives

$$
\frac{v_{out}}{v_{in}}=-\frac{(g_{m1}+g_{m2})-s(C_{gd1}+C_{gd2})}{g_{ds1}+g_{ds2}+sC_{out}},
\qquad
f_{-3\,\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{2\pi C_{out}}=\frac{18\ \mu\mathrm S}{2\pi(10.07\ \mathrm{pF})}=284\ \mathrm{kHz}.
$$

The 10 pF load dominates; with $C_L$ alone the result would be 286.5 kHz. The right-half-plane zero at $(g_{m1}+g_{m2})/[2\pi(C_{gd1}+C_{gd2})]\approx12.5$ GHz is negligible.
