$\dfrac{V_{out}}{V_{in}} = \dfrac{A_0(R_1+R_2)}{R_0 + R_1 + R_2 + A_0R_2}$，$\quad Z_{out} = \dfrac{R_0(R_1+R_2)}{R_0 + R_1 + R_2 + A_0R_2} = \dfrac{R_0}{1 + A_0R_2/(R_1+R_2)}\ \Big\|\ (R_1+R_2)$。

- 计入负载的开环放大器：分压器对输出端构成负载，$A_{v,open} = A_0(R_1+R_2)/(R_0+R_1+R_2)$，开环输出电阻（output resistance）为 $R_0\|(R_1+R_2)$；输入侧不受负载影响（输入阻抗为无穷大）。
- 反馈系数（feedback factor）$\beta = R_2/(R_1+R_2)$，环路增益（loop gain）$\beta A_{v,open} = A_0R_2/(R_0+R_1+R_2)$。
- 闭环：由 $A_{v,open}/(1+\beta A_{v,open})$ 和 $[R_0\|(R_1+R_2)]/(1+\beta A_{v,open})$ 得到上面的表达式。取 $R_0$ 内侧的电压源为 $V_A = A_0(V_{in} - \beta V_{out})$，在输出端直接列基尔霍夫电流定律（KCL）方程，可验证这些结果。
- 极限情况：$R_0 \to 0$ 时得到 $A_0/(1+\beta A_0)$ 且 $Z_{out} \to 0$；$A_0 \to \infty$ 时得到 $1 + R_1/R_2$。
