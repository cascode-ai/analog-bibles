计算 [图 1] 所示 Wilson 电流镜（Wilson current mirror）的输出电阻（output resistance）。$V_{OUT}$ 变化 5 V 时，$I_{OUT}$ 变化的百分比是多少？将你的结果与采用完整器件模型的 SPICE 仿真进行比较。将 $\beta_F$ 改变 −50%，观察 $I_{OUT}$，用 SPICE 检验其对 $\beta_F$ 的灵敏度（sensitivity）。此外，用 SPICE 画出 $V_{OUT}$ 从 0 到 15 V 时的大信号 $I_{OUT}$–$V_{OUT}$ 特性曲线。

器件参数（相同的 npn 管）：$\beta_F = \beta_0 = 200$，$V_A = 130$ V，$I_S = 5\times10^{-15}$ A，$V_T = 26$ mV；手工分析时取 $r_b = 0$，$r_\mu \to \infty$。仿真用的完整模型另外包括：$r_b = 200$ Ω，$\tau_F = 0.35$ ns，$C_{je0} = 1$ pF，$C_{\mu0} = 0.3$ pF，$C_{cs0} = 3$ pF（直流结果对这些参数不敏感）。
