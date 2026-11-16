忽略 $R_1 + R_2$ 所取的电流：$Z_{out}(s) = \dfrac{R_0}{1 + \beta A(s)} = R_0\dfrac{1 + s/\omega_0}{1 + \beta A_0 + s/\omega_0} = \dfrac{R_0}{1+\beta A_0}\cdot\dfrac{1 + s/\omega_0}{1 + s/[(1+\beta A_0)\omega_0]}$，$\beta = R_2/(R_1+R_2)$。

$|Z_{out}|$ 的曲线：在 $\omega_0$（零点）以下平坦，等于 $R_0/(1+\beta A_0)$；在 $\omega_0$ 与 $(1+\beta A_0)\omega_0$（极点）之间以 +20 dB/dec 的斜率上升；在此之上平坦，等于 $R_0$。

解释：环路增益（loop gain）$\beta A(s)$ 在 $\omega_0$ 以上下降，因此反馈稳定输出电压（从而降低 $Z_{out}$）的能力随频率升高而减弱；在高频下，输出阻抗回到开环值 $R_0$。输出端呈感性（inductive）：$Z_{out} = R_0\,\|\,[R_0/(\beta A_0) + sL]$，其中 $L = R_0/(\beta A_0\omega_0)$。

若计入分压器的负载效应：$Z_{out} = \dfrac{R_0(R_1+R_2)(1 + s/\omega_0)}{(R_0+R_1+R_2)(1 + s/\omega_0) + A_0R_2}$，它从低频时的 $R_0(R_1+R_2)/(R_0+R_1+R_2+A_0R_2)$ 变化到高频时的 $R_0\|(R_1+R_2)$，曲线形状相同。
