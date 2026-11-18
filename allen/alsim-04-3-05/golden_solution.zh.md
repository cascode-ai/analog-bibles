手工分析：$V_{OUT}(\min) = 2V_{ON} \approx 0.43$ V（计入 M2 的体效应后，在其饱和区边缘处约为 0.39 V）；$r_{out} \approx g_{m2}r_{ds1}r_{ds2} \approx 0.59$ GΩ（计入 $g_{mbs2}$ 时约为 0.72 GΩ）。仿真得到的 $i_{OUT}$ 低于 10 µA，因为 M1 处于饱和区边缘或略低于该边缘。

- $V_{ON}$（4/1，10 µA）= $\sqrt{2\times10/(110\times4)}$ = 0.213 V；M4（1/1）的过驱动电压为 0.426 V = $2V_{ON}$。M1 的栅极：0.913 V；M2 的栅极：$V_T + 2V_{ON}$ = 1.126 V。
- 不计体效应时：$V_{DS1} = V_{G2} - V_{GS2} = V_{ON}$，因此 M1 恰好处于饱和区边缘，$V_{OUT}(\min) = 2V_{ON}$ = 0.426 V。
- 计入 M2 的体效应（body effect）时（$V_{SB2} = V_{DS1}$ ≈ 0.17 V 使 $V_{T2}$ 升至约 0.74 V）：$V_{DS1}$ ≈ 0.17–0.18 V < $V_{ON}$ = 0.213 V，因此 M1 被略微推入线性区（triode region）。M2 在 $v_{OUT} = V_{G2} - V_{T2}$ ≈ 0.39 V 处到达饱和区边缘。自洽的 LEVEL-1 求解给出 $i_{OUT}$ ≈ 9.7–9.9 µA。
- $g_{m2} = \sqrt{2\times110\ \mu\times4\times10\ \mu} = 93.8\ \mu\mathrm{A/V}$，$r_{ds}$ = 2.5 MΩ：若 M1 处于饱和区，则 $r_{out} \approx 5\ \mathrm{M} + 586\ \mathrm{M} \approx 0.59$ GΩ（计入 $g_{mbs}$ 时为 0.72 GΩ）；若 M1 处于线性区，其 $r_{ds1}$ 以及 $r_{out}$ 都会更低。
- 预期的 LEVEL-3 仿真结果：$i_{OUT}$ 明显低于 10 µA（约 8–9.5 µA），因为 M3（$V_{DS} = V_{GS}$ ≈ 0.9 V）与 M1（$V_{DS}$ ≈ 0.2 V，接近线性区）的端电压不同，而且 LEVEL-3 模型还加入了短沟道阈值效应和饱和电压效应。$i_{OUT}$–$v_{OUT}$ 曲线在约 0.4–0.5 V 以上趋于平坦。
