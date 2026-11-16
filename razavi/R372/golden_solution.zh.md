$$\overline{V_{n,in}^2}(\omega) = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right) + \left(\frac{\omega C_X}{g_{m1}}\right)^2 4kT\left(\frac{\gamma}{g_{m2}} + \frac{1}{g_{m2}^2R_D}\right)$$

- 对 X 点应用基尔霍夫电流定律（KCL）：$-g_{m2}V_X + I_{n2} = g_{m1}V_{in} + I_{n1} + sC_XV_X$，因此经 $M_2$ 流向输出端的电流为 $I_2 = \dfrac{g_{m2}(g_{m1}V_{in} + I_{n1}) + sC_XI_{n2}}{g_{m2} + sC_X}$，且 $V_{out} = -R_DI_2 + R_DI_{n,RD}$。
- 信号增益：$-g_{m1}R_D\dfrac{g_{m2}}{g_{m2} + sC_X}$（高频时 $C_X$ 分走了一部分信号电流）。
- 折算到输入端：$V_{n,eq} = \dfrac{I_{n1}}{g_{m1}} + \dfrac{sC_X}{g_{m1}g_{m2}}I_{n2} - \dfrac{g_{m2} + sC_X}{g_{m1}g_{m2}}I_{n,RD}$，由此得到上式（$s = j\omega$）。
- 低频时结果与共源级（common-source stage）相同，$M_2$ 没有贡献；高频时 $M_2$ 的噪声按 $\omega^2$ 增长，$R_D$ 折算到输入端的噪声也随之上升。
