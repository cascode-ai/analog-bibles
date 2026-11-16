# 详细步骤 - R369

**思路。** 输入端开路时，该共栅（CG）级的输入参考噪声电流由两个电流源决定：$\overline{I_{n,in}^2} = 4kT\gamma(g_{m2} + g_{m3})$。由于 $g_m = 2I_D/|V_{ov}|$，$M_2$ 和 $M_3$ 的过驱动电压越大，噪声越低；而 2 V 的摆幅要求限制了输出通路中各过驱动电压之和。在这个和固定的条件下使 $1/V_{ov2} + 1/|V_{ov3}|$ 最小，再把最优值换算为 $W/L$。

### 第 1 步 — 输入参考噪声电流

把输入节点记为 X。旁路电容使 $M_2$ 和 $M_3$ 的栅极成为干净的交流地，因此它们各自只贡献自身的沟道噪声 $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$ 和 $\overline{I_{n3}^2} = 4kT\gamma g_{m3}$。

输入端开路时，$v_{gs1} = -v_X$。在 out 与 X 之间流动的是 $g_{m1}v_{gs1}$ 和 $I_{n1}$（从 $M_1$ 的漏极流向源极）；从 X 流向地的只有 $I_{n2}$（$M_2$ 的栅极和源极都处于交流地）；$I_{n3}$ 从 $V_{DD}$（交流地）流入 out。设 $R_{out}$ 为输出电阻（output resistance），其值非常大；它最终会被约去。

<!-- diagram: diagram-01.cir -->

**对 X 点应用基尔霍夫电流定律（KCL）。** $M_1$ 的沟道电流必须经 $M_2$ 的噪声源流出：

$$g_{m1}v_{gs1} + I_{n1} = I_{n2}.$$

因此 $M_1$ 从输出端抽取的电流恰好是 $I_{n2}$：$M_1$ 自身的噪声没有贡献（源极电压变化 $I_{n1}/g_{m1}$，受控电流抵消了 $I_{n1}$），而 $I_{n2}$ 经 $M_1$ 传递的方式与输入信号电流完全相同。

**输出节点。** 该节点流入 $I_{n3}$，并经 $M_1$ 流出 $I_{n2}$，两者互不相关：

$$v_{out} = R_{out}\,(I_{n3} - I_{n2}), \qquad \overline{V_{n,out}^2} = R_{out}^2\left(\overline{I_{n2}^2} + \overline{I_{n3}^2}\right).$$

输入电流以单位电流增益通过 $M_1$，因此 $|v_{out}/i_{in}| = R_{out}$，于是

$$\overline{I_{n,in}^2} = \frac{R_{out}^2\left(\overline{I_{n2}^2} + \overline{I_{n3}^2}\right)}{R_{out}^2} = 4kT\gamma\,(g_{m2} + g_{m3}).$$

$R_{out}$ 被约去，$M_1$ 也不出现（反正它的 $g_{m1}$ 是固定的）。对 NMOS 和 PMOS 都有 $g_m = 2I_D/|V_{ov}|$，与迁移率（mobility）无关，因此

$$\overline{I_{n,in}^2} = 4kT\gamma\cdot2I_D\left(\frac{1}{V_{ov2}} + \frac{1}{|V_{ov3}|}\right).$$

$I_D$ 固定时，**使电流源的过驱动电压尽可能大，噪声电流就最小**（同样电流下 $g_m$ 较小）；而摆幅限制了过驱动电压的大小。

### 第 2 步 — 输出摆幅约束

**上限。** $M_3$ 饱和：$V_{out,max} = V_{DD} - |V_{ov3}|$。

**下限。** $M_1$ 饱和：$V_{out} \ge V_X + V_{ov1} = V_b - V_{TH1}$。能使 $M_2$ 保持饱和的最低 $V_b$ 把 X 置于 $V_X = V_{ov2}$：

$$V_b = V_{ov2} + V_{TH1} + V_{ov1}, \qquad V_{out,min} = V_{ov2} + V_{ov1}.$$

**摆幅：**

$$V_{out,max} - V_{out,min} = V_{DD} - V_{ov1} - V_{ov2} - |V_{ov3}|.$$

$V_{ov1}$ 由给定的尺寸和电流确定：

$$V_{ov1} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)_1}} = \sqrt{\frac{2\times0.5\times10^{-3}\ \mathrm{A}}{(134\times10^{-6}\ \mathrm{A/V^2})(100)}} = \sqrt{0.0746\ \mathrm{V^2}} = 0.273\ \mathrm{V}.$$

要求摆幅为 2 V：

$$
\begin{aligned}
V_{DD} - V_{ov1} - V_{ov2} - |V_{ov3}| &= 2\ \mathrm{V}\\
V_{ov2} + |V_{ov3}| &= 3 - 2 - 0.273\ \mathrm{V} = 0.727\ \mathrm{V}.
\end{aligned}
$$

这里取等号，因为和更小只会使 $g_{m2} + g_{m3}$ 增大。

### 第 3 步 — 过驱动电压预算的最优分配

令 $a = V_{ov2}$，$b = |V_{ov3}|$，且 $a + b = S = 0.727$ V。求下式的最小值

$$h(a) = \frac1a + \frac{1}{S - a}:$$

$$
\begin{aligned}
h'(a) &= -\frac{1}{a^2} + \frac{1}{(S - a)^2} = 0\\
(S - a)^2 &= a^2\\
S - a &= a \quad (\text{both positive})\\
a &= \frac{S}{2}.
\end{aligned}
$$

$h''(a) = 2/a^3 + 2/(S - a)^3 > 0$，因此这是最小值：

$$V_{ov2} = |V_{ov3}| = \frac{0.727\ \mathrm{V}}{2} = 0.363\ \mathrm{V}.$$

尽管两种器件的迁移率不同，最优分配仍是均分，因为 $g_m = 2I_D/|V_{ov}|$ 中不含迁移率。

**迭代验证**（由于 $2I_D = 1$ mA，以 mS 为单位的 $g_m$ 等于以 V⁻¹ 为单位的 $1/V_{ov}$）：

| $V_{ov2}$ (V) | $\lvert V_{ov3}\rvert$ (V) | $g_{m2}$ (mS) | $g_{m3}$ (mS) | $g_{m2} + g_{m3}$ (mS) |
|---|---|---|---|---|
| 0.250 | 0.477 | 4.000 | 2.097 | 6.10 |
| 0.300 | 0.427 | 3.333 | 2.343 | 5.68 |
| 0.363 | 0.363 | 2.752 | 2.752 | **5.50** |
| 0.400 | 0.327 | 2.500 | 3.060 | 5.56 |
| 0.450 | 0.277 | 2.222 | 3.612 | 5.83 |

最小值出现在均分处，并且在其附近曲线相当平坦。

### 第 4 步 — $M_2$ 和 $M_3$ 的尺寸

由 $W/L = 2I_D/(\mu C_{ox}V_{ov}^2)$ 及 $V_{ov}^2 = (0.363\ \mathrm{V})^2 = 0.1321\ \mathrm{V^2}$ 得：

$$
\begin{aligned}
\left(\frac{W}{L}\right)_2 &= \frac{2I_D}{\mu_nC_{ox}V_{ov2}^2} = \frac{1\times10^{-3}\ \mathrm{A}}{(134\times10^{-6}\ \mathrm{A/V^2})(0.1321\ \mathrm{V^2})} = \frac{1\times10^{-3}}{1.770\times10^{-5}} = 56.5,\\[4pt]
\left(\frac{W}{L}\right)_3 &= \frac{2I_D}{\mu_pC_{ox}V_{ov3}^2} = \frac{1\times10^{-3}\ \mathrm{A}}{(38.4\times10^{-6}\ \mathrm{A/V^2})(0.1321\ \mathrm{V^2})} = \frac{1\times10^{-3}}{5.071\times10^{-6}} = 197.
\end{aligned}
$$

取 $L = 0.5\ \mu$m：$M_2 \approx 28\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$，$M_3 \approx 99\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}$；PMOS 约宽 3.5 倍，因为 $\mu_pC_{ox}$ 小 3.5 倍。于是

$$
\begin{aligned}
g_{m2} = g_{m3} &= \frac{2I_D}{V_{ov}} = \frac{1\ \mathrm{mA}}{0.363\ \mathrm{V}} = 2.75\ \mathrm{mS},\\
\overline{I_{n,in}^2} &= 4kT\gamma\,(g_{m2} + g_{m3}) = 4kT\gamma\times5.50\ \mathrm{mS}.
\end{aligned}
$$

取 $\gamma = 2/3$，$T = 300$ K，则 $4kT\gamma = 4(1.38\times10^{-23})(300)(2/3) = 1.104\times10^{-20}$ J，因此

$$\overline{I_{n,in}^2} = (1.104\times10^{-20})(5.50\times10^{-3}) = 6.07\times10^{-23}\ \mathrm{A^2/Hz} \;\Rightarrow\; 7.8\ \mathrm{pA/\sqrt{Hz}}.$$

### 第 5 步 — 偏置电压与工作区检查

- **栅极偏置：** $V_b = V_{ov2} + V_{TH1} + V_{ov1} = 0.363 + V_{TH1} + 0.273$ V；取 $V_{TH1} = 0.7$ V，得 $V_b \approx 1.34$ V。（计入体效应时，$V_{TH1}$ 与 $V_b$ 同时升高，$V_{out,min} = V_b - V_{TH1}$ 不变。）
- **输出范围：** $V_{out,min} = 0.363 + 0.273 = 0.636$ V，$V_{out,max} = 3 - 0.363 = 2.637$ V，宽度恰好为 2.0 V ✓。静态输出电压应位于中点附近，约 1.64 V，以获得对称的 ±1 V 摆幅。
- 该偏置点下的**饱和条件**：$V_{DS2} = V_{ov2}$（按设计处于边缘），$V_{DS1} = 1.64 - 0.363 = 1.27\ \mathrm{V} > V_{ov1}$，$V_{SD3} = 3 - 1.64 = 1.36\ \mathrm{V} > |V_{ov3}|$。

在 $\lambda = 0$ 时，最优解具有上述闭合形式，无需迭代；若保留 $1 + \lambda V_{DS}$ 因子，经过简短的迭代后，宽度会减小几个百分点。

### 结果

$$\overline{I_{n,in}^2} = 4kT\gamma\,(g_{m2} + g_{m3}) = 4kT\gamma\cdot2I_D\left(\frac{1}{V_{ov2}} + \frac{1}{|V_{ov3}|}\right),$$

约束条件为 $V_{ov2} + |V_{ov3}| = V_{DD} - 2\ \mathrm{V} - V_{ov1} = 0.727$ V（其中 $V_{ov1} = 0.273$ V）。最小值出现在过驱动电压相等处：

$$V_{ov2} = |V_{ov3}| \approx 0.363\ \mathrm{V}, \qquad \left(\frac{W}{L}\right)_2 \approx 56.5\ (\approx 28\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}), \qquad \left(\frac{W}{L}\right)_3 \approx 197\ (\approx 99\ \mu\mathrm{m}/0.5\ \mu\mathrm{m}),$$

由此 $g_{m2} = g_{m3} \approx 2.75$ mS，$\overline{I_{n,in}^2} \approx 4kT\gamma\times5.5$ mS（$\gamma = 2/3$ 时 ≈ 7.8 pA/√Hz）。

**常见错误。** 把 $M_1$ 的噪声计入输入参考噪声电流。输入端开路时它会相互抵消（第 1 步）；错误地加上 $4kT\gamma g_{m1}$（$g_{m1} = 3.66$ mS）会使结果升至约 10 pA/√Hz，不过由于 $g_{m1}$ 固定，这并不改变尺寸设计。

**常见错误。** 以为 $M_2$“只是为输入端提供偏置”而将其略去。它的噪声电流位于输入节点，会像信号电流一样流过 $M_1$。

**常见错误。** 写摆幅约束时漏掉 $V_{ov1}$ 或 $V_{ov2}$（例如写成 $V_{DD} - |V_{ov3}| - V_{ov1} = 2$ V）：两者都与 $|V_{ov3}|$ 串联叠加。同样，**最大化** $g_{m2}$、$g_{m3}$ 是南辕北辙：对电流源而言，$g_m$ 越大，噪声越大。
