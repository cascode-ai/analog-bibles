# 详细步骤 - R699

**思路。** 把 $M_1$ 建模为其栅电容 $C$ 与沟道等效串联电阻 $R_S$ 的串联。于是节点 X 经 $L_b$ 接到电源，经 $R_S$–$C$ 支路接地，并把数字电路视为电流源。推导 $V_X/I_{DD}$，从其二阶分母中读出阻尼比并令其等于 1；$L_b$ 越大阻尼越小，因此临界值就是最大值。

### 第 1 步 — $M_1$ 的偏置点与电容

电感上没有直流电压，因此栅极（节点 X）位于 $V_{DD} = 3$ V；源极、漏极和衬底都接地，因此 $V_{GS} = 3$ V，$V_{DS} = 0$，$V_{SB} = 0$，$V_{TH} = V_{TH0} = 0.7$ V：

$$V_{ov} = V_{GS} - V_{TH} = 3 - 0.7 = 2.3\ \mathrm{V} > 0 .$$

沟道处于强反型（strong inversion），$M_1$ 工作在深线性区（deep triode），沟道均匀，因此其栅–沟道电容就是全部的氧化层电容：

$$C = WLC_{ox} = (100\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = (50\ \mu\mathrm{m^2})(3.84\ \mathrm{fF/\mu m^2}) = 192\ \mathrm{fF}.$$

### 第 2 步 — MOS 电容的串联电阻

深线性区中源漏之间的沟道电阻为

$$R_{tot} = \frac{1}{\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})} = \frac{1}{(134\ \mu\mathrm{A/V^2})(200)(2.3\ \mathrm{V})} = \frac{1}{0.06164\ \mathrm{A/V}} = 16.2\ \Omega .$$

电容电流沿沟道长度均匀地进入沟道，并从两个接地端流出，因此在每一半中，电流从接触端的 $I/2$ 线性下降到中心处的零。耗散的功率为

$$P = 2\int_0^{L/2}\left[\frac{I}{L}\left(\frac{L}{2} - x\right)\right]^2\frac{R_{tot}}{L}\,dx = 2\cdot\frac{I^2R_{tot}}{L^3}\cdot\frac{(L/2)^3}{3} = \frac{I^2R_{tot}}{12},$$

令 $P = I^2R_S$，得到

$$R_S = \frac{R_{tot}}{12} = \frac{16.2\ \Omega}{12} = 1.35\ \Omega .$$

（若采用较粗略的集总估计，即认为全部电荷从沟道中心进入，则得到 $R_S \approx (R_{tot}/2)\parallel(R_{tot}/2) = R_{tot}/4 = 4.06\ \Omega$。）

### 第 3 步 — 节点 X 处的等效电路

$V_{DD}$ 是交流地，因此 $L_b$ 把 X 接到交流地；$M_1$ 相当于从 X 到地的 $R_S$ 与 $C$ 串联；数字电路是一个从 X 抽取电流的电流源 $I_{DD}$。

<!-- diagram: diagram-01.cir -->

### 第 4 步 — 传递函数 $V_X/I_{DD}$

在节点 X 应用基尔霍夫电流定律（KCL），其中 $R_S$–$C$ 支路的导纳为 $1/(R_S + 1/sC) = sC/(1 + sR_SC)$：

$$\frac{V_X}{sL_b} + \frac{V_X}{R_S + \dfrac{1}{sC}} + I_{DD} = 0 \quad\Longrightarrow\quad V_X\left[\frac{1}{sL_b} + \frac{sC}{1 + sR_SC}\right] = -I_{DD}.$$

通分，公分母为 $sL_b(1 + sR_SC)$：

$$\frac{1}{sL_b} + \frac{sC}{1 + sR_SC} = \frac{(1 + sR_SC) + s^2L_bC}{sL_b(1 + sR_SC)} ,$$

因此

$$\frac{V_X}{I_{DD}}(s) = -\frac{sL_b(1 + sR_SC)}{s^2L_bC + sR_SC + 1}.$$

### 第 5 步 — 阻尼比与临界条件

把分母除以 $L_bC$，并与 $s^2 + 2\zeta\omega_ns + \omega_n^2$ 对比：

$$s^2 + \frac{R_S}{L_b}s + \frac{1}{L_bC}, \qquad \omega_n = \frac{1}{\sqrt{L_bC}}, \qquad 2\zeta\omega_n = \frac{R_S}{L_b},$$

$$\zeta = \frac{R_S}{2L_b\omega_n} = \frac{R_S}{2L_b}\sqrt{L_bC} = \frac{R_S}{2}\sqrt{\frac{C}{L_b}} .$$

由于 $\zeta \propto 1/\sqrt{L_b}$，增大 $L_b$ 会减小阻尼，不产生振铃的最大 $L_b$ 对应 $\zeta = 1$：

$$1 = \frac{R_S}{2}\sqrt{\frac{C}{L_b}} \;\Longrightarrow\; \sqrt{\frac{L_b}{C}} = \frac{R_S}{2} \;\Longrightarrow\; L_{b,max} = \frac{R_S^2C}{4},$$

即回路电阻必须至少为 $2\sqrt{L_b/C}$，也就是 $L_b$–$C$ 谐振回路特征阻抗的两倍。

### 第 6 步 — 数值

取 $R_S = R_{tot}/12 = 1.35\ \Omega$：

$$R_S^2 = (1.352\ \Omega)^2 = 1.828\ \Omega^2,$$

$$L_{b,max} = \frac{(1.828\ \Omega^2)(192\times10^{-15}\ \mathrm{F})}{4} = \frac{3.51\times10^{-13}}{4}\ \mathrm{H} = 8.8\times10^{-14}\ \mathrm{H} \approx 0.088\ \mathrm{pH}.$$

采用集总估计 $R_S = R_{tot}/4 = 4.06\ \Omega$ 时：

$$L_{b,max} = \frac{(4.06\ \Omega)^2(192\ \mathrm{fF})}{4} = \frac{(16.45)(192\times10^{-15})}{4}\ \mathrm{H} = 7.9\times10^{-13}\ \mathrm{H} \approx 0.79\ \mathrm{pH}.$$

**解释。** 键合线或封装引线的电感约为 1 nH，比上述两个值都大约 $10^4$ 倍，因此单个 $100/0.5$ 的 MOS 电容，由于电容很小、串联电阻也很小，无法使实际的电源电感达到临界阻尼。实际中去耦要用大得多的电容，而阻尼往往依靠有意加入的串联电阻。

**模型适用范围。** 在由此得到的谐振频率 $\omega_n = 1/\sqrt{L_bC} \approx 7.7\times10^{12}$ rad/s 处，乘积 $\omega_nR_{tot}C \approx 24$ 并不小，因此沟道已不再表现为简单的低频 $R_S$ 与 $C$ 串联。集总模型给出的数值是题目预期的答案；无论如何，单个这样的器件都无法对实际键合线提供足够阻尼的结论都成立。

### 结果

$$L_{b,max} = \frac{R_S^2C}{4} \approx 0.088\ \mathrm{pH},$$

其中 $C = WLC_{ox} = 192$ fF，$R_S = R_{tot}/12 = 1.35\ \Omega$（$V_{GS} - V_{TH} = 2.3$ V 时 $R_{tot} = 16.2\ \Omega$）。若采用较粗略的集总 ESR，即 $R_{tot}/4 = 4.06\ \Omega$，则得到 $L_{b,max} \approx 0.79$ pH。无论哪种情况，该值都比实际的键合线电感小几个数量级。

**常见错误。** 使用并联 RLC 的阻尼公式（例如 $L_b = 4R_S^2C$），或者漏掉因子 4。在 $L_b$–$C$ 回路中 $R_S$ 与 $C$ 是**串联**的，因此 $\zeta = (R_S/2)\sqrt{C/L_b}$，$L_b = R_S^2C/4$。

**常见错误。** 把源漏之间的全部电阻 $R_{tot} = 16.2\ \Omega$ 当作串联电阻，这会得到约 12.6 pH。栅极电流从分布式沟道的两个接地端流出，因此 ESR 只有 $R_{tot}/12$（集总估计中为 $R_{tot}/4$）。

**常见错误。** 把 MOS 电容当作无损的。当 $R_S = 0$ 时 $\zeta = 0$，节点总会振铃；$L_b$ 的临界值之所以存在，完全是因为沟道电阻。
