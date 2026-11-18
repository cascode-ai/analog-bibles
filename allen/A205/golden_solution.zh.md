$A_v = \dfrac{g_{m1}}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}} \approx 0.906$ V/V，$R_{out} = \dfrac{1}{g_{m1}+g_{mbs1}+g_{ds1}+g_{ds2}} \approx 6.1$ kΩ。

- $g_{m1} = \sqrt{2\cdot110\cdot2\cdot50}$ µS = 148.3 µS。
- $V_{SB1}$ = 1 − (−5) = 6 V：$g_{mbs1} = g_{m1}\gamma/(2\sqrt{2|\phi_F|+V_{SB1}}) = 148.3\cdot0.4/(2\sqrt{6.7})$ µS = 11.5 µS。
- $g_{ds1} = g_{ds2} = 0.04\cdot50$ µA = 2 µS。
- 总电导为 163.8 µS：$A_v$ = 148.3/163.8 = 0.906，$R_{out}$ = 6.11 kΩ。（若不计体效应，增益为 0.974。）
- 若在偏置计算中保留 $(1+\lambda V_{DS})$ 因子（$V_{DS1}$ = 4 V，$V_{OV1}$ = 0.626 V），则 $g_{m1} = 2I_D/V_{OV1}$ = 159.7 µS，$g_{mbs1}$ = 12.3 µS，得到 $A_v$ ≈ 0.907–0.911，$R_{out}$ ≈ 5.7 kΩ；这同样正确。
