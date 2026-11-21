# 详细步骤 - A236

由输出节点方程写出跟随器的增益、输出电阻和输出极点，再代入几何尺寸固定时的 $g_m\propto\sqrt{I_D}$ 和 $g_{ds}=\lambda I_D$。源-衬底电压固定时，体跨导是 $g_{m1}$ 的固定比例。

### 第 1 步 — 小信号量

在输出节点列 KCL（M1 栅极为 $v_{in}$、源极为 $v_{out}$、衬底接 $V_{SS}$；M2 为电流沉，只贡献 $g_{ds2}$），$C_1$ 跨接输入与输出，$C_2$ 接在输出与地之间：

$$
(g_{m1}+sC_1)(v_{in}-v_{out})=(g_{mbs1}+g_{ds1}+g_{ds2}+sC_2)\,v_{out},
$$

低频时得

$$
A_v=\frac{g_{m1}}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}},\qquad
R_{out}=\frac{1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}\approx\frac{1}{g_{m1}+g_{mbs1}},
$$

输出极点为

$$
|p|=\frac{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}}{C_1+C_2}\approx\frac{g_{m1}+g_{mbs1}}{C_1+C_2}.
$$

### 第 2 步 — 随电流的变化

$$
g_{m1}=\sqrt{2K'_N\frac{W_1}{L_1}I_D}\propto I_D^{1/2},\qquad
g_{mbs1}=\eta_1g_{m1},\quad \eta_1=\frac{\gamma}{2\sqrt{2|\phi_F|+V_{SB}}},\qquad
g_{ds1}+g_{ds2}=(\lambda_1+\lambda_2)I_D .
$$

$\eta_1$ 只取决于固定的 $V_{SB}$，与电流无关。

### 第 3 步 — 标度关系

把增益的分子分母同除以 $g_{m1}$，并利用 $(g_{ds1}+g_{ds2})/g_{m1}=(\lambda_1+\lambda_2)I_D/\sqrt{2K'_N(W_1/L_1)I_D}$：

$$
A_v=\frac{1}{1+\eta_1+(\lambda_1+\lambda_2)\sqrt{\dfrac{I_DL_1}{2K'_NW_1}}}\approx\frac{1}{1+\eta_1}.
$$

增益基本与 $I_D$ 无关，由体效应决定；随 $\sqrt{I_D}$ 增大的小项 $g_{ds}/g_m$ 只使它随电流增大而略有下降。输出电导以 $g_{m1}(1+\eta_1)\propto\sqrt{I_D}$ 为主，故

$$
R_{out}\approx\frac{1}{(1+\eta_1)g_{m1}}\ \propto\ I_D^{-1/2},\qquad
|p|\approx\frac{(1+\eta_1)g_{m1}}{C_1+C_2}\ \propto\ I_D^{1/2}.
$$

与增益级不同，跟随器不以增益换取带宽：增大电流会降低输出电阻、并使（高频）输出极点按 $\sqrt{I_D}$ 升高，而增益保持在 $1/(1+\eta_1)$ 附近。
