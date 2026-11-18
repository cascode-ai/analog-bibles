某 6 位两级电荷定标 DAC（charge scaling DAC，位 $b_0$ = MSB 至 $b_5$ = LSB）所用的耦合电容 $C_x$ 存在误差 $\Delta C_x$。其输出为
$v_{OUT} = \frac{V_{REF}}{8}\left(1 - \frac{17\Delta C_x}{100C_x}\right)\left[\sum_{i=1}^{3} b_{i-1}\cdot 2^{3-i} + \left(1 + \frac{8\Delta C_x}{10C_x}\right)\sum_{i=4}^{6}\frac{b_{i-1}\cdot 2^{6-i}}{8}\right]$
（$\Delta C_x = 0$ 时即为理想 6 位输出）。按最坏情况考虑，为避免出现误差，$C_x$ 需要多高的精度（$\pm\Delta C_x/C_x$）？所谓误差，是指对于某个输入码，输出偏离其理想值超过 $\pm\frac12$ LSB（$V_{REF}/128$）。
