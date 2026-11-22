$I_{BIAS} \approx 0.20$ mA（$V_T$ = 26 mV 时为 203 µA；25.7 mV 时为 198 µA）。

- 电流镜 $M_3$–$M_4$（同为 50/1）迫使两条支路中的电流 $I$ 相等。
- 栅极回路：$V_{EB}(Q_2, 1\times) + V_{GS1} = V_{EB}(Q_1, 10\times) + V_{GS2}$，因此 $V_{GS2} - V_{GS1} = V_T\ln10 = 59.9$ mV。
- $\sqrt{2I/k'_n}\left(\dfrac{1}{\sqrt{50}} - \dfrac{1}{\sqrt{100}}\right) = V_T\ln10$ → $\sqrt{2I/k'_n} = 1.445$ V → $I = 1.045k'_n \approx 203$ µA（$V_{ov1}$ = 0.145 V，$V_{ov2}$ = 0.204 V，$|V_{ov4}|$ = 0.354 V；在 3 V 电源下所有器件都处于有源区）。
- 温度：$I = \dfrac{k'_n(V_T\ln10)^2}{2(1/\sqrt{50} - 1/\sqrt{100})^2} \propto \mu_nT^2 \propto T^{0.5}$，因此 $TC_F \approx 0.5/T \approx +1700$ ppm/°C（由于迁移率下降，远小于 PTAT 电压对应的 $T^2$）。
- 电源灵敏度（计入 $r_o$ 的小信号估算，每个 pnp 管取 $r_e = V_T/I \approx 128$ Ω）：$\partial I_{BIAS}/\partial V_{DD} \approx 38$ µA/V，即 $S = (V_{DD}/I)(\partial I/\partial V_{DD}) \approx 0.6$——等效负反馈（小 $r_e$ 上的 $V_T\ln10$）很弱，因此该电路对电源只具有中等程度的不敏感性。
- 预期仿真结果：采用这些参数的 level-1/2 模型给出的 $I_{BIAS}$ 与 200 µA 相差约 10–20 %（采用题中完整的 level-1 模型约为 235 µA；沟道长度调制、$V_{DS3}$ 与 $V_{DS4}$ 的失配以及体效应使其偏移）；可能需要一条启动通路以避免零电流状态。
