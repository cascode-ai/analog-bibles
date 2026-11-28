# 参考答案 - R085

### 器件尺寸

在 $M_1$ 的线性区边界，

$$\beta_1=\mu_nC_{ox}(W/L)_1=5.36\ \mathrm{mA/V^2},\qquad
V_{out}=V_{ov1}=\sqrt{2I_1/\beta_1}\approx0.611\ \mathrm V.$$

由输出节点的电流定律和 PMOS 的二极管接法可得

$$|I_{D2}|=I_1-I_S=0.25\ \mathrm{mA},\qquad
|V_{ov2}|=V_{DD}-V_{out}-|V_{TH2}|\approx1.589\ \mathrm V.$$

$$\left(\frac WL\right)_2=\frac{2|I_{D2}|}{\mu_pC_{ox}|V_{ov2}|^2}\approx5.16.$$

### 小信号增益

理想电流源 $I_S$ 在小信号模型中开路。二极管连接的 $M_2$ 提供 $1/g_{m2}$ 的输出负载。

$$g_{m1}=\frac{2I_1}{V_{ov1}}\approx3.27\ \mathrm{mS},\qquad
g_{m2}=\frac{2|I_{D2}|}{|V_{ov2}|}\approx0.315\ \mathrm{mS},\qquad
A_v=-\frac{g_{m1}}{g_{m2}}\approx-10.4$$

## 评分说明

- +2 分。$(W/L)_2\approx5.2$，且 $A_v\approx-10.4$，各自容差为 ±4%。
- +1 分。其余解答正确，只有一处失误。
- 0 分。一个结果正确，另一个结果因失误而错误。
- −2 分。断言 $M_2$ 流过 1 mA 或 0.75 mA，将边界取为 $V_{out}=V_{TH}$ 或 $V_{out}=V_{in}$，对 $M_2$ 使用 $\mu_nC_{ox}$，或用错误的电流求 $g_{m2}$。
