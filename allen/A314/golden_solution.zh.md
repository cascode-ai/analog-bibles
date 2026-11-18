$R_{out} \approx 67\ \Omega$；$f_{-3\,dB} \approx 1/(2\pi R_{out}C_L) \approx 237$ MHz。

- 电流：M5（1/1，由 M10 镜像）流过 200 µA，因此 M1 = M2 = M3 = M4 = 100 µA；M8 和 M6（10/1）将 M3 和 M4（1/1）的电流镜像放大十倍：1 mA；M9 → M7（10/1 : 10/1）：1 mA。
- 开环输出电阻：$R_o = 1/(g_{ds6} + g_{ds7}) = 1/[(0.05 + 0.04)(1\ \mathrm{mA})] = 11.11$ kΩ。
- $g_{m2} = \sqrt{2(110\ \mu)(100)(100\ \mu)} = 1.483$ mS（W = 10 µm 时为 0.469 mS）；$g_{m4} = \sqrt{2(50\ \mu)(1)(100\ \mu)} = 100\ \mu$S；$g_{m6} = g_{m8} = \sqrt{2(50\ \mu)(10)(1\ \mathrm{m})} = 1$ mS。
- 环路增益（loop gain），沿输出 → M1 栅极 → M3/M8/M9/M7 通路以及 M2/M4/M6 通路计算：$|LG| = \tfrac12(g_{m2}/g_{m4})(g_{m6}+g_{m8})R_o = \tfrac12(14.83)(2\ \mathrm{mS})(11.11\ \mathrm{k}) = 164.8$。
- $R_{out} = R_o/(1 + |LG|) = 11.11\ \mathrm{k}/165.8 = 67.0\ \Omega$（10 µm 器件时为 209 Ω）。
- 由于没有给出器件电容，$C_L$ 是唯一的动态元件，因此输出节点是唯一的极点：$f_{-3\,dB} = 1/(2\pi\cdot 67\ \Omega\cdot 10\ \mathrm{pF}) \approx 237$ MHz。
- 同样正确的更精确模型：保留每个器件的 $g_{ds}$（二极管节点 $g_{m4}+g_{ds4}+g_{ds2} = 109\ \mu$S，M8→M9→M7 的传输为 $g_{m7}/(g_{m9}+g_{ds9}+g_{ds8}) \approx 0.943$），环路增益降为 ≈ 147，得到 $R_{out} \approx 75.1\ \Omega$，$f_{-3\,dB} \approx 212$ MHz（已由小信号节点仿真证实）。
