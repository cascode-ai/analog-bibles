# 详细步骤 - R489

**思路。** 每个输出节点都是上方 PMOS 器件（$M_5$ 或 $M_6$）与下方 NMOS 电流源（$M_7$ 或 $M_8$）的公共漏极，两者都流过固定的 1 mA。只要两者都保持饱和，输出就可以变化，即直到输出与任一电源轨的距离缩小到一个过驱动电压（overdrive voltage）为止；两个过驱动电压决定了摆幅。

### 第 1 步 — 什么限制了输出

$V_{out1}$ 是 $M_5$（源极接 $V_{DD}$，$W/L = 60/0.5$）和 $M_7$（源极接地，$W/L = 50/0.5$）的漏极，两者都流过 $I_D = 1$ mA。$V_{out1}$ 下降时 $V_{DS7}$ 减小，上升时 $|V_{DS5}|$ 减小；最先进入线性区（triode region）的器件决定了相应的极限。支路电流保持为 1 mA（由 $M_7$ 设定），因此在忽略 $\lambda$（题目未给出）的情况下，每个过驱动电压都保持其偏置值。

### 第 2 步 — 下限：$M_7$ 处于饱和区边缘

$V_{DS7} = V_{out1}$，因此饱和要求

$$V_{out1} \ge V_{GS7} - V_{TH7} = V_{ov7},$$

$$
\begin{aligned}
V_{ov7} &= \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)_7}}\\
&= \sqrt{\frac{2\times1\ \mathrm{mA}}{(134\ \mu\mathrm{A/V^2})(100)}}\\
&= \sqrt{\frac{2\ \mathrm{mA}}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.1493\ \mathrm{V^2}} = 0.386\ \mathrm{V}.
\end{aligned}
$$

因此 $V_{out,min} = 0.386$ V；阈值电压（threshold voltage）本身并不出现。

### 第 3 步 — 上限：$M_5$ 处于饱和区边缘

$|V_{DS5}| = V_{DD} - V_{out1}$，因此饱和要求

$$V_{DD} - V_{out1} \ge |V_{GS5}| - |V_{TH5}| = |V_{ov5}| \quad\Longrightarrow\quad V_{out1} \le V_{DD} - |V_{ov5}|.$$

取 $(W/L)_5 = 60/0.5 = 120$：

$$
\begin{aligned}
|V_{ov5}| &= \sqrt{\frac{2I_D}{\mu_pC_{ox}(W/L)_5}}\\
&= \sqrt{\frac{2\times1\ \mathrm{mA}}{(38.4\ \mu\mathrm{A/V^2})(120)}}\\
&= \sqrt{\frac{2\ \mathrm{mA}}{4.608\ \mathrm{mA/V^2}}} = \sqrt{0.4340\ \mathrm{V^2}} = 0.659\ \mathrm{V},
\end{aligned}
$$

$$V_{out,max} = V_{DD} - |V_{ov5}| = 3\ \mathrm{V} - 0.659\ \mathrm{V} = 2.341\ \mathrm{V}.$$

### 第 4 步 — 单端摆幅与差分摆幅

每个输出都可以在以下范围内变化

$$0.386\ \mathrm{V} \le V_{out1},\,V_{out2} \le 2.341\ \mathrm{V},$$

单端范围为

$$\Delta V_{out1} = 2.341 - 0.386 = 1.955\ \mathrm{V} \approx 1.95\ \mathrm{V}\ \text{(peak-to-peak)}.$$

差分工作时 $V_{out1}$ 和 $V_{out2}$ 反向变化，因此 $V_{out1} - V_{out2}$ 的范围是从 $+1.955$ V（一个输出为 2.341 V，另一个为 0.386 V）到 $-1.955$ V：

$$\Delta(V_{out1} - V_{out2}) = 2\times1.955\ \mathrm{V} \approx 3.9\ \mathrm{V}\ \text{(peak-to-peak)}.$$

为了对称地利用全部摆幅，共模反馈（common-mode feedback）应把输出共模电平保持在该范围的中点附近，即 $(0.386 + 2.341)/2 \approx 1.36$ V。

### 结果

- 每个输出：从 $V_{ov7} \approx 0.39$ V 到 $V_{DD} - |V_{ov5}| \approx 2.34$ V，即**单端摆幅 ≈ 1.95 V（峰峰值）**。
- 差分输出 $V_{out1} - V_{out2}$：**≈ 3.9 V（峰峰值）**。

**常见错误。** 用阈值电压或完整的栅源电压来确定极限，例如 $V_{out} \le V_{DD} - |V_{GS5}|$ 或 $V_{out} \ge V_{TH7}$。源极接在电源轨上的晶体管，当其漏极与该电源轨的距离缩小到一个**过驱动电压**时就会退出饱和区。

**常见错误。** 对 $M_5$ 使用 $W/L = 50/0.5$。第二级较宽的 PMOS 器件（60/0.5）的过驱动电压为 0.659 V；若用 50/0.5 则为 0.722 V。

**常见错误。** 用第一级的器件来限制输出（而输出只与 $M_5$–$M_8$ 相连），或者没有说明摆幅是指单个输出（≈ 1.95 V）还是差分输出（≈ 3.9 V）。
