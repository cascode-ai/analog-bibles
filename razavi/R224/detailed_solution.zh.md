# 详细步骤 - R224

**思路。** 差分输出级的 CMRR 为 $|A_{DM}/A_{CM-DM}|$。只有当两半边电路的响应不同，即小信号负载电阻或输入跨导（transconductance）不相等时，共模（CM）输入才会出现在差分输出端。因此需要检查二极管连接负载的阈值失配是否会使 $1/g_{m3}$ 和 $1/g_{m4}$ 不同。

### 第 1 步 — 输入对管和尾电流管的偏置电流与参数

把公共源极节点记为 P。除了 $|V_{TH3}| - |V_{TH4}| = 1$ mV 之外，电路完全匹配。

对共模输入，$V_{GS1} = V_{GS2}$；在 $\lambda = 0$ 时，匹配的 $M_1$、$M_2$ **无论负载如何**都流过相等的电流；负载中流过的也是这些电流：

$$I_{D1} = I_{D2} = I_{D3} = I_{D4} = \frac{I_{SS}}{2} = 0.25\ \mathrm{mA} .$$

由 $W/L = 50/0.5 = 100$，

$$g_{m1} = g_{m2} = \sqrt{2\,(134\ \mu\mathrm{A/V^2})(100)(0.25\ \mathrm{mA})} = \sqrt{6.70\times10^{-6}}\ \mathrm{A/V} = 2.588\ \mathrm{mS} .$$

尾电流管（tail transistor）的输出电阻为

$$R_{SS} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .$$

### 第 2 步 — 阈值失配对负载的影响

每个二极管连接的 PMOS 都处于饱和状态，其电流由它下方的输入晶体管决定，因此

$$|V_{GS}| = |V_{TH}| + \underbrace{\sqrt{\frac{2I_D}{\mu_pC_{ox}W/L}}}_{V_{ov}} .$$

由 $W/L = 10/0.5 = 20$，

$$V_{ov3} = V_{ov4} = \sqrt{\frac{2\,(0.25\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(20)}} = \sqrt{0.651\ \mathrm{V^2}} = 0.807\ \mathrm{V} .$$

过驱动电压（overdrive voltage）只取决于电流和 $\mu_pC_{ox}W/L$，**与 $V_{TH}$ 无关**，因此失配完全体现在 $|V_{GS}|$ 中：

$$|V_{GS3}| - |V_{GS4}| = |V_{TH3}| - |V_{TH4}| = 1\ \mathrm{mV} .$$

由于 $V_X = V_{DD} - |V_{GS3}|$，$V_Y = V_{DD} - |V_{GS4}|$，唯一的后果是 X 与 Y 之间出现 1 mV 的**直流失调**。小信号负载电阻为 $1/g_m$，其中

$$g_{m3} = \frac{2I_{D3}}{V_{ov3}} = \sqrt{2\mu_pC_{ox}\frac{W}{L}I_{D3}} = \sqrt{2\,(38.4\ \mu\mathrm{A/V^2})(20)(0.25\ \mathrm{mA})} = \sqrt{3.84\times10^{-7}}\ \mathrm{A/V} = 0.620\ \mathrm{mS} .$$

$M_4$ 的 $\mu_pC_{ox}$、$W/L$ 和电流都相同，因此

$$g_{m4} = g_{m3} = 0.620\ \mathrm{mS}, \qquad \frac{1}{g_{m3}} = \frac{1}{g_{m4}} = 1.61\ \mathrm{k}\Omega .$$

**阈值失配不会造成小信号负载电阻的失配。**

### 第 3 步 — 共模输入：到差分输出的增益

在共模输入 $v_{CM}$ 的小信号电路中，$M_1$ 和 $M_2$ 是流入 P 点的 $g_m$ 受控源，负载是接到交流地的 $1/g_{m3}$ 和 $1/g_{m4}$，尾电流源为 $R_{SS}$。

<!-- diagram: diagram-01.cir -->

由于 $v_{gs1} = v_{gs2} = v_{CM} - v_P$，且 $g_{m1} = g_{m2} = g_m$，每条支路的电流为 $i = g_m(v_{CM} - v_P)$；对 P 点应用基尔霍夫电流定律（KCL）得

$$2g_m(v_{CM} - v_P) = \frac{v_P}{R_{SS}} \quad\Longrightarrow\quad v_P = \frac{2g_mR_{SS}}{1 + 2g_mR_{SS}}\,v_{CM} ,$$

$$i = g_m\left(1 - \frac{2g_mR_{SS}}{1 + 2g_mR_{SS}}\right)v_{CM} = \frac{g_m}{1 + 2g_mR_{SS}}\,v_{CM} .$$

数值计算：$2g_mR_{SS} = 2(2.588\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 103.5$，因此

$$\frac{i}{v_{CM}} = \frac{2.588\ \mathrm{mS}}{104.5} = 24.8\ \mu\mathrm{S} .$$

电流 $i$ 分别经 $1/g_{m3}$ 从 X 点、经 $1/g_{m4}$ 从 Y 点吸取：

$$
\begin{aligned}
v_X &= -\frac{i}{g_{m3}} = -\frac{g_m/g_{m3}}{1 + 2g_mR_{SS}}\,v_{CM} = -\frac{4.18}{104.5}\,v_{CM} = -0.040\,v_{CM},\\
v_Y &= -\frac{i}{g_{m4}} = -0.040\,v_{CM} ,
\end{aligned}
$$

$$A_{CM-DM} = \frac{v_X - v_Y}{v_{CM}} = -\frac{g_m}{1 + 2g_mR_{SS}}\left(\frac{1}{g_{m3}} - \frac{1}{g_{m4}}\right) = 0 .$$

### 第 4 步 — 差分增益

对差分输入 $v_{in}$（两个栅极分别加 $\pm v_{in}/2$），P 点不动，因此

$$i_1 = g_m\frac{v_{in}}{2}, \qquad i_2 = -g_m\frac{v_{in}}{2},$$

$$v_X = -\frac{i_1}{g_{m3}} = -\frac{g_m}{2g_{m3}}v_{in}, \qquad v_Y = -\frac{i_2}{g_{m4}} = +\frac{g_m}{2g_{m3}}v_{in} ,$$

$$|A_{DM}| = \left|\frac{v_X - v_Y}{v_{in}}\right| = \frac{g_{m1}}{g_{m3}} = \frac{2.588\ \mathrm{mS}}{0.620\ \mathrm{mS}} = 4.18 .$$

### 第 5 步 — CMRR

$$\mathrm{CMRR} = \left|\frac{A_{DM}}{A_{CM-DM}}\right| = \frac{4.18}{0} \;\to\; \infty .$$

共模到差模的转换需要输入跨导不相等或负载电阻不相等，而这两者都不存在：匹配的输入对管无论漏极电压如何都流过相等的电流，而负载的 $g_m = \sqrt{2\mu_pC_{ox}(W/L)I_D}$ 取决于电流和尺寸，与 $V_{TH}$ 无关。（若阈值失配出现在**输入对管**中，则会产生这种转换，因为那里 $V_{GS}$ 是共同的，而电流不是。）

结论是“在一阶近似下为无穷大”。题目要求忽略的效应，例如 $M_1$、$M_2$ 的沟道长度调制（二者漏极电压相差 1 mV），或负载的 $\mu_pC_{ox}W/L$ 失配，会使 CMRR 变为非常大但有限的值；所给数据无法估计这些效应。

### 结果

$$\mathrm{CMRR} \to \infty \quad\text{(to first order).}$$

$M_3$、$M_4$ 之间 1 mV 的阈值失配只会在 X 与 Y 之间产生约 1 mV 的**直流失调**。两个负载都流过 0.25 mA 电流，且 $g_{m3} = g_{m4} = \sqrt{2\mu_pC_{ox}(W/L)I_D} = 0.62$ mS，与 $V_{TH}$ 无关。因此共模输入使两条支路的电流改变相同的量 $g_{m1}v_{CM}/(1 + 2g_{m1}R_{SS})$（其中 $g_{m1} = 2.59$ mS，$R_{SS} = 20\ \mathrm{k}\Omega$），在 X 和 Y 处产生相同的变化，所以 $A_{CM-DM} = 0$，而 $A_{DM} = g_{m1}/g_{m3} \approx 4.2$。

**常见错误。** 把阈值失配换算成跨导失配，$\Delta g_m/g_m = \Delta V_{TH}/V_{ov} = 1\ \mathrm{mV}/0.807\ \mathrm{V} = 1.24\times10^{-3}$，并算出约为 $(1 + 2g_{m1}R_{SS})/(\Delta g_m/g_m) \approx 8.4\times10^4$ 的有限 CMRR。这一关系适用于 $V_{GS}$ **相同**的器件，例如输入对管；而二极管连接负载的**电流**是被强制给定的。

**常见错误。** 套用电阻负载的公式 $A_{CM-DM} = \Delta R_D/(1/g_m + 2R_{SS})$，并代入某个 $\Delta R_D$。这里的小信号负载电阻 $1/g_{m3}$ 和 $1/g_{m4}$ 严格相等。

**常见错误。** 把直流失调与共模到差模的转换混为一谈。1 mV 的失调在完全没有输入时就已存在，而且不随共模输入变化。
