PM ≈ 87.3°（$C_{\text{in}} = 0$），≈ 86.7°（4 pF），≈ 84.4°（20 pF）。

- 计入 $C_{\text{in}}$ 后，分压比变为 $\dfrac{R\|(1/sC_{\text{in}})}{R + R\|(1/sC_{\text{in}})} = \dfrac{1/2}{1 + sRC_{\text{in}}/2}$，其中 $R$ = 100 kΩ，因此
$\mathscr{R}(s) = \dfrac{500}{(1 + s/100)(1 + s/10^6)(1 + s/\omega_3)}$，$\omega_3 = 2/(RC_{\text{in}})$：4 pF 时为 $5 \times 10^6$ rad/s，20 pF 时为 $10^6$ rad/s。
- 三种情况下穿越频率均 ≈ $5.0 \times 10^4$ rad/s。该处的相位为 $-\arctan 500 - \arctan 0.05 - \arctan(5 \times 10^4/\omega_3)$：
$C_{\text{in}} = 0$：$-89.9° - 2.9°$ → PM 87.3°；4 pF：额外 −0.6° → PM 86.7°；20 pF：额外 −2.9° → PM 84.4°。
- 输入电容在反馈通路中引入一个极点，使相位裕度减小；但由于穿越频率远低于 $\omega_3$，这里的影响很小。
