# 详细步骤 - G197

先在所有电容开路的条件下由混合 π 模型求中频增益。然后应用零值时间常数（ZVTC）法：对每个电容，在其余电容开路、输入源置零时求其看到的电阻，把各时间常数相加得到 $T_0$，并以 $\omega_{-3\text{dB}}\approx1/T_0$ 作为估计。

### 第 1 步 — 小信号参数

$$
g_m=\frac{I_C}{V_T}=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.5\ \mathrm{mA/V},\qquad r_\pi=\frac{\beta}{g_m}=5.2\ \mathrm{k\Omega}.
$$

由 $\omega_T=g_m/(C_\pi+C_\mu)$，取 $\omega_T=2\pi(600\ \mathrm{MHz})$：

$$
C_\pi+C_\mu=\frac{38.5\ \mathrm{mA/V}}{2\pi(600\ \mathrm{MHz})}=10.2\ \mathrm{pF}\;\Rightarrow\;C_\pi=10.0\ \mathrm{pF}.
$$

这样求得的 $C_\pi$ 已包含发射结电容 $C_{je}$，因此不再另加 $C_{je}$。

### 第 2 步 — 低频增益

$R_S$ 与 $r_\pi$ 对输入分压，集电极电流 $g_mv_\pi$ 流过 $R_L$：

$$
\frac{v_o}{v_i}=-g_mR_L\frac{r_\pi}{R_S+r_\pi}=-(192.3)\frac{5.2\ \mathrm{k\Omega}}{15.2\ \mathrm{k\Omega}}=-65.8 .
$$

### 第 3 步 — 零值电阻与时间常数

$v_i=0$ 时，基极节点看到 $R_{\pi0}=R_S\parallel r_\pi=3.42$ kΩ。

- $C_\pi$（基极到发射极）：$R_{\pi0}=3.42$ kΩ。
- $C_\mu$（基极到集电极）：用测试电流 $i_x$ 驱动它，基极升高 $i_xR_{\pi0}$，集电极一侧升高 $i_xR_L$ 再加上放大后的 $g_mR_L\cdot i_xR_{\pi0}$，故
$$
R_{\mu0}=R_{\pi0}+R_L+g_mR_LR_{\pi0}=3.42+5+657.9\ \mathrm{k\Omega}=666\ \mathrm{k\Omega}.
$$
- $C_{cs}$（集电极到衬底，交流地）：$v_\pi=0$，它看到 $R_L=5$ kΩ。

| 电容 | 电阻 | 时间常数 |
|---|---|---|
| $C_\pi=10.0$ pF | 3.42 kΩ | 34.2 ns |
| $C_\mu=0.2$ pF | 666 kΩ | 133.3 ns |
| $C_{cs}=1$ pF | 5 kΩ | 5.0 ns |

### 第 4 步 — −3-dB 频率

$$
T_0=34.2+133.3+5.0\ \mathrm{ns}=172.5\ \mathrm{ns},\qquad
\omega_{-3\text{dB}}\approx\frac1{T_0}=5.80\times10^6\ \mathrm{rad/s},\qquad
f_{-3\text{dB}}\approx\frac1{2\pi T_0}=0.92\ \mathrm{MHz}.
$$

$C_\mu$ 通过类似密勒效应的 $g_mR_LR_{\pi0}$ 项占主导。对同一电路进行精确节点分析得到 0.93 MHz，验证了该估计。
