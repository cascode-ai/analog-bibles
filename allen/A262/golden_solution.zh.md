$I_5 = 20$ µA，$I_7 = I_6 \approx 126$ µA；$W_1 = W_2 \approx 7.2$ µm，$W_3 = W_4 = 10$ µm，$W_5 = 20$ µm，$W_6 \approx 126$ µm，$W_7 \approx 126$ µm（$W_8$ = 10 µm 为给定值）。

- 压摆率：$I_5 = SR\cdot C_c = (10\ \mathrm{V/\mu s})(2\ \mathrm{pF}) = 20$ µA。
- GB：$g_{m1} = GB\cdot C_c = 2\pi(10\ \mathrm{MHz})(2\ \mathrm{pF}) = 125.7\ \mu$S → $S_1 = S_2 = \dfrac{g_{m1}^2}{2K'_N(I_5/2)} = \dfrac{(125.7\ \mu)^2}{2(110\ \mu)(10\ \mu)} = 7.18$ → $W_1 = W_2 \approx 7.2$ µm。
- +ICMR：$V_{in}(\max) = V_{DD} - V_{SG3} + V_{TN}$ → $V_{SG3} = 1 - 0.8 + 0.7 = 0.9$ V（过驱动电压 0.2 V）→ $S_3 = S_4 = \dfrac{2(10\ \mu\mathrm A)}{50\ \mu(0.2)^2} = 10$ → $W_3 = W_4 = 10$ µm。
- −ICMR：$V_{in}(\min) = V_{SS} + V_{DS5}(\mathrm{sat}) + V_{GS1}$，其中 $V_{GS1} = 0.7 + \sqrt{2(10\ \mu)/(110\ \mu \cdot 7.18)} = 0.859$ V → $V_{DS5}(\mathrm{sat}) \le 0 + 1 - 0.859 = 0.141$ V → $S_5 \ge \dfrac{2(20\ \mu)}{110\ \mu(0.141)^2} = 18.3$。由于 M5 还必须从 M8（$S_8 = 10$）镜像 2 × 10 µA，取 $S_5 = 20$，$W_5 = 20$ µm（$V_{DS5}(\mathrm{sat}) = 0.135$ V ✓）。
- 输出级：$g_{m6} = 10g_{m1} = 1.257$ mS。$V_{SG4} = V_{SG6}$ 要求过驱动电压相等，因此 $S_6 = S_4\,g_{m6}/g_{m4}$，其中 $g_{m4} = \sqrt{2(50\ \mu)(10)(10\ \mu)} = 100\ \mu$S：$S_6 = 125.7$ → $W_6 \approx 126$ µm；$I_6 = \dfrac{g_{m6}^2}{2K'_PS_6} = 125.7\ \mu$A。
- $I_7 = I_6 = 125.7$ µA；$S_7 = S_8 I_7/I_8 = 10 \times 12.57 = 125.7$（等价地为 $S_5 I_7/I_5$）→ $W_7 \approx 126$ µm。
- 输出级压摆验算（下降沿，M6 截止）：$(I_7 - I_5)/C_L = 10.6$ V/µs，或 $I_7/(C_L + C_c) = 10.5$ V/µs，均 ≥ 10 V/µs ✓；这要求 $I_7 \ge I_5(1 + C_L/C_c) = 120$ µA。
- 验算：$|p_2| = g_{m6}/C_L = 2GB$，$z = g_{m6}/C_c = 10GB$ → $\Phi_M \approx 90° - \arctan 0.5 - \arctan 0.1 = 57.7°$（按题述规则 ≈ 60°；$C_c$ = 2 pF 略低于 $0.22C_L$）；$A_v = \dfrac{g_{m1}g_{m6}}{(g_{ds2}+g_{ds4})(g_{ds6}+g_{ds7})} \approx 1.55\times10^4$；$P_{diss} = 2\ \mathrm V \times (10 + 20 + 125.7)\ \mu\mathrm A \approx 0.31$ mW。
