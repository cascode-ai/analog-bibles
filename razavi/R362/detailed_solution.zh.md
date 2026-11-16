# 详细步骤 - R362

**思路。** 由于 $\lambda = 0$，$M_1$ 和带负反馈的负载的输出电阻都为无穷大，因此电压增益为无穷大；改为比较**输出短路电流**，因为信号电流和噪声电流流入同一个输出阻抗（output impedance）。信号电流为 $g_{m1}v_{in}$；负载的噪声电流可通过分析 $M_2$ 及其负反馈电阻得到，把噪声电流除以 $g_{m1}$ 即可折算到输入端。

### 第 1 步 — 输出短路时的小信号模型（small-signal model）

把 $M_2$ 的源极记为 S2。

- **$M_1$：** 从输出端抽取 $g_{m1}v_{in} + I_{n1}$，其中 $\overline{I_{n1}^2} = 4kT\gamma g_{m1}$。
- **$M_2$**（栅极接交流地）：其源漏电流为 $g_{m2}v_{sg2} + I_{n2} = g_{m2}(v_{s2} - 0) + I_{n2}$，其中 $\overline{I_{n2}^2} = 4kT\gamma g_{m2}$。
- **$R_S$：** 接在交流地（$V_{DD}$）与 S2 之间，与其噪声电压 $V_{nS}$（$\overline{V_{nS}^2} = 4kTR_S$）串联。

三个噪声源互不相关。

<!-- diagram: diagram-01.cir -->

### 第 2 步 — 信号跨导

$M_2$ 的栅极接固定偏置，因此它不承载信号电流，由输入产生的输出短路电流只来自 $M_1$：

$$G_m = g_{m1}.$$

### 第 3 步 — 带负反馈的负载送出的噪声电流

设 $i_2$ 为流过 $M_2$、从 S2 流入输出端的总电流。在 S2 点，经 $R_S$ 流来的电流经 $M_2$ 流出：

$$\frac{V_{nS} - v_{s2}}{R_S} = g_{m2}v_{s2} + I_{n2},$$

$$
\begin{aligned}
V_{nS} - v_{s2} &= g_{m2}R_Sv_{s2} + R_SI_{n2}\\
v_{s2}(1 + g_{m2}R_S) &= V_{nS} - R_SI_{n2}\\
v_{s2} &= \frac{V_{nS} - R_SI_{n2}}{1 + g_{m2}R_S}.
\end{aligned}
$$

于是

$$
\begin{aligned}
i_2 &= g_{m2}v_{s2} + I_{n2} = \frac{g_{m2}V_{nS} - g_{m2}R_SI_{n2}}{1 + g_{m2}R_S} + I_{n2}\\
&= \frac{g_{m2}V_{nS} - g_{m2}R_SI_{n2} + I_{n2}(1 + g_{m2}R_S)}{1 + g_{m2}R_S}\\
&= \frac{g_{m2}V_{nS} + I_{n2}}{1 + g_{m2}R_S}.
\end{aligned}
$$

令 $I_{n2} = g_{m2}V_{n2}$，其中 $\overline{V_{n2}^2} = 4kT\gamma/g_{m2}$ 是 $M_2$ 折算到栅极的噪声，则

$$i_2 = \frac{g_{m2}}{1 + g_{m2}R_S}\left(V_{nS} + V_{n2}\right):$$

两个电压都位于 $M_2$ 的栅源回路中，并经**带负反馈的跨导** $g_{m2}/(1 + g_{m2}R_S)$ 到达输出端。其功率谱密度为

$$
\begin{aligned}
\overline{i_2^2} &= \frac{g_{m2}^2\overline{V_{nS}^2} + \overline{I_{n2}^2}}{(1 + g_{m2}R_S)^2} = \frac{g_{m2}^2\cdot4kTR_S + 4kT\gamma g_{m2}}{(1 + g_{m2}R_S)^2}\\
&= \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{(1 + g_{m2}R_S)^2}.
\end{aligned}
$$

### 第 4 步 — 输入参考噪声电压

噪声短路电流为 $I_{n1} + i_2$，与信号电流 $g_{m1}v_{in}$ 相比较：

$$
\begin{aligned}
\overline{V_{n,in}^2} &= \frac{\overline{I_{n1}^2} + \overline{i_2^2}}{g_{m1}^2}\\
&= \frac{4kT\gamma g_{m1}}{g_{m1}^2} + \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{g_{m1}^2(1 + g_{m2}R_S)^2}\\
&= \frac{4kT\gamma}{g_{m1}} + \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{g_{m1}^2(1 + g_{m2}R_S)^2}.
\end{aligned}
$$

### 第 5 步 — 验证与设计启示

- **$R_S = 0$：** 负载项变为 $4kT\gamma g_{m2}/g_{m1}^2$，即标准的电流源负载结果 $4kT\gamma\left(1/g_{m1} + g_{m2}/g_{m1}^2\right)$。
- **$g_{m2}R_S \gg 1$：**
$$\overline{i_2^2} \approx \frac{4kT\gamma g_{m2}}{g_{m2}^2R_S^2} + \frac{4kTg_{m2}^2R_S}{g_{m2}^2R_S^2} = \frac{4kT\gamma}{g_{m2}R_S^2} + \frac{4kT}{R_S} \approx \frac{4kT}{R_S},$$
因此负载项变为 $4kT/(g_{m1}^2R_S)$：深度负反馈的电流源，其噪声与单独的 $R_S$ 大致相同。
- **设计启示：** 只要 $4kT/R_S < 4kT\gamma g_{m2}$，即 $R_S > 1/(\gamma g_{m2})$，源极负反馈就能降低负载噪声；这就是低噪声设计中常常给电流源负载加源极负反馈的原因。

### 结果

$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kT\left(\gamma g_{m2} + g_{m2}^2R_S\right)}{g_{m1}^2(1 + g_{m2}R_S)^2}$$

由于 $\lambda = 0$ 时输出电阻为无穷大，这里采用了输出短路电流法；从输入端看的跨导为 $g_{m1}$。$M_2$ 折算到栅极的噪声（$4kT\gamma/g_{m2}$）和 $R_S$ 的噪声（$4kTR_S$）都经带负反馈的跨导 $g_{m2}/(1 + g_{m2}R_S)$ 到达输出端。

**常见错误。** 忽略源极负反馈，直接使用负载噪声 $4kT\gamma g_{m2}$。$R_S$ 使 $M_2$ 在漏极处的噪声电流减小 $1 + g_{m2}R_S$ 倍。

**常见错误。** 认为 $R_S$ 的噪声到达不了输出端，或者不论 $R_S$ 取何值都把它写成 $4kT/R_S$。它经 $g_{m2}/(1 + g_{m2}R_S)$ 到达漏极，给出 $4kTg_{m2}^2R_S/(1 + g_{m2}R_S)^2$，只有当 $g_{m2}R_S \gg 1$ 时才趋于 $4kT/R_S$。

**常见错误。** 除以一个依赖于 $R_S$ 的有限电压增益。带负反馈的 $M_2$ 对信号而言是理想电流源，因此 $R_S$ 只影响负载注入的噪声大小。
