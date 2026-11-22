# Detailed solution - A081

Find the dc current in each diode-connected transistor from the symmetry of the bridge, replace each by its small-signal resistance $1/g_m$, and combine them along the two paths from $v_{in}$ to $v_{out}$. Then compute the attenuation into the load and compare the bridge with the single MOSFET switch.

### Step 1 — DC bias of the bridge

$v_{in}$ has no dc component and $R_L$ returns to ground, so at dc both $v_{in}$ and $v_{out}$ sit at 0 V. The bridge is then symmetric: $I_{control}=200\ \mu$A flows into the top rail (the sources of p-channel M3 and M4), splits between the two sides, passes through M3–M1 and M4–M2, and leaves from the bottom rail (the sources of n-channel M1 and M2). Each side carries half:

$$
I_D=100\ \mu\mathrm A\ \text{in each of M1–M4},
$$

with no dc current in $R_L$ or in the source. Each diode-connected device is saturated ($V_{DS}=V_{GS}$), with $|V_{GS}|=0.83$ V (n) and 0.84 V (p).

### Step 2 — Small-signal resistance of each diode

A diode-connected transistor with $\lambda=0$ and no body effect is a resistance $1/g_m$, with $g_m=\sqrt{2K'(W/L)I_D}$:

$$
g_{m,n}=\sqrt{2(110\ \mu\mathrm{A/V^2})(100)(100\ \mu\mathrm A)}=1.48\ \mathrm{mS}\ (674\ \Omega),\qquad
g_{m,p}=\sqrt{2(50\ \mu\mathrm{A/V^2})(200)(100\ \mu\mathrm A)}=1.41\ \mathrm{mS}\ (707\ \Omega).
$$

### Step 3 — ON resistance of the bridge

For small signals the ideal current source is an open circuit, so the top rail and the bottom rail are connected to the rest of the circuit only through the diodes. Two paths join $v_{in}$ and $v_{out}$:

- through the top rail, M3 then M4: $2(707\ \Omega)=1414\ \Omega$;
- through the bottom rail, M1 then M2: $2(674\ \Omega)=1348\ \Omega$.

The paths are in parallel:

$$
R_{ON}=\frac{(1414\ \Omega)(1348\ \Omega)}{1414\ \Omega+1348\ \Omega}=690\ \Omega .
$$

### Step 4 — Switch loss

$R_{ON}$ and $R_L$ form a voltage divider:

$$
\frac{v_{out}}{v_{in}}=\frac{R_L}{R_L+R_{ON}}=\frac{1\ \mathrm{k\Omega}}{1.690\ \mathrm{k\Omega}}=0.592,\qquad
20\log_{10}0.592=-4.6\ \mathrm{dB}.
$$

### Step 5 — Comparison with the single MOSFET switch of [Fig. 2]

| Aspect | Diode bridge | Single MOSFET switch |
|---|---|---|
| Static power | $I_{control}=200\ \mu$A flows continuously while on | no static current (only gate charging) |
| ON resistance | set by $I_{control}$ (≈ $1/g_m$ per diode), nearly independent of $v_{in}$ | $r_{ON}=1/[K'(W/L)(V_\phi-v_{in}-V_T)]$, varies strongly with $v_{in}$ and body effect; much lower for a device of similar size (≈ 40 Ω for 100/1 at 2.5 V overdrive) |
| Large signals | output current limited to about $I_{control}$, so charging $C$ is slew-limited; $v_{in}$ needs headroom of $V_{GS}+\lvert V_{GS}\rvert\approx1.7$ V to the supplies | passes rail-limited signals while $v_{in}<V_\phi-V_T$; charges $C$ with an RC time constant |
| Accuracy | mismatch between the two paths and diodes gives a dc offset | no offset, but charge injection and clock feedthrough from the gate |
| OFF state | large devices (100/1, 200/1) leave sizable capacitance from $v_{in}$ to $v_{out}$, so signal feeds through; control-current transitions also inject charge | a small switch isolates well (only overlap and junction capacitance) |

The bridge offers an ON resistance controlled by a current rather than by the signal level, and no clock edge drives a gate at the signal node. In exchange it consumes static power, adds offset and loss (−4.6 dB into 1 kΩ), limits the slew rate and isolates worse when off; for sampling onto a capacitor the single MOSFET switch is usually the better choice.
