在单位增益反馈下，$H_{closed} = H_{open}/(1 + H_{open})$。分子和分母同乘以 $(1 + s/\omega_{p1})(1 + s/\omega_{p2})$：
$$H_{closed} = \frac{A_0(1 + s/\omega_z)}{(1 + s/\omega_{p1})(1 + s/\omega_{p2}) + A_0(1 + s/\omega_z)}.$$
展开 $(1 + s/\omega_{p1})(1 + s/\omega_{p2}) = 1 + s(1/\omega_{p1} + 1/\omega_{p2}) + s^2/(\omega_{p1}\omega_{p2})$，再加上 $A_0 + A_0s/\omega_z$，即得分母 $s^2/(\omega_{p1}\omega_{p2}) + (1/\omega_{p1} + 1/\omega_{p2} + A_0/\omega_z)s + A_0 + 1$。验证：当 $\omega_z = \omega_{p2}$ 时，因子 $(1 + s/\omega_{p2})$ 被约去，$H_{closed} = A_0/(1 + A_0 + s/\omega_{p1})$，只有一个位于 $(1 + A_0)\omega_{p1}$ 的极点。
