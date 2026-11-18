$v_{OUT}(\max) = 4.3$ V，$v_{OUT}(\min) = 0.418$ V，$A_v \approx -1.97$ V/V，$R_{out} \approx 13.3$ kΩ，$f_{-3\,\mathrm{dB}} \approx 11.7$ MHz。右半平面零点（right-half-plane zero）位于 ≈ 47 GHz 处。

- 摆幅：$v_{OUT}(\max) = V_{DD} - |V_{TP}| = 4.3$ V。$v_{OUT}(\min) = 4.3 - 4.3/\sqrt{1 + \beta_2/\beta_1} = 4.3 - 4.3/\sqrt{1 + 50/220} = 0.418$ V（$v_{IN} = V_{DD}$）。它与电流无关。
- $g_{m1} = \sqrt{2 \cdot 110\ \mu \cdot 2 \cdot 50\ \mu} = 148.3\ \mu$S，$g_{m2} = \sqrt{2 \cdot 50\ \mu \cdot 1 \cdot 50\ \mu} = 70.7\ \mu$S，$g_{ds1} = 2\ \mu$S，$g_{ds2} = 2.5\ \mu$S。
- $A_v = -g_{m1}/(g_{m2} + g_{ds1} + g_{ds2}) = -148.3/75.2 = -1.97$（忽略 $g_{ds}$ 时为 $-g_{m1}/g_{m2} = -2.10$）。
- $R_{out} = 1/75.2\ \mu\mathrm{S} = 13.3$ kΩ（只计 $g_{m2}$ 时为 14.1 kΩ）。
- $C_{out} = C_{bd1} + C_{bd2} + C_{gs2} + C_L = 1022$ fF，$C_M = C_{gd1} = 0.5$ fF。$|p_1| = 1/[R_{out}(C_{out} + C_M)] = 7.36\times10^7$ rad/s，故 $f_{-3\,\mathrm{dB}} = 11.7$ MHz（只计 $g_{m2}$ 时 ≈ 11.0 MHz）。
- 右半平面零点 $z_1 = g_{m1}/C_{gd1} = 2.97\times10^{11}$ rad/s（47.2 GHz），远高于极点。
- 若在偏置点中一致地保留 $\lambda$（即题给的饱和区方程），则 $V_{ON1}$ = 0.638 V，$V_{ON2}$ = 1.347 V，$g_{m1}$ = 156.8 µS，$g_{m2}$ = 74.2 µS，$g_{ds1}$ = 1.79 µS，$g_{ds2}$ = 2.27 µS，从而 $A_v \approx -2.00$，$R_{out} \approx 12.8$ kΩ，$f_{-3\,\mathrm{dB}} \approx 12.2$ MHz；若在 $v_{OUT}(\min)$ 方程中保留 M2 的 $\lambda$，则得 ≈ 0.49–0.50 V。这些结果同样正确。
