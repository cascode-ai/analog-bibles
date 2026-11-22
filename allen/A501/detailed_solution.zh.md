# 详细步骤 - A501

采样时刻的时间误差 $\Delta t$ 产生的电压误差等于输入斜率乘以 $\Delta t$。最坏情况出现在正弦波过零点，此处斜率最大。要求该误差不超过半个 LSB，求出最大的整数位数。

### 第 1 步 — 最坏情况的抖动误差

对 $v_{in}(t)=V_p\sin\omega t$，斜率在过零点处最大：

$$
\left|\frac{dv_{in}}{dt}\right|_{max}=\omega V_p,\qquad
\Delta V=\omega V_p\,\Delta t .
$$

峰峰值为 $V_{REF}$，故 $V_p=V_{REF}/2$。代入 $\omega=2\pi(1\ \mathrm{MHz})$ 和 $\Delta t=200$ ps：

$$
\Delta V=2\pi(10^{6}\ \mathrm{s^{-1}})(0.5\,V_{REF})(200\times10^{-12}\ \mathrm s)=6.28\times10^{-4}\,V_{REF}.
$$

### 第 2 步 — 半 LSB 要求

取 1 LSB $=V_{REF}/2^N$：

$$
6.28\times10^{-4}\,V_{REF}\le\frac{V_{REF}}{2^{N+1}}
\;\Longrightarrow\;
2^{N+1}\le1592
\;\Longrightarrow\;
N+1\le\log_2 1592=10.64 .
$$

### 第 3 步 — 位数

最大整数为

$$
N=9\ \text{bits}.
$$

核对：9 位时 $\tfrac12$ LSB $=V_{REF}/1024=9.8\times10^{-4}V_{REF}$，大于误差 $6.28\times10^{-4}V_{REF}$；10 位时为 $4.9\times10^{-4}V_{REF}$，小于该误差。
