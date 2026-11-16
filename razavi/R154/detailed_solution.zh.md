# 详细步骤 - R154

**思路。** 先求出每个输出可以变化的范围：上限为 $V_{DD}$，下限比输入共模电平低一个阈值电压（threshold voltage），并计入体效应。最大的对称摆幅要求把输出共模电平放在该范围的中间，由此确定 $R_D$；于是增益为 $g_mR_D$（或 $g_m(R_D\parallel r_O)$）。

### 第 1 步 — 每个输出的界限

$X$ 点的输出为 $V_X = V_{DD} - R_DI_{D1}$。

- **上限：** $V_X \le V_{DD}$，在 $I_{D1} = 0$ 时达到；电阻负载本身不需要电压余度（headroom）。
- **下限：** $M_1$ 必须保持饱和，$V_{DS1} \ge V_{GS1} - V_{TH1}$。由 $V_{DS1} = V_X - V_P$ 和 $V_{GS1} = V_{in1} - V_P$：
$$V_X - V_P \ge V_{in1} - V_P - V_{TH1} \quad\Longrightarrow\quad V_X \ge V_{in1} - V_{TH1} \approx V_{in,CM} - V_{TH1},$$
因为输入摆幅很小。

### 第 2 步 — 过驱动电压、尾节点电压与阈值（体效应）

每个输入器件流过 $I_{SS}/2 = 0.25$ mA，且 $\mu_nC_{ox}(W/L) = (134\ \mu\mathrm{A/V^2})(50/0.5) = 13.4\ \mathrm{mA/V^2}$：

$$V_{ov1} = \sqrt{\frac{2I_{D1}}{\mu_nC_{ox}(W/L)}} = \sqrt{\frac{2(0.25\ \mathrm{mA})}{13.4\ \mathrm{mA/V^2}}} = 0.193\ \mathrm{V}.$$

尾节点位于 $V_P = V_{in,CM} - V_{TH1} - V_{ov1}$，且 $V_{SB1} = V_P$：

$$V_{TH1} = 0.7 + 0.45\left(\sqrt{0.9 + V_P} - \sqrt{0.9}\right)\ \mathrm{V}.$$

从 $V_P = 0.25$ V 开始迭代：

$$
\begin{aligned}
V_{TH1} &= 0.7 + 0.45\left(\sqrt{1.15} - 0.9487\right) = 0.7557\ \mathrm{V} &&\Rightarrow\; V_P = 1.2 - 0.193 - 0.7557 = 0.2512\ \mathrm{V},\\
V_{TH1} &= 0.7 + 0.45\left(\sqrt{1.1512} - 0.9487\right) = 0.7559\ \mathrm{V} &&\Rightarrow\; V_P = 0.2510\ \mathrm{V}\ \text{(converged)}.
\end{aligned}
$$

所以 $V_{TH1} \approx 0.756$ V，允许的最低输出电压为

$$V_{out,min} = V_{in,CM} - V_{TH1} = 1.2 - 0.756 = 0.444\ \mathrm{V}.$$

每个输出可以在 0.444 V 与 3 V 之间变化，范围为 $3 - 0.444 = 2.556$ V。

### 第 3 步 — 为获得最大摆幅选择 $R_D$

为了对称地利用整个范围，静态输出电平必须位于中间：

$$V_{out,CM} = \frac{V_{DD} + V_{out,min}}{2} = \frac{3 + 0.444}{2}\ \mathrm{V} = 1.722\ \mathrm{V}.$$

平衡时每个电阻流过 $I_{SS}/2$，因此

$$
\begin{aligned}
V_{DD} - R_D\frac{I_{SS}}{2} &= V_{out,CM}\\
R_D &= \frac{V_{DD} - V_{out,CM}}{I_{SS}/2} = \frac{3 - 1.722\ \mathrm{V}}{0.25\ \mathrm{mA}} = \frac{1.278\ \mathrm{V}}{0.25\ \mathrm{mA}} = 5.11\ \mathrm{k}\Omega .
\end{aligned}
$$

**验证。** 当尾电流完全被导向一边时，一个输出降到 $V_{DD} - R_DI_{SS} = 3 - (5.11\ \mathrm{k}\Omega)(0.5\ \mathrm{mA}) = 0.444$ V，另一个升到 $V_{DD}$：全部压降 $R_DI_{SS}$ 等于整个单端摆幅 2.556 V。

（不考虑体效应时，$V_{out,min} = 0.5$ V，$V_{out,CM} = 1.75$ V，$R_D = 1.25\ \mathrm{V}/0.25\ \mathrm{mA} = 5.0$ kΩ。）

### 第 4 步 — 输入器件的跨导

在单个器件的平衡电流 $I_{SS}/2$ 下，跨导（transconductance）为

$$g_m = \sqrt{2(13.4\ \mathrm{mA/V^2})(0.25\ \mathrm{mA})} = \sqrt{6.70\times10^{-6}}\ \mathrm{A/V} = 2.59\ \mathrm{mS}.$$

（验证：$g_m = 2I_D/V_{ov} = 2(0.25\ \mathrm{mA})/0.193\ \mathrm{V} = 2.59$ mS。）

### 第 5 步 — 差分增益

对差分输入 $v_{in}$ 而言，$P$ 是虚地（virtual ground），因此每一半都是共源级（common-source stage），对其输入 $\pm v_{in}/2$ 的增益为 $-g_mR_D$：

$$
\begin{aligned}
v_{out1} - v_{out2} &= \left(-g_mR_D\frac{v_{in}}{2}\right) - \left(+g_mR_D\frac{v_{in}}{2}\right) = -g_mR_D\,v_{in},\\
|A_v| &= g_mR_D = (2.59\ \mathrm{mS})(5.11\ \mathrm{k}\Omega) = 13.2 .
\end{aligned}
$$

取 $R_D = 5.0$ kΩ（不考虑体效应）时，$|A_v| = (2.59\ \mathrm{mS})(5.0\ \mathrm{k}\Omega) = 12.9$。

**计入沟道长度调制时**，半边电路（half circuit）中 $r_O$ 与 $R_D$ 并联：

$$
\begin{aligned}
r_O &= \frac{1}{\lambda I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(0.25\ \mathrm{mA})} = 40\ \mathrm{k}\Omega,\\
R_D\parallel r_O &= \frac{(5.11)(40)}{5.11 + 40}\ \mathrm{k}\Omega = 4.53\ \mathrm{k}\Omega,\\
|A_v| &= g_m(R_D\parallel r_O) = (2.59\ \mathrm{mS})(4.53\ \mathrm{k}\Omega) = 11.7 .
\end{aligned}
$$

（取 5.0 kΩ 时：$5.0\parallel 40 = 4.44$ kΩ，$|A_v| = 11.5$。）

### 结果

最大摆幅要求输出共模电平位于 $(3 + 0.444)/2 = 1.72$ V，即 $R_D \approx 5.1$ kΩ（不考虑体效应时为 5.0 kΩ）。取 $g_m = 2.59$ mS：

$$|A_v| = g_mR_D \approx 13\quad(13.2\ \text{with body effect},\ 12.9\ \text{without}),$$

若计入 $r_O = 40$ kΩ，则约为 11.7（11.5）。

**常见错误。** 令 $R_DI_{SS}/2$ 等于整个摆幅（2.56 V），得到 $R_D \approx 10$ kΩ，增益约为 26。这样平衡时输出会处于其范围的**底部**；应当是 $R_DI_{SS}$ 等于整个单端摆幅。

**常见错误。** 用全部尾电流计算 $g_m$，$\sqrt{2(13.4\ \mathrm{mA/V^2})(0.5\ \mathrm{mA})} = 3.66$ mS，得到的增益约为 18.7。每个输入器件只流过 $I_{SS}/2$。

**常见错误。** 把 $g_mR_D/2$ 当作差分增益。两个输出各自沿相反方向变化 $g_mR_D\,v_{in}/2$，因此差分输出为 $g_mR_D\,v_{in}$。
