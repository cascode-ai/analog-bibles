# Detailed solution - A407

This preamplifier is a differential pair with diode loads, but current sources M5–M6 supply most of the input devices' current, so the diodes carry little current and present a higher resistance. First find the branch currents, then apply the differential half circuit: gain is $g_{m1}$ over the output-node conductance, and the single pole is that conductance over the node capacitance, with the floating $C_L$ counted as $2C_L$.

### Step 1 — Branch currents

M7 and M8 carry 20 µA each, and M5 and M6, of the same size and $V_{SG}$, mirror 20 µA into the drains of M1 and M2. Each input device carries half the tail current, 25 µA, so by KCL at each drain the diode load carries only

$$
I_{D3}=I_{D4}=25-20=5\ \mu\mathrm A .
$$

### Step 2 — Small-signal parameters

With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$:

| Parameter | Value |
|---|---|
| $g_{m1}=\sqrt{2(110)(10)(25)}\ \mu\mathrm S$ | 234.5 µS |
| $g_{m3}=\sqrt{2(50)(2)(5)}\ \mu\mathrm S$ | 31.6 µS |
| $g_{ds1}=0.04(25)\ \mu\mathrm S$ | 1.00 µS |
| $g_{ds3}=0.05(5)\ \mu\mathrm S$ | 0.25 µS |
| $g_{ds5}=0.05(20)\ \mu\mathrm S$ | 1.00 µS |

### Step 3 — Differential gain

The tail node is an ac ground for a differential input, so M1 sees $v_{in}/2$. The conductance at each output node is the diode M3 plus the output conductances of M1, M3 and M5:

$$
G=g_{m3}+g_{ds1}+g_{ds3}+g_{ds5}=31.6+1.00+0.25+1.00=33.9\ \mu\mathrm S,
$$
$$
\frac{v_{out}}{v_{in}}=\frac{g_{m1}}G=\frac{234.5\ \mu\mathrm S}{33.9\ \mu\mathrm S}=6.92 .
$$

Neglecting the output conductances, $g_{m1}/g_{m3}=7.42$. Without M5–M6, the same devices would give only $\sqrt{(110\cdot10)/(50\cdot2)}=3.3$: diverting current away from the diodes lowers $g_{m3}$ while keeping $g_{m1}$, so a small input device still gives useful gain.

### Step 4 — Capacitance at each output node

The floating $C_L$ loads each node as $2C_L$. With zero-bias junctions on a $W\times5\ \mu$m drain (area $5W$, perimeter $2W+10\ \mu$m):

| Component | Expression | Value |
|---|---|---|
| $2C_L$ | — | 2000 fF |
| $C_{bd1}$ | $(770\ \mu\mathrm{F/m^2})(50\ \mu\mathrm m^2)+(380\ \mathrm{pF/m})(30\ \mu\mathrm m)$ | 38.5 + 11.4 fF |
| $C_{gd1}$ | $C_{GDO}W_1$ | 2.2 fF |
| $C_{bd3}$, $C_{bd5}$ | $(560\ \mu\mathrm{F/m^2})(10\ \mu\mathrm m^2)+(350\ \mathrm{pF/m})(14\ \mu\mathrm m)$ each | 2 × (5.6 + 4.9) fF |
| $C_{gs3}$ | $\tfrac23C_{ox}W_3L_3+C_{GSO}W_3$ | 3.7 fF |
| $C_{gd5}$ | $C_{GDO}W_5$ | 0.4 fF |
| Total $C$ | | 2.08 pF |

The gate of M5 sits on the diode M7, an ac ground, so $C_{gd5}$ loads the node directly; $C_{gd3}$ is shorted by the diode connection.

### Step 5 — Bandwidth

$$
f_{-3dB}=\frac G{2\pi C}=\frac{33.9\ \mu\mathrm S}{2\pi(2.08\ \mathrm{pF})}=2.6\ \mathrm{MHz}.
$$

Without the sidewalls ($C=2.06$ pF) the result is 2.62 MHz, and with $G\approx g_{m3}$ it is 2.42 MHz. Compared with a plain diode-loaded stage, the current injection roughly doubles the gain but halves the bandwidth, because the same factor that raises $1/g_{m3}$ also slows the output pole.
