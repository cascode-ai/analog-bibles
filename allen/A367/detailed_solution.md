# Detailed solution - A367

Compute the transconductances and the capacitance at each node from the given device data, then the output pole (from the Miller pole-splitting formula) and the higher-order poles $g_m/C$ at the mirror node and at the cascode sources. With $GB=g_{m1}/C_c$, the phase margin follows from the sum of the phase shifts of these poles and the right-half-plane zero at GB. Reducing $C_c$ raises GB but brings it closer to the output pole, so the 60° condition fixes the smallest usable $C_c$.

### Step 1 — Transconductances

With $g_m=\sqrt{2K'(W/L)I_D}$:

| Device | W/L | $I_D$ | $g_m$ |
|---|---|---|---|
| M1 | 7.18 | 10 µA | 125.7 µS |
| M6 | 12.8 | 20 µA | 160 µS |
| M8 | 1 | 20 µA | 66.3 µS |
| M14 | 22.85 | 314 µA | 1256 µS |

### Step 2 — Node capacitances

With $C_{gs}=\tfrac23WLC_{ox}+\mathrm{CGSO}\cdot W$, $C_{gd}=\mathrm{CGDO}\cdot W$ and zero-bias junctions $C_{bd}=CJ(2\ \mu\mathrm m\cdot W)+CJSW(2W+4\ \mu\mathrm m)$. A representative substitution, for the p-channel M13 ($W=201\ \mu$m):

$$
C_{db13}=(560\ \mu\mathrm{F/m^2})(402\times10^{-12}\ \mathrm{m^2})+(350\ \mathrm{pF/m})(406\ \mu\mathrm m)=225+142=367\ \mathrm{fF}.
$$

The other terms follow in the same way:

| Node | Contributions (fF) | Total |
|---|---|---|
| Output | $C_L$ = 10 pF, $C_{db14}$ 54, $C_{db13}$ 367, $C_{gd13}$ 44 | $C_{out}$ ≈ 10.47 pF |
| First-stage output (gate of M14) | $C_{gs14}$ 42.7, $C_{db7}$ 24.7, $C_{gd7}$ 2.8, $C_{db9}$ 3.8, $C_{gd9}$ 0.2 | $C_I$ ≈ 74 fF |
| Mirror node (drain of M6, gates of M8, M9) | $C_{gs8}+C_{gs9}$ 3.7, $C_{db8}$ 3.8, $C_{db6}$ 24.7, $C_{gd6}$ 2.8 | ≈ 35 fF |
| Source of M6 (or M7) | $C_{gs6}$ 23.9, $C_{sb6}$ 24.7, $C_{db3}$ 36.3, $C_{gd3}$ 4.2, $C_{db1}$ 18.0, $C_{gd1}$ 1.6 | ≈ 109 fF |

### Step 3 — Poles and zero at $C_c=2$ pF

With Miller compensation the output pole is

$$
p_2\approx-\frac{g_{m14}C_c}{C_IC_{out}+C_c(C_I+C_{out})}=-\frac{(1256\ \mu\mathrm S)(2\ \mathrm{pF})}{(74\ \mathrm{fF})(10.47\ \mathrm{pF})+(2\ \mathrm{pF})(10.54\ \mathrm{pF})}=-1.15\times10^8\ \mathrm{rad/s}\ (18.3\ \mathrm{MHz}),
$$

close to $g_{m14}/C_L$ (20 MHz). The higher-order poles are set by the $1/g_m$ resistance of the device at each node:

$$
p_3\approx-\frac{g_{m8}}{35\ \mathrm{fF}}=-1.9\times10^9\ \mathrm{rad/s}\ (300\ \mathrm{MHz}),\qquad
p_6\approx-\frac{g_{m6}}{109\ \mathrm{fF}}=-1.47\times10^9\ \mathrm{rad/s}\ (230\ \mathrm{MHz}).
$$

With $C_{gs6}$ alone the cascode-source pole would be at $7.6\times10^9$ rad/s (1.2 GHz); the junction capacitances lower it about fivefold. The right-half-plane zero is $z=g_{m14}/C_c=6.3\times10^8$ rad/s (100 MHz).

### Step 4 — Phase margin of the 2 pF design

With $GB=g_{m1}/C_c=6.29\times10^7$ rad/s (10 MHz) and $GB/z=g_{m1}/g_{m14}=0.1$ for any $C_c$:

$$
PM=90^\circ-\tan^{-1}\frac{GB}{|p_2|}-\tan^{-1}\frac{GB}{z}-\tan^{-1}\frac{GB}{|p_3|}-\tan^{-1}\frac{GB}{|p_6|}
=90-28.7-5.7-1.9-2.4\approx51^\circ,
$$

or about 49° if the pole at the source of M7 is counted as a second, equal pole. The design with 2 pF therefore already falls short of 60°.

### Step 5 — Largest GB with 60° phase margin

Increasing $C_c$ lowers $GB=g_{m1}/C_c$ while $p_2$ stays near $g_{m14}/C_L$ and $GB/z$ stays at 0.1. Solving the phase-margin expression for $PM=60^\circ$:

$$
C_c\approx2.5\ \mathrm{pF},\qquad GB=\frac{g_{m1}}{C_c}\approx8\ \mathrm{MHz}.
$$

Evaluating the phase at the actual unity-gain crossover of the pole–zero model (which lies slightly below $g_{m1}/C_c$), and counting both cascode-source poles, gives $C_c\approx2.6$–2.8 pF and $GB=g_{m1}/C_c\approx7.1$–7.7 MHz. Either way:

| Quantity | Value |
|---|---|
| Output pole | ≈ −1.15×10⁸ rad/s (18 MHz) |
| Mirror pole (M8–M9) | ≈ −1.9×10⁹ rad/s (300 MHz) |
| Cascode-source poles (M6, M7) | ≈ −1.5×10⁹ rad/s (230 MHz) |
| $C_c$ for 60° | ≈ 2.5–2.8 pF |
| New GB | ≈ 7–8 MHz |

GB cannot be increased above 10 MHz by changing $C_c$. The higher-order poles are 25–40 times GB and cost only a few degrees; the binding limit is the output pole $p_2\approx g_{m14}/C_L\approx20$ MHz, for which the original choice $g_{m14}=10g_{m1}$, $C_c=0.2C_L$ was designed. A larger GB would require a larger $g_{m14}$, i.e. more output-stage current, not a smaller $C_c$.
