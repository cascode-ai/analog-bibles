# 详细步骤 - A473

耦合电容 $C_x$ 必须使 3 位 LSB 部分相对 MSB 部分恰好衰减 $2^3=8$ 倍。选择 $C_x$，使 LSB 一侧经 $C_x$ 看过去相当于一个端接 MSB 阵列的单位电容，再求解双节点电荷平衡加以验证。

### 第 1 步 — 两个部分

- MSB 一侧（缓冲器输入节点，电压为 $v_{OUT}$）：$4C$（$b_0$）、$2C$（$b_1$）、$C$（$b_2$）；总计 $7C$。
- LSB 一侧（节点 $v_L$）：$4C$（$b_3$）、$2C$（$b_4$）、$C$（$b_5$）以及接地的端接电容 $C$；总计 $8C$。

定义两部分的码值 $A=4b_0+2b_1+b_2$ 和 $B=4b_3+2b_4+b_5$（取值均为 0–7）。

### 第 2 步 — 所需的 $C_x$

总电容为 $8C$ 的带端接 3 位阵列输出 $(A/8)V_{REF}$。要使 MSB 节点看到的总电容为 $8C$，LSB 一侧必须提供一个等效单位电容 $C$，因此 $C_x$ 与 LSB 一侧的 $8C$ 串联必须等于 $C$：

$$
\frac1{C_x}+\frac1{8C}=\frac1C
\quad\Longrightarrow\quad
C_x=\frac87C\approx1.143C .
$$

单独的 LSB 阵列会使其节点电压为 $V_L=(B/8)V_{REF}$，源电容为 $8C$；经等效耦合电容 $C$，它对 MSB 节点贡献 $V_L\cdot C/8C=(B/64)V_{REF}$，正是所需的 $1/8$ 缩放。

### 第 3 步 — 用电荷平衡验证

所有电容初始都已放电，缓冲器不取用电荷，因此每个浮空节点的电荷为零：

$$
\begin{aligned}
\text{MSB node:}&\quad 7C\,v_{OUT}+C_x\left(v_{OUT}-v_L\right)=C\,V_{REF}A,\\
\text{LSB node:}&\quad 8C\,v_L+C_x\left(v_L-v_{OUT}\right)=C\,V_{REF}B .
\end{aligned}
$$

消去 $v_L$：

$$
v_{OUT}=V_{REF}\,\frac{A\left(8C+C_x\right)+C_xB}{56C+15C_x}.
$$

当 $C_x=8C/7$ 时，分子为 $(64A+8B)C/7$，分母为 $512C/7$，因此

$$
v_{OUT}=V_{REF}\left(\frac{A}{8}+\frac{B}{64}\right)=V_{REF}\sum_{i=0}^{5}\frac{b_i}{2^{i+1}},
$$

即理想 6 位 DAC 的输出。
