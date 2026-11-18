[图 1] 给出了非理想运算放大器（op amp）的一种模型：理想运放之前接有若干元件，分别模拟输入失调电压 $V_{OS}$、CMRR（受控源 $v_1/\mathrm{CMRR}$）、噪声、偏置电流以及输入阻抗。对于正电源，电源抑制比（PSRR）定义为

$\mathrm{PSRR} = \dfrac{\Delta V_{DD}}{\Delta V_{OUT}}A_v(s) = \dfrac{V_o/V_{in}\ (V_{dd} = 0)}{V_o/V_{dd}\ (V_{in} = 0)}$

（记为 PSRR$^+$），对于负电源则类似地用 $V_{ss}$ 定义（PSRR$^-$），其中 $V_{dd}$、$V_{ss}$ 为电源的小信号变化量。说明如何把运放的 PSRR 效应纳入该模型。
