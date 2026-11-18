$A_v \approx 2.7\times10^4$ V/V（≈ 88.5 dB）；$GB \approx 3.85\times10^5$ rad/s ≈ 61 kHz；$SR = 0.05$ V/µs；$P_{diss} = 0.9$ µW。

- 电流：M1、M2 为 50 nA（$I_3$ = 100 nA）；M4、M5 为 150 nA；共源共栅支路 M6–M8–M10 和 M7–M9–M11 为 150 − 50 = 100 nA。
- 跨导：$g_{m1} = 50\ \mathrm{nA}/(2.5\times26\ \mathrm{mV}) = 0.769$ µS；$g_{m7}$（p）$= 100\ \mathrm{nA}/(1.5\times26\ \mathrm{mV}) = 2.56$ µS；$g_{m9}$（n）$= 100\ \mathrm{nA}/(2.5\times26\ \mathrm{mV}) = 1.54$ µS。
- 输出电阻：$r_{ds1,2} = 1/(0.04\times50\ \mathrm{nA}) = 500$ MΩ；$r_{ds4,5} = 1/(0.05\times150\ \mathrm{nA}) = 133$ MΩ；$r_{ds6,7} = 1/(0.05\times100\ \mathrm{nA}) = 200$ MΩ；$r_{ds8\text{–}11} = 1/(0.04\times100\ \mathrm{nA}) = 250$ MΩ。
- $R_{out} \approx (g_{m9}r_{ds9}r_{ds11})\,\|\,[g_{m7}r_{ds7}(r_{ds2}\|r_{ds5})] = 96.2\ \mathrm{G\Omega}\,\|\,(2.56\ \mu\mathrm{S}\times200\ \mathrm{M\Omega}\times105.3\ \mathrm{M\Omega} = 54.0\ \mathrm{G\Omega}) = 34.6$ GΩ。
- 输出交流短路时，M7 的源极是低阻节点（≈ $1/g_{m7}$ = 0.39 MΩ ≪ $r_{ds2}\|r_{ds5}$），因此 M2 的信号电流几乎全部进入 M7，而 M1 的信号电流经 M6 和 M8–M11 电流镜到达输出：$G_m \approx g_{m1}$。因此 $A_v = g_{m1}R_{out} \approx 0.769\ \mu\mathrm{S}\times34.6\ \mathrm{G\Omega} \approx 26{,}600$（对小信号电路做完整的节点分析得 26,640）。
- $GB = g_{m1}/C_L = 0.769\ \mu\mathrm{S}/2\ \mathrm{pF} = 3.85\times10^5$ rad/s → 61.2 kHz。
- $SR = I_3/C_L = 100\ \mathrm{nA}/2\ \mathrm{pF} = 0.05$ V/µs（$I_4 = I_5 > I_3$，因此共源共栅管电流永远不会降到零）。
- $P_{diss} = (V_{DD} - V_{SS})(I_4 + I_5) = 3\ \mathrm{V}\times300\ \mathrm{nA} = 0.9$ µW：全部电源电流都经 M4 和 M5 流入；$I_3$ 和 100 nA 的电流镜电流都是其中的一部分，而不是额外的电流。
