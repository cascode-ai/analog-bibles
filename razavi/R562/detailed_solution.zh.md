# 详细步骤 - R562

**思路。** 功耗预算决定支路电流；目标 $g_{m1}$ 进而决定 $(W/L)_1$，并且 $(W/L)_2 = K(W/L)_1$。由环路方程 $V_{GS1} = V_{GS2} + I_{D2}R_S$ 求出所需的 $R_S$，先不考虑、再考虑 $M_2$ 的体效应（其源极高于地），然后由 $R_S = 1/(C_Sf_{CK})$ 得到 $C_S$。PMOS 电流镜只需保持饱和即可。

### 第 1 步 — 支路电流与 $M_1$、$M_2$ 的尺寸

电源总电流为

$$I_{tot} = \frac{P}{V_{DD}} = \frac{1\ \mathrm{mW}}{3\ \mathrm{V}} = 333\ \mu\mathrm{A},$$

相同的电流镜 $M_3$、$M_4$ 将其平均分配：

$$I_{D1} = I_{D2} = I = \frac{333\ \mu\mathrm{A}}{2} = 167\ \mu\mathrm{A}.$$

目标为 $g_{m1} = 1/(500\ \Omega) = 2$ mS，因此

$$
\begin{aligned}
\left(\frac WL\right)_1 &= \frac{g_{m1}^2}{2\mu_nC_{ox}I_{D1}}\\
&= \frac{(2\times10^{-3}\ \mathrm{S})^2}{2(134\times10^{-6}\ \mathrm{A/V^2})(166.7\times10^{-6}\ \mathrm{A})}\\
&= \frac{4\times10^{-6}}{4.467\times10^{-8}} = 89.6 ,
\end{aligned}
$$

$$V_{ov1} = \frac{2I_{D1}}{g_{m1}} = \frac{2(166.7\ \mu\mathrm{A})}{2\ \mathrm{mS}} = 0.167\ \mathrm{V}, \qquad V_{GS1} = 0.7 + 0.167 = 0.867\ \mathrm{V}.$$

于是 $(W/L)_2 = K(W/L)_1 = 4\times89.6 = 358$。$M_2$ 流过相同的电流而宽度为 $K$ 倍，因此其过驱动电压小 $\sqrt K$ 倍：

$$V_{ov2} = \frac{V_{ov1}}{\sqrt K} = \frac{0.167}{2} = 0.0833\ \mathrm{V}.$$

### 第 2 步 — 不考虑体效应时的 $R_S$ 和 $C_S$

沿栅极回路列 KVL：

$$V_{GS1} = V_{GS2} + IR_S .$$

若 $V_{TH2} = V_{TH1}$，阈值电压相互抵消：

$$IR_S = V_{ov1} - V_{ov2} = 0.167 - 0.0833 = 0.0833\ \mathrm{V}, \qquad R_S = \frac{0.0833\ \mathrm{V}}{166.7\ \mu\mathrm{A}} = 500\ \Omega,$$

这与 $K = 4$ 时的恒定 $g_m$ 结果 $g_{m1} = \dfrac{2}{R_S}\left(1 - \dfrac{1}{\sqrt K}\right) = 1/R_S$ 一致。于是

$$C_S = \frac{1}{R_Sf_{CK}} = \frac{1}{(500\ \Omega)(50\times10^{6}\ \mathrm{Hz})} = 40\ \mathrm{pF}.$$

### 第 3 步 — 考虑 $M_2$ 的体效应

$M_2$ 的衬底接地，但其源极位于 $V_{SB2} = IR_S$，因此

$$V_{TH2} = V_{TH0} + \gamma\left(\sqrt{2|\phi_F| + IR_S} - \sqrt{2|\phi_F|}\right).$$

由于 $V_{TH1} = V_{TH0}$（源极接地），环路方程变为

$$
\begin{aligned}
V_{TH0} + V_{ov1} &= V_{TH2} + V_{ov2} + IR_S\\
V_{ov1} - V_{ov2} &= IR_S + \gamma\left(\sqrt{2|\phi_F| + IR_S} - \sqrt{2|\phi_F|}\right).
\end{aligned}
$$

令 $x = IR_S$：

$$0.0833 = x + 0.45\left(\sqrt{0.9 + x} - 0.9487\right).$$

试算得 $x = 0.0676$ V：

$$
\begin{aligned}
\sqrt{0.9 + 0.0676} &= \sqrt{0.9676} = 0.9837,\\
0.45(0.9837 - 0.9487) &= 0.45\times0.0350 = 0.0157\ \mathrm{V},\\
x + 0.0157 &= 0.0676 + 0.0157 = 0.0833\ \mathrm{V}.\ \checkmark
\end{aligned}
$$

因此 $IR_S = 67.6$ mV，$M_2$ 的阈值电压比 $M_1$ 高 15.7 mV。于是

$$
\begin{aligned}
R_S &= \frac{67.6\ \mathrm{mV}}{166.7\ \mu\mathrm{A}} = 406\ \Omega,\\
C_S &= \frac{1}{R_Sf_{CK}} = \frac{1}{(406\ \Omega)(50\times10^{6}\ \mathrm{Hz})} = 49\ \mathrm{pF}.
\end{aligned}
$$

体效应占用了一部分过驱动电压之差，留给 $R_S$ 的电压就少了。若忽略它，会得到 $C_S = 40$ pF，而实际的 $g_{m1}$ 将偏低约 20 %。

### 第 4 步 — PMOS 电流镜与饱和检查

$(W/L)_{3,4}$ 并不关键，器件只需保持饱和。取 0.3 V 的过驱动电压：

$$\left(\frac WL\right)_{3,4} = \frac{2|I_D|}{\mu_pC_{ox}|V_{ov}|^2} = \frac{2(166.7\ \mu\mathrm{A})}{(38.4\ \mu\mathrm{A/V^2})(0.3\ \mathrm{V})^2} = \frac{333.3}{3.456} \approx 96,$$

所以 $|V_{GS3,4}| = 0.8 + 0.3 = 1.1$ V。$M_1$ 和 $M_4$ 为二极管连接，因此处于饱和区。$M_4$ 使 $M_2$ 的漏极处于 $V_{DD} - |V_{GS4}| = 3 - 1.1 = 1.9$ V，远高于 $V_{G2} - V_{TH2} = 0.867 - 0.716 = 0.15$ V，因此 $M_2$ 饱和。$M_3$ 的漏极位于 $V_{GS1} = 0.867$ V，所以 $|V_{DS3}| = 3 - 0.867 = 2.13$ V $> |V_{ov3}| = 0.3$ V。只要 $|V_{GS4}|$ 不超过约 2.8 V，任何 PMOS 尺寸都能使 $M_2$ 保持饱和。

### 结果

- 支路电流：$I_{D1} = I_{D2} = 167\ \mu$A（由 1 mW / 3 V = 333 μA 得到）。
- $(W/L)_1 = g_{m1}^2/(2\mu_nC_{ox}I_{D1}) \approx 90$，$(W/L)_2 = 4(W/L)_1 \approx 358$，过驱动电压分别为 0.167 V 和 0.083 V。
- 考虑 $M_2$ 的体效应：由 $83.3\ \mathrm{mV} = IR_S + \Delta V_{TH2}$ 得 $IR_S = 67.6$ mV，$R_S \approx 406\ \Omega$，$C_S = 1/(R_Sf_{CK}) \approx 49$ pF。若采用理想的恒定 $g_m$ 关系（忽略体效应），则 $R_S = 500\ \Omega$，$C_S = 40$ pF。
- PMOS：$(W/L)_{3,4}$ 并不关键，例如约 96–100（过驱动电压约 0.3 V）。所有器件都处于饱和区。

**常见错误。** 给每条支路都分配全部 333 μA。1 mW 的预算涵盖**两条**支路；电流加倍会使 $(W/L)_1$ 减半，并使功耗超出预算一倍。

**常见错误。** 使用 $g_{m1} = 2/R_S$（忘了因子 $1 - 1/\sqrt K$），得到 $R_S = 1$ kΩ 和 $C_S = 20$ pF。当 $K = 4$ 时该因子为 $1/2$，因此 $g_{m1} = 1/R_S$。

**常见错误。** 尽管题目给出了 $\gamma$ 且衬底接地，却忽略 $M_2$ 的体效应。阈值电压增加的 15.7 mV 在 83 mV 的过驱动电压之差中占了相当大的比例，会使 $C_S$ 改变约 20 %。
