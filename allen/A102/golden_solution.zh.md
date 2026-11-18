$r_{out} = R \,\Big\|\, \dfrac{R_1 + R_2}{1 + g_mR_2 + g_{ds}(R_1 + R_2)} \;\approx\; \dfrac{1}{g_m}\left(1 + \dfrac{R_1}{R_2}\right) = \dfrac{1}{g_m}\dfrac{V_{REF}}{V_{GS}}$

- 施加 $v_{out}$。栅极信号为 $v_g = v_{out}R_2/(R_1 + R_2)$（栅极无电流）。
- 吸取的电流：$g_mv_g + g_{ds}v_{out} + v_{out}/(R_1 + R_2) + v_{out}/R$，由此得到上面的表达式。
- 当 $g_mR_2 \gg 1$ 且 $r_{ds}$ 很大时：$r_{out} \approx (R_1 + R_2)/(g_mR_2) = (1/g_m)(1 + R_1/R_2)$，即二极管电阻 $1/g_m$ 乘以 $V_{REF}/V_{GS}$；并联的 $R$ 通常可以忽略。
