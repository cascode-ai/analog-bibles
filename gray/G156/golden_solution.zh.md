$PSRR^+ = -g_mR$（幅度为 $g_mR$，当 $r_o \gg R$ 时与放大器自身的增益幅度相同），$PSRR^- = -\dfrac{g_mr_o}{1+g_mr_o} \approx -1$（对 $V_{ss}$ 完全没有抑制作用）。

- 信号增益：$A_{dm} = v_o/v_i = -g_m(R\parallel r_o)$。
- 来自 $v_{dd}$（$v_i = v_{ss} = 0$）：$v_{gs} = 0$，因此 $R$ 和 $r_o$ 构成分压器：$A^+ = \dfrac{r_o}{R + r_o}$。于是 $PSRR^+ = \dfrac{-g_m(R\parallel r_o)}{r_o/(R+r_o)} = -g_mR$。
- 来自 $v_{ss}$（栅极接地，源极随 $v_{ss}$ 变化）：$v_{gs} = -v_{ss}$。在输出节点列 KCL：$v_o/R + g_m(-v_{ss}) + (v_o - v_{ss})/r_o = 0$，因此 $A^- = (1 + g_mr_o)\dfrac{R}{R + r_o} \approx g_m(R\parallel r_o)$，与信号增益一样大。于是 $PSRR^- = -\dfrac{g_mr_o}{1+g_mr_o} \approx -1$（0 dB）。
- $r_o \to \infty$ 时的极限：$A^+ = 1$，$PSRR^+ = -g_mR$；$A^- = g_mR$，$|PSRR^-| = 1$。源极电源对晶体管的驱动作用与输入完全相同（$v_{ss}$ 的变化就是符号相反的 $v_{gs}$ 变化）。
