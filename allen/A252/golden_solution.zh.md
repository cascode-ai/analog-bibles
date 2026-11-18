各根相距很远：$1 + bs + cs^2 + ds^3 \approx (1 + s/|p_1|)(1 + s/|p_2|)(1 + s/|p_4|)$，且 $|p_1| \ll |p_2| \ll |p_4|$，因此 $b \approx 1/|p_1|$，$c \approx 1/(|p_1||p_2|)$，$d = 1/(|p_1||p_2||p_4|)$，即 $|p_1| \approx 1/b$，$|p_2| \approx b/c$，$|p_4| \approx c/d$。

- $p_1$：在 $b$ 中，$C_c$ 与 $R_I$ 相乘的各项占主导（$R_z \ll R_I, R_{II}$；$g_{mII}R_{II} \gg 1$）：$b \approx R_IC_c + g_{mII}R_IR_{II}C_c = (1 + g_{mII}R_{II})R_IC_c \approx g_{mII}R_{II}R_IC_c$。
- $p_2$：由于 $R_z \ll R_I, R_{II}$，$c$ 中的 $R_z$ 项可以忽略：$c \approx R_IR_{II}(C_IC_{II} + C_cC_I + C_cC_{II})$，因此 $p_2 \approx -b/c = \dfrac{-g_{mII}C_c}{C_IC_{II} + C_cC_I + C_cC_{II}}$；当 $C_{II} \gg C_I$ 且 $C_c \gg C_I$ 时，分母 ≈ $C_cC_{II}$，$p_2 \approx -g_{mII}/C_{II}$。
- $p_4$：$c/d = \dfrac{C_IC_{II} + C_cC_I + C_cC_{II}}{R_zC_IC_{II}C_c} = \dfrac{1}{R_z}\left(\dfrac{1}{C_c} + \dfrac{1}{C_I} + \dfrac{1}{C_{II}}\right) \approx \dfrac{1}{R_zC_I}$（$C_I \ll C_c, C_{II}$），因此 $p_4 \approx -1/(R_zC_I)$。
- $z_1$：当 $1 - s(C_c/g_{mII} - R_zC_c) = 0$ 时分子为零，即 $s = z_1 = \dfrac{1}{C_c(1/g_{mII} - R_z)}$（$R_z < 1/g_{mII}$ 时位于右半平面，$R_z = 1/g_{mII}$ 时位于无穷远处，$R_z > 1/g_{mII}$ 时位于左半平面）。
