$R_{out} \approx \dfrac{r_{\pi10} + (r_{ds6}\|r_{ds7})}{1+\beta_F} \approx \dfrac{1}{g_{m10}} + \dfrac{r_{ds6}\|r_{ds7}}{1+\beta_F} \approx 1.15$ kΩ。

- 现在从 Q10 的基极到交流地的电阻是第二级的输出电阻 $r_{ds6}\|r_{ds7}$，而不是 ≈ $1/g_{m9}$；它在发射极处被除以 $1 + \beta_F$。
- 数值：$1/g_{m10} = 25.9\ \mathrm{mV}/0.5\ \mathrm{mA} = 51.8\ \Omega$；$r_{ds6} = 1/(0.04\times100\ \mu) = 250$ kΩ（n 沟道 M6），$r_{ds7} = 1/(0.05\times100\ \mu) = 200$ kΩ，并联为 111.1 kΩ；$111.1\ \mathrm{k}/101 = 1100\ \Omega$。$R_{out} \approx 52 + 1100 \approx 1152\ \Omega$。
- 比较：有跟随器时第二项为 $1/[g_{m9}(1+\beta_F)]$，只有几欧姆（例如 $g_{m9}$ ≈ 1.5 mS 时 ≈ 7 Ω），因此 $R_{out}$ ≈ 1/$g_{m10}$（几十欧姆）；没有跟随器时基极一侧的项占主导，$R_{out}$ 增大约 20 倍。此外，直接驱动 Q10 会使第二级带上 $r_\pi + (1+\beta_F)R_L$ 的负载，从而降低运放增益。
