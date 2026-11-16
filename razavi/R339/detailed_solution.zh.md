# 详细步骤 - R339

**思路。** 把 $M_2$ 换成一个理想电流源加上注入输出端的噪声电流 $I_{n2}$。从 $M_2$ 进入输出端的电流都必须经 $M_1$ 和 $R_F$ 流向源极节点 S，再向下流过 $R_S$；由此确定源极电压，再列一个 KCL 方程，就能用信号和四个噪声源表示 $v_{out}$，然后通过增益把每个噪声源折算到输入端。

### 第 1 步 — 小信号模型（small-signal model）

- **$M_2$：** 栅极接固定偏置且 $\lambda = 0$，因此它不承载信号电流，输出电阻（output resistance）为无穷大；只剩下其沟道噪声 $I_{n2}$（$\overline{I_{n2}^2} = 4kT\gamma g_{m2}$），从 $V_{DD}$ 流入输出端。
- **$M_1$：** 从输出端流向 S 的电流源 $g_{m1}(v_{in} - v_S)$，其噪声 $I_{n1}$（$\overline{I_{n1}^2} = 4kT\gamma g_{m1}$）与之并联。
- **$R_F$：** 接在输出端与 S 之间，其诺顿噪声 $I_{nF}$（$\overline{I_{nF}^2} = 4kT/R_F$）与之并联，同样从输出端流向 S。
- **$R_S$：** 接在 S 与地之间，与其戴维南噪声电压 $V_{nS}$（$\overline{V_{nS}^2} = 4kTR_S$）串联。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — $R_S$ 中的电流与源极电压

流入输出端的唯一电流是 $I_{n2}$，它必须经 $M_1$ 和 $R_F$ 流出，而这两条支路都通向 S：

$$I_{n2} = \underbrace{g_{m1}(v_{in} - v_S) + I_{n1}}_{M_1} + \underbrace{\frac{v_{out} - v_S}{R_F} + I_{nF}}_{R_F}. \tag{1}$$

因此到达 S 的电流恰好是 $I_{n2}$，而它唯一的出路是 $R_S$；从 S 经 $V_{nS}$ 和 $R_S$ 应用基尔霍夫电压定律（KVL）得

$$v_S = V_{nS} + R_SI_{n2}. \tag{2}$$

**$R_S$ 中没有信号电流**：仅就信号而言，S 处于交流地，因此 $R_S$ 不影响增益。

### 第 3 步 — 输出电压

将式 (1) 乘以 $R_F$，并解出 $v_{out}$：

$$
\begin{aligned}
v_{out} - v_S &= R_F\left[I_{n2} - I_{n1} - I_{nF} - g_{m1}(v_{in} - v_S)\right]\\
v_{out} &= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)\,v_S + R_F(I_{n2} - I_{n1} - I_{nF}).
\end{aligned}
$$

代入式 (2)：

$$
\begin{aligned}
v_{out} &= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)(V_{nS} + R_SI_{n2}) + R_FI_{n2} - R_F(I_{n1} + I_{nF})\\
&= -g_{m1}R_F\,v_{in} + (1 + g_{m1}R_F)V_{nS} + \left[(1 + g_{m1}R_F)R_S + R_F\right]I_{n2} - R_F(I_{n1} + I_{nF}).
\end{aligned}
$$

$I_{n2}$ 的系数展开为 $(1 + g_{m1}R_F)R_S + R_F = R_S + R_F + g_{m1}R_FR_S$。

### 第 4 步 — 增益与各噪声源的传递路径

$$A_v = \frac{v_{out}}{v_{in}} = -g_{m1}R_F :$$

$M_2$ 无法提供信号电流 $g_{m1}v_{in}$，因此该电流经 $R_F$ 环流。

- $I_{n1}$ 和 $I_{nF}$ 在输出端与 S 之间流动，经 $R_F$ 闭合：$-R_F(I_{n1} + I_{nF})$。
- $V_{nS}$ 使源极电压变化，使 $M_1$ 的电流改变 $-g_{m1}V_{nS}$，该电流经 $R_F$ 返回；同时输出端也直接跟随 S 变化：$(1 + g_{m1}R_F)V_{nS}$。
- $I_{n2}$ 使 S 升高 $R_SI_{n2}$，其作用与源极噪声电压相同（增益为 $1 + g_{m1}R_F$）；此外，流过 $R_F$ 的那部分电流还附加了压降 $R_FI_{n2}$。

### 第 5 步 — 折算到输入端

把每个系数除以 $|A_v| = g_{m1}R_F$ 再平方；各噪声源互不相关，因此功率相加：

- **$M_1$：** $\dfrac{R_F}{g_{m1}R_F} = \dfrac{1}{g_{m1}}$，因此贡献为 $\dfrac{4kT\gamma g_{m1}}{g_{m1}^2} = \dfrac{4kT\gamma}{g_{m1}}$。
- **$R_F$：** 同样为 $\dfrac{1}{g_{m1}}$，因此为 $\dfrac{4kT/R_F}{g_{m1}^2} = \dfrac{4kT}{g_{m1}^2R_F}$。
- **$R_S$：** $\dfrac{1 + g_{m1}R_F}{g_{m1}R_F}$，因此为 $4kTR_S\dfrac{(1 + g_{m1}R_F)^2}{(g_{m1}R_F)^2}$。
- **$M_2$：** $\dfrac{R_S + R_F + g_{m1}R_FR_S}{g_{m1}R_F}$，因此为 $4kT\gamma g_{m2}\dfrac{(R_S + R_F + g_{m1}R_FR_S)^2}{(g_{m1}R_F)^2}$。

求和：

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_F} + 4kTR_S\frac{(1 + g_{m1}R_F)^2}{(g_{m1}R_F)^2} + 4kT\gamma g_{m2}\frac{(R_S + R_F + g_{m1}R_FR_S)^2}{(g_{m1}R_F)^2}.$$

### 第 6 步 — 验证

- **$R_S = 0$：** 第三项消失，$M_2$ 项变为 $4kT\gamma g_{m2}R_F^2/(g_{m1}R_F)^2 = 4kT\gamma g_{m2}/g_{m1}^2$，因此
$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_F} + \frac{4kT\gamma g_{m2}}{g_{m1}^2},$$
这正是以 $R_F$（此时接地）和电流源 $M_2$ 为负载的共源级的熟悉结果。
- **量纲：** $R_S$、$1/g_{m1}$、$1/(g_{m1}^2R_F)$ 和 $g_{m2}(\text{resistance})^2$ 都具有电阻的量纲，因此每一项都是 $4kT\times$（欧姆），单位为 V²/Hz。
- **$g_{m1}R_F$ 很大时：** $R_S$ 项趋于 $4kTR_S$，$M_2$ 项趋于 $4kT\gamma g_{m2}(R_S + 1/g_{m1})^2$：$M_2$ 的噪声电流在 $R_S$ 上产生的电压像输入信号一样被放大。

### 结果

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT}{g_{m1}^2R_F} + 4kTR_S\frac{(1+g_{m1}R_F)^2}{(g_{m1}R_F)^2} + 4kT\gamma g_{m2}\frac{(R_S + R_F + g_{m1}R_FR_S)^2}{(g_{m1}R_F)^2}$$

信号增益为 $A_v = -g_{m1}R_F$。$R_S$ 中没有信号电流，但有 $M_2$ 的噪声电流，这就是 $R_S$ 出现在 $M_2$ 项中的原因。当 $R_S = 0$ 时，结果化为 $4kT\gamma/g_{m1} + 4kT/(g_{m1}^2R_F) + 4kT\gamma g_{m2}/g_{m1}^2$。

**常见错误。** 把 $M_2$ 当作决定增益的负载，或当作无噪声元件。它是理想电流源：不承载信号电流，因此增益为 $-g_{m1}R_F$；但它会注入噪声电流 $I_{n2}$。

**常见错误。** 把增益写成 $g_{m1}R_F/(1 + g_{m1}R_S)$，仿佛 $R_S$ 对 $M_1$ 构成源极负反馈（source degeneration）。$M_2$ 不提供信号电流，因此没有信号电流到达 $R_S$，对信号而言源极是交流地。

**常见错误。** 在 $I_{n2}$ 的系数中只保留 $R_F$（即使 $R_S \ne 0$ 也得到 $4kT\gamma g_{m2}/g_{m1}^2$）。$I_{n2}$ 向下流过 $R_S$，使源极升高 $R_SI_{n2}$，这个电压被放大 $1 + g_{m1}R_F$ 倍。
