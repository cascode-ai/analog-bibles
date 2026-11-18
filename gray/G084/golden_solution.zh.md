$v_o/v_i \approx -24$（取 $r_o = 1/(\lambda I_D)$ 时为 −24.4；若忽略各 $r_o$ 则为 −29）。

- $M_2$：$V_{SB2} = 1$ V → $V_{t2} = -1 + 0.28(\sqrt{1.66} - \sqrt{0.66}) = -0.867$ V。由于 $V_{GS2} = 0$，$V_{ov2} = 0.867$ V；$V_{DS2} = 2$ V > $V_{ov2}$，故 $M_2$ 饱和：$I_D = \tfrac12(194\ \mu)(10/0.82)(0.867)^2 \approx 0.89$ mA（计入因子 $1+\lambda V_{DS2}$ 时 ≈ 0.93 mA）。
- $M_1$：$V_{ov1} = \sqrt{2I_D/(k'\cdot121.95)} = 0.274$ V < $V_{DS1} = 1$ V（饱和）；$g_{m1} = 2I_D/V_{ov1} = 6.49$ mS。
- $g_{m2} = 2I_D/V_{ov2} = 2.05$ mS，$\chi = \gamma/(2\sqrt{2\phi_f + V_{SB}}) = 0.109$，$g_{mb2} = \chi g_{m2} = 0.223$ mS（$1/g_{mb2} = 4.48$ kΩ）。由于 $v_{gs2} = 0$，$g_{m2}$ 不会对输出构成负载；体跨导（body transconductance）相当于一个从输出端接地的电阻 $1/g_{mb2}$。
- $r_{o1} = r_{o2} = 1/(\lambda I_D) = 46$ kΩ。
- $v_o/v_i = -g_{m1}\,(r_{o1}\|r_{o2}\|1/g_{mb2}) = -6.49\ \mathrm{mS}\times3.75\ \mathrm{k\Omega} \approx -24.4$。
