$$r_O = \left(\frac{\partial I_D}{\partial V_{DS}}\right)^{-1} = \frac{(1+\kappa V_{DS})^2}{\lambda I_{D0}},\qquad I_{D0} = \tfrac12\mu C_{ox}\frac{W}{L}(V_{GS}-V_{TH})^2 .$$
用实际电流表示，$r_O = \dfrac{(1+\kappa V_{DS})[1+(\kappa+\lambda)V_{DS}]}{\lambda I_D} \approx \dfrac{(1+\kappa V_{DS})^2}{\lambda I_D}$。$r_O$ 随 $V_{DS}$ 增大，当 $\kappa V_{DS} \gg 1$ 时大致按 $V_{DS}^2$ 增长。
- 推导：$\dfrac{d}{dV}\left[\dfrac{V}{1+\kappa V}\right] = \dfrac{1}{(1+\kappa V)^2}$，因此 $\partial I_D/\partial V_{DS} = \lambda I_{D0}/(1+\kappa V_{DS})^2$。若把修正后的 λ 直接代入 $1/(\lambda I_D)$，只能得到 $(1+\kappa V_{DS})/(\lambda I_D)$，因为它漏掉了 λ 对 $V_{DS}$ 的导数。

失真：
- 该电流源的 I–V 特性不再是一条直线：其增量电阻取决于它两端的瞬时电压。假设有信号电流流过它，例如它作为共源级（CS stage）或运算放大器（op amp）的负载，增益为 $g_m(r_{O1}\|r_{O2})$。那么在使 $V_{DS}$ 升高的半周期（$r_O$ 较大）中，电压摆幅要大于使其降低的半周期。波形不对称（呈扩张型），并含有谐波，主要是二次谐波（second harmonic）。等价地，增益随输出电平而变化。
- 定量分析：把 I–V 关系反过来，得 $V_{DS} = x/(\lambda - \kappa x)$，其中 $x = (I_D - I_{D0})/I_{D0}$，这是一个非线性函数。在偏置点 $V_{DS0}$ 附近，$v = r_Oi + \kappa r_O^2 i^2/(1+\kappa V_{DS0}) + \dots$。对于产生基波（fundamental）电压幅度 $V_p$ 的正弦电流，$HD_2 \approx \kappa V_p/[2(1+\kappa V_{DS0})]$；若 κ = 0，电流源就是线性的。
