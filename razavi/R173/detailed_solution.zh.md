# 详细步骤 - R173

**思路。** 由于 $P$ 为虚地（virtual ground），增益就是 $M_1$ 驱动二极管负载 $M_3$ 的半边电路（half circuit）的增益：$|A_v| = g_{m1}(1/g_{m3}\parallel r_{ds1}\parallel r_{O3})$。随着 $V_{DD}$ 升高，电路依次经历三种工作状态：无电流（二极管负载截止）；所有器件都处于线性区，增益极小；$M_1$、$M_2$ 饱和，增益恒为 $g_{m1}/g_{m3}$。求出各转折点以及每个区域内的增益。

### 第 1 步 — 器件参数与增益表达式

$$\beta_1 = \mu_nC_{ox}(W/L)_1 = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}, \qquad \beta_3 = \mu_pC_{ox}(W/L)_3 = (38.4\ \mu\mathrm{A/V^2})(20) = 0.768\ \mathrm{mA/V^2}.$$

**尾电流管栅极电压**，按饱和的 $50/0.5$ 尾电流管流过 0.5 mA 设定：

$$V_{GS,SS} = V_{TH0} + \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.7 + 0.273 = 0.973\ \mathrm{V}.$$

**半边电路。** $P$ 处于交流地时，跨导（transconductance）为 $g_{m1}$、沟道电阻为 $r_{ds1}$ 的 $M_1$ 驱动二极管 $M_3$，后者呈现 $1/g_{m3}\parallel r_{O3}$：

$$|A_v| = g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{ds1}\parallel r_{O3}\right).$$

在饱和区，$g_{m1} = \beta_1V_{ov1}$，$r_{ds1} = r_{O1} = 1/(\lambda I_D)$；在线性区，$g_{m1} = \beta_1V_{DS1}$，$1/r_{ds1} = \beta_1(V_{ov1} - V_{DS1})$。二极管负载只要导通就处于饱和（$V_{SD} = V_{SG}$），且 $g_{m3} = \sqrt{2\beta_3I_D}$。

### 第 2 步 — 区域 1：$V_{DD} < 0.8$ V，无电流

二极管连接的 PMOS 只有在 $V_{SG3} = V_{DD} - V_X > |V_{THP}| = 0.8$ V 时才导通；由于 $V_X \ge 0$，当 $V_{DD} < 0.8$ V 时这不可能成立。所以尽管输入栅极（1.2 V）和尾电流管栅极（0.973 V）都高于 NMOS 阈值，电路中也没有任何电流。此时 $V_X = V_P = 0$，$V_{DS1} = 0$，$g_{m1} = \beta_1V_{DS1} = 0$：**增益为零。**

### 第 3 步 — 所有器件都饱和时的偏置，以及略处于线性区的尾电流管

先假设尾电流管饱和，每个输入器件流过 0.25 mA：

$$V_{ov1} = \sqrt{\frac{2(0.25\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.193\ \mathrm{V}, \qquad V_P = V_{in,CM} - V_{TH1} - V_{ov1},$$

其中 $V_{TH1} = 0.7 + 0.45(\sqrt{0.9 + V_P} - \sqrt{0.9})$。迭代得 $V_P = 1.2 - 0.193 - 0.756 = 0.251$ V，**低于**尾电流管的过驱动电压（overdrive voltage）0.273 V：在 $V_{in,CM} = 1.2$ V（刚好低于约 1.23 V 的最小共模电平）时，尾电流管略微处于线性区。把尾电流管的线性区方程与输入器件的方程联立求解，得

$$V_P = 0.2515\ \mathrm{V}, \qquad I_{SS} = 0.497\ \mathrm{mA}\ (0.248\ \mathrm{mA\ per\ side}), \qquad V_{TH1} = 0.756\ \mathrm{V}, \qquad V_{ov1} = 0.193\ \mathrm{V},$$

仅比标称电流低 0.6 %，影响可以忽略。此电流下的二极管压降为

$$|V_{GS3}| = |V_{THP}| + \sqrt{\frac{2I_{D3}}{\beta_3}} = 0.8 + \sqrt{\frac{2(0.248\ \mathrm{mA})}{0.768\ \mathrm{mA/V^2}}} = 0.8 + 0.804 = 1.604\ \mathrm{V}.$$

### 第 4 步 — 转折点：$M_1$、$M_2$ 进入饱和

当 $V_X - V_P \ge V_{in,CM} - V_P - V_{TH1}$，即 $V_X \ge V_{in,CM} - V_{TH1}$ 时，$M_1$ 饱和。由 $V_X = V_{DD} - |V_{GS3}|$：

$$
\begin{aligned}
V_{DD} &\ge V_{in,CM} - V_{TH1} + |V_{GS3}|\\
&= 1.2 - 0.756 + 1.604 = 2.05\ \mathrm{V}.
\end{aligned}
$$

（不考虑体效应时：$1.2 - 0.7 + 1.607 = 2.11$ V。）

### 第 5 步 — 区域 2：$0.8\ \mathrm{V} < V_{DD} < 2.05$ V，线性区工作

高于 0.8 V 时有电流流动，但很大的二极管压降占去了大部分电源电压，因此 $X$ 只比地高几十到几百毫伏，$M_1$、$M_2$ 和尾电流管都处于线性区。联立求解三个器件方程即可得到工作点；例如，在 $V_{DD} = 1.5$ V 时：

$$V_P = 0.086\ \mathrm{V},\quad V_X = 0.112\ \mathrm{V},\quad I_{D1} = 0.133\ \mathrm{mA},\quad V_{TH1} = 0.720\ \mathrm{V},$$

$$
\begin{aligned}
V_{ov1} &= 1.2 - 0.086 - 0.720 = 0.394\ \mathrm{V}, \qquad V_{DS1} = 0.112 - 0.086 = 0.026\ \mathrm{V}\ \ (\ll V_{ov1}:\ \text{triode}),\\
g_{m1} &= \beta_1V_{DS1} = (13.4\ \mathrm{mA/V^2})(0.026\ \mathrm{V}) = 0.348\ \mathrm{mS},\\
r_{ds1} &= \frac{1}{\beta_1(V_{ov1} - V_{DS1})} = \frac{1}{(13.4\ \mathrm{mA/V^2})(0.368\ \mathrm{V})} = 203\ \Omega,\\
g_{m3} &= \sqrt{2\beta_3I_{D1}} = \sqrt{2(0.768\ \mathrm{mA/V^2})(0.133\ \mathrm{mA})} = 0.452\ \mathrm{mS}\ \ (1/g_{m3} = 2.21\ \mathrm{k}\Omega),\\
|A_v| &= g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{ds1}\right) = (0.348\ \mathrm{mS})(2.21\ \mathrm{k}\Omega\parallel 203\ \Omega) = (0.348\ \mathrm{mS})(186\ \Omega) = 0.065 .
\end{aligned}
$$

其他电源电压下：

| $V_{DD}$ (V) | $I_{D1}$ (mA) | $V_X$ (V) | $M_1$ | $\lvert A_v\rvert$ |
|---|---|---|---|---|
| < 0.8 | 0 | 0 | — | 0 |
| 1.0 | 0.014 | 0.010 | 线性区 | 0.004 |
| 1.5 | 0.133 | 0.112 | 线性区 | 0.065 |
| 1.6 | 0.163 | 0.148 | 线性区 | 0.10 |
| 1.8 | 0.220 | 0.244 | 线性区 | 0.25 |
| 1.9 | 0.239 | 0.311 | 线性区 | 0.51 |
| 2.0 | 0.248 | 0.397 | 线性区 | 1.6 |
| ≥ 2.05 | 0.248 | $V_{DD} - 1.604$ | 饱和区 | 4.18 |

增益在约 1.9 V 以前一直远小于 1，然后在最后 ~0.15 V 内，随着 $V_{DS1}$ 趋近 $V_{ov1}$、$r_{ds1}$ 趋于无穷大而陡然上升，并连续地接上平台。

### 第 6 步 — 区域 3：$V_{DD} \ge 2.05$ V，平台

所有器件（除了处于临界状态的尾电流管）都饱和，电流由尾电流管固定，更高的 $V_{DD}$ 只会抬高 $V_X$ 和 $V_Y$。取 $\lambda = 0$：

$$|A_v| = \frac{g_{m1}}{g_{m3}} = \frac{\sqrt{2\mu_nC_{ox}(W/L)_1I_D}}{\sqrt{2\mu_pC_{ox}(W/L)_3I_D}} = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_3}} = \sqrt{\frac{13.4}{0.768}} = \sqrt{17.45} = 4.18 .$$

两个器件流过相同的电流，电流被消去，因此平台增益既与 $V_{DD}$ 无关，也不受线性区尾电流管引起的轻微电流减小的影响。数值上，$g_{m1} = 2.58$ mS，$g_{m3} = 0.618$ mS。

**计入沟道长度调制时：** $r_{O1} = 1/(0.1\times 0.248\ \mathrm{mA}) = 40$ kΩ，$r_{O3} = 1/(0.2\times 0.248\ \mathrm{mA}) = 20$ kΩ，因此

$$|A_v| = g_{m1}\left(\frac{1}{g_{m3}}\parallel r_{O1}\parallel r_{O3}\right) = (2.58\ \mathrm{mS})(1.62\ \mathrm{k}\Omega\parallel 40\ \mathrm{k}\Omega\parallel 20\ \mathrm{k}\Omega) = (2.58\ \mathrm{mS})(1.44\ \mathrm{k}\Omega) \approx 3.7 .$$

### 结果

$|A_v|$ 随 $V_{DD}$ 变化的曲线草图：

- **$0 \le V_{DD} < 0.8$ V：** 增益 = 0。二极管连接的负载无法导通，因此没有电流。
- **$0.8\ \mathrm{V} < V_{DD} \lesssim 1.9$ V：** 有电流流动，但漏极接近地电位，$M_1$、$M_2$ 和尾电流管都处于线性区，增益 $\ll 1$（1.0 V 时 ≈ 0.004，1.5 V 时为 0.065，1.6 V 时为 0.10，1.8 V 时为 0.25）。
- **2 V 附近：** 陡然上升，在 $V_{DD} = V_{in,CM} - V_{TH1} + |V_{GS3}| \approx 0.44 + 1.60 \approx 2.05$ V 处到达平台（不考虑体效应时为 2.11 V）。
- **$2.05\ \mathrm{V} \le V_{DD} \le 3$ V：** 保持平坦，
$$|A_v| = \frac{g_{m1}}{g_{m3}} = \sqrt{\frac{\mu_n(W/L)_1}{\mu_p(W/L)_3}} \approx 4.2,$$
计入 $r_{O1} = 40$ kΩ 和 $r_{O3} = 20$ kΩ 时约为 3.7。

**常见错误。** 像电阻负载那样，让增益在转折点以上随 $V_{DD}$ 继续上升。采用二极管负载时增益为 $g_{m1}/g_{m3}$，是器件参数之比；额外的电源电压只会抬高漏极电位。

**常见错误。** 在平台公式中把迁移率（mobility）弄反，得到 $\sqrt{\mu_p(W/L)_3/(\mu_n(W/L)_1)} \approx 0.24$。输入器件（其 $g_m$ 位于分子）是 $\mu C_{ox}(W/L)$ 较大的 NMOS。

**常见错误。** 在 $V_{DD} = 0.8$ V 以下画出非零增益，或者让增益从 $V_{DD} = 0$ 开始线性上升。在 PMOS 二极管导通之前没有任何器件导通；而且由于二极管占去约 1.6 V，输入对在 $V_{DD}$ 超过约 2 V 之前一直处于线性区。
