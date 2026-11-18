单位增益频率 ≈ 3.85 Mrad/s ≈ 0.61 MHz；压摆率 ≈ 0.2 V/μs。

- 输入级：pnp 差分对，$I_{EE} = 20$ μA，每边 10 μA，有源负载（电流镜）为 $Q_3$–$Q_4$，因此它到 $Q_5$ 基极的跨导为 $G_m = g_{m1} = 10\text{ μA}/26\text{ mV} = 0.385$ mA/V。
- 主极点（dominant pole）位于 0.05 μF 电容所在的 $Q_5$ 基极。在该极点以上，$v_{b5} \approx G_m v_i/(j\omega C)$，且 $v_o = -500\,v_{b5}$，因此 $|v_o/v_i| = 500\,G_m/(\omega C)$，它在 $\omega_u = 500 \times 0.385\text{ mA/V}/0.05\text{ μF} = 3.85 \times 10^6$ rad/s、$f_u ≈ 613$ kHz 处为单位值。
- 压摆率：输入级向电容最多只能提供 $I_{EE} = 20$ μA：$dV_{b5}/dt = 20\text{ μA}/0.05\text{ μF} = 400$ V/s，而输出的变化速度是它的 500 倍：0.2 V/μs。
- 两者都比使用 10 pF 密勒电容（Miller capacitance）时差十倍（该电容在 $Q_5$ 基极处相当于约 $10\text{ pF} \times 501 ≈ 5$ nF：6.1 MHz 和 2 V/μs）；比值 SR/$\omega_u = I_{EE}/G_m$ = 52 mV 保持不变。
