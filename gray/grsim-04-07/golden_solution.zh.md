一种设计：$V_{ov} = 0.1$ V；$L_{\text{eff}} \approx 0.32$ µm（$L_{\text{drwn}} \approx 0.50$ µm）；$M_1$、$M_2$、$M_3$、$M_5$、$M_6$ 的 $W/L_{\text{eff}} \approx 51.5$（$W \approx 16.2$ µm）；$M_4$ 取 $(W/L)/4$（$W_4 \approx 4.1$ µm）；总栅面积 ≈ 5.25 × 16.2 × 0.50 ≈ 42 µm²。

- $M_4$ 的 W/L 取四分之一时，$V_{GS4} = V_t + 2V_{ov}$，$M_5$ 的栅极电位为 $2V_t + 3V_{ov}$，$M_2$ 的栅极电位为 $V_t + 2V_{ov}$，因此 $V_{DS1} = V_{ov}$，$V_{OUT(\min)} = 2V_{ov}$ → 由 (i) 得 $V_{ov} \le 0.1$ V。
- (iii)：$R_o \ge 1\ \mathrm{V}/(0.0002\times50\ \mu\mathrm{A}) = 100$ MΩ。取 $V_{ov}$ = 0.1 V 时，$g_m = 2I/V_{ov} = 1$ mS，$r_o = L_{\text{eff}}/(0.02\ \mu\mathrm{m/V}\times50\ \mu\mathrm{A}) = (L_{\text{eff}}/1\ \mu\mathrm{m})\times1$ MΩ；$R_o = r_o(2 + g_mr_o) \ge 100$ MΩ → $L_{\text{eff}} \ge 0.315$ µm。
- 面积 ∝ $L^2/V_{ov}^2$，因此取最大的 $V_{ov}$（0.1 V）和最短的 $L$：$W/L_{\text{eff}} = 2I/(k'V_{ov}^2) = 51.5$。
- $V_{DS1} = V_{ov}$ 使 $M_1$ 恰好处于饱和边缘；实际设计中应使 $M_4$ 略小于 $(W/L)/4$ 以留出裕量。

预期仿真结果：$I_{OUT}$ ≈ 50 µA（视 λ 效应不同偏差几个百分点），在 $V_{OUT}$ ≈ 0.2 V 以上基本平坦，斜率 ≤ 0.01 µA/V（≈ 100 MΩ）；低于 0.2 V 时电流降向零。
