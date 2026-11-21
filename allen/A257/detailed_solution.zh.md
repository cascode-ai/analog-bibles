# 详细步骤 - A257

在输出节点列一个 KCL 方程，理想缓冲器的输出固定为 $-AV_i$，整理含 $V_{out}$ 的项，再把分子、分母化成所要求的零极点形式。

### 第 1 步 — 输出节点方程

缓冲器输出阻抗为零，所以 $C_c$ 左极板位于 $-AV_i$。流入输出节点的电流等于流出的电流：

- 经 $C_c$ 流入：$sC_c(-AV_i-V_{out})$；
- 按图示方向经第二级受控源流出：$g_{mII}V_i$；
- 经 $R_{II}$ 和 $C_{II}$ 流出：$V_{out}(1/R_{II}+sC_{II})$。

$$
sC_c(-AV_i-V_{out})=g_{mII}V_i+V_{out}\Big(sC_{II}+\frac{1}{R_{II}}\Big).
$$

### 第 2 步 — 传递函数

整理得

$$
V_{out}\Big[s(C_c+C_{II})+\frac1{R_{II}}\Big]=-V_i\,(sAC_c+g_{mII}),
$$

$$
\frac{V_{out}}{V_i}=-\frac{sAC_c+g_{mII}}{s(C_c+C_{II})+1/R_{II}} .
$$

从分子提出 $AC_c$、从分母提出 $C_c+C_{II}$：

$$
\frac{V_{out}(s)}{V_i(s)}=\frac{-AC_c}{C_c+C_{II}}\left(\frac{s+g_{mII}/AC_c}{s+1/[R_{II}(C_c+C_{II})]}\right).
$$

### 第 3 步 — 零点与极点

$$
z=-\frac{g_{mII}}{AC_c}\ \ \text{(left half-plane)},\qquad
p=-\frac{1}{R_{II}(C_c+C_{II})}.
$$

零点位于左半平面，因为缓冲器是反相的：经 $C_c$ 的前馈电流 $-sAC_cV_i$ 与第二级送到输出的电流 $-g_{mII}V_i$ 同号，两条路径相加而不是相抵。（若没有反相，二者会在某个正的 $s$ 处抵消，得到常见的右半平面零点。）

作为检验，直流增益为 $-g_{mII}R_{II}$，高频增益为 $-AC_c/(C_c+C_{II})$，由电容分压决定。
