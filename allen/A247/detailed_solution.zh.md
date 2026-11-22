# 详细步骤 - A247

把分母写成二次式 $1+as+bs^2$，建立系数与两个极点的关系，并采用两个近似：两极点相距很远，以及密勒项 $g_{mII}R_IR_{II}C_c$ 在 $s$ 的系数中占主导。

### 第 1 步 — 分母系数与极点

记 $D(s)=1+as+bs^2$，其中

$$
a=R_I(C_I+C_c)+R_{II}(C_{II}+C_c)+g_{mII}R_IR_{II}C_c,\qquad
b=R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II}).
$$

用其根 $p_1$、$p_2$ 表示，

$$
D(s)=\Big(1-\frac{s}{p_1}\Big)\Big(1-\frac{s}{p_2}\Big)=1-s\Big(\frac1{p_1}+\frac1{p_2}\Big)+\frac{s^2}{p_1p_2},
$$

于是

$$
a=-\Big(\frac1{p_1}+\frac1{p_2}\Big),\qquad b=\frac{1}{p_1p_2}.
$$

### 第 2 步 — 主极点

假设两极点相距很远，$|p_2|\gg|p_1|$。则 $1/|p_2|$ 相对 $1/|p_1|$ 可忽略，

$$
a\approx-\frac1{p_1}\quad\Rightarrow\quad p_1\approx-\frac1a .
$$

密勒项比 $R_I(C_I+C_c)$ 约大 $g_{mII}R_{II}$ 倍（若 $C_c$ 相对 $C_I$ 不太小），比 $R_{II}(C_{II}+C_c)$ 约大 $g_{mII}R_IC_c/(C_{II}+C_c)$ 倍。由于 $R_I$、$R_{II}$ 都是高阻节点，这两个因子都很大，故

$$
a\approx g_{mII}R_IR_{II}C_c\quad\Rightarrow\quad p_1\cong\frac{-1}{g_{mII}R_IR_{II}C_c}.
$$

### 第 3 步 — 输出极点

由 $b=1/(p_1p_2)$ 和 $p_1\approx-1/a$，

$$
p_2=\frac{1}{bp_1}\approx-\frac ab
=-\frac{g_{mII}R_IR_{II}C_c}{R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II})}
=\frac{-g_{mII}C_c}{C_IC_{II}+C_{II}C_c+C_IC_c}.
$$

电阻被约去，输出极点由 $g_{mII}$ 和各电容决定。

### 第 4 步 — 近似的自洽性

两极点之比为

$$
\frac{p_2}{p_1}\approx\frac{a^2}{b}\approx\frac{(g_{mII}R_IR_{II}C_c)^2}{R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II})},
$$

由于 $a$ 含有很大的密勒乘积，该比值在典型数值下非常大，所以两极点相距很远的假设成立：这就是极点分裂（pole splitting）。若进一步有 $C_{II}\gg C_c\gg C_I$，输出极点简化为 $p_2\approx-g_{mII}/C_{II}$。
