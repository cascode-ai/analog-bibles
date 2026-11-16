二极管连接（diode-connected）的 $M_1$ 始终处于饱和区（saturation region），对 $C_1$ 的放电越来越慢：由于平方律（square law），$V_X$ 从 3 V 按双曲线规律衰减，趋向 $V_{TH} = 0.7$ V 但永远达不到；$I_X$ 从 $\tfrac12\beta(2.3)^2 = 2.65\beta$ 衰减到零。
- $C_1\,dV_X/dt = -\tfrac12\beta(V_X - 0.7)^2$。令 $u = V_X - 0.7$，得 $1/u = 1/u_0 + \beta t/(2C_1)$，因此 $V_X(t) = 0.7 + \dfrac{2.3}{1 + 2.3\beta t/(2C_1)}$ V，$I_X(t) = \tfrac12\beta(V_X - 0.7)^2 = \dfrac{2.65\beta}{[1 + 2.3\beta t/(2C_1)]^2}$。
- 这种趋近比指数衰减慢（$\propto 1/t$）；实际上，亚阈值（subthreshold）导电会继续使 $V_X$ 缓慢降到 0.7 V 以下。
