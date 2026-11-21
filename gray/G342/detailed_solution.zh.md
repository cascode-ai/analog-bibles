# 详细步骤 - G342

把锁定的环路看作从输入频率到 VCO 控制电压的线性系统。一阶环路对每个频率阶跃的响应都是单一指数，因此输出就是按 $1/K_O$ 缩放的方波调制，其边沿时间常数为 $1/K_v$。依次计算环路常数、稳态电平和边沿形状，最后检查环路保持锁定。

### 第 1 步 — 环路常数

以 rad/s 表示频率，VCO 增益为

$$
K_O=0.93\,\omega_{osc}=0.93\,(2\pi\times2000\ \mathrm{rad/s})\ \mathrm{V^{-1}}=1.169\times10^4\ \mathrm{rad/(V\cdot s)},
$$

环路增益常数为

$$
K_v=AK_DK_O=(1)(2.55\ \mathrm{V/rad})(1.169\times10^4\ \mathrm{rad/(V\cdot s)})=2.98\times10^4\ \mathrm{s^{-1}} .
$$

### 第 2 步 — 传递函数与阶跃响应

忽略和频项后，鉴相器给出 $V_o=AK_D(\theta_i-\theta_o)$；以偏移量形式表示，VCO 相位为 $\theta_o=(\omega_{osc}+K_OV_o)/s$。用输入频率偏移 $\Delta\omega_i=\omega_i-\omega_{osc}$ 表示：

$$
V_o=AK_D\,\frac{\Delta\omega_i-K_OV_o}{s}
\quad\Longrightarrow\quad
\frac{V_o}{\Delta\omega_i}=\frac{1}{K_O}\,\frac{K_v}{s+K_v} .
$$

因此输入频率的一个阶跃使 $V_o$ 以指数方式趋向 $\Delta\omega_i/K_O$，时间常数为

$$
\tau=\frac{1}{K_v}=\frac{1}{2.98\times10^4\ \mathrm{s^{-1}}}=33.6\ \mu\mathrm s .
$$

### 第 3 步 — 稳态输出电平

稳态时 VCO 工作在输入频率上，故 $K_OV_o=\omega_i-\omega_{osc}$。输入相对 2 kHz 中心频率偏移 $\pm50$ Hz：

$$
V_o=\frac{\pm2\pi(50\ \mathrm{Hz})}{1.169\times10^4\ \mathrm{rad/(V\cdot s)}}=\pm26.9\ \mathrm{mV}
\qquad\left(=\pm\frac{50}{0.93\times2000}\ \mathrm V\right).
$$

输入为 2.05 kHz 时输出为 $+26.9$ mV，输入为 1.95 kHz 时输出为 $-26.9$ mV，峰峰值摆幅为 53.8 mV，以 0 V 为中心。

### 第 4 步 — 输出波形

调制为 200 Hz 方波，因此在 5 ms 的周期内每个频率保持 2.5 ms。由于 $2.5\ \mathrm{ms}\approx75\tau$，每次跳变都完全稳定，每个边沿为

$$
V_o(t)=\pm26.9\ \mathrm{mV}\left(1-2e^{-t/\tau}\right),
$$

其中 $t$ 从切换时刻算起。10%–90% 上升时间为 $2.2\tau=74\ \mu$s，经过 $5\tau=0.17$ ms 后输出与终值相差不到 1%，因此解调波形几乎是理想的 200 Hz 方波。

![解调输出：在 +26.9 mV 与 −26.9 mV 之间切换、边沿为快速指数的 200 Hz 方波](/q/G342/solution-waveform.zh.svg)

在放大的时间轴上，每个边沿都是无过冲的单一指数，符合一阶环路的特点：

![放大的上升沿：时间常数 33.6 μs，0.17 ms 后稳定](/q/G342/solution-edge.zh.svg)

### 第 5 步 — 环路保持锁定

使 VCO 保持在 $\pm50$ Hz 偏移所需的稳态相位误差为

$$
\theta_e=\frac{V_o}{AK_D}=\frac{\Delta\omega_i}{K_v}=\frac{2\pi(50\ \mathrm{Hz})}{2.98\times10^4\ \mathrm{s^{-1}}}=0.011\ \mathrm{rad},
$$

远低于鉴相器的限幅。等价地，锁定范围（lock range）$\pm(\pi/2)K_v=\pm4.68\times10^4$ rad/s（$\approx\pm7.5$ kHz）远大于 $\pm50$ Hz 的频偏，因此上面使用的线性模型在整个过程中都成立。
