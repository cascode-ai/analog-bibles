# Detailed solution - G241

Write the drain currents of the input pair, find the voltage at node X produced by $i_{d1}$, mirror it through $M_4$, and sum the currents at the shorted output node. The capacitor $C_x$ affects only the mirrored path, which leads to a pole–zero pair.

### Step 1 — Drain currents of the input pair

With a purely differential input, node Y is an ac ground, so $v_{gs1}=v_1=v_{id}/2$ and $v_{gs2}=v_2=-v_{id}/2$. With $g_{m1}=g_{m2}$ and the current directions of [Fig. 2] (both flowing down toward Y):

$$
i_{d1}=g_{m1}\frac{v_{id}}2,\qquad i_{d2}=-g_{m1}\frac{v_{id}}2 .
$$

### Step 2 — Voltage at node X and the mirrored current

$i_{d1}$ leaves node X downward and must be supplied from ac ground through the diode-connected $M_3$ (conductance $g_{m3}$) in parallel with $C_x$. KCL at X:

$$
(0-v_X)(g_{m3}+sC_x)=i_{d1}\;\Rightarrow\;v_X=-\frac{i_{d1}}{g_{m3}+sC_x}.
$$

In [Fig. 2] $v_{gs4}$ is the voltage at X with respect to ac ground, so with $g_{m4}=g_{m3}$:

$$
i_{d4}=g_{m4}v_{gs4}=-i_{d1}\,\frac{g_{m3}}{g_{m3}+sC_x}=-\frac{i_{d1}}{1+sC_x/g_{m3}} .
$$

At low frequency the mirror reproduces $i_{d1}$; at high frequency $C_x$ shunts the signal current away from $1/g_{m3}$ and $v_X\to0$.

### Step 3 — Output current and $G_m(s)$

With $v_o=0$, the currents leaving the output node are $i_{d4}$ (upward), $i_{d2}$ (downward) and $i_o$, so $i_o=-i_{d2}-i_{d4}$:

$$
i_o=\frac{g_{m1}v_{id}}2\left[1+\frac1{1+sC_x/g_{m3}}\right]
=\frac{g_{m1}v_{id}}2\cdot\frac{2+sC_x/g_{m3}}{1+sC_x/g_{m3}} .
$$

$$
G_m(s)=\frac{i_o}{v_{id}}=g_{m1}\,\frac{1+sC_x/(2g_{m3})}{1+sC_x/g_{m3}} .
$$

The denominator vanishes at $p=-g_{m3}/C_x$ and the numerator at $z=-2g_{m3}/C_x$, as required: a left-half-plane pole–zero pair one octave apart, with the pole lower.

### Step 4 — Magnitude and phase

With $\omega_p=g_{m3}/C_x$,

$$
|G_m(j\omega)|=g_{m1}\sqrt{\frac{1+(\omega/2\omega_p)^2}{1+(\omega/\omega_p)^2}},\qquad
\angle G_m(j\omega)=\arctan\frac{\omega}{2\omega_p}-\arctan\frac{\omega}{\omega_p}.
$$

- Magnitude: $g_{m1}$ for $\omega\ll\omega_p$; it falls between $\omega_p$ and $2\omega_p$ and levels off at $g_{m1}/2$ for $\omega\gg2\omega_p$, a total drop of 6 dB. At high frequency only $M_2$'s current reaches the output, because the mirrored half is shorted by $C_x$.
- Phase: 0° at both ends, with a lag in between. Setting the derivative of the phase to zero gives the maximum lag at the geometric mean of pole and zero, $\omega=\sqrt2\,\omega_p$:

$$
\angle G_m=\arctan\frac{1}{\sqrt2}-\arctan\sqrt2=35.3^\circ-54.7^\circ=-19.5^\circ,
$$

where $|G_m|=g_{m1}/\sqrt2$.

Since $C_x\approx C_{gs3}+C_{gs4}=2C_{gs3}$, $\omega_p\approx g_{m3}/(2C_{gs3})\approx\omega_{T3}/2$; the doublet therefore matters only near the transit frequency of the load devices.
