对于 [图 1] 所示共源共栅放大器（M1 的源极接地，所有电位均以地为参考），当 $v_{IN}$ 取到 $V_{DD}$ 时达到最低输出电压 $v_{OUT}(\min)$。此时 M1 和 M2 工作在非饱和区，M3 保持饱和，取 $\beta_i = K'_i W_i/L_i$，三个漏极电流为

$i_{D1} = \beta_1\left[(V_{DD}-V_{T1})v_{DS1} - \frac{v_{DS1}^2}{2}\right] \cong \beta_1(V_{DD}-V_{T1})v_{DS1}$

$i_{D2} = \beta_2\left[(V_{GG2}-v_{DS1}-V_{T2})(v_{OUT}-v_{DS1}) - \frac{(v_{OUT}-v_{DS1})^2}{2}\right] \cong \beta_2(V_{GG2}-v_{DS1}-V_{T2})(v_{OUT}-v_{DS1})$

$i_{D3} = \frac{\beta_3}{2}(V_{DD}-V_{GG3}-|V_{T3}|)^2$

其中已假设 $v_{DS1}$ 和 $v_{OUT}$ 很小。说明如何由这些方程在 $\beta_1 = \beta_2$ 时推导出

$v_{OUT}(\min) = \frac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\frac{1}{V_{GG2}-V_{T2}} + \frac{1}{V_{DD}-V_{T1}}\right)$。

提示：假设 $V_{GG2} - V_{T2}$ 大于 $v_{DS1}$，并取 $i_{D2} \approx \beta_2(V_{GG2}-V_{T2})v_{DS2}$。将 $v_{OUT}$ 作为 $v_{DS1} + v_{DS2}$ 求解，并相应化简。忽略沟道长度调制（channel-length modulation）和体效应（body effect）。
