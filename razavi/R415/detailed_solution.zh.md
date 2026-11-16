# 详细步骤 - R415

**思路。** 输入与输出的直流电平相等时，$R_1$ 和 $R_2$ 中没有直流电流，因此反相器偏置在其开关阈值（switching threshold）$V_M$。把反相器化简为一个跨导（transconductance）$G_m = g_{m1} + g_{m2}$ 和一个输出电阻（output resistance）$R_0 = r_{O1}\parallel r_{O2}$，精确求解两个节点方程，然后从电压并联反馈的角度解读结果，看看增益为何远离理想值 $-R_2/R_1$。

### 第 1 步 — 偏置点

把公共栅极节点记为 G。栅极不取电流，且 $V_{in}$、$V_{out}$ 的直流电平相同，因此 $R_1$–$R_2$ 中没有直流电流，G 也处于同一电平：反相器处于其开关阈值 $V_M$，两个器件都有 $|V_{DS}| = |V_{GS}|$（饱和）。令两个平方律（square law）电流相等（偏置计算中忽略 $\lambda$）：

$$
\begin{aligned}
134\,(V_M - 0.7)^2 &= 38.4\,(3 - 0.8 - V_M)^2\\
1.868\,(V_M - 0.7) &= 2.2 - V_M\quad(\sqrt{134/38.4} = 1.868)\\
V_M &= \frac{2.2 + 1.308}{2.868} = 1.223\ \mathrm{V},
\end{aligned}
$$

$$I_D = \frac12(134\ \mu\mathrm{A/V^2})(100)(1.223 - 0.7)^2 = (6.7\ \mathrm{mA/V^2})(0.523\ \mathrm{V})^2 = 1.83\ \mathrm{mA}.$$

### 第 2 步 — 反相器的小信号参数

$$
\begin{aligned}
g_{m1} &= \frac{2I_D}{V_{ov1}} = \frac{2(1.83\ \mathrm{mA})}{0.523\ \mathrm{V}} = 7.01\ \mathrm{mS}, &
g_{m2} &= \frac{2I_D}{|V_{ov2}|} = \frac{2(1.83\ \mathrm{mA})}{0.977\ \mathrm{V}} = 3.75\ \mathrm{mS},\\
r_{O1} &= \frac{1}{(0.1)(1.83\ \mathrm{mA})} = 5.46\ \mathrm{k\Omega}, &
r_{O2} &= \frac{1}{(0.2)(1.83\ \mathrm{mA})} = 2.73\ \mathrm{k\Omega}.
\end{aligned}
$$

两个栅极都由 G 驱动，两个漏极都驱动输出端，因此反相器等效为一个从输出节点抽取电流的受控电流源 $G_mv_G$，与 $R_0$ 并联：

$$G_m = g_{m1} + g_{m2} = 10.76\ \mathrm{mS},\qquad R_0 = r_{O1}\parallel r_{O2} = 1.82\ \mathrm{k\Omega}\ \ (1/R_0 = 0.550\ \mathrm{mS}),$$

其开环增益为 $-G_mR_0 = -19.6$。

<!-- diagram: diagram-01.cir -->

### 第 3 步 — 节点方程

**节点 G**（流过 $R_1$ 的电流继续流过 $R_2$）：

$$
\begin{aligned}
\frac{v_{in} - v_G}{R_1} &= \frac{v_G - v_{out}}{R_2}\\
v_G\left(\frac{1}{R_1} + \frac{1}{R_2}\right) &= \frac{v_{in}}{R_1} + \frac{v_{out}}{R_2}\\
v_G &= \frac{R_2v_{in} + R_1v_{out}}{R_1 + R_2} = (1 - \alpha)\,v_{in} + \alpha\,v_{out},
\end{aligned}
$$

其中 $\alpha = R_1/(R_1 + R_2) = 1/11 = 0.0909$。

**输出节点**（电流经受控源、$R_0$ 和 $R_2$ 流出）：

$$G_mv_G + \frac{v_{out}}{R_0} + \frac{v_{out} - v_G}{R_2} = 0\ \Longrightarrow\ v_G\left(G_m - \frac{1}{R_2}\right) + v_{out}\left(\frac{1}{R_0} + \frac{1}{R_2}\right) = 0 .$$

### 第 4 步 — 电压增益

代入 $v_G$：

$$
\begin{aligned}
\big[(1 - \alpha)v_{in} + \alpha v_{out}\big]\left(G_m - \frac{1}{R_2}\right) + v_{out}\left(\frac{1}{R_0} + \frac{1}{R_2}\right) &= 0\\
v_{out}\left[\frac{1}{R_0} + \frac{1}{R_2} + \alpha\left(G_m - \frac{1}{R_2}\right)\right] &= -(1 - \alpha)\left(G_m - \frac{1}{R_2}\right)v_{in}
\end{aligned}
$$

$$A_v = \frac{v_{out}}{v_{in}} = -\frac{(1 - \alpha)\,(G_m - 1/R_2)}{1/R_0 + 1/R_2 + \alpha\,(G_m - 1/R_2)} .$$

以 mS 为单位，$G_m - 1/R_2 = 10.76 - 0.10 = 10.66$：

$$
\begin{aligned}
\text{denominator} &= 0.550 + 0.100 + 0.0909\times10.66 = 0.550 + 0.100 + 0.969 = 1.619\ \mathrm{mS},\\
\text{numerator} &= 0.9091\times10.66 = 9.691\ \mathrm{mS},\\
A_v &= -\frac{9.691}{1.619} = -5.99 .
\end{aligned}
$$

### 第 5 步 — 输出阻抗

令 $v_{in} = 0$，G 位于从输出端到交流地的分压器 $R_2$–$R_1$ 上，因此 $v_G = \alpha v_{out}$。输出端的测试源 $v_X$ 提供的电流为

$$I_X = G_m\alpha v_X + \frac{v_X}{R_0} + \frac{v_X(1 - \alpha)}{R_2},$$

最后一项是流过 $R_2$ 的电流。因此

$$
\begin{aligned}
R_{out} &= \frac{1}{1/R_0 + (1 - \alpha)/R_2 + \alpha G_m}\\
&= \frac{1}{0.550 + 0.091 + 0.978}\ \mathrm{k\Omega} = \frac{1}{1.619}\ \mathrm{k\Omega} = 0.618\ \mathrm{k\Omega}.
\end{aligned}
$$

### 第 6 步 — 从反馈角度看：增益为何是 −6 而不是 −10

$R_2$ 检测输出电压，并把一个电流送回 G：这是**电压并联**反馈。把 $V_{in}$ 和 $R_1$ 换成诺顿等效电路，即 $v_{in}/R_1$ 与 $R_1$ 并联。

- **$R_2$ 的负载效应：** G 处看到 $R_1\parallel R_2 = 0.909\ \mathrm{k\Omega}$；输出端看到 $R_0\parallel R_2 = 1.54\ \mathrm{k\Omega}$。
- **开环跨阻：**
$$R_{T,open} = -(R_1\parallel R_2)\,G_m\,(R_0\parallel R_2) = -(0.909\ \mathrm{k\Omega})(10.76\ \mathrm{mS})(1.54\ \mathrm{k\Omega}) = -15.0\ \mathrm{k\Omega}.$$
- **反馈系数**（输出端每伏电压送回 G 的电流）：$-1/R_2 = -0.1$ mS，因此环路增益为 $T = (15.0\ \mathrm{k\Omega})(0.1\ \mathrm{mS}) = 1.50$。
- **闭环：**
$$R_{T} = \frac{-15.0\ \mathrm{k\Omega}}{1 + 1.50} = -6.0\ \mathrm{k\Omega},\qquad A_v = \frac{R_T}{R_1} = -6.0,\qquad R_{out} = \frac{R_0\parallel R_2}{1 + T} = \frac{1.54\ \mathrm{k\Omega}}{2.50} = 0.61\ \mathrm{k\Omega}.$$

这些结果与精确值 −5.99 和 618 Ω 一致（二端口方法忽略了 $R_2$ 从 G 前馈到输出端的微小信号）。理想值 $-R_2/R_1 = -10$ 需要很大的环路增益，但反相器的开环增益只有 19.6，而且只有约 $1/11$ 的输出被反馈回来，因此 $T \approx 1.5$。

### 结果

$$A_v = -\frac{(1 - \alpha)(G_m - 1/R_2)}{1/R_0 + 1/R_2 + \alpha(G_m - 1/R_2)} \approx -6.0,\qquad R_{out} = \frac{1}{1/R_0 + (1 - \alpha)/R_2 + \alpha G_m} \approx 0.62\ \mathrm{k\Omega},$$

其中 $V_M = 1.22$ V，$I_D = 1.83$ mA，$G_m = g_{m1} + g_{m2} = 10.76$ mS，$R_0 = r_{O1}\parallel r_{O2} = 1.82\ \mathrm{k\Omega}$，$\alpha = R_1/(R_1 + R_2) = 1/11$。环路增益只有 1.5 左右。（若在偏置计算中也计入 $\lambda$，增益仍接近 −6，而 $R_{out}$ 约为 0.5 kΩ；环路增益很低，使结果对这类建模细节较为敏感。）

**常见错误。** 给出理想增益 $-R_2/R_1 = -10$。由于 $T \approx 1.5$，实际增益只有它的 60 % 左右。

**常见错误。** 只用 $g_{m1}$ 表示反相器的跨导。两个栅极都接到 G，因此 $G_m = g_{m1} + g_{m2}$。

**常见错误。** 忽略 $R_2$ 在输出端的负载效应，或者得出大于 $r_{O1}\parallel r_{O2}$ 的 $R_{out}$。$R_2$ 既是输出端的负载，又提供并联反馈；这两种作用都使 $R_{out}$ **低于**开环值 1.82 kΩ。
