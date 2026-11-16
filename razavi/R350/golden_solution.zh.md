$$\overline{V_{n,in}^2} = 4kT\gamma\left(\frac{1}{g_{m1}} + \frac{g_{m2}}{g_{m1}^2}\right),\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_G} + \frac{4kT\gamma}{g_{m1}R_G^2} + 4kT\gamma g_{m2}\left(1 - \frac{1}{g_{m1}R_G}\right)^2$$

- 输出节点（$I_1$ 为理想电流源）：$g_{m1}(V_G - V_{out}) + I_{n1} - g_{m2}V_{out} + I_{n2} = 0$，因此 $V_{out} = \dfrac{g_{m1}V_G + I_{n1} + I_{n2}}{g_{m1} + g_{m2}}$。
- 电压（输入由信号源驱动）：增益为 $g_{m1}/(g_{m1}+g_{m2})$；$M_2$ 相当于跟随器的电流源负载。$R_G$ 只是输入信号源的负载。
- 电流（输入开路）：$V_G = R_G(I_{n,RG} + g_{m2}V_{out} - I_{n2})$，由此得 $V_{out}(g_{m1} + g_{m2} - g_{m1}g_{m2}R_G) = g_{m1}R_GI_{n,RG} + I_{n1} + (1 - g_{m1}R_G)I_{n2}$；跨阻（transimpedance）为 $g_{m1}R_G/(g_{m1} + g_{m2} - g_{m1}g_{m2}R_G)$。两者相除：$I_{n,eq} = I_{n,RG} + I_{n1}/(g_{m1}R_G) + I_{n2}(1 - g_{m1}R_G)/(g_{m1}R_G)$。
