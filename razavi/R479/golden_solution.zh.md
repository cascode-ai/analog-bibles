PM ≈ 55°，其中环路增益（loop gain）为 10，增益交点（gain crossover）≈ 7.7×10⁹ rad/s ≈ 1.23 GHz。
- 在不吸取电流的 $M_2$ 栅极处断开环路：在该处施加 $V_t$，求返回到 X 的电压。
- 源极跟随器（source follower）：$g_{m2}(V_t - V_Y) = sC_YV_Y + (V_Y - V_A)/R_F$，其中 $V_A = V_Y/(1 + sR_FC_A)$。共源级（common-source stage）：$V_X = -g_{m1}(R_D \parallel 1/sC_X)V_A$。
- 环路传输（loop transmission）：环路中只有一次反相，因此是负反馈；$T(s) = \dfrac{g_{m1}R_D}{(1 + sR_DC_X)\left[(1 + sC_Y/g_{m2})(1 + sR_FC_A) + sC_A/g_{m2}\right]}$，其中 $T_0 = g_{m1}R_D = 10$。
- $R_FC_A$ = 1 ns，$R_DC_X$ = 0.1 ns，$C_Y/g_{m2} = C_A/g_{m2}$ = 10 ps，因此极点位于 0.99×10⁹、1.0×10¹⁰ 和 1.01×10¹¹ rad/s（基本上就是 $1/R_FC_A$、$1/R_DC_X$ 和 $g_{m2}/C_Y$）。
- 在 $\omega_u \approx 7.74\times10^9$ rad/s 处 $|T| = 1$。相位 = −(82.7° + 37.7° + 4.4°) = −124.8°，因此 PM ≈ 55°。（把三个极点视为相互独立，得到 54.9°。）
