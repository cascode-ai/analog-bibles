$A_v = \dfrac{[1 + (g_m + g_{mb})r_O]R_D}{r_O + [1 + (g_m + g_{mb})r_O]R_S + R_D}$（同相）。

- $G_m$：输出端（漏极）短路。当 $v_D = 0$ 时，从漏极流向源极的沟道电流为 $i_d = -(g_m + g_{mb})v_X - v_X/r_O$（$v_{gs} = v_{bs} = -v_X$）。在 $X$ 点列基尔霍夫电流定律（KCL）：$(v_{in} - v_X)/R_S + i_d = 0$ → $v_X = v_{in}/[1 + (g_m + g_{mb} + 1/r_O)R_S]$。从短路线吸入漏极的电流为 $i_d$，因此 $G_m = -\dfrac{1 + (g_m+g_{mb})r_O}{r_O + [1 + (g_m+g_{mb})r_O]R_S}$（为负：抬高源极电压会减小漏极电流）。
- $R_{out} = R_D \,\|\, \{r_O + [1 + (g_m+g_{mb})r_O]R_S\}$，即带源极负反馈（source degeneration）的输出电阻与 $R_D$ 并联。
- 由 $A_v = -G_mR_{out}$ 即得上述表达式；当 $r_O \to \infty$ 时：$(g_m+g_{mb})R_D/[1 + (g_m+g_{mb})R_S]$。
