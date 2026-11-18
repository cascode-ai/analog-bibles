$I_{BIAS} = \dfrac{2}{\mu_nC_{ox}R^2}\left(\dfrac{1}{\sqrt{(W/L)_1}} - \dfrac{1}{\sqrt{(W/L)_2}}\right)^2 = \dfrac{2}{\mu_nC_{ox}(W/L)_1R^2}\left(1 - \sqrt{\dfrac{(W/L)_1}{(W/L)_2}}\right)^2$。它与 $V_{DD}$ 和 $V_t$ 都无关，按 $1/(\mu_nR^2)$ 变化：由于 $\mu_n \propto T^{-1.5}$，它随温度升高而增大，$TC_F = 1.5/T - 2\,TC_R$（对与温度无关的电阻 ≈ +5000 ppm/°C；正温度系数的电阻可以部分补偿）。$I = 0$ 也是一个平衡点，因此需要启动电路（start-up circuit）。

- $M_3$–$M_4$ 电流镜（器件相同）迫使两条支路电流相等：$I_{D1} = I_{D2} = I_{BIAS}$。
- 沿栅极回路列 KVL：$V_{GS1} = V_{GS2} + I_{BIAS}R$；阈值电压相等而抵消：$V_{ov1} - V_{ov2} = I_{BIAS}R$。
- $\sqrt{\dfrac{2I_{BIAS}}{\mu_nC_{ox}(W/L)_1}} - \sqrt{\dfrac{2I_{BIAS}}{\mu_nC_{ox}(W/L)_2}} = I_{BIAS}R$；两边除以 $\sqrt{I_{BIAS}}$ 后平方即得上述结果（存在非零解要求 $(W/L)_2 > (W/L)_1$）。
- 温度：$C_{ox}$ 和各 W/L 比为常数，故 $\frac{1}{I}\frac{dI}{dT} = -\frac{1}{\mu}\frac{d\mu}{dT} - \frac{2}{R}\frac{dR}{dT}$。
