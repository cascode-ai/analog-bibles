# 详细步骤 - R292

**思路。** 将跟随器的栅极经 $R_S$ 接地，用只含 $g_m$ 和 $C_{GS}$ 的模型求出其输出阻抗 $Z_{out}(s)$。然后把 $Z_{out}(s)$ 改写成由两个电阻和一个电感组成的等效网络，并计算电感值。

### 第 1 步 — 小信号参数

由 $W/L = 50/0.5 = 100$ 和 $I_D = 1$ mA 得：

$$g_m = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{A/V} = 5.18\ \mathrm{mS}, \qquad \frac{1}{g_m} = \frac{1}{5.18\ \mathrm{mS}} = 193\ \Omega .$$

在饱和区（saturation region），$C_{GS}$ 等于本征部分 $\tfrac23WLC_{ox}$ 加上交叠部分 $WC_{ov}$（$C_{ov} = 0.4$ fF/μm）：

$$
\begin{aligned}
\tfrac23WLC_{ox} &= \tfrac23(50\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = \tfrac23(96\ \mathrm{fF}) = 64\ \mathrm{fF},\\
WC_{ov} &= (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF},\\
C_{GS} &= 64 + 20 = 84\ \mathrm{fF}.
\end{aligned}
$$

### 第 2 步 — 推导 $Z_{out}(s)$

令 $V_{in} = 0$，于是栅极 G 经 $R_S$ 接地；在输出端（源极）加测试电压 $V_X$，它提供电流 $I_X$。漏极为交流地；忽略 $C_{GD}$、结电容、$r_O$ 和体效应。

<!-- diagram: diagram-01.cir -->

$R_S$ 与 $C_{GS}$ 串联在输出端与地之间，因此流过相同的电流 $I_1$，方向从输出端流向 G：

$$I_1 = \frac{V_X}{R_S + \dfrac{1}{C_{GS}s}}, \qquad V_{GS} = V_G - V_X = -\frac{I_1}{C_{GS}s}.$$

在输出节点列基尔霍夫电流定律（KCL）方程，其中 $g_mV_{GS}$ 从漏极流入输出节点：

$$
\begin{aligned}
I_X + g_mV_{GS} &= I_1\\
I_X &= I_1 - g_mV_{GS} = I_1 + \frac{g_m}{C_{GS}s}I_1 = I_1\left(1 + \frac{g_m}{C_{GS}s}\right).
\end{aligned}
$$

用 $I_X$ 去除 $V_X = I_1\left(R_S + \dfrac{1}{C_{GS}s}\right)$，再将分子、分母同乘以 $C_{GS}s$：

$$Z_{out} = \frac{V_X}{I_X} = \frac{R_S + \dfrac{1}{C_{GS}s}}{1 + \dfrac{g_m}{C_{GS}s}} = \frac{R_SC_{GS}s + 1}{C_{GS}s + g_m}.$$

低频时（$s\to0$，$C_{GS}$ 相当于开路）$Z_{out}\to 1/g_m = 193\ \Omega$；高频时（$s\to\infty$，$C_{GS}$ 相当于短路）$Z_{out}\to R_S = 10\ \mathrm{k\Omega}$。由于 $R_S > 1/g_m$，$|Z_{out}|$ 随频率**升高**：输出呈**感性**。从物理上看，$V_{GS}$ 只能随着 $C_{GS}$ 经 $R_S$ 充电而变化，因此晶体管的校正电流滞后于输出电压。

### 第 3 步 — 等效 R–L 网络

减去低频值 $1/g_m$（最后一行将分子、分母同除以 $g_m^2$）：

$$
\begin{aligned}
Z_{out} - \frac{1}{g_m} &= \frac{R_SC_{GS}s + 1}{C_{GS}s + g_m} - \frac{1}{g_m}\\
&= \frac{g_m(R_SC_{GS}s + 1) - (C_{GS}s + g_m)}{g_m(C_{GS}s + g_m)}\\
&= \frac{(g_mR_S - 1)\,C_{GS}s}{g_m(C_{GS}s + g_m)}\\
&= \frac{\left(R_S - \dfrac{1}{g_m}\right)\dfrac{C_{GS}}{g_m}s}{1 + \dfrac{C_{GS}}{g_m}s}.
\end{aligned}
$$

电阻 $R_1$ 与电感 $L$ 并联，得到

$$R_1\parallel Ls = \frac{R_1Ls}{R_1 + Ls} = \frac{R_1\,\dfrac{L}{R_1}s}{1 + \dfrac{L}{R_1}s},$$

两式完全相同的条件是

$$R_1 = R_S - \frac{1}{g_m}, \qquad \frac{L}{R_1} = \frac{C_{GS}}{g_m}\ \Longrightarrow\ L = \frac{C_{GS}}{g_m}\left(R_S - \frac{1}{g_m}\right).$$

因此，输出阻抗**严格**等于电阻 $R_2 = 1/g_m$ 串联上 $R_1 = R_S - 1/g_m$ 与电感 $L$ 的并联组合。

<!-- diagram: diagram-02.cir -->

### 第 4 步 — 数值

$$
\begin{aligned}
R_2 &= \frac{1}{g_m} = 193\ \Omega,\\
R_1 &= R_S - \frac{1}{g_m} = 10\,000 - 193 = 9807\ \Omega,\\
\frac{C_{GS}}{g_m} &= \frac{84\times10^{-15}\ \mathrm{F}}{5.18\times10^{-3}\ \mathrm{S}} = 1.62\times10^{-11}\ \mathrm{s},\\
L &= \frac{C_{GS}}{g_m}R_1 = (1.62\times10^{-11}\ \mathrm{s})(9807\ \Omega) = 1.59\times10^{-7}\ \mathrm{H} \approx 159\ \mathrm{nH}.
\end{aligned}
$$

**输出在哪个频段呈感性。** 当 $\omega L$ 与 $R_2$ 相当时，$|Z_{out}|$ 开始上升，约在 $\omega \approx 1/(R_SC_{GS}) = 1.19\times10^9$ rad/s（190 MHz）处；当 $\omega L$ 超过 $R_1$ 后，它饱和于 $R_S$，约在 $\omega \approx g_m/C_{GS} = 6.2\times10^{10}$ rad/s（9.8 GHz）处。$Z_{out}(j\omega)$ 的取值如下：

| $f$ | $\lvert Z_{out}\rvert$ | 相位 |
|---|---|---|
| 10 MHz | 193 Ω | +3° |
| 100 MHz | 218 Ω | +27° |
| 1 GHz | 1.03 kΩ | +73° |
| 10 GHz | 7.14 kΩ | +43° |
| 100 GHz | 9.95 kΩ | +5° |

相位为正，证实了输出的感性特征。

**其他形式。** 同一个 $Z_{out}$ 也可以写成 $R_S\parallel(R_x + sL')$，其中 $R_x = R_S/(g_mR_S - 1) \approx 197\ \Omega$，$L' = R_S^2C_{GS}/(g_mR_S - 1) \approx 165$ nH。在近似 $R_S\gg 1/g_m$ 下，各种形式都化为 $L \approx R_SC_{GS}/g_m = 162$ nH。这些结果与 159 nH 的差别都在 4 % 以内。

**若不计交叠电容**（$C_{GS} = 64$ fF），同一公式给出 $L = (64/84)\times159\ \mathrm{nH} \approx 121$ nH。

### 结果

$$Z_{out}(s) = \frac{1 + R_SC_{GS}s}{g_m + C_{GS}s} = \frac{1}{g_m} + \left(R_S - \frac{1}{g_m}\right)\parallel sL, \qquad L = \frac{C_{GS}}{g_m}\left(R_S - \frac{1}{g_m}\right).$$

代入 $g_m = 5.18$ mS（$1/g_m = 193\ \Omega$）和 $C_{GS} = 84$ fF：

$$L \approx 1.59\times10^{-7}\ \mathrm{H} \approx 159\ \mathrm{nH}$$

（若 $C_{GS}$ 中不计交叠电容，则约为 121 nH）。该电感与 $R_1 = 9.81\ \mathrm{k\Omega}$ 并联，这一组合再与 $1/g_m = 193\ \Omega$ 串联。

**常见错误。** 写成 $L = R_SC_{GS}$（单位是秒，而不是亨利）或 $L = C_{GS}/g_m^2$（不含 $R_S$）。若没有 $R_S$，栅极为交流地，$Z_{out} = 1/(g_m + C_{GS}s)$ 呈容性（capacitive）；电感等于时间常数 $C_{GS}/g_m$ 乘以电阻 $R_S - 1/g_m$。

**常见错误。** 把完整的 $WLC_{ox}$（再加上交叠电容），即线性区（triode region）的取值，当作 $C_{GS}$。在饱和区 $C_{GS} = 84$ fF，而不是 116 fF；用较大的值会把 $L$ 高估将近 40 %。

**常见错误。** 因为电路中唯一的电抗元件是电容，就认为输出呈容性。当 $R_S > 1/g_m$ 时（如本题，$10\ \mathrm{k\Omega}\gg 193\ \Omega$），跟随器的输出呈感性；当 $R_S < 1/g_m$ 时则呈容性。
