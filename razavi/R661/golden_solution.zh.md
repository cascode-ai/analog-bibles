闭环特征方程为 $s^2 + \dfrac{I_PK_{VCO}R_P}{2\pi}s + \dfrac{I_PK_{VCO}}{2\pi C_P} = 0$。令 $K = I_PK_{VCO}/2\pi$，则 $s^2 + KR_Ps + K/C_P = 0$，其中 $\omega_n^2 = K/C_P$，$\zeta = \frac{R_P}{2}\sqrt{KC_P}$。
- K = 0：两个极点都在原点。
- 复数极点（$KR_P^2C_P < 4$，ζ < 1）：$s = \sigma \pm j\omega$，其中 $\sigma = -KR_P/2$，$\omega^2 = K/C_P - K^2R_P^2/4$。利用 $K = -2\sigma/R_P$ 消去 K，得 $\omega^2 = -\dfrac{2\sigma}{R_PC_P} - \sigma^2$，即 $\left(\sigma + \dfrac{1}{R_PC_P}\right)^2 + \omega^2 = \left(\dfrac{1}{R_PC_P}\right)^2$。这是一个圆心在 $-1/(R_PC_P)$、半径为 $1/(R_PC_P)$ 且经过原点的圆。随着 K 增大，σ 从 0 开始向左移动，因此极点垂直离开原点，并沿该圆移动。
- ζ = 1（$K = 4/(R_P^2C_P)$）：在 $s = -KR_P/2 = -2/(R_PC_P)$ 处出现二重极点，即圆的最左端点。
- K 更大时：两个实数极点 $s = \tfrac12\left(-KR_P \pm \sqrt{K^2R_P^2 - 4K/C_P}\right)$，其积为 $K/C_P$，其和为 $-KR_P$。当 K → ∞ 时，一个极点趋于 $-(K/C_P)/(KR_P) = -1/(R_PC_P)$（环路零点），另一个趋于 $-KR_P \to -\infty$。
- 对于复数极点，$|s| = \omega_n$，$\cos\varphi = KR_P/(2\omega_n) = \zeta$。因此随着 $I_PK_{VCO}$ 增大，极点向实轴靠拢（阻尼增大）。
