$R_L \approx 620\ \Omega$，$P_L \approx 160$ mW；在负峰值处 $|I_{C3}| \approx 0.15$ mA，$I_{C4} \approx 22.5$ mA。
- 输出器件 $Q_2$ 和 $Q_4$ 各自工作在 B 类负载线上；摆幅超过 $V_{CC}/2$ 时，其峰值瞬时功耗为 $V_{CC}^2/(4R_L)$，因此 100 mW 的限制要求 $R_L \ge 562.5\ \Omega$（$Q_3$、$Q_1$、$Q_7$ 的功耗小得多）。
- 摆幅极限：$V_o^- = -14.1$ V；$V_o^+ = \min(14.1\ \mathrm{V},\ (\beta_F+1)(0.15\ \mathrm{mA})R_L)$，因为 $Q_2$ 的基极驱动电流不能超过 $Q_7$ 的 0.15 mA，即 $I_{o,max} = 151 \times 0.15\ \mathrm{mA} = 22.65$ mA。
- 在 $R_L = 562.5\ \Omega$ 时，正向峰值被限制在 12.7 V。$P_L$ 随 $R_L$ 增大而增大，直到 $22.65\ \mathrm{mA}\cdot R_L = 14.1$ V，即 $R_L = 623\ \Omega$，之后下降。最优值：$R_L \approx 623\ \Omega$，$\hat V_o = 14.1$ V，$P_L = 14.1^2/(2\times623) = 160$ mW；峰值功耗 $225/(4\times623) = 90$ mW < 100 mW。
- 负峰值电流 22.65 mA = $|I_{E3}| + I_{C4} = |I_{C3}|(31/30 + 150)$ → $|I_{C3}| = 0.150$ mA，$I_{C4} = 22.5$ mA。
