# 详细步骤 - R465

**思路。** 衬底驱动（bulk-driven）差分对的增益为 $g_{mb1}(r_{O1}\parallel r_{O3}) = \eta\,g_{m1}(r_{O1}\parallel r_{O3})$。漏极电流保持恒定时，$g_{m1}$ 和各 $r_O$ 都不变，因此增益只通过 $\eta$ 变化，而它取决于阱与源极之间的电压，也就是输入共模电平。

### 第 1 步 — 恒定电流下衬底驱动差分对的增益

栅极和源极都接交流地时，阱电压 $v_w$ 产生漏极电流 $g_{mb}v_w$，其中

$$g_{mb} = \eta\,g_m, \qquad \eta = \frac{\partial|V_{TH}|}{\partial V_{BS}} ,$$

而每个阱都驱动其自身的漏极，负载为 $r_{O1}\parallel r_{O3}$，因此

$$|A_v| = g_{mb1}(r_{O1}\parallel r_{O3}) = \eta\,g_{m1}(r_{O1}\parallel r_{O3}).$$

漏极电流保持在设计值时（例如由作用于 $V_{b1}$ 或 $V_{b2}$ 的共模反馈来保证），$g_{m1} = \sqrt{2\mu_pC_{ox}(W/L)_1I_D}$、$r_{O1} = 1/(\lambda_pI_D)$ 和 $r_{O3} = 1/(\lambda_nI_D)$ 都是常数。

### 第 2 步 — $\eta$ 如何依赖于输入共模电平

将

$$|V_{TH}| = |V_{TH0}| + \gamma\left(\sqrt{2|\phi_F| + V_{BS}} - \sqrt{2|\phi_F|}\right)$$

对 $V_{BS}$ 求导：

$$\eta = \frac{\partial|V_{TH}|}{\partial V_{BS}} = \gamma\cdot\frac{1}{2\sqrt{2|\phi_F| + V_{BS}}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{BS}}} .$$

源极位于 $V_{DD}$，阱位于 $V_{in,CM}$，因此 $V_{BS} = V_{in,CM} - V_{DD}$，并且

$$\eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}}} = \frac{0.4\ \mathrm{V^{1/2}}}{2\sqrt{0.8\ \mathrm{V} + V_{in,CM} - V_{DD}}} .$$

因此

$$|A_v| \propto \eta \propto \frac{1}{\sqrt{0.8\ \mathrm{V} + V_{in,CM} - V_{DD}}} .$$

### 第 3 步 — 变化的方向与大小

升高 $V_{in,CM}$ 会增大阱-源结的反向偏置，使耗尽区（depletion region）变宽，因此阈值电压（threshold voltage）对阱电压**变得不那么敏感**：$\eta$ 和增益都减小。把 $V_{in,CM}$ 降到 $V_{DD}$ 以下（轻微正向偏置）则会使它们增大。

以 $V_{in,CM} = V_{DD}$ 时的增益为基准归一化：

| $V_{in,CM} - V_{DD}$ | $2\lvert\phi_F\rvert + V_{BS}$ | $\eta$ | 相对增益 |
|---|---|---|---|
| −0.3 V | 0.5 V | 0.283 | 1.27 |
| −0.2 V | 0.6 V | 0.258 | 1.15 |
| −0.1 V | 0.7 V | 0.239 | 1.07 |
| 0 | 0.8 V | 0.224 | 1.00 |
| +0.5 V | 1.3 V | 0.175 | 0.78 |
| +1.0 V | 1.8 V | 0.149 | 0.67 |

例如，在 $V_{in,CM} = V_{DD} - 0.3$ V 时：

$$\eta = \frac{0.4}{2\sqrt{0.8 - 0.3}} = \frac{0.4}{2\times0.707} = 0.283 .$$

表中的负值表示源-阱结处于轻微正向偏置，只有在其电流可以忽略时才可用（最多几百毫伏）。

对数灵敏度为

$$\frac{d\ln|A_v|}{dV_{in,CM}} = -\frac{1}{2\left(2|\phi_F| + V_{in,CM} - V_{DD}\right)},$$

在 $V_{in,CM} = V_{DD}$ 时为 $-1/(2\times0.8\ \mathrm{V}) = -0.625\ \mathrm{V^{-1}}$：即每 100 mV 增益变化约 $-6\,\%$，在可用的几百毫伏范围内变化 25–30 %。

### 第 4 步 — 后果

- 放大器的精度取决于输入共模电平所处的位置。
- 当差分输入较大时，每个阱的电压变化范围相当大，因此每一半电路的增益都随其瞬时阱电压而变化，从而引起失真。
- （超出恒定电流假设的情况：若 $V_{SG}$ 固定，升高 $V_{in,CM}$ 还会使 $|V_{TH}|$ 增大，$I_D$ 和 $V_{ov}$ 减小；由于 $g_mr_O \propto 1/V_{ov}$，这会部分抵消 $\eta$ 的下降。）

### 结果

$$|A_v| = \eta\,g_{m1}(r_{O1}\parallel r_{O3}), \qquad \eta = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{in,CM} - V_{DD}}},$$

因此在漏极电流恒定时，增益按 $1/\sqrt{0.8\ \mathrm{V} + V_{in,CM} - V_{DD}}$ 变化。当 $V_{in,CM}$ 升高（阱的反向偏置增大）时增益**减小**，当 $V_{in,CM}$ 降到 $V_{DD}$ 以下时增益**增大**：$V_{DD} - 0.3$ V 时 $\eta \approx 0.28$，$V_{DD}$ 时为 0.22，$V_{DD} + 0.5$ V 时为 0.18，在几百毫伏的范围内变化约 25–30 %。

**常见错误。** 因为电流恒定，就断定增益与输入共模电平无关。电流恒定只固定了 $g_m$ 和 $r_O$，而 $\eta$ 仍取决于阱与源极之间的电压。

**常见错误。** 因为反向偏置增大会使 $|V_{TH}|$ 增大，就把变化方向弄反。增益取决于**斜率** $\partial|V_{TH}|/\partial V_{BS}$，而它随反向偏置的增大而减小。
