有两个输入电流能得到 $I_{OUT} = 0.1$ µA：$I_{IN} \approx 0.103$ µA（0.1027 µA），对应最小 $W/L \approx 1.03$；以及在峰值特性下降一侧的 $I_{IN} \approx 20.8$ µA，对应最小 $W/L \approx 208$。通常用于实现 $I_{OUT} \ll I_{IN}$（此处为 1/208）的是高电流的解；在低电流的解处，电阻压降只有 ≈ 1 mV，电路几乎是 1:1 的电流镜。

- $I_{OUT} = I_{IN}\exp[-I_{IN}R/(nV_T)]$，其中 $nV_T/R = 39\ \mathrm{mV}/10\ \mathrm{k\Omega} = 3.9$ µA。该函数在 $I_{IN} = 3.9$ µA 处达到峰值，此时 $I_{OUT,max} = 3.9/e = 1.43$ µA，因此有两个输入电流可使输出达到 0.1 µA。
- 低电流解：$I_{IN} = 0.1\ \mu\mathrm{A}\times e^{I_{IN}/3.9\,\mu\mathrm{A}}$ → $I_{IN} \approx 0.1027$ µA（$R$ 上的压降只有 ≈ 1 mV）。
- 最小 $W/L$：两个器件都要求 $W/L > I_D/I_t$ → $W/L > 1.027$（由 $M_1$ 决定）。
- 高电流解：$I_{IN}e^{-I_{IN}/3.9\,\mu} = 0.1\ \mu$ → $I_{IN} \approx 20.8$ µA，需要 $W/L \ge 208$。
