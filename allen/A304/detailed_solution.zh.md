# 详细步骤 - A304

把每个增益增强型共源共栅视为调节型共源共栅（regulated cascode）：增强放大器把共源共栅输出电阻乘以其增益 $A$，并使共源共栅管源极成为极低阻节点。于是输出电阻为受调节的 p 沟道共源共栅（M9 叠在 M11 上）与受调节的 n 沟道共源共栅（M7 叠在折叠节点上）的并联，增益等于短路跨导乘以 $R_{out}$，主极点和 GB 由 $R_{out}$ 和 $C_L$ 得到。按教材的调节型共源共栅处理方法（题给的上方放大器增益正是以此为前提），M10/M11 的栅极视为交流地。

### 第 1 步 — 增强放大器增益

$$
A_{up}=0.5g_{mN}r_{dsN}=0.5(100\ \mu\mathrm S)(2\ \mathrm{M\Omega})=100,\qquad
A_{low}=0.5g_{mP}r_{dsP}=0.5(25\ \mu\mathrm S)(0.5\ \mathrm{M\Omega})=6.25 .
$$

### 第 2 步 — 输出电阻

向上看：M9（p）叠在 M11（p）上。向下看：M7（n）叠在折叠节点上，该节点上 M1 的漏极（$r_{ds1}$，p 沟道）与电流沉 M5（$r_{ds5}$，n 沟道）并联：

$$
\begin{aligned}
R_{up}&\approx A_{up}g_{m9}r_{ds9}r_{ds11}=100(25\ \mu\mathrm S)(0.5\ \mathrm{M\Omega})(0.5\ \mathrm{M\Omega})=0.625\ \mathrm{G\Omega},\\
R_{down}&\approx A_{low}g_{m7}r_{ds7}(r_{ds1}\parallel r_{ds5})=6.25(100\ \mu\mathrm S)(2\ \mathrm{M\Omega})(0.4\ \mathrm{M\Omega})=0.50\ \mathrm{G\Omega},\\
R_{out}&=0.625\parallel0.50=0.278\ \mathrm{G\Omega}.
\end{aligned}
$$

### 第 3 步 — 差模增益

输出短路时，从每个折叠节点看到的受调节共源共栅源极约为 $1/[g_{mN}(1+A_{low})]=1.4$ kΩ，远小于 $r_{ds1}\parallel r_{ds5}=0.4$ MΩ，因此每一半输入电流几乎全部到达输出（M1 的经 M6 和 M8–M11 电流镜，M2 的经 M7）。短路跨导因而为 $g_{m1}=g_{mP}$（p 沟道输入对）：

$$
A_v=g_{mP}R_{out}=(25\ \mu\mathrm S)(0.278\ \mathrm{G\Omega})=6.9\times10^3\ \mathrm{V/V}.
$$

### 第 4 步 — 主极点与 GB

输出是唯一的高阻节点：

$$
p_{dom}=-\frac1{R_{out}C_L}=-\frac1{(0.278\ \mathrm{G\Omega})(10\ \mathrm{pF})}=-360\ \mathrm{rad/s}\ (57\ \mathrm{Hz}),
$$
$$
GB=A_v|p_{dom}|=\frac{g_{mP}}{C_L}=\frac{25\ \mu\mathrm S}{10\ \mathrm{pF}}=2.5\times10^6\ \mathrm{rad/s}\ (0.40\ \mathrm{MHz}).
$$

用 $1+A$ 代替 $A$，得 $R_{out}\approx0.30$ GΩ，$A_v\approx7.6\times10^3$，$p_{dom}\approx-330$ rad/s；GB 不变。

### 第 5 步 — 按图中实际连接

以上结果假设 M10/M11 的栅极为交流地。按图中连接，单个上方放大器同时驱动 M8 和 M9，而 M10/M11 的栅极接 M8 的漏极。输出变化时，该放大器也移动 M8 的栅极；由于左支路电流固定，电流镜栅极随之移动，使 M11 的等效输出电导增大约 $1+A_{up}$ 倍，抵消了上方的增强。对该连接作精确小信号分析，得 $R_{out}\approx7.2$ MΩ，$A_v\approx180$，$p_{dom}\approx-1.4\times10^4$ rad/s（2.2 kHz），GB 同为 2.5 Mrad/s；若 M8 的栅极接固定偏置，则回到上面的数值。
