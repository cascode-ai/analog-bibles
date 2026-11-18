$x_n = -x_p = \left[\dfrac{3\varepsilon_{Si}(\phi_0 - v_D)}{2qa}\right]^{1/3}$，因此 $x_d = x_n - x_p = \left[\dfrac{12\varepsilon_{Si}(\phi_0 - v_D)}{qa}\right]^{1/3}$：宽度现在随 $(\phi_0 - v_D)$ 的立方根变化（结电容随 $(\phi_0 - v_D)^{-1/3}$ 变化，缓变系数 $m = 1/3$）。

- 耗尽区内的电荷密度为 $\rho(x) = qax$，是 $x$ 的奇函数；电荷中性条件 $\int_{x_p}^{x_n} qax\,dx = 0$ 给出 $x_n^2 = x_p^2$，即 $x_p = -x_n$（对称）。
- 由高斯定律 $dE/dx = qax/\varepsilon_{Si}$ 及 $E(\pm x_n) = 0$ 得 $E(x) = \frac{qa}{2\varepsilon_{Si}}(x^2 - x_n^2)$，在 $x = 0$ 处幅值最大，为 $E_0 = \frac{qa x_n^2}{2\varepsilon_{Si}}$。
- 耗尽区两端的电势差：$\phi_0 - v_D = -\int_{-x_n}^{x_n}E\,dx = \frac{qa}{2\varepsilon_{Si}}\cdot\frac{4}{3}x_n^3 = \frac{2qa\,x_n^3}{3\varepsilon_{Si}}$，由此得出结果。
