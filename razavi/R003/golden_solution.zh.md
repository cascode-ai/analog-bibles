$g_m r_O = \dfrac{\sqrt{2\mu_nC_{ox}(W/L)I_D}}{\lambda I_D} = \dfrac{1}{\lambda}\sqrt{\dfrac{2\mu_nC_{ox}(W/L)}{I_D}}$（等价地，$2/[\lambda(V_{GS}-V_{TH})]$）。代入 $\lambda = \lambda_0 L_0/L$ 得：$g_m r_O = \dfrac{\sqrt{2\mu_nC_{ox}WL/I_D}}{\lambda_0 L_0}$。

曲线：对每个 L，曲线都按 $1/\sqrt{I_D}$ 下降（小电流时很大，大电流时趋于平坦）。L 越长，曲线越高：W 固定时 $g_m r_O \propto \sqrt{L}$（L 加倍使其增大到 √2 倍），W/L 固定时 $\propto L$（L 加倍使其加倍）。

示例（W = 50 µm，λ = 0.1 V⁻¹ × 0.5 µm / L）：L = 0.5 µm 时，$I_D$ = 0.1、0.5、1 mA 对应 164、73、52；L = 1 µm 时为 232、104、73；L = 2 µm 时为 327、146、104。

可选说明：电流很小时，$1/\sqrt{I_D}$ 的上升会停止，因为此时器件进入亚阈值区（subthreshold），$g_m r_O \to 1/(\lambda\zeta V_T)$ 变为常数。
