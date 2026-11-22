# 详细步骤 - G355

先求每个晶体管的偏置，写出单个双极晶体管的标准输入噪声源，再合并差分对的两个器件：它们彼此独立的电压噪声源按均方值相加，合成一个与某一输入串联的噪声源，而每个基极保留各自的电流噪声源。

### 第 1 步 — 每个晶体管的偏置

由对称性，尾电流平均分配，因此每个器件的工作点为

$$
I_C=\frac{I_{EE}}{2}=0.5\ \mu\mathrm A,\qquad
g_m=\frac{I_C}{V_T}=\frac{0.5\ \mu\mathrm A}{26\ \mathrm{mV}}=19.2\ \mu\mathrm A/\mathrm V,\qquad
\frac{1}{2g_m}=26\ \mathrm{k\Omega},\qquad
I_B=\frac{I_C}{\beta}=\frac{0.5\ \mu\mathrm A}{5000}=0.1\ \mathrm{nA}.
$$

### 第 2 步 — 单个晶体管的噪声源

对于基区电阻为 $r_b$ 的单个晶体管，$r_b$ 的热噪声与经 $g_m$ 折算的集电极散粒噪声（shot noise）$2qI_C$ 构成电压噪声源，基极散粒噪声（加上经 $\beta$ 折算的集电极散粒噪声）构成电流噪声源：

$$
\frac{\overline{v_{i1}^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right)=4kT(0.5+26)\ \mathrm{k\Omega},\qquad
\frac{\overline{i_{i1}^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right).
$$

在如此低的电流下，$1/2g_m$ 项（26 kΩ）远大于 $r_b$（0.5 kΩ）。

### 第 3 步 — 合并两半电路

差分输出响应 $v_{b1}-v_{b2}$。因此与 $Q_2$ 基极串联的电压噪声源，等效于与 $Q_1$ 基极串联的一个大小相等、极性相反的噪声源。两个噪声源互不相关，均方值相加，得到与 $Q_1$ 基极串联的单个噪声源：

$$
\frac{\overline{v^2}}{\Delta f}=2\cdot4kT\left(r_b+\frac{1}{2g_m}\right)=4kT(53\ \mathrm{k\Omega})
=(1.66\times10^{-20}\ \mathrm{V\cdot C})(53\ \mathrm{k\Omega})=8.8\times10^{-16}\ \mathrm{V^2/Hz},
$$

约为 30 nV/√Hz。电流噪声源不能这样移动，因为它们的作用取决于驱动各基极的阻抗，所以每个基极保留各自到地的噪声源：

$$
\frac{\overline{i^2}}{\Delta f}=2q\left(I_B+\frac{I_C}{\beta^2}\right)
=2(1.6\times10^{-19}\ \mathrm C)(0.1\ \mathrm{nA}+20\ \mathrm{fA})\approx3.2\times10^{-29}\ \mathrm{A^2/Hz},
$$

约为 5.7 fA/√Hz；$I_C/\beta^2$ 项可以忽略。

### 第 4 步 — 解释

超 β 器件的基极电流只有 0.1 nA，因此噪声电流极小，适合高阻抗信号源。低偏置电流的代价是较大的噪声电压，它由每个器件经 $1/2g_m=26$ kΩ 折算的集电极散粒噪声主导；两种噪声在 $R_S=\sqrt{\overline{v^2}/\overline{i^2}}\approx5$ MΩ 处相当。
