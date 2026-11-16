$\Delta V_{out} \approx \left(1 + \dfrac{R_2}{R_1}\right)V_T\ln\dfrac{1 + \lambda(V_{DD} - V_X)}{1 + \lambda(V_{DD} - V_{out})} \approx \left(1 + \dfrac{R_2}{R_1}\right)V_T\,\dfrac{\lambda(V_{out} - V_X)}{1 + \lambda(V_{DD} - V_{out})}$，误差为正（$V_{out}$ 升高）。由于 $V_{out} - V_X$ 约为 1 V，误差很大。例：取 $n = 8$，按零温度系数（TC）要求取 $1 + R_2/R_1 = 17.2/\ln 8 \approx 8.3$，$|V_{EB}| \approx 0.78$ V（$V_X \approx 1.56$ V，$V_{out} \approx 2.34$ V），$\lambda = 0.2\ \mathrm{V^{-1}}$：误差 ≈ 28 mV。

推导：
- $V_X = |V_{EB1}| + |V_{EB2}|$，$V_Y = |V_{EB3}| + |V_{EB4}| + I_{D2}R_1$。令 $V_X = V_Y$，得 $I_{D2}R_1 = V_T\ln\dfrac{n^2I_{D1}I_{D3}}{I_{D2}I_{D4}}$（Q2 流过 $I_{D1}$，Q1 流过 $I_{D3}$，Q4 流过 $I_{D2}$，Q3 流过 $I_{D4}$）。输出为 $V_{out} = |V_{EB3}| + |V_{EB4}| + (1 + R_2/R_1)I_{D2}R_1$。理想情况下所有电流都相等：$V_{out} = 2|V_{EB}| + 2(1 + R_2/R_1)V_T\ln n$。
- 存在沟道长度调制时，$|V_{DS1}| = V_{DD} - V_X$，而 $|V_{DS2}| = V_{DD} - V_{out}$，因此在公共栅极电压下 $I_{D1}/I_{D2} = [1 + \lambda(V_{DD} - V_X)]/[1 + \lambda(V_{DD} - V_{out})] > 1$，而 $I_{D3} = I_{D4}$。
- $R_1$ 上与绝对温度成正比（PTAT）的电压变为 $2V_T\ln n + V_T\ln(I_{D1}/I_{D2})$，这一误差在输出端被乘以 $1 + R_2/R_1$。
- 二阶效应（未被放大）：绝对电流的变化会使 $|V_{EB3}| + |V_{EB4}|$ 偏移几毫伏。对该例的精确数值求解给出 27 mV，而不是 28.7 mV。
