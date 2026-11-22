# 详细步骤 - A252

对根为实数且相距很远的三次分母，每个系数都由最低几个极点倒数的乘积主导，因此每个极点可由相邻系数之比求得。利用 $R_z\ll R_I,R_{II}$ 简化各系数，并由分子直接读出零点。

### 第 1 步 — 极点相距很远时的系数比

设极点为 $p_1$、$p_2$、$p_4$，且 $|p_1|\ll|p_2|\ll|p_4|$。则

$$
1+bs+cs^2+ds^3=\Big(1+\frac{s}{|p_1|}\Big)\Big(1+\frac{s}{|p_2|}\Big)\Big(1+\frac{s}{|p_4|}\Big)
$$

只保留各系数的主导项，

$$
b\approx\frac{1}{|p_1|},\qquad c\approx\frac{1}{|p_1||p_2|},\qquad d=\frac{1}{|p_1||p_2||p_4|},
$$

于是

$$
|p_1|\approx\frac1b,\qquad |p_2|\approx\frac bc,\qquad |p_4|\approx\frac cd .
$$

### 第 2 步 — 主极点 $p_1$

在 $b=(C_{II}+C_c)R_{II}+(C_I+C_c)R_I+g_{mII}R_IR_{II}C_c+R_zC_c$ 中，由于 $R_z\ll R_I$，$R_zC_c$ 项可忽略；对高增益第二级（$g_{mII}R_{II}\gg1$，$g_{mII}R_I\gg1$），密勒项 $g_{mII}R_IR_{II}C_c$ 大于 $(C_{II}+C_c)R_{II}$ 和 $C_IR_I$。保留含 $R_IC_c$ 的项：

$$
b\approx R_IC_c+g_{mII}R_IR_{II}C_c=(1+g_{mII}R_{II})R_IC_c,
$$

$$
p_1\cong\frac{-1}{(1+g_{mII}R_{II})R_IC_c}\cong\frac{-1}{g_{mII}R_{II}R_IC_c}.
$$

### 第 3 步 — 输出极点 $p_2$

在 $c$ 中，第二项 $R_zC_c(R_IC_I+R_{II}C_{II})$ 比第一项小约 $R_z/R_{II}$ 或 $R_z/R_I$ 倍，故在 $R_z\ll R_I,R_{II}$ 时

$$
c\approx R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II}).
$$

于是

$$
p_2\approx-\frac bc=\frac{-g_{mII}R_IR_{II}C_c}{R_IR_{II}(C_IC_{II}+C_cC_I+C_cC_{II})}
=\frac{-g_{mII}C_c}{C_IC_{II}+C_cC_I+C_cC_{II}}.
$$

若进一步有 $C_I\ll C_c$ 且 $C_I\ll C_{II}$，即 $C_I(C_c+C_{II})\ll C_cC_{II}$，分母约为 $C_cC_{II}$，$p_2\cong-g_{mII}/C_{II}$。

### 第 4 步 — 由 $R_z$ 引入的极点

利用第 3 步的 $c$ 和 $d=R_IR_{II}R_zC_IC_{II}C_c$：

$$
\frac cd=\frac{C_IC_{II}+C_cC_I+C_cC_{II}}{R_zC_IC_{II}C_c}
=\frac{1}{R_z}\Big(\frac1{C_c}+\frac1{C_{II}}+\frac1{C_I}\Big)\approx\frac{1}{R_zC_I},
$$

最后一步用到 $C_I\ll C_c,C_{II}$（第一级输出节点只有很小的器件电容）。因此

$$
p_4\cong\frac{-1}{R_zC_I}.
$$

### 第 5 步 — 零点

无需近似：当 $1-s\big[(C_c/g_{mII})-R_zC_c\big]=0$ 时分子为零，即

$$
z_1=\frac{1}{C_c(1/g_{mII}-R_z)}.
$$

$R_z<1/g_{mII}$ 时它位于右半平面，$R_z=1/g_{mII}$ 时移至无穷远，$R_z>1/g_{mII}$ 时进入左半平面，这正是调零电阻的用处。
