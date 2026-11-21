# Detailed solution - G061

Use the hybrid-π model with $r_b$ and $r_o$ removed. The collector is at ac ground, the input is the base and the output the emitter, which drives $R_L$. All three quantities follow from the base–emitter loop, in which the emitter resistance carries $(\beta_0+1)$ times the base current.

### Step 1 — Small-signal parameters

$$
g_m=\frac{I_C}{V_T}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.46\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta_0}{g_m}=\frac{200}{38.46\ \mathrm{mA/V}}=5.2\ \mathrm{k\Omega}.
$$

### Step 2 — Input resistance looking into the base

Let a base current $i_b$ flow. It produces $v_{be}=i_br_\pi$ and a collector current $g_mv_{be}=\beta_0i_b$, so the emitter current through $R_L$ is $(\beta_0+1)i_b$. KVL from base to ground:

$$
v_b=i_br_\pi+(\beta_0+1)i_bR_L
\quad\Rightarrow\quad
R_i=\frac{v_b}{i_b}=r_\pi+(\beta_0+1)R_L .
$$

$$
R_i=5.2\ \mathrm{k\Omega}+201\times500\ \Omega=5.2\ \mathrm{k\Omega}+100.5\ \mathrm{k\Omega}=105.7\ \mathrm{k\Omega}.
$$

### Step 3 — Voltage gain including $R_S$ and $R_L$

The source sees $R_S$ in series with $R_i$, so $i_b=v_s/(R_S+R_i)$, and the output is the voltage across $R_L$:

$$
\frac{v_o}{v_s}=\frac{(\beta_0+1)R_L}{R_S+r_\pi+(\beta_0+1)R_L}
=\frac{100.5\ \mathrm{k\Omega}}{5\ \mathrm{k\Omega}+5.2\ \mathrm{k\Omega}+100.5\ \mathrm{k\Omega}}
=\frac{100.5}{110.7}=0.908 .
$$

The gain is positive and slightly below one; the loss comes from $R_S+r_\pi$ dividing against the reflected load $(\beta_0+1)R_L$.

### Step 4 — Output resistance including $R_L$

Set $v_s=0$ and drive the emitter with a test voltage $v_x$. The base then sees $R_S$ to ground, so the base current is $i_b=-v_x/(R_S+r_\pi)$, and the current drawn out of the test source into the emitter is $(\beta_0+1)|i_b|$. The resistance looking into the emitter is therefore

$$
R_e=\frac{R_S+r_\pi}{\beta_0+1}=\frac{10.2\ \mathrm{k\Omega}}{201}=50.75\ \Omega,
$$

and with $R_L$ in parallel

$$
R_o=R_e\,\|\,R_L=\frac{(50.75\ \Omega)(500\ \Omega)}{550.75\ \Omega}=46.1\ \Omega .
$$

The results are $R_i=105.7\ \mathrm{k\Omega}$, $v_o/v_s=0.908$ and $R_o=46.1\ \Omega$. The follower transforms impedances by $(\beta_0+1)$ in both directions: the 500-Ω load appears as 100.5 kΩ at the base, and the 10.2-kΩ base-side resistance appears as about 51 Ω at the emitter.
