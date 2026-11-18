一个采用密勒补偿（Miller compensation）的两级运算放大器（two-stage op amp）可建模为：跨导为 $g_{mI}$ 的第一级（节点 1 处的输出电阻为 $R_I$、电容为 $C_I$）驱动跨导为 $g_{mII}$ 的第二级（输出端的输出电阻为 $R_{II}$、电容为 $C_{II}$），补偿电容 $C_c$ 接在节点 1 与输出端之间。其传输函数为

$\dfrac{V_o(s)}{V_{in}(s)} = \dfrac{g_{mI}g_{mII}R_IR_{II}\,(1 - sC_c/g_{mII})}{1 + s[R_I(C_I + C_c) + R_{II}(C_{II} + C_c) + g_{mII}R_IR_{II}C_c] + s^2R_IR_{II}[C_IC_{II} + C_cC_I + C_cC_{II}]}$。

推导单位增益带宽（unity-gain bandwidth）的关系式 $GB \cong g_{mI}/C_c$（对于输入对管为 M1–M2 的 CMOS 两级运放，$GB \cong g_{m1}/C_c = g_{m2}/C_c$）。
