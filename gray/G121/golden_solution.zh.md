$A_v^+ \approx 0.861$（在 $V_i = +0.5$ V 处，此时 $V_o \approx -0.689$ V）。
- 传输特性：$V_i = V_o + V_{t0} + \gamma\left(\sqrt{V_o + V_{DD} + 2\phi_f} - \sqrt{2\phi_f}\right) + V_{ov1}$，其中 $V_{ov1} = \sqrt{2I_Q/(k'(W/L)_1)} = 0.1$ V 为常数（$R_L \to \infty$，因此 $I_{d1} = I_Q$）。
- 在 $V_i = 0.5$ V 处：$V_o + 0.5\sqrt{V_o + 3.1} = 0.5 - 0.8 + 0.5\sqrt{0.6} = 0.0873$ → $\sqrt{V_o + 3.1} = 1.5527$，$V_o = -0.689$ V。
- 斜率：$dV_o/dV_i = 1/\left(1 + \gamma/(2\sqrt{V_o + V_{DD} + 2\phi_f})\right) = 1/(1 + 0.25/1.5527) = 1/1.161 = 0.861$。
