$M_2$ 构成共源级（common-source stage），以二极管连接（diode-connected）的 $M_3$ 为负载，并以二极管连接的 $M_1$ 作为源极负反馈（source degeneration）：
$A_v = -\dfrac{g_{m2}r_{O2}R_D}{R_D + r_{O2} + R_S + g_{m2}r_{O2}R_S}$，其中 $R_D = \dfrac{1}{g_{m3}} \| r_{O3}$，$R_S = \dfrac{1}{g_{m1}} \| r_{O1}$。
当 $r_O$ 很大时：$A_v \approx -\dfrac{g_{m2}/g_{m3}}{1 + g_{m2}/g_{m1}} = -\dfrac{g_{m1}g_{m2}}{g_{m3}(g_{m1} + g_{m2})}$。

- 完全展开形式：$A_v = -g_{m2}r_{O2}r_{O3}(1 + g_{m1}r_{O1})/D$，$D = r_{O1} + r_{O2} + r_{O3} + g_{m1}r_{O1}r_{O2} + g_{m1}r_{O1}r_{O3} + g_{m2}r_{O1}r_{O2} + g_{m3}r_{O1}r_{O3} + g_{m3}r_{O2}r_{O3} + (g_{m1} + g_{m2})g_{m3}r_{O1}r_{O2}r_{O3}$。
