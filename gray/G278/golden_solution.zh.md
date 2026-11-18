$T \approx 838$，$v_o/v_i \approx 0.9988$，$R_{in} \approx 839$ MΩ，$R_{out} \approx 0.235$ Ω。

- $g_m = \sqrt{2\cdot180\mu\cdot100\cdot0.5\text{m}} = 4.243$ mS；$g_{mb} = g_m\,\gamma/(2\sqrt{2|\phi_f| + V_{SB}}) = 4.243\text{m}\times0.3/(2\sqrt{0.6}) = 0.822$ mS；$1/(g_m+g_{mb}) = 197.5$ Ω。
- 反馈网络就是从输出端到反相输入端的导线：$f = 1$，$h_{11f} = 0$，$h_{22f} = 0$（无负载效应）。
- 基本放大器：$R_o$ 中没有电流（MOS 栅极），所以 $a = a_v\cdot g_m/(g_m+g_{mb}) = 1000\times0.838 = 837.8$；$T = af = 837.8$。
- $A = 837.8/838.8 = 0.99881$。
- $R_{in} = R_i(1+T) = 1\text{ M}\times838.8 = 839$ MΩ；$R_{out} = 197.5/838.8 = 0.2354$ Ω。
