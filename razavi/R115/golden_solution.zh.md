$A_v = \dfrac{(1 + g_{m1}r_{O1})R_L}{r_{O1} + R_L}$，其中 $R_L = r_{O2} + r_{O3} + g_{m2}r_{O2}r_{O3}$ 为 PMOS 共源共栅（cascode）负载的电阻；由于 $R_L \gg r_{O1}$，$A_v \approx 1 + g_{m1}r_{O1}$（同相）。

- $M_1$ 是一个 NMOS 共栅级（common-gate stage）：栅极接 $V_{b1}$，源极由 $v_{in}$ 驱动，漏极接输出端；$M_2$–$M_3$ 构成 PMOS 共源共栅电流源（current source），其输出电阻（output resistance）为 $R_L$。
- 信号源内阻为零，在输出端列基尔霍夫电流定律（KCL）方程：$(v_{out} - v_{in})/r_{O1} - g_{m1}v_{in} + v_{out}/R_L = 0$ → $v_{out}(1/R_L + 1/r_{O1}) = v_{in}(g_{m1} + 1/r_{O1})$。
