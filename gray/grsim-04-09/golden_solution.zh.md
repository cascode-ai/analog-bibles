$I_{IN} = (15 - 2V_{BE})/13.7\ \mathrm{k\Omega} \approx 0.996$ mA，$I_{OUT} \approx I_{IN}[1 - 2/(\beta_F^2 + 2\beta_F + 2)] \approx 0.996$ mA。

输出电阻：$R_o \approx r_{o2}\left[1 + \dfrac{\beta_0}{2 + r_{\pi2}/(R\|r_{o1})}\right] \approx 130\ \mathrm{k}\times(1 + 82.6) \approx 10.9$ MΩ（其中 $r_{\pi2} = 5.2$ kΩ，$R\|r_{o1} = 12.4$ kΩ）；若由理想电流源向输入节点供电，则变为熟悉的 $\beta_0r_{o2}/2 \approx 13$ MΩ。

ΔV = 5 V 时的变化百分比：$5\ \mathrm{V}/(10.9\ \mathrm{M\Omega}\times0.996\ \mathrm{mA}) \approx 0.046\%$（取 13 MΩ 时 ≈ 0.038 %）。

$\beta_F$ 灵敏度：增益误差 $-2/(\beta^2 + 2\beta + 2)$ 由 −0.005 %（β = 200）变为 −0.020 %（β = 100）：$I_{OUT}$ 仅下降约 0.015 %。

$I_{OUT}$–$V_{OUT}$：从零开始上升，在约 $V_{BE} + V_{CE(\text{sat})}$ ≈ 0.9 V 处出现拐点，之后保持在约 1.0 mA 基本平坦，直到 15 V 斜率约为 0.09 µA/V。
