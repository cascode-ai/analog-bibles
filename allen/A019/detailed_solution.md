# Detailed solution - A019

Both edge expressions share the factor $2\varepsilon_{Si}(\phi_0-v_D)/[q(N_A+N_D)]$ and differ only in a doping ratio. Factor it out, subtract the edges, and combine the two ratios over a common denominator.

### Step 1 — Factor the common term

Define

$$
k=\left[\frac{2\varepsilon_{Si}(\phi_0-v_D)}{q(N_A+N_D)}\right]^{1/2}.
$$

The given edges then read

$$
x_n=k\sqrt{\frac{N_A}{N_D}},\qquad x_p=-k\sqrt{\frac{N_D}{N_A}} .
$$

### Step 2 — Form the width

Since $x_p<0$, the width is the sum of the two magnitudes:

$$
x_d=x_n-x_p=k\left(\sqrt{\frac{N_A}{N_D}}+\sqrt{\frac{N_D}{N_A}}\right)
=k\,\frac{N_A+N_D}{\sqrt{N_AN_D}} .
$$

### Step 3 — Simplify

Squaring and substituting $k^2$:

$$
x_d^2=\frac{2\varepsilon_{Si}(\phi_0-v_D)}{q(N_A+N_D)}\cdot\frac{(N_A+N_D)^2}{N_AN_D}
=\frac{2\varepsilon_{Si}(N_A+N_D)(\phi_0-v_D)}{qN_AN_D}.
$$

Hence

$$
x_d=\left[\frac{2\varepsilon_{Si}(N_A+N_D)}{qN_AN_D}\right]^{1/2}(\phi_0-v_D)^{1/2}
=\left[\frac{2\varepsilon_{Si}}{q}\left(\frac1{N_A}+\frac1{N_D}\right)(\phi_0-v_D)\right]^{1/2}.
$$

### Step 4 — Checks

The width grows as $\sqrt{\phi_0-v_D}$, so reverse bias ($v_D<0$) widens the depletion region. The second form shows that the lighter doping dominates: for a one-sided junction with $N_D\gg N_A$,

$$
x_d\approx\left[\frac{2\varepsilon_{Si}(\phi_0-v_D)}{qN_A}\right]^{1/2}\approx|x_p| ,
$$

since the depletion region then lies almost entirely on the lightly doped p side.
