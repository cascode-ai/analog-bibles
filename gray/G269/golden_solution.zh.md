$R_{out} \approx 74$ GΩ（$7.4\times10^{10}$ Ω）；$v_o/v_i \approx -4.9\times10^7$。

- $g_m = 2I_D/V_{ov} = 2(100\ \mu\text{A})/0.3 = 0.667$ mS；$r_o = 1/(0.03\times100\ \mu\text{A}) = 333$ kΩ；$g_mr_o = 222$。
- 取 $k = a$ 应用布莱克曼公式：$R_{out}(a{=}0) = r_{o1} + r_{o2} + g_{m2}r_{o2}r_{o1} = 74.7$ MΩ。
- $\mathcal{R}$（输出短路）：在 $M_2$ 栅极加测试电压，$M_2$ 成为驱动 $r_{o1}\|r_{o2}$ 的源极跟随器：$v_s = v_t\,g_{m2}/(g_{m2} + 2/r_o)$，所以 $\mathcal{R} = a\,g_{m2}/(g_{m2}+2/r_o) = 991$。
- $\mathcal{R}$（输出开路）：$M_2$ 中不能有电流流过，因此源极节点不动：$\mathcal{R} = 0$。
- $R_{out} = 74.7\text{ M}\times(1+991)/1 = 74.1$ GΩ $\approx (1+a)g_{m2}r_{o2}r_{o1} + r_{o1} + r_{o2}$。
- 增益（理想电流源负载，输出相当于开路）：$v_o/v_i = -G_mR_{out}$，其中 $G_m \approx g_{m1}$，或精确地 $-g_{m1}r_{o1}[1 + (1+a)g_{m2}r_{o2}] = -222\times(1 + 1001\times222) = -4.94\times10^7$。
