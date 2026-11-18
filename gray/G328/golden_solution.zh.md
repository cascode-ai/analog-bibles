相位裕度 ≈ 77°。

- 反馈系数（feedback factor，由反相输入端的电容分压器决定）：$\beta = C_I/(C_I + C_S + C_{ip}) = 4/4.5 = 0.889$。
- 环路断开时的等效输出负载：$C_{L,\text{eff}} = C_L + C_I \| (C_S + C_{ip}) = 1.944$ pF。
- 在主极点以上，环路传输 $T(s) ≈ \beta\dfrac{g_{m1}}{sC_{L,\text{eff}}}\cdot\dfrac{1}{1 + s/|p_2|}$；单位增益频率 $\omega_u ≈ \beta g_{m1}/C_{L,\text{eff}} = 0.889 \times 0.1\text{ mA/V}/1.944\text{ pF} = 45.7$ Mrad/s（7.3 MHz）。
- PM = 90° − arctan(45.7/200) = 90° − 12.9° ≈ 77°（若按精确穿越频率 44.6 Mrad/s 计算，为 77.4°）。
