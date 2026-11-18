$v_o/i_i \approx -9.996$ kΩ，$T \approx 2684$，$Z_{in} \approx 3.72$ Ω，$Z_{out} \approx 1.16$ Ω。

- $g_m = \sqrt{2k'(W/L)I_D} = \sqrt{2\cdot60\mu\cdot100\cdot1\text{m}} = 3.464$ mS；$r_o = 50$ kΩ。
- 反馈网络 $R_F = 10$ kΩ：$f = -1/R_F$；负载效应：在 $M_1$ 栅极到地以及输出端到地各接一个 $R_F$。
- 各级增益：$M_1$、$M_2$：$-g_m(5\text{k}\|50\text{k}) = -3.464\text{m}\times4545 = -15.75$；$M_3$：$-g_m(5\text{k}\|50\text{k}\|10\text{k}) = -3.464\text{m}\times3125 = -10.83$。
- $a = R_F \times(-15.75)^2\times(-10.83) = -26.84$ MΩ；$T = af = 2684$。
- $A = a/(1+T) = -26.84\text{M}/2685 = -9996$ Ω（≈ $-R_F$）。
- $Z_{in} = 10\text{k}/2685 = 3.72$ Ω；$Z_{out} = 3125/2685 = 1.164$ Ω。
