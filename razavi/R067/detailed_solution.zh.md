# 详细步骤 - R067

**思路。** 当 $M_1$ 饱和且 $\lambda = 0$ 时，带电阻负载的共源（CS）级的增益为 $A_v = -g_mR_D$。由平方律（square law）求出 $I_D = 1$ mA 时的 $g_m$，检查器件在该电流下确实饱和，然后相乘。

### 第 1 步 — $I_D = 1$ mA 时的跨导（transconductance）

由 $(W/L)_1 = 50/0.5 = 100$：

$$g_m = \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2\,(134\times10^{-6}\ \mathrm{A/V^2})(100)(1\times10^{-3}\ \mathrm{A})} = \sqrt{2.68\times10^{-5}}\ \mathrm{A/V} = 5.18\times10^{-3}\ \mathrm{S} = 5.18\ \mathrm{mS}.$$

过驱动电压和输入偏置为

$$V_{ov} = \frac{2I_D}{g_m} = \frac{2(1\ \mathrm{mA})}{5.18\ \mathrm{mS}} = 0.386\ \mathrm{V}, \qquad V_{in} = V_{GS} = V_{TH} + V_{ov} = 0.7 + 0.386 = 1.086\ \mathrm{V}.$$

### 第 2 步 — 检查 $M_1$ 是否饱和

$$V_{out} = V_{DD} - I_DR_D = 3\ \mathrm{V} - (1\ \mathrm{mA})(2\ \mathrm{k}\Omega) = 3 - 2 = 1\ \mathrm{V},$$

且 $V_{DS} = V_{out} = 1\ \mathrm{V} \ge V_{ov} = 0.386$ V $\checkmark$：$M_1$ 处于饱和区，裕量约为 0.6 V。

### 第 3 步 — 小信号模型（small-signal model）与增益

$V_{DD}$ 是交流地，因此 $R_D$ 把输出端接到地，而 $M_1$ 是从输出端（漏极）到地（源极）的电流源（current source）$g_mv_{gs}$，其中 $v_{gs} = v_{in}$；由于 $\lambda = 0$，没有 $r_O$。

<!-- diagram: diagram-01.cir -->

在输出节点列 KCL（流出的电流之和 = 0）：

$$g_mv_{in} + \frac{v_{out}}{R_D} = 0 \quad\Longrightarrow\quad v_{out} = -g_mR_D\,v_{in},$$

$$A_v = \frac{v_{out}}{v_{in}} = -g_mR_D = -(5.18\times10^{-3}\ \mathrm{S})(2\times10^{3}\ \Omega) = -10.35 .$$

该级是**反相**的：$v_{in}$ 升高时，流过 $R_D$ 的电流增加 $g_mv_{in}$，输出下降 $g_mR_Dv_{in}$。

**另一种形式。** 利用 $g_m = 2I_D/V_{ov}$，$A_v = -2I_DR_D/V_{ov} = -2(2\ \mathrm{V})/(0.386\ \mathrm{V}) = -10.35$：即 $R_D$ 上直流压降的两倍除以过驱动电压。

### 结果

$$A_v = -g_mR_D = -\sqrt{2\mu_nC_{ox}(W/L)I_D}\;R_D = -(5.18\ \mathrm{mS})(2\ \mathrm{k}\Omega) \approx -10.35,$$

其中 $V_{ov} = 0.386$ V（$V_{in} \approx 1.09$ V），$V_{out} = 1$ V，这证实了器件处于饱和区。

**常见错误。** 用错误的公式计算 $g_m$，例如 $\mu_nC_{ox}(W/L)I_D$（量纲错误）或 $2I_D/V_{GS}$（用 $V_{GS}$ 代替了过驱动电压 $V_{GS} - V_{TH}$）。

**常见错误。** 漏掉负号。共源级是反相的：输入上升会增大流过 $R_D$ 的电流，把输出拉低。

**常见错误。** 不检查饱和条件。公式 $-g_mR_D$ 只在饱和区成立；这里 $V_{DS} = 1$ V 大于 $V_{ov} = 0.39$ V，因此适用。
