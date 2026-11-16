$I_{D1}/I_{D2} = [V_{ov}/(V_{ov} - \Delta V)]^2 \approx 1 + 2\Delta V/V_{ov}$，输出升高
$\Delta V_{out} \approx \left(1 + \dfrac{R_2}{R_1}\right)V_T\ln\dfrac{I_{D1}}{I_{D2}} \approx \left(1 + \dfrac{R_2}{R_1}\right)\dfrac{2V_T\,\Delta V}{V_{ov}}$（主导的、被放大的项；$= (1 + R_2/R_1)(g_m/I_D)V_T\Delta V$）。
若计入 $V_X = V_Y$ 本身未被放大的升高（由于支路电流增大，堆叠的发射极-基极电压上移），完整的一阶结果为 $\Delta V_{out} \approx \left(2 + \dfrac{R_2}{R_1} + \dfrac{1}{\ln n}\right)V_T\ln\dfrac{I_{D1}}{I_{D2}}$。
例：$n = 8$，$1 + R_2/R_1 \approx 8.3$，$V_{ov} = 0.2$ V，$\Delta V = 5$ mV：≈ 10.8 mV（主导项），12.8 mV（完整结果；精确数值解与之一致）。

推导：
- 由 $V_X = V_Y$：$I_{D2}R_1 = V_T\ln[n^2I_{D1}I_{D3}/(I_{D2}I_{D4})] = V_T[2\ln n + \ln(I_{D1}/I_{D2})]$，因为 $I_{D3} = I_{D4} = I_{D1}$（这里只需要 $I_{D3} = I_{D4}$；若 $M_{3,4}$ 是 $M_1$ 的按比例复制，且标称 $|V_{TH}|$ 相同，则 $I_{D3} = cI_{D1}$，$c$ 固定，完整结果不变）。与绝对温度成正比（PTAT）的电压增大 $V_T\ln(I_{D1}/I_{D2})$，在输出端被乘以 $1 + R_2/R_1$。
- 精确推算：$V_{out} = (1 + R_2/R_1)(|V_{EB1}| + |V_{EB2}|) - (R_2/R_1)(|V_{EB3}| + |V_{EB4}|)$。这里 $Q_1$、$Q_2$、$Q_3$ 的电流是 $Q_4$ 的 $r = I_{D1}/I_{D2}$ 倍，由此得到额外的 $V_T\ln r\,(1 + 1/\ln n)$。
