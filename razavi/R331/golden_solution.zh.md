设 $V_S$ 为源极电压；漏极、栅极和衬底（bulk）都接交流地。

- 器件内部从漏极流向源极的电流（沟道、$r_O$ 和噪声源）：$I_{DS} = g_m(0 - V_S) + g_{mb}(0 - V_S) + \dfrac{0 - V_S}{r_O} + I_n = I_n - V_S\left(g_m + g_{mb} + \dfrac{1}{r_O}\right)$。
- 这个电流全部流过 $Z_S$：$I_{DS} = V_S/Z_S$。因此 $V_S\left(\dfrac{1}{Z_S} + g_m + g_{mb} + \dfrac{1}{r_O}\right) = I_n$，即 $V_S = \dfrac{I_nZ_S}{1 + Z_S(g_m + g_{mb} + 1/r_O)}$。
- 流过漏极短路的电流等于 $I_{DS} = V_S/Z_S$，因此 $I_{n,out1} = \dfrac{I_n}{Z_S(g_m + g_{mb} + 1/r_O) + 1}$。∎
- 极限情况：$Z_S = 0$ 时 $I_{n,out1} = I_n$；$Z_S$ 很大时噪声电流被抑制（负反馈使 $I_n$ 的大部分经器件自身返回）。
