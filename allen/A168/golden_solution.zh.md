沟道长度调制只对饱和器件 M3 有影响；在非饱和区，简单模型中没有 λ 项（而且 $v_{DS1}$、$v_{DS2}$ 本来就很小）。由 $v_{SD3} = V_{DD} - v_{OUT}$：

$v_{OUT}(\min) = \dfrac{\beta_3}{2\beta_2}(V_{DD}-V_{GG3}-|V_{T3}|)^2\left(\dfrac{1}{V_{GG2}-V_{T2}} + \dfrac{1}{V_{DD}-V_{T1}}\right)\left[1+\lambda_3(V_{DD}-v_{OUT}(\min))\right] \approx A\,(1+\lambda_3V_{DD})$，

其中 $A$ 为 λ = 0 时的结果。精确求解该线性方程：$v_{OUT}(\min) = A(1+\lambda_3V_{DD})/(1+\lambda_3A)$。

- 推导：串联电流现在为 $I = \frac{\beta_3}{2}(V_{DD}-V_{GG3}-|V_{T3}|)^2[1+\lambda_3(V_{DD}-v_{OUT})]$；与前面相同，$v_{OUT} = v_{DS1}+v_{DS2} = I[1/(\beta_1(V_{DD}-V_{T1})) + 1/(\beta_2(V_{GG2}-V_{T2}))]$。
- 影响：由于几乎全部 $V_{DD}$ 都加在 M3 上，流过它的电流增大到 $(1+\lambda_3V_{DD})$ 倍，因此 $v_{OUT}(\min)$ 也增大同样的倍数（例如 $\lambda_3$ = 0.05 V⁻¹、$V_{DD}$ = 5 V 时为 ×1.25）。
