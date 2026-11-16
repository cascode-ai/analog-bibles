# 详细步骤 - R177

**思路。** （1）采用 PMOS 电流源负载时，每个输出只看到输出电阻（output resistance），因此半边电路（half circuit）的增益为 $g_{m1}(r_{O1}\parallel r_{O3})$。（2）最小输入共模电平由 0.4 V 的尾电流源电压余度（headroom）、$M_1$ 的过驱动电压（overdrive voltage）及其受体效应影响的阈值叠加而成。（3）每个输出可以在 $M_1$ 离开饱和的点（下限）与 $M_3$ 离开饱和的点（上限）之间变化。

### 第 1 步 — 小信号参数

平衡时每一支以及每个 PMOS 负载都流过 $I_{SS}/2 = 0.5$ mA。

**输入器件**（$\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2}$）：

$$
\begin{aligned}
g_{m1} &= \sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 3.66\ \mathrm{mS},\\
r_{O1} &= \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 20\ \mathrm{k}\Omega .
\end{aligned}
$$

**PMOS 负载**（$\lambda_p = 0.2\ \mathrm{V^{-1}}$，对 $L = 1\ \mu$m 直接按给定值使用）：

$$r_{O3} = \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.5\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .$$

### 第 2 步 — 差分电压增益

$P$ 处于交流地时，每一半都是共源级（common-source stage）。$M_3$ 的栅极（$V_b$）和源极（$V_{DD}$）都是交流地，因此它只贡献 $r_{O3}$，与 $r_{O1}$ 并联：

$$
\begin{aligned}
|A_v| = \left|\frac{v_X - v_Y}{v_{in}}\right| &= g_{m1}(r_{O1}\parallel r_{O3}),\\
r_{O1}\parallel r_{O3} &= \frac{(20)(10)}{20 + 10}\ \mathrm{k}\Omega = 6.67\ \mathrm{k}\Omega,\\
|A_v| &= (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) = 24.4 .
\end{aligned}
$$

这大约是采用同样尺寸的二极管连接（diode-connected）负载时增益的十倍，后者的电阻只有 $1/g_{m3}$。

### 第 3 步 — 最小输入共模电平

尾电流源需要 $V_P \ge 0.4$ V，而输入器件的栅极比 $P$ 高出 $V_{GS1} = V_{TH1} + V_{ov1}$：

$$V_{ov1} = \sqrt{\frac{2(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V}.$$

$M_1$ 的源极比接地的衬底高 0.4 V，因此

$$V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + 0.4} - \sqrt{0.9}\right) = 0.7 + 0.45(1.1402 - 0.9487) = 0.786\ \mathrm{V},$$

$$V_{in,CM,min} = 0.4 + 0.273 + 0.786 = 1.46\ \mathrm{V}.$$

（不考虑体效应时：1.37 V。）

### 第 4 步 — 每个输出的下限

只要 $V_X \ge V_{in,CM} - V_{TH1}$（输入摆幅很小），$M_1$ 就保持饱和。取 $V_{in,CM} = 1.46$ V：

$$V_{out,min} = 1.46 - 0.786 = 0.673\ \mathrm{V},$$

这恰好就是 $V_P + V_{ov1} = 0.4 + 0.273$ V。

### 第 5 步 — 每个输出的上限

只要 $V_{SD3} \ge |V_{GS3}| - |V_{TH3}|$，$M_3$ 就保持饱和。电流为 0.5 mA，且 $\mu_pC_{ox}(W/L)_3 = (38.4\ \mu\mathrm{A/V^2})(50/1) = 1.92\ \mathrm{mA/V^2}$：

$$|V_{GS3} - V_{TH3}| = \sqrt{\frac{2(0.5\ \mathrm{mA})}{1.92\ \mathrm{mA/V^2}}} = \sqrt{0.521\ \mathrm{V^2}} = 0.722\ \mathrm{V},$$

$$V_{out,max} = V_{DD} - |V_{GS3} - V_{TH3}| = 3 - 0.722 = 2.278\ \mathrm{V}.$$

### 第 6 步 — 最大摆幅

$$
\begin{aligned}
\text{per output:}\quad & V_{out,max} - V_{out,min} = 2.278 - 0.673 = 1.61\ \mathrm{V}\ \text{peak-to-peak},\\
\text{differential:}\quad & 2\times 1.61 = 3.21\ \mathrm{V}\ \text{peak-to-peak}.
\end{aligned}
$$

要获得完整的对称摆幅，输出共模电平必须位于中点 $(2.278 + 0.673)/2 \approx 1.48$ V。采用电流源负载时，高阻抗的输出端本身并不能确定这一电平，因此实际中必须用共模反馈把它保持在该处。

### 结果

- **增益：** $|A_v| = g_{m1}(r_{O1}\parallel r_{O3}) = (3.66\ \mathrm{mS})(6.67\ \mathrm{k}\Omega) \approx 24.4$。
- **最小输入共模电平：** $V_{in,CM,min} = 0.4 + 0.273 + 0.786 \approx 1.46$ V（不考虑体效应时为 1.37 V）。
- **最大摆幅：** 每个输出从 $V_{in,CM} - V_{TH1} = 0.673$ V 到 $V_{DD} - |V_{GS3} - V_{TH3}| = 2.28$ V，即单端约 1.6 V 峰峰值，差分约 3.2 V 峰峰值（输出共模电平保持在 1.48 V 附近）。

**常见错误。** 使用二极管负载公式 $g_{m1}/g_{m3}$。$M_3$、$M_4$ 的栅极接固定的 $V_b$，因此负载是电阻为 $r_{O3}$ 的电流源，而不是 $1/g_{m3}$。

**常见错误。** 把输出上限取为 $V_{DD}$ 或 $V_{DD} - |V_{THP}|$。PMOS 电流源只有在源漏电压超过其**过驱动电压**（0.72 V）时才保持饱和，因此输出最多只能升到 2.28 V。

**常见错误。** 用 $\mu_nC_{ox}$ 而不是 $\mu_pC_{ox} = 38.4\ \mu\mathrm{A/V^2}$ 计算 PMOS 的过驱动电压。
