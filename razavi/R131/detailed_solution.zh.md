# 详细步骤 - R131

**思路。** 用节点电压写出线性区边缘条件，用过驱动电压（overdrive voltage）表示 $V_{in}$ 和 $V_{out}$，解所得的二次方程，求出 $I_D$、$V_{in}$ 和 $V_{out}$。然后计算该工作点的 $g_m$，并利用带源极负反馈共源级的增益公式（$\lambda = \gamma = 0$）。

### 第 1 步 — 线性区边缘条件

$V_{DS} = V_{GS} - V_{TH}$，两边都以 $V_S$ 为参考：

$$V_{out} - V_S = V_{in} - V_S - V_{TH}\quad\Longrightarrow\quad V_{out} = V_{in} - V_{TH}:$$

即漏极比栅极低一个阈值电压。随着 $V_{in}$ 升高，电流增大，$V_{out}$ 下降，因此这一条件只在某一个输入电平下成立。

### 第 2 步 — 用过驱动电压表示 $V_{in}$ 和 $V_{out}$

记 $\beta = \mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(100) = 13.4\ \mathrm{mA/V^2}$，$I_D = \tfrac12\beta V_{ov}^2$：

$$V_{out} = V_{DD} - I_DR_D, \qquad V_{in} = V_{GS} + V_S = V_{TH} + V_{ov} + I_DR_S ,$$

由于 $\gamma = 0$，无论 $V_S$ 为多少，$V_{TH} = 0.7$ V。

### 第 3 步 — 求解过驱动电压

代入 $V_{out} = V_{in} - V_{TH}$：

$$V_{DD} - I_DR_D = V_{ov} + I_DR_S\quad\Longrightarrow\quad V_{DD} = V_{ov} + \tfrac12\beta(R_D + R_S)\,V_{ov}^2 .$$

由 $\tfrac12\beta(R_D + R_S) = \tfrac12(13.4\ \mathrm{mA/V^2})(2.2\ \mathrm{k\Omega}) = 14.74\ \mathrm{V^{-1}}$ 得：

$$14.74\,V_{ov}^2 + V_{ov} - 3 = 0 ,$$

$$V_{ov} = \frac{-1 + \sqrt{1 + 4(14.74)(3)}}{2(14.74)} = \frac{-1 + \sqrt{177.88}}{29.48} = \frac{-1 + 13.337}{29.48} = 0.4185\ \mathrm{V}\quad(\text{positive root}).$$

### 第 4 步 — 电流、节点电压与输入电平

$$
\begin{aligned}
I_D &= \tfrac12\beta V_{ov}^2 = \tfrac12(13.4\ \mathrm{mA/V^2})(0.4185\ \mathrm{V})^2 = 1.173\ \mathrm{mA},\\
V_S &= I_DR_S = (1.173\ \mathrm{mA})(200\ \Omega) = 0.235\ \mathrm{V},\\
V_{out} &= V_{DD} - I_DR_D = 3 - (1.173\ \mathrm{mA})(2\ \mathrm{k\Omega}) = 0.653\ \mathrm{V},\\
V_{in} &= V_{TH} + V_{ov} + V_S = 0.7 + 0.4185 + 0.235 = 1.353\ \mathrm{V}.
\end{aligned}
$$

验证：$V_{in} - V_{TH} = 1.353 - 0.7 = 0.653\ \mathrm{V} = V_{out}$ ✓，即 $V_{DS} = 0.653 - 0.235 = 0.418\ \mathrm{V} = V_{ov}$ ✓。

### 第 5 步 — 小信号增益

在线性区边缘，饱和区（saturation region）模型仍（恰好）适用：

$$g_m = \beta V_{ov} = (13.4\ \mathrm{mA/V^2})(0.4185\ \mathrm{V}) = 5.61\ \mathrm{mS}$$

（也可由 $2I_D/V_{ov} = 2(1.173\ \mathrm{mA})/(0.4185\ \mathrm{V}) = 5.61$ mS 得到 ✓）。由于 $\lambda = \gamma = 0$，带源极负反馈共源级的增益为 $A_v = -g_mR_D/(1 + g_mR_S)$：

$$
\begin{aligned}
g_mR_D &= (5.61\ \mathrm{mS})(2\ \mathrm{k\Omega}) = 11.22,\\
1 + g_mR_S &= 1 + (5.61\ \mathrm{mS})(200\ \Omega) = 1 + 1.122 = 2.122,\\
A_v &= -\frac{11.22}{2.122} \approx -5.29 .
\end{aligned}
$$

与典型的 0.5 mA 偏置（$g_m = 3.66$ mS，$A_v \approx -4.2$）相比，更大的电流带来了更大的 $g_m$ 和增益，尽管 $g_mR_S \approx 1.1$ 已使增益相对于 $-g_mR_D = -11.2$ 减半。这是 $M_1$ 保持饱和时所能得到的最大增益：输入再升高，$M_1$ 就进入线性区，增益随之下降。

### 结果

$$V_{in} \approx 1.353\ \mathrm{V}\quad(I_D \approx 1.17\ \mathrm{mA},\ V_{out} \approx 0.653\ \mathrm{V}),\qquad A_v = -\frac{g_mR_D}{1 + g_mR_S} \approx -5.29,$$

其中 $V_{ov} = 0.4185$ V，$g_m = 5.61$ mS。

**常见错误。** 在偏置计算中忽略 $R_S$，即取 $3 = V_{ov} + \tfrac12\beta R_DV_{ov}^2$，从而得到 $V_{in} \approx 1.14$ V。输入还必须提供压降 $I_DR_S = 0.235$ V，而且 $R_S$ 会改变到达边缘时的电流。

**常见错误。** 计算增益时去掉源极负反馈，得到 $A_v = -g_mR_D \approx -11.2$。流过 $R_S$ 的信号电流使 $v_{gs}$ 缩小 $1 + g_mR_S = 2.12$ 倍。

**常见错误。** 把边缘条件写成 $V_{out} = V_{GS} - V_{TH}$，即以地为参考来度量漏极电压。有源极电阻时 $V_{out} = V_{DS} + V_S$，由此得到 $V_{out} = V_{in} - V_{TH}$。
