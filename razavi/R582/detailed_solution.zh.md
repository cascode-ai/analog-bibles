# 详细步骤 - R582

**思路。** 把每个闭合的开关建模为一个有噪声的电阻。$M_1$ 在 $C_1$ 上留下一个 kT/C 噪声样本。$M_2$ 导通期间，它的噪声只能在 $C_1$ 与 $C_2$ **之间**搬移电荷，因此把两个电容电压分解为平均值（不受 $M_2$ 影响）和差值（被 $M_2$ 重新随机化）。把互不相关的方差相加，就得到输出噪声在相邻两次转移之间的递推关系，再分别求出第一次转移和稳态时的解。

### 第 1 步 — $M_1$ 关断时 $C_1$ 上的噪声

闭合的开关是一个电阻 $R_{on}$，其噪声功率谱密度（PSD）为 $4kTR_{on}$；开关断开时，它所驱动的电容 $C_x$ 上保持一个方差为 $kT/C_x$ 的样本，与 $R_{on}$ 无关。所有噪声源均值为零且互不相关，因此方差相加。

CK 为高电平时，$M_1$ 把 $C_1$ 连接到 $V_{in}$（视为无噪声），完全建立会抹去 $C_1$ 上原有的电荷。$M_1$ 断开时，$C_1$ 保持 $V_1 = V_{in} + n_1$，其中

$$\overline{n_1^2} = \frac{kT}{C_1} = \frac{kT}{C},$$

它每个周期都是一个新的值，与之前所有的噪声都不相关。

### 第 2 步 — $M_2$ 的噪声能改变什么、不能改变什么

就在 $M_2$ 导通之前，$C_2$ 保持着上一次的输出 $V_{2,old}$，其噪声 $n_{2,old}$ 的方差为 $\sigma_{old}^2$。由于 $M_1$ 已关断（时钟不交叠），电路是一个经过地的单一回路：$C_1$、$M_2$ 的导通电阻 $R_{on2}$ 及其噪声源，以及 $C_2$。

<!-- diagram: diagram-01.cir -->

采用两个电容电压的**平均值**和**差值**：

$$\bar V = \frac{V_1 + V_2}{2}, \qquad V_d = V_1 - V_2, \qquad\text{so}\qquad V_2 = \bar V - \frac{V_d}{2}.$$

**平均值固定不变。** 任何回路电流都是从 $C_1$ 流出、流入 $C_2$，因此 $dQ_1 = -dQ_2$；又因 $C_1 = C_2 = C$，总电荷 $C(V_1 + V_2)$ 不能改变，从而 $\bar V$ 也不能改变：

$$\bar V = \frac{V_1 + V_{2,old}}{2} = V_{in}\text{-dependent signal} + \frac{n_1 + n_{2,old}}{2}.$$

$M_2$ 的噪声根本不进入 $\bar V$。

**差值被重新随机化。** 沿回路看，$V_d$ 是串联的 $C_1$ 与 $C_2$ 两端的电压，

$$C_s = \frac{C_1C_2}{C_1 + C_2} = \frac{C\cdot C}{2C} = \frac{C}{2},$$

因此该回路就是单个 $R_{on2}$ 驱动单个 $C_s$。完全建立后，$V_d$ 的旧值衰减殆尽，$M_2$ 断开时 $V_d$ 是纯噪声，

$$\overline{V_d^2} = \frac{kT}{C_s} = \frac{kT}{C/2} = \frac{2kT}{C},$$

它只由本相位内的 $R_{on2}$ 产生，因此与 $n_1$ 和 $n_{2,old}$ 不相关。

### 第 3 步 — $M_2$ 关断后的输出噪声

$M_2$ 断开时，输出被保持在

$$V_{out} = V_2 = \bar V - \frac{V_d}{2} = (\text{signal}) + \frac{n_1}{2} + \frac{n_{2,old}}{2} - \frac{V_d}{2}.$$

这三个噪声项互不相关，而把一个量乘以 $a$ 会使其方差乘以 $a^2$：

$$
\begin{aligned}
\overline{\left(\tfrac{n_1}{2}\right)^2} &= \frac14\cdot\frac{kT}{C} = \frac{kT}{4C} &&\text{(from } M_1\text{)},\\
\overline{\left(\tfrac{n_{2,old}}{2}\right)^2} &= \frac14\,\sigma_{old}^2 &&\text{(memory of earlier cycles)},\\
\overline{\left(\tfrac{V_d}{2}\right)^2} &= \frac14\cdot\frac{2kT}{C} = \frac{kT}{2C} &&\text{(from } M_2\text{)}.
\end{aligned}
$$

求和：

$$\sigma_{out}^2 = \frac{\sigma_{old}^2}{4} + \frac{kT}{4C} + \frac{kT}{2C} = \frac{\sigma_{old}^2}{4} + \frac{3kT}{4C}.$$

### 第 4 步 — 第一次转移

若 $C_2$ 初始时无噪声（$\sigma_{old}^2 = 0$）：

$$\overline{v_{n,out}^2}\Big|_{1st} = 0 + \frac{kT}{4C} + \frac{kT}{2C} = \frac{3kT}{4C}.$$

### 第 5 步 — 许多周期后的稳态

设 $\sigma_k^2$ 为第 $k$ 次转移后的输出方差，则

$$\sigma_k^2 = \frac{\sigma_{k-1}^2}{4} + \frac{3kT}{4C}.$$

稳态时 $\sigma_k^2 = \sigma_{k-1}^2 = \sigma^2$：

$$
\begin{aligned}
\sigma^2 &= \frac{\sigma^2}{4} + \frac{3kT}{4C}\\
\frac34\,\sigma^2 &= \frac34\cdot\frac{kT}{C}\\
\sigma^2 &= \frac{kT}{C}.
\end{aligned}
$$

减去不动点，得 $\sigma_k^2 - kT/C = \tfrac14(\sigma_{k-1}^2 - kT/C)$，因此从 $\sigma_0^2 = 0$ 出发，

$$\sigma_k^2 = \frac{kT}{C}\left(1 - 4^{-k}\right).$$

| 转移次数 $k$ | 1 | 2 | 3 | $\to\infty$ |
|---|---|---|---|---|
| $\sigma_k^2$ | $0.75\,kT/C$ | $0.9375\,kT/C$ | $0.984\,kT/C$ | $kT/C$ |

记忆项每个周期衰减 4 倍，因此几个周期内即可达到稳态。对等比级数 $1 + \tfrac14 + \tfrac1{16} + \dots = \tfrac43$ 求和，可把稳态值分解为：

- 来自 $M_1$：$\dfrac{kT}{4C}\cdot\dfrac43 = \dfrac{kT}{3C}$；
- 来自 $M_2$：$\dfrac{kT}{2C}\cdot\dfrac43 = \dfrac{2kT}{3C}$；
- 总计：$\dfrac{kT}{3C} + \dfrac{2kT}{3C} = \dfrac{kT}{C}$。

### 第 6 步 — 验证：热平衡

稳态时平均值 $\bar V$ 的方差为

$$\frac{kT}{4C} + \frac{1}{4}\cdot\frac{kT}{C} = \frac{kT}{2C} = \frac{kT}{C_1 + C_2},$$

而差值的方差为 $2kT/C = kT/C_s$：每个独立模式各占 $\tfrac12 kT$，每个电容上的 $\overline{V^2} = \tfrac{kT}{2C} + \tfrac14\cdot\tfrac{2kT}{C} = \tfrac{kT}{C}$，这正是温度 $T$ 下处于平衡态的电容 $C$ 所应具有的值。

### 结果

$M_2$ 关断后保持在 $C_2$ 上的采样噪声满足 $\sigma_{out}^2 = \sigma_{old}^2/4 + 3kT/(4C)$，因此

$$\overline{v_{n,out}^2} = \frac{kT}{C}\quad\text{(steady state, after many cycles; rms } \sqrt{kT/C}\text{)},$$

而对于第一次转移（$C_2$ 初始时无噪声），$\overline{v_{n,out}^2} = 3kT/(4C)$。每次转移有两部分贡献：$M_1$ 在 $C_1$ 上留下的 $kT/C$，经电荷分享后减小为 $kT/(4C)$；$M_2$ 在差值 $V_1 - V_2$ 上产生的 $2kT/C$，在输出端表现为 $kT/(2C)$。

**常见错误。** 把分享电荷的两个电容当作一个电容 $C_1 + C_2 = 2C$，从而得出 $kT/(2C)$。$M_2$ 串联在两个电容之间，它看到的是 $C_1$ 与 $C_2$ 的串联（$C/2$），只会把**差值**随机化（方差为 $2kT/C$），而**平均值**保留着 $M_1$ 采样的噪声。

**常见错误。** 只计入一个开关：只算 $M_1$ 得到 $kT/(4C)$，或只算 $M_2$ 得到 $kT/(2C)$。两个开关每个周期都会采样噪声，而且旧的输出噪声会通过求平均过程传递下去。

**常见错误。** 把均方根电压直接相加，例如 $\tfrac12\sqrt{kT/C} + \sqrt{kT/(2C)}$；独立噪声源应按功率（方差）相加，而不是按幅度相加。
