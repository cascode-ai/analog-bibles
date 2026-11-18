$|V_{OS}|_{\max} \approx 0.364\ \mathrm{V} + 0.2\sqrt{I_{SS}/(110\ \mu\mathrm{A/V^2})}$，在 $I_{SS} = 100\ \mu$A 时 ≈ 0.55 V。若假设负载完全匹配（只计输入对）：$0.3 + 0.1\sqrt{I_{SS}/110\ \mu} \approx 0.40$ V。

- 假设：器件服从平方律，忽略 λ 和体效应（M1 与 M2 共用源极）。成对器件可以处在各自容差带的两端，这是非常悲观的：实际匹配对的失配只有几毫伏，因为表中的分散性是所有器件共有的工艺（批次间）变化。$V_{OS}$ 是在输出处于电流镜节点电压时恢复平衡条件 $I_2 = I_4$ 的输入。
- $\beta_1 = \beta_2 = K'_N \cdot 1$，$\beta_3 = \beta_4 = K'_P \cdot 0.1$。平衡时 $V_{ov1} = \sqrt{I_{SS}/\beta_1}$，$g_{m3}/g_{m1} = \sqrt{\beta_3/\beta_1} = \sqrt{5/110} = 0.213$。
- 一阶近似：$V_{OS} \approx \Delta V_{T12} + (g_{m3}/g_{m1})\Delta V_{T34} + \frac{V_{ov1}}{2}\left(\frac{\Delta\beta_{12}}{\beta} + \frac{\Delta\beta_{34}}{\beta}\right)$。最坏情况：每对的 $\Delta V_T = 0.3$ V，每对的 $\Delta\beta/\beta = 0.2$，且符号叠加：$0.3 + 0.064 + 0.2V_{ov1}$。
- 在 $I_{SS} = 100\ \mu$A 时，$V_{ov1} = 0.953$ V，得 0.555 V。在最坏工艺角下求解大信号方程同样得到 0.555 V。仅输入对的部分为 $0.3 + \sqrt{I_{SS}/(0.9\beta_1)} - \sqrt{I_{SS}/(1.1\beta_1)} = 0.396$ V。（这种偏置需要很高的电源电压：$W_3/L_3 = 0.1$ 时 $V_{SG3} \approx 0.7 + 4.5$ V。）
