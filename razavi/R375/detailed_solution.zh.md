# 详细步骤 - R375

**思路。** 令信号源为零（此时栅极经 $R_S$ 接地），保留 $M_1$ 的沟道噪声和 $R_F$ 的噪声电压，对输出节点和栅极节点列 KCL，并沿 $R_F$ 列 KVL 求解。输出噪声功率谱密度是两个相互独立的贡献之和。

### 第 1 步 — 小信号噪声模型（small-signal noise model）

令输入信号源为零（把栅极节点记为 G）：

- $R_S$：接在 G 与地之间（无噪声）。
- $M_1$：受控电流 $g_mV_G$ 从 out 流向地，与其噪声电流 $I_{n1}$ 并联，$\overline{I_{n1}^2} = 4kT\gamma g_m$（由于 $\lambda = 0$，不存在 $r_O$）。
- $I_1$：理想且无噪声，对小信号相当于开路。
- $R_F$：接在 out 与 G 之间，其噪声表示为串联电压 $V_{nF}$，$\overline{V_{nF}^2} = 4kTR_F$。设 $I_F$ 为 $R_F$ 中从输出端流向栅极的电流。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — KCL 与反馈电流

只有 $M_1$ 和 $R_F$ 能从输出节点引走小信号电流，而栅极不吸取电流，因此 $I_F$ 全部流过 $R_S$：

$$g_mV_G + I_{n1} + I_F = 0, \qquad V_G = R_SI_F .$$

代入得：

$$
\begin{aligned}
g_mR_SI_F + I_{n1} + I_F &= 0\\
I_F\,(1 + g_mR_S) &= -I_{n1}\\
I_F &= -\frac{I_{n1}}{1 + g_mR_S}.
\end{aligned}
$$

$V_{nF}$ 没有出现：**$R_F$ 的噪声电压根本不产生电流。** 只有 $V_{nF}$ 存在时，$I_F(1 + g_mR_S) = 0$，因此 $I_F = 0$，$V_G = 0$；输出节点上没有任何元件能吸收电流。

### 第 3 步 — 沿 $R_F$ 列 KVL 求输出电压

从栅极经 $R_F$ 及其串联噪声源到输出端：

$$
\begin{aligned}
V_{out} &= V_G + R_FI_F + V_{nF}\\
&= R_SI_F + R_FI_F + V_{nF}\\
&= (R_S + R_F)\,I_F + V_{nF}.
\end{aligned}
$$

代入第 2 步的 $I_F$：

$$V_{out} = V_{nF} - \frac{R_S + R_F}{1 + g_mR_S}\,I_{n1}.$$

- $R_F$ 的噪声电压以**单位增益**到达输出端：由于 $I_F = 0$，输出电压比保持不变的栅极电压高 $V_{nF}$。
- $M_1$ 的噪声电流乘以闭环**输出阻抗** $(R_S + R_F)/(1 + g_mR_S)$：在输出端施加测试电流 $i_x$，得 $I_F = i_x/(1 + g_mR_S)$，$V_{out} = (R_S + R_F)I_F$，因子相同。

### 第 4 步 — 输出噪声功率谱密度

两个噪声源互不相关：

$$
\begin{aligned}
\overline{V_{n,out}^2} &= \overline{V_{nF}^2} + \left(\frac{R_S + R_F}{1 + g_mR_S}\right)^2\overline{I_{n1}^2}\\
&= 4kTR_F + 4kT\gamma g_m\frac{(R_S + R_F)^2}{(1 + g_mR_S)^2}.
\end{aligned}
$$

### 第 5 步 — 两种极限情况下的检验

**$R_S = 0$（栅极接交流地）：**

$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_mR_F^2 = \left(\frac{4kT}{R_F} + 4kT\gamma g_m\right)R_F^2 ,$$

这就是熟悉的结果：此时 $R_F$ 相当于从输出端接到地的电阻，两个噪声电流都流过它。

**$R_S \to \infty$（输入端开路）：**

$$\frac{(R_S + R_F)^2}{(1 + g_mR_S)^2} \to \frac{R_S^2}{g_m^2R_S^2} = \frac{1}{g_m^2}, \qquad \overline{V_{n,out}^2} \to 4kTR_F + \frac{4kT\gamma}{g_m}.$$

栅极开路时，$M_1$ 经 $R_F$ 构成二极管连接（diode-connected）器件（输出阻抗为 $1/g_m$），而 $R_F$ 的噪声直接传到输出端。在两种极限之间，$R_S$ 越大，输出阻抗越从 $R_F$ 向 $1/g_m$ 降低，$M_1$ 的贡献也随之减小。

### 结果

$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_m\,\frac{(R_S + R_F)^2}{(1 + g_mR_S)^2}$$

$R_F$ 的噪声电压以单位增益出现在输出端，$M_1$ 的噪声电流则乘以闭环输出阻抗 $(R_S + R_F)/(1 + g_mR_S)$。$R_S = 0$ 时上式简化为 $(4kT/R_F + 4kT\gamma g_m)R_F^2$，$R_S \to \infty$ 时简化为 $4kTR_F + 4kT\gamma/g_m$。

**常见错误。** 以为反馈环路会抑制 $R_F$ 的噪声。$V_{nF}$ 不能在 $R_F$ 中产生任何电流，因此它全部出现在输出端。

**常见错误。** 不论 $R_S$ 为何值，都把 $M_1$ 的噪声电流乘以 $R_F$。这只在 $R_S = 0$ 时成立；一般情况下因子为 $(R_S + R_F)/(1 + g_mR_S)$，随着 $R_S$ 增大而向 $1/g_m$ 减小。

**常见错误。** 把 $I_1$ 当作接到 $V_{DD}$ 的电阻，或者把 $R_S$ 放在 $M_1$ 的源极。$I_1$ 是理想电流源，而 $R_S$ 与栅极串联，其中只流过 $I_F$。
