# 详细步骤 - R321

**思路。** 栅极串联 $R_G$ 后，栅极不再是交流地，而成为第三个节点，它经 $C_{GS}$ 与源极耦合，经 $C_{GD}$ 与漏极耦合。在源极 S、栅极 G 和输出端 D 列基尔霍夫电流定律（KCL）方程，以 $v_{gs}$ 作为主要未知量，逐个消去节点电压，得到二阶传递函数。用 $C_{GD} = 0$ 和 $R_G = 0$ 两种极限情况验证结果。

### 第 1 步 — 小信号模型（small-signal model）

<!-- diagram: diagram-01.cir -->

把 $M_1$ 的源极、栅极和漏极（输出端）分别记为 S、G 和 D。$R_S$ 接在输入端与 S 之间，$R_D$ 接在 D 与交流地之间，$R_G$ 接在 G 与交流地（$V_b$）之间；$C_{GS}$ 连接 G 与 S，$C_{GD}$ 连接 G 与 D；沟道电流 $g_mv_{gs} = g_m(V_G - V_S)$ 从 D 流向 S（$\lambda = \gamma = 0$：没有 $r_O$，也没有 $g_{mb}$）。

### 第 2 步 — 三个 KCL 方程

令 $v_{gs} = V_G - V_S$，对流入每个节点的电流求和：

$$\frac{V_{in} - V_S}{R_S} + (V_G - V_S)C_{GS}s + g_m(V_G - V_S) = 0 , \qquad (1)$$

$$-\frac{V_G}{R_G} + (V_S - V_G)C_{GS}s + (V_{out} - V_G)C_{GD}s = 0 , \qquad (2)$$

$$-\frac{V_{out}}{R_D} + (V_G - V_{out})C_{GD}s - g_m(V_G - V_S) = 0 . \qquad (3)$$

### 第 3 步 — 用 $v_{gs}$ 表示 $V_S$ 和 $V_G$

由式 (1)，$V_{in} - V_S = -R_S(g_m + C_{GS}s)\,v_{gs}$，因此

$$V_S = V_{in} + R_S(g_m + C_{GS}s)\,v_{gs},$$

而 $V_G = V_S + v_{gs}$：

$$V_G = V_{in} + a\,v_{gs}, \qquad a \equiv 1 + g_mR_S + R_SC_{GS}s. \qquad (4)$$

### 第 4 步 — 利用节点 G 和 D 建立 $V_G$ 与 $v_{gs}$ 的关系

利用 $V_S - V_G = -v_{gs}$ 改写式 (2) 和式 (3)：

$$V_G\left(\frac{1}{R_G} + C_{GD}s\right) = -C_{GS}s\,v_{gs} + C_{GD}s\,V_{out}\quad\Longrightarrow\quad V_{out} = \frac{V_G(1 + R_GC_{GD}s) + R_GC_{GS}s\,v_{gs}}{R_GC_{GD}s}, \qquad (5)$$

$$V_{out}(1 + R_DC_{GD}s) = R_D\left(C_{GD}s\,V_G - g_mv_{gs}\right). \qquad (6)$$

把式 (5) 代入式 (6)，两边同乘以 $R_GC_{GD}s$：

$$\left[V_G(1 + R_GC_{GD}s) + R_GC_{GS}s\,v_{gs}\right](1 + R_DC_{GD}s) = R_GR_DC_{GD}s\left(C_{GD}s\,V_G - g_mv_{gs}\right).$$

把 $V_G$ 项合并到左边（$s^2$ 项相互抵消），$v_{gs}$ 项合并到右边：

$$(1 + R_GC_{GD}s)(1 + R_DC_{GD}s) - R_GR_DC_{GD}^2s^2 = 1 + (R_G + R_D)C_{GD}s \equiv P ,$$

$$Q \equiv R_Gs\left[C_{GS}(1 + R_DC_{GD}s) + g_mR_DC_{GD}\right],$$

$$P\,V_G = -Q\,v_{gs}. \qquad (7)$$

### 第 5 步 — 求解 $v_{gs}$

把式 (4) 代入式 (7)：

$$
\begin{aligned}
P\,(V_{in} + a\,v_{gs}) &= -Q\,v_{gs}\\
v_{gs}(aP + Q) &= -P\,V_{in}\\
v_{gs} &= -\frac{P}{aP + Q}\,V_{in}.
\end{aligned}
$$

### 第 6 步 — 输出电压

由式 (6)，并利用式 (7) 中的 $V_G = -Qv_{gs}/P$：

$$V_{out} = \frac{R_D}{1 + R_DC_{GD}s}\left(-\frac{QC_{GD}s}{P} - g_m\right)v_{gs} = \frac{-R_D\,(QC_{GD}s + g_mP)}{P(1 + R_DC_{GD}s)}\,v_{gs}.$$

代入 $v_{gs}$，因子 $P$ 被约去：

$$\frac{V_{out}}{V_{in}} = \frac{R_D\,(QC_{GD}s + g_mP)}{(aP + Q)(1 + R_DC_{GD}s)}.$$

分子可以因式分解：

$$
\begin{aligned}
QC_{GD}s + g_mP &= R_GC_{GS}C_{GD}s^2(1 + R_DC_{GD}s) + g_mR_GR_DC_{GD}^2s^2 + g_m\left[1 + (R_G + R_D)C_{GD}s\right]\\
&= R_GC_{GS}C_{GD}s^2(1 + R_DC_{GD}s) + g_m(1 + R_GC_{GD}s)(1 + R_DC_{GD}s)\\
&= (1 + R_DC_{GD}s)\left[g_m(1 + R_GC_{GD}s) + R_GC_{GS}C_{GD}s^2\right],
\end{aligned}
$$

$(1 + R_DC_{GD}s)$ 与分母中的同一因子相约：

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D\left(1 + R_GC_{GD}s + \dfrac{R_GC_{GS}C_{GD}}{g_m}s^2\right)}{aP + Q}.$$

展开分母，

$$
\begin{aligned}
aP + Q &= (1 + g_mR_S + R_SC_{GS}s)\left[1 + (R_G + R_D)C_{GD}s\right] + R_GC_{GS}s + g_mR_GR_DC_{GD}s + R_GR_DC_{GS}C_{GD}s^2\\
&= (1 + g_mR_S) + b_1s + b_2s^2,
\end{aligned}
$$

$$
\begin{aligned}
b_1 &= (1 + g_mR_S)(R_G + R_D)C_{GD} + R_SC_{GS} + R_GC_{GS} + g_mR_GR_DC_{GD}\\
&= (R_S + R_G)C_{GS} + \left[R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S)\right]C_{GD},\\
b_2 &= R_S(R_G + R_D)C_{GS}C_{GD} + R_GR_DC_{GS}C_{GD} = (R_DR_G + R_DR_S + R_GR_S)\,C_{GS}C_{GD}.
\end{aligned}
$$

### 第 7 步 — 验证与解读

**直流增益。** 在 $s = 0$ 时：$g_mR_D/(1 + g_mR_S)$，即常规的共栅级增益，其中包含 $R_S$ 与 $1/g_m$ 构成的输入分压。

**$C_{GD} = 0$。** 分子为 $g_mR_D$，分母为 $1 + g_mR_S + (R_S + R_G)C_{GS}s$：

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D}{1 + g_mR_S + (R_S + R_G)C_{GS}s},$$

这是已知结果：$R_G$ 加大了对 $C_{GS}$ 充电的电阻，从而降低了输入极点。

**$R_G = 0$。** 分子为 $g_mR_D$；分母为 $1 + g_mR_S + [R_SC_{GS} + (1 + g_mR_S)R_DC_{GD}]s + R_SR_DC_{GS}C_{GD}s^2 = (1 + g_mR_S + R_SC_{GS}s)(1 + R_DC_{GD}s)$，即具有一个输入极点和一个输出极点的普通共栅级。

**极点。** 两个极点由 $(1 + g_mR_S) + b_1s + b_2s^2 = 0$ 决定；若二者相距很远，主极点（dominant pole）为 $\omega_{p1}\approx(1 + g_mR_S)/b_1$。$R_G$ 通过类似密勒效应（Miller effect）的项 $g_mR_DR_GC_{GD}$ 进入 $b_1$：栅极不再保持不动，因此 $C_{GD}$ 经 $R_G$ 感受到被放大的漏极摆幅。

**零点。** 两个零点是下式的根：

$$R_GC_{GS}C_{GD}s^2 + g_mR_GC_{GD}s + g_m = 0 .$$

两根之和为 $-g_m/C_{GS} < 0$，乘积为 $g_m/(R_GC_{GS}C_{GD}) > 0$，因此二者都位于**左半平面**（实数或复数）。它们是由 $R_G$ 产生的：当 $R_G\to0$ 时，其乘积趋于无穷大，零点移向无穷远。

### 结果

$$\frac{V_{out}}{V_{in}} = \frac{g_mR_D\left(1 + R_GC_{GD}s + \dfrac{R_GC_{GS}C_{GD}}{g_m}s^2\right)}{1 + g_mR_S + b_1s + b_2s^2}$$

$$b_1 = (R_S + R_G)C_{GS} + \left[R_D + R_G + g_m(R_DR_S + R_DR_G + R_GR_S)\right]C_{GD}, \qquad b_2 = (R_DR_G + R_DR_S + R_GR_S)\,C_{GS}C_{GD}.$$

低频增益为 $g_mR_D/(1 + g_mR_S)$；有两个极点；还有两个由 $R_G$ 产生的左半平面零点。当 $C_{GD} = 0$ 时简化为 $g_mR_D/[1 + g_mR_S + (R_S + R_G)C_{GS}s]$，当 $R_G = 0$ 时简化为 $g_mR_D/[(1 + g_mR_S + R_SC_{GS}s)(1 + R_DC_{GD}s)]$。

**常见错误。** 把栅极当作交流地（忽略 $R_G$）。有了 $R_G$，栅极电压会变化：$C_{GS}$ 经 $R_S + R_G$ 充电，$C_{GD}$ 把漏极摆幅耦合回栅极，因此极点移动，并出现两个零点。

**常见错误。** 只把 $C_{GD}$ 当作输出端的接地电容，从而得到一阶结果。由于 $R_G$ 的存在，$C_{GD}$ 的栅极端并未接地，它与 $C_{GS}$ 相互作用，因此传递函数是二阶的。

**常见错误。** 把直流增益写成 $g_mR_D$。$R_S$ 与输入电阻 $1/g_m$ 构成分压器，因此直流增益为 $g_mR_D/(1 + g_mR_S)$。
