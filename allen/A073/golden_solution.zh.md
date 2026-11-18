$v_{out}/v_{in} = 1/(1 + j f/f_{-3dB})$，其中 $f_{-3dB} \approx 8.44$ MHz（$r_{ON} \approx 9.43$ kΩ）。

- $V_{GS} = 4.5 - 3 = 1.5$ V，$V_T(V_{SB} = 3\ \mathrm{V}) = 1.135$ V，因此 $V_{GS} - V_T = 0.365$ V（栅极接 5 V 时为 0.865 V）。
- $r_{ON} = 1/(110\ \mu \times 2.64 \times 0.365) = 9.43\ \mathrm{k\Omega}$；$f_{-3dB} = 1/(2\pi r_{ON} \times 2\ \mathrm{pF}) = 8.44$ MHz（等价地，$20\ \mathrm{MHz} \times 0.365/0.865$）。
- 伯德图：幅频特性在 8.44 MHz 之前为 0 dB，此后以 −20 dB/十倍频程下降（84 MHz 处为 −20 dB，168 MHz 处为 −26 dB）；渐近曲线相当于原曲线向左平移 2.37 倍。相位从 0° 变化到 −90°，在 8.44 MHz 处为 −45°。
