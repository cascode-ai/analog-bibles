$I_{SS,min} = \dfrac{4}{\mu_nC_{ox}(W/L)R_1^2} \approx \dfrac{2.99\times10^{4}\ \mathrm{A\,\Omega^2}}{(W/L)R_1^2}$（例如 $W/L = 50$、$R_1 = 1$ kΩ 时为 0.6 mA）。

推导：
- 在振荡边缘摆幅很小，因此每个差分对（differential pair）都工作在平衡点附近，每个晶体管的电流为 $I_{SS}/2$：$g_m = \sqrt{2\mu_nC_{ox}(W/L)(I_{SS}/2)} = \sqrt{\mu_nC_{ox}(W/L)I_{SS}}$。
- 每级的低频差分增益为 $A_0 = g_mR_1$，在其输出节点处有一个主极点（dominant pole）；三级环形振荡器需要 $A_0 \ge 2$（在 $\sqrt3\,\omega_0$ 处每级 60°，$A_0^3/8 \ge 1$）。
- $\sqrt{\mu_nC_{ox}(W/L)I_{SS}}\,R_1 \ge 2$ → $I_{SS} \ge 4/[\mu_nC_{ox}(W/L)R_1^2]$。
- （若计入 $r_O = 2/(\lambda I_{SS})$，条件变为 $g_m(R_1 \parallel r_O) \ge 2$，需要的电流略大一些。）
