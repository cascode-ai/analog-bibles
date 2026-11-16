$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right),\qquad \overline{I_{n,in}^2} = 4kT\gamma g_{m2} + g_{m2}^2\cdot 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- 电压（输入短路）：$M_2$ 的电流流入输入信号源，因此不影响输出；结果与简单共源级相同。
- 电流（输入开路）：只有 $M_2$ 和理想的 $I_1$ 接到输入节点，因此 $M_2$ 的电流是确定的：$g_{m2}(V_{out} - V_G) + I_{n2} = 0$，$V_G = V_{out} + I_{n2}/g_{m2}$。结合 $V_{out} = -R_D(g_{m1}V_G + I_{n1}) + R_DI_{n,RD}$ 得：$V_{out}(1 + g_{m1}R_D) = -g_{m1}R_DI_{n2}/g_{m2} - R_DI_{n1} + R_DI_{n,RD}$；对输入电流的跨阻（transimpedance）为 $-g_{m1}R_D/[g_{m2}(1 + g_{m1}R_D)]$。两者相除：$I_{n,eq} = I_{n2} + (g_{m2}/g_{m1})(I_{n1} - I_{n,RD})$。
- 解释：输入阻抗约为 $1/g_{m2}$，因此除 $M_2$ 自身的噪声外，噪声电压还表现为电流 $g_{m2}V_{n,in}$。
