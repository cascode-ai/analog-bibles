# 详细步骤 - R361

**思路。** 两个沟道噪声电流都在输出节点流入与信号电流 $g_{m1}v_{in}$ 相同的电阻 $r_{O1}\parallel r_{O2}$，因此折算到输入端时各自除以 $g_{m1}^2$：$\overline{V_{n,in}^2} = 4kT\gamma(1/g_{m1} + g_{m2}/g_{m1}^2)$。求出 $g_{m1}$ 和 $g_{m2}$ 并代入计算。

### 第 1 步 — 跨导（transconductance）

两个器件的 $W/L = 50/0.5 = 100$，电流均为 $0.5$ mA，$M_1$ 用 $\mu_nC_{ox}$，$M_2$ 用 $\mu_pC_{ox}$：

$$
\begin{aligned}
g_{m1} &= \sqrt{2\times(134\ \mu\mathrm{A/V^2})\times100\times(0.5\ \mathrm{mA})} = \sqrt{1.34\times10^{-5}\ \mathrm{A^2/V^2}} = 3.661\ \mathrm{mS},\\
g_{m2} &= \sqrt{2\times(38.4\ \mu\mathrm{A/V^2})\times100\times(0.5\ \mathrm{mA})} = \sqrt{3.84\times10^{-6}\ \mathrm{A^2/V^2}} = 1.960\ \mathrm{mS}.
\end{aligned}
$$

过驱动电压（overdrive voltage）分别为 $V_{ov1} = 2I_D/g_{m1} = 1\ \mathrm{mA}/3.661\ \mathrm{mS} = 0.27$ V 和 $|V_{ov2}| = 1\ \mathrm{mA}/1.960\ \mathrm{mS} = 0.51$ V；由于空穴迁移率（mobility）较低，PMOS 的过驱动电压较大、$g_m$ 较小。当输出电压介于 $V_{ov1} = 0.27$ V 与 $V_{DD} - |V_{ov2}| = V_{DD} - 0.51$ V 之间时，两个器件都处于饱和区，与题目所述一致。

### 第 2 步 — 噪声模型与输出噪声

令 $v_{in} = 0$，且 $M_2$ 的栅极接固定的 $V_b$，则两个受控源都为零，输出端看到接到交流地的 $r_{O1}\parallel r_{O2}$ 以及两个噪声电流 $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$ 和 $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$。两者都流过 $R_{out} = r_{O1}\parallel r_{O2}$，且互不相关，因此功率相加：

$$\overline{V_{n,out}^2} = 4kT\gamma\,(g_{m1} + g_{m2})\,R_{out}^2 .$$

### 第 3 步 — 折算到输入端

由 $|A_v| = g_{m1}R_{out}$ 得：

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{4kT\gamma(g_{m1} + g_{m2})R_{out}^2}{g_{m1}^2R_{out}^2}\\
&= 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right).
\end{aligned}
$$

$R_{out}$ 被约去，这一点很幸运，因为题目没有给出 $\lambda$。负载的噪声要除以 $g_{m1}^2$ 而不是 $g_{m2}^2$，因为它与信号电流 $g_{m1}v_{in}$ 一样进入输出节点。

### 第 4 步 — 数值计算

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J}.$$

利用第 1 步的 $g_{m1}^2 = 1.34\times10^{-5}\ \mathrm{S^2}$，把两项写成等效电阻：

$$
\begin{aligned}
\frac{1}{g_{m1}} &= \frac{1}{3.661\times10^{-3}\ \mathrm{S}} = 273.2\ \Omega,\\
\frac{g_{m2}}{g_{m1}^2} &= \frac{1.960\times10^{-3}\ \mathrm{S}}{1.34\times10^{-5}\ \mathrm{S^2}} = 146.2\ \Omega,\\
\text{sum} &= 273.2 + 146.2 = 419.4\ \Omega ,
\end{aligned}
$$

$$\overline{V_{n,in}^2} = (1.104\times10^{-20}\ \mathrm{J})\times(419.4\ \Omega) = 4.63\times10^{-18}\ \mathrm{V^2/Hz},$$

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{4.63\times10^{-18}}\ \mathrm{V/\sqrt{Hz}} = 2.15\times10^{-9}\ \mathrm{V/\sqrt{Hz}} = 2.15\ \mathrm{nV/\sqrt{Hz}}.$$

### 第 5 步 — 物理解释

负载项与输入器件项之比为

$$\frac{g_{m2}/g_{m1}^2}{1/g_{m1}} = \frac{g_{m2}}{g_{m1}} = \sqrt{\frac{\mu_pC_{ox}}{\mu_nC_{ox}}} = \sqrt{\frac{38.4}{134}} = 0.535,$$

因此 PMOS 负载使 $M_1$ 的噪声功率增加约 54 %；在尺寸和电流相同的情况下，它的噪声较小只是因为空穴迁移率较低。减小 $(W/L)_2$（增大过驱动电压、减小 $g_{m2}$）可以进一步降低负载噪声，但要牺牲电压余度（headroom）。

### 结果

$$\overline{V_{n,in}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right) = 1.104\times10^{-20}\,(273.2 + 146.2)\ \mathrm{V^2/Hz} \approx 4.63\times10^{-18}\ \mathrm{V^2/Hz},$$

即**约 2.15 nV/√Hz**，其中 $g_{m1} = 3.66$ mS，$g_{m2} = 1.96$ mS。$M_2$ 使 $M_1$ 的噪声功率增加约 54 %，$r_{O1}\parallel r_{O2}$ 被约去。（若取 $\gamma = 1$，结果约为 2.64 nV/√Hz。）

**常见错误。** 略去负载管，得到 $\sqrt{1.104\times10^{-20}\times273.2} \approx 1.74\ \mathrm{nV/\sqrt{Hz}}$，偏低约 19 %。电流源负载会把它自己的沟道噪声直接注入输出节点。

**常见错误。** 把 $M_2$ 的噪声折算为 $4kT\gamma/g_{m2}$，仿佛 $M_2$ 是输入器件。它的噪声电流应除以 $g_{m1}$，得到 $4kT\gamma g_{m2}/g_{m1}^2$。

**常见错误。** 对 PMOS 器件使用 $\mu_nC_{ox}$，得到 $g_{m2} = g_{m1}$ 以及 $\overline{V_{n,in}^2} = 2\times4kT\gamma/g_{m1} = 6.0\times10^{-18}\ \mathrm{V^2/Hz}$（2.46 nV/√Hz）。
