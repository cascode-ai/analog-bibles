## 参考答案

小信号增益为
$$A_v=-g_{m1}(r_{O1}\parallel r_{O2})\approx-48.8.$$

- $g_{m1}=\sqrt{2\mu_nC_{ox}(W/L)_1 I_D}\approx3.66\ \mathrm{mS}$。
- 由于 $\lambda\propto1/L$，$M_1$ 的 $\lambda_1=0.1\ \mathrm{V^{-1}}$，2 $\mu\mathrm{m}$ 长 PMOS 的 $\lambda_2=0.05\ \mathrm{V^{-1}}$。
- $r_{O1}\approx1/(\lambda_1 I_D)=20\ \mathrm{k\Omega}$，$r_{O2}=40\ \mathrm{k\Omega}$，且 $r_{O1}\parallel r_{O2}\approx13.33\ \mathrm{k\Omega}$。
- 因此 $A_v=-(3.66\ \mathrm{mS})(13.33\ \mathrm{k\Omega})\approx-48.8$。

## 评分说明

- +2：增益为 $-48.8$，容差 ±3%，且按 2 μm 的沟道长度将 $\lambda_2$ 缩放为 $0.05\ \mathrm{V^{-1}}$。
- +1：方法正确，有一处算术错误。
- 0：正确写出 $-g_{m1}(r_{O1}\parallel r_{O2})$，但有多处算术错误。
- −2（明确作为结论）：未按 2 μm 的长度缩放 $\lambda_2$（得到约 −24.4），误用 PMOS 的跨导，只计入一个输出电阻，或得出正增益。
