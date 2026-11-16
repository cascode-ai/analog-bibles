令 $G_m = g_{m1} + g_{m2}$（精确结果；输出电阻 $r_{O1}\|r_{O2}$ 被约去）：
$\overline{V_{n,in}^2} = 4kTR_1 + \dfrac{4kT}{R_2}\left[\dfrac{R_2(1 + G_mR_1)}{G_mR_2 - 1}\right]^2 + 4kT\gamma G_m\left[\dfrac{R_1+R_2}{G_mR_2 - 1}\right]^2$，
当 $G_mR_2 \gg 1$ 时：$\overline{V_{n,in}^2} \approx 4kTR_1 + \dfrac{4kT}{R_2}\left(R_1 + \dfrac{1}{G_m}\right)^2 + \dfrac{4kT\gamma}{G_m}\left(1 + \dfrac{R_1}{R_2}\right)^2$。

- $R_1$ 的噪声电压与 $V_{in}$ 串联：直接贡献 $4kTR_1$。
- $R_2$ 的噪声电流（接在栅极节点与输出端之间）按其到输出端的传输系数与信号增益之比折算到输入端：$R_2(1 + G_mR_1)/(G_mR_2 - 1)$（≈ $R_1 + 1/G_m$）。
- 晶体管在输出端的噪声电流 $4kT\gamma G_m$ 经 $(R_1+R_2)/(G_mR_2 - 1)$ 折算到输入端，即反相器本身的输入噪声 $4kT\gamma/G_m$ 被噪声增益（noise gain）$(1 + R_1/R_2)^2$ 放大。
- 示例：$R_1$ = 1 kΩ，$R_2$ = 10 kΩ，$G_m$ ≈ 10.8 mS，300 K：$1.66\times10^{-17} + 2.0\times10^{-18} + 1.3\times10^{-18} \approx 2.0\times 10^{-17}\ \mathrm{V^2/Hz}$（4.5 nV/√Hz），以 $R_1$ 的噪声为主。
