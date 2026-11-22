# 详细步骤 - G245

在基本放大器的每个线性段内，$S_o=S_{o,k}+a_k(S_\epsilon-S_{\epsilon,k})$，因此可以逐段使用增量反馈分析：闭环斜率为 $a_k/(1+a_kf)$。转折点则由开环转折点处的 $S_i=S_\epsilon+fS_o$ 求得。

### 第 1 步 — 开环转折点

第 1 段中放大器过原点线性工作，因此 $S_o=7$ V 时的输入为

$$
S_{\epsilon1}=\frac{S_{o1}}{a_1}=\frac{7\ \mathrm V}{50{,}000}=0.14\ \mathrm{mV}.
$$

第 2 段中输出以斜率 $a_2$ 再上升 8 V，达到 15 V 时的输入为

$$
S_{\epsilon2}=0.14\ \mathrm{mV}+\frac{8\ \mathrm V}{20{,}000}=0.54\ \mathrm{mV}.
$$

### 第 2 步 — 闭环斜率

在第 $k$ 段中，输入的微小变化 $\Delta S_i$ 满足 $\Delta S_o=a_k\Delta S_\epsilon$ 和 $\Delta S_\epsilon=\Delta S_i-f\Delta S_o$，故

$$
A_k=\frac{\Delta S_o}{\Delta S_i}=\frac{a_k}{1+a_kf}.
$$

| 段 | $a_k$ | $T_k=a_kf$ | $A_k$ |
|---|---|---|---|
| 1，$\lvert S_o\rvert<7$ V | 50,000 | 5 | 8333 |
| 2，$7<\lvert S_o\rvert<15$ V | 20,000 | 2 | 6667 |
| 3，$\lvert S_o\rvert=15$ V | 0 | 0 | 0 |

饱和时 $a_3=0$，环路增益为零，反馈无法恢复任何斜率。

### 第 3 步 — 闭环转折点

环路方程 $S_i=S_\epsilon+fS_o$ 把每个开环转折点映射到反馈放大器的输入：

$$
S_{i1}=0.14\ \mathrm{mV}+(10^{-4})(7\ \mathrm V)=0.14+0.70=0.84\ \mathrm{mV},
$$

$$
S_{i2}=0.54\ \mathrm{mV}+(10^{-4})(15\ \mathrm V)=0.54+1.50=2.04\ \mathrm{mV}.
$$

验算：第 2 段跨越 $8\ \mathrm V/6667=1.20$ mV，且 $0.84+1.20=2.04$ mV。

### 第 4 步 — 总传输特性

由奇对称性，

$$
S_o=\begin{cases}
8333\,S_i, & |S_i|\le0.84\ \mathrm{mV},\\
\pm\left[7\ \mathrm V+6667\,(|S_i|-0.84\ \mathrm{mV})\right], & 0.84\le|S_i|\le2.04\ \mathrm{mV},\\
\pm15\ \mathrm V, & |S_i|\ge2.04\ \mathrm{mV},
\end{cases}
$$

正负号与 $S_i$ 相同。

![闭环输出随输入变化的曲线，转折点位于 0.84 mV 和 2.04 mV，并附开环特性作对照](/q/G245/solution-curves.zh.svg)

传输特性保持三段形状和相同的 ±15 V 限幅。反馈使斜率之比由 $a_1/a_2=2.5$ 减小为 $A_1/A_2=1.25$，但由于环路增益只有 5 和 2，闭环斜率仍明显低于 $1/f=10{,}000$，斜率的变化依然清晰可见。
