# 详细步骤 - R168

**思路。** 差分信号被放大 $A_{DM} = g_mR_D$ 倍。共模噪声只能通过负载失配到达差分输出，增益为 $A_{CM-DM} = g_m\Delta R_D/(1 + 2g_mR_{SS})$。输出信噪比就是两个输出幅度之比。

### 第 1 步 — 偏置量

**尾电流源。** NMOS 电流源流过 $I_{SS} = 1$ mA，因此

$$R_{SS} = r_O = \frac{1}{\lambda I_{SS}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .$$

**输入器件。** 每个器件流过 $I_{SS}/2 = 0.5$ mA，且 $\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$：

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = \sqrt{13.4}\ \mathrm{mS} = 3.66\ \mathrm{mS}.$$

**负载失配。** $\Delta R_D = 0.005\times 2\ \mathrm{k}\Omega = 10\ \Omega$：左侧负载为 $R_D = 2$ kΩ，右侧为 $R_D + \Delta R_D = 2.01$ kΩ。

### 第 2 步 — 差模增益（信号通路）

对于差分输入 $v_{in}$，两个电流分别变化 $\pm g_mv_{in}/2$，因此 $R_{SS}$ 中没有信号电流，$P$ 为交流地。每个漏极电流流过各自的负载：

$$
\begin{aligned}
v_X &= -\frac{g_mv_{in}}{2}R_D, \qquad v_Y = +\frac{g_mv_{in}}{2}(R_D + \Delta R_D),\\
v_X - v_Y &= -g_mv_{in}\left(R_D + \frac{\Delta R_D}{2}\right) \approx -g_mR_D\,v_{in},
\end{aligned}
$$

$$|A_{DM}| = g_mR_D = (3.66\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 7.32 ,$$

$\Delta R_D/2$ 带来的 0.25 % 修正可以忽略。因此 10 mV 峰峰值的输入产生

$$v_{out,signal} = 7.32\times 10\ \mathrm{mV} = 73.2\ \mathrm{mV}\ \text{peak-to-peak}.$$

（$V_{in,DM}$ 只加在 $M_1$ 的栅极上，因此 $V_{in1} - V_{in2} = V_{in,DM}$；它所含的少量共模成分 $V_{in,DM}/2$ 经第 3 步的机制只转换成几微伏的输出，可以忽略。）

### 第 3 步 — 共模到差模的转换（噪声通路）

对于两个栅极上的共模变化 $v_{cm}$，每个晶体管都是从其漏极到 $P$ 的电流源 $g_mv_{gs}$，其中 $v_{gs} = v_{cm} - v_P$；$R_{SS}$ 把 $P$ 接地，负载 $R_D$ 和 $R_D + \Delta R_D$ 接交流地。

<!-- diagram: diagram-01.cir -->

两个晶体管的 $v_{gs}$ 相同，因此流过相等的电流 $i$，两者都流经 $R_{SS}$：

$$
\begin{aligned}
v_P &= 2i\,R_{SS},\\
i &= g_m(v_{cm} - v_P) = g_m(v_{cm} - 2iR_{SS}),\\
i &= \frac{g_m}{1 + 2g_mR_{SS}}\,v_{cm}.
\end{aligned}
$$

相等的电流流过**不相等**的负载：

$$
\begin{aligned}
v_X &= -iR_D, \qquad v_Y = -i(R_D + \Delta R_D),\\
v_X - v_Y &= i\,\Delta R_D = \frac{g_m\Delta R_D}{1 + 2g_mR_{SS}}\,v_{cm},
\end{aligned}
$$

因此

$$|A_{CM-DM}| = \frac{g_m\Delta R_D}{1 + 2g_mR_{SS}} .$$

数值计算：

$$
\begin{aligned}
2g_mR_{SS} &= 2(3.66\ \mathrm{mS})(10\ \mathrm{k}\Omega) = 73.2, \qquad 1 + 2g_mR_{SS} = 74.2,\\
g_m\Delta R_D &= (3.66\ \mathrm{mS})(10\ \Omega) = 0.0366,\\
|A_{CM-DM}| &= \frac{0.0366}{74.2} = 4.93\times10^{-4}.
\end{aligned}
$$

因此峰峰值 100 mV 的噪声 $V_n(t)$ 产生的差分输出为

$$v_{out,noise} = (4.93\times10^{-4})(100\ \mathrm{mV}) = 49.3\ \mu\mathrm{V}\ \text{peak-to-peak}.$$

它之所以很小有两个原因：尾电阻的源极负反馈（degeneration）使共模跨导（transconductance）减小 $1 + 2g_mR_{SS} = 74$ 倍；而且只有两个负载之间 0.5 % 的**差值**才会把共模电流转换成差分电压。

### 第 4 步 — 信噪比

$$\mathrm{SNR} = \frac{v_{out,signal}}{v_{out,noise}} = \frac{73.2\ \mathrm{mV}}{49.3\ \mu\mathrm{V}} \approx 1.48\times10^3,$$

即 $20\log_{10}(1484) \approx 63.4$ dB。

**利用共模抑制比交叉验证。**

$$\mathrm{CMRR} = \frac{A_{DM}}{A_{CM-DM}} = \frac{g_mR_D}{g_m\Delta R_D/(1 + 2g_mR_{SS})} = \frac{R_D}{\Delta R_D}(1 + 2g_mR_{SS}) = 200\times 74.2 = 1.48\times10^4 .$$

输入信噪比为 $10\ \mathrm{mV}/100\ \mathrm{mV} = 0.1$，因此输出信噪比为 $\mathrm{CMRR}\times 0.1 \approx 1.48\times10^3$ ✓：电路把信噪比从输入端的 0.1 提高到输出端的约 1,500。

### 结果

$$\mathrm{SNR} \approx \frac{g_mR_D\times 10\ \mathrm{mV}}{\dfrac{g_m\Delta R_D}{1 + 2g_mR_{SS}}\times 100\ \mathrm{mV}} = \frac{73.2\ \mathrm{mV}}{49.3\ \mu\mathrm{V}} \approx 1{,}480\quad(\approx 63.4\ \mathrm{dB}),$$

其中 $g_m = 3.66$ mS，$R_{SS} = 10$ kΩ，$A_{DM} = 7.32$，$A_{CM-DM} = 4.93\times10^{-4}$。

**常见错误。** 把对称差分对的单端共模增益 $R_D/(2R_{SS})$（或 $g_mR_D/(1 + 2g_mR_{SS})$）当作噪声增益。该增益描述的是两个输出**一起**移动的程度；差分输出只看到由不对称引起的部分 $g_m\Delta R_D/(1 + 2g_mR_{SS})$。

**常见错误。** 用错误的公式计算尾阻抗，例如 $\lambda/I_D$，或用 0.5 mA 计算 $1/(\lambda I_D)$。电流源流过全部 1 mA，因此 $R_{SS} = 1/(0.1\times 1\ \mathrm{mA}) = 10$ kΩ。

**常见错误。** 认为信噪比保持输入端的值 0.1。差分对把差分信号放大 7.3 倍，并相对于差分信号把共模噪声抑制约 $1.5\times10^4$ 倍。
