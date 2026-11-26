$f_{T,sub} = \dfrac{g_m}{2\pi C_{in}}$，其中 $g_m = \dfrac{I_D}{\zeta V_T}$，即 $f_{T,sub} = \dfrac{I_D}{2\pi\zeta V_T C_{in}} \propto I_D$。它随 $V_{GS}$ 按指数规律变化，栅极电压每降低 $\zeta V_T\ln 10$（$\zeta = 1.5$ 时 ≈ 90 mV），它就下降为原来的十分之一，并且远低于强反型时的值。
- 弱反型（weak inversion）下的栅极电容：没有强反型层（strong inversion layer）来屏蔽衬底（bulk），因此 $C_{GS} \approx C_{GD} \approx WC_{ov}$，即只剩交叠电容（overlap capacitance）；栅极经 $C_{ox}$ 与耗尽层电容（depletion capacitance）的串联耦合到衬底：$C_{GB} = \dfrac{WLC_{ox}C_{dep}}{C_{ox} + C_{dep}} = WLC_{ox}\dfrac{\zeta - 1}{\zeta}$（利用了 $\zeta \approx 1 + C_{dep}/C_{ox}$）。衬底接交流地时，$C_{in} \approx WLC_{ox}(\zeta-1)/\zeta + 2WC_{ov}$，因此忽略交叠电容时 $f_{T,sub} \approx \dfrac{I_D}{2\pi(\zeta - 1)V_TWLC_{ox}}$。（直接取 $C_{in} = C_{GS} + C_{GD}$，其量级为 $WLC_{ox}$，也会得到相同的结论。）
- 比较：同一器件（$W$ 和 $L$ 相同）分别偏置在两个区域。强反型时 $f_T \propto V_{GS} - V_{TH} \propto \sqrt{I_D}$；亚阈值时 $f_T \propto I_D$，而 $I_D$ 是指数级地小。

在相同 $I_D$ 下匹配两条跨导渐近式，得到 $V_{GS}-V_{TH}\approx 2\zeta V_T$。室温下取 $\zeta=1.5$ 时约为 78 mV。这是中反型附近的量级估算。若用相同的栅电容近似，它给出的 $f_T$ 量级低于典型过驱动电压 0.2–0.5 V 时的强反型值。在阈值以下，栅极电压每降低 $\zeta V_T\ln 10$，$f_T$ 就下降一个数量级。亚阈值工作能得到较高的 $g_m/I_D$，但速度较低。

## 评分说明

- +2 分：给出 $g_m=I_D/(\zeta V_T)$ 和 $f_T=g_m/(2\pi C_{in})$，采用并说明合理的栅电容模型（耗尽层串联的 $C_{GB}$ 模型，或简化为 $C_{GS}+C_{GD}$）。指出亚阈值区的 $f_T\propto I_D$，随 $V_{GS}$ 呈指数变化，并远低于强反型区的 $f_T$。强反型区的 $f_T\propto V_{GS}-V_{TH}$。
- +1 分：表达式正确，但比较含糊。
- 0 分：比较方向正确，$g_m$ 的表达式有疏漏，例如漏掉 $\zeta$。
- −2 分（作为正确结论明确断言）：因 $g_m/I_D$ 较高就断言同一器件的亚阈值 $f_T$ 高于强反型区，或在没有说明条件时这样断言，或在亚阈值区使用平方律的 $g_m$。
- 若明确在漏电流相同、栅电容相同的条件下写出 $f_{T,sub}/f_{T,SI}=(V_{GS}-V_{TH})/(2\zeta V_T)$，代数上正确，不作错误断言处理。但这未回答题目要求的同一器件比较。除非同时说明给定器件的亚阈值 $f_T$ 远低于强反型区，否则最多 +1 分。
