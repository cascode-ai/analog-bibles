$\overline{V^2_{n,in}} \approx 8kT\cdot\tfrac23\left(\dfrac{1}{g_{m1}} + \dfrac{g_{m3}}{g_{m1}^2}\right) \approx 1.9\times10^{-17}\ \mathrm{V^2/Hz}$，即 ≈ 4.4 nV/√Hz；第二级的贡献 < 0.1%。

- 第一级：$g_{m1} = 2.81$ mS → $1/g_{m1} = 356\ \Omega$；$g_{m3} = 2(0.5\ \mathrm{mA})/0.25\ \mathrm{V} = 4$ mS → $g_{m3}/g_{m1}^2 = 506\ \Omega$。$8kT\cdot\tfrac23 = 2.21\times10^{-20}$；× 862 Ω → $1.90\times10^{-17}\ \mathrm{V^2/Hz}$ → 4.36 nV/√Hz。尾电流（tail current）管 $M_7$ 只贡献共模（common-mode）噪声。
- 第二级：$M_5$ 和 $M_6$ 的噪声折合到 $M_5$ 的栅极为 $4kT\cdot\tfrac23(g_{m5}+g_{m6})/g_{m5}^2$，取 $g_{m5} = g_{m6} = 8$ mS，得 $2.8\times10^{-18}\ \mathrm{V^2/Hz}$；除以 $A_1^2 = 18.75^2$ 后变为 $7.9\times10^{-21}$，可以忽略。
- NMOS 负载管 $M_3$/$M_4$ 的贡献大于输入对管，因为 $g_{m3} > g_{m1}$（增大 $M_3$/$M_4$ 的过驱动电压可以减小这一贡献）。
