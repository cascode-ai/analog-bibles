$v_s = \dfrac{g_{ds1}g_{m1}g_{m3}}{(g_{ds1} + g_{ds3})\left[2g_{m1}g_{m3} + 2g_{m1}g_{ds3} + 2g_{m3}g_{ds1} + g_{m3}g_{ds5} + 2g_{ds1}g_{ds3} + g_{ds1}g_{ds5} + g_{ds3}g_{ds5}\right]}\,v_{id} \approx \dfrac{g_{ds2}}{2(g_{ds2} + g_{ds4})}\,v_{id}$

它与 $v_{id}$ 同相。取 $\lambda_N = 0.04$、$\lambda_P = 0.05$ V⁻¹ 时约为 0.22 $v_{id}$，并不小。

- 节点方程：在 D1（二极管 M3，电导 $g_{m3} + g_{ds3}$）、D2（M4 提供 $-g_{m4}v_{d1}$，并以 $g_{ds4}$ 作为该节点的负载）和 S（$i_{d1} + i_{d2} = g_{ds5}v_s$）处列 KCL，其中 $i_{d1} = g_{m1}(v_{id}/2 - v_s) + g_{ds1}(v_{d1} - v_s)$，$i_{d2} = g_{m2}(-v_{id}/2 - v_s) + g_{ds2}(v_{out} - v_s)$。
- 主导阶近似：$v_{d1} \approx -g_{m1}v_{id}/(2g_{m3})$ 很小，而 $v_{out} \approx g_{m1}v_{id}/(g_{ds2} + g_{ds4})$ 很大。在 S 处求和：$-2g_mv_s + g_{ds2}v_{out} \approx 0$，因此 $v_s \approx g_{ds2}v_{out}/(2g_m) = g_{ds2}v_{id}/[2(g_{ds2} + g_{ds4})]$。
- 原因：M1 和 M2 的漏极负载不同。M1 的漏极接在低阻抗的二极管 M3 上，几乎不动；而 M2 的漏极是高阻抗输出端，随完整的输出电压摆动。这一摆动通过 $r_{ds2}$ 向公共源极节点注入电流，而 M1 一侧没有与之对应的电流。两个半边电路不对称，因此源极节点不是交流地。若两边负载相同，或 $r_{ds2} \to \infty$，则 $v_s \to 0$。
