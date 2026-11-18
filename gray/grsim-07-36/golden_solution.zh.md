偏置：$I_{\text{REF}} = 5.4\ \mathrm{V}/11\ \mathrm{k\Omega} = 0.491$ mA；$I_{C4} = 0.491\ \mathrm{V}/2.5\ \mathrm{k\Omega} = 0.196$ mA → $I_{C1} = I_{C2} = 98\ \mu$A；$V_{C2} = 6 - 1.23 = 4.77$ V；$Q_3$：$I_{E3} = (6 - 5.37)/1\ \mathrm{k\Omega} = 0.627$ mA，$I_{C3} = 0.621$ mA，直流 $V_O \approx 0.2$ V。

小信号：$g_{m2} = 3.78$ mA/V，$r_{\pi2} = 53\ \mathrm{k\Omega}$，$C_{\pi2} = 4.18$ pF；$g_{m3} = 23.9$ mA/V，$r_{\pi3} = 4.19\ \mathrm{k\Omega}$，$\tau_{F,pnp} = 26.4$ ns → $C_{\pi3} = 633$ pF。

增益：$Q_3$ 的输入电阻 $R_{i3} = r_{\pi3} + (\beta+1)(1\ \mathrm{k}) = 105\ \mathrm{k\Omega}$；第一级（半边电路，$Q_2$ 一侧）：$g_{m2}(12.5\ \mathrm{k}\|R_{i3})\,r_{\pi2}/(r_{\pi2} + 10\ \mathrm{k}) = 35.4$；第二级 $-\beta(10\ \mathrm{k})/R_{i3} = -9.53$；两侧输入分别为 $\pm v_i/2$，因此 $v_o/v_i = -35.4\times9.53/2 \approx -169$。

零值时间常数（$Q_2$/$Q_3$ 一侧的半边电路）：$C_{\pi2}$：8.41 kΩ → 35 ns；$C_{\mu2}$：374 kΩ → 112 ns；$C_{cs2}$ 和 $C_{bs3}$：$12.5\ \mathrm{k}\|R_{i3} = 11.2\ \mathrm{k\Omega}$ → 各 16.8 ns；$C_{\pi3}$：$r_{\pi3}\|$（发射极一侧电阻）≈ 480 Ω → 304 ns；$C_{\mu3}$：127 kΩ → 38 ns。$T_0 = 523$ ns → $f_{-3\text{dB}} \approx 0.30$ MHz；速度慢的横向 $pnp$（$C_{\pi3}$）贡献最大。

预期的仿真结果（采用这些线性参数的完整电路）：增益约 −169（44.5 dB），第一极点约 0.36 MHz，第二极点约 1.6 MHz（其后还有约 19 MHz 和 56 MHz 的极点），−3 dB 点约 0.35 MHz。（由于第一个差分对只有一侧驱动第二级，半边电路只是近似；它给出的前两个极点为 0.33 MHz 和 4.6 MHz。）
