# 详细步骤 - R273

**思路。** 写出五管放大器的小信号模型（small-signal model），其中额外的电阻 $R_1$ 接在二极管连接节点 F 与尾节点 P 之间。在 F、P 和输出节点列 KCL，得到三个方程；其中两个方程的组合用 $v_F$ 确定 $v_{out}$，剩下的两个方程给出 $v_F$。然后在 $g_mr_O \gg 1$ 条件下化简：$R_1$ 连接的是两个低阻抗节点，因此它几乎不改变增益。

### 第 1 步 — 小信号模型与 KCL

把 $M_1$ 的漏极（即 $M_3$ 的栅极/漏极）称为节点 F，把公共源极节点称为 P。记号：$g_N = g_{m1} = g_{m2}$，$r_N = r_{O1} = r_{O2}$，$g_P = g_{m3} = g_{m4}$，$r_P = r_{O3} = r_{O4}$；输入为 $v_1$、$v_2$，差模输入为 $v_d = v_1 - v_2$。理想尾电流源相当于开路，每个晶体管等效为 $g_mv_{gs}$（从漏极流向源极）与其 $r_O$ 并联：

- **$M_1$**（漏极 F，源极 P）：$i_1 = g_N(v_1 - v_P) + (v_F - v_P)/r_N$，由 F 流向 P。
- **$M_2$**（漏极接输出，源极 P）：$i_2 = g_N(v_2 - v_P) + (v_{out} - v_P)/r_N$，由输出流向 P。
- **$M_3$**（在 F 处二极管连接，源极接交流地）：$i_3 = (g_P + 1/r_P)v_F$，由 F 流向交流地。
- **$M_4$**（栅极 F，漏极接输出）：$i_4 = g_Pv_F + v_{out}/r_P$，由输出流向交流地。
- **$R_1$**：$i_R = (v_F - v_P)/R_1$，由 F 流向 P。

<!-- diagram: diagram-01.cir -->

KCL 方程（输出端空载）：

$$
\begin{aligned}
\text{node F:}\quad & i_1 + i_3 + i_R = 0, \\
\text{node P:}\quad & i_1 + i_2 + i_R = 0, \\
\text{node out:}\quad & i_2 + i_4 = 0 .
\end{aligned}
$$

### 第 2 步 — 用 $v_F$ 表示输出电压

用 F 的方程减去 P 的方程，得 $i_2 = i_3$：无论 $R_1$ 如何，$M_2$ 的电流都等于二极管连接器件的电流，因为 $R_1$ 和 $M_1$ 的电流都流经同一对节点。于是由输出节点的 KCL 得 $i_4 = -i_3$：

$$
\begin{aligned}
g_Pv_F + \frac{v_{out}}{r_P} &= -\left(g_P + \frac{1}{r_P}\right)v_F\\
\frac{v_{out}}{r_P} &= -\left(2g_P + \frac{1}{r_P}\right)v_F\\
v_{out} &= -(1 + 2g_Pr_P)\,v_F . \tag{1}
\end{aligned}
$$

### 第 3 步 — 求解 $v_F$

**方程 A**（$i_2 = i_3$，代入 (1)）：

$$g_N(v_2 - v_P) + \frac{-(1 + 2g_Pr_P)v_F - v_P}{r_N} = \left(g_P + \frac{1}{r_P}\right)v_F .$$

令 $\alpha \equiv g_N + 1/r_N$，$K_a \equiv g_P + 1/r_P + (1 + 2g_Pr_P)/r_N$：

$$g_Nv_2 - \alpha v_P = K_av_F \quad\Longrightarrow\quad v_P = \frac{g_Nv_2 - K_av_F}{\alpha}. \tag{2}$$

**方程 B**（展开写出节点 F 的 KCL）：

$$g_N(v_1 - v_P) + \frac{v_F - v_P}{r_N} + \left(g_P + \frac{1}{r_P}\right)v_F + \frac{v_F - v_P}{R_1} = 0,$$

即令 $K_b \equiv 1/r_N + g_P + 1/r_P + 1/R_1$，有

$$g_Nv_1 = \left(\alpha + \frac{1}{R_1}\right)v_P - K_bv_F . \tag{3}$$

把 (2) 代入 (3)，并乘以 $\alpha$：

$$
\begin{aligned}
\alpha g_Nv_1 &= \left(\alpha + \tfrac{1}{R_1}\right)(g_Nv_2 - K_av_F) - \alpha K_bv_F\\
v_F &= -\,\frac{g_N\left[\alpha v_1 - \left(\alpha + \tfrac{1}{R_1}\right)v_2\right]}{\left(\alpha + \tfrac{1}{R_1}\right)K_a + \alpha K_b}.
\end{aligned}
$$

### 第 4 步 — 精确增益

把 $v_F$ 代入 (1)：

$$v_{out} = \frac{(1 + 2g_Pr_P)\,g_N\left[\alpha v_1 - \left(\alpha + \tfrac{1}{R_1}\right)v_2\right]}{\left(\alpha + \tfrac{1}{R_1}\right)K_a + \alpha K_b}.$$

由于 $R_1$ 破坏了对称性，$v_1$ 和 $v_2$ 以**不同的权重**（$\alpha$ 与 $\alpha + 1/R_1$）出现，因此电路存在共模增益，$V_{out}/(V_{in1} - V_{in2})$ 与输入的施加方式有关。对于标准的**平衡**驱动，$v_1 = v_d/2$，$v_2 = -v_d/2$，方括号变为 $(2\alpha + 1/R_1)v_d/2$：

$$\boxed{A_v = \frac{v_{out}}{v_d} = \frac{(1 + 2g_Pr_P)\,g_N\left(2\alpha + \tfrac{1}{R_1}\right)}{2\left[\left(\alpha + \tfrac{1}{R_1}\right)K_a + \alpha K_b\right]}}$$

用各个 $r$ 写出来，即为

$$A_v = \frac{g_Nr_Nr_P(1 + 2g_Pr_P)\left[2R_1(1 + g_Nr_N) + r_N\right]}{2\left\{2R_1(r_N + r_P)(1 + g_Nr_N)(1 + g_Pr_P) + r_N\left[r_N(1 + g_Nr_P + g_Pr_P) + 2r_P(1 + g_Pr_P)\right]\right\}} .$$

**验算，$R_1 \to \infty$：** $1/R_1 \to 0$，且 $K_a + K_b = 2(1 + g_Pr_P)(1/r_N + 1/r_P)$，因此

$$A_v \to \frac{(1 + 2g_Pr_P)g_N}{2(1 + g_Pr_P)(1/r_N + 1/r_P)} = g_N(r_N\|r_P)\frac{1 + 2g_Pr_P}{2(1 + g_Pr_P)} \approx g_{m1}(r_{O2}\|r_{O4}),$$

这正是我们熟悉的无缺陷增益 ✓。

### 第 5 步 — $g_mr_O \gg 1$ 时的简化结果

利用 $\alpha \approx g_N$，$1 + 2g_Pr_P \approx 2g_Pr_P$，$K_a \approx g_P(r_N + 2r_P)/r_N$，$K_b \approx g_P + 1/R_1$，再将分子和分母同乘以 $r_NR_1$：

$$A_v \approx \frac{g_Ng_Pr_Nr_P(1 + 2g_NR_1)}{2g_Ng_PR_1(r_N + r_P) + (g_N + g_P)r_N + 2g_Pr_P} = g_N(r_N\|r_P)\,\frac{1 + \dfrac{1}{2g_NR_1}}{1 + \dfrac{(g_N + g_P)r_N + 2g_Pr_P}{2g_Ng_PR_1(r_N + r_P)}} .$$

若各 $g_m$ 和 $r_O$ 都相等，则 $A_v \approx g_m\dfrac{r_O}{2}\cdot\dfrac{1 + 2g_mR_1}{2(1 + g_mR_1)}$。当 $g_mR_1 \gg 1$ 时，它变为（对于参数不等的器件，小修正项的系数略有变化，但仍为 $1/(g_mR_1)$ 量级）

$$A_v \approx g_{m1}(r_{O2}\|r_{O4})\left(1 - \frac{1}{2g_{m3}R_1}\right).$$

**为什么增益几乎不变。** $R_1$ 连接的是两个**低阻抗**节点：F（$\approx 1/g_{m3}$，二极管连接器件）和 P（$\approx 1/(2g_{m1})$，两个源极）。在平衡输入下，$v_F \approx -(g_{m1}v_d/2)/g_{m3}$，$v_P$ 很小，因此 $R_1$ 中只有 $i_R \approx v_F/R_1$ 的电流，约占信号电流的 $1/(2g_{m3}R_1)$。短路跨导（transconductance）变为 $G_m \approx g_{m1}(1 - 1/(2g_{m3}R_1))$，而输出电阻（output resistance）仍 $\approx r_{O2}\|r_{O4}$。

**其他驱动方式。** 采用同样的近似，$v_{out} \approx 2g_Ng_Pr_Nr_P[g_NR_1v_1 - (1 + g_NR_1)v_2]/D$，其中 $D$ 是上式的分母。对于相同的器件，相对于 $g_mr_O/2$，只驱动 $V_{in1}$ 时的因子为 $g_mR_1/(1 + g_mR_1)$，只驱动 $V_{in2}$ 时的因子为 1。当 $R_1$ 很大时，所有情况都趋于 $g_{m1}(r_{O2}\|r_{O4})$。

### 第 6 步 — 数值示例

取 $g_N = g_P = 1$ mS，$r_N = r_P = 100\ \mathrm{k}\Omega$，$R_1 = 10\ \mathrm{k}\Omega$：

$$
\begin{aligned}
\alpha &= 1 + 0.01 = 1.01\ \mathrm{mS}, \qquad \alpha + 1/R_1 = 1.11\ \mathrm{mS},\\
K_a &= 1 + 0.01 + 0.01(1 + 200) = 3.02\ \mathrm{mS}, \qquad K_b = 0.01 + 1 + 0.01 + 0.1 = 1.12\ \mathrm{mS},\\
A_v &= \frac{201\times(1\ \mathrm{mS})\times(2.02 + 0.1)\ \mathrm{mS}}{2\left[(1.11)(3.02) + (1.01)(1.12)\right]\ \mathrm{mS^2}} = \frac{426.1}{2\times4.483} = 47.5 .
\end{aligned}
$$

没有缺陷时，增益为 $50\times201/202 = 49.75$。近似公式给出 $50\times21/22 = 47.7$，且 $1 - 1/(2g_mR_1) = 0.95$。该缺陷只使增益损失约 4.5 %。

### 结果

对于平衡输入，

$$A_v = \frac{(1 + 2g_{m3}r_{O3})\,g_{m1}\left(2\alpha + 1/R_1\right)}{2\left[(\alpha + 1/R_1)K_a + \alpha K_b\right]},\quad \alpha = g_{m1} + \frac{1}{r_{O1}},\ K_a = g_{m3} + \frac{1}{r_{O3}} + \frac{1 + 2g_{m3}r_{O3}}{r_{O1}},\ K_b = \frac{1}{r_{O1}} + g_{m3} + \frac{1}{r_{O3}} + \frac{1}{R_1},$$

在 $g_mr_O \gg 1$ 且 $g_mR_1 \gg 1$ 时，它为

$$|A_v| \approx g_{m1}(r_{O2}\|r_{O4})\left(1 - \frac{1}{2g_{m3}R_1}\right).$$

增益与无缺陷时的值 $g_{m1}(r_{O2}\|r_{O4})$ 相比**基本不变**，因为 $R_1$ 连接的是两个低阻抗节点（$\approx 1/g_{m3}$ 和 $\approx 1/(2g_{m1})$），只分走了一小部分信号电流。由于 $R_1$ 破坏了对称性，电路还会出现一个很小的共模增益。（在直流情况下，$R_1$ 中流过的偏置电流会被电流镜复制，造成系统失调；上述结果假设所有器件都保持饱和。）

**常见错误。** 认为 $R_1$ 会严重破坏增益，例如使增益变为 $g_mR_1$ 或 $g_m(r_O\|R_1)$。$R_1$ 并没有接到高阻抗的输出节点上；它位于二极管连接节点与尾节点之间，这两个节点的阻抗都是 $1/g_m \ll R_1$ 的量级。

**常见错误。** 认为 $R_1$ 与 $r_{O1}$ 并联，从而通过 $r_{O1}$ 改变增益。在一阶近似下，$r_{O1}$ 并不出现在无缺陷增益中（二极管连接节点是低阻抗的），$R_1$ 也一样，只是多了一个很小的 $1/(g_mR_1)$ 修正项。

**常见错误。** 使增益加倍或反号。$R_1$ 并没有为输出增加第二条信号通路：输出电流仍然是经电流镜复制的 $i_1 - i_2$，减去经 $R_1$ 分走的一小部分。
