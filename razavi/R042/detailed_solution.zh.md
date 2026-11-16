# 详细步骤 - R042

**思路。** 利用 $f_T = g_m/(2\pi C_{in})$，其中 $C_{in}$ 是源极、漏极和衬底都接交流地时从栅极看进去的总电容。在亚阈值区，$g_m$ 由指数规律求得；由于此时没有反型层，必须重新考察 $C_{in}$。然后把结果与同一晶体管在强反型时的 $f_T$ 相比较。

### 第 1 步 — 亚阈值区的跨导（transconductance）

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = I_0\exp\frac{V_{GS}}{\zeta V_T}\cdot\frac{1}{\zeta V_T} = \frac{I_D}{\zeta V_T} .$$

因此 $g_m$ 与电流成正比，$g_m/I_D = 1/(\zeta V_T)$ 为常数。取 $\zeta = 1.5$，$V_T \approx 25.9$ mV（300 K）：

$$\frac{g_m}{I_D} = \frac{1}{1.5\times 25.9\ \mathrm{mV}} = 25.7\ \mathrm{V^{-1}},$$

而平方律（square law）器件在过驱动电压为 0.2 V 时，$g_m/I_D = 2/(V_{GS} - V_{TH}) = 10\ \mathrm{V^{-1}}$。这种高跨导效率正是亚阈值工作的吸引力所在。

### 第 2 步 — 弱反型区的栅极电容

在亚阈值区，可移动的沟道电荷（channel charge）极少，因此没有反型层把衬底与栅极屏蔽开：

- **$C_{GS}$ 和 $C_{GD}$** 退化为交叠电容，$C_{GS} \approx C_{GD} \approx WC_{ov}$，其中 $C_{ov}$ 为单位宽度的交叠电容。
- **$C_{GB}$** 变得显著：栅极经 $C_{ox}$ 与耗尽层电容 $C_{dep}$ 的串联到达衬底（两者均为单位面积值），

$$C_{GB} = WL\,\frac{C_{ox}C_{dep}}{C_{ox} + C_{dep}} .$$

**与 $\zeta$ 的关系。** 同一个电容分压器（capacitive divider）也决定了亚阈值斜率（subthreshold slope）。$V_{GS}$ 的变化使表面势（surface potential）$\psi_s$ 改变 $\partial\psi_s/\partial V_{GS} = C_{ox}/(C_{ox} + C_{dep})$，而电流取决于 $\exp(\psi_s/V_T)$，因此

$$\zeta = \frac{C_{ox} + C_{dep}}{C_{ox}} = 1 + \frac{C_{dep}}{C_{ox}} \quad\Longrightarrow\quad C_{dep} = (\zeta - 1)\,C_{ox} .$$

代入 $C_{GB}$：

$$C_{GB} = WL\,\frac{C_{ox}\cdot(\zeta - 1)C_{ox}}{C_{ox} + (\zeta - 1)C_{ox}} = WL\,\frac{(\zeta - 1)C_{ox}^2}{\zeta\,C_{ox}} = WLC_{ox}\,\frac{\zeta - 1}{\zeta} .$$

在 $f_T$ 测试中，源极、漏极和衬底都接交流地，因此这三个电容都是栅极的负载：

$$C_{in} = C_{GS} + C_{GD} + C_{GB} \approx 2WC_{ov} + WLC_{ox}\,\frac{\zeta - 1}{\zeta} .$$

当 $\zeta = 1.5$ 时，$C_{GB} = WLC_{ox}/3$，与强反型时的栅极电容（$\tfrac23WLC_{ox}$ 到 $WLC_{ox}$）同一量级：在亚阈值区，电容**并不会**骤降。

### 第 3 步 — 亚阈值区的 $f_T$

与强反型时一样，$V_{gs} = I_{in}/(j\omega C_{in})$，$I_{out} = g_mV_{gs}$，因此电流增益 $g_m/(\omega C_{in})$ 在下述频率处降为 1：

$$f_{T,sub} = \frac{g_m}{2\pi C_{in}} = \frac{I_D}{2\pi\,\zeta V_T\,C_{in}} .$$

忽略交叠项，$C_{in} \approx WLC_{ox}(\zeta - 1)/\zeta$，因子 $\zeta$ 被约去：

$$f_{T,sub} \approx \frac{I_D}{2\pi\,\zeta V_T}\cdot\frac{\zeta}{(\zeta - 1)WLC_{ox}} = \frac{I_D}{2\pi\,(\zeta - 1)\,V_T\,WLC_{ox}} .$$

对给定器件，$C_{in}$ 是固定的，因此 $f_{T,sub} \propto I_D \propto \exp[V_{GS}/(\zeta V_T)]$：$f_T$ 随栅极电压**按指数规律**变化，$V_{GS}$ 每降低

$$\Delta V_{GS} = \zeta V_T\ln 10 = 1.5\times25.9\ \mathrm{mV}\times2.303 = 89\ \mathrm{mV}\qquad(\zeta = 1.5)$$

它就下降为原来的 1/10。

### 第 4 步 — 用 $I_D$ 表示强反型区的 $f_T$

在强反型饱和区（取 $C_{GS} + C_{GD} \approx WLC_{ox}$），由平方律得 $V_{GS} - V_{TH} = \sqrt{2I_D/(\mu_nC_{ox}W/L)}$，因此

$$f_{T,SI} \approx \frac{\mu_n(V_{GS} - V_{TH})}{2\pi L^2} = \frac{\mu_n}{2\pi L^2}\sqrt{\frac{2I_D}{\mu_nC_{ox}W/L}} \propto \sqrt{I_D} .$$

在强反型区，$f_T$ 只随 $V_{GS}$ 线性增长（即与电流的平方根成正比）；而在亚阈值区，它与 $I_D$ 本身成正比，而后者是指数级地小。

### 第 5 步 — 同一晶体管的比较

取一个器件（$W$、$L$ 固定），把它的栅极电压从强反型区逐渐降低到亚阈值区。

**在边界处。** 当 $2I_D/(V_{GS} - V_{TH}) = I_D/(\zeta V_T)$ 时，两个 $g_m$ 表达式相等，此时

$$V_{GS} - V_{TH} \approx 2\zeta V_T = 2\times1.5\times25.9\ \mathrm{mV} \approx 78\ \mathrm{mV} .$$

此处两个 $f_T$ 值的量级相同。若两个公式都用相同的电容 $WLC_{ox}$，二者相等；若采用第 2 步中的弱反型电容，亚阈值的值要高出一个因子 $\zeta/(\zeta - 1) = 3$，与后面的变化相比，这只是不大的差别。这一边界值已经比正常过驱动电压下的强反型 $f_T$ 低好几倍。

**在边界以下，** 栅极电压每降低 89 mV，$f_T$ 就下降一个数量级。

**示例。** 取假设值 $\mu_n = 0.035\ \mathrm{m^2/(V\,s)}$、$L = 0.5\ \mu\mathrm{m}$ 和 $\zeta = 1.5$，于是 $\mu_n/(2\pi L^2) = 0.035/(1.571\times10^{-12}) = 2.23\times10^{10}\ \mathrm{Hz/V}$（两个区域中电容都取 $WLC_{ox}$）：

| 偏置点 | $f_T$ |
|---|---|
| 强反型，$V_{GS} - V_{TH} = 0.5$ V | $2.23\times10^{10}\times0.5 = 11$ GHz |
| 强反型，$V_{GS} - V_{TH} = 0.2$ V | $2.23\times10^{10}\times0.2 = 4.5$ GHz |
| 边界，$V_{GS} - V_{TH} \approx 78$ mV | $2.23\times10^{10}\times0.078 = 1.7$ GHz |
| 亚阈值，比边界低 89 mV | 170 MHz |
| 亚阈值，比边界低 178 mV | 17 MHz |
| 亚阈值，比边界低 267 mV | 1.7 MHz |

**为什么高 $g_m/I_D$ 无助于提高速度。** 在 $I_D$ 相等时，亚阈值器件的 $g_m$ 更大；但为了在阈值以下流过这么大的电流，器件必须做得很宽，因此其电容比 $g_m$ 增长得快得多。按“电流相等、电容相等”得出的比值 $f_{T,sub}/f_{T,SI} = (V_{GS} - V_{TH})/(2\zeta V_T)$，比较的是同一器件中不可能同时存在的两个工作点；对给定的晶体管而言，亚阈值工作总是意味着更低的 $f_T$。

### 结果

$$g_m = \frac{I_D}{\zeta V_T}, \qquad f_{T,sub} = \frac{g_m}{2\pi C_{in}} = \frac{I_D}{2\pi\zeta V_TC_{in}} \approx \frac{I_D}{2\pi(\zeta - 1)V_T\,WLC_{ox}},$$

其中 $C_{in} \approx WLC_{ox}(\zeta - 1)/\zeta + 2WC_{ov}$（经耗尽层的栅-衬底电容加上交叠电容）。因此 $f_{T,sub} \propto I_D \propto \exp[V_{GS}/(\zeta V_T)]$，每 $\zeta V_T\ln10 \approx 90$ mV 下降一个数量级。在强反型区，$f_T = \mu_n(V_{GS} - V_{TH})/(2\pi L^2) \propto \sqrt{I_D}$。对同一器件，两者只在弱/强反型边界处（$V_{GS} - V_{TH} \approx 2\zeta V_T \approx 80$ mV）相当；在边界以下，亚阈值的 $f_T$ 要低得多。亚阈值工作以牺牲速度为代价换取了高 $g_m/I_D$。

**常见错误。** 声称亚阈值器件更快，因为其 $g_m/I_D$ 更高。$f_T$ 是 $g_m$ 除以电容，而不是除以电流；对给定器件，亚阈值电流以及随之而来的 $g_m$ 都是指数级地小，而栅极电容仍保持在 $WLC_{ox}$ 的量级。

**常见错误。** 在阈值以下使用平方律的 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I_D}$ 或 $g_m = 2I_D/(V_{GS} - V_{TH})$。此时 $g_m = I_D/(\zeta V_T)$；当 $\zeta = 1.5$ 时，忘记因子 $\zeta$ 会把 $g_m$ 高估 50 %。

**常见错误。** 认为没有反型层时栅极电容就消失了。此时栅极经 $C_{ox}$ 与 $C_{dep}$ 的串联耦合到衬底；衬底接交流地时，这个 $C_{GB}$ 对栅极构成负载，就像强反型时的 $C_{GS}$ 一样。
