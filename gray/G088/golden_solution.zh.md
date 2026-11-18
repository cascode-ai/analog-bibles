$R_o \approx 25$ MΩ，$v_o/v_i \approx +2.3\times10^4$。

- 每个晶体管流过 50 µA。n 沟道：$g_m = 0.913$ mS，$r_o = 190$ kΩ；p 沟道：$g_m = 0.948$ mS，$r_o = 320$ kΩ。
- 向下看进 $M_4$（$M_2$ 上的共源共栅管）：$R_{down} \approx r_{o4}(1 + g_{m4}r_{o2}) + r_{o2} \approx 33$ MΩ。（$M_2$ 的源极看到 $1/g_{m1}$，使其等效电阻加倍，但流入 $M_1$ 源极的电流被镜像回输出端；两种效应相互抵消，与简单有源负载级的情况相同。）
- 向上看进 $M_6$（$M_8$ 上的共源共栅管；$M_5$–$M_8$ 构成共源共栅电流镜）：$R_{up} \approx r_{o6}(1 + g_{m6}r_{o8}) + r_{o8} \approx 98$ MΩ。
- $R_o = R_{down}\|R_{up} \approx 24.9$ MΩ；$v_o/v_i = g_{m1}R_o \approx 0.913\ \mathrm{mS}\times24.9\ \mathrm{M\Omega} \approx 2.27\times10^4$（完整小信号求解得 $2.26\times10^4$）。
