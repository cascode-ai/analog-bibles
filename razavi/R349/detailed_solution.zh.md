# 详细步骤 - R349

**思路。** 输入短路时，跟随器 $M_2$ 只是向理想输入源送入电流，因此结果与普通共源级相同。输入开路时，只有 $M_2$ 的源极和理想的（交流开路的）$I_1$ 接到输入节点，因此 $M_2$ 的总电流必须为零；这就确定了栅极与输出端之间的电压，再由输出端的基尔霍夫电流定律（KCL）求出 $v_{out}$，然后除以跨阻。

### 第 1 步 — 小信号模型（small-signal model）

- **$M_1$：** 从输出端流向地的电流 $g_{m1}v_{in}$，其噪声为 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_{m1}$）。
- **$R_D$：** 接在输出端与交流地之间，其诺顿噪声 $I_{nD}$（$\overline{I_{nD}^2} = 4kT/R_D$）从 $V_{DD}$ 流入输出端。
- **$M_2$**（漏极接交流地，栅极接输出端，源极接输入端）：它向输入节点送入 $g_{m2}v_{gs2} + I_{n2} = g_{m2}(v_{out} - v_{in}) + I_{n2}$，其中 $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$；它的栅极不从输出端吸取电流。
- **$I_1$：** 理想且无噪声，对交流信号相当于开路。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 输入参考噪声电压（输入短路）

理想输入源吸收 $M_2$ 送来的全部电流，而 $M_2$ 不从输出端吸取任何电流，因此 **$M_2$ 不起作用**，电路就是一个共源级。输出端的 KCL：

$$-\frac{v_{out}}{R_D} + I_{nD} = g_{m1}v_{in} + I_{n1}\quad\Longrightarrow\quad v_{out} = -g_{m1}R_D\,v_{in} - R_D\,(I_{n1} - I_{nD}).$$

把噪声除以增益 $-g_{m1}R_D$，再把互不相关的功率相加：

$$\overline{V_{n,in}^2} = \frac{4kT\gamma g_{m1} + 4kT/R_D}{g_{m1}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).$$

### 第 3 步 — 输入开路时的输出噪声

输入开路时，$M_2$ 是通向输入节点的唯一交流通路，因此其总电流为零：

$$g_{m2}(v_{out} - v_{in}) + I_{n2} = 0\quad\Longrightarrow\quad v_{in} = v_{out} + \frac{I_{n2}}{g_{m2}}:$$

跟随器使输入跟踪输出，两者相差 $M_2$ 折算到栅极的噪声。代入第 2 步的输出方程 $v_{out} = -g_{m1}R_D\,v_{in} - R_D(I_{n1} - I_{nD})$：

$$
\begin{aligned}
v_{out} &= -g_{m1}R_D\,v_{out} - \frac{g_{m1}R_D}{g_{m2}}I_{n2} - R_D(I_{n1} - I_{nD})\\
v_{out}(1 + g_{m1}R_D) &= -\frac{g_{m1}R_D}{g_{m2}}I_{n2} - R_D(I_{n1} - I_{nD}).
\end{aligned}
$$

因子 $1 + g_{m1}R_D$ 反映了环路 $M_1 \to$ 输出 $\to M_2 \to$ 输入所构成的负反馈。

### 第 4 步 — 跨阻与输入参考噪声电流

注入输入节点的信号电流 $i_{in}$ 必须流过 $M_2$：$g_{m2}(v_{out} - v_{in}) + i_{in} = 0$，形式与 $I_{n2}$ 的情形相同，因此

$$v_{out}(1 + g_{m1}R_D) = -\frac{g_{m1}R_D}{g_{m2}}\,i_{in}\quad\Longrightarrow\quad R_T = \frac{v_{out}}{i_{in}} = -\frac{g_{m1}R_D}{g_{m2}(1 + g_{m1}R_D)}.$$

把 $v_{out}$ 中的噪声部分除以 $R_T$，因子 $(1 + g_{m1}R_D)$ 被约去：

$$I_{n,eq} = \frac{-\dfrac{g_{m1}R_D}{g_{m2}}I_{n2} - R_D(I_{n1} - I_{nD})}{-\dfrac{g_{m1}R_D}{g_{m2}}} = I_{n2} + \frac{g_{m2}}{g_{m1}}\left(I_{n1} - I_{nD}\right).$$

三个噪声源互不相关：

$$
\begin{aligned}
\overline{I_{n,in}^2} &= 4kT\gamma g_{m2} + \frac{g_{m2}^2}{g_{m1}^2}\left(4kT\gamma g_{m1} + \frac{4kT}{R_D}\right)\\
&= 4kT\gamma g_{m2} + g_{m2}^2\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right).
\end{aligned}
$$

### 第 5 步 — 物理解释

输入开路时，$v_{in} - v_{out} = (I_{n2} + i_{in})/g_{m2}$，而输出只取决于这个电压以及 $M_1$ 和 $R_D$ 折算到栅极的噪声 $(I_{n1} - I_{nD})/g_{m1}$。因此 $M_2$ 的噪声与输入电流完全一样地进入（一比一），而共源级折算到栅极的电压 $V_n$ 等效于流过 $M_2$ 的电流 $g_{m2}V_n$。当 $g_{m1} \approx g_{m2}$ 时，由此产生的 $g_{m2}^2\overline{V_{n,in}^2}$ 项与 $M_2$ 自身的噪声项同数量级。

### 结果

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right),\qquad \overline{I_{n,in}^2} = 4kT\gamma g_{m2} + g_{m2}^2\cdot4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- 电压（输入短路）：$M_2$ 的电流流入输入信号源，不影响输出；结果与简单共源级相同。
- 电流（输入开路）：$M_2$ 的电流被迫为零，得到 $I_{n,eq} = I_{n2} + (g_{m2}/g_{m1})(I_{n1} - I_{nD})$，跨阻为 $-g_{m1}R_D/[g_{m2}(1 + g_{m1}R_D)]$。

**常见错误。** 输入参考噪声电流只给出 $4kT\gamma g_{m2}$。输入开路时，$M_1$ 和 $R_D$ 的噪声仍会到达输出端，从而增加 $g_{m2}^2\overline{V_{n,in}^2}$ 这一项，其大小与 $M_2$ 自身的噪声项相当。

**常见错误。** 因为输入阻抗低，就把输入参考噪声电流取为零。对于低阻抗的信号源，低输入阻抗确实使噪声电流的影响变小，但等效噪声电压源和电流源的定义与信号源阻抗无关。

**常见错误。** 在输入参考噪声电压中计入 $M_2$ 的噪声。输入短路时，它流入理想输入源，根本到达不了输出端。
