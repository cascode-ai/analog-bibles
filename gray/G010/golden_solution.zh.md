$g_m = 7.69$ mA/V，$r_\pi = 13$ kΩ，$r_o = 130$ kΩ，$r_\mu = 65$ MΩ，$C_\pi = 0.155$ pF（$C_b = 0.115$ pF + $C_{je} = 40$ fF），$C_\mu \approx 3.9$ fF，$C_{cs} \approx 7.0$ fF，$r_b = 200\ \Omega$，$r_c = 100\ \Omega$，$r_{ex} = 4\ \Omega$。

电路：外部基极 B – $r_b$ – 内部基极 B′；B′ 与内部发射极 E′ 之间接 $r_\pi \parallel C_\pi$（其两端电压为 $v_1$）；E′ 与发射极端 E 之间接 $r_{ex}$；B′ 与内部集电极 C′ 之间接 $r_\mu \parallel C_\mu$；C′ 与 E′ 之间接电流源 $g_mv_1$ 和 $r_o$；C′ 与集电极端 C 之间接 $r_c$；C′ 与衬底（交流地）之间接 $C_{cs}$。

- $g_m = I_C/V_T = 0.2/26 = 7.69$ mA/V；$r_\pi = \beta_0/g_m = 13$ kΩ。
- $r_o = 1/(\eta g_m) = V_A/I_C$，其中 $V_A = V_T/\eta = 26$ V：130 kΩ；$r_\mu = 5\beta_0r_o = 65$ MΩ。
- $C_b = \tau_Fg_m = 15\ \mathrm{ps}\times7.69\ \mathrm{mA/V} = 0.115$ pF；$C_\pi = C_b + 2C_{je0} = 0.155$ pF。
- $C_\mu = 10/\sqrt{1+3/0.55} = 10/2.54 = 3.9$ fF；$C_{cs} = 20/\sqrt{1+4/0.55} = 20/2.88 = 7.0$ fF。
