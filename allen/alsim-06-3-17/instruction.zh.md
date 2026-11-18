（设计题，自行计算得分。）[图 1] 所示的运算跨导放大器（operational transconductance amplifier，OTA）由 ±2.5 V 电源供电（节点 4 接 +2.5 V，节点 5 接 −2.5 V；同相输入 $v_1$ 在节点 1，反相输入 $v_2$ 在节点 2；输出节点 3 接 10 pF 负载）。要求利用下面的模型参数，仅用 MOSFET 设计一个 OTA，使其尽可能满足下列指标。所有沟道长度取 1 µm，W 取值保持在 1 µm 到 100 µm 之间。

1. 差模电压增益：$A_{vd} \ge 80$ dB。
2. 输出电压摆幅范围：OVSR = $|V_o(\max)| + |V_o(\min)| \ge 4.5$ V。OVSR 由能够向负载提供或从负载吸收 50 µA 电流时的最大和最小输出电压确定。
3. 压摆率（slew rate）：对 10 pF 负载 SR ≥ 10 V/µs。
4. 差模输入电阻：$R_{id} \ge 1$ MΩ。
5. 输入共模范围（input common-mode range）：ICMR ≥ 3 V。ICMR 的测量方法是：将 OTA 接成单位增益缓冲器（unity-gain buffer），扫描输入共模电压，同时监测输出电压和输入级电流。
6. 共模抑制比（common-mode rejection ratio）：CMRR ≥ 60 dB。
7. 增益带宽：10 pF 负载电容下 GB ≥ 25 MHz。
8. 相位裕度（phase margin）：10 pF 负载电容下 $\phi(GB) \ge 60°$。
9. 功耗：$P_{diss} \le 1$ mW。

完成设计并通过手工计算给出预期性能后，用 SPICE 验证你的设计。尽量采用最简单的模型，但必须包含所有电容。漏/源区面积和周长按下列近似估算：AD = AS = W × 10 µm，PD = PS = 2W + 20 µm。

列出一个表格，行为“手工计算值”和“SPICE 值”，列为 $A_{vd}$、OVSR、SR、$R_{id}$、ICMR、CMRR、GB、$\phi(GB)$、$P_{diss}$。设计得分为

Score = min[5, 5($A_{vd}$/10⁴)] + min[5, 5(OVSR/4.5 V)] + min[5, 5(SR/(10 V/µs))] + min[5, 5($R_{id}$/1 MΩ)] + min[5, 5(ICMR/3 V)] + min[5, 5(CMRR/10³)] + min[5, 5(GB/25 MHz)] + min[5, 5($\phi(GB)$/60°)] + min[5, 5(1 mW/$P_{diss}$)] + min[5, Simplicity factor]，

其中简洁因子（Simplicity factor）根据你使设计保持直接、简单的程度评定（1 = 复杂设计，5 = 简单设计）。你需要通过正确的 SPICE 分析来验证你的得分；请自行评定得分，并提供足够的细节以便核实你的评定。

模型参数（简单模型，L = 1 µm）：$K'_N = 110\ \mu\mathrm{A/V^2}$，$K'_P = 50\ \mu\mathrm{A/V^2}$，$V_{T0} = 0.7$ V（n），−0.7 V（p），$\gamma_N = 0.4\ \mathrm{V^{1/2}}$，$\gamma_P = 0.57\ \mathrm{V^{1/2}}$，$\lambda_N = 0.04\ \mathrm{V^{-1}}$，$\lambda_P = 0.05\ \mathrm{V^{-1}}$，$2|\phi_F| = 0.7$ V（n），0.8 V（p）。SPICE 采用 LEVEL-1 模型，取上述参数值（KP = $K'$，VTO，GAMMA，LAMBDA，PHI），以及 CGSO = CGDO = 220 × 10⁻¹² F/m，CGBO = 700 × 10⁻¹² F/m，CJ = 770 × 10⁻⁶ F/m²（n）/ 560 × 10⁻⁶ F/m²（p），CJSW = 380 × 10⁻¹² F/m（n）/ 350 × 10⁻¹² F/m（p），MJ = 0.5，MJSW = 0.38（n）/ 0.35（p），TOX = 140 Å（$C_{ox}$ = 2.47 fF/µm²）。
