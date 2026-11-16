相位裕度从 45° 降到约 33°，恶化约 12°。一种更快的估计是把增益交点（gain crossover）保持在原来的 $\omega_{p2}$ 处，得到约 27°（≈ 18°）。

- 输出极点按 $1/C_L$ 变化（$\omega_{p2} \approx g_{m2}/C_L$），因此它移到 $\omega_{p2}/2$。主极点位于第一级输出端，例如采用密勒补偿（Miller compensation）时就是如此，它保持不变；$|\beta H|$ 的低频渐近线 $\omega_T/\omega$ 也不变，其中 $\omega_T = \beta A_0\omega_{p1}$。
- 原设计：$|\beta H(\omega_{p2})| = (\omega_T/\omega_{p2})/\sqrt2 = 1$，因此 $\omega_T = \sqrt2\,\omega_{p2}$，$\omega_{p2}$ 处的相位为 −90° − 45°。
- 新的增益交点 $\omega_c$：由 $(\omega_T/\omega_c)/\sqrt{1 + (2\omega_c/\omega_{p2})^2} = 1$ 得 $\omega_c \approx 0.77\,\omega_{p2}$。该处的相位为 $-90° - \tan^{-1}(1.54) \approx -147°$，因此 PM ≈ 33°。
- 若改为把增益交点保持在 $\omega_{p2}$，则得到 PM = 90° − tan⁻¹2 = 26.6°。这高估了损失，因为降低的极点也会减小 $|\beta H|$，把增益交点拉低。若采用渐近线约定 $\omega_T = \omega_{p2}$，PM 从 51.8° 变为 38.7°，同样损失约 13°。
