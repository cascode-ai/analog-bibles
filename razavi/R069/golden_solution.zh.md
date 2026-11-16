$V_{in} \approx 1.144$ V（$V_{out} \approx 0.394$ V，$I_D \approx 1.30$ mA）；$A_v \approx -4.5$。

- 线性区：$V_{out} = V_{DD} - R_D\beta[(V_{in}-V_{TH})V_{out} - V_{out}^2/2]$，其中 $V_{out} = V_{in} - V_{TH} - 0.05$ V，$\beta = 13.4\ \mathrm{mA/V^2}$ → 过驱动电压（overdrive voltage）为 0.444 V，$V_{out} = 0.394$ V。
- 线性区的小信号参数：$g_m = \beta V_{DS} = 5.28$ mS，输出电导（output conductance）$g_{ds} = \beta(V_{ov} - V_{DS}) = 13.4\ \mathrm{mA/V^2} \times 0.05\ \mathrm{V} = 0.67$ mS。
- $A_v = -g_m(R_D \| 1/g_{ds}) = -5.28/(0.67 + 0.5) \approx -4.5$。输入只比边缘值高 ≈ 7 mV，增益就降低了一半以上。
