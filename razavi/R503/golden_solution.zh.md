在低频时 $\overline{I_{n,in}^2} \approx 4kT\gamma g_{m3} \approx 1.8\times10^{-24}\ \mathrm{A^2/Hz}$（≈ 1.34 pA/√Hz），由反馈器件 $M_3$ 决定。
- $M_3$（$g_{m3} = \sqrt{2(134\ \mu)(10)(10\ \mu\mathrm{A})}$ = 0.164 mS）：其漏极噪声电流直接流入输入节点，与输入电流完全一样，因此贡献 $4kT\gamma g_{m3}$ = 1.81×10⁻²⁴ A²/Hz。
- $M_1$：其折合到栅极的噪声电压 $4kT\gamma/g_{m1}$（$g_{m1}$ = 5.18 mS）与栅极串联。由于输入节点的导纳（不含反馈）为 $Y_A = 1/r_{O3} + j\omega C_A$，它等效于输入电流 $V_n Y_A$：$4kT\gamma|1/r_{O3} + j\omega C_A|^2/g_{m1}$。在低频时它为 $4kT\gamma/(g_{m1}r_{O3}^2)$ ≈ 2×10⁻³⁰ A²/Hz（可以忽略）。它随 ω² 增大，只有在 ω ≈ $\sqrt{g_{m1}g_{m3}}/C_A$ 以上才赶上 $M_3$ 项（对于 0.1–1 pF 的 $C_A$，≈ 10⁹–10¹⁰ rad/s）。
- $M_2$：折合到输入节点时还要再除以 $(g_{m1}r_{O1})^2$ ≈ 2700，因此可以忽略。
- 总噪声：低频时 $\overline{I_{n,in}^2} \approx 4kT\gamma\left[g_{m3} + \dfrac{|1/r_{O3} + j\omega C_A|^2}{g_{m1}}\left(1 + \dfrac{g_{m1}}{g_{m2}(g_{m1}r_{O1})^2}\right)\right] \approx \tfrac{16}{3}kT\,g_{m3}$。（跨阻 ≈ $1/g_{m3}$ ≈ 6.1 kΩ，因此 $M_3$ 相当于一个 6.1 kΩ 的反馈电阻，只是噪声按 γ 缩放。）
