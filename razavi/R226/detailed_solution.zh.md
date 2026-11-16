# 详细步骤 - R226

**思路。** 分压器使 $V_{GS}$ 成为 $V_{DD}$ 的固定比例，平方律（square law）再把 $V_{GS}$ 转换为电流；据此把 $I_{out}$ 写成 $V_{DD}$ 的显函数，求导，在设计点（$I_{out} = 0.5$ mA，$V_{DD} = 3$ V）取值，再除以 $I_{out}$。

### 第 1 步 — 把 $I_{out}$ 表示为 $V_{DD}$ 的函数

栅极不取电流，源极接地，因此

$$V_{GS} = \alpha V_{DD}, \qquad \alpha \equiv \frac{R_2}{R_1 + R_2} ,$$

其中分压比 $\alpha$ 由电阻决定。$M_1$ 饱和且 $\lambda = 0$ 时，

$$I_{out} = \frac12\mu_nC_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)^2 = \frac12\mu_nC_{ox}\frac{W}{L}\left(\alpha V_{DD} - V_{TH}\right)^2 .$$

### 第 2 步 — 求导

$$
\begin{aligned}
\frac{\partial I_{out}}{\partial V_{DD}} &= \frac12\mu_nC_{ox}\frac{W}{L}\cdot2\left(\alpha V_{DD} - V_{TH}\right)\cdot\alpha\\
&= \mu_nC_{ox}\frac{W}{L}\left(V_{GS} - V_{TH}\right)\alpha\\
&= g_m\,\alpha .
\end{aligned}
$$

电源电压的变化 $\Delta V_{DD}$ 使栅极电压变化 $\alpha\Delta V_{DD}$，$M_1$ 再把它转换为电流变化 $g_m\alpha\Delta V_{DD}$。除以 $I_{out} = \tfrac12\mu_nC_{ox}(W/L)(V_{GS} - V_{TH})^2$：

$$\frac{1}{I_{out}}\frac{\partial I_{out}}{\partial V_{DD}} = \frac{\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})\,\alpha}{\frac12\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})^2} = \frac{2\alpha}{V_{GS} - V_{TH}} = \frac{2}{V_{GS} - V_{TH}}\cdot\frac{R_2}{R_1 + R_2} .$$

因子 2 来自平方律：过驱动电压（overdrive voltage）的相对变化会使电流产生两倍的相对变化。

### 第 3 步 — 设计点

由 $W/L = 50/0.5 = 100$，

$$\mu_nC_{ox}\frac{W}{L} = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2} ,$$

$$V_{ov} = V_{GS} - V_{TH} = \sqrt{\frac{2I_{out}}{\mu_nC_{ox}W/L}} = \sqrt{\frac{2\,(0.5\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.273\ \mathrm{V} ,$$

$$V_{GS} = V_{TH} + V_{ov} = 0.7 + 0.273 = 0.973\ \mathrm{V}, \qquad \alpha = \frac{R_2}{R_1 + R_2} = \frac{V_{GS}}{V_{DD}} = \frac{0.973\ \mathrm{V}}{3\ \mathrm{V}} = 0.324 ,$$

$$g_m = \mu_nC_{ox}\frac{W}{L}V_{ov} = (13.4\ \mathrm{mA/V^2})(0.273\ \mathrm{V}) = 3.66\ \mathrm{mS}$$

（验证：$g_m = 2I_{out}/V_{ov} = 1\ \mathrm{mA}/0.273\ \mathrm{V} = 3.66$ mS）。

### 第 4 步 — 灵敏度的数值

$$\frac{\partial I_{out}}{\partial V_{DD}} = g_m\alpha = (3.66\ \mathrm{mS})(0.324) = 1.19\ \mathrm{mA/V} ,$$

$$\frac{1}{I_{out}}\frac{\partial I_{out}}{\partial V_{DD}} = \frac{1.19\ \mathrm{mA/V}}{0.5\ \mathrm{mA}} = 2.37\ \mathrm{V^{-1}} .$$

闭式表达式给出同样的结果：$2\alpha/V_{ov} = 2(0.324)/(0.273\ \mathrm{V}) = 2.37\ \mathrm{V^{-1}}$。✓ 因此电流随电源电压的变化率约为 **237 %/V**，即电源每变化 10 mV，电流变化 2.37 %。

**无量纲形式。** 乘以 $V_{DD}$，并利用 $\alpha V_{DD} = V_{GS}$：

$$\frac{V_{DD}}{I_{out}}\frac{\partial I_{out}}{\partial V_{DD}} = \frac{2\alpha V_{DD}}{V_{ov}} = \frac{2V_{GS}}{V_{GS} - V_{TH}} = \frac{2(0.973)}{0.273} = 7.1 .$$

$V_{DD}$ 变化 1 % 时，$I_{out}$ 约变化 7 %。

### 第 5 步 — 用精确的平方律验证

把 $V_{DD}$ 提高 1 %，即升至 3.03 V：

$$
\begin{aligned}
V_{GS} &= 0.324\times3.03\ \mathrm{V} = 0.983\ \mathrm{V},\\
V_{ov} &= 0.983 - 0.7 = 0.283\ \mathrm{V},\\
I_{out} &= \tfrac12(13.4\ \mathrm{mA/V^2})(0.283\ \mathrm{V})^2 = 0.536\ \mathrm{mA} ,
\end{aligned}
$$

变化量为 $+7.3$ %，与线性化结果 $+7.1$ % 很接近（差别来自平方律曲线的弯曲）。

灵敏度之所以高，是因为在 0.973 V 的 $V_{GS}$ 中，电流只取决于高出 $V_{TH}$ 的那 0.273 V：$V_{GS}$ 的相对变化会变成大 3.6 倍的过驱动电压相对变化（$0.973/0.273$），平方律又使其再加倍。这就是用接在电源上的电阻分压器来偏置电流源（current source）效果很差的原因。

### 结果

$$\frac{1}{I_{out}}\frac{\partial I_{out}}{\partial V_{DD}} = \frac{2}{V_{GS} - V_{TH}}\cdot\frac{R_2}{R_1 + R_2} = \frac{2(0.324)}{0.273\ \mathrm{V}} \approx 2.37\ \mathrm{V^{-1}},$$

即约 237 %/V；未归一化的值为 $\partial I_{out}/\partial V_{DD} = g_m R_2/(R_1 + R_2) \approx 1.19$ mA/V。若表示为无量纲的相对灵敏度，$(V_{DD}/I_{out})\,\partial I_{out}/\partial V_{DD} = 2V_{GS}/(V_{GS} - V_{TH}) \approx 7.1$：$V_{DD}$ 变化 1 % 时，$I_{out}$ 约变化 7 %。

**常见错误。** 忘记平方律带来的因子 2，得到 $\alpha/V_{ov} = 1.19\ \mathrm{V^{-1}}$（无量纲形式为 3.6），只有正确值的一半。

**常见错误。** 用 $V_{GS}$ 而不是 $V_{GS} - V_{TH}$ 来归一化，例如得到 $(1/I)\,\partial I/\partial V_{DD} = 2/V_{DD}$（仅 $0.67\ \mathrm{V^{-1}}$）。电流取决于很小的**过驱动电压**，正是这一点使灵敏度很大。
