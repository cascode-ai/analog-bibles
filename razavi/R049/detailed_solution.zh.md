# 详细步骤 - R049

**思路：** 把沟道表面看作一个与两个“栅极”耦合的节点：真正的（前）栅极通过氧化层电容 $C_{ox}$ 耦合，衬底（背栅）通过耗尽层电容 $C_{dep}$ 耦合。衬底电压变化引起的阈值偏移由两种耦合之比 $C_{dep}/C_{ox}$ 决定。然后说明 $C_{dep}$ 如何随掺杂变化，并把这一图像与 $\gamma$ 的公式联系起来。

### 第 1 步 — 背栅图像：电容分压器（capacitive divider）

目标是理解为什么 $V_{TH} = V_{TH0} + \gamma(\sqrt{2|\phi_F| + V_{SB}} - \sqrt{2|\phi_F|})$ 中的体效应系数为

$$\gamma = \frac{\sqrt{2q\,\epsilon_{si}N_{sub}}}{C_{ox}}$$

而不只是引用这个公式。

从 NMOS 的沟道表面看，前栅隔着氧化层，单位面积电容为 $C_{ox}$；中性的 p 型衬底隔着宽度为 $x_d$ 的耗尽层，单位面积电容为 $C_{dep} = \epsilon_{si}/x_d$。因此，表面处于栅极与衬底之间的电容分压器的中点：衬底就像第二个栅极（即背栅）一样作用于沟道，只是经过的电容不同。

<!-- diagram: diagram-01.cir -->

当表面电势达到某一固定值（比源端高 $2|\phi_F|$）时开始反型。使衬底相对于源极再负 $\Delta V_{SB}$，会通过 $C_{dep}$ 把表面电势拉低，并暴露出额外的负耗尽电荷（耗尽层展宽，更多的受主离子暴露出来）：

$$\Delta Q_{dep} \approx C_{dep}\,\Delta V_{SB} .$$

要使表面重新达到反型，栅极必须通过 $C_{ox}$ 提供等量异号的电荷，这需要额外的栅极电压

$$\Delta V_{TH} = \frac{\Delta Q_{dep}}{C_{ox}} \approx \frac{C_{dep}}{C_{ox}}\,\Delta V_{SB} .$$

因此，阈值对背栅电压的灵敏度等于背栅耦合与前栅耦合之比：

$$\frac{\partial V_{TH}}{\partial V_{SB}} \approx \frac{C_{dep}}{C_{ox}} .$$

### 第 2 步 — 为什么背栅耦合随 $\sqrt{N_{sub}}$ 增大

由单边结（one-sided junction）的泊松方程解，得到反型时、反向偏压为 $V_{SB}$ 的沟道下方耗尽层宽度：

$$x_d = \sqrt{\frac{2\epsilon_{si}\,(2|\phi_F| + V_{SB})}{q\,N_{sub}}} ,$$

因此

$$C_{dep} = \frac{\epsilon_{si}}{x_d} = \epsilon_{si}\sqrt{\frac{q\,N_{sub}}{2\epsilon_{si}\,(2|\phi_F| + V_{SB})}} = \sqrt{\frac{q\,\epsilon_{si}\,N_{sub}}{2\,(2|\phi_F| + V_{SB})}} \;\propto\; \sqrt{N_{sub}} .$$

在重掺杂衬底中，受主离子排列密集，因此很薄的一层就能容纳所需的耗尽电荷（$x_d \propto 1/\sqrt{N_{sub}}$）。背栅实际上离沟道更近，$V_{SB}$ 每变化一伏就暴露出更多电荷，而前栅必须抵消这些电荷。掺杂浓度增加到四倍，$x_d$ 减半，$C_{dep}$ 加倍，因此背栅对沟道的控制力加倍。

### 第 3 步 — 为什么较大的 $C_{ox}$ 会削弱体效应

平衡 $\Delta Q_{dep}$ 所需的栅极电压为 $\Delta Q_{dep}/C_{ox}$。较大的 $C_{ox}$（较薄的氧化层）使前栅离沟道更近，因此只需较小的电压变化就能提供同样的电荷：前栅压过背栅，对给定的 $V_{SB}$，阈值的变化更小。$t_{ox}$ 减半使 $C_{ox} = \epsilon_{ox}/t_{ox}$ 加倍，阈值偏移减半。

### 第 4 步 — 推导 $\gamma$ 的公式

结合第 1 步和第 2 步：

$$\frac{\partial V_{TH}}{\partial V_{SB}} = \frac{C_{dep}}{C_{ox}} = \frac{1}{C_{ox}}\sqrt{\frac{q\,\epsilon_{si}\,N_{sub}}{2\,(2|\phi_F| + V_{SB})}} .$$

对体效应方程求导，得

$$\frac{\partial V_{TH}}{\partial V_{SB}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} .$$

令两式相等并解出 $\gamma$：

$$
\begin{aligned}
\frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} &= \frac{\sqrt{q\epsilon_{si}N_{sub}}}{\sqrt2\,C_{ox}\sqrt{2|\phi_F| + V_{SB}}}\\
\gamma &= \frac{2\sqrt{q\epsilon_{si}N_{sub}}}{\sqrt2\,C_{ox}} = \frac{\sqrt{2q\,\epsilon_{si}N_{sub}}}{C_{ox}} .
\end{aligned}
$$

这正是教科书中的表达式，这里由背栅图像得到：分子来自背栅耦合（$\propto\sqrt{N_{sub}}$），分母来自前栅耦合（$C_{ox}$）。

数值示例。 取 $N_{sub} = 10^{17}\ \mathrm{cm^{-3}}$，$\epsilon_{si} = 11.7\times8.854\times10^{-14} = 1.04\times10^{-12}$ F/cm，$C_{ox} = 3.84\ \mathrm{fF/\mu m^2} = 3.84\times10^{-7}\ \mathrm{F/cm^2}$（$t_{ox} = 9$ nm）：

$$\gamma = \frac{\sqrt{2(1.6\times10^{-19})(1.04\times10^{-12})(10^{17})}}{3.84\times10^{-7}}\ \mathrm{V^{1/2}} = \frac{1.82\times10^{-7}}{3.84\times10^{-7}}\ \mathrm{V^{1/2}} = 0.47\ \mathrm{V^{1/2}},$$

这是一个典型值。两种依赖关系的缩放如下：

| 变化 | 对 $C_{dep}$ 或 $C_{ox}$ 的影响 | 新的 $\gamma$ |
|---|---|---|
| 无 | — | 0.47 V$^{1/2}$ |
| $N_{sub}\times4$ | $C_{dep}\times2$（背栅强度加倍） | 0.95 V$^{1/2}$ |
| $t_{ox}/2$ | $C_{ox}\times2$（前栅强度加倍） | 0.24 V$^{1/2}$ |

### 结果

衬底是一个背栅，通过耗尽层电容 $C_{dep}$ 与沟道耦合，而真正的栅极通过 $C_{ox}$ 耦合。$\Delta V_{SB}$ 的变化所暴露出的耗尽电荷为 $\approx C_{dep}\Delta V_{SB}$，栅极必须抵消这些电荷，代价是 $\Delta V_{TH} \approx (C_{dep}/C_{ox})\Delta V_{SB}$。由于 $C_{dep} = \epsilon_{si}/x_d \propto \sqrt{N_{sub}}$（掺杂越重，耗尽层越薄，即背栅越近、越强），而前栅的强度为 $C_{ox}$：

$$\gamma = \frac{\sqrt{2q\,\epsilon_{si}N_{sub}}}{C_{ox}} \propto \frac{\sqrt{N_{sub}}}{C_{ox}} .$$

**常见错误：** 把掺杂依赖关系弄反，例如认为重掺杂衬底更“硬”，因此体效应更弱。掺杂越重，耗尽层越薄，这会增强衬底与沟道之间的耦合，因此 $\gamma$ 增大。

**常见错误：** 认为较厚的氧化层由于栅极“隔离得更好”而减小体效应。较厚的氧化层（较小的 $C_{ox}$）削弱的是前栅，因此背栅对阈值的相对影响增大，$\gamma$ 增大。
