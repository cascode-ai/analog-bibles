$R_o \approx 1.65$ MΩ，$v_o/v_i \approx +3.1\times10^3$（若取电流镜增益恰为 1，则 ≈ $3.2\times10^3$），约为不加发射极电阻时增益的 2.3 倍。

- 每个晶体管中 $I_C = 50$ µA：$g_m = 1.92$ mS；npn $r_o = 130/50\ \mu = 2.6$ MΩ；pnp $r_o = 50/50\ \mu = 1$ MΩ，$r_{\pi}(\text{pnp}) = 50/g_m = 26$ kΩ。
- 带发射极负反馈（emitter degeneration）的负载管 $Q_4$ 的输出电阻（其基极看到 $Q_3$ 一侧的低阻抗）：$R_{o4} \approx r_{o4}[1 + g_m(R_E\|r_{\pi4})] = 1\ \mathrm{M\Omega}\times(1 + 1.92\ \mathrm{mS}\times1.86\ \mathrm{k\Omega}) \approx 4.6$ MΩ。
- $Q_2$ 一侧与无负反馈的电路一样贡献 $r_{o2}$（向 $Q_2$ 看进去为 ≈ $2r_{o2}$，而流入 $Q_1$ 发射极的电流被镜像回输出端，使其减半）：$R_o \approx r_{o2}\|R_{o4} = 2.6\|4.6 \approx 1.66$ MΩ（完整小信号求解得 1.64 MΩ）。
- 跨导（transconductance）$G_m \approx g_{m1} = 1.92$ mS（计入 pnp 电流镜的基极电流误差 ≈ $2/\beta_0$ 后 ≈ 1.88 mS）。
- $v_o/v_i = G_mR_o \approx 1.92\ \mathrm{mS}\times1.66\ \mathrm{M\Omega} \approx 3.2\times10^3$（计入电流镜误差后 ≈ $3.1\times10^3$），从 $Q_1$ 基极看为同相。不加电阻时 $R_o = r_{o2}\|r_{o4} = 0.72$ MΩ，增益 ≈ 1.4×10³。
