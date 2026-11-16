# 详细步骤 - R620

**思路。** $M_1$ 和 $M_2$ 的栅源电压相同，因此阈值失配直接转化为电流失配，$\Delta I_D/I_D = 2\Delta V_{TH}/(V_{GS} - V_{TH})$。2 % 的指标确定了允许的 $\Delta V_{TH}$，从而确定栅面积 $WL$；电流和过驱动电压（overdrive voltage）确定宽长比 $W/L$。由这两个方程即可求出 $W$ 和 $L$。

### 第 1 步 — 阈值失配引起的电流失配

$M_1$ 和 $M_2$ 的 $V_{GS}$ 都取自二极管连接（diode-connected）的 $M_0$；由于 $\lambda = 0$，它们的漏极电压无关紧要。$V_{GS}$ 相同时，

$$\frac{\partial I_D}{\partial V_{TH}} = -\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH}) = -g_m \quad\Longrightarrow\quad \Delta I_D = I_{D1} - I_{D2} \approx -g_m\,\Delta V_{TH} .$$

除以 $I_D$，并利用平方律给出的 $g_m/I_D = 2/(V_{GS} - V_{TH})$，得到其大小为

$$\frac{\Delta I_D}{I_D} = \frac{2\,\Delta V_{TH}}{V_{GS} - V_{TH}} .$$

因子 2 来自平方律；过驱动电压越大，电流镜（current mirror）对阈值失配越不敏感。

### 第 2 步 — 允许的阈值失配

取 $\Delta I_D/I_D = 2\% = 0.02$，$V_{GS} - V_{TH} = 0.5$ V：

$$\Delta V_{TH} = \frac{(\Delta I_D/I_D)(V_{GS} - V_{TH})}{2} = \frac{0.02\times0.5\ \mathrm{V}}{2} = 5\ \mathrm{mV}.$$

**用精确平方律验算。** 两管过驱动电压分别为 $0.5\ \mathrm{V} \pm 2.5$ mV 时：

$$\frac{I_{D1}}{I_{D2}} = \left(\frac{0.5025}{0.4975}\right)^2 = (1.01005)^2 = 1.0202,$$

即失配为 2.02 %，可见线性近似是准确的。

### 第 3 步 — 由失配公式求栅面积

$t_{ox} = 90$ Å 时，$\Delta V_{TH} = 9\ \mathrm{mV\cdot\mu m}/\sqrt{WL}$。令其等于 5 mV：

$$
\begin{aligned}
\frac{9\ \mathrm{mV\cdot\mu m}}{\sqrt{WL}} &= 5\ \mathrm{mV},\\
\sqrt{WL} &= \frac{9}{5}\ \mu\mathrm{m} = 1.8\ \mu\mathrm{m},\\
WL &= (1.8\ \mu\mathrm{m})^2 = 3.24\ \mu\mathrm{m}^2 .
\end{aligned}
$$

### 第 4 步 — 由电流和过驱动电压求宽长比

取 $I_D = 0.5$ mA，$V_{GS} - V_{TH} = 0.5$ V：

$$\frac{W}{L} = \frac{2I_D}{\mu_nC_{ox}(V_{GS} - V_{TH})^2} = \frac{2(0.5\ \mathrm{mA})}{(134\ \mu\mathrm{A/V^2})(0.5\ \mathrm{V})^2} = \frac{1\ \mathrm{mA}}{33.5\ \mu\mathrm{A}} = 29.85 .$$

### 第 5 步 — 求解 $W$ 和 $L$

由 $WL = 3.24\ \mu\mathrm{m}^2$ 和 $W/L = 29.85$，二者之积给出 $W^2$，二者之商给出 $L^2$：

$$
\begin{aligned}
W^2 &= (WL)\left(\frac{W}{L}\right) = 3.24\times29.85\ \mu\mathrm{m}^2 = 96.7\ \mu\mathrm{m}^2 &&\Longrightarrow\quad W = 9.83\ \mu\mathrm{m},\\
L^2 &= \frac{WL}{W/L} = \frac{3.24}{29.85}\ \mu\mathrm{m}^2 = 0.1085\ \mu\mathrm{m}^2 &&\Longrightarrow\quad L = 0.329\ \mu\mathrm{m}.
\end{aligned}
$$

**验算。**

$$
\begin{aligned}
W/L &= 9.83/0.329 = 29.9,\\
WL &= 9.83\times0.329 = 3.24\ \mu\mathrm{m}^2,\\
\Delta V_{TH} &= 9/\sqrt{3.24} = 5\ \mathrm{mV},\\
\Delta I_D/I_D &= 2(5\ \mathrm{mV})/(0.5\ \mathrm{V}) = 2\%.\ \checkmark
\end{aligned}
$$

这些都是**有效**尺寸，$M_1$ 和 $M_2$ 相同。（若参考电流为 0.5 mA，二极管连接的器件 $M_0$ 也应取 $W/L \approx 29.9$。）

### 第 6 步 — 若 2 % 是上限

若指标的含义是“不超过 2 %”，则面积可以更大，只需把 $W/L$ 保持为 29.85，以便在 0.5 V 过驱动电压下维持 0.5 mA。例如取 $L = 0.5\ \mu$m：

$$
\begin{aligned}
W &= 29.85\times0.5\ \mu\mathrm{m} = 14.9\ \mu\mathrm{m},\\
WL &= 7.46\ \mu\mathrm{m}^2,\\
\Delta V_{TH} &= 9/\sqrt{7.46} = 3.3\ \mathrm{mV},\\
\Delta I_D/I_D &= 2(3.3\ \mathrm{mV})/(0.5\ \mathrm{V}) = 1.3\%.
\end{aligned}
$$

代价是面积和电容更大；第 5 步的设计是满足指标的最小尺寸。

### 结果

$$\frac{W}{L} = \frac{2I_D}{\mu_nC_{ox}(V_{GS} - V_{TH})^2} \approx 29.9, \qquad WL = \left(\frac{9\ \mathrm{mV\cdot\mu m}}{5\ \mathrm{mV}}\right)^2 = 3.24\ \mu\mathrm{m}^2,$$

由此得到

$$W \approx 9.8\ \mu\mathrm{m}, \qquad L \approx 0.33\ \mu\mathrm{m}\ \text{(effective)}$$

$M_1$ 和 $M_2$ 均取此尺寸。允许的阈值失配为 $\Delta V_{TH} = 5$ mV，由 $\Delta I_D/I_D = 2\Delta V_{TH}/(V_{GS} - V_{TH})$ 得出。若 $W/L$ 不变而面积更大（例如 $L = 0.5\ \mu$m，$W = 14.9\ \mu$m，给出 1.3 %），同样满足 ≤ 2 % 的上限。

**常见错误。** 写成 $\Delta I_D/I_D = \Delta V_{TH}/(V_{GS} - V_{TH})$，漏掉因子 2。这样允许的 $\Delta V_{TH} = 10$ mV，面积只有 $0.81\ \mu\mathrm{m}^2$，所得电流镜的失配将达到 4 %。

**常见错误。** 漏掉平方律中的 $\tfrac12$，得到 $W/L = 0.5\ \mathrm{mA}/(134\ \mu\mathrm{A/V^2}\times0.25\ \mathrm{V^2}) = 14.9$，在规定的过驱动电压下电流只有 0.25 mA。

**常见错误。** 把 $\Delta V_{TH} = 9/\sqrt{WL}$ 当作只约束 $W$ 的条件，或误读其单位（例如把 $t_{ox}$ 以 nm 为单位代入），从而得到只有零点零几微米的沟道长度。要确定 $W$ 和 $L$，面积和宽长比二者缺一不可。
