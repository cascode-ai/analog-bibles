# 详细步骤 - R169

**思路。** 差模增益为 $g_mR_D$。共模输入使匹配的两个晶体管流过相等的电流；这些电流受到 $R_{SS}$ 的源极负反馈（degeneration），并且只因负载失配（mismatch）$\Delta R_D$ 才转换成差分输出。计算两个增益并取其比值。

### 第 1 步 — 偏置量

**尾阻抗。** NMOS 尾电流源流过 $I_{SS} = 1$ mA，因此

$$R_{SS} = r_O = \frac{1}{\lambda I_{SS}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .$$

**输入跨导（transconductance）。** 每个输入器件流过 $I_{SS}/2 = 0.5$ mA，且 $\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2}$：

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS}.$$

**负载。** 左侧为 $R_D = 2$ kΩ，右侧为 $R_D + \Delta R_D$，其中 $\Delta R_D = 0.005\times 2\ \mathrm{k}\Omega = 10\ \Omega$。1.5 V 的输入共模电平只是用来保证所有器件都处于饱和区（saturation region）。

### 第 2 步 — 差模增益

两个栅极上加 $\pm v_{in}/2$ 时，两个电流分别变化 $\pm g_mv_{in}/2$，因此 $P$ 为虚地（virtual ground）：

$$
\begin{aligned}
v_X &= -\frac{g_mv_{in}}{2}R_D, \qquad v_Y = +\frac{g_mv_{in}}{2}(R_D + \Delta R_D),\\
|A_{DM}| &= \left|\frac{v_X - v_Y}{v_{in}}\right| = g_m\left(R_D + \frac{\Delta R_D}{2}\right) \approx g_mR_D = (3.66\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 7.32 .
\end{aligned}
$$

### 第 3 步 — 共模到差模的转换增益

对于两个栅极上的共模变化 $v_{cm}$，每个晶体管都是从其漏极到 $P$ 的电流源 $g_mv_{gs}$，其中 $v_{gs} = v_{cm} - v_P$；$R_{SS}$ 从 $P$ 接到地，负载从漏极接到交流地。

<!-- diagram: diagram-01.cir -->

两个晶体管流过相等的小信号电流 $i$，$R_{SS}$ 流过 $2i$：

$$
\begin{aligned}
v_P &= 2iR_{SS},\\
i &= g_m(v_{cm} - v_P) = g_mv_{cm} - 2g_mR_{SS}\,i,\\
i &= \frac{g_m}{1 + 2g_mR_{SS}}\,v_{cm}.
\end{aligned}
$$

由 $v_X = -iR_D$ 和 $v_Y = -i(R_D + \Delta R_D)$，

$$v_X - v_Y = i\,\Delta R_D \quad\Longrightarrow\quad |A_{CM-DM}| = \frac{g_m\Delta R_D}{1 + 2g_mR_{SS}} .$$

数值计算：

$$
\begin{aligned}
1 + 2g_mR_{SS} &= 1 + 2(3.66\ \mathrm{mS})(10\ \mathrm{k}\Omega) = 1 + 73.2 = 74.2,\\
|A_{CM-DM}| &= \frac{(3.66\ \mathrm{mS})(10\ \Omega)}{74.2} = \frac{0.0366}{74.2} = 4.93\times10^{-4}.
\end{aligned}
$$

### 第 4 步 — 共模抑制比

$$
\begin{aligned}
\mathrm{CMRR} = \frac{|A_{DM}|}{|A_{CM-DM}|} &= \frac{g_mR_D}{g_m\Delta R_D/(1 + 2g_mR_{SS})} = \frac{R_D}{\Delta R_D}\left(1 + 2g_mR_{SS}\right)\\
&= \frac{2\ \mathrm{k}\Omega}{10\ \Omega}\times 74.2 = 200\times 74.2 \approx 1.48\times10^4 ,
\end{aligned}
$$

即 $20\log_{10}(14{,}840) \approx 83.4$ dB。共模抑制比是两个因子的乘积：

- $R_D/\Delta R_D = 200$，即相对失配的倒数（完全匹配的电路共模抑制比为无穷大）；
- $1 + 2g_mR_{SS} = 74.2$，即尾阻抗对共模电流的抑制；采用更好的电流源，例如共源共栅（cascode）电流源，会成比例地提高共模抑制比。

$M_1$、$M_2$ 中的二阶效应最多会使该数值改变约 20 %，但不改变结果的结构。例如，考虑体效应时（$V_P \approx 0.43$ V，$g_{mb} \approx 0.19g_m$），负反馈因子变为 $1 + 2(g_m + g_{mb})R_{SS} \approx 88$，共模抑制比升至约 $1.8\times10^4$。

### 结果

$$\mathrm{CMRR} = \frac{R_D}{\Delta R_D}\left(1 + 2g_mR_{SS}\right) = 200\times 74.2 \approx 14{,}800\quad(\approx 83.4\ \mathrm{dB}),$$

其中 $g_m = 3.66$ mS，$R_{SS} = 10$ kΩ，$A_{DM} = 7.32$，$A_{CM-DM} = 4.93\times10^{-4}$。

**常见错误。** 除以**对称**的共模增益 $R_D/(2R_{SS})$（≈ 0.1，得到约 37–74 的“共模抑制比”）。那是到输出**共模**的增益；这里的共模抑制比使用的是到**差分**输出的转换增益，它只因 $\Delta R_D$ 而存在。

**常见错误。** 漏掉因子 $1 + 2g_mR_{SS}$（得到 CMRR = $R_D/\Delta R_D$ = 200），好像尾电流源是对地短路一样。大部分抑制来自尾电流源的负反馈。

**常见错误。** 用错误的电流或公式计算 $R_{SS}$，例如 $1/(\lambda\cdot 0.5\ \mathrm{mA}) = 20$ kΩ 或 $\lambda/I_D$。尾电流管流过全部 1 mA。
