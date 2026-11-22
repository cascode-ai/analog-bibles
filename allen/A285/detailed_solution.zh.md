# 详细步骤 - A285

两个电源和偏置电池都叠加在 $v_{ground}$ 上，因此整个运放随之移动。把每个节点电压平移 $-v_{ground}$，电源和偏置重新变为恒定；在这一参考系中，地噪声改为以 $-v_{ground}$ 的信号出现在接地输入端和 $C_L$ 的下端。在平移参考系中求解两节点模型，再加回 $v_{ground}$。

### 第 1 步 — 平移参考系

对每个节点定义 $v'=v-v_{ground}$。于是 $V_{DD}$、$V_{SS}$ 和 $V_{BIAS}$ 都恒定（M5、M7 保持其栅源电压），并且

- M1 栅极（同相输入端，接信号地）位于 $-v_{ground}$；
- M2 栅极接输出，位于 $v'_{out}=v_{out}-v_{ground}$；
- $C_L$ 下端位于 $-v_{ground}$，因此 $C_L$ 中的电流为 $sC_L(v'_{out}+v_{ground})$。

因此运放的差模输入为 $v_{id}=-v_{ground}-v'_{out}$。

### 第 2 步 — 节点方程

记平移参考系中的第一级输出为 $V_1$，对第一级节点和输出节点列 KCL：

$$
\begin{aligned}
(G_I+sC_c)V_1-sC_cv'_{out}+g_{mI}v_{id}&=0,\\
G_{II}v'_{out}+sC_L(v'_{out}+v_{ground})+sC_c(v'_{out}-V_1)+g_{mII}V_1&=0 .
\end{aligned}
$$

### 第 3 步 — 传递函数

解出 $v'_{out}$，再由 $v_{out}=v'_{out}+v_{ground}$ 得

$$
\frac{v_{out}}{v_{ground}}=\frac{G_IG_{II}+sC_c(g_{mII}+G_I+G_{II})}{g_{mI}g_{mII}+G_IG_{II}+s\left[C_c(g_{mII}-g_{mI}+G_I+G_{II})+C_LG_I\right]+s^2C_cC_L}.
$$

### 第 4 步 — 低频增益与零极点

直流时

$$
\frac{v_{out}}{v_{ground}}(0)=\frac{G_IG_{II}}{g_{mI}g_{mII}+G_IG_{II}}\approx\frac{G_IG_{II}}{g_{mI}g_{mII}}=\frac1{A_v(0)},
$$

与 $v_{ground}$ 同相。在 $g_{mII}\gg G_I,G_{II}$ 时，分子的根为

$$
z\approx-\frac{G_IG_{II}}{g_{mII}C_c}=-|p_1|,
$$

即开环主极点。分母近似为 $s^2C_cC_L+sC_c(g_{mII}-g_{mI})+g_{mI}g_{mII}$；当 $g_{mII}\gg g_{mI}$ 且两根相距较远时，可分解为 $g_{mI}g_{mII}(1+sC_c/g_{mI})(1+sC_L/g_{mII})$，得到极点

$$
p_A\approx-\frac{g_{mI}}{C_c}=-GB,\qquad p_B\approx-\frac{g_{mII}}{C_L}=-|p_2| ,
$$

即跟随器的闭环极点。合起来，

$$
\frac{v_{out}}{v_{ground}}\approx\frac1{A_v(0)}\cdot\frac{1+s/|p_1|}{(1+s/GB)(1+s/|p_2|)} .
$$

### 第 5 步 — 频响形状

响应在直流时为 $1/A_v(0)$，从 $|p_1|$ 起以 +20 dB/十倍频程上升，在 $GB$ 与 $|p_2|$ 之间约为 1（0 dB），高于 $|p_2|$ 后以 −20 dB/十倍频程下降，此时 $C_L$ 把输出拉向信号地。因此地噪声在低频被环路增益抑制，但在 $GB$ 与 $|p_2|$ 之间几乎无衰减地通过。
