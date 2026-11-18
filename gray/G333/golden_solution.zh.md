$|\mathscr{R}|$ 与相位：1 kHz：241，−0.05°；100 kHz：241，−4.6°；10 MHz：29.9，−89.9°；1 GHz：0.050，−110°。

小信号参数：$V_{ov} = \sqrt{2 \times 0.5\text{ mA}/(194\text{ μA/V}^2 \times 83.3)} = 0.249$ V，$g_m = 2I_D/V_{ov} = 4.02$ mA/V；$\lambda = 0.02/0.6 = 0.0333$ V⁻¹，$r_o = 1/(\lambda I_D) = 60$ kΩ；$C_{gs} = \tfrac23 \times 50 \times 0.6 \times 4.32 + 17.5 = 104$ fF；$C_{gd} = 17.5$ fF。

回归比：在 $g_m$ 受控源处断开环路（在漏极注入 $g_mv_t$，求返回的 $v_{gs}$）。电流源输入相当于开路，因此
$\mathscr{R}(s) = g_m\,Z_d(s)\,\dfrac{1 + sR_FC_{gd}}{1 + sR_F(C_{gs} + C_{gd})}$，其中 $Z_d = r_o \,\|\, \dfrac{1}{sC_L} \,\|\, \left(Z_F + \dfrac{1}{sC_{gs}}\right)$，$Z_F = R_F \| \dfrac{1}{sC_{gd}}$，$R_F = 20$ kΩ，$C_L$ = 2 pF。
- 低频：$\mathscr{R}_0 = g_mr_o = 241$（47.7 dB）。
- 极点位于 ≈ 1.26 MHz（$≈ 1/[2\pi r_o(C_L + \dots)]$）和 ≈ 68.5 MHz（主要由 $R_F$ 与 $C_{gs}$ 决定，并受 $C_L$ 影响），另有一个左半平面零点（left-half-plane zero）位于 $1/(2\pi R_FC_{gd})$ ≈ 455 MHz。
- 计算结果：1 kHz：241∠−0.05°；100 kHz：240.6∠−4.6°；10 MHz：29.9∠−89.9°；1 GHz：0.050∠−110.5°。
