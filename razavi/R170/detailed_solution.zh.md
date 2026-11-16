# 详细步骤 - R170

**思路。** 阈值失配使两个输入器件的过驱动电压略有不同，因而 $g_{m1} \neq g_{m2}$。于是共模输入在两半电路中产生不相等的电流，部分共模噪声以增益 $\Delta g_mR_D/(1 + 2g_mR_{SS})$ 到达差分输出，而信号被放大 $g_mR_D$ 倍。信噪比就是两个输出幅度之比。

### 第 1 步 — 偏置量

**尾阻抗。** NMOS 尾电流源流过 $I_{SS} = 1$ mA：

$$R_{SS} = r_O = \frac{1}{\lambda I_{SS}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .$$

**输入器件。** 每个器件约流过 $I_{SS}/2 = 0.5$ mA，且 $\beta = \mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$：

$$
\begin{aligned}
V_{ov} &= \sqrt{\frac{2I_D}{\beta}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V},\\
g_m &= \beta V_{ov} = (13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V}) = 3.66\ \mathrm{mS}.
\end{aligned}
$$

### 第 2 步 — 阈值失配引起的跨导（transconductance）失配

两个栅极处于相同的共模电压，两个源极都接在 $P$，因此 $V_{GS1} = V_{GS2}$。设 $V_{TH2} = V_{TH1} + \Delta V_{TH}$：

$$V_{ov1} - V_{ov2} = (V_{GS} - V_{TH1}) - (V_{GS} - V_{TH2}) = \Delta V_{TH} = 1\ \mathrm{mV}.$$

由 $g_m = \beta V_{ov}$：

$$
\begin{aligned}
\Delta g_m = g_{m1} - g_{m2} &= \beta\,\Delta V_{TH} = (13.4\ \mathrm{mA/V^2})(1\ \mathrm{mV}) = 13.4\ \mu\mathrm{S},\\
\frac{\Delta g_m}{g_m} &= \frac{\Delta V_{TH}}{V_{ov}} = \frac{1\ \mathrm{mV}}{273\ \mathrm{mV}} = 0.37\ \%.
\end{aligned}
$$

### 第 3 步 — 差模增益（信号通路）

$P$（在一阶近似下）处于交流地，且负载相等，

$$|A_{DM}| \approx g_mR_D = (3.66\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 7.32 ,$$

由于差模增益取决于**平均**跨导 $(g_{m1} + g_{m2})/2$，这里 0.37 % 的差别可以忽略。10 mV 峰峰值的输入产生

$$v_{out,signal} = 7.32\times 10\ \mathrm{mV} = 73.2\ \mathrm{mV}\ \text{peak-to-peak}.$$

### 第 4 步 — 共模到差模的转换（噪声通路）

对于两个栅极上的共模变化 $v_{cm}$，晶体管 $k$ 是从其漏极到 $P$ 的电流源 $g_{mk}v_{gs}$，两者的 $v_{gs} = v_{cm} - v_P$ 相同；$R_{SS}$ 把 $P$ 接地，相等的负载 $R_D$ 把两个漏极接到交流地。

<!-- diagram: diagram-01.cir -->

在 $P$ 点列 KCL，两个电流都流入 $R_{SS}$：

$$
\begin{aligned}
v_P &= (g_{m1} + g_{m2})(v_{cm} - v_P)R_{SS}\\
v_{cm} - v_P &= \frac{v_{cm}}{1 + (g_{m1} + g_{m2})R_{SS}} .
\end{aligned}
$$

不相等的电流 $i_1 = g_{m1}(v_{cm} - v_P)$ 和 $i_2 = g_{m2}(v_{cm} - v_P)$ 流过相等的负载：

$$
\begin{aligned}
v_X - v_Y &= -R_D(i_1 - i_2) = -R_D\,\Delta g_m\,(v_{cm} - v_P)\\
|A_{CM-DM}| &= \frac{\Delta g_m R_D}{1 + (g_{m1} + g_{m2})R_{SS}} \approx \frac{\Delta g_m R_D}{1 + 2g_mR_{SS}} .
\end{aligned}
$$

数值计算：

$$
\begin{aligned}
1 + 2g_mR_{SS} &= 1 + 2(3.66\ \mathrm{mS})(10\ \mathrm{k}\Omega) = 74.2,\\
\Delta g_mR_D &= (13.4\ \mu\mathrm{S})(2\ \mathrm{k}\Omega) = 0.0268,\\
|A_{CM-DM}| &= \frac{0.0268}{74.2} = 3.61\times10^{-4}.
\end{aligned}
$$

因此峰峰值 100 mV 的共模噪声在差分输出端表现为

$$v_{out,noise} = (3.61\times10^{-4})(100\ \mathrm{mV}) = 36.1\ \mu\mathrm{V}\ \text{peak-to-peak}.$$

### 第 5 步 — 信噪比

$$\mathrm{SNR} = \frac{73.2\ \mathrm{mV}}{36.1\ \mu\mathrm{V}} \approx 2.03\times10^3, \qquad 20\log_{10}(2030) \approx 66.1\ \mathrm{dB}.$$

**交叉验证。** $\mathrm{CMRR} = A_{DM}/A_{CM-DM} = (g_m/\Delta g_m)(1 + 2g_mR_{SS}) = 273\times 74.2 = 2.03\times10^4$；输入信噪比为 0.1，因此输出信噪比为 $2.03\times10^4\times 0.1 = 2.03\times10^3$。✓

此外，失配还会产生约 $g_mR_D\times 1\ \mathrm{mV} = 7.3$ mV 的恒定差分输出失调（offset），这是一个固定的直流误差，不计入信噪比。

### 结果

$$\mathrm{SNR} = \frac{g_mR_D\times 10\ \mathrm{mV}}{\dfrac{\Delta g_mR_D}{1 + 2g_mR_{SS}}\times 100\ \mathrm{mV}} = \frac{73.2\ \mathrm{mV}}{36.1\ \mu\mathrm{V}} \approx 2{,}030\quad(\approx 66.1\ \mathrm{dB}),$$

其中 $g_m = 3.66$ mS，$\Delta g_m = \beta\Delta V_{TH} = 13.4\ \mu$S，$R_{SS} = 10$ kΩ。

**常见错误。** 只把 1 mV 的失配当作额外的输入信号（直流失调），认为它不影响噪声。它还使 $g_{m1} \neq g_{m2}$，而正是这一点把共模噪声转换成差分输出。

**常见错误。** 用错误的关系式求 $\Delta g_m$，例如 $\Delta g_m/g_m = \Delta V_{TH}/V_{GS}$ 或 $2\Delta V_{TH}/V_{ov}$。由于 $g_m = \beta V_{ov}$，$\Delta g_m/g_m = \Delta V_{TH}/V_{ov} = 0.37$ %。

**常见错误。** 漏掉因子 $1 + 2g_mR_{SS}$，即把 $\Delta g_mR_D$ 当作转换增益，这会把信噪比低估 74 倍。
