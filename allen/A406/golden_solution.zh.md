增益 ≈ 6.6 V/V（计入输出电导时为 6.4）；$f_{-3dB} \approx 5.1$–5.3 MHz。
- 每条支路流过 25 µA。$g_{m1} = \sqrt{2\cdot110\cdot40\cdot25}\ \mu\mathrm{S} = 469\ \mu$S，$g_{m3} = \sqrt{2\cdot50\cdot2\cdot25}\ \mu\mathrm{S} = 70.7\ \mu$S。
- 增益：$A_v = g_{m1}/g_{m3} = \sqrt{(110\cdot40)/(50\cdot2)} = 6.63$；将 $g_{ds1}+g_{ds3} = 1+1.25\ \mu$S 加到 $g_{m3}$ 上后为 6.43。
- 每个输出节点的电容（差模半边电路：浮空的 $C_L$ 等效为对地 $2C_L$ = 2 pF）：$C_{bd1} = 770\ \mu\mathrm{F/m^2}\times200\ \mu\mathrm{m^2} = 154$ fF，$C_{gd1} = 220\ \mathrm{pF/m}\times40\ \mu\mathrm{m} = 8.8$ fF，$C_{bd3} = 560\times10\ \mu\mathrm{m^2} = 5.6$ fF，$C_{gs3} = \tfrac23(2)(1)(2.47) + 0.44 = 3.7$ fF → $C \approx 2.17$ pF（计入结侧壁电容时 ≈ 2.21 pF）。
- $f_{-3dB} = g_{m3}/(2\pi C) = 70.7\ \mu\mathrm{S}/(2\pi\cdot2.17\ \mathrm{pF}) \approx 5.2$ MHz（计入侧壁电容时为 5.1 MHz；若将输出电导加到 $g_{m3}$ 上则为 5.3 MHz）。
