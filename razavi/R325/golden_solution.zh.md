$$\omega_{-3dB} \approx \frac{1}{R_{GS}C_{GS} + R_{GD}C_{GD} + R_{CL}C_L}$$
其中（输入置零；求每个电阻时其他电容均开路）：
- $R_{CL} = R_{out} = R_D\,\|\,[r_O + (1 + (g_m + g_{mb})r_O)R_S]$。
- $R_{GD} = R_G + R_{out}(1 + G_mR_G)$，其中 $G_m = \dfrac{g_mr_O}{r_O + [1 + (g_m + g_{mb})r_O]R_S}$ 是带源极负反馈的该级的跨导（transconductance）。
- $R_{GS} = \dfrac{R_G + R_S'}{1 + g_m'R_S'}$，其中 $R_S' = R_S\,\Big\|\,\dfrac{r_O + R_D}{1 + g_{mb}r_O}$，$g_m' = \dfrac{g_mr_O}{r_O + R_D}$。
  显式形式：$R_{GS} = \dfrac{R_G[r_O + R_D + R_S(1 + g_{mb}r_O)] + R_S(r_O + R_D)}{r_O + R_D + R_S[1 + (g_m + g_{mb})r_O]}$。
极限：当 $r_O \to \infty$、$g_{mb} = 0$ 时，它们变为 $R_{GS} = (R_G + R_S)/(1 + g_mR_S)$，$R_{GD} = R_D + [1 + g_mR_D/(1 + g_mR_S)]R_G$，$R_{CL} = R_D$（即 λ = γ = 0 时的结果）。

推导要点（在每个电容处接测试源 $V_X$/$I_X$；漏极电流为 $g_mV_{GS} - g_{mb}V_S + (V_D - V_S)/r_O$）：
- $C_L$：栅极处于交流地时漏极处的电阻，即 $R_D$ 与带源极负反馈的漏极电阻 $r_O + [1 + (g_m+g_{mb})r_O]R_S$ 并联。
- $C_{GD}$：$I_X$ 从栅极注入、从漏极流出。$V_G = I_XR_G$，漏极处的 $R_{out}$ 流过 $I_X + G_mV_G$，因此 $V_G - V_D = I_X[R_G + R_{out}(1 + G_mR_G)]$。
- $C_{GS}$：$I_X$ 从栅极注入、从源极流出；求解源极和漏极的基尔霍夫电流定律（KCL）方程，即得上面的表达式。体效应和 $r_O$ 削弱了源极的自举（bootstrapping）作用（等效的 $g_m'$ 更小，$R_S'$ 也更小）。
