总误差为正，且只有几毫伏，远小于 $M_1$ 和 $M_2$ 存在沟道长度调制时的 ≈ 28 mV。它主要来自发射极-基极电压未被放大的升高，而不是与绝对温度成正比（PTAT）的项。设 $I_D = I_0(1 + \lambda|V_{DS}|)$，$M_1$ 和 $M_2$ 流过 $I_0$，而漏极分别位于 $|V_{EB1}|$ 和 $|V_{EB3}|$ 的 $M_3$ 和 $M_4$ 流过 $I_0a$ 和 $I_0b$，其中 $a = 1 + \lambda(V_{DD} - |V_{EB1}|)$，$b = 1 + \lambda(V_{DD} - |V_{EB3}|)$：
$\Delta V_{out} \approx V_T\ln[1 + \lambda(V_{DD} - |V_{EB3}|)] + \left(1 + \dfrac{R_2}{R_1}\right)V_T\ln\dfrac{1 + \lambda(V_{DD} - |V_{EB1}|)}{1 + \lambda(V_{DD} - |V_{EB3}|)} \approx V_T\ln[1 + \lambda(V_{DD} - |V_{EB}|)] - \left(1 + \dfrac{R_2}{R_1}\right)\dfrac{\lambda V_T^2\ln n}{1 + \lambda(V_{DD} - |V_{EB}|)}$。
例：$n = 8$，$1 + R_2/R_1 \approx 8.3$，$|V_{EB}| \approx 0.78$ V，$\lambda = 0.2\ \mathrm{V^{-1}}$：≈ +9.7 mV − 1.6 mV ≈ +8 mV（精确数值解为 +8.0 mV；$\lambda = 0.1\ \mathrm{V^{-1}}$ 时为 +4.3 mV）。

推导：
- $V_X = |V_{EB1}| + |V_{EB2}|$（Q1 流过 $I_0a$，Q2 流过 $I_0$），$V_Y = |V_{EB3}| + |V_{EB4}| + I_0R_1$（Q3 流过 $I_0b$，Q4 流过 $I_0$）。环路条件 $V_X = V_Y$ 给出 $I_0R_1 = 2V_T\ln n + V_T\ln(a/b)$。
- 被放大的 PTAT 项（很小）：$M_3$ 和 $M_4$ 的漏极电压只相差 $|V_{EB1}| - |V_{EB3}| \approx V_T\ln n$（$n = 8$ 时 ≈ 54 mV），因此 $a/b \approx 1 - \lambda V_T\ln n/[1 + \lambda(V_{DD} - |V_{EB}|)]$。$M_4$ 的电流比 $M_3$ 略大，PTAT 电压减小 $V_T\ln(b/a)$，输出则减小其 $1 + R_2/R_1$ 倍：≈ −1.6 mV。
- 未被放大的项（占主导）：$M_3$ 和 $M_4$ 的电流是 $M_1$ 和 $M_2$ 的 $1 + \lambda|V_{DS}| \approx 1.44$ 倍，因此 Q1 和 Q3 的工作电流是 Q2 和 Q4 的 ≈ 1.44 倍。在 $V_{out} = |V_{EB3}| + |V_{EB4}| + (1 + R_2/R_1)I_0R_1$ 中，这使 $|V_{EB3}|$ 升高 $V_T\ln b$ ≈ +9.7 mV，只计一次，且不被放大。
- 等价的拆分：$V_{out} = V_X + I_0R_2$ 给出 $V_T\ln a + (R_2/R_1)V_T\ln(a/b)$，总和相同。由 $I_0$ 的微小变化引起的另一项 $V_T\ln(a/b)/\ln n$（≈ −0.1 mV）可以忽略。
