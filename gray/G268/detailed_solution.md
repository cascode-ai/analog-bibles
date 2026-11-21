# Detailed solution - G268

The emitter resistor $R_E$ carries the output current and develops a voltage that subtracts from the input in the base–emitter loop: series–series (local) feedback. Treat the transistor (with $r_b$ and the loading of $R_E$ in the input loop) as the basic transconductance amplifier $a$, take $f=R_E$, and apply $A=a/(1+T)$; the impedances are multiplied by $1+T$. Each result is checked against the direct hybrid-π calculation.

### Step 1 — Small-signal parameters

$$
g_m=\frac{I_C}{V_T}=38.46\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=3.9\ \mathrm{k\Omega},\qquad r_o=\frac{V_A}{I_C}=80\ \mathrm{k\Omega}.
$$

### Step 2 — Basic amplifier, feedback factor and loop transmission

The feedback network is $R_E$ alone: $z_{12f}=z_{11f}=z_{22f}=R_E$. In the basic amplifier the input loop contains $r_b$, $r_\pi$ and the loading $R_E$, so the controlling voltage is $v_\pi=v_s\,r_\pi/(r_b+r_\pi+R_E)$ and, with the collector at ac ground and $r_o$ neglected,

$$
a=\frac{g_m}{1+(r_b+R_E)/r_\pi}=\frac{38.46\ \mathrm{mA/V}}{1+400/3900}=34.9\ \mathrm{mA/V},\qquad f=R_E=200\ \Omega,
$$

$$
T=af=(34.9\ \mathrm{mA/V})(200\ \Omega)=6.98 .
$$

(Neglecting the $(r_b+R_E)/r_\pi$ term would give the familiar $g_mR_E=7.7$.)

### Step 3 — Transconductance

$$
\frac{i_o}{v_s}=\frac{a}{1+T}=\frac{34.9\ \mathrm{mA/V}}{7.98}=4.37\ \mathrm{mA/V}.
$$

Directly, from $v_s=i_b(r_b+r_\pi)+(\beta+1)i_bR_E$ and $i_o=\beta i_b$: $i_o/v_s=\beta/[r_b+r_\pi+(\beta+1)R_E]=150/34.3\ \mathrm{k\Omega}=4.37$ mA/V, i.e. $1/(229\ \Omega)$, close to the ideal $1/R_E$.

### Step 4 — Input impedance

Series mixing multiplies the loaded input resistance $r_b+r_\pi+R_E=4.3\ \mathrm{k\Omega}$ by $1+T$:

$$
R_{in}=(1+T)(r_b+r_\pi+R_E)=(7.98)(4.3\ \mathrm{k\Omega})=34.3\ \mathrm{k\Omega},
$$

the same as the direct result $r_b+r_\pi+(\beta+1)R_E=34.3\ \mathrm{k\Omega}$.

### Step 5 — Output impedance

Series sampling multiplies the collector resistance of the basic amplifier, $r_o$, by $1+T$:

$$
R_{out}\approx r_o\left(1+\frac{g_mR_E}{1+(r_b+R_E)/r_\pi}\right)=(80\ \mathrm{k\Omega})(7.98)=638\ \mathrm{k\Omega}\approx0.64\ \mathrm{M\Omega}.
$$

A full nodal solution including $r_o$ gives the same 0.64 MΩ. Here $T$ is small enough that the base-current ceiling $(\beta+1)r_o=12$ MΩ does not limit the result.
