$\dfrac{v_o}{v_s} = -\dfrac{R_2}{R_1}\left(\dfrac{A_i}{1+A_i}\right) = -\dfrac{R_2/R_1}{1+1/A_i}$。

- 两个输入端都处于 0 V，因此 $i_1 = v_s/R_1$，$i_2 = v_o/R_2$（从 $v_o$ 流向 n 输入端），$i_n = i_1 + i_2$，$i_p = 0$。
- 输出节点不接负载，因此 $i_o = i_2$，于是 $v_o = R_2i_o$。
- $i_o = A_i(0 - i_n) = -A_i(v_s/R_1 + i_o)$ → $i_o = -\dfrac{A_i}{1+A_i}\dfrac{v_s}{R_1}$ → $v_o = -\dfrac{R_2}{R_1}\dfrac{A_i}{1+A_i}v_s$。
- 比较：幅值相同，对 $A_i$ 的依赖关系也相同（$A_i \to \infty$ 时闭环增益为 $R_2/R_1$，相对误差为 $1/(1+A_i)$，均为负反馈，因此对单极点的 $A_i$，−3 dB 带宽同样为 $\omega_A(1+A_o)$，与 $R_2/R_1$ 无关），但符号相反，因为这里信号与反馈一同进入反相（n）输入端。
