这里 $V_{T1}$ 和 $|V_{T2}|$ 是器件的阈值电压；电池 $V_{TR1}$ 和 $V_{TR2}$ 是另外加在栅极上的偏移电压。

最大值（$v_{IN} = V_{SS}$：M1 截止，M2 被驱动至 $V_{SG2} = V_{DD}-V_{SS}-V_{TR2}$，处于非饱和区）：令 $V_2 = V_{DD}-V_{SS}-V_{TR2}-|V_{T2}|$，
$\dfrac{v_{OUT}}{R_L} = \beta_2\left[V_2(V_{DD}-v_{OUT}) - \dfrac{(V_{DD}-v_{OUT})^2}{2}\right]$ → $v_{OUT}(\max) = V_{DD} - \dfrac{(\beta_2V_2 + G_L) - \sqrt{(\beta_2V_2+G_L)^2 - 2\beta_2G_LV_{DD}}}{\beta_2}$，$G_L = 1/R_L$，
当 $V_{SD2}$ 较小时（M2 相当于电阻 $1/(\beta_2V_2)$，与 $R_L$ 分压），上式为
$v_{OUT}(\max) \approx \dfrac{V_{DD}}{1 + \dfrac{1}{\beta_2R_L(V_{DD}-V_{SS}-V_{TR2}-|V_{T2}|)}}$。

最小值（$v_{IN} = V_{DD}$：M2 截止，M1 处于非饱和区，$V_{GS1} = V_{DD}-V_{TR1}-V_{SS}$）：令 $V_1 = V_{DD}-V_{SS}-V_{TR1}-V_{T1}$，
$-\dfrac{v_{OUT}}{R_L} = \beta_1\left[V_1(v_{OUT}-V_{SS}) - \dfrac{(v_{OUT}-V_{SS})^2}{2}\right]$ → $v_{OUT}(\min) \approx \dfrac{V_{SS}}{1 + \dfrac{1}{\beta_1R_L(V_{DD}-V_{SS}-V_{TR1}-V_{T1})}}$（精确根与上面类似）。

为何处于非饱和区：由于 $R_L$ 接地，$v_{OUT}(\max) \ge 0$ 且 $V_{SD2} \le V_{DD}$，因此只要 $V_{DD} < V_2$，即 $|V_{SS}| > V_{TR2} + |V_{T2}|$（通常的双电源情形），M2 必然处于非饱和区；同理，当 $V_{DD} > V_{TR1} + V_{T1}$ 时，M1 在最小值处也处于非饱和区。只有在 $|V_{SS}|$（或 $V_{DD}$）较小且负载较重时，导通器件才可能饱和，此时 $v_{OUT}(\max) = \beta_2R_LV_2^2/2$（在其 ≤ $V_{DD} - V_2$ 时成立），$v_{OUT}(\min) = -\beta_1R_LV_1^2/2$（在其 ≥ $V_{SS} + V_1$ 时成立）。

由于两管源极都接各自的衬底，不存在体效应。与源极跟随器不同，该级的输出摆幅可以达到距电源轨仅一个沟道电阻压降的范围。
