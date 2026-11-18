$R_{in} \approx 15.9$ kΩ，$i_{out}/i_{in} = 10$，$R_{out} \approx 8.3$ MΩ，$V_{MIN}(\text{in}) \approx 1.65$ V，$V_{MIN}(\text{out}) \approx 0.95$ V。

- 拓扑：输入节点（$R$ 的上端）驱动共源共栅管 M3 和 M4 的栅极；$R$ 的下端（M3 的漏极）驱动 M1 和 M2 的栅极。这是一个自偏置（self-biased）共源共栅电流镜。
- 偏置：$V_{ON1} = \sqrt{2\times50\ \mu/(110\ \mu\times10)} = 0.302$ V，$V_{GS1} = 1.002$ V；$IR = 50\ \mu\times12.9\ \mathrm{k} = 0.645$ V；输入节点电压为 $V_{GS1} + IR = 1.647$ V。M3（尺寸和电流相同）的 $V_{GS3} = 1.002$ V，因此 $V_{DS1} = 1.647 - 1.002 = 0.645$ V，$V_{DS3} = 1.002 - 0.645 = 0.357$ V；两者都大于 $V_{ON}$ = 0.302 V。
- $i_{out}/i_{in}$：M2/M1 和 M4/M3 均为 10:1，电流密度相等，$V_{DS}$ 也相等（$V_{DS2} = V_{DS1}$ = 0.645 V），因此 $i_{out}/i_{in} = (W/L)_2/(W/L)_1 = 10$（直流 500 µA）。
- $R_{in}$：输入电流经 $R$ 流入 M3 漏极/M1 栅极节点，因此 $i_{in} = g_{m1}v_{G1}$，$R_{in} \approx R + 1/g_{m1} = 12.9 + 3.02 = 15.9$ kΩ（$g_{m1} = 2I/V_{ON}$ = 332 µA/V；计入 $g_{ds}$ 时为 15.8 kΩ）。
- $R_{out} \approx r_{ds2} + r_{ds4} + g_{m4}r_{ds4}r_{ds2}$，其中 $g_{m4} = \sqrt{2\times110\ \mu\times100\times500\ \mu} = 3.32$ mS，$r_{ds} = 1/(0.04\times500\ \mu) = 50$ kΩ：$3.32\ \mathrm{m}\times50\ \mathrm{k}\times50\ \mathrm{k} = 8.29$ MΩ（计入 $r_{ds}$ 项时为 8.39 MΩ）。若在偏置计算中保留给定模型的 $(1+\lambda v_{DS})$ 因子，并取 $r_{ds} = (1+\lambda V_{DS})/(\lambda I_D)$，则得 ≈ 8.8 MΩ（ngspice level 1：8.79 MΩ，$R_{in}$ = 15.80 kΩ，输入节点为 1.643 V）；两种近似程度的结果都是正确的。
- $V_{MIN}(\text{in}) = V_{GS1} + IR = 1.65$ V。$V_{MIN}(\text{out}) = V_{G4} - V_T = 1.647 - 0.7 = 0.95$ V（$= V_{DS2} + V_{ON4}$ = 0.645 + 0.302）。由于 $IR$（0.645 V）大于 $V_{ON}$，该值高于理想的 $2V_{ON}$ ≈ 0.60 V。
