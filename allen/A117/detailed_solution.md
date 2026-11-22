# Detailed solution - A117

The output node is fed by two PMOS devices: the current source M3, which mirrors the 100 µA reference through M4, and the diode-connected load M2. KCL at the output fixes how M1's 110 µA divides between them, and M2 carries only the small remainder. M1's square law gives $V_{in}$. In the small-signal model the diode conductance $g_{m2}$ is now small, because M2's current is small, which raises the gain above that of a plain diode-loaded inverter.

### Step 1 — DC currents

M4 is diode-connected and carries the 100 µA reference; M3 has the same $W/L$ and the same $V_{SG}$, so it supplies $I_{D3}=100$ µA to the output node (λ neglected in the bias). KCL at the output:

$$
I_{D1}=I_{D2}+I_{D3}\quad\Rightarrow\quad I_{D2}=110\ \mu\mathrm A-100\ \mu\mathrm A=10\ \mu\mathrm A .
$$

### Step 2 — Input voltage

M1 is saturated with $I_{D1}=110$ µA. Neglecting the $(1+\lambda v_{DS})$ factor, as usual for the bias (the value of $V_{DD}$ is not given, and keeping λ would make $V_{in}$ depend on it),

$$
110\ \mu\mathrm A=\frac{(110\ \mu\mathrm{A/V^2})(2)}{2}(V_{in}-0.7\ \mathrm V)^2
\quad\Rightarrow\quad V_{in}-0.7\ \mathrm V=1\ \mathrm V,\qquad V_{in}=1.7\ \mathrm V .
$$

M2 at 10 µA has $V_{SG2}=0.7+\sqrt{2(10\ \mu\mathrm A)/(50\ \mu\mathrm{A/V^2})}=1.33$ V, so the output sits 1.33 V below $V_{DD}$.

### Step 3 — Small-signal parameters

With $g_m=\sqrt{2K'(W/L)I_D}$ and $g_{ds}=\lambda I_D$:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(2)(110\ \mu\mathrm A)}=220\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(1)(10\ \mu\mathrm A)}=31.6\ \mu\mathrm S,
$$

| Device | $I_D$ (µA) | $\lambda$ (V⁻¹) | $g_{ds}$ (µS) |
|---|---|---|---|
| M1 | 110 | 0.04 | 4.4 |
| M2 | 10 | 0.05 | 0.5 |
| M3 | 100 | 0.05 | 5 |

### Step 4 — Gain and output resistance

At the output node, M1 contributes the controlled current $g_{m1}v_{in}$ and its $g_{ds1}$; the diode-connected M2 contributes $g_{m2}$ (gate tied to the output) plus $g_{ds2}$; M3 has a fixed gate voltage, so it contributes only $g_{ds3}$. KCL:

$$
g_{m1}v_{in}+(g_{m2}+g_{ds1}+g_{ds2}+g_{ds3})v_{out}=0,
\qquad g_{m2}+g_{ds1}+g_{ds2}+g_{ds3}=41.5\ \mu\mathrm S .
$$

$$
A_v=-\frac{g_{m1}}{41.5\ \mu\mathrm S}=-\frac{220}{41.5}=-5.30\ \mathrm{V/V},\qquad
R_{out}=\frac{1}{41.5\ \mu\mathrm S}=24.1\ \mathrm{k\Omega}.
$$

If all output conductances are neglected, $A_v=-g_{m1}/g_{m2}=-6.96$ V/V and $R_{out}=1/g_{m2}=31.6$ kΩ.

The current source M3 takes over most of M1's bias current. M2 then runs at only 10 µA, so its conductance $g_{m2}$, the main load, is small, while $g_{m1}$ stays high. Compared with a plain diode load carrying all 110 µA ($A_v\approx-\sqrt{\beta_1/\beta_2}=-2.1$), the gain more than doubles.
