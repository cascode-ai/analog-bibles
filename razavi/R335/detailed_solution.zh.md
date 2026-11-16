# 详细步骤 - R335

**思路。** 理想电流源 $I_1$ 迫使离开输出节点的交流电流总和为零，因此 **$R_S$ 中没有交流电流**。由此确定源极电压，然后在输出端列一个 KCL 方程，就能把 $v_{out}$ 写成信号项与三个噪声项之和；再除以增益，即可把每一项折算到输入端。

### 第 1 步 — 小信号模型（small-signal model）与噪声源

$I_1$ 对交流信号相当于开路。由于 $\lambda = 0$ 且无体效应，$M_1$ 是一个从输出端流向源极节点 S 的电流源 $g_m(v_{in} - v_S)$，与 $R_F$ 并联。互不相关的噪声源有：

- $I_{n1}$：$M_1$ 的沟道噪声，从漏极流向源极，$\overline{I_{n1}^2} = 4kT\gamma g_m$；
- $I_{nF}$：$R_F$ 的诺顿噪声电流，与 $R_F$ 并联（从输出端到 S），$\overline{I_{nF}^2} = 4kT/R_F$；
- $V_{nS}$：$R_S$ 的戴维南噪声电压，与 $R_S$ 串联，$\overline{V_{nS}^2} = 4kTR_S$。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — $R_S$ 中没有交流电流

除了不承载交流电流的 $I_1$ 之外，输出节点只与晶体管支路和 $R_F$ 支路相连，而这两条支路都通向 S。因此由 KCL，这两条支路流入 S 的交流净电流为零；又因为 $R_S$ 是 S 的唯一其他通路，

$$i_{R_S} = 0 .$$

于是 $R_S$ 本身没有交流压降，源极电压就是 $R_S$ 的噪声电压：

$$v_S = V_{nS} + i_{R_S}R_S = V_{nS}.$$

仅就信号而言，**节点 S 处于交流地**，因此 $R_S$ 不影响增益。

### 第 3 步 — 输出节点的 KCL

经晶体管支路和 $R_F$ 支路离开输出端的电流之和为零：

$$g_m(v_{in} - v_S) + I_{n1} + \frac{v_{out} - v_S}{R_F} + I_{nF} = 0 .$$

两边乘以 $R_F$，解出 $v_{out}$：

$$
\begin{aligned}
v_{out} - v_S &= -g_mR_F(v_{in} - v_S) - R_F(I_{n1} + I_{nF})\\
v_{out} &= -g_mR_F\,v_{in} + (1 + g_mR_F)\,v_S - R_F(I_{n1} + I_{nF}).
\end{aligned}
$$

代入第 2 步的 $v_S = V_{nS}$：

$$v_{out} = -g_mR_F\,v_{in} + (1 + g_mR_F)\,V_{nS} - R_F\,(I_{n1} + I_{nF}).$$

### 第 4 步 — 信号增益及各项的含义

关闭所有噪声源，

$$A_v = \frac{v_{out}}{v_{in}} = -g_mR_F :$$

$I_1$ 无法吸收电流 $g_mv_{in}$，因此该电流只能经 $R_F$ 返回。

- **$R_S$：** $V_{nS}$ 使源极电压升高，因此 $M_1$ 的电流减少 $g_mV_{nS}$；这部分电流必须改由 $R_F$ 流过，使 $v_{out} - v_S$ 增加 $g_mR_FV_{nS}$。再加上源极本身的升高，$v_{out} = (1 + g_mR_F)V_{nS}$。
- **$M_1$ 和 $R_F$：** 两者都是输出端与 S 之间的电流，必须经 $R_F$ 返回，给出 $-R_F(I_{n1} + I_{nF})$。

### 第 5 步 — 逐项折算到输入端

把输出表达式除以 $A_v = -g_mR_F$：

$$
\begin{aligned}
v_{n,in} &= \frac{(1 + g_mR_F)V_{nS} - R_F(I_{n1} + I_{nF})}{-g_mR_F}\\
&= -\frac{1 + g_mR_F}{g_mR_F}\,V_{nS} + \frac{I_{n1}}{g_m} + \frac{I_{nF}}{g_m}.
\end{aligned}
$$

各噪声源互不相关，因此用各系数的平方分别乘以各自的功率：

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \left(\frac{1 + g_mR_F}{g_mR_F}\right)^2\overline{V_{nS}^2} + \frac{\overline{I_{n1}^2}}{g_m^2} + \frac{\overline{I_{nF}^2}}{g_m^2}\\
&= 4kTR_S\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2 + \frac{4kT\gamma g_m}{g_m^2} + \frac{4kT/R_F}{g_m^2}\\
&= \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_F} + 4kTR_S\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2 .
\end{aligned}
$$

### 第 6 步 — 验证

- **$R_S = 0$：** 电路成为负载为 $R_F$ 的共源级（common-source stage），结果化为 $4kT\gamma/g_m + 4kT/(g_m^2R_F)$。
- **$g_mR_F \gg 1$：** $\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2 \to 1$，因此 $R_S$ 的贡献约为 $4kTR_S$，与源极负反馈（source degeneration）电阻相同；当 $g_mR_F$ 不太大时，其噪声被放大 $(1 + 1/(g_mR_F))^2$ 倍。
- **量纲：** 每一项都是 $4kT$ 乘以一个电阻（$\gamma/g_m$、$1/(g_m^2R_F)$、$R_S$），因此结果的单位为 V²/Hz。

$R_S$ 不出现在增益中（它不承载交流电流），却会增加噪声，因为它的噪声**电压**会使源极节点电压变化。

### 结果

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_F} + 4kTR_S\left(\frac{1 + g_mR_F}{g_mR_F}\right)^2$$

信号增益为 $A_v = -g_mR_F$。由于 $I_1$ 是理想的，$R_S$ 中没有交流电流，因此源极电压就是 $R_S$ 自身的噪声电压；该噪声被放大 $(1 + g_mR_F)$ 倍后到达输出端。

**常见错误。** 把电路当作增益为 $g_mR_F/(1 + g_mR_S)$ 的源极负反馈共源级，仿佛 $R_F$ 是接到 $V_{DD}$ 的漏极负载。实际上 $R_F$ 接在漏极与**源极**之间，而 $I_1$ 不允许任何交流电流离开漏极–源极这一对节点，因此增益就是 $-g_mR_F$。

**常见错误。** 把 $R_S$ 的噪声折算为简单的 $4kTR_S$。它的噪声电压既经晶体管（$g_mR_F$）到达输出端，也经 $R_F$ 直接到达输出端（即 $1 + g_mR_F$ 中的“1”），因此带有因子 $\left[(1 + g_mR_F)/(g_mR_F)\right]^2$。

**常见错误。** 把 $R_F$ 当作接在输出端与地之间的负载。它的噪声电流与 $M_1$ 的一样，在输出端与 S 之间流动并经 $R_F$ 闭合，因此折算到输入端为 $I_{nF}/g_m$，得到 $4kT/(g_m^2R_F)$。
