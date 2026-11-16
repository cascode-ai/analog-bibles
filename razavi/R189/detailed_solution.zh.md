# 详细步骤 - R189

**思路。** 每个 PMOS 的栅极电压取自其电阻的**下端**，而输出取自电阻的**上端**（即 PMOS 的漏极）。因此每个输出都等于一个类似二极管的电压 $V_{DD} - |V_{GS3}|$ 加上 $R_1$ 上的压降。把两个输出写成漏极电流的函数，再利用输入对管的大信号（large-signal）电流导引，就得到中心增益、两端电平以及它们与 $R_1$ 的关系。

### 第 1 步 — 节点命名与扫描方式

把左输出端（$M_3$ 的漏极，$R_1$ 的上端）记为 A，$M_1$ 的漏极（$R_1$ 的下端，它同时驱动 $M_3$ 的栅极）记为 B；A′ 和 B′ 是它们在右边的镜像节点，因此 $V_{out} = V_A - V_{A'}$。由于 $V_{in2} = 3\ \mathrm{V} - V_{in1}$，输入共模电平（common-mode level）固定为 1.5 V，差分输入为 $\Delta V_{in} = V_{in1} - V_{in2} = 2V_{in1} - 3$ V。交换两个输入相当于把电路左右镜像，因此 $V_{out}$ 关于 $V_{in1} = 1.5$ V 奇对称。

### 第 2 步 — 把每个输出表示为其支路电流的函数

$M_3$ 的栅极不吸取电流，因此 $M_3$ 的全部漏极电流都经 $R_1$ 流入 $M_1$：$M_3$ 流过 $I_{D1}$。$M_3$ 饱和时，

$$
\begin{aligned}
I_{D1} &= \tfrac12\beta_p\left(V_{SG3} - |V_{THP}|\right)^2, \qquad V_{SG3} = V_{DD} - V_B,\\
V_B &= V_{DD} - |V_{THP}| - \sqrt{\frac{2I_{D1}}{\beta_p}} .
\end{aligned}
$$

由 $V_A = V_B + I_{D1}R_1$ 得

$$V_A = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_{D1}}{\beta_p}} + I_{D1}R_1 .$$

**$M_3$ 的饱和条件。** $V_{SD3} \ge V_{SG3} - |V_{THP}|$ 意味着 $V_{DD} - V_A \ge V_{DD} - V_B - |V_{THP}|$，即

$$V_A - V_B = I_{D1}R_1 \le |V_{THP}| = 0.8\ \mathrm{V}.$$

暂且假设这一条件成立（若 $I_{SS}R_1 \le 0.8$ V，它对所有电流都成立）；另一种情况在第 8 步讨论。

**输出之差。** 定义

$$f(I) = IR_1 - \sqrt{\frac{2I}{\beta_p}} .$$

则 $V_A = V_{DD} - |V_{THP}| + f(I_{D1})$，$V_{A'} = V_{DD} - |V_{THP}| + f(I_{D2})$，常数项相互抵消：

$$V_{out} = f(I_{D1}) - f(I_{D2}).$$

$R_1$ 的作用与二极管项**相反**：电流增大会使栅极节点 B 降低（$-\sqrt{\cdot}$ 项），却使 $R_1$ 上的压降增大（$+IR_1$ 项）。

### 第 3 步 — 输入对管的大信号电流导引

$M_1$ 和 $M_2$ 饱和且 $I_{D1} + I_{D2} = I_{SS}$ 时，标准结果（由 $\sqrt{2I_{D1}/\beta_n} - \sqrt{2I_{D2}/\beta_n} = \Delta V_{in}$ 得到）为

$$I_{D1} - I_{D2} = \frac{\beta_n}{2}\Delta V_{in}\sqrt{\frac{4I_{SS}}{\beta_n} - \Delta V_{in}^2}, \qquad |\Delta V_{in}| \le \Delta V_{max} = \sqrt{\frac{2I_{SS}}{\beta_n}},$$

其中 $I_{D1} = \tfrac12[I_{SS} + (I_{D1} - I_{D2})]$，$I_{D2} = \tfrac12[I_{SS} - (I_{D1} - I_{D2})]$。在此窗口之外，一个器件流过全部 $I_{SS}$；即使它随后进入线性区（在扫描的两端），尾电流管 $M_5$ 仍然迫使其电流为 $I_{SS}$，因此平台不变。

### 第 4 步 — 中心处的斜率（大信号求导）

$f$ 的导数为

$$f'(I) = R_1 - \frac{d}{dI}\sqrt{\frac{2I}{\beta_p}} = R_1 - \frac{1}{\sqrt{2\beta_pI}} = R_1 - \frac{1}{g_{m3}(I)},$$

这是因为电流为 $I$ 时 $g_{m3} = \sqrt{2\beta_pI}$。平衡时 $dI_{D1}/d\Delta V_{in} = +g_{m1}/2$，$dI_{D2}/d\Delta V_{in} = -g_{m1}/2$，其中 $g_{m1} = \sqrt{\beta_nI_{SS}}$，因此

$$
\begin{aligned}
\frac{dV_{out}}{d\Delta V_{in}}\bigg|_0 &= f'\!\left(\frac{I_{SS}}{2}\right)\frac{g_{m1}}{2} - f'\!\left(\frac{I_{SS}}{2}\right)\left(-\frac{g_{m1}}{2}\right) = g_{m1}\,f'\!\left(\frac{I_{SS}}{2}\right)\\
&= -g_{m1}\left(\frac{1}{g_{m3}} - R_1\right), \qquad g_{m3} = \sqrt{\beta_pI_{SS}} .
\end{aligned}
$$

### 第 5 步 — 用小信号分析验证斜率

在差分半边电路（half circuit）中，P 是虚地（virtual ground），因此 $M_1$ 从 B 抽取电流 $g_{m1}v_{in}$；$M_3$ 的源极接交流地、栅极接 B，它向 A 注入电流 $-g_{m3}v_B$；$R_1$ 连接 A 和 B。

<!-- diagram: diagram-01.cir -->

对 B 点和 A 点应用基尔霍夫电流定律（KCL）：在 B 点，流过 $R_1$ 的电流就是 $M_1$ 抽取的电流；在 A 点，$M_3$ 注入的电流经 $R_1$ 流出：

$$\frac{v_A - v_B}{R_1} = g_{m1}v_{in}, \qquad -g_{m3}v_B = \frac{v_A - v_B}{R_1} = g_{m1}v_{in}\quad\Longrightarrow\quad v_B = -\frac{g_{m1}}{g_{m3}}v_{in}.$$

于是

$$v_A = v_B + R_1g_{m1}v_{in} = -g_{m1}\left(\frac{1}{g_{m3}} - R_1\right)v_{in},$$

与前面的结果相同。普通的二极管负载给出 $-g_{m1}/g_{m3}$；而这里 $R_1$ 是从 $1/g_{m3}$ 中**减去**的，因为位于 $R_1$ 上端的输出与栅极节点的变化方向相反。

### 第 6 步 — 两端电平（完全导引）

**$V_{in1}$ 较低时**（$\Delta V_{in} \le -\Delta V_{max}$）：$I_{D1} = 0$，$I_{D2} = I_{SS}$。

- 左边：没有电流，$R_1$ 上就没有压降（$V_A = V_B$），因此 $M_3$ 的栅极处于其漏极电位；电流为零时，由平方律（square law）得 $V_{SG3} = |V_{THP}|$：$V_A = V_{DD} - |V_{THP}| = 2.2$ V；亚阈值（subthreshold）导电会使它再略微升高一些。形式上，$f(0) = 0$。
- 右边：$V_{A'} = V_{DD} - |V_{THP}| - \sqrt{2I_{SS}/\beta_p} + I_{SS}R_1$。

$$V_{out} = f(0) - f(I_{SS}) = \sqrt{\frac{2I_{SS}}{\beta_p}} - I_{SS}R_1 .$$

**$V_{in1}$ 较高时**：由对称性，$V_{out} = -\left(\sqrt{2I_{SS}/\beta_p} - I_{SS}R_1\right)$。

### 第 7 步 — 典型情况 $R_1 < 1/g_{m3}$ 及数值

当 $R_1 < 1/g_{m3}$ 时，中心斜率为负，$V_{in1}$ 较低时端电平为正：这是一条**反相 S 形曲线**，与以二极管连接器件为负载的差分对类似，但增益和摆幅更小。

示例（参数自由选取）：$\beta_n = \beta_p = 2\ \mathrm{mA/V^2}$，$I_{SS} = 200\ \mu$A，$R_1 = 500\ \Omega$。

$$
\begin{aligned}
g_{m1} &= \sqrt{\beta_nI_{SS}} = \sqrt{(2\ \mathrm{mA/V^2})(200\ \mu\mathrm{A})} = 0.632\ \mathrm{mS},\\
g_{m3} &= \sqrt{\beta_pI_{SS}} = 0.632\ \mathrm{mS}, \qquad \frac{1}{g_{m3}} = 1.58\ \mathrm{k}\Omega > R_1\ \checkmark,\\
\frac{dV_{out}}{d\Delta V_{in}}\bigg|_0 &= -(0.632\ \mathrm{mS})(1.58\ \mathrm{k}\Omega - 0.5\ \mathrm{k}\Omega) = -0.68\quad(-1.37\ \text{per volt of } V_{in1}),\\
\sqrt{2I_{SS}/\beta_p} &= \sqrt{\frac{2(200\ \mu\mathrm{A})}{2\ \mathrm{mA/V^2}}} = 0.447\ \mathrm{V}, \qquad I_{SS}R_1 = 0.1\ \mathrm{V}\ (< 0.8\ \mathrm{V}\ \checkmark),\\
\text{end levels} &= \pm(0.447 - 0.1) = \pm0.347\ \mathrm{V},\\
\Delta V_{max} &= \sqrt{2I_{SS}/\beta_n} = 0.447\ \mathrm{V}\ \Rightarrow\ \text{flat for } V_{in1} \le 1.276\ \mathrm{V} \text{ and } V_{in1} \ge 1.724\ \mathrm{V}.
\end{aligned}
$$

**中间一点：$V_{in1} = 1.4$ V（$\Delta V_{in} = -0.2$ V）：**

$$
\begin{aligned}
I_{D1} - I_{D2} &= (1\ \mathrm{mA/V^2})(-0.2)\sqrt{0.4 - 0.04}\ \mathrm{V^2} = -120\ \mu\mathrm{A} \Rightarrow I_{D1} = 40\ \mu\mathrm{A},\ I_{D2} = 160\ \mu\mathrm{A},\\
f(I_{D1}) &= (40\ \mu\mathrm{A})(500\ \Omega) - \sqrt{2(40\ \mu\mathrm{A})/(2\ \mathrm{mA/V^2})} = 0.020 - 0.200 = -0.180\ \mathrm{V},\\
f(I_{D2}) &= (160\ \mu\mathrm{A})(500\ \Omega) - \sqrt{2(160\ \mu\mathrm{A})/(2\ \mathrm{mA/V^2})} = 0.080 - 0.400 = -0.320\ \mathrm{V},\\
V_{out} &= -0.180 - (-0.320) = +0.140\ \mathrm{V}.
\end{aligned}
$$

| $V_{in1}$ (V) | $V_A$ (V) | $V_{A'}$ (V) | $V_{out}$ (V) |
|---|---|---|---|
| 0 到 1.276 | 2.200 | 1.853 | +0.347 |
| 1.30 | 2.156 | 1.854 | +0.302 |
| 1.40 | 2.020 | 1.880 | +0.140 |
| 1.50 | 1.934 | 1.934 | 0 |
| 1.60 | 1.880 | 2.020 | −0.140 |
| 1.70 | 1.854 | 2.156 | −0.302 |
| 1.724 到 3 | 1.853 | 2.200 | −0.347 |

（用这些参数对电路进行完整的直流求解，可以得到与此表相同的结果。）

### 第 8 步 — $R_1$ 取其他值的情况（作为补充）

由于 $f$ 是凸函数（$f'' > 0$），随着 $R_1$ 增大，曲线形状会发生变化：

- **$R_1 = 1/g_{m3}$：** 中心增益为零（中心处平坦），但两端电平 $\pm\sqrt{I_{SS}/\beta_p}(\sqrt2 - 1)$ 仍不为零，且符号仍是反相的。
- **$1/g_{m3} < R_1 < \sqrt2/g_{m3}$：** 中心斜率为正，而两端仍保持反相的符号，因此曲线是非单调的。
- **$R_1 > \sqrt2/g_{m3}$：** 两端电平改变符号，中心处为同相。
- **在导引窗口的边缘附近**，对任何 $R_1$，斜率都趋于 $-\sqrt{\beta_n/\beta_p}$：电流趋于零的那一边 $1/g_{m3} \to \infty$，而 $dI_{D1}/d\Delta V_{in} \approx \sqrt{2\beta_nI_{D1}}$，因此 $f'(I_{D1})\,dI_{D1}/d\Delta V_{in} \to -\sqrt{\beta_n/\beta_p}$。

**PMOS 处于线性区**（若 $I_{SS}R_1 > |V_{THP}|$）。完全导引时，流过大电流的器件会退出饱和区。令 $V_{ov} = V_{SG} - |V_{THP}|$，$V_{SD} = V_{SG} - IR_1 = V_{ov} - (IR_1 - |V_{THP}|)$，由线性区电流公式得

$$I = \beta_p\left[V_{ov}V_{SD} - \tfrac12V_{SD}^2\right] = \tfrac12\beta_p\left[V_{ov}^2 - (IR_1 - |V_{THP}|)^2\right].$$

因此 $V_{in1}$ 较低时的端电平变为 $+\left[\sqrt{2I_{SS}/\beta_p + (I_{SS}R_1 - |V_{THP}|)^2} - I_{SS}R_1\right]$（$V_{in1}$ 较高时取其相反数），在代数值上大于饱和公式给出的值。

### 结果

$M_3$ 流过 $I_{D1}$，其栅极由 $R_1$ 的下端驱动，因此

$$V_A = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_{D1}}{\beta_p}} + I_{D1}R_1, \qquad V_{out} = f(I_{D1}) - f(I_{D2}),\quad f(I) = IR_1 - \sqrt{\frac{2I}{\beta_p}}$$

（在 $I_{D1}R_1 < |V_{THP}|$ 时成立）。

在典型情况 $R_1 < 1/g_{m3}$ 下（$g_{m3} = \sqrt{\beta_pI_{SS}}$），曲线是一条以 $V_{in1} = 1.5$ V 为中心的**反相 S 形曲线**：

- **中心斜率：** $dV_{out}/d(V_{in1} - V_{in2}) = -g_{m1}(1/g_{m3} - R_1)$，其中 $g_{m1} = \sqrt{\beta_nI_{SS}}$。
- **两端平坦：** 当 $|V_{in1} - V_{in2}| > \sqrt{2I_{SS}/\beta_n}$ 时，$V_{out} = \pm\left[\sqrt{2I_{SS}/\beta_p} - I_{SS}R_1\right]$，$V_{in1}$ 较低时为正。截止一侧的输出位于 $V_{DD} - |V_{THP}| = 2.2$ V。
- **更大的 $R_1$** 会使中心增益减小、抵消为零（$R_1 = 1/g_{m3}$）或反号，并产生非单调的曲线（见第 8 步）。

**常见错误。** 把 $M_3$/$M_4$ 当作普通的二极管连接负载（栅极接在输出节点），或者把输出取在 $M_1$/$M_2$ 的漏极。这两种做法都会使 $R_1$ 从结果中消失，得到增益 $g_{m1}/g_{m3} = \sqrt{\beta_n/\beta_p}$ 和端电平 $\pm\sqrt{2I_{SS}/\beta_p}$。

**常见错误。** 把 $R_1$ 当作与二极管串联而相加，即增益为 $g_{m1}(1/g_{m3} + R_1)$。电流增大时，B 被拉低 $\Delta I/g_{m3}$，而 A 比 B 高出 $\Delta I\,R_1$，因此 $R_1$ 的作用是相减。

**常见错误。** 把两端电平写成 $\pm\sqrt{2I_{SS}/\beta_p}$。导通一侧的输出被抬高了 $I_{SS}R_1$，因此电平为 $\pm(\sqrt{2I_{SS}/\beta_p} - I_{SS}R_1)$。
