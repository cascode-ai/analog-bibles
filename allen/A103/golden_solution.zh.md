一种设计：$R$ = 25 kΩ（总电流 100 µA），$R_1$ = 32.6 kΩ，$R_2$ = 88.9 kΩ，得到 $V_{EB}$ = 0.6525 V，$V_{REF}$ = 2.50 V；灵敏度 $S \approx 0.15$。

- 取 $R$ = 25 kΩ，总电流 $(5 - 2.5)/R$ = 100 µA；让 20 µA 流过 $R_1$，则 $I_E$ = 80 µA，$I_C = I_E\beta_F/(\beta_F + 1)$ = 79.2 µA，$I_B$ = 0.79 µA。
- $V_{EB} = V_t\ln(I_C/I_s) = 0.026\ln(79.2\ \mu/1\ \mathrm{f}) = 0.6525$ V；$R_1 = V_{EB}/20\ \mu\mathrm{A} = 32.6$ kΩ。
- 基极电流叠加在 $R_2$ 中的分压器电流上：$R_2 = (2.5 - 0.6525)/(20 + 0.79)\ \mu\mathrm{A} = 88.9$ kΩ。（理想倍增器：$V_{REF} = V_{EB}(1 + R_2/R_1)$，再加上 $I_BR_2$ 项。）
- 灵敏度：$\partial V_{REF}/\partial V_{DD} = r_{out}/(R + r_{out})$，其中 $r_{out}$ 为晶体管与分压器组合的小信号电阻：$g_m = I_C/V_t$ = 3.05 mS，$r_\pi = \beta/g_m$ = 32.8 kΩ，$r_{out} = (R_1 + R_2 + R_1R_2/r_\pi)/(1 + g_mR_1(1 + 1/\beta)) = 2.07$ kΩ。因此 $\partial V_{REF}/\partial V_{DD} = 2.07/27.07 = 0.0764$，$S = (5/2.5)\times0.0764 \approx 0.15$。
- 若不计基极电流对分压器的负载作用（β → ∞），$r_{out} \approx (R_1 + R_2)/(1 + g_mR_1) = 1.21$ kΩ，$S \approx 0.09$。其他设计给出的 $S$ 大致在 0.08–0.2 之间：$S \approx (V_{DD}/V_{REF})\,r_{out}/R$，其中 $r_{out} \approx (V_{REF}/V_{EB})/g_m$，$R = (V_{DD} - V_{REF})/I$，主要取决于流过晶体管的电流所占比例以及 β。
