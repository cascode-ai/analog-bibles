# Detailed solution - G242

Derive $G_m(s)$ for the mirror-loaded pair with only $C_x$ retained, read off its pole and zero in terms of $g_{m3}/C_x$, and evaluate $g_{m3}$ from the bias.

### Step 1 — Transconductance of the mirror device

For a saturated square-law device $|I_D|=\tfrac12\mu C_{ox}(W/L)|V_{ov}|^2$, so $g_m=\partial|I_D|/\partial|V_{GS}|=2|I_D|/|V_{ov}|$:

$$
g_{m3}=\frac{2(100\ \mu\mathrm A)}{0.2\ \mathrm V}=1\ \mathrm{mA/V},
$$

and $g_{m4}=g_{m3}$ because $M_4$ matches $M_3$ and carries the same current.

### Step 2 — Transfer function with the mirror capacitance

With a differential input the sources of $M_1$, $M_2$ are at ac ground, so $i_{d1}=g_{m1}v_{id}/2$ and $i_{d2}=-g_{m1}v_{id}/2$. The current $i_{d1}$ is supplied through the diode-connected $M_3$ ($1/g_{m3}$) in parallel with $C_x$, so

$$
v_X=-\frac{i_{d1}}{g_{m3}+sC_x},\qquad i_{d4}=g_{m4}v_X=-\frac{i_{d1}}{1+sC_x/g_{m3}}.
$$

With the output at ac ground, $i_o=-i_{d2}-i_{d4}$ (all drain currents taken toward the sources), giving

$$
G_m(s)=\frac{i_o}{v_{id}}=\frac{g_{m1}}2\left[1+\frac1{1+sC_x/g_{m3}}\right]=g_{m1}\,\frac{1+sC_x/(2g_{m3})}{1+sC_x/g_{m3}} .
$$

### Step 3 — Pole and zero

The pole is where the denominator vanishes and the zero where the numerator vanishes:

$$
p=-\frac{g_{m3}}{C_x}=-\frac{1\ \mathrm{mA/V}}{0.1\ \mathrm{pF}}=-1.0\times10^{10}\ \mathrm{rad/s},\qquad |f_p|=\frac{|p|}{2\pi}=1.59\ \mathrm{GHz};
$$

$$
z=-\frac{2g_{m3}}{C_x}=-2.0\times10^{10}\ \mathrm{rad/s},\qquad |f_z|=3.18\ \mathrm{GHz}.
$$

Both lie in the left half plane, one octave apart. Between them $|G_m|$ falls from $g_{m1}$ to $g_{m1}/2$ (the mirrored half of the signal is shunted by $C_x$), and the phase lag reaches at most 19.5° at $\sqrt2\,|p|$, i.e. 2.25 GHz.
