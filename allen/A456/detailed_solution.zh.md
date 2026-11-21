# 详细步骤 - A456

直流增益足够大时，误差由运放的有限带宽决定。由反馈系数求出电容反相级的闭环极点，写出阶跃响应，再求剩余误差降到 0.5 LSB 以下所需的时间。

### 第 1 步 — 闭环传递函数

对反相输入端应用电荷守恒（两个电容初始都已放电，$v_-=-v_{out}/A_{vd}(s)$），与静态分析相同，只是用 $A_{vd}(s)$ 代替：

$$
\frac{v_{out}}{-V_{REF}}=-\frac{C}{C}\cdot\frac{A_{vd}(s)\beta}{1+A_{vd}(s)\beta},\qquad\beta=\frac{C}{C+C}=\frac12 .
$$

代入 $A_{vd}(s)=GB/(s+\omega_a)$：

$$
\frac{A_{vd}\beta}{1+A_{vd}\beta}=\frac{\beta\,GB}{s+\omega_a+\beta\,GB}\approx\frac{\omega_H}{s+\omega_H},\qquad
\omega_H=\omega_a+\beta\,GB\approx\beta\,GB,
$$

因为 $A_{vd}(0)\gg1$ 意味着 $\omega_a=GB/A_{vd}(0)\ll\beta\,GB$。

### 第 2 步 — 极点数值与阶跃响应

$GB=1$ MHz 是以赫兹表示的频率，因此 $GB=2\pi\times10^6$ rad/s，且

$$
\omega_H=\tfrac12\left(2\pi\times10^6\ \mathrm{rad/s}\right)=3.142\times10^6\ \mathrm{rad/s},\qquad \tau=\frac1{\omega_H}=0.318\ \mu\mathrm s .
$$

$t=0$ 时施加阶跃，输出按下式趋向终值 $V_{REF}$（满量程输出）：

$$
v_{out}(t)=V_{REF}\left(1-e^{-\omega_Ht}\right).
$$

### 第 3 步 — 建立到 ±0.5 LSB

对 8 位，$0.5\,\mathrm{LSB}=V_{REF}/2^9$。剩余误差 $V_{REF}e^{-\omega_HT}$ 不得超过它：

$$
e^{-\omega_HT}\le2^{-9}
\;\Longrightarrow\;
T=\frac{9\ln2}{\omega_H}=\frac{6.238}{3.142\times10^6\ \mathrm{s^{-1}}}=1.99\ \mu\mathrm s .
$$

最小转换时间约为 $2\ \mu$s，即闭环时间常数的 $6.24$ 倍。
