每个半边电路（half circuit）的低频增益以及差分低频增益均为 $g_{m1}KR_D = 2g_{m1}/g_{mD} \approx 1.41$。
两个极点：电流镜（current mirror）节点 X ≈ $2.1\times10^9$ rad/s（≈ 0.33 GHz），输出节点 ≈ $1.0\times10^{10}$ rad/s（≈ 1.6 GHz）。精确的双节点求解（分母为 $(g_{m3} + sC_X)(g_{mD} + sC_Y) + sC_{GD5}(g_{m5} - sC_{GD5})$，其中 $C_X = 129.9$ fF，$C_Y = 160.7$ fF，二者都包含 $C_{GD5}$）给出 $2.09\times10^9$ rad/s（0.333 GHz）和 $1.04\times10^{10}$ rad/s（1.66 GHz）。
零点：右半平面零点（right-half-plane zero）位于 ≈ $g_{m5}/C_{GD5} \approx 9.2\times10^{10}$ rad/s（≈ 15 GHz）和 ≈ $g_{m1}/C_{GD1} \approx 5.8\times10^{10}$ rad/s（≈ 9 GHz），都离得很远。

推导。半边电路为 $M_1$ → 节点 X 处的二极管 $M_3$ → $M_5$ → 带 $R_D$ 的输出端，尾节点为虚地（virtual ground）：
- 电流：$M_1$、$M_3$ 中为 50 µA；$M_5$ 和二极管 NFET 中为 100 µA。
- $g_{m1} = \sqrt{2(134\ \mu)(100)(50\ \mu)} = 1.16$ mS；$g_{m3} = \sqrt{2(38.4\ \mu)(20)(50\ \mu)} = 0.277$ mS（$1/g_{m3} = 3.6\ \mathrm{k\Omega}$）；$g_{m5} = 0.554$ mS；$g_{mD} = \sqrt{2(134\ \mu)(100)(100\ \mu)} = 1.64$ mS，因此 $R_D = 1/g_{mD} = 611\ \Omega$；$g_{m5}R_D = 0.34$。
- 电容（fF）：$C_{GS3} = 15.8$，$C_{DB3} = 14.2$；$C_{GS5} = 31.6$，$C_{GD5} = 6.0$，$C_{DB5} = 28.3$；$C_{GD1} = 20.0$，$C_{DB1} = 42.4$；二极管 NFET 的 $C_{GS} = 84.0$，$C_{DB} = 42.4$（其 $C_{GD}$ 被短路）。
- 节点 X：$R = 1/g_{m3}$，$C_X = C_{GS3} + C_{GS5} + C_{DB3} + C_{DB1} + C_{GD1} + (1 + g_{m5}R_D)C_{GD5} \approx 132$ fF（$C_{GD1}$ 接到理想输入源，即交流地）；$\omega_X = g_{m3}/C_X \approx 2.1\times10^9$ rad/s。
- 输出端：$R = 1/g_{mD}$，$C_{out} = C_{DB5} + C_{GD5} + C_{GS,D} + C_{DB,D} \approx 161$ fF；$\omega_{out} \approx 1.0\times10^{10}$ rad/s。
- $\omega_X$ 是主极点（dominant pole），即“电流镜极点”，因为 $1/g_{m3}$ 很大；$M_5$ 的增益很低（0.34），使 $C_{GD5}$ 的密勒效应（Miller effect）很小。
