# 详细步骤 - R424

**思路。** $M_3$ 的漏极接在 PMOS 共源共栅电流镜（cascode current mirror）的二极管连接（diode-connected）一侧，因此其电压等于 $V_{DD}$ 减去两个 PMOS 的栅源压降。只有当这一电压不低于 $V_b - V_{TH}$ 时，$M_3$ 才能保持饱和，这就限定了 PMOS 过驱动电压（overdrive voltage）的上限；再由平方律（square law）求出最小的 $W/L$。

### 第 1 步 — $M_3$ 漏极的电压

在左侧支路中，$M_7$ 和 $M_5$ 都是二极管连接的，从 $V_{DD}$ 向下叠接到 $M_3$ 的漏极，每条支路的电流为 $I_{SS}/2 = 0.5$ mA。因此

$$V_{D3} = V_{DD} - |V_{GS7}| - |V_{GS5}| .$$

$M_5$ 和 $M_7$ 完全相同，电流相同，且没有体效应（$\gamma = 0$），因此

$$|V_{GS5}| = |V_{GS7}|\ \Longrightarrow\ V_{D3} = V_{DD} - 2|V_{GS5}| .$$

PMOS 越宽，$|V_{GS5}|$ 越小，$V_{D3}$ 就越高，$M_3$ 的余量也越大。

### 第 2 步 — $M_3$ 的饱和条件

只要 $V_{D3} \ge V_G - V_{TH}$，$M_3$ 就处于饱和，这与它自身的尺寸和源极电压无关：

$$V_{D3} \ge V_b - V_{TH3} = 1.4 - 0.7 = 0.7\ \mathrm{V}.$$

代入 $V_{D3}$：

$$
\begin{aligned}
V_{DD} - 2|V_{GS5}| &\ge 0.7\ \mathrm{V}\\
2|V_{GS5}| &\le 3 - 0.7 = 2.3\ \mathrm{V}\\
|V_{GS5}| &\le 1.15\ \mathrm{V},
\end{aligned}
$$

$$|V_{OD5}| = |V_{GS5}| - |V_{THP}| \le 1.15 - 0.8 = 0.35\ \mathrm{V}.$$

### 第 3 步 — 最小宽长比（aspect ratio）与宽度

由 $|I_{D5}| = \frac12\mu_pC_{ox}\frac WL|V_{OD5}|^2$ 可知，电流固定时，过驱动电压越小，所需的 $W/L$ 越大，因此极限值 $|V_{OD5}| = 0.35$ V 给出最小值：

$$
\begin{aligned}
\frac WL\bigg|_{min} &= \frac{2|I_{D5}|}{\mu_pC_{ox}|V_{OD5}|^2} = \frac{2(0.5\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.35\ \mathrm{V})^2}\\
&= \frac{1\times10^{-3}\ \mathrm{A}}{(38.4\times10^{-6}\ \mathrm{A/V^2})(0.1225\ \mathrm{V^2})} = \frac{1\times10^{-3}}{4.704\times10^{-6}} = 212.6 .
\end{aligned}
$$

取 $L = 0.5\ \mu$m：

$$W_{min} = 212.6\times0.5\ \mu\mathrm{m} = 106.3\ \mu\mathrm{m} \approx 106\ \mu\mathrm{m}.$$

**验算。** 取 $W/L = 212.6$：$|V_{OD5}| = \sqrt{2(0.5\ \mathrm{mA})/(38.4\ \mu\mathrm{A/V^2}\times212.6)} = 0.350$ V，$|V_{GS5}| = 1.150$ V，$V_{D3} = 3 - 2.300 = 0.700$ V $= V_b - V_{TH}$：$M_3$ 恰好处于饱和边缘。✓ 器件更宽时，$M_3$ 会有一定余量。

### 结果

$$V_{DD} - 2|V_{GS5}| \ge V_b - V_{TH}\ \Longrightarrow\ |V_{GS5}| \le 1.15\ \mathrm{V},\ |V_{OD5}| \le 0.35\ \mathrm{V}\ \Longrightarrow\ \left(\frac WL\right)_{5\text{–}8} \ge 213,$$

$$W_{min} \approx 106\ \mu\mathrm{m}\quad(L = 0.5\ \mu\mathrm{m}).$$

**常见错误。** 把饱和条件写成 $V_{D3} \ge V_b - V_{GS3}$ 或 $V_{D3} \ge V_b$。NMOS 的漏极可以低到比其栅极低一个**阈值电压**。

**常见错误。** 只计入一个 PMOS 压降。共源共栅电流镜在 $M_3$ 的漏极上方叠接了两个二极管连接的器件（$M_7$ 和 $M_5$）。

**常见错误。** 对 PMOS 器件使用 $\mu_nC_{ox}$，这会使求出的宽度小约 3.5 倍。
