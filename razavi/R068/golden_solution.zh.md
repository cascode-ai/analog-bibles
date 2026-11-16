$V_{in} \approx 1.137$ V（$V_{out} = V_{in} - V_{TH} \approx 0.437$ V，$I_D \approx 1.28$ mA）；$A_v \approx -11.7$。

- 线性区边缘：$V_{out} = V_{in} - V_{TH} = V_{ov}$，且 $V_{out} = V_{DD} - R_D \cdot \tfrac12\beta V_{ov}^2$，其中 $\beta = \mu_nC_{ox}W/L = 13.4\ \mathrm{mA/V^2}$：$13.4V_{ov}^2 + V_{ov} - 3 = 0$ → $V_{ov} = 0.437$ V。
- $g_m = \beta V_{ov} = 5.86$ mS；$A_v = -g_mR_D \approx -11.7$。从线性区一侧得到的值相同，因为线性区的输出电导（output conductance）$\beta(V_{ov} - V_{DS})$ 在边缘处为零。
