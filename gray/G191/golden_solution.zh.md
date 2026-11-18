$R_1 \approx \dfrac{1}{g_m}$（精确值为 $1/(g_m - 1/R_S)$），$\quad R_2 = R_S\,\Big\|\,\dfrac{1}{g_{mb}}$，$\quad L \approx \dfrac{R_SC_{gs}}{g_m}$（精确值为 $R_SC_{gs}/(g_m - 1/R_S)$）。

推导：在源极加 $v_x$，栅极经 $R_S$ 接地。栅极电压为 $v_g = v_x\,sC_{gs}R_S/(1 + sC_{gs}R_S)$，因此 $v_{gs} = -v_x/(1 + sC_{gs}R_S)$。流入源极节点的电流为 $i_x = g_{mb}v_x - (g_m + sC_{gs})v_{gs} = v_x\left[g_{mb} + \dfrac{g_m + sC_{gs}}{1 + sR_SC_{gs}}\right]$。将 $\dfrac{g_m + sC_{gs}}{1 + sR_SC_{gs}} = \dfrac{1}{R_S} + \dfrac{g_m - 1/R_S}{1 + sR_SC_{gs}}$ 代入，得
$Y_o = \left(g_{mb} + \dfrac{1}{R_S}\right) + \dfrac{1}{\dfrac{1}{g_m - 1/R_S} + s\dfrac{R_SC_{gs}}{g_m - 1/R_S}}$，
即电导 $1/R_2 = g_{mb} + 1/R_S$ 与一个 $R_1$–$L$ 串联支路并联。验证：$z_o(0) = 1/(g_m + g_{mb})$，$z_o(\infty) = R_S\|(1/g_{mb})$。$g_{mb}$ 受控源相当于从输出到地的一个电阻 $1/g_{mb}$，只改变 $R_2$。
