# 详细步骤 - R346

**思路。** 输入由电压源驱动时，计入全部噪声源，在栅极（分压器中点）和输出端列 KCL 方程，再把噪声项除以信号项，得到 $\overline{V_{n,in}^2}$。输入开路时，$M_1$ 没有净电流，输出端只看到无源电阻网络，其噪声除以跨阻的平方即得 $\overline{I_{n,in}^2}$。

### 第 1 步 — 小信号模型（small-signal model）

- **$M_1$：** 从输出端流向源极（即输入端）的电流 $g_m(v_G - v_{in})$，其沟道噪声 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_m$）与之并联（$\lambda = 0$，无体效应）。
- **$R_D$：** 接在输出端与交流地之间，其诺顿噪声 $I_{nD}$（$\overline{I_{nD}^2} = 4kT/R_D$）从 $V_{DD}$ 流入输出端。
- **分压器上方电阻 $R_A = R_1$：** 接在输出端与栅极节点 G 之间，其噪声电流 $I_{nA}$（$\overline{I_{nA}^2} = 4kT/R_1$）从输出端流向 G。
- **分压器下方电阻 $R_B = R_1$：** 接在 G 与地之间，其噪声电流 $I_{nB}$（$\overline{I_{nB}^2} = 4kT/R_1$）从 G 流向地。

栅极不吸取电流（忽略电容）。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 栅极节点的 KCL

经 $R_A$ 流来的电流经 $R_B$ 流出：

$$\frac{v_{out} - v_G}{R_1} + I_{nA} = \frac{v_G}{R_1} + I_{nB},$$

$$
\begin{aligned}
v_{out} - v_G + R_1I_{nA} &= v_G + R_1I_{nB}\\
v_G &= \frac{v_{out}}{2} + \frac{R_1}{2}\left(I_{nA} - I_{nB}\right).
\end{aligned}
$$

没有噪声时，栅极电压为输出电压的一半。

### 第 3 步 — 输出端的 KCL（输入由电压源驱动）

经 $R_D$ 支路流来的电流经 $M_1$ 和 $R_A$ 流出：

$$-\frac{v_{out}}{R_D} + I_{nD} = g_m(v_G - v_{in}) + I_{n1} + \left[\frac{v_{out} - v_G}{R_1} + I_{nA}\right].$$

由第 2 步，方括号内的量等于 $v_G/R_1 + I_{nB}$，因此

$$-\frac{v_{out}}{R_D} + I_{nD} = \left(g_m + \frac{1}{R_1}\right)v_G - g_mv_{in} + I_{n1} + I_{nB}.$$

代入第 2 步的 $v_G$，并利用 $\left(g_m + \frac1{R_1}\right)\frac{R_1}{2} = \frac{1 + g_mR_1}{2}$：

$$-\frac{v_{out}}{R_D} + I_{nD} = \left(g_m + \frac{1}{R_1}\right)\frac{v_{out}}{2} + \frac{1 + g_mR_1}{2}\left(I_{nA} - I_{nB}\right) - g_mv_{in} + I_{n1} + I_{nB}.$$

合并含 $v_{out}$ 的项，并对 $I_{nB}$ 的系数利用 $-\frac{1 + g_mR_1}{2} + 1 = \frac{1 - g_mR_1}{2}$：

$$v_{out}\left(\frac{1}{R_D} + \frac{g_m}{2} + \frac{1}{2R_1}\right) = g_mv_{in} + I_{nD} - I_{n1} - \frac{1 + g_mR_1}{2}I_{nA} - \frac{1 - g_mR_1}{2}I_{nB}.$$

电压增益为

$$A_v = \frac{g_m}{\dfrac{1}{R_D} + \dfrac{g_m}{2} + \dfrac{1}{2R_1}} ,$$

其中 $g_m/2$ 来自经分压器的反馈：输出升高时，栅极升高其一半，$M_1$ 抽取的电流随之增大。

### 第 4 步 — 输入参考噪声电压

信号和噪声共用左边的同一个因子，因此把噪声项除以 $g_m$ 得

$$v_{n,in} = \frac{1}{g_m}\left[I_{nD} - I_{n1} - \frac{1 + g_mR_1}{2}I_{nA} - \frac{1 - g_mR_1}{2}I_{nB}\right].$$

四个噪声源互不相关：

$$\overline{V_{n,in}^2} = \frac{1}{g_m^2}\left[\frac{4kT}{R_D} + 4kT\gamma g_m + \frac{4kT}{R_1}\cdot\frac{(1 + g_mR_1)^2 + (1 - g_mR_1)^2}{4}\right].$$

令 $x = g_mR_1$，利用 $(1 + x)^2 + (1 - x)^2 = 2 + 2x^2$，分压器部分为

$$\frac{4kT}{R_1}\cdot\frac{2 + 2g_m^2R_1^2}{4g_m^2} = \frac{2kT}{g_m^2R_1} + 2kTR_1 ,$$

因此

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D} + 2kTR_1 + \frac{2kT}{g_m^2R_1}.$$

分压器的噪声可以分解为 $-\tfrac12(I_{nA} + I_{nB}) - \tfrac{g_mR_1}{2}(I_{nA} - I_{nB})$，这两部分互不相关（两个电阻相等且相互独立）：

- $\tfrac{R_1}{2}(I_{nA} - I_{nB})$ 是分压器在栅极处的戴维南噪声，功率谱密度为 $4kT(R_1\parallel R_1) = 2kTR_1$，像栅极电阻一样一比一地折算到输入端。
- $\tfrac12(I_{nA} + I_{nB})$ 是作为输出端负载的分压器（总阻值 $2R_1$）的噪声电流，功率谱密度为 $4kT/(2R_1)$，除以 $g_m^2$ 后得到 $2kT/(g_m^2R_1)$。

### 第 5 步 — 输入参考噪声电流（输入开路）

输入开路时，除 $M_1$ 外没有任何元件连接到它的源极，因此它的总电流为零，这个总电流包括跨导（transconductance）电流和噪声电流：$M_1$ 的噪声和栅极电压只改变浮空的源极电压。于是输出端的负载只有 $R_D$ 与分压器 $R_A + R_B = 2R_1$ 的并联，这是一个无源网络，其奈奎斯特噪声为

$$\overline{V_{n,out}^2}\Big|_{open} = 4kT\,(R_D\parallel 2R_1).$$

注入源极的输入电流 $i_{in}$ 无论栅极电压如何都必须经 $M_1$ 流入这个网络，因此 $|R_T| = R_D\parallel 2R_1$，

$$\overline{I_{n,in}^2} = \frac{4kT(R_D\parallel2R_1)}{(R_D\parallel2R_1)^2} = \frac{4kT}{R_D\parallel2R_1} = 4kT\left(\frac{1}{R_D} + \frac{1}{2R_1}\right).$$

### 结果

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D} + 2kTR_1 + \frac{2kT}{g_m^2R_1},\qquad \overline{I_{n,in}^2} = 4kT\left(\frac{1}{R_D} + \frac{1}{2R_1}\right)$$

- 电压：分压器贡献两部分，一是一比一折算的栅极戴维南噪声 $2kTR_1 = 4kT(R_1\parallel R_1)$，二是作为输出负载产生的噪声 $2kT/(g_m^2R_1)$。
- 电流：输入开路时，$M_1$ 没有净电流；输出端只看到 $R_D\parallel2R_1$，跨阻也是 $R_D\parallel2R_1$。

**常见错误。** 把栅极当作固定偏置，并把分压器当作无噪声元件。分压器把 $v_{out}/2$ 反馈到栅极，其噪声以两种方式进入：作为栅极电压（$2kTR_1$），以及作为输出端的负载电流（$2kT/(g_m^2R_1)$）。

**常见错误。** 在输入短路的条件下计算输入参考噪声电流，使 $M_1$ 的噪声（$4kT\gamma g_m$）出现在结果中。输入开路时，$M_1$ 的总电流为零，其噪声无法到达输出端。

**常见错误。** 给分压器的两个电阻相同的权重，例如都用 $(1 + g_mR_1)^2$。它们位于栅极节点的两侧，系数分别为 $(1 + g_mR_1)/2$ 和 $(1 - g_mR_1)/2$，两者平方之和为 $(1 + g_m^2R_1^2)/2$。
