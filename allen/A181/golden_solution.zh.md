电路 1 和 5：主极点（dominant pole）为 $1/(R_{out}C_L)$，而这两个电路的输出电阻最低（$\approx r_{dsP}$）。

依据（逐个电路；$g_{mP}$ 为 p 沟道器件在 $I$ 下的 $g_m$，因此 n 沟道器件在 $I$ 下有 $g_{mN} = \sqrt2\,g_{mP}$，而工作在 $2I$ 下的器件的跨导是其在 $I$ 下的 $\sqrt2$ 倍；$r_{dsN} = 1/(\lambda_NI)$，$r_{dsP} = r_{dsN}/2$；饱和电压 $V_{dsat,P} = \sqrt2\,V_{dsat,N}$，在 $2I$ 下 ×√2）：
- C1：n 沟道输入管 + n 沟道共源共栅管，简单 p 沟道电流源负载。$R_{out} \approx r_{dsP}$ = 0.5 $r_{dsN}$；$|A_v| \approx g_{mN}r_{dsP}$ = 0.71 $g_{mP}r_{dsN}$。
- C2：p 沟道输入管 + p 沟道共源共栅管，简单 n 沟道电流沉负载。$R_{out} \approx r_{dsN}$；$|A_v| \approx g_{mP}r_{dsN}$ = 1.0 $g_{mP}r_{dsN}$。
- C3：n 沟道输入管 + n 沟道共源共栅管，p 沟道共源共栅负载。$R_{out} = (g_{mP}r_{dsP}^2)\|(g_{mN}r_{dsN}^2) \approx 0.21\,g_{mP}r_{dsN}^2$；$|A_v| \approx 0.30\,(g_{mP}r_{dsN})^2$。
- C4：p 沟道输入管 + p 沟道共源共栅管，n 沟道共源共栅负载。$R_{out}$ 与 C3 相同；$|A_v| \approx 0.21\,(g_{mP}r_{dsN})^2$。
- C5：n 沟道共源共栅管接在流过 $2I$ 的 n 沟道输入管之上（额外的 p 沟道电流源向共源共栅管的源极注入电流），简单 p 沟道电流源负载。$R_{out} \approx r_{dsP}$；$|A_v| \approx g_{m,in}r_{dsP} = 2g_{mP}\cdot r_{dsN}/2$ = 1.0 $g_{mP}r_{dsN}$。
- C6：p 沟道共源共栅管接在流过 $2I$ 的 p 沟道输入管之上（共源共栅管的源极处接额外的 n 沟道电流沉），简单 n 沟道电流沉负载。$R_{out} \approx r_{dsN}$；$|A_v| \approx \sqrt2 g_{mP}r_{dsN}$ = 1.41 $g_{mP}r_{dsN}$。
- 电源电流：C1–C4 为 $I$，C5 和 C6 为 $2I$。
- 所有器件均饱和时的最高输出为 $V_{DD} - \sum|V_{DS(sat)}|$（对输出端以上的器件求和）：C1 和 C5 为 $V_{DD} - V_{dsat,P}$；C2、C3、C4 为 $V_{DD} - 2V_{dsat,P}$；C6 为 $V_{DD} - (1+\sqrt2)V_{dsat,P}$。
- 所有器件均饱和时的最低输出：C2 和 C6 为 $V_{dsat,N}$；C1、C3、C4 为 $2V_{dsat,N}$；C5 为 $(1+\sqrt2)V_{dsat,N}$（相对于地）。
- 由于 $g_{mP}r_{dsN} = 2/(\lambda_NV_{ov,P}) \gg 1$，完全采用共源共栅结构的 C3 和 C4 的增益为 ~ $(g_mr_{ds})^2$ 量级，远高于其他电路。
