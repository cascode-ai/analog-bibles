# 详细步骤 - R261

**思路。** 与 $\gamma = 0$ 的情况一样，沿偏置网络把 $V_{DS2}$ 写成各栅源电压之和，但对每个源极高于地的晶体管都采用计入体效应的阈值电压。体效应把 $V_{DS2}$ 推到饱和区边缘**以下**，使 $M_2$ 进入线性区；再把它的线性区电流与 $M_1$ 的饱和区电流相比较，并针对一个有代表性的设计求出数值结果。

### 第 1 步 — 电压环路与 $\gamma = 0$ 的出发点

把 $M_2$ 的漏极（即 $M_3$ 的源极）称为节点 B。沿着由各栅源电压构成的环路，其中 $M_0$ 和 $M_1$ 为二极管连接（diode-connected），$M_4$ 为驱动 $M_3$ 栅极的跟随器：

$$V_{DS2} = V_B = \underbrace{V_{GS1} + V_{GS0}}_{V_{b1}} - V_{GS4} - V_{GS3}.$$

当 $\gamma = 0$ 时：$V_{GS3} \approx V_{GS0}$，$V_{GS4} \approx V_{TH}$，因此 $V_{DS2} \approx V_{GS1} - V_{TH} = V_{ov}$，$M_2$ 处于饱和区边缘。此时唯一的误差来自沟道长度调制（channel-length modulation），$I_{out}/I_{REF} - 1 \approx -\lambda V_{TH}/(1 + \lambda V_{GS1}) \approx -6.4\%$。

### 第 2 步 — 体效应使哪些阈值电压升高

衬底接地时，源极电压为 $s$ 的晶体管有

$$V_{TH}(s) = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + s} - \sqrt{2|\phi_F|}\right), \qquad V_{TH0} = 0.7\ \mathrm{V}.$$

$M_1$ 和 $M_2$ 的源极接地。$M_0$（源极在 X，$V_X = V_{GS1} \approx 0.9$ V）的阈值电压升高是**有利的**，它抬高了 $V_{b1}$；$M_4$（源极在 $V_{G3} \approx 1$ V）和 $M_3$（源极在 B，$V_B = V_{DS2} \approx 0.15$ V）的阈值电压升高则是**不利的**，它们使 $M_3$ 的栅极和源极电压降低。$M_4$ 的源极电压在三者中最高，因此预计净效果是使 $V_{DS2}$ 降低。

### 第 3 步 — $V_{DS2}$ 的一般表达式

把每个栅源电压写成阈值电压与过驱动电压之和：

$$V_{GS1} = V_{TH0} + V_{ov1}, \quad V_{GS0} = V_{TH}(V_X) + V_{ov0}, \quad V_{GS4} = V_{TH}(V_{G3}) + V_{ov4}, \quad V_{GS3} = V_{TH}(V_B) + V_{ov3}.$$

代入 $V_{DS2} = V_{GS1} + V_{GS0} - V_{GS4} - V_{GS3}$：

$$V_{DS2} = V_{ov1} + (V_{ov0} - V_{ov3}) - V_{ov4} + \left[V_{TH0} + V_{TH}(V_X) - V_{TH}(V_{G3}) - V_{TH}(V_B)\right].$$

方括号中的四个 $V_{TH0}$ 项相互抵消（两正两负），$\sqrt{2|\phi_F|}$ 项也同样抵消，只剩下一项：

$$
\begin{aligned}
\left[\ \cdot\ \right] &= \gamma\left[\sqrt{2|\phi_F| + V_X} - \sqrt{2|\phi_F| + V_{G3}} - \sqrt{2|\phi_F| + V_B} + \sqrt{2|\phi_F|}\right]\\
&= -\gamma\left\{\left[\sqrt{2|\phi_F| + V_{G3}} - \sqrt{2|\phi_F| + V_X}\right] + \left[\sqrt{2|\phi_F| + V_B} - \sqrt{2|\phi_F|}\right]\right\}.
\end{aligned}
$$

因此

$$V_{DS2} = V_{ov1} + (V_{ov0} - V_{ov3}) - V_{ov4} - \gamma\left\{\left[\sqrt{2|\phi_F| + V_{G3}} - \sqrt{2|\phi_F| + V_X}\right] + \left[\sqrt{2|\phi_F| + V_B} - \sqrt{2|\phi_F|}\right]\right\}.$$

- $V_{ov4}$ 非常小（$M_4$ 很宽，$I_1$ 很小）。
- $V_{ov0} - V_{ov3}$ 很小：$M_0$ 和 $M_3$ 的电流相近，因此它们的过驱动电压只因 $\lambda$ 和电流差异而略有不同。
- 两个方括号项都为**正**，因为 $V_{G3} > V_X$ 且 $V_B > 0$。

因此 $V_{DS2} \approx V_{ov1} - \gamma\{\cdots\}$ **小于 $V_{ov1}$**：$M_2$ 被推到**饱和区边缘以下，进入线性区**。

### 第 4 步 — 代表性设计的数值

采用与 $\gamma = 0$ 情况相同的设计：$I_{REF} = 100\ \mu\mathrm{A}$；$M_0$–$M_3$ 的 $W/L = 20/0.5$，因此 $\beta = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2}$；$M_4$ 的 $W/L = 200/0.5$，偏置电流 $I_1 = 5\ \mu\mathrm{A}$；$V_{DD} = 3$ V；输出电压 2 V；$\lambda = 0.1\ \mathrm{V^{-1}}$。

**$M_1$**（源极接地，二极管连接）：由 $100\ \mu\mathrm{A} = \tfrac12\beta V_{ov1}^2(1 + \lambda V_{GS1})$ 得

$$V_{ov1} = 0.185\ \mathrm{V}, \qquad V_{GS1} = V_X = 0.885\ \mathrm{V}.$$

**$M_0$**（源极在 X）：

$$
\begin{aligned}
V_{TH}(0.885) &= 0.7 + 0.45\left(\sqrt{1.785} - \sqrt{0.9}\right) = 0.7 + 0.45(1.336 - 0.949) = 0.874\ \mathrm{V},\\
V_{ov0} &= 0.184\ \mathrm{V} \ \ (\text{from } 100\ \mu\mathrm{A} = \tfrac12\beta V_{ov0}^2(1 + \lambda V_{GS0})),\\
V_{GS0} &= 0.874 + 0.184 = 1.058\ \mathrm{V}, \qquad V_{b1} = 0.885 + 1.058 = 1.943\ \mathrm{V}.
\end{aligned}
$$

**$M_4$**（源极在 $V_{G3}$，通过迭代求得）：取 $V_{G3} \approx 1.032$ V，

$$
\begin{aligned}
V_{TH}(1.032) &= 0.7 + 0.45\left(\sqrt{1.932} - 0.949\right) = 0.7 + 0.45(1.390 - 0.949) = 0.899\ \mathrm{V},\\
V_{ov4} &= \sqrt{\frac{2(5\ \mu\mathrm{A})}{(53.6\ \mathrm{mA/V^2})(1 + 0.1\times1.97)}} = 0.0125\ \mathrm{V},\\
V_{GS4} &= 0.899 + 0.0125 = 0.911\ \mathrm{V}, \qquad V_{G3} = 1.943 - 0.911 = 1.032\ \mathrm{V}. \ \checkmark
\end{aligned}
$$

因此 $M_4$ 使电平下移 0.91 V，而不是 0.71 V。

**$M_2$/$M_3$：** 数值求解 $I_{D3} = I_{D2}$，得 $V_B = V_{DS2} = 0.136$ V，此时 $V_{TH}(0.136) = 0.731$ V，$V_{ov3} = 0.165$ V。

**用第 3 步的公式验算：**

$$
\begin{aligned}
\sqrt{0.9 + 1.032} - \sqrt{0.9 + 0.885} &= 1.390 - 1.336 = 0.054\ \mathrm{V^{1/2}},\\
\sqrt{0.9 + 0.136} - \sqrt{0.9} &= 1.018 - 0.949 = 0.069\ \mathrm{V^{1/2}},\\
\gamma\{\cdots\} &= 0.45\times0.123 = 0.055\ \mathrm{V},\\
V_{DS2} &= 0.185 + (0.184 - 0.165) - 0.0125 - 0.055 = 0.136\ \mathrm{V}. \ \checkmark
\end{aligned}
$$

从阈值电压的角度看：$M_0$ 的阈值电压升高 0.174 V（有利），$M_4$ 的升高 0.199 V，$M_3$ 的升高 0.031 V（均不利），净损失 0.055 V。由于 $V_{DS2} = 0.136\ \mathrm{V} < V_{ov2} = 0.185$ V，**$M_2$ 处于线性区**。

### 第 5 步 — $M_2$ 处于线性区时的电流比

$M_1$ 饱和而 $M_2$ 处于线性区，两者的过驱动电压同为 $V_{ov}$。为使模型连续，在两个区域中都保留 $(1 + \lambda V_{DS})$ 因子：

$$I_{REF} = \frac{\beta}{2}V_{ov}^2(1 + \lambda V_{GS1}), \qquad I_{out} = \beta\left(V_{ov}V_{DS2} - \tfrac12V_{DS2}^2\right)(1 + \lambda V_{DS2}).$$

两式相除，并令 $x = V_{DS2}/V_{ov}$：

$$\frac{I_{out}}{I_{REF}} = \frac{2V_{ov}V_{DS2} - V_{DS2}^2}{V_{ov}^2}\cdot\frac{1 + \lambda V_{DS2}}{1 + \lambda V_{GS1}} = (2x - x^2)\,\frac{1 + \lambda V_{DS2}}{1 + \lambda V_{GS1}} .$$

因子 $2x - x^2$ 在边缘处（$x = 1$）等于 1，当 $x$ 降到 1 以下时下降得越来越快，因此一旦 $V_{DS2}$ 低于 $V_{ov}$，误差就迅速增大。

**数值：**

$$
\begin{aligned}
x &= \frac{0.136}{0.185} = 0.735, \qquad 2x - x^2 = 1.470 - 0.540 = 0.930,\\
\frac{1 + \lambda V_{DS2}}{1 + \lambda V_{GS1}} &= \frac{1.0136}{1.0885} = 0.931,\\
\frac{I_{out}}{I_{REF}} &= 0.930\times0.931 = 0.866 \quad\Longrightarrow\quad I_{out} \approx 86.6\ \mu\mathrm{A}.
\end{aligned}
$$

即**偏低约 13 %**，而 $\gamma = 0$ 时为 6.4 %。输出电压在 1.5 V 到 3 V 之间变化时，$V_{DS2}$ 略有变化（通过 $M_3$ 的 $\lambda$），得到 $I_{out} = 85.9$–87.7 μA（偏低 12–14 %）。

另一个等价的精确形式（只要 $M_0$ 和 $M_3$ 饱和就成立）比较的是两个上方器件，它们分别流过 $I_{REF}$ 和 $I_{out}$：

$$\frac{I_{out}}{I_{REF}} = \left(\frac{V_{ov3}}{V_{ov0}}\right)^2\frac{1 + \lambda V_{DS3}}{1 + \lambda V_{DS0}} = \left(\frac{0.1650}{0.1837}\right)^2\frac{1 + 0.1(2 - 0.136)}{1 + 0.1(1.058)} = 0.807\times\frac{1.186}{1.106} = 0.866. \ \checkmark$$

### 结果

当 $\gamma \ne 0$ 时：

$$V_{DS2} = V_{ov1} + (V_{ov0} - V_{ov3}) - V_{ov4} - \gamma\left\{\left[\sqrt{2|\phi_F| + V_{G3}} - \sqrt{2|\phi_F| + V_X}\right] + \left[\sqrt{2|\phi_F| + V_B} - \sqrt{2|\phi_F|}\right]\right\} < V_{ov}.$$

很宽且电流很小的 $M_4$ 有 $V_{GS4} \approx V_{TH4}(V_{SB} \approx 1\ \mathrm{V}) \approx 0.9$ V，而不是 0.7 V。$M_0$ 阈值电压的升高只能部分抵消这一影响，因此 $V_{DS2}$ 降到饱和区边缘以下约 50–60 mV，**$M_2$ 进入线性区**。于是

$$\frac{I_{out}}{I_{REF}} \approx \left[2\frac{V_{DS2}}{V_{ov}} - \left(\frac{V_{DS2}}{V_{ov}}\right)^2\right]\frac{1 + \lambda V_{DS2}}{1 + \lambda V_{GS1}},$$

失配**比 $\gamma = 0$ 时大得多：通常偏低 10–15 %**（本例为 −13 %，而 $\gamma = 0$ 时为 −6.4 %）。共源共栅结构的输出电阻（output resistance）也会变差，因为处于线性区的 $M_2$ 的小信号电阻要低得多。

**常见错误。** 沿用 $\gamma = 0$ 时 $M_2$ 处于饱和区边缘的前提，并给出 6–7 % 的误差。这个边缘是按 $V_{GS4} \approx 0.7$ V 设计的；由于 $M_4$ 的源极电压约为 1 V，体效应使其阈值电压升高约 0.2 V，这一前提不再成立。

**常见错误。** 以为 $M_0$ 的阈值电压也会升高，从而得出体效应使 $V_{DS2}$ **升高**或消除误差的结论。$M_0$ 的源极电压（0.885 V）低于 $M_4$ 的（1.03 V），而且 $M_3$ 的阈值电压也会升高，因此 $V_{DS2}$ 的净变化为负。

**常见错误。** 在 $V_{DS2} < V_{ov}$ 之后仍使用 $M_2$ 的饱和区方程 $\tfrac{\beta}{2}V_{ov}^2(1 + \lambda V_{DS2})$。这只会预测出略大一些的 λ 误差；而在线性区中，电流按 $2x - x^2$ 下降，这才是误差的主要来源。
