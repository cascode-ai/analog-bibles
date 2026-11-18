$A_v = \dfrac{g_{m1}}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}} \approx 0.903$ V/V；$R_{out} = \dfrac{1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}} \approx 1.36$ kΩ。

- $g_{m1} = \sqrt{2\cdot110\cdot10\cdot200}$ µS = 663 µS。
- $V_{SB1}$ = 0 − (−5) = 5 V：$g_{mbs1} = 663\cdot0.4/(2\sqrt{5.7})$ µS = 55.6 µS。
- $g_{ds1} = g_{ds2} = 0.04\cdot200$ µA = 8 µS。
- 总和 735 µS：$A_v$ = 0.9026，$R_{out}$ = 1361 Ω。
- 若在偏置计算中保留因子 $(1+\lambda V_{DS})$（$V_{DS1}$ = 5 V，$V_{OV1}$ = 0.550 V），则 $g_{m1} = 2I_D/V_{OV1}$ = 726.7 µS，$g_{mbs1}$ = 60.9 µS，得到 $A_v$ ≈ 0.904，$R_{out}$ ≈ 1.24–1.25 kΩ；这同样正确。
