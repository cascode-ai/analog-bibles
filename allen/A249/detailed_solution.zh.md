# 详细步骤 - A249

主极点型放大器的单位增益带宽等于其直流增益乘以主极点的幅值。由传递函数取出这两者（采用主极点近似），再相乘。

### 第 1 步 — 直流增益

$s=0$ 时传递函数化为

$$
A_v(0)=g_{mI}g_{mII}R_IR_{II}.
$$

### 第 2 步 — 主极点

把分母写成 $1+as+bs^2$。两极点相距很远时 $p_1\approx-1/a$；当密勒项在 $s$ 的系数中占主导（第二级增益高，$R_I$、$R_{II}$ 很大）时，

$$
a\approx g_{mII}R_IR_{II}C_c\quad\Rightarrow\quad |p_1|\cong\frac{1}{g_{mII}R_IR_{II}C_c}.
$$

### 第 3 步 — 单位增益带宽

当 $|p_1|\ll\omega$ 且 $\omega$ 仍低于次极点和零点时，响应以 $-20$ dB/decade 下降：

$$
|A_v(j\omega)|\approx\frac{A_v(0)|p_1|}{\omega}.
$$

它在下式处降到单位增益：

$$
GB=A_v(0)|p_1|=\frac{g_{mI}g_{mII}R_IR_{II}}{g_{mII}R_IR_{II}C_c}=\frac{g_{mI}}{C_c}.
$$

对 CMOS 两级运放，第一级跨导就是输入对的跨导，$g_{mI}=g_{m1}=g_{m2}$，故 $GB\cong g_{m1}/C_c$。

### 第 4 步 — 物理解释

在 $|p_1|$ 以上，第二级与 $C_c$ 构成积分器：围绕 $C_c$ 的大环路增益使节点 1 接近虚地（virtual ground），第一级输出电流 $g_{mI}v_{in}$ 全部流过 $C_c$，于是（在各级符号约定下）$v_{out}\approx-g_{mI}v_{in}/(sC_c)$。其幅值在 $\omega=g_{mI}/C_c$ 处等于 1，与 $R_I$、$R_{II}$ 和 $g_{mII}$ 无关。
