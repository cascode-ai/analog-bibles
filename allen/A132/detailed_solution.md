# Detailed solution - A132

Both transistors are driven by $v_{in}$ and both are saturated, so each acts as a transconductor feeding the output, with its output conductance in parallel. KCL at the output gives the gain; substituting the square-law $g_m$ and $g_{ds}=\lambda I_D$ gives the stated closed form. With an ideal source at the input, the output node alone sets a single pole.

### Step 1 — Small-signal model and KCL

M1 (n-channel, source grounded) carries the drain current $g_{m1}v_{gs1}=g_{m1}v_{in}$ from the output to ground. M2 (p-channel, source at $V_{DD}$, ac ground) has $v_{sg2}=-v_{in}$ and delivers $g_{m2}v_{sg2}=-g_{m2}v_{in}$ into the output, i.e. it also removes $g_{m2}v_{in}$. The drain resistances $r_{ds1}$, $r_{ds2}$ connect the output to ac ground. KCL at the output:

$$
(g_{m1}+g_{m2})v_{in}+(g_{ds1}+g_{ds2})v_{out}=0
\quad\Rightarrow\quad
\frac{v_{out}}{v_{in}}=-\frac{g_{m1}+g_{m2}}{g_{ds1}+g_{ds2}} .
$$

### Step 2 — Express in device parameters

Both devices carry the same $I_D$. In saturation $g_{mi}=\sqrt{2K'_i(W_i/L_i)I_D}$ and, from the $(1+\lambda v_{DS})$ factor, $g_{dsi}\approx\lambda_iI_D$. Substituting,

$$
\frac{v_{out}}{v_{in}}=-\frac{\sqrt{2I_D}\left[\sqrt{K'_N(W_1/L_1)}+\sqrt{K'_P(W_2/L_2)}\right]}{(\lambda_1+\lambda_2)I_D}
=-\sqrt{\frac{2}{I_D}}\left[\frac{\sqrt{K'_N(W_1/L_1)}+\sqrt{K'_P(W_2/L_2)}}{\lambda_1+\lambda_2}\right],
$$

which is the required expression. The gain falls as $1/\sqrt{I_D}$.

### Step 3 — Numerical gain

With $W/L=5$ and $I_D=200$ µA:

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(5)(200\ \mu\mathrm A)}=469.0\ \mu\mathrm S,\qquad
g_{m2}=\sqrt{2(50\ \mu\mathrm{A/V^2})(5)(200\ \mu\mathrm A)}=316.2\ \mu\mathrm S,
$$

$$
g_{ds1}+g_{ds2}=(0.04+0.05\ \mathrm{V^{-1}})(200\ \mu\mathrm A)=18\ \mu\mathrm S,
\qquad
A_v=-\frac{785.2\ \mu\mathrm S}{18\ \mu\mathrm S}=-43.6\ \mathrm{V/V}.
$$

The output resistance is $1/(18\ \mu\mathrm S)=55.6$ kΩ.

### Step 4 — Output capacitance and −3 dB frequency

The input is ideally driven, so $C_{gd1}$ and $C_{gd2}$ (gates at the input, drains at the output) count as capacitance from the output to an ac-fixed node, together with $C_{bd1}$, $C_{bd2}$ and $C_L$:

$$
C_{out}=C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}+C_L=5+5+50+50\ \mathrm{fF}+10\ \mathrm{pF}=10.11\ \mathrm{pF}.
$$

KCL at the output with these capacitors gives

$$
\frac{v_{out}}{v_{in}}=-\frac{(g_{m1}+g_{m2})-s(C_{gd1}+C_{gd2})}{g_{ds1}+g_{ds2}+sC_{out}},
\qquad
f_{-3\,\mathrm{dB}}=\frac{g_{ds1}+g_{ds2}}{2\pi C_{out}}=\frac{18\ \mu\mathrm S}{2\pi(10.11\ \mathrm{pF})}=283\ \mathrm{kHz}.
$$

The right-half-plane zero at $(g_{m1}+g_{m2})/[2\pi(C_{gd1}+C_{gd2})]=12.5$ GHz is negligible. The gain–bandwidth product is $43.6\times283\ \mathrm{kHz}\approx12.4$ MHz, i.e. $(g_{m1}+g_{m2})/(2\pi C_{out})$.
