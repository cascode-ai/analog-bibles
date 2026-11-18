把分母写成 $D(s) = 1 + as + bs^2$，其中 $a = R_I(C_I + C_c) + R_{II}(C_{II} + C_c) + g_{mII}R_IR_{II}C_c$，$b = R_IR_{II}(C_IC_{II} + C_cC_I + C_cC_{II})$。用极点表示，

$D(s) = \left(1 - \dfrac{s}{p_1}\right)\left(1 - \dfrac{s}{p_2}\right) = 1 - s\left(\dfrac{1}{p_1} + \dfrac{1}{p_2}\right) + \dfrac{s^2}{p_1p_2}$。

- 极点相距很远（$|p_2| \gg |p_1|$）：$a = -(1/p_1 + 1/p_2) \approx -1/p_1$，因此 $p_1 \approx -1/a$。
- 当 $g_{mII}R_{II} \gg 1$ 且 $C_c$ 不太小时，密勒项在 $a$ 中占主导：$a \approx g_{mII}R_IR_{II}C_c$，因此 $p_1 \cong -1/(g_{mII}R_IR_{II}C_c)$。
- $b = 1/(p_1p_2)$，因此 $p_2 = 1/(bp_1) \approx -a/b = -\dfrac{g_{mII}R_IR_{II}C_c}{R_IR_{II}(C_IC_{II} + C_cC_I + C_cC_{II})} = \dfrac{-g_{mII}C_c}{C_IC_{II} + C_{II}C_c + C_IC_c}$。
- 自洽性检验：$|p_2/p_1| \approx a^2/b$，对于典型值它非常大（$a$ 中含有很大的密勒项 $g_{mII}R_IR_{II}C_c$），因此极点相距很远的假设成立。（若 $C_{II} \gg C_c \gg C_I$，则 $p_2 \approx -g_{mII}/C_{II}$。）
