$I_D = 2K'\dfrac{W}{L}\left(n\dfrac{kT}{q}\right)^2$。

- 弱反型：$g_m = I_D/(nkT/q)$。强反型（饱和区）：$g_m = \sqrt{2K'(W/L)I_D}$。
- 令两者相等：$I_D/(nkT/q) = \sqrt{2K'(W/L)I_D}$ → $I_D = 2K'(W/L)(nkT/q)^2$。
- 在此电流下，强反型的过驱动电压（overdrive voltage）为 $V_{GS} - V_T = \sqrt{2I_D/(K'W/L)} = 2nkT/q$（n = 1.5 时 ≈ 78 mV）。低于此电流时，平方律给出的 $g_m$ 会超过弱反型的值，而后者是物理上限，因此在该区域应使用指数模型。
- 例：$K'$ = 110 µA/V²，W/L = 1，n = 1.5，T = 300 K → $I_D$ = 2 × 110 µA/V² × (38.8 mV)² ≈ 0.33 µA。
