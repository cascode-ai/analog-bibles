$V_{in} \approx 1.25$ V（$V_{out} = V_{in} - V_{TH} \approx 0.55$ V，$I_D \approx 0.82$ mA）；$A_v \approx -g_{m1}(r_{O1}\|r_{O2}) \approx -12$。

- 随着 $V_{in}$ 升高，$V_{out}$ 下降。$M_2$ 的 $V_{SG} = 3$ V，过驱动电压（overdrive voltage）为 2.2 V，它在 $V_{out} \le 0.8$ V 时进入饱和区（saturation region）；此时 $M_1$ 的过驱动电压只有 ≈ 0.55 V，因此 $M_2$ 进入饱和区早于 $M_1$ 到达线性区边缘。
- 两管都饱和时（偏置计算取 λ = 0），电流被钳定在 $M_2$ 的饱和电流 $\tfrac12(38.4\ \mu)(8.8)(2.2)^2 = 0.818$ mA，这就确定了 $V_{in} = 0.7 + \sqrt{2(0.818\ \mathrm{mA})/(5.36\ \mathrm{mA/V^2})} = 1.252$ V；在这一输入下，$V_{out}$ 从 0.8 V 下降（λ = 0 时为垂直下降）到 $V_{ov1} = 0.552$ V，此时 $M_1$ 到达线性区边缘。（λ 为有限值时，这两点对应的输入只相差 ≈ 20 mV。）
- 该点的增益（两管均饱和）：$g_{m1} = \sqrt{2(5.36\ \mathrm{mA/V^2})(0.818\ \mathrm{mA})} = 2.96$ mS，$r_{O1} = 12.2$ kΩ，$r_{O2} = 6.1$ kΩ → $A_v = -2.96\ \mathrm{mS} \times 4.08\ \mathrm{k\Omega} \approx -12.1$（若 λ = 0 则为无穷大）。
