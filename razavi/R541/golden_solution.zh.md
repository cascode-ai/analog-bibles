$A_{1,min} = \dfrac{V_{DD} - |V_{GS}|}{V_e}$。运放必须把其输出保持在 PMOS 栅极电压 $V_G = V_{DD} - |V_{GS}|$，这要求差分输入 $|V_Y - V_X| = V_G/A_1$；因此 $A_1 > V_G/V_e$。例：$|V_{GS}| \approx 1$ V 时 $V_G \approx 2$ V，$A_1 \gtrsim 2\ \mathrm{V}/V_e$（$V_e = 1$ mV 时为 2000）。
- 由此产生的输出误差约为 $(1 + R_2/R_1)V_e$，因为在产生与绝对温度成正比（PTAT）电压的环路中，$V_X - V_Y$ 的作用相当于失调（offset）。
- 如果改用零输入时输出偏置电平为 $V_{O0}$ 的运放模型，要求就变为 $A_1 > |V_G - V_{O0}|/V_e$。
