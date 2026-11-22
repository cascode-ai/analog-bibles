# Detailed solution - G238

The circuit is a current mirror: $M_1$ converts $i_i$ into a gate voltage, and $M_2$ converts that voltage back into $i_o$. Every node except the common gate node is at ac ground, so the circuit has a single pole set by that node.

### Step 1 — Transconductances and low-frequency gain

In saturation, $I_D=\tfrac12\mu C_{ox}(W/L)V_{ov}^2$ gives $g_m=\partial I_D/\partial V_{GS}=2I_D/V_{ov}$:

$$
g_{m1}=\frac{2(1\ \mathrm{mA})}{0.3\ \mathrm V}=6.67\ \mathrm{mA/V},\qquad
g_{m2}=\frac{2(4\ \mathrm{mA})}{0.3\ \mathrm V}=26.7\ \mathrm{mA/V}.
$$

The diode-connected $M_1$ has gate and drain joined, so the input current sets $v_{gs}=i_i/g_{m1}$ (the resistance at the node is $1/g_{m1}=150\ \Omega$). $M_2$ shares this $v_{gs}$ and delivers into a short circuit, so with $r_o=\infty$

$$
\frac{i_o}{i_i}=\frac{g_{m2}v_{gs}}{g_{m1}v_{gs}}=\frac{g_{m2}}{g_{m1}}=4,
$$

which equals the ratio of the aspect ratios, as expected for equal overdrive.

### Step 2 — Capacitances at the gate node

Classify each capacitor by its terminals (sources, bodies and the drain of $M_2$ are at ac ground):

- $C_{gs1}$, $C_{db1}$, $C_{gs2}$, $C_{gd2}$: from the gate node to ac ground.
- $C_{gd1}$: across the diode connection, both ends on the same node — no effect.
- $C_{sb1}$, $C_{sb2}$, $C_{db2}$: both ends at ac ground — no effect.

$$
C_T=C_{gs1}+C_{db1}+C_{gs2}+C_{gd2}=0.2+0.09+0.8+0.2=1.29\ \mathrm{pF}.
$$

$C_{gd2}$ is not Miller-multiplied because the drain of $M_2$ is held at ac ground.

### Step 3 — −3-dB frequency

The only capacitor resistance is $1/g_{m1}$, so the zero-value sum is a single term:

$$
T_0=\frac{C_T}{g_{m1}}=(150\ \Omega)(1.29\ \mathrm{pF})=0.194\ \mathrm{ns},\qquad
f_{-3\mathrm{dB}}=\frac1{2\pi T_0}=\frac{5.17\times10^{9}\ \mathrm{rad/s}}{2\pi}=823\ \mathrm{MHz}.
$$

Here the circuit really has one pole, so the estimate is exact. The transfer function is

$$
\frac{i_o}{i_i}=4\,\frac{1-sC_{gd2}/g_{m2}}{1+sT_0},
$$

whose right-half-plane zero at $g_{m2}/C_{gd2}=1.33\times10^{11}$ rad/s (21 GHz) lies far above the pole and does not affect the bandwidth.

### Step 4 — Rise time

For a single pole the 10–90% rise time of the step response is $\tau\ln9$:

$$
t_r=2.2\,T_0=2.2(0.194\ \mathrm{ns})=0.43\ \mathrm{ns}.
$$
