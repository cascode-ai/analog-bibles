# Detailed solution - A235

With $R_L$ removed, this is a common-source stage with a current-source load. Write its gain, output resistance and output pole in terms of $g_m$ and $g_{ds}$, then insert the current scaling at fixed geometry: $g_m\propto\sqrt{I_D}$, $g_{ds}=\lambda I_D$.

### Step 1 — Small-signal quantities

M1 converts $v_{in}$ into the current $g_{m1}v_{in}$. M2 has its gate at the fixed $V_{GG2}$, so it contributes only $r_{ds2}$. The output node therefore sees $r_{ds1}\parallel r_{ds2}$:

$$
R_{out}=\frac{1}{g_{ds1}+g_{ds2}},\qquad A_v=-\frac{g_{m1}}{g_{ds1}+g_{ds2}} .
$$

The output is the only high-resistance node, and its capacitance is $C_L$ plus the device capacitances there, so the dominant pole is

$$
|p_1|=\frac{g_{ds1}+g_{ds2}}{C_L+C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}} .
$$

(Strictly $C_{gd1}$ is multiplied by the Miller effect when the source driving $v_{in}$ has resistance; with an ideal driver the output pole above applies.)

### Step 2 — Current dependence

In strong-inversion saturation, both devices carry $I_D$:

$$
g_{m1}=\sqrt{2K'_N\frac{W_1}{L_1}I_D}\propto I_D^{1/2},\qquad g_{ds1}+g_{ds2}=(\lambda_N+\lambda_P)I_D\propto I_D .
$$

### Step 3 — Scaling laws

$$
A_v=-\frac{\sqrt{2K'_N(W_1/L_1)I_D}}{(\lambda_N+\lambda_P)I_D}
=-\frac{2}{\lambda_N+\lambda_P}\sqrt{\frac{K'_NW_1}{2I_DL_1}}\ \propto\ I_D^{-1/2},
$$

$$
R_{out}=\frac{1}{(\lambda_N+\lambda_P)I_D}\ \propto\ I_D^{-1},\qquad
|p_1|=\frac{(\lambda_N+\lambda_P)I_D}{C_{out}}\ \propto\ I_D ,
$$

with $C_{out}$ the fixed total output capacitance. Increasing the current lowers the gain and raises the bandwidth. This depends on removing $R_L$: if a finite $R_L$ dominated the output conductance, the gain would instead rise as $\sqrt{I_D}$ and the pole would become nearly independent of current.
