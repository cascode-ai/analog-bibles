# 详细步骤 - R328

**思路。** 把 $M_1$ 的沟道噪声和负载电阻的噪声都建模为输出节点处的电流源，用输出噪声功率谱密度除以增益的平方，再把（白噪声形式的）输入参考功率谱密度在 100 MHz 带宽内积分。

### 第 1 步 — 小信号参数

$$\frac{W}{L} = \frac{50\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 100 .$$

$$
\begin{aligned}
g_m &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D}\\
&= \sqrt{2\times(134\ \mu\mathrm{A/V^2})\times100\times(1\ \mathrm{mA})}\\
&= \sqrt{2.68\times10^{-5}\ \mathrm{A^2/V^2}}\\
&= 5.177\times10^{-3}\ \mathrm{S} = 5.18\ \mathrm{mS}.
\end{aligned}
$$

过驱动电压（overdrive voltage）为 $V_{ov} = 2I_D/g_m = (2\times1\ \mathrm{mA})/(5.177\ \mathrm{mS}) = 0.386$ V。漏极电压为 $V_{DD} - I_DR_D = V_{DD} - 2$ V，因此只要 $V_{DD} - 2\ \mathrm{V} > 0.386$ V，$M_1$ 就工作在饱和区（saturation region）；题目没有给出电源电压，这里假设该条件成立。

题目没有给出 $\lambda$，因此取 $r_O \to \infty$（第 3 步将说明 $r_O$ 不会改变结果）：

$$|A_v| = g_mR_D = (5.177\ \mathrm{mS})(2\ \mathrm{k\Omega}) = 10.35 .$$

### 第 2 步 — 噪声源与输出噪声功率谱密度

电路中有两个相互独立的热噪声源：

- $M_1$ 的沟道噪声，即漏源之间的电流 $\overline{I_{n,M1}^2} = 4kT\gamma g_m$；
- $R_D$ 的噪声，写成诺顿形式就是与 $R_D$ 并联的电流 $\overline{I_{n,R}^2} = 4kT/R_D$（等价于功率谱密度为 $4kTR_D$ 的串联电压）。

令 $v_{in} = 0$，则受控源 $g_mv_{gs}$ 为零，$V_{DD}$ 为交流地，因此两个噪声电流都从输出节点流向地，并且流经同一个电阻 $R_D$。

<!-- diagram: diagram-01.cir -->

两个噪声源互不相关，因此它们的功率直接相加：

$$
\begin{aligned}
\overline{V_{n,out}^2} &= \left(\overline{I_{n,M1}^2} + \overline{I_{n,R}^2}\right)R_D^2\\
&= \left(4kT\gamma g_m + \frac{4kT}{R_D}\right)R_D^2\\
&= 4kT\gamma g_mR_D^2 + 4kTR_D .
\end{aligned}
$$

### 第 3 步 — 将噪声折算到输入端

除以增益的平方：

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{V_{n,out}^2}}{A_v^2}\\
&= \frac{4kT\gamma g_mR_D^2 + 4kTR_D}{g_m^2R_D^2}\\
&= \frac{4kT\gamma}{g_m} + \frac{4kT}{g_m^2R_D}.
\end{aligned}
$$

两个噪声电流的功率谱密度都只是被 $g_m^2$ 除：漏极处的噪声电流与输入电压产生的电流 $g_mv_{in}$ 无法区分。$R_D$ 越大，负载项反而**越小**，因为增益与 $R_D$ 成正比，而电阻的噪声电压只与 $\sqrt{R_D}$ 成正比。

- **$r_O$ 不影响结果。** 若计入无噪声的 $r_O$，输出功率谱密度变为 $(4kT\gamma g_m + 4kT/R_D)(R_D\parallel r_O)^2$，增益变为 $g_m(R_D\parallel r_O)$，于是 $(R_D\parallel r_O)^2$ 被约去，$\overline{V_{n,in}^2}$ 不变。
- **输入参考功率谱密度是平坦的。** 信号电流和噪声电流都注入同一个输出节点，因此任何输出电容对它们的滤波作用都完全相同，除以增益时这种滤波作用就抵消了。

### 第 4 步 — 功率谱密度的数值

$$4kT = 4\times(1.38\times10^{-23}\ \mathrm{J/K})\times(300\ \mathrm{K}) = 1.656\times10^{-20}\ \mathrm{J}.$$

把每一项写成等效电阻（乘以 $4kT$ 即得到以 V²/Hz 为单位的值）：

$$
\begin{aligned}
\frac{\gamma}{g_m} &= \frac{2/3}{5.177\times10^{-3}\ \mathrm{S}} = 128.8\ \Omega,\\
\frac{1}{g_m^2R_D} &= \frac{1}{(2.68\times10^{-5}\ \mathrm{S^2})\times(2000\ \Omega)} = \frac{1}{0.0536\ \mathrm{S}} = 18.66\ \Omega,\\
\text{sum} &= 128.8 + 18.66 = 147.4\ \Omega .
\end{aligned}
$$

$$\overline{V_{n,in}^2} = (1.656\times10^{-20}\ \mathrm{J})\times(147.4\ \Omega) = 2.44\times10^{-18}\ \mathrm{V^2/Hz}.$$

该级的噪声与输入端一个 147 Ω 电阻的噪声相当。晶体管贡献了 $128.8/147.4 = 87\%$ 的噪声功率，负载贡献了 $18.66/147.4 = 13\%$。均方根噪声密度为

$$\sqrt{\overline{V_{n,in}^2}} = \sqrt{2.44\times10^{-18}\ \mathrm{V^2/Hz}} = 1.56\times10^{-9}\ \mathrm{V/\sqrt{Hz}} = 1.56\ \mathrm{nV/\sqrt{Hz}}.$$

### 第 5 步 — 在 100 MHz 带宽内积分

输入参考功率谱密度是白噪声谱，因此它在 $B = 100\ \mathrm{MHz} = 10^8$ Hz 内的积分就等于功率谱密度乘以带宽：

$$
\begin{aligned}
\overline{V_{n,in,tot}^2} &= \int_0^{B}\overline{V_{n,in}^2}\,df = \overline{V_{n,in}^2}\times B\\
&= (2.44\times10^{-18}\ \mathrm{V^2/Hz})\times(10^{8}\ \mathrm{Hz})\\
&= 2.44\times10^{-10}\ \mathrm{V^2},
\end{aligned}
$$

$$V_{n,in,rms} = \sqrt{2.44\times10^{-10}\ \mathrm{V^2}} = 1.56\times10^{-5}\ \mathrm{V} \approx 15.6\ \mu\mathrm{V}.$$

也可以这样算：$1.56\ \mathrm{nV/\sqrt{Hz}}\times\sqrt{10^8\ \mathrm{Hz}} = 1.56\ \mathrm{nV}\times10^4 = 15.6\ \mu\mathrm{V}$。

### 结果

$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_m} + \frac{1}{g_m^2R_D}\right) = 1.656\times10^{-20}\,(128.8 + 18.7)\ \mathrm{V^2/Hz} \approx 2.44\times10^{-18}\ \mathrm{V^2/Hz}\ \ (\approx 1.56\ \mathrm{nV/\sqrt{Hz}}),$$

其中 $g_m = 5.18$ mS。在 100 MHz 带宽内，总的输入参考热噪声为

$$V_{n,in,rms} = \sqrt{2.44\times10^{-18}\times10^{8}}\ \mathrm{V} \approx \mathbf{15.6\ \mu V\ rms}.$$

$M_1$ 约贡献 87 % 的噪声功率，$R_D$ 约贡献 13 %。结果与 $r_O$ 无关。（若取 $\gamma = 1$ 而不是题目给定的 $2/3$，结果约为 18.7 μV rms。）

**常见错误。** 把电阻噪声 $4kTR_D$ 直接加到输入参考噪声上。该噪声出现在输出端，必须除以 $A_v^2 = (g_mR_D)^2$，得到 $4kT/(g_m^2R_D)$；若不除，仅负载项就有 $3.3\times10^{-17}\ \mathrm{V^2/Hz}$，是正确总值的 13 倍以上，最终结果会接近 59 μV。

**常见错误。** 只保留晶体管项 $4kT\gamma/g_m$，得到 $\sqrt{1.656\times10^{-20}\times128.8\times10^8} \approx 14.6\ \mu$V，偏低约 7 %。

**常见错误。** 把均方值 $2.44\times10^{-10}\ \mathrm{V^2}$ 当作电压给出，或者把带宽乘以 $2\pi$。功率谱密度是“每赫兹”的量，因此应乘以以赫兹为单位的带宽 $10^8$ Hz。
