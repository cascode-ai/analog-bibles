信噪比 ≈ 1,480（≈ 63.4 dB）：输出信号 ≈ 73 mV pp，输出噪声 ≈ 49 µV pp。
- $g_m = \sqrt{2(134\ \mu)(100)(0.5\ \mathrm{mA})} = 3.66$ mS；$R_{SS} = r_O = 1/(0.1 \times 1\ \mathrm{mA}) = 10$ kΩ。
- 差模增益 $A_{DM} = g_mR_D = 7.32$：输出端的信号为 7.32 × 10 mV = 73.2 mV pp。
- 负载失配（mismatch）引起的共模到差模转换：$|A_{CM-DM}| = \dfrac{g_m\Delta R_D}{1 + 2g_mR_{SS}} = \dfrac{3.66\ \mathrm{mS}\times 10\ \Omega}{1 + 73.2} = 4.93\times10^{-4}$；输出端的噪声为 $100\ \mathrm{mV}\times 4.93\times10^{-4} = 49.3\ \mu$V pp。
- 信噪比 = 73.2 mV / 49.3 µV ≈ 1,485，等于共模抑制比（CMRR）× 10 mV/100 mV。
