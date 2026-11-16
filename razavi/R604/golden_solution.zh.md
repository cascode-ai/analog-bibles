在 I 固定的条件下，随着 W/L 增大：THD 只由三次谐波（third harmonic）构成，并随 W/L 线性上升；输入参考噪声下降，其中晶体管项的功率谱密度（PSD）∝ $(W/L)^{-1/2}$；功耗不变。
- THD ≈ HD3 $= \dfrac{V_m^2}{32V_{ov}^2} = \dfrac{V_m^2\,\mu_nC_{ox}(W/L)}{64\,I} \propto W/L$（没有偶次谐波），其中 $V_{ov} = \sqrt{2I/(\mu_nC_{ox}W/L)}$：一条过原点的直线。
- 噪声 PSD（两个晶体管和两个电阻）：$\overline{V_{n,in}^2} = 8kT\left(\dfrac{2}{3g_m} + \dfrac{1}{g_m^2R_D}\right)$，$g_m = \sqrt{2\mu_nC_{ox}(W/L)I}$：按 $(W/L)^{-1/2}$（晶体管项）到 $(W/L)^{-1}$（电阻项）下降。
- 折中关系：在功耗（$2V_{DD}I$）固定时，通过加宽器件、减小过驱动电压（overdrive voltage）来降低噪声会增大失真；$(\overline{V_{n,in}^2})^2\cdot\mathrm{HD3} \propto 1/I^2$ 与 W/L 无关，因此只有增大电流才能同时改善两者。与采用相同器件和电流的共源级（common-source stage）相比，差分对的失真要低得多，但功耗是其两倍，输入噪声功率也是其两倍。
