# 详细步骤 - G231

采用 $Q_1$ 的混合 π 模型（hybrid-π model）。与 MOS 栅极不同，基极经 $r_\pi$ 吸取信号电流，因此 $R_S$ 与 $r_\pi$ 构成输入分压器；增益等于该分压比乘以 $-g_mR_L$。

### 第 1 步 — 小信号参数

在正向放大区 $I_C=I_Se^{V_{BE}/V_T}$，故 $g_m=\partial I_C/\partial V_{BE}=I_C/V_T$，且 $r_\pi=\beta/g_m$：

$$
g_m=\frac{1\ \mathrm{mA}}{26\ \mathrm{mV}}=38.46\ \mathrm{mA/V},\qquad
r_\pi=\frac{100}{38.46\ \mathrm{mA/V}}=2.6\ \mathrm{k\Omega}.
$$

由于 $r_b=0$，信号源在基极直接看到 $r_\pi$；由于 $r_o=\infty$，集电极电流全部流入 $R_L$。

### 第 2 步 — 输入分压与电压增益

信号源电流经 $R_S$ 流入 $r_\pi$，因此控制电压为

$$
v_{be}=v_i\,\frac{r_\pi}{R_S+r_\pi}=v_i\,\frac{2.6\ \mathrm{k\Omega}}{5\ \mathrm{k\Omega}+2.6\ \mathrm{k\Omega}}=0.342\,v_i .
$$

集电极电流 $g_mv_{be}$ 流入集电极，即从 $R_L$ 的上端节点流出，故 $v_o=-g_mv_{be}R_L$：

$$
\frac{v_o}{v_i}=-g_mR_L\,\frac{r_\pi}{R_S+r_\pi}=-(38.46\ \mathrm{mA/V})(3\ \mathrm{k\Omega})(0.342)=-115.4\times0.342=-39.5 .
$$

由于 $r_\pi$ 与 $R_S$ 相当，输入分压使增益只有本征值 $-g_mR_L=-115.4$ 的约三分之一。
