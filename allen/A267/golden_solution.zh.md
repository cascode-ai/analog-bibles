设计：$C_c$ = 3 pF；$W_1 = W_2 \approx 6$ µm；$W_3 = W_4 \approx 7$ µm；$W_5 \approx 30$ µm；$W_6 \approx 43$ µm；$W_7 \approx 95$ µm。除 ICMR 上限以及严格意义上的 SR > 10 V/µs 外，满足所有指标：在 2.5 V 电源下，任何 p 沟道输入设计都无法达到 +2 V（本设计在最坏情况下达到 ≈ +1.13 V，标称值为 +1.28 V）；$I_5/C_c$ = 10 V/µs 恰好处于极限，而固定的 $I_7$ = 95 µA 使 10 pF 负载的上升压摆速度不能超过 ≈ $I_7/(C_L + C_c)$ ≈ 7.3 V/µs。

- $C_c > 0.22C_L = 2.2$ pF → 取 3 pF；$I_5 = SR\cdot C_c$ = 30 µA（SR = 10 V/µs）。
- $g_{m1} = GB\cdot C_c = 2\pi(5\ \mathrm{MHz})(3\ \mathrm{pF}) = 94.2\ \mu$S → $S_1 = S_2 = \dfrac{g_{m1}^2}{2K'_P(15\ \mu\mathrm A)} = 5.9 \approx 6$。
- $g_{m6} \ge 10g_{m1} = 942\ \mu$S，$I_6 = 95$ µA → $S_6 = \dfrac{g_{m6}^2}{2K'_N I_6} = 42.5 \approx 43$。
- 电流镜平衡（$V_{GS3} = V_{GS6}$）：$S_3 = S_4 = S_6\dfrac{I_5/2}{I_6} = 6.7 \approx 7$。镜像极点 $g_{m3}/(2C_{gs3}) = \sqrt{2(110\ \mu)(7)(15\ \mu)}/(2 \times 0.67 \times 7 \times 2.47\ \mathrm{fF}) \approx 6.6\times10^9$ rad/s ≫ 10GB ✓。
- ICMR 下限：$V_{in}(\min) = V_{SS} + V_{GS3}(\max) - |V_{TP1}|(\min) = -2.5 + (0.85 + 0.20) - 0.55 = -2.0$ V ✓。
- ICMR 上限：$V_{in}(\max) = V_{DD} - V_{SD5}(\mathrm{sat}) - V_{SG1}$，其中 $V_{SG1} = |V_{TP1}| + \sqrt{2(15\ \mu)/(50\ \mu \cdot 6)} = |V_{TP1}| + 0.316$ V。即使 $V_{SD5}(\mathrm{sat}) \to 0$，它最多也只有 $2.5 - 0.85 - 0.316 = 1.33$ V（最坏情况），并且对任何阈值和尺寸都低于 $V_{DD} - |V_{TP}|(\min) = 1.95$ V：要达到 +2 V 需要 $V_{SD5}(\mathrm{sat}) + V_{SG1} \le 0.5$ V，比阈值本身还小。取 $V_{SD5}(\mathrm{sat}) = 0.2$ V：$S_5 = \dfrac{2I_5}{K'_P(0.2)^2} = 30$，得到最坏情况下 $V_{in}(\max) = 1.13$ V。
- $S_7 = S_5 I_6/I_5 = 95$（与 M5 的 $V_{SG}$ 相同）。
- 输出摆幅：$V_{out}(\max) = 2.5 - \sqrt{2(95)/(50 \cdot 95)} = 2.3$ V，$V_{out}(\min) = -2.5 + \sqrt{2(95)/(110 \cdot 43)} = -2.3$ V ✓。
- 增益：$A_v = \dfrac{2g_{m1}g_{m6}}{I_5(\lambda_P + \lambda_N)\,I_6(\lambda_N + \lambda_P)} = \dfrac{2(94.9\ \mu)(948\ \mu)}{(30\ \mu)(0.09)(95\ \mu)(0.09)} \approx 7.8\times10^3$ ✓。
- 相位裕度：$|p_2| = g_{m6}/C_L = 3.0\,GB$，$z = g_{m6}/C_c = 10\,GB$ → ≈ 66° ✓。$P_{diss} = 5\ \mathrm V \times 125\ \mu\mathrm A = 0.63$ mW ✓。SR = $I_5/C_c$ = 10 V/µs（驱动 10 pF 时输出上升沿还受 M7 限制，约为 $I_7/(C_L + C_c)$ ≈ 7.3 V/µs，若用较粗略的 $(I_7 - I_5)/C_L$ 则 ≈ 6.5 V/µs，这与 n 沟道版本中下降沿的情况相同；因此在 $I_7$ = 95 µA 下无法满足 SR > 10 V/µs 的指标）。
