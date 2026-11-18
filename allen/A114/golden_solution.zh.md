不存在能给出 80 % 摆幅的有限 $\beta_1/\beta_2$。当 $V_T = 0.2V_{DD}$ 时，输出不能超过 $V_{DD} - V_T = 0.8V_{DD}$，因此 80 % 的摆幅要求 $v_{OUT}(\min) = 0$，而这只有在 $\beta_1/\beta_2 \to \infty$ 的极限下才能达到，此时增益 $-\sqrt{\beta_1/\beta_2}$ 也无限增大。

- $v_{OUT}(\max) = V_{DD} - |V_{T2}| = 0.8V_{DD}$：M2 在其 $v_{SG}$ 降到 $V_T$ 时截止。
- $v_{OUT}(\min)$（$v_{IN} = V_{DD}$，M1 处于线性区，M2 饱和）：由 $\beta_1[(V_{DD}-V_T)v - v^2/2] = \frac{\beta_2}{2}(V_{DD}-V_T-v)^2$ 得 $v_{OUT}(\min) = (V_{DD}-V_T)\left[1 - 1/\sqrt{1+\beta_2/\beta_1}\right] > 0$，对任何有限比值均成立。
- 摆幅 $= v_{OUT}(\max) - v_{OUT}(\min) = 0.8V_{DD}/\sqrt{1+\beta_2/\beta_1} < 0.8V_{DD}$。例如 $\beta_1/\beta_2 = 3.27$ 时 $v_{OUT}(\min) = 0.1V_{DD}$，摆幅仅为 70 %，$A_v \approx -1.81$。$\beta_1/\beta_2 = 39$ 时摆幅为 79 %，$A_v \approx -6.2$。摆幅只能渐近地趋于 80 %。
- 放大区（两管均饱和，忽略 gds）的小信号增益：$A_v = -g_{m1}/g_{m2} = -\sqrt{\beta_1/\beta_2}$，在极限下无界，因此不存在与 80 % 摆幅对应的有限值。
- 若改为在低输出点 $v_{IN} = V_{DD}$ 处求增益（M1 处于线性区，保留其 $g_{ds1} = \beta_1(V_{DD}-V_T-v_{OUT})$），则 $A_v = -g_{m1}/(g_{m2}+g_{ds1}) = -q(1-q)$，其中 $q = \sqrt{(\beta_1/\beta_2)/(1+\beta_1/\beta_2)}$，在同一极限下趋于 0。
