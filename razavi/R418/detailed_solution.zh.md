# 详细步骤 - R418

**思路。** 电路中有三个相互独立的热噪声（thermal noise）源：$R_1$、$R_2$ 以及 $M_1$ 和 $M_2$ 的沟道。把反相器化简为一个跨导（transconductance）和一个输出电阻，写出包含所有噪声源的两个节点方程，求解 $v_{out}$。把每个噪声源对 $v_{out}$ 的贡献除以信号增益，即折算到输入端，再把各功率相加。

### 第 1 步 — 电路模型及其噪声源

把公共栅极节点记为 G。两个栅极都接 G，两个漏极都接输出端，因此反相器等效为一个从输出节点抽取电流的受控电流源 $G_mv_G$，与一个电阻 $R_0$ 并联：

$$G_m = g_{m1} + g_{m2},\qquad R_0 = r_{O1}\parallel r_{O2}.$$

**噪声源**（互不相关，按每赫兹计）：

- $R_1$：与 $R_1$ 串联的电压源 $V_{R1}$，$\overline{V_{R1}^2} = 4kTR_1$。
- $R_2$：与 $R_2$ 并联的电流源 $I_{R2}$（从输出端流入 G），$\overline{I_{R2}^2} = 4kT/R_2$。
- 晶体管：两个沟道噪声电流都在输出端与交流地之间流动，因此可以合并为一个从输出端流向地的电流 $I_{nM}$，$\overline{I_{nM}^2} = 4kT\gamma g_{m1} + 4kT\gamma g_{m2} = 4kT\gamma G_m$。

$r_{O1}$ 和 $r_{O2}$ 不是实际的电阻，不产生噪声。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 包含所有噪声源的节点方程

按图中 $V_{R1}$ 的极性，$R_1$ 的左端电压为 $v_{in}' = v_{in} - V_{R1}$，因此 $V_{R1}$ 进入电路的方式与输入完全相同（其符号不影响噪声功率）。

**节点 G**（栅极不取电流）：

$$\frac{v_{in}' - v_G}{R_1} + \frac{v_{out} - v_G}{R_2} + I_{R2} = 0 .$$

令 $\alpha = R_1/(R_1 + R_2)$，$R_p = R_1\parallel R_2$：

$$v_G = (1 - \alpha)\,v_{in}' + \alpha\,v_{out} + R_pI_{R2} .$$

**输出节点**（流出的电流：受控源、$R_0$、$R_2$、$R_2$ 的噪声电流以及晶体管噪声）：

$$G_mv_G + \frac{v_{out}}{R_0} + \frac{v_{out} - v_G}{R_2} + I_{R2} + I_{nM} = 0 ,$$

$$v_G\left(G_m - \frac{1}{R_2}\right) + v_{out}\left(\frac{1}{R_0} + \frac{1}{R_2}\right) + I_{R2} + I_{nM} = 0 .$$

### 第 3 步 — 求解输出

代入 $v_G$，并令 $D = \dfrac{1}{R_0} + \dfrac{1}{R_2} + \alpha\left(G_m - \dfrac{1}{R_2}\right)$：

$$v_{out}\,D = -(1 - \alpha)\left(G_m - \frac{1}{R_2}\right)v_{in}' - \left[R_p\left(G_m - \frac{1}{R_2}\right) + 1\right]I_{R2} - I_{nM} .$$

**信号增益**（不计噪声）：

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{(1 - \alpha)\,(G_m - 1/R_2)}{D} .$$

### 第 4 步 — 将各噪声源折算到输入端

每个噪声源的输入参考值等于它对 $v_{out}$ 的贡献除以 $A_v$。公因子 $D$ 被约去，于是所有结果中都不再出现 $R_0$。注意，由于 $1 - \alpha = R_2/(R_1 + R_2)$，有 $(1 - \alpha)(G_m - 1/R_2) = (G_mR_2 - 1)/(R_1 + R_2)$。

**$R_1$：** 它进入电路的方式与 $v_{in}$ 完全相同，因此

$$V_{eq,R1} = -V_{R1},\qquad \overline{V_{eq,R1}^2} = 4kTR_1 .$$

**$R_2$：**

$$V_{eq,R2} = \frac{R_p(G_m - 1/R_2) + 1}{(1 - \alpha)(G_m - 1/R_2)}\,I_{R2} ,$$

又因为 $R_p/(1 - \alpha) = R_1$，

$$
\begin{aligned}
V_{eq,R2} &= \left[R_1 + \frac{R_1 + R_2}{G_mR_2 - 1}\right]I_{R2} = \frac{R_1(G_mR_2 - 1) + R_1 + R_2}{G_mR_2 - 1}\,I_{R2}\\
&= \frac{R_2\,(1 + G_mR_1)}{G_mR_2 - 1}\,I_{R2} .
\end{aligned}
$$

**晶体管：**

$$V_{eq,M} = \frac{I_{nM}}{(1 - \alpha)(G_m - 1/R_2)} = \frac{R_1 + R_2}{G_mR_2 - 1}\,I_{nM} .$$

### 第 5 步 — 总输入参考噪声

三个噪声源互不相关，因此

$$\overline{V_{n,in}^2} = 4kTR_1 + \frac{4kT}{R_2}\left[\frac{R_2(1 + G_mR_1)}{G_mR_2 - 1}\right]^2 + 4kT\gamma G_m\left[\frac{R_1 + R_2}{G_mR_2 - 1}\right]^2 .$$

**$G_mR_2$ 很大时的形式。** 把 $G_mR_2 - 1$ 换成 $G_mR_2$：

$$
\begin{aligned}
\frac{R_2(1 + G_mR_1)}{G_mR_2} &= R_1 + \frac{1}{G_m},\\
\frac{R_1 + R_2}{G_mR_2} &= \frac{1}{G_m}\left(1 + \frac{R_1}{R_2}\right),
\end{aligned}
$$

$$\overline{V_{n,in}^2} \approx 4kTR_1 + \frac{4kT}{R_2}\left(R_1 + \frac{1}{G_m}\right)^2 + \frac{4kT\gamma}{G_m}\left(1 + \frac{R_1}{R_2}\right)^2 .$$

- $R_1$ 的噪声与输入串联，全部出现在输入端。
- $R_2$ 的噪声电流流过约 $R_1 + 1/G_m$ 的电阻，转化为输入电压；当 $R_1 \ll R_2$ 时，这就是熟悉的 $4kTR_1^2/R_2$，只是略有增大。
- 反相器本身的输入噪声 $4kT\gamma/G_m$ 要乘以 $(1 + R_1/R_2)^2$：它以噪声增益 $1 + R_2/R_1$ 到达输出端，而信号的增益只有 $R_2/R_1$。

### 第 6 步 — 数量级估计（示例）

取 $R_1 = 1\ \mathrm{k\Omega}$，$R_2 = 10\ \mathrm{k\Omega}$，$G_m \approx 10.8$ mS，这是 $W/L = 50/0.5$ 的反相器在 3 V 电源下偏置于翻转点（trip point）时的值；再取 $\gamma = 2/3$，$T = 300$ K，于是 $4kT = 1.66\times10^{-20}$ J，$G_mR_2 = 107.6$：

$$
\begin{aligned}
4kTR_1 &= (1.66\times10^{-20})(10^3) = 1.66\times10^{-17}\ \mathrm{V^2/Hz},\\
\frac{R_2(1 + G_mR_1)}{G_mR_2 - 1} &= \frac{10^4\times11.76}{106.6}\ \Omega = 1103\ \Omega,\quad \frac{4kT}{R_2}(1103)^2 = 2.0\times10^{-18}\ \mathrm{V^2/Hz},\\
\frac{R_1 + R_2}{G_mR_2 - 1} &= \frac{11\times10^3}{106.6}\ \Omega = 103.2\ \Omega,\quad 4kT\gamma G_m(103.2)^2 = 1.3\times10^{-18}\ \mathrm{V^2/Hz},\\
\overline{V_{n,in}^2} &\approx 1.98\times10^{-17}\ \mathrm{V^2/Hz}\quad(4.5\ \mathrm{nV/\sqrt{Hz}}),
\end{aligned}
$$

以 $R_1$ 的噪声为主。

### 结果

令 $G_m = g_{m1} + g_{m2}$（$r_{O1}\parallel r_{O2}$ 被严格约去）：

$$\overline{V_{n,in}^2} = 4kTR_1 + \frac{4kT}{R_2}\left[\frac{R_2(1 + G_mR_1)}{G_mR_2 - 1}\right]^2 + 4kT\gamma G_m\left[\frac{R_1 + R_2}{G_mR_2 - 1}\right]^2,$$

当 $G_mR_2 \gg 1$ 时

$$\overline{V_{n,in}^2} \approx 4kTR_1 + \frac{4kT}{R_2}\left(R_1 + \frac{1}{G_m}\right)^2 + \frac{4kT\gamma}{G_m}\left(1 + \frac{R_1}{R_2}\right)^2 .$$

**常见错误。** 漏掉 $R_1$，或者把它的噪声除以增益。它的噪声电压与 $V_{in}$ 串联，原样出现在输入端，即 $4kTR_1$，通常是最大的一项。

**常见错误。** 把晶体管噪声折算为 $4kT\gamma/G_m$ 而漏掉因子 $(1 + R_1/R_2)^2$，或者只用 $g_{m1}$。噪声增益是信号增益的 $1 + R_1/R_2$ 倍，而且两个栅极都被驱动，因此跨导为 $g_{m1} + g_{m2}$。

**常见错误。** 认为反馈使输入参考噪声按环路增益（loop gain）减小。因子 $D$ 对噪声和信号的缩放作用相同，因此被约去。
