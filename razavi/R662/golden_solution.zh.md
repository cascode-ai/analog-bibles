$\dfrac{\Phi_{out}}{V_{ex}}(s) = \dfrac{K_{VCO}\,s}{s^2 + \dfrac{I_PK_{VCO}R_P}{2\pi}s + \dfrac{I_PK_{VCO}}{2\pi C_P}} = \dfrac{2\pi C_PK_{VCO}\,s}{2\pi C_Ps^2 + I_PK_{VCO}R_PC_Ps + I_PK_{VCO}}$，
即 $\dfrac{K_{VCO}\,s}{s^2 + 2\zeta\omega_ns + \omega_n^2}$，其中 $\omega_n^2 = I_PK_{VCO}/(2\pi C_P)$，$\zeta = \frac{R_P}{2}\sqrt{I_PC_PK_{VCO}/2\pi}$。

推导：
- PFD/电荷泵/滤波器作用于 $\Phi_{in} - \Phi_{out}$（其中 $\Phi_{in} = 0$），其传递函数为 $(I_P/2\pi)(R_P + 1/C_Ps)$。
- 因此 $\Phi_{out} = \dfrac{K_{VCO}}{s}\left[V_{ex} - \dfrac{I_P}{2\pi}\left(R_P + \dfrac{1}{C_Ps}\right)\Phi_{out}\right]$。
- 两边同乘 $s^2$ 并求解，即得上述结果。

性质：
- 相位响应是带通的。s = 0 处的零点意味着恒定（阶跃）的 $V_{ex}$ 不会造成输出相位的永久变化：电荷泵的积分器使滤波器电压变化 $-\Delta V_{ex}$，同时相位误差回到零。相比之下，在 I 型环路中，$V_{ex}$ 的阶跃会使相位永久偏移 $\Delta V_{ex}/K_{PD}$。
- 峰值位于 ω = $\omega_n$ 处，其幅值为 $K_{VCO}/(2\zeta\omega_n) = 2\pi/(I_PR_P)$。高于 $\omega_n$ 时，响应趋于 $K_{VCO}/s$（开环调制）。
- 从频率的角度看，$\Omega_{out}/V_{ex} = K_{VCO}s^2/(s^2 + 2\zeta\omega_ns + \omega_n^2)$，是一个二阶高通函数。
