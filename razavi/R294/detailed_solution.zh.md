# 详细步骤 - R294

**思路。** $M_1$ 和 $M_2$ 构成一个 CMOS 反相器，输入为相连的栅极（节点 A），输出为相连的漏极（节点 D）。在输入端加测试源；测试电流流过 $C_1$ 和 $C_2$，在 D 点被两个晶体管及其输出电阻吸收。由 D 点的 KCL 求出 $V_A/I_x$，再加上 $C_1$ 的阻抗。

### 第 1 步 — 反相器的小信号模型（small-signal model）

地和 $V_{DD}$ 都是交流地，因此两个晶体管的源极都处于交流地，每个晶体管都有 $v_{gs} = V_A$。$M_1$ 等效为从 D 流向地的电流 $g_{m1}V_A$ 与 $r_{O1}$ 并联；$M_2$ 等效为从 D 流向交流地的电流 $g_{m2}V_A$ 与 $r_{O2}$ 并联。两个电流相加（$V_A$ 升高时，$M_1$ 吸收的电流增大，$M_2$ 提供的电流减小），因此反相器的跨导和输出电阻为

$$G_m = g_{m1} + g_{m2}, \qquad R = r_{O1}\parallel r_{O2} = \frac{r_{O1}r_{O2}}{r_{O1} + r_{O2}},$$

其低频增益为 $V_D/V_A = -G_mR = -(g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})$。

<!-- diagram: diagram-01.cir -->

在输入端加测试电压 $V_x$，其输入电流为 $I_x$。

### 第 2 步 — 栅极（A）与漏极（D）的 KCL

栅极不吸取电流，因此流过 $C_1$ 的电流也流过 $C_2$：

$$I_x = (V_A - V_D)\,C_2s \quad\Longrightarrow\quad V_D = V_A - \frac{I_x}{C_2s}. \qquad (1)$$

在 D 点，$I_x$ 经 $C_2$ 流入，经两个受控源和 $R$ 流出：

$$I_x = (g_{m1} + g_{m2})V_A + \frac{V_D}{R} = G_mV_A + \frac{V_D}{R}. \qquad (2)$$

### 第 3 步 — 求节点 A 处的阻抗

把式 (1) 代入式 (2)：

$$I_x = G_mV_A + \frac{1}{R}\left(V_A - \frac{I_x}{C_2s}\right).$$

合并 $I_x$ 项和 $V_A$ 项：

$$
\begin{aligned}
I_x + \frac{I_x}{RC_2s} &= V_A\left(G_m + \frac{1}{R}\right)\\
I_x\,\frac{RC_2s + 1}{RC_2s} &= V_A\,\frac{G_mR + 1}{R},
\end{aligned}
$$

$$
\begin{aligned}
\frac{V_A}{I_x} &= \frac{RC_2s + 1}{RC_2s}\cdot\frac{R}{1 + G_mR}\\
&= \frac{1 + RC_2s}{C_2s\,(1 + G_mR)}.
\end{aligned}
$$

### 第 4 步 — 加上 $C_1$

$C_1$ 与该阻抗串联（$V_x = I_x/(C_1s) + V_A$）：

$$Z_{in} = \frac{V_x}{I_x} = \frac{1}{C_1s} + \frac{1 + RC_2s}{C_2s\,(1 + G_mR)}.$$

把第二个分式拆开，

$$\frac{1 + RC_2s}{C_2s\,(1 + G_mR)} = \frac{1}{(1 + G_mR)\,C_2s} + \frac{R}{1 + G_mR},$$

因此

$$Z_{in} = \frac{1}{C_1s} + \frac{1}{\left[1 + (g_{m1} + g_{m2})R\right]C_2s} + \frac{R}{1 + (g_{m1} + g_{m2})R}, \qquad R = r_{O1}\parallel r_{O2}.$$

### 第 5 步 — 结果解读

$Z_{in}$ 由三个元件串联而成：

1. **$C_1$ 本身。**
2. **经密勒倍增的 $C_2$：** $C_{M} = \left[1 + (g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})\right]C_2$，因为 $C_2$ 跨接在增益为 $-G_mR$ 的反相放大器两端。
3. **一个电阻** $R_{eq} = \dfrac{R}{1 + G_mR}\approx 1/(g_{m1} + g_{m2})$，因为反相器的本征增益（intrinsic gain）$G_mR\gg1$。

只用低频增益的简单密勒分析会漏掉电阻项。该项之所以出现，是因为在高频时 $C_2$ 把 A 与 D 短接，此时“二极管连接”（diode-connected）的反相器呈现的阻抗为 $\dfrac{1}{G_m}\parallel R = \dfrac{R}{1 + G_mR}$。

**极限情况。**

- $s\to0$：$C_2$ 项占主导，节点 A 表现为大电容 $(1 + G_mR)C_2$。
- $s\to\infty$：节点 A 呈现 $R/(1 + G_mR)\approx 1/(g_{m1} + g_{m2})$。
- 若 $M_2$ 是理想电流源（ideal current source），即 $g_{m2} = 0$、$r_{O2}\to\infty$，且 $\lambda = 0$（$r_{O1}\to\infty$），则 $R\to\infty$，$V_A/I_x \to RC_2s/(C_2s\,g_{m1}R) = 1/g_{m1}$，即理想电流源负载时的结果。

### 结果

$$Z_{in} = \frac{1}{C_1s} + \frac{1 + RC_2s}{C_2s\,\left[1 + (g_{m1} + g_{m2})R\right]}, \qquad R = r_{O1}\parallel r_{O2},$$

或等价地写成

$$Z_{in} = \frac{1}{C_1s} + \frac{1}{\left[1 + (g_{m1} + g_{m2})R\right]C_2s} + \frac{R}{1 + (g_{m1} + g_{m2})R}.$$

输入端等效为 $C_1$、密勒电容 $\left[1 + (g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})\right]C_2$ 以及电阻 $(r_{O1}\parallel r_{O2})/\left[1 + (g_{m1} + g_{m2})(r_{O1}\parallel r_{O2})\right]\approx 1/(g_{m1} + g_{m2})$ 三者串联。

**常见错误。** 把 $M_2$ 当作普通的电流源，只保留 $g_{m1}$。$M_2$ 的栅极接在 A 上，而不是接固定偏置，因此它是 CMOS 反相器的另一半，其跨导要叠加进来：$g_{m1} + g_{m2}$。

**常见错误。** 把 $M_2$ 看成二极管连接。它的栅极接 A，而不是接自身的漏极 D；漏极只通过 $C_2$ 耦合回栅极。

**常见错误。** 只求到密勒电容 $(1 + G_mR)C_2$ 就认为结果是精确的。当 $r_O$ 有限时，阻抗中还包含串联电阻 $R/(1 + G_mR)$，它在高频时起主导作用；忽略它只是一种低频近似。
