$A_v = -g_{m1}\left\{r_{O1}\,\big\|\,\left[R_1 + r_{O3} + (g_{m3} + g_{mb3})r_{O3}R_1\right]\right\} \approx -g_{m1}\{r_{O1}\|[(g_{m3} + g_{mb3})r_{O3}R_1]\}$。
- $M_3$（栅极接固定电压 $V_{b2}$）是一个由 $R_1$ 构成源极负反馈（source degeneration）的 PMOS 电流源（current source）；其输出电阻（output resistance）为 $R_{out3} = R_1 + r_{O3}[1 + (g_{m3} + g_{mb3})R_1]$。这里存在体效应（body effect），因为其源极电位低于接在 $V_{DD}$ 上的衬底。
- $P$ 是虚地（virtual ground），因此半边电路（half circuit）增益为 $-g_{m1}(r_{O1}\|R_{out3})$；这就是差模增益。
