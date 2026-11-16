在 W/L 固定的条件下，随着 I 增大：$V_{ov} \propto \sqrt I$，$g_m \propto \sqrt I$，因此 THD 按 $I^{-1/2}$ 下降，噪声的功率谱密度（PSD）按 $I^{-1/2}$ 下降（晶体管项），而功耗随 I 线性上升。
- THD ≈ HD2 $= \dfrac{V_m}{4V_{ov}} = \dfrac{V_m}{4}\sqrt{\dfrac{\mu_nC_{ox}W/L}{2I}} \propto I^{-1/2}$。
- $\overline{V_{n,in}^2} = 4kT\left(\dfrac{2}{3g_m} + \dfrac{1}{g_m^2R_D}\right)$，其中 $g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$：晶体管项 ∝ $I^{-1/2}$，电阻项 ∝ $I^{-1}$。
- 功耗 $P = V_{DD}I$ 线性上升。
- 折中关系：线性度和噪声都随电流增大而改善，但改善得很慢：使 HD2 减半（或使晶体管噪声 PSD 减半）需要付出 4× 的功耗。在功耗固定时，噪声与线性度只能通过 W/L 相互折中。（在 $R_D$ 固定时，更大的 I 还会降低漏极偏置电压 $V_{DD} - IR_D$，最终在晶体管退出饱和区之前限制摆幅。）
