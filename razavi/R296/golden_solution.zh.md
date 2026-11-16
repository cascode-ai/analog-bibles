采用密勒近似（Miller approximation），把每个节点与一个极点相关联；其中从 $M_1$ 的栅极到节点 X（$M_1$ 的漏极）的低频增益为 $A_1 = -g_{m1}r_{O1}$，从 X 到输出端的低频增益为 $A_2 = -g_{m2}r_{O2}$：
$$\omega_{in} \approx \frac{1}{R_S[C_{GS1} + (1 + g_{m1}r_{O1})C_{GD1}]}$$
$$\omega_X \approx \frac{1}{r_{O1}[C_{GD1}(1 + \tfrac{1}{g_{m1}r_{O1}}) + C_{DB1} + C_{GS2} + (1 + g_{m2}r_{O2})C_{GD2}]}$$
$$\omega_{out} \approx \frac{1}{r_{O2}[C_{DB2} + C_{GD2}(1 + \tfrac{1}{g_{m2}r_{O2}})]} \approx \frac{1}{r_{O2}(C_{DB2} + C_{GD2})}$$
- 各节点电阻：输入节点为 $R_S$（栅极不吸取电流）；X 点为 $r_{O1}$，因为 $I_1$ 是理想的且 $M_2$ 的栅极开路；输出节点为 $r_{O2}$。
- 两管的源极都接地，因此 $C_{SB}$ 不起作用。
- 注意：两级的增益都很大（$g_mr_O$），因此密勒估算比较粗略。节点 X 具有很大的密勒电容 $(1 + g_{m2}r_{O2})C_{GD2}$ 和电阻 $r_{O1}$，通常对应主极点（dominant pole）；此时 $C_{GD2}$ 使 X 点极点与输出极点相互分离，因此实际的输出极点位于 $g_{m2}C_{GD2}/[C_XC_{out} + (C_X + C_{out})C_{GD2}]$ 附近，而不是 $1/[r_{O2}(C_{DB2} + C_{GD2})]$（$C_X$、$C_{out}$ 分别为 X 点和输出端的对地电容）。电路还有位于 $g_{m1}/C_{GD1}$ 和 $g_{m2}/C_{GD2}$ 的右半平面零点（right-half-plane zero）。
