# 详细步骤 - R175

**思路。** 输入器件是匹配的，因此共模输入使两支电流变化相同；这些相等的电流流入不相等的二极管负载 $1/g_{m3} \neq 1/g_{m4}$，从而产生差分输出。计算负载电阻（电流相等，宽度不同）、差模增益以及计入尾电流源负反馈（degeneration）因子 $1 + 2g_mR_{SS}$ 的共模到差模增益，然后取两者之比。

### 第 1 步 — 电流与跨导

每边流过 $0.25$ mA，而二极管连接的负载流过其所在支路的电流，因此**两个负载都流过 0.25 mA**；宽度失配改变的是它们的 $V_{GS}$，而不是电流。

**输入器件**（$\mu_nC_{ox}W/L = 13.4\ \mathrm{mA/V^2}$）：

$$g_{m1} = g_{m2} = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.25\ \mathrm{mA})} = 2.59\ \mathrm{mS}.$$

**负载**（$L = 0.5\ \mu$m）：

$$
\begin{aligned}
g_{m3} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})\left(\tfrac{10}{0.5}\right)(0.25\ \mathrm{mA})} = \sqrt{3.84\times10^{-7}}\ \mathrm{S} = 0.620\ \mathrm{mS}, & \frac{1}{g_{m3}} &= 1.614\ \mathrm{k}\Omega,\\
g_{m4} &= \sqrt{2(38.4\ \mu\mathrm{A/V^2})\left(\tfrac{11}{0.5}\right)(0.25\ \mathrm{mA})} = \sqrt{4.224\times10^{-7}}\ \mathrm{S} = 0.650\ \mathrm{mS}, & \frac{1}{g_{m4}} &= 1.539\ \mathrm{k}\Omega .
\end{aligned}
$$

**负载失配：**

$$\Delta R = \frac{1}{g_{m3}} - \frac{1}{g_{m4}} = 1.614 - 1.539 = 0.075\ \mathrm{k}\Omega = 75\ \Omega ,$$

约为平均负载（1.576 kΩ）的 4.8 %，大致是 10 % 宽度失配的**一半**，因为电流相等时 $1/g_m \propto 1/\sqrt{W}$（$\sqrt{1.1} = 1.049$）。

**尾阻抗**（$\lambda = 0.1\ \mathrm{V^{-1}}$，0.5 mA）：

$$R_{SS} = \frac{1}{\lambda I_{SS}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .$$

### 第 2 步 — 差模增益

对于 $\pm v_d/2$，输入电流分别变化 $\pm g_{m1}v_d/2$，$P$ 为交流地，每个电流流入各自的二极管负载：

$$
\begin{aligned}
v_X &= -\frac{g_{m1}v_d}{2}\cdot\frac{1}{g_{m3}}, \qquad v_Y = +\frac{g_{m1}v_d}{2}\cdot\frac{1}{g_{m4}},\\
|A_{DM}| &= \left|\frac{v_X - v_Y}{v_d}\right| = g_{m1}\,\frac{1/g_{m3} + 1/g_{m4}}{2} = (2.59\ \mathrm{mS})(1.576\ \mathrm{k}\Omega) = 4.08 .
\end{aligned}
$$

### 第 3 步 — 共模到差模增益

对于共模输入 $v_{cm}$：两个相等的电流源 $g_{m1}(v_{cm} - v_P)$ 分别从 $X$ 和 $Y$ 接到 $P$，$R_{SS}$ 从 $P$ 接地，负载 $1/g_{m3}$ 接在 $X$，$1/g_{m4}$ 接在 $Y$。

<!-- diagram: diagram-01.cir -->

两个晶体管流过相同的电流 $i$，$R_{SS}$ 流过 $2i$：

$$
\begin{aligned}
v_P &= 2iR_{SS}, \qquad i = g_{m1}(v_{cm} - 2iR_{SS}),\\
i &= \frac{g_{m1}v_{cm}}{1 + 2g_{m1}R_{SS}} .
\end{aligned}
$$

相等的电流流过不相等的负载：

$$
\begin{aligned}
v_X - v_Y &= -\frac{i}{g_{m3}} + \frac{i}{g_{m4}} = -i\,\Delta R,\\
|A_{CM-DM}| &= \frac{g_{m1}\Delta R}{1 + 2g_{m1}R_{SS}} .
\end{aligned}
$$

数值计算：

$$
\begin{aligned}
1 + 2g_{m1}R_{SS} &= 1 + 2(2.59\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 1 + 103.5 = 104.5,\\
g_{m1}\Delta R &= (2.59\ \mathrm{mS})(75.1\ \Omega) = 0.194,\\
|A_{CM-DM}| &= \frac{0.194}{104.5} = 1.86\times10^{-3}.
\end{aligned}
$$

（与输入对中的阈值失配不同，这种失配**不会**被抵消：两个负载流过相同的电流，但宽度不同，因此在任何共模电流下它们的电阻都不相等。）

### 第 4 步 — 共模抑制比

$$\mathrm{CMRR} = \frac{|A_{DM}|}{|A_{CM-DM}|} = \frac{4.08}{1.86\times10^{-3}} \approx 2.19\times10^3,$$

即 $20\log_{10}(2190) \approx 66.8$ dB。写成紧凑形式，

$$\mathrm{CMRR} = \frac{(1/g_{m3} + 1/g_{m4})/2}{\Delta R}\left(1 + 2g_{m1}R_{SS}\right) \approx \frac{1}{0.048}\times 104.5 \approx 2.2\times10^3 :$$

即相对负载失配的倒数（约 21）乘以尾电流源的负反馈因子（104.5）。

### 结果

$$\mathrm{CMRR} = \frac{g_{m1}(1/g_{m3} + 1/g_{m4})/2}{g_{m1}\Delta R/(1 + 2g_{m1}R_{SS})} \approx \frac{4.08}{1.86\times10^{-3}} \approx 2{,}200\quad(\approx 67\ \mathrm{dB}),$$

其中 $1/g_{m3} = 1.614$ kΩ，$1/g_{m4} = 1.539$ kΩ（$\Delta R = 75\ \Omega$，约 4.8 %），$g_{m1} = 2.59$ mS，$R_{SS} = 20$ kΩ。

**常见错误。** 把负载失配取为等于 10 % 的宽度失配，这会使共模抑制比减半（≈ 1,050–1,100）。电流相等时 $1/g_m \propto 1/\sqrt{W}$，因此 10 % 的宽度误差只造成约 4.8 % 的电阻误差。

**常见错误。** 认为较宽的负载 $M_4$ 多流过 10 % 的电流。二极管连接负载的电流由其下方的输入器件决定，只有其 $V_{GS}$ 会随之调整。

**常见错误。** 断言共模抑制比为无穷大（对于采用二极管负载、输入对存在阈值失配的情形，这确实可能发生），或者漏掉因子 $1 + 2g_{m1}R_{SS}$。这里负载电阻确实不同，而尾阻抗决定了共模电流的大小。
