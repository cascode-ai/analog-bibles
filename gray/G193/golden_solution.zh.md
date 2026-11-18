$\dfrac{i_o}{i_i} \approx \dfrac{\beta_0}{\beta_0 + 1}\cdot\dfrac{1}{1 + s\dfrac{C_\pi r_\pi}{\beta_0 + 1}} \approx \dfrac{\alpha_0}{1 + sC_\pi/g_m}$，其中 $\alpha_0 = 0.990$，极点位于 $(g_m + 1/r_\pi)/C_\pi = 1.94\times10^9$ rad/s。−3-dB 频率 ≈ 309 MHz（若用 $g_m/C_\pi$ 则 ≈ 306 MHz）。

- $g_m = 0.5/26 = 19.2$ mA/V，$r_\pi = \beta/g_m = 5.2\ \mathrm{k\Omega}$。
- 发射极处的 KCL：$i_i = -v_1(g_m + 1/z_\pi)$，其中 $z_\pi = r_\pi\|(1/sC_\pi)$；该式不含 $r_b$，因为流过 $z_\pi$ 的电流必须全部经基极返回。受控源给出的集电极电流为 $g_mv_1$，由此得到上式。
- 由于 $R_L = 0$，$C_\mu$ 不形成通常的输出极点（$-1/R_LC_\mu \to \infty$）。进一步细化：若计入从内部基极经 $C_\mu$ 流入集电极短路端的电流（基极阻抗为 $r_b\|1/sC_\mu$），则集电极端电流的 −3-dB 频率变为 ≈ 257 MHz；上述简单模型给出的是通常的答案。
