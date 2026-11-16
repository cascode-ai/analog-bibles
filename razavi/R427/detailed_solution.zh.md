# 详细步骤 - R427

**思路。** 把每个晶体管的沟道噪声建模为漏源之间的电流 $4kT\cdot\tfrac23g_m$。把输出端短路，求出每个噪声电流有多少到达输出端，把功率相加，再除以运放短路跨导（short-circuit transconductance）$G_m \approx g_{m1}$ 的平方。共源共栅器件几乎没有贡献，因此只需考虑输入对管和 PMOS 电流镜管 $M_7$、$M_8$。

### 第 1 步 — 噪声模型与小信号参数

输出端接到 $M_2$ 的栅极，使电路成为单位增益缓冲器（unity-gain buffer），其输入参考噪声就是运放的输入参考噪声。每个 MOSFET 的 $\overline{I_n^2} = 4kT\gamma_n\,g_m$，其中 $\gamma_n = \tfrac23$，$T = 300$ K；这个热噪声系数不是题目中的体效应系数（body-effect coefficient）$\gamma = 0$。各噪声源互不相关。

每条支路的电流为 0.5 mA：

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(200)(0.5\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{S} = 5.18\ \mathrm{mS},\qquad \frac{1}{g_{m1}} = 193\ \Omega,\\
g_{m7} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(212)(0.5\ \mathrm{mA})} = \sqrt{8.14\times10^{-6}}\ \mathrm{S} = 2.85\ \mathrm{mS}\quad(= 2I_D/|V_{OD}| = 1\ \mathrm{mA}/0.35\ \mathrm{V}).
\end{aligned}
$$

由对称性，$g_{m2} = g_{m1}$，$g_{m8} = g_{m7}$。

### 第 2 步 — 运放的短路跨导

输出端短路、输入端加 $\pm v_d/2$ 时，$M_1$ 的 $g_{m1}v_d/2$ 由 $M_8$/$M_6$ 镜像到输出端，而 $M_2$ 经 $M_4$ 从输出端抽取的电流减少 $g_{m1}v_d/2$，因此

$$G_m \approx g_{m1} ,$$

到达短路输出端的噪声电流 $I$ 等效于输入电压 $I/g_{m1}$。

### 第 3 步 — 哪些噪声电流能到达输出端

**输入对管 $M_1$、$M_2$。** 与带电流镜负载和理想尾电流源的简单差分对一样，$I_{n1}$ 的一半经镜像送到输出端，另一半经 $M_2$ 直接流到输出端，因此 $I_{n1}$ 全部到达；$I_{n2}$ 也是如此。贡献：$4kT\gamma_n(2g_{m1})$。

**电流镜中的电流源管 $M_7$、$M_8$。**

- $M_8$ 的噪声电流经共源共栅管 $M_6$ 直接流入输出端：全部到达。
- $M_7$ 位于二极管连接（diode-connected）的叠接支路中，该支路的电流由其下方的高阻抗支路（$M_3$ 叠在 $M_1$ 上）决定。因此它的噪声电流被其自身的跨导抵消：其栅极电压变化 $I_{n7}/g_{m7}$，这驱动 $M_8$ 向输出端送出 $g_{m8}\,(I_{n7}/g_{m7}) = I_{n7}$。

贡献：$4kT\gamma_n(2g_{m7})$。

**共源共栅器件 $M_3$–$M_6$。** 共源共栅管的噪声电流在局部环流，因为其源极看到的电阻很大（对 $M_4$ 而言约为 $r_{O2} = 20\ \mathrm{k\Omega}$）；只有约 $1/(g_mr_O)$ 的部分到达输出端。折算到输入端后，相对于输入管，其功率权重对 $M_3$/$M_4$ 约为 $(1/(g_{m4}r_{O2}))^2 \approx 10^{-4}$ 量级，对 $M_5$/$M_6$ 约为 $10^{-3}$（$M_5$ 的噪声改变 $M_6$ 的栅极电压，而后者由 $r_{O8}$ 提供负反馈）。在低频下可以忽略。

**尾电流源。** 其噪声在 $M_1$ 和 $M_2$ 之间平分，经镜像的一半与直接到达的一半在输出端相互抵消（何况这里的尾电流源是理想的）。

### 第 4 步 — 输入参考噪声

$$\overline{I_{n,out}^2} = 4kT\gamma_n\,(2g_{m1} + 2g_{m7}) ,$$

再除以 $G_m^2 = g_{m1}^2$：

$$\overline{V_{n,in}^2} = \frac{8kT\gamma_n\,(g_{m1} + g_{m7})}{g_{m1}^2} = 8kT\cdot\frac23\left(\frac{1}{g_{m1}} + \frac{g_{m7}}{g_{m1}^2}\right).$$

$$
\begin{aligned}
8kT\cdot\tfrac23 &= 8(1.38\times10^{-23}\ \mathrm{J/K})(300\ \mathrm{K})\tfrac23 = 2.21\times10^{-20}\ \mathrm{J},\\
\frac{1}{g_{m1}} &= 193\ \Omega,\qquad \frac{g_{m7}}{g_{m1}^2} = \frac{2.85\times10^{-3}}{26.8\times10^{-6}}\ \Omega = 106\ \Omega,\\
\overline{V_{n,in}^2} &= (2.21\times10^{-20})(193 + 106)\ \mathrm{V^2/Hz} = (2.21\times10^{-20})(300)\ \mathrm{V^2/Hz} = 6.6\times10^{-18}\ \mathrm{V^2/Hz},\\
\sqrt{\overline{V_{n,in}^2}} &= 2.6\ \mathrm{nV/\sqrt{Hz}}.
\end{aligned}
$$

PMOS 电流源使噪声功率在输入对管的基础上增加约 55 %；增大 PMOS 的过驱动电压（overdrive voltage），即在相同电流下减小 $g_m$，可以降低这一部分，但代价是输出摆幅（output swing）减小。

### 结果

$$\overline{V_{n,in}^2} \approx 8kT\cdot\frac23\left(\frac{1}{g_{m1}} + \frac{g_{m7}}{g_{m1}^2}\right) \approx 6.6\times10^{-18}\ \mathrm{V^2/Hz},\quad\text{i.e. about } 2.6\ \mathrm{nV/\sqrt{Hz}},$$

其中 $g_{m1} = 5.18$ mS，$g_{m7} = 2.85$ mS。只有输入对管（$M_1$、$M_2$）和 PMOS 电流镜中的电流源管（$M_7$、$M_8$）有明显贡献；共源共栅器件 $M_3$–$M_6$ 带有大电阻负反馈，在低频下的贡献可以忽略。

**常见错误。** 像对待输入对管那样计入共源共栅管的噪声。它们的噪声大部分在自身很大的负反馈电阻中环流，被削弱约 $(g_mr_O)^2$ 倍。

**常见错误。** 把 PMOS 的贡献折算为 $4kT\gamma/g_{m7}$。$M_7$/$M_8$ 的噪声以电流形式到达输出端，要除以**输入**跨导：权重为 $g_{m7}/g_{m1}^2$。

**常见错误。** 用 $4kT$ 代替 $8kT$。两个输入器件和两个电流镜电流源各自独立地贡献噪声，因此每一项都出现两次。
