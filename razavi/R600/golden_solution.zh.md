只产生二次谐波（second harmonic）：$\mathrm{THD} = \dfrac{|\alpha_2|\,x_{max}}{4(\alpha_1 + \alpha_2x_{max})} \approx \dfrac{|\alpha_2|\,x_{max}}{4\alpha_1}$。这里 THD 指谐波幅度与基波（fundamental）幅度之比；若按功率之比，则为该值的平方。
- 把输入写成 $x = A + A\cos\omega t$，其中 $A = x_{max}/2$。于是 $y = \alpha_1A + \alpha_1A\cos\omega t + \alpha_2A^2(1 + 2\cos\omega t + \cos^2\omega t)$。
- 直流分量：$\alpha_1A + \tfrac32\alpha_2A^2$；基波：$A(\alpha_1 + 2\alpha_2A) = \tfrac{x_{max}}{2}(\alpha_1 + \alpha_2x_{max})$（输入的直流偏置使其增加了 $2\alpha_2A^2$）；二次谐波：$\alpha_2A^2/2 = \alpha_2x_{max}^2/8$；没有更高次谐波。
- 比值：$\dfrac{\alpha_2x_{max}^2/8}{(x_{max}/2)(\alpha_1+\alpha_2x_{max})} = \dfrac{\alpha_2x_{max}}{4(\alpha_1+\alpha_2x_{max})}$。它等于同一特性在 $[0, x_{max}]$ 上的端点非线性（end-point nonlinearity）。
