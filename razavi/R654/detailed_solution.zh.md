# 详细步骤 - R654

**思路。** 推导 I 型 PLL 的闭环传递函数，读出 $\omega_n$ 和 $\zeta$，注意到 $\zeta \propto 1/\sqrt{K_{VCO}}$，再把 $1 \le \zeta \le 1.5$ 换算成 $K_{VCO}$ 的范围。

### 第 1 步 — 闭环传递函数

环路中有鉴相器 $K_{PD}$、滤波器 $1/(1 + s/\omega_{LPF})$ 和 VCO $K_{VCO}/s$，因此

$$H_{open}(s) = K_{PD}\cdot\frac{1}{1 + s/\omega_{LPF}}\cdot\frac{K_{VCO}}{s} = \frac{K_{PD}K_{VCO}}{s\,(1 + s/\omega_{LPF})},$$

其极点位于 $s = 0$（VCO）和 $s = -\omega_{LPF}$（滤波器）。在单位反馈下，$H = H_{open}/(1 + H_{open})$；将分子、分母先同乘 $s(1 + s/\omega_{LPF})$，再同乘 $\omega_{LPF}$：

$$H(s) = \frac{K_{PD}K_{VCO}}{\dfrac{s^2}{\omega_{LPF}} + s + K_{PD}K_{VCO}} = \frac{\omega_{LPF}K_{PD}K_{VCO}}{s^2 + \omega_{LPF}\,s + \omega_{LPF}K_{PD}K_{VCO}} .$$

### 第 2 步 — 自然频率（natural frequency）与阻尼比

将分母与 $s^2 + 2\zeta\omega_ns + \omega_n^2$ 对照：

$$\omega_n^2 = \omega_{LPF}K_{PD}K_{VCO} \quad\Rightarrow\quad \omega_n = \sqrt{\omega_{LPF}K_{PD}K_{VCO}} ,$$

$$
\begin{aligned}
2\zeta\omega_n &= \omega_{LPF}\\
\zeta &= \frac{\omega_{LPF}}{2\omega_n} = \frac{\omega_{LPF}}{2\sqrt{\omega_{LPF}K_{PD}K_{VCO}}} = \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}} .
\end{aligned}
$$

在 $K_{PD}$ 和 $\omega_{LPF}$ 固定时，

$$\zeta \propto \frac{1}{\sqrt{K_{VCO}}} .$$

由于 $\zeta\omega_n = \omega_{LPF}/2$ 由滤波器固定，增大环路增益（loop gain）会提高 $\omega_n$，因而必然降低 $\zeta$：在根轨迹（root locus）上，两个极点在 $-\omega_{LPF}/2$ 处相遇（$\zeta = 1$），然后分裂为一对阻尼越来越小的复数极点。

### 第 3 步 — 求两个极限下的 $K_{VCO}$

两边平方，解出 $K_{VCO}$：

$$
\begin{aligned}
\zeta^2 &= \frac{\omega_{LPF}}{4K_{PD}K_{VCO}}\\
K_{VCO} &= \frac{\omega_{LPF}}{4\zeta^2K_{PD}} .
\end{aligned}
$$

**$K_{VCO}$ 的上限**（允许的最小阻尼，$\zeta = 1$）：

$$K_{VCO,max} = \frac{\omega_{LPF}}{4\,(1)^2K_{PD}} = \frac{\omega_{LPF}}{4K_{PD}} .$$

**$K_{VCO}$ 的下限**（允许的最大阻尼，$\zeta = 1.5$）：

$$K_{VCO,min} = \frac{\omega_{LPF}}{4\,(1.5)^2K_{PD}} = \frac{\omega_{LPF}}{4\times2.25\,K_{PD}} = \frac{\omega_{LPF}}{9K_{PD}} .$$

**最大**的 $K_{VCO}$ 对应**最小**的 $\zeta$。

### 第 4 步 — 容许的变化量

$$\frac{K_{VCO,max}}{K_{VCO,min}} = \frac{\omega_{LPF}/(4K_{PD})}{\omega_{LPF}/(9K_{PD})} = \frac94 = 2.25 = \left(\frac{1.5}{1}\right)^2 .$$

由于 $\zeta \propto K_{VCO}^{-1/2}$，$\zeta$ 的 1.5:1 范围要求 $K_{VCO}$ 有 $1.5^2:1$ 的范围。在整个范围内（记 $K_{min} = K_{VCO,min}$，则 $\zeta = 1.5\sqrt{K_{min}/K_{VCO}}$）：

| $K_{VCO}/K_{min}$ | $\zeta$ | $\omega_n/\omega_{n,min}$ |
|---|---|---|
| 1.00 | 1.50 | 1.00 |
| 1.50 | $1.5/\sqrt{1.5} = 1.22$ | 1.22 |
| 2.00 | $1.5/\sqrt{2} = 1.06$ | 1.41 |
| 2.25 | $1.5/1.5 = 1.00$ | 1.50 |

**用百分比表示**（必须说明参考点）：

- **相对于范围中心。** 中点为 $(K_{min} + 2.25K_{min})/2 = 1.625K_{min}$，半宽为 $(2.25K_{min} - K_{min})/2 = 0.625K_{min}$，因此容许的变化量为
$$\pm\frac{0.625}{1.625} = \pm0.385 \approx \pm38\ \%.$$
- **相对于 $\zeta = 1$ 时的值。** $K_{VCO}$ 可降至 $K_{VCO,max}$ 的 $4/9 = 0.444$，即下降约 56 %。
- **相对于 $\zeta = 1.5$ 时的值。** $K_{VCO}$ 可升至 $K_{VCO,min}$ 的 $2.25$ 倍，即增大 125 %。

在此范围内，$\omega_n \propto \sqrt{K_{VCO}}$ 变化 $\sqrt{2.25} = 1.5$ 倍，但题目只对 $\zeta$ 有约束。

### 结果

$$\zeta = \frac12\sqrt{\frac{\omega_{LPF}}{K_{PD}K_{VCO}}} \propto \frac{1}{\sqrt{K_{VCO}}}$$

因此 $1 \le \zeta \le 1.5$ 要求

$$\frac{\omega_{LPF}}{9K_{PD}} \le K_{VCO} \le \frac{\omega_{LPF}}{4K_{PD}}, \qquad \frac{K_{VCO,max}}{K_{VCO,min}} = 2.25 .$$

$K_{VCO}$ 在整个调谐范围内可以变化 2.25 倍，即相对于中心值约 $\pm38\ \%$（相对于 $\zeta = 1$ 时的值下降 56 %，或相对于 $\zeta = 1.5$ 时的值上升 125 %）。

**常见错误。** 认为 $\zeta$ 正比于 $K_{VCO}$（或正比于 $\sqrt{K_{VCO}}$）。前者给出的可容许比值只有 1.5，而且两者都把方向弄反了：由 $2\zeta\omega_n = \omega_{LPF}$ 和 $\omega_n \propto \sqrt{K_{VCO}}$ 可得 $\zeta \propto 1/\sqrt{K_{VCO}}$。

**常见错误。** 认为 $\zeta$ 与 $K_{VCO}$ 无关，理由是后者“只决定带宽”。在这个 I 型 PLL 中，$\zeta\omega_n$ 固定为 $\omega_{LPF}/2$，因此阻尼与带宽无法独立设定。

**常见错误。** 把“125 %”和“56 %”都当作对称的 ± 容差来引用。实际比值为 2.25，相对于中点为 ±38 %。
