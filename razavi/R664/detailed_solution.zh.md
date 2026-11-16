# 详细步骤 - R664

**思路。** 对恒定电场按比例缩小所控制的每个量（氧化层电场、$C_{ox}$、漏极电流、跨导、电容与延迟、阈值电压、栅控能力），比较其在理想按比例缩小下的缩放因子与 $t_{ox}$ 保持不变时的缩放因子。氧化层变得**更安全**，但器件失去了更薄氧化层所带来的大部分好处。

### 第 1 步 — 参照：理想按比例缩小保持哪些量不变

理想按比例缩小把 $t_{ox}$ 和各电压除以同一个 $\alpha$，因此氧化层电场 $E_{ox} \approx V_{GS}/t_{ox}$ 的变化因子为 $(1/\alpha)/(1/\alpha) = 1$，即保持不变，而

$$C_{ox} = \frac{\epsilon_{ox}}{t_{ox}}$$

增大到 $\alpha$ 倍。而这里 $t_{ox}$ 是唯一不按比例缩小的量。

### 第 2 步 — 氧化层电场：不再需要担心击穿

$$E_{ox} \approx \frac{V_{GS}}{t_{ox}} \;\longrightarrow\; \frac{V_{GS}/\alpha}{t_{ox}} = \frac{E_{ox}}{\alpha}.$$

氧化层电场**减小 $\alpha$ 倍**，因此击穿完全不成问题：氧化层只是比所需的更厚而已。代价体现在所有依赖于 $C_{ox}$ 的量上。

### 第 3 步 — 栅氧电容、漏极电流与跨导

$C_{ox} = \epsilon_{ox}/t_{ox}$ 保持**不变**，而不是增大到 $\alpha$ 倍。对于

$$I_D = \frac12\,\mu C_{ox}\,\frac{W}{L}\,(V_{GS} - V_{TH})^2$$

（迁移率视为常数），$W/L$ 不变（$(1/\alpha)/(1/\alpha) = 1$），$(V_{GS} - V_{TH})^2$ 按 $(1/\alpha)^2 = 1/\alpha^2$ 缩放（假设 $V_{TH}$ 仍能降低 $\alpha$ 倍；见第 5 步），而 $C_{ox}$ 在理想情况下按 $\alpha$ 缩放，这里却按 1 缩放：

$$\text{ideal: } I_D \to \alpha\cdot1\cdot\frac{1}{\alpha^2}\,I_D = \frac{I_D}{\alpha}, \qquad t_{ox}\text{ fixed: } I_D \to 1\cdot1\cdot\frac{1}{\alpha^2}\,I_D = \frac{I_D}{\alpha^2}.$$

驱动电流减小 $\alpha^2$ 倍，而不是 $\alpha$ 倍。同样，由 $g_m = \mu C_{ox}(W/L)(V_{GS} - V_{TH})$ 得

$$\text{ideal: } g_m \to \alpha\cdot1\cdot\frac{1}{\alpha}\,g_m = g_m, \qquad t_{ox}\text{ fixed: } g_m \to 1\cdot1\cdot\frac{1}{\alpha}\,g_m = \frac{g_m}{\alpha}.$$

$g_m$ 减小 $\alpha$ 倍，而不是保持不变；例如，共栅级的输入阻抗 $1/g_m$ 增大到 $\alpha$ 倍，本征增益（intrinsic gain）$g_mr_O$ 也会受损。

### 第 4 步 — 电容与速度

**栅电容** $C_G \approx WLC_{ox}$：

$$\text{ideal: } \frac{1}{\alpha}\cdot\frac{1}{\alpha}\cdot\alpha = \frac{1}{\alpha}, \qquad t_{ox}\text{ fixed: } \frac{1}{\alpha}\cdot\frac{1}{\alpha}\cdot1 = \frac{1}{\alpha^2}.$$

**结电容和连线电容**与 $t_{ox}$ 无关，仍大致按 $1/\alpha$ 缩放（对于结电容，面积按 $1/\alpha^2$ 缩放，单位面积电容按 $\alpha$ 增大）。

**延迟** $\tau \approx CV_{DD}/I_D$：

| 节点负载以何为主 | 理想按比例缩小 | $t_{ox}$ 固定 |
|---|---|---|
| 栅电容 | $\dfrac{(1/\alpha)(1/\alpha)}{1/\alpha} = \dfrac{1}{\alpha}$ | $\dfrac{(1/\alpha^2)(1/\alpha)}{1/\alpha^2} = \dfrac{1}{\alpha}$ |
| 结电容/连线电容 | $\dfrac{(1/\alpha)(1/\alpha)}{1/\alpha} = \dfrac{1}{\alpha}$ | $\dfrac{(1/\alpha)(1/\alpha)}{1/\alpha^2} = 1$ |

以栅电容为负载的节点仍能加快 $\alpha$ 倍，但以结电容和互连线为负载的节点**不再变快**：电流减小了 $\alpha^2$ 倍，而它们的电容只减小了 $\alpha$ 倍。由于寄生电容在实际负载中占很大比例，按比例缩小在速度上的好处大部分都丧失了。

### 第 5 步 — 阈值电压与体效应

$$V_{TH} = \phi_{MS} + 2\phi_F + \frac{Q_{dep}}{C_{ox}}, \qquad Q_{dep} = \sqrt{4q\epsilon_{si}|\phi_F|N_{sub}}.$$

- 当 $N_{sub} \to \alpha N_{sub}$ 时，$Q_{dep}$ 约增大到 $\sqrt\alpha$ 倍（$\phi_F$ 只按对数变化）。
- 理想按比例缩小：$Q_{dep}/C_{ox} \to \sqrt\alpha/\alpha = 1/\sqrt\alpha$，因此该项减小。
- $t_{ox}$ 固定：$Q_{dep}/C_{ox} \to \sqrt\alpha/1 = \sqrt\alpha$，因此该项**增大**。

更高的衬底掺杂现在会把 $V_{TH}$ 推**高**；要使 $V_{TH}$ 按 $1/\alpha$ 缩小，需要另外进行阈值调整注入（threshold-adjust implant）。体效应系数

$$\gamma = \frac{\sqrt{2q\epsilon_{si}N_{sub}}}{C_{ox}}$$

增大到 $\sqrt\alpha$ 倍（而不是减小 $\sqrt\alpha$ 倍）：衬底与栅极的竞争更加激烈。

### 第 6 步 — 栅控能力减弱：亚阈值斜率与短沟道效应

**亚阈值斜率。** 斜率因子为 $\zeta = 1 + C_d/C_{ox}$，每十倍电流对应的摆幅为 $S = 2.3\,\zeta kT/q$。更高的掺杂使耗尽区变薄，因此 $C_d = \epsilon_{si}/W_{dep}$ 增大，而 $C_{ox}$ 不变：$C_d/C_{ox}$ 增大，$S$ 变差；再加上 $V_{TH}$ 降低了 $\alpha$ 倍，$V_{GS} = 0$ 时的关态漏电流会急剧增大。

**短沟道效应。** $L$ 减小 $\alpha$ 倍，但栅极到沟道的距离仍为 $t_{ox}$，因此漏极电场相对而言深入沟道更远。利用特征长度（scale length）$\lambda \approx \sqrt{(\epsilon_{si}/\epsilon_{ox})\,t_{ox}W_{dep}}$（短沟道效应大致按 $e^{-L/2\lambda}$ 增长）以及 $W_{dep} \propto 1/\alpha$：

$$\text{ideal: } \lambda \to \sqrt{\frac{1}{\alpha}\cdot\frac{1}{\alpha}}\,\lambda = \frac{\lambda}{\alpha}, \qquad t_{ox}\text{ fixed: } \lambda \to \sqrt{1\cdot\frac{1}{\alpha}}\,\lambda = \frac{\lambda}{\sqrt\alpha}.$$

在理想按比例缩小下 $L/\lambda$ 不变，但在 $t_{ox}$ 固定时减小 $\sqrt\alpha$ 倍，因此阈值滚降、漏致势垒降低（DIBL）和穿通都会加剧，$r_O$ 也会变差。

### 第 7 步 — 汇总表

| 物理量 | 理想按比例缩小 | $t_{ox}$ 不缩小 |
|---|---|---|
| 氧化层电场 $V/t_{ox}$ | 1 | $1/\alpha$（更安全） |
| $C_{ox}$ | $\alpha$ | 1 |
| $I_D$ | $1/\alpha$ | $1/\alpha^2$ |
| $g_m$ | 1 | $1/\alpha$ |
| 栅电容 | $1/\alpha$ | $1/\alpha^2$ |
| 延迟（以结电容/连线为负载的节点） | $1/\alpha$ | 1 |
| $V_{TH}$ 中的 $Q_{dep}/C_{ox}$ 项 | $1/\sqrt\alpha$ | $\sqrt\alpha$ |
| 体效应系数 $\gamma$ | $1/\sqrt\alpha$ | $\sqrt\alpha$ |
| 栅极相对于漏极的控制能力（$L/\lambda$） | 1 | $1/\sqrt\alpha$（变差） |

### 结果

保持 $t_{ox}$ 不变会使氧化层电场减小 $\alpha$ 倍，因此击穿不成问题。但 $C_{ox}$ 不再增大，器件失去了按比例缩小的好处：

- 驱动电流约减小 $\alpha^2$ 倍（而不是 $\alpha$ 倍），$g_m$ 约减小 $\alpha$ 倍（而不是保持不变），因此以结电容和连线电容为主的节点不再变快；
- $V_{TH}$ 中的耗尽项 $Q_{dep}/C_{ox}$ 和体效应系数 $\gamma$ 增大到 $\sqrt\alpha$ 倍，而不是减小，因此 $V_{TH}$ 需要另行调整；
- 栅控能力减弱：亚阈值斜率变差，短沟道效应（$V_{TH}$ 滚降、DIBL、穿通、$r_O$ 降低）加剧，因为相对于短得多的沟道，栅极现在离得较远。

这就是 $t_{ox}$ 必须与 $L$ 一起按比例缩小的原因，也是为什么限制氧化层能做多薄的是氧化层击穿（而不是方便与否）。

**常见错误。** 声称氧化层会击穿，或其电场会增大。厚度保持不变而电压除以 $\alpha$，因此电场是**减小**的。

**常见错误。** 只笼统地说“得不到电流的按比例缩小”，而不指出方向。由于 $C_{ox}$ 不增大，$I_D$ 和 $g_m$ 都比理想按比例缩小时**小** $\alpha$ 倍。

**常见错误。** 忘记考虑阈值电压和短沟道行为。更高的掺杂本应由更大的 $C_{ox}$ 来平衡；没有了这一点，耗尽电荷便主导了 $V_{TH}$ 和 $\gamma$，漏极对沟道的影响也会增强。
