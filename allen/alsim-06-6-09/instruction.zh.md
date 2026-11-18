用 SPICE 仿真 [图 1] 所示的折叠式共源共栅（folded cascode）运放，设计参数如下。要求在 20 pF 负载电容下仿真差模频率响应、功耗、相位裕度（phase margin）、输入共模范围（input common-mode range）、输出电压范围、压摆率（slew rate）和建立时间（settling time）。采用下面给出的 level-1 模型参数。

设计（原设计目标为：单 2.5 V 电源，$C_L$ = 10 pF，压摆率 10 V/µs，输出范围 0.5–2 V，ICMR 1–2.5 V，GB 10 MHz，增益 > 3000，$P_{diss}$ < 5 mW）：$V_{DD} = 2.5$ V，以地作为负电源轨；$I_3 = 100\ \mu$A，$I_4 = I_5 = 125\ \mu$A（每个共源共栅支路中 75 µA）；W/L：M1 = M2 = 33，M3 = 15，M4 = M5 = 160，M6 = M7 = 160，M8 = M9 = M10 = M11 = 20；所有器件均取 L = 1 µm。产生（或直接施加理想的）偏置电压 $V_{PB1}$、$V_{PB2}$、$V_{NB1}$、$V_{NB2}$，使其设定上述电流，并使 M4、M5 和 M10、M11 在输出范围内大致处于饱和区边缘。

模型参数（level 1）：NMOS VTO = 0.7 V，KP = 110 µA/V²，GAMMA = 0.4 V^1/2，LAMBDA = 0.04 V⁻¹，PHI = 0.7 V；PMOS VTO = −0.7 V，KP = 50 µA/V²，GAMMA = 0.57 V^1/2，LAMBDA = 0.05 V⁻¹，PHI = 0.8 V。
