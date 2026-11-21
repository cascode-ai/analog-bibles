# Detailed solution - A233

Find the output resistance as the parallel combination of the cascoded n-channel branch and the simple p-channel load, decide which one dominates, and then insert the current scaling at fixed geometry: $g_m\propto\sqrt{I_D}$ and $g_{ds}=\lambda I_D\propto I_D$.

### Step 1 — Output resistance

Looking down into the drain of the cascode M2, whose gate is at ac ground and whose source sees $r_{ds1}$, the resistance is

$$
R_N=r_{ds1}+r_{ds2}+g_{m2}r_{ds1}r_{ds2}\approx g_{m2}r_{ds1}r_{ds2}.
$$

Looking up into the drain of the current-source load M3 (gate at a fixed voltage) gives $r_{ds3}$. The output resistance is

$$
R_{out}=r_{ds3}\parallel R_N .
$$

The ratio of the two branch resistances is

$$
\frac{R_N}{r_{ds3}}\approx g_{m2}r_{ds2}\,\frac{r_{ds1}}{r_{ds3}}=g_{m2}r_{ds2}\,\frac{\lambda_P}{\lambda_N}\gg1,
$$

because the intrinsic gain $g_{m2}r_{ds2}$ is large (typically of order 100) and $\lambda_P$, $\lambda_N$ are comparable (with the book's standard data $\lambda_P=0.05\ \mathrm{V^{-1}}>\lambda_N=0.04\ \mathrm{V^{-1}}$). Hence the load sets the output resistance:

$$
R_{out}\approx r_{ds3}=\frac{1}{\lambda_PI_D}.
$$

### Step 2 — Voltage gain

The cascode passes essentially all of M1's small-signal current to the output, $G_m=g_{m1}(g_{m2}+g_{ds2})/(g_{m2}+g_{ds1}+g_{ds2})\approx g_{m1}$, so

$$
A_v=-G_mR_{out}\approx-g_{m1}\big(r_{ds3}\parallel g_{m2}r_{ds1}r_{ds2}\big)\approx-\frac{g_{m1}}{g_{ds3}}
=-\frac{\sqrt{2K'_N(W_1/L_1)I_D}}{\lambda_PI_D}=-\sqrt{\frac{2K'_NW_1}{L_1I_D\lambda_P^2}} .
$$

### Step 3 — Dominant pole

The output node combines the largest resistance with the stated load capacitance $C_{out}$, so it gives the dominant pole:

$$
|p_1|\approx\frac{1}{R_{out}C_{out}}=\frac{g_{ds3}}{C_{out}}=\frac{\lambda_PI_D}{C_{out}} .
$$

The cascode node between M1 and M2 sees only about $1/g_{m2}$ and a small capacitance $C_1$, so its pole, $\approx g_{m2}/C_1$, is higher by about $g_{m2}R_{out}C_{out}/C_1\gg1$; it rises as $\sqrt{I_D}$.

### Step 4 — Scaling with $I_D$

$$
|A_v|\propto\frac{I_D^{1/2}}{I_D}=I_D^{-1/2},\qquad R_{out}\propto I_D^{-1},\qquad |p_1|\propto I_D .
$$

Because the simple load limits the output resistance, this cascode stage scales exactly like a current-source-loaded inverter; the cascode only removes $r_{ds1}$ from the output. The cascode-limited scalings ($R_{out}\propto I_D^{-3/2}$, $|A_v|\propto I_D^{-1}$, $|p_1|\propto I_D^{3/2}$) would apply only if $R_N\ll r_{ds3}$, i.e. $\lambda_P<\lambda_N/(g_{m2}r_{ds2})$, which would require a load device far longer than the input devices and does not hold here.
