# 参考答案 - R082

## 参考答案

$V_{in} \approx 1.427$ V（$V_{out} \approx 0.677$ V，$I_D \approx 3.53$ mA）；$A_v \approx -1.81$。

- $\beta_1 = 13.4\ \mathrm{mA/V^2}$，$\beta_2 = 2.68\ \mathrm{mA/V^2}$。$M_1$ 处于线性区，$M_2$ 处于饱和区（saturation region）：$\beta_1[(V_{in} - 0.7)V_{out} - V_{out}^2/2] = \tfrac12\beta_2(2.3 - V_{out})^2$，其中 $V_{out} = V_{in} - 0.75$ → 过驱动电压（overdrive voltage）为 0.727 V，$V_{out} = 0.677$ V。
- 小信号参数：$g_{m1} = \beta_1V_{DS1} = 9.08$ mS，$g_{ds1} = \beta_1(0.05\ \mathrm{V}) = 0.67$ mS，$g_{m2} = \beta_2(2.3 - V_{out}) = 4.35$ mS。
- $A_v = -g_{m1}/(g_{m2} + g_{ds1}) \approx -1.81$。

## 评分说明

+2：$V_{in}$ 约为 1.43 V（容差 ±0.01 V），增益约为 −1.81（容差 ±5%），并同时使用线性区 $g_m$ 和 $M_1$ 的输出电导。+1：一个数值有计算小误差。0：输入电压正确但增益仍为边缘饱和值 −2.24，或忽略 $g_{ds1}$ 得到约 −2.09。若明确断言 $M_2$ 处于线性区、直接给边缘输入加 50 mV，或得到绝对值大于边缘增益的结果，则扣 2 分。
