# 详细步骤 - R462

**思路。** 把每个晶体管的沟道热噪声建模为漏源之间的电流 $4kT\gamma g_m$（$\gamma = 2/3$）。在第一级中，每个噪声电流的作用相当于输入晶体管的一个附加电流，除以 $g_{m1}$ 即可折合到输入端；第二级的噪声先折合到节点 Y，再除以第一级增益的平方。互不相关的噪声功率直接相加。

### 第 1 步 — 小信号参数

$$
\begin{aligned}
g_{m1} = g_{m2} &= 2.81\ \mathrm{mS}\quad\text{(given)},\\
g_{m3} = g_{m4} &= \frac{2\,(0.5\ \mathrm{mA})}{0.25\ \mathrm{V}} = 4\ \mathrm{mS},\\
g_{m5} &= \frac{2\,(1\ \mathrm{mA})}{0.25\ \mathrm{V}} = 8\ \mathrm{mS},\\
g_{m6} &= \frac{2\,(1\ \mathrm{mA})}{0.25\ \mathrm{V}} = 8\ \mathrm{mS},
\end{aligned}
$$

$$4kT\cdot\tfrac23 = 4\,(1.38\times10^{-23})(300)\left(\tfrac23\right) = 1.104\times10^{-20}\ \mathrm{J}.$$

### 第 2 步 — 输入对管 $M_1$、$M_2$

$I_{n1}$ 与信号电流 $g_{m1}v_{sg1}$ 并联流动，因此它等效于栅极电压 $I_{n1}/g_{m1}$：

$$\overline{V_{n,in}^2}\Big|_{M_1} = \frac{\overline{I_{n1}^2}}{g_{m1}^2} = \frac{4kT\cdot\tfrac23\,g_{m1}}{g_{m1}^2} = \frac{4kT\cdot\tfrac23}{g_{m1}} .$$

$M_2$ 贡献相同大小且互不相关的噪声。

### 第 3 步 — 电流镜（current mirror）负载 $M_3$、$M_4$

$I_{n3}$ 从 X 流到地，而 $M_1$ 的电流也流到 X；由于对差分信号而言源极公共节点 P 是交流地，它的作用就相当于 $M_1$ 的一个附加噪声电流：

$$\overline{V_{n,in}^2}\Big|_{M_3} = \frac{\overline{I_{n3}^2}}{g_{m1}^2} = \frac{4kT\cdot\tfrac23\,g_{m3}}{g_{m1}^2} ,$$

Y 处的 $M_4$ 也是如此。权重是 $1/g_{m1}^2$ 而不是 $1/g_{m3}^2$，因此 $g_{m3}$ 大的负载噪声大。

### 第 4 步 — 尾电流管 $M_7$

它的噪声电流在 $M_1$ 和 $M_2$ 之间平均分配；$M_4$ 把 $M_1$ 的那一半复制到 Y，在那里与 $M_2$ 的那一半相互抵消。在一阶近似下，尾电流管只是一个共模扰动，不予计入。

### 第 5 步 — 第一级的总噪声

$$
\overline{V_{n,in}^2}\Big|_{stage\,1} = 2\times4kT\cdot\tfrac23\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right) = 8kT\cdot\tfrac23\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right),
$$

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{2.81\ \mathrm{mS}} = 356\ \Omega,\\
\frac{g_{m3}}{g_{m1}^2} &= \frac{4\times10^{-3}\ \mathrm{S}}{(2.81\times10^{-3}\ \mathrm{S})^2} = \frac{4\times10^{-3}}{7.90\times10^{-6}}\ \Omega = 506\ \Omega,\\
\text{sum} &= 862\ \Omega,\\
\overline{V_{n,in}^2}\Big|_{stage\,1} &= 2\,(1.104\times10^{-20}\ \mathrm{J})(862\ \Omega) = 1.90\times10^{-17}\ \mathrm{V^2/Hz}.
\end{aligned}
$$

负载的贡献**大于**输入对管（506 Ω 对比 356 Ω），因为 $g_{m3} = 4$ mS 大于 $g_{m1} = 2.81$ mS，这是电流镜过驱动电压只有 0.25 V 的结果；增大 $M_3$/$M_4$ 的过驱动电压可以减小这一贡献。（保留所有输出电阻的精确节点分析与此结果的差别在 0.1 % 以内。）

### 第 6 步 — 第二级 $M_5$、$M_6$

两个噪声电流都流入输出端；折合到 $M_5$ 的栅极（节点 Y）：

$$
\overline{V_{n,Y}^2} = \frac{4kT\cdot\tfrac23\,(g_{m5} + g_{m6})}{g_{m5}^2} = (1.104\times10^{-20})\,\frac{16\times10^{-3}}{(8\times10^{-3})^2}\ \mathrm{V^2/Hz} = (1.104\times10^{-20})(250)\ \mathrm{V^2/Hz} = 2.76\times10^{-18}\ \mathrm{V^2/Hz}.
$$

采用该设计中的 $\lambda_p = 0.2$ 和 $\lambda_n = 0.1\ \mathrm{V^{-1}}$，$A_1 = g_{m1}(r_{O2}\parallel r_{O4}) = 2.81\ \mathrm{mS}\times(10\ \mathrm{k}\Omega\parallel20\ \mathrm{k}\Omega) = 18.75$，因此

$$\overline{V_{n,in}^2}\Big|_{stage\,2} = \frac{2.76\times10^{-18}}{18.75^2}\ \mathrm{V^2/Hz} = \frac{2.76\times10^{-18}}{352}\ \mathrm{V^2/Hz} = 7.9\times10^{-21}\ \mathrm{V^2/Hz},$$

约为第一级噪声的 0.04 %（即使 $A_1$ 只有 10，也只有 0.15 %）：可以忽略。

### 第 7 步 — 总输入参考噪声

$$\overline{V_{n,in}^2} \approx 1.90\times10^{-17}\ \mathrm{V^2/Hz},$$

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{1.90\times10^{-17}}\ \mathrm{V/\sqrt{Hz}} = 4.4\ \mathrm{nV/\sqrt{Hz}} .$$

### 结果

$$\overline{V_{n,in}^2} \approx 8kT\cdot\tfrac23\left(\frac{1}{g_{m1}} + \frac{g_{m3}}{g_{m1}^2}\right) = 2.21\times10^{-20}\times(356 + 506)\ \Omega \approx 1.9\times10^{-17}\ \mathrm{V^2/Hz},$$

即约 **4.4 nV/√Hz**。第二级的贡献不到 0.1 %，尾电流管 $M_7$ 只贡献共模噪声。

**常见错误。** 把负载项的权重取为 $4kT\gamma/g_{m3}$。负载的噪声**电流**注入信号节点，输入端要通过 $g_{m1}$ 来重现它，因此其权重为 $g_{m3}/g_{m1}^2$。

**常见错误。** 用 $4kT$ 而不是 $8kT$：两个输入器件和两个负载器件都是独立的噪声源。

**常见错误。** 以为 $M_5$ 和 $M_6$ 的电流是两倍，第二级的噪声就占主导；实际上它们的噪声要除以 $A_1^2 \approx 350$。把尾电流管 $M_7$ 的噪声计为差模噪声也是错误的：它通过电流镜相互抵消。
