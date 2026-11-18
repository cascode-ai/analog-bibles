四个器件均有 $g_m = \sqrt{2(60\ \mu)(10)(100\ \mu)} = 0.346$ mA/V（$1/g_m = 2.89\ \mathrm{k\Omega}$）。

零值电阻（A = 输入节点，B = $M_3$/$M_1$ 的栅极，C = $M_1$ 的漏极）：B 节点电容（$C_{gs3} + C_{db3} + C_{sb4} + C_{gs1} = 60$ fF）看到 $1/g_m$ → 173 ps；$C_{gs4}$（A–B）$1/g_m$ → 58 ps；$C_{db4}$（A–地）$2/g_m$ → 58 ps；$C_{gs2}$（A–C）$2/g_m$ → 115 ps；$C_{gd2}$（A–输出）$2/g_m$ → 17 ps；$C_{gd1}$（B–C）$2/g_m$ → 17 ps；C 节点（$C_{db1} + C_{sb2}$）$1/g_m$ → 58 ps。$T_0 = 0.50$ ns → $\omega_p \approx 2.0\times10^9$ rad/s，$f \approx 321$ MHz。

$f_T = g_m/[2\pi(C_{gs} + C_{gd})] = 2.40$ GHz，因此估算的电流镜带宽约为 $f_T/7.5$。

预期的仿真结果（线性模型）：−3 dB 点约 494 MHz（一个约 524 MHz 的实极点加上约 1.5 GHz 附近的一对复极点）；零值估算偏保守。随电流的变化（$g_m \propto \sqrt{I}$，电容不变）：$I_{\text{IN}} = 50\ \mu$A → 估算 227 MHz，仿真约 349 MHz；$I_{\text{IN}} = 200\ \mu$A → 估算 453 MHz，仿真约 698 MHz。
