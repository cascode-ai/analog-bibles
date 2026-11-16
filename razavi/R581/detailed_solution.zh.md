# 详细步骤 - R581

**思路。** 跟踪一个时钟周期内 $C_1$ 和 $C_2$ 上的电荷。$M_1$ 关断时会在 $C_1$ 上留下误差（电荷注入加上时钟馈通）。在 $M_2$ 完整的导通–关断过程中，对孤立的 $C_1$–$C_2$ 节点应用电荷守恒，可以证明 $M_2$ 关断时归还的电荷恰好等于它导通时取走的电荷。再由逐周期的电荷分享递推关系，即可得到许多周期之后的输出误差。

### 第 1 步 — 理想工作情况与假设

把 $C_1$ 的上极板记为 X。若开关是理想的，则对第 $k$ 次电荷分享（$C_1 = C_2 = C$）应用电荷守恒，得

$$
\begin{aligned}
C\,V_{in} + C\,V_{out}[k-1] &= 2C\,V_{out}[k]\\
V_{out}[k] &= \frac{V_{in} + V_{out}[k-1]}{2},
\end{aligned}
$$

因此对于恒定输入，$V_{out} \to V_{in}$；任何其他终值都是开关引起的误差。

每个开关的栅极与其两个扩散区端（diffusion terminal）之间各有一个交叠电容 $WC_{ov}$。假设 $WC_{ov} \ll C$：交叠电容作为时钟线的耦合路径是重要的，但忽略它们带来的负载，因此每个节点的电容都是 $C$。

### 第 2 步 — $M_1$ 关断：存储在 $C_1$ 上的误差

CK 为高电平时，$M_1$ 工作在深线性区（deep triode），两端均为 $V_{in}$，因此其沟道电荷为

$$q_1 = WLC_{ox}\,(V_{DD} - V_{in} - V_{TH1}),$$

其中 $V_{TH1} \ge V_{TH0}$ 包含了 $V_{SB} = V_{in}$ 时的体效应（衬底接地），并随 $V_{in}$ 升高而增大。

**电荷注入。** CK 下降时，设沟道电子中有比例为 $\alpha$ 的部分流向 $C_1$，其余流向输入源并被其吸收。题中未给出分配比例，因此保留 $\alpha$：$\alpha = 1$ 是最坏情况，$\alpha = \tfrac12$ 对应平均分配。

$$\Delta V_{inj} = -\frac{\alpha\,q_1}{C}.$$

**时钟馈通。** CK 下降 $V_{DD}$，并经 $M_1$ 的交叠电容耦合到 X（采用教材中偏保守的模型，即整个摆幅全部耦合过去）：

$$\Delta V_{ft} = -V_{DD}\,\frac{WC_{ov}}{WC_{ov} + C} \approx -\frac{WC_{ov}V_{DD}}{C}.$$

$M_1$ 关断后，$C_1$ 上保持的电压为

$$V_1 = V_{in} - \Delta V_1, \qquad \Delta V_1 = \frac{\alpha\,WLC_{ox}(V_{DD} - V_{in} - V_{TH1}) + WC_{ov}V_{DD}}{C}.$$

两项都使存储电压降低，而且 $\Delta V_1$ 与 $V_{in}$ 有关（线性相关，并经由 $V_{TH1}$ 呈非线性相关）：这是一个与输入相关的误差。

### 第 3 步 — $M_2$ 导通：合并节点上的电荷守恒

就在 $\overline{CK}$ 上升之前，X 处于 $V_1$，输出处于 $V_2 = V_{out}[k-1]$，$M_2$ 的栅极为 0。由于 $M_1$ 已关断，X 与 $V_{out}$ 随后构成一个总电荷守恒的**孤立节点**。与之相连的有：接地的 $C_1$ 和 $C_2$，$M_2$ 连到其栅极（$\overline{CK}$）的两个交叠电容，以及 $M_2$ 导通期间的沟道——它相当于一个从该节点接到栅极的电容 $WLC_{ox}$。

<!-- diagram: diagram-01.cir -->

**$M_2$ 导通之前**（栅极为 0）：

$$Q_{before} = C V_1 + C V_2 + WC_{ov}(V_1 - 0) + WC_{ov}(V_2 - 0).$$

**$M_2$ 导通期间**（栅极为 $V_{DD}$，两侧处于同一电压 $V_x$），沟道中存有电子，即在节点一侧有电荷 $-q_2$，其中

$$q_2 = WLC_{ox}\,(V_{DD} - V_x - V_{TH2}),$$

因此

$$Q_{on} = 2C V_x + 2WC_{ov}(V_x - V_{DD}) - q_2.$$

令 $Q_{before} = Q_{on}$，并在 $V_1$、$V_2$ 和 $V_x$ 的系数中利用 $WC_{ov} \ll C$：

$$
\begin{aligned}
C(V_1 + V_2) &= 2C V_x - 2WC_{ov}V_{DD} - q_2\\
V_x &= \frac{V_1 + V_2}{2} + \frac{WC_{ov}V_{DD} + q_2/2}{C}.
\end{aligned}
$$

$M_2$ 导通期间，节点电压**高于**理想平均值：上升的栅极经交叠电容推入电荷，而形成沟道又从电容中抽走电子。

### 第 4 步 — $M_2$ 关断：其误差相互抵消

当 $\overline{CK}$ 下降时，沟道电荷 $-q_2$ 平均分配（题目给定），每个电容各得 $-q_2/2$，同时栅极通过每个交叠电容耦合一个 $-V_{DD}$ 的阶跃。此时两个节点彼此隔离，因此分别对每个节点应用电荷守恒。

**节点 X：**

$$
\begin{aligned}
C V_{1f} + WC_{ov}(V_{1f} - 0) &= C V_x + WC_{ov}(V_x - V_{DD}) - \frac{q_2}{2}\\
V_{1f} &\approx V_x - \frac{WC_{ov}V_{DD} + q_2/2}{C}.
\end{aligned}
$$

**输出节点：** 电容同为 $C$，交叠电容同为 $WC_{ov}$，分得的沟道电荷也同为一半，因此得到相同的方程：

$$V_{2f} \approx V_x - \frac{WC_{ov}V_{DD} + q_2/2}{C}.$$

代入第 3 步中的 $V_x$：

$$
\begin{aligned}
V_{2f} &= \frac{V_1 + V_2}{2} + \frac{WC_{ov}V_{DD} + q_2/2}{C} - \frac{WC_{ov}V_{DD} + q_2/2}{C}\\
&= \frac{V_1 + V_2}{2} = V_{1f}.
\end{aligned}
$$

$M_2$ 恰好归还了它借走的沟道电荷，其栅极也恰好耦合回了它推入的交叠电荷，因此 **$M_2$ 不产生净误差**：结果就是 $V_1$ 与 $V_2$ 的理想电荷分享。这一结论依赖于电荷平均分配、$C_1 = C_2$ 以及两侧交叠电容相等。X 上还连接着 $M_1$ 的交叠电容（X 处为 $C + 2WC_{ov}$，而输出端为 $C + WC_{ov}$），因此这种抵消只精确到 $WC_{ov}/C$ 的一阶。

### 第 5 步 — 逐周期递推与稳态

由第 2 步和第 4 步可知，第 $k$ 次转移后的保持输出为

$$V_{out}[k] = \frac{V_1 + V_{out}[k-1]}{2} = \frac{(V_{in} - \Delta V_1) + V_{out}[k-1]}{2}.$$

这就是第 1 步中的理想平均器，只是把 $V_{in}$ 换成了 $V_{in} - \Delta V_1$。由 $2V^* = V_{in} - \Delta V_1 + V^*$ 得其不动点为 $V^* = V_{in} - \Delta V_1$，并且

$$V_{out}[k] = V^* + \frac{V_{out}[0] - V^*}{2^k}.$$

如果输出从正确值 $V_{in}$ 开始，误差会逐渐增大到其终值：

| 转移次数 $k$ | 1 | 2 | 3 | $\to\infty$ |
|---|---|---|---|---|
| $V_{in} - V_{out}[k]$ | $\Delta V_1/2$ | $3\Delta V_1/4$ | $7\Delta V_1/8$ | $\Delta V_1$ |

输入已施加了许多个周期，因此输出已稳定在 $V_{out} = V_{in} - \Delta V_1$：$C_2$ 反复与一个总是带有相同误差的 $C_1$ 求平均，最终也带上了这全部的误差。

### 第 6 步 — 周期中哪个阶段的误差最大？

稳态下 $M_2$ 导通期间（闭合前 $V_1 = V_2 = V_{in} - \Delta V_1$），由第 3 步得

$$
\begin{aligned}
V_{out,on} = V_x &= V_{in} - \Delta V_1 + \frac{WC_{ov}V_{DD} + q_2/2}{C}\\
&= V_{in} - \frac{\alpha q_1 + WC_{ov}V_{DD}}{C} + \frac{WC_{ov}V_{DD} + q_2/2}{C}\\
&= V_{in} - \frac{\alpha q_1}{C} + \frac{q_2}{2C}.
\end{aligned}
$$

由于 $V_x \approx V_{in}$，有 $q_2 \approx q_1$，于是 $V_{out,on} \approx V_{in} + (\tfrac12 - \alpha)\,q_1/C$。当 $\alpha = \tfrac12$ 时，导通阶段的输出恰好等于 $V_{in}$，而保持值仍为 $V_{in} - \Delta V_1$。当 $\tfrac12 \le \alpha \le 1$ 时，导通阶段的误差 $(\alpha - \tfrac12)\,q_1/C$ 小于保持误差 $(\alpha q_1 + WC_{ov}V_{DD})/C$，因此**保持值（$M_2$ 关断之后）的误差最大**。

### 第 7 步 — 输入范围内的最坏情况

展开后，误差由增益误差（$1 + \alpha WLC_{ox}/C$）、失调以及经由 $V_{TH1}(V_{in})$ 产生的非线性组成：

$$V_{out} = V_{in} - \Delta V_1 = V_{in}\left(1 + \frac{\alpha WLC_{ox}}{C}\right) - \frac{\alpha WLC_{ox}(V_{DD} - V_{TH1})}{C} - \frac{WC_{ov}V_{DD}}{C}.$$

$V_{DD} - V_{in} - V_{TH1}$ 随 $V_{in}$ 升高而减小，这既是直接作用，也是体效应的作用；而馈通项与 $V_{in}$ 无关。因此误差在 $V_{in} = 0$ 时最大，此时 $V_{TH1} = V_{TH0} = 0.7$ V：

$$
\begin{aligned}
V_{DD} - V_{TH0} &= 3\ \mathrm{V} - 0.7\ \mathrm{V} = 2.3\ \mathrm{V},\\
|\Delta V_{out}|_{max} &= \frac{\alpha\,(2.3\ \mathrm{V})\,WLC_{ox} + (3\ \mathrm{V})\,WC_{ov}}{C}.
\end{aligned}
$$

- $\alpha = 1$（全部沟道电荷都流向 $C_1$）：$|\Delta V_{out}|_{max} = \dfrac{(2.3\ \mathrm{V})\,WLC_{ox} + (3\ \mathrm{V})\,WC_{ov}}{C}$。
- $\alpha = \tfrac12$：$|\Delta V_{out}|_{max} = \dfrac{(1.15\ \mathrm{V})\,WLC_{ox} + (3\ \mathrm{V})\,WC_{ov}}{C}$。

在输入范围的上端（$V_{in} \to V_{DD} - V_{TH}$），沟道电荷趋于零，只剩下馈通项 $WC_{ov}V_{DD}/C$。

### 结果

$M_2$ 不产生净误差（其导通和关断时的电荷相互抵消）。经过许多周期后，保持输出带有 $M_1$ 的全部误差：

$$V_{out} = V_{in} - \Delta V_1, \qquad \Delta V_1 \approx \frac{\alpha\,WLC_{ox}(V_{DD} - V_{in} - V_{TH}) + WC_{ov}V_{DD}}{C},$$

其中 $\alpha$ 是 $M_1$ 的沟道电荷中流向 $C_1$ 的比例（最坏情况 $\alpha = 1$，平均分配时 $\alpha = \tfrac12$），$V_{TH}$ 包含 $V_{SB} = V_{in}$ 时的体效应。误差在 $V_{in} = 0$ 时最大：

$$|\Delta V_{out}|_{max} \approx \frac{WLC_{ox}(V_{DD} - V_{TH0}) + WC_{ov}V_{DD}}{C} = \frac{(2.3\ \mathrm{V})\,WLC_{ox} + (3\ \mathrm{V})\,WC_{ov}}{C}\quad(\alpha = 1),$$

当 $\alpha = \tfrac12$ 时则为 $[(1.15\ \mathrm{V})\,WLC_{ox} + (3\ \mathrm{V})\,WC_{ov}]/C$。第一次转移后只出现该误差的一半，经过多个周期才逐渐累积到全部值。

**常见错误。** 把 $M_2$ 的关断当作每个周期都在 $C_2$ 上新叠加一个台阶 $-(q_2/2 + WC_{ov}V_{DD})/C$，由此得到的稳态误差大约是正确值的三倍。$M_2$ 导通时从电容中取走了同样的沟道电荷和交叠电荷，因此两种效应相互抵消。

**常见错误。** 只给出第一次转移后的误差 $\Delta V_1/2$。输入已经施加了许多个周期，平均过程会把保持输出推向完整的 $\Delta V_1$。

**常见错误。** 认为 $M_1$ 的误差与 $V_{in}$ 无关，或者漏掉了它的时钟馈通。沟道电荷正比于 $V_{DD} - V_{in} - V_{TH}$，而交叠项 $WC_{ov}V_{DD}/C$ 在任何输入下都存在；NMOS 开关注入的是电子，因此台阶总是负的。
