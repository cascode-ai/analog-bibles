# 详细步骤 - R592

**思路。** 计算饱和区中 $M_1$ 的栅源电容。它位于栅极 X 与尾节点之间，而尾节点对差分信号是交流地，因此它只是简单地与 $C_1$ 相加。然后用 $C_1 + C_{GS}$ 代替 $C_1$，重复半边电路（half circuit）的单极点分析，即令输入为零，在栅极和输出端列基尔霍夫电流定律（KCL）方程。

### 第 1 步 — $M_1$ 的栅源电容

在饱和区，$C_{GS} = \tfrac23WLC_{ox} + WC_{ov}$。取 $W = 50\ \mu$m，$L = 0.5\ \mu$m，$C_{ox} = 3.84\ \mathrm{fF/\mu m^2}$，$C_{ov} = 0.4\ \mathrm{fF/\mu m}$：

$$
\begin{aligned}
WLC_{ox} &= (50\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = 96\ \mathrm{fF},\\
\tfrac23WLC_{ox} &= \tfrac23\times96\ \mathrm{fF} = 64\ \mathrm{fF},\\
WC_{ov} &= (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20\ \mathrm{fF},\\
C_{GS} &= 64 + 20 = 84\ \mathrm{fF}.
\end{aligned}
$$

### 第 2 步 — $C_{GS}$ 在半边电路中的位置

$M_1$ 的源极就是尾节点 P，它对差分信号是交流地。因此 $C_{GS}$ 把栅极 X 接到交流地，与 $C_1$ 并联（放大期间其左极板保持在 $V_{CM}$）：

$$C_A = C_1 + C_{GS} = 2\ \mathrm{pF} + 0.084\ \mathrm{pF} = 2.084\ \mathrm{pF}.$$

半边电路中，$C_A$ 接在 X 与地之间，$C_3 = 0.5$ pF 接在 X 与输出之间；在输出端，$M_1$ 吸取电流 $g_{m1}v_X$，另有接地的 $R_0 = r_{O1}\parallel r_{O3}$，没有其他电容。

<!-- diagram: diagram-01.cir -->

### 第 3 步 — 小信号参数

每个晶体管的电流为 $I_D = I_{SS}/2 = 0.5$ mA，$W/L = 100$：

$$
\begin{aligned}
G_m = g_{m1} &= \sqrt{2(134\times10^{-6}\ \mathrm{A/V^2})(100)(0.5\times10^{-3}\ \mathrm{A})} = 3.66\ \mathrm{mS},\\
r_{O1} &= \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega,\qquad r_{O3} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega,\\
R_0 &= r_{O1}\parallel r_{O3} = 6.67\ \mathrm{k}\Omega,\qquad \frac{1}{R_0} = 0.150\ \mathrm{mS}.
\end{aligned}
$$

### 第 4 步 — 半边电路的极点

令输入为零，在 X 点应用 KCL，得

$$sC_AV_X + sC_3(V_X - V_{out}) = 0\quad\Longrightarrow\quad V_X = \frac{C_3}{C_A + C_3}\,V_{out} = \beta\,V_{out},$$

其中反馈系数为 $\beta = C_3/(C_A + C_3)$；在输出端应用 KCL，得

$$G_mV_X + \frac{V_{out}}{R_0} + sC_3(V_{out} - V_X) = 0 .$$

代入 $V_X = \beta V_{out}$，并利用 $C_3(1 - \beta) = C_AC_3/(C_A + C_3)$：

$$
\begin{aligned}
\left(G_m\beta + \frac{1}{R_0}\right)V_{out} + s\,\frac{C_AC_3}{C_A + C_3}\,V_{out} &= 0\\
\tau &= \frac{C_AC_3/(C_A + C_3)}{1/R_0 + G_mC_3/(C_A + C_3)} .
\end{aligned}
$$

输出端看到的是 $C_3$ 与 $C_A$ 的串联，它通过 $R_0$ 与反馈产生的电阻 $1/(G_m\beta)$ 的并联放电。

### 第 5 步 — 数值计算

$$
\begin{aligned}
C_A + C_3 &= 2.084 + 0.5 = 2.584\ \mathrm{pF},\\
\beta &= \frac{0.5}{2.584} = 0.1935,\\
\frac{C_AC_3}{C_A + C_3} &= \frac{(2.084)(0.5)}{2.584}\ \mathrm{pF} = 0.403\ \mathrm{pF},\\
G_m\beta &= 3.66\ \mathrm{mS}\times0.1935 = 0.708\ \mathrm{mS},\\
\frac{1}{R_0} + G_m\beta &= 0.150 + 0.708 = 0.858\ \mathrm{mS},\\
\tau &= \frac{0.403\times10^{-12}\ \mathrm{F}}{0.858\times10^{-3}\ \mathrm{S}} = 0.470\ \mathrm{ns}.
\end{aligned}
$$

若不计交叠项（$C_{GS} = 64$ fF），同样的步骤给出 $\beta = 0.1950$、串联电容 0.4025 pF 以及 $\tau = 0.466$ ns，几乎相同。

### 第 6 步 — 与不计 $C_{GS}$ 情形的比较

不计 $C_{GS}$ 时（$C_A = C_1 = 2$ pF）：$\beta = 0.2$，串联电容为 0.4 pF，$G_m\beta = 0.732$ mS，且

$$\tau_0 = \frac{0.4\ \mathrm{pF}}{0.150\ \mathrm{mS} + 0.732\ \mathrm{mS}} = 0.453\ \mathrm{ns}.$$

因此 $C_{GS}$ 使时间常数增大了 $0.470/0.453 - 1 \approx 4\ \%$。这一影响很小，因为 $C_{GS}$（84 fF）只有 $C_1$ 的约 4 %。它使串联电容略微增大（0.400 → 0.403 pF），更重要的是使反馈系数减小（0.200 → 0.1935），因此 $G_m\beta$ 从 0.732 降至 0.708 mS。

大环路增益近似（忽略 $1/R_0$）会给出 $(C_1 + C_{GS})/G_m = 2.084\ \mathrm{pF}/3.66\ \mathrm{mS} = 0.569$ ns，而不计 $C_{GS}$ 时为 0.546 ns；由于环路增益只有约 5，必须保留 $1/R_0$ 项。

### 结果

$C_{GS} = \tfrac23WLC_{ox} + WC_{ov} = 64 + 20 = 84$ fF，它接在栅极与交流接地的尾节点之间，即与 $C_1$ 并联。于是

$$\tau = \frac{C_3(C_1 + C_{GS})/(C_1 + C_{GS} + C_3)}{1/(r_{O1}\parallel r_{O3}) + g_{m1}C_3/(C_1 + C_{GS} + C_3)} = \frac{0.403\ \mathrm{pF}}{0.150\ \mathrm{mS} + 0.708\ \mathrm{mS}} \approx 0.47\ \mathrm{ns},$$

比不计 $C_{GS}$ 时得到的 0.453 ns 长约 4 %（若不计交叠电容则为 0.466 ns）。

**常见错误。** 把 $C_{GS}$ 当作从栅极到输出的密勒电容（Miller capacitance），或当作跨接在 $C_3$ 两端的电容。$M_1$ 的源极是尾节点，对差分半边电路而言是交流地，因此 $C_{GS}$ 从栅极接到地，与 $C_1$ 并联（与 $C_3$ 并联的应是 $C_{GD}$，这里已将其忽略）。

**常见错误。** 认为额外的电容会使电路变快：加在求和节点上的电容会减小反馈系数，从而增大 $\tau$。与此相关的疏漏是单位错误：$W$、$L$ 以 µm 为单位、$C_{ox}$ 以 fF/µm² 为单位时，$C_{GS}$ 直接以 fF 为单位得出，为几十飞法，而不是皮法量级。
