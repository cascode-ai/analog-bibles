$R_o = r_{o1} + r_{o2} + g_{m2} r_{o1} r_{o2}(1 + g_{m3} r_{o3}) \approx 7.1\times10^8\ \Omega$（≈ 0.7 GΩ），约为普通共源共栅（cascode）输出电阻（≈ 6.6 MΩ）的 $g_m r_o \approx 108$ 倍。

- $\lambda = 0.02/0.12 = 0.167\ \mathrm{V^{-1}}$，$r_o = 1/(\lambda I_D) = 60$ kΩ；$W/L_{\text{eff}} = 83.3$，$g_m = \sqrt{2(194\ \mu)(83.3)(100\ \mu)} = 1.80$ mA/V；$g_m r_o = 108$。
- 令 $v_i = 0$，在输出端加测试电压：$M_2$ 的源极变化 $v_{s2} = i_x r_{o1}$；$M_3$（共源接法，理想电流源负载）以 $-g_{m3}r_{o3}v_{s2}$ 驱动 $M_2$ 的栅极，因此 $v_{gs2} = -(1 + g_{m3}r_{o3})v_{s2}$。再由 $i_x = g_{m2}v_{gs2} + (v_x - v_{s2})/r_{o2}$ 得 $R_o = r_{o1} + r_{o2} + g_{m2}r_{o1}r_{o2}(1 + g_{m3}r_{o3}) = 0.12\ \mathrm{M} + 1.8\ \mathrm{m}\times(60\ \mathrm{k})^2\times109 = 706$ MΩ。
- 在 level-1 仿真中，典型 $V_{DS}$ 下 $r_o = (1 + \lambda V_{DS})/(\lambda I_D)$ 比 $1/(\lambda I_D)$ 大 10–25%，而 $R_o \propto r_o^3$，因此仿真值可达手算值的约 1.5–2 倍（≈ 0.7–1.4 GΩ）。
