$A = A_0/(1 + A_0)$，$\omega_{pB} \approx (1 + A_0)\omega_{p1}$，$\omega_{pA} \approx \omega_{p2}$（≈ $\omega_z$）。对于输入阶跃 $V_0u(t)$：
$$V_{out}(t) = AV_0\left[1 - K_Ae^{-\omega_{pA}t} - K_Be^{-\omega_{pB}t}\right],\quad K_A = \frac{1 - \omega_{pA}/\omega_z}{1 - \omega_{pA}/\omega_{pB}},\ K_B = \frac{1 - \omega_{pB}/\omega_z}{1 - \omega_{pB}/\omega_{pA}},$$
其中 $K_A + K_B = 1$（因此 $V_{out}(0^+) = 0$）。当 $\omega_{pB} \gg \omega_{pA}, \omega_z$ 时：$V_{out}(t) \approx AV_0\left[1 - \dfrac{\omega_{pA}}{\omega_z}e^{-(1 + A_0)\omega_{p1}t} - \left(1 - \dfrac{\omega_{pA}}{\omega_z}\right)e^{-\omega_{pA}t}\right]$。
- 将分母除以 $1 + A_0$，得到 $b/(1 + A_0)$，其中 $b = 1/\omega_{p1} + 1/\omega_{p2} + A_0/\omega_z \approx 1/\omega_{p1} + (1 + A_0)/\omega_{p2}$。由于 $\omega_{p2} \ll (1 + A_0)\omega_{p1}$，第二项占主导，$\omega_{pA} = (1 + A_0)/b \approx \omega_{p2}$。此外 $\omega_{pB} = b\,\omega_{p1}\omega_{p2} \approx (1 + A_0)\omega_{p1}$，两个极点相距很远。
- 对 $H_{closed}(s)V_0/s$ 作部分分式展开，即得上述留数。
- 精确对消（$\omega_z = \omega_{p2}$，从而 $\omega_{pA} = \omega_z$）：$K_A = 0$，$K_B = 1$，$V_{out} = AV_0[1 - e^{-(1 + A_0)\omega_{p1}t}]$，只有一个时间常数，没有过冲。
