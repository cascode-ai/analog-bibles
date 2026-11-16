# 详细步骤 - R274

**思路。** 写出五管放大器的小信号模型（small-signal model），其中 $R_1$ 接在二极管连接节点 F 与输出之间。对三个内部节点列基尔霍夫电流定律（KCL）方程，再加上一个观察结论（尾电流源理想时，两个 PMOS 的电流必须相互抵消），即可得到增益的精确闭式解。其物理含义是：通过电流镜（current mirror）的作用，$R_1$ 对输出的负载相当于一个接地的 $R_1/2$。

### 第 1 步 — 记号与偏置点

把 $M_1$ 的漏极（即 $M_3$ 的栅极/漏极）称为节点 F，把公共源极节点称为 P。记号：$g_N = g_{m1} = g_{m2}$，$r_N = r_{O1} = r_{O2}$，$g_P = g_{m3} = g_{m4}$，$r_P = r_{O3} = r_{O4}$，$v_d = v_1 - v_2$。

差模输入为零时，无缺陷放大器有 $V_F = V_{out}$（电流镜的两个器件电流相等，$V_{SD}$ 也相等）。加入 $R_1$ 后，这一状态仍满足所有方程，因为此时 $R_1$ 中没有电流；因此 $R_1$ **不会引起失调**，偏置点不变。

### 第 2 步 — 小信号模型与 KCL

理想尾电流源相当于开路。各支路电流为：

$$
\begin{aligned}
i_1 &= g_N(v_1 - v_P) + (v_F - v_P)/r_N && (M_1:\ \text{F} \to \text{P}),\\
i_2 &= g_N(v_2 - v_P) + (v_{out} - v_P)/r_N && (M_2:\ \text{out} \to \text{P}),\\
i_3 &= (g_P + 1/r_P)\,v_F && (M_3 \text{ diode}:\ \text{F} \to \text{ac ground}),\\
i_4 &= g_Pv_F + v_{out}/r_P && (M_4:\ \text{out} \to \text{ac ground}),\\
i_R &= (v_{out} - v_F)/R_1 && (R_1:\ \text{out} \to \text{F}).
\end{aligned}
$$

<!-- diagram: diagram-01.cir -->

KCL 方程（输出端空载）：

$$\text{F: } i_1 + i_3 = i_R, \qquad \text{P: } i_1 + i_2 = 0, \qquad \text{out: } i_2 + i_4 + i_R = 0 .$$

### 第 3 步 — 两个 PMOS 的电流相互抵消：用 $v_F$ 表示 $v_{out}$

把 F 和输出节点的方程相加，得 $i_1 + i_2 + i_3 + i_4 = 0$，再结合 P 的方程，只剩下 $i_3 + i_4 = 0$：经 $M_3$ 和 $M_4$ 流下来的全部电流都必须从固定的尾电流源流走，内部支路 $R_1$ 无法改变这一点。因此

$$
\begin{aligned}
(g_P + 1/r_P)v_F + g_Pv_F + v_{out}/r_P &= 0\\
v_{out} &= -(1 + 2g_Pr_P)\,v_F \quad\Longrightarrow\quad v_F = -\frac{v_{out}}{1 + 2g_Pr_P}. \tag{1}
\end{aligned}
$$

### 第 4 步 — 尾节点与节点 F

**节点 P**（$i_1 + i_2 = 0$），令 $\alpha \equiv g_N + 1/r_N$：

$$g_N(v_1 + v_2) + \frac{v_F + v_{out}}{r_N} = 2\alpha v_P \quad\Longrightarrow\quad \alpha v_P = \frac{g_N(v_1 + v_2)}{2} + \frac{v_F + v_{out}}{2r_N}. \tag{2}$$

**节点 F**（$i_1 + i_3 = i_R$）：

$$g_Nv_1 - \alpha v_P + \frac{v_F}{r_N} + \left(g_P + \frac{1}{r_P}\right)v_F = \frac{v_{out} - v_F}{R_1}.$$

代入 (2)，输入项合并为 $g_Nv_1 - g_N(v_1 + v_2)/2 = g_Nv_d/2$：

$$\frac{g_Nv_d}{2} = -\left(\frac{1}{2r_N} + g_P + \frac{1}{r_P} + \frac{1}{R_1}\right)v_F + \left(\frac{1}{2r_N} + \frac{1}{R_1}\right)v_{out}. \tag{3}$$

式中只出现 $v_d$，因此共模（common-mode）增益为零，结果与输入的施加方式无关。

### 第 5 步 — 求解增益

把 (1) 代入 (3)，并利用 $g_P + 1/r_P = (1 + g_Pr_P)/r_P$：

$$\frac{g_Nv_d}{2} = v_{out}\left[\frac{\frac{1}{2r_N} + \frac{1}{R_1} + \frac{1 + g_Pr_P}{r_P}}{1 + 2g_Pr_P} + \frac{1}{2r_N} + \frac{1}{R_1}\right].$$

通分到公分母 $1 + 2g_Pr_P$ 后，$\tfrac{1}{2r_N} + \tfrac{1}{R_1}$ 项的总权重为 $1 + (1 + 2g_Pr_P) = 2(1 + g_Pr_P)$：

$$
\begin{aligned}
\left[\ \cdot\ \right] &= \frac{2(1 + g_Pr_P)\left(\frac{1}{2r_N} + \frac{1}{R_1}\right) + \frac{1 + g_Pr_P}{r_P}}{1 + 2g_Pr_P}
= \frac{(1 + g_Pr_P)\left(\frac{1}{r_N} + \frac{1}{r_P} + \frac{2}{R_1}\right)}{1 + 2g_Pr_P}.
\end{aligned}
$$

因此

$$A_v = \frac{v_{out}}{v_d} = \frac{g_N}{2}\cdot\frac{1 + 2g_Pr_P}{(1 + g_Pr_P)\left(\frac{1}{r_N} + \frac{1}{r_P} + \frac{2}{R_1}\right)} = g_{m1}\left(r_{O2}\,\Big\|\,r_{O4}\,\Big\|\,\frac{R_1}{2}\right)\frac{1 + 2g_{m4}r_{O4}}{2(1 + g_{m4}r_{O4})} .$$

最后一个因子是五管放大器中常见的小修正项，当 $g_{m4}r_{O4} \gg 1$ 时趋于 1：

$$A_v \approx g_{m1}\left(r_{O2}\,\|\,r_{O4}\,\|\,\frac{R_1}{2}\right).$$

当 $R_1 \to \infty$ 时，它回到无缺陷增益 $g_{m1}(r_{O2}\|r_{O4})$ ✓。

### 第 6 步 — 为什么 $R_1$ 看起来像 $R_1/2$

把增益看作 $G_mR_{out}$。

- **$G_m$ 不变**（$\approx g_{m1}$）：输出短路时，$R_1$ 把低阻抗节点 F（$\approx 1/g_{m3}$）接到地，只分走极小一部分信号电流。
- **$R_{out}$ 减小。** 在输出端加测试电压 $v_x$，它驱动电流 $i \approx v_x/R_1$ 经 $R_1$ 流入 F，在那里被二极管连接的 $M_3$ 吸收，使 $M_3$ 的电流减小 $i$。$M_4$ 复制这一变化，相当于从输出端额外抽取了 $i$。测试源总共提供 $2i$：$R_1$ 的作用相当于从输出到地的 $R_1/2$，且
$$R_{out} \approx r_{O2}\,\|\,r_{O4}\,\|\,\frac{R_1}{2}.$$

### 第 7 步 — 数值示例

取 $g_{m1} = 2$ mS，$g_{m4} = 1$ mS，$r_{O2} = r_{O4} = 40\ \mathrm{k}\Omega$，$R_1 = 40\ \mathrm{k}\Omega$。

$$
\begin{aligned}
\text{correction factor} &= \frac{1 + 2(1\ \mathrm{mS})(40\ \mathrm{k}\Omega)}{2\left(1 + (1\ \mathrm{mS})(40\ \mathrm{k}\Omega)\right)} = \frac{81}{82} = 0.988,\\
\text{defect-free: } A_v &= (2\ \mathrm{mS})(40\,\|\,40\ \mathrm{k}\Omega)(0.988) = (2\ \mathrm{mS})(20\ \mathrm{k}\Omega)(0.988) = 39.5,\\
\text{with } R_1: \ A_v &= (2\ \mathrm{mS})(40\,\|\,40\,\|\,20\ \mathrm{k}\Omega)(0.988) = (2\ \mathrm{mS})(10\ \mathrm{k}\Omega)(0.988) = 19.8 .
\end{aligned}
$$

在本例中，该缺陷使增益减半。若错误地用 $R_1$ 代替 $R_1/2$，将得到 $(2\ \mathrm{mS})(13.3\ \mathrm{k}\Omega)(0.988) = 26.3$。

### 结果

$$|A_v| = g_{m1}\left(r_{O2}\,\Big\|\,r_{O4}\,\Big\|\,\frac{R_1}{2}\right)\cdot\frac{2g_{m4}r_{O4} + 1}{2(g_{m4}r_{O4} + 1)} \approx g_{m1}\left(r_{O2}\,\|\,r_{O4}\,\|\,\frac{R_1}{2}\right).$$

$R_1$ 对输出的负载作用相当于一个接地的 $R_1/2$，因为它注入二极管连接节点的电流会被电流镜复制到输出端。跨导（transconductance）不变，并且在平衡偏置点上 $R_1$ 中没有直流电流（不产生失调）。

**常见错误。** 因为偏置点上 $V_F = V_{out}$，就断定增益不变。这只说明 $R_1$ 中没有**直流**电流；对于信号，$v_F$ 很小而 $v_{out}$ 很大，因此 $R_1$ 中的电流约为 $v_{out}/R_1$。

**常见错误。** 使用 $r_{O2}\|r_{O4}\|R_1$，即漏掉了因子 1/2。$R_1$ 从输出端抽取的电流被二极管连接的 $M_3$ 吸收，再由 $M_4$ 镜像，因此输出端损失的电流是它的两倍。

**常见错误。** 把 $R_1$ 放在 F 与尾节点之间，或者把它当作从输出到 $V_{DD}$ 的负载。它连接的是二极管连接节点与输出，其作用是通过电流镜体现的。
