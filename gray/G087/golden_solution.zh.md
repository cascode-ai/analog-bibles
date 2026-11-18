$R_o \approx 158$ kΩ，$v_o/v_i \approx +144$。

- $I_D = 50$ µA；$g_{m1} = 0.913$ mS；$g_{m4} = \sqrt{2k'_p(100/0.64)(50\ \mu)} = 0.948$ mS；$r_{o2} = 190$ kΩ，$r_{o4} = 320$ kΩ。
- 带源极负反馈（source degeneration）的负载管：$R_{o4} = r_{o4}(1 + g_{m4}R_S) + R_S = 320\ \mathrm{k}(1 + 1.90) + 2\ \mathrm{k} \approx 929$ kΩ。
- $R_o = r_{o2}\|R_{o4} = 190\|929 \approx 158$ kΩ（完整小信号求解：159 kΩ）。
- $v_o/v_i = g_{m1}R_o \approx 0.913\ \mathrm{mS}\times158\ \mathrm{k\Omega} \approx 144$（不加源极电阻时为 109）。
