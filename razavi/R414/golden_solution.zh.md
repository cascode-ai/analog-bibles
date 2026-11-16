$A_v = -(g_{m1}+g_{m2})(r_{O1}\|r_{O2}) \approx -19.6$，$R_{out} = r_{O1}\|r_{O2} \approx 1.82\ \mathrm{k\Omega}$；偏置由不含 λ 的平方律（square law）求得。若在偏置计算中保留 λ，结果取决于使用的一致程度：精确求导得 ≈ −24.1 和 1.82 kΩ，而采用简化式 $g_o = \lambda I_D$ 得 −19.1 和 1.44 kΩ。

- 偏置：$V_{in} = V_{out} = V_M$，两个器件都饱和：$\tfrac12(134\ \mu)(100)(V_M - 0.7)^2 = \tfrac12(38.4\ \mu)(100)(2.2 - V_M)^2$ → $1.868(V_M - 0.7) = 2.2 - V_M$ → $V_M = 1.223$ V，$I_D = 1.83$ mA。
- $g_{m1} = 2I_D/0.523\ \mathrm{V} = 7.01$ mS，$g_{m2} = 2I_D/0.977\ \mathrm{V} = 3.75$ mS；$r_{O1} = 1/(0.1 \times 1.83\ \mathrm{mA}) = 5.46\ \mathrm{k\Omega}$，$r_{O2} = 2.73\ \mathrm{k\Omega}$，$r_{O1}\|r_{O2} = 1.82\ \mathrm{k\Omega}$。
- 两个栅极都由 $V_{in}$ 驱动：$A_v = -10.76\ \mathrm{mS} \times 1.82\ \mathrm{k\Omega} = -19.6$。
- 在偏置中计入 λ 时：$V_M = 1.254$ V，$I_D = 2.32$ mA。采用一致的导数，即 $g_m = 2I_D/V_{ov}$（8.36 和 4.90 mS）和 $g_o = \lambda I_D/(1 + \lambda V_{DS})$，得 $A_v = -24.1$，$R_{out} = 1.82\ \mathrm{k\Omega}$；采用简化式 $g_o = \lambda I_D$ 则得 $A_v = -19.1$，$R_{out} = 1.44\ \mathrm{k\Omega}$。
