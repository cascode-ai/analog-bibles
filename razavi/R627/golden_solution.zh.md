开环（在 $M_1$ 栅极处断开环路）：$H(s) = \dfrac{V_{out}}{V_{in}} = -\dfrac{(g_mR_D)^2}{(1 + sR_DC_L)^2}$，即这是一个负反馈环路，环路增益（loop gain）为 $(g_mR_D)^2/(1 + s/\omega_p)^2$，在 $\omega_p = 1/(R_DC_L)$ 处有两个重合的极点（分别位于节点 E 和 F）。
相位裕度：$\mathrm{PM} = 180^\circ - 2\tan^{-1}\sqrt{(g_mR_D)^2 - 1} = 2\sin^{-1}\dfrac{1}{g_mR_D}$（$g_mR_D > 1$ 时），增益很大时 ≈ $2/(g_mR_D)$ rad ≈ $115^\circ/(g_mR_D)$。例如：$g_mR_D$ = 2, 5, 10, 20 → PM = 60°, 23.1°, 11.5°, 5.7°。对任何有限增益，PM 都保持为正（环路会振铃，但不会振荡），只有当 $g_mR_D \to \infty$ 时才趋于 0°。

推导：
- 每个共源级（common-source stage）：$V_E/V_{G1} = -g_mR_D/(1 + sR_DC_L)$，$V_F/V_E$ 也相同；理想反相器再乘以 $-1$，得到上面的 $H(s)$。直流时 $H(0) = -(g_mR_D)^2$：额外的一次反相使低频时的反馈为负反馈（不会发生锁定）。
- 单位增益频率（unity-gain frequency）：$(g_mR_D)^2 = 1 + (\omega_u/\omega_p)^2$ → $\omega_u = \omega_p\sqrt{(g_mR_D)^2 - 1} = \sqrt{(g_mR_D)^2 - 1}/(R_DC_L)$。
- $\omega_u$ 处与频率有关的相位为 $-2\tan^{-1}(\omega_u/\omega_p)$，因此 PM = $180^\circ - 2\tan^{-1}\sqrt{(g_mR_D)^2 - 1}$。由于 $\cos[\tan^{-1}\sqrt{A^2-1}] = 1/A$，它等于 $180^\circ - 2\cos^{-1}[1/(g_mR_D)] = 2\sin^{-1}[1/(g_mR_D)]$。
- 若 $g_mR_D \le 1$，环路增益始终达不到单位增益，相位裕度没有定义（实际上可视为无穷大）。
