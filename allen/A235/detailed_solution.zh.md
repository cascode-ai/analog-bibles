# 详细步骤 - A235

去掉 $R_L$ 后，这是一个电流源负载的共源级。用 $g_m$ 和 $g_{ds}$ 写出其增益、输出电阻和输出极点，再代入几何尺寸固定时的电流标度：$g_m\propto\sqrt{I_D}$，$g_{ds}=\lambda I_D$。

### 第 1 步 — 小信号量

M1 把 $v_{in}$ 转换为电流 $g_{m1}v_{in}$。M2 的栅极接固定电压 $V_{GG2}$，只贡献 $r_{ds2}$。因此输出节点看到 $r_{ds1}\parallel r_{ds2}$：

$$
R_{out}=\frac{1}{g_{ds1}+g_{ds2}},\qquad A_v=-\frac{g_{m1}}{g_{ds1}+g_{ds2}} .
$$

输出端是唯一的高阻节点，其电容为 $C_L$ 加上该处的器件电容，故主极点为

$$
|p_1|=\frac{g_{ds1}+g_{ds2}}{C_L+C_{gd1}+C_{gd2}+C_{bd1}+C_{bd2}} .
$$

（严格地说，当驱动 $v_{in}$ 的信号源有内阻时，$C_{gd1}$ 会受密勒效应（Miller effect）放大；对理想驱动源，上述输出极点成立。）

### 第 2 步 — 随电流的变化

在强反型饱和区，两管电流均为 $I_D$：

$$
g_{m1}=\sqrt{2K'_N\frac{W_1}{L_1}I_D}\propto I_D^{1/2},\qquad g_{ds1}+g_{ds2}=(\lambda_N+\lambda_P)I_D\propto I_D .
$$

### 第 3 步 — 标度关系

$$
A_v=-\frac{\sqrt{2K'_N(W_1/L_1)I_D}}{(\lambda_N+\lambda_P)I_D}
=-\frac{2}{\lambda_N+\lambda_P}\sqrt{\frac{K'_NW_1}{2I_DL_1}}\ \propto\ I_D^{-1/2},
$$

$$
R_{out}=\frac{1}{(\lambda_N+\lambda_P)I_D}\ \propto\ I_D^{-1},\qquad
|p_1|=\frac{(\lambda_N+\lambda_P)I_D}{C_{out}}\ \propto\ I_D ,
$$

其中 $C_{out}$ 为固定的输出总电容。增大电流会降低增益、提高带宽。这一结论依赖于去掉 $R_L$：若有限的 $R_L$ 主导输出电导，增益反而会按 $\sqrt{I_D}$ 上升，极点则几乎与电流无关。
