# 详细步骤 - R374

**思路。** $R_F$ 使放大器的输入阻抗为有限值，因此其噪声需要用输入参考噪声电压（输入端短路）和输入参考噪声电流（输入端开路）共同描述。计入 $r_O$ 后，对输出节点应用基尔霍夫电流定律（KCL）重新推导这两个量，并与 $\lambda = 0$ 的情况比较。关键在于：无噪声的 $r_O$ 以相同的方式出现在噪声传递函数和信号传递函数中，因此在输入参考量中被约去。

### 第 1 步 — 小信号噪声模型（small-signal noise model）

需要考虑两个节点：栅极 G（输入端）和 out。

- $M_1$：受控电流 $g_mv_g$ 从 out 流向地，其沟道噪声电流 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_m$）也从 out 流向地，**无噪声**的 $r_O$ 接在 out 与地之间（$r_O$ 用于模拟沟道长度调制，不产生热噪声）。
- $I_1$：理想电流源，对小信号相当于开路。
- $R_F$：接在 G 与 out 之间，其噪声可表示为并联电流 $\overline{I_{nF}^2} = 4kT/R_F$ 或串联电压 $\overline{V_{nF}^2} = 4kTR_F$，视方便而定。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 输入参考噪声电压（输入端短路）

G 接地时 $v_g = 0$，$R_F$（此时接地）与 $r_O$ 并联；两个噪声电流都流入这一并联组合：

$$v_{n,out} = (I_{n1} + I_{nF})\,(R_F\parallel r_O),$$

$$\overline{V_{n,out}^2}\Big|_{\text{in shorted}} = 4kT\left(\gamma g_m + \frac{1}{R_F}\right)(R_F\parallel r_O)^2 .$$

**电压增益。** 用 $v_{in}$ 驱动 G，对输出节点列 KCL：

$$
\begin{aligned}
\frac{v_{out} - v_{in}}{R_F} + g_mv_{in} + \frac{v_{out}}{r_O} &= 0\\
v_{out}\left(\frac{1}{R_F} + \frac{1}{r_O}\right) &= -v_{in}\left(g_m - \frac{1}{R_F}\right)\\
A_v = \frac{v_{out}}{v_{in}} &= -\left(g_m - \frac{1}{R_F}\right)(R_F\parallel r_O).
\end{aligned}
$$

其中 $g_m - 1/R_F$ 是净跨导（transconductance）：$M_1$ 吸收 $g_mv_{in}$，而 $R_F$ 把 $v_{in}/R_F$ 前馈到输出端。除以 $A_v^2$ 后，$(R_F\parallel r_O)^2$ 被约去：

$$\overline{V_{n,in}^2} = \frac{4kT\left(\gamma g_m + 1/R_F\right)(R_F\parallel r_O)^2}{(g_m - 1/R_F)^2(R_F\parallel r_O)^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}.$$

### 第 3 步 — 输入参考噪声电流（输入端开路）

G 开路时，**$R_F$ 中没有电流**，因此若把 $R_F$ 的噪声表示为串联电压，栅极电压就等于输出电压加上该噪声电压：$v_g = v_{out} + V_{nF}$。对输出节点列 KCL：

$$
\begin{aligned}
g_mv_g + I_{n1} + \frac{v_{out}}{r_O} &= 0\\
g_m(v_{out} + V_{nF}) + I_{n1} + \frac{v_{out}}{r_O} &= 0\\
v_{out}\left(g_m + \frac{1}{r_O}\right) &= -\left(g_mV_{nF} + I_{n1}\right)\\
v_{n,out} &= -\frac{g_mV_{nF} + I_{n1}}{g_m + 1/r_O},
\end{aligned}
$$

$$\overline{V_{n,out}^2}\Big|_{\text{in open}} = \frac{4kT\left(g_m^2R_F + \gamma g_m\right)}{(g_m + 1/r_O)^2}.$$

**跨阻（transimpedance）。** 注入开路栅极的电流 $i_{in}$ 流过 $R_F$，因此 $v_g = v_{out} + i_{in}R_F$，对输出节点列 KCL 得

$$
\begin{aligned}
i_{in} &= g_m(v_{out} + i_{in}R_F) + \frac{v_{out}}{r_O}\\
i_{in}(1 - g_mR_F) &= v_{out}\left(g_m + \frac{1}{r_O}\right)\\
\frac{v_{out}}{i_{in}} &= -\frac{g_mR_F - 1}{g_m + 1/r_O}.
\end{aligned}
$$

两者相除，$(g_m + 1/r_O)^2$ 被约去：

$$\overline{I_{n,in}^2} = \frac{4kT(g_m^2R_F + \gamma g_m)/(g_m + 1/r_O)^2}{(g_mR_F - 1)^2/(g_m + 1/r_O)^2} = \frac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2}.$$

### 第 4 步 — 与 $\lambda = 0$ 情况的比较

在第 2 步和第 3 步中令 $r_O \to \infty$：

| 物理量 | $\lambda = 0$ | $\lambda > 0$ |
|---|---|---|
| $\overline{V_{n,in}^2}$ | $\dfrac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}$ | 相同 |
| $\overline{I_{n,in}^2}$ | $\dfrac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2}$ | 相同 |
| $\overline{V_{n,out}^2}$，输入端短路 | $4kT\left(\dfrac{1}{R_F} + \gamma g_m\right)R_F^2$ | $4kT\left(\dfrac{1}{R_F} + \gamma g_m\right)(R_F\parallel r_O)^2$ |
| $\overline{V_{n,out}^2}$，输入端开路 | $4kTR_F + \dfrac{4kT\gamma}{g_m}$ | $\dfrac{4kT(g_m^2R_F + \gamma g_m)}{(g_m + 1/r_O)^2}$ |

（最后一行在 $\lambda = 0$ 时：$4kT(g_m^2R_F + \gamma g_m)/g_m^2 = 4kTR_F + 4kT\gamma/g_m$。）

**输入参考噪声电压和电流都不变；只有输出噪声电压变小。** 无噪声的 $r_O$ 跨接在输出端口上，使输出噪声和输出信号按相同的因子变化：输入端短路时为 $(R_F\parallel r_O)$，输入端开路时为 $1/(g_m + 1/r_O)$。等价地说，若采用输出短路**电流**来分析，$r_O$ 中根本没有电流。

当环路增益（loop gain）很大，即 $g_mR_F \gg 1$ 时：$\overline{V_{n,in}^2} \approx 4kT\gamma/g_m + 4kT/(g_m^2R_F)$，基本上就是共源级（common-source stage）的噪声；$\overline{I_{n,in}^2} \approx 4kT/R_F + 4kT\gamma/(g_mR_F^2)$，基本上就是反馈电阻的噪声电流。

### 结果

$$\overline{V_{n,in}^2} = \frac{4kT/R_F + 4kT\gamma g_m}{(g_m - 1/R_F)^2}, \qquad \overline{I_{n,in}^2} = \frac{4kTR_Fg_m^2 + 4kT\gamma g_m}{(g_mR_F - 1)^2},$$

与 $r_O$ 无关，即与 $\lambda = 0$ 时的结果完全相同。只有输出噪声电压发生变化：

- 输入端短路：$\overline{V_{n,out}^2} = 4kT\left(\dfrac{1}{R_F} + \gamma g_m\right)(R_F\parallel r_O)^2$，而不是 $4kT\left(\dfrac{1}{R_F} + \gamma g_m\right)R_F^2$；
- 输入端开路：$\overline{V_{n,out}^2} = \dfrac{4kT(g_m^2R_F + \gamma g_m)}{(g_m + 1/r_O)^2}$，而不是 $4kTR_F + 4kT\gamma/g_m$。

$r_O$ 无噪声，并使噪声和增益按相同比例变化，因此它从输入参考量中消失。

**常见错误。** 把 $r_O$ 当作有噪声的电阻，加上 $4kT/r_O$。沟道噪声已经完全由 $4kT\gamma g_m$ 描述。

**常见错误。** 把净跨导写成 $g_m - 1/R_F - 1/r_O$。当输出端保持接地时，$r_O$ 中没有任何由输入产生的电流；它只决定输出阻抗 $R_F\parallel r_O$。把它混入跨导会使输入参考噪声错误地依赖于 $\lambda$。

**常见错误。** 因为输出噪声随 $\lambda$ 降低，就断定输入参考噪声也随之降低。增益按完全相同的比例下降。
