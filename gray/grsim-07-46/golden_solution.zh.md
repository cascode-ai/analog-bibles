(a) 零值时间常数：$C$ 看到 $R + R_o + (a_v/R_o)R_oR = R + R_o + a_vR = 20.025$ MΩ → 1.001 ms；$C_{\text{in}}$ 看到 $R = 20\ \mathrm{k\Omega}$ → 4 ns。$|p_1| \approx 1/1.001\ \mathrm{ms} = 999$ rad/s（159 Hz）。
短路时间常数：$C_{\text{in}}$ 短路时（$v_x = 0$），$C$ 看到 $R_o$ → 0.25 µs；$C$ 短路时（输入节点与输出相连），$C_{\text{in}}$ 看到 $R\|[R_o/(1 + a_v)] = 4.99\ \Omega$ → 1.0 ps。$|p_2| \approx 1/1\ \mathrm{ps} + 1/0.25\ \mu\mathrm{s} \approx 1.0\times10^{12}$ rad/s（159 GHz）。
(b) 仿真（线性模型）：极点位于 $-999$ rad/s 和 $-1.00\times10^{12}$ rad/s，右半平面零点（right-half-plane zero）位于 $a_v/(R_oC) = 4\times10^9$ rad/s；直流增益为 −1000。估算值与仿真结果基本完全一致。
