两个管子均有 $g_m = \sqrt{2(180\ \mu)(40)(100\ \mu)} = 1.2$ mA/V，$r_o = 1/(0.04\times100\ \mu) = 250\ \mathrm{k\Omega}$。

(a) 零值时间常数：$C_L$ 看到共源共栅的输出电阻 $r_{o2} + r_{o1} + g_{m2}r_{o2}r_{o1} = 75.5$ MΩ → 151 µs；$C_p$ 看到 $r_{o1}$（输出开路时 $M_2$ 的源极相当于开路）→ 50 ns。$T_0 = 151.05\ \mu$s → $|p_1| \approx 6.6\times10^3$ rad/s（1.05 kHz）。（直流增益 $-g_{m1}R_{\text{out}} \approx -9.0\times10^4$。）

(b) 短路时间常数：$C_L$ 短路时，$C_p$ 看到 $r_{o1}\|r_{o2}/(1 + g_{m2}r_{o2}) = 250\ \mathrm{k}\|831 = 828\ \Omega$ → 0.166 ns；$C_p$ 短路时，$C_L$ 看到 $r_{o2} = 250\ \mathrm{k\Omega}$ → 0.5 µs。$|p_2| \approx 1/0.166\ \mathrm{ns} + 1/0.5\ \mu\mathrm{s} = 6.04\times10^9$ rad/s（962 MHz）。

(c) 对这一双极点电路的精确（仿真）求解给出 $p_1 = -6.62\times10^3$ rad/s 和 $p_2 = -6.04\times10^9$ rad/s，与估算值基本相同，因为两个极点相距约 10⁶ 倍。
