在线性区（triode region）中接近于零，并向 $V_{DS} = V_{GS} - V_{TH} = 0.5$ V 处的线性区/饱和区（saturation region）边界急剧上升；进入饱和区后为约 40 的平台（若在 $g_m$ 中保留因子 $(1+\lambda V_{DS})$，则平缓上升，在 3 V 时达到 ≈ 52）。

- $\beta = 13.4\ \mathrm{mA/V^2}$，$V_{ov} = 0.5$ V。
- 线性区（$V_{DS} < 0.5$ V）：$g_m = \beta V_{DS}$，$1/r_{ds} = \beta(V_{ov} - V_{DS})$，因此 $g_mr_{ds} = V_{DS}/(0.5 - V_{DS})$：$V_{DS} = 0$ 时为 0，0.1 V 时为 0.25，0.25 V 时为 1.0，0.4 V 时为 4，0.45 V 时为 9。（若线性区方程中取 λ = 0，该式在边界处发散；若在线性区方程中保留因子 $(1+\lambda V_{DS})$，曲线就是连续的，在边界处达到 ≈ 42。）
- 饱和区（$V_{DS} \ge 0.5$ V，$I_D \approx 1.68$ mA）：在简单模型中 $g_mr_O = 2/(\lambda V_{ov}) = 40$，为常数；若取 $g_m = \beta V_{ov}(1+\lambda V_{DS})$ 和 $r_O = 1/(\lambda \cdot \tfrac12\beta V_{ov}^2)$，则为 $40(1 + 0.1V_{DS})$：0.5 V 时为 42，3 V 时为 52。
