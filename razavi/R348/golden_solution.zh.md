$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{\gamma g_{m2}}{g_{m1}^2} + \frac{1}{g_{m1}^2R_D}\right)$$
$$\overline{I_{n,in}^2} = \frac{4kT}{R_G} + 4kT\gamma g_{m2}\left(1 + \frac{1}{g_{m1}R_G}\right)^2 + \frac{1}{R_G^2}\cdot 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- $M_2$ 从输出端抽取 $g_{m2}V_{out} + I_{n2}$，并把它送到输入节点。
- 电压（输入短路）：$M_2$ 以 $g_{m2}$ 作为输出端的负载，其噪声从输出节点流出：$V_{out}(1/R_D + g_{m2}) = -g_{m1}V_{in} - I_{n1} - I_{n2} + I_{n,RD}$。增益为 $-g_{m1}(R_D\|1/g_{m2})$；折算到输入端的噪声如上式。
- 电流（输入开路）：$V_G = R_G(g_{m2}V_{out} + I_{n2} - I_{n,RG})$，与输出方程联立得 $V_{out}(1/R_D + g_{m2} + g_{m1}g_{m2}R_G) = I_{n,RD} - I_{n1} - (1 + g_{m1}R_G)I_{n2} + g_{m1}R_GI_{n,RG}$；跨阻（transimpedance）为 $-g_{m1}R_G/(1/R_D + g_{m2} + g_{m1}g_{m2}R_G)$。两者相除：$I_{n,eq} = I_{n2}(1 + g_{m1}R_G)/(g_{m1}R_G) - I_{n,RG} + (I_{n1} - I_{n,RD})/(g_{m1}R_G)$。
