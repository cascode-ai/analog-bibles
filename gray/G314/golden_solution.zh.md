$C_{L,\max} ≈ 10$ pF（采用常用的设计准则 $|p_2| = \omega_u ≈ g_{m1}/C_c$）；精确的双极点穿越频率计算允许 ≈ 14 pF。

- $L_{\text{eff}} = 8 - 0.6 - 1 = 6.4$ μm；所有 100/8 器件的 $W/L_{\text{eff}} = 15.6$（$M_3$、$M_4$ 除外）。
- 电流：$M_5$、$M_7$ 镜像 20 μA 参考电流（与 $M_8$ 尺寸相同）；$M_1$、$M_2$ 流过 10 μA；$M_6$ 流过 20 μA。
- $g_{m1} = \sqrt{2 \times 30.2\text{ μA/V}^2 \times 15.6 \times 10\text{ μA}} = 97$ μA/V；$g_{m6} = \sqrt{2 \times 60.4\text{ μA/V}^2 \times 15.6 \times 20\text{ μA}} = 194$ μA/V；$g_{m6}/g_{m1} = 2.0$。
- 零点位于无穷远且忽略寄生电容时：主极点（dominant pole）$p_1 ≈ -1/(g_{m6}R_1R_2C_c)$，单位增益频率 $\omega_u ≈ g_{m1}/C_c = 19.4$ Mrad/s；负载产生次极点（non-dominant pole）$p_2 ≈ -g_{m6}/C_L$（按题意忽略极点 $-1/(R_ZC_1)$）。
- 45° 相位裕度：$|p_2| = \omega_u$ → $C_L = C_c\,g_{m6}/g_{m1} = 5\text{ pF} \times 2.0 = 10$ pF。
- 精确的双极点验证：在 $\omega = |p_2|$ 处环路增益（loop gain）幅值为 $(g_{m1}/C_c|p_2|)/\sqrt{2}$；令真实穿越频率与 $|p_2|$ 重合，得 $C_L = \sqrt{2}\,C_c g_{m6}/g_{m1} ≈ 14$ pF。
