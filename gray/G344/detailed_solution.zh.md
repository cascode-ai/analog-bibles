# 详细步骤 - G344

沿用只有散粒噪声时二极管的偏置点和节点阻抗，在二极管噪声电流中加入闪烁项，再把总噪声电流换算为输出电压谱密度。闪烁项在某一转折频率处等于散粒项，据此把双对数曲线分为 $1/f$ 段和平坦段。

### 第 1 步 — 偏置点与节点阻抗

正向压降为 0.7 V 时，二极管电流和小信号电阻为

$$
I_D=\frac{10\ \mathrm V-0.7\ \mathrm V}{20\ \mathrm{k\Omega}}=0.465\ \mathrm{mA},\qquad
r_d=\frac{kT/q}{I_D}=\frac{26\ \mathrm{mV}}{0.465\ \mathrm{mA}}=55.9\ \Omega .
$$

对小信号而言 +10 V 电源相当于地，因此 20 kΩ 电阻与 $r_d$ 并联在 $v_o$ 与地之间：$r_d\parallel R=55.8\ \Omega$。

### 第 2 步 — 输出噪声谱密度

二极管噪声电流（散粒加闪烁，$a=b=1$）与电阻热噪声电流 $4kT/R$ 互不相关，且都流入 $r_d\parallel R$，因此均方值相加：

$$
S_o(f)=\frac{\overline{v_o^2}}{\Delta f}=(r_d\parallel R)^2\left[2qI_D+\frac{K_1I_D}{f}+\frac{4kT}{R}\right].
$$

定义闪烁噪声转折频率 $f_c$，在该频率处闪烁项等于散粒项：

$$
\frac{K_1I_D}{f_c}=2qI_D\quad\Longrightarrow\quad
f_c=\frac{K_1}{2q}=\frac{3\times10^{-16}\ \mathrm A}{2(1.6\times10^{-19}\ \mathrm C)}=937.5\ \mathrm{Hz},
$$

由于 $a=1$，它与 $I_D$ 无关。于是

$$
S_o(f)=(r_d\parallel R)^2\left[2qI_D\left(1+\frac{f_c}{f}\right)+\frac{4kT}{R}\right].
$$

白噪声部分为 $(55.8\ \Omega)^2\left(1.488\times10^{-22}+8.3\times10^{-25}\right)\ \mathrm{A^2/Hz}=4.65\times10^{-19}\ \mathrm{V^2/Hz}$；由于 $4kT/R$ 仅为 $2qI_D$ 的 0.55%，

$$
S_o(f)\approx4.65\times10^{-19}\left(1+\frac{938\ \mathrm{Hz}}{f}\right)\ \mathrm{V^2/Hz}.
$$

### 第 3 步 — 整个频带内的数值

在 $f=1$ Hz 处闪烁项占主导：$S_o\approx(55.8\ \Omega)^2(3\times10^{-16}\ \mathrm A)(0.465\ \mathrm{mA})/(1\ \mathrm{Hz})+4.65\times10^{-19}\ \mathrm{V^2/Hz}=4.34\times10^{-16}\ \mathrm{V^2/Hz}$。其余各点由同一表达式求得：

| $f$ | 1 Hz | 10 Hz | 100 Hz | 938 Hz | 1 kHz | 10 kHz | 100 kHz | 1–10 MHz |
|---|---|---|---|---|---|---|---|---|
| $S_o$ (V²/Hz) | $4.3\times10^{-16}$ | $4.4\times10^{-17}$ | $4.8\times10^{-18}$ | $9.3\times10^{-19}$ | $9.0\times10^{-19}$ | $5.1\times10^{-19}$ | $4.7\times10^{-19}$ | $4.65\times10^{-19}$ |

### 第 4 步 — 双对数曲线

低于 $f_c$ 时谱密度按 $1/f$ 下降，在双对数坐标上是斜率为 $-1$ 的直线（功率每十倍频程下降 $-10$ dB）。在 $f_c\approx938$ Hz 处它是白噪声电平的两倍，高于几 kHz 后趋于平坦，为 $4.65\times10^{-19}$ V²/Hz。由于忽略了电容效应，没有高频滚降，曲线一直平坦到 10 MHz。

![双对数坐标下的输出噪声谱密度：从 1 Hz 处 4.3e-16 V²/Hz 开始的 1/f 直线降到 938 Hz 转折频率，之后平坦于 4.65e-19 V²/Hz](/q/G344/solution-curves.zh.svg)
