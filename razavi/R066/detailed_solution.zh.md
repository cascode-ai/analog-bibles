# 详细步骤 - R066

**思路。** 带电流源（current source）负载的共源级（CS stage）的输出摆幅，下限受 $M_1$ 退出饱和的限制（$V_{out}$ 低于 $M_1$ 的过驱动电压时），上限受 $M_2$ 退出饱和的限制（$V_{DD} - V_{out}$ 低于 $M_2$ 的过驱动电压时）。由平方律（square law）在 $I_D = 0.5$ mA 下计算两个过驱动电压；摆幅等于 $V_{DD}$ 减去这两个过驱动电压。

### 第 1 步 — 饱和条件

输出决定 $V_{DS1} = V_{out}$ 和 $V_{SD2} = V_{DD} - V_{out}$，而偏置（$V_{in}$ 和 $V_b$）决定栅源电压。$V_{DS1} \ge V_{ov1}$ 时 $M_1$ 饱和，$V_{SD2} \ge |V_{ov2}|$ 时 $M_2$ 饱和：

$$V_{out} \ge V_{ov1}, \qquad V_{DD} - V_{out} \ge |V_{ov2}| \quad\Longleftrightarrow\quad V_{out} \le V_{DD} - |V_{ov2}| .$$

两个器件都饱和、电路具有完整增益的条件为

$$V_{ov1} \le V_{out} \le V_{DD} - |V_{ov2}| .$$

只有过驱动电压起作用：阈值电压（threshold voltage）是由偏置决定的 $V_{GS}$ 的一部分，而不是保持饱和所需的 $V_{DS}$ 的一部分。

### 第 2 步 — $M_1$ 的过驱动电压

由 $(W/L)_1 = 50/0.5 = 100$：

$$V_{ov1} = \sqrt{\frac{2I_D}{\mu_nC_{ox}(W/L)_1}} = \sqrt{\frac{2(0.5\times10^{-3}\ \mathrm{A})}{(134\times10^{-6}\ \mathrm{A/V^2})(100)}} = \sqrt{\frac{1\times10^{-3}}{1.34\times10^{-2}}}\ \mathrm{V} = \sqrt{0.0746}\ \mathrm{V} = 0.273\ \mathrm{V}.$$

### 第 3 步 — $M_2$ 的过驱动电压

对于 PMOS，$(W/L)_2 = 50/2 = 25$（注意其长度为 2 µm），$\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$：

$$|V_{ov2}| = \sqrt{\frac{2I_D}{\mu_pC_{ox}(W/L)_2}} = \sqrt{\frac{2(0.5\times10^{-3}\ \mathrm{A})}{(38.4\times10^{-6}\ \mathrm{A/V^2})(25)}} = \sqrt{\frac{1\times10^{-3}}{9.6\times10^{-4}}}\ \mathrm{V} = \sqrt{1.042}\ \mathrm{V} = 1.021\ \mathrm{V}.$$

PMOS 需要很大的过驱动电压，因为它的迁移率（mobility）低，而且长沟道使 $W/L$ 较小。选用较长的 $L$ 是为了得到较高的 $r_{O2}$，即较高的增益，代价则是电压余度（headroom）。

### 第 4 步 — 上下限与摆幅

**下限**（$M_1$ 处于饱和边缘）：

$$V_{out,min} = V_{ov1} = 0.273\ \mathrm{V}.$$

**上限**（$M_2$ 处于饱和边缘）：

$$V_{out,max} = V_{DD} - |V_{ov2}| = 3 - 1.021 = 1.979\ \mathrm{V}.$$

**最大摆幅：**

$$\Delta V_{out,max} = V_{out,max} - V_{out,min} = V_{DD} - V_{ov1} - |V_{ov2}| = 3 - 0.273 - 1.021 = 1.706\ \mathrm{V} \approx 1.71\ \mathrm{V}.$$

**偏置电压。** $V_{GS1} = 0.7 + 0.273 = 0.973$ V 决定直流输入电平。$V_{SG2} = 0.8 + 1.021 = 1.821$ V，因此 $V_b = 3 - 1.821 = 1.179$ V。若要摆幅对称，静态输出应位于中点 $(0.273 + 1.979)/2 \approx 1.13$ V，可以摆动约 ±0.85 V。

### 结果

$$0.273\ \mathrm{V} = V_{GS1} - V_{TH1} \;\le\; V_{out} \;\le\; V_{DD} - |V_{GS2} - V_{TH2}| = 3 - 1.021 = 1.979\ \mathrm{V},$$

因此两个器件都饱和时的最大输出摆幅为

$$V_{DD} - V_{ov1} - |V_{ov2}| \approx 1.71\ \mathrm{V}.$$

**常见错误。** 把阈值电压计入上下限，例如 $V_{out,min} = V_{GS1} = 0.97$ V 或 $V_{out,max} = V_{DD} - V_{SG2} = 1.18$ V。饱和要求 $V_{DS} \ge V_{GS} - V_{TH}$，即过驱动电压，而不是 $V_{DS} \ge V_{GS}$。

**常见错误。** 对 PMOS 使用 $(W/L)_2 = 50/0.5$ 或 $\mu_nC_{ox}$。取 $(W/L)_2 = 25$ 和 $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$ 时，PMOS 的过驱动电压约为 1.02 V；错误的数值会给出小得多的过驱动电压和过于乐观的摆幅。
