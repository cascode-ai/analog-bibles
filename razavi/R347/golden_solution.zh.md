$$\overline{V_{n,in}^2} = 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right),\qquad \overline{I_{n,in}^2} = \frac{4kT}{R_G} + 4kT\gamma g_{m2} + \frac{1}{R_G^2}\cdot 4kT\left(\frac{\gamma}{g_{m1}} + \frac{1}{g_{m1}^2R_D}\right)$$

- 电压（输入短路）：$R_G$ 和 $M_2$ 只是向理想输入源注入电流，因此结果与简单共源级相同。
- 电流（输入开路）：在输入节点，$-g_{m2}V_{out} + I_{n2} = V_G/R_G + I_{n,RG}$；结合 $V_{out} = -R_D(g_{m1}V_G + I_{n1}) + R_DI_{n,RD}$，得到 $V_{out}(1 - g_{m1}g_{m2}R_DR_G) = -g_{m1}R_DR_G(I_{n2} - I_{n,RG}) - R_DI_{n1} + R_DI_{n,RD}$，而对输入电流的跨阻（transimpedance）为 $-g_{m1}R_DR_G/(1 - g_{m1}g_{m2}R_DR_G)$。两者相除：$I_{n,eq} = I_{n2} - I_{n,RG} + (I_{n1} - I_{n,RD})/(g_{m1}R_G)$。
- 经 $M_2$ 的环路是正反馈；它改变增益，但不改变输入参考噪声。
