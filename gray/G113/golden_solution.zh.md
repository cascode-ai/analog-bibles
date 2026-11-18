$R_L = (V_{CC} - V_{CE(\text{sat})})/I_Q = 14.8\ \mathrm{V}/2.86\ \mathrm{mA} \approx 5.2\ \mathrm{k\Omega}$；最大平均输出功率 $P_L = \tfrac12(V_{CC} - V_{CE(\text{sat})})I_Q = \tfrac12(14.8)(2.86\ \mathrm{mA}) \approx 21.2$ mW，效率 $\approx 24.7\%$。
- 电源功率固定为 $2V_{CC}I_Q = 85.8$ mW，因此 $P_L$ 最大时效率最高。
- 正向摆幅受限于 $V_{CC} - V_{CE(\text{sat})}$，负向摆幅受限于 $\min(I_QR_L,\ V_{CC} - V_{CE(\text{sat})})$；当 $I_QR_L \ge 14.8$ V 时，$P_L = \hat V^2/(2R_L)$ 随 $R_L$ 减小而增大，而当 $R_L$ 减小到该值以下后又随之减小，因此最优点位于两个限制重合处：$I_QR_L = V_{CC} - V_{CE(\text{sat})}$。
