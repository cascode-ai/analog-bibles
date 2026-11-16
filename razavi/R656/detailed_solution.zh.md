# 详细步骤 - R656

**思路。** I 型 PLL 的闭环响应是二阶低通函数 $\omega_n^2/(s^2 + 2\zeta\omega_ns + \omega_n^2)$。由给定数值算出 $\omega_n$ 和 $\zeta$（$K_{VCO}$ 以 rad/s/V 为单位），然后写出二阶阶跃响应，并求出其衰减时间常数、振铃频率、过冲和建立时间（settling time）。

### 第 1 步 — 闭环传递函数

由开环增益 $H_{open}(s) = K_{PD}K_{VCO}/[s\,(1 + s/\omega_{LPF})]$ 和单位反馈，得

$$H(s) = \frac{\Phi_{out}}{\Phi_{in}} = \frac{\omega_{LPF}K_{PD}K_{VCO}}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}} = \frac{\omega_n^2}{s^2 + 2\zeta\omega_ns + \omega_n^2},$$

其中

$$\omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}}, \qquad \zeta = \frac{\omega_{LPF}}{2\omega_n} = \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}} .$$

同一个 $H(s)$ 也描述了输出**频率**与输入频率之间的关系（两边都有 $\Omega = s\Phi$），因此输入端的相位阶跃和频率阶跃给出形状相同的响应。

### 第 2 步 — 将给定数值换算为一致的单位

相位域模型要求 $K_{VCO}$ 以 rad/s/V 为单位：

$$K_{VCO} = 2\pi\times(100\ \mathrm{MHz/V}) = 2\pi\times10^8\ \mathrm{rad/(s\cdot V)} = 6.283\times10^8\ \mathrm{rad/(s\cdot V)},$$

$$K_{PD}K_{VCO} = (1\ \mathrm{V/rad})(2\pi\times10^8\ \mathrm{rad/(s\cdot V)}) = 2\pi\times10^8\ \mathrm{s^{-1}} = 6.283\times10^8\ \mathrm{s^{-1}},$$

$$\omega_{LPF} = 2\pi\times(1\ \mathrm{MHz}) = 6.283\times10^6\ \mathrm{rad/s}.$$

### 第 3 步 — 自然频率（natural frequency）与阻尼比（damping ratio）

$$
\begin{aligned}
\omega_n &= \sqrt{\omega_{LPF}K_{PD}K_{VCO}} = \sqrt{(2\pi\times10^6)(2\pi\times10^8)}\ \mathrm{rad/s}\\
&= 2\pi\sqrt{10^{14}}\ \mathrm{rad/s} = 2\pi\times10^7\ \mathrm{rad/s} = 6.283\times10^7\ \mathrm{rad/s}\quad(f_n = 10\ \mathrm{MHz}).
\end{aligned}
$$

$$
\zeta = \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}} = \frac12\sqrt{\frac{2\pi\times10^6}{2\pi\times10^8}} = \frac12\sqrt{0.01} = \frac12(0.1) = 0.05 .
$$

**$\zeta = 0.05$：严重欠阻尼。** 环路增益（loop gain）$K_{PD}K_{VCO}$ 是 $\omega_{LPF}$ 的 100 倍，因此单位增益频率（unity-gain frequency）远高于滤波器极点；在那里，滤波器在 VCO 的 90° 之外又引入了将近 90° 的相移。

**相位裕度（验证）。** 令 $x = \omega_u/\omega_{LPF}$，并利用 $K_{PD}K_{VCO}/\omega_{LPF} = 100$，由 $|H_{open}(j\omega_u)| = 1$ 得

$$
\begin{aligned}
\frac{100}{x\sqrt{1 + x^2}} &= 1 \;\Rightarrow\; x^4 + x^2 - 10^4 = 0\\
x^2 &= \frac{-1 + \sqrt{1 + 4\times10^4}}{2} = 99.50 \;\Rightarrow\; x = 9.975 ,
\end{aligned}
$$

$$PM = 180^\circ - 90^\circ - \tan^{-1}(9.975) = 90^\circ - 84.28^\circ = 5.7^\circ,$$

这与极小的阻尼一致。

### 第 4 步 — 推导时域参数

**衰减速率**（极点的实部）：

$$\zeta\omega_n = 0.05\times6.283\times10^7\ \mathrm{s^{-1}} = 3.14\times10^6\ \mathrm{s^{-1}} \;\left(=\frac{\omega_{LPF}}{2}\right), \qquad \tau = \frac{1}{\zeta\omega_n} = \frac{2}{\omega_{LPF}} = \frac{2}{6.283\times10^6\ \mathrm{rad/s}} = 318\ \mathrm{ns}.$$

**振铃频率：**

$$
\begin{aligned}
\omega_d &= \omega_n\sqrt{1 - \zeta^2} = (6.283\times10^7)\sqrt{1 - 0.0025}\ \mathrm{rad/s}\\
&= (6.283\times10^7)(0.99875)\ \mathrm{rad/s} = 6.275\times10^7\ \mathrm{rad/s},
\end{aligned}
$$

即 $f_d = \omega_d/2\pi = 9.99$ MHz，周期为 $1/f_d = 100$ ns。

**相角。** $\theta = \cos^{-1}\zeta = \cos^{-1}(0.05) = 87.13^\circ$，且 $1/\sqrt{1 - \zeta^2} = 1/0.99875 = 1.0013$。

### 第 5 步 — 阶跃响应

欠阻尼二阶系统的单位阶跃响应为

$$y(t) = \left[1 - \frac{1}{\sqrt{1 - \zeta^2}}\,e^{-\zeta\omega_nt}\sin\!\left(\omega_dt + \theta\right)\right]u(t), \qquad \theta = \cos^{-1}\zeta ,$$

且 $y(0) = 1 - \sin\theta/\sqrt{1 - \zeta^2} = 0$。对于在 $t = 0$ 时刻施加的输入频率阶跃 $\Delta\omega$，输出频率的变化为 $\Delta\omega\,y(t)$；代入数值，并利用 $\sin(\alpha + 87.13^\circ) = \cos(\alpha - 2.87^\circ)$，得

$$\Delta\omega_{out}(t) \approx \Delta\omega\left[1 - 1.0013\,e^{-t/318\ \mathrm{ns}}\cos\!\left(2\pi\cdot9.99\ \mathrm{MHz}\cdot t - 2.9^\circ\right)\right]u(t).$$

输入**相位**阶跃 $\Delta\phi$ 给出 $\phi_{out}(t) = \Delta\phi\,y(t)$，形状相同。VCO 的控制电压跟随 $\Delta\omega_{out}/K_{VCO}$ 变化，并以同样的方式振铃。

### 第 6 步 — 过冲、峰值与建立

**峰值。** 极值出现在 $t_k = k\pi/\omega_d$ 处（每隔 50 ns 一个），且 $y(t_k) = 1 - (-1)^k e^{-k\pi\zeta/\sqrt{1 - \zeta^2}}$。第一个峰值为：

$$
\begin{aligned}
t_p &= \frac{\pi}{\omega_d} = \frac{\pi}{6.275\times10^7\ \mathrm{rad/s}} = 50.1\ \mathrm{ns},\\
M_p &= e^{-\pi\zeta/\sqrt{1 - \zeta^2}} = e^{-\pi(0.05)/0.99875} = e^{-0.1573} = 0.854 ,
\end{aligned}
$$

即过冲为阶跃幅度的 **85 %**。

| $t$ (ns) | 0 | 25 | 50 | 100 | 150 | 200 | 250 | 300 | 500 | 1000 | 1500 |
|---|---|---|---|---|---|---|---|---|---|---|---|
| $y(t)$ | 0 | 0.95 | 1.85 | 0.27 | 1.62 | 0.47 | 1.46 | 0.61 | 0.79 | 0.96 | 0.99 |

（500、1000 和 1500 ns 处的数值是振铃波形的采样值，而不是包络值。）

**建立。** 一旦包络 $1.0013\,e^{-t/\tau}$ 降到 $\epsilon$ 以下，输出就保持在 $\pm\epsilon$ 以内：

$$t_s = \tau\ln\frac{1.0013}{\epsilon}.$$

- 5 % 建立：$t_s = (318\ \mathrm{ns})\ln(20.03) = (318\ \mathrm{ns})(3.00) = 0.95\ \mu\mathrm{s}$。
- 1 % 建立：$t_s = (318\ \mathrm{ns})\ln(100.1) = (318\ \mathrm{ns})(4.61) = 1.47\ \mu\mathrm{s}$。

振铃周期为 100 ns，因此输出进入 1 % 以内之前大约要振铃 15 个周期。输出约在 25 ns 时到达目标值，在 50 ns 时达到阶跃幅度 1.85 倍的峰值，在 100 ns 时摆回 0.27，此后以约 10 MHz 的频率持续振铃，其包络每 318 ns 缩小 $e$ 倍。若要把 $\zeta$ 提高到约 0.7，需要 $\omega_{LPF}/(K_{PD}K_{VCO}) = 4\zeta^2 \approx 2$，即滤波器带宽约宽 200 倍（纹波更大），或环路增益约小 200 倍。

### 结果

$$\omega_n = 2\pi\times10\ \mathrm{MHz} = 6.28\times10^7\ \mathrm{rad/s}, \qquad \zeta = 0.05,$$

$$\Delta\omega_{out}(t) = \Delta\omega\left[1 - \frac{1}{\sqrt{1 - \zeta^2}}e^{-\zeta\omega_nt}\sin\!\left(\omega_n\sqrt{1 - \zeta^2}\,t + \cos^{-1}\zeta\right)\right]u(t) \approx \Delta\omega\left[1 - 1.001\,e^{-t/318\ \mathrm{ns}}\cos(2\pi\cdot9.99\ \mathrm{MHz}\cdot t - 2.9^\circ)\right]$$

（输入相位阶跃时形状相同）。该响应为严重欠阻尼：衰减时间常数 $2/\omega_{LPF} = 318$ ns，振铃频率 9.99 MHz（周期 100 ns），第一个峰值出现在 50 ns 处，过冲约 85 %；约 0.95 µs 后误差进入 5 % 以内，约 1.47 µs 后进入 1 % 以内（约振铃 15 个周期）。相位裕度只有约 5.7°。

**常见错误。** 取 $K_{VCO} = 10^8$ rad/s/V，即忘记了 100 MHz/V 中的 $2\pi$。这会得到 $\omega_n = 2.5\times10^7$ rad/s 和 $\zeta = 0.126$，两者都是错的。

**常见错误。** 把阻尼公式写反，例如 $\zeta = \frac12\sqrt{K_{PD}K_{VCO}/\omega_{LPF}} = 5$，从而断定响应为过阻尼。由 $2\zeta\omega_n = \omega_{LPF}$ 可知，环路增益**大**，$\zeta$ 反而**小**。

**常见错误。** 把响应描述为时间常数为 $1/\omega_{LPF}$ 或 $1/(K_{PD}K_{VCO})$ 的单一指数函数。由于有滤波器极点，环路是二阶的；而在 $\zeta = 0.05$ 时，其阶跃响应以振铃为主。
