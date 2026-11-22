# 详细步骤 - G012

输出短路时，混合 π 模型简化为输入端的 $r_\pi\parallel(C_\pi+C_\mu)$ 驱动受控源 $g_mv_1$，因此电流增益是频率的单极点函数。在每个偏置点计算 $C_\pi$、$C_\mu$ 和 $g_m$，求出 $f_T$ 和 $f_\beta=f_T/\beta_0$，再在双对数坐标上画出单极点曲线。

### 第 1 步 — 短路电流增益

集电极对发射极交流短路时，$C_\mu$ 表现为基极到地的电容，与 $C_\pi$ 并联，集电极电流为 $g_mv_1$（在 $f_T$ 以下，经 $C_\mu$ 的前馈（feedforward）电流可以忽略）。因此

$$
v_1=\frac{i_b\,r_\pi}{1+j\omega r_\pi(C_\pi+C_\mu)},\qquad
\beta(j\omega)=\frac{i_c}{i_b}=\frac{\beta_0}{1+j\omega/\omega_\beta},\qquad
\omega_\beta=\frac1{r_\pi(C_\pi+C_\mu)}.
$$

远高于 $\omega_\beta$ 时 $|\beta|\approx\beta_0\omega_\beta/\omega$，它在下式处降到 1：

$$
\omega_T=\beta_0\omega_\beta=\frac{g_m}{C_\pi+C_\mu},\qquad f_T=\frac{g_m}{2\pi(C_\pi+C_\mu)},\qquad f_\beta=\frac{f_T}{\beta_0}.
$$

### 第 2 步 — 各偏置点的元件值

$g_m=I_C/V_T$；$C_\pi=\tau_Fg_m+C_{je}$，即基区充电电容加上发射结耗尽层电容 $2C_{je0}=40$ fF；$C_\mu=C_{\mu0}/(1+V_{CB}/\psi_0)^{1/2}$。情况 1：

$$
\begin{aligned}
g_m&=\frac{0.2\ \mathrm{mA}}{26\ \mathrm{mV}}=7.69\ \mathrm{mA/V},\qquad
C_\pi=(15\ \mathrm{ps})(7.69\ \mathrm{mA/V})+40\ \mathrm{fF}=0.155\ \mathrm{pF},\\
C_\mu&=\frac{10\ \mathrm{fF}}{\sqrt{1+3\ \mathrm V/0.55\ \mathrm V}}=3.9\ \mathrm{fF},\qquad
f_T=\frac{7.69\ \mathrm{mA/V}}{2\pi(0.159\ \mathrm{pF})}=7.68\ \mathrm{GHz}.
\end{aligned}
$$

| 情况 | $g_m$ (mA/V) | $C_\pi$ (pF) | $C_\mu$ (fF) | $f_T$ (GHz) | $f_\beta$ (MHz) |
|---|---|---|---|---|---|
| (1) 0.2 mA，3 V | 7.69 | 0.155 | 3.9 | 7.68 | 76.8 |
| (2) 1 mA，1 V | 38.5 | 0.617 | 6.0 | 9.83 | 98.3 |

等价地，$1/(2\pi f_T)=\tau_F+(C_{je}+C_\mu)/g_m$：情况 1 为 $15+5.7=20.7$ ps，情况 2 为 $15+1.2=16.2$ ps。电流较大时耗尽层电容项变小，$\tau_F$ 占主导，因此 $f_T$ 更高。

### 第 3 步 — 频率响应

$|\beta(jf)|=\beta_0/\sqrt{1+(f/f_\beta)^2}$。代表性数值：

| $f$ (MHz) | 0.1–1 | 10 | $f_\beta$ | 100 | 1000 |
|---|---|---|---|---|---|
| 情况 1 | 100 | 99.2 | 70.7 | 60.9 | 7.66 |
| 情况 2 | 100 | 99.5 | 70.7 | 70.1 | 9.78 |

![电流增益幅值的双对数曲线：平坦段为 100，在 77 MHz 和 98 MHz 处下降 3 dB，然后以 −20 dB/十倍频下降，1000 MHz 处约为 7.7 和 9.8](/q/G012/solution-curves.zh.svg)

两条曲线在约 10 MHz 以下都平坦地保持 $\beta_0=100$，在 $f_\beta$ 处经过 70.7，然后在双对数坐标上以斜率 −1（−20 dB/十倍频）下降。在 1000 MHz 以内都未降到 1；把斜率 −1 的直线延长，在 $f_T=7.7$ GHz 和 9.8 GHz 处得到 $|\beta|=1$。
