$Q_B$ 的范围为 ≈ 2.3×10¹² cm⁻²（$V_{BE}$ = 520 mV 时）到 ≈ 2.3×10¹³ cm⁻²（580 mV 时）；相应地，夹断电阻的方块电阻从 ≈ 18 kΩ/□（520 mV 的晶圆）降到 ≈ 1.8 kΩ/□（580 mV 的晶圆），分散度为 10:1。

- $I_C = I_S e^{V_{BE}/V_T}$，其中 $I_S = qAD_nn_i^2/Q_B$，因此 $Q_B = \dfrac{qAD_nn_i^2}{I_C}e^{V_{BE}/V_T}$，$A = 10^{-4}$ cm²。
- $qAD_nn_i^2/I_C = (1.6\times10^{-19})(10^{-4})(13)(2.25\times10^{20})/10^{-5} = 4680$ cm⁻²。
- 520 mV：$e^{20} = 4.85\times10^8$ → $Q_B = 2.27\times10^{12}$ cm⁻²（$I_S = 2.1\times10^{-14}$ A）。580 mV：$e^{22.31} = 4.88\times10^9$ → $Q_B = 2.28\times10^{13}$ cm⁻²（$I_S = 2.1\times10^{-15}$ A）。
- 夹断电阻：$R_\square = 1/(q\mu_pQ_B)$：$1/(1.6\times10^{-19}\times150\times2.27\times10^{12}) = 18.4\ \mathrm{k}\Omega/\square$ 和 $1/(1.6\times10^{-19}\times150\times2.28\times10^{13}) = 1.83\ \mathrm{k}\Omega/\square$。
- $V_{BE}$ 越高意味着 $I_S$ 越小，即基区电荷越多，夹断电阻的方块电阻越低。
