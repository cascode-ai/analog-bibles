# 详细步骤 - A232

先用 $g_m$ 和 $g_{ds}$ 写出增益、输出电阻和输出极点，再代入几何尺寸固定时它们随漏极电流的变化：由平方律 $g_m\propto\sqrt{I_D}$，由沟道长度调制 $g_{ds}\propto I_D$。

### 第 1 步 — 该级的增益、输出电阻和极点

采用电流镜负载时，差分输入 $v_{id}$ 在 M1、M2 中产生漏极电流 $\pm g_{m1}v_{id}/2$；电流镜 M3–M4 把 M1 的电流复制到输出，因此输出共得到 $g_{m1}v_{id}$。输出节点看到 $r_{ds2}\parallel r_{ds4}$（向下看 M2、向上看 M4）。因此

$$
A_v=\frac{v_{out}}{v_{id}}=\frac{g_{m1}}{g_{ds2}+g_{ds4}},\qquad
R_{out}=\frac{1}{g_{ds2}+g_{ds4}} .
$$

输出端只有固定电容 $C_{out}$，而输出节点又是电路中电阻最大的节点，故主极点为

$$
|p_1|=\frac{g_{ds2}+g_{ds4}}{C_{out}} .
$$

### 第 2 步 — $g_m$ 与 $g_{ds}$ 随电流的变化

在强反型饱和区，每只输入管和负载管的电流为 $I_D=I_{SS}/2$，

$$
g_{m1}=\sqrt{2K'_N\frac{W_1}{L_1}I_D}\propto I_D^{1/2},\qquad
g_{ds2}=\lambda_NI_D,\quad g_{ds4}=\lambda_PI_D\ \propto I_D .
$$

### 第 3 步 — 所得的标度关系

代入得

$$
A_v=\frac{\sqrt{2K'_N(W_1/L_1)I_D}}{(\lambda_N+\lambda_P)I_D}
=\frac{2}{\lambda_N+\lambda_P}\sqrt{\frac{K'_NW_1}{2I_DL_1}}\ \propto\ I_D^{-1/2},
$$

$$
R_{out}=\frac{1}{(\lambda_N+\lambda_P)I_D}\ \propto\ I_D^{-1},\qquad
|p_1|=\frac{(\lambda_N+\lambda_P)I_D}{C_{out}}\ \propto\ I_D .
$$

因此增大电流会使增益按 $1/\sqrt{I_D}$ 下降（输出电阻下降得比 $g_m$ 上升得快），输出电阻按 $1/I_D$ 下降，主极点与 $I_D$ 成正比地上移。增益带宽积 $A_v|p_1|=g_{m1}/C_{out}$ 按 $\sqrt{I_D}$ 增大。
