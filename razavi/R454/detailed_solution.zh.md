# 详细步骤 - R454

**思路。** 输出端是 NMOS 共源（common-source）管 $M_5$ 和 PMOS 电流源（current source）$M_6$ 的公共漏极。两者在整个摆幅范围内都必须工作在饱和区（saturation region），因此摆幅决定了两者过驱动电压之和；将其平均分配，并利用输出级的 1 mA 电流，即可求出两个宽长比（aspect ratio）。

### 第 1 步 — 电流预算

功耗预算允许的总电流为

$$I_{total} = \frac{P}{V_{DD}} = \frac{6\ \mathrm{mW}}{3\ \mathrm{V}} = 2\ \mathrm{mA}.$$

给输出级分配 1 mA，则

$$I_{D5} = I_{D6} = 1\ \mathrm{mA},$$

剩下的 1 mA 留给第一级，即由尾电流（tail current）管 $M_7$ 提供。

### 第 2 步 — 摆幅预算：$M_5$ 和 $M_6$ 的过驱动电压

$M_5$（源极接地）在 $V_{out} \ge V_{ov5}$ 时保持饱和，$M_6$（源极接 $V_{DD}$）在 $V_{out} \le V_{DD} - |V_{ov6}|$ 时保持饱和。因此输出可以在 $V_{DD} - |V_{ov6}| - V_{ov5}$ 的范围内变化，而 2.5 V 的峰峰值摆幅要求

$$
\begin{aligned}
V_{DD} - |V_{ov6}| - V_{ov5} &\ge 2.5\ \mathrm{V}\\
V_{ov5} + |V_{ov6}| &\le 3\ \mathrm{V} - 2.5\ \mathrm{V} = 0.5\ \mathrm{V}.
\end{aligned}
$$

按题目要求平均分配：

$$V_{ov5} = |V_{ov6}| = \frac{0.5\ \mathrm{V}}{2} = 0.25\ \mathrm{V}.$$

### 第 3 步 — $M_5$（NMOS）的宽长比

利用 $W/L = 2I_D/(\mu C_{ox}V_{ov}^2)$：

$$
\begin{aligned}
\left(\frac{W}{L}\right)_5 &= \frac{2I_{D5}}{\mu_nC_{ox}V_{ov5}^2}\\
&= \frac{2\,(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2}\\
&= \frac{2\times10^{-3}}{(134\times10^{-6})(0.0625)}\\
&= \frac{2\times10^{-3}}{8.375\times10^{-6}}\\
&= 239 .
\end{aligned}
$$

取 $L = 0.5\ \mu\mathrm{m}$：$W_5 = 239\times0.5\ \mu\mathrm{m} \approx 119\ \mu\mathrm{m}$。

### 第 4 步 — $M_6$（PMOS）的宽长比

$$
\begin{aligned}
\left(\frac{W}{L}\right)_6 &= \frac{2I_{D6}}{\mu_pC_{ox}|V_{ov6}|^2}\\
&= \frac{2\,(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2}\\
&= \frac{2\times10^{-3}}{(38.4\times10^{-6})(0.0625)}\\
&= \frac{2\times10^{-3}}{2.4\times10^{-6}}\\
&= 833 .
\end{aligned}
$$

取 $L = 0.5\ \mu\mathrm{m}$：$W_6 = 833\times0.5\ \mu\mathrm{m} \approx 417\ \mu\mathrm{m}$。

$M_6$ 约宽 3.5 倍，这完全是因为空穴迁移率（mobility）较低（$134/38.4 = 3.5$）。这是可以接受的：它的栅极接固定偏置 $V_b$，因此其电容不会成为任何信号节点的负载，而 $C_{GS5}$ 则是节点 Y（第一级的输出）的负载。

### 第 5 步 — 由此得到的偏置电压（一致性检查）

- $V_{GS5} = V_{TH,n} + V_{ov5} = 0.7 + 0.25 = 0.95$ V，这必须是 Y 的直流电平。处于平衡状态、以电流镜（current mirror）为负载的差分对会把 Y 置于 $V_{GS3}$，因此之后在确定 $M_3$、$M_4$ 的尺寸时，应使 $V_{GS3} = 0.95$ V（与 $M_5$ 的电流密度相同），以避免系统失调（systematic offset）。
- $|V_{GS6}| = |V_{TH,p}| + |V_{ov6}| = 0.8 + 0.25 = 1.05$ V，因此 $V_b = 3 - 1.05 = 1.95$ V，$M_7$ 也使用这一偏置。
- 两个器件的 $g_m = 2I_D/V_{ov} = 2(1\ \mathrm{mA})/0.25\ \mathrm{V} = 8$ mS。

### 结果

取 $V_{ov5} = |V_{ov6}| = 0.25$ V（由 $V_{ov5} + |V_{ov6}| \le 3 - 2.5 = 0.5$ V 得出），$I_D = 1$ mA：

$$\left(\frac{W}{L}\right)_5 = \frac{2(1\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2} \approx 239, \qquad \left(\frac{W}{L}\right)_6 = \frac{2(1\ \mathrm{mA})}{(38.4\ \mu\mathrm{A/V^2})(0.25\ \mathrm{V})^2} \approx 833,$$

即取 $L = 0.5\ \mu\mathrm{m}$ 时，$W_5 \approx 119\ \mu\mathrm{m}$，$W_6 \approx 417\ \mu\mathrm{m}$。

**常见错误。** 把 2.5 V 的摆幅理解为 $\pm2.5$ V（峰峰值 5 V），这在 3 V 电源下是不可能的。按峰峰值计算，留给两个过驱动电压的是 $3 - 2.5 = 0.5$ V。

**常见错误。** 用完整的栅源电压来写摆幅极限，例如 $V_{out} \ge V_{GS5}$；$M_5$ 保持饱和只需要过驱动电压。

**常见错误。** 对 PMOS 管 $M_6$ 使用 $\mu_nC_{ox}$（得到 $W/L \approx 239$），或对 $M_5$ 使用 $\mu_pC_{ox}$。在相同的电流和过驱动电压下，PMOS 管需要约 3.5 倍的宽度。
