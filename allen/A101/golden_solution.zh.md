$r_{out} = R \,\Big\|\, \dfrac{R_1 + R_2 + R_1R_2/r_\pi}{1 + g_mR_1(1 + 1/\beta)} \;\approx\; \dfrac{R_1 + R_2}{1 + g_mR_1} \approx \dfrac{1}{g_m}\left(1 + \dfrac{R_2}{R_1}\right) = \dfrac{1}{g_m}\dfrac{V_{REF}}{V_{EB}}$

- 施加 $v_{out}$（$V_{DD}$ 为交流地）。设 $v_{eb}$ 为发射极-基极信号电压。在基极节点：$v_{eb}/R_1 + v_{eb}/r_\pi = (v_{out} - v_{eb})/R_2$，因此 $v_{eb} = v_{out}/[R_2(1/R_1 + 1/r_\pi + 1/R_2)]$。
- 从输出端吸取的电流：$v_{eb}/R_1 + g_m(1 + 1/\beta)v_{eb}$（分压器电流加发射极电流），再加上 $v_{out}/R$。
- 对大 β（$r_\pi \gg R_2$）：$v_{eb} = v_{out}R_1/(R_1 + R_2)$，晶体管部分为 $(R_1 + R_2)/(1 + g_mR_1) \approx (1/g_m)(1 + R_2/R_1)$，即“$V_{BE}$ 倍增器”的值：$1/g_m$ 乘以 $V_{REF}/V_{EB}$。$R$（通常大得多）与之并联。
- β 较小时，$r_\pi$ 对分压器形成负载，使 $r_{out}$ 增大（因子 $R_1R_2/r_\pi$）。
