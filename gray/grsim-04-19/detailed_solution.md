# Detailed solution - grsim-04-19

With the output shorted, a common-mode input produces an output current only through imbalance: the pair's two drain currents differ by the error $\epsilon_d$, and the mirror copies its input with error $\epsilon_m$. Compute the overall scale factor $i_2/v_{ic}$ first. Then evaluate each source of $\epsilon_d$ separately (finite mirror resistance, $g_m$ mismatch, $r_o$ mismatch) and add them, find $\epsilon_m$, and combine. The result is checked against an exact linear small-signal simulation.

### Step 1 — (a) The scale factor $i_2/v_{ic}$

The tail node $v_t$ carries both drain currents through $r_{tail}$, and $i_1=i_2(1-\epsilon_d)$:

$$
v_t=(i_1+i_2)\,r_{tail}=i_2(2-\epsilon_d)\,r_{tail}.
$$

$T_2$ has its drain at small-signal ground, so

$$
i_2=g_{m2}(v_{ic}-v_t)-\frac{v_t}{r_{o2}}=g_{m2}v_{ic}-i_2(2-\epsilon_d)r_{tail}\left(g_{m2}+\frac1{r_{o2}}\right),
$$

$$
\frac{i_2}{v_{ic}}=\frac{g_{m2}}{1+(2-\epsilon_d)\,r_{tail}\left(g_{m2}+1/r_{o2}\right)}.
$$

With $\epsilon_d\ll2$, $g_{m2}r_{o2}\gg1$ and $2g_{m2}r_{tail}\gg1$, the denominator is $\approx2g_{m2}r_{tail}$:

$$
\frac{i_2}{v_{ic}}\approx\frac1{2r_{tail}},\qquad G_m[cm]\approx-\frac{\epsilon_d+\epsilon_m}{2r_{tail}} .
$$

A common-mode input simply forces the tail current to change by $v_{ic}/r_{tail}$, split between the two sides.

### Step 2 — (b) $\epsilon_d$ from the mirror's finite resistance (perfect matching)

With matched devices, the diode $T_3$ presents $\approx1/g_{m(mir)}$ at $T_1$'s drain, while $T_2$'s drain is grounded. With $v_3=-i_1/g_{m(mir)}$,

$$
i_1=g_m(v_{ic}-v_t)+\frac{v_3-v_t}{r_o},\qquad i_2=g_m(v_{ic}-v_t)-\frac{v_t}{r_o}
\;\Rightarrow\;
i_1\left(1+\frac1{g_{m(mir)}r_o}\right)=i_2 ,
$$

$$
\epsilon_d=1-\frac{i_1}{i_2}=\frac{1}{1+g_{m(mir)}r_{o(dp)}} .
$$

With $g_{m3}=1.1$ mA/V and $r_{o(dp)}=1$ MΩ, $\epsilon_d=1/1101=9.1\times10^{-4}$ (about $10^{-3}$ with the average 1 mA/V).

### Step 3 — (c) $\epsilon_d$ from $g_{m1}\ne g_{m2}$ alone

With $1/g_{m3}=0$ both drains are at ground, so the only difference is in the transconductances:

$$
i_1-i_2=\Delta g_{m1-2}(v_{ic}-v_t).
$$

The average current satisfies $i_2\approx g_{m1-2}(v_{ic}-v_t)-v_t/r_o$, with $v_t\approx2i_2r_{tail}$, so $g_{m1-2}(v_{ic}-v_t)\approx i_2(1+2r_{tail}/r_{o(dp)})$. Hence

$$
\epsilon_d=-\frac{i_1-i_2}{i_2}=-\frac{\Delta g_{m1-2}}{g_{m1-2}}\left(1+\frac{2r_{tail}}{r_{o(dp)}}\right)=-(0.1)(1+1)=-0.20 .
$$

### Step 4 — (d) $\epsilon_d$ from $r_{o1}\ne r_{o2}$ alone

Again with both drains at ground, the transconductance terms are equal and only the $r_o$ currents differ:

$$
i_1-i_2=-v_t\left(\frac1{r_{o1}}-\frac1{r_{o2}}\right)=v_t\frac{r_{o1}-r_{o2}}{r_{o1}r_{o2}}\approx v_t\frac{\Delta r_{o(dp)}}{r_{o(dp)}^2},
$$

and with $v_t\approx2i_2r_{tail}$,

$$
\epsilon_d=-\frac{i_1-i_2}{i_2}=-\frac{2r_{tail}}{r_{o(dp)}}\cdot\frac{\Delta r_{o(dp)}}{r_{o(dp)}}=-(1.0)\frac{(0.95-1.05)\ \mathrm{M\Omega}}{1\ \mathrm{M\Omega}}=+0.10 .
$$

### Step 5 — (e) Total $\epsilon_d$

Because each mismatch is a small fraction of its average, interactions are second order and the three contributions add:

$$
\epsilon_d\approx\frac1{1+g_{m3}r_{o(dp)}}-\frac{\Delta g_{m1-2}}{g_{m1-2}}\left(1+\frac{2r_{tail}}{r_{o(dp)}}\right)-\frac{2r_{tail}}{r_{o(dp)}}\frac{\Delta r_{o(dp)}}{r_{o(dp)}},
$$

which reduces to the stated expression (first term $\approx1/(g_{m3}r_{o(dp)})$) when $g_{m3}r_{o(dp)}\gg1$. Numerically,

$$
\epsilon_d\approx0.0009-0.20+0.10=-0.099 .
$$

An exact small-signal solution gives $-0.104$.

### Step 6 — (f) Mirror error $\epsilon_m$

The diode node has $1/g_{m3}$ in parallel with $r_{o3}$, so the current $i_3$ develops

$$
v_3=i_3\left(\frac1{g_{m3}}\Big\|\,r_{o3}\right)=\frac{i_3r_{o3}}{1+g_{m3}r_{o3}},\qquad
g_{m4}v_3=i_3\,\frac{g_{m4}r_{o3}}{1+g_{m3}r_{o3}}=i_3(1-\epsilon_m).
$$

Therefore

$$
\epsilon_m=1-\frac{g_{m4}r_{o3}}{1+g_{m3}r_{o3}}=\frac{1}{1+g_{m3}r_{o3}}+\frac{(g_{m3}-g_{m4})r_{o3}}{1+g_{m3}r_{o3}}\simeq\frac1{g_{m3}r_{o3}}+\frac{\Delta g_{m3-4}}{g_{m3-4}} .
$$

Numerically the approximate form gives $0.0009+0.2=0.201$, and the exact form $201/1101=0.183$.

### Step 7 — (g) $G_m[cm]$ and CMRR

With $2r_{tail}=1$ MΩ and the approximate errors:

$$
G_m[cm]\simeq-\frac{\epsilon_d+\epsilon_m}{2r_{tail}}=-\frac{-0.099+0.201}{1\ \mathrm{M\Omega}}=-0.10\ \mu\mathrm{A/V},
\qquad
\mathrm{CMRR}=\left|\frac{G_m[dm]}{G_m[cm]}\right|=\frac{0.907\ \mathrm{mA/V}}{0.10\ \mu\mathrm{A/V}}=8.9\times10^{3}\ (79\ \mathrm{dB}).
$$

With the exact $\epsilon_m=0.183$: $G_m[cm]=-0.083\ \mu$A/V and CMRR $=1.1\times10^{4}$.

Without mismatch, $\epsilon_d\approx\epsilon_m\approx1/1001$, so

$$
G_m[cm]\approx-\frac{2/1001}{1\ \mathrm{M\Omega}}=-2.0\ \mathrm{nA/V},\qquad
\mathrm{CMRR}=\frac{1.0\ \mathrm{mA/V}}{2.0\ \mathrm{nA/V}}=5.0\times10^{5}\ (114\ \mathrm{dB}),
$$

equal to $2g_{m(dp)}r_{tail}\cdot g_{m(mir)}(r_{o(dp)}\parallel r_{o(mir)})$. The 10–20% mismatches raise $|G_m[cm]|$ by a factor of about 50 and cost about 35 dB of CMRR.

### Step 8 — SPICE check (linear small-signal model)

The same small-signal netlist as for the DM transconductance is driven with $v_{i1}=v_{i2}=1$ V; the current in the 0-V source shorting the output is $G_m[cm]$:

```spice
* grsim-04-19 small-signal model of the mirror-loaded pair (CM input)
V1  g1 0 1
V2  g2 0 1
G1  d1 t g1 t 1.05m
RO1 d1 t 0.95meg
G2  out t g2 t 0.95m
RO2 out t 1.05meg
G3  d1 0 d1 0 1.1m
RO3 d1 0 1meg
G4  out 0 d1 0 0.9m
RO4 out 0 1meg
RO5 t 0 0.5meg
VSH out 0 0
.control
op
print i(VSH) v(t) v(d1)
.endc
.end
```

| Quantity | Hand (approx. $\epsilon$'s) | ngspice |
|---|---|---|
| $i_2/v_{ic}$ | $\approx1/(2r_{tail})=1.0\ \mu$A/V | 0.949 μA/V |
| $\epsilon_d$ | −0.099 | −0.104 |
| $\epsilon_m$ | 0.201 (exact form 0.183) | 0.183 |
| $G_m[cm]$, with mismatch | −0.10 μA/V (−0.083 with exact $\epsilon_m$) | −0.092 μA/V |
| CMRR, with mismatch | $8.9\times10^{3}$ to $1.1\times10^{4}$ (79–81 dB) | $9.8\times10^{3}$ (79.8 dB) |
| $G_m[cm]$, no mismatch | −2.0 nA/V | −1.99 nA/V |
| CMRR, no mismatch | $5.0\times10^{5}$ (114 dB) | $5.0\times10^{5}$ (114 dB) |

The simulation confirms the hand estimate. The remaining difference comes from dropping the product term: exactly, $i_{out}=(1-\epsilon_m)i_1-i_2=-i_2(\epsilon_d+\epsilon_m-\epsilon_d\epsilon_m)$. With $\epsilon_d=-0.104$ and $\epsilon_m=0.183$, the term $\epsilon_d\epsilon_m=-0.019$ is not negligible, and including it with $i_2/v_{ic}=0.949\ \mu$A/V reproduces $-0.0924\ \mu$A/V exactly.
