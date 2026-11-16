某两级运算放大器（two-stage op amp）的开环传递函数为
$$H_{open}(s) = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_{p2}}\right)},$$
在单位增益反馈环路中，其闭环传递函数为
$$H_{closed}(s) = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\dfrac{s^2}{\omega_{p1}\omega_{p2}} + \left(\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}\right)s + A_0 + 1}.$$
假设 $\omega_z \approx \omega_{p2}$ 且 $\omega_{p2} \ll (1 + A_0)\omega_{p1}$，把 $H_{closed}(s)$ 写成如下形式
$$H_{closed}(s) = \frac{A\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{pA}}\right)\left(1 + \dfrac{s}{\omega_{pB}}\right)}$$
并求该闭环放大器的小信号（small-signal）阶跃响应。
