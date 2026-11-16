设 $Z_X = R_3 \parallel (1/g_{m1})$，$Z_Y = R_2 \parallel (R_1 + 1/g_{m2})$（通常 $Z_Y > Z_X$），则
$\overline{V_{n,BG}^2} = R_4^2\left\{\dfrac{Z_X^2\left(\overline{i_n^2} + \frac{4kT}{R_3}\right) + Z_Y^2\left(\overline{i_n^2} + \frac{4kT}{R_2}\right) + \left(\frac{Z_Y}{R_1 + 1/g_{m2}}\right)^2 4kTR_1 + \overline{V_{n,op}^2}}{(Z_Y - Z_X)^2} + \overline{i_n^2} + \dfrac{4kT}{R_4}\right\}$。
若把双极型晶体管当作固定电压源（$1/g_m \to 0$），上式简化为 $\overline{V_{n,BG}^2} \approx 2R_4^2\overline{i_n^2} + \left(\dfrac{R_4}{R_1 \parallel R_2}\right)^2\left[\overline{V_{n,op}^2} + 4kT(R_1 \parallel R_2)\right] + 4kTR_4$，因此运放噪声被放大 $R_4/(R_1 \parallel R_2)$ 倍。

推导（小信号；$g$ 为 $M_3$–$M_5$ 共同的栅极驱动电流；$i_3$、$i_4$、$i_5$ 为 PMOS 噪声电流；$i_{R2}$、$i_{R3}$、$i_{R4}$ 为电阻噪声电流；$v_{R1}$ 与 $R_1$ 串联；$v_n$ 为运放噪声，满足 $v_X - v_Y = v_n$）：
- $v_X = (g + i_3 + i_{R3})Z_X$，$v_Y = Z_Y[g + i_4 + i_{R2} + v_{R1}/(R_1 + 1/g_{m2})]$。
- 因此 $g = [(i_3 + i_{R3})Z_X - (i_4 + i_{R2})Z_Y - v_{R1}Z_Y/(R_1 + 1/g_{m2}) - v_n]/(Z_Y - Z_X)$，而 $v_{BG} = R_4(g + i_5 + i_{R4})$。把互不相关的各项功率相加即得结果。
- 典型数值：集电极电流相等时，$g_mR_1 = \ln n$；为使温度系数（temperature coefficient）为零，$g_mR_2 = g_mR_3 \approx 17.2$。对 $n = 8$，$Z_X \approx 0.95/g_m$，$Z_Y \approx 2.6/g_m$，因此 $M_4$ 的噪声以 ≈ $1.56R_4$ 的增益传到输出端，$M_3$ 的噪声增益 ≈ $0.57R_4$，$M_5$ 的为 $R_4$，运放噪声的增益 ≈ $0.6g_mR_4$。低频时闪烁噪声占主导；大的 $R_4$ 会使输出噪声很大，而输出端的旁路电容只在高频时有帮助。
