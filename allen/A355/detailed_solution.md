# Detailed solution - A355

The amplifier is a common-source stage with drain resistor $R_D$. Two thermal noise sources act at the output: the channel noise of the MOSFET and the noise of $R_D$. Express both as noise currents at the drain node, add them (they are uncorrelated), and divide by $g_m^2$ to obtain the equivalent input-noise voltage, i.e. the voltage at the gate that would produce the same output noise.

### Step 1 — Transconductance

In saturation $g_m=\sqrt{2K'(W/L)I_D}$ with $W/L=150/10=15$:

$$
g_m=\sqrt{2(25\ \mu\mathrm{A/V^2})(15)(20\ \mu\mathrm A)}=122.5\ \mu\mathrm S .
$$

### Step 2 — Noise currents at the drain

Per unit bandwidth, the channel thermal noise of the MOSFET and the thermal noise of $R_D$ are drain-to-ground current sources:

$$
\overline{i_{n,M}^2}=\frac{8kT}3g_m,\qquad \overline{i_{n,R}^2}=\frac{4kT}{R_D}.
$$

Both flow into the same output impedance ($R_D\parallel r_{ds}$), as does the signal current $g_mv_{in}$, so that impedance cancels when the noise is referred to the input.

### Step 3 — Referred to the input

Dividing the total drain noise current by $g_m^2$:

$$
\overline{e_{eq}^2}=\frac{8kT}{3g_m}+\frac{4kT}{g_m^2R_D}.
$$

With $kT=4.14\times10^{-21}$ J at 300 K:

$$
\frac{8kT}{3g_m}=\frac{1.104\times10^{-20}\ \mathrm J}{122.5\ \mu\mathrm S}=9.02\times10^{-17}\ \mathrm{V^2/Hz},
$$
$$
\frac{4kT}{g_m^2R_D}=\frac{1.656\times10^{-20}\ \mathrm J}{(1.50\times10^{-8}\ \mathrm{S^2})(100\ \mathrm{k\Omega})}=1.10\times10^{-17}\ \mathrm{V^2/Hz}.
$$

### Step 4 — Total

$$
\overline{e_{eq}^2}=9.02\times10^{-17}+1.10\times10^{-17}=1.01\times10^{-16}\ \mathrm{V^2/Hz},\qquad
e_{eq}=10.1\ \mathrm{nV/\sqrt{Hz}}.
$$

The MOSFET alone contributes 9.5 nV/√Hz; $R_D$ adds about 11 % to the noise power because its noise is divided by the gain $g_mR_D=12.2$.
