电路 3 和电路 4（二者相等）。

依据（逐个电路；$g_{mP}$ 为电流 $I$ 下 p 沟道管的 $g_m$，因此电流 $I$ 下的 n 沟道管有 $g_{mN} = \sqrt2\,g_{mP}$，而电流为 $2I$ 的器件其值为电流 $I$ 时的 $\sqrt2$ 倍；$r_{dsN} = 1/(\lambda_NI)$，$r_{dsP} = r_{dsN}/2$；饱和电压 $V_{dsat,P} = \sqrt2\,V_{dsat,N}$，电流为 $2I$ 时 ×√2）：
- C1：n 输入管 + n 共源共栅管，简单 p 电流源负载。$R_{out} \approx r_{dsP}$ = 0.5 $r_{dsN}$；$|A_v| \approx g_{mN}r_{dsP}$ = 0.71 $g_{mP}r_{dsN}$。
- C2：p 输入管 + p 共源共栅管，简单 n 电流沉负载。$R_{out} \approx r_{dsN}$；$|A_v| \approx g_{mP}r_{dsN}$ = 1.0 $g_{mP}r_{dsN}$。
- C3：n 输入管 + n 共源共栅管，p 共源共栅负载。$R_{out} = (g_{mP}r_{dsP}^2)\|(g_{mN}r_{dsN}^2) \approx 0.21\,g_{mP}r_{dsN}^2$；$|A_v| \approx 0.30\,(g_{mP}r_{dsN})^2$。
- C4：p 输入管 + p 共源共栅管，n 共源共栅负载。$R_{out}$ 与 C3 相同；$|A_v| \approx 0.21\,(g_{mP}r_{dsN})^2$。
- C5：n 共源共栅管接在流过 $2I$ 的 n 输入管上（额外的 p 电流源注入共源共栅管源极），简单 p 电流源负载。$R_{out} \approx r_{dsP}$；$|A_v| \approx g_{m,in}r_{dsP} = 2g_{mP}\cdot r_{dsN}/2$ = 1.0 $g_{mP}r_{dsN}$。
- C6：p 共源共栅管接在流过 $2I$ 的 p 输入管上（共源共栅管源极处有额外的 n 电流沉），简单 n 电流沉负载。$R_{out} \approx r_{dsN}$；$|A_v| \approx \sqrt2 g_{mP}r_{dsN}$ = 1.41 $g_{mP}r_{dsN}$。
- 电源电流：C1–C4 为 $I$，C5 和 C6 为 $2I$。
- 所有器件饱和时的最高输出为 $V_{DD} - \sum|V_{DS(sat)}|$（对输出端以上的器件求和）：C1 和 C5 为 $V_{DD} - V_{dsat,P}$；C2、C3、C4 为 $V_{DD} - 2V_{dsat,P}$；C6 为 $V_{DD} - (1+\sqrt2)V_{dsat,P}$。
- 所有器件饱和时的最低输出：C2 和 C6 为 $V_{dsat,N}$；C1、C3、C4 为 $2V_{dsat,N}$；C5 为 $(1+\sqrt2)V_{dsat,N}$（相对地）。
- 由于 $g_{mP}r_{dsN} = 2/(\lambda_NV_{ov,P}) \gg 1$，全共源共栅的 C3 和 C4 的增益为 $(g_mr_{ds})^2$ 量级，远高于其他电路。
