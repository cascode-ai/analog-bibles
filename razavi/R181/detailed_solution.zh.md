# 详细步骤 - R181

**思路。** 两个输入围绕固定的 1.5 V 共模电平反向变化，因此差分对只是把尾电流从一边导向另一边。输出在平衡时为零，其变化斜率由二极管负载与 $R_1$ 的一半并联决定；当全部电流都流向一边时输出饱和，饱和电平由两个二极管与 $R_1$ 之间的电流平衡确定。

### 第 1 步 — 输入激励

把左侧输出节点（$M_1$、$M_3$ 的漏极）记为 $X$，右侧记为 $Y$，尾节点记为 $P$；$V_{out} = V_X - V_Y$。由 $V_{in2} = V_{DD} - V_{in1}$，

$$V_{in,CM} = \frac{V_{in1} + V_{in2}}{2} = \frac{V_{DD}}{2} = 1.5\ \mathrm{V}\ \text{(constant)}, \qquad \Delta V \equiv V_{in1} - V_{in2} = 2V_{in1} - 3\ \mathrm{V}.$$

当 $V_{in1}$ 从 0 变到 3 V 时，$\Delta V$ 从 $-3$ V 扫到 $+3$ V，并在 $V_{in1} = 1.5$ V 处过零。

### 第 2 步 — 尾电流如何分配

在理想尾电流源和平方律（square law）器件的条件下，电流只取决于 $\Delta V$：

$$I_{D1} - I_{D2} = \frac{\beta_n}{2}\Delta V\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V^2}, \qquad I_{D1} + I_{D2} = I_{SS},$$

该式在 $|\Delta V| \le \sqrt{2I_{SS}/\beta_n}$ 时成立；超出此范围后一个器件承载全部 $I_{SS}$。用 $V_{in1}$ 表示，导向窗口为

$$1.5\ \mathrm{V} - \sqrt{\frac{I_{SS}}{2\beta_n}} \;<\; V_{in1} \;<\; 1.5\ \mathrm{V} + \sqrt{\frac{I_{SS}}{2\beta_n}},$$

这是中心附近的一个窄区域。在此区域之外，当导通器件的栅极接近 3 V 时，它甚至可能进入线性区（triode region），但它仍然恰好流过由处于饱和区（saturation region）的尾电流管所固定的 $I_{SS}$，因此 $V_{out}$ 是**平**的。

### 第 3 步 — 平衡点

当 $V_{in1} = V_{in2} = 1.5$ V 时，$V_X = V_Y$，$R_1$ 中没有电流，每个二极管流过 $I_{SS}/2$：

$$V_X = V_Y = V_{DD} - |V_{THP}| - \sqrt{\frac{2(I_{SS}/2)}{\beta_p}} = 2.2\ \mathrm{V} - \sqrt{\frac{I_{SS}}{\beta_p}}, \qquad V_{out} = 0 .$$

因此 $R_1$ 不影响输出共模电平。

### 第 4 步 — 中心处的斜率（小信号增益）

在平衡点附近加 $\pm v_d/2$ 时，$v_Y = -v_X$，因此 $R_1$ 的中点保持在交流地，每一半看到 $R_1/2$ 与二极管电阻 $1/g_{m3}$ 并联（忽略沟道长度调制）。

<!-- diagram: diagram-01.cir -->

在 $X$ 点列 KCL，其中流过 $R_1$ 的电流为 $(v_X - v_Y)/R_1 = v_X/(R_1/2)$：

$$
\begin{aligned}
g_{m1}\frac{v_d}{2} + g_{m3}v_X + \frac{v_X}{R_1/2} &= 0\\
v_X &= -g_{m1}\left(\frac{1}{g_{m3}}\parallel\frac{R_1}{2}\right)\frac{v_d}{2},\\
v_{out} = v_X - v_Y = 2v_X &= -g_{m1}\left(\frac{1}{g_{m3}}\parallel\frac{R_1}{2}\right)v_d .
\end{aligned}
$$

因此

$$\frac{dV_{out}}{d(V_{in1} - V_{in2})} = -g_{m1}\left(\frac{1}{g_{m3}}\parallel\frac{R_1}{2}\right), \qquad \frac{dV_{out}}{dV_{in1}} = -2g_{m1}\left(\frac{1}{g_{m3}}\parallel\frac{R_1}{2}\right),$$

其中 $g_{m1} = \sqrt{\beta_nI_{SS}}$，$g_{m3} = \sqrt{\beta_pI_{SS}}$。曲线是**反相**的：升高 $V_{in1}$ 会拉低 $X$，并使 $Y$ 升高。

### 第 5 步 — 饱和电平

取 $V_{in1}$ 较低，使 $M_1$ 截止、$M_2$ 流过 $I_{SS}$。$M_1$ 截止时，$M_3$ 的全部二极管电流（记为 $I_R$）经 $R_1$ 流入 $Y$；在 $Y$ 点，$M_2$ 抽取 $I_{SS}$，由 $R_1$（$I_R$）和 $M_4$（$I_{SS} - I_R$）共同提供。由二极管方程得

$$V_X = 2.2\ \mathrm{V} - \sqrt{\frac{2I_R}{\beta_p}}, \qquad V_Y = 2.2\ \mathrm{V} - \sqrt{\frac{2(I_{SS} - I_R)}{\beta_p}} ,$$

再由 $R_1$ 上的欧姆定律闭合回路：

$$V_{sat} = V_X - V_Y = I_RR_1 = \sqrt{\frac{2}{\beta_p}}\left(\sqrt{I_{SS} - I_R} - \sqrt{I_R}\right).$$

该方程确定 $I_R$（介于 0 与 $I_{SS}/2$ 之间），然后 $V_{sat} = I_RR_1$。极限情况：

- **$R_1$ 较小：** $I_R \to I_{SS}/2$（电阻几乎把两个输出短接），因此 $V_{sat} \approx I_{SS}R_1/2$，很小。
- **$R_1$ 较大：** $I_R \to 0$，因此 $V_{sat} \to \sqrt{2I_{SS}/\beta_p}$，即普通二极管负载时的值。

一般情况下 $0 < V_{sat} < \sqrt{2I_{SS}/\beta_p}$：电阻减小了摆幅。截止一侧的输出位于 $2.2\ \mathrm{V} - \sqrt{2I_R/\beta_p}$，$R_1$ 较大时略低于 2.2 V，$R_1$ 较小时接近平衡电平。当 $V_{in1}$ 较高时两边角色互换：$V_{out} = -V_{sat}$。

### 第 6 步 — 说明性数值

仅为说明起见，取 $\beta_n = 13.4\ \mathrm{mA/V^2}$，$\beta_p = 3.84\ \mathrm{mA/V^2}$，$I_{SS} = 1$ mA，$R_1 = 2$ kΩ：

$$
\begin{aligned}
g_{m1} &= \sqrt{13.4\times 1}\ \mathrm{mS} = 3.66\ \mathrm{mS}, \qquad g_{m3} = \sqrt{3.84\times 1}\ \mathrm{mS} = 1.96\ \mathrm{mS}\ \ (1/g_{m3} = 510\ \Omega),\\
\frac{dV_{out}}{d\Delta V} &= -(3.66\ \mathrm{mS})(510\ \Omega\parallel 1\ \mathrm{k}\Omega) = -(3.66\ \mathrm{mS})(338\ \Omega) = -1.24,\\
\text{steering window:}\quad & V_{in1} = 1.5 \pm \sqrt{1/(2\times 13.4)}\ \mathrm{V} = 1.5 \pm 0.193\ \mathrm{V},\\
\text{balance level:}\quad & 2.2 - \sqrt{1/3.84} = 1.69\ \mathrm{V}.
\end{aligned}
$$

求解饱和方程得 $I_R = 0.176$ mA，因此 $V_{sat} = (0.176\ \mathrm{mA})(2\ \mathrm{k}\Omega) = 0.35$ V，低于两个极限值 $I_{SS}R_1/2 = 1.0$ V 和 $\sqrt{2I_{SS}/\beta_p} = 0.72$ V。完整曲线：

| $V_{in1}$ (V) | $\Delta V$ (V) | $I_{D1}$ (mA) | $V_X$ (V) | $V_Y$ (V) | $V_{out}$ (V) |
|---|---|---|---|---|---|
| 0 – 1.30 | ≤ −0.40 | 0 | 1.897 | 1.545 | +0.352 |
| 1.35 | −0.30 | 0.041 | 1.876 | 1.555 | +0.321 |
| 1.40 | −0.20 | 0.159 | 1.821 | 1.586 | +0.234 |
| 1.45 | −0.10 | 0.320 | 1.754 | 1.632 | +0.122 |
| 1.50 | 0 | 0.500 | 1.690 | 1.690 | 0 |
| 1.55 | +0.10 | 0.680 | 1.632 | 1.754 | −0.122 |
| 1.60 | +0.20 | 0.841 | 1.586 | 1.821 | −0.234 |
| 1.70 – 3 | ≥ +0.40 | 1.000 | 1.545 | 1.897 | −0.352 |

### 结果

$V_{out}$ 是一条**以 $V_{in1} = V_{in2} = 1.5$ V 为中心的反相、奇对称 S 形曲线**：

- 当 $V_{in1} \le 1.5\ \mathrm{V} - \sqrt{I_{SS}/(2\beta_n)}$ 时 $V_{out} = +V_{sat}$（平坦，$M_1$ 截止）；当 $V_{in1} \ge 1.5\ \mathrm{V} + \sqrt{I_{SS}/(2\beta_n)}$ 时 $V_{out} = -V_{sat}$（平坦，$M_2$ 截止）。也就是说，曲线只在 $|V_{in1} - V_{in2}| < \sqrt{2I_{SS}/\beta_n}$ 时变化。
- 通过中心点（$V_{out} = 0$，两个输出都位于 $V_{DD} - |V_{THP}| - \sqrt{I_{SS}/\beta_p}$；$R_1$ 中没有电流）时的斜率为
$$\frac{dV_{out}}{d(V_{in1} - V_{in2})} = -g_{m1}\left(\frac{1}{g_{m3}}\parallel\frac{R_1}{2}\right),$$
因为 $R_1$ 的中点是虚地。
- 饱和电平为 $V_{sat} = I_RR_1 = \sqrt{2/\beta_p}\,(\sqrt{I_{SS} - I_R} - \sqrt{I_R})$，且 $0 < V_{sat} < \sqrt{2I_{SS}/\beta_p}$。$R_1$ 较小时它约为 $I_{SS}R_1/2$，$R_1$ 较大时趋近于普通二极管负载的值 $\sqrt{2I_{SS}/\beta_p}$。

与普通二极管负载相比，$R_1$ 同时降低了增益和摆幅。

**常见错误。** 把饱和电平取为恰好等于 $\sqrt{2I_{SS}/\beta_p}$（忽略截止一侧的二极管经 $R_1$ 送出的电流），或恰好等于 $I_{SS}R_1/2$。两者都只是极限情况；$I_R$ 必须满足第 5 步的电流平衡。

**常见错误。** 在半边电路（half circuit）中使用 $R_1$ 而不是 $R_1/2$。对差分信号而言，$R_1$ 的中点处于交流地。

**常见错误。** 画出同相曲线、在整个 0–3 V 扫描范围内都是直线的曲线，或者输出达到 $V_{DD}$ 或地。差分对在平衡点附近几百毫伏范围内就会饱和，而二极管使两个输出都保持在大约 $2.2\ \mathrm{V} - \sqrt{2I_{SS}/\beta_p}$ 与 2.2 V 之间。
