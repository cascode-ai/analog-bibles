对于 [图 1] 所示的 CMOS 推挽（push-pull）反相器（两个栅极都由 $v_{in}$ 驱动，漏极相连作为输出；$V_{DD} = 5$ V），假设两个晶体管都处于饱和，推导小信号电压增益表达式

$\dfrac{v_{out}}{v_{in}} = \dfrac{-(g_{m1}+g_{m2})}{g_{ds1}+g_{ds2}} = -\sqrt{\dfrac{2}{I_D}}\left[\dfrac{\sqrt{K'_N(W_1/L_1)} + \sqrt{K'_P(W_2/L_2)}}{\lambda_1 + \lambda_2}\right]$

若 $C_{gd1} = C_{gd2} = 5$ fF，$C_{bd1} = C_{bd2} = 50$ fF，$C_L = 10$ pF，$I_D = 200\ \mu$A，且 $W_1/L_1 = W_2/L_2 = 5$（$L = 1\ \mu$m），求小信号电压增益和 −3 dB 频率。输入由理想电压源驱动。

器件参数：n 沟道 $K'_N = 110\ \mu\mathrm{A/V^2}$，$\lambda_1 = \lambda_N = 0.04\ \mathrm{V^{-1}}$；p 沟道 $K'_P = 50\ \mu\mathrm{A/V^2}$，$\lambda_2 = \lambda_P = 0.05\ \mathrm{V^{-1}}$；饱和区中 $i_D = \frac{K'W}{2L}(v_{GS}-V_T)^2(1+\lambda v_{DS})$。
