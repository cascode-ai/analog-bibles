# 详细步骤 - G361

采用双极晶体管不相关输入噪声源模型，把噪声系数写成源电阻的函数并求最小值。对任何双极器件都适用同样的闭式最佳解，只是偏置点不同。

### 第 1 步 — 噪声源与噪声系数

在低频且忽略闪烁噪声时，

$$
\frac{\overline{v_i^2}}{\Delta f}=4kT\left(r_b+\frac{1}{2g_m}\right),\qquad
\frac{\overline{i_i^2}}{\Delta f}=2qI_B=\frac{2qI_C}{\beta_F},\qquad
F=1+\frac{\overline{v_i^2}+\overline{i_i^2}R_S^2}{4kTR_S\,\Delta f}.
$$

### 第 2 步 — 最佳源电阻与最小噪声系数

$dF/dR_S=0$ 要求 $\overline{i_i^2}R_S^2=\overline{v_i^2}$。利用 $2qI_C=2kTg_m$，

$$
R_{S(\mathrm{opt})}=\sqrt{\frac{\overline{v_i^2}}{\overline{i_i^2}}}=\frac{\sqrt{\beta_F}}{g_m}\sqrt{1+2g_mr_b},\qquad
F_{\mathrm{opt}}=1+\sqrt{\frac{1+2g_mr_b}{\beta_F}} .
$$

### 第 3 步 — 数值

在 $I_C=10\ \mu$A 时，$g_m=10\ \mu\mathrm A/26\ \mathrm{mV}=0.385$ mS，故 $1/g_m=2.6$ kΩ，$1/2g_m=1.3$ kΩ。于是 $2g_mr_b=2(0.385\ \mathrm{mS})(300\ \Omega)=0.231$，$\sqrt{1.231}=1.109$。由 $\sqrt{\beta_F}=10$：

$$
R_{S(\mathrm{opt})}=10\times2.6\ \mathrm{k\Omega}\times1.109=28.8\ \mathrm{k\Omega},\qquad
F_{\mathrm{opt}}=1+\frac{1.109}{10}=1.111,\qquad
10\log_{10}1.111=0.46\ \mathrm{dB}.
$$

保留相关性的完整分析（两个噪声源中都含集电极散粒噪声，基极电流噪声流经 $r_b+R_S$）给出 $R_{S(\mathrm{opt})}\approx28.7$ kΩ、$F_{\mathrm{opt}}\approx1.123$（0.50 dB），基本相同。

### 第 4 步 — 解释

与毫安级电流的器件相比，低集电极电流使 $1/2g_m$ 足够大，$r_b$ 几乎不起作用（$2g_mr_b=0.23$），而较高的 $\beta_F$ 降低了基极电流噪声。两者都使 $F_{\mathrm{opt}}$ 趋近 $1+1/\sqrt{\beta_F}$，噪声系数很低，但只对约 29 kΩ 的高源电阻成立。
