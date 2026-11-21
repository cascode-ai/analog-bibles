# 详细步骤 - G189

利用差分对的对称性。对差模信号，公共源极节点为交流地，尾电流源阻抗不起作用；对共模信号，每半边流过一半尾电流，因此每个半边电路（half circuit）的源极看到两倍的尾电流源阻抗。每个半边电路都是栅极串联 $R_S$、漏极接 $R_L$ 的共源级。

### 第 1 步 — 器件参数

每管电流为 $I_{SS}/2=0.5$ mA。取 $W/L_{\text{eff}}=62.5$，

$$
g_m=\sqrt{2k_n'\frac{W}{L_{\text{eff}}}\frac{I_{SS}}2}=\sqrt{2(60\ \mu\mathrm A/\mathrm V^2)(62.5)(0.5\ \mathrm{mA})}=1.94\ \mathrm{mA/V},
$$
$$
C_{gs}=\tfrac23(100\ \mu\mathrm m)(1.6\ \mu\mathrm m)(0.7\ \mathrm{fF/\mu m^2})=74.7\ \mathrm{fF},\qquad C_{gd}=14\ \mathrm{fF}.
$$

### 第 2 步 — 差模增益

差模半边电路是源极接地、由 $v_{id}/2$ 驱动的共源级，因此 $v_{od}=v_{o1}-v_{o2}=-g_mR_Lv_{id}$：

$$
A_{dm}(0)=-g_mR_L=-(1.94\ \mathrm{mA/V})(3\ \mathrm{k\Omega})=-5.81\quad(15.3\ \mathrm{dB}).
$$

按栅极处的密勒近似，其极点为

$$
\omega_{p,dm}=\frac1{R_S[C_{gs}+C_{gd}(1+g_mR_L)]}=\frac1{(5\ \mathrm{k\Omega})(74.7\ \mathrm{fF}+14\ \mathrm{fF}\times6.81)}=1.18\times10^9\ \mathrm{rad/s}\;(187\ \mathrm{MHz}),
$$

所以 $|A_{dm}|$ 在 10 kHz–20 MHz 内保持 15.3 dB（20 MHz 处仅下降 0.05 dB）。

### 第 3 步 — 共模增益

尾电流源阻抗为 $Z_T=R_T\parallel(1/sC_T)$。共模半边电路的源极看到 $2Z_T=2R_T\parallel\bigl(1/(sC_T/2)\bigr)$。带源极负反馈的共源级增益为 $-g_mR_L/(1+g_m\cdot2Z_T)$，故

$$
A_{cm}(s)=-\frac{g_mR_L}{1+g_m\dfrac{2R_T}{1+sR_TC_T}}\approx-\frac{R_L}{2Z_T}=-\frac{R_L}{2R_T}(1+sR_TC_T),
$$

近似中利用了 $2g_mZ_T\gg1$（$2g_mR_T=1162$）。栅极电容只在远高于 100 MHz 时起作用，此处忽略。

- 低频：$|A_{cm}|=R_L/(2R_T)=3\ \mathrm{k\Omega}/600\ \mathrm{k\Omega}=0.0050$（−46 dB）。
- 零点：$f_z=1/(2\pi R_TC_T)=1/[2\pi(300\ \mathrm{k\Omega})(2\ \mathrm{pF})]=265$ kHz。在其上方 $C_T$ 旁路 $R_T$，$|A_{cm}|$ 以 +20 dB/十倍频上升。

### 第 4 步 — 共模抑制比

$$
\mathrm{CMRR}=\left|\frac{A_{dm}}{A_{cm}}\right|=\left|1+\frac{2g_mR_T}{1+sR_TC_T}\right|\approx\frac{2g_mR_T}{|1+sR_TC_T|},
$$

低频时等于 $2(1.94\ \mathrm{mA/V})(300\ \mathrm{k\Omega})=1162$（61.3 dB），在 265 kHz 以上以 −20 dB/十倍频下降。

| $f$ | 10 kHz | 265 kHz | 1 MHz | 10 MHz | 20 MHz |
|---|---|---|---|---|---|
| $\lvert A_{dm}\rvert$ (dB) | 15.3 | 15.3 | 15.3 | 15.3 | 15.2 |
| $\lvert A_{cm}\rvert$ (dB) | −46.0 | −43.1 | −34.3 | −14.6 | −8.6 |
| CMRR (dB) | 61.3 | 58.4 | 49.6 | 29.9 | 23.8 |

这些数值来自完整的半边电路模型（包括 $C_{gs}$ 和 $C_{gd}$）；上面的近似表达式与之相差约 0.5 dB 以内。

![以 dB 表示的幅值随对数频率的变化：15.3 dB 平坦的差模增益，在 265 kHz 零点以上从 −46 dB 上升的共模增益，以及从 61.3 dB 下降的 CMRR](/q/G189/solution-curves.zh.svg)

### 第 5 步 — 频带内的特性

在 10 kHz–20 MHz 内，差模增益保持平坦，因为它唯一的极点在 190 MHz 附近。共模增益由尾电流源阻抗决定：$R_T$ 起主导作用时平坦地保持在 −46 dB，在 265 kHz 以上 $C_T$ 接管后以 +20 dB/十倍频上升，到 20 MHz 约为 −8.6 dB。二者之比 CMRR 因此从 61.3 dB 起，在 265 kHz 以上以 −20 dB/十倍频下降，到 20 MHz 约为 24 dB。限制高频 CMRR 的是尾电流源电容，而不是 $R_T$。
