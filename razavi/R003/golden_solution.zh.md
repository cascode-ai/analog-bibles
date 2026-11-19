在强反型饱和区，令 $I=|I_D|>0$、$\beta=\mu C_{ox}(W/L)$。由 $g_m\approx\sqrt{2\beta I}$、$r_O\approx1/(\lambda I)$ 得
$$
g_mr_O\approx\frac{\sqrt{2\beta I}}{\lambda I}
=\frac1\lambda\sqrt{\frac{2\mu C_{ox}(W/L)}{I}}
=\frac2{\lambda V_{ov}}.
$$
这里采用平方律偏置电流主项和一阶 CLM 输出电导。代入 $\lambda=\lambda_0L_0/L$，
$$
g_mr_O\approx\frac{L}{\lambda_0L_0}\sqrt{\frac{2\mu C_{ox}W}{LI}}
=\frac{\sqrt{2\mu C_{ox}WL/I}}{\lambda_0L_0}.
$$
各曲线按 $I^{-1/2}$ 下降。同一电流下，$L$ 越大，曲线越高：固定 $W$ 时，$L$ 加倍使增益增大到 $\sqrt2$ 倍；固定 $W/L$ 时则增大到 2 倍。

下图示例固定 $W=50\ \mu\mathrm m$，取 $\mu_nC_{ox}=134\ \mu\mathrm{A/V^2}$，在 $L_0=0.5\ \mu\mathrm m$ 时 $\lambda_0=0.1\ \mathrm{V^{-1}}$：

| $L$ (µm) | $\lambda$ (V⁻¹) | 0.1 mA 处增益 | 0.5 mA 处 | 1 mA 处 |
|---|---|---|---|---|
| 0.5 | 0.100 | 164 | 73.2 | 51.8 |
| 1 | 0.050 | 232 | 104 | 73.2 |
| 2 | 0.025 | 327 | 146 | 104 |

![固定宽度下三种沟道长度的本征增益与漏极电流曲线](/q/R003/solution-curves.zh.svg)

强反型模型不能外推至零电流，也不适用于亚阈值工作区。
