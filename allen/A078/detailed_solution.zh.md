# 详细步骤 - A078

求出开关在工作点处的阈值（计入体效应），计算两种情况共用的量，由慢速/快速判据确定每种下降时间所处的区域，再代入相应的误差表达式。

### 第 1 步 — 工作点与公共量

开关断开前，$C_L$ 已充电到 $V_S=1.5$ V，因此开关的 $V_{SB}=1.5$ V：

$$
V_T=0.7\ \mathrm V+0.4\ \mathrm{V^{1/2}}\big(\sqrt{2.2\ \mathrm V}-\sqrt{0.7\ \mathrm V}\big)=0.959\ \mathrm V,\qquad
V_{HT}=5-1.5-0.959=2.541\ \mathrm V .
$$

$\beta=K'W/L=(110\ \mu\mathrm{A/V^2})(2)=220\ \mu\mathrm{A/V^2}$：

$$
W\cdot\mathrm{CGDO}=(1.6\ \mu\mathrm m)(220\ \mathrm{pF/m})=0.352\ \mathrm{fF},\qquad
C_{channel}=(1.6\ \mu\mathrm m)(0.8\ \mu\mathrm m)(24.7\times10^{-4}\ \mathrm{F/m^2})=3.16\ \mathrm{fF},
$$

$$
\frac{W\cdot\mathrm{CGDO}+C_{channel}/2}{C_L}=\frac{0.352+1.581}{150}=0.01289 .
$$

交叠项对两种区域相同，是开关在 $v_G=V_S+V_T$ 处关断之后的馈通：

$$
\frac{W\cdot\mathrm{CGDO}}{C_L}(V_S+V_T-V_L)=\frac{0.352\ \mathrm{fF}}{150\ \mathrm{fF}}(1.5+0.959-0)\ \mathrm V=5.77\ \mathrm{mV}.
$$

### 第 2 步 — 各下降时间所处的区域

判据将 $U$ 与下式比较：

$$
\frac{\beta V_{HT}^2}{2C_L}=\frac{(220\ \mu\mathrm{A/V^2})(2.541\ \mathrm V)^2}{2(150\ \mathrm{fF})}=4.74\times10^{9}\ \mathrm{V/s}.
$$

| 情况 | 下降时间 | $U$ (V/s) | $\beta V_{HT}^2/(2C_LU)$ | 区域 |
|---|---|---|---|---|
| 1 | 0.1 ns | $5\times10^{10}$ | 0.095 | 快速区 |
| 2 | 8 ns | $6.25\times10^{8}$ | 7.6 | 慢速区 |

### 第 3 步 — 情况 1：快速区

栅压下降很快，沟道电荷几乎来不及流回源端：

$$
\frac{\beta V_{HT}^3}{6UC_L}=\frac{(220\ \mu\mathrm{A/V^2})(2.541\ \mathrm V)^3}{6(5\times10^{10}\ \mathrm{V/s})(150\ \mathrm{fF})}=0.080\ \mathrm V,
$$

$$
V_{error}=0.01289\,(2.541-0.080)\ \mathrm V+5.77\ \mathrm{mV}=31.7+5.8=37.5\ \mathrm{mV},\qquad v_{CL}=1.5-0.0375=1.4625\ \mathrm V .
$$

### 第 4 步 — 情况 2：慢速区

$$
\sqrt{\frac{\pi UC_L}{2\beta}}=\sqrt{\frac{\pi(6.25\times10^{8}\ \mathrm{V/s})(150\ \mathrm{fF})}{2(220\ \mu\mathrm{A/V^2})}}=0.818\ \mathrm V,
$$

$$
V_{error}=0.01289\times0.818\ \mathrm V+5.77\ \mathrm{mV}=10.5+5.8=16.3\ \mathrm{mV},\qquad v_{CL}=1.5-0.0163=1.4837\ \mathrm V .
$$

| 情况 | 区域 | 沟道项 (mV) | 交叠项 (mV) | $V_{error}$ (mV) | 最终 $v_{CL}$ (V) |
|---|---|---|---|---|---|
| 1（0.1 ns） | 快速区 | 31.7 | 5.8 | 37.5 | 1.4625 |
| 2（8 ns） | 慢速区 | 10.5 | 5.8 | 16.3 | 1.4837 |

下降沿较慢时误差不到一半：开关仍导通时，大部分沟道电荷流回源端，而不是落到 $C_L$ 上。两种情况的误差都使 $v_{CL}$ 降低，因为 n 沟道开关向电容释放的是电子。
