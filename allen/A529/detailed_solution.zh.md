# 详细步骤 - A529

在理想化的内插模型中，每个比较器的跳变点按其所接节点的分压比成比例移动。因此对每组电阻求出其所控制分压比的最坏情况误差，换算为 LSB，并要求不超过 $\pm0.5$ LSB，1 LSB $=V_{REF}/8$。

### 第 1 步 — 基准分压器

$V_{REF}$ 与地之间的两个电阻把 $A_1$ 的基准设为 $V_{REF}/2$。容差为 $\pm\delta$ 时，最坏情况是一个电阻为 $R(1+\delta)$、另一个为 $R(1-\delta)$：

$$
V_{tap}=V_{REF}\,\frac{R(1\pm\delta)}{R(1+\delta)+R(1-\delta)}=\frac{V_{REF}}{2}(1\pm\delta),
\qquad \Delta V_{tap}=\pm\delta\,\frac{V_{REF}}2 .
$$

该抽头就是使 $A_1$ 输出穿过其中点的输入值，因此比较器 4 的跳变点（以及与 $V_1$ 相关的跳变点）移动同样的量：

$$
\Delta V_{tap}=\delta\,\frac{V_{REF}}{2}=\delta\,\frac{V_{REF}/2}{V_{REF}/8}\ \text{LSB}=4\delta\ \text{LSB}.
$$

要求 $4\delta\le0.5$：

$$
\frac{\Delta R}{R}\le\frac18=\pm12.5\% .
$$

这就是电阻串的结论：最坏情况 INL $=2^{N-1}\,\Delta R/R$（以该电阻串的 LSB 计），单个抽头取 $N=1$，此处换算为 3 位的 LSB。

### 第 2 步 — 内插电阻：抽头由什么决定

$V_1$ 由 $A_1$ 驱动，$V_2$ 由 $A_2$ 驱动，二者都视为理想电压源，电阻串底端接地。因此八个电阻构成两个相互独立的四电阻组：$V_2$–$V_{2a}$–$V_{2b}$–$V_{2c}$–$V_1$ 以及 $V_1$–$V_{1a}$–$V_{1b}$–$V_{1c}$–地。每组内的四个跳变点跨越 4 LSB，因此某抽头分压比 $\alpha$ 的变化 $\Delta\alpha$ 使其跳变点移动

$$
\Delta t=4\,\Delta\alpha\ \text{LSB}.
$$

### 第 3 步 — 四电阻组中的最坏抽头

对中间抽头（$V_{2b}$ 或 $V_{1b}$），组内电阻自上而下为 $R_a$ 到 $R_d$：

$$
\alpha=\frac{R_c+R_d}{R_a+R_b+R_c+R_d}.
$$

最坏情况是一侧两个电阻为 $R(1+\delta)$，另一侧两个为 $R(1-\delta)$：

$$
\alpha=\frac{2R(1+\delta)}{4R}=\frac{1+\delta}2,\qquad
\Delta\alpha=\frac\delta2,\qquad \Delta t=2\delta\ \text{LSB}.
$$

对四分之一抽头，最坏情况（一个电阻为 $R(1+\delta)$，三个为 $R(1-\delta)$）给出 $\alpha=(1+\delta)/(4-2\delta)\approx\tfrac14+\tfrac38\delta$，故 $\Delta t\approx1.5\delta$ LSB，较小。中间抽头是关键：

$$
2\delta\le0.5\;\Longrightarrow\;\frac{\Delta R}{R}\le\frac14=\pm25\% .
$$

这与 2 位电阻串的公式 $2^{2-1}\,\Delta R/R$ LSB 相同。

### 第 4 步 — 小结

| 电阻 | 最坏情况移动量 | 容差 |
|---|---|---|
| 基准分压器（两个 $R$） | $4\delta$ LSB | $\pm12.5\%$ |
| 内插电阻串（八个 $R$） | $2\delta$ LSB（组内中间抽头） | $\pm25\%$ |

若把八个内插电阻当作一条未被驱动的 3 位电阻串，忽略 $A_1$ 固定了 $V_1$，则得 $4\delta\le0.5$，即 $\pm12.5\%$；该界限偏保守。
