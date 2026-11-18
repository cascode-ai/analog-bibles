工作点：$\gamma = 0.0946\ \mathrm{V^{1/2}}$，$V_t = 0.646$ V，$V_{ov} = 0.354$ V，处于有源区（active region，$V_{DS} > V_{ov}$），$I_D \approx 121$ µA（计入 $1+\lambda V_{DS}$ 时为 127 µA）。

元件：$g_m \approx 0.72$ mA/V（不计 $1+\lambda V_{DS}$ 因子时为 0.686 mA/V），$g_{mb} \approx 27$ µA/V（≈ 26），$r_o \approx 343$ kΩ（若 $I_D$ 计入沟道长度调制因子则 ≈ 328 kΩ），$C_{gs} \approx 30.8$ fF，$C_{gd} = 2$ fF，$C_{gb} = 5$ fF，$C_{sb} \approx 12.8$ fF，$C_{db} \approx 8.7$ fF。

电路：G–S 之间接 $C_{gs}$，G–D 之间接 $C_{gd}$，G–B 之间接 $C_{gb}$；D 到 S 之间接电流源 $g_mv_{gs}$ 和 $g_{mb}v_{bs}$；D–S 之间接 $r_o$；S–B 之间接 $C_{sb}$；D–B 之间接 $C_{db}$。

- $C_{ox} = 4.31$ fF/µm²；$\gamma = \sqrt{2q\epsilon_{Si}N_A}/C_{ox} = 0.0946$；$V_t = 0.6 + 0.0946(\sqrt{1.6} - \sqrt{0.6}) = 0.646$ V。
- $I_D = \tfrac12(194\ \mu)(10)(0.354)^2 = 121.3$ µA；$g_m = k'(W/L)V_{ov}(1+\lambda V_{DS}) = 1.94\ \mathrm{mA/V^2}\times0.354\times1.048 = 0.719$ mA/V。
- $\chi = \gamma/(2\sqrt{2\phi_f+V_{SB}}) = 0.0946/(2\times1.265) = 0.0374$；$g_{mb} = \chi g_m = 26.9$ µA/V。
- $r_o = 1/(\lambda I_D) = 1/(0.024\times121.3\ \mu\mathrm{A}) = 343$ kΩ。
- $C_{gs} = \tfrac23WLC_{ox} + C_{ol} = \tfrac23(10)(1)(4.31) + 2 = 28.8 + 2 = 30.8$ fF；$C_{gd}$ 只有交叠电容（有源区）= 2 fF。
- $C_{sb} = 20/\sqrt{1 + 1/0.7} = 12.8$ fF；$V_{DB} = V_{DS} + V_{SB} = 3$ V → $C_{db} = 20/\sqrt{1+3/0.7} = 8.7$ fF。
