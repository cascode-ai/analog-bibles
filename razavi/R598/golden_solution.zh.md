单独的主放大器：$\varepsilon_0 = \dfrac{C_1 + C_2}{C_1 + C_2 + G_mR_{out}C_2} \approx \dfrac{1 + C_1/C_2}{G_mR_{out}}$，即 1/环路增益（loop gain）。

完整电路：$\varepsilon = \varepsilon_0^2$。辅助放大器和误差放大器使增益误差缩小 $1/\varepsilon_0 \approx G_mR_{out}C_2/(C_1 + C_2)$ 倍，这一倍数就是环路增益。例如：$C_1/C_2 = 4$，$G_mR_{out} = 1000$ 时，$\varepsilon_0$ ≈ 0.5%，ε ≈ 25 ppm。

- 单独工作时：$V_Y = -G_mR_{out}V_M$，且 $C_1(V_{in} - V_M) = C_2(V_M - V_Y)$，因此 $V_Y/V_{in} = -C_1G_mR_{out}/(C_1 + C_2 + G_mR_{out}C_2) = -(C_1/C_2)(1 - \varepsilon_0)$。
- 加入校正后：$V_X = \varepsilon_0V_{in}C_1/(C_1 + C_2)$ 恰好是主放大器未经校正时的输入误差。注入的电流 $-G_mV_X$ 提供了原本需要由该误差产生的输出变化，只留下二阶残余。
