# 详细步骤 - R372

**思路。** 建立包含三个噪声源（$M_1$、$M_2$、$R_D$）和 $C_X$ 的共源共栅级小信号模型（small-signal model）。对 X 点和输出节点列 KCL，可把输出电压表示为输入及各噪声电流的函数；再除以随频率变化的增益，就得到等效输入噪声电压，其中各项按功率相加（各噪声源互不相关）。

### 第 1 步 — 小信号噪声模型

需要考虑三个节点：in、X 和 out（$s = j\omega$；不含 $r_O$ 和 $g_{mb}$）。

- $M_1$：受控电流 $g_{m1}v_{in}$ 从 X 流向地，与之并联的噪声电流 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_{m1}$）也从 X 流向地。
- $M_2$：栅极接交流地，因此 $v_{gs2} = -V_X$；受控电流 $-g_{m2}V_X$ 从 out 流向 X，与之并联的噪声电流 $I_{n2}$（$\overline{I_{n2}^2} = 4kT\gamma g_{m2}$）也从 out 流向 X。
- $C_X$：接在 X 与地之间，流过的电流为 $sC_XV_X$。
- $R_D$：接在 out 与交流地之间，其噪声电流 $I_{nR}$（$\overline{I_{nR}^2} = 4kT/R_D$）注入 out。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 节点 X 的 KCL 方程

经 $M_2$ 流入 X 的电流，经 $M_1$ 和 $C_X$ 流出：

$$-g_{m2}V_X + I_{n2} = g_{m1}v_{in} + I_{n1} + sC_XV_X ,$$

$$
\begin{aligned}
-V_X\,(g_{m2} + sC_X) &= g_{m1}v_{in} + I_{n1} - I_{n2}\\
V_X &= \frac{I_{n2} - g_{m1}v_{in} - I_{n1}}{g_{m2} + sC_X}.
\end{aligned}
$$

### 第 3 步 — 经 $M_2$ 送到输出端的电流

流过 $M_2$（从 out 到 X）的总电流为 $I_2 = -g_{m2}V_X + I_{n2}$。代入 $V_X$：

$$
\begin{aligned}
I_2 &= -\frac{g_{m2}\left(I_{n2} - g_{m1}v_{in} - I_{n1}\right)}{g_{m2} + sC_X} + \frac{I_{n2}\,(g_{m2} + sC_X)}{g_{m2} + sC_X}\\
&= \frac{-g_{m2}I_{n2} + g_{m2}g_{m1}v_{in} + g_{m2}I_{n1} + g_{m2}I_{n2} + sC_XI_{n2}}{g_{m2} + sC_X}\\
&= \frac{g_{m2}\left(g_{m1}v_{in} + I_{n1}\right) + sC_XI_{n2}}{g_{m2} + sC_X}.
\end{aligned}
$$

$g_{m2}I_{n2}$ 项相互抵消，因此 $I_{n2}$ 只通过 $sC_X$ 项起作用。

**输出节点的 KCL 方程。** 来自 $R_D$ 的电流 $-v_{out}/R_D$ 加上 $I_{nR}$ 等于 $I_2$：

$$-\frac{v_{out}}{R_D} + I_{nR} = I_2 \quad\Longrightarrow\quad v_{out} = -R_DI_2 + R_DI_{nR}.$$

### 第 4 步 — 信号增益

关闭所有噪声源：

$$A_v(s) = \frac{v_{out}}{v_{in}} = -g_{m1}R_D\,\frac{g_{m2}}{g_{m2} + sC_X}.$$

低频时它就是共源共栅级的增益 $-g_{m1}R_D$；高频时 $C_X$ 分走了 $M_1$ 的一部分信号电流，在 $\omega_X = g_{m2}/C_X$ 处形成一个极点。

### 第 5 步 — 将噪声折算到输入端

令 $v_{in} = 0$：

$$v_{n,out} = -R_D\,\frac{g_{m2}I_{n1} + sC_XI_{n2}}{g_{m2} + sC_X} + R_DI_{nR}.$$

除以 $A_v(s)$，即乘以 $-(g_{m2} + sC_X)/(g_{m1}R_Dg_{m2})$：

$$
\begin{aligned}
v_{n,in} &= \frac{g_{m2}I_{n1} + sC_XI_{n2}}{g_{m1}g_{m2}} - \frac{(g_{m2} + sC_X)\,I_{nR}}{g_{m1}g_{m2}}\\
&= \frac{I_{n1}}{g_{m1}} + \frac{sC_X}{g_{m1}g_{m2}}\,I_{n2} - \frac{g_{m2} + sC_X}{g_{m1}g_{m2}}\,I_{nR}.
\end{aligned}
$$

取 $s = j\omega$，噪声功率等于各系数模的平方乘以相应噪声源的功率谱密度后求和：

**$M_1$ 项：**
$$\frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\gamma g_{m1}}{g_{m1}^2} = \frac{4kT\gamma}{g_{m1}}.$$

**$M_2$ 项：**
$$\left|\frac{j\omega C_X}{g_{m1}g_{m2}}\right|^2\overline{I_{n2}^2} = \frac{\omega^2C_X^2}{g_{m1}^2g_{m2}^2}\cdot4kT\gamma g_{m2} = \left(\frac{\omega C_X}{g_{m1}}\right)^2\frac{4kT\gamma}{g_{m2}}.$$

**$R_D$ 项**（利用 $|g_{m2} + j\omega C_X|^2 = g_{m2}^2 + \omega^2C_X^2$）：
$$\frac{g_{m2}^2 + \omega^2C_X^2}{g_{m1}^2g_{m2}^2}\cdot\frac{4kT}{R_D} = \frac{4kT}{g_{m1}^2R_D} + \left(\frac{\omega C_X}{g_{m1}}\right)^2\frac{4kT}{g_{m2}^2R_D}.$$

**求和**，把平坦项与 $\omega^2$ 项分别归并：

$$\overline{V_{n,in}^2}(\omega) = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right) + \left(\frac{\omega C_X}{g_{m1}}\right)^2 4kT\left(\frac{\gamma}{g_{m2}} + \frac{1}{g_{m2}^2R_D}\right).$$

### 第 6 步 — 结果解读

**低频。** 只剩下第一个括号项，即共源级的结果：共源共栅器件**不**增加噪声。由于 $\lambda = 0$，$M_1$ 在 X 点相当于理想电流源（current source），因此 X 点电压变化 $I_{n2}/g_{m2}$，受控电流抵消了 $I_{n2}$，没有噪声电流到达 $R_D$。

**高频。** $C_X$ 为 $M_2$ 的噪声电流提供了到地的通路，因此其中一部分会流过 $R_D$；它还会分流信号电流，使 $R_D$ 折算到输入端的噪声增大为原来的 $1 + \omega^2C_X^2/g_{m2}^2$ 倍。这两个效应都使输入参考噪声按 $\omega^2$ 上升。

**何时变得重要。** 令 $A = \gamma/g_{m1} + 1/(g_{m1}^2R_D)$，$B = \gamma/g_{m2} + 1/(g_{m2}^2R_D)$，当 $(\omega C_X/g_{m1})^2B = A$ 时 $\omega^2$ 部分与平坦部分相等，即在下述频率处：

$$\omega = \frac{g_{m1}}{C_X}\sqrt{\frac{A}{B}} .$$

当 $g_{m1} = g_{m2}$ 时，该频率为 $\omega = g_{m2}/C_X$，即节点 X 的极点，通常远高于信号频带。注：$4kT\,B$ 是把 $M_2$ 和 $R_D$ 看作以 X 为输入端的共栅级（common-gate stage）时的输入参考噪声；$C_X$ 把它转换为电流 $\omega C_X\times$（电压），再经 $g_{m1}$ 折算到输入端。

### 结果

$$\overline{V_{n,in}^2}(\omega) = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right) + \left(\frac{\omega C_X}{g_{m1}}\right)^2 4kT\left(\frac{\gamma}{g_{m2}} + \frac{1}{g_{m2}^2R_D}\right).$$

等价地说：$M_1$ 项 $4kT\gamma/g_{m1}$ 不变；$M_2$ 贡献 $4kT\gamma\,\omega^2C_X^2/(g_{m1}^2g_{m2})$；$R_D$ 项 $4kT/(g_{m1}^2R_D)$ 乘以 $1 + \omega^2C_X^2/g_{m2}^2$。低频时 $M_2$ 没有贡献；它的噪声（以及 $R_D$ 折算到输入端的噪声）按 $\omega^2$ 上升，因为 $C_X$ 为 $M_2$ 的噪声电流开辟了通路，并降低了信号增益。

**常见错误。** 断言共源共栅器件在所有频率下都不产生噪声。这只在 X 点除 $M_2$ 外没有其他到交流地的通路时才成立；$C_X$（以及实际电路中的 $r_{O1}$）恰好提供了这样的通路。

**常见错误。** 用低频增益 $g_{m1}R_D$ 而不是 $g_{m1}R_Dg_{m2}/|g_{m2} + j\omega C_X|$ 去除输出噪声。这样会漏掉 $R_D$ 项随 $\omega^2$ 的上升，并使 $M_2$ 项多乘了一个因子 $g_{m2}^2/(g_{m2}^2 + \omega^2C_X^2)$。

**常见错误。** 因为 $M_1$ 在输出端的噪声在高频时下降，就断定 $C_X$ 会**降低**噪声。信号也按相同的比例下降，因此 $M_1$ 的输入参考噪声不变，而另外两项会增大。
