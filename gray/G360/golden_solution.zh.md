$R_{S(\text{opt})} \approx 372\ \Omega$，$F_{\text{opt}} \approx 1.57$，即 ≈ 2.0 dB（按噪声发生器互不相关的标准分析）。若进行保留相关性的完整分析，即基极电流噪声流过 $r_b + R_S$、集电极噪声连同 $R_S$ 一起折算，则得到 $R_{S(\text{opt})} \approx 385\ \Omega$，$F_{\text{opt}} \approx 1.78$（2.5 dB）。

- 噪声发生器：$\overline{v_i^2} = 4kT(r_b + 1/2g_m)$，$\overline{i_i^2} = 2qI_B = 2qI_C/\beta_F$；$F = 1 + \dfrac{\overline{v_i^2} + \overline{i_i^2}R_S^2}{4kTR_S}$。
- 求最小值：$R_{S(\text{opt})} = \sqrt{\overline{v_i^2}/\overline{i_i^2}} = \dfrac{\sqrt{\beta_F}}{g_m}\sqrt{1+2g_mr_b}$，$F_{\text{opt}} = 1 + \sqrt{\dfrac{1+2g_mr_b}{\beta_F}}$。
- 数值：$g_m = 76.9$ mS，$2g_mr_b = 15.4$，$\sqrt{16.4} = 4.05$：$R_{S(\text{opt})} = 7.07\times13\ \Omega\times4.05 = 372\ \Omega$；$F_{\text{opt}} = 1 + 4.05/7.07 = 1.572$ → $10\log_{10}1.572 = 1.97$ dB。
