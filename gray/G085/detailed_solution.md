# Detailed solution - G085

Write the gain of the actively loaded pair as $v_o/v_i=G_mR_o$. $G_m$ is the short-circuit output current per volt of input, and $R_o$ is the resistance seen at the output with $v_i=0$. The emitter resistors degenerate the mirror equally on both sides, so they hardly change the mirror's current gain or $G_m$. They do raise the output resistance of $Q_4$, and the output resistance and the gain rise together.

### Step 1 — Bias and small-signal parameters

The ideal 100-µA tail splits equally, so every transistor carries $I_C=50\ \mu\mathrm A$:

$$
g_m=\frac{I_C}{V_T}=\frac{50\ \mu\mathrm A}{26\ \mathrm{mV}}=1.92\ \mathrm{mA/V},\qquad
r_{o,npn}=\frac{130\ \mathrm V}{50\ \mu\mathrm A}=2.6\ \mathrm{M\Omega},\qquad
r_{o,pnp}=\frac{50\ \mathrm V}{50\ \mu\mathrm A}=1\ \mathrm{M\Omega},
$$

$$
r_{\pi,pnp}=\frac{\beta_0}{g_m}=\frac{50}{1.92\ \mathrm{mA/V}}=26\ \mathrm{k\Omega}.
$$

Each 2-kΩ resistor drops only 0.1 V, so all devices remain forward-active.

### Step 2 — Transconductance

With the output shorted to ac ground, the input splits across the two emitters: $i_{c1}=g_mv_i/2$ and $i_{c2}=-g_mv_i/2$. The mirror copies $i_{c1}$ to the output. $Q_3$ and $Q_4$ have identical degeneration, so the copy is exact apart from the pnp base currents. Those reduce the mirror gain to about $1/(1+2/\beta_{0,pnp})=0.962$. The current delivered to the output is the mirrored current minus $i_{c2}$:

$$
G_m=\frac{g_m}2(1+0.962)=0.98\,g_m=1.88\ \mathrm{mA/V}\ (\approx g_m=1.92\ \mathrm{mA/V}\ \text{for an ideal mirror}).
$$

An increase of $v_i$ raises $i_{c1}$, so the mirror pushes more current into the output while $Q_2$ draws less. The gain is positive.

### Step 3 — Output resistance of the degenerated load $Q_4$

The base of $Q_4$ is driven from the low impedance of the diode side ($\approx1/g_m+R_E$). The standard result for a transistor with emitter degeneration $R_E$ and a low-impedance base therefore applies:

$$
R_{o4}\approx r_{o4}\left[1+g_m\left(R_E\,\|\,r_{\pi4}\right)\right],\qquad R_E\|r_{\pi4}=2\ \mathrm{k\Omega}\,\|\,26\ \mathrm{k\Omega}=1.86\ \mathrm{k\Omega},
$$

$$
R_{o4}=(1\ \mathrm{M\Omega})\left[1+(1.92\ \mathrm{mA/V})(1.86\ \mathrm{k\Omega})\right]=4.57\ \mathrm{M\Omega}.
$$

$r_{\pi4}$ appears in parallel with $R_E$ because part of the emitter current returns through the base.

### Step 4 — Output resistance of the whole stage

A test current into the output divides between $Q_4$ and $Q_2$. The part entering the collector of $Q_2$ sees about $2r_{o2}$ (the emitter of $Q_1$ degenerates $Q_2$ by $1/g_m$). That current leaves through the emitter of $Q_1$, flows through $Q_3$, and is mirrored back into the output by $Q_4$. This doubles its effect, so the $Q_2$ side contributes $r_{o2}$, as in the undegenerated stage. Hence

$$
R_o\approx r_{o2}\,\|\,R_{o4}=2.6\ \mathrm{M\Omega}\,\|\,4.57\ \mathrm{M\Omega}=1.66\ \mathrm{M\Omega}.
$$

A full nodal solution of the hybrid-$\pi$ circuit, including all base currents, gives $R_o=1.64\ \mathrm{M\Omega}$.

### Step 5 — Voltage gain

$$
\frac{v_o}{v_i}=G_mR_o=(1.88\ \mathrm{mA/V})(1.64\ \mathrm{M\Omega})=+3.1\times10^3 .
$$

With an ideal mirror ($G_m=g_m$) the estimate is $(1.92\ \mathrm{mA/V})(1.66\ \mathrm{M\Omega})=3.2\times10^3$. The full solution gives $3.09\times10^3$.

Without the emitter resistors, $R_o=r_{o2}\|r_{o4}=2.6\ \mathrm{M\Omega}\,\|\,1\ \mathrm{M\Omega}=0.72\ \mathrm{M\Omega}$ and the gain is about $1.4\times10^3$. Degenerating the pnp load raises its output resistance from 1 MΩ to 4.6 MΩ. The npn side ($r_{o2}=2.6\ \mathrm{M\Omega}$) now limits $R_o$, and the gain rises by about 2.3 times.
