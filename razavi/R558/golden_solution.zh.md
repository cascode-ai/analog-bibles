在相位 2，$V_{out} = V_{EB}(I_1 + I_2) + \dfrac{C_2}{C_1}V_T\ln\left(1 + \dfrac{I_2}{I_1}\right)$。选取
$\dfrac{C_2}{C_1}\dfrac{k}{q}\ln\left(1 + \dfrac{I_2}{I_1}\right) = 1.5\ \mathrm{mV/K}$，即 $\dfrac{C_2}{C_1}\ln\left(1 + \dfrac{I_2}{I_1}\right) \approx 17.4$（$k/q = 86.17\ \mu$V/K）。
例如：$I_2 = 7I_1$（$\ln 8 = 2.08$），$C_2 \approx 8.4C_1$；此时 $V_{out} \approx V_{EB} + 17.4V_T \approx V_{EB} + 0.45$ V ≈ 1.2 V。
- 比值 $I_2/I_1$ 必须与温度无关（两个电流都通过电流镜从同一个基准导出），这样第二项才严格地与绝对温度成正比（PTAT）。电容比精确，且几乎与温度无关。
- 电流的绝对值只决定 $V_{EB}$ 的工作点（若采用 PTAT 电流，其 TC 会略微不那么负，因此需要对精确比值进行微调）。
- 等价形式：$V_{out} = V_{EB}(I_1) + (1 + C_2/C_1)V_T\ln(1 + I_2/I_1)$，此时条件相对于 $V_{EB}(I_1)$ 来写。
