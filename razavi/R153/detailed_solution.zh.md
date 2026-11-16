# 详细步骤 - R153

**思路。** 当晶体管不流过电流时，对应的输出达到 $V_{DD}$；输出最多只能下降到使输入晶体管离开饱和区为止，即比其栅极低一个阈值电压（threshold voltage）。计算这个下限（计入体效应），再求差值。

### 第 1 步 — 限制每个输出的因素

$X$ 点的输出为 $V_X = V_{DD} - R_DI_{D1}$。

**上限。** $I_{D1} \ge 0$，所以 $V_X \le V_{DD}$；电阻负载本身没有饱和条件，因此上限就是整个电源电压 $V_{DD} = 3$ V，在电流完全被导向另一边时达到。

**下限。** $M_1$ 必须保持饱和：

$$
\begin{aligned}
V_{DS1} &\ge V_{GS1} - V_{TH1}\\
V_X - V_P &\ge V_{in1} - V_P - V_{TH1}\\
V_X &\ge V_{in1} - V_{TH1}.
\end{aligned}
$$

$V_P$ 被消去：漏极最低可以降到**比栅极低一个阈值电压**。输入摆幅很小，因此 $V_{in1} \approx V_{in,CM} = 1.2$ V，

$$V_{out,min} = V_{in,CM} - V_{TH1},$$

其中 $V_{TH1}$ 包含体效应，因为 $M_1$ 的源极位于 $V_P > 0$，而其衬底接地。

### 第 2 步 — 输入器件的过驱动电压

每个器件流过 $I_{SS}/2 = 0.25$ mA，$W/L = 50/0.5 = 100$：

$$
\begin{aligned}
\mu_nC_{ox}\frac{W}{L} &= (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2},\\
V_{ov1} &= \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.25\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = \sqrt{0.0373\ \mathrm{V^2}} = 0.193\ \mathrm{V}.
\end{aligned}
$$

### 第 3 步 — 尾节点电压与计入体效应的阈值

$$V_P = V_{in,CM} - V_{TH1} - V_{ov1} = 1.2 - 0.193 - V_{TH1}, \qquad V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - 0.9487\right)\ \mathrm{V}.$$

这两个方程相互耦合，因此从 $V_P = 0.25$ V 开始迭代：

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{1.15} - 0.9487\right) = 0.7 + 0.45(1.0724 - 0.9487) = 0.7557\ \mathrm{V},\\
V_P &= 1.2 - 0.193 - 0.7557 = 0.2512\ \mathrm{V}.
\end{aligned}
$$

以 $V_P = 0.2512$ V 重复一次：

$$V_{TH1} = 0.7 + 0.45\left(\sqrt{1.1512} - 0.9487\right) = 0.7559\ \mathrm{V}, \qquad V_P = 0.2510\ \mathrm{V}.$$

所以 $V_P \approx 0.251$ V，$V_{TH1} \approx 0.756$ V：体效应使阈值升高约 56 mV。

### 第 4 步 — 输出范围

**下限：**

$$V_{out,min} = V_{in,CM} - V_{TH1} = 1.2\ \mathrm{V} - 0.756\ \mathrm{V} = 0.444\ \mathrm{V}.$$

**上限：** $V_{out,max} = V_{DD} = 3$ V。

**单端摆幅**（每个输出）：

$$V_{out,max} - V_{out,min} = 3\ \mathrm{V} - 0.444\ \mathrm{V} = 2.56\ \mathrm{V}\ \text{peak-to-peak}.$$

**差分摆幅。** 当 $V_X$ 为 3 V 时，$V_Y$ 为 0.444 V，反之亦然，因此 $V_X - V_Y$ 的范围是 $-2.56$ V 到 $+2.56$ V：

$$(V_X - V_Y)_{pp} = 2\times 2.56\ \mathrm{V} = 5.11\ \mathrm{V}\ \text{peak-to-peak}.$$

这要求输出共模电平位于允许范围的中间，

$$V_{out,CM} = \frac{3 + 0.444}{2}\ \mathrm{V} = 1.72\ \mathrm{V},$$

即每个电阻上的压降为 $R_DI_{SS}/2 = 3 - 1.72 = 1.28$ V，因此 $R_D \approx 5.1$ kΩ。

**不考虑体效应时**（$V_{TH1} = 0.7$ V）：$V_{out,min} = 0.5$ V，单端摆幅为 2.5 V，差分摆幅为 5.0 V。因此体效应反而使允许的摆幅略有**增大**（约 2 %）：阈值越高，漏极就能比栅极降得越低。另外，尾电流管的电压余度（headroom）$V_P \approx 0.25$ V 限制的是输入共模范围，而不是输出摆幅。

### 结果

每个输出可以从 $V_{in,CM} - V_{TH1} \approx 0.44$ V 摆动到 $V_{DD} = 3$ V：

$$\text{single-ended: } 3 - 0.444 \approx 2.56\ \mathrm{V_{pp}}, \qquad \text{differential: } \approx 5.1\ \mathrm{V_{pp}},$$

以约 1.72 V 的输出共模电平为中心（$V_P \approx 0.25$ V 时计入体效应，$V_{TH1} = 0.756$ V）。不考虑体效应时，相应数值为 0.5 V、2.5 V 和 5.0 V。

**常见错误。** 把下限取为 $V_{in,CM} - V_{GS1} = V_P \approx 0.25$ V，或者取为过驱动电压（0.19 V）。饱和条件允许漏极降到比栅极低一个**阈值电压**，即 $V_{in,CM} - V_{TH1}$。

**常见错误。** 把摆幅的上限限制为 $V_{DD} - V_{TH}$，或比 $V_{DD}$ 低某个过驱动电压。对于电阻负载，晶体管截止时输出就直接达到 $V_{DD}$。

**常见错误。** 对 $M_1$ 使用 $V_{TH0} = 0.7$ V，而它的源极比接地的衬底高约 0.25 V。这样会把下限算成 0.5 V 而不是 0.444 V，使每个输出的摆幅被低估 56 mV。
