增益 $A_v \approx -g_{m1}(r_{OP2}\|R_{up}) \approx -g_{m1}r_{OP2} \approx -52$；输入噪声 $\overline{V^2_{n,in}} \approx 4kT\cdot\tfrac23(1/g_{m1} + g_{mP2}/g_{m1}^2) \approx 2.9\times10^{-18}\ \mathrm{V^2/Hz}$，即 ≈ 1.7 nV/√Hz。

- $g_{m1} = g_{m2} = \sqrt{2(134\ \mu)(200)(0.5\ \mathrm{m})} = 5.18$ mS；$r_{O1} = r_{O2} = 20$ kΩ；$g_{mb2} \approx 0.17g_{m2}$。
- 辅助放大器（auxiliary amplifier）：$g_{m3} = \sqrt{2(134\ \mu)(200)(100\ \mu)} = 2.32$ mS，$r_{O3} = 100$ kΩ，$r_{OP1} = 50$ kΩ → $A_3 = g_{m3}(r_{O3}\|r_{OP1}) \approx 77$。
- 向下看进 $M_2$：$R_{up} \approx [g_{m2}(1 + A_3) + g_{mb2}]r_{O2}r_{O1} \approx 160$ MΩ，远大于 PMOS 负载电阻 $r_{OP2} = 1/(0.2 \times 0.5\ \mathrm{mA}) = 10$ kΩ。因此 $R_{out} \approx 10$ kΩ，$|A_v| \approx 5.18\ \mathrm{mS} \times 10\ \mathrm{k\Omega} \approx 52$（反相）。由于简单的 PMOS 负载起主导作用，增益提升（gain boosting）被白白浪费了。
- 噪声：$g_{mP2} = 2(0.5\ \mathrm{mA})/0.510\ \mathrm{V} = 1.96$ mS。$1/g_{m1} = 193\ \Omega$，$g_{mP2}/g_{m1}^2 = 73\ \Omega$；$4kT\cdot\tfrac23 = 1.10\times10^{-20}$ → $2.94\times10^{-18}\ \mathrm{V^2/Hz}$ → 1.71 nV/√Hz。$M_2$、$M_3$ 和 $I_1$ 的贡献可以忽略。
