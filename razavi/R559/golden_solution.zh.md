$V_{out} = V_T\ln\dfrac{I_1(1 + r + \epsilon)}{I_S} + \dfrac{C_2}{C_1}V_T\ln(1 + r + \epsilon) \approx V_{out,nom} + \left(1 + \dfrac{C_2}{C_1}\right)\dfrac{V_T\,\epsilon}{1 + r}$，
其中 $V_{out,nom} = V_{EB}[I_1(1+r)] + (C_2/C_1)V_T\ln(1 + r)$。
- 误差主要来自被 $C_2/C_1$ 放大的那一项。例如：$r = 7$，$C_2/C_1 \approx 8.3$，$\epsilon = 0.01$，误差 ≈ 0.3 mV。
- 该误差与绝对温度成正比（PTAT），因此它还会附加一个大小为 $(1 + C_2/C_1)(k/q)\epsilon/(1 + r)$ 的温度系数（temperature coefficient），并使零 TC 温度发生偏移。
- 推导：相位 1 把 $V_{EB}(I_1)$ 存储在 $C_2$ 上。在相位 2，$V_X = V_{EB}(I_1 + I_2)$，由电荷守恒得 $V_{out} = V_X + (C_2/C_1)[V_X - V_{EB}(I_1)]$，其中 $V_X - V_{EB}(I_1) = V_T\ln(1 + I_2/I_1)$。
