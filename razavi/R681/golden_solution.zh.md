在 T = 300 K 时，$\partial E_g/\partial T \approx -2.7\times10^{-4}$ eV/K，即 $E_g/q$ 的变化率为 −0.27 mV/K，此时 $E_g$ ≈ 1.115 eV。

推导：
- $\dfrac{\partial E_g}{\partial T} = -7.02\times10^{-4}\,\dfrac{T(T+2216)}{(T+1108)^2}$ eV/K。在 300 K 时：$-7.02\times10^{-4}\times0.3807 = -2.67\times10^{-4}$ eV/K。
- 该斜率并非常数：250 K 时为 −0.235 meV/K，350 K 时为 −0.297 meV/K（$\partial^2E_g/\partial T^2 \approx -6.2\times10^{-7}$ eV/K²）。

对带隙基准的影响（$V_{REF} = V_{BE} + $ PTAT 项）：
- 由 $V_{BE} = V_T\ln(I_C/I_S)$ 和 $I_S = bT^{4+m}\exp[-E_g/(kT)]$ 得 $V_{BE} = E_g(T)/q - V_T[(4+m)\ln T + \ln b - \ln I_C]$。
- 常用的结果 $\partial V_{BE}/\partial T = [V_{BE} - (4+m)V_T - E_g/q]/T$ 假设 $E_g$ 为常数。若计入 $E_g(T)$，会多出一项 $(1/q)\,\partial E_g/\partial T \approx -0.27$ mV/K。等价地，该公式中的 $E_g$ 被它线性外推到 0 K 的值 $E_{g0} = E_g - T\,\partial E_g/\partial T \approx 1.115 + 0.080 = 1.195$ eV 所取代。
- 对于 $V_{BE}$ = 750 mV、m = −3/2，$V_{BE}$ 的温度系数（TC）变为 ≈ −1.70 mV/K，而不是 −1.45 mV/K。
- 因此 PTAT 项必须增大约 17%（更大的 $\ln n$ 或电阻比）。零温度系数时的输出变为 $V_{REF} \approx E_{g0}/q + (4+m)V_T \approx 1.195 + 0.065 \approx 1.26$ V。按恒定 $E_g$ = 1.12 eV 设计时预测为 ≈ 1.18 V；这样的设计会设置错误，留下 ≈ −0.27 mV/K 的残余温度系数。这就是实际带隙基准的输出在 ≈ 1.2–1.25 V，而不是 $E_g(300\,\mathrm{K})/q$ 加一个小修正的原因。
- 由于 $\partial E_g/\partial T$ 本身随 T 变化，$V_{BE}$ 会额外带上曲率：在偏离 300 K ±50 K 处约为 ≈ −0.8 mV，与 $(4+m)V_T\ln T$ 项的曲率相当。线性的 PTAT 项无法抵消它。基准电压只在一个温度点上温度系数为零，在整个温度范围内存在抛物线形的残差（“弓形”），在要求高精度时需要进行曲率校正（curvature correction）。
