$(W/L)_1 \approx 3.7\times10^3$（例如 L = 0.5 μm 时，W ≈ 1.87 mm）。

- 输出电阻 $\approx 1/g_{m1} = 100$ Ω → $g_{m1} = 10$ mS。
- $(W/L)_1 = \dfrac{g_{m1}^2}{2\mu_nC_{ox}I_D} = \dfrac{(10^{-2})^2}{2(134\times10^{-6})(10^{-4})} = 3731$。
- 过驱动电压（overdrive voltage）只有 $2I_D/g_{m1} = 20$ mV，因此实际上器件会接近亚阈值（subthreshold）区，平方律估算偏于乐观；若计入体效应（$R_{out} = 1/(g_{m1}+g_{mb1})$），稍小一些的 W/L 就足够了。
