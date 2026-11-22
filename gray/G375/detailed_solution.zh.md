# 详细步骤 - G375

放大器由电流源驱动，因此只有等效输入噪声电流起作用。对于电压并联反馈，输入噪声电流等于基本放大器的电流噪声源，加上其电压噪声源除以 $R_F$，再加上 $R_F$ 的热噪声电流。先求 MOS 基本放大器的电压噪声源（热噪声和闪烁噪声部分），得到输入噪声电流谱密度，再在 0.01 Hz–100 kHz 内积分。

### 第 1 步 — 器件跨导

饱和区有 $g_m=\sqrt{2k'(W/L)I_D}$：

$$
g_m=\sqrt{2(194\ \mu\mathrm A/\mathrm V^2)(100)(100\ \mu\mathrm A)}=1.97\ \mathrm{mS},
$$

因此每个共源级的增益为 $g_m(5\ \mathrm{k\Omega})=9.85$。

### 第 2 步 — 并联反馈的等效输入噪声电流

电流源输入时信号源阻抗为无穷大，电压噪声源本身不产生输入电流，只能通过接在栅极上的反馈电阻产生电流。对于输入端的并联反馈，

$$
\frac{\overline{i_i^2}}{\Delta f}=\frac{\overline{i_{ia}^2}}{\Delta f}+\frac{\overline{v_{ia}^2}}{R_F^2\,\Delta f}+\frac{4kT}{R_F},
$$

由于栅极不取电流且忽略器件电容，$\overline{i_{ia}^2}=0$。

### 第 3 步 — 基本放大器的电压噪声源

热噪声部分，折算到 $M_1$ 栅极：$M_1$ 的沟道噪声、第一级的 5 kΩ 负载，以及经第一级增益折算的 $M_2$ 沟道噪声：

$$
\frac{\overline{v_{ia,th}^2}}{\Delta f}=4kT\left[\frac{2}{3g_m}+\frac{1}{g_m^2(5\ \mathrm{k\Omega})}+\frac{2}{3g_m(9.85)^2}\right]=4kT(338+52+3.5)\ \Omega=4kT(394\ \Omega).
$$

闪烁噪声部分，由题给的折算到栅极的模型：

$$
\frac{\overline{v_{ia,f}^2}}{\Delta f}=\frac{K_f}{WLC_{ox}f}=\frac{3\times10^{-24}\ \mathrm{F\cdot V^2}}{(100\ \mu\mathrm m^2)(4.31\ \mathrm{fF/\mu m^2})f}=\frac{6.96\times10^{-12}\ \mathrm{V^2}}{f},
$$

再加上经 9.85 的增益折算的 $M_2$ 贡献（1%），得到 $7.03\times10^{-12}\ \mathrm{V^2}/f$。$M_3$ 及其后的负载可以忽略。

### 第 4 步 — 输入噪声电流谱密度

除以 $R_F^2=(10\ \mathrm{k\Omega})^2$，并加上 $4kT/R_F=1.66\times10^{-24}$ A²/Hz：

$$
\frac{\overline{i_i^2}}{\Delta f}=1.66\times10^{-24}+6.5\times10^{-26}+\frac{7.03\times10^{-20}\ \mathrm{A^2}}{f}
=1.725\times10^{-24}\ \mathrm{A^2/Hz}+\frac{7.03\times10^{-20}\ \mathrm{A^2}}{f}.
$$

### 第 5 步 — 在 0.01 Hz–100 kHz 内积分

白噪声部分积分为谱密度乘以带宽，$1/f$ 部分积分为对数：

$$
\begin{aligned}
\text{white:}\quad &(1.725\times10^{-24}\ \mathrm{A^2/Hz})(10^5\ \mathrm{Hz})=1.73\times10^{-19}\ \mathrm{A^2},\\
\text{flicker:}\quad &(7.03\times10^{-20}\ \mathrm{A^2})\ln\frac{10^5\ \mathrm{Hz}}{0.01\ \mathrm{Hz}}=(7.03\times10^{-20})(16.1)=1.13\times10^{-18}\ \mathrm{A^2},\\
\overline{i_i^2}&=1.31\times10^{-18}\ \mathrm{A^2},\qquad i_{i,\mathrm{rms}}=1.14\ \mathrm{nA}.
\end{aligned}
$$

总量中约 87% 来自经 $R_F$ 转换为电流的 $M_1$ 闪烁噪声，其余主要来自 10 kΩ 反馈电阻。若把反馈电阻视为无噪声，总量为 1.07 nA 有效值。
