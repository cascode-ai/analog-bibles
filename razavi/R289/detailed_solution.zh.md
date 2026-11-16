# 详细步骤 - R289

**思路。** 由平方律求出 $g_m$，由器件几何尺寸求出 $C_{GS}$、$C_{GD}$、$C_{DB}$。在栅极节点 X 和输出节点列基尔霍夫电流定律（KCL）方程，得到精确的二阶传递函数：其分母给出两个极点，分子给出零点。先忽略 $r_O$（与图中所画的模型一致），再计入 $r_O$ 重复计算。

### 第 1 步 — 跨导（transconductance）与输出电阻（output resistance）

由 $W/L = 50/0.5 = 100$ 得：

$$
\begin{aligned}
g_m &= \sqrt{2\mu_nC_{ox}\frac{W}{L}I_D} = \sqrt{2(134\ \mu\mathrm{A/V^2})(100)(1\ \mathrm{mA})} = \sqrt{2.68\times10^{-5}}\ \mathrm{A/V} = 5.18\ \mathrm{mS},\\
V_{ov} &= \frac{2I_D}{g_m} = \frac{2(1\ \mathrm{mA})}{5.18\ \mathrm{mS}} = 0.386\ \mathrm{V},\\
r_O &= \frac{1}{\lambda I_D} = \frac{1}{(0.1\ \mathrm{V^{-1}})(1\ \mathrm{mA})} = 10\ \mathrm{k}\Omega .
\end{aligned}
$$

### 第 2 步 — 器件电容

$$WLC_{ox} = (50\ \mu\mathrm{m})(0.5\ \mu\mathrm{m})(3.84\ \mathrm{fF/\mu m^2}) = 96\ \mathrm{fF}.$$

在饱和区中，$C_{GS}$ 等于沟道电容的三分之二加上交叠电容，而 $C_{GD}$ 只有交叠电容：

$$C_{GS} = \tfrac23(96\ \mathrm{fF}) + (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 64 + 20 = 84.0\ \mathrm{fF}, \qquad C_{GD} = (50\ \mu\mathrm{m})(0.4\ \mathrm{fF/\mu m}) = 20.0\ \mathrm{fF}.$$

$C_{DB}$ 是零偏下的漏结电容：底面面积 $W\times E$ 加上侧壁周长 $2(W + E)$ 的贡献，其中 $C_{jsw} = 0.35\times10^{-11}\ \mathrm{F/m} = 0.0035\ \mathrm{fF/\mu m}$：

$$
\begin{aligned}
C_{DB} &= (50)(1.5)\ \mu\mathrm{m^2}\times0.56\ \mathrm{fF/\mu m^2} + 2(50 + 1.5)\ \mu\mathrm{m}\times0.0035\ \mathrm{fF/\mu m}\\
&= 42.0 + 0.36 = 42.4\ \mathrm{fF}.
\end{aligned}
$$

### 第 3 步 — 小信号模型（small-signal model）与 KCL

暂时忽略 λ，节点 X 上接有来自 $V_{in}$ 的 $R_S$、接地的 $C_{GS}$ 以及接到输出的 $C_{GD}$；输出节点上接有到交流地的 $g_mV_X$、$R_D$ 和 $C_{DB}$，以及接到 X 的 $C_{GD}$。

<!-- diagram: diagram-01.cir -->

$$\frac{V_{in} - V_X}{R_S} = V_XC_{GS}s + (V_X - V_{out})C_{GD}s \qquad \text{(KCL at X)}, \tag{1}$$

$$(V_X - V_{out})C_{GD}s = g_mV_X + \frac{V_{out}}{R_D} + V_{out}C_{DB}s \qquad \text{(KCL at the output)}. \tag{2}$$

### 第 4 步 — 传递函数

由 (2) 得：

$$V_X(C_{GD}s - g_m) = V_{out}\left[\frac{1}{R_D} + (C_{GD} + C_{DB})s\right] \quad\Longrightarrow\quad V_X = V_{out}\frac{1/R_D + (C_{GD} + C_{DB})s}{C_{GD}s - g_m}.$$

把 (1) 改写为 $V_{in}/R_S = V_X[1/R_S + (C_{GS} + C_{GD})s] - V_{out}C_{GD}s$，代入 $V_X$，并乘以 $(C_{GD}s - g_m)$：

$$\frac{V_{in}}{R_S}(C_{GD}s - g_m) = V_{out}\left\{\left[\frac{1}{R_S} + (C_{GS} + C_{GD})s\right]\left[\frac{1}{R_D} + (C_{GD} + C_{DB})s\right] - C_{GD}s(C_{GD}s - g_m)\right\}.$$

花括号中的 $s^2$ 项为 $(C_{GS} + C_{GD})(C_{GD} + C_{DB}) - C_{GD}^2 = C_{GS}C_{GD} + C_{GS}C_{DB} + C_{GD}C_{DB} \equiv \xi$。两边同乘以 $R_SR_D$：

$$\frac{V_{out}}{V_{in}} = \frac{(C_{GD}s - g_m)R_D}{R_SR_D\xi s^2 + \left[R_S(1 + g_mR_D)C_{GD} + R_SC_{GS} + R_D(C_{GD} + C_{DB})\right]s + 1}.$$

### 第 5 步 — 零点

分子在下式处为零：

$$s_z = +\frac{g_m}{C_{GD}} = \frac{5.18\ \mathrm{mS}}{20.0\ \mathrm{fF}} = +2.59\times10^{11}\ \mathrm{rad/s}, \qquad f_z = 41\ \mathrm{GHz},$$

它位于**右半平面**：在该频率处，经 $C_{GD}$ 前馈（feedforward）的电流恰好抵消晶体管的 $g_mV_X$。

### 第 6 步 — 极点（忽略 λ）

$$
\begin{aligned}
\xi &= (84)(20) + (84)(42.4) + (20)(42.4)\ \mathrm{fF^2} = 1680 + 3558 + 847 = 6085\ \mathrm{fF^2} = 6.09\times10^{-27}\ \mathrm{F^2},\\
R_SR_D\xi &= (1\ \mathrm{k}\Omega)(2\ \mathrm{k}\Omega)(6.09\times10^{-27}\ \mathrm{F^2}) = 1.217\times10^{-20}\ \mathrm{s^2},\\
g_mR_D &= (5.18\ \mathrm{mS})(2\ \mathrm{k}\Omega) = 10.35,\\
R_S(1 + g_mR_D)C_{GD} &= (1\ \mathrm{k}\Omega)(11.35)(20\ \mathrm{fF}) = 2.271\times10^{-10}\ \mathrm{s},\\
R_SC_{GS} &= (1\ \mathrm{k}\Omega)(84\ \mathrm{fF}) = 0.840\times10^{-10}\ \mathrm{s},\\
R_D(C_{GD} + C_{DB}) &= (2\ \mathrm{k}\Omega)(62.4\ \mathrm{fF}) = 1.247\times10^{-10}\ \mathrm{s},\\
b &= 2.271 + 0.840 + 1.247 = 4.358\times10^{-10}\ \mathrm{s}.
\end{aligned}
$$

$1.217\times10^{-20}s^2 + 4.358\times10^{-10}s + 1 = 0$ 的根：

$$
\begin{aligned}
s &= \frac{-4.358\times10^{-10} \pm \sqrt{(4.358\times10^{-10})^2 - 4(1.217\times10^{-20})}}{2(1.217\times10^{-20})} = \frac{-4.358 \pm 3.758}{2.434}\times10^{10}\ \mathrm{s^{-1}},\\
\omega_{p1} &= 2.46\times10^9\ \mathrm{rad/s}\ (f_{p1} = 392\ \mathrm{MHz}), \qquad \omega_{p2} = 3.33\times10^{10}\ \mathrm{rad/s}\ (f_{p2} = 5.3\ \mathrm{GHz}).
\end{aligned}
$$

两个极点都是实数，且位于左半平面。低频增益为 $-g_mR_D = -10.4$。

**验算。** 主极点近似给出 $\omega_{p1} \approx 1/b = 2.29\times10^9$ rad/s 和 $\omega_{p2} \approx b/(R_SR_D\xi) = 3.58\times10^{10}$ rad/s，由于两个极点相距很远，它们与精确根相近；$b$ 中最大的一项是密勒项 $R_S(1 + g_mR_D)C_{GD}$。单纯用密勒节点估算，输入极点为 512 MHz，输出极点为 1.24 GHz；后者与真实的第二个极点相差很远。

### 第 7 步 — 计入 $r_O$

取 λ = 0.1 V⁻¹，用 $R_D\|r_O = 2\ \|\ 10 = 1.67\ \mathrm{k}\Omega$ 代替 $R_D$（分母和增益中都要替换）。于是 $g_m(R_D\|r_O) = 8.63$，$R_SR_D\xi = 1.014\times10^{-20}\ \mathrm{s^2}$，$b = 1.926 + 0.840 + 1.039 = 3.805\times10^{-10}$ s，由此得

$$\omega_{p1} = 2.84\times10^9\ \mathrm{rad/s}\ (453\ \mathrm{MHz}), \qquad \omega_{p2} = 3.47\times10^{10}\ \mathrm{rad/s}\ (5.5\ \mathrm{GHz}),$$

零点不变，增益为 −8.6。

### 结果

取 $g_m = 5.18$ mS，$C_{GS} = 84.0$ fF，$C_{GD} = 20.0$ fF，$C_{DB} = 42.4$ fF，并忽略 λ（与图中所画的模型一致）：

- **极点：** $\omega_{p1} \approx 2.46\times10^9$ rad/s（$f \approx 392$ MHz）和 $\omega_{p2} \approx 3.33\times10^{10}$ rad/s（$f \approx 5.3$ GHz），都在左半平面。
- **零点：** $s = +g_m/C_{GD} \approx +2.59\times10^{11}$ rad/s（$f \approx 41$ GHz），在右半平面。
- **低频增益：** $-g_mR_D = -10.4$。

计入 $r_O = 1/(\lambda I_D) = 10\ \mathrm{k}\Omega$（$R_D\|r_O = 1.67\ \mathrm{k}\Omega$）时：极点 ≈ $2.84\times10^9$ rad/s（453 MHz）和 $3.47\times10^{10}$ rad/s（5.5 GHz），零点不变，增益为 −8.6。

**常见错误。** 把零点放在左半平面，或放在 $g_m/C_{GS}$ 处。零点来自经 $C_{GD}$ 的前馈在输出端抵消 $g_mV_X$，位于 $s = +g_m/C_{GD}$。

**常见错误。** 忽略密勒效应（Miller effect），从而把主极点放在几 GHz 处（例如 $1/[R_S(C_{GS} + C_{GD})] \approx 1.5$ GHz）。在输入端，$C_{GD}$ 被放大约 $1 + g_mR_D \approx 11$ 倍，这一项主导了第一个极点。

**常见错误。** 把两个密勒节点估算值（≈ 0.51 GHz 和 ≈ 1.24 GHz）当作极点。输入端的估算大致正确，但精确的第二个极点（约 5.3 GHz）只能由完整的二阶分母求得。
