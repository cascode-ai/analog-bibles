# 详细步骤 - R134

**思路。** $M_2$ 的栅源电压固定，因此其饱和边缘对应唯一的输出电压 $V_{out} = V_b + |V_{THP}|$。此时它的电流就是其饱和电流，$M_1$ 也必须流过这一电流；由此确定 $M_1$ 的过驱动电压和输入电平。验证 $M_1$ 此时处于饱和区，然后在两管均饱和的条件下、用 $r_O$ 表示输出电阻，计算增益。

### 第 1 步 — 器件常数与 $M_2$ 的固定过驱动电压

每个器件的源极都与各自的衬底相连，因此没有体效应（body effect）。记 $\beta = \mu C_{ox}W/L$：

$$\beta_1 = (134\ \mu\mathrm{A/V^2})(40) = 5.36\ \mathrm{mA/V^2},\qquad \beta_2 = (38.4\ \mu\mathrm{A/V^2})(8.8) = 0.338\ \mathrm{mA/V^2}.$$

$V_{SG2} = V_{DD} - V_b = 3$ V，因此

$$V_{ov2} = V_{SG2} - |V_{THP}| = 3 - 0.8 = 2.2\ \mathrm{V}.$$

### 第 2 步 — $M_2$ 的饱和边缘条件

在边缘处，$V_{SD2} = V_{SG2} - |V_{THP}|$：

$$V_{DD} - V_{out} = V_{DD} - V_b - |V_{THP}|\quad\Longrightarrow\quad V_{out} = V_b + |V_{THP}| = 0 + 0.8 = 0.8\ \mathrm{V}:$$

即漏极比栅极**高**一个阈值电压。当 $V_{out} > 0.8$ V 时（即增益为 5 的正常工作范围），$M_2$ 处于线性区（triode region）；低于 0.8 V 时它处于饱和区。

### 第 3 步 — 边缘处的电流

偏置计算中忽略 $\lambda$，线性区公式与饱和区公式在边缘处一致：

$$I_D = \tfrac12\beta_2V_{ov2}^2 = \tfrac12(0.338\ \mathrm{mA/V^2})(2.2\ \mathrm{V})^2 = \tfrac12(0.338)(4.84)\ \mathrm{mA} = 0.818\ \mathrm{mA}.$$

### 第 4 步 — 输入电平以及 $M_1$ 的工作区

$M_1$ 流过相同的 0.818 mA；假设它处于饱和区，

$$V_{ov1} = \sqrt{\frac{2I_D}{\beta_1}} = \sqrt{\frac{2(0.818\ \mathrm{mA})}{5.36\ \mathrm{mA/V^2}}} = \sqrt{0.3051\ \mathrm{V^2}} = 0.552\ \mathrm{V},$$

$$V_{in} = V_{TH} + V_{ov1} = 0.7 + 0.552 = 1.252\ \mathrm{V}.$$

$V_{DS1} = V_{out} = 0.8$ V $\ge V_{ov1} = 0.552$ V，因此 $M_1$ 处于饱和区，裕量为 0.25 V ✓。

### 第 5 步 — 小信号模型（small-signal model）与增益

$M_1$ 等效为从 out 流向地的 $g_{m1}v_{in}$，并联 $r_{O1}$。$M_2$ 的栅极和源极都接交流地，因此只剩下 $r_{O2}$。在边缘处这一模型是正确的：从线性区一侧趋近时，随着 $V_{SD2} \to 2.2$ V，$M_2$ 的小信号电导 $\beta_2(V_{ov2} - V_{SD2})$ 减小到零，只剩下 $1/r_{O2}$。在输出端列基尔霍夫电流定律（KCL）方程：

$$g_{m1}v_{in} + \frac{v_{out}}{r_{O1}} + \frac{v_{out}}{r_{O2}} = 0\quad\Longrightarrow\quad A_v = -g_{m1}\,(r_{O1}\parallel r_{O2}).$$

在 $I_D = 0.818$ mA 时：

$$
\begin{aligned}
g_{m1} &= \sqrt{2\beta_1I_D} = \sqrt{2(5.36\ \mathrm{mA/V^2})(0.818\ \mathrm{mA})} = \sqrt{8.77\times10^{-6}}\ \mathrm{A/V} = 2.96\ \mathrm{mS},\\
r_{O1} &= \frac{1}{\lambda_nI_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.818\ \mathrm{mA})} = 12.2\ \mathrm{k\Omega},\\
r_{O2} &= \frac{1}{\lambda_pI_D} = \frac{1}{(0.2\ \mathrm{V^{-1}})(0.818\ \mathrm{mA})} = 6.11\ \mathrm{k\Omega},\\
r_{O1}\parallel r_{O2} &= \frac{(12.2)(6.11)}{12.2 + 6.11}\ \mathrm{k\Omega} = 4.08\ \mathrm{k\Omega},\\
A_v &= -(2.96\ \mathrm{mS})(4.08\ \mathrm{k\Omega}) \approx -12.1 .
\end{aligned}
$$

### 第 6 步 — 解释

在设计点（0.5 mA，$V_{out} \approx 2.17$ V），$M_2$ 是一个 2.16 kΩ（小信号）的线性区电阻，给出 5 倍增益。当 $V_{in}$ 升高到 1.25 V 附近时，$M_2$ 的增量电阻急剧增大，直到只剩下 $r_{O2}$，因此增益达到约 −12（$\lambda = 0$ 时为无穷大）。在偏置计算中忽略 $\lambda$ 时，两个器件只在传输曲线位于 $V_{in} = 1.252$ V 处的一段垂直线段上同时饱和，即从 $V_{out} = 0.8$ V 一直到 $V_{out} = V_{ov1} = 0.55$ V，在后一点 $M_1$ 进入线性区。因此该级的增益是高度非线性（nonlinear）的：只有在设计点附近才等于 5。

### 结果

$M_2$ 在以下条件下处于饱和区边缘：

$$V_{out} = V_b + |V_{THP}| = 0.8\ \mathrm{V},\quad I_D = \tfrac12\beta_2(2.2\ \mathrm{V})^2 \approx 0.818\ \mathrm{mA},\quad V_{in} = 0.7 + 0.552 \approx 1.25\ \mathrm{V},$$

此时 $M_1$ 处于饱和区（$V_{DS1} = 0.8$ V $> V_{ov1} = 0.55$ V）。该点的小信号增益为

$$A_v = -g_{m1}(r_{O1}\parallel r_{O2}) = -(2.96\ \mathrm{mS})(4.08\ \mathrm{k\Omega}) \approx -12,$$

远高于设计值 5（$\lambda = 0$ 时为无穷大）。

**常见错误。** 把 PMOS 的边缘条件写成 $V_{out} = V_b - |V_{THP}|$ 或 $V_{SD2} = V_{SG2}$。边缘条件是 $V_{SD} = V_{SG} - |V_{THP}|$，它使漏极比栅极**高**一个 $|V_{THP}|$：$V_{out} = 0 + 0.8$ V。

**常见错误。** 声称此时 $M_1$ 处于线性区。在 0.818 mA 时，它的过驱动电压为 0.552 V，低于其 $V_{DS} = 0.8$ V。

**常见错误。** 认为增益仍约为 5，或者用 $M_2$ 的线性区电阻来计算增益。在边缘处，其线性区电导为零，因此其小信号电阻为 $r_{O2} = 6.1$ kΩ，增益约为 −12。
