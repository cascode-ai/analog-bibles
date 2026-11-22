# Detailed solution - G054

Replace the transistor by its hybrid-π model (with $r_b=0$) and characterize the stage as a two-port: the input resistance seen at the base, the short-circuit transconductance from input voltage to output current, and the resistance seen at the collector with the input source set to zero.

### Step 1 — Small-signal parameters

At $I_C=250\ \mu$A:

$$
g_m=\frac{I_C}{V_T}=\frac{250\ \mu\mathrm A}{26\ \mathrm{mV}}=9.62\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=\frac{200}{9.62\ \mathrm{mA/V}}=20.8\ \mathrm{k\Omega},\qquad
r_o=\frac{V_A}{I_C}=\frac{130\ \mathrm V}{250\ \mu\mathrm A}=520\ \mathrm{k\Omega}.
$$

### Step 2 — Input resistance

With $r_b=0$ the base connects directly to $r_\pi$, and the emitter is grounded, so

$$
R_i=r_\pi=20.8\ \mathrm{k\Omega}.
$$

### Step 3 — Transconductance

With the output shorted to ground, no current flows in $R_C$ or $r_o$, and the output current is that of the controlled source: $i_o=g_mv_i$. Hence

$$
G_m=\left.\frac{i_o}{v_i}\right|_{v_o=0}=g_m=9.62\ \mathrm{mA/V}.
$$

### Step 4 — Output resistance

With $v_i=0$, $v_{be}=0$ and the controlled source is idle, leaving $r_o$ in parallel with $R_C$:

$$
R_o=R_C\parallel r_o=\frac{(20\ \mathrm{k\Omega})(520\ \mathrm{k\Omega})}{20\ \mathrm{k\Omega}+520\ \mathrm{k\Omega}}=19.3\ \mathrm{k\Omega}.
$$

$r_o$ is 26 times $R_C$, so it lowers the output resistance by only about 4%. The open-circuit voltage gain of the stage follows as $-G_mR_o=-185$.

Results: $R_i=20.8$ kΩ, $G_m=9.62$ mA/V, $R_o=19.3$ kΩ.
