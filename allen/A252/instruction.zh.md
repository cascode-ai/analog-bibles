[图 1] 是密勒电容 $C_c$ 串联调零电阻（nulling resistor）$R_z$ 的两级运放的小信号模型。其传输函数为

$\dfrac{V_{out}(s)}{V_{in}(s)} = \dfrac{a\{1 - s[(C_c/g_{mII}) - R_zC_c]\}}{1 + bs + cs^2 + ds^3}$

其中 $a = g_{mI}g_{mII}R_IR_{II}$，$b = (C_{II} + C_c)R_{II} + (C_I + C_c)R_I + g_{mII}R_IR_{II}C_c + R_zC_c$，$c = R_IR_{II}(C_IC_{II} + C_cC_I + C_cC_{II}) + R_zC_c(R_IC_I + R_{II}C_{II})$，$d = R_IR_{II}R_zC_IC_{II}C_c$。

假设 $R_z$ 远小于 $R_I$ 和 $R_{II}$，且各极点相距很远，推导近似根

$p_1 \cong \dfrac{-1}{(1 + g_{mII}R_{II})R_IC_c} \cong \dfrac{-1}{g_{mII}R_{II}R_IC_c}$，$p_2 \cong \dfrac{-g_{mII}C_c}{C_IC_{II} + C_cC_I + C_cC_{II}} \cong \dfrac{-g_{mII}}{C_{II}}$，$p_4 = \dfrac{-1}{R_zC_I}$，以及 $z_1 = \dfrac{1}{C_c(1/g_{mII} - R_z)}$，

并说明每一步进一步近似用在何处。
