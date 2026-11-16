令 $u = V_m/(\zeta V_T)$，则 $I_D = I\exp(u\cos\omega t)$，因此（只保留 $u$ 的最低阶项）
- 基波（fundamental）：$Iu = \dfrac{IV_m}{\zeta V_T}$（更精确地为 $I(u + u^3/8)$）；
- 二次谐波（second harmonic）：$\dfrac{Iu^2}{4} = \dfrac{IV_m^2}{4\zeta^2V_T^2}$，HD2 $= \dfrac{V_m}{4\zeta V_T}$；
- 三次谐波（third harmonic）：$\dfrac{Iu^3}{24} = \dfrac{IV_m^3}{24\zeta^3V_T^3}$，HD3 $= \dfrac{V_m^2}{24\zeta^2V_T^2}$；
- 一般地，n 次谐波 $\approx I u^n/(2^{n-1}n!)$（精确值为 $2I\,I_n(u)$，用修正贝塞尔函数表示）。
输出电压 $V_{DD} - R_DI_D$：各幅度均乘以 $R_D$（基波为 $g_mR_DV_m$，其中 $g_m = I/(\zeta V_T)$）。
推导：$e^{u\cos\theta} = 1 + u\cos\theta + \tfrac{u^2}{2}\cos^2\theta + \tfrac{u^3}{6}\cos^3\theta + \dots$，其中 $\cos^2\theta = (1+\cos2\theta)/2$，$\cos^3\theta = (3\cos\theta + \cos3\theta)/4$；直流项增大到 $I(1 + u^2/4)$。
