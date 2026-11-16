输出端的三次谐波：$|c| \approx \dfrac{|\alpha_3|V_m^3}{4(1+\beta\alpha_1)^4}$；相对于基波（fundamental）$a \approx \alpha_1V_m/(1+\beta\alpha_1)$：$\dfrac{|c|}{a} \approx \dfrac{|\alpha_3|V_m^2}{4\alpha_1}\cdot\dfrac{1}{(1+\beta\alpha_1)^3}$，即比相同输入幅度下的开环值低 $(1+\beta\alpha_1)^3$ 倍。
- 设 $y \approx a\cos\omega t + c\cos3\omega t$。则 $y_S = (V_m - \beta a)\cos\omega t - \beta c\cos3\omega t$。
- $y = \alpha_1y_S + \alpha_3y_S^3$；利用 $\cos^3\omega t = (3\cos\omega t + \cos3\omega t)/4$，$\cos3\omega t$ 的系数为 $-\alpha_1\beta c + \tfrac14\alpha_3(V_m-\beta a)^3$（忽略与小量 $c$ 的交叉项）。令其等于 $c$：$c(1+\alpha_1\beta) = \tfrac14\alpha_3(V_m-\beta a)^3$。
- 由 $a \approx \alpha_1V_m/(1+\beta\alpha_1)$，得 $V_m - \beta a = V_m/(1+\beta\alpha_1)$，因此 $c = \dfrac{\alpha_3V_m^3}{4(1+\beta\alpha_1)^4}$。（环路方程的数值解证实了这一点。）
- 若在相同的输出幅度下比较，相对三次谐波降低 $1+\beta\alpha_1$ 倍。
