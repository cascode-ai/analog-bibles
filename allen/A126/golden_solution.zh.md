$f_{-3\,\mathrm{dB}} \approx 1.39$ MHz。

- M1 和 M2 流过 100 µA，故 $g_{ds1} + g_{ds2} = (0.04 + 0.05) \cdot 100\ \mu = 9\ \mu$S（$R_{out} = 111$ kΩ，增益 $-g_{m1}/9\ \mu\mathrm{S} = -52$）。
- 输出节点电容：$C_{gdn}$（M1，接到理想电压源输入端）、$C_{gdp}$（M2，接到其栅极，该栅极位于 M3 的低阻二极管节点上，≈ 交流地）、$C_{bdn}$、$C_{bdp}$、$C_L$：5 + 5 + 10 + 10 + 1000 = 1030 fF。$C_{gsn}$ 跨接在输入源两端，而 $C_{gsp}$（M2、M3）位于电流镜节点，该节点的极点（$\approx g_{m3}/(2C_{gsp})$，GHz 量级）离得很远。
- $f_{-3\,\mathrm{dB}} = 9\ \mu\mathrm{S}/(2\pi \cdot 1.03\ \mathrm{pF}) = 1.39$ MHz。右半平面零点（right-half-plane zero）$g_{m1}/C_{gdn} = 469\ \mu/5\ \mathrm{fF}$ 位于 ≈ 15 GHz。
