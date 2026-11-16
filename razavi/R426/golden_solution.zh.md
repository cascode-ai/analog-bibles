$A_v \approx g_{m1}\{[g_{m4}r_{O4}r_{O2}]\,\|\,[g_{m6}r_{O6}r_{O8}]\} \approx 1300$；若保留共源共栅（cascode）电阻中的“+1”项和附加的 $r_O$ 项，则 ≈ 1380。

- 每条支路 0.5 mA。NMOS：$g_{m1-4} = \sqrt{2(134\ \mu)(200)(0.5\ \mathrm{m})} = 5.18$ mS，$r_{O1-4} = 20$ kΩ。PMOS：$|V_{OD}| = 0.35$ V，$g_{m5-8} = 2(0.5\ \mathrm{mA})/0.35\ \mathrm{V} = 2.86$ mS，$r_{O5-8} = 10$ kΩ。
- 向下看：$g_{m4}r_{O4}r_{O2} = 2.07$ MΩ。向上看：$g_{m6}r_{O6}r_{O8} = 0.286$ MΩ。$R_{out} = 2.07\ \mathrm{M}\|0.286\ \mathrm{M} = 251$ kΩ。
- 由于采用电流镜（current mirror），短路跨导（short-circuit transconductance）≈ $g_{m1}$：$A_v \approx 5.18\ \mathrm{mS} \times 251\ \mathrm{k\Omega} \approx 1300$。
