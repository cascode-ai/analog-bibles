一个采用密勒补偿（Miller compensation）的两级运放模型如下：第一级（跨导 $g_{mI}$）驱动节点 1，该节点对地有电阻 $R_I$ 和电容 $C_I$；第二级（跨导 $g_{mII}$，受节点 1 电压控制）驱动输出节点，该节点对地有 $R_{II}$ 和 $C_{II}$；补偿电容 $C_c$ 接在节点 1 与输出之间。其传递函数为

$\dfrac{V_o(s)}{V_{in}(s)} = \dfrac{g_{mI}g_{mII}R_IR_{II}\,(1 - sC_c/g_{mII})}{1 + s[R_I(C_I + C_c) + R_{II}(C_{II} + C_c) + g_{mII}R_IR_{II}C_c] + s^2R_IR_{II}[C_IC_{II} + C_cC_I + C_cC_{II}]}$。

由该传递函数推导主极点（dominant pole）$p_1 \cong \dfrac{-1}{g_{mII}R_IR_{II}C_c}$ 和输出极点 $p_2 \cong \dfrac{-g_{mII}C_c}{C_IC_{II} + C_{II}C_c + C_IC_c}$ 的表达式，并说明所用的近似。
