在 W/L 固定的条件下，随着 I 增大：THD 由三次谐波（third harmonic）构成，按 $1/I$ 下降；噪声的功率谱密度（PSD）按 $I^{-1/2}$ 下降（晶体管项）；功耗（$2V_{DD}I$）线性上升。
- THD ≈ HD3 $= \dfrac{V_m^2}{32V_{ov}^2} = \dfrac{V_m^2\,\mu_nC_{ox}(W/L)}{64\,I} \propto 1/I$（没有偶次谐波）。
- $\overline{V_{n,in}^2} = 8kT\left(\dfrac{2}{3g_m} + \dfrac{1}{g_m^2R_D}\right)$，$g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$：晶体管项 ∝ $I^{-1/2}$，电阻项 ∝ $I^{-1}$。
- 折中关系：功耗加倍可使 HD3 减半，但只能使晶体管噪声 PSD 降低 √2 倍；在功耗固定时，噪声与线性度通过 W/L、即过驱动电压（overdrive voltage）相互折中。与共源级（common-source stage）相比：失真低得多，且随电流改善得更快，但对于相同的 $g_m$，功耗和噪声功率都是其两倍。
