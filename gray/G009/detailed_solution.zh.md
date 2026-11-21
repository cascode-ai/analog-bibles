# 详细步骤 - G009

该模型把厄利因子 $1+V_{CE}/V_A$ 与雪崩因子 $M\alpha_F/(1-M\alpha_F)$ 相乘。先检查 0–10 V 范围上端的倍增有多大；若可忽略，曲线就是厄利效应（Early effect）直线 $I_C=\beta_FI_B(1+V_{CE}/V_A)$。

### 第 1 步 — 雪崩项的大小

取 $V_{CB}\approx V_{CE}$、$n=4$，在最大电压 10 V 处的倍增为

$$
M-1=\frac{(V_{CE}/BV_{CBO})^4}{1-(V_{CE}/BV_{CBO})^4}=\frac{(10/120)^4}{1-(10/120)^4}=4.8\times10^{-5}.
$$

由于 $1-M\alpha_F$ 是两个相近数之差，它对增益因子的影响被放大约 $\beta_F$ 倍：10 V 处 $M\alpha_F/(1-M\alpha_F)=100.49$，而不是 $\beta_F=100$，增大 0.5%（5 V 处为 0.003%）。击穿条件 $M\alpha_F=1$ 只在 $BV_{CBO}/\beta_F^{1/4}=37.9$ V 附近满足，远在此范围之外。因此这里的雪崩倍增可以忽略。

### 第 2 步 — 厄利效应直线

略去雪崩项，

$$
I_C=\beta_FI_B\left(1+\frac{V_{CE}}{V_A}\right),\qquad
\frac{dI_C}{dV_{CE}}=\frac{\beta_FI_B}{V_A},\qquad r_o=\frac{V_A}{\beta_FI_B}.
$$

每条直线从 $100I_B$ 出发，到 10 V 时上升 $V_{CE}/V_A=10\ \mathrm V/50\ \mathrm V=20\%$。令 $I_C=0$，每条直线都得到 $V_{CE}=-V_A=-50$ V，因此它们延长后交于同一截距。以 $I_B=10\ \mu$A 为例：

$$
I_C(0)=100(10\ \mu\mathrm A)=1.00\ \mathrm{mA},\quad
\frac{dI_C}{dV_{CE}}=\frac{1.00\ \mathrm{mA}}{50\ \mathrm V}=20\ \mu\mathrm{A/V},\quad
r_o=50\ \mathrm{k\Omega},\quad I_C(10\ \mathrm V)=1.20\ \mathrm{mA}.
$$

| $I_B$ (µA) | 0 V 处 $I_C$ (mA) | 10 V 处 $I_C$ (mA) | 斜率 (µA/V) | $r_o$ (kΩ) |
|---|---|---|---|---|
| 1 | 0.100 | 0.120 (0.121) | 2 | 500 |
| 10 | 1.00 | 1.20 (1.21) | 20 | 50 |
| 30 | 3.00 | 3.60 (3.62) | 60 | 16.7 |
| 60 | 6.00 | 7.20 (7.24) | 120 | 8.3 |

括号内的数值计入了第 1 步中 0.5% 的雪崩项。

### 第 3 步 — 特性曲线

![IB = 1、10、30、60 µA 时的 IC–VCE 直线，从 0 到 10 V 各上升 20%](/q/G009/solution-curves.zh.svg)

图中采用题给的完整表达式，与直线几乎无法区分。斜率与电流成正比，因此电流越大的曲线越陡，但它们共用 −50 V 的截距。该模型不描述 $V_{CE}\approx0$ 附近的饱和区。
