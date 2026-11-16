在 I 固定的条件下，随着 W/L 增大：过驱动电压（overdrive voltage）$V_{ov} = \sqrt{2I/(\mu_nC_{ox}W/L)}$ 减小，$g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$ 增大，因此 THD 按 $\sqrt{W/L}$ 上升，而输入噪声下降，其中晶体管项的功率谱密度（PSD）∝ $(W/L)^{-1/2}$；功耗不变。
- THD ≈ HD2 $= \dfrac{V_m}{4V_{ov}} = \dfrac{V_m}{4}\sqrt{\dfrac{\mu_nC_{ox}W/L}{2I}} \propto \sqrt{W/L}$：一条从原点开始上升的平方根曲线。
- 输入参考热噪声 PSD：$\overline{V_{n,in}^2} = 4kT\left(\dfrac{2}{3g_m} + \dfrac{1}{g_m^2R_D}\right)$：晶体管项 ∝ $(W/L)^{-1/2}$，电阻项 ∝ $(W/L)^{-1}$；这是一条随 W/L 下降的曲线，晶体管项占主导时，其均方根（rms）值 ∝ $(W/L)^{-1/4}$。
- 折中关系：在给定电流（功耗 $V_{DD}I$）下，通过增大 W/L（减小过驱动电压）来降低噪声会牺牲线性度，反之亦然；乘积 $\overline{V_{n,in}^2}\cdot\mathrm{HD2}$（晶体管项）$= kTV_m/(3I)$ 与 W/L 无关，因此要同时改善两者就需要更大的电流，即更大的功耗。W/L 很大时器件会趋向亚阈值（subthreshold）区，此时两条曲线都趋于平坦：HD2 → $V_m/(4\zeta V_T)$，$g_m \to I/(\zeta V_T)$。
