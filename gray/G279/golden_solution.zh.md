$\mathcal{R} \approx 838$，$v_o/v_i \approx 0.9988$，$R_{in} \approx 839$ MΩ，$R_{out} \approx 0.235$ Ω（精确值）。

- $g_m = 4.243$ mS，$g_{mb} = 0.822$ mS。
- $\mathcal{R}$（$v_i = 0$）：在运放输出端加测试电压 $v_t$；$R_o$ 中没有电流，所以 $v_g = v_t$；输出节点：$g_m(v_t - v_o) = (g_{mb} + 1/R_i)v_o$ → $v_o = v_t\,g_m/(g_m+g_{mb}+1/R_i)$；$v_x = -v_o$；$\mathcal{R} = a_v\,g_m/(g_m+g_{mb}+1/R_i) = 837.6$。
- $A_\infty = 1$；$d$（$a_v = 0$）：$v_i$ 只能经 $R_i$ 到达输出端：$d = (1/R_i)/(g_m+g_{mb}+1/R_i) = 1.97\times10^{-4}$。
- $A = 837.6/838.6 + 1.97\times10^{-4}/838.6 = 0.99881$。
- $R_{in}$：$R(a_v{=}0) = R_i + 1/(g_m+g_{mb}) = 1.0002$ MΩ；$\mathcal{R}$（输入短路）= 837.6，$\mathcal{R}$（输入开路）= 0 → $R_{in} = 839$ MΩ。
- $R_{out}$：$R(a_v{=}0) = [1/(g_m+g_{mb})]\|R_i = 197.4$ Ω；$\mathcal{R}$（短路）= 0，$\mathcal{R}$（开路）= 837.6 → $R_{out} = 0.2354$ Ω。
