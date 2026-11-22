# Detailed solution - A254

Express the phase margin at $\omega=GB$ as $180°$ minus the lag of every pole and of the right-half-plane zero, set it to 45°, and solve for $|p_2|$. Then convert to absolute units.

### Step 1 — Phase-margin equation

With $F=1$, the singularities contribute at $\omega=GB$:

- dominant pole: $\arctan(GB/|p_1|)=\arctan A_v(0)\approx90°$ (large dc gain);
- pole at $-3GB$: $\arctan(1/3)=18.43°$ of lag;
- RHP zero at $20GB$: the factor $1-s/z$ has phase $-\arctan(\omega/z)$, so it adds $\arctan(1/20)=2.86°$ of lag;
- second pole: $\arctan(GB/|p_2|)$ of lag.

$$
\Phi_M=180°-90°-\arctan\frac{GB}{|p_2|}-\arctan\frac13-\arctan\frac1{20}.
$$

### Step 2 — Solve for $p_2$

Setting $\Phi_M=45°$:

$$
\arctan\frac{GB}{|p_2|}=90°-45°-18.43°-2.86°=23.70°,
$$

$$
\frac{GB}{|p_2|}=\tan23.70°=0.439\quad\Rightarrow\quad|p_2|=2.28\,GB .
$$

### Step 3 — Absolute location

With $GB=1$ MHz, i.e. $2\pi\times10^6$ rad/s,

$$
p_2=-2.28\,(2\pi\times10^6\ \mathrm{rad/s})=-1.43\times10^{7}\ \mathrm{rad/s}\quad(\approx-2.28\ \mathrm{MHz}).
$$

Since a higher $|p_2|$ only increases the margin, this is the minimum distance for 45°. Without the zero the same calculation gives exactly $2.0\,GB$; the zero's 2.9° of lag pushes $p_2$ out by about 14%.
