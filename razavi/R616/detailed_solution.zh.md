# 详细步骤 - R616

**思路。** 只有阈值失配时，差分对的输入参考失调（input-referred offset）为 $V_{OS} = \Delta V_{TH}$。令 $\Delta V_{TH} \le 5$ mV，由失配公式解出栅面积 $WL$，再除以给定的沟道长度。

### 第 1 步 — 仅由阈值失配引起的失调

$\mu_nC_{ox}$ 和 $W/L$ 都相等时，两管漏极电流相等就要求过驱动电压（overdrive voltage）相等，即 $V_{GS1} - V_{TH1} = V_{GS2} - V_{TH2}$。两管源极相连，因此使差分对达到平衡所需的栅极电压差为

$$V_{OS} = |V_{TH1} - V_{TH2}| = \Delta V_{TH},$$

它与偏置电流和过驱动电压都无关。

### 第 2 步 — 所需的栅面积

$t_{ox} = 90$ Å 时，系数为 $0.1\,t_{ox} = 0.1\times 90 = 9$，因此 $\Delta V_{TH} = 9\ \mathrm{mV\cdot\mu m}/\sqrt{WL}$，其中 $\sqrt{WL}$ 以 µm 为单位。（严格地说，这类公式给出的是随机失配的标准差；按题意，这里把它直接当作失配本身。）指标 $V_{OS} \le 5$ mV 变为

$$\frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} \le 5\ \mathrm{mV} \quad\Longrightarrow\quad \sqrt{WL} \ge \frac{9\ \mathrm{mV\cdot\mu m}}{5\ \mathrm{mV}} = 1.8\ \mu\mathrm{m} \quad\Longrightarrow\quad WL \ge (1.8\ \mu\mathrm{m})^2 = 3.24\ \mu\mathrm{m}^2 .$$

失调随面积增大而减小，因此这是面积的**最小值**。

### 第 3 步 — 最小宽度

取 $L = 0.5\ \mu$m：

$$W \ge \frac{3.24\ \mu\mathrm{m}^2}{L} = \frac{3.24\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 6.48\ \mu\mathrm{m}, \qquad \frac{W}{L} = \frac{6.48\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 12.96 \approx 13 .$$

**验算。**

$$
\begin{aligned}
WL &= 6.48\times 0.5 = 3.24\ \mu\mathrm{m}^2,\\
\sqrt{WL} &= 1.8\ \mu\mathrm{m},\\
\Delta V_{TH} &= \frac{9\ \mathrm{mV\cdot\mu m}}{1.8\ \mu\mathrm{m}} = 5.0\ \mathrm{mV}. \ \checkmark
\end{aligned}
$$

### 第 4 步 — 失调随宽度的变化

$V_{OS} = 9/\sqrt{0.5\,W}$（单位为 mV，$W$ 以 µm 为单位）：

| $W$ (µm) | $WL$ (µm²) | $\sqrt{WL}$ (µm) | $V_{OS}$ (mV) |
|---|---|---|---|
| 3 | 1.5 | 1.225 | 7.35 |
| 6.48 | 3.24 | 1.800 | 5.00 |
| 10 | 5 | 2.236 | 4.02 |
| 20 | 10 | 3.162 | 2.85 |

由于 $L$ 固定时 $V_{OS} \propto 1/\sqrt{W}$，要使失调减半，宽度须增至四倍（栅电容也随之增至四倍）。

### 结果

$$W_{min} = \frac{(9\ \mathrm{mV\cdot\mu m}/5\ \mathrm{mV})^2}{0.5\ \mu\mathrm{m}} = \frac{3.24\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} \approx 6.5\ \mu\mathrm{m},$$

即 $W \ge 6.48\ \mu$m，对应栅面积 $WL \ge 3.24\ \mu\mathrm{m}^2$，$W/L \approx 13$。这一结果由 $V_{OS} = \Delta V_{TH} = 9\ \mathrm{mV\cdot\mu m}/\sqrt{WL} \le 5$ mV 得到。

**常见错误。** 忘记平方：由 $\sqrt{WL} \ge 1.8$ 直接得出 $W = 1.8/0.5 = 3.6\ \mu$m。该宽度对应的失调为 $9/\sqrt{1.8} = 6.7$ mV，不满足指标。

**常见错误。** 弄混经验公式的单位，例如把 $t_{ox}$ 代入为 9（nm）而不是 90（Å）。这样系数就变成 0.9 而不是 9 mV·µm，宽度则成为荒谬的 0.065 µm，远小于沟道长度。

**常见错误。** 用臆造的数值加入其他失配项（例如 $\Delta(W/L)$ 或负载失配）。题目要求忽略这些失配；只有阈值失配时，失调恰好等于 $\Delta V_{TH}$。
