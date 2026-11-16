取相等的过驱动电压（overdrive voltage）$|V_{ov2}| = |V_{ov3}| \approx 0.363$ V，得到 $(W/L)_2 \approx 56.5$（≈ 28 μm/0.5 μm）和 $(W/L)_3 \approx 197$（≈ 99 μm/0.5 μm）；于是 $g_{m2} = g_{m3} \approx 2.75$ mS，$\overline{I_{n,in}^2} = 4kT\gamma(g_{m2}+g_{m3}) \approx 4kT\gamma\times5.5$ mS（γ = 2/3 时 ≈ 7.8 pA/√Hz）。

- $\overline{I_{n,in}^2} = 4kT\gamma(g_{m2} + g_{m3})$，其中 $g_m = 2I_D/V_{ov}$，因此应使 $1/V_{ov2} + 1/V_{ov3}$ 最小。
- 摆幅：$V_{out,max} = V_{DD} - |V_{ov3}|$；最低的 $V_b$ 使 $M_2$ 处于饱和区边缘（输入节点电压为 $V_{ov2}$），因此 $V_{out,min} = V_b - V_{TH1} = V_{ov2} + V_{ov1}$（计入体效应时，$V_{TH1}$ 项仍然相互抵消）。摆幅 $= V_{DD} - V_{ov1} - V_{ov2} - |V_{ov3}| = 2$ V。
- $V_{ov1} = \sqrt{2(0.5\ \mathrm{m})/(134\ \mu\times100)} = 0.273$ V，因此 $V_{ov2} + |V_{ov3}| = 0.727$ V。和固定时，$1/a + 1/b$ 在 $a = b = 0.363$ V 处取最小值（例如，0.3/0.427 V 得到 5.68 mS，而最优点为 5.50 mS）。
- $(W/L)_2 = 2I_D/(\mu_nC_{ox}V_{ov2}^2) = 56.5$；$(W/L)_3 = 2I_D/(\mu_pC_{ox}V_{ov3}^2) = 197$。若计入 $(1 + \lambda V_{DS})$ 因子，宽度会减小几个百分点（在饱和区边缘的 $V_{DS}$ 下分别 ≈ 54 和 ≈ 184）。
