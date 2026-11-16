# 详细步骤 - R120

**思路。** 该电路是一个 NMOS 共源共栅结构（$M_1$ 在 $M_2$ 下方），但其 PMOS 负载 $M_3$ 并不是普通的电流源（current source）：它的栅极由共源共栅节点 $X$ 驱动。在 $X$ 和输出端列 KCL 并求解；再从 $G_mR_{out}$ 的角度解释结果中的因子 $(g_{m2} - g_{m3})$。

### 第 1 步 — 小信号模型（small-signal model）

把 $M_1$ 与 $M_2$ 之间的节点（它同时驱动 $M_3$ 的栅极）记为节点 $X$。$V_{b1}$ 和 $V_{DD}$ 为交流地，且 $\gamma = 0$。以 $v_X$ 和 $v_{out}$ 为未知量：

- **$M_1$**：$v_{gs1} = v_{in}$；受控源 $g_{m1}v_{in}$ 从 $X$ 流向地，$r_{O1}$ 从 $X$ 接到地。
- **$M_2$**：$v_{gs2} = -v_X$；受控源 $-g_{m2}v_X$ 从 out（漏极）流向 $X$（源极），$r_{O2}$ 接在 out 与 $X$ 之间。
- **$M_3$**：$v_{gs3} = v_X$（源极接交流地）；受控源 $g_{m3}v_X$ 从 out（漏极）流向交流地，$r_{O3}$ 从 out 接到交流地。

<!-- diagram: diagram-01.cir -->

定义两个支路电流：

$$i_2 \equiv \text{current from out down through } M_2 \text{ into } X = -g_{m2}v_X + \frac{v_{out} - v_X}{r_{O2}},$$

$$i_3 \equiv \text{current from } V_{DD} \text{ through } M_3 \text{ into out} = -g_{m3}v_X - \frac{v_{out}}{r_{O3}}$$

（$i_3$ 等于 $M_3$ 的漏源电流 $g_{m3}v_X + v_{out}/r_{O3}$ 的相反数）。

### 第 2 步 — 两个 KCL 方程

**在输出端**（不接负载），$i_3 = i_2$：

$$-g_{m3}v_X - \frac{v_{out}}{r_{O3}} = -g_{m2}v_X + \frac{v_{out} - v_X}{r_{O2}}. \tag{1}$$

**在 $X$ 点**，$i_2 = g_{m1}v_{in} + v_X/r_{O1}$；结合 $i_2 = i_3$：

$$-g_{m3}v_X - \frac{v_{out}}{r_{O3}} = g_{m1}v_{in} + \frac{v_X}{r_{O1}}. \tag{2}$$

### 第 3 步 — 求解增益

**由式 (1) 求 $v_X$。** 把 $v_X$ 项移到左边、$v_{out}$ 项移到右边：

$$v_X\left(g_{m2} - g_{m3} + \frac{1}{r_{O2}}\right) = v_{out}\,\frac{r_{O2} + r_{O3}}{r_{O2}r_{O3}}.$$

两边同乘 $r_{O2}r_{O3}$：

$$v_X\,r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right] = v_{out}\,(r_{O2} + r_{O3}),$$

$$v_X = \frac{r_{O2} + r_{O3}}{r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]}\,v_{out}. \tag{3}$$

**整理式 (2)：**

$$g_{m1}v_{in} = -v_X\left(g_{m3} + \frac{1}{r_{O1}}\right) - \frac{v_{out}}{r_{O3}} = -v_X\,\frac{1 + g_{m3}r_{O1}}{r_{O1}} - \frac{v_{out}}{r_{O3}}.$$

**代入式 (3)：**

$$g_{m1}v_{in} = -v_{out}\left[\frac{(r_{O2} + r_{O3})(1 + g_{m3}r_{O1})}{r_{O1}r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]} + \frac{1}{r_{O3}}\right].$$

以 $r_{O1}r_{O3}[1 + (g_{m2} - g_{m3})r_{O2}]$ 为公分母，方括号内的分子为

$$
\begin{aligned}
&(r_{O2} + r_{O3})(1 + g_{m3}r_{O1}) + r_{O1}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]\\
&= r_{O2} + r_{O3} + g_{m3}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} + r_{O1} + g_{m2}r_{O1}r_{O2} - g_{m3}r_{O1}r_{O2}\\
&= r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3},
\end{aligned}
$$

其中两个 $g_{m3}r_{O1}r_{O2}$ 项相互抵消。因此

$$g_{m1}v_{in} = -v_{out}\,\frac{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}}{r_{O1}r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]},$$

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}r_{O1}r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}}.$$

**验证。** 若 $M_3$ 的栅极接交流地（$g_{m3} = 0$）：
$$-\frac{g_{m1}r_{O1}r_{O3}(1 + g_{m2}r_{O2})}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2}} \approx -g_{m1}\left\{r_{O3}\,\Big\|\,\left[(1 + g_{m2}r_{O2})r_{O1} + r_{O2}\right]\right\},$$
这正是熟悉的以电流源 $r_{O3}$ 为负载的共源共栅级增益。✓

### 第 4 步 — 大 $g_mr_O$ 近似

若所有 $g_mr_O \gg 1$ 且 $g_{m2} \neq g_{m3}$（从而 $|g_{m2} - g_{m3}|r_{O2} \gg 1$），则 $1 + (g_{m2} - g_{m3})r_{O2} \approx (g_{m2} - g_{m3})r_{O2}$，并且 $g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} = r_{O1}(g_{m2}r_{O2} + g_{m3}r_{O3})$ 远大于 $r_{O1} + r_{O2} + r_{O3}$：

$$A_v \approx -\frac{g_{m1}r_{O1}r_{O3}(g_{m2} - g_{m3})r_{O2}}{r_{O1}(g_{m2}r_{O2} + g_{m3}r_{O3})} = -\frac{g_{m1}(g_{m2} - g_{m3})\,r_{O2}r_{O3}}{g_{m2}r_{O2} + g_{m3}r_{O3}}.$$

当 $g_{m2} > g_{m3}$ 时，增益为反相，量级为 $g_mr_O$。

### 第 5 步 — 按 $A_v = -G_mR_{out}$ 理解

**跨导（transconductance，输出端短路）。** $X$ 点电压变化约 $v_X \approx -g_{m1}v_{in}/g_{m2}$。$M_2$ 把 $M_1$ 的信号电流 $\approx g_{m1}v_{in}$ 从输出端**抽出**，而 $M_3$ 的栅极电压下降，使它额外向输出端**注入** $\approx g_{m3}g_{m1}v_{in}/g_{m2}$ 的电流。净跨导为 $G_m \approx g_{m1}(1 - g_{m3}/g_{m2}) = g_{m1}(g_{m2} - g_{m3})/g_{m2}$。精确地，$G_m = g_{m1}r_{O1}[1 + (g_{m2} - g_{m3})r_{O2}]/R_c$，其中 $R_c = r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}$ 是向下看进共源共栅支路的电阻。

**输出电阻（output resistance）。** 测试电压 $v_x$ 驱动电流 $v_x/R_c$ 向下流入共源共栅支路，使 $X$ 点升高 $r_{O1}v_x/R_c$；$M_3$ 的栅极升高，使其电流减小 $g_{m3}r_{O1}v_x/R_c$，这部分电流也必须由测试源提供。再计入 $r_{O3}$：

$$\frac{1}{R_{out}} = \frac{1}{r_{O3}} + \frac{1 + g_{m3}r_{O1}}{R_c}\quad\Longrightarrow\quad R_{out} = r_{O3}\,\Big\|\,\frac{R_c}{1 + g_{m3}r_{O1}} \approx r_{O3}\,\Big\|\,\frac{g_{m2}r_{O2}}{g_{m3}}.$$

$-G_mR_{out}$ 重现了第 3 步的精确结果（$R_c$ 被约去）。因此，把 $M_3$ 的栅极接到 $X$ 既从信号电流中减去了 $g_{m3}/g_{m2}$ 的比例，又把输出电阻从约 $r_{O3}$ 降低到 $r_{O3}\parallel(g_{m2}r_{O2}/g_{m3})$。

### 结果

$$A_v = -\frac{g_{m1}r_{O1}r_{O3}\left[1 + (g_{m2} - g_{m3})r_{O2}\right]}{r_{O1} + r_{O2} + r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3}},$$

当 $g_mr_O \gg 1$ 时：

$$A_v \approx -\frac{g_{m1}(g_{m2} - g_{m3})\,r_{O2}r_{O3}}{g_{m2}r_{O2} + g_{m3}r_{O3}}.$$

**常见错误。** 把 $M_3$ 当作普通电流源（栅极接交流地）。这样得到的是普通共源共栅结果 $\approx -g_{m1}[r_{O3}\parallel g_{m2}r_{O1}r_{O2}] \approx -g_{m1}r_{O3}$，既漏掉了因子 $(g_{m2} - g_{m3})$，也忽略了输出电阻的降低。

**常见错误。** 弄错 $M_3$ 贡献的符号。当 $v_{in}$ 升高时，$X$ **下降**，PMOS 的导通电流**增大**，与 $M_2$ 的下拉作用相抗衡；若把流入输出端的电流写成 $+g_{m3}v_X$，就会把 $(g_{m2} - g_{m3})$ 变成 $(g_{m2} + g_{m3})$。

**常见错误。** 把输出取在 $X$ 点，或把 $M_3$ 的栅极接到输出端或 $V_{DD}$。输出端是 $M_2$ 与 $M_3$ 的公共漏极，并且当 $g_{m2} > g_{m3}$ 时该级为反相放大。
