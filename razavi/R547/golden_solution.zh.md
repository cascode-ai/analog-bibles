$\dfrac{\partial^2V_{BE}}{\partial T^2} = -\dfrac{(4 + m)k}{qT} = -\dfrac{(4+m)V_T}{T^2}$：$V_{BE}$ 项和 $E_g$ 项相互抵消。对 $m = -3/2$：$-2.5(k/q)/T = -(0.215\ \mathrm{mV/K})/T$，即 200 K 时为 −1.08 μV/K²，300 K 时为 −0.72 μV/K²，400 K 时为 −0.54 μV/K²。
草图：始终为负，是一条 $\propto -1/T$ 的双曲线。低温时其绝对值较大，随 $T$ 升高逐渐趋向零。

推导：$\dfrac{d}{dT}\left[\dfrac{V_{BE} - (4+m)V_T - E_g/q}{T}\right] = \dfrac{\partial V_{BE}/\partial T - (4+m)k/q}{T} - \dfrac{V_{BE} - (4+m)V_T - E_g/q}{T^2}$。最后一项等于 $(\partial V_{BE}/\partial T)/T$，因此只剩下 $-(4+m)k/(qT)$。
- 含义：$V_{BE}(T)$ 向下凹（concave down）。加上一个线性的与绝对温度成正比（PTAT）项只能抵消斜率，因此带隙电压仍残留一定的曲率，并在温度系数为零的温度 $T_0$ 处达到最大值，≈ $-(4+m)(k/q)(T - T_0)^2/(2T_0)$（在 ±100 K 范围内为几 mV）。
