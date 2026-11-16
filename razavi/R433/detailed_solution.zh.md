# 详细步骤 - R433

**思路。** 用漏极电流 $4kT\cdot\tfrac23g_m$ 表示每个晶体管的沟道噪声。把输出端短路，确定每个噪声电流有多少到达输出端，把功率相加，再除以运放跨导（transconductance）$G_m \approx g_{m1}$ 的平方。输入对管和 PMOS 电流源 $M_7$、$M_8$ 起主导作用；四个共源共栅器件在低频下可以忽略。

### 第 1 步 — 噪声模型与跨导

每个晶体管的 $\overline{I_n^2} = 4kT\gamma_n\,g_m$，其中 $\gamma_n = \tfrac23$，$T = 300$ K；这个热噪声系数不是题目中的体效应（body effect）参数 $\gamma = 0$。所有噪声源互不相关。每条支路的电流为 0.5 mA，所有器件的 $W/L = 100/0.5 = 200$：

$$
\begin{aligned}
g_{m1} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(200)(0.5\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{S} = 5.18\ \mathrm{mS},\qquad \frac{1}{g_{m1}} = 193\ \Omega,\\
g_{m7} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(200)(0.5\ \mathrm{mA})} = \sqrt{7.68\times10^{-6}}\ \mathrm{S} = 2.77\ \mathrm{mS}.
\end{aligned}
$$

### 第 2 步 — 运放的跨导

输出端短路、输入端加 $\pm v_d/2$ 时，$M_1$ 的 $g_{m1}v_d/2$ 经 $M_3$、$M_5$ 流入左侧支路，并由低电压共源共栅电流镜（low-voltage cascode mirror）在输出支路中复现（$M_7$ 通过节点 X，即 $M_3$/$M_5$ 的漏极，进行检测；$M_8$ 进行复制），而 $M_2$ 从输出端抽取的电流减少 $g_{m1}v_d/2$：

$$G_m \approx g_{m1} .$$

### 第 3 步 — 各噪声电流如何到达输出端

**$M_1$、$M_2$。** 尾电流源为理想时，$I_{n1}$ 的一半经 $M_2$ 直接流到输出端，另一半流经 $M_1$ 所在支路，并被镜像到输出端：$I_{n1}$ 全部到达；$I_{n2}$ 也是如此。贡献为 $4kT\gamma_n(2g_{m1})$。

**$M_7$。** 左侧支路的电流由下方的高阻抗叠层（$M_3$ 叠在 $M_1$ 上）决定，因此 $M_7$ 的噪声电流被 $M_7$ 自身抵消：X 点电压变化 $I_{n7}/g_{m7}$。X 同时驱动 $M_8$，后者把这一电压变化重新转换为电流 $g_{m8}(I_{n7}/g_{m7}) = I_{n7}$，经 $M_6$ 送到输出端。贡献为 $4kT\gamma_ng_{m7}$。

**$M_8$。** 其噪声电流经共源共栅管 $M_6$ 直接流入输出端。贡献为 $4kT\gamma_ng_{m8}$，其中 $g_{m8} = g_{m7}$。

**共源共栅管 $M_3$–$M_6$。** 每个共源共栅管的源极都看到一个很大的电阻（其下方的 $r_O$），因此噪声电流大部分在局部环流。例如，$M_5$ 的噪声使其源极电压变化约 $I_{n5}/g_{m5}$，而 X 只变化约 $I_{n5}/(g_{m5}g_{m7}r_{O7})$，因此只有 $\approx 1/(g_mr_O)$ 的部分到达输出端。其功率权重约为输入器件的 $10^{-3}$–$10^{-4}$ 量级：在低频下可以忽略。

**尾电流源。** 其噪声是共模（common-mode）噪声；直接到达的一半与经镜像的一半在输出端相互抵消。

### 第 4 步 — 输入参考噪声

$$\overline{I_{n,out}^2} = 4kT\gamma_n\,(2g_{m1} + 2g_{m7}),$$

$$\overline{V_{n,in}^2} = \frac{\overline{I_{n,out}^2}}{g_{m1}^2} = 8kT\cdot\frac23\left(\frac{1}{g_{m1}} + \frac{g_{m7}}{g_{m1}^2}\right).$$

$$
\begin{aligned}
8kT\cdot\tfrac23 &= 8(1.38\times10^{-23})(300)\tfrac23\ \mathrm{J} = 2.21\times10^{-20}\ \mathrm{J},\\
\frac{g_{m7}}{g_{m1}^2} &= \frac{2.77\times10^{-3}}{26.8\times10^{-6}}\ \Omega = 103\ \Omega,\\
\frac{1}{g_{m1}} + \frac{g_{m7}}{g_{m1}^2} &= 193 + 103 = 296\ \Omega,\\
\overline{V_{n,in}^2} &= (2.21\times10^{-20})(296)\ \mathrm{V^2/Hz} = 6.5\times10^{-18}\ \mathrm{V^2/Hz},\\
\sqrt{\overline{V_{n,in}^2}} &= 2.56\ \mathrm{nV/\sqrt{Hz}}.
\end{aligned}
$$

PMOS 电流源使噪声功率在输入对管的基础上增加约 53 %。

### 结果

$$\overline{V_{n,in}^2} \approx 8kT\cdot\frac23\left(\frac{1}{g_{m1}} + \frac{g_{m7}}{g_{m1}^2}\right) \approx 6.5\times10^{-18}\ \mathrm{V^2/Hz}\quad(\approx 2.56\ \mathrm{nV/\sqrt{Hz}}),$$

其中 $g_{m1} = 5.18$ mS，$g_{m7} = 2.77$ mS。噪声来源是输入对管 $M_1$、$M_2$ 和 PMOS 电流源 $M_7$、$M_8$；共源共栅管 $M_3$–$M_6$ 在低频下可以忽略。

**常见错误。** 把共源共栅管当作主要噪声源。它们的噪声电流受到大电阻的负反馈作用，到达输出端时被削弱约 $g_mr_O$ 倍。

**常见错误。** 把 PMOS 项的权重取为 $4kT\gamma/g_{m7}$。它们的噪声以电流形式到达输出端，要除以**输入**跨导的平方：每个器件贡献 $4kT\gamma g_{m7}/g_{m1}^2$。

**常见错误。** 用 $W/L = 100$ 代替 $100\ \mu\mathrm{m}/0.5\ \mu\mathrm{m} = 200$，这会使两个跨导都降低 $\sqrt2$ 倍，得到约 3.0 nV/√Hz。
