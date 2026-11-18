$R_L = 2\ \mathrm{k\Omega}$ 时约为 82 µW，$R_L = 10\ \mathrm{k\Omega}$ 时约为 110 µW；两种情况下功率增益均为 $\approx \beta_F = 100$（20 dB）。
- $I_Q = 2.86$ mA。最大幅度：$\hat V_o = I_QR_L = 5.72$ V（2 kΩ）和 $14.8$ V（10 kΩ）；负载功率分别为 8.18 mW 和 10.95 mW。
- 跟随器的电压增益 ≈ 1，因此驱动级的信号电压幅度 ≈ $\hat V_o$；信号基极电流幅度为 $\hat I_b = (\hat V_o/R_L)/\beta_F$（分别为 28.6 µA 和 14.8 µA）。
- 驱动功率 $P_i = \tfrac12\hat V_o\hat I_b = P_L/\beta_F$：$\tfrac12(5.72)(28.6\ \mu\mathrm{A}) = 81.8$ µW；$\tfrac12(14.8)(14.8\ \mu\mathrm{A}) = 109.5$ µW。
- 功率增益 $P_L/P_i = \beta_F = 100$（若采用 $I_e = (\beta_F+1)I_b$，则为 101）。
- 若同时计入 $Q_2$ 和 $Q_3$ 的基极电流（β = 100），则 $I_Q = 2.86/1.02 = 2.80$ mA，于是 2 kΩ 时 $\hat V_o = 5.61$ V，$P_i \approx 78$ µW；10 kΩ 的情况和功率增益不变。
