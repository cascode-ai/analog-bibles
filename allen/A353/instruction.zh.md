[图 1] 所示电流镜（current mirror）用于电流提升（current boosting）：M1 为二极管连接，M2 通常工作在有源区（即线性区），$V_{ds2}$ 很小，因而 $i_2 = i_1$；当 M2 被驱动进入饱和时，该电流镜提供电流增益。假设 $i_1 = 10$ µA、$W_1/L_1 = 10$，设计该电流镜，使 M2 饱和时输出为 100 µA。求 $W_2/L_2$ 以及 $i_2 = 10$ µA 时的 $V_{DS2}$。

取 $K'_N = 110\ \mu\mathrm{A/V^2}$，$V_{TN} = 0.7$ V，忽略沟道长度调制；饱和时 $i_D = \frac{K'}{2}\frac{W}{L}(v_{GS} - V_T)^2$，有源区中 $i_D = K'\frac{W}{L}\left[(v_{GS} - V_T)v_{DS} - \frac{v_{DS}^2}{2}\right]$。
