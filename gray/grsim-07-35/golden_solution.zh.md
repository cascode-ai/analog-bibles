偏置：$I_{\text{REF}} = 5.4\ \mathrm{V}/6\ \mathrm{k\Omega} = 0.9$ mA，$Q_5$：$I_{C5} = 0.9\ \mathrm{V}/2\ \mathrm{k\Omega} = 0.45$ mA → $I_{C1} = I_{C2} = 0.225$ mA；$V_{C1} = 3.75$ V，第二个差分对的尾节点位于 3.15 V → $I_{C3} = I_{C4} = 0.315$ mA，直流 $V_O = 4.43$ V。

小信号：$g_{m1} = 8.65$ mA/V，$r_{\pi1} = 23.1\ \mathrm{k\Omega}$；$g_{m3} = 12.1$ mA/V，$r_{\pi3} = 16.5\ \mathrm{k\Omega}$；$\tau_F = 208$ ps，$C_{\pi1} = 3.80$ pF，$C_{\pi3} = 4.52$ pF。

增益：第一级半边电路 $A_1 = -g_{m1}(10\ \mathrm{k}\|r_{\pi3})\,r_{\pi1}/(r_{\pi1} + 20\ \mathrm{k}) = -28.9$；第二级 $A_2 = -g_{m3}(5\ \mathrm{k}) = -60.6$；输出为单端输出（第二级差分输出的一半），因此 $v_o/v_i = -A_1A_2/2 = -875$（58.8 dB）。

零值时间常数（差模半边电路）：$C_{\pi1}$：$20\ \mathrm{k}\|r_{\pi1} = 10.7\ \mathrm{k\Omega}$ → 40.7 ns；$C_{\mu1}$：$10.7\ \mathrm{k} + 6.23\ \mathrm{k} + g_{m1}(6.23\ \mathrm{k})(10.7\ \mathrm{k}) = 595\ \mathrm{k\Omega}$ → 119 ns；$C_{cs1}$：6.23 kΩ → 6.2 ns；$C_{\pi3}$：6.23 kΩ → 28.2 ns；$C_{\mu3}$：$6.23\ \mathrm{k} + 5\ \mathrm{k} + g_{m3}(5\ \mathrm{k})(6.23\ \mathrm{k}) = 388\ \mathrm{k\Omega}$ → 77.7 ns；$C_{cs3}$：5 kΩ → 5 ns。$T_0 = 277$ ns → $f_{-3\text{dB}} \approx 575$ kHz；上升时间 $2.2T_0 \approx 0.61\ \mu$s。

预期的仿真结果：−3 dB 点约在 0.62 MHz（半边电路的极点约在 0.63、7.3 和 93 MHz）；相位（相对值）在约 7.4 MHz 处达到 −135°。
