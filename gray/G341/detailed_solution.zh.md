# 详细步骤 - G341

采用题给的开环判据：鉴相器输出的差频拍频信号经环路滤波器在该拍频处衰减后，必须足以把 VCO 拉到输入频率。由此得到关于 $\Delta\omega=|\omega_i-\omega_{osc}|$ 的隐式不等式，下面用数值方法求解。

### 第 1 步 — 捕获判据

在 VCO 输入端断开环路后，VCO 工作在 $\omega_{osc}$，相位误差随时间线性增长，因此鉴相器输出是频率为差频 $\Delta\omega$、峰值为 $(\pi/2)K_D$ 的拍频信号。环路滤波器对它的增益为 $|F(j\Delta\omega)|$，应在拍频处取值，而不是在直流或载波频率处。VCO 需要控制电压 $\Delta\omega/K_O$ 才能移到输入频率。认为发生捕获的条件是

$$
\frac{\pi}{2}K_D\,|F(j\Delta\omega)|\ \ge\ \frac{\Delta\omega}{K_O}
\quad\Longleftrightarrow\quad
\Delta\omega\ \le\ \frac{\pi}{2}K_OK_D\,|F(j\Delta\omega)|=1570.8\,|F(j\Delta\omega)|\ \mathrm{rad/s},
$$

其中 $K_OK_D=(10^3\ \mathrm{rad/(V\cdot s)})(1\ \mathrm{V/rad})=1000\ \mathrm{s^{-1}}$。

### 第 2 步 — 拍频处的滤波器幅值

对于滞后-超前网络，

$$
|F(j\Delta\omega)|=\frac{\sqrt{1+(\Delta\omega/\omega_2)^2}}{\sqrt{1+(\Delta\omega/\omega_1)^2}},\qquad
\omega_1=7.61\ \mathrm{rad/s},\ \omega_2=116.5\ \mathrm{rad/s}.
$$

它从直流处的 1 下降，趋于高频极限 $\omega_1/\omega_2=0.0653$。判据左边的 $\Delta\omega$ 线性增大，右边则减小，因此只有一个边界值。

### 第 3 步 — 求边界

以 $\Delta\omega=135$ rad/s 为代表进行代入：

$$
|F(j135)|=\frac{\sqrt{1+(135/116.5)^2}}{\sqrt{1+(135/7.61)^2}}=\frac{\sqrt{2.343}}{\sqrt{315.7}}=\frac{1.531}{17.77}=0.0861,
\qquad 1570.8\times0.0861=135.3\ \mathrm{rad/s}.
$$

| $\Delta\omega$ (rad/s) | $\lvert F(j\Delta\omega)\rvert$ | $1570.8\lvert F\rvert$ (rad/s) | 能否捕获 |
|---|---|---|---|
| 50 | 0.164 | 257 | 能 |
| 100 | 0.100 | 157 | 能 |
| 135 | 0.0861 | 135 | 边界 |
| 200 | 0.0755 | 119 | 不能 |

对等式数值求解得 $\Delta\omega=135.2$ rad/s。

### 第 4 步 — 捕获范围

因此捕获范围为

$$
|\omega_i-\omega_{osc}|\lesssim135\ \mathrm{rad/s}\ (\approx\pm21.5\ \mathrm{Hz}),
$$

即在 $10^5$ rad/s 中心频率附近，输入频率约为 99,865 至 100,135 rad/s，总宽度约 270 rad/s。若用高频渐近值 $\omega_1/\omega_2$ 代替 $|F|$，得到较粗略的估计 $1570.8\times0.0653\approx103$ rad/s；由于 116.5 rad/s 处的零点尚未完全起作用，135 rad/s 处的精确幅值更大。

锁定范围（lock range）只由鉴相器的限幅和直流环路增益（$F(0)=1$）决定，为 $\pm(\pi/2)K_OK_D=\pm1571$ rad/s。捕获范围窄十倍以上，原因是滞后滤波器在拍频信号到达 VCO 之前已将其衰减。
