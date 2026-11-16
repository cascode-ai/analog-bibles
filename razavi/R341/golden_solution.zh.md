$$\overline{V_{n,in}^2} = \frac{4kT\gamma}{g_{m1}} + \frac{4kTR_S(g_{m1}-g_{m2})^2}{g_{m1}^2(1+g_{m2}R_S)^2} + \frac{4kT(\gamma g_{m2} + 1/R_D)(1+g_{m1}R_S)^2}{g_{m1}^2(1+g_{m2}R_S)^2}$$

- 源极节点：$g_{m1}(V_{in} - V_S) + I_{n1} = V_S/R_S + I_{n,RS}$，因此 $V_S = \dfrac{g_{m1}V_{in} + I_{n1} - I_{n,RS}}{g_{m1} + 1/R_S}$。
- $M_2$ 向输出端送入 $-g_{m2}V_S + I_{n2}$；$M_1$ 中的电流等于 $V_S/R_S + I_{n,RS}$。输出：$V_{out} = R_D\left[I_{n,RD} + I_{n2} - I_{n,RS} - (g_{m2} + 1/R_S)V_S\right]$。
- 增益：$-g_{m1}R_D\dfrac{1+g_{m2}R_S}{1+g_{m1}R_S}$；$M_2$ 提高了带源极负反馈（source degeneration）时的增益。
- 折算到输入端：$M_1$ → $4kT\gamma/g_{m1}$；$R_S$（系数为 $R_D(g_{m2}-g_{m1})/(g_{m1}+1/R_S)$）→ 中间项；$M_2$ 和 $R_D$（系数为 $R_D$）→ 最后一项。
- 验证：$g_{m2} = 0$ 时得到带源极负反馈的共源级（common-source stage）结果 $4kT[\gamma/g_{m1} + R_S + (1+g_{m1}R_S)^2/(g_{m1}^2R_D)]$。
