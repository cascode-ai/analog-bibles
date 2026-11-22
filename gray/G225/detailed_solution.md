# Detailed solution - G225

The circuit is a symmetric MOS differential pair with PMOS current-source loads, so the output difference depends only on the differential input. Find the bias, build the differential-mode half circuit, read the gain from it, and then sum its open-circuit time constants.

### Step 1 — Bias point and small-signal parameters

$M_5$ sinks $I_{D5}=1$ mA, which splits equally between the matched input devices, $I_{D1}=I_{D2}=0.5$ mA, and $V_B$ makes $M_3$, $M_4$ supply the same 0.5 mA. All devices have $L_{\text{eff}}=0.6\ \mu$m, so $(W/L)_1=100/0.6=166.7$. With the square law in saturation, $I_D=\tfrac12k_n'(W/L)V_{ov}^2$, and $g_m=\sqrt{2k_n'(W/L)I_D}$:

$$
g_{m1}=\sqrt{2\left(60\ \mu\mathrm{A/V^2}\right)(166.7)(0.5\ \mathrm{mA})}=3.162\ \mathrm{mA/V},\qquad
V_{ov1}=\frac{2I_D}{g_{m1}}=0.316\ \mathrm V.
$$

The output resistances follow from $r_o=1/(\lambda I_D)$:

$$
r_{o1}=\frac{100\ \mathrm V}{0.5\ \mathrm{mA}}=200\ \mathrm{k\Omega},\qquad
r_{o3}=\frac{50\ \mathrm V}{0.5\ \mathrm{mA}}=100\ \mathrm{k\Omega},\qquad
R_L=r_{o1}\parallel r_{o3}=66.7\ \mathrm{k\Omega}.
$$

The drains sit at +5 V with the sources near $-V_{GS1}$, so $M_1$–$M_4$ are saturated with several volts of margin.

### Step 2 — Differential-mode half circuit and low-frequency gain

The input $v_i$ (with the other gate grounded through its 20 kΩ) is a differential input $v_{id}=v_i$ plus a common-mode part $v_i/2$. With matched halves the common-mode part produces no output difference, so only the differential mode matters. In that mode the common source node is an ac ground, and each half is a common-source stage driven by $v_i/2$ through $R_S=20\ \mathrm{k\Omega}$ and loaded by $R_L$; its output is $v_o/2$.

The gate draws no current, so at low frequency $v_{gs1}=v_i/2$ and

$$
\frac{v_o}{v_i}=\frac{v_o/2}{v_i/2}=-g_{m1}R_L=-(3.162\ \mathrm{mA/V})(66.7\ \mathrm{k\Omega})=-210.8\approx-211 .
$$

### Step 3 — Capacitances of the half circuit

In the half circuit the source of $M_1$ and the gate and source of $M_3$ are at ac ground, so three capacitances remain: $C_{gs1}$ (gate to ground), $C_{gd1}$ (gate to output) and the total output-to-ground capacitance.

Gate capacitances of $M_1$ ($W=100\ \mu$m):

$$
C_{gs1}=\tfrac23(100)(0.6)(0.7\ \mathrm{fF})+(100)(0.2)(0.7\ \mathrm{fF})=28+14=42\ \mathrm{fF},\qquad
C_{gd1}=14\ \mathrm{fF}.
$$

Drain junction of $M_1$: $C_{db0}=(500\ \mu\mathrm m^2)(0.4\ \mathrm{fF/\mu m^2})+(100\ \mu\mathrm m)(0.4\ \mathrm{fF/\mu m})=240$ fF, reverse-biased by $V_{DB}=5-(-10)=15$ V:

$$
C_{db1}=\frac{240\ \mathrm{fF}}{\sqrt{1+15/0.6}}=\frac{240\ \mathrm{fF}}{\sqrt{26}}=47.1\ \mathrm{fF}.
$$

For $M_3$ ($W=50\ \mu$m) the gate is at ac ground, so $C_{gd3}=(50)(0.2)(0.7\ \mathrm{fF})=7$ fF loads the output. Its drain junction has $C_{db0}=(250)(0.2)+(50)(0.2)=60$ fF with $V_{BD}=10-5=5$ V:

$$
C_{db3}=\frac{60\ \mathrm{fF}}{\sqrt{1+5/0.6}}=19.6\ \mathrm{fF},\qquad
C_{out}=C_{db1}+C_{gd3}+C_{db3}=73.7\ \mathrm{fF}.
$$

### Step 4 — Zero-value time constants and the −3-dB frequency

The zero-value time-constant method sums, for each capacitor, the capacitance times the resistance it sees with all other capacitors open: $\omega_{-3\mathrm{dB}}\approx1/\sum R_{j0}C_j$.

- $C_{gs1}$: the gate sees $R_S$, so $R_{gs0}=20\ \mathrm{k\Omega}$.
- $C_{gd1}$: drive a test current $i_x$ from gate to drain. The gate rises by $i_xR_S$, the drain falls by $i_xR_L$, and the controlled current $g_{m1}v_{gs}=g_{m1}i_xR_S$ adds $g_{m1}i_xR_SR_L$ more, giving

$$
R_{gd0}=R_S+R_L+g_{m1}R_LR_S=20\ \mathrm{k\Omega}+66.7\ \mathrm{k\Omega}+(3.162\ \mathrm{mA/V})(66.7\ \mathrm{k\Omega})(20\ \mathrm{k\Omega})=4.30\ \mathrm{M\Omega}.
$$

- $C_{out}$: the output node sees $R_L=66.7\ \mathrm{k\Omega}$.

| Capacitor | $C$ (fF) | $R_{j0}$ | $R_{j0}C_j$ (ns) |
|---|---|---|---|
| $C_{gs1}$ | 42 | 20 kΩ | 0.84 |
| $C_{gd1}$ | 14 | 4.30 MΩ | 60.2 |
| $C_{out}$ | 73.7 | 66.7 kΩ | 4.91 |
| Sum $T_0$ | | | 66.0 |

$$
f_{-3\mathrm{dB}}\approx\frac{1}{2\pi T_0}=\frac{1}{2\pi(66.0\ \mathrm{ns})}=2.41\ \mathrm{MHz}.
$$

The Miller-multiplied $C_{gd1}$ supplies over 90% of $T_0$, so the bandwidth is set by the input pole. Solving the two-node half circuit exactly gives 2.42 MHz, confirming that the time-constant sum is accurate here.
