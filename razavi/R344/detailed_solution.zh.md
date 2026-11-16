# 详细步骤 - R344

**思路。** 把输入短路求输入参考噪声电压（输出噪声除以电压增益的平方），把输入开路求输入参考噪声电流（输出噪声除以跨阻的平方）。从输出端接到输入端的电阻 $R_1$ 在这两种情况下的表现截然不同。

### 第 1 步 — 小信号模型（small-signal model）

栅极接交流地；$\lambda = 0$，且无体效应。

- **$M_1$：** 从输出端流向源极（即输入端）的电流 $g_m(0 - v_{in}) = -g_mv_{in}$，其沟道噪声 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_m$）与之并联。
- **$R_1$：** 接在输出端与输入端之间，其诺顿噪声 $I_{n,R1}$（$\overline{I_{n,R1}^2} = 4kT/R_1$）与之并联。
- **$R_D$：** 接在输出端与交流地之间，其诺顿噪声为 $I_{nD}$（$\overline{I_{nD}^2} = 4kT/R_D$）。

因此 $M_1$ 和 $R_1$ 是输出端与输入端之间的两条并联通路。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 电压增益

加理想的 $v_{in}$ 并关闭噪声，经 $R_D$ 流来的电流经 $M_1$ 和 $R_1$ 流向输入端：

$$\frac{0 - v_{out}}{R_D} = -g_mv_{in} + \frac{v_{out} - v_{in}}{R_1},$$

$$
\begin{aligned}
-\frac{v_{out}}{R_D} - \frac{v_{out}}{R_1} &= -g_mv_{in} - \frac{v_{in}}{R_1}\\
v_{out}\left(\frac{1}{R_D} + \frac{1}{R_1}\right) &= \left(g_m + \frac{1}{R_1}\right)v_{in}\\
A_v = \frac{v_{out}}{v_{in}} &= \left(g_m + \frac{1}{R_1}\right)(R_D\parallel R_1).
\end{aligned}
$$

输入同时经 $M_1$ 和 $R_1$ 产生输出短路电流 $(g_m + 1/R_1)v_{in}$，该电流流入输出电阻（output resistance）$R_D\parallel R_1$。

### 第 3 步 — 输入参考噪声电压（输入短路）

输入接交流地时，$M_1$ 的 $v_{gs} = 0$，只剩下从输出端流向地的噪声电流 $I_{n1}$；而 $R_1$ 把输出端接到地，**与 $R_D$ 并联**，其噪声电流 $I_{n,R1}$ 作用于同一节点。三个互不相关的噪声电流看到的都是 $R_D\parallel R_1$：

$$\overline{V_{n,out}^2}\Big|_{short} = \left(4kT\gamma g_m + \frac{4kT}{R_D} + \frac{4kT}{R_1}\right)(R_D\parallel R_1)^2 .$$

除以 $A_v^2 = (g_m + 1/R_1)^2(R_D\parallel R_1)^2$，因子 $(R_D\parallel R_1)^2$ 被约去：

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_1}\right)}{\left(g_m + \dfrac{1}{R_1}\right)^2}.$$

这就是输出短路噪声电流除以跨导（transconductance）$G_m = g_m + 1/R_1$：$R_1$ 使信号跨导增加 $1/R_1$，同时也引入了它自己的噪声。

### 第 4 步 — 输入参考噪声电流（输入开路）

输入开路时，源极节点只与 $M_1$ 和 $R_1$ 相连，而两者都通回输出端。源极节点的基尔霍夫电流定律（KCL）：

$$\underbrace{-g_mv_S + I_{n1}}_{M_1} + \underbrace{\frac{v_{out} - v_S}{R_1} + I_{n,R1}}_{R_1} = 0 .$$

因此从输出端流入 $M_1$–$R_1$ 这对支路的**总**电流为零：$I_{n1}$ 和 $I_{n,R1}$ 在 $M_1$–$R_1$ 回路中环流，只改变浮空的 $v_S$。于是 $R_D$ 支路没有净电流，$(0 - v_{out})/R_D + I_{nD} = 0$，因此 $v_{out} = R_DI_{nD}$，

$$\overline{V_{n,out}^2}\Big|_{open} = 4kTR_D .$$

输入电流 $i_{in}$ 只能经 $M_1$ 和 $R_1$ 离开源极节点到达输出端，再流过 $R_D$，因此 $|v_{out}| = R_D|i_{in}|$，即 $|R_T| = R_D$，

$$\overline{I_{n,in}^2} = \frac{4kTR_D}{R_D^2} = \frac{4kT}{R_D}.$$

### 第 5 步 — 验证

- **$R_1 \to \infty$：** $\overline{V_{n,in}^2} \to (4kT\gamma g_m + 4kT/R_D)/g_m^2 = 4kT\gamma/g_m + 4kT/(g_m^2R_D)$，即普通共栅级的结果；$\overline{I_{n,in}^2} = 4kT/R_D$ 不变。
- **$g_mR_1$ 很大时：** 含 $R_1$ 的项变小，噪声电压趋近于普通共栅级的值。

### 结果

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + \dfrac{1}{R_D} + \dfrac{1}{R_1}\right)}{\left(g_m + \dfrac{1}{R_1}\right)^2},\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_D}$$

- 电压（输入短路）：$R_1$ 与 $R_D$ 并联；短路噪声电流 $I_{n1} + I_{nD} + I_{n,R1}$ 除以跨导 $g_m + 1/R_1$（电压增益为 $(g_m + 1/R_1)(R_D\parallel R_1)$）。
- 电流（输入开路）：$M_1$ 和 $R_1$ 的净电流为零，因此它们的噪声只在局部环流。输出噪声为 $4kTR_D$，跨阻为 $R_D$。

**常见错误。** 在输入参考噪声电流中保留 $M_1$ 或 $R_1$ 的噪声，例如给出输入**短路**时的噪声电流 $4kT(\gamma g_m + 1/R_D + 1/R_1)$。输入开路时，$M_1$–$R_1$ 回路没有净电流，只有 $R_D$ 的噪声能到达输出端。

**常见错误。** 求噪声电压时忽略 $R_1$，即使用增益 $g_mR_D$。输入短路时，$R_1$ 构成输出端的负载并引入自身噪声；输入被驱动时，它会增加前馈（feedforward）电流 $v_{in}/R_1$。

**常见错误。** 把 $R_1$ 当作源极负反馈（source degeneration）电阻或栅极电阻。它接在漏极与源极之间，与晶体管的漏源通路并联。
