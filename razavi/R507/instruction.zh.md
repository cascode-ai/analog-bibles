某两级运算放大器（two-stage op amp）的开环传递函数为
$$H_{open}(s) = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_{p2}}\right)},$$
该放大器接成单位增益反馈环路，且 $\omega_z \approx \omega_{p2}$，$\omega_{p2} \ll (1 + A_0)\omega_{p1}$。证明小信号（small-signal）阶跃响应中含有形如 $(1 - \omega_z/\omega_{p2})\exp(-\omega_{p2}t)$ 的指数项，即：若零点不能精确抵消极点，阶跃响应中会出现一个指数项，其幅度正比于 $1 - \omega_z/\omega_{p2}$，这取决于 $\omega_z$ 与 $\omega_{p2}$ 之间的失配（mismatch），而时间常数约为 $1/\omega_z$。
