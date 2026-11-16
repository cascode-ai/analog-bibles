$A_v \approx -6.0$，$R_{out} \approx 0.62\ \mathrm{k\Omega}$（若在偏置中计入 λ，则为 0.50 kΩ）。理想值 $-R_2/R_1 = -10$ 相差甚远，因为环路增益（loop gain）只有 ≈ 1.5。

- 偏置：$R_1$、$R_2$ 中没有直流电流，因此反相器偏置在 $V_M = 1.223$ V，$I_D = 1.83$ mA：$G_m = g_{m1}+g_{m2} = 10.76$ mS，$R_0 = r_{O1}\|r_{O2} = 1.82\ \mathrm{k\Omega}$，开环增益（open-loop gain）为 19.6。
- 电压并联反馈（shunt–shunt feedback），输入用诺顿电流（Norton current）$V_{in}/R_1$ 表示：计入负载效应的开环跨阻（transimpedance）为 $-(R_1\|R_2)G_m(R_0\|R_2) = -0.909\ \mathrm{k\Omega} \times 10.76\ \mathrm{mS} \times 1.54\ \mathrm{k\Omega} = -15.0\ \mathrm{k\Omega}$；反馈系数（feedback factor）为 $-1/R_2$；环路增益为 1.50；闭环跨阻为 −6.0 kΩ → $A_v = -6.0\ \mathrm{k\Omega}/R_1 = -6.0$（精确节点分析：−5.99）。
- $R_{out} = (R_0\|R_2)/(1 + 1.50) = 0.61\ \mathrm{k\Omega}$；精确值 $1/[1/R_0 + (1-\alpha)/R_2 + \alpha G_m]$（其中 $\alpha = R_1/(R_1+R_2) = 1/11$）为 618 Ω。
