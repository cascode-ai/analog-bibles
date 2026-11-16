# 详细步骤 - R617

**思路。** 先由失调指标求出宽度，再求出 1 mA 尾电流下平衡时的过驱动电压。然后把差分对的大信号（large-signal）平方律特性展开为幂级数，求出正弦输入所产生的各次谐波；差分对是对称的，因此 THD 由三次谐波决定。

### 第 1 步 — 由失调指标确定器件宽度

阈值失配是唯一的失配时，失调就等于阈值失配：

$$V_{OS} = \Delta V_{TH} = \frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} \le 5\ \mathrm{mV}.$$

解出面积：

$$
\begin{aligned}
\sqrt{WL} &\ge \frac{9\ \mathrm{mV\cdot\mu m}}{5\ \mathrm{mV}} = 1.8\ \mu\mathrm{m},\\
WL &\ge (1.8\ \mu\mathrm{m})^2 = 3.24\ \mu\mathrm{m}^2,\\
W &\ge \frac{3.24\ \mu\mathrm{m}^2}{0.5\ \mu\mathrm{m}} = 6.48\ \mu\mathrm{m}.
\end{aligned}
$$

差分对采用最小宽度，因此 $W = 6.48\ \mu$m，且

$$\frac{W}{L} = \frac{6.48\ \mu\mathrm{m}}{0.5\ \mu\mathrm{m}} = 12.96 .$$

### 第 2 步 — 偏置点：过驱动电压与跨导（transconductance）

令 $\beta = \mu_nC_{ox}W/L$：

$$\beta = (134\ \mu\mathrm{A/V^2})(12.96) = 1736.6\ \mu\mathrm{A/V^2} = 1.7366\ \mathrm{mA/V^2}.$$

平衡时每个器件的电流为 $I_D = I_{SS}/2 = 0.5$ mA，因此由 $I_D = \tfrac12\beta V_{ov}^2$ 得

$$V_{ov} = \sqrt{\frac{2I_D}{\beta}} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{1.7366\ \mathrm{mA/V^2}}} = \sqrt{0.5758\ \mathrm{V^2}} = 0.759\ \mathrm{V},$$

$$g_m = \beta V_{ov} = (1.7366\ \mathrm{mA/V^2})(0.759\ \mathrm{V}) = 1.318\ \mathrm{mS}$$

（也可写成 $g_m = 2I_D/V_{ov} = 1\ \mathrm{mA}/0.759\ \mathrm{V}$）。由于 $I_{SS} = 2I_D = \beta V_{ov}^2$，有 $I_{SS}/\beta = V_{ov}^2$。

### 第 3 步 — 差分对的大信号特性

令 $\Delta V = V_{in1} - V_{in2}$，$\Delta I = I_{D1} - I_{D2}$，两管均工作在饱和区（saturation region），且 $\lambda = 0$。由于两管源极相连，$\Delta V = \sqrt{2I_{D1}/\beta} - \sqrt{2I_{D2}/\beta}$；两次平方，并利用 $I_{D1} + I_{D2} = I_{SS}$ 和 $4I_{D1}I_{D2} = I_{SS}^2 - \Delta I^2$，即得到标准的特性方程

$$\Delta I = \frac{\beta}{2}\,\Delta V\sqrt{\frac{4I_{SS}}{\beta} - \Delta V^2}.$$

代入第 2 步得到的 $I_{SS}/\beta = V_{ov}^2$：

$$\Delta I = \frac{\beta}{2}\,\Delta V\sqrt{4V_{ov}^2 - \Delta V^2} = \beta V_{ov}\,\Delta V\sqrt{1 - \frac{\Delta V^2}{4V_{ov}^2}} = g_m\,\Delta V\sqrt{1 - \frac{\Delta V^2}{4V_{ov}^2}} .$$

该式一直成立，直到某个晶体管在 $|\Delta V| = \sqrt2\,V_{ov} = 1.073$ V 处截止；超过这一点后，$|\Delta I| = I_{SS}$。

### 第 4 步 — 幂级数：只有奇次谐波

利用 $\sqrt{1 - u} = 1 - \tfrac{u}{2} - \tfrac{u^2}{8} - \dots$ 展开，其中 $u = \Delta V^2/(4V_{ov}^2)$：

$$\Delta I = g_m\left[\Delta V - \frac{\Delta V^3}{8V_{ov}^2} - \frac{\Delta V^5}{128\,V_{ov}^4} - \dots\right].$$

该特性是奇函数（$\Delta V \to -\Delta V$ 相当于交换两个漏极电流），因此对称差分对**不产生偶次谐波**。$\Delta V^3$ 项占主导；其系数 $1/(8V_{ov}^2)$ 表明，过驱动电压越大，差分对的线性度越好。

### 第 5 步 — 正弦输入产生的谐波

施加 $\Delta V = V_m\cos\omega t$，保留到三次项，并利用 $\cos^3\omega t = \tfrac34\cos\omega t + \tfrac14\cos3\omega t$：

$$
\begin{aligned}
\Delta I &\approx g_m\left[V_m\cos\omega t - \frac{V_m^3}{8V_{ov}^2}\left(\frac34\cos\omega t + \frac14\cos3\omega t\right)\right]\\
&= g_mV_m\left(1 - \frac{3V_m^2}{32V_{ov}^2}\right)\cos\omega t \;-\; g_m\frac{V_m^3}{32V_{ov}^2}\cos3\omega t .
\end{aligned}
$$

三次谐波失真为

$$\mathrm{HD_3} = \frac{g_mV_m^3/(32V_{ov}^2)}{g_mV_m\left(1 - \dfrac{3V_m^2}{32V_{ov}^2}\right)} \approx \frac{V_m^2}{32V_{ov}^2},$$

这里暂时忽略了压缩项 $3V_m^2/(32V_{ov}^2)$。五次及更高次谐波还要再小 $(V_m/V_{ov})^2$ 量级的因子，因此

$$\mathrm{THD} = \frac{\sqrt{A_3^2 + A_5^2 + \dots}}{A_1} \approx \mathrm{HD_3}.$$

采用电阻负载时，差分输出电压 $R_D\,\Delta I$ 的 THD 与 $\Delta I$ 的相同。

### 第 6 步 — THD 为 1 % 时的幅度

令 $\mathrm{HD_3} = 0.01$：

$$
\begin{aligned}
\frac{V_m^2}{32V_{ov}^2} &= 0.01,\\
V_m^2 &= 0.32\,V_{ov}^2,\\
V_m &= \sqrt{0.32}\,V_{ov} = 0.566\,V_{ov}.
\end{aligned}
$$

取 $V_{ov} = 0.759$ V：

$$V_m = 0.566\times0.759\ \mathrm{V} = 0.429\ \mathrm{V}.$$

### 第 7 步 — 用精确特性修正并验算

前面忽略的两个效应都会使失真略微**增大**：

- 基波缩小为原来的 $1 - 3V_m^2/(32V_{ov}^2) \approx 0.97$ 倍；
- $\Delta V^5$ 项还会额外贡献一个同号的 $\cos3\omega t$ 分量，大小为 $5V_m^5/(2048\,V_{ov}^4)$（相对于 $g_m$）。

对精确特性 $\Delta I = g_m\Delta V\sqrt{1 - \Delta V^2/(4V_{ov}^2)}$ 做数值傅里叶分析，得到：

| $V_m/V_{ov}$ | THD，估算值 $V_m^2/(32V_{ov}^2)$ | THD，精确值 |
|---|---|---|
| 0.40 | 0.500 % | 0.514 % |
| 0.50 | 0.781 % | 0.816 % |
| 0.551 | 0.948 % | 1.000 % |
| 0.566 | 1.000 % | 1.060 % |

因此精确的 1 % 点位于 $V_m/V_{ov} = 0.551$：

$$V_m = 0.551\times0.759\ \mathrm{V} = 0.418\ \mathrm{V},$$

简单公式的误差约为 3 %。

**验算。** $V_m = 0.42$ V 远小于 $\sqrt2\,V_{ov} = 1.07$ V，因此没有器件截止，第 3 步的表达式在整个周期内都成立。5 mV 的失调会引入极小的偶次分量；由于差分对在其他方面是对称的，这里将其忽略。

### 结果

当 $W = 6.48\ \mu$m（$W/L = 12.96$）、$I_{SS} = 1$ mA 时，平衡时的过驱动电压为 $V_{GS} - V_{TH} = \sqrt{I_{SS}/(\mu_nC_{ox}W/L)} = 0.759$ V。令

$$\mathrm{THD} \approx \mathrm{HD_3} \approx \frac{V_m^2}{32\,(V_{GS} - V_{TH})^2} = 1\%$$

得到

$$V_m \approx \sqrt{0.32}\times0.759\ \mathrm{V} \approx 0.43\ \mathrm{V}\ \text{peak differential}$$

（峰峰值约为 0.85 V）。精确的平方律特性给出 0.418 V，因此答案为**峰值约 0.42–0.43 V**。

**常见错误。** 漏掉 $\cos^3\omega t$ 展开式中的因子 $\tfrac14$，写成 $\mathrm{HD_3} = V_m^2/(8V_{ov}^2)$：实际上三次项只有四分之一出现在 $3\omega$ 处。这个错误公式给出 $V_m = \sqrt{0.08}\times0.759 = 0.21$ V，只有正确摆幅的一半。

**常见错误。** 使用二次谐波公式。对称差分对的特性是奇函数，其偶次谐波相互抵消，失真由三次谐波决定。

**常见错误。** 把 THD 当作功率比，令 $(A_3/A_1)^2 = 0.01$，得到 $A_3/A_1 = 10\%$ 和 $V_m \approx 1.36$ V。题目是用**幅度**定义 THD 的；而且 1.36 V 已超过 $\sqrt2\,V_{ov} = 1.07$ V，在这一电压下差分对早已完全切换。
