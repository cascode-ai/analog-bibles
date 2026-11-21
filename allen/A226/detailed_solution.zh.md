# 详细步骤 - A226

计算一个周期内负载的平均功率和每个电源的平均功率，利用每个电源只在各自的半个周期内输出电流这一事实；然后在允许的摆幅范围内使比值最大。

### 第 1 步 — 负载功率

$R_L$ 两端为 $v_{OUT}=V_p\sin\omega t$，

$$
P_{R_L}=\frac1T\int_0^T\frac{V_p^2\sin^2\omega t}{R_L}\,dt=\frac{V_p^2}{2R_L}.
$$

### 第 2 步 — 电源功率

负载电流为 $i_L=(V_p/R_L)\sin\omega t$。在正半周（$0<t<T/2$）上管导通，从 $V_{DD}$ 吸取 $i_L$；另半周它截止。B 类意味着没有静态电流，所以 $V_{DD}$ 在整个周期内的平均电流为

$$
\overline{i_{DD}}=\frac1T\int_0^{T/2}\frac{V_p}{R_L}\sin\omega t\,dt
=\frac{V_p}{R_L}\cdot\frac{1}{T}\cdot\frac{2}{\omega}
=\frac{V_p}{\pi R_L},
$$

其中用到 $\int_0^{T/2}\sin\omega t\,dt=2/\omega$ 和 $\omega T=2\pi$。由对称性，下管在负半周从 $V_{SS}$ 吸取相同的平均电流。电源总功率为

$$
P_{supply}=V_{DD}\frac{V_p}{\pi R_L}+|V_{SS}|\frac{V_p}{\pi R_L}=(V_{DD}-V_{SS})\frac{V_p}{\pi R_L}.
$$

### 第 3 步 — 效率

$$
\eta=\frac{P_{R_L}}{P_{supply}}=\frac{V_p^2/(2R_L)}{(V_{DD}-V_{SS})V_p/(\pi R_L)}=\frac{\pi}{2}\,\frac{V_p}{V_{DD}-V_{SS}} .
$$

与 A 类（class A）不同，电源功率正比于 $V_p$ 而不是固定值，因此 $\eta$ 随信号幅度线性增大。

### 第 4 步 — 最大效率

输出不能超出电源轨，所以在 $V_{SS}=-V_{DD}$ 时最大幅度为 $V_p=(V_{DD}-V_{SS})/2=V_{DD}$。代入得

$$
\eta_{max}=\frac{\pi}{2}\cdot\frac12=\frac{\pi}{4}=0.785=78.5\% .
$$

实际输出器件需要一定的电压余量（阈值电压和饱和电压），所以实际的 B 类级低于这一理想上限。
