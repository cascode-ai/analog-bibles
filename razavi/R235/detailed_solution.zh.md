# 详细步骤 - R235

**思路。** $M_2$ 只有在其漏源电压 $V_Y$ 等于 $M_1$ 的漏源电压 $V_X$ 时，才能精确地复制 $I_{REF}$。$V_b$ 的变化几乎一对一地移动 $V_Y$，因为 $M_3$ 相当于一个电流基本固定的源极跟随器（source follower），而 $V_X$ 不动。通过沟道长度调制（channel-length modulation），由此产生的 $V_{DS}$ 差异给出失配 $(1 + \lambda V_{DS2})/(1 + \lambda V_{DS1})$。

### 第 1 步 — 标称工作点

由 $W/L = 40/0.5 = 80$，$\mu_nC_{ox}W/L = (134\ \mu\mathrm{A/V^2})(80) = 10.72\ \mathrm{mA/V^2}$，二极管连接（diode-connected）的 $M_1$ 流过 $I_{REF} = 0.3$ mA：

$$V_{ov} = \sqrt{\frac{2(0.3\ \mathrm{mA})}{10.72\ \mathrm{mA/V^2}}} = 0.237\ \mathrm{V}, \qquad V_X = V_{GS1} = 0.7 + 0.237 = 0.937\ \mathrm{V} .$$

在标称值 $V_b = 2V_{GS} = 1.873$ V 下，$V_Y = V_b - V_{GS3} = 0.937$ V $= V_X$，因此 $V_{DS2} = V_{DS1}$，即使 $\lambda \ne 0$，也有 $I_{out} = I_{REF}$ 精确成立。若在 $M_1$ 的平方律（square law）中计入 $\lambda$，$V_{GS1}$ 会降到约 0.926 V，但这只影响最终百分比的第三位数字，因此仍取 0.937 V。

### 第 2 步 — $V_Y$ 对 $V_b$ 变化的响应

$V_X = V_{GS1}$ 只由 $I_{REF}$ 决定。$M_2$ 的栅极固定在 $V_X$，吸收几乎恒定的电流，因此 $M_3$ 相当于一个**源极跟随器**：$V_Y = V_b - V_{GS3}$，其中 $V_{GS3}$ 几乎不变，于是

$$\Delta V_Y \approx \Delta V_b = \pm100\ \mathrm{mV} .$$

为了检验“几乎”有多准确，令 P 点固定：$M_2$ 只是从 Y 接到地的 $r_{O2}$，$M_3$ 则是 $g_{m3}v_{gs3}$ 与 $r_{O3}$ 的并联。对 Y 点应用基尔霍夫电流定律（KCL）：

$$g_{m3}(\Delta V_b - \Delta V_Y) - \frac{\Delta V_Y}{r_{O3}} = \frac{\Delta V_Y}{r_{O2}} \quad\Longrightarrow\quad \frac{\Delta V_Y}{\Delta V_b} = \frac{g_{m3}}{g_{m3} + 1/r_{O3} + 1/r_{O2}} .$$

代入 $g_{m3} = \sqrt{2(10.72\ \mathrm{mA/V^2})(0.3\ \mathrm{mA})} = 2.54$ mS 和 $r_{O2} = r_{O3} = 1/(\lambda I_D) = 1/(0.1\ \mathrm{V^{-1}}\times0.3\ \mathrm{mA}) = 33.3\ \mathrm{k}\Omega$（$1/r_O = 0.03$ mS）：

$$\frac{\Delta V_Y}{\Delta V_b} = \frac{2.54}{2.54 + 0.03 + 0.03} = 0.977 ,$$

因此 $V_Y$ 约移动 98 mV；取完整的 100 mV，误差约为 2 %。

### 第 3 步 — 沟道长度调制引起的失配

$M_1$ 和 $M_2$ 都处于饱和，$V_{GS}$ 和尺寸都相同，因此在 $I_D = \frac12\mu_nC_{ox}\frac{W}{L}(V_{GS} - V_{TH})^2(1 + \lambda V_{DS})$ 中，除下面这一项外其余都相互抵消：

$$\frac{I_{out}}{I_{REF}} = \frac{1 + \lambda V_{DS2}}{1 + \lambda V_{DS1}} = \frac{1 + \lambda(V_X + \Delta V_Y)}{1 + \lambda V_X} .$$

**$V_b$ 升高 100 mV**（$V_{DS2} = 1.037$ V）：

$$\frac{I_{out}}{I_{REF}} = \frac{1 + 0.1(1.037)}{1 + 0.1(0.937)} = \frac{1.1037}{1.0937} = 1.0091 .$$

**$V_b$ 降低 100 mV**（$V_{DS2} = 0.837$ V）：

$$\frac{I_{out}}{I_{REF}} = \frac{1.0837}{1.0937} = 0.9909 .$$

因此

$$\frac{I_{out} - I_{REF}}{I_{REF}} = \frac{\lambda\Delta V_Y}{1 + \lambda V_X} = \frac{\pm(0.1)(0.1)}{1.0937} = \pm0.91\ \%, \qquad \Delta I = \pm0.0091\times0.3\ \mathrm{mA} = \pm2.7\ \mu\mathrm{A} .$$

一阶近似下，它等于 $\lambda\Delta V_Y = 1$ %，约 3 μA；计入 0.977 的跟随器因子后为 0.89 %，仍约为 0.9 %。$V_b$ 降低时，$V_{DS2} = 0.837$ V 仍远高于 $V_{ov} = 0.237$ V，因此 $M_2$ 保持饱和（$M_3$ 需要 $V_P \ge V_b - V_{TH}$，假设这一条件得到满足）。

### 结果

$V_b$ 有 100 mV 的误差时，$V_Y$ 约移动 100 mV，而 $V_X = 0.937$ V 保持不变，因此

$$\frac{I_{out}}{I_{REF}} = \frac{1 + \lambda(0.937 \pm 0.1)}{1 + \lambda(0.937)} = 1 \pm \frac{0.01}{1.094},$$

**失配约为 ±0.9 %（0.3 mA 中的 ≈ ±2.7 μA）。** $V_b$ 过高时 $I_{out}$ 大于 $I_{REF}$，$V_b$ 过低时则小于。

**常见错误。** 把 100 mV 的误差当作 $M_2$ 栅源电压的变化（这会得到几十个百分点的失配）。$M_2$ 的栅极接在 $V_X$ 上；$V_b$ 只改变 $M_2$ 的**漏极**电压，而漏极电压只通过 $\lambda$ 起作用。

**常见错误。** 以“共源共栅管屏蔽了 $M_2$”为由，断言不存在失配。共源共栅管使 $M_2$ 免受 P 点变化的影响，但 $V_b$ 通过跟随器 $M_3$ 直接驱动节点 Y。

**常见错误。** 使用 PMOS 的 $\lambda = 0.2\ \mathrm{V^{-1}}$，或者认为 $V_Y$ 只移动几毫伏。所有器件都是 NMOS（$\lambda = 0.1\ \mathrm{V^{-1}}$），而从 $V_b$ 到 $V_Y$ 的跟随器增益约为 0.98。
