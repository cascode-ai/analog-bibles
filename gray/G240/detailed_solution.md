# Detailed solution - G240

With the capacitances attached to the external terminals, each transistor with its series source resistor behaves as an ideal voltage-controlled current source of reduced transconductance $G_m$. Find $G_m$, the node resistances of the mirror, then the open-circuit resistance of every capacitor, and sum the time constants.

### Step 1 — Effective transconductance with velocity saturation

The series resistor is

$$
R_{SX}=\frac1{\mathcal{E}_c\mu_nC_{ox}W}=\frac1{(1.5\times10^6\ \mathrm{V/m})(60\times10^{-6}\ \mathrm{A/V^2})(10\times10^{-6}\ \mathrm m)}=1.11\ \mathrm{k\Omega}.
$$

The intrinsic square-law device at $I_D=100\ \mu$A has $g_m=\sqrt{2\mu_nC_{ox}(W/L)I_D}=\sqrt{2(60\ \mu\mathrm{A/V^2})(10)(100\ \mu\mathrm A)}=0.346$ mA/V. Its drain current $i_d=g_m(v_g-v_{s,\text{int}})$ flows through $R_{SX}$, so $v_{s,\text{int}}=v_s+i_dR_{SX}$ and

$$
i_d=G_m(v_g-v_s),\qquad G_m=\frac{g_m}{1+g_mR_{SX}}=\frac{0.346\ \mathrm{mA/V}}{1+0.385}=0.250\ \mathrm{mA/V},\qquad \frac1{G_m}=4.0\ \mathrm{k\Omega}.
$$

Each device is therefore an ideal transconductor $G_m$ between its external terminals ($\lambda=\gamma=0$), with the given capacitances.

### Step 2 — Nodes and low-frequency behaviour

Name the signal nodes: A = input = drain and gate of $M_4$ = gate of $M_2$; B = source of $M_4$ = drain and gate of $M_3$ = gate of $M_1$; C = drain of $M_1$ = source of $M_2$. The output (drain of $M_2$) and all sources of $M_1$, $M_3$ and the bodies are at ac ground.

At low frequency $i_{in}$ flows through $M_4$ and $M_3$: $G_mv_B=i_{in}$ and $G_m(v_A-v_B)=i_{in}$, so $v_A=2i_{in}/G_m$. $M_1$ copies $G_mv_B=i_{in}$, and KCL at C forces $M_2$ to carry the same current, so $i_{out}/i_{in}=1$.

### Step 3 — Open-circuit resistance of each capacitor

With $i_{in}=0$, inject a test current $i_x$ across each capacitor's terminals and solve the three node equations (KCL at A: current leaving through $M_4$ is $G_m(v_A-v_B)$; at B: $M_4$ current in, $G_mv_B$ out; at C: $G_m(v_A-v_C)$ in through $M_2$, $G_mv_B$ out through $M_1$). Two representative cases:

- $C_{gs2}$, from A to C: KCL at A gives $G_m(v_A-v_B)=i_x$, at B $G_mv_B=G_m(v_A-v_B)$, so $v_B=i_x/G_m$, $v_A=2i_x/G_m$; at C, $G_m(v_A-v_C)=G_mv_B+i_x$, so $v_A-v_C=2i_x/G_m$ and $R=2/G_m$.
- $C_{gs4}$, from A to B: at A, $G_m(v_A-v_B)=i_x$; at B, $G_mv_B=i_x-i_x=0$, so $R=v_A-v_B=1/G_m$.

The same procedure gives all entries:

| Capacitors | Terminals | $C$ (fF) | $R_{j0}$ | $R_{j0}C_j$ (ps) |
|---|---|---|---|---|
| $C_{gs3}+C_{db3}+C_{sb4}+C_{gs1}$ | B–ground | 60 | $1/G_m$ | 240 |
| $C_{gs4}$ | A–B | 20 | $1/G_m$ | 80 |
| $C_{db4}$ | A–ground | 10 | $2/G_m$ | 80 |
| $C_{gd2}$ | A–output (ac ground) | 3 | $2/G_m$ | 24 |
| $C_{gs2}$ | A–C | 20 | $2/G_m$ | 160 |
| $C_{gd1}$ | B–C | 3 | $2/G_m$ | 24 |
| $C_{db1}+C_{sb2}$ | C–ground | 20 | $1/G_m$ | 80 |

$C_{gd3}$ and $C_{gd4}$ are shorted by the diode connections, and $C_{sb1}$, $C_{sb3}$, $C_{db2}$ have both terminals at ac ground. The floating capacitors $C_{gs4}$, $C_{gs2}$, $C_{gd1}$ contribute 264 ps and cannot be dropped.

### Step 4 — Dominant pole

$$
T_0=688\ \mathrm{ps},\qquad \omega_p\approx\frac1{T_0}=1.45\times10^{9}\ \mathrm{rad/s},\qquad f_p\approx\frac1{2\pi T_0}=231\ \mathrm{MHz}.
$$

Solving the three-node circuit exactly places the real pole at 378 MHz (the other two form a complex pair near 1.1 GHz), so the zero-value result is a conservative estimate.

### Step 5 — Comparison with $f_T$

With the same short-channel model, the device's short-circuit current gain falls to unity at

$$
f_T=\frac{G_m}{2\pi(C_{gs}+C_{gd})}=\frac{0.250\ \mathrm{mA/V}}{2\pi(23\ \mathrm{fF})}=1.73\ \mathrm{GHz}.
$$

The mirror bandwidth is about $f_T/7.5$: the input node must charge the capacitance of four devices through resistances of $1/G_m$ to $2/G_m$. Without the short-channel resistor ($g_m=0.346$ mA/V) the estimates would be 321 MHz and $f_T=2.40$ GHz; velocity saturation lowers both by the same factor $1+g_mR_{SX}=1.385$, about 28%.
