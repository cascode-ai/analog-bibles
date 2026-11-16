$\overline{V_{n,in}^2} = 2\,\overline{V_n^2}\left(\dfrac{V_{GS}-V_{TH}-V_b}{V_b}\right)^2$，即 $V_{n,in} = \sqrt2\,V_n\,\dfrac{V_{GS}-V_{TH}-V_b}{V_b}$，其中 $V_{GS}-V_{TH}$ 是 $M_1$/$M_2$ 在输入共模电平（common-mode level）下的过驱动电压（overdrive voltage），$V_b = V_{DS1,2}$。等价地写成 $2\overline{V_n^2}(g_{ds}/g_m)^2$，其中 $g_m = \mu_nC_{ox}\tfrac WL V_b$，$g_{ds} = \mu_nC_{ox}\tfrac WL(V_{GS}-V_{TH}-V_b) = 1/R_{on}$。
- 环路迫使 $V_X = V_b + V_{n1}$，因此 $A_1$ 的噪声调制了 $M_1$ 的漏源电压。
- $I_{D1} = \mu_nC_{ox}\tfrac WL[(V_{GS1}-V_{TH})V_X - V_X^2/2]$：$\partial I_{D1}/\partial V_X = \mu_nC_{ox}\tfrac WL(V_{GS1}-V_{TH}-V_b)$，$\partial I_{D1}/\partial V_{GS1} = \mu_nC_{ox}\tfrac WL V_b$。
- 电流噪声 $\mu_nC_{ox}\tfrac WL(V_{GS}-V_{TH}-V_b)V_{n1}$ 除以跨导（transconductance），每侧得到 $V_{n1}(V_{GS}-V_{TH}-V_b)/V_b$；对于差分输入，两侧互不相关，按功率相加。
- 由于线性区工作要求 $V_{GS}-V_{TH} > V_b$，而且通常 $V_{GS}-V_{TH} \gg V_b$，辅助放大器（auxiliary amplifier）的噪声会被放大（例如 $V_{ov}$ = 1 V、$V_b$ = 0.2 V 时 $V_{n,in} \approx 5.7V_n$），这是这种线性化方案的缺点之一。
