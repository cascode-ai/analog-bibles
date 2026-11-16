# 详细步骤 - R201

**思路。** 在差分半边电路中，尾节点 P 是虚地（virtual ground），每半边有**两个**内部节点：输出端 A，位于 PMOS 的漏极和 $R_1$ 的上端；节点 B，位于 $R_1$ 的下端，它既是 $M_1$ 的漏极，又是 PMOS 的**栅极**。用包括 $r_O$ 在内的完整小信号模型（small-signal model）对 A 和 B 列 KCL，求解，并在极限情况下检验结果。

### 第 1 步 — 半边电路的小信号模型

把左输出端（$M_3$ 的漏极，$R_1$ 的上端）记为 A，$M_1$ 的漏极（$R_1$ 的下端，$M_3$ 的栅极）记为 B；右输出端为 A′。施加 $v_{in1} = +v_d/2$、$v_{in2} = -v_d/2$：由对称性，P 保持在交流地，且 $v_{A'} = -v_A$。对左半边记 $v_{in} = v_d/2$。体效应（body effect）不起作用：$M_1$/$M_2$ 的源极位于虚地 P，$M_3$/$M_4$ 的源极接 $V_{DD}$，即其衬底（bulk）。

- **$M_1$**（栅极为 $v_{in}$，源极接地，漏极接 B）：从 B 向下流过 $M_1$ 的电流为 $g_{m1}v_{in} + v_B/r_{O1}$。
- **$M_3$**（栅极接 B，源极接交流地，漏极接 A）：它从漏极流向源极、即流出 A 的电流为 $g_{m3}v_{gs3} + v_{ds3}/r_{O3} = g_{m3}v_B + v_A/r_{O3}$。
- **$R_1$** 中从 A 流向 B 的电流为 $(v_A - v_B)/R_1$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 对两个节点列 KCL

**A 点的 KCL**（流出 A 的电流之和为零）：

$$g_{m3}v_B + \frac{v_A}{r_{O3}} + \frac{v_A - v_B}{R_1} = 0 . \tag{1}$$

**B 点的 KCL**（$M_3$ 的栅极没有电流流入，因此 $R_1$ 中的电流经 $M_1$ 流出）：

$$\frac{v_A - v_B}{R_1} = g_{m1}v_{in} + \frac{v_B}{r_{O1}} . \tag{2}$$

### 第 3 步 — 求解 $v_A$

把 (2) 代入 (1)，替换 $R_1$ 中的电流：

$$g_{m3}v_B + \frac{v_A}{r_{O3}} + g_{m1}v_{in} + \frac{v_B}{r_{O1}} = 0 \quad\Longrightarrow\quad v_A = -r_{O3}\left[g_{m1}v_{in} + \left(g_{m3} + \frac{1}{r_{O1}}\right)v_B\right]. \tag{3}$$

由 (2) 得：

$$v_A = v_B\left(1 + \frac{R_1}{r_{O1}}\right) + g_{m1}R_1v_{in}. \tag{4}$$

令 (3) 与 (4) 相等，合并含 $v_B$ 的项（然后分子分母同乘以 $r_{O1}$）：

$$
\begin{aligned}
v_B\left(1 + \frac{R_1}{r_{O1}} + g_{m3}r_{O3} + \frac{r_{O3}}{r_{O1}}\right) &= -g_{m1}v_{in}(R_1 + r_{O3})\\
v_B &= -\frac{g_{m1}r_{O1}(R_1 + r_{O3})}{R_1 + r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}}\,v_{in}.
\end{aligned}
$$

把分母记为

$$D = R_1 + r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}.$$

把 $v_B$ 代入 (4)：

$$
\begin{aligned}
v_A &= -\frac{g_{m1}(R_1 + r_{O3})(r_{O1} + R_1)}{D}v_{in} + g_{m1}R_1v_{in}\\
&= \frac{g_{m1}v_{in}}{D}\left[R_1D - (R_1 + r_{O3})(r_{O1} + R_1)\right].
\end{aligned}
$$

展开方括号：

$$
\begin{aligned}
R_1D &= R_1^2 + R_1r_{O1} + R_1r_{O3} + g_{m3}r_{O1}r_{O3}R_1,\\
(R_1 + r_{O3})(r_{O1} + R_1) &= R_1^2 + R_1r_{O1} + R_1r_{O3} + r_{O1}r_{O3},\\
\text{difference} &= g_{m3}r_{O1}r_{O3}R_1 - r_{O1}r_{O3} = -r_{O1}r_{O3}(1 - g_{m3}R_1).
\end{aligned}
$$

因此

$$v_A = -\frac{g_{m1}r_{O1}r_{O3}(1 - g_{m3}R_1)}{R_1 + r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}}\,v_{in}.$$

### 第 4 步 — 差模增益

$v_{out} = v_A - v_{A'} = 2v_A$，$v_{in1} - v_{in2} = 2v_{in}$，因此差模增益等于 $v_A/v_{in}$：

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -\frac{g_{m1}r_{O1}r_{O3}(1 - g_{m3}R_1)}{R_1 + r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}} .$$

### 第 5 步 — 检验与解释

**极限 $r_O \to \infty$。** 分子分母同除以 $r_{O1}r_{O3}$：

$$A_v = -\frac{g_{m1}(1 - g_{m3}R_1)}{g_{m3} + \dfrac{1}{r_{O1}} + \dfrac{1}{r_{O3}} + \dfrac{R_1}{r_{O1}r_{O3}}}\ \longrightarrow\ -\frac{g_{m1}(1 - g_{m3}R_1)}{g_{m3}} = -g_{m1}\left(\frac{1}{g_{m3}} - R_1\right).$$

直接取 $\lambda = 0$：B 点位于 $v_B = -(g_{m1}/g_{m3})v_{in}$（PMOS 必须通过其栅极驱动提供额外的 $g_{m1}v_{in}$），而输出比 B 高出 $R_1$ 上的压降，因此 $v_A = v_B + R_1g_{m1}v_{in} = v_B(1 - g_{m3}R_1)$。

**极限 $R_1 = 0$。** 此时 $A_v = -g_{m1}r_{O1}r_{O3}/(r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}) = -g_{m1}(1/g_{m3}\parallel r_{O1}\parallel r_{O3})$，即我们熟悉的二极管连接（diode-connected）负载；由于 A 和 B 合为一点，这正是预期的结果。

**$R_1$ 的作用。** 位于 $R_1$ 上端的输出与栅极节点 B 的变化方向**相反**：电流增大会把 B 拉低，却使 A 相对于 B 升高。因此增益随 $R_1$ 增大而减小，在 $R_1 = 1/g_{m3}$ 处为零，当 $R_1 > 1/g_{m3}$ 时改变符号。

**数值感受：** 取 $g_{m1} = g_{m3} = 1$ mS，$r_{O1} = r_{O3} = 50\ \mathrm{k}\Omega$，$R_1 = 500\ \Omega$：

$$
\begin{aligned}
\text{numerator} &= (1\ \mathrm{mS})(50\ \mathrm{k}\Omega)^2(1 - 0.5) = 1.25\times10^{6}\ \Omega,\\
D &= 0.5\ \mathrm{k}\Omega + 50\ \mathrm{k}\Omega + 50\ \mathrm{k}\Omega + (1\ \mathrm{mS})(50\ \mathrm{k}\Omega)^2 = 2.6005\times10^{6}\ \Omega,\\
A_v &= -\frac{1.25\times10^{6}}{2.6005\times10^{6}} = -0.48,
\end{aligned}
$$

接近 $\lambda = 0$ 时的值 $-(1\ \mathrm{mS})(1\ \mathrm{k}\Omega - 0.5\ \mathrm{k}\Omega) = -0.5$。

### 结果

$$A_v = \frac{V_{out}}{V_{in1} - V_{in2}} = -\frac{g_{m1}r_{O1}r_{O3}\,(1 - g_{m3}R_1)}{R_1 + r_{O1} + r_{O3} + g_{m3}r_{O1}r_{O3}}, \qquad A_v \xrightarrow{\ r_O\to\infty\ } -g_{m1}\left(\frac{1}{g_{m3}} - R_1\right).$$

增益随 $R_1$ 增大而减小，在 $R_1 = 1/g_{m3}$ 处为零，超过该值后改变符号。

**常见错误。** 写成 $-g_{m1}(1/g_{m3} + R_1)$，即认为 $R_1$ 与二极管阻抗相加。$M_3$ 的栅极位于 $R_1$ 的**下端**，而输出位于**上端**，因此 $R_1$ 是**相减**的。

**常见错误。** 给出普通二极管负载的增益 $-g_{m1}/g_{m3}$，或者把输出取在 $M_1$ 的漏极（节点 B）。输出是位于 $R_1$ 上端的节点 A。

**常见错误。** 在双节点求解中出现代数错误，例如忘记 $M_3$ 的栅极没有电流流入。用 $R_1 = 0$ 和 $r_O \to \infty$ 这两个极限检验结果，可以发现其中大部分错误。
