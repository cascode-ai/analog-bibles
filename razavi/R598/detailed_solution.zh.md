# 详细步骤 - R598

**思路。** 分析建立后的状态，此时电容中没有电流：浮空的反相输入端满足电荷守恒，输出电压等于注入电流乘以 $R_{out}$。由这两个方程可得单独主放大器的增益误差 $\varepsilon_0$；对完整电路重复这一分析，可得 $\varepsilon_0^2$。

### 第 1 步 — 单独主放大器的方程

把反相输入端记为 M。所有电压都是相对于复位状态（电容已放电）的变化量，且 $A = G_mR_{out} \gg 1$。

<!-- diagram: diagram-01.cir -->

建立后 $C_2$ 中没有电流，因此放大器的全部电流都流过 $R_{out}$：

$$V_Y = R_{out}\,G_m(0 - V_M) = -A\,V_M .$$

M 只与电容极板相连，因此经 $C_1$ 送来的电荷等于传给 $C_2$ 的电荷：

$$C_1(V_{in} - V_M) = C_2(V_M - V_Y).$$

### 第 2 步 — 单独主放大器的增益与增益误差

代入 $V_Y = -AV_M$：

$$
\begin{aligned}
C_1V_{in} - C_1V_M &= C_2V_M + AC_2V_M\\
C_1V_{in} &= (C_1 + C_2 + AC_2)\,V_M\\
V_M &= \frac{C_1V_{in}}{C_1 + C_2 + AC_2}.
\end{aligned}
$$

于是

$$
\begin{aligned}
\frac{V_Y}{V_{in}} = -\frac{AC_1}{C_1 + C_2 + AC_2} &= -\frac{C_1}{C_2}\cdot\frac{AC_2}{C_1 + C_2 + AC_2}\\
&= -\frac{C_1}{C_2}\left(1 - \frac{C_1 + C_2}{C_1 + C_2 + AC_2}\right),
\end{aligned}
$$

因此增益误差，即相对于 $-C_1/C_2$ 的相对不足量，为

$$\varepsilon_0 = \frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2} \approx \frac{1 + C_1/C_2}{G_mR_{out}}.$$

利用反馈系数（feedback factor）$\beta = C_2/(C_1 + C_2)$，有 $\varepsilon_0 = 1/(1 + \beta A) \approx 1/(\beta A)$：放大器需要一个非零的输入 $V_M$ 才能产生输出电流，因此 M 不是理想的虚地（virtual ground）。

### 第 3 步 — 用于比较的完整电路

记 $S = C_1 + C_2$，$D = C_1 + C_2 + AC_2$，则 $\varepsilon_0 = S/D$。

**辅助放大器。** 它与主放大器完全相同且输入相同，因此由第 2 步（用 X 代替 M，并使用它自己的输出），其输入端建立在

$$V_X = \frac{C_1V_{in}}{D} = \varepsilon_0\,\frac{C_1V_{in}}{C_1 + C_2},$$

这恰好是主放大器未经校正时的输入误差 $V_M$。

**计入误差电流的主放大器。** 现在 Y 接收 $G_m(0 - V_M)$ 和 $G_m(0 - V_X)$（忽略误差放大器自身的输出电阻）：

$$V_Y = -A\,(V_M + V_X).$$

M 点的电荷守恒：

$$
\begin{aligned}
C_1(V_{in} - V_M) &= C_2V_M + AC_2(V_M + V_X)\\
C_1V_{in} - AC_2V_X &= D\,V_M\\
V_M &= \frac{C_1V_{in} - AC_2V_X}{D} = \frac{C_1V_{in}}{D}\cdot\frac{D - AC_2}{D} = \frac{C_1V_{in}\,S}{D^2}.
\end{aligned}
$$

主放大器的输入误差现在减小到原来的 $S/D = \varepsilon_0$ 倍。于是

$$
\begin{aligned}
V_M + V_X &= \frac{C_1V_{in}(S + D)}{D^2},\\
V_Y &= -A\,\frac{C_1V_{in}(S + D)}{D^2} = -\frac{D - S}{C_2}\cdot\frac{C_1V_{in}(D + S)}{D^2}\qquad(A = (D - S)/C_2)\\
&= -\frac{C_1}{C_2}\,V_{in}\left[1 - \left(\frac{S}{D}\right)^2\right],
\end{aligned}
$$

因此完整电路的增益误差为

$$\varepsilon = \left(\frac{S}{D}\right)^2 = \varepsilon_0^2 .$$

### 第 4 步 — 比较

$$\frac{\varepsilon_0}{\varepsilon} = \frac{1}{\varepsilon_0} = \frac{C_1 + C_2 + G_mR_{out}C_2}{C_1 + C_2} \approx \frac{G_mR_{out}C_2}{C_1 + C_2} = \beta A .$$

辅助放大器和误差放大器使增益误差缩小的倍数等于环路增益。取 $C_1/C_2 = 4$，$G_mR_{out} = 1000$：

$$
\begin{aligned}
\varepsilon_0 &= \frac{4 + 1}{4 + 1 + 1000} = \frac{5}{1005} = 0.50\ \%,\\
\varepsilon &= \varepsilon_0^2 = (0.004975)^2 = 2.5\times10^{-5} = 25\ \mathrm{ppm}.
\end{aligned}
$$

复制品的输入电压 $V_X$ 度量了主放大器的虚地误差，误差放大器把它转换为电流 $-G_mV_X$，而这股电流原本需要主放大器由自身的输入误差来产生；最后只剩下二阶残余。

### 结果

- **单独的主放大器：**
$$\varepsilon_0 = \frac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2} \approx \frac{1 + C_1/C_2}{G_mR_{out}},$$
即 $1/(\text{loop gain})$，是 $1/(G_mR_{out})$ 的一阶量。
- **完整电路：** $\varepsilon = \varepsilon_0^2$，是二阶量。校正使增益误差改善 $1/\varepsilon_0 \approx G_mR_{out}C_2/(C_1 + C_2)$ 倍，即环路增益；例如对于 $C_1/C_2 = 4$、$G_mR_{out} = 1000$，0.5 % 变为 25 ppm。

**常见错误。** 把单个放大器的误差写成 $1/(G_mR_{out})$。只有比例为 $\beta = C_2/(C_1 + C_2)$ 的输出被反馈回去，因此误差为 $(1 + C_1/C_2)/(G_mR_{out})$，当 $C_1/C_2 = 4$ 时大五倍。

**常见错误。** 认为辅助放大器和误差放大器没有作用，或者只能使误差减半。它们完全消除了一阶项；剩下的误差是原误差的平方。
