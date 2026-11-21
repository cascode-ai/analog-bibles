# Detailed solution - A168

Repeat the series-resistance argument, but let the saturated load M3 carry the $(1+\lambda v_{SD})$ factor. M1 and M2 stay in deep nonsaturation, where the linear model has no λ term and their small drain–source voltages would make any such factor ≈ 1, so channel-length modulation enters only through the current set by M3.

### Step 1 — Series current with channel-length modulation

M3's source is at $V_{DD}$ and its drain at $v_{OUT}$, so $v_{SD3}=V_{DD}-v_{OUT}$, and in saturation

$$
I=\frac{\beta_3}2(V_{DD}-V_{GG3}-|V_{T3}|)^2\left[1+\lambda_3(V_{DD}-v_{OUT})\right].
$$

The same current flows through M1 and M2.

### Step 2 — Output voltage as before

The linearized nonsaturation currents are unchanged, $I\cong\beta_1(V_{DD}-V_{T1})v_{DS1}$ and $I\cong\beta_2(V_{GG2}-V_{T2})v_{DS2}$, so

$$
v_{OUT}=v_{DS1}+v_{DS2}=I\left[\frac1{\beta_1(V_{DD}-V_{T1})}+\frac1{\beta_2(V_{GG2}-V_{T2})}\right].
$$

With $\beta_1=\beta_2$ and $I$ from Step 1:

$$
v_{OUT}(\min)=\frac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\frac1{V_{GG2}-V_{T2}}+\frac1{V_{DD}-V_{T1}}\right)\left[1+\lambda_3\bigl(V_{DD}-v_{OUT}(\min)\bigr)\right].
$$

### Step 3 — Solving for $v_{OUT}(\min)$

Call $A$ the λ = 0 result, $A=\frac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\frac1{V_{GG2}-V_{T2}}+\frac1{V_{DD}-V_{T1}}\right)$. The equation $v_{OUT}=A[1+\lambda_3(V_{DD}-v_{OUT})]$ is linear in $v_{OUT}$:

$$
v_{OUT}(\min)=\frac{A(1+\lambda_3V_{DD})}{1+\lambda_3A}\approx A(1+\lambda_3V_{DD}),
$$

the approximation holding because $v_{OUT}(\min)=A$ is small, so $\lambda_3A\ll1$ and nearly all of $V_{DD}$ appears across M3.

### Step 4 — Effect

Channel-length modulation raises M3's current, and therefore $v_{OUT}(\min)$, by the factor $1+\lambda_3V_{DD}$. For example, with $\lambda_3=0.05\ \mathrm{V^{-1}}$ and $V_{DD}=5$ V the minimum output voltage rises by a factor of 1.25.
