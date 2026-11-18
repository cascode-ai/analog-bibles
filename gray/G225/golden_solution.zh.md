$v_o/v_i \approx -211$；$T_0 \approx 66$ ns → $f_{-3\text{dB}} \approx 2.4$ MHz。

- $I_{D1} = I_{D2} = 0.5$ mA；$g_{m1} = \sqrt{2(60\ \mu)(166.7)(0.5\ \mathrm{m})} = 3.16$ mA/V（$V_{ov} = 0.32$ V）；$r_{o1} = 100/0.5\ \mathrm{m} = 200\ \mathrm{k\Omega}$，$r_{o3} = 50/0.5\ \mathrm{m} = 100\ \mathrm{k\Omega}$；$R_L = 66.7\ \mathrm{k\Omega}$。
- 增益：没有栅极电流，因此 $v_o/v_i = -g_{m1}R_L = -210.8$。
- 电容：$C_{gs1} = 28 + 14 = 42$ fF；$C_{gd1} = 14$ fF；$C_{db1}$（$V_{DB} = 15$ V）= 240/√26 = 47.1 fF；对于 $M_3$（$W = 50\ \mu$m，栅极接交流地）：$C_{gd3} = 7$ fF，$C_{db3}$（$V_{BD} = 5$ V，$C_{db0} = 60$ fF）= 19.6 fF，二者都接在输出与交流地之间。
- 时间常数：$C_{gs1}$：$R_S = 20\ \mathrm{k\Omega}$ → 0.84 ns；$C_{gd1}$：$20\ \mathrm{k} + 66.7\ \mathrm{k} + g_{m1}(66.7\ \mathrm{k})(20\ \mathrm{k}) = 4.30$ MΩ → 60.2 ns；输出端（$47.1 + 7 + 19.6 = 73.7$ fF）：$R_L$ → 4.9 ns。
- $T_0 = 66.0$ ns → 2.41 MHz（精确值：2.42 MHz）。
