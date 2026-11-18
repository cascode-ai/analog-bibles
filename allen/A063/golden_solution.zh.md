晶体管处于饱和区：$g_m$ ≈ 1.12 mS，$g_{mbs}$ ≈ 136 µS，$g_{ds}$ ≈ 21–23 µS（$r_{ds}$ ≈ 44–48 kΩ），$C_{gs}$ ≈ 18.7 fF，$C_{gd}$ = 2.2 fF，$C_{gb}$ = 0.7 fF。衬底结反向偏置，因此 $g_{bd} \approx g_{bs} \approx 0$；$C_{bd}$ 和 $C_{bs}$ 是这两个结的耗尽层电容（反向偏置分别为 4 V 和 2 V），$r_D$、$r_S$ 是很小的串联电阻，这些都需要版图数据才能求出。

- $V_{GS}$ = 2 V，$V_{DS}$ = 2 V，$V_{SB}$ = 2 V：$V_T = 0.7 + 0.4(\sqrt{2.7} - \sqrt{0.7})$ = 1.023 V；$V_{GS} - V_T$ = 0.977 V < $V_{DS}$ → 饱和区。
- $I_D = \frac{110\ \mu\times10}{2}(0.977)^2(1 + 0.04\times2)$ = 567 µA（不计 λ 因子时为 525 µA）。
- $g_m = \sqrt{2K'(W/L)I_D}$ = 1.12 mS（视 λ 因子的处理方式而定，为 1.08–1.16 mS）。
- $g_{mbs} = g_m\gamma/(2\sqrt{2|\phi_F| + V_{SB}}) = 0.122\,g_m$ = 136 µS。
- $g_{ds} = \lambda I_D/(1 + \lambda V_{DS})$ = 21.0 µS（≈ λ$I_D$ = 22.7 µS）。
- $C_{gs}$ = CGSO·W + (2/3)$C_{ox}WL$ = 2.2 + (2/3)(24.7) = 18.7 fF；$C_{gd}$ = CGDO·W = 2.2 fF；$C_{gb}$ = CGBO·L = 0.7 fF（与 SPICE 一样，CGBO 取为单位沟道长度的总栅-衬底交叠电容；若在栅的两条边缘上各计一次 CGBO·L，则为 1.4 fF）。
- $V_{BD}$ = −4 V，$V_{BS}$ = −2 V：两个结均反向偏置（$g_{bd}$、$g_{bs}$ ≈ 0）；$C_{bd}$、$C_{bs}$ = 各扩散区的 CJ·A/(1 + V_R/PB)^{MJ} + CJSW·P/(1 + V_R/PB)^{MJSW}。
