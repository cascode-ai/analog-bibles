# Detailed solution - grsim-07-43

With only $C_p$ (drain of $M_1$) and $C_L$ (output), the circuit has exactly two poles. The zero-value method opens both capacitors and sums the $RC$ products, which estimates the low-frequency pole. The short-circuit method shorts all but one capacitor and sums the reciprocals of the time constants, which estimates the high-frequency pole. Both are then compared with the exact poles from an ngspice pole-zero analysis of the small-signal circuit.

### Step 1 — Small-signal parameters

Both transistors are saturated with $I_D=100\ \mu$A and $W/L=20/0.5=40$:

$$
g_m=\sqrt{2k'(W/L)I_D}=\sqrt{2(180\ \mu\mathrm{A/V^2})(40)(100\ \mu\mathrm{A})}=1.2\ \mathrm{mA/V},\qquad r_o=\frac{1}{\lambda I_D}=\frac{1}{(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm{A})}=250\ \mathrm{k\Omega}.
$$

The small-signal circuit has two nodes: $x$ (drain of $M_1$, source of $M_2$), loaded by $C_p$, and the output $o$, loaded by $C_L$. $M_1$ is $g_{m1}v_{gs1}$ in parallel with $r_{o1}$ from $x$ to ground. $M_2$, with its gate at ac ground, is $g_{m2}(0-v_x)$ from $o$ to $x$ in parallel with $r_{o2}$. The input source and $R_S$ only set $v_{gs1}$; with no gate capacitance they do not affect either pole.

### Step 2 — (a) Zero-value time constants

Set $v_i=0$, so $M_1$ reduces to $r_{o1}$, and open both capacitors.

- **$C_L$.** The resistance at the output is that of a cascode, $r_{o1}$ degenerating $M_2$:
$$
R_{L0}=r_{o2}+r_{o1}+g_{m2}r_{o2}r_{o1}=250\ \mathrm{k\Omega}+250\ \mathrm{k\Omega}+(1.2\ \mathrm{mA/V})(250\ \mathrm{k\Omega})^2=75.5\ \mathrm{M\Omega},
$$
so $R_{L0}C_L=(75.5\ \mathrm{M\Omega})(2\ \mathrm{pF})=151\ \mu$s.
- **$C_p$.** With $C_L$ open, the output node has no path to ground, so no current can flow through $M_2$, and the source of $M_2$ presents an open circuit. Node $x$ sees only $r_{o1}$: $r_{o1}C_p=(250\ \mathrm{k\Omega})(0.2\ \mathrm{pF})=50$ ns.

$$
T_0=151\ \mu\mathrm{s}+0.05\ \mu\mathrm{s}=151.05\ \mu\mathrm{s},\qquad |p_1|\approx\frac{1}{T_0}=6.62\times10^{3}\ \mathrm{rad/s}\ (1.054\ \mathrm{kHz}).
$$

At low frequency no current flows in $M_2$, so $v_x=-g_{m1}r_{o1}v_i$ and $v_o=(1+g_{m2}r_{o2})v_x$. The gain is $-g_{m1}r_{o1}(1+g_{m2}r_{o2})=-(1.2\ \mathrm{mA/V})(250\ \mathrm{k\Omega})(301)=-9.03\times10^{4}$ (99.1 dB), essentially $-g_{m1}R_{L0}$.

### Step 3 — (b) Short-circuit time constants

- **$C_p$ with $C_L$ shorted.** The output is at ac ground, so the resistance looking into the source of $M_2$ is $r_{o2}/(1+g_{m2}r_{o2})=250\ \mathrm{k\Omega}/301=830.6\ \Omega$. It is in parallel with $r_{o1}$:
$$
R_{ps}=r_{o1}\parallel\frac{r_{o2}}{1+g_{m2}r_{o2}}=250\ \mathrm{k\Omega}\parallel830.6\ \Omega=827.8\ \Omega,\qquad R_{ps}C_p=0.1656\ \mathrm{ns}.
$$
- **$C_L$ with $C_p$ shorted.** The source of $M_2$ is at ac ground, so $v_{gs2}=0$ and the output sees only $r_{o2}$: $r_{o2}C_L=(250\ \mathrm{k\Omega})(2\ \mathrm{pF})=0.5\ \mu$s.

$$
|p_2|\approx\frac{1}{0.1656\ \mathrm{ns}}+\frac{1}{0.5\ \mu\mathrm{s}}=6.040\times10^{9}+2\times10^{6}=6.04\times10^{9}\ \mathrm{rad/s}\ (962\ \mathrm{MHz}).
$$

The second term is negligible: the high-frequency pole is set by $C_p$ at the low-resistance source of the cascode device.

### Step 4 — (c) SPICE comparison

Because the problem fixes the small-signal parameters, the check uses the linear small-signal circuit directly (VCCS plus output resistance for each transistor). $R_S$ is given an arbitrary 1 kΩ, which does not affect the poles.

```spice
* grsim-07-43 cascode with CL, linear small-signal model
Vi in 0 dc 0 ac 1
RS in g1 1k
G1 x 0 g1 0 1.2m
ro1 x 0 250k
Cp x 0 0.2p
G2 o x 0 x 1.2m
ro2 o x 250k
CL o 0 2p
.ac dec 50 1 100G
.pz in 0 o 0 vol pz
.end
```

| Quantity | Estimate | ngspice |
|---|---|---|
| Low-frequency gain | 99.1 dB | 99.11 dB |
| $p_1$ | $-6.620\times10^{3}$ rad/s (zero-value) | $-6.620\times10^{3}$ rad/s |
| $-3$-dB frequency | 1.054 kHz | 1.051 kHz |
| $p_2$ | $-6.042\times10^{9}$ rad/s (short-circuit) | $-6.042\times10^{9}$ rad/s |

Both poles are real and agree with the estimates to better than 0.01 %. The agreement is this close because the poles are separated by a factor of about $10^6$: the zero-value sum $T_0=1/|p_1|+1/|p_2|$ is dominated by $1/|p_1|$, and the short-circuit sum $|p_1|+|p_2|$ is dominated by $|p_2|$, so each estimate errs only by the other pole's tiny share.
