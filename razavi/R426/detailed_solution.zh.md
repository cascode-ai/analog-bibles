# 详细步骤 - R426

**思路。** 该运放是一个套筒式共源共栅（telescopic cascode）级，采用共源共栅电流镜（cascode current mirror）负载和单端输出，因此其开环增益（open-loop gain）等于短路跨导 $G_m \approx g_{m1}$ 乘以输出电阻（output resistance）$R_{out}$，后者是向下看的 NMOS 共源共栅结构与向上看的 PMOS 共源共栅结构的并联。

### 第 1 步 — 小信号参数

开环增益是从 $v_{in1} - v_{in2}$ 到 $v_{out}$ 的增益，不考虑图中画出的反馈连接。所有支路的电流均为 0.5 mA，且 $\gamma = 0$。

**NMOS**（$W/L = 100/0.5 = 200$）：

$$
\begin{aligned}
g_{m1\text{–}4} &= \sqrt{2(134\ \mu\mathrm{A/V^2})(200)(0.5\ \mathrm{mA})} = \sqrt{26.8\times10^{-6}}\ \mathrm{S} = 5.18\ \mathrm{mS},\\
r_{O1\text{–}4} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k\Omega}.
\end{aligned}
$$

**PMOS**（$W/L = 106/0.5 = 212$）：

$$
\begin{aligned}
g_{m5\text{–}8} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})(212)(0.5\ \mathrm{mA})} = \sqrt{8.14\times10^{-6}}\ \mathrm{S} = 2.85\ \mathrm{mS}\quad(|V_{OD}| = 0.35\ \mathrm{V}),\\
r_{O5\text{–}8} &= \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k\Omega}.
\end{aligned}
$$

### 第 2 步 — 输出电阻

**向下看**进 $M_4$ 的漏极（输入端接交流地），共源共栅结构给出 $\approx g_{m4}r_{O4}R_S$，其中 $R_S$ 是 $M_4$ 下方的电阻。这里有两个效应：

- $M_2$ 的源极看到的是 $M_1$ 的源极（约 $1/g_{m1}$），因此 $M_2$ 带有源极负反馈（source degeneration），$R_S \approx 2r_{O2}$。
- 沿这条通路向下的测试电流不能流入理想尾电流源，因此它经 $M_1$ 和 $M_3$ 向上流入电流镜的二极管连接一侧；电流镜复制这一电流，于是测试源必须提供向下通路电流的**两倍**。

两个因子 2 相互抵消：

$$R_{down} \approx g_{m4}r_{O4}\,\frac{2r_{O2}}{2} = g_{m4}r_{O4}r_{O2} = (5.18\ \mathrm{mS})(20\ \mathrm{k\Omega})(20\ \mathrm{k\Omega}) = 2.07\ \mathrm{M\Omega}.$$

**向上看**进 $M_6$ 的漏极：其栅极由二极管连接一侧固定（这里为交流地），源极由 $r_{O8}$ 提供负反馈：

$$R_{up} \approx g_{m6}r_{O6}r_{O8} = (2.85\ \mathrm{mS})(10\ \mathrm{k\Omega})(10\ \mathrm{k\Omega}) = 0.285\ \mathrm{M\Omega}.$$

$$R_{out} = R_{down}\parallel R_{up} = \frac{2.07\times0.285}{2.07 + 0.285}\ \mathrm{M\Omega} = 0.251\ \mathrm{M\Omega} = 251\ \mathrm{k\Omega}.$$

PMOS 一侧起主导作用：其 $r_O$ 只有一半（$\lambda$ 更大），$g_m$ 也更低。

### 第 3 步 — 带电流镜时的跨导

输出端短路，两个栅极加 $\pm v_d/2$，P 为虚地（virtual ground）；$M_1$ 的 $+g_{m1}v_d/2$ 流过 $M_3$，并由 $M_8$/$M_6$ 镜像到输出端，而 $M_2$ 经 $M_4$ 从输出端抽取的电流减少 $g_{m1}v_d/2$。总短路电流为 $g_{m1}v_d$：

$$G_m \approx g_{m1} = 5.18\ \mathrm{mS}.$$

### 第 4 步 — 开环增益

$$
\begin{aligned}
A_v &= G_mR_{out} \approx g_{m1}\Big[(g_{m4}r_{O4}r_{O2})\parallel(g_{m6}r_{O6}r_{O8})\Big]\\
&= (5.18\ \mathrm{mS})(251\ \mathrm{k\Omega}) \approx 1300 .
\end{aligned}
$$

若保留共源共栅公式中的“+1”项和附加的 $r_O$ 项，则 $R_{down} = 2.07 + 0.04 = 2.11\ \mathrm{M\Omega}$，$R_{up} = 0.285 + 0.02 = 0.305\ \mathrm{M\Omega}$，因此 $R_{out} = 267\ \mathrm{k\Omega}$，$A_v \approx 1380$。两个值都可以作为开环增益，约为 1300–1400（大约 62–63 dB）。

### 结果

$$A_v \approx g_{m1}\Big[(g_{m4}r_{O4}r_{O2})\parallel(g_{m6}r_{O6}r_{O8})\Big] \approx 5.18\ \mathrm{mS}\times(2.07\ \mathrm{M\Omega}\parallel0.285\ \mathrm{M\Omega}) \approx 1300$$

（若保留共源共栅输出电阻中较小的项，约为 1380）。

**常见错误。** 把输出电阻取为 $r_{O2}\parallel r_{O6}$（或类似形式），这只能得到约 30–40 的增益。两侧都是共源共栅结构，各自呈现约 $g_mr_Or_O$ 的电阻。

**常见错误。** 把增益减半（≈ 650），好像输出只是差分输出的一侧。电流镜把 $M_1$ 的信号电流送到输出端，因此到达输出端的是完整的 $g_{m1}v_d$。

**常见错误。** 对 PMOS 共源共栅结构使用 NMOS 的迁移率（mobility）或 $\lambda$。取 $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$、$W/L = 212$、$\lambda_p = 0.2\ \mathrm{V^{-1}}$，PMOS 一侧的 $g_m = 2.85$ mS，$r_O = 10\ \mathrm{k\Omega}$，它决定了 $R_{out}$ 的大部分。
