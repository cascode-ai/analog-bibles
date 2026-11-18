$v_{OUT}(\max) = (V_{DD}+V_{BIAS}-V_{T1}) + \dfrac{1}{\beta_1R_L} - \sqrt{\dfrac{1}{(\beta_1R_L)^2} + \dfrac{2(V_{DD}+V_{BIAS}-V_{T1})}{\beta_1R_L}}$

$v_{OUT}(\min) = -(|V_{SS}|+V_{BIAS}-|V_{T2}|) - \dfrac{1}{\beta_2R_L} + \sqrt{\dfrac{1}{(\beta_2R_L)^2} + \dfrac{2(|V_{SS}|+V_{BIAS}-|V_{T2}|)}{\beta_2R_L}}$

其中 $V_{T1} = V_{T0N} + \gamma_N\left(\sqrt{2|\phi_{FN}| + v_{OUT}(\max) - V_{SS}} - \sqrt{2|\phi_{FN}|}\right)$，$|V_{T2}| = |V_{T0P}| + \gamma_P\left(\sqrt{2|\phi_{FP}| + V_{DD} - v_{OUT}(\min)} - \sqrt{2|\phi_{FP}|}\right)$（需迭代求解）。

- 最大值（$v_{IN} = V_{DD}$，M2 截止）：M1 饱和（因 $V_{BIAS} \le V_{T1}$，有 $V_{DS1} = V_{DD}-v_{OUT} \ge V_{GS1}-V_{T1}$），其电流全部流入 $R_L$：$v_{OUT}/R_L = \frac{\beta_1}{2}(V_{DD}+V_{BIAS}-v_{OUT}-V_{T1})^2$。令 $u = V_{DD}+V_{BIAS}-V_{T1}-v_{OUT}$，得 $\frac{\beta_1R_L}{2}u^2 + u - (V_{DD}+V_{BIAS}-V_{T1}) = 0$，取其正根即得上式。
- 最小值（$v_{IN} = V_{SS}$，M1 截止）：$-v_{OUT}/R_L = \frac{\beta_2}{2}(v_{OUT}-V_{SS}+V_{BIAS}-|V_{T2}|)^2$，用同样方法求解。
- 当 $R_L \to \infty$ 时：$v_{OUT}(\max) \to V_{DD}+V_{BIAS}-V_{T1}$，$v_{OUT}(\min) \to V_{SS}-V_{BIAS}+|V_{T2}|$；在极端处体效应使 $V_{T1}$ 和 $|V_{T2}|$ 变大，严重限制了摆幅。算例：$V_{DD} = -V_{SS}$ = 2.5 V，$V_{BIAS}$ = 0.7 V，采用书中参数：即使空载，$v_{OUT}(\max)$ ≈ 1.93 V（$V_{T1}$ ≈ 1.27 V），$v_{OUT}(\min)$ ≈ −1.73 V。
- （若栅极电压不能超出电源轨，则 $V_{DD}+V_{BIAS}$ 和 $|V_{SS}|+V_{BIAS}$ 分别换成 $V_{DD}$ 和 $|V_{SS}|$。）
