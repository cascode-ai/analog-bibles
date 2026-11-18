约 0.35 V（$I_CR \ge 13.4\,V_T \approx 0.35$ V）。

- 对两个电流源列 KVL：$V_T\ln(I_{C3}/I_{S3}) + I_{C3}R_3 = V_T\ln(I_{C4}/I_{S4}) + I_{C4}R_4$。对于小失配：
  $\dfrac{\Delta I_C}{I_C} \approx \dfrac{1}{1 + g_mR}\dfrac{\Delta I_S}{I_S} - \dfrac{g_mR}{1 + g_mR}\dfrac{\Delta R}{R}$，其中 $g_mR = I_CR/V_T$。
- 2 mV 的 $V_{BE}$ 失配相当于 $\Delta I_S/I_S = 2/26 = 7.7\%$。
- 最坏情况（幅度相加）：$\dfrac{0.077 + 0.005\,x}{1 + x} \le 0.01$，其中 $x = I_CR/V_T$ → $0.067 \le 0.005x$ → $x \ge 13.4$。
- 所需压降 $I_CR \ge 13.4\times26\ \mathrm{mV} \approx 0.35$ V。（等价地，$(\Delta V_{BE} + V_R\,\Delta R/R)/(V_T + V_R) \le 0.01$。）
