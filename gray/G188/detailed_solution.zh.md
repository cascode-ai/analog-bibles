# 详细步骤 - G188

令 $v_i=0$，用测试电压 $v_x$ 驱动漏极。$v_i=0$ 时栅极经 $R_S$ 接地，并与 $C_{gs}$ 并联（源极接地）；$C_{gd}$ 连接栅极与漏极，受控源 $g_m$ 也作用在漏极。由于 $\lambda=0$、$C_{db}=0$，只有这些通路：这正是双极型分析的 MOS 版本，用 $R_S$ 代替 $(R_S+r_b)\parallel r_\pi$。

### 第 1 步 — 器件参数

$W/L_{\text{eff}}=100/1.6=62.5$，按平方律，

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}I_D}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},\qquad g_mR_S=19.4,
$$
$$
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF},\qquad C_{gd}=14\ \mathrm{fF}.
$$

### 第 2 步 — 输出阻抗

令 $Z_1=R_S\parallel(1/sC_{gs})$。测试电流经 $C_{gd}$ 流入 $Z_1$，故栅极电压为 $v_{gs}=v_x\,sC_{gd}Z_1/(1+sC_{gd}Z_1)$，漏极电流为 $v_{gs}/Z_1+g_mv_{gs}$：

$$
Y_o=\frac{sC_{gd}(1+g_mZ_1)}{1+sC_{gd}Z_1}.
$$

代入 $Z_1=R_S/(1+sR_SC_{gs})$ 并取倒数，

$$
Z_o(s)=\frac{1+sR_S(C_{gs}+C_{gd})}{sC_{gd}\,(1+g_mR_S+sR_SC_{gs})} .
$$

### 第 3 步 — 等效电路与转折频率

与双极型级相同地拆分 $Y_o$，得到电容 $C_\infty$ 与串联 $R_x$–$C_x$ 支路的并联：

$$
C_\infty=\frac{C_{gd}C_{gs}}{C_{gs}+C_{gd}}=11.8\ \mathrm{fF},\qquad
C_x=C_{gd}\Bigl[1+g_mR_S-\frac{C_{gs}}{C_{gs}+C_{gd}}\Bigr]=273\ \mathrm{fF},
$$
$$
R_x=\frac{R_S(C_{gs}+C_{gd})}{C_x}\approx\frac{C_{gs}+C_{gd}}{g_mC_{gd}}=3.2\ \mathrm{k\Omega}.
$$

<!-- diagram: diagram-01.cir -->

漏极节点经 $C_\infty$ 接地，同时并联一条由 $R_x$ 与 $C_x$ 串联的支路接地。低频时阻抗为密勒型电容

$$
C_\infty+C_x=C_{gd}(1+g_mR_S)=(14\ \mathrm{fF})(20.4)=285\ \mathrm{fF}.
$$

零点位于 $1/[R_S(C_{gs}+C_{gd})]=1.13\times10^9$ rad/s（180 MHz），极点位于 $(1+g_mR_S)/(R_SC_{gs})=2.7\times10^{10}$ rad/s（4.3 GHz），两者都高于 100 MHz。

### 第 4 步 — 1 kHz 到 100 MHz 的幅值

在零点以下，$|Z_o|\approx1/(2\pi f\cdot285\ \mathrm{fF})$；1 kHz 时为 $1/[2\pi(10^3\ \mathrm{Hz})(285\ \mathrm{fF})]=558$ MΩ。

| $f$ | 1 kHz | 100 kHz | 1 MHz | 10 MHz | 100 MHz |
|---|---|---|---|---|---|
| $\lvert Z_o\rvert$ | 558 MΩ | 5.58 MΩ | 558 kΩ | 55.9 kΩ | 6.39 kΩ |

![共源级输出阻抗幅值：285 fF 电容的 −20 dB/十倍频直线，从 1 kHz 处的 558 MΩ 降到 100 MHz 处的 6.4 kΩ](/q/G188/solution-curves.zh.svg)

在整个范围内，$|Z_o|$ 基本上就是 285 fF 电容的阻抗，即一条 −20 dB/十倍频的直线。100 MHz 处的精确值 6.4 kΩ 略高于 5.6 kΩ 的渐近线，因为曲线开始向 180 MHz 零点以上出现的 3.2 kΩ 平台弯曲。与双极型级相比，MOS 级没有 $r_\pi$，且 $C_{gd}$ 小得多，因此电阻性平台位于作图范围之外。
