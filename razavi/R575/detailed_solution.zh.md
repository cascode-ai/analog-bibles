# 详细步骤 - R575

**思路。** CK 为高电平且 $V_{out}$ 跟踪 $V_{in}$ 时，开关两端的电压非常小，因此 $M_1$ 处于深线性区，相当于一个由过驱动电压（overdrive voltage）$V_{DD} - V_{in} - V_{TH}$ 决定的线性电阻 $R_{on1}$。开关与 $C_H$ 构成一阶 RC 低通电路，100 MHz 处的相移为 $-\arctan(\omega R_{on1}C_H)$。

### 第 1 步 — 导通电阻

输入以 $V_m = 10$ mV 为中心，在 $V_m - V_0 = 0$ 与 $V_m + V_0 = 20$ mV 之间摆动，输出紧紧跟随，因此两个扩散区端（diffusion terminal）都约处于 $V_{in}$：$V_{GS} \approx V_{DD} - V_{in}$，而 $V_{DS} = V_{in} - V_{out}$ 非常小（约 0.5 mV，见第 3 步的验证），因此 $M_1$ 处于**深线性区**，且

$$R_{on1} = \frac{1}{\beta(V_{GS} - V_{TH})} = \frac{1}{\beta(V_{DD} - V_{in} - V_{TH})}, \qquad \beta = \mu_nC_{ox}\frac WL = (134\ \mu\mathrm{A/V^2})\times\frac{20}{0.5} = 5.36\ \mathrm{mA/V^2}.$$

在平均输入电平 $V_{in} = V_m = 10$ mV 处：

$$
\begin{aligned}
V_{ov} &= V_{DD} - V_{in} - V_{TH} = 3 - 0.01 - 0.7 = 2.29\ \mathrm{V},\\
R_{on1} &= \frac{1}{(5.36\times10^{-3}\ \mathrm{A/V^2})(2.29\ \mathrm{V})} = \frac{1}{12.27\ \mathrm{mS}} = 81.5\ \Omega.
\end{aligned}
$$

在整个输入范围内：

$$
\begin{aligned}
V_{in} = 0: &\quad R_{on1} = \frac{1}{(5.36\ \mathrm{mA/V^2})(2.30\ \mathrm{V})} = 81.1\ \Omega,\\
V_{in} = 20\ \mathrm{mV}: &\quad R_{on1} = \frac{1}{(5.36\ \mathrm{mA/V^2})(2.28\ \mathrm{V})} = 81.8\ \Omega,
\end{aligned}
$$

变化量为 ±0.4 %，因此开关可以很好地近似为一个固定的 81.5 Ω 电阻。

### 第 2 步 — RC 采样电路的传递函数

在输出端列 KCL，$(V_{in} - V_{out})/R_{on1} = C_H\,dV_{out}/dt$，得

$$\frac{V_{out}}{V_{in}}(s) = \frac{1}{1 + sR_{on1}C_H},$$

这是一阶低通：直流分量 $V_m$ 以增益 1 通过，正弦分量则略有衰减和延迟。

### 第 3 步 — 100 MHz 处的相移

$$
\begin{aligned}
\omega_{in}R_{on1}C_H &= (2\pi\times10^{8}\ \mathrm{rad/s})(81.5\ \Omega)(1\times10^{-12}\ \mathrm{F}) = 0.0512,\\
\phi &= -\arctan(\omega_{in}R_{on1}C_H) = -\arctan(0.0512) = -0.0511\ \mathrm{rad} = -2.93^\circ .
\end{aligned}
$$

输出**滞后**输入 2.93°，即滞后

$$\Delta t = \frac{|\phi|}{\omega_{in}} = \frac{0.0511\ \mathrm{rad}}{6.283\times10^{8}\ \mathrm{rad/s}} = 81\ \mathrm{ps} \approx R_{on1}C_H ,$$

而幅度衰减很小：

$$\left|\frac{V_{out}}{V_{in}}\right| = \frac{1}{\sqrt{1 + 0.0512^2}} = \frac{1}{\sqrt{1.00262}} = 0.9987,$$

只损失 0.13 %。

**深线性区检验。** 开关两端的电压 $V_{in}\cdot j\omega RC/(1 + j\omega RC)$ 的幅度为 $10\ \mathrm{mV}\times0.0511 = 0.51$ mV，与 $V_{ov} = 2.29$ V 相比可以忽略。

**一个周期内的变化。** 由于 $R_{on1}$ 只变化 ±0.4 %，相位只在 −2.92°（$V_{in} = 0$ 时）与 −2.94°（$V_{in} = 20$ mV 时）之间变化：对于如此小的信号，响应几乎是线性的。

### 结果

$$R_{on1} = \frac{1}{\mu_nC_{ox}(W/L)(V_{DD} - V_{in} - V_{TH})} = \frac{1}{(5.36\ \mathrm{mA/V^2})(3 - 0.01 - 0.7)\ \mathrm{V}} \approx 81.5\ \Omega$$

（在 0–20 mV 的输入范围内为 81.1–81.8 Ω）。由 $V_{out}/V_{in} = 1/(1 + j\omega R_{on1}C_H)$ 以及 $\omega R_{on1}C_H = 2\pi(10^8)(81.5)(10^{-12}) = 0.0512$，相移为

$$\phi = -\arctan(0.0512) \approx -2.9^\circ,$$

即输出滞后约 2.9°（相当于约 81 ps 的延迟），幅度只衰减 0.13 %。

**常见错误。** 用饱和区的表达式（例如 $V_{DS}/I_{D,sat}$）计算导通电阻。由于 $V_{out}$ 跟踪 $V_{in}$，$V_{DS} \approx 0$，因此器件处于深线性区，$R_{on} = 1/[\beta(V_{GS} - V_{TH})]$。

**常见错误。** 把 $\omega RC = 0.0512$（弧度）写成“0.05°”，或者给出相位**超前**。RC 网络是低通的，因此输出滞后，且 $\arctan(0.0512) = 0.0511$ rad $= 2.93^\circ$。

**常见错误。** 用错过驱动电压，例如只用 $V_{DD}$ 或用 $V_{DD} - 2V_{TH}$（误差很大），或者忘记源极位于 $V_{in}$（这里误差较小）。沟道电荷由 $V_{GS} - V_{TH} = V_{DD} - V_{in} - V_{TH}$ 决定。
