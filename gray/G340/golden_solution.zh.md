$F(s) = \dfrac{1 + s/\omega_2}{1 + s/\omega_1}$，其中 $\omega_1 \approx 7.61$ rad/s（极点），$\omega_2 \approx 116.5$ rad/s（零点）。一种实现是滞后-超前网络（lag-lead network）：$R_1$ 串联在鉴相器输出与 VCO 输入节点之间，$R_2$ 与 $C$ 串联后从该节点接地，从而 $\omega_2 = 1/(R_2C)$，$\omega_1 = 1/[(R_1 + R_2)C]$。取 $C = 1\ \mu$F：$R_2 = 8.59$ kΩ，$R_1 = 122.8$ kΩ（任何能给出相同时间常数的 C 均可）。

推导：
- 环路增益 $T(s) = \dfrac{K_vF(s)}{s}$，其中 $K_v = K_OK_D = 1000\ \mathrm{s^{-1}}$。令 $a = \omega_c/\omega_1$，$b = \omega_c/\omega_2$，$\omega_c = 100$ rad/s。
- 相位：$-90° - \arctan a + \arctan b = -135°$ → $\arctan a - \arctan b = 45°$ → $a = (1 + b)/(1 - b)$。
- 幅值：$(K_v/\omega_c)^2(1 + b^2) = 1 + a^2$，即 $100(1 + b^2) = 2(1 + b^2)/(1 - b)^2$ → $(1 - b)^2 = 0.02$ → $b = 0.8586$，$a = 13.14$。
- 因此 $\omega_2 = 100/0.8586 = 116.5$ rad/s，$\omega_1 = 100/13.14 = 7.61$ rad/s（$\omega_2/\omega_1 = 15.3$）。
- 验证：$|T(j100)| = 1.000$，$\angle T(j100) = -135.0°$（相位裕度 45°）。闭环极点位于 $-36.5 \pm j79.2$ rad/s（$\omega_n \approx 87$ rad/s，ζ ≈ 0.42）。
- 渐近近似（$\omega_1 \ll \omega_c$，零点放在 $\omega_c$ 处）给出 $\omega_2 = 100$ rad/s，$\omega_1 = \omega_c^2/(\sqrt2 K_v) = 7.07$ rad/s，此时穿越频率处的相位约为 −131°。
