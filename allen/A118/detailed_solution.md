# Detailed solution - A118

Compute the transconductances and output conductances at 50 µA, write KCL at the output node, and include the capacitances. The input is an ideal voltage source, so the output is the only node with a time constant: the circuit has one pole, set by the total output conductance and capacitance, and a right-half-plane zero through $C_{gd1}$.

### Step 1 — Small-signal parameters

Both devices are saturated (M2 is diode-connected). With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$ at $I_D=50$ µA:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(50\ \mu\mathrm A)}=148.3\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(1)(50\ \mu\mathrm A)}=70.7\ \mu\mathrm S,
$$

$$
g_{ds1}=(0.04\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=2\ \mu\mathrm S,\qquad
g_{ds2}=(0.05\ \mathrm{V^{-1}})(50\ \mu\mathrm A)=2.5\ \mu\mathrm S .
$$

### Step 2 — Gain and output resistance

M2's gate is tied to the output, so its controlled current $g_{m2}v_{sg2}$ with $v_{sg2}=-v_{out}$ acts as a conductance $g_{m2}$ from the output to ac ground. The total output conductance is

$$
G_{out}=g_{m2}+g_{ds1}+g_{ds2}=75.2\ \mu\mathrm S,
$$

$$
A_v=-\frac{g_{m1}}{G_{out}}=-\frac{148.3}{75.2}=-1.97\ \mathrm{V/V},\qquad
R_{out}=\frac1{G_{out}}=13.3\ \mathrm{k\Omega}.
$$

Neglecting the output conductances gives $-g_{m1}/g_{m2}=-2.10$ V/V and $1/g_{m2}=14.1$ kΩ.

### Step 3 — Capacitances

$V_{DD}$ and ground are ac ground, and the input is held by the ideal source.

- $C_{gd2}$: the gate and drain of M2 are both the output node, so it is shorted out.
- $C_{gs2}$: from M2's gate (the output) to its source ($V_{DD}$), i.e. output to ac ground.
- $C_{bd1}$, $C_{bd2}$, $C_L$: output to ac ground.
- $C_{gd1}$: between input and output.

$$
C_{out}=C_{bd1}+C_{bd2}+C_{gs2}+C_L=10+10+5+1000\ \mathrm{fF}=1025\ \mathrm{fF}.
$$

### Step 4 — Transfer function and −3 dB frequency

KCL at the output, with the current in $C_{gd1}$ entering from the input:

$$
(v_{in}-v_{out})sC_{gd1}=g_{m1}v_{in}+(G_{out}+sC_{out})v_{out}
\quad\Rightarrow\quad
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}-sC_{gd1}}{G_{out}+s(C_{out}+C_{gd1})}.
$$

The single pole gives the −3 dB frequency:

$$
f_{-3\,\mathrm{dB}}=\frac{G_{out}}{2\pi(C_{out}+C_{gd1})}=\frac{75.2\ \mu\mathrm S}{2\pi(1.029\ \mathrm{pF})}=11.6\ \mathrm{MHz}
$$

($7.31\times10^7$ rad/s; 10.9 MHz with $g_{m2}$ alone). Because the input is ideally driven, $C_{gd1}$ appears only once in the denominator and is not Miller-multiplied. The right-half-plane zero $g_{m1}/(2\pi C_{gd1})=5.9$ GHz is far beyond the pole.
