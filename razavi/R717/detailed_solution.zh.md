# 详细步骤 - R717

**思路。** 衬底就是 $M_1$ 的体端，因此衬底噪声通过体效应（body effect）调制 $M_1$ 的阈值：体端是一个跨导（transconductance）为 $g_{mb}$ 的“背栅”。因此体端电压 $V_{sub}$ 等效于栅极电压 $(g_{mb}/g_m)V_{sub} = \eta V_{sub}$。在偏置点计算 $\eta$，求出折算到栅极的幅度，并用大信号阈值公式加以验证。

### 第 1 步 — 小信号模型（small-signal model）与折算到栅极的噪声

源极接地**并不能**保护 $M_1$：它的体端就是衬底，因此 $V_{SB}$ 随 $V_{sub}$ 变化。$M_1$ 饱和时，$v_{gs} = v_{in}$，$v_{bs} = v_{sub}$，负载 $R_D$ 接在漏极与交流地之间。

<!-- diagram: diagram-01.cir -->

$$i_d = g_mv_{in} + g_{mb}v_{sub} = g_m\left(v_{in} + \frac{g_{mb}}{g_m}v_{sub}\right).$$

就漏极电流（以及输出）而言，衬底噪声与一个附加的输入电压无法区分：

$$v_{eq} = \frac{g_{mb}}{g_m}\,v_{sub} = \eta\,v_{sub}.$$

### 第 2 步 — 体效应系数（body-effect coefficient）$\eta$

由体效应的阈值方程，

$$\eta = \frac{g_{mb}}{g_m} = \frac{\partial V_{TH}}{\partial V_{SB}} = \frac{\gamma}{2\sqrt{2|\phi_F| + V_{SB}}} .$$

平均而言，衬底（经 $L_b$）接地，源极也接地，因此 $V_{SB} = 0$：

$$\eta = \frac{0.45\ \mathrm{V^{1/2}}}{2\sqrt{0.9\ \mathrm{V}}} = \frac{0.45}{2\times0.9487} = \frac{0.45}{1.897} = 0.237 .$$

### 第 3 步 — 数值

$$v_{eq} = \eta\,V_{sub} = 0.237\times50\ \mathrm{mV} = 11.9\ \mathrm{mV}\ \text{peak-to-peak}.$$

**器件参数**（$W/L = 100/0.5 = 200$）：

$$
\begin{aligned}
g_m &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_{D1}} = \sqrt{2(134\ \mu\mathrm{A/V^2})(200)(1\ \mathrm{mA})} = \sqrt{5.36\times10^{-5}}\ \mathrm{A/V} = 7.32\ \mathrm{mS},\\
g_{mb} &= \eta\,g_m = 0.237\times7.32\ \mathrm{mS} = 1.74\ \mathrm{mS},\\
\Delta I_{D1} &= g_{mb}V_{sub} = (1.74\ \mathrm{mS})(50\ \mathrm{mV}) = 86.8\ \mu\mathrm{A}\ \text{pp},\\
v_{eq} &= \frac{\Delta I_{D1}}{g_m} = \frac{86.8\ \mu\mathrm{A}}{7.32\ \mathrm{mS}} = 11.9\ \mathrm{mV}\ \text{pp}.
\end{aligned}
$$

器件尺寸和电流在 $g_{mb}/g_m$ 中相互抵消；只有 $\gamma$、$2|\phi_F|$ 和 $V_{SB}$ 起作用。漏极电流扰动为 87 µA（峰峰值），相对于 1 mA 的偏置电流几乎达到 9 %。

### 第 4 步 — 极性与大信号验证

**极性。** 当 $V_{sub}$ 升高时，$V_{SB} = 0 - V_{sub}$ 下降，因此 $V_{TH}$ 下降，$I_{D1}$ 增大，就像 $V_{in}$ 升高了一样：折算到栅极的扰动与 $V_{sub}$ **同相**。

**大信号验证。** $V_{sub}$ 在 $\pm25$ mV 之间摆动，即 $V_{SB}$ 在 $\mp25$ mV 之间变化：

$$
\begin{aligned}
V_{SB} = -25\ \mathrm{mV}:&\quad \Delta V_{TH} = 0.45\left(\sqrt{0.875} - \sqrt{0.9}\right) = 0.45(0.93541 - 0.94868) = -5.97\ \mathrm{mV},\\
V_{SB} = +25\ \mathrm{mV}:&\quad \Delta V_{TH} = 0.45\left(\sqrt{0.925} - \sqrt{0.9}\right) = 0.45(0.96177 - 0.94868) = +5.89\ \mathrm{mV}.
\end{aligned}
$$

阈值的峰峰值变化为 $5.97 + 5.89 = 11.9$ mV，它对漏极电流的作用等同于一个大小相等、方向相反的栅极电压变化，与小信号结果一致。

**其他途径。** 衬底还可以通过 $M_1$ 的漏–体结电容（junction capacitance）耦合到其漏极；这一途径取决于未给定的 $R_D$ 和结电容，与这里所问的体效应机制是分开的。

### 结果

衬底噪声通过体效应作用于 $M_1$，相当于一个等效栅极电压

$$v_{eq} = \frac{g_{mb}}{g_m}V_{sub} = \eta V_{sub} = 0.237\times50\ \mathrm{mV} \approx 11.9\ \mathrm{mV}\ \text{peak-to-peak},$$

与 $V_{sub}$ 同相（衬底电压升高会使 $V_{TH1}$ 降低、$I_{D1}$ 增大，就像 $V_{in}$ 升高一样）。等价地，$g_m = 7.32$ mS，$g_{mb} = 1.74$ mS，漏极电流扰动约为 87 µA（峰峰值）。

**常见错误。** 把全部 50 mV 都折算到栅极（$\eta = 1$）。体端是一个弱得多的控制端：体端电压只有 $\eta = g_{mb}/g_m \approx 0.24$ 的部分出现在栅极处。

**常见错误。** 认为源极接地所以影响为零。体效应取决于 $V_{SB}$，而它的变化量就是完整的 $V_{sub}$。

**常见错误。** 取 $\eta = \gamma$（得到 22.5 mV），或把 $V_{SB}$ 的符号弄错。$\eta = \gamma/(2\sqrt{2|\phi_F| + V_{SB}})$，并且由于 $V_{SB} = -V_{sub}$，衬底电压升高会使阈值**降低**。
