某两级运算放大器（two-stage op amp）的开环传递函数为
$$H_{open}(s) = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_{p2}}\right)},$$
其中零点由与密勒补偿（Miller compensation）电容串联的电阻产生，用来抵消次极点（non-dominant pole）；$A_0 = 494$，$\omega_{p1} = 3.66\times10^6$ rad/s，$\omega_{p2} = 3.33\times10^9$ rad/s。该运放接成单位增益反馈环路，并在输入端施加一个高度为 $V_0$ 的小阶跃。求零极点完全对消（pole–zero cancellation）时的阶跃响应。
