# 详细步骤 - A357

器件互换后，输入对为 n 沟道，电流镜负载为 p 沟道。用通常的第一级公式把 M1–M4 的噪声折算到输入端，1/f 噪声与热噪声分别计算，输入管使用 n 沟道常数；然后求转折频率并在频带内积分。

### 第 1 步 — 输入参考噪声密度

负载噪声电流与输入信号电流流入同一节点，故

$$
e_{eq}^2=2e_{n1}^2\Bigl[1+\Bigl(\frac{g_{m3}}{g_{m1}}\Bigr)^2\frac{e_{n3}^2}{e_{n1}^2}\Bigr].
$$

### 第 2 步 — 1/f 噪声

把 1/f 谱密度写成 $e_{ni}^2=B/(fW_iL_i)$，其中 $B=KF/(2C_{ox}K')$，于是 $B_N=7.36\times10^{-22}$，$B_P=2.02\times10^{-22}\ \mathrm{V^2\cdot m^2}$。对 n 沟道输入管（$W_1L_1=100\ \mu\mathrm m^2$）：

$$
e_{n1}^2=\frac{7.36\times10^{-22}}{(100\times10^{-12}\ \mathrm{m^2})f}=\frac{7.36\times10^{-12}}f .
$$

由于 $g_m^2\propto K'W/L$，负载项为 $(K'_PB_P/K'_NB_N)(L_1/L_3)^2=0.125\,(1/20)^2=3.1\times10^{-4}$，故

$$
e_{eq}^2(1/f)=2\,\frac{7.36\times10^{-12}}f(1.0003)=\frac{1.47\times10^{-11}}f\ \mathrm{V^2/Hz}.
$$

长沟道 p 沟道负载几乎没有贡献。

### 第 3 步 — 热噪声

$e_{ni}^2=8kT/(3g_{mi})$ 时括号为 $1+g_{m3}/g_{m1}$。在 50 µA 下用 $g_m=\sqrt{2K'(W/L)I_D}$：

$$
g_{m1}=\sqrt{2(110\ \mu\mathrm{A/V^2})(100)(50\ \mu\mathrm A)}=1.05\ \mathrm{mS},\qquad
g_{m3}=\sqrt{2(50\ \mu\mathrm{A/V^2})(5)(50\ \mu\mathrm A)}=158\ \mu\mathrm S,
$$
$$
e_{eq}^2(\text{th})=2\,\frac{8kT}{3g_{m1}}\Bigl(1+\frac{g_{m3}}{g_{m1}}\Bigr)=2(1.05\times10^{-17})(1.151)=2.42\times10^{-17}\ \mathrm{V^2/Hz}\quad(4.9\ \mathrm{nV/\sqrt{Hz}}).
$$

这里负载使热噪声增加约 15 %。

### 第 4 步 — 转折频率与均方根噪声

$$
f_c=\frac{1.47\times10^{-11}}{2.42\times10^{-17}}\approx608\ \mathrm{kHz}.
$$

在 1 Hz–100 kHz 内，1/f 部分积分得到对数：

$$
v_n^2=(1.47\times10^{-11})\ln(10^5)+(2.42\times10^{-17})(10^5)=1.70\times10^{-10}+2.4\times10^{-12}=1.72\times10^{-10}\ \mathrm{V^2},
$$
$$
v_n=13.1\ \mu\mathrm V\quad(13.0\ \mu\mathrm V\ \text{from 1/f alone}).
$$

| 物理量 | 数值 |
|---|---|
| $e_{eq}^2(1/f)$ | $1.47\times10^{-11}/f$ V²/Hz |
| $e_{eq}^2$（热噪声） | $2.42\times10^{-17}$ V²/Hz（4.9 nV/√Hz） |
| $f_c$ | ≈ 608 kHz |
| 1 Hz–100 kHz 均方根噪声 | 13.1 µV |

与 p 沟道输入的版本（$4.1\times10^{-12}/f$，均方根约 7 µV）相比，n 沟道输入的 1/f 噪声功率约为其 3.6 倍，即闪烁噪声常数之比 $B_N/B_P$。
