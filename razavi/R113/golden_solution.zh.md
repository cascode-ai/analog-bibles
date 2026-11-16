$A_v = \dfrac{g_{m1}r_{O1}r_{O2}(g_{m2}R_D - 1)}{R_D + r_{O1} + r_{O2} + g_{m2}r_{O1}r_{O2}}$；当 $r_O \to \infty$ 时，$A_v \approx g_{m1}(R_D - 1/g_{m2})$，若 $g_{m2}R_D > 1$，则增益为正（同相）。

- 节点 $A$（$M_1$ 的漏极、$M_2$ 的栅极、$R_D$ 的下端）；$M_2$（PMOS，源极接 $V_{DD}$）驱动输出端。
- 在 $A$ 点列基尔霍夫电流定律（KCL）：$(v_{out} - v_A)/R_D = g_{m1}v_{in} + v_A/r_{O1}$。在输出端列 KCL：$-g_{m2}v_A - v_{out}/r_{O2} = (v_{out} - v_A)/R_D$。
- 直观理解（λ = 0）：同一电流 $g_{m1}v_{in}$ 流过 $M_2$、$R_D$ 和 $M_1$；$v_A = -g_{m1}v_{in}/g_{m2}$，$v_{out} = v_A + g_{m1}v_{in}R_D$。
