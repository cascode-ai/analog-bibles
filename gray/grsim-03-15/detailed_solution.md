# Detailed solution - grsim-03-15

Apply a test voltage $v_x$ at the drain of $M_2$ with $v_i=0$ and follow the test current $i_x$ through $M_2$ into $r_{o1}$. The feedback amplifier $M_3$ senses the source of $M_2$ and drives its gate in the opposite direction, multiplying the usual cascode boost by $(1+g_{m3}r_{o3})$. Compute $g_m$ and $r_o$ from the process data, evaluate $R_o$, and check it with an ngspice `.tf` analysis.

### Step 1 — Small-signal parameters

The effective length and channel-length-modulation parameter are

$$
L_{\mathrm{eff}}=0.4-2(0.09)-0.1=0.12\ \mu\mathrm m,\qquad
\lambda=\frac{dX_d/dV_{DS}}{L_{\mathrm{eff}}}=\frac{0.02\ \mu\mathrm m/\mathrm V}{0.12\ \mu\mathrm m}=0.167\ \mathrm{V^{-1}}.
$$

All three transistors carry 100 μA with $W/L_{\mathrm{eff}}=83.3$:

$$
r_o=\frac1{\lambda I_D}=\frac1{(0.167\ \mathrm{V^{-1}})(100\ \mu\mathrm A)}=60\ \mathrm{k\Omega},\qquad
g_m=\sqrt{2k'_n\frac WLI_D}=\sqrt{2(194\ \mu\mathrm{A/V^2})(83.3)(100\ \mu\mathrm A)}=1.80\ \mathrm{mA/V},
$$

so $g_mr_o=108$.

### Step 2 — Output resistance with the active feedback

With $v_i=0$, $M_1$ is just $r_{o1}$, so the source of $M_2$ moves by $v_{s2}=i_xr_{o1}$. $M_3$ is a common-source amplifier whose input is $v_{s2}$ and whose load is the ideal current source $I$, so the gate of $M_2$ moves by $v_{g2}=-g_{m3}r_{o3}v_{s2}$:

$$
v_{gs2}=v_{g2}-v_{s2}=-(1+g_{m3}r_{o3})\,i_xr_{o1}.
$$

The current through $M_2$ is

$$
i_x=g_{m2}v_{gs2}+\frac{v_x-v_{s2}}{r_{o2}}
\;\Rightarrow\;
v_x=i_x\left[r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2}(1+g_{m3}r_{o3})\right],
$$

$$
R_o=r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2}(1+g_{m3}r_{o3})
=0.12\ \mathrm{M\Omega}+(1.80\ \mathrm{mA/V})(60\ \mathrm{k\Omega})^2(109)=7.1\times10^{8}\ \Omega .
$$

A plain cascode ($M_2$'s gate at a fixed bias) would give $r_{o1}+r_{o2}+g_{m2}r_{o1}r_{o2}=6.6$ MΩ. The active feedback multiplies this by about $1+g_{m3}r_{o3}\approx108$, to about 0.7 GΩ.

### Step 3 — SPICE setup

The resistor $R$ is replaced by an ideal dc source $V_{OUT}=2$ V at the output, so that `.tf` reports the resistance it sees, which is $R_o$. The input $V_I$ was found from a fine dc sweep so that $V_{OUT}$ supplies 100 μA; $M_3$ is biased by the ideal 100-μA source.

```spice
* grsim-03-15 active cascode output resistance
VDD  vdd 0 3
I1   vdd g2 100u
VOUT out 0 2
VI   vi  0 0.705243
M1 x   vi 0 0 nch W=10u L=0.12u
M2 out g2 x 0 nch W=10u L=0.12u
M3 g2  x  0 0 nch W=10u L=0.12u
.model nch nmos level=1 kp=194u vto=0.6 lambda=0.167
.control
op
print v(x) v(g2) @m1[id] @m2[id] @m3[id]
print @m1[gds] @m2[gds] @m3[gds] @m2[gm] @m3[gm]
tf v(x) VOUT
print all
.endc
.end
```

### Step 4 — SPICE results and comparison

At the operating point $V_X=0.700$ V, $V_{G2}=1.401$ V, and all three devices carry 100.0 μA in the active region. The input resistance seen by $V_{OUT}$ is

$$
R_{o,\mathrm{SPICE}}=1.43\times10^{9}\ \Omega .
$$

| Quantity | Hand | ngspice |
|---|---|---|
| $r_{o1}$, $r_{o2}$, $r_{o3}$ | 60 kΩ each | 66.9, 72.9, 73.9 kΩ |
| $g_{m2}$, $g_{m3}$ | 1.80 mA/V | 1.98, 2.00 mA/V |
| $1+g_{m3}r_{o3}$ | 109 | 149 |
| $R_o$ | 0.71 GΩ | 1.43 GΩ |

The level-1 model writes $I_D=\tfrac12k'(W/L)V_{ov}^2(1+\lambda V_{DS})$, so its $r_o=(1+\lambda V_{DS})/(\lambda I_D)$ exceeds $1/(\lambda I_D)$ by 12–23% at these $V_{DS}$ values, and its $g_m$ includes the same $(1+\lambda V_{DS})$ factor. Since $R_o\propto g_m^2r_o^3$, these modest differences double the result. Substituting SPICE's own $g_m$ and $r_o$ into the formula of Step 2 gives $1.44\times10^{9}\ \Omega$, matching the simulation. Both the hand estimate and the simulation show an output resistance of order 1 GΩ, about 100 times that of a plain cascode.
