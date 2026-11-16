# 详细步骤 - R443

**思路。** 输出端既是下方共源共栅（cascode）管 $M_2$ 的漏极，也是上方 PMOS 电流源 $I_2$ 的漏极；只要两者都保持饱和，输出就可以摆动。下限取决于 X 处的直流电压，而在这种调节型共源共栅（regulated cascode）结构中，它由经过 $M_3$ 的反馈确定。因此先求 $V_X$，再求各过驱动电压（overdrive voltage）和两个极限。

### 第 1 步 — 电流与 X 处的电压

由于栅极不吸取电流，$I_1$ 全部流过 $M_3$（$I_{D3} = 100\ \mu$A），$I_2$ 全部依次流过 $M_2$ 和 $M_1$（$I_{D2} = I_{D1} = 0.5$ mA）。

负反馈环路 $X \to M_3 \to M_2 \to X$ 稳定在 $M_3$ 恰好流过 $I_1$ 的位置；$M_3$ 的栅极就是 X，源极接地，因此 $V_X = V_{GS3}$。由 $(W/L)_{1-3} = 100/0.5 = 200$，且 $M_3$ 没有体效应：

$$
\begin{aligned}
V_{ov3} &= \sqrt{\frac{2I_{D3}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2\,(100\ \mu\mathrm{A})}{(134\ \mu\mathrm{A/V^2})(200)}} = \sqrt{7.46\times10^{-3}}\ \mathrm{V} = 0.086\ \mathrm{V},\\
V_X &= V_{GS3} = V_{TH0} + V_{ov3} = 0.7\ \mathrm{V} + 0.086\ \mathrm{V} = 0.786\ \mathrm{V}.
\end{aligned}
$$

### 第 2 步 — 下限：$M_2$ 必须保持饱和

当 $V_{out} \ge V_{G2} - V_{TH2}$ 时 $M_2$ 处于饱和区，而其栅极比 X 高一个栅源电压，即 $V_{G2} = V_X + V_{TH2} + V_{ov2}$：

$$
\begin{aligned}
V_{out} &\ge (V_X + V_{TH2} + V_{ov2}) - V_{TH2}\\
V_{out} &\ge V_X + V_{ov2} .
\end{aligned}
$$

$M_2$ 的阈值电压（threshold voltage）相互抵消，因此其体效应（使 $V_{G2}$ 和 $V_{TH2}$ 升高相同的量）在这里没有影响。对于 0.5 mA：

$$
V_{ov2} = \sqrt{\frac{2I_{D2}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(200)}} = \sqrt{0.0373}\ \mathrm{V} = 0.193\ \mathrm{V}.
$$

因此

$$V_{out,min} = V_{GS3} + V_{ov2} = 0.786\ \mathrm{V} + 0.193\ \mathrm{V} = 0.98\ \mathrm{V}.$$

$M_1$ 以相同的 $W/L$ 流过 0.5 mA，因此 $V_{ov1} = 0.193$ V，而 $V_{DS1} = V_X = 0.786\ \mathrm{V} > 0.193$ V：处于饱和区，且比所需的电压多出约 0.6 V。这正是调节型共源共栅的代价：X 被钳定在 $V_{GS3}$，而不是最小值 $V_{ov1}$。

### 第 3 步 — 上限：PMOS 电流源 $I_2$ 必须保持饱和

实现 $I_2$ 的 PMOS 电流源源极接 $V_{DD}$，$(W/L)_P = 50/0.5 = 100$，它要求

$$V_{out} \le V_{DD} - |V_{ov,P2}| ,$$

其中

$$
\begin{aligned}
|V_{ov,P2}| &= \sqrt{\frac{2I_2}{\mu_pC_{ox}(W/L)_P}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(100)}}\\
&= \sqrt{\frac{1\times10^{-3}}{3.84\times10^{-3}}}\ \mathrm{V} = \sqrt{0.260}\ \mathrm{V} = 0.510\ \mathrm{V},
\end{aligned}
$$

因此

$$V_{out,max} = 3\ \mathrm{V} - 0.510\ \mathrm{V} = 2.49\ \mathrm{V}.$$

### 第 4 步 — 允许的摆幅

$$
\begin{aligned}
\Delta V_{out} &= V_{out,max} - V_{out,min}\\
&= \left(V_{DD} - |V_{ov,P2}|\right) - \left(V_{GS3} + V_{ov2}\right)\\
&= 2.49\ \mathrm{V} - 0.98\ \mathrm{V}\\
&= 1.51\ \mathrm{V}.
\end{aligned}
$$

对于 $M_1$ 偏置在饱和区边缘的普通共源共栅结构，输出可以低至 $V_{ov1} + V_{ov2} = 0.39$ V，约低 0.6 V：增益提升（gain boosting）大约要牺牲一个阈值电压的摆幅。

| 极限 | 决定因素 | 表达式 | 数值 |
|---|---|---|---|
| 最低 $V_{out}$ | $M_2$ 进入线性区（triode region） | $V_{GS3} + V_{ov2}$ | 0.98 V |
| 最高 $V_{out}$ | PMOS 电流源 $I_2$ 进入线性区 | $V_{DD} - \lvert V_{ov,P2}\rvert$ | 2.49 V |

### 结果

$V_{out}$ 的范围约为 0.98 V 至 2.49 V，因此允许的最大摆幅为

$$V_{DD} - |V_{ov,P2}| - V_{GS3} - V_{ov2} = 3 - 0.510 - 0.786 - 0.193 \approx 1.51\ \mathrm{V_{pp}} .$$

**常见错误。** 像普通共源共栅结构那样，把下限取为 $V_{ov1} + V_{ov2} \approx 0.39$ V。这里经过 $M_3$ 的反馈迫使 X 等于 $V_{GS3} = 0.786$ V。

**常见错误。** 把上限写成 $V_{DD} - |V_{GS,P}|$。输出端接的是 PMOS 管的**漏极**，源漏之间只需保留 $|V_{ov}| = 0.51$ V。

**常见错误。** 对 $M_1$–$M_3$ 取 $W/L = 100$（实际应为 $100/0.5 = 200$）。这会使 $V_{GS3}$ 升至 0.82 V，$V_{ov2}$ 升至 0.27 V，摆幅只剩约 1.39 V。
