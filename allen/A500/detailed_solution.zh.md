# 详细步骤 - A500

采样保持电路按指数规律建立，因此可用时间结束时的剩余误差是阶跃幅度的一个固定比例。要求满量程阶跃下该误差不超过 $N$ 位转换器的半个 LSB，取满足条件的最大整数 $N$。

### 第 1 步 — 一个采样周期后的剩余建立误差

由题给阶跃响应，时刻 $t$ 的剩余误差为

$$
\varepsilon(t)=V_I-v_{OUT}(t)=V_I\,e^{-t\cdot BW}.
$$

整个采样周期都可用于建立，故 $t=T=1/f_s=1/(1\ \mathrm{MHz})=1\ \mu\mathrm s$，且

$$
t\cdot BW=(1\ \mu\mathrm s)(2\pi\times10^{6}\ \mathrm{rad/s})=2\pi .
$$

最坏情况为满量程阶跃 $V_I=V_{REF}$：

$$
\varepsilon(T)=V_{REF}\,e^{-2\pi}=1.867\times10^{-3}\,V_{REF}.
$$

### 第 2 步 — 半 LSB 要求

满量程为 $V_{REF}$ 的 $N$ 位转换器，一个 LSB 为 $V_{REF}/2^N$，因此建立要求为

$$
V_{REF}\,e^{-2\pi}\le\frac{V_{REF}}{2^{N+1}}
\;\Longrightarrow\;
2^{N+1}\le e^{2\pi}=535.5
\;\Longrightarrow\;
N+1\le\log_2 535.5=9.06 .
$$

### 第 3 步 — 位数

满足条件的最大整数为

$$
N=8\ \text{bits}.
$$

核对：8 位时 $\tfrac12$ LSB $=V_{REF}/512=1.95\times10^{-3}V_{REF}$，略大于剩余误差 $1.87\times10^{-3}V_{REF}$；9 位时 $\tfrac12$ LSB $=0.98\times10^{-3}V_{REF}$，过小。
