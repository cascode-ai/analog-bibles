# Detailed solution - A125

The input is an ideal voltage source and the gate of M2 is at a fixed dc voltage, so the output is the only node whose voltage is free to move. The circuit therefore has a single pole, set by the total conductance and total capacitance at the output. Each capacitor is assigned by where its two terminals go.

### Step 1 — Output conductance

Both transistors carry 100 µA in saturation. M2 (gate at ac ground) is a current-sink load, and M1's controlled source is driven by the input, so with $v_{in}=0$ the output sees only

$$
g_{ds1}+g_{ds2}=(0.05\ \mathrm{V^{-1}})(100\ \mu\mathrm A)+(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=5+4\ \mu\mathrm S=9\ \mu\mathrm S,
$$

i.e. $R_{out}=111$ kΩ.

### Step 2 — Capacitance at the output

- $C_{gd1}$: from the output to M1's gate, the input, which the ideal source holds; for the pole it counts as capacitance to ac ground.
- $C_{gd2}$: from the output to M2's gate at the dc voltage $V_{GG}$, i.e. ac ground.
- $C_{bd1}$ (to the $V_{DD}$ n-well), $C_{bd2}$ (to the grounded substrate) and $C_L$: output to ac ground.

$$
C_{out}=C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}+C_L=5+5+30+30+500\ \mathrm{fF}=570\ \mathrm{fF}.
$$

### Step 3 — Transfer function and −3 dB frequency

With $g_{m1}=\sqrt{2(50\ \mu\mathrm{A/V^2})(5)(100\ \mu\mathrm A)}=223.6\ \mu\mathrm S$, KCL at the output (current through $C_{gd1}$ entering from the input) gives

$$
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}-sC_{gd1}}{g_{ds1}+g_{ds2}+sC_{out}} .
$$

The pole is at

$$
\omega_{-3\,\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{C_{out}}=\frac{9\ \mu\mathrm S}{570\ \mathrm{fF}}=1.58\times10^7\ \mathrm{rad/s},
\qquad f_{-3\,\mathrm{dB}}=\frac{\omega_{-3\,\mathrm{dB}}}{2\pi}=2.51\ \mathrm{MHz}.
$$

Because the input is ideally driven, $C_{gd1}$ appears once in the denominator and is not multiplied by the gain; Miller multiplication would apply only if the input had a source resistance. The right-half-plane zero is at $g_{m1}/(2\pi C_{gd1})=223.6\ \mu\mathrm S/(2\pi\cdot5\ \mathrm{fF})=7.1$ GHz, far above the pole.
