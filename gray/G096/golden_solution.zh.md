$S \approx 0.042$（此时 $I_{C1} \approx 1.36$ mA，$I_{OUT} \approx 0.68$ mA）。

- $Q_1$ 的基极-发射极结跨接在 $R_2$ 两端，故 $I_{OUT} \approx V_{BE1}/R_2$，其中 $V_{BE1} = V_T\ln(I_{C1}/I_S)$；$I_{C1} = (V_{CC} - V_{BE1} - V_{BE2})/R_1$ 流过 $R_1$（$R_2$ 的电流由 $Q_2$ 提供）。
- 工作点：$I_{C1} \approx 1.365$ mA，$V_{BE1} \approx 0.685$ V，$I_{OUT} \approx 0.685$ mA，$V_{BE2} \approx 0.667$ V。
- $\dfrac{\partial I_{OUT}}{\partial V_{CC}} = \dfrac{1}{R_2}\dfrac{V_T}{I_{C1}}\dfrac{\partial I_{C1}}{\partial V_{CC}} \approx \dfrac{V_T}{R_2I_{C1}R_1}$，故 $S = \dfrac{V_T}{V_{BE1}}\cdot\dfrac{V_{CC}}{V_{CC} - V_{BE1} - V_{BE2}} = \dfrac{0.026}{0.685}\cdot\dfrac{15}{13.65} \approx 0.042$。
- 输出以 $V_{BE}$ 为基准，而后者随由电源得到的电流只按对数规律变化，因此 $S \ll 1$（简单的电阻馈电电流镜的 $S \approx 1$）。
