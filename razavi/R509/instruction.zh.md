某两级运算放大器（two-stage op amp）的开环传递函数为
$$H_{open}(s) = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_{p2}}\right)},$$
其中的零点由与密勒补偿（Miller compensation）电容串联的电阻产生，用来抵消次极点（nondominant pole）；$A_0 = 494$，$\omega_{p1} = 3.66\times10^6$ rad/s，$\omega_{p2} = 3.33\times10^9$ rad/s。将该运放接成单位增益反馈环路，并在输入端加一个幅度为 $V_0$ 的小阶跃信号。若极点与零点的幅值之间存在 10% 的失配（mismatch），求阶跃响应（step response）。
