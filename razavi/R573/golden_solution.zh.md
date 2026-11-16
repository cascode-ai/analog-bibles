$t \approx 1.70$ ns。

- 栅极和漏极都处于 $V_{DD}$，因此 $M_1$ 饱和：$C_H\,dV_{out}/dt = \tfrac12\beta(V_{DD} - V_{out} - V_{TH})^2$，其中 $\beta = 5.36$ mA/V²。
- 从 $V_{out}(0) = 0$ 开始积分：$V_{out} = V_{DD} - V_{TH} - \dfrac{1}{\dfrac{\beta}{2C_H}t + \dfrac{1}{V_{DD} - V_{TH}}}$，它只能渐近地趋近 2.3 V。
- $\beta/(2C_H) = 2.68 \times 10^9\ \mathrm{V^{-1}s^{-1}}$。当 $V_{out} = 2.1$ V 时剩余的过驱动电压（overdrive voltage）为 0.2 V，因此 $2.68\times10^9\,t = 1/0.2 - 1/2.3 = 4.565\ \mathrm{V^{-1}}$，$t = 1.70$ ns。
- （若考虑体效应，γ = 0.45 V^½，输出不能超过 ≈ 1.97 V，因此永远达不到 2.1 V；题目排除了这种情况。）
