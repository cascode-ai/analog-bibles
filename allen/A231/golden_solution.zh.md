$R_{out} = \dfrac{1}{\dfrac{g_{m1}+g_{m2}}{2} + g_{ds1}+g_{ds2} + \dfrac{1}{R_1+R_2}} \approx \dfrac{2}{g_{m1}+g_{m2}}$；计入 $R_L$：$R_{out} \approx \left[\dfrac{2}{g_{m1}+g_{m2}}\right]\Big\|\,R_L$。

- 在 $v_{IN}$ = 0 时于输出端加测试电压 $v_x$：栅极电压为 $v_g = v_xR_1/(R_1+R_2) = v_x/2$。
- 从测试源吸取的电流：$i_x = (g_{m1}+g_{m2})v_g + (g_{ds1}+g_{ds2})v_x + v_x/(R_1+R_2)$（两个共源晶体管都对栅极电压作出响应；反馈电阻构成一条到交流地的通路）。
- 由于 $g_m \gg g_{ds}$ 且 $1/(R_1+R_2)$ 很小，$R_{out} \approx 2/(g_{m1}+g_{m2})$，远小于开环时的 $1/(g_{ds1}+g_{ds2})$；减小的倍数为环路增益（loop gain）≈ $(g_{m1}+g_{m2})/[2(g_{ds1}+g_{ds2})]$。
- $R_L$ 只是并联在输出节点上：在分母中加上 $1/R_L$。
