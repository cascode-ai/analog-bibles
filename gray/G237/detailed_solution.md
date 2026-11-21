# Detailed solution - G237

Use the differential-mode half circuit: input $v_i/2$ through the 10-kΩ resistor $R_S$, follower $M_1$, common-source device $M_2$ with its source at ac ground, and drain resistor $R_D=5\ \mathrm{k\Omega}$; its gain $(v_o/2)/(v_i/2)=-g_{m2}R_D=-9.68$ equals that of the full circuit. Find the bias-dependent capacitances, then the open-circuit resistance of each capacitor.

### Step 1 — Bias and small-signal parameters

With $\beta=k_n'(W/L)=(60\ \mu\mathrm{A/V^2})(62.5)=3.75$ mA/V², the square law gives $V_{ov}=\sqrt{2I_D/\beta}$ and $g_m=\sqrt{2\beta I_D}$:

| Device | $I_D$ | $V_{ov}$ (V) | Source (V) | $g_m$ (mA/V) |
|---|---|---|---|---|
| $M_1$ | 10 µA | 0.073 | −1.073 | 0.274 ($1/g_{m1}=3.65\ \mathrm{k\Omega}$) |
| $M_2$ | 0.5 mA | 0.516 | −2.59 | 1.936 |

The drain of $M_2$ is at $6-(0.5\ \mathrm{mA})(5\ \mathrm{k\Omega})=3.5$ V; both devices are saturated.

### Step 2 — Capacitances

$$
C_{gs}=\tfrac23(100)(1.6)(0.7\ \mathrm{fF})+(0.15\ \mathrm{fF/\mu m})(100\ \mu\mathrm m)=74.7+15=89.7\ \mathrm{fF},\qquad C_{gd}=15\ \mathrm{fF}.
$$

The zero-bias junction capacitance is $C_{sb0}=C_{db0}=(500)(0.4)+(100)(0.4)=240$ fF. Only two junctions matter in the half circuit: the source of $M_1$, reverse-biased by $V_{SB}=-1.073-(-6)=4.93$ V, and the drain of $M_2$, with $V_{DB}=3.5-(-6)=9.5$ V:

$$
C_{sb1}=\frac{240\ \mathrm{fF}}{\sqrt{1+4.93/0.6}}=79.1\ \mathrm{fF},\qquad
C_{db2}=\frac{240\ \mathrm{fF}}{\sqrt{1+9.5/0.6}}=58.5\ \mathrm{fF}.
$$

$C_{db1}$ (drain at +6 V) and $C_{sb2}$ (source at the ac-grounded common node) have both terminals at ac ground and drop out.

### Step 3 — Open-circuit resistances

With all capacitors open and $v_i=0$, the gate of $M_1$ draws no current, so it sits at ground through $R_S$. The source of $M_1$ is loaded only by the ideal 10-µA source and the gate of $M_2$, so the resistance at that node (node $s_1$) is $1/g_{m1}$.

- $C_{gs1}$ (gate to source of the unloaded follower): a test current $i_x$ leaving the source must be supplied by the channel, $g_{m1}v_{gs1}=i_x$, so $R=1/g_{m1}=3.65\ \mathrm{k\Omega}$.
- $C_{gd1}$ (gate to ac ground): $R=R_S=10\ \mathrm{k\Omega}$.
- $C_{sb1}+C_{gs2}$ (node $s_1$ to ac ground): $R=1/g_{m1}=3.65\ \mathrm{k\Omega}$, not the 10-kΩ gate resistor.
- $C_{gd2}$ (node $s_1$ to the drain of $M_2$): with $1/g_{m1}$ as the source resistance driving $M_2$,

$$
R_{gd2,0}=\frac1{g_{m1}}+R_D+g_{m2}R_D\frac1{g_{m1}}=3.65\ \mathrm{k\Omega}+5\ \mathrm{k\Omega}+(1.936\ \mathrm{mA/V})(5\ \mathrm{k\Omega})(3.65\ \mathrm{k\Omega})=44.0\ \mathrm{k\Omega}.
$$

- $C_{db2}$ (output to ac ground): $R=R_D=5\ \mathrm{k\Omega}$.

### Step 4 — Sum and −3-dB frequency

| Capacitor | $C$ (fF) | $R_{j0}$ (kΩ) | $R_{j0}C_j$ (ns) |
|---|---|---|---|
| $C_{gs1}$ | 89.7 | 3.65 | 0.33 |
| $C_{gd1}$ | 15 | 10 | 0.15 |
| $C_{sb1}+C_{gs2}$ | 168.8 | 3.65 | 0.62 |
| $C_{gd2}$ | 15 | 44.0 | 0.66 |
| $C_{db2}$ | 58.5 | 5 | 0.29 |
| Sum $T_0$ | | | 2.05 |

$$
f_{-3\mathrm{dB}}\approx\frac1{2\pi T_0}=\frac1{2\pi(2.05\ \mathrm{ns})}=77.8\ \mathrm{MHz}.
$$

No single term dominates; the follower's low output resistance keeps the Miller term of $C_{gd2}$ small. Because the time constants are comparable, and the follower with capacitive load gives complex poles, the zero-value estimate is pessimistic: an exact analysis of the half circuit gives about 123 MHz.
