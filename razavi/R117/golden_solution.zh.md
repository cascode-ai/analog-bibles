$M_2$ 构成源极跟随器（source follower），其源极接二极管连接（diode-connected）的负载 $M_1$，漏极接二极管连接的 $M_3$：
$A_v = \dfrac{g_{m2}r_{O2}R_S}{r_{O2} + R_D + R_S + g_{m2}r_{O2}R_S}$，其中 $R_S = \dfrac{1}{g_{m1}} \| r_{O1}$，$R_D = \dfrac{1}{g_{m3}} \| r_{O3}$。
当 $r_O$ 很大时：$A_v \approx \dfrac{g_{m2}}{g_{m1} + g_{m2}}$。

- 流过 $M_2$ 的电流：$i = g_{m2}(v_{in} - v_{out}) + (v_D - v_{out})/r_{O2}$，$v_D = -iR_D$，$v_{out} = iR_S$。
- 完全展开形式：$A_v = g_{m2}r_{O1}r_{O2}(1 + g_{m3}r_{O3})/D$，其中的 $D$ 与输出取自漏极时相同。
