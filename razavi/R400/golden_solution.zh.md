令 $G_m = g_{m1} + g_{m2}$，$R = r_{O1}\|r_{O2}$，则反相器（inverter）的增益为 $-G_mR$，且：
$Z_{in} = \dfrac{1}{sC_1} + \dfrac{R}{1 + G_mR} + \dfrac{1}{sC_2(1 + G_mR)}$，即 $C_1$ 与阻值为 $R/(1+G_mR) \approx 1/G_m$ 的电阻以及密勒电容（Miller capacitance）$(1 + G_mR)C_2$ 三者串联。
$Z_{out} = \dfrac{R(C_1+C_2)}{C_1 + C_2 + C_2R(G_m + sC_1)} = R\ \Big\|\ \dfrac{C_1+C_2}{G_mC_2}\ \Big\|\ \dfrac{1}{sC_1C_2/(C_1+C_2)}$；低频时为 $\dfrac{R}{1 + G_mRC_2/(C_1+C_2)}$。

- 栅极节点 G 处的阻抗：$v_{out} = v_G(sC_2 - G_m)/(1/R + sC_2)$，流过 $C_2$ 的电流为 $sC_2(v_G - v_{out}) = sC_2v_G(1 + G_mR)/(1 + sRC_2)$ → $Z_G = (1 + sRC_2)/[sC_2(1 + G_mR)]$；再加上 $1/(sC_1)$。
- 求 $Z_{out}$（$V_{in}$ = 0）：$v_G = v_XC_2/(C_1+C_2)$，$I_X = G_mv_G + v_X/R + sv_XC_1C_2/(C_1+C_2)$。从反馈的角度看：开环电阻为 $R$，环路增益（loop gain）为 $G_mR\,C_2/(C_1+C_2)$。
