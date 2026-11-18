$V_{OUT} \approx 1.30$ V（1.299 V），而 $I_1 \propto T$ 时为 1.262 V。

- 在 $T_0$ 附近写成 $I_1 \propto T^{\alpha}$：$\alpha = T_0\cdot TC_F = 298\times(-1.5\times10^{-3}) = -0.447$。
- $V_{BE(\text{on})} = V_{G0} - V_T[(\gamma - \alpha)\ln T - \ln(EG)]$（$E$、$G$ 为常数），故 $V_{OUT} = V_{G0} - V_T(\gamma-\alpha)\ln T + V_T[M + \ln(EG)]$。
- 在 $T_0$ 处令 $dV_{OUT}/dT = 0$，得 $M + \ln(EG) = (\gamma-\alpha)(\ln T_0 + 1)$，因此 $V_{OUT}(T_0) = V_{G0} + (\gamma - \alpha)V_{T0}$。
- $V_{OUT} = 1.205 + (3.2 + 0.447)(0.0257) = 1.205 + 0.094 = 1.299$ V（在 300 K 下取 $V_T$ = 26 mV 时为 1.300 V）。对于 PTAT 电流（$\alpha = 1$），该值为 $1.205 + 2.2V_T = 1.262$ V。
