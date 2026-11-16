# 详细步骤 - R347

**思路。** 输入短路时，理想信号源把输入节点固定住，因此只向该节点注入电流的 $R_G$ 和 $M_2$ 不起作用，结果与普通共源级相同。输入开路时，在输入节点（计入 $M_2$ 的反馈电流和 $R_G$）和输出端列基尔霍夫电流定律（KCL）方程，解出 $v_{out}$，再除以跨阻；反馈因子会被约去。

### 第 1 步 — 小信号模型（small-signal model）

- **$M_1$：** 从输出端流向地的电流 $g_{m1}v_{in}$，其沟道噪声 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_{m1}$）与之并联。
- **$R_D$：** 接在输出端与交流地之间，其诺顿噪声 $I_{nD}$（$\overline{I_{nD}^2} = 4kT/R_D$）从 $V_{DD}$ 流入输出端。
- **$R_G$：** 接在输入端与地之间，其诺顿噪声 $I_{nG}$（$\overline{I_{nG}^2} = 4kT/R_G$）从输入端流向地。
- **$M_2$**（源极接交流地，栅极接输出端，漏极接输入端，$\lambda = 0$）：它向输入节点送入 $g_{m2}v_{sg2} = g_{m2}(0 - v_{out}) = -g_{m2}v_{out}$，其噪声 $I_{n2}$（$\overline{I_{n2}^2} = 4kT\gamma g_{m2}$）也流入输入端。

<!-- diagram: diagram-01.cir -->

若 $v_{out}$ 升高，$M_2$ 送入输入端的电流减小，输入电压下降，$M_1$ 抽取的电流减小，$v_{out}$ 进一步升高：这是**正反馈**，环路增益为 $g_{m1}g_{m2}R_DR_G < 1$，因此电路是稳定的。

### 第 2 步 — 输入参考噪声电压（输入短路）

输入由理想信号源固定时，$R_G$ 和 $M_2$ 的电流（包括信号和噪声）都流入该信号源，不改变其他任何量；反馈环路被断开。输出端的 KCL：

$$-\frac{v_{out}}{R_D} + I_{nD} = g_{m1}v_{in} + I_{n1}\quad\Longrightarrow\quad v_{out} = -g_{m1}R_D\,v_{in} - R_DI_{n1} + R_DI_{nD}.$$

把噪声项除以增益 $-g_{m1}R_D$：

$$\overline{V_{n,in}^2} = \frac{R_D^2\left(4kT\gamma g_{m1} + 4kT/R_D\right)}{g_{m1}^2R_D^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).$$

### 第 3 步 — 输入开路时的输出噪声

在（此时浮空的）输入节点，由于 $M_1$ 的栅极不吸取电流，$M_2$ 送来的电流经 $R_G$ 及其噪声源流出：

$$-g_{m2}v_{out} + I_{n2} = \frac{v_{in}}{R_G} + I_{nG}\quad\Longrightarrow\quad v_{in} = R_G\left(-g_{m2}v_{out} + I_{n2} - I_{nG}\right).$$

代入第 2 步的输出方程 $v_{out} = -g_{m1}R_D\,v_{in} - R_DI_{n1} + R_DI_{nD}$：

$$
\begin{aligned}
v_{out} &= -g_{m1}R_DR_G\left(-g_{m2}v_{out} + I_{n2} - I_{nG}\right) - R_DI_{n1} + R_DI_{nD}\\
&= g_{m1}g_{m2}R_DR_G\,v_{out} - g_{m1}R_DR_G\,(I_{n2} - I_{nG}) - R_DI_{n1} + R_DI_{nD},
\end{aligned}
$$

$$v_{out}\left(1 - g_{m1}g_{m2}R_DR_G\right) = -g_{m1}R_DR_G\,(I_{n2} - I_{nG}) - R_D\,(I_{n1} - I_{nD}),$$

其中 $1 - g_{m1}g_{m2}R_DR_G$ 等于一减去（正的）环路增益。

### 第 4 步 — 跨阻与输入参考噪声电流

注入输入节点的信号电流 $i_{in}$ 与 $M_2$ 的电流相叠加，作用方式与 $I_{n2}$ 完全相同，因此在第 3 步的结果中令 $I_{n2} \to i_{in}$：

$$v_{out}\left(1 - g_{m1}g_{m2}R_DR_G\right) = -g_{m1}R_DR_G\,i_{in}\quad\Longrightarrow\quad R_T = \frac{v_{out}}{i_{in}} = -\frac{g_{m1}R_DR_G}{1 - g_{m1}g_{m2}R_DR_G}.$$

把 $v_{out}$ 中的噪声部分除以 $R_T$，因子 $1 - g_{m1}g_{m2}R_DR_G$ 被约去：

$$I_{n,eq} = \frac{-g_{m1}R_DR_G(I_{n2} - I_{nG}) - R_D(I_{n1} - I_{nD})}{-g_{m1}R_DR_G} = (I_{n2} - I_{nG}) + \frac{I_{n1} - I_{nD}}{g_{m1}R_G}.$$

四个噪声源互不相关，因此

$$
\begin{aligned}
\overline{I_{n,in}^2} &= 4kT\gamma g_{m2} + \frac{4kT}{R_G} + \frac{4kT\gamma g_{m1} + 4kT/R_D}{g_{m1}^2R_G^2}\\
&= \frac{4kT}{R_G} + 4kT\gamma g_{m2} + \frac{1}{R_G^2}\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).
\end{aligned}
$$

### 第 5 步 — 物理解释

$R_G$ 和 $M_2$ 恰好在输入电流进入的地方注入噪声，因此它们一比一地出现在 $\overline{I_{n,in}^2}$ 中，而完全不出现在 $\overline{V_{n,in}^2}$ 中。由 $\overline{V_{n,in}^2}$ 表示的 $M_1$ 和 $R_D$ 的噪声，在噪声电流中表现为 $\overline{V_{n,in}^2}/R_G^2$，即在 $R_G$ 上产生该电压所需的电流。正反馈使信号和噪声乘以同一个因子 $1/(1 - g_{m1}g_{m2}R_DR_G)$，因此它改变增益，却不改变输入参考噪声。

### 结果

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right),\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_G} + 4kT\gamma g_{m2} + \frac{1}{R_G^2}\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- 电压（输入短路）：$R_G$ 和 $M_2$ 只向理想输入源注入电流，因此结果与简单共源级相同。
- 电流（输入开路）：$I_{n,eq} = I_{n2} - I_{nG} + (I_{n1} - I_{nD})/(g_{m1}R_G)$；与环路增益有关的因子被约去。

**常见错误。** 在输入开路的条件下计算噪声电压，从而引入 $R_G$、$M_2$ 和因子 $1/(1 - g_{m1}g_{m2}R_DR_G)^2$。输入短路时，输入节点不能变化，经 $M_2$ 的反馈被断开，只剩下 $M_1$ 和 $R_D$。

**常见错误。** 只给出 $\overline{I_{n,in}^2} = 4kT/R_G$（或 $4kT/R_G + 4kT\gamma g_{m2}$）。输入开路时，$M_1$ 和 $R_D$ 的噪声也会到达输出端，从而增加 $\overline{V_{n,in}^2}/R_G^2$ 这一项。

**常见错误。** 把 $M_2$ 当作输出端的负载。它的**栅极**接在输出端，不吸取电流；它的**漏极**电流流入输入节点，因此它是一个从输出端到输入端的反馈跨导器件（feedback transconductor）。
