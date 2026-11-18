不计漏电时 $R_o \approx 367$ MΩ。$V_{OUT} = 2$ V 时漏电对应的电阻 ≈ 4×10¹² Ω，可以忽略，故 $R_o \approx 367$ MΩ。$V_{OUT} = 3$ V 时漏电对应的电阻 ≈ 104 MΩ，$R_o \approx 81$ MΩ：衬底漏电起主导作用。

- 偏置：$V_{ov} = \sqrt{2I/(k'W/L)} = \sqrt{2(100\ \mu)/(194\ \mu\times121.95)} = 0.092$ V，$g_m = 2I/V_{ov} = 2.18$ mS，$r_o = 1/(\lambda I) = 410$ kΩ。
- 共源共栅：$R_o = r_{o2}(1 + g_{m2}r_{o1}) + r_{o1} \approx 366.7$ MΩ。
- $V_{DS1} = V_{GS3} + V_{GS4} - V_{GS2} \approx V_{GS} = V_t + V_{ov} = 0.692$ V，故 $V_{DS2} = V_{OUT} - 0.692$ V，$V_{DS2} - V_{DS(\text{act})} = V_{DS2} - V_{ov}$ = 1.216 V（2 V）和 2.216 V（3 V）。
- $I_{DB2} = 5(1.216)(100\ \mu\mathrm{A})e^{-30/1.216} \approx 1.2\times10^{-14}$ A；3 V 时：$5(2.216)(100\ \mu\mathrm{A})e^{-30/2.216} \approx 1.46\times10^{-9}$ A。
- $g_{db} = \partial I_{DB}/\partial V_D = \dfrac{I_{DB}}{V_{DS}-V_{DS(\text{act})}}\left(\dfrac{K_2}{V_{DS}-V_{DS(\text{act})}} + 1\right)$（≈ $K_2I_{DB}/(V_{DS}-V_{DS(\text{act})})^2$）：2 V 时为 $2.5\times10^{-13}$ S（$r_{db} \approx 4\times10^{12}$ Ω），3 V 时为 $9.6\times10^{-9}$ S（$r_{db} \approx 104$ MΩ，用近似式则为 112 MΩ）。
- $r_{db}$ 从输出节点接到接地的衬底，直接与共源共栅电阻并联：2 V 时 $R_o$ = 367 MΩ；3 V 时 $367\|104 \approx 81$ MΩ（用近似式 ≈ 86 MΩ）。$M_1$ 的漏电可以忽略（$V_{DS1} - V_{ov} = 0.6$ V，对应 $e^{-50}$），而且无论如何都被共源共栅管屏蔽。
