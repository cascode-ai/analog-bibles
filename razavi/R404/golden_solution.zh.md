它等于运算放大器（op amp）本身的输入参考噪声（电容反馈网络没有噪声，也不改变它）：
$\overline{V_{n,in}^2} = \dfrac{8kT\gamma}{g_{m1}}\left(1 + \dfrac{g_{m3}}{g_{m1}}\right) + \dfrac{2K_N}{C_{ox}(WL)_1f} + \dfrac{2K_P}{C_{ox}(WL)_3f}\left(\dfrac{g_{m3}}{g_{m1}}\right)^2$（对长沟道器件，γ = 2/3），与 $C_1$ 和 $C_2$ 无关。

- 运放：$M_1$、$M_2$ 直接贡献 $2\cdot 4kT\gamma/g_{m1}$；$M_3$、$M_4$ 的噪声电流（各为 $4kT\gamma g_{m3}$）像信号电流一样到达输出端，除以 $g_{m1}^2$ 即折算到输入端；闪烁噪声的规律相同。尾电流源（tail current source）的噪声是共模（common-mode）噪声，可以忽略。
- 闭环：$V_{out} = A_0(V_{in} + V_n - \beta V_{out})$ → $V_{out} = (V_{in} + V_n)A_0/(1 + \beta A_0)$，因此电路的输入参考噪声就是 $V_n$；输出噪声为 $V_n$ 乘以闭环增益（closed-loop gain）≈ $1 + C_2/C_1$。
- 示例：取 $(W/L)_{1,2} = 50/0.5$、$(W/L)_{3,4} = 100/0.5$ 和 $I_{SS} = 1$ mA（$g_{m1} = 3.66$ mS，$g_{m3} = 2.77$ mS），在 300 K 下热噪声部分 ≈ $1.06\times 10^{-17}\ \mathrm{V^2/Hz}$（3.3 nV/√Hz）。
