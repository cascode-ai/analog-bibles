# 详细步骤 - R348

**思路。** $M_2$ 的栅极接固定偏置，是一个共栅（common-gate）器件：它从输出节点抽取电流并送到输入节点，因此其噪声出现在**两个**节点上。输入短路时，$M_2$ 构成输出端的负载，其噪声从输出节点流出，而 $R_G$ 不起作用。输入开路时，由输入端和输出端的基尔霍夫电流定律（KCL）求出 $v_{out}$，再除以跨阻。

### 第 1 步 — 小信号模型（small-signal model）

- **$M_1$：** 从输出端流向地的电流 $g_{m1}v_{in}$，其噪声为 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_{m1}$）。
- **$R_D$：** 接在输出端与交流地之间，其诺顿噪声 $I_{nD}$（$\overline{I_{nD}^2} = 4kT/R_D$）从 $V_{DD}$ 流入输出端。
- **$R_G$：** 接在输入端与地之间，其诺顿噪声 $I_{nG}$（$\overline{I_{nG}^2} = 4kT/R_G$）从输入端流向地。
- **$M_2$**（源极接输出端，栅极接交流地，漏极接输入端，$\lambda = 0$）：其源漏电流为 $g_{m2}v_{sg2} = g_{m2}(v_{out} - 0) = g_{m2}v_{out}$，因此连同其噪声 $I_{n2}$（$\overline{I_{n2}^2} = 4kT\gamma g_{m2}$），它**从输出端抽取 $g_{m2}v_{out} + I_{n2}$，并把它送到输入端**。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 输入参考噪声电压（输入短路）

输入接交流地时，$R_G$ 被短路，$M_2$ 的电流流入输入信号源，但 $M_2$ 仍从输出端抽取 $g_{m2}v_{out} + I_{n2}$：在输出端，它相当于一个接到交流地的电阻 $1/g_{m2}$ 加上一个噪声电流。输出端的 KCL：

$$-\frac{v_{out}}{R_D} + I_{nD} = g_{m1}v_{in} + I_{n1} + g_{m2}v_{out} + I_{n2},$$

$$v_{out}\left(\frac{1}{R_D} + g_{m2}\right) = -g_{m1}v_{in} - I_{n1} - I_{n2} + I_{nD}.$$

增益为 $A_v = -g_{m1}/(1/R_D + g_{m2}) = -g_{m1}\left(R_D\parallel\frac{1}{g_{m2}}\right)$，噪声电流与之共用同一因子，因此除以 $g_{m1}$ 即可把它们折算到输入端：

$$v_{n,in} = \frac{I_{n1} + I_{n2} - I_{nD}}{g_{m1}},$$

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_{m1} + 4kT\gamma g_{m2} + 4kT/R_D}{g_{m1}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{\gamma g_{m2}}{g_{m1}^2} + \frac{1}{g_{m1}^2R_D}\right).$$

### 第 3 步 — 输入开路时的输出噪声

在输入节点，$M_2$ 送来的电流经 $R_G$ 及其噪声源流出：

$$g_{m2}v_{out} + I_{n2} = \frac{v_{in}}{R_G} + I_{nG}\quad\Longrightarrow\quad v_{in} = R_G\left(g_{m2}v_{out} + I_{n2} - I_{nG}\right).$$

代入第 2 步的输出方程：

$$
\begin{aligned}
v_{out}\left(\frac{1}{R_D} + g_{m2}\right) &= -g_{m1}R_G\left(g_{m2}v_{out} + I_{n2} - I_{nG}\right) - I_{n1} - I_{n2} + I_{nD}\\
v_{out}\left(\frac{1}{R_D} + g_{m2} + g_{m1}g_{m2}R_G\right) &= -(1 + g_{m1}R_G)\,I_{n2} + g_{m1}R_G\,I_{nG} - I_{n1} + I_{nD}.
\end{aligned}
$$

$I_{n2}$ 的系数为 $1 + g_{m1}R_G$：其中的“1”是它在输出端的直接作用，$g_{m1}R_G$ 则是它在 $R_G$ 上产生的电压经 $M_1$ 放大后的作用。两者来自同一个噪声源，因此按幅值相加。

### 第 4 步 — 跨阻与输入参考噪声电流

对于注入输入节点的信号电流 $i_{in}$（关闭噪声），$v_{in} = R_G(g_{m2}v_{out} + i_{in})$，且 $v_{out}(1/R_D + g_{m2}) = -g_{m1}v_{in}$：

$$
\begin{aligned}
v_{out}\left(\frac{1}{R_D} + g_{m2}\right) &= -g_{m1}R_G\,g_{m2}v_{out} - g_{m1}R_G\,i_{in}\\
R_T = \frac{v_{out}}{i_{in}} &= -\frac{g_{m1}R_G}{\dfrac{1}{R_D} + g_{m2} + g_{m1}g_{m2}R_G}.
\end{aligned}
$$

把 $v_{out}$ 中的噪声部分除以 $R_T$，分母 $\frac{1}{R_D} + g_{m2} + g_{m1}g_{m2}R_G$ 被约去：

$$I_{n,eq} = \frac{-(1 + g_{m1}R_G)I_{n2} + g_{m1}R_GI_{nG} - I_{n1} + I_{nD}}{-g_{m1}R_G} = \left(1 + \frac{1}{g_{m1}R_G}\right)I_{n2} - I_{nG} + \frac{I_{n1} - I_{nD}}{g_{m1}R_G}.$$

四个噪声源互不相关，因此

$$\overline{I_{n,in}^2} = \frac{4kT}{R_G} + 4kT\gamma g_{m2}\left(1 + \frac{1}{g_{m1}R_G}\right)^2 + \frac{1}{R_G^2}\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).$$

### 第 5 步 — 物理解释

- **$R_G$：** 其噪声电流就位于输入端，一比一地折算。
- **$M_1$ 和 $R_D$：** 等效输入电流必须在 $R_G$ 上产生栅极电压 $(I_{n1} - I_{nD})/g_{m1}$，即等于 $(I_{n1} - I_{nD})/(g_{m1}R_G)$。
- **$M_2$：** 其噪声流入输入节点（权重为 1），并从输出节点流出（权重为 $1/(g_{m1}R_G)$）；两者完全相关，因此得到 $(1 + 1/(g_{m1}R_G))^2$。

### 结果

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{\gamma g_{m2}}{g_{m1}^2} + \frac{1}{g_{m1}^2R_D}\right)$$

$$\overline{I_{n,in}^2} = \frac{4kT}{R_G} + 4kT\gamma g_{m2}\left(1 + \frac{1}{g_{m1}R_G}\right)^2 + \frac{1}{R_G^2}\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- 电压（输入短路）：增益为 $-g_{m1}(R_D\parallel 1/g_{m2})$；$M_2$ 的噪声像负载噪声一样从输出节点流出。
- 电流（输入开路）：跨阻为 $-g_{m1}R_G/(1/R_D + g_{m2} + g_{m1}g_{m2}R_G)$；$I_{n,eq} = (1 + 1/(g_{m1}R_G))I_{n2} - I_{nG} + (I_{n1} - I_{nD})/(g_{m1}R_G)$。

**常见错误。** 在噪声电流中只保留输入节点上的噪声源，即 $4kT(\gamma g_{m2} + 1/R_G)$。输入开路时，$M_1$、$R_D$ 的噪声以及 $M_2$ 噪声在输出侧的部分也会到达输出端，从而产生含 $1/(g_{m1}R_G)$ 的各项。

**常见错误。** 在噪声电压中计入 $R_G$，或者略去 $M_2$。输入短路时，$R_G$ 被短路，但 $M_2$ 的源极仍以 $1/g_{m2}$ 作为输出端的负载，并从输出端抽取其噪声电流 $I_{n2}$。

**常见错误。** 把 $M_2$ 的两部分贡献按功率相加，得到 $1 + 1/(g_{m1}R_G)^2$，而不是 $\left(1 + 1/(g_{m1}R_G)\right)^2$。从输出端流出的电流和流入输入端的电流是同一个物理噪声电流。
