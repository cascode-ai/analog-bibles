计算得到的回归比：$\mathscr{R}(s) = a_v(s)\dfrac{Z_d}{Z_d + R_F} = \dfrac{500}{(1 + s/100)(1 + s/10^6)(1 + s/5 \times 10^6)}$，其中 $Z_d = 100\text{ kΩ} \| 1/(sC_{\text{in}})$，$R_F$ = 100 kΩ。
注入法所得的量（由电路求出）：$\mathscr{R}'_i = (1 + a_v)Z_d/R_F$，$\mathscr{R}'_v = a_v + R_F/Z_d$。
(a) 数值（幅值∠相位）：
- 1 kHz：$\mathscr{R}'_i$ = 15.9∠−86.0°，$\mathscr{R}'_v$ = 15.9∠−85.9°，$\mathscr{R}$ = 7.96∠−89.5°。
- 100 kHz：$\mathscr{R}'_i$ = 0.907∠−21.1°，$\mathscr{R}'_v$ = 0.938∠+8.4°，$\mathscr{R}$ = 0.0669∠−129.3°。
- 10 MHz：$\mathscr{R}'_i$ = 0.0398∠−87.7°，$\mathscr{R}'_v$ = 25.2∠+87.7°，$\mathscr{R}$ = 1.0 × 10⁻⁶∠−264.5°（= +95.5°）。
- 1 GHz：$\mathscr{R}'_i$ = 3.98 × 10⁻⁴∠−90°，$\mathscr{R}'_v$ = 2513∠+90°，$\mathscr{R}$ = 1.0 × 10⁻¹²∠−270°。
(b) $|\mathscr{R}|$：在 100 rad/s（16 Hz）以下为 54 dB，到 1 Mrad/s 之间以 −20 dB/dec 下降，到 5 Mrad/s 之间以 −40 dB/dec 下降，再往上以 −60 dB/dec 下降。单位增益频率为 4.99 × 10⁴ rad/s（7.95 kHz），相位 −93.3° → PM ≈ 86.7°。相位在 $\sqrt{5} \times 10^6$ rad/s（356 kHz）处为 −180°，此处 $|\mathscr{R}| = 0.0083$ → 增益裕度 ≈ 41.6 dB。仿真值应与直接计算值相等（该网络是理想的），从而验证了这一方法。
