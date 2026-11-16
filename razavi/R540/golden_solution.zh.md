$I_{D3}/I_{D4} = [V_{ov}/(V_{ov} - \Delta V)]^2 \approx 1 + 2\Delta V/V_{ov}$。$Q_1$（由 $M_3$ 供电）位于 $X$ 支路，$Q_3$（由 $M_4$ 供电）位于 $Y$ 支路，因此这个比值进入与绝对温度成正比（PTAT）的电压的方式，与 $M_1$–$M_2$ 失配完全相同：
$\Delta V_{out} \approx \left(1 + \dfrac{R_2}{R_1}\right)V_T\ln\dfrac{I_{D3}}{I_{D4}} \approx \left(1 + \dfrac{R_2}{R_1}\right)\dfrac{2V_T\,\Delta V}{V_{ov}}$（一种主导阶形式，$V_{out}$ 升高）。由拆分 $V_{out} = V_X + I_{D2}R_2$ 得到的形式 $(R_2/R_1)V_T\ln(I_{D3}/I_{D4})$（这里 $V_X$ 基本不变）同样成立，而且略微更接近精确值，因为 $|V_{EB3}|$ 未被放大的下降抵消了其中的“1”。
若计入 $|V_{EB3}|$ 未被放大的变化（Q3 现在的工作电流低于 Q4），完整的一阶结果为 $\Delta V_{out} \approx \left(\dfrac{R_2}{R_1} + \dfrac{1}{\ln n}\right)V_T\ln\dfrac{I_{D3}}{I_{D4}}$。
例：$n = 8$，$1 + R_2/R_1 \approx 8.3$，$V_{ov} = 0.2$ V，$\Delta V = 5$ mV：≈ 10.9 mV（$1 + R_2/R_1$ 形式），9.6 mV（$R_2/R_1$ 形式），10.2 mV（完整结果；精确数值解给出 10.2 mV）。
- 与沟道长度调制不同，$M_3$/$M_4$ 中的阈值失配与 $M_1$/$M_2$ 中的同样有害。

推导：$V_X = V_Y$ 给出 $I_{D2}R_1 = V_T[2\ln n + \ln(I_{D3}/I_{D4})]$，其中 $I_{D1} = I_{D2}$。$V_{out} = |V_{EB3}| + |V_{EB4}| + (1 + R_2/R_1)I_{D2}R_1$，其中 $|V_{EB3}|$ 相对于其他结下降了 $V_T\ln(I_{D3}/I_{D4})$。
