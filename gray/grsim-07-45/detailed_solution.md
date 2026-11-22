# Detailed solution - grsim-07-45

With $\lambda=0$, $\gamma=0$ and $C_{sb}=C_{db}=0$, the small-signal circuit contains only $C_{gs}$ and $C_{gd}$ and therefore has two poles. Zero-value time constants (both capacitors open, $RC$ products summed) estimate the dominant pole; short-circuit time constants (the other capacitor shorted, reciprocals summed) estimate the nondominant pole. An ngspice pole-zero analysis of the same linear circuit provides the exact values.

### Step 1 — Small-signal parameters

In saturation the square law gives $g_m=\sqrt{2k_n'(W/L)I_D}$, and the gate-source capacitance is the stated $\tfrac23WL_{\text{eff}}C_{ox}$:

$$
\begin{aligned}
g_m&=\sqrt{2(60\ \mu\mathrm{A/V^2})\left(\frac{100}{1.6}\right)(0.5\ \mathrm{mA})}=1.936\ \mathrm{mA/V},\\
C_{gs}&=\tfrac23(100\ \mu\mathrm{m})(1.6\ \mu\mathrm{m})(0.7\ \mathrm{fF/\mu m^2})=74.67\ \mathrm{fF}.
\end{aligned}
$$

The low-frequency gain is $-g_mR_L=-9.68$ (19.7 dB). In the small-signal circuit, $R_S$ drives the gate node, $C_{gs}$ goes from gate to ground (source at ac ground), $C_{gd}$ bridges gate and drain, and $g_mv_{gs}$ and $R_L$ load the drain.

### Step 2 — (a) Zero-value time constants: dominant pole

With both capacitors open and the input source shorted:

- **$C_{gs}$** sees $R_S$ (no current flows through $C_{gd}$, which is open): $R_SC_{gs}=(10\ \mathrm{k\Omega})(74.67\ \mathrm{fF})=0.7467$ ns.
- **$C_{gd}$** sees the gate-to-drain resistance. A test current $i_x$ from drain to gate gives $v_{gs}=i_xR_S$ and $v_d=-(i_x+g_mv_{gs})R_L$, so
$$
R_{gd0}=R_S+R_L+g_mR_LR_S=10\ \mathrm{k\Omega}+5\ \mathrm{k\Omega}+(1.936\ \mathrm{mA/V})(5\ \mathrm{k\Omega})(10\ \mathrm{k\Omega})=111.8\ \mathrm{k\Omega},
$$
and $R_{gd0}C_{gd}=(111.8\ \mathrm{k\Omega})(14\ \mathrm{fF})=1.566$ ns. This is the Miller-multiplied term.

$$
T_0=0.7467\ \mathrm{ns}+1.566\ \mathrm{ns}=2.312\ \mathrm{ns},\qquad |p_1|\approx\frac{1}{T_0}=4.32\times10^{8}\ \mathrm{rad/s}\ (68.8\ \mathrm{MHz}).
$$

### Step 3 — (a) Short-circuit time constants: nondominant pole

- **$C_{gs}$ with $C_{gd}$ shorted.** Gate and drain are joined, so the transistor becomes diode-connected and $g_mv_{gs}$ acts as a resistance $1/g_m$ from the gate node to ground, in parallel with $R_S$ and $R_L$:
$$
R_{gs,s}=R_S\parallel R_L\parallel\frac{1}{g_m}=10\ \mathrm{k\Omega}\parallel5\ \mathrm{k\Omega}\parallel516.4\ \Omega=447.1\ \Omega,
$$
so $R_{gs,s}C_{gs}=33.39$ ps.
- **$C_{gd}$ with $C_{gs}$ shorted.** $v_{gs}=0$, so the controlled source is off and $C_{gd}$ sees $R_L$ from drain to the grounded gate: $R_LC_{gd}=(5\ \mathrm{k\Omega})(14\ \mathrm{fF})=70$ ps.

$$
|p_2|\approx\frac{1}{33.39\ \mathrm{ps}}+\frac{1}{70\ \mathrm{ps}}=2.995\times10^{10}+1.429\times10^{10}=4.42\times10^{10}\ \mathrm{rad/s}\ (7.04\ \mathrm{GHz}).
$$

### Step 4 — (b) SPICE comparison

The deck is the linear small-signal circuit with the values of Step 1; the pole-zero analysis gives the exact roots and the ac sweep gives the −3-dB frequency.

```spice
* grsim-07-45 CS stage, linear small-signal model
Vs s 0 dc 0 ac 1
RS s g 10k
Cgs g 0 74.6667f
Cgd g o 14f
Gm o 0 g 0 1.93649m
RL o 0 5k
.ac dec 100 100k 1T
.pz s 0 o 0 vol pz
.end
```

| Quantity | Estimate | ngspice | Difference |
|---|---|---|---|
| Low-frequency gain | −9.68 (19.7 dB) | 19.72 dB | — |
| Dominant pole $p_1$ | 68.8 MHz | $4.368\times10^{8}$ rad/s = 69.5 MHz | −1.0 % |
| −3-dB frequency | — | 69.3 MHz | — |
| Nondominant pole $p_2$ | 7.04 GHz | $4.380\times10^{10}$ rad/s = 6.97 GHz | +1.0 % |
| Zero | $g_m/C_{gd}$ = 22.0 GHz (right half-plane) | $1.383\times10^{11}$ rad/s = 22.0 GHz | — |

Both estimates are within about 1 % of the exact poles. The poles are separated by a factor of about 100, so the error of each estimate, which is the other pole's share of the exact sums $T_0=1/|p_1|+1/|p_2|$ and $|p_1|+|p_2|$, is about 1 %. It is larger than in a stage with wider pole spacing, but still small.
