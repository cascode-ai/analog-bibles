所有曲线都是在 $I_B = 10$ µA 处通过 1 的直线；令 $x = I_B/10\ \mu$A：

| 物理量 | 依赖关系 | 斜率（十倍频程/十倍频程） | 100 µA 时 | 1000 µA 时 |
|---|---|---|---|---|
| $A_v(0)$ | $\propto 1/I_B$ | −1 | 0.1 | 0.01 |
| GB | $\propto I_B^{1/2}$ | +1/2 | 3.16 | 10 |
| $P_{diss}$ | $\propto I_B$ | +1 | 10 | 100 |
| SR | $\propto I_B$ | +1 | 10 | 100 |
| $R_{out}$ | $\propto 1/I_B$ | −1 | 0.1 | 0.01 |
| $\lvert p_1\rvert$ | $\propto I_B^{3/2}$ | +3/2 | 31.6 | 1000 |
| $z$ | $\propto I_B^{1/2}$ | +1/2 | 3.16 | 10 |

理由：$g_m = \sqrt{2K'(W/L)I} \propto \sqrt{I_B}$，$g_{ds} = \lambda I \propto I_B$；$A_v(0) = \dfrac{g_{m1}g_{m6}}{(g_{ds2}+g_{ds4})(g_{ds6}+g_{ds7})} \propto \dfrac{I_B^{1/2}I_B^{1/2}}{I_BI_B}$；GB $= g_{m1}/C_c$；$P_{diss} = (V_{DD} - V_{SS})(k_1 + k_2 + \ldots)I_B$；SR $= k_1I_B/C_c$；$R_{out} = 1/(g_{ds6} + g_{ds7})$；$|p_1| = GB/A_v(0)$；$z = g_{m6}/C_c$。GB 与 $z$ 的直线重合，$P_{diss}$ 与 SR 重合，$A_v(0)$ 与 $R_{out}$ 也重合；$|p_1|$ 占满整个纵轴范围（1 到 10³），$A_v(0)$ 和 $R_{out}$ 终止于 10⁻²。
