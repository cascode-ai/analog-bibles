# 详细步骤 - A442

每一位对输出的贡献由一个电容比值决定。先求比值误差在输出端对应多少 LSB，找出误差最大的位（MSB），再要求该误差不超过 ±0.5 LSB。

### 第 1 步 — 用电容比值表示输出

转换期间，接到 $V_{REF}$ 的各位电容与阵列其余部分（总电容 $C_{tot}=2C$）对上极板构成电容分压器（capacitive divider），因此

$$
v_{OUT}=V_{REF}\sum_{i=0}^{N-1}b_i\frac{C_i}{C_{tot}},\qquad \frac{C_i}{C_{tot}}=\frac{C/2^{i}}{2C}=2^{-(i+1)}\ \text{(nominal)} .
$$

只有比值起作用：所有电容按同一比例缩放不会改变输出。设第 $i$ 个比值有相对误差 $\Delta C/C$，即 $C_i/C_{tot}=2^{-(i+1)}(1\pm\Delta C/C)$。

### 第 2 步 — 各位引起的输出误差

由 $1\,\mathrm{LSB}=V_{REF}/2^N$，第 $i$ 位为 1 时引入的误差为

$$
\delta v_i=\frac{\Delta C}{C}\,2^{-(i+1)}V_{REF}=\frac{\Delta C}{C}\,2^{N-1-i}\ \mathrm{LSB}.
$$

MSB（$i=0$）的电容占阵列的一半，误差最大：$\delta v_0=2^{N-1}(\Delta C/C)$ LSB。相对精度相同时，LSB 电容只贡献 $(\Delta C/C)$ LSB，所以要求由 MSB 比值决定。

### 第 3 步 — 11 位分辨率的要求

令 MSB 误差保持在 ±0.5 LSB 以内，即积分非线性（integral nonlinearity）不超过 ±0.5 LSB，取 $N=11$：

$$
2^{N-1}\frac{\Delta C}{C}\le\frac12
\quad\Longrightarrow\quad
\frac{\Delta C}{C}\le2^{-N}=\frac{1}{2048}=4.88\times10^{-4}=0.049\% .
$$

### 第 4 步 — 更严格的 DNL 判据

在 MSB 跳变处（码字 $011\ldots1\to100\ldots0$），MSB 比值与其余所有比值之和可能向相反方向偏差，阶跃的误差最多可达 $(2^N-1)(\Delta C/C)$ LSB。若要求这一微分非线性（differential nonlinearity）保持在 ±0.5 LSB 以内，则

$$
\frac{\Delta C}{C}\le\frac{0.5}{2^{11}-1}=2.44\times10^{-4}\approx0.024\%,
$$

而只要求单调性（monotonicity，$\le1$ LSB）时仍得到 0.049%。因此电容比值的相对精度须约为 0.05%（2048 分之一）；若同时施加 0.5 LSB 的 DNL 判据，则为 0.024%。
