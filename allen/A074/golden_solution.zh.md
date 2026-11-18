$v_{out}(t_1) \approx 1.42$ V（误差 ≈ 0.58 V，低于 2.0 V 输入）。

- 下降沿到来之前，$C_1$ 已充电到 $V_S = 2.0$ V，因此 $V_{SB} = 2$ V，$V_T = 0.7 + 0.4(\sqrt{2.7} - \sqrt{0.7}) = 1.023$ V。
- $U = 5\ \mathrm{V}/10\ \mathrm{ns} = 5\times10^8$ V/s，$\beta = 110\ \mu \times 5 = 550\ \mu\mathrm{A/V^2}$，$C_{channel} = 5\ \mu\mathrm{m}\times1\ \mu\mathrm{m}\times24.7\times10^{-4} = 12.35$ fF。
- （慢速区条件检验：$V_{HT} = 5 - 2 - 1.023 = 1.977$ V，$\beta V_{HT}^2/(2C_L) = 3.6\times10^{10}$ V/s ≫ $U$。）
- 第一项：$\dfrac{5 + 6.175}{30}\sqrt{\dfrac{\pi \times 5\times10^8 \times 30\times10^{-15}}{2 \times 550\times10^{-6}}} = 0.3725 \times 0.207 = 0.077$ V。
- 第二项（M1 关断后经交叠电容的馈通，栅极从 $V_S + V_T$ 摆动到 0）：$\dfrac{5}{30}(2 + 1.023 - 0) = 0.504$ V。
- $V_{error} = 0.581$ V，因此 $v_{out}(t_1) = 2.0 - 0.581 = 1.419$ V。误差之所以大，是因为交叠电容（5 fF）达到了 $C_1$ 的六分之一。
