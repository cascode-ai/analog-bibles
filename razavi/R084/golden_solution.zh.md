$V_{in} \approx 1.387$ V（$V_{out} \approx 0.637$ V，$V_{TH2} \approx 0.831$ V，$I_D \approx 3.15$ mA）；$A_v \approx -1.55$。

- $\beta_1[(V_{in} - 0.7)V_{out} - V_{out}^2/2] = \tfrac12\beta_2(3 - V_{out} - V_{TH2})^2$，$V_{out} = V_{in} - 0.75$，$V_{TH2} = 0.7 + 0.45(\sqrt{0.9+V_{out}} - \sqrt{0.9})$ → $M_1$ 的过驱动电压（overdrive voltage）为 0.687 V，$V_{out} = 0.637$ V。
- $g_{m1} = \beta_1V_{out} = 8.54$ mS，$g_{ds1} = 0.67$ mS，$g_{m2} = \beta_2(3 - V_{out} - V_{TH2}) = 4.11$ mS，$\eta = 0.181$（$g_{mb2} = 0.745$ mS）。
- $A_v = -g_{m1}/(g_{m2} + g_{mb2} + g_{ds1}) \approx -1.55$。
