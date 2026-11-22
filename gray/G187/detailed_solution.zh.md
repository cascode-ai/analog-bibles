# 详细步骤 - G187

先对一般的源电阻推导一次输出阻抗：用测试电压 $v_x$ 驱动集电极（$v_i=0$），再分别代入 $R_S=0$ 和 $R_S=\infty$。$v_i=0$ 时，$R_S+r_b$ 与 $r_\pi$ 并联在内部基极 $b'$ 与地之间；$C_\mu$ 连接 $b'$ 与集电极，受控源 $g_m$ 也作用在集电极。由于 $r_o=\infty$、$C_{cs}=0$，只有这些通路。

### 第 1 步 — 小信号参数

$$
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mathrm{mA}}{26\ \mathrm{mV}}=19.2\ \mathrm{mA/V},\qquad
r_\pi=\frac{\beta}{g_m}=10.4\ \mathrm{k\Omega},
$$

由 $\omega_T=g_m/(C_\pi+C_\mu)=2\pi(500\ \mathrm{MHz})$ 得 $C_\pi+C_\mu=6.12$ pF，故 $C_\pi=5.82$ pF。

### 第 2 步 — 一般输出阻抗与等效电路

令 $R=(R_S+r_b)\parallel r_\pi$，$Z_1=R\parallel(1/sC_\pi)$。测试电流经 $C_\mu$ 流入 $Z_1$，在 $b'$ 处得到 $v_1=v_x\,sC_\mu Z_1/(1+sC_\mu Z_1)$；集电极电流为 $v_1/Z_1+g_mv_1$。因此

$$
Y_o=\frac{sC_\mu(1+g_mZ_1)}{1+sC_\mu Z_1},\qquad
Z_o(s)=\frac{1+sR(C_\pi+C_\mu)}{sC_\mu\,(1+g_mR+sRC_\pi)} .
$$

将其拆分为 $Y_o=sC_\mu\bigl[\tfrac{C_\pi}{C_\pi+C_\mu}+\tfrac{1+g_mR-C_\pi/(C_\pi+C_\mu)}{1+sR(C_\pi+C_\mu)}\bigr]$，可见 $Z_o$ 恰好是电容 $C_\infty$ 与串联 $R_x$–$C_x$ 支路的并联：

$$
C_\infty=\frac{C_\mu C_\pi}{C_\pi+C_\mu}=0.285\ \mathrm{pF},\qquad
C_x=C_\mu\Bigl[1+g_mR-\frac{C_\pi}{C_\pi+C_\mu}\Bigr],\qquad
R_x=\frac{R(C_\pi+C_\mu)}{C_x}.
$$

<!-- diagram: diagram-01.cir -->

集电极节点经 $C_\infty$ 接地，同时并联一条由 $R_x$ 与 $C_x$ 串联的支路接地。低频时总电容为 $C_\mu(1+g_mR)$，即经密勒倍增（Miller multiplication）的 $C_\mu$；$Z_o$ 的零点位于 $1/[R(C_\pi+C_\mu)]$，其上 $R_x$ 起主导作用；$(1+g_mR)/(RC_\pi)$ 处的极点在两种情况下都高于 500 MHz。两种情况之间只有 $R$ 不同。

### 第 3 步 — 情况 (1)：$R_S=0$

$R=r_b\parallel r_\pi=300\ \Omega\parallel10.4\ \mathrm{k\Omega}=292\ \Omega$，$g_mR=5.61$：

$$
C_\mu(1+g_mR)=(0.3\ \mathrm{pF})(6.61)=1.98\ \mathrm{pF},\qquad C_x=1.70\ \mathrm{pF},\qquad R_x=1.05\ \mathrm{k\Omega},
$$

零点位于 $1/[(292\ \Omega)(6.12\ \mathrm{pF})]=5.60\times10^8$ rad/s（89 MHz），极点位于 $3.9\times10^9$ rad/s（620 MHz）。

### 第 4 步 — 情况 (2)：$R_S=\infty$

$R=r_\pi=10.4$ kΩ，$g_mR=\beta=200$：

$$
C_\mu(1+\beta)=(0.3\ \mathrm{pF})(201)=60.3\ \mathrm{pF},\qquad C_x=60.0\ \mathrm{pF},\qquad R_x=1.06\ \mathrm{k\Omega},
$$

零点位于 $1/[r_\pi(C_\pi+C_\mu)]=1.57\times10^7$ rad/s（2.5 MHz），极点位于 $(1+\beta)/(r_\pi C_\pi)=3.3\times10^9$ rad/s（528 MHz）。

### 第 5 步 — 幅值曲线

| $f$ | 1 kHz | 100 kHz | 1 MHz | 10 MHz | 100 MHz |
|---|---|---|---|---|---|
| $\lvert Z_o\rvert$，$R_S=0$ | 80.3 MΩ | 803 kΩ | 80.3 kΩ | 8.08 kΩ | 1.19 kΩ |
| $\lvert Z_o\rvert$，$R_S=\infty$ | 2.64 MΩ | 26.4 kΩ | 2.84 kΩ | 1.09 kΩ | 1.04 kΩ |

例如 $R_S=0$、1 kHz 时，$|Z_o|\approx1/[2\pi(1\ \mathrm{kHz})(1.98\ \mathrm{pF})]=80.3$ MΩ。

![RS = 0 与 RS = ∞ 时的输出阻抗幅值：分别对应 1.98 pF 和 60.3 pF 的电容性直线，在 89 MHz 和 2.5 MHz 处转折，趋于共同的 1.06 kΩ 平台](/q/G187/solution-curves.zh.svg)

两条曲线在低频都以 −20 dB/十倍频下降，并趋于同一平台 $R_x\approx(C_\pi+C_\mu)/(g_mC_\mu)\approx1.06$ kΩ，该值与 $R_S$ 无关。$R_S=0$ 时密勒电容较小（1.98 pF），曲线高出 30 倍，直到 89 MHz 附近才开始变平（100 MHz 处为 1.19 kΩ）。$R_S=\infty$ 时 $C_\mu$ 被完整的 $\beta$ 倍增（60.3 pF），曲线在约 2.5 MHz 以上达到平台。由于 $r_o=\infty$，两种情况在低频都没有电阻性的上限。
