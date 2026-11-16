$R_{out}$ 位于反馈环路之内，因此当增益为无穷大时它不引起误差。当 $A_1$ 有限时，内部电压源必须产生 $V_{out} + (I_1 + I_2)R_{out}$，因此 $V_X - V_Y = [V_{out} + (I_1 + I_2)R_{out}]/A_1$，其中 $I_1 \approx I_2 = V_T\ln n/R_3$。其作用相当于运算放大器（op amp）的失调电压（offset voltage）：
$\Delta V_{out} \approx -\left(1 + \dfrac{1}{g_mR_1}\right)\left(1 + \dfrac{R_2}{R_3} + \dfrac{1}{g_mR_3}\right)\dfrac{V_{out} + 2(V_T\ln n/R_3)R_{out}}{A_1} \approx -\left(1 + \dfrac{R_2}{R_3}\right)\dfrac{V_{out} + 2(V_T\ln n/R_3)R_{out}}{A_1}$，其中 $1/g_m = V_T/I = R_3/\ln n$。两个较小的修正项分别来自 $I_1 \neq I_2$ 以及 $V_{BE2}$ 随 $I_2$ 的变化。
其中由 $R_{out}$ 引起的部分为 $\approx -(1 + R_2/R_3)\,2V_T\ln n\,R_{out}/(R_3A_1)$。等价地说，$R_{out}$ 使环路增益（loop gain）缩小为原来的 $R_L/(R_L + R_{out})$ 倍，其中 $R_L$ 是放大器输出端所接的负载电阻。
验算：$n = 8$，$R_3 = 2$ kΩ，$R_1 = R_2 = 14.5$ kΩ，$A_1 = 10^4$，$R_{out} = 50$ kΩ（$V_{out} \approx 1.07$ V）：精确解为 −3.48 mV（其中 −2.48 mV 由 $R_{out}$ 引起），完整的一阶公式给出 −3.50 mV，简化的 $(1 + R_2/R_3)$ 形式给出 −3.10 mV。

推导：
- $V_X - V_Y = |V_{BE1}| - |V_{BE2}| - I_2R_3 = \epsilon$，所以 $I_2R_3 = V_T\ln n + V_T\ln(I_1/I_2) - \epsilon$。由于 $R_1 = R_2$，$I_1 - I_2 = -\epsilon/R_2$，且 $V_T\ln(I_1/I_2) \approx -\epsilon/(g_mR_2)$。
- $V_{out} = V_{BE2} + I_2(R_2 + R_3)$，所以 $\Delta V_{out} = (1/g_m + R_2 + R_3)\Delta I_2$，其中 $R_3\Delta I_2 = -(1 + 1/(g_mR_2))\,\epsilon$，即 $\Delta V_{out} = -(1 + 1/(g_mR_1))(1 + R_2/R_3 + 1/(g_mR_3))\,\epsilon$（利用了 $R_1 = R_2$），而 $\epsilon = [V_{out} + (I_1 + I_2)R_{out}]/A_1$。
