# 详细步骤 - R503

**思路。** 对每个晶体管的沟道噪声建模，找出每个噪声源如何进入闭环方程，并把它表示为输入节点处的等效电流；各噪声源互不相关，因此功率相加。

### 第 1 步 — 偏置与小信号参数

把输入节点（$M_1$ 的栅极、$M_3$ 的漏极）记为 A，$M_1$ 的漏极记为 B。偏置：$I_{D3} = 10\ \mu$A，$I_{D1} = |I_{D2}| = 1$ mA。由 $g_m = \sqrt{2\mu C_{ox}(W/L)I_D}$ 和 $r_O = 1/(\lambda I_D)$：

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 5.18\ \mathrm{mS}, & r_{O1} &= 10\ \mathrm{k}\Omega,\\
g_{m2} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = 2.77\ \mathrm{mS}, & r_{O2} &= 5\ \mathrm{k}\Omega,\\
g_{m3} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(10)(10\ \mu\mathrm{A})} = 0.164\ \mathrm{mS}, & r_{O3} &= 1\ \mathrm{M}\Omega .
\end{aligned}
$$

噪声常数：$4kT\gamma = 4(1.38\times10^{-23}\ \mathrm{J/K})(300\ \mathrm{K})(2/3) = 1.104\times10^{-20}$ J。

### 第 2 步 — 噪声模型与闭环方程

$M_3$ 的噪声是从 A 流到地的电流 $I_{n3}$（$\overline{I_{n3}^2} = 4kT\gamma g_{m3}$）。共源（common-source）器件 $M_1$ 和 $M_2$ 的漏极噪声被移到各自的栅极，成为串联电压 $V_{n1}$ 和 $V_{n2}$，其中 $\overline{V_{n1}^2} = 4kT\gamma/g_{m1}$，$\overline{V_{n2}^2} = 4kT\gamma/g_{m2}$（位于节点 B）。

设 $Y_A = 1/r_{O3} + sC_A$ 为 A 到地的导纳（**不含**反馈；$C_A$ 是输入端的任何电容：$C_{GS1}$、光电二极管等），$A_v = (g_{m1}r_{O1})(g_{m2}r_{O2})$ 为从 $M_1$ 栅极到 Y 的（同相）增益。

<!-- diagram: diagram-01.cir -->

**节点 A 的基尔霍夫电流定律（KCL）方程：**

$$I_{in} = Y_AV_A + g_{m3}V_Y + I_{n3} .$$

**前向通路**（$M_1$ 的栅极电压为 $V_A + V_{n1}$；暂时忽略 $M_2$ 的噪声）：

$$V_Y = A_v\,(V_A + V_{n1}) .$$

由 KCL 解出 $V_A = (I_{in} - I_{n3} - g_{m3}V_Y)/Y_A$ 并代入：

$$
\begin{aligned}
V_Y &= A_v\left[\frac{I_{in} - I_{n3} - g_{m3}V_Y}{Y_A} + V_{n1}\right]\\
V_Y\left(1 + \frac{A_vg_{m3}}{Y_A}\right) &= \frac{A_v}{Y_A}\left(I_{in} - I_{n3} + Y_AV_{n1}\right)\\
V_Y &= \frac{A_v}{Y_A + A_vg_{m3}}\left(I_{in} - I_{n3} + Y_AV_{n1}\right).
\end{aligned}
$$

括号中的项直接显示了每个噪声源与输入电流的对应关系。

### 第 3 步 — $M_3$ 的贡献

$I_{n3}$ 在括号中的位置与 $I_{in}$ 完全一样（同一节点，同一传递函数），因此它**原封不动**地折合到输入端：

$$\overline{I_{n,in}^2}\Big|_{M_3} = 4kT\gamma\,g_{m3} = (1.104\times10^{-20})(1.64\times10^{-4}) = 1.81\times10^{-24}\ \mathrm{A^2/Hz}.$$

反馈不会减小它：从输入节点注入的噪声电流与信号无法区分。

### 第 4 步 — $M_1$ 的贡献

$V_{n1}$ 在括号中以电流 $Y_AV_{n1}$ 的形式出现，因此

$$\overline{I_{n,in}^2}\Big|_{M_1} = |Y_A|^2\,\overline{V_{n1}^2} = \frac{4kT\gamma}{g_{m1}}\left(\frac{1}{r_{O3}^2} + \omega^2C_A^2\right).$$

**低频**（$\omega \to 0$）：

$$\overline{I_{n,in}^2}\Big|_{M_1} = \frac{4kT\gamma}{g_{m1}r_{O3}^2} = \frac{1.104\times10^{-20}}{(5.18\times10^{-3})(10^6)^2}\ \mathrm{A^2/Hz} = 2.1\times10^{-30}\ \mathrm{A^2/Hz},$$

比 $M_3$ 项小约一百万倍，因为把 $V_{n1}$ 转换为电流的输入节点导纳（1 µS）非常小。

**较高频率。** 该项随 $\omega^2$ 增大，当 $\omega^2C_A^2/g_{m1} = g_{m3}$，即 $\omega = \sqrt{g_{m1}g_{m3}}/C_A = (9.2\times10^{-4}\ \mathrm{S})/C_A$ 时与 $M_3$ 项相等：对于 $C_A = 0.1$ pF 约为 $9\times10^9$ rad/s，对于 1 pF 约为 $9\times10^8$ rad/s。在此频率以下，$M_1$ 的贡献可以忽略。

### 第 5 步 — $M_2$ 的贡献

$M_2$ 栅极处的 $V_{n2}$ 相当于 $M_1$ 栅极处的 $V_{n2}/(g_{m1}r_{O1})$，因此其贡献等于 $M_1$ 的表达式乘以

$$\frac{\overline{V_{n2}^2}/(g_{m1}r_{O1})^2}{\overline{V_{n1}^2}} = \frac{g_{m1}}{g_{m2}(g_{m1}r_{O1})^2} = \frac{5.18}{2.77\times51.8^2} = 7\times10^{-4},$$

这可以忽略。

### 第 6 步 — 总噪声

$$\overline{I_{n,in}^2} = 4kT\gamma\left[g_{m3} + \frac{\left|1/r_{O3} + j\omega C_A\right|^2}{g_{m1}}\left(1 + \frac{g_{m1}}{g_{m2}(g_{m1}r_{O1})^2}\right)\right].$$

在低频时只有第一项起作用：

$$\overline{I_{n,in}^2} \approx 4kT\gamma\,g_{m3} = \frac{16}{3}kT\,g_{m3} = 1.8\times10^{-24}\ \mathrm{A^2/Hz}, \qquad \sqrt{\overline{I_{n,in}^2}} \approx 1.34\ \mathrm{pA/\sqrt{Hz}} .$$

环路增益（loop gain）很大时，$V_Y \approx I_{in}/g_{m3}$：跨阻约为 $1/g_{m3} = 6.1$ kΩ，因此 $M_3$ 相当于一个 6.1 kΩ 的反馈电阻。一个真实的 6.1 kΩ 电阻贡献 $4kT/R = 2.7\times10^{-24}\ \mathrm{A^2/Hz}$；晶体管给出的结果相同，只是多了因子 $\gamma = 2/3$。

### 结果

$$\overline{I_{n,in}^2} \approx 4kT\gamma\,g_{m3} \approx 1.8\times10^{-24}\ \mathrm{A^2/Hz}\quad(\approx 1.34\ \mathrm{pA/\sqrt{Hz}})$$

此为低频时的结果，完全由反馈器件 $M_3$（$g_{m3} = 0.164$ mS）决定。$M_1$ 贡献 $4kT\gamma|1/r_{O3} + j\omega C_A|^2/g_{m1}$，在低频时可以忽略（≈ $2\times10^{-30}\ \mathrm{A^2/Hz}$），但随 $\omega^2$ 增大；$M_2$ 的贡献还要再小，相差约 $7\times10^{-4}$ 倍。

**常见错误。** 把 $M_1$ 当作主要噪声源，例如取 $4kT\gamma g_{m1} \approx 5.7\times10^{-23}\ \mathrm{A^2/Hz}$。$M_1$ 的噪声是其栅极处的**电压**，只有通过很小的输入节点导纳才转化为输入电流。

**常见错误。** 把 $M_3$ 的噪声除以环路增益。$M_3$ 的噪声电流与信号进入同一节点，并被完全相同地放大，因此它原封不动地折合到输入端。

**常见错误。** 计入 $I_1$–$I_3$ 的噪声，而题目说明它们是无噪声的；在实际设计中，它们会加入各自的噪声电流（输入节点处的 $I_3$ 会直接加入）。
