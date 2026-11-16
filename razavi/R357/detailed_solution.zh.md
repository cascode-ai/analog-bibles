# 详细步骤 - R357

**思路。** 折算到带源极负反馈的级的输入端，$M_1$ 的噪声为 $4kT\gamma/g_m$，$R_S$ 的噪声为 $4kTR_S$。利用平方律把线性度条件 $I_DR_S = V_{ov}$ 转化为 $g_mR_S$ 的值，再进行比较。

### 第 1 步 — $M_1$ 的输入参考噪声

设 $\overline{I_{n1}^2} = 4kT\gamma g_m$，$\gamma = 2/3$，$\lambda = 0$ 且无体效应，则总漏极电流为

$$i_d = g_mv_{gs} + I_{n1} = g_m\left(v_{gs} + \frac{I_{n1}}{g_m}\right),$$

因此无论源极接什么，噪声电流都严格等效于与栅极串联的电压 $I_{n1}/g_m$：

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_m^2} = \frac{4kT\gamma}{g_m}.$$

（源极负反馈使漏极处的这个噪声电流和信号电流减小同一个因子 $1 + g_mR_S$。）

### 第 2 步 — $R_S$ 的输入参考噪声

把 $R_S$ 的噪声表示为串联电压 $V_{nS}$（$\overline{V_{nS}^2} = 4kTR_S$），沿输入回路应用基尔霍夫电压定律（KVL）得

$$v_{gs} = v_{in} - i_dR_S - V_{nS}.$$

$V_{nS}$ 的作用与 $-v_{in}$ 完全相同，因此**一比一地**折算到输入端：

$$\overline{V_{n,in}^2}\Big|_{R_S} = 4kTR_S .$$

### 第 3 步 — 用 $g_mR_S$ 表示线性度条件

要求为

$$I_DR_S = V_{ov}.$$

利用平方律下的跨导（transconductance）

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = \frac{2I_D}{V_{ov}},$$

$$
\begin{aligned}
g_mR_S &= \frac{2I_D}{V_{ov}}R_S = \frac{2\,(I_DR_S)}{V_{ov}} = \frac{2V_{ov}}{V_{ov}} = 2,\\
R_S &= \frac{2}{g_m}.
\end{aligned}
$$

### 第 4 步 — 比较两项贡献

代入 $R_S = 2/g_m$：

$$
\begin{aligned}
\overline{V_{n,in}^2}\Big|_{R_S} &= 4kTR_S = \frac{8kT}{g_m},\\
\overline{V_{n,in}^2}\Big|_{M_1} &= \frac{4kT\gamma}{g_m},
\end{aligned}
$$

$$\frac{\overline{V_{n,in}^2}|_{R_S}}{\overline{V_{n,in}^2}|_{M_1}} = \frac{8kT/g_m}{4kT\gamma/g_m} = \frac{2}{\gamma} = \frac{2}{2/3} = 3 .$$

因此 **$R_S$ 贡献的噪声功率是 $M_1$ 的三倍**（若 $\gamma = 1$ 则为两倍），以均方根电压计为 $\sqrt3 \approx 1.7$ 倍。两者都是看到相同增益的输入电压，因此 3:1 的比值在输出端同样成立。就噪声而言，晶体管相当于栅极处的一个电阻 $\gamma/g_m \approx 0.67/g_m$，而线性度条件要求的是 $2/g_m$。

**数值示例**（任何 $g_m$ 都给出相同的比值）。取 $g_m = 5$ mS：$R_S = 2/(5\ \mathrm{mS}) = 400\ \Omega$，而晶体管的等效噪声电阻为 $\gamma/g_m = (2/3)/(5\ \mathrm{mS}) = 133\ \Omega$；$400/133 = 3$。

### 第 5 步 — 对负载电阻项的影响

$R_D$ 的噪声除以带负反馈的增益 $g_mR_D/(1 + g_mR_S)$ 后，折算到输入端为 $4kT(1 + g_mR_S)^2/(g_m^2R_D)$。当 $g_mR_S = 2$ 时，$(1 + g_mR_S)^2 = 9$：是 $g_m$ 相同但无负反馈的级中负载贡献的九倍。总噪声为

$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_m} + \frac{2}{g_m} + \frac{9}{g_m^2R_D}\right] = 4kT\left[\frac{8/3}{g_m} + \frac{9}{g_m^2R_D}\right].$$

用源极负反馈换取线性度，要付出相当大的噪声代价。

### 结果

条件 $I_DR_S = V_{ov}$ 结合 $g_m = 2I_D/V_{ov}$ 给出 $g_mR_S = 2$，即 $R_S = 2/g_m$。于是

$$\frac{\overline{V_{n,in}^2}|_{R_S}}{\overline{V_{n,in}^2}|_{M_1}} = \frac{4kTR_S}{4kT\gamma/g_m} = \frac{2}{\gamma},$$

当 **$\gamma = 2/3$ 时它等于 3**（$\gamma = 1$ 时为 2）。源极负反馈电阻贡献的噪声功率约为晶体管的三倍（以均方根电压计为 $\sqrt3 \approx 1.7$ 倍），因此 $R_S$ 占主导。此外，$R_D$ 项乘以了 $(1 + g_mR_S)^2 = 9$。

**常见错误。** 把 $R_S$ 的噪声除以增益或 $(1 + g_mR_S)^2$，从而断定它的贡献小于 $M_1$。它的噪声电压位于输入回路之内，应一比一地折算为 $4kTR_S$。

**常见错误。** 使用 $g_m = I_D/V_{ov}$（漏掉了因子 2），得到 $g_mR_S = 1$，比值为 $1/\gamma = 1.5$，而不是 $2/\gamma$。

**常见错误。** 混淆功率比和电压比：$R_S$ 的噪声**功率**是 $M_1$ 的 3 倍，而均方根**电压**是 $\sqrt3 \approx 1.7$ 倍。
