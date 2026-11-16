# 详细步骤 - R174

**思路。** 阈值失配使 $g_{m1} \neq g_{m2}$，在电阻负载下，这会把共模输入转换成差分输出。但这里每个二极管负载的电阻 $1/g_{m3}$ 取决于**它自己那一支**的电流。在题设模型下（平方律，$M_1$–$M_4$ 中无沟道长度调制和体效应），分别用大信号方程和小信号模型精确分析共模响应，然后与把两个负载视为相等固定电阻的标准估算进行比较。

### 第 1 步 — 偏置量

每边流过 $I_{SS}/2 = 0.25$ mA：

$$\beta_n = \mu_nC_{ox}(W/L)_{1,2} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}, \qquad \beta_p = \mu_pC_{ox}(W/L)_{3,4} = (38.4\ \mu\mathrm{A/V^2})(20) = 0.768\ \mathrm{mA/V^2},$$

$$
\begin{aligned}
V_{ov1} &= \sqrt{\frac{2(0.25\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.193\ \mathrm{V}, & g_{m1} &= \sqrt{2\beta_nI_D} = \sqrt{2(13.4)(0.25)}\ \mathrm{mS} = 2.59\ \mathrm{mS},\\
g_{m3} &= \sqrt{2\beta_pI_D} = \sqrt{2(0.768)(0.25)}\ \mathrm{mS} = 0.620\ \mathrm{mS}, & \frac{1}{g_{m3}} &= 1.61\ \mathrm{k}\Omega .
\end{aligned}
$$

**尾阻抗。** NMOS 尾电流管流过 0.5 mA：

$$R_{SS} = \frac{1}{\lambda I_{SS}} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .$$

**失配。** 设 $V_{TH2} = V_{TH1} + \Delta V_{TH}$，$\Delta V_{TH} = 1$ mV。两个器件的 $V_{GS}$ 相同，因此它们的过驱动电压相差 1 mV，

$$\Delta g_m = \beta_n\Delta V_{TH} = 13.4\ \mu\mathrm{S}, \qquad \frac{\Delta g_m}{g_{m1}} = \frac{\Delta V_{TH}}{V_{ov1}} = \frac{1\ \mathrm{mV}}{193\ \mathrm{mV}} = 0.52\ \%.$$

### 第 2 步 — 大信号分析：输出差值与输入共模无关

二极管连接的 $M_3$ 恰好流过 $M_1$ 的电流，并且处于饱和，因此

$$I_{D1} = \tfrac12\beta_p\left(V_{DD} - V_X - |V_{THP}|\right)^2 \quad\Longrightarrow\quad V_X = V_{DD} - |V_{THP}| - \sqrt{\frac{2I_{D1}}{\beta_p}} .$$

由 $I_{D1} = \tfrac12\beta_n(V_{in,CM} - V_P - V_{TH1})^2$，有 $\sqrt{2I_{D1}/\beta_p} = \sqrt{\beta_n/\beta_p}\,(V_{in,CM} - V_P - V_{TH1})$，右边同理（用 $V_{TH2}$）：

$$
\begin{aligned}
V_X &= V_{DD} - |V_{THP}| - \sqrt{\beta_n/\beta_p}\,(V_{in,CM} - V_P - V_{TH1}),\\
V_Y &= V_{DD} - |V_{THP}| - \sqrt{\beta_n/\beta_p}\,(V_{in,CM} - V_P - V_{TH2}),\\
V_X - V_Y &= \sqrt{\beta_n/\beta_p}\,(V_{TH1} - V_{TH2}) .
\end{aligned}
$$

$V_{in,CM}$ 和 $V_P$ 被消去。共模输入（通过 $R_{SS}$）使 $V_P$ 变化，并改变两个电流，但差分输出固定为

$$|V_X - V_Y| = \sqrt{\frac{13.4}{0.768}}\times 1\ \mathrm{mV} = 4.18\times 1\ \mathrm{mV} = 4.18\ \mathrm{mV}.$$

失配只产生一个恒定的**失调**，**没有共模到差模的转换**。

### 第 3 步 — 小信号分析：失配为何被抵消

对于共模输入 $v_{cm}$，每个输入器件都是从其漏极到 $P$ 的电流源 $g_{mk}(v_{cm} - v_P)$；$R_{SS}$ 从 $P$ 接地；二极管负载 $1/g_{m3}$（左）和 $1/g_{m4}$（右）接交流地。

<!-- diagram: diagram-01.cir -->

两个漏极的响应为

$$v_X = -\frac{g_{m1}}{g_{m3}}(v_{cm} - v_P), \qquad v_Y = -\frac{g_{m2}}{g_{m4}}(v_{cm} - v_P).$$

每个负载流过自己那一支的电流，因此 $g_{m3} = \sqrt{2\beta_pI_{D1}}$，而 $g_{m1} = \sqrt{2\beta_nI_{D1}}$：

$$\frac{g_{m1}}{g_{m3}} = \sqrt{\frac{\beta_n}{\beta_p}} = \frac{g_{m2}}{g_{m4}} = 4.18 .$$

失配使 $g_{m1}$ **和** $g_{m3}$ 增大相同的比例（$\Delta g_m/g_m = \Delta g_{m3}/g_{m3} = \Delta V_{TH}/V_{ov} = 0.52$ %，因为两者都按 $\sqrt{I_D}$ 变化），所以两个漏极的变化完全相同：$v_X - v_Y = 0$，即 $A_{CM-DM} = 0$。由 $|A_{DM}| = g_{m1}/g_{m3} = 4.18$，

$$\mathrm{CMRR} = \frac{|A_{DM}|}{|A_{CM-DM}|} \to \infty\quad\text{(under the stated model)}.$$

### 第 4 步 — 标准估算（相等的固定负载电阻）

通常的教科书估算让两个负载具有相同的固定电阻 $1/g_{m3}$，只保留跨导（transconductance）失配。由 $P$ 点的 KCL 得 $v_{cm} - v_P = v_{cm}/[1 + (g_{m1} + g_{m2})R_{SS}]$，因此

$$
\begin{aligned}
|A_{CM-DM}| &= \frac{\Delta g_m\,(1/g_{m3})}{1 + 2g_mR_{SS}}, \qquad |A_{DM}| = \frac{g_m}{g_{m3}},\\
\mathrm{CMRR} &= \frac{g_m}{\Delta g_m}\left(1 + 2g_mR_{SS}\right).
\end{aligned}
$$

数值计算：

$$
\begin{aligned}
\frac{g_m}{\Delta g_m} &= \frac{V_{ov1}}{\Delta V_{TH}} = \frac{0.193\ \mathrm{V}}{1\ \mathrm{mV}} = 193,\\
1 + 2g_mR_{SS} &= 1 + 2(2.59\ \mathrm{mS})(20\ \mathrm{k}\Omega) = 1 + 103.5 = 104.5,\\
\mathrm{CMRR} &= 193\times 104.5 \approx 2.02\times10^4 \quad(\approx 86\ \mathrm{dB}).
\end{aligned}
$$

这一估算忽略了每个二极管的 $1/g_m$ 随其自身电流变化，而正是这一效应在第 3 步中造成了完全抵消。

**哪个数值描述实际电路？** 二阶效应会破坏这种抵消。考虑 $M_1$–$M_4$ 中的沟道长度调制（$\lambda_n = 0.1$，$\lambda_p = 0.2\ \mathrm{V^{-1}}$）时，输出电阻（output resistance）$r_O \propto 1/I_D$ 与二极管负载并联，而它随电流的变化方式与 $1/g_m \propto 1/\sqrt{I_D}$ 不同。求解完整的小信号电路得到 $A_{DM} \approx 3.73$，$A_{CM-DM} \approx 2.0\times10^{-4}$，CMRR $\approx 1.8\times10^4$（≈ 85 dB），与标准估算接近。

### 结果

在题设模型下（平方律，$M_1$–$M_4$ 中无沟道长度调制和体效应），阈值失配**不会**引起共模到差模的转换：$V_X - V_Y = \sqrt{\beta_n/\beta_p}\,(V_{TH1} - V_{TH2})$ 与输入共模电平无关。所以 $A_{CM-DM} = 0$，**共模抑制比为无穷大**。失配只产生约 $4.18\times 1\ \mathrm{mV} \approx 4.2$ mV 的固定差分失调。

让两边具有相同负载 $1/g_{m3}$ 的标准估算为

$$\mathrm{CMRR} \approx \frac{g_m}{\Delta g_m}\left(1 + 2g_mR_{SS}\right) = 193\times 104.5 \approx 20{,}200\ (\approx 86\ \mathrm{dB}),$$

其中 $g_m = 2.59$ mS，$\Delta g_m = 13.4\ \mu$S，$R_{SS} = 20$ kΩ。它能很好地描述 $\lambda \neq 0$ 的实际电路（计入 $\lambda$ 的精确分析给出约 $1.8\times10^4$）。

**常见错误。** 以错误的理由断言共模抑制比为无穷大，例如把尾电流源当作理想电流源，或断言阈值失配永远无关紧要。在电阻负载下，同样的失配会给出有限的共模抑制比；这里的抵消来自二极管负载跟踪各自支路的电流。

**常见错误。** 给出 CMRR $= g_m/\Delta g_m = 193$，即忘记了尾电流源的共模负反馈（degeneration）因子 $1 + 2g_mR_{SS} = 104.5$。

**常见错误。** 使用 $R_{SS} = 10$ kΩ（由 1 mA 电流算得）。尾电流管流过 $I_{SS} = 0.5$ mA，因此 $R_{SS} = 1/(0.1\times 0.5\ \mathrm{mA}) = 20$ kΩ。
