$V_{in} \approx 1.427$ V（$V_{out} \approx 0.677$ V，$I_D \approx 3.53$ mA）；$A_v \approx -1.81$。

- $\beta_1 = 13.4\ \mathrm{mA/V^2}$，$\beta_2 = 2.68\ \mathrm{mA/V^2}$。$M_1$ 处于线性区，$M_2$ 处于饱和区（saturation region）：$\beta_1[(V_{in} - 0.7)V_{out} - V_{out}^2/2] = \tfrac12\beta_2(2.3 - V_{out})^2$，其中 $V_{out} = V_{in} - 0.75$ → 过驱动电压（overdrive voltage）为 0.727 V，$V_{out} = 0.677$ V。
- 小信号参数：$g_{m1} = \beta_1V_{DS1} = 9.08$ mS，$g_{ds1} = \beta_1(0.05\ \mathrm{V}) = 0.67$ mS，$g_{m2} = \beta_2(2.3 - V_{out}) = 4.35$ mS。
- $A_v = -g_{m1}/(g_{m2} + g_{ds1}) \approx -1.81$。
