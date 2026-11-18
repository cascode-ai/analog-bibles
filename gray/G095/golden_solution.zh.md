$I_{OUT} \approx 0.97$ mA（若所有 $V_{BE}$ 都取 0.7 V，则 ≈ 1.0 mA）；$R_o \approx 3.2$ MΩ。

- $Q_3$ 的基极比地高两个二极管压降：$V_{B3} = V_{BE1} + V_{BE2}$。$I_{IN} = (15 - 2V_{BE})/13.7\ \mathrm{k\Omega} \approx 0.996$ mA（$V_{BE} \approx 0.676$ V）。
- KVL：$2V_{BE}(I_{IN}) = V_{BE3} + I_{OUT}(700\ \Omega)$ → $I_{OUT}(700\ \Omega) = V_{BE}(I_{IN}) + V_T\ln(I_{IN}/I_{OUT})$；迭代得 $I_{OUT} \approx 0.967$ mA（若用发射极电流 $(\beta_F+1)I_{OUT}/\beta_F$，则为 0.963 mA）。若二极管取 $V_{BE} = 0.7$ V：$I_{IN} = 0.993$ mA，$I_{OUT} \approx 1.00$ mA。
- 输出电阻（带发射极负反馈的输出级，基极由二极管叠层的低阻抗驱动，$R_B \approx 2/g_m\|13.7\ \mathrm{k\Omega} \approx 52$ Ω）：$g_{m3} = 37.2$ mS，$r_{\pi3} = 5.4$ kΩ，$r_{o3} = 130\ \mathrm{V}/0.967\ \mathrm{mA} = 134$ kΩ；$R_o = r_{o3}\left[1 + \dfrac{g_{m3}R_E\,r_{\pi3}}{r_{\pi3} + R_E + R_B}\right] \approx r_{o3}[1 + g_{m3}(R_E\|r_{\pi3})] \approx 134\ \mathrm{k}\times24 \approx 3.2$ MΩ。
