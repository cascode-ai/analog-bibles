$R_{D,min} = 400\ \Omega$（与 $C_L$ 无关）。

推导：
- 每一级：$-A_0/(1 + s/\omega_0)$，其中 $A_0 = g_mR_D$，$\omega_0 = 1/(R_DC_L)$。环路增益（loop gain）为 $H(s) = -A_0^3/(1 + s/\omega_0)^3$。
- 巴克豪森判据（Barkhausen criteria）：与频率有关的相移必须达到 180°，即每级 60° → $\tan^{-1}(\omega_{osc}/\omega_0) = 60^\circ$，$\omega_{osc} = \sqrt3\,\omega_0$。
- $|H(j\omega_{osc})| = A_0^3/(1 + 3)^{3/2} = A_0^3/8 \ge 1$ → $A_0 \ge 2$。
- $g_mR_D \ge 2$ → $R_D \ge 2 \times 200\ \Omega = 400\ \Omega$。
