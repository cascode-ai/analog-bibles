# 详细步骤 - R359

**思路。** 唯一的噪声源是 $M_1$ 的沟道噪声；栅极接交流地、负载 $I_1$ 为理想时，其噪声电流只能流过 $r_O$。求出 $g_m$ 和 $r_O$，写出输出功率谱密度 $4kT\gamma g_mr_O^2$，再在 50 MHz 带宽内积分（由于忽略了电容，该功率谱密度是平坦的）。

### 第 1 步 — 小信号参数

$$\frac{W}{L} = \frac{50}{0.5} = 100.$$

$$
\begin{aligned}
g_m &= \sqrt{2\times(134\ \mu\mathrm{A/V^2})\times100\times(0.05\ \mathrm{mA})}\\
&= \sqrt{1.34\times10^{-6}\ \mathrm{A^2/V^2}}\\
&= 1.158\times10^{-3}\ \mathrm{S} = 1.158\ \mathrm{mS}.
\end{aligned}
$$

过驱动电压（overdrive voltage）为 $V_{ov} = 2I_D/g_m = 0.1\ \mathrm{mA}/1.158\ \mathrm{mS} = 86$ mV，因此只要漏极电压保持在约 86 mV 以上，$M_1$ 就处于饱和区（saturation region）。题目没有给出漏极电压，因此忽略 $g_m$ 中的因子 $1 + \lambda V_{DS}$。

$$r_O = \frac{1}{(0.1\ \mathrm{V^{-1}})\times(0.05\ \mathrm{mA})} = \frac{1}{5\times10^{-6}\ \mathrm{A/V}} = 200\ \mathrm{k\Omega}.$$

### 第 2 步 — 噪声电流的流向

栅极接交流地时，$g_mv_{gs} = 0$。噪声电流 $I_n$（$\overline{I_n^2} = 4kT\gamma g_m$）在漏极与地之间流动，与 $r_O$ 并联；$I_1$ 不承载交流电流，因此 $I_n$ 全部流过 $r_O$：

$$V_{n,out} = I_nr_O \quad\Longrightarrow\quad \overline{V_{n,out}^2} = 4kT\gamma g_m\,r_O^2 .$$

$r_O$ **不是**额外的噪声源：它描述的是同一沟道的沟道长度调制（channel-length modulation），而该沟道的噪声已经由 $4kT\gamma g_m$ 表示。

### 第 3 步 — 输出功率谱密度的数值

$$4kT\gamma = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K})\times\tfrac23 = 1.104\times10^{-20}\ \mathrm{J},$$

$$g_mr_O^2 = (1.158\times10^{-3}\ \mathrm{S})\times(2\times10^{5}\ \Omega)^2 = (1.158\times10^{-3})\times(4\times10^{10})\ \Omega = 4.63\times10^{7}\ \Omega,$$

$$\overline{V_{n,out}^2} = (1.104\times10^{-20}\ \mathrm{J})\times(4.63\times10^{7}\ \Omega) = 5.11\times10^{-13}\ \mathrm{V^2/Hz},$$

即均方根噪声密度为 $\sqrt{5.11\times10^{-13}} = 7.15\times10^{-7}\ \mathrm{V/\sqrt{Hz}} \approx 715\ \mathrm{nV/\sqrt{Hz}}$。

### 第 4 步 — 在 50 MHz 内积分

该功率谱密度是白噪声谱，因此积分等于功率谱密度乘以 $B = 50\ \mathrm{MHz} = 5\times10^7$ Hz：

$$
\begin{aligned}
\overline{V_{n,out,tot}^2} &= \overline{V_{n,out}^2}\times B = (5.11\times10^{-13}\ \mathrm{V^2/Hz})\times(5\times10^{7}\ \mathrm{Hz})\\
&= 2.56\times10^{-5}\ \mathrm{V^2},
\end{aligned}
$$

$$V_{n,out,rms} = \sqrt{2.56\times10^{-5}\ \mathrm{V^2}} = 5.06\times10^{-3}\ \mathrm{V} \approx 5.1\ \mathrm{mV}.$$

### 第 5 步 — 物理解释

输出噪声很大，是因为噪声电流流入了非常大的 $r_O = 200\ \mathrm{k\Omega}$；任何有限的负载都会对它分流，因此这是该晶体管在此偏置下**所能产生的最大输出噪声**。通过本征增益（intrinsic gain）$g_mr_O = 1.158\ \mathrm{mS}\times200\ \mathrm{k\Omega} = 232$ 折算到输入端，它就是普通的 $\overline{V_{n,out}^2}/(g_mr_O)^2 = 4kT\gamma/g_m = 9.5\times10^{-18}\ \mathrm{V^2/Hz}$（约 3.1 nV/√Hz），但题目要求的是**输出**噪声。在实际电路中，输出电容会限制带宽。

### 结果

$$g_m = 1.158\ \mathrm{mS},\qquad r_O = 200\ \mathrm{k\Omega},\qquad \overline{V_{n,out}^2} = 4kT\gamma g_mr_O^2 \approx 5.1\times10^{-13}\ \mathrm{V^2/Hz}\ (\approx 715\ \mathrm{nV/\sqrt{Hz}}),$$

$$V_{n,out,rms} = \sqrt{5.11\times10^{-13}\times5\times10^{7}}\ \mathrm{V} \approx \mathbf{5.1\ mV\ rms}$$

这是在 50 MHz 带宽内的结果。（若取 $\gamma = 1$，约为 6.2 mV rms。）

**常见错误。** 加上一个噪声源 $4kT/r_O$。输出电阻（output resistance）并不是一个独立的物理电阻，加上它的“噪声”会把沟道噪声计算两次。

**常见错误。** 给出的是输入参考噪声（input-referred noise），即 $\approx 3.1\ \mathrm{nV/\sqrt{Hz}}$（在 50 MHz 内约 22 μV rms），而不是输出噪声；或者使用了一个并不存在的负载电阻。输出端唯一的电阻是 $r_O$。

**常见错误。** 忘记开平方（把 $2.56\times10^{-5}$ 当作以伏特为单位的值），或者乘以 $2\pi\times50$ MHz。功率谱密度是“每赫兹”的量，因此应乘以以赫兹为单位的带宽。
