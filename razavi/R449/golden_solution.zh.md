$\tau = \dfrac{R_{out}\,C_1C_2/(C_1+C_2)}{1 + A_vC_1/(C_1+C_2)} \approx 91$ ps；当环路增益（loop gain）很大时，≈ $C_2/g_{m1}$ = 97 ps。

- 运放：$A_v = g_{m1}(r_{O2}\|r_{O4})$，$R_{out} = r_{O2}\|r_{O4}$。每侧 0.5 mA：$g_{m1} = \sqrt{2(134\ \mu)(200)(0.5\ \mathrm{m})} = 5.18$ mS；$r_{O2} = 20$ kΩ，$r_{O4} = 10$ kΩ → $R_{out} = 6.67$ kΩ，$A_v = 34.5$。
- 输出端驱动串联组合 $C_1C_2/(C_1+C_2) = 0.25$ pF，反馈系数（feedback factor）为 $\beta = C_1/(C_1+C_2) = 0.5$。
- $V_{out}/V_{in} = \dfrac{A_v}{1+\beta A_v}\cdot\dfrac{1}{1 + s\tau}$，其中 $\tau = R_{out}(0.25\ \mathrm{pF})/(1 + 0.5 \times 34.5) = 1.667\ \mathrm{ns}/18.3 = 91$ ps。
- 阶跃响应：$V_{out}(t) = \dfrac{A_v}{1+\beta A_v}V_0(1 - e^{-t/\tau})$，最终建立到 ≈ 1.89 $V_0$。
