$$\overline{V_{n,out}^2} = 4kTR_F + 4kT\gamma g_m\frac{(R_S + R_F)^2}{(1 + g_mR_S)^2}$$

- 由于 $I_1$ 是理想的且 λ = 0，对输出节点应用基尔霍夫电流定律（KCL）：$g_mV_G + I_{n,M1} + I_F = 0$（$I_F$ 为 $R_F$ 中从输出端流向栅极的电流）。在栅极处：$V_G = R_SI_F$。因此 $I_F = -I_{n,M1}/(1 + g_mR_S)$，与 $R_F$ 的噪声无关。
- 沿 $R_F$ 应用基尔霍夫电压定律（KVL）：$V_{out} = V_G + R_FI_F + V_{n,RF} = (R_S + R_F)I_F + V_{n,RF}$，因此 $V_{out} = V_{n,RF} - \dfrac{R_S + R_F}{1 + g_mR_S}I_{n,M1}$。
- 极限情况：$R_S = 0$ 时得到 $4kTR_F + 4kT\gamma g_mR_F^2 = (4kT/R_F + 4kT\gamma g_m)R_F^2$；$R_S \to \infty$ 时得到 $4kTR_F + 4kT\gamma/g_m$。
