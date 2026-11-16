$$\overline{V_{n,in}^2} = 4kT\left[\frac{\gamma}{g_m} + R_S + \frac{(1+g_mR_S)^2}{g_m^2R_D}\right]$$

- $M_1$：无论源极接什么阻抗，其漏极噪声电流都等效于栅极上的电压 $4kT\gamma/g_m$（λ = 0，无体效应）。
- $R_S$：与源极串联的噪声电压 $4kTR_S$ 的作用与栅极上的电压相同（只有 $V_{GS}$ 起作用），因此一比一地折算到输入端。
- $R_D$：输出噪声为 $4kTR_D$；电压增益为 $g_mR_D/(1+g_mR_S)$，因此折算到输入端为 $4kTR_D(1+g_mR_S)^2/(g_mR_D)^2$。
