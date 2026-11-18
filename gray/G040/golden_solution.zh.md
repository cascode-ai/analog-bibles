超 β 器件（480 mV）：$Q_B \approx 4.9\times10^{11}$ cm⁻²，基区方块电阻约 85 kΩ/□，穿通电压约 18 V。标准器件（560 mV）：$Q_B \approx 1.06\times10^{13}$ cm⁻²，约 3.9 kΩ/□，穿通电压约 8.6 kV，即无实际意义（远在此之前就会发生雪崩击穿）。

- $Q_B = \dfrac{qAD_nn_i^2}{I_C}e^{V_{BE}/V_T}$，其中 $qAD_nn_i^2/I_C = (1.6\times10^{-19})(10^{-4})(13)(2.25\times10^{20})/10^{-5} = 4680$ cm⁻²。
- 480 mV：$e^{18.46} = 1.04\times10^8$ → $Q_B = 4.88\times10^{11}$ cm⁻²。$R_\square = 1/(q\mu_pQ_B) = 1/(1.6\times10^{-19}\times150\times4.88\times10^{11}) = 85\ \mathrm{k}\Omega/\square$。
- 穿通：集电极耗尽宽度 $x_d = Q_B/N_D = 4.88\ \mu$m；$\psi_0 + V_R = qN_Dx_d^2/(2\epsilon) = (1.6\times10^{-19})(10^{15})(4.88\times10^{-4})^2/(2.08\times10^{-12}) = 18.3$ V → $V_R \approx 17.7$ V。
- 560 mV：$Q_B = 4680\,e^{21.54} = 1.06\times10^{13}$ cm⁻²；$R_\square = 3.9\ \mathrm{k}\Omega/\square$；$x_d = 106\ \mu$m（大于整个外延层），$V_R \approx 8.6$ kV——不可能发生穿通；标准器件的击穿由雪崩决定。
