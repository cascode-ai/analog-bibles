# 详细步骤 - G339

用线性相位域模块描述锁定后的环路：鉴相器输出 $V_d=K_D(\theta_i-\theta_o)$，VCO 的频率偏移为 $K_OV_o$，故其相位为 $\theta_o=K_OV_o/s$。先在无滤波器、再在单极点滤波器两种情况下写出从输入频率 $\omega_i$ 到 VCO 控制电压 $V_o$ 的闭环传递函数，并使二阶分母对应的极点位于 45° 射线上。

### 第 1 步 — 一阶环路及其带宽

无环路滤波器且无其他增益（$A=1$）时，控制电压等于鉴相器输出，$V_o=K_D(\theta_i-\theta_o)$。由 $\theta_i=\omega_i/s$、$\theta_o=K_OV_o/s$：

$$
V_o=K_D\,\frac{\omega_i-K_OV_o}{s}
\quad\Longrightarrow\quad
\frac{V_o}{\omega_i}=\frac{1}{K_O}\,\frac{K_v}{s+K_v},\qquad K_v=K_OK_DA .
$$

响应为一阶，只有一个位于 $s=-K_v$ 的极点，因此环路带宽为 $K_v$：

$$
K_v=(10^3\ \mathrm{rad/(V\cdot s)})(1\ \mathrm{V/rad})(1)=1000\ \mathrm{s^{-1}}
\quad(1000\ \mathrm{rad/s},\ \approx159\ \mathrm{Hz}).
$$

$10^5$ rad/s 的中心频率决定环路工作点附近 VCO 的自由振荡频率（free-running frequency），但不进入环路的小信号动态。

### 第 2 步 — 加入单极点滤波器的二阶环路

在鉴相器与 VCO 之间插入 $F(s)=1/(1+s/\omega_1)$，前向通路乘以 $F(s)$：

$$
V_o=F(s)\,K_D\,\frac{\omega_i-K_OV_o}{s}
\quad\Longrightarrow\quad
\frac{V_o}{\omega_i}=\frac{1}{K_O}\,\frac{K_vF(s)}{s+K_vF(s)}
=\frac{1}{K_O}\,\frac{1}{1+\dfrac{s}{K_v}+\dfrac{s^2}{\omega_1K_v}} .
$$

将分母与标准形式 $1+2\zeta s/\omega_n+s^2/\omega_n^2$ 比较：

$$
\omega_n=\sqrt{K_v\omega_1},\qquad
\frac{2\zeta}{\omega_n}=\frac{1}{K_v}\ \Longrightarrow\ \zeta=\frac12\sqrt{\frac{\omega_1}{K_v}} .
$$

### 第 3 步 — 极点位于 45° 射线上

复极点 $s=-\zeta\omega_n\pm j\omega_n\sqrt{1-\zeta^2}$ 位于与负实轴夹角为 $\cos^{-1}\zeta$ 的射线上。夹角为 45° 要求 $\zeta=\cos45°=1/\sqrt2$：

$$
\frac12\sqrt{\frac{\omega_1}{K_v}}=\frac{1}{\sqrt2}
\quad\Longrightarrow\quad
\omega_1=2K_v=2000\ \mathrm{rad/s}.
$$

于是 $\omega_n=\sqrt{(1000\ \mathrm{s^{-1}})(2000\ \mathrm{s^{-1}})}=1414$ rad/s，闭环极点为

$$
s=-\frac{\omega_n}{\sqrt2}\pm j\frac{\omega_n}{\sqrt2}=-1000\pm j1000\ \mathrm{rad/s}.
$$

该滤波器极点可用 $RC=1/\omega_1=0.5$ ms 的 RC 低通网络实现。$\zeta=1/\sqrt2$ 时闭环响应为最大平坦响应，其 $-3$ dB 带宽等于 $\omega_n=1414$ rad/s。
