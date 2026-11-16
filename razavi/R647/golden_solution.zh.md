每个节点围绕 $V_{DD}$ 作正弦摆动，幅度 ≈ $(2/\pi)I_{SS}R_P \approx 80$ mV（峰峰值 ≈ 160 mV）；差分输出 $V_X - V_Y$ 的幅度 ≈ $(4/\pi)I_{SS}R_P \approx 160$ mV（峰峰值 ≈ 320 mV）。

推导：
- 每个谐振回路（tank）的等效并联电阻：$R_P = Q\omega L_P = 4 \times 2\pi(10^9)(5\ \mathrm{nH}) \approx 126\ \Omega$（串联电阻为 $\omega L_P/Q = 7.85\ \Omega$；采用精确换算时 $R_P = (1 + Q^2)R_S = 134\ \Omega$）。
- 尾电流完全切换时，每个漏极电流都是 0 到 1 mA 的方波；其基波（fundamental）幅度为 $(2/\pi)(1\ \mathrm{mA}) = 0.64$ mA，谐振回路（谐振时阻抗为 $R_P$，谐波处阻抗很小）把它转换为每个节点 $0.64\ \mathrm{mA} \times 126\ \Omega \approx 80$ mV 的电压；X 和 Y 反相，因此差分幅度 ≈ 160 mV。
- 说明：由于 Q 值低使 $R_P$ 很小，摆幅也很小。起振需要 $g_mR_P \ge 1$，即每个器件在 0.5 mA 时 $g_m \ge 8$ mS，这需要很大的 W/L，过驱动电压（overdrive voltage）≈ 0.13 V；于是完全切换需要 $|V_X - V_Y| \gtrsim \sqrt2 \times 0.13 \approx 0.18$ V，与估算值相当，因此实际摆幅可能略小一些，而变容二极管和晶体管的损耗还会使其进一步减小。
