# 详细步骤 - G143

$M_2$ 截止时输出电流只来自 $M_1$。把输出节点的 KCL 与 $M_1$ 的平方律结合，其中栅压由误差放大器决定，得到关于 $V_o$ 的二次方程；再由 $M_1$ 的导通条件选根。

### 第 1 步 — $M_2$ 截止时的 KCL

$I_{d2}=0$，故 $I_o+I_{d1}=0$，且 $I_o=V_o/R_L$。$M_1$ 处于有源区，因此

$$
\frac{V_o}{R_L}=-I_{d1}=\frac{k'}{2}\frac WL\left(V_{gs1}+V_t\right)^2 .
$$

### 第 2 步 — 误差放大器提供的栅极驱动

代入放大器关系式中的 $V_{gs1}$：

$$
V_{gs1}+V_t=-V_{ov}+A\left(V_o-V_i+V_{OSP}\right)=A\left(V_o-V'\right),\qquad V'\equiv V_i+\frac{V_{ov}}{A}-V_{OSP}.
$$

令 $\beta=k'(W/L)$，$u=V_o-V'$。第 1 步化为

$$
\frac{u+V'}{R_L}=\frac{\beta}{2}A^2u^2\ \Rightarrow\ \frac{\beta A^2}{2}u^2-\frac{u}{R_L}-\frac{V'}{R_L}=0 .
$$

### 第 3 步 — 解二次方程

$$
u=\frac{\dfrac1{R_L}\pm\sqrt{\dfrac1{R_L^2}+\dfrac{2\beta A^2V'}{R_L}}}{\beta A^2}.
$$

**选根。** p 沟道 $M_1$ 只有在 $V_{gs1}<V_{t1}=-V_t$，即 $V_{gs1}+V_t=Au<0$ 时才导通；$A>0$ 时这要求 $u<0$。只要 $V'>0$，根号项就大于 $1/R_L$，所以取正号得 $u>0$：该根属于抛物线 $(V_{gs1}+V_t)^2$ 的镜像分支，平方律在那里不适用。取负号得 $u<0$，才是物理解。

### 第 4 步 — 结果

由 $V_o=V'+u$ 并取负号根，

$$
V_o=V_i+\frac{V_{ov}}{A}-V_{OSP}+\frac{1}{k'\frac WLA^2R_L}-\frac{1}{k'\frac WLA^2}\sqrt{\frac1{R_L^2}+2k'\frac WL\frac{A^2}{R_L}\left(V_i+\frac{V_{ov}}{A}-V_{OSP}\right)},
$$

即题中所给关系。当 $\beta A^2R_LV'\gg1$ 时，最后两项约为 $-\sqrt{2V'/(\beta A^2R_L)}$：$V_o$ 以单位斜率跟随 $V_i$，偏移 $V_{ov}/A-V_{OSP}$，误差项随环路增益 $A$ 增大而减小。
