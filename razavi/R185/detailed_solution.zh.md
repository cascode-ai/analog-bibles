# 详细步骤 - R185

**思路。** $M_3$ 和 $M_4$ 是 PMOS 电流源（栅极接固定偏置 $V_{b2}$），因此唯一能把电流转换为**差分**输出电压的元件，是跨接在两个输出端之间的浮置电阻 $R_1$。对两个输出端列 KCL，可以用输入对管的漏极电流表示 $V_{out}$；再结合差分对的大信号（large-signal）电流导引规律，就能得到输出电平、中心斜率和转变区的宽度。

### 第 1 步 — 扫描方式

把左输出端（$M_1$、$M_3$ 的漏极）记为 X，右输出端（$M_2$、$M_4$ 的漏极）记为 Y，$M_1$、$M_2$ 的公共源极节点记为 P，则 $V_{out} = V_X - V_Y$。饱和时，$M_5$ 流过 $I_{SS}$，每个 PMOS 都是理想电流源 $I_P = \tfrac12\mu_pC_{ox}(W/L)_3(V_{DD} - V_{b2} - |V_{THP}|)^2$。

由于 $V_{in2} = 3\ \mathrm{V} - V_{in1}$，输入共模电平固定为 $(V_{in1} + V_{in2})/2 = 1.5$ V，差分输入为

$$\Delta V_{in} \equiv V_{in1} - V_{in2} = 2V_{in1} - 3\ \mathrm{V},$$

其范围为 $-3$ V 到 $+3$ V。把 $V_{in1}$ 换成 $3\ \mathrm{V} - V_{in1}$ 会交换两个输入，由对称性也就交换了 $V_X$ 和 $V_Y$，因此 $V_{out}$ 是 $V_{in1} - 1.5$ V 的奇函数，并在 $V_{in1} = 1.5$ V 处为零。

### 第 2 步 — 对两个输出端列 KCL：用漏极电流表示 $V_{out}$

所有晶体管都饱和时，$M_3$ 和 $M_4$ 各自恰好向其输出节点注入 $I_P$，而电流 $(V_X - V_Y)/R_1$ 从 X 经 $R_1$ 流向 Y。

**X 点的 KCL**（流入 $I_P$；流出 $I_{D1}$ 和 $R_1$ 中的电流）：

$$
\begin{aligned}
I_P &= I_{D1} + \frac{V_X - V_Y}{R_1}\\
V_X - V_Y &= R_1\,(I_P - I_{D1}).
\end{aligned}
$$

**Y 点的 KCL**（流入 $I_P$ 和 $R_1$ 中的电流；流出 $I_{D2}$）：

$$
\begin{aligned}
I_P + \frac{V_X - V_Y}{R_1} &= I_{D2}\\
V_X - V_Y &= R_1\,(I_{D2} - I_P).
\end{aligned}
$$

**一致性条件。** 两式必须给出相同的 $V_X - V_Y$：

$$
\begin{aligned}
R_1(I_P - I_{D1}) &= R_1(I_{D2} - I_P)\\
I_{D1} + I_{D2} &= 2I_P .
\end{aligned}
$$

P 点的 KCL 又给出 $I_{D1} + I_{D2} = I_{SS}$，因此只有在标称偏置 $2I_P = I_{SS}$ 下，才存在所有器件都饱和的工作点。（否则多余的电流会把两个输出推向某一电源轨，直到某个器件退出饱和区；这是一个共模问题，见第 6 步。）

**差分输出。** 把两个 KCL 结果相加再除以 2：

$$
\begin{aligned}
2(V_X - V_Y) &= R_1(I_P - I_{D1}) + R_1(I_{D2} - I_P) = R_1(I_{D2} - I_{D1})\\
V_{out} &= -\frac{R_1}{2}\,(I_{D1} - I_{D2}).
\end{aligned}
$$

电流源的贡献相互抵消：只有输入对管电流的**差值**才会通过 $R_1/2$ 产生差分输出。

### 第 3 步 — 输入对管中的大信号电流导引

$M_1$ 和 $M_2$ 饱和且源极相连，因此 $\sqrt{2I_{D1}/\beta_n} - \sqrt{2I_{D2}/\beta_n} = V_{GS1} - V_{GS2} = \Delta V_{in}$；再结合 $I_{D1} + I_{D2} = I_{SS}$，就得到平方律（square law）差分对的标准电流导引关系，

$$I_{D1} - I_{D2} = \frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2},$$

该式在两个器件都导通时成立。其中一个器件在下述条件下截止（$I_{D1} - I_{D2} = \pm I_{SS}$）：

$$|\Delta V_{in}| = \Delta V_{max} = \sqrt{\frac{2I_{SS}}{\beta_n}},$$

它等于平衡时每个器件过驱动电压（overdrive voltage）的 $\sqrt2$ 倍；超过这一值后，全部 $I_{SS}$ 都流过一个器件。如果导通的器件进入线性区，$M_5$（仍然饱和）依然迫使其电流为 $I_{SS}$；变化的只是它的 $V_{GS}$ 增大、$V_P$ 下降，因此在平坦部分电流导引情况不变。

### 第 4 步 — 传输曲线

把第 3 步的结果代入第 2 步，对于 $|\Delta V_{in}| \le \Delta V_{max}$：

$$V_{out} = -\frac{R_1}{2}\cdot\frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}, \qquad \Delta V_{in} = 2V_{in1} - 3\ \mathrm{V}.$$

**饱和电平。** 当 $|\Delta V_{in}| \ge \Delta V_{max}$ 时，$I_{D1} - I_{D2} = \pm I_{SS}$：

$$V_{out} = \mp\frac{I_{SS}R_1}{2}.$$

$V_{in1}$ 较低时 $M_1$ 截止，因此 $M_3$ 的全部电流 $I_P = I_{SS}/2$ 经 $R_1$ 从 X 流向 Y，在 Y 点与 $M_4$ 的 $I_P$ 一起被 $M_2$ 吸收（共 $I_{SS}$）：$V_X - V_Y = I_PR_1 = +I_{SS}R_1/2$。$V_{in1}$ 较高时两边角色互换，$V_{out} = -I_{SS}R_1/2$。

**中心处的斜率。** 在 $\Delta V_{in} = 0$ 处求导：

$$\left.\frac{d(I_{D1} - I_{D2})}{d\Delta V_{in}}\right|_0 = \frac{\beta_n}{2}\sqrt{\frac{4I_{SS}}{\beta_n}} = \sqrt{\beta_nI_{SS}} = g_{m1},$$

其中平衡时每个输入器件的 $g_{m1} = \sqrt{2\beta_n(I_{SS}/2)}$。因此

$$\frac{dV_{out}}{d\Delta V_{in}}\bigg|_0 = -\frac{g_{m1}R_1}{2}, \qquad \frac{dV_{out}}{dV_{in1}}\bigg|_{1.5\ \mathrm{V}} = -g_{m1}R_1 \quad(\text{since } d\Delta V_{in} = 2\,dV_{in1}).$$

**半边电路（half circuit）验证。** 对于小的差分信号，$R_1$ 的中点是虚地（virtual ground），理想 PMOS 电流源相当于开路，因此每半边就是 $M_1$ 驱动 $R_1/2$：

<!-- diagram: diagram-01.cir -->

于是 $v_X = -g_{m1}\dfrac{R_1}{2}\cdot\dfrac{\Delta v_{in}}{2}$，$v_Y = -v_X$，因此 $v_X - v_Y = -g_{m1}\dfrac{R_1}{2}\Delta v_{in}$，与大信号分析得到的斜率一致。

**归一化曲线。** 令 $x = \Delta V_{in}/\Delta V_{max}$（于是 $4I_{SS}/\beta_n = 2\Delta V_{max}^2$）：

$$\frac{I_{D1} - I_{D2}}{I_{SS}} = x\sqrt{2 - x^2}, \qquad \frac{V_{out}}{I_{SS}R_1/2} = -x\sqrt{2 - x^2}\quad(|x| \le 1).$$

| $x = \Delta V_{in}/\Delta V_{max}$ | $V_{in1}$ | $V_{out}/(I_{SS}R_1/2)$ |
|---|---|---|
| $\le -1$ | $\le 1.5\ \mathrm{V} - \Delta V_{max}/2$ | $+1$（平坦） |
| −0.75 | $1.5\ \mathrm{V} - 0.375\,\Delta V_{max}$ | +0.90 |
| −0.5 | $1.5\ \mathrm{V} - 0.25\,\Delta V_{max}$ | +0.66 |
| −0.25 | $1.5\ \mathrm{V} - 0.125\,\Delta V_{max}$ | +0.35 |
| 0 | 1.5 V | 0 |
| +0.25 | $1.5\ \mathrm{V} + 0.125\,\Delta V_{max}$ | −0.35 |
| +0.5 | $1.5\ \mathrm{V} + 0.25\,\Delta V_{max}$ | −0.66 |
| +0.75 | $1.5\ \mathrm{V} + 0.375\,\Delta V_{max}$ | −0.90 |
| $\ge 1$ | $\ge 1.5\ \mathrm{V} + \Delta V_{max}/2$ | −1（平坦） |

例如 $x = 0.5$ 时：$0.5\sqrt{2 - 0.25} = 0.5\sqrt{1.75} = 0.5\times1.323 = 0.661$。曲线在 $x = \pm1$ 处斜率为零，并在那里平滑地接上平坦的电平。

### 第 5 步 — 数值示例

自由选取 $\beta_n = 2\ \mathrm{mA/V^2}$、$I_{SS} = 200\ \mu$A 和 $R_1 = 10\ \mathrm{k}\Omega$：

$$
\begin{aligned}
\Delta V_{max} &= \sqrt{\frac{2(200\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = \sqrt{0.2}\ \mathrm{V} = 0.447\ \mathrm{V},\\
\frac{I_{SS}R_1}{2} &= \frac{(200\ \mu\mathrm{A})(10\ \mathrm{k}\Omega)}{2} = 1.0\ \mathrm{V},\\
g_{m1} &= \sqrt{\beta_nI_{SS}} = \sqrt{(2\ \mathrm{mA/V^2})(200\ \mu\mathrm{A})} = 0.632\ \mathrm{mS},\\
\frac{dV_{out}}{dV_{in1}}\bigg|_{1.5\ \mathrm{V}} &= -g_{m1}R_1 = -(0.632\ \mathrm{mS})(10\ \mathrm{k}\Omega) = -6.3 .
\end{aligned}
$$

因此当 $V_{in1} \le 1.5 - 0.224 = 1.276$ V 时 $V_{out} = +1$ V；曲线在 1.5 V 处以 −6.3 的斜率下降并穿过零点；当 $V_{in1} \ge 1.724$ V 时达到 $-1$ V。

### 第 6 步 — 限制因素：电压余度和共模电平

- **输出共模。** $R_1$ 只确定差值 $V_X - V_Y$。两个输出的共同电平只由平衡条件 $2I_P = I_{SS}$ 决定：对于理想器件，它是不确定的，任何失配都会把两个输出推向某一电源轨，因此实际中需要共模反馈（common-mode feedback）。
- **电压余度限幅。** 电平 $\pm I_{SS}R_1/2$ 的前提是：两个输出在其共同电平上下摆动 $\pm I_{SS}R_1/4$ 时，所有器件都保持饱和。若 $I_{SS}R_1/2$ 较大，曲线会更早变平，幅度也更小：上端在高电位一侧的 PMOS 退出饱和区时被限幅（漏极高于 $V_{b2} + |V_{THP}| = V_{DD} - (V_{SG3} - |V_{THP}|)$），下端在 $M_5$ 退出饱和区时被限幅（$V_P < V_{b1} - V_{THN}$）。导通的输入器件进入线性区本身并不会限制电平，因为 $M_5$ 仍然迫使其电流为 $I_{SS}$。

### 结果

$V_{out}$ 是一条**以 $V_{in1} = 1.5$ V 为中心的反相 S 形曲线**：

$$V_{out} = -\frac{R_1}{2}(I_{D1} - I_{D2}) = -\frac{R_1}{2}\cdot\frac{\beta_n}{2}\,\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}, \qquad \Delta V_{in} = V_{in1} - V_{in2} = 2V_{in1} - 3\ \mathrm{V}.$$

- 它从 $+I_{SS}R_1/2$（$V_{in1}$ 较低时）变化到 $-I_{SS}R_1/2$（$V_{in1}$ 较高时）。
- 其中心斜率为 $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}R_1/2$，即对 $V_{in1}$ 的斜率为 $-g_{m1}R_1$，其中 $g_{m1} = \sqrt{\beta_nI_{SS}}$。
- 在导引窗口 $|V_{in1} - V_{in2}| < \sqrt{2I_{SS}/\beta_n}$ 之外，即 $1.5\ \mathrm{V} \pm \tfrac12\sqrt{2I_{SS}/\beta_n}$ 之外，曲线是平坦的。

以上假设标称偏置 $2I_P = I_{SS}$ 且电压余度足够；否则电平会更早被限幅（见第 6 步）。

**常见错误。** 认为增益由 PMOS 负载决定，从而画出增益近乎无穷大、输出在两个电源轨之间摆动的曲线。理想电流源对差分信号相当于开路；差分负载是 $R_1$，每边看到的是 $R_1/2$，因此增益只是适中的 $g_{m1}R_1/2$，电平为 $\pm I_{SS}R_1/2$。

**常见错误。** 漏掉因子 2：得出电平为 $\pm I_{SS}R_1$，或相对于差分输入的斜率为 $-g_{m1}R_1$。完全导引时，只有一个 PMOS 的电流 $I_P = I_{SS}/2$ 流过 $R_1$；对于小信号，每半边看到的是 $R_1/2$。

**常见错误。** 画出同相的曲线。提高 $V_{in1}$ 会使 $I_{D1}$ 增大，从而拉低 X、让 Y 上升，因此 $V_X - V_Y$ 减小。
