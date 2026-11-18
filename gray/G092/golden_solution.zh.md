一种设计：$(W/L)_1 \approx 25.8$，$R_1 = 22$ kΩ，$V_{ov2} \approx 0.036$ V，$R_2 \approx 16.4$ kΩ，$(W/L)_2 \approx 78$。

- $M_1$：$(W/L)_1 = 2I_{IN}/(k'V_{ov1}^2) = 200\ \mu/(194\ \mu\times0.04) = 25.8$；$V_{GS1} = 0.8$ V，故 $R_1 = (3 - 0.8)/100\ \mu\mathrm{A} = 22$ kΩ。
- KVL：$V_{GS1} = V_{GS2} + I_{OUT}R_2$ → $V_{ov2} = V_{ov1} - I_{OUT}R_2$。
- (iii)：$M_2$ 的最小漏极电压为 $I_{OUT}R_2 + V_{ov2} = V_{ov1} = 0.2$ V，因此满足 (ii) 就自动满足 (iii)。
- (iv)：$R_o = r_{o2}(1 + g_{m2}R_2) + R_2$，其中 $r_{o2} = 1/(\lambda I_{OUT}) = 5$ MΩ，$g_{m2}R_2 = \dfrac{2I_{OUT}}{V_{ov2}}\cdot\dfrac{V_{ov1}-V_{ov2}}{I_{OUT}} = \dfrac{2(V_{ov1}-V_{ov2})}{V_{ov2}}$。$R_o = 50$ MΩ 要求 $g_{m2}R_2 \approx 9$，故 $V_{ov2} = 0.4/11 = 0.036$ V。
- $R_2 = (0.2 - 0.036)/10\ \mu\mathrm{A} = 16.4$ kΩ；$(W/L)_2 = 2I_{OUT}/(k'V_{ov2}^2) = 20\ \mu/(194\ \mu\times0.00132) \approx 78$。
- 说明：36 mV 的过驱动电压（overdrive voltage）低于约 $2nV_T$，因此 $M_2$ 实际上处于弱反型（weak inversion）或中等反型（moderate inversion），按平方律确定的尺寸只是近似的。
