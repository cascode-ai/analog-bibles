$\overline{V_{n,out}^2} \approx 3.2\times10^{-15}\ \mathrm{V^2/Hz}$，即 ≈ 56 nV/√Hz。
- 小信号参数：$g_{m3} = g_{m4} = \sqrt{2(38.4\ \mu\mathrm{A/V^2})(100)(50\ \mu\mathrm{A})} = 0.62$ mS，$g_{m5} = 4.45g_{m4} = 2.76$ mS。$Q_1$、$Q_2$：$r = V_T/50\ \mu\mathrm{A} = 517$ Ω；$Q_3$：$r_3 = V_T/222\ \mu\mathrm{A} = 116$ Ω。
- 理想运放迫使 $v_X = v_Y$。设 $g$ 为 $M_3$/$M_4$ 由栅极驱动的共同电流，$i_3$、$i_4$ 为它们的噪声电流，$v_{R1}$ 为 $R_1$ 的噪声：$(g + i_3)r = (g + i_4)(R_1 + r) + v_{R1}$，所以 $g = [i_3r - i_4(R_1 + r) - v_{R1}]/R_1$。
- $M_5$ 流过 $Kg + i_5$（$K = 4.45$）：$v_{out} = (R_2 + r_3)(Kg + i_5) + v_{R2}$。
- $\overline{v_{out}^2} = (R_2 + r_3)^2\left[K^2(r/R_1)^2\overline{i_3^2} + K^2((R_1 + r)/R_1)^2\overline{i_4^2} + K^2\,4kT/R_1 + \overline{i_5^2}\right] + 4kTR_2$，其中 $\overline{i_{3,4}^2} = 4kT\gamma g_{m4}$，$\overline{i_5^2} = 4kT\gamma g_{m5}$。
- 各项贡献：$R_1$ 38.3，$M_4$ 37.4，$M_3$ 12.7，$M_5$ 11.7，$R_2$ 5.8 nV/√Hz；方和根（root-sum-square）≈ 56.5 nV/√Hz。（若忽略双极型晶体管的电阻，结果将 ≈ 45 nV/√Hz。）
