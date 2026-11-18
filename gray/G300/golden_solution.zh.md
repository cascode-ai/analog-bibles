$C \approx 6.4$ pF，开环增益在 ≈ 5.8 MHz 处为 0 dB（渐近线设计）。精确的双极点计算给出 $C \approx 5.6$ pF，0 dB 频率为 5.77 MHz。

- 补偿后：主极点（dominant pole）$|p_1| \approx 1/(g_m R_1 R_2 C)$（密勒），分裂出去的极点可以忽略，10 MHz 极点仍然存在。
- 60° 相位裕度：10 MHz 极点在单位增益频率处可贡献 30°：$f_u = 10\text{ MHz} \times \tan 30° = 5.77$ MHz，$\omega_u = 3.63 \times 10^7$ rad/s。
- $a_0 = 10^{108/20} = 2.51 \times 10^5$；$g_m R_1 R_2 = 6.39\text{ mA/V} \times 1.95\text{ MΩ} \times 86.3\text{ kΩ} = 1.075 \times 10^9$ Ω。
- 以 −20 dB/dec 滚降时，$a_0 |p_1| = \omega_u$：$C = \dfrac{a_0}{g_m R_1 R_2\,\omega_u} = \dfrac{2.51 \times 10^5}{1.075 \times 10^9 \times 3.63 \times 10^7} = 6.4$ pF（$|p_1|/2\pi = 23$ Hz）。
- 验证：取 6.4 pF 时，真实的 0 dB 频率为 5.1 MHz（10 MHz 极点使 5.8 MHz 处的 $|a|$ 缩小 1.15 倍），PM ≈ 63°。要求 $|a| = 1$ 恰好出现在 5.77 MHz 处，得 $C = 6.4/1.155 = 5.6$ pF。
