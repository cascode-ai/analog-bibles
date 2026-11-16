用零点来抵消极点时，例如在两级运算放大器（two-stage op amp）中，会出现一个称为“零极点对问题”（doublet problem）的问题。如果极点和零点不完全重合，我们就说它们构成一个零极点对。存在零极点对时反馈电路的阶跃响应很值得关注。设一个两级运放的开环传递函数表示为
$$H_{open}(s) = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\left(1 + \dfrac{s}{\omega_{p1}}\right)\left(1 + \dfrac{s}{\omega_{p2}}\right)}.$$
理想情况下，$\omega_z = \omega_{p2}$，反馈电路表现为一阶特性，即其阶跃响应只含一个时间常数且没有过冲。证明该放大器在单位增益反馈环路中的传递函数为
$$H_{closed}(s) = \frac{A_0\left(1 + \dfrac{s}{\omega_z}\right)}{\dfrac{s^2}{\omega_{p1}\omega_{p2}} + \left(\dfrac{1}{\omega_{p1}} + \dfrac{1}{\omega_{p2}} + \dfrac{A_0}{\omega_z}\right)s + A_0 + 1}.$$
