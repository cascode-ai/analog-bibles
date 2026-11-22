# Detailed solution - G222

Solve the bias of the diode-connected $M_3$ (the same current flows in all three transistors), then the small-signal parameters and capacitances. The added resistor $1/g_{m1}$ converts the input current into $M_1$'s gate-source voltage, giving a current gain of exactly one, so the transresistance is just the output resistance. The bandwidth follows from the zero-value time constants with the input current source open. Signal nodes: the gate of $M_1$ ($g_1$), the output, and the mirror gate node of $M_2$, $M_3$ ($g_m$); both supplies and ground are ac ground.

### Step 1 — Bias

$M_3$'s gate and drain sit at $-2.5\ \mathrm V+V_{GS3}$, so with $W/L_{\text{eff}}=100/0.6=166.7$:

$$
\frac{2.5\ \mathrm V-V_{GS3}}{30\ \mathrm{k\Omega}}=\frac{60\ \mu\mathrm A/\mathrm V^2}{2}(166.7)(V_{GS3}-1\ \mathrm V)^2
\;\Rightarrow\;V_{GS3}=1.097\ \mathrm V,\quad I_D=46.8\ \mu\mathrm A .
$$

$M_2$ mirrors this current and $M_1$ carries it ($I_B$ is set for $V_O=0$).

### Step 2 — Small-signal parameters

$$
g_{m2}=g_{m3}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(166.7)(46.8\ \mu\mathrm A)}=0.967\ \mathrm{mA/V},\qquad
g_{m1}=\sqrt{2(20\ \mu\mathrm A/\mathrm V^2)(333.3)(46.8\ \mu\mathrm A)}=0.790\ \mathrm{mA/V},
$$

so the added resistor is $1/g_{m1}=1.27$ kΩ, and

$$
r_{o1}=\frac{50\ \mathrm V}{46.8\ \mu\mathrm A}=1.07\ \mathrm{M\Omega},\qquad r_{o2}=\frac{100\ \mathrm V}{46.8\ \mu\mathrm A}=2.14\ \mathrm{M\Omega},\qquad R_{\text{out}}=r_{o1}\parallel r_{o2}=0.713\ \mathrm{M\Omega}.
$$

### Step 3 — Transresistance

The input current is drawn from the source of $M_1$ ($V_{\text{SUPPLY}}$, ac ground) through the resistor $1/g_{m1}$, so $v_{sg1}=i_i/g_{m1}$ and $M_1$'s drain current changes by $g_{m1}v_{sg1}=i_i$, flowing into the output:

$$
\frac{v_o}{i_i}=+R_{\text{out}}=0.713\ \mathrm{M\Omega}.
$$

### Step 4 — Capacitances

Gate capacitances, with $L_{\text{eff}}=0.6\ \mu$m and $L_d=0.2\ \mu$m:

$$
C_{gs1}=\tfrac23(200)(0.6)(0.7)+(200)(0.2)(0.7)=84\ \mathrm{fF},\quad C_{gd1}=28\ \mathrm{fF},\quad C_{gs2}=C_{gs3}=42\ \mathrm{fF},\quad C_{gd2}=14\ \mathrm{fF}.
$$

Drain junctions, $C_{db0}=240$ fF for each device ($A_D=5W$, $P_D=W$), with $V_{DB}=2.5$ V for $M_1$ and $M_2$ (output at 0, bodies at ±2.5 V) and $V_{DB}=1.097$ V for $M_3$:

$$
C_{db1}=C_{db2}=\frac{240\ \mathrm{fF}}{\sqrt{1+2.5/0.6}}=106\ \mathrm{fF},\qquad C_{db3}=\frac{240\ \mathrm{fF}}{\sqrt{1+1.097/0.6}}=143\ \mathrm{fF}.
$$

All source–body capacitances are shorted (sources at their body supplies), and $C_{gd3}$ is shorted by the diode connection.

### Step 5 — Zero-value time constants

With the current source open, $g_1$ sees $R_g=1/g_{m1}=1.27$ kΩ, and the mirror node sees $R_m=1/g_{m3}\parallel30\ \mathrm{k\Omega}\parallel r_{o3}=1.0$ kΩ.

- $C_{gd1}$ ($g_1$ to output): $R_g+R_{\text{out}}+g_{m1}R_{\text{out}}R_g=1.27\ \mathrm{k\Omega}+0.713\ \mathrm{M\Omega}+0.713\ \mathrm{M\Omega}=1.43$ MΩ.
- $C_{gd2}$ (mirror node to output): $R_m+R_{\text{out}}+g_{m2}R_{\text{out}}R_m=1.0\ \mathrm{k\Omega}+0.713\ \mathrm{M\Omega}+0.689\ \mathrm{M\Omega}=1.40$ MΩ.

| Capacitor | Value | Resistance | Time constant |
|---|---|---|---|
| $C_{gs1}$ | 84 fF | 1.27 kΩ | 0.11 ns |
| $C_{gd1}$ | 28 fF | 1.43 MΩ | 39.9 ns |
| $C_{db1}$ | 106 fF | 0.713 MΩ | 75.2 ns |
| $C_{db2}$ | 106 fF | 0.713 MΩ | 75.2 ns |
| $C_{gd2}$ | 14 fF | 1.40 MΩ | 19.6 ns |
| $C_{gs2}+C_{gs3}+C_{db3}$ | 227 fF | 1.0 kΩ | 0.23 ns |

$$
T_0=210\ \mathrm{ns},\qquad f_{-3\text{dB}}\approx\frac1{2\pi T_0}=0.76\ \mathrm{MHz}.
$$

An exact nodal analysis also gives 0.76 MHz. The output node dominates: its large resistance $R_{\text{out}}$ acts on the two drain junctions directly and on the two gate-drain overlaps through the Miller terms.
