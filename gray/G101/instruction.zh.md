[图 1] 所示为一个带隙基准（bandgap reference）电路。假设 $\beta_F \to \infty$，$V_A \to \infty$，$I_{S1} = 1\times10^{-15}$ A，$I_{S2} = 8\times10^{-15}$ A（25 °C 时）。假设运放除可能存在非零失调电压（offset voltage）$V_{OS}$ 外是理想的，该失调用与其反相输入端串联的电压源表示，极性如图所示。$R_1 = R_3 = 1$ kΩ；$R_2$ 可调。

将目标电压定义为：当 $V_{OS} = 0$ 时，使 $T = 25$ °C 处 $dV_{OUT}/dT = 0$ 的 $V_{OUT}$ 值。在实际电路中 $V_{OS} = 30$ mV，并且在存在该失调的情况下修调 $R_2$，使 25 °C 时 $V_{OUT}$ 等于目标电压。求 $T = 25$ °C 时的 $dV_{OUT}/dT$。

模型：$V_{BE} = V_T\ln(I_C/I_S)$，其中 $I_S \propto T^{\gamma}\exp(-V_{G0}/V_T)$，$\gamma = 3.2$，$V_{G0} = 1.205$ V；25 °C（$T = 298$ K）时 $V_T = 25.7$ mV；$V_{OS}$ 和电阻均与温度无关。
