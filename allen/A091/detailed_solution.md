# Detailed solution - A091

Compute the small-signal parameters at 100 µA, replace the diode-connected M1 by its resistance $1/(g_{m1}+g_{ds1})$, and find the gain, input and output resistances at low frequency. Then add the capacitances connected to the single high-impedance node (the common gate node) to find the pole.

### Step 1 — Small-signal parameters

Both transistors carry 100 µA in saturation (the ideal bias sources are open circuits for signals):

$$
g_m=\sqrt{2K'\frac WL I_D}=\sqrt{2(110\ \mu\mathrm{A/V^2})(5)(100\ \mu\mathrm A)}=332\ \mu\mathrm S,\qquad
g_{ds}=\lambda I_D=(0.04\ \mathrm{V^{-1}})(100\ \mu\mathrm A)=4\ \mu\mathrm S .
$$

### Step 2 — Low-frequency gain and input resistance

$i_{in}$ flows into the gate–drain node of M1, whose small-signal current is $(g_{m1}+g_{ds1})v_{gs}$, so

$$
R_{in}=\frac{v_{gs}}{i_{in}}=\frac{1}{g_{m1}+g_{ds1}}=\frac{1}{336\ \mu\mathrm S}=2.98\ \mathrm{k\Omega}.
$$

With the output shorted ($v_{ds2}=0$), M2 delivers only its controlled current:

$$
\frac{i_{out}}{i_{in}}=\frac{g_{m2}v_{gs}}{i_{in}}=\frac{g_{m2}}{g_{m1}+g_{ds1}}=\frac{332}{336}=0.988\approx1 .
$$

### Step 3 — Output resistance

Looking into the drain of M2 with $i_{in}=0$, the gate node is held at $v_{gs}=0$ (M1 has no excitation), so only $r_{ds2}$ remains (the bias source is ideal):

$$
R_{out}=r_{ds2}=\frac{1}{g_{ds}}=\frac{1}{4\ \mu\mathrm S}=250\ \mathrm{k\Omega}.
$$

### Step 4 — Capacitance at the gate node and the −3 dB frequency

The output is at ac ground, so the only node with a significant voltage swing is the common gate node (the drain of M1). Connected to it, with their other terminals at ac ground:

- $C_{gs1}$ and $C_{gs2}$ (sources grounded): 200 fF + 200 fF;
- $C_{bd1}$ (drain of M1 to the grounded bulk): 100 fF;
- $C_{gd2}$ (gate of M2 to its drain, which is shorted to ground): 50 fF, with no Miller multiplication since $v_{ds2}=0$.

$C_{gd1}$ connects M1's gate to its own drain, the same node, so it carries no current, and $C_{bd2}$ sits at the grounded output. Thus

$$
C=200+200+100+50=550\ \mathrm{fF},\qquad
\omega_{-3dB}=\frac{g_{m1}+g_{ds1}}{C}=\frac{336\ \mu\mathrm S}{550\ \mathrm{fF}}=6.1\times10^{8}\ \mathrm{rad/s},
$$

$$
f_{-3dB}=\frac{\omega_{-3dB}}{2\pi}=97\ \mathrm{MHz}.
$$

The feedforward path through $C_{gd2}$ creates a zero at $g_{m2}/C_{gd2}=6.6\times10^{9}$ rad/s (about 1.06 GHz), well above the pole, so the −3 dB frequency is set by the pole.

| Quantity | Value |
|---|---|
| $i_{out}/i_{in}$ | 0.988 |
| $R_{in}$ | 2.98 kΩ |
| $R_{out}$ | 250 kΩ |
| $f_{-3dB}$ | 97 MHz |
