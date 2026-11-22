# 详细步骤 - G186

令 $v_i=0$，用测试电压 $v_x$ 驱动集电极，求其提供的电流 $i_x$。$v_i=0$ 时，$R_S+r_b$ 与 $r_\pi$ 并联在内部基极 $b'$ 与地之间，因此输入侧化简为一个电阻与 $C_\pi$；$C_\mu$ 连接 $b'$ 与集电极，受控源 $g_m$ 也作用在集电极。由于 $r_o=\infty$、$C_{cs}=0$，只有这些通路。

### 第 1 步 — 小信号参数

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta}{g_m}=10.4\ \mathrm{k\Omega}.
$$

由 $\omega_T=g_m/(C_\pi+C_\mu)$，取 $\omega_T=2\pi(500\ \mathrm{MHz})=3.14\times10^9$ rad/s，得 $C_\pi+C_\mu=6.12$ pF，故 $C_\pi=5.82$ pF。$b'$ 对地电阻为

$$
R=(R_S+r_b)\parallel r_\pi=5.3\ \mathrm{k\Omega}\parallel10.4\ \mathrm{k\Omega}=3.51\ \mathrm{k\Omega},\qquad g_mR=67.5 .
$$

### 第 2 步 — 输出导纳

令 $Z_1=R\parallel(1/sC_\pi)$ 为 $b'$ 对地阻抗。测试电流经 $C_\mu$ 流入 $Z_1$，因此 $C_\mu$ 与 $Z_1$ 构成分压器：

$$
v_1=v_x\frac{Z_1}{Z_1+1/(sC_\mu)}=v_x\frac{sC_\mu Z_1}{1+sC_\mu Z_1}.
$$

集电极电流等于 $C_\mu$ 中的电流 $v_1/Z_1$ 加上受控源电流 $g_mv_1$：

$$
Y_o=\frac{i_x}{v_x}=\frac{sC_\mu(1+g_mZ_1)}{1+sC_\mu Z_1}.
$$

代入 $Z_1=R/(1+sRC_\pi)$ 并取倒数：

$$
Z_o(s)=\frac{1+sR(C_\pi+C_\mu)}{sC_\mu\,(1+g_mR+sRC_\pi)} .
$$

### 第 3 步 — 等效电路

把方括号内拆分，$Y_o=sC_\mu\bigl[\tfrac{C_\pi}{C_\pi+C_\mu}+\tfrac{1+g_mR-C_\pi/(C_\pi+C_\mu)}{1+sR(C_\pi+C_\mu)}\bigr]$，它恰好是电容 $C_\infty$ 与串联 $R_x$–$C_x$ 支路的并联：

$$
C_\infty=\frac{C_\mu C_\pi}{C_\pi+C_\mu}=0.285\ \mathrm{pF},\qquad
C_x=C_\mu\Bigl[1+g_mR-\frac{C_\pi}{C_\pi+C_\mu}\Bigr]=20.3\ \mathrm{pF},
$$
$$
R_x=\frac{R(C_\pi+C_\mu)}{C_x}\approx\frac{C_\pi+C_\mu}{g_mC_\mu}=1.06\ \mathrm{k\Omega}.
$$

<!-- diagram: diagram-01.cir -->

该电路为：集电极节点经 $C_\infty$ 接地，同时并联一条由 $R_x$ 与 $C_x$ 串联的支路接地。低频时 $C_\infty+C_x=C_\mu(1+g_mR)=20.6$ pF，即经密勒倍增（Miller multiplication）的 $C_\mu$。$Z_o$ 在 $1/[R(C_\pi+C_\mu)]=4.65\times10^7$ rad/s（7.4 MHz）处的零点对应 $C_x$ 变为短路、$R_x$ 起主导作用；$(1+g_mR)/(RC_\pi)=3.35\times10^9$ rad/s（534 MHz）处的极点对应 $C_\infty$ 旁路 $R_x$，已超出作图范围。

### 第 4 步 — 1 kHz 到 100 MHz 的幅值

| $f$ | 1 kHz | 100 kHz | 1 MHz | 10 MHz | 100 MHz |
|---|---|---|---|---|---|
| $\lvert Z_o\rvert$ | 7.74 MΩ | 77.4 kΩ | 7.81 kΩ | 1.30 kΩ | 1.03 kΩ |

例如在 1 kHz，$|Z_o|\approx1/(2\pi fC_\mu(1+g_mR))=1/[2\pi(1\ \mathrm{kHz})(20.6\ \mathrm{pF})]=7.74$ MΩ。

![输出阻抗幅值：作为 20.6 pF 电容以 −20 dB/十倍频下降，在 7.4 MHz 零点处转折，并趋于约 1.06 kΩ 的平台](/q/G186/solution-curves.zh.svg)

在双对数坐标中，$|Z_o|$ 以 −20 dB/十倍频下降（相当于 20.6 pF 电容），直到约 7.4 MHz 的零点，然后平滑过渡到电阻性平台 $R_x\approx1.06$ kΩ，并保持到 100 MHz（该处为 1.03 kΩ，534 MHz 极点开始起作用）。
