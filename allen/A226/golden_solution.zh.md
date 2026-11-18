$\eta = \dfrac{P_{RL}}{P_{supply}} = \dfrac{V_p^2/(2R_L)}{(V_{DD}-V_{SS})V_p/(\pi R_L)} = \dfrac{\pi}{2}\dfrac{V_p}{V_{DD}-V_{SS}}$，在 $V_p = (V_{DD}-V_{SS})/2 = V_{DD}$ 时取最大值 $\pi/4$ = 78.5%。

- 负载功率：$P_{RL} = V_p^2/(2R_L)$。
- 上管只在正半周导通，从 $V_{DD}$ 吸取 $i = (V_p/R_L)\sin\omega t$；其在整个周期内的平均值为 $\frac{1}{T}\int_0^{T/2}\frac{V_p}{R_L}\sin\omega t\,dt = \frac{V_p}{\pi R_L}$。下管在负半周从 $V_{SS}$ 吸取相同的平均电流。电源功率：$V_{DD}\frac{V_p}{\pi R_L} + |V_{SS}|\frac{V_p}{\pi R_L} = (V_{DD}-V_{SS})\frac{V_p}{\pi R_L}$（B 类没有静态电流）。
- 因此 $\eta = \frac{\pi}{2}\frac{V_p}{V_{DD}-V_{SS}}$，随 $V_p$ 线性增大。最大可能的摆幅是摆到电源轨，即 $V_p = (V_{DD}-V_{SS})/2$，得到 $\eta_{max} = \pi/4$ = 0.785 = 78.5%。
