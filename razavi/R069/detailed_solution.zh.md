# 详细步骤 - R069

**思路。** “进入线性区 50 mV”是指 $V_{DS} = V_{out} = V_{ov} - 50$ mV，其中 $V_{ov} = V_{in} - V_{TH}$。把这一条件与线性区电流以及负载线 $V_{out} = V_{DD} - R_DI_D$ 结合，得到关于 $V_{ov}$ 的二次方程。计算增益时使用线性区的小信号模型（small-signal model）：跨导（transconductance）$\beta V_{DS}$，**以及**与 $R_D$ 并联的有限沟道电阻 $1/[\beta(V_{ov} - V_{DS})]$。

### 第 1 步 — 条件与线性区电流

取

$$\beta = \mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$$

以及过驱动电压 $V_{ov} = V_{in} - V_{TH}$，题目要求

$$V_{DS} = V_{out} = V_{ov} - 0.05\ \mathrm{V},$$

即漏极电压比饱和边界 $V_{DS} = V_{ov}$ 低 50 mV。在线性区，展开 $(V_{ov} - V_{DS})^2 = V_{ov}^2 - 2V_{ov}V_{DS} + V_{DS}^2$，得

$$I_D = \beta\left[V_{ov}V_{DS} - \frac{V_{DS}^2}{2}\right] = \frac{\beta}{2}\left[V_{ov}^2 - (V_{ov} - V_{DS})^2\right],$$

由 $V_{ov} - V_{DS} = 0.05$ V：

$$I_D = \frac{\beta}{2}\left[V_{ov}^2 - (0.05\ \mathrm{V})^2\right] = \frac{\beta}{2}\left[V_{ov}^2 - 0.0025\ \mathrm{V^2}\right],$$

只比饱和值 $\tfrac12\beta V_{ov}^2$ 略低。

### 第 2 步 — 与负载线联立求解

把 $V_{out} = V_{ov} - 0.05$ 和这一电流代入 $V_{out} = V_{DD} - R_DI_D$，并利用 $\tfrac12\beta R_D = \tfrac12(13.4\times10^{-3})(2\times10^3) = 13.4\ \mathrm{V^{-1}}$：

$$V_{ov} - 0.05 = 3 - \frac{\beta R_D}{2}\left(V_{ov}^2 - 0.0025\right) = 3 - 13.4V_{ov}^2 + 13.4\times0.0025 = 3.0335 - 13.4V_{ov}^2 ,$$

$$13.4V_{ov}^2 + V_{ov} - 3.0835 = 0 .$$

正根：

$$V_{ov} = \frac{-1 + \sqrt{1 + 4(13.4)(3.0835)}}{2(13.4)} = \frac{-1 + \sqrt{166.28}}{26.8} = \frac{-1 + 12.895}{26.8} = \frac{11.895}{26.8} = 0.4438\ \mathrm{V}.$$

因此

$$V_{in} = V_{TH} + V_{ov} = 0.7 + 0.4438 = 1.144\ \mathrm{V}, \qquad V_{out} = V_{ov} - 0.05 = 0.394\ \mathrm{V}.$$

**验证。** $I_D = \tfrac12(13.4\ \mathrm{mA/V^2})(0.4438^2 - 0.0025)\ \mathrm{V^2} = 6.7\times0.1945\ \mathrm{mA} = 1.303$ mA，且 $V_{DD} - R_DI_D = 3 - 2.606 = 0.394$ V。✓

线性区边缘（$V_{DS} = V_{ov}$）出现在 $V_{in} = 1.137$ V 处，因此进入线性区 50 mV 只需再增加约 7 mV 的输入：在边缘附近，输出下降的速度约为输入上升速度的 11.7 倍。

### 第 3 步 — 线性区的小信号参数

对 $I_D = \beta[V_{ov}V_{DS} - V_{DS}^2/2]$ 求导（$V_{ov} = V_{GS} - V_{TH}$）：

$$g_m = \frac{\partial I_D}{\partial V_{GS}} = \beta V_{DS} = (13.4\ \mathrm{mA/V^2})(0.394\ \mathrm{V}) = 5.28\ \mathrm{mS},$$

$$g_{ds} = \frac{\partial I_D}{\partial V_{DS}} = \beta(V_{ov} - V_{DS}) = (13.4\ \mathrm{mA/V^2})(0.05\ \mathrm{V}) = 0.67\ \mathrm{mS}, \qquad r_{ds} = \frac{1}{g_{ds}} = 1.49\ \mathrm{k}\Omega.$$

在饱和区（$\lambda = 0$）器件没有输出电导；在线性区，沟道部分地起电阻作用，这里其电阻与 $R_D$ 相当。

### 第 4 步 — 小信号模型与增益

输出节点连接受控源 $g_mv_{in}$ 和沟道电阻 $r_{ds}$（两者都接地），并通过 $R_D$ 接到交流地（$V_{DD}$）。

<!-- diagram: diagram-01.cir -->

在输出节点列 KCL（流出的电流之和 = 0）：

$$g_mv_{in} + g_{ds}v_{out} + \frac{v_{out}}{R_D} = 0 \quad\Longrightarrow\quad A_v = \frac{v_{out}}{v_{in}} = -\frac{g_m}{g_{ds} + 1/R_D} = -g_m\,(r_{ds}\parallel R_D) .$$

由于 $1/R_D = 0.5$ mS：

$$A_v = -\frac{5.28\ \mathrm{mS}}{0.67\ \mathrm{mS} + 0.5\ \mathrm{mS}} = -\frac{5.28}{1.17} = -4.5 .$$

在线性区边缘，增益为 $-11.7$，因此输入只多约 7 mV，增益就减小了约 2.6 倍。主要原因是沟道电阻 $r_{ds}$ 对 $R_D$ 的分流（1.49 kΩ 与 2 kΩ 并联为 0.85 kΩ）；跨导也略有下降，从 5.86 降到 5.28 mS。这就是放大管要避免进入线性区的原因。

### 结果

使 $M_1$ 进入线性区 50 mV（$V_{out} = V_{in} - V_{TH} - 0.05$ V）需要

$$13.4V_{ov}^2 + V_{ov} - 3.0835 = 0 \;\Longrightarrow\; V_{ov} = 0.444\ \mathrm{V}, \qquad V_{in} \approx 1.144\ \mathrm{V},$$

此时 $V_{out} \approx 0.394$ V，$I_D \approx 1.30$ mA。此处的小信号增益为

$$A_v = -\frac{\beta V_{DS}}{\beta(V_{ov} - V_{DS}) + 1/R_D} = -\frac{5.28\ \mathrm{mS}}{0.67\ \mathrm{mS} + 0.5\ \mathrm{mS}} \approx -4.5 .$$

**常见错误。** 忽略线性区的输出电导，写成 $A_v = -\beta V_{DS}R_D \approx -10.6$。在线性区，沟道电阻 $1/[\beta(V_{ov} - V_{DS})] \approx 1.5\ \mathrm{k}\Omega$ 与 $R_D$ 并联，使增益减小一半以上。

**常见错误。** 在线性区仍沿用饱和区的增益（$\approx -11.7$）。饱和区公式假设输出电导为零，一旦 $V_{DS} < V_{GS} - V_{TH}$，这一假设就不再成立。

**常见错误。** 把线性区边缘的输入加上 50 mV 来求输入（得到 1.187 V）。条件针对的是 $V_{DS}$ 相对于 $V_{GS} - V_{TH}$ 的值，而不是 $V_{in}$；在边缘附近该级增益很高，因此这一裕量改变 50 mV 只需几毫伏的输入变化。
