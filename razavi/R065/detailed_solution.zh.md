# 详细步骤 - R065

**思路。** 该电路是带 PMOS 电流源（current source）负载的共源级（common-source stage，CS）：$M_1$ 把 $v_{in}$ 转换为信号电流 $g_{m1}v_{in}$，而 $M_2$ 的栅极和源极都处于固定电位，只贡献其输出电阻（output resistance）$r_{O2}$。增益为 $-g_{m1}(r_{O1}\parallel r_{O2})$。关键的细节是 $\lambda$ 按 $1/L$ 缩放，因此 2 µm 长的 PMOS 的 $\lambda$ 比表中给出的值小得多。

### 第 1 步 — $M_1$ 的跨导（transconductance）

由 $(W/L)_1 = 50/0.5 = 100$ 和 $I_D = 0.5$ mA：

$$g_{m1} = \sqrt{2\mu_nC_{ox}\left(\frac{W}{L}\right)_1I_D} = \sqrt{2(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = \sqrt{1.34\times10^{-5}}\ \mathrm{A/V} = 3.66\ \mathrm{mS}.$$

### 第 2 步 — 沟道长度调制系数

由于 $\lambda \propto 1/L$，且给定值适用于 $L = 0.5\ \mu$m，

$$\lambda(L) = \lambda(0.5\ \mu\mathrm{m})\times\frac{0.5\ \mu\mathrm{m}}{L} .$$

**$M_1$**（$L = 0.5\ \mu$m）：$\lambda_1 = 0.1\ \mathrm{V^{-1}}$。

**$M_2$**（$L = 2\ \mu$m，长四倍）：

$$\lambda_2 = 0.2\ \mathrm{V^{-1}}\times\frac{0.5\ \mu\mathrm{m}}{2\ \mu\mathrm{m}} = 0.2\times0.25\ \mathrm{V^{-1}} = 0.05\ \mathrm{V^{-1}}.$$

夹断点（pinch-off point）随 $V_{DS}$ 的移动在较长的沟道中只占较小的**比例**，因此电流对 $V_{DS}$ 的依赖较弱。

### 第 3 步 — 输出电阻

$$
\begin{aligned}
r_{O1} &= \frac{1}{\lambda_1I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{5\times10^{-5}}\ \Omega = 20\ \mathrm{k}\Omega,\\
r_{O2} &= \frac{1}{\lambda_2I_D} = \frac{1}{(0.05\ \mathrm{V^{-1}})(0.5\times10^{-3}\ \mathrm{A})} = \frac{1}{2.5\times10^{-5}}\ \Omega = 40\ \mathrm{k}\Omega,
\end{aligned}
$$

$$r_{O1}\parallel r_{O2} = \frac{r_{O1}r_{O2}}{r_{O1} + r_{O2}} = \frac{(20)(40)}{20 + 40}\ \mathrm{k}\Omega = \frac{800}{60}\ \mathrm{k}\Omega = 13.33\ \mathrm{k}\Omega.$$

### 第 4 步 — 小信号模型（small-signal model）与增益

$V_{DD}$、$V_b$ 和地都是交流地。在输出端，$M_1$ 提供 $g_{m1}v_{in}$（$v_{gs1} = v_{in}$）以及接地的 $r_{O1}$，而 $M_2$ 简化为接到交流地的 $r_{O2}$：由于其栅极和源极都处于交流地，其受控源 $g_{m2}v_{sg2} = 0$；由于其源极和衬底（bulk）都接 $V_{DD}$，它没有体效应（body effect）。

<!-- diagram: diagram-01.cir -->

在输出节点列 KCL（流出的电流之和 = 0）：

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}} = 0 \quad\Longrightarrow\quad A_v = \frac{v_{out}}{v_{in}} = -\frac{g_{m1}}{1/r_{O1} + 1/r_{O2}} = -g_{m1}\,(r_{O1}\parallel r_{O2}) .$$

**数值：**

$$A_v = -(3.66\times10^{-3}\ \mathrm{S})(13.33\times10^{3}\ \Omega) = -48.8 .$$

增益是反相的：$V_{in}$ 升高时，$M_1$ 吸取的电流多于 $M_2$ 提供的电流，把 $V_{out}$ 拉低。

**为什么长 PMOS 有帮助。** 若 $\lambda_2 = 0.2\ \mathrm{V^{-1}}$ 不按长度缩放，$r_{O2}$ 只有 10 kΩ，$r_{O1}\parallel r_{O2} = 6.67\ \mathrm{k}\Omega$，$|A_v| = 24.4$。把负载器件加长到四倍，使 $r_{O2}$ 变为四倍，增益加倍。把 $M_1$ 也加长会进一步提高增益；那时 $r_{O1}$ 就成为限制因素。

### 结果

$$A_v = -g_{m1}\,(r_{O1}\parallel r_{O2}) = -(3.66\ \mathrm{mS})(20\ \mathrm{k}\Omega\parallel40\ \mathrm{k}\Omega) = -(3.66\ \mathrm{mS})(13.3\ \mathrm{k}\Omega) \approx -48.8,$$

其中 $g_{m1} = 3.66$ mS，$\lambda_1 = 0.1\ \mathrm{V^{-1}}$（$r_{O1} = 20\ \mathrm{k}\Omega$），$\lambda_2 = 0.2\times(0.5/2) = 0.05\ \mathrm{V^{-1}}$（$r_{O2} = 40\ \mathrm{k}\Omega$）。

**常见错误。** 使用 $\lambda_2 = 0.2\ \mathrm{V^{-1}}$ 而不按 2 µm 的长度缩放，这会得到 $r_{O2} = 10\ \mathrm{k}\Omega$ 和 $A_v \approx -24.4$。由于 $\lambda \propto 1/L$，长四倍的 PMOS 的 $\lambda$ 小四倍。

**常见错误。** 使用 $g_{m2}$，或只计入一个输出电阻。$M_2$ 的栅极和源极都处于交流地，因此它只通过 $r_{O2}$ 起作用，而该电阻在输出端与 $r_{O1}$ 并联。
