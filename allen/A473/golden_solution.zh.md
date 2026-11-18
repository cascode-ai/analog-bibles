$C_x = \frac{8}{7}C \approx 1.143C$，此时 $v_{OUT} = V_{REF}\sum_{i=0}^{5} b_i/2^{i+1}$。

推导：
- LSB 侧：$4C$（$b_3$）、$2C$（$b_4$）、$C$（$b_5$）以及接地的端接电容 $C$，总计 $8C$。MSB 侧：$4C$（$b_0$）、$2C$（$b_1$）、$C$（$b_2$），总计 $7C$。
- $C_x$ 与 $8C$ 串联后，必须等效为端接 MSB 阵列的一个单位电容 $C$（MSB 节点总电容为 $8C$）：$\frac{1}{C_x} + \frac{1}{8C} = \frac{1}{C}$ → $C_x = 8C/7$。
- 用电荷守恒验证：令 $A = 4b_0 + 2b_1 + b_2$，$B = 4b_3 + 2b_4 + b_5$，则 $v_{OUT} = V_{REF}\frac{A(8C + C_x) + C_x B}{56C + 15C_x}$；当 $C_x = 8C/7$ 时，它等于 $V_{REF}\left(\frac{A}{8} + \frac{B}{64}\right)$。
