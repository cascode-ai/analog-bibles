$$\overline{V_{n,in}^2} = \frac{1}{(g_{m1}+g_{m2})^2}\left[\frac{g_{m1}^2K_N}{C_{ox}(WL)_1} + \frac{g_{m2}^2K_P}{C_{ox}(WL)_2}\right]\frac{1}{f}$$

- 折算到栅极的噪声源 $V_{n1}$、$V_{n2}$ 产生的输出短路电流分别为 $g_{m1}V_{n1}$ 和 $g_{m2}V_{n2}$（两者不相关，因此功率相加）。
- 输入同时驱动两个栅极，因此信号产生的短路电流为 $(g_{m1}+g_{m2})V_{in}$。噪声和信号看到的是同一个输出电阻（output resistance）$r_{O1}\|r_{O2}$，折算到输入端时它被约去。
- 两者相除即得结果；当 $g_{m1} = g_{m2}$ 时，结果变为 $\tfrac14\left[\dfrac{K_N}{C_{ox}(WL)_1} + \dfrac{K_P}{C_{ox}(WL)_2}\right]\dfrac1f$。
