对于 [图 1] 所示共源共栅放大器（M1 的源极接地），当 $v_{IN}$ 取到 $V_{DD}$ 时达到最低输出电压 $v_{OUT}(\min)$；此时 M1 和 M2 处于非饱和区且漏源电压很小，M3 饱和。忽略沟道长度调制时，结果为

$v_{OUT}(\min) = \frac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\frac{1}{V_{GG2}-V_{T2}} + \frac{1}{V_{DD}-V_{T1}}\right)$，其中 $\beta_i = K'_iW_i/L_i$，$\beta_1 = \beta_2$，

它由 $i_{D1} \cong \beta_1(V_{DD}-V_{T1})v_{DS1}$、$i_{D2} \cong \beta_2(V_{GG2}-V_{T2})v_{DS2}$ 和 $i_{D3} = \frac{\beta_3}{2}(V_{DD}-V_{GG3}-|V_{T3}|)^2$ 得到。在相关之处计入沟道长度调制（channel-length modulation），重新推导该表达式，饱和晶体管采用 $i_D = \frac{\beta}{2}(v_{GS}-V_T)^2(1+\lambda v_{DS})$。忽略体效应（body effect）。
