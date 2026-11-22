# 详细步骤 - A039

相对温度系数就是对数的导数，$\frac{1}{X}\frac{dX}{dT}=\frac{d\ln X}{dT}$。先对 $I_s(T)$ 取对数并求导；再在电流固定的条件下把 $v_D$ 用 $I_s$ 表示并求导，注意 $V_t=kT/q$ 本身也随温度变化。

### 第 1 步 — $I_s$ 的温度系数

$$
\ln I_s=\ln K+3\ln T-\frac{qV_{G0}}{kT}
\quad\Rightarrow\quad
\frac{1}{I_s}\frac{dI_s}{dT}=\frac{3}{T}+\frac{qV_{G0}}{kT^2}=\frac{3}{T}+\frac{V_{G0}}{TV_t}.
$$

$T=300$ K 时：

$$
\frac{1}{I_s}\frac{dI_s}{dT}=\frac{3}{300\ \mathrm K}+\frac{1.205\ \mathrm V}{(300\ \mathrm K)(0.0259\ \mathrm V)}=0.0100+0.1551=0.165\ \mathrm{K^{-1}} .
$$

饱和电流每开尔文增大约 16.5 %，大约每 4–5 K 翻一番；指数形式的带隙项远大于 $T^3$ 项的贡献。

### 第 2 步 — 恒流时 $v_D$ 对温度的导数

由 $i_D=I_s\exp(v_D/V_t)$ 得 $v_D=V_t\ln(I_D/I_s)$。$I_D$ 固定时，$V_t$（正比于 $T$）和 $I_s$ 都会变化：

$$
\frac{dv_D}{dT}=\frac{V_t}{T}\ln\frac{I_D}{I_s}-V_t\,\frac{1}{I_s}\frac{dI_s}{dT}
=\frac{v_D}{T}-V_t\left(\frac{3}{T}+\frac{V_{G0}}{TV_t}\right)
=-\frac{V_{G0}-v_D+3V_t}{T}.
$$

数值计算：

$$
\frac{dv_D}{dT}=-\frac{1.205\ \mathrm V-0.7\ \mathrm V+3(0.0259\ \mathrm V)}{300\ \mathrm K}=-\frac{0.5827\ \mathrm V}{300\ \mathrm K}=-1.94\ \mathrm{mV/K}.
$$

### 第 3 步 — $v_D$ 的相对温度系数

$$
\frac{1}{v_D}\frac{dv_D}{dT}=\frac{-1.94\times10^{-3}\ \mathrm{V/K}}{0.7\ \mathrm V}=-2.77\times10^{-3}\ \mathrm{K^{-1}}\approx-2775\ \mathrm{ppm/^\circ C}.
$$

因此在恒流下，正向电压每摄氏度约下降 2 mV。原因在于 $I_s$ 的温度系数很大且为正：$I_s$ 增大时，要保持 $i_D$ 不变，$v_D$ 就必须下降。带隙基准正是利用了这一近似线性的负温度系数。
