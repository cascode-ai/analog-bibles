$V_{in} \approx 1.30$ V，$A_v \approx -2.2$ V/V（忽略 $g_{ds}$ 时为 −2.35 V/V），$R_{out} \approx 6.65$ kΩ（忽略 $g_{ds}$ 时为 7.07 kΩ $= 1/g_{m2}$）。

- $100\ \mu\mathrm{A} = \frac{110\ \mu \times 5}{2}(V_{in}-0.7)^2$，故 $V_{in} - 0.7 = 0.603$ V，$V_{in} = 1.303$ V。若在 $v_{OUT} = 5 - V_{SG2} = 5 - (0.7 + 1.414) = 2.89$ V 处计入因子 $(1+\lambda v_{DS})$，则 $V_{in} \approx 1.27$ V。由于 $v_{DS1} = 2.89$ V > 0.6 V，M1 处于饱和。
- $g_{m1} = \sqrt{2 \cdot 110\ \mu \cdot 5 \cdot 100\ \mu} = 331.7\ \mu$S，$g_{m2} = \sqrt{2 \cdot 50\ \mu \cdot 2 \cdot 100\ \mu} = 141.4\ \mu$S，$g_{ds1} = 4\ \mu$S，$g_{ds2} = 5\ \mu$S。
- $A_v = -g_{m1}/(g_{m2} + g_{ds1} + g_{ds2}) = -331.7/150.4 = -2.20$（$\approx -g_{m1}/g_{m2} = -2.35$）。
- $R_{out} = 1/(g_{m2} + g_{ds1} + g_{ds2}) = 6.65$ kΩ（$\approx 1/g_{m2} = 7.07$ kΩ）。
- 若在直流解中自洽地计入因子 $(1+\lambda v_{DS})$（$V_{SD2}$ = 2.05 V，$v_{OUT}$ = 2.95 V，$V_{OV2}$ = 1.347 V，$V_{OV1}$ = 0.570 V，$g_m = 2I_D/V_{OV}$：$g_{m1}$ = 351 µS，$g_{m2}$ = 148.5 µS），则得到 $V_{in}$ = 1.27 V，$A_v \approx -2.23$ 至 $-2.24$，$R_{out} \approx 6.35$–6.4 kΩ；这同样正确。
